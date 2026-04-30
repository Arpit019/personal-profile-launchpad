import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogConfigs = [
  { id: "LOG_001", keyword: "artificial-intelligence,abstract" },
  { id: "LOG_002", keyword: "server,casino" },
  { id: "LOG_003", keyword: "hospital,technology" },
  { id: "LOG_004", keyword: "code,data" },
  { id: "LOG_005", keyword: "analytics,graph" },
  { id: "LOG_006", keyword: "prototype,design" },
  { id: "LOG_007", keyword: "videogame,ui" },
  { id: "LOG_008", keyword: "robot,circuit" },
  { id: "LOG_009", keyword: "teamwork,neon" },
  { id: "LOG_010", keyword: "research,data" },
  { id: "LOG_011", keyword: "factory,abandoned" },
  { id: "LOG_012", keyword: "welcome,door" },
  { id: "LOG_013", keyword: "cloud,network" },
  { id: "LOG_014", keyword: "justice,scale" },
  { id: "LOG_015", keyword: "stop,red" },
  { id: "LOG_016", keyword: "growth,plant" },
  { id: "LOG_017", keyword: "debt,tangled" },
  { id: "LOG_018", keyword: "voice,soundwave" },
  { id: "LOG_019", keyword: "wheelchair,accessibility" },
  { id: "LOG_020", keyword: "money,chart" },
  { id: "LOG_021", keyword: "hardware,cpu" },
  { id: "LOG_022", keyword: "operations,gears" },
  { id: "LOG_023", keyword: "finance,digital" },
  { id: "LOG_024", keyword: "chaos,storm" },
  { id: "LOG_025", keyword: "privacy,lock" },
  { id: "LOG_026", keyword: "platform,architecture" },
  { id: "LOG_027", keyword: "stairs,levels" },
  { id: "LOG_028", keyword: "remote,laptop" },
  { id: "LOG_029", keyword: "split,crossroads" },
  { id: "LOG_030", keyword: "search,magnifying" },
  { id: "LOG_031", keyword: "emotion,face" },
  { id: "LOG_032", keyword: "crossroads,construction" },
  { id: "LOG_033", keyword: "crisis,fire" }
];

const filePath = path.join(__dirname, 'src', 'data', 'blogData.ts');
let fileContent = fs.readFileSync(filePath, 'utf-8');

blogConfigs.forEach(config => {
  // Regex to find the object with this ID and replace its imageUrl
  // This is a bit tricky with regex, instead let's just do a naive string replace since we know the structure.
  // Actually, we can use a regex that looks for the id, then replaces the NEXT imageUrl it finds.
  const regex = new RegExp(`(id:\\s*"${config.id}"[\\s\\S]*?imageUrl:\\s*")([^"]+)(")`, 'g');
  fileContent = fileContent.replace(regex, `$1https://images.unsplash.com/featured/?${config.keyword}$3`);
});

fs.writeFileSync(filePath, fileContent);
console.log('Updated blogData.ts image URLs successfully.');
