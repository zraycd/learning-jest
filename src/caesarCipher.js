function caesarCipher(string, shiftIndex) {
  let newString = [];
  string.split("").forEach((letter) => {
    if (letter !== " " && letter !== "!" && letter !== ",") {
      if (letter.toLowerCase() === letter) {
        newString.push(shiftLetter(letter, shiftIndex));
      } else {
        newString.push(shiftLetter(letter, shiftIndex).toUpperCase());
      }
    } else {
      newString.push(letter);
    }
  });
  return newString.join("");
}

function shiftLetter(letter, shiftIndex) {
  // prettier-ignore
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let index = alphabet.indexOf(letter.toLowerCase());

  if (index + shiftIndex > 25) {
    index -= 26;
  }

  return alphabet[index + shiftIndex];
}

module.exports = caesarCipher;
