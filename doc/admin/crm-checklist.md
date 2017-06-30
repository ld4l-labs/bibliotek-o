# Change and Release Management Checklist

This document enumerates the tasks required to release a new version of bibliotek-o.

## Pre-release tasks

After all PRs have been merged to the develop branch (see the documented [change cycle](crm.md)), the CRM team performs the following pre-release tasks.

* Proofread and review for typos and other errors. A convenient way to do this is by generating and reviewing documentation.
* Generate new documentation. Currently we use the [online LODE tool](http://www.essepuntato.it/lode) for auto-generating documentation of bibliotek-o. Follow the [instructions for generating LODE documentation](/doc/lode/readme.md).
* Determine the new version number according to the criteria defined in the [README](/README.md).
* Combine multiple `skos:changeNote` values for a single term that have been added in this release into a single change note (see usage of `skos:changeNote` documented in the [README](/README.md)).
* Add version number to `skos:changeNote` values.
* Update new `dcterms:issued` and `dcterms:modified` values of any new or modified terms to reflect the datetime of the release. For new terms, the `dcterms:modified` and `dcterms:issued` values are identical. All datetimes are normalized to the actual date of release, not the date the change was committed to the repository.
* Update the [change log](/CHANGELOG.md) by reviewing the GitHub history.
* Update the [README](/README.md). At a minimum, the News section should be updated to include announcement of the new version.
* Generate new documentation of the ontology modules using the LD4LOntologyDocBuilder (forked to the GitHub ld4l-labs organization).
* Update the bibliotek-o.org home page, if necessary.
* Copy `bibliotek-o.owl` to `/site/ontology.owl` and the generated `ontology.html` file from `/doc/lode/` to `/site/`.
* Create a new directory under site based on its `owl:versionIRI`. For example, if the previous `owl:versionIRI` was `http://bibliotek-o.org/1.1/ontology/`, create a directory `1.1` under `/site/`.
* Copy the previous versions of `/site/ontology.owl` and `/site/ontology.html` to the new directory.
## Release tasks

After all pre-release tasks are completed, the CRM executes the new release:

* Merge develop to master and tag the master branch with the version number (`vn.n.n`).
* Update the web server: this is an automated process triggered by a merge to the master branch. 
* If `owl:versionIRI` has been updated (for a `MAJOR` or `MINOR` version):
  * Remove the redirect from the `owl:versionIRI` to the `owl:ontologyIRI`. This version remains publicly available at its `owl:versionIRI`.
  * Add a redirect from the new `owl:versionIRI` to the `owl:ontologyIRI`. 
* Announce the new release to the community (notification channels TBD).