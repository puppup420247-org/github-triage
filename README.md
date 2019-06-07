# github-triage

The GitHub Triage tool is an internal tool created by the front-end engineering team that was built to solve the problem of keeping tabs on issues across a wide range of GitHub repositories and being able to simply triage them.

For more information, refer to this quip document: https://salesforce.quip.com/Aj7VAyEAuAwX

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [Ember CLI](https://ember-cli.com/)
- [Google Chrome](https://google.com/chrome/)
- [Yarn](https://yarnpkg.com/en/)

## Installation

- `git clone https://github.com/heroku/github-triage.git` this repository
- `cd github-triage`
- `yarn install`

## Running / Development

- `ember s`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

- `ember test`
- `ember test --s`

### Visual Studio Code

Install the following extensions:

- [prisma.vscode-graphql](https://marketplace.visualstudio.com/items?itemName=Prisma.vscode-graphql)
- [esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [mfeckies.handlebars-formatter](https://marketplace.visualstudio.com/items?itemName=mfeckies.handlebars-formatter)

Add the following to your `settings.json`:

```json
"[handlebars]": {
  "editor.defaultFormatter": "mfeckies.handlebars-formatter"
},
"[html]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[json]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[jsonc]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```
