**LD4L Labs / LD4P Ontology Group**

**December 2016**

LD4L Labs / LD4P Ontology Group Alignment Decision
--------------------------------------------------

-   We will continue to work at the OWL level

-   We will remain cognizant of RDFS interoperability issues and take note of implications where relevant

We will continue building our ontology using the OWL language. OWL
offers a lot of power to enrich the data, e.g. distinguishing object,
datatype, and annotation properties; inverse, inverse functional, and
symmetric properties; disjointness, union, intersection, restrictions,
etc.

To avoid confusion, we emphasize that OWL rests on the RDF/S
vocabularies and that we continue to use those in our ontology. Many of
these terms are part of standard usage in OWL ontologies; for example:
rdf:type, rdf:domain, rdf:range, rdfs:label, rdfs:comment,
rdfs:subClassOf, etc. However, we will not use RDF/S terms that conflict
with OWL DL. For example, we will not use rdf:Property to define
properties, since in OWL DL every property must be defined as either an
owl:ObjectProperty, owl:DatatypeProperty, or owl:AnnotationProperty. We
will define classes as owl:Class in order to access the semantic
properties and capabilities of owl:Class, as well as using OWL-specific
assertions such as owl:SymmetricProperty, owl:FunctionalProperty,
owl:inverseOf, etc. to make use of the richer expressivity provided by
these terms.

An externally-recommended comparison document on the question of RDFS
versus OWL for ontology development:
[*http://www.cambridgesemantics.com/semantic-university/rdfs-vs-owl*](http://www.cambridgesemantics.com/semantic-university/rdfs-vs-owl)

Approach for Moving Forward
===========================

For LD4L Labs / LD4P Ontology Group usage of BIBFRAME, and
bibliotek-o, we will continue to work with OWL. The OWL ‘flavor’ will be
determined by the needs/cases/axioms outlined in the alignment and
modeling process.

When we reuse external ontology fragments in
bibliotek-o, or when we align bibliotek-o resources to external ontology
fragments (or when we recommend either option to BIBFRAME), we will do
so with special consideration for RDF - RDFS - OWL interoperability
questions if-and-when considering RDFS external ontologies.
