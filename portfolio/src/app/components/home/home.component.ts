import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  panelOpenState = false;
  form:any;
  

  constructor(public fb:FormBuilder,public snackbar: MatSnackBar,@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.formbuilder()
   
  
  }
  formbuilder() {
    this.form = this.fb.group({
      Name: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.pattern('^[A-Za-z0-9._%-]+@[a-z0-9._%-]+\\.[a-z]{2,4}$')]],
      Message: ['', [Validators.required]]
    })
  }
  submit(){
    if (!this.form.valid) {
      this.snackbar.open('I saw you Please fill the form', 'ok', {
        duration: 3000,
        panelClass: ['blue-snackbar'],
      });
    }
    // let temp = this.form.value;
    //   console.log('---', temp);
    //   let obj: any = {};
    //   obj.Name = temp.Name;
    //   obj.email = temp.email;
    //   obj.Feedback = temp.Feedback;
    //   this.http.post(`${environment.base_url}/contactUs`,obj).subscribe((data:any)=>{});
  else{  this.snackbar.open('Your Response is recorded, Thankyou', 'ok', {
      duration: 3000,
      panelClass: ['blue-snackbar'],
    });
  }
  }
  scrollToTop(): void {
     return this.document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start'
    });
  }
 

  

}

