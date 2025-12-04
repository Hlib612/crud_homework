import './style.css'

fetch(`http://localhost:3000/students`)

// Функція для отримання всіх студентів

const options1 ={
    method: "GET",
}




const getStudents = () => {

 fetch(`http://localhost:3000/students` , options1)
 .then(result =>{
    console.log(result)
    result.json()
 })


 }

 getStudents()



// Функція для відображення студентів у таблиці

function renderStudents(students) {

 // твій код

 

}



// Функція для додавання нового студента

function addStudent(e) {

 // твій код

  

}



// Функція для оновлення студента

function updateStudent(id) {

 // твій код



 }



// Функція для видалення студента

function deleteStudent(id) {

    // твій код

}



