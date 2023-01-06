let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

let leetCodex = new Object();
for (let i = 0; i < letters.length; i++){
    leetCodex[letters[i]] = leetChars[i]
}

let output = ""

function leetTranslator(input) {
    for (let j = 0; j < input.length; j++) {
        output += leetCodex[input[j].toLowerCase()]
    } return output
}