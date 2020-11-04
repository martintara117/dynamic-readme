const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");
const questions = [
  {
    name: "title",
    message: "What is the title of your project?",
  },
  {
    name: "description",
    message: "Please describe your project.",
  },
  {
    name: "installation",
    message: "What are you installation instructions?",
  },
  {
    name: "usage",
    message: "Please provide usage information.",
  },
  {
    name: "license",
    message: "Please choose from the following licenses:",
    type: "list",
    choices: ["Apache 2.0", "GPL 3.0", "MIT"],
  },
  {
    name: "contribution",
    message: "What are you contribution guidelines?",
  },
  {
    name: "test",
    message: "How do you test your project?",
  },
  {
    name: "gitHub",
    message: "Please provide a link to your Git Hub account.",
  },
  {
    name: "email",
    message: "Please provide an e-mail to add to your contact information.",
  },
];

inquirer.prompt(questions).then(gotAnswers);

function gotAnswers(answers) {
  let content = generateMarkdown(answers);
  fs.writeFile("./generated_readme/README.md", content, createdFile);
}
function createdFile(err) {
  if (err) throw err;
  console.log("readme created");
}
