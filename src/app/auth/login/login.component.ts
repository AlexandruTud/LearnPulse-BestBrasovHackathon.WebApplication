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
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  validateForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private mainService: MainService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.validateForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  get email(): FormControl {
    return this.validateForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.validateForm.get('password') as FormControl;
  }

  validForm() {
    return this.validateForm.valid;
  }

  goToRegister() {
    this.router.navigate(['/auth/register']);
  }

  submit() {
    const payload = {
      email: this.email.value,
      password: this.password.value,
    };

    this.mainService.login(payload).subscribe({
      next: (response) => {
        localStorage.setItem('UserId', response);
        this.router.navigate(['/courses']);
      },
      error: (error) => {
        alert('Numele sau parola sunt gresite');
      },
    });
  }
}
