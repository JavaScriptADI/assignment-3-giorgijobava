// 7
let number;
do {
    number = Math.floor(Math.random() * 100) + 1;
    console.log(number);
} while (number !== 27);
// 8

function generateRandomPassword(length) {
    let password = '';
    
    for (let i = 0; i < length; i++) {
        let randomCharCode = Math.floor(Math.random() * (126 - 33 + 1)) + 33;
        password += String.fromCharCode(randomCharCode);
    }
    return password;
}

let password = generateRandomPassword(12); // sheqnmis pass 12 simboloians
console.log("Generated password:", password);

// 12
for (let i = 0; i < 100; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
}
