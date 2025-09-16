// Opdracht 1.2: Map Oefening
console.log('🚀 Opdracht 1.2: Map Oefening');

const namen = ['jan', 'piet', 'klaas'];
console.log('Originele namen:', namen);

// TODO: Zet alle namen om naar hoofdletter
const hoofdletterNamen = namen.map(naam => naam.charAt(0) .toLocaleUpperCase() + naam.slice(1));

console.log('Namen met hoofdletter:', hoofdletterNamen);
console.log('Verwacht resultaat: [\'Jan\', \'Piet\', \'Klaas\']');