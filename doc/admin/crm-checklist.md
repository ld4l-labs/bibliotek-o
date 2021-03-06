# Change and Release Management Checklist

This document enumerates the tasks required to release a new version of bibliotek-o.

## Pre-release tasks

After all PRs have been merged to the develop branch (see the documented [change cycle](crm.md)), the CRM team performs the following pre-release tasks.

* Versioning
    * Determine the new version number according to the criteria defined in the [README](/README.md).
    * Update the `owl:versionInfo`.  This value shows all three version numbers: e.g., "Version 1.1.0".
    * For a `MAJOR` or `MINOR` release, when the `owl:versionIRI` changes:
      * Create a new directory under `/site/` based on the new `owl:versionIRI`. For example, if the new `owl:versionIRI` is `http://bibliotek-o.org/1.1/ontology/`, create a directory `/site/1.1/`.
      * Update the `owl:versionIRI` and all term URIs to reflect the new version. 
      * Add an `owl:priorVersion` assertion to the ontology; e.g., `<owl:priorVersion rdf:resource="http://bibliotek-o.org/1.1/ontology/"/>`.
      * If appropriate, an `owl:backwardCompatibleWith` or `owl:incompatibleWith` assertion can also be added.

* Final updates to the ontology file 
  * Proofread and review the OWL file for typos and other errors. A convenient way to do this is by generating and reviewing the documentation. Another useful practice is to load the ontology into Protégé for review, and run reasoning to check for any logic errors. In future automated validity tests may be implemented.
  * Combine multiple `skos:changeNote` values for a single term that have been added in this release into a single change note (see usage of `skos:changeNote` documented in the [README](/README.md)).
  * Add the new version number to `skos:changeNote` values.
  * Update new `dcterms:issued` and `dcterms:modified` values of any new or modified terms to reflect the datetime of the release. For new terms, the `dcterms:modified` and `dcterms:issued` values are identical. All datetimes are normalized to the actual date of release, not the date the change was committed to the repository.

* Documentaton
  * Generate new documentation. Currently we use the [online LODE tool](http://www.essepuntato.it/lode) for auto-generating documentation of bibliotek-o. Follow the [instructions for generating LODE documentation](/doc/lode/readme.md).
  * Update the [change log](/CHANGELOG.md) by reviewing the GitHub history.
  * Update the [README](/README.md). At a minimum, the News section should be updated to include announcement of the new version.
  * Generate new documentation of the ontology modules using the LD4LOntologyDocBuilder (forked to the GitHub ld4l-labs organization). Copy the generated `overview.html` to the `/site/` directory. 

* Site 
  * Copy `bibliotek-o.owl` as `ontology.owl` to the appropriate subdirectory of `/site/`. The generated LODE documentation has been copied to the same directory in the previous step of regenerating the documentation, according to the [instructions](/doc/lode/readme.md). 
  * Update the bibliotek-o.org home page `/site/index.html`, if necessary.
  

## Release tasks

After all pre-release tasks are completed, the CRM executes the new release:

* Merge develop to master and tag the master branch with the version number (`vn.n.n`).
* Update the web server: this is an automated process triggered by a merge to the master branch. 
* If `owl:versionIRI` has been updated for a `MAJOR` or `MINOR` version, update the redirect from the `owl:ontologyIRI` to the new `owl:versionIRI`. 
* Announce the new release to the community (notification channels TBD).