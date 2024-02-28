const crypto = require("crypto");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function simpleHash(input) {
  const hash = crypto.createHash("sha256");
  hash.update(input);
  return hash.digest("hex");
}

rl.question("Enter something: ", (userInput) => {
  console.log("User Input:", userInput);
  const dataToHash = userInput;
  const hashedValue = simpleHash(dataToHash);
  console.log(`Original Data: ${dataToHash}`);
  console.log(`Hashed Value: ${hashedValue}`);
  rl.close();
});
