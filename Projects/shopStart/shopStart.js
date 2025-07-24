var nums = [1, 2, 3, 4];
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"];
var prices = [7.5, 9.5, 8.5, 7.5];
var quantities = [0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;

function add_selection(x) {
    console.log(x);
    quantities[x] = quantities[x] + 1;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt += prices[x];

    display_all();
}

function remove_selection(x) {

    if (quantities[x] > 0) {
        console.log(x);
        quantities[x] = quantities[x] - 1;

        totals[x] = prices[x] * quantities[x];
        totalOrderAmt -= prices[x];
        display_all();
    }


}

function checkout() {
    let receipt = "<h2> Receipt</h2>";
    receipt += "<table border='1' cellspacing='0' cellpadding='5'>";
    receipt += "<tr><th>Item</th><th>Qty</th><th>Price</th><th>Total</th></tr>";

    let hasItems = false;

    for (let i = 0; i < items.length; i++) {
        if (quantities[i] > 0) {
            hasItems = true;
            receipt += "<tr>";
            receipt += "<td>" + items[i] + "</td>";
            receipt += "<td>" + quantities[i] + "</td>";
            receipt += "<td>R" + prices[i].toFixed(2) + "</td>";
            receipt += "<td>R" + totals[i].toFixed(2) + "</td>";
            receipt += "</tr>";
        }
    }

    if (hasItems) {
        receipt += "<tr><td colspan='3' style='text-align: right; font-weight: bold;'>Total</td>";
        receipt += "<td><strong>R" + totalOrderAmt.toFixed(2) + "</strong></td></tr>";
        receipt += "</table>";
    } else {
        receipt = "<p style='color: red;'>Nothing selected, bro! Pick something before you checkout 😅</p>";
    }

    document.getElementById("receipt").innerHTML = receipt;
}






function display_all() {



    var myTable = "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Remove</th>";   //



    for (i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + prices[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + totals[i] + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td><button onclick='remove_selection(" + i + ")'>Remove</button></td>";
    }

    myTable += "</table>";
    myTable += "<br/><br/><p>Total: " + totalOrderAmt + "</p>";



    // document.write(myTable);
    document.getElementById("demo").innerHTML = myTable;

    let myCheckout = "<button onclick='checkout()' style='padding: 10px 20px; font-weight: bold;'>Checkout</button>";
    document.getElementById("checkoutSection").innerHTML = myCheckout;


}

window.onload = function () {
    display_all();
}