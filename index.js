// Is Truthy

function valuesToTest (input) {
    if (typeof input === "string" && input.length > 0) {
        console.log(true)
    } else if (input === false) {
        console.log("The boolean value false is falsy")
    } else if (input === null) {
        console.log("The null value is falsy")
    } else if (input === undefined) {
        console.log("undefined is falsy")
    } else if (input === 0) {
        console.log("The number 0 is falsy (the only falsy number)")
    } else {
        console.log("The empty string is falsy (the only false string)")
    }
}

valuesToTest("I am a string")
valuesToTest(false)
valuesToTest(null)
valuesToTest(undefined)
valuesToTest(0)
valuesToTest("")

// Number Line

function numberLine (num1, num2) {
    let sum = num1 + num2; 
    if (sum < -1000) {
        console.log(sum + " is less than -1000")
    } else if (sum < 0) {
        console.log(sum + " is a negative number")
    } else if (sum === 0) {
        console.log(sum + " is equal to 0")
    } else if (sum > 0 && sum < 100) {
        console.log(sum + " is larger than 0")
    } else if (sum > 100) {
        console.log(sum + " is greater than 100")
    }
}

numberLine (50, 51)
numberLine (99, -2)
numberLine (0, 101)
numberLine (500, -500)
numberLine (-1000, 0)
numberLine (-5, 0)

// Greater Than Or Equal to 5

function greaterThan5 (num1, num2){
    if (num1 >= 5 && num2 >=5) {
        console.log(true)
    } else {
        console.log(false)
    }
}

greaterThan5 (5, 6)
greaterThan5 (10, 11)
greaterThan5 (0, 0)
greaterThan5 (1000, -1000)
greaterThan5 (6, 4)
greaterThan5 (5, 5)

// Pair and Compare

function compare (param1A, param1B, param2A, param2B) {
    if (param1A === param1B || param2A === param2B) {
        console.log(true)
    } else {
        console.log(false)
    }
}
compare ("cat", "cat", 6, "6")
compare ("five", 5, "dog", "dawg")
compare (0, false, "horse", "horse")
compare ("eight", "eight", "ate", "ate")
compare (11, "eleven", "four", "for")
compare ("cake", "cake", "pie", "pie")


