import { AbstractControl } from "@angular/forms";
import { VariablesGlobales } from "../models/variablesGlobales.model";
export class CustomValidators {
  static cedula(control: AbstractControl): {[key: string]: any} | null {
    if (control.value && control.value.length === 10 && VariablesGlobales._validarCedula(control.value)) {
      return { 'cedulaInvalida': true };
    }
    return null;
  }
}