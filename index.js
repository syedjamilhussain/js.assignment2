alert("hay this is my 2nd assignment \n wecome... !")
var num1 = 5;
var num2 = 3;
var sum = (num1 + num2);
document.write("add", ":" + sum + "<br>");

var num1 = 5;
var num2 = 3;


var difference = num1 - num2;


document.write("sub" + ":", difference + "<br>");
var product = num1 * num2;
document.write("Multiplication Result: " + product + "<br>");
var quotient = num1 / num2;
document.write("Division Result: " + quotient + "<br>");
var remainder = num1 % num2;
document.write("Modulus Result: " + remainder);



var myVar;


document.write("Value after variable declaration is: " + myVar + "<br>");


myVar = 5;


document.write("Initial value: " + myVar + "<br>");


myVar++;


document.write("Value after increment is: " + myVar + "<br>");


myVar += 7;


document.write("Value after adding 7 is: " + myVar + "<br>");

var myVar;


document.write("Value after variable declaration is: " + myVar + "<br>");


myVar = 13;
document.write("Initial value: " + myVar + "<br>");


myVar--;


document.write("Value after decrement is: " + myVar + "<br>");

var remainder = myVar % 3;
document.write("The remainder is: " + remainder + "<br>");

var ticketPrice = 600;


var totalCost = ticketPrice * 5;


document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR");

// var number = 4;

// document.write("<h2>Table of " + number + "</h2>");

// for (var i = 1; i <= 10; i++) { }

//     document.write(number + " x " + i + " = " + (number * i) + "<br>");

var celsiusTemp = 25;


var fahrenheitFromCelsius = (celsiusTemp * 9 / 5) + 32;
document.write(celsiusTemp + "°C is " + fahrenheitFromCelsius + "°F" + "<br>");


var fahrenheitTemp = 77;


var celsiusFromFahrenheit = (fahrenheitTemp - 32) * 5 / 9;
document.write(fahrenheitTemp + "°F is " + celsiusFromFahrenheit.toFixed(2) + "°C" + "<br>");

var priceItem1 = 650;
var priceItem2 = 500;
var quantityItem1 = 3;
var quantityItem2 = 2;
var shippingCharges = 150;


var totalCostItem1 = priceItem1 * quantityItem1;
var totalCostItem2 = priceItem2 * quantityItem2;


var subtotal = totalCostItem1 + totalCostItem2;


var totalCost = subtotal + shippingCharges;


document.write("<h1>Receipt</h1>");
document.write("<p>Item 1: pak" + totalCostItem1.toFixed(2) + "</p>");
document.write("<p>Item 2: pak" + totalCostItem2.toFixed(2) + "</p>");
document.write("<p>Subtotal: pak" + subtotal.toFixed(2) + "</p>");
document.write("<p>Shipping Charges: pak" + shippingCharges.toFixed(2) + "</p>");
document.write("<h2>Total Cost: pak" + totalCost.toFixed(2) + "</h2>" + "<br>");
var totalMarks = 980;
var marksObtained = 804;


var percentage = (marksObtained / totalMarks) * 100;


document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + marksObtained + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>" + "<br>");
var usDollarRate = 306.80;
var saudiRiyalRate = 45;


var usDollars = 10;
var saudiRiyals = 25;

var totalInPakRupees = (usDollars * usDollarRate) + (saudiRiyals * saudiRiyalRate);


document.write("<p>Total in Pakistani Rupees: PKR " + totalInPakRupees.toFixed(2) + "</p>" + "<br>")
{/* <h2>Arithmetic Calculation</h2> */ }



var number = 20;


var result = ((number + 5) * 10) / 2;


document.write("<p>Starting Number: " + number + "</p>");
document.write("<p>Result after arithmetic: " + result + "</p>" + "<br>");

var currentYear = new Date().getFullYear();


var birthYear = 1990;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;


document.write("They are either " + age2 + " or " + age1 + " years old." + "<br>" + "<br>");

let num = 7;

let result2 = (num + 5) * 10 / 2;

document.write("Q 10 answer :" + result2 + "<br>");

let radius = 5;

//  (C = 2 * π * r)
let circumference = 2 * Math.PI * radius;

let area = Math.PI * Math.pow(radius, 2);


document.write(`The circle with radius ${radius} has a circumference of ${circumference.toFixed(2)} and an area of ${area.toFixed(2)}.` + "<br");

let favoriteSnack = "chocolate bars";


let currentAge = 25;


let maxAge = 90;


let amountPerDay = 2;


let totalSnacks = (maxAge - currentAge) * 365.25 * amountPerDay;


console.log(totalSnacks);
document.write("num of chocolate :" + totalSnacks);
