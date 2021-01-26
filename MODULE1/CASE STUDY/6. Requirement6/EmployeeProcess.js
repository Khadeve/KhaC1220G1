class Employee {
  constructor(
    name,
    id,
    dayOfBirth,
    phoneNumber,
    email,
    education,
    position,
    salary
  ) {
    this.name = name;
    this.id = id;
    this.dayOfBirth = dayOfBirth;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.education = education;
    this.position = position;
    this.salary = salary;
  }
  getEmployeeName() {
    return this.name;
  }
  getEmployeeId() {
    return this.id;
  }
  getEmployeeDayOfBirth() {
    return this.dayOfBirth;
  }
  getEmployeePhoneNumber() {
    return this.phoneNumber;
  }
  getEmployeeEmail() {
    return this.email;
  }
  getEmployeeEducation() {
    return this.education;
  }
  getEmployeePosition() {
    return this.position;
  }
  getEmployeeSalary() {
    return this.salary;
  }
  setEmployeeName(name) {
    this.name = name;
  }
  setEmployeeId(id) {
    this.id = id;
  }
  setEmployeeDayOfBirth(dayOfBirth) {
    this.dayOfBirth = dayOfBirth;
  }
  setEmployeePhoneNumber(phone) {
    this.phoneNumber = phone;
  }
  setEmployeeEmail(email) {
    this.email = email;
  }
  setEmployeeEducation(academicLevel) {
    this.education = academicLevel;
  }
  setEmployeePosition(position) {
    this.position = position;
  }
  setEmployeeSalary(salary) {
    this.salary = salary;
  }
  calIncome() {
    let salary = parseInt(this.salary);
    if (this.position === "Manager") {
      return salary + 500;
    }
    if (this.position === "Sale") {
      return salary + 300;
    }
    if (this.position === "Marketing") {
      return salary + 200;
    }
    return salary;
  }
}

let employeeInfo = [
  "name",
  "id",
  "dayOfBirth",
  "phoneNumber",
  "email",
  "education",
  "position",
  "salary",
];

let employeeList = [];

let employee1 = new Employee(
  "Kha Ho",
  "EPL1",
  "29/12/1995",
  12345678,
  "kha@gmail.com",
  "Bachelor",
  "Technical staff",
  1000
);

let employee2 = new Employee(
  "Ai Nu",
  "EPL2",
  "20/11/1995",
  01234567,
  "nu@gmail.com",
  "Bachelor",
  "Sale staff",
  2000
);

employeeList.push(employee1, employee2);

function createEmployeeList() {
  let table =
    '<table id="eplList"><tr><th>Index</th><th>Employee Name</th><th>Position</th><th>Phone Number</th><th colspan="3"></th></tr>';
  const listSize = employeeList.length;
  for (let i = 0; i < listSize; i++) {
    table +=
      "<tr><td>" +
      (i + 1) +
      "</td><td>" +
      employeeList[i].getEmployeeName() +
      "</td><td>" +
      employeeList[i].getEmployeePosition() +
      "</td><td>" +
      employeeList[i].getEmployeePhoneNumber() +
      "</td>" +
      '<td><button type="button" class="modifyBut" onclick="showEmployeeInfo(' +
      i +
      ')">Detail</button></td>\
      <td><button type="button" class="modifyBut" onclick="showEmployeeIncome(' +
      i +
      ')">Income</button></td>\
          <td><button type="button" class="modifyBut" onclick="deleteEmployee(' +
      i +
      ')">Delete</button></td></tr>';
  }
  table += "</table>";
  let listObj = document.getElementById("employeeList");
  listObj.style.display = "block";
  listObj.innerHTML = table;
}

function addNewEmployee() {
  let newEmployee = new Employee();
  for (let i = 0; i < employeeInfo.length; i++) {
    var aInfo = prompt("Please enter " + employeeInfo[i] + " of new employee:");
    if (employeeInfo[i] === "position") {
      if (aInfo[0] >= "a" && aInfo[0] <= "z") {
        aInfo = aInfo.split("");
        aInfo[0] = aInfo[0].toUpperCase();
        aInfo = aInfo.join("");
      }
    }
    newEmployee[employeeInfo[i]] = aInfo;
  }
  employeeList.push(newEmployee);
}

document
  .getElementById("addNewEplButton")
  .addEventListener("click", function () {
    addNewEmployee();
    createEmployeeList();
  });

function showEmployeeInfo(index) {
  let txt = "";
  let i = 0;
  for (i = 0; i < employeeInfo.length; i++) {
    txt +=
      i +
      1 +
      ". " +
      employeeInfo[i] +
      ": " +
      employeeList[index][employeeInfo[i]] +
      "\n";
  }
  //   txt += +(i + 1) + ". Total income: " + employeeList[index].calIncome() + "\n";
  alert("Employee Information:\n" + txt);
}

function deleteEmployee(index) {
  if (
    confirm(
      "Delete the employee (" + employeeList[index].getEmployeeName() + ")"
    )
  ) {
    employeeList.splice(index, 1);
  } else {
    alert("Cancel the process");
  }
  createEmployeeList();
}

function showEmployeeIncome(index) {
  alert(
    "Total Income (" +
      employeeList[index].getEmployeeName() +
      "): " +
      employeeList[index].calIncome()
  );
}
