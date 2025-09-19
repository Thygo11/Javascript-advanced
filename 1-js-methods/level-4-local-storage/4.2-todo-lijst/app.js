console.log('🚀 Opdracht 4.2: Todo Lijst');

let taken = []; // Array van strings

function voegTaakToe() {
    const input = document.getElementById('nieuwe-taak');
    const taakTekst = input.value.trim();
    
    if (taakTekst === '') {
        alert('Voer een taak in!');
        return;
    }
    
  
    taken.push(taakTekst);
    
   
    localStorage.setItem('taken', JSON.stringify(taken));
 
    input.value = '';
    toonTaken();
}

function laadTaken() {
 
    const opgeslagenTaken = localStorage.getItem('taken');
    
    if (opgeslagenTaken) {
       
        taken = JSON.parse(opgeslagenTaken);
    }
}

function toonTaken() {
    const container = document.getElementById('taken-lijst');
    
    if (taken.length === 0) {
        container.innerHTML = '<p>Geen taken toegevoegd.</p>';
        document.getElementById('aantal-taken').textContent = 0;
        return;
    }
    
 
    const takenHTML = taken.map((taak, index) => `
        <div class="taak">
            <span>${taak}</span>
            <button onclick="verwijderTaak(${index})">🗑️</button>
        </div>
    `).join('');
    
    container.innerHTML = takenHTML;
    
   
    document.getElementById('aantal-taken').textContent = taken.length;
}

function verwijderTaak(index) {
  
    taken.splice(index, 1);
    
    
    localStorage.setItem('taken', JSON.stringify(taken));
    toonTaken();
}

function wisAlleTaken() {
    if (confirm('Weet je zeker dat je alle taken wilt wissen?')) {
     
        taken = [];
        
      
        localStorage.removeItem('taken');
        
        toonTaken();
    }
}


window.addEventListener('DOMContentLoaded', () => {
    laadTaken();
    toonTaken();
});
