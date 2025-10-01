const output = document.querySelector('.output');

fetch('https://restcountries.com/v3.1/all?fields=name,flags')
  .then(res => res.json())
  .then(data => {
    output.innerHTML = ''; 

  
    data.forEach(country => {
      output.innerHTML += `
        <div class="country">
          <img src="${country.flags.png}" alt="Flag of ${country.name.common}">
          <h2>${country.name.common}</h2>
        </div>
      `;
    });
  });
