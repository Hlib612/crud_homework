import './style.css'
 const visualStudentsList = document.querySelector("#students_list")
const visualStudentTable = document.querySelector("#student_table_tamplate")
const studentTableEl = document.querySelector("#students-table")
const getStudentBtn = document.querySelector("#get-students-btn")
const addStudentForm = document.querySelector("#add_student_form")
const nameInput = document.querySelector("#name")
const ageInput = document.querySelector("#age")
const courseInput = document.querySelector("#course")
const skillsInput = document.querySelector("#skills")
const emailInput = document.querySelector("#email")
const isEnrolledInput = document.querySelector("#isEnrolled")

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


getStudentBtn.addEventListener("click" , renderStudents)



// Функція для додавання нового студента








const addStudent = async (options) => {

const response = await fetch(`http://localhost:3000/students` , options)
const student = await response.json()
  
return student
}


const readStudent = (event) => {
    event.preventDefault()
    console.log(nameInput.value)
     console.log(ageInput.value)
      console.log(courseInput.value)
       console.log(skillsInput.value)
        console.log(emailInput.value)
         console.log(isEnrolledInput.value)

let name = nameInput.value;
let age = ageInput.value;
let course = courseInput.value;
let skills = skillsInput.value;
let email = emailInput.value;
let enrolled = isEnrolledInput.value;

let studentToAdd = {
        "name": name,
        "age": age,
        "course": course,
        "skills": skills,
        "email": email,
        "isEnrolled": enrolled
}

studentToAdd.innerHTML = studentToAdd;

const options2 ={
    method: "POST",
    body: JSON.stringify(studentToAdd),
}

addStudent(options2)
}

addStudentForm.addEventListener("submit" , readStudent)








// Функція для оновлення студента

function updateStudent(id) {

 // твій код



 }



// Функція для видалення студента

const deleteStudent = async (id) => {

    // твій код

}



