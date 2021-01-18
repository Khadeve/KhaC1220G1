let product = ["Sony Xperia", "Samsung Galaxy", "Iphone12"];
let table = "";
let contObj = document.getElementById("products");

function showTable() {
  contObj.innerHTML = table;
}

function createContentOfTable(list) {
  table = '<table id="productList"><tr><th></th><th>Product Name</th></tr>';
  let len = list.length;
  for (let i = 0; i < len; i++) {
    table +=
      "<tr><td>" +
      (i + 1) +
      "</td><td>" +
      list[i] +
      '</td><td><button class="editbutton" onclick="editProduct('+ i +')">Edit</button></td><td><button class="delbutton" onclick="deleteProduct(' +
      i +
      ')">Delete</button></td></tr>';
  }
  table += "</table>";
}

function addNewProduct() {
  let newItem = document.getElementById("newProduct").value;
  if (newItem) {
    if (confirm("Confirm add new product")) {
      product.push(newItem);
      createContentOfTable(product);
      showTable();
    }
  } else {
    alert("You have not entered name of product.");
  }
  document.getElementById("newProduct").value = "";
}

function deleteProduct(index) {
  if (confirm("Are you sure to remove the " + product[index] + "?")) {
    product.splice(index, 1);
    createContentOfTable(product);
    showTable();
  } else {
    alert("Be careful");
  }
}

function editProduct(index) {
    let newInfo = prompt("Please enter the new info:");
    if(newInfo) {
        if (confirm("Confirm changing info.")) {
            product[index] = newInfo;
            createContentOfTable(product);
            showTable();
        }
    } else {
        alert("Please enter the new info.");
    }
}

createContentOfTable(product);
showTable();
