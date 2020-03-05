import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng';
import { Router } from '@angular/router';
import { VeteranTypesFacade } from '../../../../../../../libs/store-sahba/src/lib/cif/facades/veteran-types.facade';

@Component({
  selector: 'myworkspace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class LoginComponent implements OnInit {

  veterans=this.veteranFacade.veteranTypes$;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private router: Router,
              private veteranFacade:VeteranTypesFacade) {
  }

  ngOnInit(): void {
    this.veteranFacade.getAll();
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
