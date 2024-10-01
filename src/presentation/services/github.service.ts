import { GithubIssuePayload, GitHubStarPayload } from "../../interfaces";

export class GitHubService {


  onStar(payload: GitHubStarPayload): string {

    const { action, sender, repository, starred_at } = payload


    return `User ${sender.login} ${action} star on ${repository.full_name}`


  } onIssue(payload: GithubIssuePayload) {

    const { action, issue } = payload

    if (action === 'opened') {
      const message = `An issue was opened with this title ${issue.title}`
      console.log(message);

      return message;
    }
    if (action === 'closed') {
      const message = `An issue was closed bye ${issue.user.login}`
      console.log(message);

      return message;
    }
    if (action === 'reopened') {
      const message = `An issue was reopened bye ${issue.user.login}`
      console.log(message);

      return message;
    }

    return `unhandled action for the issue event ${action}`
  }


}