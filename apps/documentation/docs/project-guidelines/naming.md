---
id: naming
title: Naming
---

## General naming convention

> Best practise recommnedation!

There is a useful pattern to follow when naming functions:

```
namespace? + high context (HC) + low context? (LC) + action (A)
```

Take a look at how this pattern may be applied in the table below.

| Name                  | Namespace | High context (HC) | Low context (LC) | Action (A) |
| --------------------- | --------- | ----------------- | ---------------- | ---------- |
| `userGet`             |           | `User`            |                  | `Get`      |
| `userMessagesGet`     |           | `User`            | `Messages`       | `Get`      |
| `clickOutsideHandler` |           | `Click`           | `Outside`        | `Handle`   |
| `shouldMessageShown`  | `should`  | `Message`         |                  | `Shown`    |

> **Note:** The order of context affects the meaning of a variable. For example, `shouldUpdateComponent` means _you_ are about to update a component, while `shouldComponentUpdate` tells you that _component_ will update on itself, and you are but controlling when it should be updated.
> In other words, **high context emphasizes the meaning of a variable**.

#### Why action goes the latest?

When you write code in IDE, you have an "code intelligency" or autosuggestion. If you type action first "get< tab >", you'll see all function in project that has "get" action, and you need to type High context and Low context to reduce amount of methods.
But if you first type High context you can see all functions that can operate with that context and with lowest contexts, then you can narrow the search typing the Low context name, and now you see all functions you can do with that context and nothing more.

## Model naming

> Frontend state management layer: Jotai.

- .

##### 📒 References

- [GitHub - kettanaito/naming-cheatsheet: Comprehensive language-agnostic guidelines on variables naming. Home of the A/HC/LC pattern.](https://github.com/kettanaito/naming-cheatsheet#naming-functions)
-
