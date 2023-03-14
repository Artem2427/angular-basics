import { FormControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
export class MyValidators {
  static restrictedEmails(control: FormControl): ValidationErrors | null {
    if (['v@mail.ru', 'test@mail.ru'].includes(control.value)) {
      return { restrictedEmail: true };
    }
    return null;
  }

  static uniqEmail(
    control: FormControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value === 'async@mail.ru') {
          resolve({ uniqEmail: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
