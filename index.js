

function reverse_a_number(n)
{
   
    n = n + "";

   
    return n.split("").reverse().join("");
}

console.log(Number(reverse_a_number(32243)));
let x = 5;
let y = 2;
let z = x + y; 

console.log(z)
let result;
let number1 = 10; 
let number2 = 5;   
let operator = '+'; 

switch (operator) {
    case '+':
        result = number1 + number2;
        break;
    case '-':
        result = number1 - number2;
        break;
    case '*':
        result = number1 * number2;
        break;
    case '/':
        if (number2 !== 0) {
            result = number1 / number2;
        } else {
            result = 'Error: Division by zero';
        }
        break;
    default:
        result = 'Invalid operator';
}

console.log(result)


function Longest_Country_Name(countries) {
   

    let longestCountry = countries[0];

    for (let i = 1; i < countries.length; i++) {
        if (countries[i].length > longestCountry.length) {
            longestCountry = countries[i];
        }
    }

    return longestCountry;
}
const countries = ["Australia", "Germany", "United States of America"];
const longestCountryName = Longest_Country_Name(countries);
console.log(longestCountryName); 




























































































































































































































































































































