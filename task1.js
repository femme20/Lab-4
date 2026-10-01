// 1 & 2. Primitive variables using var
var myName = "Wania Rahman";
var myAge = 21;
var isStudent = true;
var currentSemester = 5;


var biography = {
  name: "Wania Rahman ",
  age: 21,
  address: {
    house: 21,
    street: 5,
    city: "Islamabad"
  },
  degreeProgram: {
    title: "BS Computer Science",
    university: "Air University",
    semester: 5
  }
};

console.log("Name: " + biography.name);
console.log("Age: " + biography.age);
console.log("Address: House #" + biography.address.house + ", Street " + biography.address.street + ", " + biography.address.city);
console.log("Degree: " + biography.degreeProgram.title + " at " + biography.degreeProgram.university);