# Updating angular from version 5 to version 6

## Requirements

- Node.js version 8.9+
- Dotnet core sdk 2.1.301+

## Steps

1.  Update Angular cli globally and locally, and migrate the old configuration .angular-cli.json to the new angular.json format by running the following :

```bash
  # Install angular-cli globally
  npm install -g @angular/cli
  # Install angular-cli locally
  npm install @angular/cli
  # Update version of angular 5 to 6 also updates config files
  ng update @angular/cli
```

2.  Update all of your Angular framework packages to v6,and the correct version of RxJS and TypeScript by running the following:

```bash
  ng update @angular/core
```

3.  RxJS v6 has major changes from v5, v6 brings backwards compatibility package rxjs-compat that will keep your applications working, but you should refactor TypeScript code so that it doesn't depend on rxjs-compat. To refactor TypeScript code run following:

```bash
  # Utility for adding compatability to tslint linting configs
  npm install -g rxjs-tslint
  # Run to change tsconfig changes
  rxjs-5-to-6-migrate -p src/tsconfig.app.json
```

4.  Remove rxjs-compat when all migrations completed

```bash
  npm uninstall rxjs-compat -S
```

5.  Done Updating....

# AngularSpa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
