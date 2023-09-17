import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  val=true;
  pdfSrc:any;
  images = [
    {path: 'https://i.ibb.co/MSbx8Bj/banner.jpg'},
    {path: 'https://i.ibb.co/MSbx8Bj/banner.jpg'},
    {path: 'https://i.ibb.co/MSbx8Bj/banner.jpg'},
    {path: 'https://i.ibb.co/MSbx8Bj/banner.jpg'},
    {path: 'https://i.ibb.co/MSbx8Bj/banner.jpg'},
    {path: 'https://i.ibb.co/MSbx8Bj/banner.jpg'},
    {path: 'https://i.ibb.co/MSbx8Bj/banner.jpg'},
    {path: 'https://i.ibb.co/MSbx8Bj/banner.jpg'},
    {path: 'https://i.ibb.co/MSbx8Bj/banner.jpg'},
    {path: 'https://i.ibb.co/MSbx8Bj/banner.jpg'},
]; 

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected() {
    let $img: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      let reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
        
      };
  
      reader.readAsArrayBuffer($img.files[0]);
    }
  }

  textLayerRendered($ev:any){
    console.log($ev);
    console.log($ev.source.textContentItemsStr);
  }

}
