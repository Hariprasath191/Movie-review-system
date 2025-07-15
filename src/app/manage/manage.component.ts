import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  imports:[CommonModule,HeaderComponent],
  styleUrl: './manage.component.scss'
})
export class ManageComponent {
  movies: any[] = [];
  baseUrl = 'https://movie-review-system-p1tz.onrender.com/';

  constructor(private router:Router) {}

 
  goToPopular( ) {
    this.router.navigate(['pop-movie', 'popular']);
  }
  goToTrending( ) {
    this.router.navigate(['pop-movie', 'trending']);
  }
  goToTheatre( ) {
    this.router.navigate(['pop-movie', 'theatre']);
  }
  goBack(){
    this.router.navigate(['home']);
  }
}
