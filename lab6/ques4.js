let student = {
    name: "John",
    age: 20,
    grades: "A"
};

student.class = "12th";
student.grades = "A+";

console.log("Student Info:");
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}
