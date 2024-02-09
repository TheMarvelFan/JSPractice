// AKA Template literals

function getMessage () {
    return `The year is ${new Date().getFullYear()}`;
}

console.log(getMessage());