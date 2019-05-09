import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.scss']
})
export class BracketComponent implements OnInit {

  brackets: any = [];

  constructor(public rest: RestService) { }

  ngOnInit() {
    this.getBrackets();
    // console.log(localStorage.getItem('token'));
  }

  getBrackets() {
    this.brackets = [];
    this.rest.getBrackets().subscribe((brackets: {}) => {
      this.brackets = brackets;
    });
  }

}
