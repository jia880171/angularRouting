import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputName = 'iuu';
  inputUserType = 'default';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['/about'],{queryParams: {
      name: this.inputName,
      type: this.inputUserType,
    }});
  }
}


