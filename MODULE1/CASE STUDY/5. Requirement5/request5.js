let info = [
  "fullname",
  "id",
  "dayOfBirth",
  "email",
  "address",
  "membership",
  "discount",
  "children",
  "rentDays",
  "serviceType",
  "roomType",
];
let title = [
  "Name",
  "ID",
  "Day of birth",
  "Email",
  "Address",
  "Membership",
  "Discount",
  "Children",
  "Rent Days",
  "Type of service",
  "Type of room",
];
let amountOfInfo = info.length;

class Customer {
  constructor(
    fullname,
    id,
    dayOfBirth,
    email,
    address,
    membership,
    discount,
    children,
    rentDays,
    serviceType,
    roomType
  ) {
    this.fullname = fullname;
    this.id = id;
    this.dayOfBirth = dayOfBirth;
    this.email = email;
    this.address = address;
    this.membership = membership;
    this.discount = discount;
    this.children = children;
    this.rentDays = rentDays;
    this.serviceType = serviceType;
    this.roomType = roomType;
  }
  get cusInfo() {
    let information = "";
    for (let i = 0; i < amountOfInfo; i++) {
      information += i + 1 + ". " + title[i] + ": " + this[info[i]] + "<br>";
    }
    return information;
  }
}

let customerListArr = [];

function openPage(pageName, elmnt, color) {
  let tabContent, tabLink;
  //Hide all elements with class="tabcontent" by default.
  tabContent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabContent.length; i++)
    tabContent[i].style.display = "none";
  //Set background color of unselected tab links to their default color.
  tabLink = document.getElementsByClassName("tablink");
  for (let i = 0; i < tabLink.length; i++)
    tabLink[i].style.backgroundColor = "";
  //Show a specific page content.
  document.getElementById(pageName).style.display = "block";
  //Set a specific tab link / button to background color of color.
  elmnt.style.backgroundColor = color;
}

function getNewCustomer() {
  let customer = new Customer("", 0, "", "", "", "", 0, 0, 0, "", "");
  for (let i = 0; i < amountOfInfo; i++) {
    customer[info[i]] = document.getElementById(info[i]).value;
  }
  return customer;
}

function resetInputsInForm(formId) {
  document.getElementById(formId).reset();
}

function addNewCustomerToList() {
  let newCustomer = getNewCustomer();
  if (confirm("Confirm adding new customer to the list.")) {
    customerListArr.push(newCustomer);
    // alert("Completed");
    resetInputsInForm("customerForm");
  }
}

function getCustomerList() {
  let content = "";
  let amountOfCustomer = customerListArr.length;
  for (let i = 0; i < amountOfCustomer; i++) {
    content +=
      "<b>Customer " +
      (i + 1) +
      " :</b><br>" +
      customerListArr[i].cusInfo +
      "<br>";
  }
  return content;
}

function displayCustomerList() {
  document.getElementById("content").innerHTML = getCustomerList();
}

function showDetailOfCustomer(index) {
  let targetObj = document.getElementById("edit2");
  if (targetObj.style.display === "none") {
    targetObj.style.display = "block";
  } else {
    targetObj.style.display = "none";
  }
  targetObj.innerHTML = customerListArr[index].cusInfo;
}

function createEditTable() {
  table =
    '<table id="customerList"><tr><th>Index</th><th>Customer Name</th><th></th><th></th><th></th></tr>';
  let amountOfCustomer = customerListArr.length;
  for (let i = 0; i < amountOfCustomer; i++) {
    table +=
      "<tr><td>" +
      (i + 1) +
      "</td><td>" +
      customerListArr[i].fullname +
      '</td><td><button type="button" class="modifyBut" onclick="showDetailOfCustomer(' +
      i +
      ')">Detail</button></td>\
      <td><button type="button" class="modifyBut" onclick="editCustomer(' +
      i +
      ')">Edit</button></td>\
      <td><button type="button" class="modifyBut" onclick="deleteCustomer(' +
      i +
      ')">Delete</button></td></tr>';
  }
  table += "</table>";

  document.getElementById("edit1").innerHTML = table;
}

