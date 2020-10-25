import { CommonModule } from '@angular/common';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DoutorPipe } from './data.pipe';


@NgModule({
    declarations: [
        DoutorPipe
   
    ],
    imports: [
        CommonModule,
        BrowserModule
    ],
    exports: [
        DoutorPipe
    ]
  })
  export class PipeModule { }