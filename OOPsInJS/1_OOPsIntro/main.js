// Creating object in JS using Object Literals
const student = {
  fullName: "Harsh Mehra",
  marks: 95.5,
  printMarks: function () {
    console.log("Marks = ", this.marks);
  },
};

// Creating our own prototype
const employee = {
  calTax() {
    console.log("Tax rate is 10%");
  },
};

const karan = {
  salary: 50000,
};

karan.__proto__ = employee;
