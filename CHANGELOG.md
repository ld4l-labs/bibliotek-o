# bibliotek-o Change Log

This change log documents changes to the repository per release. Changes to the [bibliotek-o ontology file](target-ontologies/bibliotek-o.owl) are distinguished from other changes to the repository, such as updates to documentation and other [target ontology files](target-ontologies).

## Version 1.1.0 - 2017-07-05

### The bibliotek-o ontology

#### Added 
- Annotation Motivation [providingPurpose](http://bibliotek-o.org/ontology/providingPurpose)
- Annotation Motivation [describingSupplementaryContent](http://bibliotek-o.org/ontology/descriptingSupplementaryContent)
- Ontology metadata

#### Changed
- Removed domain specification of [hasAgent](http://bibliotek-o.org/ontology/hasAgent) property.
- Removed range specification of [isAgentOf](http://bibliotek-o.org/ontology/isAgentOf) property.
- Deprecated bibliotek-o [specifyingSystemRequirements](http://bibliotek-o.org/ontology/specifyingSystemRequirements) Annotation Motivation.
- Modified definition of bibliotek-o [ConservatorActivity](http://bibliotek-o.org/ontology/ConservatorActivity) class.

#### Fixed
- Namespace of AccessibilityFeature and AccessibilityHazard in subclass assertions
- Added missing xml:lang="en" values
- Miscellaneous fixes to local names and rdfs:label, rdfs:comment values

### Other changes
- Added documentation of [bibliotek-o design and reuse principles](doc/principles/)
- Added documentation of [bibliotek-o change and release processes](doc/admin/crm.md)
- Added [BIBFRAME provisionActivityStatement](http://id.loc.gov/bibframe/ontologies/provisionActivityStatement) to bibliotek-o application profile (via [BIBFRAME target ontology file](target-ontologies/bibframe.2017-03-15.rdf)).

## Version 1.0.1 - 2017-05-05

### The bibliotek-o ontology

#### Fixed
- Some rdfs:label values 

## Version 1.0.0 - 2017-04-22
- Release 1.0.0 pushed to `master` and published at http://bibliotek-o.org/ontology/.
