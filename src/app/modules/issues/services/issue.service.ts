import { Injectable, signal } from '@angular/core';
import { injectQuery, injectQueryClient } from '@tanstack/angular-query-experimental';
import { getIssueById, getIssueComments } from '../actions';
import { GitHubIssue } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class IssueService {


  private issueId = signal<string | null>(null);

  private queryClient = injectQueryClient()

  issueQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueId()],
    enabled: this.issueId() !== null,
    queryFn: () => getIssueById(this.issueId()!)
  }));

  issueCommentQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueId(), 'comments'],
    enabled: this.issueId() !== null,
    queryFn: () => getIssueComments(this.issueId()!)
  }));
  


  setIssueId(issueId: string){
    this.issueId.set(issueId);
  }

  prefetchIssue(issueId: string){
    this.queryClient.prefetchQuery({
      queryKey: ['issue', issueId],
      queryFn: () => getIssueById(issueId),
      staleTime:1000*60*5
    });
  }

  prefetchIssueComments(issueId: string){
  this.queryClient.prefetchQuery({
    queryKey: ['issue', issueId, 'comments'],
    queryFn: () => getIssueComments(issueId),
    staleTime:1000*60*5
  })

  }


  setIssueData(issue:GitHubIssue){
   this.queryClient.setQueryData(['issue', issue.number.toString()], issue, {
    updatedAt:Date.now() *1000 *60 //
   });
  }



}
