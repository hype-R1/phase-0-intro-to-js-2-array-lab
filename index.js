const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat(magic) { 
    cats.unshift(magic);
}

function destructivelyRemoveLastCat(anyWord) {
    cats.slice(anyWord)
}



function destructivelyRemoveLastCat() {
    cats.splice(2)
}

function destructivelyRemoveFirstCat() {
    cats.splice(0,1)
}

function appendCat(words) {
    return [...cats, words];
}

function prependCat(magic) {
    return [magic, ...cats]
}
function removeFirstCat () {
    return cats.slice(1)
}

function removeLastCat () {
    return cats.slice(0, cats.length - 1);
}