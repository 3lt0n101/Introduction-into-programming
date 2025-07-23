// declare globals
var money = prompt('How is your Budget this week');
var lunches = 0;

//display lunch budget
document.getElementById("money").innerHTML = money;

//listen for order
// orderButton = document.getElementById("placeOrder");
// orderButton.addEventListener("click", buyLunches);

document.getElementById("placeOrder").addEventListener("click", buyLunches);

/*
buys specified number of sandwiches per day at current prices
*/
function buyLunches() {
    resetForm();
    var day = 0;
    while (money > 0) {
        day++;
        var priceToday = (Math.random() * (1 - 0) + 1).toFixed(2);
        var numberOfSandwiches = document.getElementById("numSandwiches").value;
        var totalPrice = priceToday * numberOfSandwiches;
        var fullamount

        if (money >= totalPrice) {
            money = money - totalPrice;
            fullamount =+ money;
            lunches++;
            document.getElementById("receipt").innerHTML += "<p>On day " + day + ", sandwiches are: $" + priceToday + ". You have $" + money.toFixed(2) + " left.</p>";

        } else {
            document.getElementById("receipt").innerHTML += "<p>Today, sandwiches are: $" + priceToday + ". You don't have enough money. Maybe your sister will give you some of her sandwich total money used $.</p>" + fullamount.toFixed(2)*numberOfSandwiches;
            money = 0;
        }

    }
    document.getElementById("receipt").innerHTML += "<p>You bought " + lunches + " lunches this week.</p>";

}

/*
gets the current price of sandwiches
*/
function getSandwichPrice() {
    var sandwichPrice = (Math.random() * (1 - 0) + 1).toFixed(2);
    return sandwichPrice;
}

/*
resets the game so that a new order can be placed
*/
function resetForm() {
   // money = prompt('How is your Budget this week');
    lunches = 0;
    document.getElementById("receipt").innerHTML = "";

}