function editCustomer(index) {
  let targetObj = document.getElementById("edit3");
  let content = '<form id="updatedCustomerForm">';
  content +=
    '<span><div class="nameField"><label>1. Name: </label></div>\
        <div class="inputField">\
        <textarea id="updatedFullname" name="fullName" cols="30" >\
        ' +
    customerListArr[index].fullname +
    '</textarea>\
    </div>\
    </span><br>\
    <span>\
      <div class="nameField"><label>2. ID: </label></div>\
      <div class="inputField"><input type="number" id="updatedId" name="idNumber" value=' +
    customerListArr[index].id +
    '></div></span><br>\
    <span>\
      <div class="nameField">\
        <label>3. Birthday: </label>\
        </div>\
        <div class="inputField">\
          <input type="text" id="updatedDayOfBirth" name="birthday" value=' +
    customerListArr[index].dayOfBirth +
    '>\
        </div>\
    </span><br>\
    <span>\
      <div class="nameField">\
        <label>4. Email: </label>\
      </div>\
      <div class="inputField">\
        <input type="email" id="updatedEmail" name="email" value=' +
    customerListArr[index].email +
    '>\
      </div>\
    </span><br>\
    <span>\
      <div class="nameField">\
        <label>5. Address: </label>\
      </div>\
      <div class="inputField">\
        <textarea id="updatedAddress" name="address" cols="50">\
        ' +
    customerListArr[index].address +
    '</textarea>\
      </div>\
    </span><br>\
    <span>\
      <div class="nameField">\
        <label for="membership">6. Membership</label>\
        <input type="input" size="10" readonly value=' +
    customerListArr[index].membership +
    '><br>\
      </div>\
      <div class="inputField">\
        <select id="updatedMembership">\
          <option value="member">Member</option>\
          <option value="silver">Silver</option>\
          <option value="gold">Gold</option>\
          <option value="platinum">Platinum</option>\
          <option value="diamond">Diamond</option>\
        </select>\
      </div>\
    </span>\
      <span>\
        <div class="nameField">\
          <label>7. Discount: </label>\
        </div>\
        <div class="inputField">\
          <input type="number" id="updatedDiscount" name="discount" value=' +
    customerListArr[index].discount +
    '>\
        </div>\
      </span><br>\
      <span>\
        <div class="nameField">\
          <label>8. Children: </label>\
        </div>\
        <div class="inputField">\
          <input type="number" id="updatedChildren" name="children" value=' +
    customerListArr[index].children +
    '>\
        </div>\
      </span><br>\
      <span>\
        <div class="nameField">\
          <label>9. Rent days: </label>\
        </div>\
        <div class="inputField">\
          <input type="number" id="updatedRentDays" name="rentdays" value=' +
    customerListArr[index].rentDays +
    '>\
        </div>\
      </span><br>\
      <span>\
        <div class="nameField">\
          10. Service:<br>\
          <input type="text" size="10" readonly value=' +
    customerListArr[index].serviceType +
    '> \
        </div>\
        <div class="inputField">\
          <select name="service" id="updatedServiceType">\
            <option value="room">Room</option>\
            <option value="house">House</option>\
            <option value="villa">Villa</option>\
          </select>\
        </div>\
      </span><br>\
      <span>\
        <div class="nameField">\
          11. Room:<br>\
          <input type="text" size="10" readonly value=' +
    customerListArr[index].roomType +
    '> \
        </div>\
        <div class="inputField">\
          <select name="roomType" id="updatedRoomType">\
            <option value="normal">Normal</option>\
            <option value="business">Business</option>\
            <option value="vip">Vip</option>\
          </select>\
        </div>\
      </span><br />\
      <input\
        type="button"\
        name="confirm"\
        id="confirmUpdate"\
        onclick="getUpdatedCustomer(' +
    index +
    ')"\
        value="Confirm"\
      />\
      ';
  content += "</form>";
  if (targetObj.style.display === "none") {
    targetObj.style.display = "block";
  } else {
    targetObj.style.display = "none";
  }
  targetObj.innerHTML = content;
}

function getUpdatedCustomer(index) {
  let updatedForm = document.forms["updatedCustomerForm"];
  if (confirm("Confirm changing customer info.")) {
    customerListArr[index].fullname = updatedForm["updatedFullname"].value;
    customerListArr[index].id = updatedForm["updatedId"].value;
    customerListArr[index].dayOfBirth = updatedForm["updatedDayOfBirth"].value;
    customerListArr[index].email = updatedForm["updatedEmail"].value;
    customerListArr[index].address = updatedForm["updatedAddress"].value;
    customerListArr[index].membership = updatedForm["updatedMembership"].value;
    customerListArr[index].discount = updatedForm["updatedDiscount"].value;
    customerListArr[index].children = updatedForm["updatedChildren"].value;
    customerListArr[index].rentDays = updatedForm["updatedRentDays"].value;
    customerListArr[index].serviceType =
      updatedForm["updatedServiceType"].value;
    customerListArr[index].roomType = updatedForm["updatedRoomType"].value;
    alert("Updating Successfully");
    document.getElementById("edit2").style.display = "none";
    document.getElementById("edit3").style.display = "none";
  } else {
    alert("Cancel Process");
  }
}

function deleteCustomer(index) {
  if (confirm("Confirm removing this customer from the list.")) {
    customerListArr.splice(index, 1);
    alert("Delete Successfully");
    createEditTable();
    document.getElementById("edit2").style.display = "none";
    document.getElementById("edit3").style.display = "none";
  } else {
    alert("Cancel process");
  }
}

document.getElementById("defaultOpen").click();
//Get the element with id="defaultopen" and click on it.
//document.getElementById("defaultopen").click();
//getCustomerList();
