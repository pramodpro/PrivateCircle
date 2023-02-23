import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PrivateCircle';
  
  dataSource:any;
  descriptionList:any;
  selectedRow:any;
  searchTerm:string | undefined;
  ngOnInit() {
  }
  handleSearch(event:Event) {
    this.searchTerm = (event.target as HTMLInputElement).value.toLowerCase();    
  }
  displayDetails(element:any) {
    this.selectedRow = element.id;    
  }
}
