import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService, User} from "../services/authentication.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Role} from "../models/Role";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user!: User;
  username = '';
  password = '';
  submitted = false;
  invalidLogin = false;
  invalidateClass = '';
  loginForm: FormGroup | any;
  @Input() error: string | null | undefined;
  private isAdmin: boolean = false;

  constructor(private router: Router, private authService: AuthenticationService,
              private snackBar: MatSnackBar,
              private formBuilder: FormBuilder, private userService: UserService) {
  }

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  checkLogin(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    (this.authService.authenticate(this.username, this.password).subscribe(
        () => {
          this.router.navigate(['home']);
          this.invalidLogin = false;
          this.invalidateClass = 'yes';
          this.snackBar.open('Zalogowano pomyślnie', 'OK', {
            duration: 5000,

          });
        },
        () => {
          this.invalidLogin = true;
          this.invalidateClass = 'invalid-feedback';

          this.snackBar.open('Wprowadzono niepoprawny identyfikator lub hasło!', 'OK', {
            duration: 5000,

          });
        }
      )
    );
  }
}
