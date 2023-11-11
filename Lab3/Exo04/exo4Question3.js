const fs = require("fs");
const fileName = process.argv[2];
const textToAdd = process.argv[3];

if (!fileName || !textToAdd) {
  console.error(
    "Please provide both a file name and text as command line arguments."
  );
  process.exit(1);
}

fs.writeFile(fileName, textToAdd, "utf8", (err) => {
  if (err) {
    console.error(`Error writing to file: ${err.message}`);
    process.exit(1);
  }

  console.log("The file has been saved!");

  // Run the file from the command line with: node exo4Question3.js exo4Question3.txt  
  fs.readFile(fileName, "utf8", (readErr, data) => {
    if (readErr) {
      console.error(`Error reading file: ${readErr.message}`);
      process.exit(1);
    }

    console.log(`Contents of ${fileName}:`);
    console.log(data);
  });
});
