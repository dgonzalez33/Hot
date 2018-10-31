import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title = 'Hub Of Tools';
  @ViewChild('searchBar') searchBar;
  constructor(public router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.searchBar.value = params['fuzzy'];
    });
  }
  goHome() {
    this.router.navigateByUrl('/');
  }
  search() {
    this.router.navigate(['/view-tools', 'fuzzy', this.searchBar.value], { queryParams: { fuzzy: this.searchBar.value }});
  }
}
