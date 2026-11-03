class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    calculateAverage() {
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    }

    getGradeLetter() {
        const avg = this.calculateAverage();
        if (avg >= 90) return 'A';
        if (avg >= 80) return 'B';
        if (avg >= 70) return 'C';
        if (avg >= 60) return 'D';
        if (avg >= 50) return 'E';
        return 'F';
    }

    checkStatus() {
        const avg = this.calculateAverage();
        if (avg >= 50 && this.attendance >= 75) {
            return "Passed";
        } else {
            return "Needs Review";
        }
    }
}

const studentsList = [
    new Student(1, "Ahmed Mohamed", [85, 90, 88], 85),
    new Student(2, "Sara Ali", [42, 45, 43], 80),
    new Student(3, "Mahmoud Khaled", [70, 65, 75], 60),
    new Student(4, "Fatma Omar", [44, 46, 45], 90)
];

console.log("=== Main Students Reports ===");
studentsList.forEach(student => {
    console.log(`Name: ${student.name} | Average: ${student.calculateAverage().toFixed(2)} | Grade: ${student.getGradeLetter()} | Status: ${student.checkStatus()}`);
});

const strugglingStudents = studentsList.filter(student => {
    const avg = student.calculateAverage();
    return avg >= 40 && avg < 50;
});

const boostedStudents = strugglingStudents.map(student => {
    return {
        name: student.name,
        oldAverage: Number(student.calculateAverage().toFixed(2)),
        newAverage: Number((student.calculateAverage() + 5).toFixed(2))
    };
});

const totalNewAverages = boostedStudents.reduce((sum, student) => sum + student.newAverage, 0);
const mercyAverage = strugglingStudents.length > 0 ? (totalNewAverages / boostedStudents.length) : 0;

console.log("\n=== Mercy Committee Students ===");
console.log(boostedStudents);

console.log("\n=== Struggling Students Average After Mercy ===");
console.log(`New Average: ${mercyAverage.toFixed(2)}`);

document.body.innerHTML = `
    <h2 style="color: green; font-family: Tahoma;">Task Executed Successfully! 🎉</h2>
    <p>Check the Console / Output window to see all student reports and mercy committee details.</p>
`;