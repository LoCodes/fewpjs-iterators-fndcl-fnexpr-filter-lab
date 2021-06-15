// Code your solution here

// index.js
// findMatching()
//   ✓ returns all drivers that match the passed in name
//   ✓ returns matching drivers if case does not match but letters do
//   ✓ returns an empty array if there is no match


function findMatching(drivers, string) {
    return drivers.filter( match => match.toLowerCase() === string.toLowerCase());

}



// fuzzyMatch()
// ✓ returns a driver if beginning provided letters match
// ✓ does not return drivers if only middle or ending letters match
// ✓ does not return drivers if only middle or ending letters match

function fuzzyMatch(drivers, string) {
    return drivers.filter( match => match.toLowerCase().indexOf(string.toLowerCase()) === 0)
}


// matchName()
// ✓ accesses the data structure to check if name matches



matchName = (drivers, stringtolook) => {
    return drivers.filter( record => record.name === stringtolook)
}