import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  Username!: string;
  // public jwtHelperService: JwtHelperService = new JwtHelperService();

  constructor() {
    this.Username = localStorage.getItem('Authorization')!;
    // console.log(JSON.parse(localStorage.getItem('Authorization')).email );
    const userJson = localStorage.getItem('Authorization');
    let currentUser = userJson !== null ? userJson : {};
    console.log(userJson, "      ", currentUser);
    // console.log(JSON.parse(localStorage.getItem('Authorization') as string));
    
    JSON.parse(localStorage.getItem('user') as string);
    const item = localStorage.getItem('Authorization')?.localeCompare
    console.log(item);


    
  }
}
