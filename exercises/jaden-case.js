'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */


function jadenCase(str) 
{
str = str.split(" ");
for (var i = 0; i < str.length; i++) {
str[i] = str[i][0].toUpperCase() + str[i].substr(1);
}
return str.join(" ");
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase('hello world'), 'Hello World')
// End of tests */
