"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*console.log("DevBoard Démarre");
const applicationName: string = "DevBoard CLI";

console.log(`${applicationName} démarre`);*/
/*const developerName = "Omar Margoum";
const city = "Verviers";
let experienceYears = 20;
let available = true;
let weeklyHours = 12;
console.log(`Nom du développeur : ${developerName}`);
console.log(`Ville : ${city}`);
console.log(`Expérience : ${experienceYears} ans`);
console.log(`Disponible : ${available}`);
console.log(`Charge disponible : ${weeklyHours} heures par semaine`);*/
const developerName = "Omar Margoum";
const city = "Verviers";
const currentYear = 2026;
let startYear = 2024;
const experienceYears = currentYear - startYear;
let available = true;
let weeklyHours = 12;
console.log("=== DEVBOARD CLI ===");
console.log(`Nom          : ${developerName}`);
console.log(`Ville        : ${city}`);
console.log(`Expérience   : ${experienceYears} ans`);
console.log(`Disponible   : ${available ? "oui" : "non"}`);
console.log(`Charge       : ${weeklyHours} h/semaine`);
console.log("====================");
//# sourceMappingURL=index.js.map