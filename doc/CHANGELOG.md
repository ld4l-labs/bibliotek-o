# bibliotek-o Change Log

## Version 1.1.0 - 2017-06-30

### The [bibliotek-o ontology](../target-ontologies/bibliotek-o.owl)

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
- rdfs:label value of bibliotek-o coveredIn property

### Other changes
- Added documentation of [bibliotek-o design and reuse principles](principles/)
- Added documentation of [bibliotek-o change and release processes](RELEASES.md)
- Added [BIBFRAME provisionActivityStatement](http://id.loc.gov/bibframe/ontologies/provisionActivityStatement) to bibliotek-o application profile (via [BIBFRAME target ontology file](../target-ontologies/bibframe.2017-03-15.rdf)).

## Version 1.0.1 - 2017-05-05

### The [bibliotek-o ontology](../target-ontologies/bibliotek-o.owl)

#### Fixed
- Some rdfs:label values 

## Version 1.0.0 - 2017-04-22
- Release 1.0.0 pushed to `master` and published at http://bibliotek-o.org/ontology/.
