import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.css']
})
export class SetupPageComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }
  size: number = 0;
  onChanche(){
    this.size = this.size+1;
  }
}
