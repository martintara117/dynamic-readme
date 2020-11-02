var inquirer = require("inquirer");

var questions = [
  {
    name: "Title",
    message: "What is the title of your project?",
  },
];

inquirer.prompt(questions).then(gotAnswers);

function gotAnswers(answers){
    console.log("your title is", answers.Title);
}