  //      ASSIGNMENT 2 

//      CHAPTER : NO : 4

//      QUESTION : NO : 1

// let a = 1, b = 2, c = 3;

//      QUESTION : NO : 2

//         // Legal variable
// var myVariable;
// var user_age;
// var $hello;
// var ayyan1234;
// var Ayyanali;

//          Ilegal vaariable
// var 1myVariable;
// var user-age;
// var hello world;
// var var;
// var syedayyanali@;

//    QUESTION : NO :3

// const heading = document.createElement("h1");
// heading.textContent = "Rules for naming JS variables";
// document.body.appendChild(heading);

// document.write("</br></br>Variable names can only contain . number. $ and _ . For example : $my_1stVariable")
// document.write("</br>Variables must begin with a letter, $ or _ . For example $name, _name or name")
// document.write("</br>Variable names are case sensetive")
// document.write("Variable names should not be JS keywords")

//      CHAPTER : NO : 5

//     QUESTION : NO : 1

// const a = "3";
// const b = "5";


// const heading = document.createElement("h1");
// heading.textContent = "Sum of 3 and 5 is " + (parseInt(a) + parseInt(b));
// document.body.appendChild(heading);

//    QUESTION : NO : 2
// const a = "3";
// const b = "5";
// console.log(a * b);
// console.log(a - b);
// console.log(a / b);
// console.log(a % b);


// const Multiplication = document.createElement("h1");
// Multiplication.textContent = "Sum of 3 and 5 is " + (parseInt(a) * parseInt(b));
// document.body.appendChild(Multiplication);

// const subtract = document.createElement("h1");
// subtract.textContent = "Sum of 3 and 5 is " + (parseInt(a) - parseInt(b));
// document.body.appendChild(subtract);

// const division = document.createElement("h1");
// division.textContent = "Sum of 3 and 5 is " + (parseInt(a) / parseInt(b));
// document.body.appendChild(division);

// const Modulus = document.createElement("h1");
// Modulus.textContent = "Sum of 3 and 5 is " + (parseInt(a) % parseInt(b));
// document.body.appendChild(Modulus);

//   QUESTION : NO : 3

// var a;
// const partb = document.createElement("h1");
// partb.textContent = ("Value after variable after declaration is " + a);
// document.body.appendChild(partb);

// a = 5;
// const partc = document.createElement("h1");
// partc.textContent = ("Initial value:" + a);
// document.body.appendChild(partc);

// var b = 1;
// const partd = document.createElement("h1");
// partd.textContent = "Value after increment is:" + (parseInt(a) + parseInt(b));
// document.body.appendChild(partd);

// var c = 7;
// const parthe = document.createElement("h1");
// parthe.textContent = "Value after addition is:" + (parseInt(a) + parseInt(b) + parseInt(c));
// document.body.appendChild(parthe);

// var d = 1;
// const parti = document.createElement("h1");
// parti.textContent = "Value after decrement is:" + (parseInt(a) + parseInt(b) + parseInt(c) - parseInt(d));
// document.body.appendChild(parti);

// const dividend = (parseInt(a) + parseInt(b) + parseInt(c) - parseInt(d));;
// const divisor = 3;
// const remainder = dividend % divisor; 

// const heading = document.createElement('h1');
// document.body.appendChild(heading);

//     QUESTION : NO :4


//  const ticketPrice = 600;
//  const numberOfTickets = 5;
//  const totalCost = ticketPrice * numberOfTickets;

//  console.log(totalCost);

//  const ticket = document.createElement('h1');
//  ticket.textContent = "Total cost of 5 tickets to a movie is " + totalCost;
//  document.body.appendChild(ticket);

//    QUESTION : NO : 5

// let table = +prompt("enter number")

// for(var i = 1; i <=20; i++) {
//         document.write(table + " x " + i + " = " + i*table + "<br>");
//         console.log(table + " x " + i + " = " + i*table + "<br>")
//         }

//     QUESTION: NO : 6

// const c = prompt("Enter celcius Value"),
//  f = ((c * 9 / 5)  + 32).toFixed(2);
//  console.log(f);
//  const celcius = document.createElement('h1');
//  celcius.textContent = "The temperature in fahrenheit is: " + f;
//  document.body.appendChild(celcius);

