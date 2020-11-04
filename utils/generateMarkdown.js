// function to generate markdown for README
function generateMarkdown(data) {
  const licensing = {
    "Apache 2.0": {
      description:
        "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      badge:
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    },
    "GPL 3.0": {
      description:
        "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.",
      badge:
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    },
    MIT: {
      description:
        "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      badge:
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    },
  };

  return `
  ${licensing[data.license].badge}
  # ${data.title}
## Description 
${data.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Test](#Test)
* [Contact](#Contact)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}: ${licensing[data.license].description}

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
