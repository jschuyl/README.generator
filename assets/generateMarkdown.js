// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log("rendering badge")
  switch(license) {
    case "GNU GPLv3":
      return "[![License: GNU AGPLv3](https://img.shields.io/badge/License-GNU%20AGPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "Mozilla Public License 2.0":
      return "[![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-Mozilla%20Public%20License%202.0-blue.svg)](https://www.mozilla.org/en-US/MPL/2.0/)";
    case "Apache License 2.0":
        return "[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache%20License%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)";
    case "MIT License":
      return "[![License: MIT License](https://img.shields.io/badge/License-MIT%20License-blue.svg)](https://opensource.org/licenses/MIT)";
    case "Boost Software License 1.0":
      return "[![License: Boost Software License 1.0](https://img.shields.io/badge/License-Boost%20Software%20License%201.0-blue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    case "The Unlicense":
      return "[![License: The Unlicense](https://img.shields.io/badge/License-The%20Unlicense-blue.svg)](https://unlicense.org/)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log("rendering link")
  switch(license){
    case "GNU GPLv3 License":
      return "[Details on the GNU GPLv3 License](https://choosealicense.com/licenses/gpl-3.0/)";
    case "Mozilla Public License 2.0":
      return "[Details on the Mozilla Public Licesne 2.0](https://choosealicense.com/licenses/mpl-2.0/)";
    case "Apache License 2.0":
      return "[Details on the Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)";
    case "MIT License":
      return "[Details on the MIT License](https://choosealicense.com/licenses/mit/)";
    case "Boost Software License 1.0":
      return "[Details on the Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)";
    case "Unlicense":
      return "[Details on the Unlicense](https://choosealicense.com/licenses/unlicense/)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log("rendering license")
  if(license === "None"){
    return ""
  }
  return `
  ## License
  This project is under the ${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  console.log("generating markdown")
  return `${renderLicenseBadge(answer.license)}
 # ${answer.title}

### Description

${answer.synopsis}

## Table of Contents
1. [Description: ](https://github.com/${answer.github}/${answer.title}#Description)
2. [Installation Guide: ](https://github.com/${answer.github}/${answer.title}#Installation-Guide)
3. [Contribution Guide: ](https://github.com/${answer.github}/${answer.title}#Contribution-Guide)
- [License](https://github.com/${answer.github}/${answer.title}#license)
- [Contacts ](https://github.com/${answer.github}/${answer.title}#contact-me)



[Back to top](https://github.com/${answer.github}/${answer.title}#title)
## Installation Guide

${answer.install}

[Back to top](https://github.com/${answer.github}/${answer.title}#title)
## Contribution Guide

${answer.helpPls}

[Back to top](https://github.com/${answer.github}/${answer.title}#title)
## License

${renderLicenseSection(answer.license)}
${renderLicenseLink(answer.license)}

## Contact Me
### Email
[${answer.email}](mailto:${answer.email})
### Github
[${answer.github}](https://github.com/${answer.github})
[Back to top](https://github.com/${answer.github}/${answer.title}#title)

`;
}

module.exports = generateMarkdown;
