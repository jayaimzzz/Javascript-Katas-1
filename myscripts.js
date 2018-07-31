console.log("1. Display the numbers from 1 to 20.")
let counter = 1
while (counter <= 20) {
    console.log(counter)
    counter++
}

console.log("2. Display the even numbers from 1 to 20.")
counter = 1
while (counter <= 20) {
    if (counter % 2 === 1) {
        counter++
    } else {
        console.log(counter)
        counter++
    }
}

console.log("3. Display the odd numbers from 1 to 20")
counter = 1
while (counter <= 20) {
    if (counter % 2 === 1) {
        console.log(counter)
        counter++
    } else {
        counter++
    }
}
console.log("4. Display the multiples of 5 up to 100")
counter = 1
while (counter <= 100) {
    if (counter % 5 != 0) {
        counter++
    } else {
        console.log(counter)
        counter++
    }
}

console.log("5. Display the square numbers up to 100")
counter = 1
let squareOfCounter = counter * counter
while (squareOfCounter <= 100) {
    console.log(squareOfCounter)
    counter++
    squareOfCounter = counter * counter
}

console.log("6. Display the numbers counting backwards from 20")
for (counter = 20; counter >= 1; counter--) {
    console.log(counter)
}

console.log("7. Display the even numbers counter backwards from 20")
counter = 20
while (counter >= 1) {
    if (counter % 2 === 0) {
        console.log(counter)
        counter--
    } else {
        counter--
    }
}

console.log("8. Display the odd numbers from 20 to 1, counter backwards")
counter = 20
while (counter >= 1) {
    if (counter % 2 === 1) {
        console.log(counter)
        counter--
    } else {
        counter--
    }
}

console.log("9. Display the multiples of 5, counter down from 100")
counter = 100
while (counter >= 1) {
    if (counter % 5 === 0) {
        console.log(counter)
        counter--
    } else {
        counter--
    }
}

console.log("Display the square numbers, counter down from 100")
counter = 100
let squareRootOfCounter = Math.sqrt(counter)
while (counter >= 1) {
    if (Number.isInteger(squareRootOfCounter) === true) {
        console.log(counter)
        counter--
        squareRootOfCounter = Math.sqrt(counter)
    } else {
        counter--
        squareRootOfCounter = Math.sqrt(counter)
    }
}