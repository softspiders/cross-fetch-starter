[SOFTSPIDERS](https://github.com/softspiders/softspiders)

# cross-fetch-starter

---

## Feature tags

- browser
- cross-fetch
- isomorphic
- starter
- template

---

## Authors

- [AndreyChapkin](https://github.com/AndreyChapkin)

---

## Install

```
npm i
```

---

## Run in browser

Open *index.html* with your browser. In browser console execute:
```
if (isBrowser) fetch('https://jsonplaceholder.typicode.com/posts/1')
                    .then(response => response.json())
                    .then(json => console.log(JSON.stringify(json)))
```
See the results in the console.

## Running integration tests

In first command prompt run server: 
```
npm run start:server
```
In second command prompt run tests:
```
npm run test
```
In console you should see:
```
PASS  ./scripts.test.js
  √ Test isomorphic fetch function: http://localhost:3000/api (31ms)
```

---
### License

Licensed under the [MIT license](./LICENSE).