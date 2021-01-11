//Global variables.
let rentDays = 0, totalPay = 0;

function displayGuestInfo() {
    let displayWindow = window.open('', 'displayWin', 'width=600px, height=600px');
    let content = '<ul><li><b>Full name:</b> ' + document.guestForm.fname.value + ' ' + document.guestForm.lname.value + '</li>';
    content += '<li><b>ID: </b>' + document.guestForm.idDoc.value + '</li>';
    content += '<li><b>Day of birth: </b>' + document.guestForm.birthday.value + '</li>';
    content += '<li><b>Address: </b>' + document.guestForm.street.value + ' - ' +
    document.guestForm.city.value + ' - ' + document.guestForm.state.value + '</li>';
    content += '<li><b>Phone: </b>' + document.guestForm.areaCode.value + ' - ' + document.guestForm.phone.value + '</li>';
    content += '<li><b>Email: </b>' + document.guestForm.email.value + '</li>';
    content += '<li><b>Arrival day: <b><span style="font-weight:normal">' + document.guestForm.arvDate.value + ' - ' + document.guestForm.arvTime.value + '</span></li>';
    content += '<li><b>Departure day: <b><span style="font-weight:normal">' + document.guestForm.depDate.value + ' - ' + document.guestForm.depTime.value + '</span></li>';
    content += '<li><b>Adult: </b><span style="font-weight:normal">' + document.guestForm.adultNumber.value + '</span></li>';
    content += '<li><b>Children: </b><span style="font-weight:normal">' + document.guestForm.chilNumber.value + '</span></li>';
    content += '<li><b>Nights: </b><span style="font-weight:normal">' + document.guestForm.nightNumber.value + '</span></li>';
    let roomPrice = document.guestForm.category.value;
    switch(roomPrice) {
        case "100":
            content += '<li><b>Accommodation category: </b><span style="font-weight:normal">Room</span></li>';
            break;
        case "300":
            content += '<li><b>Accommodation category: </b><span style="font-weight:normal">House</span></li>';
            break;
        case "500":
            content += '<li><b>Accommodation category: </b><span style="font-weight:normal">Villa</span></li>';
    }
    content += '<li><b>Room classification: </b><span style="font-weight:normal">' + document.guestForm.classify.value + '</span></li>';
    content += '<li><b>Customer classification: </b><span style="font-weight:normal">' + document.guestForm.customerType.value + '</span></li>';
    if (document.guestForm.discount.value == '1') {
        content += '<li><b>Discount: </b><span style="font-weight:normal">' + document.guestForm.applyDiscount.value + '%</span></li>';
    }
    else {
        content += '<li><b>Discount: </b><span style="font-weight:normal">0%</span></li>';
    }
    content += '<li><b>Special request: <br><span style="font-weight:normal">' + document.guestForm.specialRequest.value + '</span></li>';
    content += '<li><b>Total: </b>$' + totalPay + '</li></ul>';
    displayWindow.document.write(content);
}

function showDiscountInput() {
    // document.guestForm.discountInput.style.display = 'inline';
    document.getElementById('discountInput').style.display = 'inline';
}

function hideDiscountInput() {
    document.getElementById('discountInput').style.display = 'none';
}

function dateStrToDateObject(dateStr) {
    let dateObject = new Date();
    let year = dateStr.slice(0, 4);
    let month = dateStr.slice(5, 7);
    let day = dateStr.slice(8, 10);
    dateObject.setFullYear(year, month, day);
    return dateObject;
}

function calRentDays(checkInDate, checkOutDate) {
    let dateObject1 = dateStrToDateObject(checkInDate);
    let dateObject2 = dateStrToDateObject(checkOutDate);
    let msec1 = dateObject1.getTime();
    let msec2 = dateObject2.getTime();
    if (msec1 > msec2) {
        rentDays = -1;
    }
    else if (msec1 < msec2) {
        rentDays = (msec2 - msec1) / 86400000;
    }
    else {
        rentDays = 0;
    }
    return rentDays;
}

function checkValidStayPeriod(dateStr1, dateStr2) {
    calRentDays(dateStr1, dateStr2);
    if (rentDays == -1) {
        alert("Check-out date cannot be less than check-in date!");
    }
    else if (rentDays >= 1) {
        document.guestForm.nightNumber.value = rentDays;
    }
    //Further consider the case in which check = 0.
}

function calTotalPay(servicePrice, discount) {
    if (rentDays > 0) {
        let price = parseInt(servicePrice);
        let voucher = parseInt(discount);
        totalPay = rentDays * price * (1 - voucher / 100);
        document.getElementById("bill").innerHTML = "$" + totalPay.toFixed(0);
    }
}