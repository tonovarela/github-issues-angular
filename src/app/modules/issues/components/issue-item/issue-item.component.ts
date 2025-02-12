import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { GitHubIssue, State } from '../../interfaces';
import { RouterLink } from '@angular/router';
import { NgStyle } from '@angular/common';
import { IssueService } from '@issues/services/issue.service';

@Component({
  selector: 'issue-item',
  imports: [RouterLink,NgStyle],
  templateUrl: './issue-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueItemComponent {

  issue = input.required<GitHubIssue>();
  issueService = inject(IssueService);

  get isOpen(){
    return this.issue().state === State.Open;
  }

  prefetchData(){    
   //this.issueService.prefetchIssue(this.issue().number.toString());   
   console.log(this.issue().number);
   this.issueService.setIssueData(this.issue());
   this.issueService.prefetchIssueComments(`${this.issue().number}`);
  }
 }
