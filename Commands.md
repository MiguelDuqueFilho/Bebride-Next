# setup do projeto



```cmd
yarn create next-app reactsetup
```

```cmd
yarn add typescript @types/react @types/node -D

yarn dev
```

```cmd
yarn add eslint -d
```

```cmd
yarn eslint --init
yarn run v1.22.10
$ /Users/miguelduquefilho/Desktop/DevNext/reactsetup/node_modules/.bin/eslint --init
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser, node✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · JSON
Checking peerDependencies of eslint-config-airbnb@latest
The config that you've selected requires the following dependencies:

eslint-plugin-react@^7.21.5 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint@^5.16.0 || ^6.8.0 || ^7.2.0 eslint-plugin-import@^2.22.1 eslint-plugin-jsx-a11y@^6.4.1 eslint-plugin-react-hooks@^4 || ^3 || ^2.3.0 || ^1.7.0 @typescript-eslint/parser@latest
✔ Would you like to install them now with npm? · No / Yes
Installing eslint-plugin-react@^7.21.5, @typescript-eslint/eslint-plugin@latest, eslint-config-airbnb@latest, eslint@^5.16.0 || ^6.8.0 || ^7.2.0, eslint-plugin-import@^2.22.1, eslint-plugin-jsx-a11y@^6.4.1, eslint-plugin-react-hooks@^4 || ^3 || ^2.3.0 || ^1.7.0, @typescript-eslint/parser@latest

added 124 packages, changed 1 package, and audited 779 packages in 41s

78 packages are looking for funding
  run `npm fund` for details

4 low severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
Successfully created .eslintrc.json file in /Users/miguelduquefilho/Desktop/DevNext/reactsetup
✨  Done in 372.54s.
```

### Deixa instalar com npm e depois usa yarn

```cmd
rm package-lock.json

yarn
```

```cmd
yarn add prettier eslint-plugin-prettier eslint-config-prettier -D
```
---
### comandos vscode

#### Indent Using Space

`2`

Reindent Lines

## inclusão de linhas do .eslintrc.json

```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
    "jest": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "prettier/airbnb",
    "prettier/react"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint", "prettier"],
  "rules": {
    "prettier/prettier": "error",
    "space-before-function-paren": "off",
    "react/prop-types": "off"
  }
}

```

### criar arquivo .eslintignore

```text
node_modules
.next
/*.js
```

### criar arquivo prettier.config.js

```js
modeule.exports = {
  semi: true,
  singleQuote: true,
  arrowParens: 'avoid',
  trailingComma: 'none',
  endOfLine: 'auto',
};
```

# adicionar styled-componentes

```cmd
yarn add styled-components
yarn add @types/styled-components -D
```

### criar arquivo babel.config.js
alterei para .babelrc

```json
{
  "presets": ["next/babel"],
  "plugins": [["styled-components", { "ssr": true }]]
}
```
### criar _document.tsx

```js
import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
```

# images no Next

adicionar a lib next-images

```cmd
yarn add next-images
```
criar uma arquivo next.config.js

## import para svg no html (mais performático)
incluir imagem como component
```cmd
yarn add babel-plugin-inline-react-svg -D
```

# Libs

`Jest` para testes

`SWR` para prover cache

---

## MYSQL

```sql
UPDATE mysql.user SET Host='%' WHERE Host='localhost' AND User='root';
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;
```
