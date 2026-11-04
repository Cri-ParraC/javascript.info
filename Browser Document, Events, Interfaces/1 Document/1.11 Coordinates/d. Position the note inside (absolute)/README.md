# Position the note inside (absolute)

Extend the previous task <info:task/position-at-absolute>: teach the function  `positionAt(anchor, position, elem)` to insert `elem` inside the `anchor`.

New values for `position`:

- `top-out`, `right-out`, `bottom-out` -- work the same as before, they insert the `elem` over/right/under `anchor`.
- `top-in`, `right-in`, `bottom-in` -- insert `elem` inside the `anchor`: stick it to the upper/right/bottom edge.

For instance:

```js
// shows the note above blockquote
positionAt(blockquote, "top-out", note);

// shows the note inside blockquote, at the top
positionAt(blockquote, "top-in", note);
```

The result:

[See the demo on javascript.info](https://javascript.info/task/position-inside-absolute)

As the source code, take the solution of the task <info:task/position-at-absolute>.

Original task: https://javascript.info/task/position-inside-absolute
