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
/* interface DevProfile {
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
console.log("===================="); */
/* interface DevProfile {
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
console.log("===================="); */
interface DevProfile {
  name: string;
  city: string;
  experienceYears: number;
  available: boolean;
  weeklyHours: number;
  technologies: string[];
  favoriteEditor?: string;
}

function getAvailabilityStatus(profile: DevProfile): string {
  if (profile.available && profile.weeklyHours >= 8) {
    return "DISPONIBLE";
  }

  return "INDISPONIBLE";
}

function computeProfileScore(profile: DevProfile): number {
  const experienceScore: number = profile.experienceYears * 10;
  const technologyScore: number = profile.technologies.length * 8;
  const availabilityScore: number = profile.weeklyHours * 2;

  const totalScore: number =
    experienceScore +
    technologyScore +
    availabilityScore;

  return Math.min(totalScore, 100);
}

class Developer {
  name: string;
  city: string;
  experienceYears: number;
  available: boolean;
  weeklyHours: number;
  technologies: string[];
  favoriteEditor: string;

  constructor(
    name: string,
    city: string,
    experienceYears: number,
    available: boolean,
    weeklyHours: number,
    technologies: string[],
    favoriteEditor: string
  ) {
    this.name = name;
    this.city = city;
    this.experienceYears = experienceYears;
    this.available = available;
    this.weeklyHours = weeklyHours;
    this.technologies = technologies;
    this.favoriteEditor = favoriteEditor;
  }

  getStatus(): string {
    return getAvailabilityStatus(this);
  }

  getScore(): number {
    return computeProfileScore(this);
  }

  printSummary(): void {
    console.log("=== DEVBOARD CLI ===");
    console.log(`Nom         : ${this.name}`);
    console.log(`Ville       : ${this.city}`);
    console.log(`Expérience  : ${this.experienceYears} ans`);
    console.log(`Disponible  : ${this.available ? "oui" : "non"}`);
    console.log(`Technos     : ${this.technologies.join(", ")}`);
    console.log(`Charge      : ${this.weeklyHours} h/semaine`);
    console.log(`Statut      : ${this.getStatus()}`);
    console.log(`Score       : ${this.getScore()}/100`);
    console.log(
      `Éditeur     : ${this.favoriteEditor ?? "non renseigné"}`
    );
    console.log("====================");
  }
}

const currentYear: number = 2026;
const startYear: number = 2024;
const experienceYears: number = currentYear - startYear;

const developer: Developer = new Developer(
  "Omar Margoum",
  "Verviers",
  experienceYears,
  true,
  12,
  ["TypeScript", "Node.js", "Git", "PostgreSQL"],
  "Visual Studio Code"
);

developer.printSummary();