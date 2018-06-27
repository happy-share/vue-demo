<template>
  <div class="container">
    <wired-card v-for="(item, index) in list" class="card" :key="index">
      <h4>{{item.full_name}}}</h4>
      <p>star:{{item.watchers}}</p>
      <p>fork:{{item.forks}}</p>
      <p>issue:{{item.open_issues}}</p>
      <p>{{item.description}}</p>
    </wired-card>
  </div>
</template>

<script>
import request from 'flyio'
import('wired-elements')

export default {
  data () {
    return {
      list: []
    }
  },
  async created () {
    const result = await request.get('https://api.github.com/search/repositories?sort=stars&order=desc&q=language:JavaScript created:"2017-06-21 .. 2018-06-27"')
    this.list = result.data.items
    console.log(result.data.items)
  }
}
</script>

<style scoped>
 .container {
   display: flex;
   justify-content: flex-start;
   align-content: center;
   flex-wrap: wrap;
 }

 .card {
   min-width: 280px;
   max-width: 500px;
 }
</style>

{
      "id": 107111421,
      "node_id": "MDEwOlJlcG9zaXRvcnkxMDcxMTE0MjE=",
      "name": "Front-End-Checklist",
      "full_name": "thedaviddias/Front-End-Checklist",
      "owner": {
        "login": "thedaviddias",
        "id": 237229,
        "node_id": "MDQ6VXNlcjIzNzIyOQ==",
        "avatar_url": "https://avatars1.githubusercontent.com/u/237229?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/thedaviddias",
        "html_url": "https://github.com/thedaviddias",
        "followers_url": "https://api.github.com/users/thedaviddias/followers",
        "following_url": "https://api.github.com/users/thedaviddias/following{/other_user}",
        "gists_url": "https://api.github.com/users/thedaviddias/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/thedaviddias/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/thedaviddias/subscriptions",
        "organizations_url": "https://api.github.com/users/thedaviddias/orgs",
        "repos_url": "https://api.github.com/users/thedaviddias/repos",
        "events_url": "https://api.github.com/users/thedaviddias/events{/privacy}",
        "received_events_url": "https://api.github.com/users/thedaviddias/received_events",
        "type": "User",
        "site_admin": false
      },
      "private": false,
      "html_url": "https://github.com/thedaviddias/Front-End-Checklist",
      "description": "🗂 The perfect Front-End Checklist for modern websites and meticulous developers",
      "fork": false,
      "url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist",
      "forks_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/forks",
      "keys_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/teams",
      "hooks_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/hooks",
      "issue_events_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/issues/events{/number}",
      "events_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/events",
      "assignees_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/assignees{/user}",
      "branches_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/branches{/branch}",
      "tags_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/tags",
      "blobs_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/languages",
      "stargazers_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/stargazers",
      "contributors_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/contributors",
      "subscribers_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/subscribers",
      "subscription_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/subscription",
      "commits_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/contents/{+path}",
      "compare_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/merges",
      "archive_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/downloads",
      "issues_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/issues{/number}",
      "pulls_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/labels{/name}",
      "releases_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/releases{/id}",
      "deployments_url": "https://api.github.com/repos/thedaviddias/Front-End-Checklist/deployments",
      "created_at": "2017-10-16T10:12:36Z",
      "updated_at": "2018-06-27T07:28:12Z",
      "pushed_at": "2018-06-27T06:12:28Z",
      "git_url": "git://github.com/thedaviddias/Front-End-Checklist.git",
      "ssh_url": "git@github.com:thedaviddias/Front-End-Checklist.git",
      "clone_url": "https://github.com/thedaviddias/Front-End-Checklist.git",
      "svn_url": "https://github.com/thedaviddias/Front-End-Checklist",
      "homepage": "https://frontendchecklist.io",
      "size": 2351,
      "stargazers_count": 28136,
      "watchers_count": 28136,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": true,
      "forks_count": 2592,
      "mirror_url": null,
      "archived": false,
      "open_issues_count": 45,
      "license": {
        "key": "cc0-1.0",
        "name": "Creative Commons Zero v1.0 Universal",
        "spdx_id": "CC0-1.0",
        "url": "https://api.github.com/licenses/cc0-1.0",
        "node_id": "MDc6TGljZW5zZTY="
      },
      "forks": 2592,
      "open_issues": 45,
      "watchers": 28136,
      "default_branch": "master",
      "score": 1.0
    },