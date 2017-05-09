# bibliotek-o: a BIBFRAME 2 Extension Ontology

## What is bibliotek-o?

bibliotek-o is an ontology recommendation for modeling bibliographic metadata. It includes:

* The [bibliotek-o extension ontology](http://bibliotek-o.org/ontology/), which defines additions and modifications to [BIBFRAME 2](http://id.loc.gov/ontologies/bibframe) and is intended to be used as a supplement to the core BIBFRAME 2 ontology.
* A set of ontology fragments (including BIBFRAME 2) intended for use with the bibliotek-o extension.
* A data model and application profile - i.e., a set of recommended models and patterns for the use BIBFRAME 2, bibliotek-o and external ontologies.

bibliotek-o is a joint product of the Mellon Foundation-funded Linked Data for Libraries - Labs (LD4L - Labs) and Linked Data for Production (LD4P) projects. See the [LD4L website](http://ld4l.org), the [LD4L - Labs public wiki](https://wiki.duraspace.org/pages/viewpage.action?pageId=77447730), and the [LD4P public wiki](https://wiki.duraspace.org/pages/viewpage.action?pageId=74515029) for more information on these projects.

## Versioning

The following protocols are used to version and record changes to the ontology:
  
  * Ontology versioning
    * The use of OWL versioning predicates follows the [OWL 2 specification](https://www.w3.org/TR/owl2-syntax/#Ontology_IRI_and_Version_IRI).
    * `owl:ontologyIRI` identifies the ontology; e.g., "http://bibliotek-o.org/ontology/".
    * `owl:versionIRI` identifies a particular version of the ontology; e.g., "http://bibliotek-o.org/1.0/ontology/". 
    * The `owl:versionIRI` of the current version of the ontology redirects to the `owl:ontologyIRI`.
    * By importing or referencing terms from, a particular `owl:versionIRI`, users are insulated from non-backward-compatible changes in newer published versions until they decide to upgrade.
    * `owl:versionInfo` provides a label containing the version number; e.g., "Version 1.0.1." This version number is also used to tag the repository: e.g., "v1.0.1".
    * Version numbering convention (MAJOR.MINOR.PATCH):
      * MAJOR: non-backward-compatible modifications
      * MINOR: backward-compatible semantic modifications
      * PATCH: non-semantic modifications, such as changing an rdfs:label.
    * The `owl:versionIRI` is updated for MAJOR and MINOR versions, but not PATCH versions. It thus includes only the MAJOR and MINOR version numbers, as in "http://bibliotek-o.org/1.0/ontology/".
    * To avoid an unnecessary proliferation of MAJOR versions, `owl:deprecated` is applied to terms slated for removal. A term deprecated in a MINOR version will be removed in the next MAJOR version. 
  * Issuance and modification datetimes
    * `dcterms:issued` is used on each ontology term, and on the ontology as a whole, to indicate date of first issuance.
    * `dcterms:modified` is used on each ontology term, and on the ontology as a whole, to indicate last modification date. 
    * Terms not modified since first issuance have the same `dcterms:issued` and `dcterms:modified` values.
    * Datetime values are expressed in ISO-8601 format; e.g., "2017-04-22T01:30:00-04:00".
    * The `dcterms` values do not include extraneous text, so that they are machine-readable without parsing. Change descriptions are provided by `skos:changeNote` (see following).
  * Change descriptions
    * `skos:changeNote` is used to provide human-readable descriptions of term modifications. 
    * One `skos:changeNote` element is used per version. That is, if two changes are made to the same term in the same version, both are recorded in the same change note. If two changes are made to the same term in two different versions, they are recorded in two change notes.
    * The change note also records the ontology version, so that modifications to a term can be traced through the affected versions of the ontology. The format used is, e.g., "Fix rdfs:label (v1.0.1)".
    * A `skos:changeNote` could be applied to the ontology itself to record major, broad, or high-level changes affecting multiple terms.

## Repository contents

This repository contains the formal bibliotek-o specification, ontology and dataset recommendations for use with bibliotek-o (including the recommended BIBFRAME 2 terms), and a set of human-readable documentation. 

  * OWL specification of bibliotek-o: `target-ontologies/bibliotek-o.owl`
  * RDFS and OWL specifications of recommended ontology fragments for use with bibliotek-o: `target-ontologies/`
  * Full specifications of these ontologies, for reference purposes: `reference-ontologies/`
  * Datatypes defined by bibliotek-o: `xsd/bibliotek-o.datatypes.xsd`
  * Datasets included in the bibliotek-o recommendation: `datasets/`
  * Human-readable documentation ([LODE](http://www.essepuntato.it/lode)): `doc/LODE/`
  * Overview diagrams of the bibliotek-o application profile, in both vue and png formats: `doc/overview/`
  * Recommendation documents, including recommended terms, models, and patterns: `doc/recommendations/`
  
  
## Additional documentation 

  * A [diagrammatic overview of the bibliotek-o application profile with an index of terms](http://bibliotek-o.org/overview.html) 
  * An overview of the principles and best practices guiding the development of bibliotek-o (forthcoming)
  * Discussion and diagrams of the principal models and patterns adopted by bibliotek-o (forthcoming)
  * Mapping tables from current catalog formats to the ontology recommendation (forthcoming)
  * Application profiles for original data modeling using the bibliotek-o recommendation (forthcoming)


## Issues and updates

  * Github issues are used to track bug reports and feature requests.
  * Follow these steps to propose an issue resolution:
    * Create an issue, adding any appropriate labels.
    * Fork the repository.
    * Commit the change to your fork.
    * Create a pull request. Note that develop is the default branch against which pull requests are made.
  * Pull requests will be reviewed at periodic intervals (to be specified).
  * For transparency and traceability, this process should be followed even by those with direct write access to the repository.