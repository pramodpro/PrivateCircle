import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  Date: Date;
  entity: number;
  id: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Date: new Date(), name: 'Competitive Intelligence', entity: 1, id: 1},
  {Date: new Date(), name: 'My Vendors', entity: 0, id: 2},
  {Date: new Date(), name: 'My Customers', entity: 6, id: 3},
  {Date: new Date(), name: 'Test_30_results', entity: 9, id: 4},
  {Date: new Date(), name: 'Boron', entity: 10, id: 5},
  {Date: new Date(), name: 'Carbon', entity: 12, id: 6},
  {Date: new Date(), name: 'Nitrogen', entity: 14, id: 7},
  {Date: new Date(), name: 'Oxygen', entity: 15, id: 8},
  {Date: new Date(), name: 'Fluorine', entity: 18, id: 9},
  {Date: new Date(), name: 'Neon', entity: 20, id: 10},
  {Date: new Date(), name: 'Competitive Intelligence', entity: 1, id: 11},
  {Date: new Date(), name: 'My Vendors', entity: 0, id: 12},
  {Date: new Date(), name: 'My Customers', entity: 6, id: 13},
  {Date: new Date(), name: 'Test_30_results', entity: 9, id: 14},
  {Date: new Date(), name: 'Boron', entity: 10, id: 15},
  {Date: new Date(), name: 'Carbon', entity: 12, id: 16},
  {Date: new Date(), name: 'Nitrogen', entity: 14, id: 17},
  {Date: new Date(), name: 'Oxygen', entity: 15, id: 18},
  {Date: new Date(), name: 'Fluorine', entity: 18, id: 19},
  {Date: new Date(), name: 'Neon', entity: 20, id: 20},
];

const DESC_LIST: any[] = [
  'Bundle Technolgies Private limited',
  'HUMAN I TECHNOLOGIES PRIVATE LIMITED',
  'FOUR ONE FIVE EXIM PRIVATE LIMITED',
  'ABSAAZ RETAIL SYSTEMS PRIVATE LIMITED',
  'VJ & JATIN ENTERPRISES PRIVATE LIMITED',
  'SCRAPQ HUB PRIVATE LIMITED',
  'SHRI RAM SURYASHAKTI PRIVATE LIMITED',
  'NICOLAS HERBS PRIVATE LIMITED',
  'ASASO TECH PRIVATE LIMITED',
  'MAHALPURCHURA SAND STONE MINES PRIVATE LIMITED',
  'AUTTAMI JEWELLERY & LIFESTYLE PRIVATE LIMITED',
  'CLEGANT SOLUTIONS PRIVATE LIMITED',
  'DIAL MAMA MOBILE SOLUTIONS PRIVATE LIMITED',
  'INDRAKART PRIVATE LIMITED',
  'SHRI SHAMLAJI SALES PRIVATE LIMITED'
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PrivateCircle';
  displayedColumns: string[] = ['position', 'name', 'entity','action','details'];
  dataSource:any;
  descriptionList:any;
  selectedRow:any;
  ngOnInit() {
    this.dataSource = ELEMENT_DATA;
    this.descriptionList = DESC_LIST
  }
  handleSearch(event:Event) {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();

    if(searchTerm && searchTerm.length >= 3) {
      this.dataSource = ELEMENT_DATA.filter(val => {
        return val.name.toLowerCase().includes(searchTerm);
      })
      console.log(this.dataSource);
      
    } else {
      this.dataSource = ELEMENT_DATA;
    }
  }
  displayDetails(element:any) {
    this.selectedRow = element.id;    
  }
}
