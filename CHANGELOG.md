# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## Unreleased - 2016-xx-xx
### Make SMACSS states optional
- Make `makeStates` plugin optional

## 2.0.0 - 2016-09-28
### Add options
- **Breaking**: Enable further customisation via options.
- Introduce plugins for changing class names (ex `extraMakers`) and removing custom props from DOM elements.

## 1.1.1 - 2016-09-01
### Fix tests
- Update ava
- Add transform-props-with to peer dependencies

## 1.1.0 - 2016-04-21
### Break into makers
- Change project structure; introduce `src/`, `test/`, and `lib/` directories. (`lib/` for npm publish only.)
- Extract makers to individual files inside `src/makers/` directory.
- Add makers documentation.

## 1.0.0 - 2016-04-14
### Initial release
- First stable release of the package
