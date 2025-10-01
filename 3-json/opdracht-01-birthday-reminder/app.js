document.addEventListener('DOMContentLoaded', () => {
  const title = document.getElementById('title');
  const list = document.getElementById('birthday-list');
  const clearBtn = document.getElementById('clear-btn');

  
  fetch('birthday.json')
    .then(res => res.json())
    .then(data => {
      Birthday(data);

      title.textContent = `${data.length} Birthdays Today`;

    
      clearBtn.addEventListener('click', () => {
        list.innerHTML = '';
        title.textContent = '0 Birthdays Today';
      });
    });

  function Birthday(birthdays) {
    birthdays.forEach(person => {
      const div = document.createElement('div');
      div.classList.add('person');
      div.innerHTML = `
        <img src="${person.image}" alt="${person.name}">
        <div class="person-info">
          <h4>${person.name}</h4>
          <p>${person.age} years</p>
        </div>
      `;
      list.appendChild(div);
    });
  }
});
