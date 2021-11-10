# Playwright-UI-Automation

For detailed documentation of Playwright and its related API references go here https://playwright.dev/docs/intro

The sample application under test is https://cash-conversion.dev-tester.com/

This repo contains all the basic setup required to get started with Playwright for UI e2e automation. The tests are written in `Typescript` and project has the below files and folders defined so that a developer can start writing tests right away.

- `tests` - All of the e2e tests goes here
- `actions` - The place to define the test components or user actions using the page-object pattern. `ui.actions` file should contain all the ui interactions and the `api.actions` file should contain all the api actions needed for tests
- `network` - The place to define all the api mocks or the api loggers
- `utils/config.ts` - To support different configs for running tests in different evironments
- `playwright.config.ts` - Contains all the basic configurations for Playwright including report generation, tracing etc
- `.github/workflows/main.yml` - Giuthub Actions to run the tests over CI
- `tests/lighthousePerformance.spec.ts` - Sample front-end performance test using Google Lighthouse

## Installation

- Install node

```
https://nodejs.org/en/
```

- Install yarn

```
https://classic.yarnpkg.com/en/docs/install
```

## Environment Setup

- Run yarn to install the node packages

```
yarn
```

## Test Execution

To run the test on the default chromium browser run

```
yarn e2e
```

To run the tests on headed mode run

```
yarn headed
```

To run the tests on debug mode run

```
yarn debug
```

To run in all browsers simultaneously run

```
yarn playwright test --browser=all
```

To view the test reports after the execution with the html reporter run:

```
yarn reports
```

## CI

For every commit tests will be run over the CI using Gitlab Actions.
