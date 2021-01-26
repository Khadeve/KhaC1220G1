const priceOfRoom = 100;
const priceOfHouse = 300;
const priceOfVilla = 500;

//Email pattern: characters@abc.abc
const emailPatt = /^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/;
//Day of birth pattern: dd/mm/yyyy
const datePattern = /^(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])[\/]\d{4}$/;
//ID pattern: XXXXXXXX (8 of X) with X within range of 0-9 inclusively.
const idPattern = /^\d{8}$/;

let customerList = [];
let customerFormObj = document.getElementById("customerForm");

const info = [
  "firstName",
  "lastName",
  "id",
  "dayOfBirth",
  "street",
  "city",
  "state",
  "areaCode",
  "phoneNumber",
  "email",
  "checkInDate",
  "checkInTime",
  "checkOutDate",
  "checkOutTime",
  "numberOfAdults",
  "numberOfChildren",
  "numberOfNights",
  "roomType",
  "membership",
  "discount",
  "specialRequest",
  "bill",
];
const numberOfInfo = info.length;

class Customer {
  constructor(
    fname,
    lname,
    id,
    dayOfBirth,
    street,
    city,
    state,
    areaCode,
    phoneNumber,
    email,
    checkInDate,
    checkInTime,
    checkOutDate,
    checkOutTime,
    adults,
    children,
    nights,
    roomType,
    membership,
    discount,
    specialRequest,
    bill
  ) {
    this.firstName = fname;
    this.lastName = lname;
    this.id = id;
    this.dayOfBirth = dayOfBirth;
    this.street = street;
    this.city = city;
    this.state = state;
    this.areaCode = areaCode;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.checkInDate = checkInDate;
    this.checkInTime = checkInTime;
    this.checkOutDate = checkOutDate;
    this.checkOutTime = checkOutTime;
    this.numberOfAdults = adults;
    this.numberOfChildren = children;
    this.numberOfNights = nights;
    this.roomType = roomType;
    this.membership = membership;
    this.discount = discount;
    this.specialRequest = specialRequest;
    this.bill = bill;
  }
  //Getter methods.
  getFirstName() {
    return this.firstName;
  }
  getLastName() {
    return this.lastName;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
  getID() {
    return this.id;
  }
  getDayOfBirth() {
    return this.dayOfBirth;
  }
  getStreet() {
    this.street;
  }
  getCity() {
    this.city;
  }
  getState() {
    this.state;
  }
  getAreaCode() {
    return this.areaCode;
  }
  getPhoneNumber() {
    return this.phoneNumber;
  }
  getEmail() {
    return this.email;
  }
  getCheckInDate() {
    return this.checkInDate;
  }
  getCheckInTime() {
    return this.checkInTime;
  }
  getCheckOutDate() {
    return this.checkOutDate;
  }
  getCheckOutTime() {
    return this.checkOutTime;
  }
  getNumberOfAdults() {
    return this.numberOfAdults;
  }
  getNumberOfChildren() {
    return this.numberOfChildren;
  }
  getNumberOfNights() {
    return this.numberOfNights;
  }
  getRoomType() {
    return this.roomType;
  }
  getMembership() {
    return this.membership;
  }
  getDiscount() {
    return this.discount;
  }
  getSpecialRequest() {
    return this.specialRequest;
  }
  getBill() {
    return this.bill;
  }
  // Setter methods.
  setFirstName(fname) {
    this.firstName = fname;
  }
  setLastName(lname) {
    this.lastName = lname;
  }
  setID(id) {
    this.id = id;
  }
  setDayOfBirth(dayOfBirth) {
    this.dayOfBirth = dayOfBirth;
  }
  setStreet(street) {
    this.street = street;
  }
  setCity(city) {
    this.city = city;
  }
  setState(state) {
    this.state = state;
  }
  setAreaCode(areaCode) {
    this.areaCode = areaCode;
  }
  setPhoneNumber(phone) {
    this.phoneNumber = phone;
  }
  setEmail(email) {
    this.email = email;
  }
  setCheckInDate(checkInDate) {
    this.checkInDate = checkInDate;
  }
  setCheckInTime(checkInTime) {
    this.checkInTime = checkInTime;
  }
  setCheckOutDate(checkOutDate) {
    this.checkOutDate = checkOutDate;
  }
  setCheckOutTime(checkOutTime) {
    this.checkOutTime = checkOutTime;
  }
  setNumberOfAdults(adults) {
    this.numberOfAdults = adults;
  }
  setNumberOfChildren(children) {
    this.numberOfChildren = children;
  }
  setNumberOfNights(nights) {
    this.numberOfNights = nights;
  }
  setRoomType(roomType) {
    this.roomType = roomType;
  }
  setMembership(membership) {
    this.membership = membership;
  }
  setDiscount(discount) {
    this.discount = discount;
  }
  setSpecialRequest(request) {
    this.specialRequest = request;
  }
  setBill(bill) {
    this.bill = bill;
  }

  getNewInfo() {
    for (let i = 0; i < numberOfInfo; i++) {
      this[info[i]] = document.getElementById(info[i]).value;
    }
    this.evalTotalPay();
  }
  addToList() {
    customerList.push(this);
  }
  //Method to evaluate total pay.
  evalTotalPay() {
    let servicePrice = 0;
    if (this.numberOfNights > 0) {
      if (this.roomType === "room") servicePrice = priceOfRoom;
      else if (this.roomType === "house") servicePrice = priceOfHouse;
      else servicePrice = priceOfVilla;
      this.bill = parseFloat(
        (
          this.numberOfNights *
          servicePrice *
          (1 - this.discount / 100)
        ).toPrecision(2)
      );
    } else {
      this.bill = 0.0;
    }
  }

  isOnDiscount() {
    let noDiscountObj = document.getElementById("noDiscount");
    let yesDiscountObj = document.getElementById("yesDiscount");
    let discountLabelObjects = document.getElementsByClassName("rad");
    noDiscountObj.setAttribute("hidden", "true");
    yesDiscountObj.setAttribute("hidden", "true");
    discountLabelObjects[0].setAttribute("hidden", "true");
    discountLabelObjects[1].setAttribute("hidden", "true");
    document.getElementById("discountField").style.display = "inline";
  }

  //Show detail info of customer in a form with id="formId".
  showDetailInfo() {
    //Assign customer's info into each input fields of theForm.
    for (let i = 0; i < numberOfInfo; i++) {
      var formElmnt = customerFormObj.elements.namedItem(info[i]);
      formElmnt.value = this[info[i]];
      if (info[i] === "bill") {
        formElmnt.value = "$ " + formElmnt.value;
      }
      if (info[i] === "roomType" || info[i] === "membership") {
        formElmnt.setAttribute("disabled", "true");
      } else {
        formElmnt.setAttribute("readonly", "true");
      }
    }
    this.isOnDiscount();
    document.getElementById("confirmAddContainer").style.display = "none";
    document.getElementById("confirmEditContainer").style.display = "none";
    openPage("add");
  }

  editInfo() {
    for (let i = 0; i < numberOfInfo; i++) {
      var formElmnt = customerFormObj.elements.namedItem(info[i]);
      if (info[i] === "bill") {
        formElmnt.value = "$ " + this[info[i]];
        continue;
      }
      formElmnt.value = this[info[i]];
      if (formElmnt.hasAttribute("disabled")) {
        formElmnt.removeAttribute("disabled");
      } else if (
        formElmnt.hasAttribute("readonly") &&
        formElmnt.id != "numberOfNights"
      ) {
        formElmnt.removeAttribute("readonly");
      }
    }
    this.isOnDiscount();
    document.getElementById("confirmAddContainer").style.display = "none";
    document.getElementById("confirmEditContainer").style.display = "block";
    openPage("add");
  }
}

let tabLink = document.getElementsByClassName("tab-link");

function openPage(pageName) {
  let tabContent = document.getElementsByClassName("tab-content");
  tabContent[0].style.display = "none";
  tabContent[1].style.display = "none";
  document.getElementById(pageName).style.display = "block";
  // document.getElementById("detailInfo").style.display = "none";
}

function openSystem(system) {
  let systemContent = document.getElementsByClassName("system-content");
  systemContent[0].style.display = "none";
  systemContent[1].style.display = "none";
  document.getElementById(system).style.display = "block";
}

tabLink[2].addEventListener("click", function () {
  tabLink[0].style.display = "none";
  tabLink[1].style.display = "none";
  tabLink[2].style.display = "none";
  tabLink[3].style.display = "inline-block";
  document.getElementById("systemName").innerHTML =
    "Employee Management System";
  openSystem("employeeSystem");
  createEmployeeList();
});

tabLink[3].addEventListener("click", function () {
  tabLink[0].style.display = "inline-block";
  tabLink[1].style.display = "inline-block";
  tabLink[3].style.display = "none";
  tabLink[2].style.display = "inline-block";
  document.getElementById("systemName").innerHTML =
    "Customer Management System";
  openSystem("customerSystem");
});

function createDateObjFromDateStr(dateStr) {
  let dateObj = new Date();
  let year = dateStr.slice(0, 4);
  let month = dateStr.slice(5, 7);
  let day = dateStr.slice(8, 10);
  dateObj.setFullYear(year, month, day);
  return dateObj;
}

let rentDays = 0;
function calRentDays(checkInDate, checkOutDate) {
  let checkInDateObj = createDateObjFromDateStr(checkInDate);
  let checkOutDateObj = createDateObjFromDateStr(checkOutDate);
  //Calculate to miliseconds from date objects.
  let msec1 = checkInDateObj.getTime(); //getTime() returns miliseconds value of a date object.
  let msec2 = checkOutDateObj.getTime();
  if (msec1 > msec2) rentDays = -1;
  else if (msec1 < msec2) rentDays = parseInt((msec2 - msec1) / 86400000, 10);
  else rentDays = 0;
}

function isValidCheckInDate(checkInDateStr) {
  let today = new Date(); //new Date() returns a date object with the month from 0-11 (Jan-Dec).
  today.setFullYear(today.getFullYear(), today.getMonth() + 1, today.getDate());
  let checkInDateObj = createDateObjFromDateStr(checkInDateStr);
  let msec1 = today.getTime();
  let msec2 = checkInDateObj.getTime();
  if (msec2 < msec1) {
    alert("The check-in date cannot be less than today.");
    document.getElementById("checkInDate").value = "";
  }
}

function isValidCheckOutDate(checkInDateStr, checkOutDateStr) {
  calRentDays(checkInDateStr, checkOutDateStr);
  if (rentDays === -1) {
    alert("Check-out date cannot be less than check-in date!");
    document.getElementById("checkOutDate").value = "";
  } else {
    document.getElementById("numberOfNights").value = rentDays;
  }
}

function removeReadonlyAndHiddenAttrs(formId) {
  let formElmnts = document.getElementById(formId).elements;
  for (let i = 0; i < formElmnts.length; i++) {
    if (formElmnts[i].id == "numberOfNights") continue;
    if (formElmnts[i].hasAttribute("readonly")) {
      formElmnts[i].removeAttribute("readonly");
    }
  }
  let noDiscountObj = document.getElementById("noDiscount");
  let yesDiscountObj = document.getElementById("yesDiscount");
  if (noDiscountObj.hasAttribute("hidden")) {
    noDiscountObj.removeAttribute("hidden");
  }
  if (yesDiscountObj.hasAttribute("hidden")) {
    yesDiscountObj.removeAttribute("hidden");
  }

  let discountLabels = document.getElementsByClassName("rad");
  discountLabels[0].removeAttribute("hidden");
  discountLabels[1].removeAttribute("hidden");

  document.getElementById("discountField").style.display = "none";
}

function calTotalPay(roomType, discount, rentDays) {
  if (rentDays > 0) {
    let servicePrice = 0;
    if (roomType == "room") servicePrice = priceOfRoom;
    else if (roomType == "house") servicePrice = priceOfHouse;
    else servicePrice = priceOfVilla;

    let voucher = parseInt(discount);
    let totalPay = parseInt(rentDays) * servicePrice * (1 - voucher / 100);
    document.getElementById("bill").value = "$" + totalPay.toFixed(2);
    return totalPay;
  }
  return 0.0;
}

customerFormObj.elements.namedItem("noDiscount").onclick = function () {
  customerFormObj.elements.namedItem("discount").value = 0;
};

customerFormObj.elements
  .namedItem("noDiscount")
  .addEventListener("click", function () {
    calTotalPay(
      customerFormObj.elements.namedItem("roomType").value,
      customerFormObj.elements.namedItem("discount").value,
      customerFormObj.elements.namedItem("numberOfNights").value
    );
  });

customerFormObj.elements
  .namedItem("discount")
  .addEventListener("change", function () {
    calTotalPay(
      customerFormObj.elements.namedItem("roomType").value,
      customerFormObj.elements.namedItem("discount").value,
      customerFormObj.elements.namedItem("numberOfNights").value
    );
  });

customerFormObj.elements
  .namedItem("checkOutDate")
  .addEventListener("change", function () {
    calRentDays(
      customerFormObj.elements.namedItem("checkInDate").value,
      customerFormObj.elements.namedItem("checkOutDate").value
    );
    calTotalPay(
      customerFormObj.elements.namedItem("roomType").value,
      customerFormObj.elements.namedItem("discount").value,
      rentDays
      // customerFormObj.elements.namedItem("numberOfNights").value
    );
  });

customerFormObj.elements
  .namedItem("roomType")
  .addEventListener("change", function () {
    calTotalPay(
      customerFormObj.elements.namedItem("roomType").value,
      customerFormObj.elements.namedItem("discount").value,
      customerFormObj.elements.namedItem("numberOfNights").value
    );
  });

// Hide the discount input field.
document.getElementById("noDiscount").addEventListener("click", function () {
  document.getElementById("discountField").style.display = "none";
});

//Show the discount input field.
document.getElementById("yesDiscount").addEventListener("click", function () {
  document.getElementById("discountField").style.display = "inline";
});

// checking whether the check-in date is valid.
document.getElementById("checkInDate").addEventListener("blur", function () {
  isValidCheckInDate(document.getElementById("checkInDate").value);
});

//Checking whether the check-out date is valid.
document.getElementById("checkOutDate").addEventListener("blur", function () {
  isValidCheckOutDate(
    document.getElementById("checkInDate").value,
    document.getElementById("checkOutDate").value
  );
});

//Open an specified page base on its id.
// tabLink[0] is corresponding with 'Add New' button.
tabLink[0].addEventListener("click", function () {
  removeReadonlyAndHiddenAttrs("customerForm");
  customerFormObj.reset();
  document.getElementById("confirmAddContainer").style.display = "block";
  document.getElementById("confirmEditContainer").style.display = "none";
  openPage("add");
});

document.getElementById("submit").addEventListener("click", function () {
  if (confirm("Confirm adding new customer.")) {
    let newCustomer = new Customer();
    newCustomer.getNewInfo();
    newCustomer.addToList();
  } else {
    alert("Cancel the process.");
  }
});

document.getElementById("refresh").addEventListener("click", function () {
  if (confirm("Reset all information.")) {
    customerFormObj.reset();
  } else {
    alert("Cancel the process.");
  }
});

function isValidEmail(email, emailPattern) {
  return emailPattern.test(email);
}

//Validate customer email.
document.getElementById("email").addEventListener("change", function () {
  let isValid = isValidEmail(document.getElementById("email").value, emailPatt);
  if (!isValid) {
    alert(
      "Email must be in pattern: characters followed by a @ character,\
      followed by alphabetic characters, followed by an '.' and then at least 2 alphabetic characters."
    );
    document.getElementById("email").value = "";
  }
});

function isValidDate(date, datePattern) {
  return datePattern.test(date);
}

//Validate customer's day of birth.
document.getElementById("dayOfBirth").addEventListener("change", function () {
  let isValid = isValidDate(
    document.getElementById("dayOfBirth").value,
    datePattern
  );
  if (!isValid) {
    alert("Date must be in pattern of dd/mm/yyyy");
    document.getElementById("dayOfBirth").value = "";
  }
});

function isValidId(id, idPattern) {
  return idPattern.test(id);
}

//Validate customer's ID.
document.getElementById("id").addEventListener("change", function () {
  if (!isValidId(document.getElementById("id").value, idPattern)) {
    alert(
      "ID must be in pattern of NNNNNNNN (8 of N) with N in range of 0-9 inclusively."
    );
    document.getElementById("id").value = "";
  }
});

//Validate number of adults.
document
  .getElementById("numberOfAdults")
  .addEventListener("change", function () {
    let quantityPatt = /^\d{1,}$/;
    if (!quantityPatt.test(document.getElementById("numberOfAdults").value)) {
      alert("The quantity must be a positive integer.");
      document.getElementById("numberOfAdults").value = "";
    }
  });

//Validate number of adults.
document
  .getElementById("numberOfChildren")
  .addEventListener("change", function () {
    let quantityPatt = /^\d{1,}$/;
    if (!quantityPatt.test(document.getElementById("numberOfChildren").value)) {
      alert("The quantity must be a positive integer.");
      document.getElementById("numberOfChildren").value = "";
    }
  });

window.onload = tabLink[3].click();
window.onload = tabLink[0].click();
