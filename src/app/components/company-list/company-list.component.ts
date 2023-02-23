import { Component, Input, OnChanges, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  Date: Date;
  entity: number;
  id: number;
}
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
const ELEMENT_DATA: PeriodicElement[] = [
  {Date: new Date(), name: 'Competitive Intelligence', entity: 1, id: 1},
  {Date: new Date(), name: 'My Vendors 3', entity: 0, id: 2},
  {Date: new Date(), name: 'My Customers 2', entity: 6, id: 3},
  {Date: new Date(), name: 'Test_30_results', entity: 9, id: 4},
  {Date: new Date(), name: 'test 2', entity: 10, id: 5},
  {Date: new Date(), name: 'test 3', entity: 12, id: 6},
  {Date: new Date(), name: 'test 4', entity: 14, id: 7},
  {Date: new Date(), name: 'test 5', entity: 15, id: 8},
  {Date: new Date(), name: 'test 6', entity: 18, id: 9},
  {Date: new Date(), name: 'my list', entity: 20, id: 10},
  {Date: new Date(), name: 'my list Intelligence', entity: 1, id: 11},
  {Date: new Date(), name: 'My Vendors', entity: 0, id: 12},
  {Date: new Date(), name: 'My Customers', entity: 6, id: 13},
  {Date: new Date(), name: 'Test_33_results', entity: 9, id: 14},
  {Date: new Date(), name: 'biocon', entity: 10, id: 15},
  {Date: new Date(), name: 'tata', entity: 12, id: 16},
  {Date: new Date(), name: 'adani', entity: 14, id: 17},
  {Date: new Date(), name: 'mahindra', entity: 15, id: 18},
  {Date: new Date(), name: 'cisco', entity: 18, id: 19},
  {Date: new Date(), name: 'swiggy', entity: 20, id: 20},
];

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit , OnChanges{
  @Input() searchTerm: string | any ;
  dataSource: any;
  displayedColumns: string[] = ['position', 'name', 'entity','action','details'];
  descriptionList:any = [];
  selectedRow:any;
  constructor() { }

  ngOnInit(): void {
    this.dataSource = ELEMENT_DATA;
  }
  handleSearch() {
    if(this.searchTerm && this.searchTerm.length >= 3) {
      this.dataSource = ELEMENT_DATA.filter(val => {
        return val.name.toLowerCase().includes(this.searchTerm);
      })      
    } else {
      this.dataSource = ELEMENT_DATA;
    }
  }
  ngOnChanges(): void {
    this.handleSearch();
  }
  displayDetails(element:any) {
    this.selectedRow = element.id;
    if(Math.random() < 0.5) {
      this.descriptionList = DESC_LIST;
    } else {
      this.descriptionList = [];
    }
        
  }

}
