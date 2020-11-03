// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description 
${data.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Contact](#Contact)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contribution}

## Test
${data.test}

## Contact 
Github: ${data.gitHub} 
Email: ${data.email}

  `;
}

module.exports = generateMarkdown;
