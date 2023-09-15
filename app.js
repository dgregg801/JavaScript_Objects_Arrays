console.log("Hello World!\n==========\n");

// Exercise 1 Section

console.log("EXERCISE 1:\n==========\n");
const testArr = [2, 22, 12, 17, 18, 39, 129];

function arraySum(numbers) {
    let sum = 0;
    //Normal for loop
    //for (let i = 0; i < numbers.length; i++){
      //  sum += numbers[i];
    //}
    //return sum;


    //forEach method
    numbers.forEach(function (number) {
        sum += number;
    });
    return sum;

}
console.log(arraySum(testArr));


console.log("EXERCISE 2:\n==========\n");
// Exercise 2 Section
/*const book = {
    Title: "Dracula", 
    Author: "Bram Stoker",
    Pages: 431,
    readCount: 10,
    info: function(){
        return `${this.Title} by ${this.Author}, ${this.Pages} pages, read ${this.readCount} times.`;
    }
};
const bookInfo = book.info();
console.log(bookInfo);*/

const book = {};
book.title = "Dracula";
book.author = "Bram Stoker";
book.pages = 230;
book.readCount = 10;
book.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, read ${this.readCount} times.`;
}

console.log(book.info());



//Exercise 3 Section

/*let sentence = "The quick brown fox jumps over the lazy dog";

const words = sentence.split(" ");
const reversedWords = words.map(word => { 
    const characters = word.split("");
    const reversedCharacters = characters.reverse();
    return reversedCharacters.join("");
});

const reversedSentence = reversedWords.join(" ");
console.log(reversedSentence);

//Exercise 3:
//let sentence = "The quick brown fox jumps over the lazy dog"; //string
//2. string => array  (split method)

//3. Loop (array)

    //4. string => array  (split method)
    //5. array => array
    //6. array => string
//7. array => string
*/

/*let sentence = "The quick brown fox jumps over the lazy dog";
//string => array (split method)
const words = sentence.split(" ");
console.log(words);
// Loop (array)
for (let i = 0; i < words.length; i++){
    //each element in the array
    //string => array (split method)
    //string with ("")to split words into indiv letters
    const letters = words[i].split("");
    console.log(letters);
    //array => array
    letters.reverse();
    const reversedLetters = letters.join("");
    words[i] = reversedLetters;


}

console.log(words);
//array => string
const result = words.join(" ");
console.log(result);*/

//Method Chaining Example

let sentence = "The quick brown fox jumps over the lazy dog";

const res = sentence.split(" ").map((element, index, arr) => {
    return element.split("").reverse().join("");
}).join(" ");
//map transforms each element of an array
console.log(res);

//Exercise 4



// Step 1: Parse the string into an array of rows (split based on newlines)
//const rows = csvData.split("\n");

// Step 2: Split the first row into an array of string headers
//const headers = rows[0].split(",");

// Step 3 and 4: Iterate over each remaining row, split data values, and create objects
/*const result = [];
for (let i = 1; i < rows.length; i++) {
    const rowData = rows[i].split(",");
    const record = {};

    for (let j = 0; j < headers.length; j++) {
        record[headers[j]] = rowData[j];
    }

    result.push(record);
}

// Step 5: The result is an array of objects
console.log(result);
*/



let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";


//2.
const rows = csvData.split("\n");
console.log(rows);
//3.
const headers = rows[0].split(",");
console.log(headers);
const listOfHobbits = []
for (let i = 0; i < rows.length; i++) {
    const pairs = rows[i].split(",");
    console.log(pairs);
    let hobbit = {};
    hobbit.name = pairs[0];
    hobbit.age = pairs[1];
    console.log(hobbit);
    //storage step
    listOfHobbits.push(hobbit);
    
}








