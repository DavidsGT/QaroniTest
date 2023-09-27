# QaroniTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.

# Importante

* El proyecto trata de implementar fragmentos de conocimientos adquiridos.
* Lamentablemente el servicio de login me bloqueo por exceso de peticiones,
  por lo que opte por ingresar por el catch para realizar pruebas de Guards e interceptors.
* Notece que el interceptor agrega el token antes de realizar la peticion, por lo que
  para aquellas que no necesitan token uso httpWithBackend.
* Lamento mencionar que use Bootstrap para el diseño front, ya que no cuento con 
  conocimientos de Tailwind, e iba a tardar mas tiempo en el desarrollo del test.
  (En aprendizaje).
* Para el formulario notese que los datos de las personas guarda en memoria para ser 
  representada en la lista todo por servicios.
* Se uso loadChildren para implementar lazyload.
* Los formulario de persona cuentan con validaciones basicas ademas de usar directivas 
  para que solo se ingrese texto alfabetico.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
