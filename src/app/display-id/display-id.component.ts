import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-id',
  templateUrl: './display-id.component.html',
  styleUrls: ['./display-id.component.css']
})
export class DisplayIdComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route)
    // this.route.url.subscribe(url=>{
    //   console.log('DisplayIdComponent ',url)
    // })
  }

}