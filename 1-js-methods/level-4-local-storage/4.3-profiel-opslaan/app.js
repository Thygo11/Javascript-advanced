console.log('🚀 Opdracht 4.3: Profiel Opslaan');

function slaProfielOp() {
    
    const naam = document.getElementById('naam').value.trim();
    const email = document.getElementById('email').value.trim();
    const leeftijd = document.getElementById('leeftijd').value.trim();
    const kleur = document.getElementById('kleur').value;

   
    if (naam === '' || email === '') {
        alert('Naam en email zijn verplicht!');
        return;
    }

    localStorage.setItem('profiel-naam', naam);
    localStorage.setItem('profiel-email', email);
    localStorage.setItem('profiel-leeftijd', leeftijd);
    localStorage.setItem('profiel-kleur', kleur);

    localStorage.setItem('profiel-opgeslagen', new Date().toLocaleString());

    alert('Profiel opgeslagen!');
    toonProfiel();
}

function laadProfiel() {
    
    const naam = localStorage.getItem('profiel-naam');
    const email = localStorage.getItem('profiel-email');
    const leeftijd = localStorage.getItem('profiel-leeftijd');
    const kleur = localStorage.getItem('profiel-kleur');

    if (naam) document.getElementById('naam').value = naam;
    if (email) document.getElementById('email').value = email;
    if (leeftijd) document.getElementById('leeftijd').value = leeftijd;
    if (kleur) document.getElementById('kleur').value = kleur;
}

function toonProfiel() {
    const container = document.getElementById('profiel-weergave');

    const naam = localStorage.getItem('profiel-naam');
    const email = localStorage.getItem('profiel-email');
    const leeftijd = localStorage.getItem('profiel-leeftijd');
    const kleur = localStorage.getItem('profiel-kleur');
    const opgeslagenOp = localStorage.getItem('profiel-opgeslagen');

    if (naam) {
      
        container.innerHTML = `
            <h3>Opgeslagen Profiel:</h3>
            <p><strong>Naam:</strong> ${naam}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Leeftijd:</strong> ${leeftijd || 'Niet ingevuld'}</p>
            <p><strong>Favoriete kleur:</strong> ${kleur || 'Niet gekozen'}</p>
            <p><strong>Opgeslagen op:</strong> ${opgeslagenOp || 'Onbekend'}</p>
        `;
    } else {
        container.innerHTML = '<p>Nog geen profiel opgeslagen.</p>';
    }
}

function wisProfiel() {
    if (confirm('Weet je zeker dat je je profiel wilt wissen?')) {
       
        localStorage.removeItem('profiel-naam');
        localStorage.removeItem('profiel-email');
        localStorage.removeItem('profiel-leeftijd');
        localStorage.removeItem('profiel-kleur');
        localStorage.removeItem('profiel-opgeslagen');

        document.getElementById('naam').value = '';
        document.getElementById('email').value = '';
        document.getElementById('leeftijd').value = '';
        document.getElementById('kleur').value = '';

        toonProfiel();
        alert('Profiel gewist!');
    }
}


function init() {
    laadProfiel();
    toonProfiel();
}

window.addEventListener('DOMContentLoaded', init);
