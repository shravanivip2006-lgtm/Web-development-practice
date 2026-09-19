const form = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const section = document.getElementById("section").value;

    try {

        const response = await fetch("http://localhost:3000/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                section: section
            })
        });

        if (!response.ok) {
            throw new Error("Failed to submit");
        }

        form.reset();

        fetchStudents();

    } catch (error) {

        console.error(error);
        alert("Something went wrong!");

    }
});


async function fetchStudents() {

    try {

        const response = await fetch("http://localhost:3000/students");

        if (!response.ok) {
            throw new Error("Failed to fetch students");
        }

        const students = await response.json();

        studentList.innerHTML = "";

        students.forEach(function (student) {

            const li = document.createElement("li");

            li.textContent = student.name + " - Section " + student.section;

            studentList.appendChild(li);

        });

    } catch (error) {

        console.error(error);

    }
}


fetchStudents();