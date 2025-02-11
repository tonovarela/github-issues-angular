import { Component, inject } from '@angular/core';
import { IssueItemComponent } from '@issues/components/issue-item/issue-item.component';
import { LabelsSelectorComponent } from '@issues/components/labelsSelector/labelsSelector.component';
import { IssuesService } from '@issues/services/issues.service';



@Component({
  selector: 'app-issues-list-page',
  imports: [LabelsSelectorComponent,IssueItemComponent ],
  templateUrl: './issues-list-page.component.html',
})
export default class IssuesListPageComponent {

  public issuesService = inject(IssuesService);

  get labelsQuery() {
    return this.issuesService.labelsQuery
  }


  get issuesQuery() {
    return this.issuesService.issuesQuery
  }




}
