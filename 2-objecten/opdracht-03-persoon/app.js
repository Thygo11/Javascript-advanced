const person = {
  name: "John",
  age: 35,
  dateOfBirth: "1989-04-15",
  gender: "male",
  isAlive: true,
  hobbies: ["reading", "cycling", "cooking", "Running"],


  changeName: function(newName) {
    this.name = newName;
    displayPerson();
  },

  changeIsAlive: function(status) {
    this.isAlive = status;
    displayPerson();
  },

  addHobby: function(newHobby) {
    this.hobbies.push(newHobby);
    displayPerson();
  }
};


function displayPerson() {
  const container = document.querySelector(".personInfo");
  container.innerHTML = `
    <p>Name: ${person.name}</p>
    <p>Age ${person.age}</:>
    <p>Date of Birth: ${person.dateOfBirth}</p>
    <p>Gender: ${person.gender}</p>
    <p>Is Alive:${person.isAlive}</p>
    <p>Hobbies: ${person.hobbies.join(", ")}</p>
  `;
}


displayPerson();


person.changeName("Emily Johnson");
person.changeIsAlive(false);
person.addHobby("painting");
