function renderLicenseBadge(license) {
    if (license) {
        return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return '';
}

function renderLicenseLink(license) {
    if (license) {
        return `[License](#license)`;
    }
    return '';
}

function renderLicenseSection(license) {
    if (license) {
        return `This project is licensed under the ${license} license.`;
    }
    return '';
}


function generateMarkdown(data) {
return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#License)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.tests}

## License
${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)} ${renderLicenseLink(data.license)}

## Questions
For questions about this project, feel free to reach out to me:
Github: [${data.username}](https://github.com/${data.username})
Email: ${data.email}
`;
}

module.exports = generateMarkdown;