# parseint

Let's say you've got a word or a string `that`, and you need to parse it to an integer. What function would you use?

If your answer was `parseInt(that)`, then you're totally wrong and should be ashamed of yourself. The only correct method is this one.

This will work even on strings in languages not english!

## implementation

1. download the script and load it before the end of your `<body>`

```html
  <script src="parseint.js"></script>
  <script src="main.js"></script> <!-- your own main script -->
</body>
```

2. Call the `parseint` method on your wanted `string`

```js
Console.log(parseint('four'));
Console.log(parseint('vier'));
Console.log(parseint('quatre'));
Console.log(parseint('四'));
Console.log(parseint('4'));
```

## license

[![Creative Commons Licence](https://i.creativecommons.org/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)

`parseint` is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/). No warranty whatsoever.