import { Directive } from '@angular/core';
import { AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Observable, of } from "rxjs";

@Directive({
  selector: "[maiorIdadeValidator]",
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: MaiorIdadeDirective,
      multi: true,
    },
  ],
})
export class MaiorIdadeDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const dataNascimento = control.value;
    const anoNascimento = new Date(dataNascimento).getFullYear() + 18;
    const anoAtual = new Date().getFullYear();
    const maiorDeIdade = anoNascimento <= anoAtual;

    return of(maiorDeIdade ? null : { maiorIdadeValidator: true });
  }
}
