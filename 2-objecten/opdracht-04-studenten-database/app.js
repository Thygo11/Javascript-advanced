const students = [
  { id: 1, naam: 'Emma van Dijk', leeftijd: 20, studie: 'Frontend Development', cijfer: 8.5, actief: true },
  { id: 2, naam: 'Liam de Boer', leeftijd: 19, studie: 'Backend Development', cijfer: 7.2, actief: true },
  { id: 3, naam: 'Sophie Jansen', leeftijd: 21, studie: 'Frontend Development', cijfer: 9.1, actief: false },
  { id: 4, naam: 'Daan Peters', leeftijd: 22, studie: 'Fullstack Development', cijfer: 6.8, actief: false },
  { id: 5, naam: 'Evi de Wit', leeftijd: 20, studie: 'Frontend Development', cijfer: 8.9, actief: true },
];

function toonStudenten(lijst) {
  const container = document.getElementById('studenten-lijst');
  container.innerHTML = lijst.map(
    (s) => `
      <article class="${s.actief ? 'actief' : 'inactief'}">
        <strong>${s.naam}</strong> (${s.leeftijd} jaar)<br>
        📚 ${s.studie}<br>
        📊 Cijfer: ${s.cijfer} | Status: ${s.actief ? '✅ Actief' : '❌ Inactief'}
      </article>
    `
  ).join('');
}

function toonAlleStudenten() {
  toonStudenten(students);
}

function toonActieveStudenten() {
  toonStudenten(students.filter(s => s.actief));
}

function toonTopStudenten() {
  toonStudenten(students.filter(s => s.cijfer >= 8.0));
}


window.addEventListener('DOMContentLoaded', toonAlleStudenten);
