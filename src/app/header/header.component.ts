import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('title') title = "Hub Of Tools";
  constructor(public router:Router) { }

  ngOnInit() {
  }
  goHome() {
    this.router.navigateByUrl("/");
  }
}
