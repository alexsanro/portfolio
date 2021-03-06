import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class AboutMeComponent implements OnInit {

  constructor(private titleService: Title) { 
    this.titleService.setTitle("@lexsanro / Sobre mi");
  }

  displayContactDiv: boolean = true;

  ngOnInit(): void {
    this.displayContact(window.innerWidth) 
  }
  onResize(event){
    var windowWidth = event.target.innerWidth;
    this.displayContact(windowWidth);
  }

  displayContact(size: Number){
    if(size < 992){
      this.displayContactDiv = false;
    }else{
      this.displayContactDiv = true;
    }  
  }

  openCurriculum(){
    window.open('../../assets/documentos/alejandro_dos_santos_rojo_cv.pdf', '_blank');
  }

}
