# bibliotek-o: A Framework for Modeling Bibliographic Metadata 

## What is bibliotek-o?

bibliotek-o is an ontology framework for modeling bibliographic metadata based on the [Library of Congress BIBFRAME ontology](http://id.loc.gov/ontologies/bibframe). It includes:

* The [bibliotek-o ontology](http://bibliotek-o.org/ontology/), which defines extensions and modifications to BIBFRAME and is intended to be used as a supplement to the core BIBFRAME 2 ontology.
* A set of external ontology fragments (including BIBFRAME) intended for use with the bibliotek-o ontology.
* A data model and application profile - i.e., a set of recommended models and patterns for expressing bibliographic metadata using BIBFRAME, the bibliotek-o ontology, and other external ontologies.

bibliotek-o is a joint product of the Mellon Foundation-funded Linked Data for Libraries - Labs (LD4L - Labs) and Linked Data for Production (LD4P) projects. See the [LD4L website](http://ld4l.org), the [LD4L - Labs public wiki](https://wiki.duraspace.org/pages/viewpage.action?pageId=77447730), and the [LD4P public wiki](https://wiki.duraspace.org/pages/viewpage.action?pageId=74515029) for more information on these projects.

## News

* **2017-06-30** Q2 release of Version 1.1.0 
  * Due to a compressed change cycle this quarter, new issues and pull requests will not be considered. 
* Watch for an announcement of the Q3 release and timeline.


## Repository contents

This repository contains the formal bibliotek-o specification, ontology and dataset recommendations for use with bibliotek-o (including the recommended BIBFRAME 2 terms), and a set of human-readable documentation. 

* [`target-ontologies/bibliotek-o.owl`](target-ontologies/bibliotek-o.owl): OWL specification of bibliotek-o 
* [`target-ontologies/`](target-ontologies/): RDFS and OWL specifications of recommended ontology fragments, including BIBFRAME, for use with bibliotek-o
* [`reference-ontologies/`](reference-ontologies): Full specifications of these ontologies, for reference purposes
* [`xsd/bibliotek-o.datatypes.xsd`](xsd/bibliotek-o.datatypes.xsd): Datatypes defined by bibliotek-o
* [`datasets/`: Datasets included in the bibliotek-o recommendation 
* `doc/LODE/`](doc/LODE/): Human-readable documentation (generated by the [online LODE tool](http://www.essepuntato.it/lode)): 
* [`doc/overview/`](doc/overview/): Overview diagrams of the bibliotek-o application profile, in both vue and png formats
* [`doc/principles/`](doc/principles): The foundational principles applied to the development of bibliotek-o
* [`CHANGELOG.md`](CHANGELOG.md): A change log with sections for each release
* [`RELEASES.md`](RELEASES.md): Documentation of the bibliok-o change and release process and how to engage with it
* `README.md`: This README
  
## Versioning

The following protocols are used to version and record changes to the ontology.
  
### Ontology versioning
* The use of OWL versioning predicates follows the [OWL 2 specification](https://www.w3.org/TR/owl2-syntax/#Ontology_IRI_and_Version_IRI).
* `owl:ontologyIRI` identifies the ontology; e.g., `http://bibliotek-o.org/ontology/`.
* `owl:versionIRI` identifies a particular version of the ontology; e.g., `http://bibliotek-o.org/1.0/ontology/`. 
* The `owl:versionIRI` of the current version of the ontology redirects to the `owl:ontologyIRI`.
* Previous versions of the ontology continue to be available at their `owl:versionIRI`.
* By importing or referencing terms from, a particular `owl:versionIRI`, users are insulated from non-backward-compatible changes in newer published versions until they decide to upgrade.
* Version numbering convention (`MAJOR.MINOR.PATCH`):
    * `MAJOR`: non-backward-compatible modifications
    * `MINOR`: backward-compatible semantic modifications
    * `PATCH`: non-semantic modifications, such as changing an rdfs:label.
* The `owl:versionIRI` is updated for `MAJOR` and `MINOR` versions, but not `PATCH` versions. It thus includes only the `MAJOR` and `MINOR` version numbers, as in `http://bibliotek-o.org/1.0/ontology/`.
* To avoid an unnecessary proliferation of `MAJOR` versions, `owl:deprecated` is applied to terms slated for removal. A term deprecated in a `MINOR` version will be removed in the next `MAJOR` version. 
* `owl:versionInfo` provides a label containing the version number, formatted as `vn.n.n`; e.g., `v1.0.1`. This version number is also used to tag the repository. 

### Issuance and modification datetimes
* `dcterms:issued` is used on each ontology term, and on the ontology as a whole, to indicate datetime of first issuance.
* `dcterms:modified` is used on each ontology term, and on the ontology as a whole, to indicate last modification datetime. 
* Terms not modified since first issuance have the same `dcterms:issued` and `dcterms:modified` values.
* Datetime values are expressed in ISO-8601 format; e.g., "2017-04-22T01:30:00-04:00".
* The `dcterms` values do not include extraneous text, so that they are machine-readable without parsing. Change descriptions are provided by `skos:changeNote` (see following section).

### Change descriptions
* `skos:changeNote` is used to provide human-readable descriptions of term modifications. 
* One `skos:changeNote` is used per version. That is, if more than one change is made to the same term in the same version, all are recorded in the same change note. If multiple changes are made to the same term in different versions, they are recorded in multiple change notes.
* The change note also records the ontology version, so that modifications to a term can be traced through the affected versions of the ontology. The format used is, e.g., "Fix rdfs:label (v1.0.1)".
* A `skos:changeNote` could be applied to the ontology itself to record major, broad, or high-level changes affecting multiple terms.
* Changes are also recorded in the [project change log](CHANGELOG.md).

## Change and release process

Please refer to the [Change and Release Management documentation](RELEASES.md) for details on this process.

## Additional bibliotek-o documentation 

* A [diagrammatic overview of the bibliotek-o application profile with an index of terms](http://bibliotek-o.org/overview.html) 
* An overview of the principles and best practices guiding the development of bibliotek-o (forthcoming)
* Discussion and diagrams of the principal models and patterns adopted by bibliotek-o (forthcoming)
* Mapping tables from current catalog formats to the ontology recommendation (forthcoming)
* Application profiles for original data modeling using the bibliotek-o recommendation (forthcoming)




