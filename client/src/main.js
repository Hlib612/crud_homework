import './style.css'
 const visualStudentsList = document.querySelector("#students_list")

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
 .then(result => console.log(...result))
.catch(err => console.log(err))


// Функція для відображення студентів у таблиці

const renderStudents = async () =>  {

getStudents()
 .then(result => {
    visualStudentsList.insertAdjacentHTML = ``;
    result.map(student => {
        console.log(student)
        console.log(student.name)
        visualStudentsList.insertAdjacentHTML("beforeend", `<li>name: ${student.name}</li>`)
        console.log(visualStudentsList)
    })
 })
.catch(err => console.log(err))
}

// renderStudents()




// Функція для додавання нового студента

const studentToAdd = {
    id: 6,
    name: "Dima Bondar",
    age: 14,
}

const options2 ={
    method: "POST",
    body: studentToAdd,
}

const addStudent = async () => {

const response = await fetch(`http://localhost:3000/students` , options2)
const student = await response.json()
  
return student
}

addStudent()



// Функція для оновлення студента

function updateStudent(id) {

 // твій код



 }



// Функція для видалення студента

function deleteStudent(id) {

    // твій код

}



