# eslint-plugin-olblint

Helps linting Kony Destop Web Code

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-olblint`:

```
$ npm install eslint-plugin-olblint --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-olblint` globally.

## Usage

Add `olblint` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "olblint"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "olblint/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





