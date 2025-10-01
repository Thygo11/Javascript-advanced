  let output = document.querySelector('.output')
  
  fetch('https://fortnite-api.com/v2/cosmetics/new')
    .then(res => res.json())
    .then((data) => {
    console.log(data.data.items.br)
    for (let fortnite of data.data.items.br)
    output.innerHTML += `
<h2> ${fortnite.name}</h2>
<p>${fortnite.description}</p>
<img src=${fortnite.images.featured}>

    `
        
        {

    
}






    });
