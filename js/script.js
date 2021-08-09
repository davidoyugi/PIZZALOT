var pizzaPrice = [1100, 800, 550]
var transport = [0, 500];
var pizzaName;
$(document).ready(function() {
    $('form#orderForm').submit(function(event) {
        event.preventDefault();
        var name = $('#name').val();
        var contact = parseInt($('#contact').val());
        var pizzaSize = parseInt($('#size').val());
        var pizzaCrust = parseInt($('#crust').val());
        var pizzaTopping = parseInt($('#topping').val());
        var pizzaQuantity = parseInt($('#quantity').val());
        var pizzaDeliver = parseInt($('#deliver').val());
        var location = $('#location').val();
        var price = pizzaPrice[pizzaSize - 1];
        var DeliveryCost = transport[pizzaDeliver - 1];
        newOrder = new Order(pizzaSize);
        newAccompany1 = new Accompany1(pizzaCrust);
        newAccompany2 = new Accompany2(pizzaTopping);
        newTotal = new Total(price, pizzaQuantity, DeliveryCost, pizzaCrust, pizzaTopping);
        if (pizzaDeliver === 1) {
            alert("Dear " + name + ", Your oder contains " + newOrder.pizzaOrder() + " made of " + newAccompany1.crustAccompany1() + "crust, and " + newAccompany2.toppingAccompany2() + " topping. Continue to see your total bill");
            alert("Your bill is: " + newTotal.finalTotal() + ".You will receive your pizza in the next few minutes");
        } else {
            if (pizzaDeliver === 2) {
                var trans = 400;
                var showTotal = trans + newTotal.finalTotal()
                alert("Dear " + name + ", Your oder contains " + newOrder.pizzaOrder() + " made of " + newAccompany1.crustAccompany1() + "crust, and " + newAccompany2.toppingAccompany2() + " topping. Continue to see your total bill");
                alert("Your bill is: " + showTotal + ".You pizza will be delevered at location " + location + " in the next 30minutes");
            }
        }​
    });

    function Total(price, quantity, crust, topping, delivery) {
        this.price = price;
        this.quantity = quantity;
        this.delivery = delivery;
        this.crust = crust;
        this.topping = topping;
    }

    Total.prototype.finalTotal = function() {
        return this.price * this.quantity + this.crust + this.topping;

    };

    ​
    function Order(size, pizzaName) {
        this.size = size;
        this.pizzaName = pizzaName;
        if (this.size === 1) {
            return this.pizzaName = "Large Pizza";
        } else if (this.size === 2) {
            return this.pizzaName = "Medium Pizza";
        } else {
            return this.pizzaName = "Small Pizza";
        }

    }

    Order.prototype.pizzaOrder = function() {
        return this.pizzaName;
    };

    function Accompany1(crust, crustName) {
        this.crust = crust;
        this.crustName = crustName;
        if (this.crust === 100) {
            return this.crustName = "Cripsy";
        } else if (this.crust === 150) {
            return this.crustName = "Stuffed";
        } else {
            return this.crustName = "Gluten-free";
        }

    }

    Accompany1.prototype.crustAccompany1 = function() {
        return this.crustName;
    };

    function Accompany2(topping, toppingName) {
        this.topping = topping;
        this.toppingName = toppingName;
        if (this.topping === 50) {
            return this.toppingName = "Mushrooms";
        } else if (this.topping === 70) {
            return this.toppingName = "Pepperoni";
        } else if (this.topping === 100) {
            return this.toppingName = "Bacon";
        } else {
            return this.toppingName = "Cheese";
        }

    }

    Accompany2.prototype.toppingAccompany2 = function() {
        return this.toppingName;
    };
});