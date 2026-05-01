const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  page.on('console', msg => console.log(`BROWSER CONSOLE [${msg.type()}]: ${msg.text()}`));
  page.on('pageerror', error => console.log(`BROWSER ERROR: ${error.message}`));
  page.on('requestfailed', request => console.log(`REQUEST FAILED: ${request.url()} - ${request.failure()?.errorText}`));

  console.log('Navigating to local dev server...');
  try {
    await page.goto('http://localhost:8083/personal-profile-launchpad/', { waitUntil: 'networkidle', timeout: 15000 });
  } catch (e) {
    console.log('Goto error (could be timeout):', e.message);
  }

  console.log('Waiting 5 seconds to catch any delayed errors...');
  await page.waitForTimeout(5000);
  
  await browser.close();
})();
