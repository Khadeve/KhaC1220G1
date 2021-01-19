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

// let customer1 = new Customer("3", 1, "1", "1", "1", "1", 1, 1, 1, "1", "2");
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

function getRadioValue(radioValue) {
  document.getElementById("radioValue").value = radioValue;
}

function getCustomerObject() {
  let customer = new Customer();
  for (let i = 0; i < amountOfInfo; i++) {
    if (i == 5) {
      customer.membership = document.getElementById("radioValue").value;
    } else {
      customer[info[i]] = document.getElementById(info[i]).value;
    }
  }
  return customer;
}

function addNewCustomerToList() {
  let newCustomer = getCustomerObject();
  if (confirm("Confirm adding new customer to the list.")) {
    customerListArr.push(newCustomer);
    alert("Completed");
    resetInputInForm("customerForm");
  }
}

function getCustomerList() {
  let content = "";
  let amountOfCustomer = customerListArr.length;
  for (let i = 0; i < amountOfCustomer; i++) {
    content += "<b>Customer" + (i + 1) + ":</b><br>" + customerListArr[i].cusInfo + "<br>";
  }
  return content;
}

function resetInputInForm(formId) {
  document.getElementById(formId).reset();
}

function displayCustomerList() {
  let content = getCustomerList();
  if (content != "") {
    document.getElementById("content").innerHTML = getCustomerList();
  }
}


document.getElementById("defaultOpen").click();
//Get the element with id="defaultopen" and click on it.
//document.getElementById("defaultopen").click();
//getCustomerList();
