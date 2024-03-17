import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router,
    private toast: ToastrService
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      isAdmin: [false]
    });
  }

  ngOnInit() { }

  onSubmit() : void{
      if (this.registerForm.valid) {
        this.userService.registerUser(this.registerForm.value).subscribe(
          (response) => {
            // this.userService.saveToken(response);
            console.log(response)
            // this.router.navigate(['/login']);
            this.toast.success('user added successfully')
          },
          (error) => {
            console.error('Registration error:', error);
          }
        );
      }
  }

  onChangeUserRole(isAdmin: boolean) {
    this.registerForm.patchValue({ isAdmin: isAdmin });
    console.log(isAdmin);
  }
}
