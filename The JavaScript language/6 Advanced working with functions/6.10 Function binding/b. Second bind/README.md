# Second bind

Can we change `this` by additional binding?

What will be the output?

```js no-beautify
function f() {
  alert(this.name);
}

f = f.bind( {name: "John"} ).bind( {name: "Ann" } );

f();
```

Original task: https://javascript.info/task/second-bind
