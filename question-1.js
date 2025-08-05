const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];

const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];

// เริ่มเขียนโค้ดตรงนี้
let allPeople = [...techupPeople,...techcoolPeople];

function under20People(people){
  return people.filter((people) => people.age < 20)
}

let youngerPeople = under20People(allPeople);
console.log(youngerPeople);
