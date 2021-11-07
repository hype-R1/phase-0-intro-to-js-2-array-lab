const cats = ["Milo", "Otis", "Garfield"];

let destructivelyAppendCat = (ralph) =>  cats.push(ralph);

const destructivelyPrependCat = () => cats.unshift();

let destructivelyRemoveLastCat = () => cats.pop();

let destructivelyRemoveFirstCat = (first) => cats.shift(first);



let appendCat = (name) =>  [...cats,name];


const prependCat = (name) => [name, ...cats];

let removeFirstCat = (name) => cats.slice(1);

let removeLastCat = () => cats.slice(0, cats.length - 1);














































// const cats = ["Milo", "Otis", "Garfield"];

// function destructivelyAppendCat() {
//     cats.push("Ralph");
// }

// function destructivelyPrependCat(magic) { 
//     cats.unshift(magic);
// }

// function destructivelyRemoveLastCat(anyWord) {
//     cats.slice(anyWord)
// }



// function destructivelyRemoveLastCat() {
//     cats.splice(2)
// }

// function destructivelyRemoveFirstCat() {
//     cats.splice(0,1)
// }

// function appendCat(words) {
//     return [...cats, words];
// }

// function prependCat(magic) {
//     return [magic, ...cats]
// }
// function removeFirstCat () {
//     return cats.slice(1)
// }

// function removeLastCat () {
//     return cats.slice(0, cats.length - 1);
// }