import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GitHubIssue, State } from '../../interfaces';
import { RouterLink } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'issue-item',
  imports: [RouterLink,NgStyle],
  templateUrl: './issue-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueItemComponent {

  issue = input.required<GitHubIssue>();

  get isOpen(){
    return this.issue().state === State.Open;
  }
 }
