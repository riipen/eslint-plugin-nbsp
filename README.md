# eslint-plugin-nbsp

Disallow the use of &amp;nbsp.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-nbsp`:

```
$ npm install eslint-plugin-nbsp --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-nbsp` globally.

## Usage

Add `nbsp` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "nbsp"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "nbsp/rule-name": 2
    }
}
```
