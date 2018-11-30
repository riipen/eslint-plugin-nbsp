# Disallow the use of &amp;nbsp. (no-nbsp)

Valid uses of `&nbsp` are extremely rare. To avoid abuse,
disable the use of `&nbsp`.


## Rule Details

Examples of **incorrect** code for this rule:

```js
<span>&nbsp</span>
```

Examples of **correct** code for this rule:

```js
<span>foo</span>
```

## When Not To Use It

When you don't want the browser to break two words on a new line.
