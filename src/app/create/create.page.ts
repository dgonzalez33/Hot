import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, RequiredValidator } from '@angular/forms';
import { CreateService } from './create.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
  providers: [CreateService]
})
export class CreatePage implements OnInit {
  public toolForm: FormGroup;
  constructor( private formBuilder: FormBuilder, public createService: CreateService,
                private router: Router ) {
    this.toolForm = this.formBuilder.group({
      attuid: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      department: ['', Validators.required],
      tool_name: ['', Validators.required],
      cost: ['', Validators.required],
      benefit: ['', [Validators.maxLength(500), Validators.required]],
      description: ['', [Validators.maxLength(500), Validators.required]],
      category: ['', Validators.required],
      // sector: [''],
      attachment: ['']
    });
  }
  ngOnInit(): void {
    console.log(this.toolForm.controls['description']);
    this.createService.getEmployee(localStorage.getItem('attuid')).subscribe(emp => {
      this.toolForm.controls['department'].setValue(emp['dept_desc']);
    });
    this.toolForm.controls['attuid'].setValue(localStorage.getItem('attuid'));
    this.toolForm.controls['first_name'].setValue(localStorage.getItem('firstName'));
    this.toolForm.controls['last_name'].setValue(localStorage.getItem('lastName'));
  }
  onFileChange(event ) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.toolForm.controls.attachment.setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        });
      };
    }
  }
  submitForm() {
    this.createService.createTool(this.toolForm.value).subscribe(
      response => this.router.navigate(['/tool/' + response]),
      // response => console.log(response),
      err => console.log(err));
  }

}
