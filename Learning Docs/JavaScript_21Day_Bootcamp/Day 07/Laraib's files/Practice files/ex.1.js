const student = {

  name: "Hassan Ali",
  rollNo: "ADPCS-2024-101",
  semester: 2,


  contact: {
    phone: "03001234567",
    email: "hassan.ali@email.com"
  },

  
  courses: [
    { code: "CS101", name: "Programming", grade: "A" },
    { code: "MATH201", name: "Calculus", grade: "B" }
  ],

  
  calculateCGPA() {
    const gradePoints = {
      A: 4,
      B: 3,
      C: 2,
      D: 1
    };

    let totalPoints = 0;

    for (let i = 0; i < this.courses.length; i++) {
      let grade = this.courses[i].grade;
      totalPoints += gradePoints[grade];
    }

    return (totalPoints / this.courses.length).toFixed(2);
  }
};

// Test
console.log(student.name);
console.log(student.contact.email);
console.log(student.courses[0].name);
console.log("CGPA:", student.calculateCGPA());
  