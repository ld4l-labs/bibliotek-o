[]{#_30j0zll .anchor}NOTE: the following represents the direction taken
by the LD4L Labs and LD4P Ontology Group in the development of
bibliotek-o and may not be fully formed. This pattern document was used
internally to define a direction and is shared with the intention of
contextualizing a pattern found within the ontology; terms specified
below may not fully align to the ontology as published. Further,
discussion of BIBFRAME 2.0 may be out-of-date.

2016 December

This paper examines the properties that describe content relationships
between work and/or instance entities in BIBFRAME, including derivative,
equivalent, and referential relationships. Several of these properties
have direct counterparts in RDA. In the case of derivative and
equivalence relationships this paper recommends the use of the
unconstrained RDA properties, where RDA provides for a set of more
granular subproperties. However, we recommend
bf:references/bf:referencedBy over rdau:P60848 (“has referential
relationship with”). The latter property is symmetric, and we see clear
use cases (such as tracing a path of intellectual influence) where
symmetry is not desirable.

We will use BF 2.0 properties except for relationships that we can
express with rdau:P60250 (“is derivative”) and rdau:P60191 (“has
equivalent”) (and their subproperties) and proposed properties for
relating events and works.

Accompanying, sequential, and whole/part relationships will be addressed
in other discussion papers and/or future work.

Overview
========

-   Use bf:relatedTo subproperties bf:dataSource, bf:expressionOf,
    > bf:hasExpression, bf:otherEdition, bf:referencedBy, and
    > bf:references.

    -   See [*Serials and Other Multi-Part
        > Works*](https://docs.google.com/document/d/1RfIkxkvmtDMsxGEsesMh7Ofu9ZViIJja4u1wI79UTlY/edit?usp=sharing)
        > paper for separate discussion of bf:relatedTo subproperties
        > bf:hasPart, bf:partOf, bf:precededBy,bf:succeededBy, and their
        > subproperties.

-   Use [*rdau:P60191*](http://www.rdaregistry.info/Elements/u/#P60191)
    > (“has equivalent”) in lieu of bf:hasEquivalent.

-   However, use bf:references/bf:referencedBy rather than rdau:P60848
    > (“has referential resource relationship with”).

-   Describe other relationships with rdau properties
    > ([*rdau:P60250*](http://www.rdaregistry.info/Elements/u/#P60250)
    > (“is derivative”), its inverse, and their subproperties) and
    > recommend reuse to LC.

    -   Use these in lieu of bf:relatedTo subproperties
        > bf:hasDerivative, bf:derivativeOf, bf:hasReproduction,
        > bf:originalVersion, bf:originalVersionOf,
        > bf:otherPhysicalFormat, bf:reproductionOf, bf:translation,
        > bf:translationOf.

    -   Recommend to RDA governance body that the label for rdau:P60250
        > be changed from “is derivative” to “has derivative”.

### Considerations for future work

-   Reuse of dcterms:relation in lieu of bf:relatedTo.

-   Possible alignment to RDA relationship properties for
    > bf:referencedBy and bf:references.

-   Discussion of work-to-event relationships, including bf:relatedTo
    > subproperties bf:eventContentOf and bf:eventContent.

-   Discussion of bf:relatedTo subproperties bf:hasInstance,
    > bf:instanceOf, bf:hasItem, and bf:itemOf.

-   Discussion of bf:relatedTo subproperties bf:accompaniedBy and
    > bf:accompanies (and their respective subproperties).

Approach for Moving Forward
===========================

Involved Properties
-------------------

#### bf:dataSource

**Label**: Data source

**URI**: http://id.loc.gov/ontologies/bibframe/dataSource

**Definition**: Resource that is a data source to which the described
resource is related. It may contain information about other files,
printed sources, or collection procedures.

**SubProperty Of**: http://id.loc.gov/ontologies/bibframe/relatedTo

**Used with**:

-   http://id.loc.gov/ontologies/bibframe/Work

-   http://id.loc.gov/ontologies/bibframe/Instance

#### bf:expressionOf

**Label**: Expression of

**URI**: http://id.loc.gov/ontologies/bibframe/expressionOf

**Definition**: Work that the described Work is an expression of. For
use to connect Works under FRBR/RDA rules.

**SubProperty Of**: http://id.loc.gov/ontologies/bibframe/relatedTo

**Used with**: http://id.loc.gov/ontologies/bibframe/Work

#### bf:otherEdition

**Label**: Other edition

**URI**: http://id.loc.gov/ontologies/bibframe/otherEdition

**Definition**: Resource has other available editions, for example
simultaneously published language editions or reprints.

**SubClass Of**:
[*http://id.loc.gov/ontologies/bibframe/derivativeOf*](http://id.loc.gov/ontologies/bibframe/derivativeOf)

**Used with**:

-   http://id.loc.gov/ontologies/bibframe/Work

-   http://id.loc.gov/ontologies/bibframe/Instance

#### bf:referencedBy

**Label**: Referenced by

**URI**: http://id.loc.gov/ontologies/bibframe/referencedBy

**Definition**: Resource that references the described resource

**SubProperty Of**: http://id.loc.gov/ontologies/bibframe/relatedTo

**Used with**:

-   http://id.loc.gov/ontologies/bibframe/Work

-   http://id.loc.gov/ontologies/bibframe/Instance

-   http://id.loc.gov/ontologies/bibframe/Item

#### bf:references

**Label**: References

**URI**: http://id.loc.gov/ontologies/bibframe/references

**Definition**: Resource that is referenced by the described resource.

**SubProperty Of**: http://id.loc.gov/ontologies/bibframe/relatedTo

**Used with**:

-   http://id.loc.gov/ontologies/bibframe/Work

-   http://id.loc.gov/ontologies/bibframe/Instance

-   http://id.loc.gov/ontologies/bibframe/Item

#### rdau:P60191

**Label**: has equivalent

**URI**: http://rdaregistry.info/Elements/u/P60191

**Definition**: Relates a resource to a resource that carries the same
content as the resource.

**Subproperties**:

-   rdau:P60195 "is also issued as"

-   rdau:P60197 "is mirror site"

-   rdau:P60272 "is reproduced as"

-   rdau:P60297 "is reproduction of"

-   rdau:P40031 "is equivalent (item)"

-   rdau:P30024 "has equivalent (manifestation)"

#### rdau:P60250

**Label**: is derivative

**URI**: http://rdaregistry.info/Elements/u/P60250

**Definition**: Relates a resource to a resource that is a modification
of a source resource.

**Subproperties**:

-   rdau:P60115 "is modified by variation as"

-   rdau:P60120 "is remade as"

-   rdau:P60121 "is set to music as"

-   rdau:P60177 "is abstracted in"

-   rdau:P60178 "is indexed in"

-   rdau:P60180 "is adapted as choreography"

-   rdau:P60189 "is freely translated as"

-   rdau:P60203 "is abstracted as"

-   rdau:P60205 "is summarized as"

-   rdau:P60210 "is adapted as libretto"

-   rdau:P60214 "is imitated as"

-   rdau:P60216 "is expanded as"

-   rdau:P60245 "is revised as"

-   rdau:P60260 "is adapted as"

-   rdau:P60273 "is paraphrased as"

-   rdau:P60274 "is arranged as"

-   rdau:P60275 "is abridged as"

-   rdau:P60279 "is digested as"

-   rdau:P60280 "is translated as"

-   rdae:P20203 "is derivative (expression)"

-   rdau:P60831 "is adapted as oratorio"

-   rdau:P60833 "is inspiration for"

#### rdau:P60305

**Label**: is based on

**URI**: http://rdaregistry.info/Elements/u/P60305

**Definition**: Relates a resource to a resource used as the source for
a derivative resource.

**Subproperties**:

-   rdau:P60114 "is variations based on"

-   rdau:P60223 "is abridgement of"

-   rdau:P60224 "is abstract of"

-   rdau:P60238 "is digest of"

-   rdau:P60241 "is adaptation of"

-   rdau:P60242 "is arrangement of"

-   rdau:P60243 "is free translation of"

-   rdau:P60244 "is translation of"

-   rdau:P60266 "is musical setting of"

-   rdau:P60289 "is summary of"

-   rdau:P60293 "is choreographic adaptation of"

-   rdau:P60294 "is expanded version of"

-   rdau:P60295 "is remake of"

-   rdau:P60296 "is paraphrase of"

-   rdau:P60303 "is revision of"

-   rdau:P60304 "is libretto based on"

-   rdau:P60308 "is abstracts for"

-   rdau:P60309 "is indexing for"

-   rdau:P60311 "is imitation of"

-   rdae:P20204 "is based on (expression)"

-   rdau:P60830 "is oratorio adaptation of"

-   rdau:P60832 "is inspired by"

Side by Side Examples of Pattern 
=================================

  -----------------------------
  **\# BIBFRAME2**
  
  \_:work2 a bf:Work ;
  
  bf:derivativeOf \_:work1 ;
  
  bf:hasInstance \_:inst1 .
  
  \_:inst1 a bf:Instance ;
  
  bf:otherEdition :inst2 .
  
  \_:work1 a bf:Work ;
  
  bf:eventContent \_:event1 .
  -----------------------------

  -----------------------------
  **\# bibliotek-o**
  
  \_:work2 a bf:Work ;
  
  rdau:P60305 \_:work1 ;
  
  bf:hasInstance \_:inst1 .
  
  \_:inst1 a bf:Instance ;
  
  bf:otherEdition :inst2 .
  
  \_:work1 a bf:Work ;
  
  bib:recordingOf \_:event1 .
  -----------------------------

BF2 Approach to Relations
=========================

Involved Properties
-------------------

#### dataSource

**Label**: Data source

**URI**: http://id.loc.gov/ontologies/bibframe/dataSource

**Definition**: Resource that is a data source to which the described
resource is related. It may contain information about other files,
printed sources, or collection procedures.

**SubProperty Of**: http://id.loc.gov/ontologies/bibframe/relatedTo

**Used with**:

-   http://id.loc.gov/ontologies/bibframe/Work

-   http://id.loc.gov/ontologies/bibframe/Instance

#### derivativeOf

**Label**: Is derivative of

**URI**: http://id.loc.gov/ontologies/bibframe/derivativeOf

**Definition**: Source work from which the described resource is
derived.

**SubProperty Of**: http://id.loc.gov/ontologies/bibframe/relatedTo

**Used with**:

-   http://id.loc.gov/ontologies/bibframe/Work

-   http://id.loc.gov/ontologies/bibframe/Instance

**SubProperties**:

-   [*http://id.loc.gov/ontologies/bibframe/translation*](http://id.loc.gov/ontologies/bibframe/translation)

-   [*http://id.loc.gov/ontologies/bibframe/originalVersion*](http://id.loc.gov/ontologies/bibframe/originalVersion)

-   http://id.loc.gov/ontologies/bibframe/otherEdition

#### eventContent

**Label**: Event content

**URI**: http://id.loc.gov/ontologies/bibframe/eventContent

**Definition**: Work whose content is the described event.

**SubProperty Of**: http://id.loc.gov/ontologies/bibframe/relatedTo

**Used with**: http://id.loc.gov/ontologies/bibframe/Event

#### eventContentOf

**Label**: Has event content

**URI**: http://id.loc.gov/ontologies/bibframe/eventContent

**Definition**: Event that is the content of the described work.

**SubProperty Of**: http://id.loc.gov/ontologies/bibframe/relatedTo

**Used with**: http://id.loc.gov/ontologies/bibframe/Work

#### expressionOf

**Label**: Expression of

**URI**: http://id.loc.gov/ontologies/bibframe/expressionOf

**Definition**: Work that the described Work is an expression of. For
use to connect Works under FRBR/RDA rules.

**SubProperty Of**: http://id.loc.gov/ontologies/bibframe/relatedTo

**Used with**: http://id.loc.gov/ontologies/bibframe/Work

#### hasDerivative

**Label**: Has derivative

**URI**: http://id.loc.gov/ontologies/bibframe/hasDerivative

**Definition**: Resource that is a modification of the described work.

**SubProperty Of**: http://id.loc.gov/ontologies/bibframe/relatedTo

**Used with**:

-   http://id.loc.gov/ontologies/bibframe/Work

-   [*http://id.loc.gov/ontologies/bibframe/Instance*](http://id.loc.gov/ontologies/bibframe/Instance)

**SubProperties**:

-   http://id.loc.gov/ontologies/bibframe/translationOf

-   [*http://id.loc.gov/ontologies/bibframe/originalVersionOf*](http://id.loc.gov/ontologies/bibframe/originalVersionOf)

-   http://id.loc.gov/ontologies/bibframe/otherEditionOf

#### hasEquivalent

**Label**: Equivalence

**URI**: http://id.loc.gov/ontologies/bibframe/hasEquivalent

**Definition**: Resource embodies the same content as the described
resource.

**SubProperty Of**: http://id.loc.gov/ontologies/bibframe/relatedTo

**Used with**:

-   http://id.loc.gov/ontologies/bibframe/Work

-   http://id.loc.gov/ontologies/bibframe/Instance

-   http://id.loc.gov/ontologies/bibframe/Item

**SubProperties:**

-   [*http://id.loc.gov/ontologies/bibframe/otherPhysicalFormat*](http://id.loc.gov/ontologies/bibframe/otherPhysicalFormat)

-   [*http://id.loc.gov/ontologies/bibframe/hasReproduction*](http://id.loc.gov/ontologies/bibframe/hasReproduction)

-   http://id.loc.gov/ontologies/bibframe/reproductionOf

#### hasReproduction

**Label**: Reproduced as

**URI**: http://id.loc.gov/ontologies/bibframe/hasReproduction

**Definition**: Resource that reproduces another Resource.

**SubProperty Of**: http://id.loc.gov/ontologies/bibframe/relatedTo

**Used with**:

-   http://id.loc.gov/ontologies/bibframe/Instance

#### otherEdition

**Label**: Other edition

**URI**: http://id.loc.gov/ontologies/bibframe/otherEdition

**Definition**: Resource has other available editions, for example
simultaneously published language editions or reprints.

**SubClass Of**:
[*http://id.loc.gov/ontologies/bibframe/derivativeOf*](http://id.loc.gov/ontologies/bibframe/derivativeOf)

**Used with**:

-   http://id.loc.gov/ontologies/bibframe/Work

-   http://id.loc.gov/ontologies/bibframe/Instance

#### referencedBy

**Label**: Referenced by

**URI**: http://id.loc.gov/ontologies/bibframe/referencedBy

**Definition**: Resource that references the described resource

**SubProperty Of**: http://id.loc.gov/ontologies/bibframe/relatedTo

**Used with**:

-   http://id.loc.gov/ontologies/bibframe/Work

-   http://id.loc.gov/ontologies/bibframe/Instance

-   http://id.loc.gov/ontologies/bibframe/Item

#### references

**Label**: References

**URI**: http://id.loc.gov/ontologies/bibframe/references

**Definition**: Resource that is referenced by the described resource.

**SubProperty Of**: http://id.loc.gov/ontologies/bibframe/relatedTo

**Used with**:

-   http://id.loc.gov/ontologies/bibframe/Work

-   http://id.loc.gov/ontologies/bibframe/Instance

-   http://id.loc.gov/ontologies/bibframe/Item

#### relatedTo

**Label**: Related resource

**URI**: http://id.loc.gov/ontologies/bibframe/relatedTo

**Definition**: Any relationship between Work, Instance, and Item
resources.

**Used with**:

-   rdfs:Resource

**SubProperties**:

-   [*http://id.loc.gov/ontologies/bibframe/accompaniedBy*](http://id.loc.gov/ontologies/bibframe/accompaniedBy)

-   http://id.loc.gov/ontologies/bibframe/accompanies

-   http://id.loc.gov/ontologies/bibframe/dataSource

-   http://id.loc.gov/ontologies/bibframe/derivativeOf

-   http://id.loc.gov/ontologies/bibframe/eventContent

-   [*http://id.loc.gov/ontologies/bibframe/eventContent*](http://id.loc.gov/ontologies/bibframe/eventContent)

-   http://id.loc.gov/ontologies/bibframe/expressionOf

-   http://id.loc.gov/ontologies/bibframe/hasDerivative

-   http://id.loc.gov/ontologies/bibframe/hasEquivalent

-   http://id.loc.gov/ontologies/bibframe/hasReproduction

-   [*http://id.loc.gov/ontologies/bibframe/otherEdition*](http://id.loc.gov/ontologies/bibframe/otherEdition)

-   http://id.loc.gov/ontologies/bibframe/referencedBy

-   http://id.loc.gov/ontologies/bibframe/references


