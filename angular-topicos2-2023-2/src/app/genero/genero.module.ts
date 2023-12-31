import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneroRoutingModule } from './genero-routing.module';
import { GeneroListComponent } from './components/genero-list/genero-list.component';
import { GeneroFormComponent } from './components/genero-form/genero-form.component';

import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';

import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import { MatPaginatorModule } from '@angular/material/paginator';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GeneroListComponent,
    GeneroFormComponent
  ],
  imports: [
    CommonModule,
    GeneroRoutingModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatPaginatorModule,
    FormsModule
  ]
})
export class GeneroModule { }
