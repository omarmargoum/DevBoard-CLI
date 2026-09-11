/*console.log("DevBoard Démarre");
const applicationName: string = "DevBoard CLI";

console.log(`${applicationName} démarre`);*/
/*const developerName: string = "Omar Margoum";
const city: string = "Verviers";
let experienceYears: number = 20;
let available: boolean = true;
let weeklyHours: number = 12;

console.log(`Nom du développeur : ${developerName}`);
console.log(`Ville : ${city}`);
console.log(`Expérience : ${experienceYears} ans`);
console.log(`Disponible : ${available}`);
console.log(`Charge disponible : ${weeklyHours} heures par semaine`);*/
/*const developerName: string = "Omar Margoum";
const city: string = "Verviers";

const currentYear: number = 2026;
let startYear: number = 2024;
const experienceYears: number = currentYear - startYear;

let available: boolean = true;
let weeklyHours: number = 12;

console.log("=== DEVBOARD CLI ===");
console.log(`Nom          : ${developerName}`);
console.log(`Ville        : ${city}`);
console.log(`Expérience   : ${experienceYears} ans`);
console.log(`Disponible   : ${available ? "oui" : "non"}`);
console.log(`Charge       : ${weeklyHours} h/semaine`);
console.log("====================");*/
/* const developerName: string = "Omar Margoum";
const city: string = "Verviers";

const currentYear: number = 2026;
let startYear: number = 2024;

const experienceYears: number = currentYear - startYear;
let available: boolean = true;
let weeklyHours: number = 12;

const technologies: string[] = [
  "TypeScript",
  "Node.js",
  "Git"
];

technologies.push("PostgreSQL");

console.log("=== DEVBOARD CLI ===");
console.log(`Nom         : ${developerName}`);
console.log(`Ville       : ${city}`);
console.log(`Expérience  : ${experienceYears} ans`);
console.log(`Disponible  : ${available ? "oui" : "non"}`);
console.log(`Charge      : ${weeklyHours} h/semaine`);

console.log("");
console.log(`Technologies (${technologies.length}) :`);

for (const technology of technologies) {
  console.log(`- ${technology}`);
}

console.log("");
console.log(`Technos : ${technologies.join(", ")}`); */
interface DevProfile {
  name: string;
  city: string;
  experienceYears: number;
  available: boolean;
  weeklyHours: number;
  technologies: string[];
}

const currentYear: number = 2026;
const startYear: number = 2024;

const experienceYears: number = currentYear - startYear;

const technologies: string[] = [
  "TypeScript",
  "Node.js",
  "Git"
];

technologies.push("PostgreSQL");

const profile: DevProfile = {
  name: "Omar Margoum",
  city: "Verviers",
  experienceYears,
  available: true,
  weeklyHours: 12,
  technologies
};

console.log("=== DEVBOARD CLI ===");
console.log(`Nom         : ${profile.name}`);
console.log(`Ville       : ${profile.city}`);
console.log(`Expérience  : ${profile.experienceYears} ans`);
console.log(`Disponible  : ${profile.available ? "oui" : "non"}`);
console.log(`Charge      : ${profile.weeklyHours} h/semaine`);
console.log(`Technos     : ${profile.technologies.join(", ")}`);
console.log("====================");