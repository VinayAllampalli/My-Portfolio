import { NgModule } from "@angular/core";
import {MatIconModule} from '@angular/material/icon'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRadioModule} from '@angular/material/radio';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from "@angular/material/button";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';

@NgModule({
  exports:[
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatRadioModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule
  ]

})
 export class MaterialModule{}