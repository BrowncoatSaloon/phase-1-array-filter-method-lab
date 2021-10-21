// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter(function(driver) {
        return string.toLowerCase() === driver.toLowerCase()

    })
}

function fuzzyMatch(drivers, string) {
    let matchingletters = 
        drivers.filter(beginningLetters => 
        beginningLetters.substring(0,2) === string) 
        return matchingletters 
}

function matchName(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.name === name
    })
}