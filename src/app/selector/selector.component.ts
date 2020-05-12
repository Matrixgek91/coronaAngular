import { Component, OnInit } from '@angular/core';

interface Data {
  value: string;
  viewValue: string;
  score: number; 
}

/**
 * @title Basic select
 */

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  data: Data [] = [
    {value: 'Ja-0', viewValue: 'Ja', score: 1},
    {value: 'Nee-1', viewValue: 'Nee', score: 0},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}