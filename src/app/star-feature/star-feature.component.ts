import { Component,Input, OnInit } from '@angular/core';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-star-feature',
  imports: [NgbRating],
  templateUrl: './star-feature.component.html',
  styleUrl: './star-feature.component.scss'
})
export class StarFeatureComponent  implements OnInit{
 @Input() rating: any;
  @Input() isReadOnly: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
