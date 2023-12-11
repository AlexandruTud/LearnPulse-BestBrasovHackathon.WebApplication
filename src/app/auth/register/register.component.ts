import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../../../_core/services/main.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  validateForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private mainService: MainService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.validateForm = this.formBuilder.group({
      firstName: [
        null,
        [Validators.required, Validators.pattern('[a-zA-Z -]*')],
      ],
      lastName: [
        null,
        [Validators.required, Validators.pattern('[a-zA-Z -]*')],
      ],
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(8),
          this.passwordStrengthValidator(),
        ],
      ],
      confirmPassword: [
        null,
        [Validators.required, this.passwordMatchValidator()],
      ],
      gender: [null],
    });
  }

  get firstName(): FormControl {
    return this.validateForm.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.validateForm.get('lastName') as FormControl;
  }

  get email(): FormControl {
    return this.validateForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.validateForm.get('password') as FormControl;
  }

  get confirmPassword(): FormControl {
    return this.validateForm.get('cofirmPassword') as FormControl;
  }

  passwordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }

      const hasUpperCase = /[A-Z]+/.test(value);

      const hasLowerCase = /[a-z]+/.test(value);

      const hasNumeric = /[0-9]+/.test(value);

      const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

      return !passwordValid ? { passwordStrength: true } : null;
    };
  }

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) {
        return null;
      }

      const passwordValid = this.password.value == value;

      return !passwordValid ? { passwordMatch: true } : null;
    };
  }

  validForm() {
    return this.validateForm.valid;
  }

  submit() {
    const payload = {
      email: this.email.value,
      password: this.password.value,
      lastName: this.lastName.value,
      firstName: this.firstName.value,
      gender: (<HTMLSelectElement>document.getElementById('gender')).value,
    };

    this.mainService.register(payload).subscribe({
      next: (response) => {
        localStorage.setItem('UserId', response);
        this.router.navigate(['/courses']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
