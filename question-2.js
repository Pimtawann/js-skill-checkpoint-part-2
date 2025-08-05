const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
function totalScore(student){
  result = student.filter((student) => student.score > 50).map((student) => student.score + student.score * 10/100).reduce((acc,cur) => acc + cur)
  return `Total score is ${result}`
}

console.log(totalScore(students))