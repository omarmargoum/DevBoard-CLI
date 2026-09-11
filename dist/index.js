"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAvailabilityStatus(profile) {
    if (profile.available && profile.weeklyHours >= 8) {
        return "DISPONIBLE";
    }
    return "INDISPONIBLE";
}
function computeProfileScore(profile) {
    const experienceScore = profile.experienceYears * 10;
    const technologyScore = profile.technologies.length * 8;
    const availabilityScore = profile.weeklyHours * 2;
    const totalScore = experienceScore +
        technologyScore +
        availabilityScore;
    return Math.min(totalScore, 100);
}
class Developer {
    name;
    city;
    experienceYears;
    available;
    weeklyHours;
    technologies;
    favoriteEditor;
    constructor(name, city, experienceYears, available, weeklyHours, technologies, favoriteEditor) {
        this.name = name;
        this.city = city;
        this.experienceYears = experienceYears;
        this.available = available;
        this.weeklyHours = weeklyHours;
        this.technologies = technologies;
        this.favoriteEditor = favoriteEditor;
    }
    getStatus() {
        return getAvailabilityStatus(this);
    }
    getScore() {
        return computeProfileScore(this);
    }
    printSummary() {
        console.log("=== DEVBOARD CLI ===");
        console.log(`Nom         : ${this.name}`);
        console.log(`Ville       : ${this.city}`);
        console.log(`Expérience  : ${this.experienceYears} ans`);
        console.log(`Disponible  : ${this.available ? "oui" : "non"}`);
        console.log(`Technos     : ${this.technologies.join(", ")}`);
        console.log(`Charge      : ${this.weeklyHours} h/semaine`);
        console.log(`Statut      : ${this.getStatus()}`);
        console.log(`Score       : ${this.getScore()}/100`);
        console.log(`Éditeur     : ${this.favoriteEditor ?? "non renseigné"}`);
        console.log("====================");
    }
}
const currentYear = 2026;
const startYear = 2024;
const experienceYears = currentYear - startYear;
const developer = new Developer("Omar Margoum", "Verviers", experienceYears, true, 12, ["TypeScript", "Node.js", "Git", "PostgreSQL"], "Visual Studio Code");
developer.printSummary();
//# sourceMappingURL=index.js.map