import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { GitHubLabel } from '../../interfaces';
import { NgStyle } from '@angular/common';
import { IssuesService } from '@issues/services/issues.service';

@Component({
  selector: 'issues-labels-selector',
  imports: [NgStyle],
  templateUrl: './labelsSelector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelsSelectorComponent { 
  labels= input.required<GitHubLabel[]>();

  issuesService = inject(IssuesService);


  isSelected(label: string){
    return this.issuesService.selectedLabels().has(label);
  }

  onToggleLabel(label: string){
    this.issuesService.toogleLabel(label);
  }
}
