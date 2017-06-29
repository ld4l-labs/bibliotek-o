#  bibliotek-o Change and Release Processes
 

This document articulates a structured process governing ongoing ontology changes and releases so that contributors, users, and other community members can plan and prepare for new versions.

## Change and release management team

* The change and release management (CRM) team is a dedicated team that oversees the change and release processes described below. 
* One team member assumes the role of team lead, which is primarily an administrative rather than decision-making role. The lead ensures that the change and release cycle proceeds according to schedule, calls meetings as necessary, and does initial triage of incoming issues.
* Team members and team lead may rotate periodically.
* Only CRM team members have write access to the repository (aside from GitHub organization owners). 
* Members of the CRM team must follow all procedures outlined below, rather than pushing directly to the repository, for proposing and making changes to the ontology.

## Issues 

GitHub issues are the vehicles for proposing change, requesting information or clarification, starting discussions, etc. Any interested community members are invited to submit issues as well as to watch individual issues or the entire repository. 

* Requests for modifications to bibliotek-o.owl, external ontologies (i.e., addition or removal of terms from the target files), datasets, datatypes, and artifacts such as documentation, are made through GitHub issues. These issues should be labelled `change request`.
* Contributors are encouraged to submit a pull request (see below) with an issue, while non-contributing users will submit issues as proposals for modification that may be assigned to contributors.
* Requests for clarification, modeling and implementation questions, discussion topics, etc. that are not direct proposals for change may also be submitted as GitHub issues. The issues should be labeled either `request for clarification` or `discussion`.  Such issues _may_ be reviewed and addressed outside the release cycle, but there is no commitment to do so.


### Standards for issue content
* Issues should be atomic. Multiple _interdependent_ modifications that are part of a single change should be submitted as a single issue, while multiple _unrelated_ changes should be submitted as separate issues. For example:
  * Atomic issue: "Define class Attribution, predicate hasAttribution, and inverse predicate isAttributionOf."
  * Non-atomic issue: "Define class Attribution and make predicate hasEquivalent symmetric."  
  * Where appropriate, the CRM team will break apart non-atomic issues into multiple issues and combine separate related issues into a single issue.
* Issues should include a rationale and use cases.
* Issues should include the ontology version number against which they are submitted.

## Pull requests

A pull request (PR) implements the changes proposed in an issue. Any interested community members are invited to submit PRs to the repository.