// function celciusToFahrenheit (celcius){
//          fahrenheit = ((celcius * 9 / 5) + 32)
//         return fahrenheit;
// }
// function fahrenheitToCelcius (fahrenheit){
//          celcius = ((fahrenheit - 32) * 5 / 9)
//         return celcius;
//         }
// document.write ("30 celcius is " + celciusToFahrenheit(30) + " f");
// document.write ("</br>86 fahrenheit is " + fahrenheitToCelcius(70) + "C" );

// document.write(celciusToFahrenheit(30))
// document.write(fahrenheitToCelcius(86))

//  QUESTION : NO : 7

// const heading = document.createElement('h1');
// heading.textContent = "Shopping Cart";
// document.body.appendChild(heading);

// var item1 = "650" ;
// var quantityitem1 = 3 ;
// var item2 = "100" ;
// var quantityitem2 = 7 ;
// var shipping = 100 ;
// const total = (item1 * quantityitem1) + (item2 * quantityitem2) ;
// const totalCost = total + shipping ;

// console.log(totalCost);

// document.write("</br></br></br> Price of item 1 is  " + item1)
// document.write("</br> Quantity of item 1 is  " + quantityitem1)
// document.write("</br>Price of item 2 is  " + item2)
// document.write("</br> Quantity of item 2 is  " + quantityitem2)
// document.write("</br>Shipping Charges " + shipping)
// document.write("</br></br>Total cost of your order is  " + totalCost)

//   QUESTION: NO : 8

// const heading = document.createElement('h1');
// heading.textContent = "Marks Sheet";
// document.body.appendChild(heading);

// let totalmarks = "1100";
// let marksobtained = "942";
// let percentage = ((marksobtained / totalmarks) * 100);
// console.log(percentage);

// document.write("</br></br></br>Total marks:" + totalmarks);
// document.write("</br>Marks obtained:" + marksobtained);
// document.write("</br>Percentage" + percentage + "%");

//     QUESTION: NO : 9

// const dollar = "15.6";
// const PKR = "278.36";
// const dollartopkr = dollar * PKR;
// const pkrtodollar = PKR / dollar;
// console.log(dollartopkr);

// document.write("</br></br></br>Total Currency in PKR:" + dollartopkr);

//   QUESTION: NO : 10

// const a = 10;
// const b = 10;
// const d = 5;
// const c = 2;
// document.write((((parseInt(a)   + parseInt(d)) * b) / c));
// console.log((((parseInt(a)   + parseInt(d)) * b) / c));

// QUESTION: NO : 11


// let currentYear = 2024;  
// let birthYear = 2008;    

// let age1 = currentYear - birthYear; 
// let age2 = age1 - 1;                

// document.write(They are either ${age1} or ${age2} years old.)
// console.log(They are either ${age1} or ${age2} years old.);
  
  
  // CHAPTER : NO : 6
// // QUESTION : NO : 1
// let a = 10;

// // Prepare the output
// document.write("Result:<br>");
// document.write(`The value of a is: ${a}<br>`);
// document.write("--------------------------<br><br>");

// // Pre-increment
// document.write(`The value of ++a is: ${++a}<br>`);
// document.write(`Now the value of a is: ${a}<br><br>`);

// // Post-increment
// document.write(`The value of a++ is: ${a++}<br>`);
// document.write(`Now the value of a is: ${a}<br><br>`);

// // Pre-decrement
// document.write(`The value of --a is: ${--a}<br>`);
// document.write(`Now the value of a is: ${a}<br><br>`);

// // Post-decrement
// document.write(`The value of a-- is: ${a--}<br>`);
// document.write(`Now the value of a is: ${a}<br>`);

// QUESTION : NO : 2

// Initialize variables
// var a = 2, b = 1;

// Calculate the result
// var result = --a - --b + ++b + b--;
//  // Initialize variables
//  let a = 2;
//  let b = 1;

//  // Step 1: --a; Pre-decrement a, so a becomes 1
//  a = --a; // Decrement a
//  document.write(" --a;  <br><br>");

//  // Step 2: --a - --b; Pre-decrement b, so b becomes 0, and expression is 1 - 0 = 1
//  b = --b; // Decrement b
//  let resultStep2 = a - b;
//  document.write(" --a - --b; <br><br>");

//  // Step 3: --a - --b + ++b; Pre-increment b, so b becomes 1, and expression is 1 + 1 = 2
//  b = ++b; // Increment b
//  let resultStep3 = a - b + b;
//  document.write(" --a - --b + ++b; <br><br>");

//  // Step 4: --a - --b + ++b + b--; Use b (1) and then decrement it (b becomes 0), so expression is 2 + 1 = 3
//  let resultStep4 = a - b + ++b + b--;
//  document.write("--a - --b + ++b + b--; <br><br>");

