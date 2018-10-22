import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-view-tools',
  templateUrl: './view-tools.page.html',
  styleUrls: ['./view-tools.page.scss'],
})
export class ViewToolsPage implements OnInit {
  category: string;
  constructor(private route: ActivatedRoute, public router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['category'];
   });
  }
  viewTool() {
    this.router.navigateByUrl("/tool/example");
  }

}
