import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-description',
  templateUrl: './company-description.component.html',
  styleUrls: ['./company-description.component.css']
})
export class CompanyDescriptionComponent implements OnInit {
  @Input('description') descriptionList: [] | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
