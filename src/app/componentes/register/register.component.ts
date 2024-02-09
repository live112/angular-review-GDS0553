import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { get } from 'http';
import { Auth } from '../../interfaces/auth';
import { AuthService } from '../../services/auth.service';
import { response } from 'express';
import { error } from 'console';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm = this.fb.group({
    fullname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  });

  constructor(private fb:FormBuilder, private authService:AuthService, private messageService: MessageService){

  }

  get email() {
    return this.registerForm.controls['email']
  }

  get fullname() {
    return this.registerForm.controls['fullname']
  }

  get password() {
    return this.registerForm.controls['password']
  }

  get confirmPassword() {
    return this.registerForm.controls['confirmPassword']
  }


  enviarUsuario(){
    console.log("Estoy enviando datos")

    const datos = {...this.registerForm.value}
    delete datos.confirmPassword;

     this.authService.registerUser(datos as Auth).subscribe(
      response => {
        this.messageService.add({ severity: 'success',
         summary: 'Registo Exitoso',
        detail: 'El usuario a sido registrado con exito' });
      },
      error => {
        
      }
    )
  }

}
