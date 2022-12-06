fetch("http://127.0.0.1:5500/bin/db.json")
  .then((resp) => resp.json())
  .then((json) => console.log(json));

  const animalName = require("animal");
  console.log(animalName); 
