import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-top-restaurants',
  templateUrl: './top-restaurants.component.html',
  styleUrls: ['./top-restaurants.component.css'],
  animations: [
    trigger ('animationWindow', [
      transition('void => *', [
        style({ opacity: 1 }),
        animate('2s', style({ opacity: 0 }))
      ]),
      transition('* => void', [animate('2s', style({ opacity: 0 }))
    ])
    ])
  ]
  })


export class TopRestaurantsComponent implements OnInit {

  
  constructor() { }

  showHideMirazur: boolean;
  showHideClose: true;
  name: string;
  information: string;

  createCardClick() {
    this.showHideMirazur = !this.showHideMirazur

  }

  
   

  ngOnInit(): void {
    this.name = 'Restaurant Mirazur';
    // tslint:disable-next-line: max-line-length
    this.information = 'What makes it special: Unrivalled views of the French Riviera, three levels of cascading vegetable gardens churning out the sweetest produce and a team of outrageously talented cooks and front-of-house staff combine to make Mirazur the ultimate restaurant experience. Mauro Colagreco’s unique cuisine is inspired by the sea, the mountains and the restaurant’s own gardens, including Menton’s emblematic citrus fruits.';
  }

}
