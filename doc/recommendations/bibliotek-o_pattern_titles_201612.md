[]{#_30j0zll .anchor}NOTE: the following represents the direction taken
by the LD4L Labs and LD4P Ontology Group in the development of
bibliotek-o and may not be fully formed. This pattern document was used
internally to define a direction and is shared with the intention of
contextualizing a pattern found within the ontology; terms specified
below may not fully align to the ontology as published. Further,
discussion of BIBFRAME 2.0 may be out-of-date.

2016 December

Introduction
============

This document describes the bibliotek-o title model. It includes
diagrams, sample RDF, rationales, and comparisons with BIBFRAME 2.0 and
LD4L-O v1 where these shed light on the issues. It also includes formal
requests for modifications to specific BIBFRAME 2.0 terms to allow reuse
by bibliotek-o. Finally, for issues that are currently unresolvable or
out of scope, it enumerates open questions and directions for future
research.

The discussion is organized into the following topics:

1.  Resource-to-title relationships

2.  Title class hierarchy

3.  Title sources

4.  Title origins

5.  Title elements

6.  Other title properties

Requests for Modifications to BIBFRAME 2.0
==========================================

Open Requests
-------------

There are no open requests. All requests have been either approved or
denied.

Approved Requests
-----------------

These requests have been approved by LC, though not yet published in the
current BIBFRAME 2.0 spec.

-   Define bf:titleOf as inverse of bf:title.

    -   If request is denied, LD4L-O will define bib:isTitleOf as
        > inverse of bf:title.

-   Eliminate Title subclasses bf:WorkTitle and bf:InstanceTitle.

-   bf:translation is defined as a subproperty of bf:derivativeOf, and
    > bf:translationOf a subproperty of bf:hasDerivative. Should these
    > be turned around? I.e., bf:translation a subproperty of
    > bf:hasDerivative, and bf:translationOf a subproperty of
    > bf:derivativeOf.

    -   This request may or may not be relevant to the Title model,
        > depending on the as-yet-to-be-defined bibliotek-o
        > ParallelTitle model. But it is good to correct it.

Rejected Requests
-----------------

These requests have been rejected by LC. bibliotek-o action is stated.

-   Title class hierarchy

    -   Eliminate the subclass of bf:Title, bf:VariantTitle, making the
        > various Title subclasses direct subclasses of bf:Title.

    -   bibliotek-o will define the following direct bf:Title subclasses
        > in its own namespace:

        -   bib:AbbreviatedTitle

        -   bib:KeyTitle

    -   Provide a definition and examples of the use of
        > bf:CollectiveTitle, so that LD4L can evaluate whether to reuse
        > it (if bf:VariantTitle is removed).

        -   LD4L will not use CollectiveTitle.

    -   Define the following additional bf:Title subclasses:

        -   bf:ConciseTitle

        -   bf:DistinctiveTitle

        -   LD4L-O will define these classes in its own namespace.

    -   bf:ParallelTitle: The Ontology Group has not yet discussed
        > parallel titles. If the group does not have time to develop a
        > recommendation, it will reuse bf:ParallelTitle (if
        > bf:VariantTitle is removed). Otherwise, and if the proposed
        > bibliotek-o model differs from the BIBFRAME 2.0 model, there
        > may be additional requests related to ParallelTitle.

        -   LD4L will define ParallelTitle in its own namespace.

    -   Remove the class bf:CollectiveTitle. If the work is a
        > collection, it has a title. If the work is in a collection, it
        > has its own title, as well as being part of the collection,
        > from which the collective title can be derived.

        -   bibliotek-o will ignore the type bf:CollectiveTitle.

-   Title source

    -   Remove the specified range of bf:source (bf:Source) so that any
        > resource may serve as its object.

        -   bibliotek-o will define bib:hasSource and bib:isSourceOf,
            > domain and range unspecified.

-   Define bf:preferredTitle and inverse bf:preferredTitleOf to indicate
    > primary Title of a resource. The predicates should be
    > subproperties of bf:title and bf:titleOf, respectively.

    -   LD4L-O will define properties bib:isPreferredTitle and
        > bib:isPreferredTitleOf in its own namespace.

-   Title origin

    -   Define object property bf:origin to designate the part of a
        > resource from which the Title was derived (e.g., container,
        > spine).

        -   LD4L-O will define bib:hasOrigin.

    -   Define the following owl:NamedIndividuals in an id.loc.gov
        > namespace to serve as objects of bf:origin. We expect that
        > other origins may be defined as the need arises.

        -   addedTitlePage

        -   binder

        -   caption

        -   container

        -   cover

        -   margin (for RunningTitle)

        -   spine

        -   supplied

        -   Transcribed

            -   LD4L-O will define these named individuals in its
                > namespace.

-   Title elements

    -   Define the following classes to represent parts of a Title:

        -   bf:TitleElement. Subclasses

            -   bf:NonSortTitleElement

            -   bf:MainTitleElement

            -   bf:SubtitleElement

            -   bf:PartNumberElement

            -   bf:PartNameElement

    -   Use dcterms:hasPart and dcterms:isPartOf to relate a Title to
        > its component TitleElements and the reverse.

    -   Use vivo:rank to sort TitleElements of a Title, where this order
        > is known.

    -   If the requests are denied, LD4L-O will:

        -   Mint the TitleElement terms in its own namespace.

        -   Reuse dcterms:hasPart and dcterms:isPartOf to relate Title
            > to TitleElements and the reverse.

        -   Use vivo:rank to order the TitleElements within a Title.

-   Other Title properties

    -   Use dcterms:date rather than defining a new predicate bf:date to
        > express specific time periods associated with a Title, if
        > known.

        -   LD4L-O will reuse bf:date.

    -   Leave expected subject and object of bf:translation and
        > bf:translationOf so that they could also be used to relate
        > Titles to one another.

        -   These are not formal domain and range specifications in
            > BIBFRAME 2.0, but are described as “expected” usage and
            > value in rdfs:comments.

        -   This request may or may not be relevant to the Title model,
            > depending on the as-yet-to-be-defined bibliotek-o
            > ParallelTitle model.

        -   LD4L will use the bf:translation and bf:translationOf terms
            > with no modification. Caveat: May use RDAU properties
            > instead: see [*Relations
            > Recommendation*](https://drive.google.com/open?id=1SU4VqY-T8sh3WHIfkKZaj2SpOzjlgOZE56F1NpGMmaM).

The BIBFRAME 2.0 Title Model
============================

Reference: [*BIBFRAME 2.0 Title
Specification*](https://www.loc.gov/bibframe/docs/pdf/bf2-titles-apr2016.pdf).

BIBFRAME 2.0 Resource-to-Title Relationships
--------------------------------------------

#### bf:title (object property)

**Label**: Title resource

**URI**:
[*http://id.loc.gov/ontologies/bibframe/title*](http://id.loc.gov/ontologies/bibframe/title)

**Definition**: Name given to a resource.

**Comment:** Used with Work, Instance or Item

**Range**: bf:Title

BIBFRAME 2.0 Title Class Hierarchy
----------------------------------

##### Diagram 1. BIBFRAME 2.0 Title Class Hierarchy 

![BF2 Titles Updated.png](media/image01.png){width="6.5in"
height="3.6944444444444446in"}

##### 

#### bf:Title

**Label**: Title entity

**URI**:
[*http://id.loc.gov/ontologies/bibframe/Title*](http://id.loc.gov/ontologies/bibframe/Title)

**Definition**: Title information relating to a resource: mail title,
translated title, or variant form of title.

#### ~~bf:WorkTitle~~

~~**Label**: Work title~~

~~**URI**:
[*http://id.loc.gov/ontologies/bibframe/WorkTitle*](http://id.loc.gov/ontologies/bibframe/WorkTitle)~~

~~**Definition**: Title or form of title chosen to identify the work,
such as a preferred title, preferred title with additions, uniform
title, etc.~~

~~**Subclass of**:
[*http://id.loc.gov/ontologies/bibframe/Title*](http://id.loc.gov/ontologies/bibframe/Title)~~

***Removed***

#### ~~bf:InstanceTitle~~

~~**Label**: Instance title~~

~~**URI**:
[*http://id.loc.gov/ontologies/bibframe/InstanceTitle*](http://id.loc.gov/ontologies/bibframe/InstanceTitle)~~

~~**Definition**: Title chosen as the name of an Instance, sometimes
called "title proper" and often transcribed from the instance.~~

~~**Subclass of**:
[*http://id.loc.gov/ontologies/bibframe/Title*](http://id.loc.gov/ontologies/bibframe/Title)
~~

***Removed***

#### bf:VariantTitle

**Label**: Title variation

**URI**:
[*http://id.loc.gov/ontologies/bibframe/VariantTitle*](http://id.loc.gov/ontologies/bibframe/VariantTitle)

**Definition**: Title associated with the resource that is different
from the Work or Instance title.

**Subclass of**:
[*http://id.loc.gov/ontologies/bibframe/Title*](http://id.loc.gov/ontologies/bibframe/Title)

**Defined subclasses:** bf:AbbreviatedTitle, bf:CollectiveTitle,
bf:KeyTitle, bf:ParallelTitle

**Commentary:** The VariantTitle and its subclasses represent alternate,
non-primary titles.

#### bf:AbbreviatedTitle

**Label**: Abbreviated title

**URI**:
[*http://id.loc.gov/ontologies/bibframe/AbbreviatedTitle*](http://id.loc.gov/ontologies/bibframe/AbbreviatedTitle)

**Definition**: Title as abbreviated for citation, indexing, and/or
identification.

**Subclass of**:
[*http://id.loc.gov/ontologies/bibframe/VariantTitle*](http://id.loc.gov/ontologies/bibframe/VariantTitle)

#### bf:CollectiveTitle

**Label**: Collective title

**URI**:
[*http://id.loc.gov/ontologies/bibframe/CollectiveTitle*](http://id.loc.gov/ontologies/bibframe/CollectiveTitle)

**Definition**: Title for a compilation of resources.

**Subclass of**:
[*http://id.loc.gov/ontologies/bibframe/VariantTitle*](http://id.loc.gov/ontologies/bibframe/VariantTitle)

See [*explanation of BIBFRAME 2.0
CollectiveTitle*](https://docs.google.com/document/d/1qlX9ErJCUHm0r5p-kZpmArVLPLpqqWDNrx-b3equO-I/edit?ts=5852bda8).

#### bf:KeyTitle

**Label**: Key title

**URI**:
[*http://id.loc.gov/ontologies/bibframe/KeyTitle*](http://id.loc.gov/ontologies/bibframe/KeyTitle)

**Definition**: Unique title for a continuing resource that is assigned
by the ISSN International Center in conjunction with an ISSN.

**Subclass of**:
[*http://id.loc.gov/ontologies/bibframe/VariantTitle*](http://id.loc.gov/ontologies/bibframe/VariantTitle)

#### bf:ParallelTitle

**Label**: Parallel title proper

**URI**:
[*http://id.loc.gov/ontologies/bibframe/ParallelTitle*](http://id.loc.gov/ontologies/bibframe/ParallelTitle)

**Definition**: Title in another language and/or script.

**Subclass of**:
[*http://id.loc.gov/ontologies/bibframe/VariantTitle*](http://id.loc.gov/ontologies/bibframe/VariantTitle)

BIBFRAME 2.0 Title Sources
--------------------------

#### bf:source (object property)

**Label**: Source

**URI**:
[*http://id.loc.gov/ontologies/bibframe/source*](http://id.loc.gov/ontologies/bibframe/source)

**Definition**: Resource from which value or label came or was derived,
such as the formal source/scheme from which a classification number is
taken or derived, list from which an agent name is taken or derived,
source within which an identifier is unique.

**Comment**: Used with Unspecified

**Domain:** unspecified

~~**Range**: bf:Source~~ ***Removed***

**Commentary:** May be supplied for a VariantTitle (see [*BIBFRAME 2.0
Title
Specification*](https://www.loc.gov/bibframe/docs/pdf/bf2-titles-apr2016.pdf)).

#### bf:Source

**Label:** Source

**URI:**
[*http://id.loc.gov/ontologies/bibframe/Source*](http://id.loc.gov/ontologies/bibframe/Source)

**Definition:** Resource from which value or label came or was derived.

BIBFRAME 2.0 Title Elements
---------------------------

#### bf:mainTitle (datatype property)

**Label**: Main title

**URI**:
[*http://id.loc.gov/ontologies/bibframe/mainTitle*](http://id.loc.gov/ontologies/bibframe/mainTitle)

**Definition**: Title being addressed. Possible title component.

**Domain**: bf:Title

**Range**: rdfs:Literal

#### bf:subtitle (datatype property)

**Label**: Subtitle

**URI**:
[*http://id.loc.gov/ontologies/bibframe/subtitle*](http://id.loc.gov/ontologies/bibframe/subtitle)

**Definition**: Word, character, or group of words and/or characters
that contains the remainder of the title after the main title. Possible
title component.

**Domain**: bf:Title

**Range**: rdfs:Literal

#### bf:partNumber (datatype property)

**Label**: Part number

**URI**:
[*http://id.loc.gov/ontologies/bibframe/partNumber*](http://id.loc.gov/ontologies/bibframe/partNumber)

**Definition**: Part or section enumeration of a title. Possible title
component.

**Domain**: bf:Title

**Range**: rdfs:Literal

#### bf:partName (datatype property)

**Label**: Part title

**URI**:
[*http://id.loc.gov/ontologies/bibframe/partName*](http://id.loc.gov/ontologies/bibframe/partName)

**Definition**: Part or section name of a title. Possible title
component.

**Domain**: bf:Title

**Range**: rdfs:Literal

Other BIBFRAME 2.0 Title Properties
-----------------------------------

#### bf:date (datatype property)

**Label**: date

**URI**:
[*http://id.loc.gov/ontologies/bibframe/date*](http://id.loc.gov/ontologies/bibframe/date)

**Definition**: Date designation associated with a resource or element
of description, such as date of title variation; year a degree was
awarded; date associated with the publication, printing, distribution,
issue, release or production of a resource. May be date typed.

**Comment:** Used with Unspecified

**Domain**: unspecified

**Range**: rdfs:Literal (may be typed)

#### bf:variantType (datatype property)

**Label**: Variant title type

**URI**:
[*http://id.loc.gov/ontologies/bibframe/variantType*](http://id.loc.gov/ontologies/bibframe/variantType)

**Definition**: Type of title variation, e.g., acronym, cover, spine,
earlier, later, series version.

**Domain**: bf:VariantTitle

**Range**: rdfs:Literal

From [*BIBFRAME 2.0 Title
Specification*](https://www.loc.gov/bibframe/docs/pdf/bf2-titles-apr2016.pdf)**:**
Used to specify type of VariantTitle when no defined subclass exists;
e.g., “spine”.

#### bf:qualifier (datatype property)

**Label**: Qualifier

**URI**:
[*http://id.loc.gov/ontologies/bibframe/qualifier*](http://id.loc.gov/ontologies/bibframe/qualifier)

**Definition**: Qualifier of information, such as an addition to a title
to make it unique, or qualifying information associated with an
identifier.

**Comment:** Used with Unspecified

**Domain:** unspecified

**Range**: rdfs:Literal

**Commentary:** From [*BIBFRAME 2.0 Title
Specification*](https://www.loc.gov/bibframe/docs/pdf/bf2-titles-apr2016.pdf)**:**
May occur within the Title resource.

#### rdfs:label 

**Label**: Label

**URI**:
[*https://www.w3.org/2000/01/rdf-schema\#label*](https://www.w3.org/2000/01/rdf-schema#label)

**Definition**: A human-readable name for the subject.

**Domain**: rdfs:Resource

**Range**: rdfs:Literal

**Commentary:** From [*BIBFRAME 2.0 Title
Specification*](https://www.loc.gov/bibframe/docs/pdf/bf2-titles-apr2016.pdf)**:**
May be used to supply the “title string.” The title string may be a
constructed or simple title; may include parts main title, subtitle,
part name and number, and other information, concatenated into a single
string.

Comments about the BIBFRAME 2.0 Title Model
-------------------------------------------

These comments are irrelevant to bibliotek-o because they involve terms
that it will not adopt. They are pointed out only for the sake of
internal consistency in BIBFRAME 2.0.

-   bf:WorkTitle and bf:InstanceTitle were removed at the request of
    > LD4L/P, who argued that they simply encode the type of the subject
    > of a bf:title assertion, and are thus redundant. While this is
    > true, these classes were also used to differentiate primary Titles
    > from secondary Titles (bf:VariantTitle and its subclasses). With
    > the removal of bf:WorkTitle and bf:InstanceTitle, the primary
    > Title can no longer be designated: in the open world, the absence
    > of an assertion that a Title is a bf:VariantTitle does not allow
    > the inference that the Title is *not* a VariantTitle and that it
    > is therefore a primary Title. LD4L uses the predicate
    > bib:hasPreferredTitle to indicate primary Title.

-   Some examples of bf:variantType (e.g., “spine” and “cover”) can be
    > removed if BIBFRAME 2.0 defines the bf:origin predicate.

bibliotek-o Title Model
=======================

Note: These proposals assume the acceptance of the LD4L Labs / LD4P
Ontology Group’s requests for BIBFRAME 2.0 modifications. Appropriate
adjustments, as indicated with the requests, will be made for those that
are not accepted. The full formal specification is included in an
appendix.

The LD4L-O v1 model is included in an appendix, for reference.

bibliotek-o Resource-to-Title Relationships
-------------------------------------------

##### Diagram 2. bibliotek-o Resource-to-title relationships

##### ![LD4L-O Resource to Title Relationships.png](media/image06.png){width="6.395833333333333in" height="4.552083333333333in"}

#### bf:title (object property)

**Label**: Title resource

**URI**:
[*http://id.loc.gov/ontologies/bibframe/title*](http://id.loc.gov/ontologies/bibframe/title)

**Definition**: Name given to a resource.

**Comment:** Used with Work, Instance or Item

**Domain:** unspecified

**Range**: bf:Title

**Inverse:** bf:titleOf

#### bf:titleOf (object property)

**Label**: title of

**URI**:
[*http://id.loc.gov/ontologies/bibframe/titleOf*](http://id.loc.gov/ontologies/bibframe/titleOf)

**Definition**: This Title is the title of the resource

**Domain**: bf:Title

**Range**: unspecified

**Inverse:** bf:title

**Comment:** Expected value Work, Instance, or Item

#### bf:preferredTitle (object property)

**Label**: preferred title

**URI**:
[*http://id.loc.gov/ontologies/bibframe/preferredTitle*](http://id.loc.gov/ontologies/bibframe/preferredTitle)

**Definition**: Specifies the preferred Title of this resource.

**Domain**: unspecified

**Range**: bf:Title

**Subproperty of**: bf:title

**Inverse:** bf:preferredTitleOf

**Comment:** A resource may have multiple directly linked Titles, among
which this is the preferred Title.

#### bf:preferredTitleOf (object property)

**Label**: preferred title of

**URI**:
[*http://id.loc.gov/ontologies/bibframe/titleOf*](http://id.loc.gov/ontologies/bibframe/titleOf)

**Definition**: This Title is the preferred Title of the resource

**Domain**: bf:Title

**Range**: unspecified

**Inverse:** bf:preferredTitle

**Subproperty of**:
[*http://id.loc.gov/ontologies/bibframe/titleOf*](http://id.loc.gov/ontologies/bibframe/titleOf)

[]{#_tyjcwt .anchor}**Comment:** A resource may have multiple directly
linked Titles, among which this is the preferred Title.

bibliotek-o Title Class Hierarchy
---------------------------------

### bibliotek-o Title Superclass

The superclass of all Title classes is bf:Title:

#### bf:Title

**Label**: Title entity

**URI**:
[*http://id.loc.gov/ontologies/bibframe/Title*](http://id.loc.gov/ontologies/bibframe/Title)

**Definition**: Title information relating to a resource: mail title,
translated title, or variant form of title.

Before considering the details of the Title class hierarchy, we begin
with some general issues related to Title types.

### Primary and Variant Titles 

There is a need to distinguish the primary or preferred Title of a
resource from other Titles.

In the original version of BIBFRAME 2.0, every title was either a
bf:WorkTitle, a bf:InstanceTitle, or a bf:VariantTitle, and the three
are pairwise disjoint (though not explicitly defined as such). All other
Title classes are subclasses of bf:VariantTitle. The bf:WorkTitle and
bf:InstanceTitle are meant to represent the primary title, while the
bf:VariantTitle and its subclasses represent alternate, non-primary
titles.

Since the initial release of BIBFRAME 2.0, the bf:WorkTitle and
bf:InstanceTitle classes have been removed. This was in response to LD4L
Labs / LD4P Ontology Group, who argued that these classes redundantly
embed the type of bibliographic resource related to the Title into the
Title type itself. That is, the fact that a Title is a bf:WorkTitle
simply means that it is linked to a bf:Work resource.

It was not clearly understood at the time that these classes were also
used to designate the primary title, and that they did therefore carry
some new information. With the removal of these classes BIBFRAME 2.0 has
no way to designate a primary Title: the open world assumption does not
allows us to conclude from the fact that an entity is typed only as
bf:Title that it is *not* a bf:VariantTitle. BIBFRAME 2.0 would need to
define an opposing class such as bf:PrimaryTitle or bf:PreferredTitle to
designate this.

The problem with this approach is that VariantTitle entities may be the
primary title of a resource; e.g., the ContainerTitle of a CD. The
distinction between VariantTitle and primary title is therefore not
valid.

In bibliotek-o, the primary title is indicated through use of the
bib:hasPreferredTitle predicate. The various classes of subtitles are
direct subclasses of bf:Title. This allows Titles of any type to be
designated as the primary Title.

The bf:variantType and bf:qualifier properties are not used in
bibliotek-o, for similar reasons. In addition, the LD4L Labs / LD4P
Ontology Group recommends the use of object properties with controlled
vocabularies, either through subclassing or owl:NamedIndividuals, rather
than string values.

### Title Subclasses

LD4L-O v1 relied on a number of Title subclasses to express specific
types of Titles: bib:AbbreviatedTitle, bib:CoverTitle, bib:SpineTitle,
etc. (see [*LD4L-O v1 Title Class Hierarchy*](#_35nkun2)).

It has since been recognized that several of these subclasses are best
expressed as the Title source or origin rather than type. The
bibliotek-o Title class hierarchy thus uses and/or defines a more
limited number of Title subclasses. See the following sections on the
[*bibliotek-o Title Source Model*](#_1ksv4uv) and [*bibliotek-o Title
Origin Model*](#_44sinio).

In the interest of producing a “minimal viable ontology” we will agree
now on a provisional set of subclasses and leave the others for further
consideration as needed by tool development and/or as further use cases
arise.

bf:CollectiveTitle may or may not be adopted, depending on clarification
and examples from LC.

ParallelTitles are postponed for later consideration due to the number
of cases and complications involved. bf:ParallelTitle will be adopted in
the absence of an LD4L-O proposal.

#### bf:AbbreviatedTitle

**Label**: Abbreviated title

**URI**:
[*http://id.loc.gov/ontologies/bibframe/AbbreviatedTitle*](http://id.loc.gov/ontologies/bibframe/AbbreviatedTitle)

**Definition**: Title as abbreviated for citation, indexing, and/or
identification.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Title*](http://id.loc.gov/ontologies/bibframe/Title)

#### bf:CollectiveTitle

**Label**: Collective title

**URI**:
[*http://id.loc.gov/ontologies/bibframe/CollectiveTitle*](http://id.loc.gov/ontologies/bibframe/CollectiveTitle)

**Definition**: Title for a compilation of resources.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Title*](http://id.loc.gov/ontologies/bibframe/Title)

**Comment:** We recommend deleting this type: if the work is a
collection, it has a title. If the work is in a collection, it has its
own title, as well as being part of the collection, from which the
collective title can be derived.

#### bib:ConciseTitle

**Label**: Concise title

**URI**:
[*http://bibliotek-o.org/ontology/ConciseTitle*](http://bib.ld4l.org/ontology/ConciseTitle)

**Comment:** The concise version of a Title.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Title*](http://id.loc.gov/ontologies/bibframe/Title)

**Example**: ‘Modern Writing’ could serve as the concise title for ‘The
Berkley Book of Modern Writing’.

#### bib:DistinctiveTitle

[]{#_3dy6vkm .anchor}**Label**: Distinctive title

**URI**:
[*http://bibliotek-o.org/ontology/DistinctiveTitle*](http://bib.ld4l.org/ontology/DistinctiveTitle)

**Comment:** Special title that appears in addition to the regular title
on individual issues of a work and by which the issue may be known.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Title*](http://id.loc.gov/ontologies/bibframe/Title)

#### bf:KeyTitle

**Label**: Key title

**URI**:
[*http://id.loc.gov/ontologies/bibframe/KeyTitle*](http://id.loc.gov/ontologies/bibframe/KeyTitle)

**Definition**: Unique title for a continuing resource that is assigned
by the ISSN International Center in conjunction with an ISSN.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Title*](http://id.loc.gov/ontologies/bibframe/Title)

#### bf:ParallelTitle

**Label**: Parallel title proper

**URI**:
[*http://id.loc.gov/ontologies/bibframe/ParallelTitle*](http://id.loc.gov/ontologies/bibframe/ParallelTitle)

**Definition**: Title in another language and/or script.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Title*](http://id.loc.gov/ontologies/bibframe/Title)

bibliotek-o Title Source Model
------------------------------

Proposed by LC and adopted by bibliotek-o: Title sources, which are URI
resources, are distinguished from Title origins, which indicate a
non-resource location from which the Title was derived (e.g., cover,
spine). See details on Title origins in bibliotek-o Title Origin Model.

#### bf:source (object property)

**Label**: Source

**URI**:
[*http://id.loc.gov/ontologies/bibframe/source*](http://id.loc.gov/ontologies/bibframe/source)

**Definition**: Resource from which value or label came or was derived,
such as the formal source/scheme from which a classification number is
taken or derived, list from which an agent name is taken or derived,
source within which an identifier is unique.

**Domain:** unspecified

**Range:** unspecified

**Inverse:**
[*http://id.loc.gov/ontologies/bibframe/sourceOf*](http://id.loc.gov/ontologies/bibframe/sourceOf)

#### bf:sourceOf (object property)

**Label**: is source of

**URI**:
[*http://id.loc.gov/ontologies/bibframe/sourceOf*](http://id.loc.gov/ontologies/bibframe/sourceOf)

**Comment:** The subject is the source of the object.

**Domain:** unspecified

**Range:** unspecified

**Inverse:**
[*http://id.loc.gov/ontologies/bibframe/source*](http://id.loc.gov/ontologies/bibframe/source)

Domains and ranges of these predicates are deliberately undefined so
that the can have broad applicability to:

-   Many types of entities that have sources

-   Many types of entities that serve as sources

dcterms:source was considered and rejected:

-   Semantics may be inappropriate. The definition of dcterms:source is
    > “A related resource from which the described resource is derived.”
    > It was originally conceived as the derivation relationship, e.g. a
    > work that was based on another; a digitized resource from an
    > original physical resource. Perhaps it is used more broadly, but
    > this seems like a stretch.

-   It is an rdf:Property rather than an owl:Property, so doesn’t allow
    > assertion of inverse.

RDF examples:

  ------------------------------------------------------------------------------------------------------------------------
  \# Title sources
  
  :title1 a bf:Title , bf:KeyTitle ;
  
  bf:source &lt;<http://www.issn.org/centre/united-states-etats-unis/>&gt; .
  
  :title2 a bf:Title ;
  
  bf:source &lt;[*http://www.zinepublisher.com/screenprintingset*](http://www.zinepublisher.com/screenprintingset)&gt; .
  ------------------------------------------------------------------------------------------------------------------------

Note that KeyTitles are a specific Title type with ISSN as a source.

### Reference Sources

Suggested RDF:

  ----------------------------------------------------------------------------
  \# Reference work Title sources
  
  :title1 a bf:Title ;
  
  rdfs:label “Some title”@en ;
  
  bf:source [*http://some/reference/source*](http://some/reference/source) .
  
  [*http://some/reference/source*](http://some/reference/source) a bf:Work ,
  
  bf:title :title2 .
  
  :title2 a bf:Title ;
  
  rdfs:label “Title of some reference work” .
  ----------------------------------------------------------------------------

bibliotek-o Title Origin Model
------------------------------

Proposed by LC and adopted by bibliotek-o: Title sources, which are URI
resources, are distinguished from Title origins, which indicate a
non-resource location from which the Title was derived (e.g., cover,
spine).

#### bf:origin (object property)

**Label**: Origin of a Title

**URI**:
[*http://id.loc.gov/ontologies/bibframe/origin*](http://id.loc.gov/ontologies/bibframe/origin)

**Definition**: Links a Title to a non-resource location from which
value or label came or was derived, such as the cover or spine of a
book.

**Domain:** bf:Title

**Range:** bf:TitleOrigin

#### bf:TitleOrigin 

**Label**: Title origin

**URI**:
[*http://id.loc.gov/ontologies/bibframe/TitleOrigin*](http://id.loc.gov/ontologies/bibframe/TitleOrigin)

**Definition**: A non-resource location from which value or label came
or was derived, such as the cover or spine of a book.

**Domain:** bf:Title

**Range:** bf:TitleOrigin

### Proposed bibliotek-o Title Origin Individuals

In the interest of producing a “minimal viable ontology” we
provisionally agree on the uncontroversial origin and leave others for
further consideration as called for by tool development and/or further
ontology work.

This list of proposed types is based on the LD4L-O v1 subclasses that
specify origin. Namespace is to be determined - either some namespace
under [*http://id.loc.gov*](http://id.loc.gov), or the LD4L-O namespace.

#### Title Origin Named Individuals

Namespace TBD.

#### addedTitlePage

**Label**: added title page

**Type:** owl:NamedIndividual, bf:TitleOrigin

#### binder

**Label**: binder

**Type:** owl:NamedIndividual, bf:TitleOrigin

#### caption

**Label**: caption

**Type:** owl:NamedIndividual, bf:TitleOrigin

#### container

**Label**: container

**Type:** owl:NamedIndividual, bf:TitleOrigin

#### cover

**Label**: cover

**Type:** owl:NamedIndividual, bf:TitleOrigin

#### margin (for running title)

**Label**: margin

**Type:** owl:NamedIndividual, bf:TitleOrigin

#### spine

**Label**: spine

**Type:** owl:NamedIndividual, bf:TitleOrigin

#### supplied

**Label**: supplied

**Comment:** supplied by the cataloger

**Type:** owl:NamedIndividual, bf:TitleOrigin

#### transcribed

**Label**: transcribed

**Comment:** transcribed from the resource

**Type:** owl:NamedIndividual, bf:TitleOrigin

RDF example:

  ------------------------------------------------------------------------------------------------
  \# Title origins
  
  \# Controlled vocabulary of bf:Source individuals for sources not represented as URI resources
  
  :title1 a bf:Title ;
  
  rdfs:label “Semantic Web for the Working Ontologist”@en ;
  
  bf:origin :cover .
  
  :cover a owl:NamedIndividual , bf:TitleOrigin ;
  
  rdfs:label “Cover” .
  ------------------------------------------------------------------------------------------------

bibliotek-o TitleElement Model
------------------------------

### bibliotek-o TitleElement Class Hierarchy 

#### bib:TitleElement

**Label**: Title element

**URI**:
[*http://bibliotek-o.org/ontology/TitleElement*](http://bib.ld4l.org/ontology/TitleElement)

**Definition:** A resource that is a part of a Title.

#### bib:NonSortElement

**Label**: Non-sort element

**URI**:
[*http://bibliotek-o.org/ontology/NonSortElement*](http://bib.ld4l.org/ontology/NonSortElement)

**Definition:** An initial TitleElement that is not used in sorting the
Title.

**Subclass of:**
[*http://bibliotek-o.org/ontology/TitleElement*](http://bib.ld4l.org/ontology/TitleElement)

**Example:** "The " in "The inland lakes of Wisconsin. The plankton. I.
Its quantity and chemical composition"

#### bib:MainTitleElement

**Label**: Main title element

**URI**:
[*http://www.loc.gov/mads/rdf/v1\#MainTitleElement*](http://www.loc.gov/mads/rdf/v1#MainTitleElement)

**Definition:** The main part of the title, consisting of the Title
label itself with other TitleElement removed.

**Subclass of:**
[*http://bibliotek-o.org/ontology/TitleElement*](http://bib.ld4l.org/ontology/TitleElement)

**Example:** Title "A Tree Grows in Brooklyn" has MainTitleElement "Tree
Grows in Brooklyn".

#### bib:SubtitleElement

**Label:** Subtitle element

**URI**:
[*http://bibliotek-o.org/ontology/SubtitleElement*](http://bib.ld4l.org/ontology/SubtitleElement)

**Definition:** A subtitle

**Subclass of:**
[*http://bibliotek-o.org/ontology/TitleElement*](http://bib.ld4l.org/ontology/TitleElement)

**Example:** Title “Semantic Web for the Working Ontologist: Effective
Modeling in RDFS and OWL” has SubtitleElement “Effective Modeling in
RDFS and OWL.”

#### bib:PartNumberElement

**Label**: Part number element

**URI**:
[*http://bibliotek-o.org/ontology/PartNumberElement*](http://bib.ld4l.org/ontology/PartNumberElement)

**Definition:** The part of a Title indicating number in a serial or
multipart resource.

**Subclass of:**
[*http://bibliotek-o.org/ontology/TitleElement*](http://bib.ld4l.org/ontology/TitleElement)

**Example:** "I" in "The inland lakes of Wisconsin. The plankton. I. Its
quantity and chemical composition."

#### bib:PartNameElement

**Label**: Part name element

**URI**:
[*http://bibliotek-o.org/ontology/PartNameElement*](http://bib.ld4l.org/ontology/PartNameElement)

**Definition:** The part of a Title for a resource that is a part of a
serial or multipart resource.

**Subclass of:**
[*http://bibliotek-o.org/ontology/TitleElement*](http://bib.ld4l.org/ontology/TitleElement)

**Example:** "Its quantity and chemical composition" in "The inland
lakes of Wisconsin. The plankton. I. Its quantity and chemical
composition."

### bibliotek-o TitleElement Relationships

##### Diagram 3. bibliotek-o TitleElement relationships

#### ![LD4L-O Title Elements.png](media/image05.png){width="6.5in" height="4.805555555555555in"}

#### 

#### dcterms:hasPart (property)

**Label**: Has Part

**URI:**
[*http://purl.org/dc/terms/hasPart*](http://purl.org/dc/terms/hasPart)

**Domain**: unspecified

**Range**: unspecified

**Comment:** A related resource that is included either physically or
logically in the described resource.

**Note:** This term is intended to be used with non-literal values as
defined in the DCMI Abstract Model
(http://dublincore.org/documents/abstract-model/). As of December 2007,
the DCMI Usage Board is seeking a way to express this intention with a
formal range declaration.

Note that as an RDFS ontology, the inverse relationship to
dcterms:isPartOf is not formally asserted.

#### dcterms:isPartOf (property)

**Label**: Is Part Of

**URI:**
[*http://purl.org/dc/terms/isPartOf*](http://purl.org/dc/terms/isPartOf)

**Domain**: unspecified

**Range**: unspecified

**Comment:** A related resource in which the described resource is
physically or logically included.

**Note:** This term is intended to be used with non-literal values as
defined in the DCMI Abstract Model
(http://dublincore.org/documents/abstract-model/). As of December 2007,
the DCMI Usage Board is seeking a way to express this intention with a
formal range declaration.

Note that as an RDFS ontology, the inverse relationship to
dcterms:hasPart is not formally asserted.

#### vivo:rank

**Label:** rank

**URI:**
[*http://vivoweb.org/ontology/core\#rank*](http://vivoweb.org/ontology/core#rank)

**Comment:** An integer indicating the position of an entity in a list.

Used here to order TitleElements of a Title with respect to one another.
An alternative would be predicates for precedes and follows.

[]{#2s8eyo1 .anchor}Note: Ordering TitleElements with respect to one
another is never *required.* There are cases where it cannot and/or
should not be done: for example, subtitles from various parts of an
object, such as the cover and spine of a CD case.

### Rationale

Because the bibliotek-o Title Element model is significantly more
complex than the BIBFRAME 2.0 model, it requires justification. The
principle motivations are:

-   []{#17dp8vu .anchor}Structured data is one of the goals of RDF
    > representation, and is preferred over unstructured strings, which
    > must be parsed into component parts. The Title should be
    > deconstructible into its components without parsing the Title
    > label.

<!-- -->

-   Title elements need to be explicitly ordered, both for elements of
    > the same type and those of different types when these do not occur
    > in a prescribed order.

-   Colons and other delimiters are not part of the element strings.

-   Subtitles of a single Title can be in different languages and so
    > need to be assigned different xml:lang values.

-   Some examples can only be modeled with elements of elements.

-   A sort title can be easily identified by dividing the Title into
    > non-sort and main title elements, again without parsing the Title
    > label. Parsing must be applied algorithmically, and while that
    > would be the ideal approach, there may be cases (e.g., of rare
    > languages for which no algorithms have been developed) where the
    > decomposition must be done manually.

#### Titles with Multiple Subtitles

Titles with multiple subtitles are not rare. Examples:

*Das Auge des Betrachters: Beiträge zum Konstruktivismus: Festschrift
für Heinz von Foerster*

[*http://d-nb.info/989197492*](http://d-nb.info/989197492)

*Urlaubsreif? 110 Länder, 6000 Ideen. Zur richtigen Zeit am richtigen
Ort*

[*https://www.amazon.de/dp/3866902603/ref=rdr\_ext\_tmb*](https://www.amazon.de/dp/3866902603/ref=rdr_ext_tmb)

*Cries Unheard: Why Children Kill: The Story of Mary Bell*

[*https://newcatalog.library.cornell.edu/catalog/3673479*](https://newcatalog.library.cornell.edu/catalog/3673479)

Asia-Pacific rebalance 2025 : capabilities, presence, and partnerships :
an independent review of U.S. defense strategy in the Asia-Pacific

[*https://clio.columbia.edu/catalog/11894382*](https://clio.columbia.edu/catalog/11894382)

The BIBFRAME 2.0 model does not allow the specification of order among
multiple subtitles. Consider:

  ---------------------------------------------------------------------------------------------------------------
  \# Multiple subtitles in BIBFRAME 2.0
  
  :work1 a bf:Work ;
  
  bf:title :title1 .
  
  :title1 a bf:Title ;
  
  rdfs:label “Das Auge des Betrachters: Beiträge zum Konstruktivismus: Festschrift für Heinz von Foerster”@de ;
  
  bf:mainTitle “Das Auge des Betrachters”@de ;
  
  bf:subtitle “Beiträge zum Konstruktivismus”@de ,
  
  “Festschrift für Heinz von Foerster”@de .
  ---------------------------------------------------------------------------------------------------------------

There is no way to order the subtitles short of parsing the entire title
string value. This defies one of the goals of RDF representation, to use
structured data rather than flat strings (strings to things).

The bibliotek-o model is as follows:

  ---------------------------------------------------------------------------------------------------------------
  \# Multiple subtitles in bibliotek-o
  
  :work1 a bf:Work ;
  
  bf:title :title1 .
  
  :title1 a bf:Title ;
  
  rdfs:label “Das Auge des Betrachters: Beiträge zum Konstruktivismus: Festschrift für Heinz von Foerster”@de ;
  
  dcterms:hasPart :main , :subtitle1 , :subtitle2 .
  
  :main a bib:MainTitleElement ;
  
  rdfs:label “Das Auge des Betrachters”@de ;
  
  vivo:rank 1 .
  
  :subtitle1 a bib:SubtitleElement ;
  
  rdfs:label “Beiträge zum Konstruktivismus”@de ;
  
  vivo:rank 2 .
  
  :subtitle2 a bib:SubtitleElement ;
  
  rdfs:label “Festschrift für Heinz von Foerster”@de ;
  
  vivo:rank 3 .
  ---------------------------------------------------------------------------------------------------------------

BIBFRAME 2.0 could resort to creating a single subtitle for both
subtitles:

  ---------------------------------------------------------------------------------------------------------------
  \# Multiple subtitles in BIBFRAME 2.0 - take 2
  
  :work1 a bf:Work ;
  
  bf:title :title1 .
  
  :title1 a bf:Title ;
  
  rdfs:label “Das Auge des Betrachters: Beiträge zum Konstruktivismus: Festschrift für Heinz von Foerster”@de ;
  
  bf:mainTitle “Das Auge des Betrachters”@de ;
  
  bf:subtitle “Beiträge zum Konstruktivismus: Festschrift für Heinz von Foerster”@de .
  ---------------------------------------------------------------------------------------------------------------

There are a few problems with this approach:

-   Two elements are combined into one. This again contradicts the goal
    > of structured data. If subtitle elements are not to be separated
    > from one another, why do we parse the full title string into
    > subparts at all?

-   The colons in the string values are merely artifacts of the need to
    > separate the title parts; they are not actually parts of any of
    > the string values. So it is not correct to say that the subtitle
    > of the work is “Beiträge zum Konstruktivismus: Festschrift für
    > Heinz von Foerster”, including the colon.

-   There are cases of multiple subtitles in different languages.
    > Combining the subtitles into a single text value does not allow
    > assigning different xml:lang values to the two strings. See
    > illustrative side-by-side example below.

#### Elements of Title Elements

There are cases where a subtitle itself has components. Example:

  ------------------------------------------------------
  \# Sub-subtitles
  
  Title: Cantica canticorum
  
  Subtitles with sub-subtitles from container:
  
  Lof der liefde: Hooglied in de renaissance
  
  In praise of love: Song of songs in the renaissance
  
  Eloge d’amour: Cantique de cantique à la renaissance
  ------------------------------------------------------

The following model is proposed to express such data. The rationale,
including comparison with models that do *not* meet the requirements,
are discussed in an appendix.

  -------------------------------------------------------------------------
  \# Sub-subtitles
  
  :title1 a bf:Title ;
  
  dcterms:hasPart :subtitle1, :subtitle4, :subtitle7 .
  
  :subtitle1 a bib:SubtitleElement ;
  
  rdfs:label “Lof def liefde: Hooglied in de renaissance”@nl ;
  
  dcterms:hasPart :subtitle2, :subtitle3 .
  
  :subtitle2 a bib:SubtitleElement ;
  
  rdfs:label ‘“Lof def liefde”@nl ;
  
  vivo:rank 1 .
  
  :subtitle3 a bib:SubtitleElement ;
  
  rdfs:label ‘“Hooglied in de renaissance”@nl ;
  
  vivo:rank 2 .
  
  :subtitle4 a bib:SubtitleElement ;
  
  rdfs:label “In praise of love: Song of songs in the renaissance”@en ;
  
  dcterms:hasPart :subtitle5, :subtitle6 .
  
  :subtitle5 a bib:SubtitleElement ;
  
  rdfs:label “In praise of love”@en ;
  
  vivo:rank 1 .
  
  :subtitle6 a bib:SubtitleElement ;
  
  rdfs:label “Song of songs in the renaissance”@en ;
  
  vivo:rank 2 .
  
  :subtitle7 a bib:SubtitleElement ;
  
  rdfs:label “Eloge d'amour : Cantique de cantique a la renaissance”@fr ;
  
  dcterms:hasPart :subtitle8, :subtitle9 .
  
  :subtitle8 a bib:SubtitleElement ;
  
  rdfs:label “Eloge d'amour”@fr ;
  
  vivo:rank 1 .
  
  :subtitle9 a bib:SubtitleElement ;
  
  rdfs:label “Cantique de cantique à la renaissance”@fr ;
  
  vivo:rank 2 .
  -------------------------------------------------------------------------

There are also cases where a SubtitleElement follows a PartNameElement.
This could be modeled in one of two ways:

-   The PartNameElement is broken into a MainTitleElement and a
    > SubtitleElement.

-   The SubtitleElement is ordered after the PartNameElement.

We need concrete examples to determine the correct model for such cases,
though I suspect

the second option is a more faithful representation of the structure of
the Title. Possibly both structures occur in different cases. Since our
model accommodates either implementation, we will not consider this case
further.

#### Non-sort Elements

A sort title can be easily identified by dividing the Title into a
NonSortElement and a MainTitleElement, again without parsing the Title
label. Parsing must be applied algorithmically, and while that is always
the preferred approach, there may be cases (e.g., of rare languages for
which no algorithms have been developed) where the decomposition must be
done manually.

### BIBFRAME 2.0 and bibliotek-o: Side-by-Side Examples of Title Elements 

On title page: “This is my long title string \[vertical bar\] Subtitle
craziness appended”

On the front cover: “Ceci n’est pas une pipe \[spacing\] subtitle A
\[spacing\] sous-titre B”

On the publisher’s list online: “Zine screen printing set : publication
6”

  ------------------------------------------------------------------------------
  **\# BIBFRAME 2**
  
  :work1 a bf:Work ;
  
  bf:title :title1 , :title2 .
  
  :title1 a bf:Title ;
  
  rdfs:label “This is my long title string : Subtitle craziness appended”@en ;
  
  bf:mainTitle “This is my long title string”@en ;
  
  bf:subtitle “Subtitle craziness appended”@en .
  
  :title2 a bf:VariantTitle ;
  
  rdfs:label “Ceci n’est pas une pipe : subtitle A : sous-titre B” ;
  
  bf:mainTitle “Ceci n’est pas une pipe”@fr ;
  
  \#\#
  
  \# Two options
  
  \# subtitle option (i)
  
  bf:subtitle “subtitle A : sous-titre B” ;
  
  \# subtitle option (ii)
  
  bf:subtitle “subtitle A”@en , “subtitle B”@fr ;
  
  \#\#
  
  :instance1 a bf:Instance ;
  
  bf:title :title3 .
  
  :title3 a bf:Title ;
  
  rdfs:label “Zine screen printing set : publication 6”@en ;
  
  bf:mainTitle “Zine screen printing set”@en ;
  
  bf:partNumber “publication 6”@en ;
  ------------------------------------------------------------------------------

  -----------------------------------------------------------------------------------------------------------------------------
  **\# bibliotek-o**
  
  :work1 a bf:Work ;
  
  bib:hasPreferredTitle :title1 ;
  
  bf:title :title2 .
  
  :title1 a bf:Title ;
  
  rdfs:label “This is my long title string : Subtitle craziness appended@en” ;
  
  dcterms:hasPart :main1, :subtitle1 .
  
  :main1 a bib:MainTitleElement ;
  
  rdfs:label “This is my long title string”@en ;
  
  vivo:rank “1”\^\^xsd:integer .
  
  :subtitle1 a bib:SubtitleElement ;
  
  rdfs:label “Subtitle craziness appended”@en ;
  
  vivo:rank “2”\^\^xsd:integer .
  
  :title2 a bf:Title ;
  
  bf:origin :cover ;
  
  rdfs:label “Ceci n’est pas une pipe : subtitle A : sous-titre B” ;
  
  dcterms:hasPart :main2, :subtitle2, :subtitle3 .
  
  :main2 a bib:MainTitleElement ;
  
  rdfs:label “Ceci n’est pas une pipe”@fr ;
  
  vivo:rank “1”\^\^xsd:integer .
  
  :subtitle2 a bib:SubtitleElement ;
  
  rdfs:label “subtitle A”@en ;
  
  vivo:rank “2”\^\^xsd:integer .
  
  :subtitle3 a bib:SubtitleElement ;
  
  rdfs:label “sous-titre B”@en ;
  
  vivo:rank “3”\^\^xsd:integer .
  
  :instance1 a bd:Instance ;
  
  bf:title :title3 .
  
  :title3 a bf:Title ;
  
  rdfs:label “Zine screen printing set : publication 6”@en ;
  
  dcterms:hasPart :main3 , :partnum ;
  
  dcterms:source &lt;[*http://www.zinepublisher.com/screenprintingset*](http://www.zinepublisher.com/screenprintingset)&gt; .
  
  :main3 a bib:MainTitleElement ;
  
  rdfs:label “Zine screen printing set”@en ;
  
  vivo:rank “1”\^xsd:integer .
  
  :partnum a bib:PartNumberElement ;
  
  rdfs:label “publication 6”@en ;
  
  vivo:rank “2”\^\^xsd:integer .
  -----------------------------------------------------------------------------------------------------------------------------

### Use of BIBFRAME 2.0 Title and bibliotek-o TitleElement Classes

LD4L-O v1 used MADS/RDF Title and TitleElement classes. In bibliotek-o
we have elected to define our own TitleElements, and reuse bf:Title, for
the following reasons:

-   Alignment with BIBFRAME 2.0 is more important than alignment with
    > MADS/RDF.

-   The future of the MADS/RDF vocabulary is uncertain. LC states that
    > the ontology is not going away, but madsrdf:Title may go away.

-   Reusing bf:Title allows us to also reuse bf:title, since its range
    > is bf:Title.

-   MADS/RDF uses madsrdf:elementList to order TitleElements. This
    > requires that an order is always imposed, even when it cannot or
    > should not be. See [*above*](#2s8eyo1). In addition, it uses the
    > extremely awkward rdf:List / rdf:first / rdf:Last implementation
    > under the cover.

Other bibliotek-o Title and TitleElement Properties
---------------------------------------------------

#### dcterms:date (property) 

**Label**: Date

**URI**:
[*http://purl.org/dc/terms/date*](http://purl.org/dc/terms/date)

**Definition**: A point or period of time associated with an event in
the lifecycle of the resource.

**Comment:** Date may be used to express temporal information at any
level of granularity. Recommended best practice is to use an encoding
scheme, such as the W3CDTF profile of ISO 8601.

**Range**: rdfs:Literal

Examples of Titles with dates:

-   Art works are frequently known by one title for a certain time and
    > then by another, for example when it was discovered that the
    > sitter depicted in a painting was actually somebody else (real
    > life example). So adding a date would be useful in this
    > earlier/later name situation.

-   Integrating resources such as Websites often change titles. Same
    > Website, different title.

In such cases, the date value of the Title means “Date (range) when this
title applied.”

#### rdfs:label (property) 

**Label**: Label

**URI**:
[*https://www.w3.org/2000/01/rdf-schema\#label*](https://www.w3.org/2000/01/rdf-schema#label)

**Definition**: A human-readable name for the subject.

**Domain**: rdfs:Resource

**Range**: rdfs:Literal

**Commentary:** Use with Title and TitleElement instances to represent
the resource’s string. In the case of the Title, the rdfs:label is the
concatenation of all TitleElements in order. In the case of unparsed
titles in the bibliographic record, the full title string will be stored
in the rdfs:label of the Title resource, with possible future
normalization applied to structure the components.

### Title Language

LD4L-O v1 proposed to use dcterms:language to express a language of the
entire title, independent of the language of its subelements. After
further thought, it seems likely that this was a misleading way to
express one of two things: (1) the language of the MainTitleElement, or
(2) the language of the bibliographic resource itself. In either case,
positing an independent language value for the Title resource is not the
appropriate means of expressing this data, and a mechanism for
expressing both (1) and (2) already exists: an xml:lang value on
MainTitleElement, and language value of the Work itself, respectively.

So bibliotek-o proposes to drop this attribute of Titles and simply use
xml:lang values on Title and TitleElement labels.

Open Questions and Areas for Future Work
========================================

-   Reconsider reuse of MADS/RDF TitleElements instead of the new LD4L-O
    > ones.

-   Enumerate a more complete set of Title subclasses.

-   Enumerate a more complete set of Title origins.

-   Consider replacing TitleOrigin and hasTitleOrigin with the more
    > general Origin and hasOrigin. Are there origins (as opposed to
    > sources) for other kinds of resources? Would we want the same
    > terms to apply to these as well, even though they would require be
    > a different set of named individuals?

-   Parallel Titles. Compile cases of translated and transcribed Titles
    > and propose models.

-   Can there be direct Title-to-Title relationships, in addition to
    > Resource-to-Title relationships? AbbreviatedTitles and
    > ParallelTitles are candidates.

-   Use precedes/follows predicates rather than vivo:rank to order
    > TitleElements? Pros and cons of each. One obvious pro: don’t have
    > to reset all ranks when inserting an element, just reset one
    > precedence relationship and add one. Not likely with
    > TitleElements, but as a general model for other ranked elements it
    > is preferable. See also the [*Ordered List
    > Ontology*](http://ontologydesignpatterns.org/wiki/Ontology:Ordered_List_Ontology),
    > but probably overkill for this usage.

-   Reusability of Title resources. LD4L assumes that Title and
    > TitleElement resources are not reusable, even if two titles have
    > the same lexical string. LC assumes that Title resources are
    > reusable. What are the consequences of the two approaches? For now
    > we leave this to implementation, but non-reusability could be
    > encoded in the ontology by typing the bf:isTitleOf predicate as a
    > owl:FunctionalProperty.

-   Consider enriching the ontology with appropriate cardinality and
    > disjointness axioms. Weigh gains against additional complexity.

Appendices
==========

Appendix A: Full bibliotek-o Title Model Specification
------------------------------------------------------

This is a reference list of all terms included in the bibliotek-o Title
model.

### bibliotek-o Resource-to-Title Relationships

#### bf:title (object property)

**Label**: Title resource

**URI**:
[*http://id.loc.gov/ontologies/bibframe/title*](http://id.loc.gov/ontologies/bibframe/title)

**Definition**: Name given to a resource.

**Comment:** Used with Work, Instance or Item

**Domain:** unspecified

**Range**: bf:Title

**Inverse:** bf:titleOf

#### bf:titleOf (object property)

**Label**: title of

**URI**:
[*http://id.loc.gov/ontologies/bibframe/titleOf*](http://id.loc.gov/ontologies/bibframe/titleOf)

**Definition**: This Title is the title of the resource

**Domain**: bf:Title

**Range**: unspecified

**Inverse:** bf:title

**Comment:** Expected value Work, Instance, or Item

#### bf:preferredTitle (object property)

**Label**: preferred title

**URI**:
[*http://id.loc.gov/ontologies/bibframe/preferredTitle*](http://id.loc.gov/ontologies/bibframe/preferredTitle)

**Definition**: Specifies the preferred Title of this resource.

**Domain**: unspecified

**Range**: bf:Title

**Subproperty of**: bf:title

**Inverse:** bf:preferredTitleOf

**Comment:** A resource may have multiple directly linked Titles, among
which this is the preferred Title.

#### bf:preferredTitleOf (object property)

**Label**: preferred title of

**URI**:
[*http://id.loc.gov/ontologies/bibframe/titleOf*](http://id.loc.gov/ontologies/bibframe/titleOf)

**Definition**: This Title is the preferred Title of the resource

**Domain**: bf:Title

**Range**: unspecified

**Inverse:** bf:preferredTitle

**Subproperty of**:
[*http://id.loc.gov/ontologies/bibframe/titleOf*](http://id.loc.gov/ontologies/bibframe/titleOf)

**Comment:** A resource may have multiple directly linked Titles, among
which this is the preferred Title.

### bibliotek-o Title Class Hierarchy

#### bf:Title

**Label**: Title entity

**URI**:
[*http://id.loc.gov/ontologies/bibframe/Title*](http://id.loc.gov/ontologies/bibframe/Title)

**Definition**: Title information relating to a resource: mail title,
translated title, or variant form of title.

#### bf:AbbreviatedTitle

**Label**: Abbreviated title

**URI**:
[*http://id.loc.gov/ontologies/bibframe/AbbreviatedTitle*](http://id.loc.gov/ontologies/bibframe/AbbreviatedTitle)

**Definition**: Title as abbreviated for citation, indexing, and/or
identification.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Title*](http://id.loc.gov/ontologies/bibframe/Title)

#### bf:CollectiveTitle

**Label**: Collective title

**URI**:
[*http://id.loc.gov/ontologies/bibframe/CollectiveTitle*](http://id.loc.gov/ontologies/bibframe/CollectiveTitle)

**Definition**: Title for a compilation of resources.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Title*](http://id.loc.gov/ontologies/bibframe/Title)

#### bib:ConciseTitle

**Label**: Concise title

**URI**:
[*http://bibliotek-o.org/ontology/ConciseTitle*](http://bib.ld4l.org/ontology/ConciseTitle)

**Definition:** The concise version of a Title.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Title*](http://id.loc.gov/ontologies/bibframe/Title)

**Example**: ‘Modern Writing’ could serve as the concise title for ‘The
Berkley Book of Modern Writing’.

#### bib:DistinctiveTitle

**Label**: Distinctive title

**URI**:
[*http://bibliotek-o.org/ontology/DistinctiveTitle*](http://bib.ld4l.org/ontology/DistinctiveTitle)

**Definition:** Special title that appears in addition to the regular
title on individual issues of a work and by which the issue may be
known.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Title*](http://id.loc.gov/ontologies/bibframe/Title)

#### bf:KeyTitle

**Label**: Key title

**URI**:
[*http://id.loc.gov/ontologies/bibframe/KeyTitle*](http://id.loc.gov/ontologies/bibframe/KeyTitle)

**Definition**: Unique title for a continuing resource that is assigned
by the ISSN International Center in conjunction with an ISSN.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Title*](http://id.loc.gov/ontologies/bibframe/Title)

#### bf:ParallelTitle

**Label**: Parallel title proper

**URI**:
[*http://id.loc.gov/ontologies/bibframe/ParallelTitle*](http://id.loc.gov/ontologies/bibframe/ParallelTitle)

**Definition**: Title in another language and/or script.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Title*](http://id.loc.gov/ontologies/bibframe/Title)

### bibliotek-o Title Source

#### bf:source (object property)

**Label**: Source

**URI**:
[*http://id.loc.gov/ontologies/bibframe/source*](http://id.loc.gov/ontologies/bibframe/source)

**Definition**: Resource from which value or label came or was derived,
such as the formal source/scheme from which a classification number is
taken or derived, list from which an agent name is taken or derived,
source within which an identifier is unique.

**Domain:** unspecified

**Range:** unspecified

**Inverse:**
[*http://id.loc.gov/ontologies/bibframe/sourceOf*](http://id.loc.gov/ontologies/bibframe/sourceOf)

#### bf:sourceOf (object property)

**Label**: is source of

**URI**:
[*http://id.loc.gov/ontologies/bibframe/sourceOf*](http://id.loc.gov/ontologies/bibframe/sourceOf)

**Definition:** This resource is the source of the object.

**Domain:** unspecified

**Range:** unspecified

**Inverse:**
[*http://id.loc.gov/ontologies/bibframe/source*](http://id.loc.gov/ontologies/bibframe/source)

### bibliotek-o Title Origin

#### bf:origin (object property)

**Label**: Origin of a Title

**URI**:
[*http://id.loc.gov/ontologies/bibframe/origin*](http://id.loc.gov/ontologies/bibframe/origin)

**Definition**: Links a Title to a non-resource location from which
value or label came or was derived, such as the cover or spine of a
book.

**Domain:** bf:Title

**Range:** bf:TitleOrigin

#### bf:TitleOrigin 

**Label**: Title origin

**URI**:
[*http://id.loc.gov/ontologies/bibframe/TitleOrigin*](http://id.loc.gov/ontologies/bibframe/TitleOrigin)

**Definition**: A non-resource location from which value or label came
or was derived, such as the cover or spine of a book.

**Domain:** bf:Title

**Range:** bf:TitleOrigin

#### Named Individuals:

#### addedTitlePage

**Label**: added title page

**Type:** owl:NamedIndividual, bf:TitleOrigin

#### binder

**Label**: binder

**Type:** owl:NamedIndividual, bf:TitleOrigin

#### caption

**Label**: caption

**Type:** owl:NamedIndividual, bf:TitleOrigin

#### container

**Label**: container

**Type:** owl:NamedIndividual, bf:TitleOrigin

#### cover

**Label**: cover

**Type:** owl:NamedIndividual, bf:TitleOrigin

#### margin

**Label**: margin

**Type:** owl:NamedIndividual, bf:TitleOrigin

**Comment:** For running title

#### spine

**Label**: spine

**Type:** owl:NamedIndividual, bf:TitleOrigin

#### supplied

**Label**: supplied

**Comment:** supplied by the cataloger

**Type:** owl:NamedIndividual, bf:TitleOrigin

#### transcribed

**Label**: transcribed

**Comment:** transcribed from the resource

[]{#_3rdcrjn .anchor}**Type:** owl:NamedIndividual, bf:TitleOrigin

### bibliotek-o Title Elements

#### bib:TitleElement

**Label**: Title element

**URI**:
[*http://bibliotek-o.org/ontology/TitleElement*](http://bib.ld4l.org/ontology/TitleElement)

**Definition:** A resource that is a part of a Title.

#### bib:NonSortElement

**Label**: Non-sort element

**URI**:
[*http://bibliotek-o.org/ontology/NonSortElement*](http://bib.ld4l.org/ontology/NonSortElement)

**Definition:** An initial TitleElement that is not used in sorting the
Title.

**Subclass of:**
[*http://bibliotek-o.org/ontology/TitleElement*](http://bib.ld4l.org/ontology/TitleElement)

**Example:** "The " in "The inland lakes of Wisconsin. The plankton. I.
Its quantity and chemical composition"

#### bib:MainTitleElement

**Label**: Main title element

**URI**:
[*http://www.loc.gov/mads/rdf/v1\#MainTitleElement*](http://www.loc.gov/mads/rdf/v1#MainTitleElement)

**Definition:** The main part of the title, consisting of the Title
label itself with other TitleElement removed.

**Subclass of:**
[*http://bibliotek-o.org/ontology/TitleElement*](http://bib.ld4l.org/ontology/TitleElement)

**Example:** Title "A Tree Grows in Brooklyn" has MainTitleElement "Tree
Grows in Brooklyn".

#### bib:SubtitleElement

**Label:** Subtitle element

**URI**:
[*http://bibliotek-o.org/ontology/SubtitleElement*](http://bib.ld4l.org/ontology/SubtitleElement)

**Definition:** A subtitle

**Subclass of:**
[*http://bibliotek-o.org/ontology/TitleElement*](http://bib.ld4l.org/ontology/TitleElement)

**Example:** Title “Semantic Web for the Working Ontologist: Effective
Modeling in RDFS and OWL” has SubtitleElement “Effective Modeling in
RDFS and OWL.”

#### bib:PartNumberElement

**Label**: Part number element

**URI**:
[*http://bibliotek-o.org/ontology/PartNumberElement*](http://bib.ld4l.org/ontology/PartNumberElement)

**Definition:** The part of a Title indicating number in a serial or
multipart resource.

**Subclass of:**
[*http://bibliotek-o.org/ontology/TitleElement*](http://bib.ld4l.org/ontology/TitleElement)

**Example:** "I" in "The inland lakes of Wisconsin. The plankton. I. Its
quantity and chemical composition."

#### bib:PartNameElement

**Label**: Part name element

**URI**:
[*http://bibliotek-o.org/ontology/PartNameElement*](http://bib.ld4l.org/ontology/PartNameElement)

**Definition:** The part of a Title for a resource that is a part of a
serial or multipart resource.

**Subclass of:**
[*http://bibliotek-o.org/ontology/TitleElement*](http://bib.ld4l.org/ontology/TitleElement)

**Example:** "Its quantity and chemical composition" in "The inland
lakes of Wisconsin. The plankton. I. Its quantity and chemical
composition."

#### dcterms:hasPart (property)

**Label**: Has Part

**URI:**
[*http://purl.org/dc/terms/hasPart*](http://purl.org/dc/terms/hasPart)

**Domain**: unspecified

**Range**: unspecified

**Comment:** A related resource that is included either physically or
logically in the described resource.

**Note:** This term is intended to be used with non-literal values as
defined in the DCMI Abstract Model
(http://dublincore.org/documents/abstract-model/). As of December 2007,
the DCMI Usage Board is seeking a way to express this intention with a
formal range declaration.

#### dcterms:isPartOf (property)

**Label**: Is Part Of

**URI:**
[*http://purl.org/dc/terms/isPartOf*](http://purl.org/dc/terms/isPartOf)

**Domain**: unspecified

**Range**: unspecified

**Comment:** A related resource in which the described resource is
physically or logically included.

**Note:** This term is intended to be used with non-literal values as
defined in the DCMI Abstract Model
(http://dublincore.org/documents/abstract-model/). As of December 2007,
the DCMI Usage Board is seeking a way to express this intention with a
formal range declaration.

#### vivo:rank

**Label:** rank

**URI:**
[*http://vivoweb.org/ontology/core\#rank*](http://vivoweb.org/ontology/core#rank)

**Comment:** An integer indicating the position of an entity in a list.

### bibliotek-o Other Title and TitleElement Properties

#### dcterms:date (property) 

**Label**: Date

**URI**:
[*http://purl.org/dc/terms/date*](http://purl.org/dc/terms/date)

**Definition**: A point or period of time associated with an event in
the lifecycle of the resource.

**Comment:** Date may be used to express temporal information at any
level of granularity. Recommended best practice is to use an encoding
scheme, such as the W3CDTF profile of ISO 8601.

**Range**: rdfs:Literal

#### rdfs:label (property) 

**Label**: Label

**URI**:
[*https://www.w3.org/2000/01/rdf-schema\#label*](https://www.w3.org/2000/01/rdf-schema#label)

**Definition**: A human-readable name for the subject.

**Domain**: rdfs:Resource

**Range**: rdfs:Literal

**Commentary:** Use with Title and TitleElement instances to represent
the resource’s string. In the case of the Title, the rdfs:label is the
concatenation of all TitleElements in order. In the case of unparsed
titles in the bibliographic record, the full title string will be stored
in the rdfs:label of the Title resource, with possible future
normalization applied to structure the components.

Appendix B: Full LD4L-O v1 Title Model Specification
----------------------------------------------------

### LD4L-O v1 Resource-to-Title Relationships

#### ld4l:hasTitle (object property)

**Label**: Title resource

**URI**:
[*http://bib.ld4l.org/ontology/hasTitle*](http://bib.ld4l.org/ontology/hasTitle)

**Comment**: Word, character, or group of words and/or characters that
is a name given to this resource.

**Scope note:** A Work, Instance, or Item can have a Title.

**Domain:** bib:Work U bib:Instance U bib:Item

**Range**: madsrdf:Title

**Inverse:** bib:isTitleOf

#### ld4l:isTitleOf (object property)

**Label**: is title of

**URI**:
[*http://bib.ld4l.org/ontology/isTitleOf*](http://bib.ld4l.org/ontology/isTitleOf)

**Comment**: Word, character, or group of words and/or characters that
is a name given to this resource.

**Domain**: madsrdf:Title

**Range**: bib:Work U bib:Instance U bib:Item

**Inverse:** bib:hasTitle

#### ld4l:hasPreferredTitle (object property)

**Label**: has preferred title

**URI**:
[*http://bib.ld4l.org/ontology/hasPreferredTitle*](http://bib.ld4l.org/ontology/hasPreferredTitle)

**Comment**: The preferred title of this resource.

**Scope note:** A resource (Work or Instance) may have multiple directly
linked Titles, among which this is the preferred Title.

**Domain:** bib:Work U bib:Instance

**Range**: madsrdf:Title

**Inverse:** bib:isPreferredTitleOf

#### ld4l:isPreferredTitleOf (object property)

**Label**: is preferred title of

**URI**:
[*http://bib.ld4l.org/ontology/hasPreferredTitle*](http://bib.ld4l.org/ontology/hasPreferredTitle)

**Comment**: The preferred title of this resource.

**Scope note:** A resource (Work or Instance) may have multiple directly
linked Titles, among which this is the preferred Title.

**Domain:** bib:Work U bib:Instance

**Range**: madsrdf:Title

**Inverse:** bib:hasPreferredTitle

### LD4L-O v1 Title Class Hierarchy

#### LD4L-O v1 Title Class Hierarchy

##### Diagram 4. LD4L-O v1 title class hierarchy

### ![](media/image07.png){width="6.5in" height="3.611111111111111in"}

#### madsrdf:Title 

**Label:** Title Type

**URI:** http://www.loc.gov/mads/rdf/v1\#Title

**Definition:** Describes a resource whose label represents a title.

**Subclass of:** http://www.loc.gov/mads/rdf/v1\#SimpleType

##### ld4l:AbbreviatedTitle

**Label**: Abbreviated title

**URI**:
[*http://bib.ld4l.org/ontology/AbbreviatedTitle*](http://bib.ld4l.org/ontology/AbbreviatedTitle)

**Comment:** Title as abbreviated for indexing or identification.

**Subclass of:**
[*http://www.loc.gov/mads/rdf/v1\#Title*](http://www.loc.gov/mads/rdf/v1#Title)

##### ld4l:BinderTitle

**Label**: Binder title

**URI**:
[*http://bib.ld4l.org/ontology/BinderTitle*](http://bib.ld4l.org/ontology/BinderTitle)

**Comment:** Title printed on an item’s cover after rebinding.

**Subclass of:**
[*http://www.loc.gov/mads/rdf/v1\#Title*](http://www.loc.gov/mads/rdf/v1#Title)

##### ld4l:CaptionTitle

**Label**: Caption title

**URI**:
[*http://bib.ld4l.org/ontology/CaptionTitle*](http://bib.ld4l.org/ontology/CaptionTitle)

**Comment:** Caption title, printed at the head of the first page of
text.

**Subclass of:**
[*http://www.loc.gov/mads/rdf/v1\#Title*](http://www.loc.gov/mads/rdf/v1#Title)

##### ld4l:ConciseTitle

**Label**: Concise title

**URI**:
[*http://bib.ld4l.org/ontology/ConciseTitle*](http://bib.ld4l.org/ontology/ConciseTitle)

**Comment:** The concise version of a Title.

**Subclass of:**
[*http://www.loc.gov/mads/rdf/v1\#Title*](http://www.loc.gov/mads/rdf/v1#Title)

**Example**: ‘Modern Writing’ could serve as the concise title for ‘The
Berkley Book of Modern Writing’.

##### ld4l:ContainerTitle

**Label**: Container title

**URI**:
[*http://bib.ld4l.org/ontology/ContainerTitle*](http://bib.ld4l.org/ontology/ContainerTitle)

**Comment:** Title on a case or container, such as a CD case.

**Subclass of:**
[*http://www.loc.gov/mads/rdf/v1\#Title*](http://www.loc.gov/mads/rdf/v1#Title)

##### ld4l:CoverTitle

**Label**: Cover title\
**URI**:
[*http://bib.ld4l.org/ontology/CoverTitle*](http://bib.ld4l.org/ontology/CoverTitle)

**Comment:** Cover title that is printed on the original cover of a
publication or lettered or stamped on the publisher’s binding.

**Subclass of:**
[*http://www.loc.gov/mads/rdf/v1\#Title*](http://www.loc.gov/mads/rdf/v1#Title)

##### ld4l:DistinctiveTitle

**Label**: Distinctive title

**URI**:
[*http://bib.ld4l.org/ontology/DistinctiveTitle*](http://bib.ld4l.org/ontology/DistinctiveTitle)

**Comment:** Special title that appears in addition to the regular title
on individual issues of a work and by which the issue may be known.

**Subclass of:**
[*http://www.loc.gov/mads/rdf/v1\#Title*](http://www.loc.gov/mads/rdf/v1#Title)

##### ld4l:KeyTitle

**Label**: Key title

**URI**:
[*http://bib.ld4l.org/ontology/KeyTitle*](http://bib.ld4l.org/ontology/KeyTitle)

**Comment:** Unique title for a continuing resource that is assigned by
the ISSN International Center in conjunction with an ISSN.

**Subclass of:**
[*http://www.loc.gov/mads/rdf/v1\#Title*](http://www.loc.gov/mads/rdf/v1#Title)

##### ld4l:RunningTitle

**Label**: Running title

**URI**:
[*http://bib.ld4l.org/ontology/RunningTitle*](http://bib.ld4l.org/ontology/RunningTitle)

**Comment:** Running title, printed on the top or bottom margin of each
page of a publication.

**Subclass of:**
[*http://www.loc.gov/mads/rdf/v1\#Title*](http://www.loc.gov/mads/rdf/v1#Title)

##### ld4l:SpineTitle

**Label**: Spine title

**URI**:
[*http://bib.ld4l.org/ontology/SpineTitle*](http://bib.ld4l.org/ontology/SpineTitle)

**Comment:** Title taken from the spine of a resource.

**Subclass of:**
[*http://www.loc.gov/mads/rdf/v1\#Title*](http://www.loc.gov/mads/rdf/v1#Title)

##### ld4l:TranslatedTitle

**Label**: Translated title

**URI**:
[*http://bib.ld4l.org/ontology/TranslatedTitle*](http://bib.ld4l.org/ontology/TranslatedTitle)

**Comment:** A title translated from another title.

**Subclass of:**
[*http://www.loc.gov/mads/rdf/v1\#Title*](http://www.loc.gov/mads/rdf/v1#Title)

**Example**: The film title “Bella Martha” is translated into English as
“Mostly Martha”.

**Scope note**: The TranslatedTitle should be distinguished from two
other cases. First, if a Work is translated into another language, the
translated Work has a Title. This Title is linked directly to the
translated Work rather than to a Title; that is, it is the Title of a
translation, rather than the translation of a Title. Second, a Work may
have multiple titles in different languages, though none of the titles
are the source of the others; examples might be a musical composition or
a bilingual book. For example, an Arabic language textbook for English
learners has the Arabic title”عربيّة الناس”, literally “Arabic of the
People,” and the English title “Living Arabic”; neither is a translation
of the other. These Titles are both linked directly to the Work, and the
language of each Title is denoted through its dcterms:language value.

##### ld4l:TransliteratedTitle

**Label**: Transliterated title

**URI**:
[*http://bib.ld4l.org/ontology/TransliteratedTitle*](http://bib.ld4l.org/ontology/TransliteratedTitle)

**Comment:** A title transliterated from another title.

**Subclass of:**
[*http://www.loc.gov/mads/rdf/v1\#Title*](http://www.loc.gov/mads/rdf/v1#Title)

**Example**: The Arabic title “عربيّة الناس” is transliterated into
Roman orthography as “‘Arabiyyat al-Naas”.

### LD4L-O v1 Title Source

#### ld4l:hasSourceStatus

**Label:** has source status**\
URI:**
[*http://bib.ld4l.org/ontology/hasSourceStatus*](http://bib.ld4l.org/ontology/hasSourceStatus)

**Comment:** The source status (either supplied or transcribed) of this
resource.

**Scope note:** Applies to Titles, but could apply to other resources as
well.

**Range:** bib:SourceStatus

**Inverse:**
[*http://bib.ld4l.org/ontology/isSourceStatusOf*](http://bib.ld4l.org/ontology/isSourceStatusOf)

#### ld4l:isSourceStatusOf

**Label:** is source status of**\
URI:**
[*http://bib.ld4l.org/ontology/isSourceStatusOf*](http://bib.ld4l.org/ontology/isSourceStatusOf)

**Comment:** This source status (either supplied or transcribed)
pertains to the resource.

**Scope note:** Applies to Titles, but could apply to other resources as
well.

**Domain:** bib:SourceStatus

**Inverse:**
[*http://bib.ld4l.org/ontology/hasSourceStatus*](http://bib.ld4l.org/ontology/hasSourceStatus)

#### ld4l:SourceStatus

**Label:** Source status

**URI:** http://bib.ld4l.org/ontology/SourceStatus

**Comment:** The source of information, such as supplied by the
cataloger or transcribed from the item. It is related to the resource it
describes via the property bib:hasSourceStatus and its inverse.

**Subclass of:**
[*http://www.w3.org/2004/02/skos/core\#Concept*](http://www.w3.org/2004/02/skos/core#Concept)

#### supplied

**Label:** supplied

**URI:**
[*http://bib.ld4l.org/ontology/supplied*](http://bib.ld4l.org/ontology/supplied)

**Comment:** Information has been supplied by the cataloger.

**Types:** ld4l:SourceStatus, owl:NamedIndividual

#### transcribed

**Label:** transcribed

**URI:**
[*http://bib.ld4l.org/ontology/transcribed*](http://bib.ld4l.org/ontology/transcribed)

**Comment:** Information has been transcribed from the item.

**Types:** ld4l:SourceStatus, owl:NamedIndividual

### LD4L-O v1 Title Elements

#### madsrdf:TitleElement

**Label**: Title Element

**URI**:
[*http://www.loc.gov/mads/rdf/v1\#TitleElement*](http://www.loc.gov/mads/rdf/v1#TitleElement)

**Subclass of:**
[*http://www.loc.gov/mads/rdf/v1\#Element*](http://www.loc.gov/mads/rdf/v1#Element)

#### madsrdf:NonSortElement

**Label**: Non-sort element

**URI**:
[*http://www.loc.gov/mads/rdf/v1\#NonSortElement*](http://www.loc.gov/mads/rdf/v1#NonSortElement)

**Subclass of:**
[*http://www.loc.gov/mads/rdf/v1\#TitleElement*](http://www.loc.gov/mads/rdf/v1#TitleElement)

**Example:** "The " in "The inland lakes of Wisconsin. The plankton. I.
Its quantity and chemical composition"

**Commentary:** The BIBFRAME 2.0 model does not have a way to represent
this other than parsing the rdfs:label value of the Title resource. This
approach defies the principle and goal of producing structured data.

#### madsrdf:MainTitleElement

**Label**: Main Title Element

**URI**:
[*http://www.loc.gov/mads/rdf/v1\#MainTitleElement*](http://www.loc.gov/mads/rdf/v1#MainTitleElement)

**Subclass of:**
[*http://www.loc.gov/mads/rdf/v1\#TitleElement*](http://www.loc.gov/mads/rdf/v1#TitleElement)

**Example:** Title "A Tree Grows in Brooklyn" has NonSortElement "A "
and MainTitleElement "Tree Grows in Brooklyn".

#### madsrdf:SubTitleElement

**Label:** Subtitle Element

**URI**:
[*http://www.loc.gov/mads/rdf/v1\#SubTitleElement*](http://www.loc.gov/mads/rdf/v1#SubTitleElement)

**Subclass of:**
[*http://www.loc.gov/mads/rdf/v1\#TitleElement*](http://www.loc.gov/mads/rdf/v1#TitleElement)

**Example:**

#### madsrdf:PartNumberElement

**Label**: Part Number Element

**URI**:
[*http://www.loc.gov/mads/rdf/v1\#PartNumberElement*](http://www.loc.gov/mads/rdf/v1#PartNumberElement)

**Subclass of:**
[*http://www.loc.gov/mads/rdf/v1\#TitleElement*](http://www.loc.gov/mads/rdf/v1#TitleElement)

**Example:** "I" in "The inland lakes of Wisconsin. The plankton. I. Its
quantity and chemical composition"

#### madsrdf:PartNameElement

**Label**: Part Name Element

**URI**:
[*http://www.loc.gov/mads/rdf/v1\#PartNameElement*](http://www.loc.gov/mads/rdf/v1#PartNameElement)

**Subclass of:**
[*http://www.loc.gov/mads/rdf/v1\#TitleElement*](http://www.loc.gov/mads/rdf/v1#TitleElement)

**Example:** "Its quantity and chemical composition" in "The inland
lakes of Wisconsin. The plankton. I. Its quantity and chemical
composition"

#### dcterms:hasPart (property)

**Label**: Has Part

**URI:**
[*http://purl.org/dc/terms/hasPart*](http://purl.org/dc/terms/hasPart)

**Comment:** A related resource that is included either physically or
logically in the described resource.

**Note:** This term is intended to be used with non-literal values as
defined in the DCMI Abstract Model
(http://dublincore.org/documents/abstract-model/). As of December 2007,
the DCMI Usage Board is seeking a way to express this intention with a
formal range declaration.

**Domain**: unspecified

**Range**: unspecified

**Commentary:** As an RDFS ontology, the inverse relationship to
dcterms:isPartOf is not formally asserted.

#### dcterms:isPartOf (property)

**Label**: Is Part Of

**URI:**
[*http://purl.org/dc/terms/isPartOf*](http://purl.org/dc/terms/isPartOf)

**Comment:** A related resource in which the described resource is
physically or logically included.

**Note:** This term is intended to be used with non-literal values as
defined in the DCMI Abstract Model
(http://dublincore.org/documents/abstract-model/). As of December 2007,
the DCMI Usage Board is seeking a way to express this intention with a
formal range declaration.

**Domain**: unspecified

**Range**: unspecified

**Commentary:** As an RDFS ontology, the inverse relationship to
dcterms:hasPart is not formally asserted.

#### vivo:rank

**Label:** rank

**URI:**
[*http://vivoweb.org/ontology/core\#rank*](http://vivoweb.org/ontology/core#rank)

**Comment:** An integer indicating the position of an entity in a list.

**Commentary:** Here, to order TitleElements of a Title with respect to
one another.

**Commentary:** An alternative would be some type of ordering
relationship, such as bf:succeededBy/bf:precededBy or the similar LD4L-O
v1 predicates bib:precedes/bib:follows.

### LD4L-O v1 Other Title and TitleElement Properties

#### rdfs:label (property) 

**Label**: Label

**URI**:
[*https://www.w3.org/2000/01/rdf-schema\#label*](https://www.w3.org/2000/01/rdf-schema#label)

**Definition**: A human-readable name for the subject.

**Domain**: rdfs:Resource

**Range**: rdfs:Literal

#### dcterms:date (property) 

**Label**: Date

**URI**:
[*http://purl.org/dc/terms/date*](http://purl.org/dc/terms/date)

**Definition**: A point or period of time associated with an event in
the lifecycle of the resource.

**Comment:** Date may be used to express temporal information at any
level of granularity. Recommended best practice is to use an encoding
scheme, such as the W3CDTF profile of ISO 8601.

**Range**: rdfs:Literal

#### dcterms:language

**Label:** language

**URI:** http://purl.org/dc/terms/language

**Comment:** A language of the resource.

**Range:** http://purl.org/dc/terms/LinguisticSystem

Appendix C: Modeling Titles of Title Elements
---------------------------------------------

The following example of sub-subtitles was presented above, along with
the proposed model. Here we explicate the modeling requirements of this
case and consider models that do not meet these requirements.

  ------------------------------------------------------
  \# Sub-subtitles
  
  Title: Cantica canticorum
  
  Subtitles with sub-subtitles from container:
  
  Lof der liefde: Hooglied in de renaissance
  
  In praise of love: Song of songs in the renaissance
  
  Eloge d’amour: Cantique de cantique à la renaissance
  ------------------------------------------------------

Based on the modeling criteria stated above for analyzing Titles into
component TitleElements, the requirements for modeling this example are:

-   The internal structure of each subtitle must be represented.

-   The internal colons should not be considered part of any one atomic
    > string value.

-   Order of the components within each subtitle must be modeled.

-   Artificial ordering among the three subtitles should not be imposed.

The following model is proposed to meet these requirements.

  -------------------------------------------------------------------------
  \# Sub-subtitles
  
  :title1 a bf:Title ;
  
  dcterms:hasPart :subtitle1, :subtitle4, :subtitle7 .
  
  :subtitle1 a bib:SubtitleElement ;
  
  rdfs:label “Lof def liefde: Hooglied in de renaissance”@nl ;
  
  dcterms:hasPart :subtitle2, :subtitle3 .
  
  :subtitle2 a bib:SubtitleElement ;
  
  rdfs:label ‘“Lof def liefde”@nl ;
  
  vivo:rank 1 .
  
  :subtitle3 a bib:SubtitleElement ;
  
  rdfs:label ‘“Hooglied in de renaissance”@nl ;
  
  vivo:rank 2 .
  
  :subtitle4 a bib:SubtitleElement ;
  
  rdfs:label “In praise of love: Song of songs in the renaissance”@en ;
  
  dcterms:hasPart :subtitle5, :subtitle6 .
  
  :subtitle5 a bib:SubtitleElement ;
  
  rdfs:label “In praise of love”@en ;
  
  vivo:rank 1 .
  
  :subtitle6 a bib:SubtitleElement ;
  
  rdfs:label “Song of songs in the renaissance”@en ;
  
  vivo:rank 2 .
  
  :subtitle7 a bib:SubtitleElement ;
  
  rdfs:label “Eloge d'amour : Cantique de cantique a la renaissance”@fr ;
  
  dcterms:hasPart :subtitle8, :subtitle9 .
  
  :subtitle8 a bib:SubtitleElement ;
  
  rdfs:label “Eloge d'amour”@fr ;
  
  vivo:rank 1 .
  
  :subtitle9 a bib:SubtitleElement ;
  
  rdfs:label “Cantique de cantique à la renaissance”@fr ;
  
  vivo:rank 2 .
  -------------------------------------------------------------------------

Based on the [*modeling criteria stated above*](#17dp8vu), the
requirements for modeling this example are:

-   The internal structure of each subtitle must be represented.

-   The internal colons should not be considered part of any one atomic
    > string value.

-   Order of the components within each subtitle must be modeled.

-   Artificial ordering among the three subtitles should not be imposed.

We first consider two models which fail to meet all the modeling
requirements.

##### Model 1. Three subtitles with no internal structure

  -------------------------------------------------------------------------
  :title1 a bf:Title ;
  
  dcterms:hasPart :mainTitle1 , :subtitle1, :subtitle2, :subtitle3 .
  
  :mainTitle1 a bib:MainTitleElement ;
  
  rdfs:label “Cantica canticorum”@la .
  
  :subtitle1 a bib:SubtitleElement ;
  
  rdfs:label “Lof def liefde: Hooglied in de renaissance”@nl .
  
  :subtitle2 a bib:SubtitleElement ;
  
  rdfs:label “In praise of love: Song of songs in the renaissance”@en .
  
  :subtitle3 a bib:SubtitleElement ;
  
  rdfs:label “Eloge d'amour : Cantique de cantique a la renaissance”@fr .
  -------------------------------------------------------------------------

This model succeeds in meeting two of the requirements:

-   Order of the components within each subtitle must be modeled.

-   Artificial ordering among the three subtitles should not be imposed.

But it fails to meet the remaining two the requirements:

-   The internal structure of each subtitle must be represented.

-   The internal colons should not be considered part of any one atomic
    > string value.

##### Model 2. Six distinct subtitles with rank

  -------------------------------------------------------------------------------------------------------------
  :title1 a bf:Title ;
  
  dcterms:hasPart :mainTitle1 , :subtitle1 , :subtitle2 , :subtitle3 , :subtitle4 , :subtitle5 , :subtitle6 .
  
  :mainTitle1 a bib:MainTitleElement ;
  
  rdfs:label “Cantica canticorum”@la .
  
  :subtitle1 a bib:SubtitleElement ;
  
  rdfs:label “Lof def liefde”@nl ;
  
  vivo:rank 1 .
  
  :subtitle2 a bib:SubtitleElement ;
  
  rdfs:label “Hooglied in de renaissance”@nl ;
  
  vivo:rank 2 .
  
  :subtitle3 a bib:SubtitleElement ;
  
  rdfs:label “In praise of love”@en ;
  
  vivo:rank 3 .
  
  :subtitle4 a bib:SubtitleElement ;
  
  rdfs:label “Song of songs in the renaissance”@en ;
  
  vivo:rank 4 .
  
  :subtitle5 a bib:SubtitleElement ;
  
  rdfs:label “Eloge d'amour ”@fr ;
  
  vivo:rank 5 .
  
  :subtitle6 a bib:SubtitleElement ;
  
  rdfs:label “Cantique de cantique a la renaissance”@fr ;
  
  vivo:rank 6 .
  -------------------------------------------------------------------------------------------------------------

This model succeeds in meeting two of the requirements:

-   The internal colons should not be considered part of any one atomic
    > string value.

-   Order of the components within each subtitle must be modeled.

But it fails to meet the remaining two the requirements:

-   The internal structure of each subtitle must be represented.

-   Artificial ordering among the three subtitles should not be imposed.

##### Model 3. Six distinct subtitles with precedence relations

  ----------------------------------------------------------------------
  :title1 a bf:Title ;
  
  dcterms:hasPart :mainTitle1 , :subtitle1 , :subtitle2 , :subtitle3 ,
  
  :subtitle4 , :subtitle5 , :subtitle6.
  
  :mainTitle1 a bib:MainTitleElement ;
  
  rdfs:label “Cantica canticorum”@la .
  
  :subtitle1 a bib:SubtitleElement ;
  
  rdfs:label “Lof def liefde”@nl ;
  
  :precedes :subtitle2 .
  
  :subtitle2 a bib:SubtitleElement ;
  
  rdfs:label “Hooglied in de renaissance”@nl .
  
  :subtitle3 a bib:SubtitleElement ;
  
  rdfs:label “In praise of love”@en ;
  
  :precedes :subtitle4 .
  
  :subtitle4 a bib:SubtitleElement ;
  
  rdfs:label “Song of songs in the renaissance@en”.
  
  :subtitle5 a bib:SubtitleElement ;
  
  rdfs:label “Eloge d'amour ” @fr;
  
  :precedes :subtitle6.
  
  :subtitle6 a bib:SubtitleElement ;
  
  rdfs:label “Cantique de cantique a la renaissance”@fr.
  ----------------------------------------------------------------------

This model succeeds in meeting three of the requirements:

-   The internal colons should not be considered part of any one atomic
    > string value.

-   Order of the components within each subtitle must be modeled.

-   Artificial ordering among the three subtitles should not be imposed.

But it fails to meet the remaining requirement:

-   The internal structure of each subtitle must be represented.

The model presented in the section Elements of Title Elements is adopted
because it meets all four requirements. That model is repeated here for
ease of comparison.

##### Model 4. Sub-subtitles (TitleElements with internal structure)

  -------------------------------------------------------------------------
  \# Sub-subtitles
  
  :title1 a bf:Title ;
  
  dcterms:hasPart :subtitle1, :subtitle4, :subtitle7 .
  
  :subtitle1 a bib:SubtitleElement ;
  
  rdfs:label “Lof def liefde: Hooglied in de renaissance”@nl ;
  
  dcterms:hasPart :subtitle2, :subtitle3 .
  
  :subtitle2 a bib:SubtitleElement ;
  
  rdfs:label ‘“Lof def liefde”@nl ;
  
  vivo:rank 1 .
  
  :subtitle3 a bib:SubtitleElement ;
  
  rdfs:label ‘“Hooglied in de renaissance”@nl ;
  
  vivo:rank 2 .
  
  :subtitle4 a bib:SubtitleElement ;
  
  rdfs:label “In praise of love: Song of songs in the renaissance”@en ;
  
  dcterms:hasPart :subtitle5, :subtitle6 .
  
  :subtitle5 a bib:SubtitleElement ;
  
  rdfs:label “In praise of love”@en ;
  
  vivo:rank 1 .
  
  :subtitle6 a bib:SubtitleElement ;
  
  rdfs:label “Song of songs in the renaissance”@en ;
  
  vivo:rank 2 .
  
  :subtitle7 a bib:SubtitleElement ;
  
  rdfs:label “Eloge d'amour : Cantique de cantique a la renaissance”@fr ;
  
  dcterms:hasPart :subtitle8, :subtitle9 .
  
  :subtitle8 a bib:SubtitleElement ;
  
  rdfs:label “Eloge d'amour”@fr ;
  
  vivo:rank 1 .
  
  :subtitle9 a bib:SubtitleElement ;
  
  rdfs:label “Cantique de cantique à la renaissance”@fr ;
  
  vivo:rank 2 .
  -------------------------------------------------------------------------


