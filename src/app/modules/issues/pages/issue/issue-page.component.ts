import {  Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import  {toSignal} from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { IssueService } from '@issues/services/issue.service';
import { IssueCommentComponent } from '@issues/components/issue-comment/issue-comment.component';

@Component({
  selector: 'app-issue-page',
  imports: [RouterLink,IssueCommentComponent],
  templateUrl: './issue-page.component.html',
  
})
export default class IssuePageComponent {

  router = inject(ActivatedRoute);

  issueService= inject(IssueService);

  public issueQuery= this.issueService.issueQuery
  public issueCommentQuery= this.issueService.issueCommentQuery 

  issueNumber = toSignal<string>(this.router.paramMap.pipe(
    map(params => params.get('number')??''),
    tap((id)=>this.issueService.setIssueId(id))
  ));




}
