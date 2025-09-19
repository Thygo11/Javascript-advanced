console.log('🚀 Opdracht 4.1: Simpele Opslag');

function slaOpNaam() {
    console.log('slaOpNaam() aangeroepen');
    
 
    const naam = document.getElementById('naam-input').value.trim();
    
    
    if (naam === '') {
        alert('Voer eerst een naam in!');
        return;
    }
    
    
    localStorage.setItem('gebruikersnaam', naam);
      
    toonWelkom();

    document.getElementById('naam-input').value = '';
}

function toonWelkom() {
 
    const opgeslagenNaam = localStorage.getItem('gebruikersnaam');
    
    const welkomElement = document.getElementById('welkom-bericht');
    
   
    if (opgeslagenNaam) {
        welkomElement.textContent = `Welkom terug, ${opgeslagenNaam}! 👋`;
    } else {
        welkomElement.textContent = 'Geen naam opgeslagen.';
    }
}

function wisNaam() {
    
    localStorage.removeItem('gebruikersnaam');
    
    toonWelkom();
}


window.addEventListener('DOMContentLoaded', toonWelkom);
