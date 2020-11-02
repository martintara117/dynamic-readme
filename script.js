var inquirer = require("inquirer");

var questions = [
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
  console.log(answers);
}
