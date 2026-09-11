"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const currentYear = 2026;
const startYear = 2024;
const experienceYears = currentYear - startYear;
const technologies = [
    "TypeScript",
    "Node.js",
    "Git"
];
technologies.push("PostgreSQL");
const profile = {
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
//# sourceMappingURL=index.js.map