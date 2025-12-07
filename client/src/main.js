import './style.css'

fetch(`http://localhost:3000/students`)

// Функція для отримання всіх студентів

const options1 ={
    method: "GET",
}




const getStudents = async () => {

 const responce = await fetch(`http://localhost:3000/students` , options1)
 const students = await responce.json()
return students;

 }

 getStudents()
 .then(result => console.log(result))
.catch(err => console.log(err))


// Функція для відображення студентів у таблиці

function renderStudents(students) {

 // твій код

 

}



// Функція для додавання нового студента

function addStudent(e) {

 // твій код
ІІІІІ
  

}



// Функція для оновлення студента

function updateStudent(id) {

 // твій код



 }



// Функція для видалення студента

function deleteStudent(id) {

    // твій код

}



