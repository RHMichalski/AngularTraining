import { AbstractControl, ValidatorFn } from "@angular/forms";

export function forbiddensignValidator(forbiddenName : RegExp) :ValidatorFn {
  return (control : AbstractControl) : any | null => {
    const forbidden : boolean = forbiddenName.test(control.value);
    return forbidden ? {'forbiddenName':{value: control.value}} : null;
}
}
