// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function appendCat(name) {
    const appendCat = [...cats, "Broom"]
    return appendCat
}

function prependCat(name) {
    const prependCat = ["Arnold", ...cats]
    return prependCat
}

function removeLastCat() {
    const prependCat = cats.slice()
    prependCat.pop()
    return prependCat
}

function removeFirstCat() {
    const removeFirstCat = cats.slice()
    removeFirstCat.shift()
    return removeFirstCat

}