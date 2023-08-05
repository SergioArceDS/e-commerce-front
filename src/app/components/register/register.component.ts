import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    constructor(private authService: AuthService){

    }

    confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
      if(!control.value){
        return {required: true}
      }else if (control.value !== this.formUser.controls['confirmPassword'].value){
        return { confirm: true, error: true }
      }
      return {}
    }

    formUser = new FormGroup({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required),
      'confirmPassword': new FormControl('', [Validators.required, this.confirmationValidator])
    });

    register(){
      console.log(this.formUser.value);
      this.authService.register(this.formUser.value).subscribe((res) => {
        console.log(res);
      });
    }
}