//   // Declare the variables
//   let c = 1;
//   let d = 0;
//   let result = 3;

//   document.write("a is: " + a + "<br><br>");
//   document.write("b is: " + b + "<br><br>");
//   document.write("result is: " + result + "<br><br>");

 // QUESTION : NO : 3

//  let userName = prompt("Please enter your name:");

// alert("Hello, " + userName + "! Welcome!");

 // QUESTION : NO : 4
 // QUESTION : NO : 5

// // Step 1: Take input from the user
// let number = prompt("Enter a number to display its multiplication table:");

// // Step 2: If the user doesn't enter a number, use 5 as default
// if (number === null || number.trim() === "") {
//     number = 5; // Default value is 5
// } else {
//     number = parseInt(number); // Convert the input to an integer
// }

// // Step 3: Display the multiplication table on the document
// document.write("<h1>Multiplication Table of " + number + "</h1>");
// for (let i = 1; i <= 10; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }

 // QUESTION : NO : 6
     // PATR : A
// let subject1 = prompt("Enter the name of the first subject:");
// let subject2 = prompt("Enter the name of the second subject:");
// let subject3 = prompt("Enter the name of the third subject:");

// document.write("Subject 1: " + subject1 + "<br>");
// document.write("Subject 2: " + subject2 + "<br>");
// document.write("Subject 3: " + subject3 + "<br>");

  // PATR : B

// let subject1 = prompt("Enter the name of the first subject:");
// let subject2 = prompt("Enter the name of the second subject:");
// let subject3 = prompt("Enter the name of the third subject:");

// let totalMarks = 100;  

// document.write("Subject 1: " + subject1 + " - Total Marks: " + totalMarks + "<br>");
// document.write("Subject 2: " + subject2 + " - Total Marks: " + totalMarks + "<br>");
// document.write("Subject 3: " + subject3 + " - Total Marks: " + totalMarks + "<br>");


  // PATR : C

// let subject1 = prompt("Enter the name of the first subject:");
// let subject2 = prompt("Enter the name of the second subject:");
// let subject3 = prompt("Enter the name of the third subject:");


// let totalMarks = 100;  // Total marks for each subject


// let obtainedMarksSubject1 = prompt("Enter obtained marks for " + subject1 + ":");


// document.write("Subject 1: " + subject1 + " - Total Marks: " + totalMarks + " - Obtained Marks: " + obtainedMarksSubject1 + "<br>");
// document.write("Subject 2: " + subject2 + " - Total Marks: " + totalMarks + "<br>");
// document.write("Subject 3: " + subject3 + " - Total Marks: " + totalMarks + "<br>");

  // PATR : D

// let subject1 = prompt("Enter the name of the first subject:");
// let subject2 = prompt("Enter the name of the second subject:");
// let subject3 = prompt("Enter the name of the third subject:");


// let totalMarks = 100;  


// let obtainedMarksSubject1 = prompt("Enter obtained marks for " + subject1 + ":");
// let obtainedMarksSubject2 = prompt("Enter obtained marks for " + subject2 + ":");
// let obtainedMarksSubject3 = prompt("Enter obtained marks for " + subject3 + ":");


// document.write("Subject 1: " + subject1 + " - Total Marks: " + totalMarks + " - Obtained Marks: " + obtainedMarksSubject1 + "<br>");
// document.write("Subject 2: " + subject2 + " - Total Marks: " + totalMarks + " - Obtained Marks: " + obtainedMarksSubject2 + "<br>");
// document.write("Subject 3: " + subject3 + " - Total Marks: " + totalMarks + " - Obtained Marks: " + obtainedMarksSubject3 + "<br>");

  // PATR : E

// let subject1 = prompt("Enter the name of the first subject:");
// let subject2 = prompt("Enter the name of the second subject:");
// let subject3 = prompt("Enter the name of the third subject:");

// let totalMarks = 100; 

// let obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
// let obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
// let obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));


// let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;

// let percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// document.write("<table border='1'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
// document.write("<tr><td><strong>Total</strong></td><td><strong>" + (totalMarks * 3) + "</strong></td><td><strong>" + totalObtainedMarks + "</strong></td></tr>");
// document.write("<tr><td colspan='2'><strong>Percentage</strong></td><td><strong>" + percentage.toFixed(2) + "%</strong></td></tr>");
// document.write("</table>");






















































































































































































































































































































































































































































































































































































































































