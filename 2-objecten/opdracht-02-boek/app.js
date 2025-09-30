let output = document.querySelector(".output")

const boek = {
name: "Harry Potter",
authtor: "J.K Rowling",
publisher: "Bloomsburry",
date: "1997",
total: "600 million",
price: "90 EURO",
}

output.innerHTML = `<p>${boek.name} & ${boek.authtor} & ${boek.publisher} & ${boek.date} & ${boek.total} & ${boek.price} </p>`


