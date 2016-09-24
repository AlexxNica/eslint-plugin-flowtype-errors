eslint-plugin-flowtype-errors
=============================
Get Flowtype errors as ESLint errors!

[![Build Status](https://travis-ci.org/amilajack/eslint-plugin-flowtype-errors.svg?branch=master)](https://travis-ci.org/amilajack/eslint-plugin-flowtype-errors)
[![Build status](https://ci.appveyor.com/api/projects/status/l4s4n56skbaj6map/branch/master?svg=true)](https://ci.appveyor.com/project/amilajack/eslint-plugin-flowtype-errors/branch/master)
[![NPM version](https://badge.fury.io/js/eslint-plugin-flowtype-errors.svg)](http://badge.fury.io/js/eslint-plugin-flowtype-errors)
[![Dependency Status](https://img.shields.io/david/amilajack/eslint-plugin-flowtype-errors.svg)](https://david-dm.org/amilajack/eslint-plugin-flowtype-errors)
[![npm](https://img.shields.io/npm/dm/eslint-plugin-flowtype-errors.svg?maxAge=2592000)]()


## Demo
![ESLint Flow Demo](https://github.com/amilajack/eslint-plugin-flowtype-errors/blob/master/flow-demo.gif?raw=true)

## Why?
* Less editor configuration: All you need is an eslint reporter plugin. No need to install flow specific tools!
* Simple: Its literally just an ESLint rule! Just install the dependency, add a flowconfig, and you're good to go!

## Getting Started
This guide assumes that you have installed eslint, babel, babel-plugin-transform-flow-strip-types and configured flow. Check out the [from-scratch guide](https://github.com/amilajack/eslint-plugin-flowtype-errors/wiki/Getting-Started) for the full guide on getting started.

**Step 1. Install**

```bash
npm install --save-dev eslint-plugin-flowtype-errors
```

**Step 2. Configure**

Add this line to the 'rules' section of your `.eslintrc`
```js
"flowtype-errors/show-errors": 2
```

Add this line to the 'plugins' section of your `.eslintrc`
```js
"flowtype-errors"
```

Add the `@flow` pragma to files that you want to lint
```js
/**
 * @flow
 */
```

Run `eslint` and and you're all set!

## Editor Configuration
### Atom
```bash
apm install linter linter-eslint language-babel
```

### Sublime
* https://github.com/SublimeLinter/SublimeLinter3
* https://github.com/roadhump/SublimeLinter-eslint
* https://github.com/babel/babel-sublime

### Others
http://eslint.org/docs/user-guide/integrations#editors

## Planned Implementations
* Add Tests
* Add Windows support
* Run flow minimal amount of times

## Caution
**Highly experimental!**
**Windows is not supported at the moment!**
