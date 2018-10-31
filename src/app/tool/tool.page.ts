import { Component, OnInit } from '@angular/core';
import { ToolService } from './tool.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-tool',
  templateUrl: './tool.page.html',
  styleUrls: ['./tool.page.scss'],
  providers: [ToolService]
})
export class ToolPage implements OnInit {
  toolId: string;
  useFooter = false;
  comments: any = [{
    attuid: '',
    first_name: '',
    last_name: '',
    comment: '',
    date: ''
  }];
  commentText: string;
  tool: any = {
    attuid: '',
    first_name: '',
    last_name: '',
    department: '',
    sector: '',
    tool_name: '',
    cost: '',
    category: '',
    benefit: '',
    description: '',
    date: ''
  };
  constructor(public toolService: ToolService, private route: ActivatedRoute, public router: Router,
                public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.toolId = params['toolId'];
      this.toolService.getTool(this.toolId).subscribe(tool => {
        this.tool = tool[0];
      });
      this.toolService.getComments(this.toolId).subscribe(comments => {
        this.comments = comments;
      });

    });
  }
  cleanURL(oldURL ) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
  }
  navigateToCat(category) {
    this.router.navigateByUrl('/view-tools/' + category);
  }
  comment() {
    this.toolService.addComment(this.commentText, this.tool.toolId, this.tool.attuid).subscribe(
      response => this.toolService.getComments(this.toolId).subscribe(comments => {
        this.comments = comments;
        this.commentText = '';
      }),
      err => console.log(err)
    );
  }
}
