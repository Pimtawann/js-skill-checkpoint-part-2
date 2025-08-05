// เริ่มเขียนโค้ดตรงนี้
async function getUsers() {
    const user = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await user.json();
    const result = userName(data)
    console.log(data);
    console.log(result)
}

function userName(user){
    return user.filter((user) => user.name.length > 17).map((user)=>user.name)
}

getUsers();