* PRs are made against the develop (default) branch.
* Each PR should address only one issue.
* A PR should include any modifications to the BIBFRAME and other target ontology files (i.e., adding or deleting terms from the fragments included in the repository) that are associated with the proposed change to bibliotek-o.
* PRs should not include regeneration of documentation, since this will be regenerated once prior to the release.
* The commit message should use a GitHub keyword to automatically close the related issue, such as `Fixes #5`. See [GitHub documentation on closing issues via commit messages](https://help.github.com/articles/closing-issues-via-commit-messages/).


### Standards for modifications to bibliotek-o.owl

A complete set of standards for editing the bibliotek-o OWL file is forthcoming. In the meantime, the following short list provides some guidelines.

* New term:
  * All annotation properties should have an `xml:lang` value. The value used for English is `"en"` (i.e., the variant of English is not specified). 
  * All local names are camel-cased. Local names of classes beging with an upppercase letter. Local names of properties and named individuals begin with a lowercase letter. 
  * With few exceptions, the rdfs:label value is derived from the full local name by inserting whitespace at word junctures and lowercasing second and subsequent words.
  * Include `dcterms:issued` and `dcterms:modified` assertions, with the same datetime value. Datetime values are expressed in ISO-8601 format; e.g., "2017-04-22T01:30:00-04:00".
* Modification of an existing term:
  * Update the `dcterms:modified` value.
  * Add a `skos:changeNote` describing the change, leaving a set of parentheses where the new version number will be filled in at release time; For example, "Fix rdfs:label ()".   
* Term deletion
  * Terms should be marked `owl:deprecated` rather than deleted. The CRM team will determine, based on the semantics of the change and whether the next release is a MAJOR, MINOR, or PATCH release, whether the term can be deleted rather than deprecated.
  * Update the `dcterms:modified` value and add a `skos:changeNote` as for modified terms.


## Change cycle

The change cycle operates on a quarterly basis. Each new change cycle begins with the announcement of deadlines associated with the release, and ends with the release of a new version (assuming there are changes to release). Steps in the change cycle are outlined below.

### Initial community announcement 
An announcement of the date of next release and associated deadlines is posted at the top of the [README](/README.md).

### Issue review
* Immediately following the issue submission deadline (see timeline below), the CRM team begins to review open issues.
* The team lead performs initial triage and assigns issues for review to team members as appropriate. Team members may reassign an issue to another team member.
* Each issue receives a recommendation from the assigned team member to accept for the current cycle, reject, or defer, and presents the recommendation to the team. 
* Recommendations are reviewed by the entire team and resolves any differences. Meetings are called as desired.
* Issues are either accepted for the current cycle, rejected, or deferred. 
* Accepted issues are labelled `accepted`, deferred issues are labelled `deferred`, and rejected issues are closed. A comment should be attached to deferred and rejected issues explaining the reason for the action.
* If an accepted issue has no associated PR, it is assigned to a contributor for implementation by the PR submission date. This contributor may reassign the issue to another contributor if appropriate.
* If an accepted issue has an associated PR, the PR may be reviewed at this time or during the initial PR review phase. 

### Initial PR review
* Immediately following the initial PR submission deadline (see timeline below), the CRM team begins to review open PRs associated with accepted issues.
* Any PR not associated with an issue is returned to the submitter with a request to enter a corresponding issue by a specific date.
* The PR is initially reviewed by the issue reviewer, who provides a recommendation to the team to accept or accept with modifications. (At this point there should be no rejection or deferral, since the PRs are associated with accepted issues).
* The team reviews the recommendations and resolves any differences. Meetings are called as desired.
* Once a decision is reached, the PR is labelled `accepted` or `accepted with modifications`.
* PRs accepted with modifications are returned to the submitter for modification by the final PR review date.

### Call for ontology group review and comment
* Once all PRs have been reviewed by the CRM team, the ontology group is notified via email with a summary of the proposed changes and/or list of PRs, with an invitation to comment.
* If no objections or concerns are registered by the group within one week of notification, all changes are considered approved.
* If an objection or concern is raised, discussion proceeds via an agreed upon channel (email, meeting, etc.) until a resolution is achieved: that is, the change is either accepted, accepted with modifications, rejected, or deferred.
* PRs accepted with modifications are returned to the submitter for modification by the final PR review date.

### Call for community review and comment  
* Notification to the community for review and comment on accepted PRs is sent to the community Google group and posted at the top of the [README](/README.md).

### Final PR review
* All PRs must be finalized by the PR close date (see timeline below). If requested modifications to a PR have not been made, the PR will be deferred.
* All accepted PRs are merged into the develop branch.
 
## Release 

A release occurs if and only if there are PRs that have been merged into the develop branch since the last release. 

At the time of release:

* the develop branch is merged to master
* the master branch is tagged
* the web server is updated with the new files
* if `owl:versionIRI` has been updated (for a `MAJOR` or `MINOR` version):
  * the prior redirect from the `owl:versionIRI` to the `owl:ontologyIRI` is removed. Prior versions continue to be available at their `owl:versionIRI`.
  * a redirect from the new `owl:versionIRI` to the `owl:ontologyIRI` is added.

The CRM team should refer to the [checklist of pre-release and release tasks](crm-checklist.md) for guidance on completing the release.



## Timeline

* Releases occur at most quarterly.
* The CRM team will develop and publish a general timeline for this quarterly process, specifying due dates relative to the final release date for each stage of the process (e.g., one month before release date, etc.). Dates to be scheduled are:
  * Issue submission deadline
  * Issue review complete
  * PR submission deadline
  * Initial PR review
  * Review by ontology group of accepted PRs, with or without modifications (one week)
  * Community announcement for review of accepted PRs, with or without modifications
  * Deadline for requested modifications to PRs
  * Final PR review and merge to develop
  * Pre-release tasks completed
  * Release 
 
At the beginning of each new release cycle, the team will announce the release timeline, including specific due dates for each stage of the process, at the top of the [README](README.md).


## Branching policy

* Releases are made from the master branch. The most current published version of the ontology is always at the tip of the master branch.
* The develop branch contains changes approved for the next release.
* At the point of release:
    * The develop branch is merged to master.
    * The master branch is tagged with the version number. The tag name corresponds to the ontology version defined by the `owl:versionInfo` value. E.g., tag `v1.0.1` for version "Version 1.0.1".
    * If the new version represents a MAJOR or MINOR update, the old version will remain available at its `owl:versionIRI`, while the latest version will redirect to the `owl:ontologyIRI` http://bibliotek-o.org/ontology/.  
* Changes to non-bibliotek-o target ontology files may be pushed to master without a release and reversioning, provided there are no concomitant changes to the bibliotek-o ontology.
* Changes not affecting the ontology, such as README or documentation updates, may be pushed to master without a release and reversioning.




