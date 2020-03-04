import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng';
import { Router } from '@angular/router';

@Component({
  selector: 'myworkspace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [null],
      password: [null]
    });
  }

  loginSubmit() {
    console.log(this.loginForm.value);
    this.messageService.add({
      key: 'loginToast',
      severity: 'error',
      summary: 'هشدار',
      detail: 'وارد کردن عنوان الزامی است'
    });
    this.router.navigate(['home', this.loginForm.controls.username.value]);
  }

}
