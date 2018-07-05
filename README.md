# ⏳ Due Date Calculator

A javascript application, that calculates due dates based on the submit date (current date and time by default) and a turnaround time (given in hours as a number) needed for the work to be done.

The application is intended to run in the browser (see list of compatible browsers in`package.json`s `"browserslist":` field).

## Prerequisite

You should have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed.

## 🏃 Getting started

1.  Install (dev)dependencies with:

```bash
npm install
```

2.  To start the dev/webserver (also live-reloads changes), type in your terminal:

```bash
npm run start
```

It will automagically open up your default browser with the URL.

3.  Check the console for the calculated due dates.

4.  Modify the variables and play around in `index.mjs`.

## 🃏 Tests

Test made with [Jest.](https://jestjs.io/en/) To run them type

```bash
npm run test
```

---

### ☑️ TODOs

-   create UI
-   simplify test cases (too much repetition, can possibly be an array of options or something)
-   make day number to string "conversion" nicer

#### Disclaimer

-   First time ever actually working with `Date`.
-   Never wrote tests in my developer life 🙈. So tried out Jest for the first time.
-   First time using ES modules in the browser and it is fun. 👌
