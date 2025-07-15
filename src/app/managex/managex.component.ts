import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-managex',
  imports: [
    HeaderComponent,
    CommonModule
  ],
  templateUrl: './managex.component.html',
  styleUrl: './managex.component.scss'
})
export class ManagexComponent {
  type="";
  baseUrl='';
   constructor(private route: ActivatedRoute, private http: HttpClient,private rout:Router) {   }

   ngOnInit(): void{
    this.type = this.route.snapshot.params['type'];
    this.baseUrl = 'https://movie-review-system-p1tz.onrender.com/'.concat(this.type);
    this.loadMovies();
   }
  movies: any[] = [];
 
  loadMovies() {
    this.http.get<any[]>(this.baseUrl).subscribe(data => {
      this.movies = data;
    });
  }

  addMovie() {
    const name = prompt('Movie name?');
    const cover = prompt('Cover URL?');
    const rating = parseFloat(prompt('Rating?') || '0');

    if (name && cover) {
      const newMovie = {
        name,
        cover,
        rating,
        reviews: []
      };

      this.http.post(this.baseUrl, newMovie).subscribe(() => this.loadMovies());
    }
  }

  updateMovie(movie: any) {
    movie.name = prompt('New name?', movie.name) || movie.name;
    movie.rating = parseFloat(prompt('New rating?', movie.rating) || movie.rating);

    this.http.put(`${this.baseUrl}/${movie.id}`, movie).subscribe(() => this.loadMovies());
  }

  deleteMovie(id: number) {
    if (confirm('Are you sure you want to delete this movie?')) {
      this.http.delete(`${this.baseUrl}/${id}`).subscribe(() => this.loadMovies());
    }
  }

  addReview(movie: any) {
    const author = prompt('Author?');
    const reviewText = prompt('Review text?');
    const rating = parseFloat(prompt('Rating?') || '0');

    if (author && reviewText) {
      movie.reviews.push({
        author,
        published_on: new Date().toISOString(),
        review: reviewText,
        rating
      });

      this.http.put(`${this.baseUrl}/${movie.id}`, movie).subscribe(() => this.loadMovies());
    }
  }

  deleteReview(movie: any, reviewIndex: number) {
    if (confirm('Are you sure you want to delete this review?')) {
      movie.reviews.splice(reviewIndex, 1);

      this.http.put(`${this.baseUrl}/${movie.id}`, movie).subscribe(() => this.loadMovies());
    }
  }
  backToManage(){
    this.rout.navigate(['manage']);
  }
}
