console.log('🚀 Opdracht 3.3: Template Literals');

const namen = ['Jan', 'Marie', 'Piet', 'Lisa'];
const leeftijden = [25, 30, 22, 28];
const steden = ['Amsterdam', 'Rotterdam', 'Utrecht', 'Den Haag'];

console.log('Namen:', namen);
console.log('Leeftijden:', leeftijden);
console.log('Steden:', steden);

const beschrijvingen = namen.map((naam, index) => 
    `${naam} (${leeftijden[index]} jaar) woont in ${steden[index]}.`
);


const index = 0; 
const bericht = `${namen[index]} (${leeftijden[index]} jaar) woont in ${steden[index]}.`;

console.log('Beschrijvingen:', beschrijvingen);
console.log('Voorbeeld bericht:', bericht);

console.log('Verwacht: ["Jan (25 jaar) woont in Amsterdam.", ...]');
