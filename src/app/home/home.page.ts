import { Case } from './../shared/models/case.model';
import { Page } from './../shared/models/page.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // page = new Page();
  // rows = new Array<Case>();

  // constructor() {
  //   this.page.pageNumber = 0;
  //   this.page.size = 20;
  // }

  // ngOnInit() {
  //   this.setPage({ offset: 0 });
  // }

  // /**
  //  * Populate the table with new data based on the page number
  //  * @param page The page to select
  //  */
  // setPage(pageInfo) {
  //   // this.page.pageNumber = pageInfo.offset;
  //   // this.serverResultsService.getResults(this.page).subscribe(pagedData => {
  //   //   this.page = pagedData.page;
  //   //   this.rows = pagedData.data;
  //   // });
  // }
}
