/*
RMIT University Vietnam
Course: COSC3058 Web Programming Bootcamp
Semester: 2024B
Assessment: Final Programming Challenge
Author: Tran Dang Phuc
ID: s4015692
Acknowledgement: Acknowledge the resources that you use here.
*/

// Education
const education = [
    {
        degree: "Bachelor of Information Technology",
        institution: "RMIT Vietnam",
        duration: "2024 - 2027 (expected)",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est aperiam voluptate cupiditate dolores deleniti natus corporis nam totam. Nobis alias beatae voluptas fuga et recusandae magni temporibus, odit voluptate."
    },
    {
        degree: "High School Diploma",
        institution: "High School of Programming",
        duration: "Jun 2021 - Nov 2024",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est aperiam voluptate cupiditate dolores deleniti natus corporis nam totam."
    }
];

document.addEventListener("DOMContentLoaded", function () {
    var ul = document.getElementById("education");
    education.forEach(course => {
        let li = document.createElement("li");
        li.classList.add("education-list-item")
        for (let key in course) {
            let p = document.createElement("p")
            let value = document.createTextNode(course[key])
            p.appendChild(value);
            p.classList.add(key);
            li.appendChild(p)
        }
        ul.appendChild(li);
    })
})