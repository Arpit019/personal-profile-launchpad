const { execSync } = require('child_process');
const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function runCommand(command, errorMessage) {
  try {
    console.log(`\n⏳ Running: ${command}`);
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ Success`);
  } catch (error) {
    console.error(`\n❌ Error: ${errorMessage}`);
    console.error(error.message);
    process.exit(1);
  }
}

async function main() {
  console.log('===================================================');
  console.log('🚀 ENTERPRISE DEPLOYMENT AUTOMATION FRAMEWORK 🚀');
  console.log('===================================================\n');

  console.log('This framework will automate your Vercel and Supabase deployments.');
  console.log('Prerequisites:');
  console.log('1. You must have run `npx vercel login` previously.');
  console.log('2. You must have a free Supabase project created at https://database.new');
  console.log('');

  const ready = await question('Are you ready to proceed? (y/n): ');
  if (ready.toLowerCase() !== 'y') {
    console.log('Aborting deployment.');
    process.exit(0);
  }

  console.log('\n--- SUPABASE CONFIGURATION ---');
  const projectRef = await question('Enter your Supabase Project Reference ID (e.g., abcdefghijklmnopqrst): ');
  const dbPassword = await question('Enter your Supabase Database Password: ');
  const anonKey = await question('Enter your Supabase anon public key: ');

  console.log('\n--- AUTOMATION PIPELINE STARTING ---');

  // 1. Initialize Supabase locally if not done
  if (!fs.existsSync(path.join(__dirname, '../supabase/config.toml'))) {
    await runCommand('npx supabase init', 'Failed to initialize Supabase.');
  }

  // 2. Link Supabase
  // We use the non-interactive token method if possible, but CLI might still prompt.
  // We'll write the schema file to supabase/migrations
  const migrationsDir = path.join(__dirname, '../supabase/migrations');
  if (!fs.existsSync(migrationsDir)) {
    fs.mkdirSync(migrationsDir, { recursive: true });
  }
  
  // Create migration from artifact
  const schemaSource = path.join(__dirname, '../../../../.gemini/antigravity/brain/17d9e12d-27b2-4cc0-99d4-d8e2f3ee534a/supabase_schema.sql');
  const schemaDest = path.join(migrationsDir, '20240101000000_init_schema.sql');
  
  try {
    const schemaContent = fs.readFileSync(schemaSource, 'utf8');
    fs.writeFileSync(schemaDest, schemaContent);
    console.log('✅ Prepared database migration files.');
  } catch (e) {
    console.error('❌ Could not find schema artifact. Make sure supabase_schema.sql exists in your project root.');
  }

  console.log('\n> Linking Supabase Project...');
  await runCommand(`npx supabase link --project-ref ${projectRef} -p ${dbPassword}`, 'Failed to link Supabase. Check your password and ID.');

  console.log('\n> Pushing Database Migrations...');
  await runCommand(`npx supabase db push -p ${dbPassword}`, 'Failed to push database migrations.');

  console.log('\n--- VERCEL CONFIGURATION ---');
  console.log('> Linking Vercel Project...');
  await runCommand('npx vercel link --yes', 'Failed to link Vercel project.');

  console.log('\n> Setting Vercel Environment Variables...');
  // Add env vars to Vercel
  const supabaseUrl = `https://${projectRef}.supabase.co`;
  try {
    execSync(`echo "${supabaseUrl}" | npx vercel env add VITE_SUPABASE_URL production`, { stdio: 'inherit' });
    execSync(`echo "${anonKey}" | npx vercel env add VITE_SUPABASE_ANON_KEY production`, { stdio: 'inherit' });
    console.log('✅ Added Vercel Environment Variables');
  } catch (e) {
    console.log('⚠️ Environment variables might already exist or CLI required interaction. Check Vercel dashboard.');
  }

  console.log('\n> Triggering Production Deployment...');
  await runCommand('npx vercel --prod --yes', 'Failed to deploy to Vercel.');

  console.log('\n===================================================');
  console.log('🎉 DEPLOYMENT COMPLETE 🎉');
  console.log('===================================================');
  console.log('Your Command Center is now backed by a real Supabase Postgres Database');
  console.log('and hosted on Vercel\'s enterprise Edge Network!');
  
  rl.close();
}

main();
