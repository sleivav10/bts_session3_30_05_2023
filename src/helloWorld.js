function helloWorld() {
<<<<<<< HEAD
  return {
    message: "hello world",
    age:24,
    name:"John",
    sfName:"Doe",
    eyeColor:"green",
    birthday:"199-03-12",
    address:["carrer","42","08012","Barcelona"]
=======
  const person = {
    age: 24,
    name: "John",
    srName: "Doe",
    eyeColor: "green",
    birthday: "1999-03-12",
    address: [
      "Carrer Nou de Sant Francesc",
      "42",
      "3r 1a",
      "08002",
      "Barcelona",
    ],
>>>>>>> ad8b99f12edeb71b6ff4db5f8cf2ad2e5420dd6d
  };

  return person;
}

module.exports = helloWorld;
