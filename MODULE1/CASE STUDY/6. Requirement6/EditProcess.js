//Sample customers.
let sampleCustomer1 = new Customer(
  "Hoai",
  "Do Viet",
  "1",
  "1995-02-09",
  "Dong Ke",
  "Da Nang",
  "Da Nang",
  "+84",
  "12345678",
  "hoai@gmail.com",
  "2021-01-25",
  "14:00",
  "2021-01-27",
  "12:00",
  2,
  2,
  2,
  "room",
  "gold",
  20,
  "Quiet area",
  160
);
let sampleCustomer2 = new Customer(
  "Nhan",
  "Truong Trong",
  "2",
  "1995-01-24",
  "Mai Xuan Thuong",
  "Quy Nhon",
  "Binh Dinh",
  "+84",
  "44444444",
  "nhan@gmail.com",
  "2021-01-25",
  "14:00",
  "2021-02-27",
  "12:00",
  1,
  1,
  1,
  "house",
  "platinum",
  30,
  "Near beach",
  320
);
customerList.push(sampleCustomer1, sampleCustomer2);

function createEditTable() {
  let table =
    '<table id="cusList"><tr><th>Index</th><th>Customer Name</th><th>Check-in Date</th><th>Check-out Date</th><th colspan="3"></th></tr>';
  const listSize = customerList.length;
  for (let i = 0; i < listSize; i++) {
    table +=
      "<tr><td>" +
      (i + 1) +
      "</td><td>" +
      customerList[i].getFullName() +
      "</td><td>" +
      customerList[i].getCheckInDate() +
      "</td><td>" +
      customerList[i].getCheckOutDate() +
      "</td>" +
      '<td><button type="button" class="modifyBut" onclick="customerList[' +
      i +
      '].showDetailInfo()">Detail</button></td>\
        <td><button type="button" class="modifyBut" onclick="customerList[' +
      i +
      "].editInfo(); getUpdatedInfo(" +
      i +
      ');">Edit</button></td>\
        <td><button type="button" class="modifyBut">Delete</button></td></tr>';
  }
  table += "</table>";
  let editObj = document.getElementById("editTable");
  editObj.style.display = "block";
  editObj.innerHTML = table;
}

// function showDetailInfo(index) {
//   let formObj = document.getElementById("customerForm");
//   for (let i = 0; i < numberOfInfo; i++) {
//     formObj.elements.namedItem(info[i]).value = customerList[index][info[i]];
//   }
//   tabLink[0].click();
// }

//tabLink[1] is corresponding with 'View All' button.
tabLink[1].addEventListener("click", function () {
  createEditTable();
  openPage("view");
});
