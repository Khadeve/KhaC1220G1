let mainMenu =
  "1. Add New Customer\n2. Display Customer Information\n3. Edit Customer Information\n4. Delete Customer\n5. Exit\n\n";

let customerListArr = [];
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

function Customer(
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

function getCustomerInfo() {
  let customer = new Customer("", 0, "", "", "", "", 0, 0, 0, "", "");
  for (let i = 0; i < amountOfInfo; i++) {
    if (i == 5) {
      customer.membership = document.getElementById("radioValue").value;
      alert(customer.membership);
    } else {
      customer[info[i]] = document.getElementById(info[i]).value;
    }
  }
  console.log(customer);
  return customer;
}

function getCustomerList(list) {
  let content = "";
  let amountOfCustomer = list.length;
  for (let i = 0; i < amountOfCustomer; i++) {
    content += "Customer" + (i + 1) + ":\n" + getInfoOfCustomer(list[i]) + "\n";
  }
  return content;
}

function addNewCustomerToList(list, newCustomer) {
  list.push(newCustomer);
}

function editCustomer(customer) {
  let c;
  do {
    c = false;
    let flag, editOpt;
    do {
      flag = false;
      editOpt = prompt(
        getInfoOfCustomer(customer) +
          "\n***Please enter the index of info you want to edit:"
      );
      if (editOpt != null) {
        if (editOpt < 1 || editOpt > amountOfInfo || isNaN(editOpt)) {
          alert("Invalid index");
          flag = true;
        }
      } else {
        break;
      }
    } while (flag);

    //Checking if Cancel is entered.
    if (editOpt == null) {
      if (confirm("Do you want to exit editing operation?")) {
        break;
      } else {
        c = true;
        continue;
      }
    }

    for (let i = 0; i < amountOfInfo; i++) {
      if (editOpt == i + 1) {
        if (i == 5) {
          customer[info[i]] = prompt(
            "***Enter a new info:\n1. Member\n2. Silver\n3. Gold\n4. Platinum\n5. Diamond\n"
          );
        } else if (i == 9) {
          customer[info[i]] = prompt(
            "***Enter a new info:\n1. Room\n2. House\n3. Villa\n"
          );
        } else if (i == 10) {
          customer[info[i]] = prompt(
            "***Enter a new info:\n1. Normal\n2. Business\n3. Vip\n"
          );
        } else {
          customer[info[i]] = prompt("***Enter a new info:");
        }
        break;
      }
    }
    c = confirm("Update successfully. Do you want to continue to edit?");
  } while (c);
}

function editCustomerInList(list) {
  let c;
  do {
    // let choice = "";
    // let listLen = list.length;
    // //Creating choices based on customer names.
    // for (let i = 0; i < listLen; i++) {
    //   choice += i + 1 + ". " + list[i].fullname + "\n";
    // }
    c = false;
    let listLen = list.length;
    //Checking whether the index entered is valid.
    let flag, editIndex;
    do {
      flag = false;
      editIndex = prompt(
        getCustomerList(list) + "***Please enter the index of customer:"
      );
      if (editIndex != null) {
        if (editIndex < 1 || editIndex > listLen || isNaN(editIndex)) {
          alert("Invalid index");
          flag = true;
        }
      } else {
        break;
      }
    } while (flag);

    //Checking if Cancel is entered.
    if (editIndex == null) {
      if (confirm("Do you want to exit editing operation?")) {
        break;
      } else {
        c = true;
        continue;
      }
    }
    //Editing customer with the corresponding index.
    editCustomer(list[parseInt(editIndex) - 1]);
    c = confirm(
      "Editing the customer successfully.\nDo you want to continue to edit another customer?"
    );
  } while (c);
}

//Get the element with id="defaultopen" and click on it.
document.getElementById("defaultopen").click();
