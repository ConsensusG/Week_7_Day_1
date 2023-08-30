console.log("Hello from main.js!");

// //==================Exercise #1 ==========//
// /*Write a function that takes in the string and the list of dog names, loops through 
// the list and checks that the current name is in the string passed in. The output should be:
// `Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
// */
// let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
// let dog_names = ["Max","HAS","PuRple","dog"]


let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

function dogMatch(dog_string, dog_names) {
    let result = [];
    // This is me removing the punctuation except  for spaces using a little Regex and replacving them with nothing
    const onlyWord = dog_string.replace(/[^a-zA-Z\s]/g, "");
    // Now I split the string into words using .split
    const strArray = onlyWord.split(" ");
    // This is looping through each name in dog_names while i is less than the length of dog names and incrementing by 1
    for (let i = 0; i < dog_names.length; i++) {
        const tarWord = dog_names[i]; //pretty self explanitory from here.  "includes" means includes and 'push' means append
        if (strArray.includes(tarWord)) {
            result.push(`Matched ${tarWord}`);
        } else {
            result.push(`No match for ${tarWord}`);
        }
    }
    console.log(result);
}

dogMatch(dog_string, dog_names);

// //============Exercise #2 ============//
// /*Write a function that takes in an array and removes every even index with a splice,
// and replaces it with the string "even index" */

const inputArray = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(inputArray){
    //Alright, this here is a map function that is creating a new array called 'result'. 'Word' is what's being looped over and 'i' is the indexof the 
    //current value. The resst is like Python.
    let result = inputArray.map((word, i) => {
        if (i % 2 === 0) {
            return "even index"
        } else {
            return word
        }
    });

    return result;
}

console.log(replaceEvens(inputArray))




//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
    return number % 2 === 0 ? "Even" : "Odd"  // The '?' basically means 'if yes, return the next thing. And the colon stands for "else".
  }

  console.log(even_or_odd(31415926535897932384626433832795028841971693993))



  //Complete the solution so that it reverses the string passed into it.

  function solution(str) {
    // Split the string into individual characters
    const strArray = str.split('');
    // Reverse the array of characters
    const reversedArray = strArray.reverse();
    // Join back into a string
    const reversedString = reversedArray.join('');
    
    return reversedString;  //I know you can do this in one line but this made it easier to add the notes.
  }
  
console.log(solution("GoHangASalamiImALasagnaHog"))