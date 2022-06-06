# Gilded Rose Kata

This repository is the solution to [emilybache/GildedRose-Refactoring-Kata](https://github.com/emilybache/GildedRose-Refactoring-Kata) with typescript.

Branches definition to the following:

- main :arrow_right: Original unmodifications code from [typescript glided rose](https://github.com/emilybache/GildedRose-Refactoring-Kata/tree/main/TypeScript)
- semantic-refactor :arrow_right: Changes to improve code readability
- solid-refactor :arrow_right: Changes applying SOLID principles

## Getting started

Install dependencies

```sh
npm install
```

## Running app

```sh
npx ts-node test/golden-master-text-test.ts
```

Or with number of days as args:

```sh
npx ts-node test/golden-master-text-test.ts 10
```

## Running tests

To run all tests

### Jest way

```sh
npm run test:jest
```

To run all tests in watch mode

```sh
npm run test:jest:watch
```