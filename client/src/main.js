import './style.css'
 const visualStudentsList = document.querySelector("#students_list")
const visualStudentTable = document.querySelector("#student_table_tamplate")
const studentTableEl = document.querySelector("#students-table")
const getStudentBtn = document.querySelector("#get-students-btn")

const tableBody = studentTableEl.querySelector('tbody')
// fetch(`http://localhost:3000/students`)

// Функція для отримання всіх студентів

// const options1 ={
//     method: "GET",
// }

// Handelbars
const template = Handlebars.compile(visualStudentTable.innerHTML)








const getStudents = async () => {

 const responce = await fetch(`http://localhost:3000/students`)
 const students = await responce.json()
return students;

 }
 
getStudents()
 .then(result => console.log(...result))
.catch(err => console.log(err))


// Функція для відображення студентів у таблиці

const renderStudents = () =>  {

getStudents()
 .then(result => {
const murkup = template(result)
console.log(murkup)
tableBody.innerHTML = murkup;
    // // visualStudentsList.innerHTML = ``;
    // const murkup = result.map(student => {
    //     // console.log(student)
    //     // console.log(student.name)
    //     return `<li>name: ${student.name}</li>`;
    // })
    // // visualStudentsList.insertAdjacentHTML("beforeend" , murkup.join(""))
 })
.catch(err => console.log(err))
}


getStudentBtn.addEventListener("click" , renderStudents())



// Функція для додавання нового студента

const studentToAdd = {
    id: 6,
    name: "Dima Bondar",
    age: 14,
}

const options2 ={
    method: "POST",
    body: JSON.stringify(studentToAdd),
}

const addStudent = async () => {

const response = await fetch(`http://localhost:3000/students` , options2)
const student = await response.json()
  
return student
}

// addStudent()



// Функція для оновлення студента

function updateStudent(id) {

 // твій код



 }



// Функція для видалення студента

function deleteStudent(id) {

    // твій код

}



