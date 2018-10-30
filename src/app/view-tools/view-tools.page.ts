import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, RequiredValidator } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToolService } from './../tool/tool.service';
@Component({
  selector: 'app-view-tools',
  templateUrl: './view-tools.page.html',
  styleUrls: ['./view-tools.page.scss'],
  providers: [ToolService]
})
export class ViewToolsPage implements OnInit {
  category: string;
  deptOptions: Array<string>;
  tools: any = [{
    id: '',
    tool_name: '',
    department: '',
    description: '',
    category: '',
    cost: ''
  }];
  toolsRow: Array<number> = [];
  filterForm: FormGroup;
  fuzzy: string;
  constructor(private route: ActivatedRoute, public router: Router,
              public toolService: ToolService, public formBuilder: FormBuilder) {
                this.filterForm = this.formBuilder.group({
                  category: [''],
                  department: [''],
                  price: ['']
                });
    }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.fuzzy = params['fuzzy'];
      this.category = params['category'];
      this.filterForm.controls['category'].setValue(this.category);
    });
    this.filterForm.valueChanges.subscribe(form => {
    this.toolService.filterTools(this.filterForm.value, this.fuzzy).subscribe(tools => {
      this.tools = tools;
      this.deptOptions = [];
      let deptHash = {};
      this.toolsRow = new Array(this.tools.length);
      (<Array<object>>tools).forEach(tool => {
        deptHash[tool['department']] = true;
      });
      this.deptOptions = Object.keys(deptHash);
    });
   });
  }
  viewTool(toolId: string) {
    this.router.navigateByUrl('/tool/' + toolId);
  }

}
