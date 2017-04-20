[]{#_30j0zll .anchor}NOTE: the following represents the direction taken
by the LD4L Labs and LD4P Ontology Group in the development of
bibliotek-o and may not be fully formed. This pattern document was used
internally to define a direction and is shared with the intention of
contextualizing a pattern found within the ontology; terms specified
below may not fully align to the ontology as published. Further,
discussion of BIBFRAME 2.0 may be out-of-date.

2016 December

**Overview**
============

-   To categorize Content Types, assert applicable rdf:types on bf:Work
    > instances with rdfs:subClasses of bf:Work (to be created)
    > directly, rather than using the bf:content/bf:Content pattern.

    -   If existing SKOS vocabularies are employed to designate types of
        > bf:Works, we recommend using
        > [*cidoc-crm:P2*](http://www.cidoc-crm.org/html/5.0.4/cidoc-crm.html#P2)
        > to link the SKOS Concept to the Work. (Note: To support a
        > single query path within our implementation, we will only be
        > using Classes with rdf:type.)

-   To categorize Carrier Types, assert applicable rdf:types on
    > bf:Instance instances (possibly rdfs:subClasses of bf:Instance, to
    > be created) directly, rather than using the bf:carrier/bf:Carrier
    > pattern.

    -   If existing SKOS vocabularies are employed to designate types of
        > bf:Instances, we recommend using
        > [*cidoc-crm:P2*](http://www.cidoc-crm.org/html/5.0.4/cidoc-crm.html#P2)
        > to link the SKOS Concept to the Instance. (Note: To support a
        > single query path within our implementation, we will only be
        > using Classes with rdf:type.)

-   To not capture Media Types separate from Carriers, but rather
    > understand the Media through the definition of Carriers, e.g.
    > StereographCards and StereographDiscs by definition require a
    > Stereographic. The recommendation is to not use the
    > bf:media/bf:Media pattern, but instead consider stating the
    > required media directly in the Instance/Carrier type definition.

    -   Note: This decision should be revisited if an Instance/Carrier
        > type is identified that may require more than one media type
        > depending on the circumstance.

### Comments on implementation:

-   OWL classes will be coined or reused based loosely on a combination
    > of Library of Congress’s Content Types
    > ([*http://id.loc.gov/vocabulary/contentTypes*](http://id.loc.gov/vocabulary/contentTypes))
    > and RDA’s Content Types
    > ([*http://www.rdaregistry.info/termList/RDAContentType/*](http://www.rdaregistry.info/termList/RDAContentType/))

    -   These will be defined as rdfs:subClassOf bf:Work; or serve as
        > types on bf:Work instances (without being defined as
        > subclasses).

    -   It is recommended that if new classes are created, terms should
        > be designed for post-coordinated use, e.g do not create
        > bf:TactileThreeDimensionalForm, instead assert a resource is
        > of both types bib:Tactile and bf:Object.

    -   Note: Currently
        > [*http://id.loc.gov/vocabulary/contentTypes*](http://id.loc.gov/vocabulary/contentTypes)
        > are defined as Owl Classes, MADS/RDF Authority, SKOS Concepts,
        > and BF Categories. LD4L would like to avoid punning and
        > crossing of SKOS and OWL streams[^1] if possible.

-   OWL classes will be coined or reused based loosely on a combination
    > of Library of Congress’s Carrier Types
    > ([*http://id.loc.gov/vocabulary/carriers*](http://id.loc.gov/vocabulary/carriers))
    > and RDA’s Carrier Types
    > ([*http://www.rdaregistry.info/termList/RDACarrierType/*](http://www.rdaregistry.info/termList/RDACarrierType/))

    -   These will be defined as rdfs:subClassOf bf:Instance; or serve
        > as types on bf:Instance instances (without being defined as
        > subclasses).

        -   Consider stating the required media directly in the
            > Instance/Carrier type definition

    -   The need to rely on post-coordination is less clear for
        > carriers. We initially thought that terms should not be
        > created that combine content and carrier types, e.g. rather
        > than making a term bf:AudioDisc, a bf:Disc (a potential
        > Instance/Carrier type) should be related to a bf:Audio (a
        > bf:Work). After further consideration, there was an
        > acknowledgement that some carriers are specifically designed
        > for certain content types; something can still be an audio
        > disc without there being an Audio Work recorded on it.

    -   Note: Like the LOC Content vocabulary described above, currently
        > [*http://id.loc.gov/vocabulary/carriers*](http://id.loc.gov/vocabulary/carriers)
        > are defined as Owl Classes, MADS/RDF Authority, SKOS Concepts,
        > and BF Categories. Again, LD4L would like to avoid punning and
        > crossing of SKOS and OWL streams if possible.

-   Classes from other external ontologies referring to content or
    > carrier types can be related through rdf:type directly on
    > bf:Works, bf:Instances and bf:Items

**Approach Moving Forward**
===========================

-   Request Library of Congress remove bf:content/bf:Content,
    > bf:carrier/bf:Carrier, bf:media/bf:Media patterns to simplify the
    > model and align with established patterns for declaring types of
    > resources.

    -   Recommend BIBFRAME use rdf:type with classes (defined within the
        > BF namespace or externally) directly on bf:Work, bf:Instances,
        > bf:Items.

    -   If LOC plans to use vocabularies modeled as skos:Concept to
        > describe types of bf:Works, bf:Instances, or bf:Items we
        > recommend the reuse of cidoc-crm:P2 rather than bf:content and
        > bf:carrier.

Summary of Recommendation Discussions
-------------------------------------

This document focuses on the number of ways BIBFRAME provisions for
stating a bf:Work, bf:Instance, or bf:Item is a of a particular type or
category. In the [*W3C RDF Schema*](https://www.w3.org/TR/rdf-schema/)
there is a built in property
[*rdf:type*](https://www.w3.org/TR/rdf-schema/#ch_type), defined as “an
instance of
[*rdf:Property*](https://www.w3.org/TR/rdf-schema/#ch_property) that is
used to state that a resource is an instance of a class.” The phrase “an
instance of a class” can be read as “something within a category”. The
LD4L Labs / LD4P ontology group has identified at least two options in
BIBFRAME 2.0 to more specifically categorize bf:Works, bf:Instances and
bf:Items: through subclassing and through bf:content/bf:Content,
bf:carrier/bf:Carrier, bf:media/bf:Media patterns.

Library cataloging practices, especially with the implementation of the
RDA, has had a strong focus on capturing content, carrier, and media
information about library resources. Library of Congress, having
committed to producing bibliographic data according to RDA content
standards, is understandably concerned with how BIBFRAME will provision
for capturing this information. RDA is a content standard (independent
of how it is serialized). There is nothing prescriptive in RDA
explaining how to implement the content standard in MARC; similarly, we
are left to decide how to implement it in BIBFRAME.

The BIBFRAME 2.0 model as it stands, encourages one to extend the model
to describe more specific types through both subclassing for bf:Works,
bf:Instances and bf:Items, and through the use of bf:content/bf:Content,
bf:carrier/bf:Carrier, bf:media/bf:Media patterns. There are the built
in bf:Work and bf:Instance subclasses, but clearly they are not
sufficient to describe with specificity Work and Instance types. The
bf:content/bf:Content, bf:carrier/bf:Carrier, bf:media/bf:Media patterns
are flexible (and do not require deep subclassing within the BIBFRAME
model), but they diverge from using the commonly understood linked data
practice of using the rdf:type property to say some individual thing is
of a certain type. By providing multiple patterns for asserting
something is a particular type of thing, the model also requires
implementers to use more complex queries than is necessary find all
things of a given type.

The LD4L Labs / LD4P preferred method for extending types for bf:Work,
bf:Instances, bf:Items is through the use of classes/subclasses defined
within the BIBFRAME namespace and/or external ontologies (including the
LD4L namespace). We recommend the removal of the bf:content/bf:Content,
bf:carrier/bf:Carrier, bf:media/bf:Media patterns, and use rdf:type
directly on bf:Work, bf:Instance, and bf:Items entities. Capturing types
corresponding to content and carrier directly on Works, Instances and
Items through the use of rdf:type could still be interpreted as an RDA
implementation pattern because it still captures content/carrier/media
information about library resources.

Libraries, museums, and archives have traditionally created SKOS
Vocabularies (rather than Class hierarchies) to mint terms related to
categories of Content, Carrier, and Media types. Existing skos:Concepts
of potential interest for extending in this manner include MARC Content
Types, Carrier Types, Media Types, the Getty AAT, and RDA
Content/Carrier Types. That said, LD4L would like support a single query
path for types (through rdf:type and Classes) and avoid the use of
punning and crossing of SKOS and OWL streams. Classes will be defined or
reused based on existing SKOS vocabularies; consideration of a strategy
to sustainably link between analogous Classes and skos:Concepts has been
identified as future work.

**BF2 Approach to Content/Carrier/Media Type**
==============================================

### Illustration

![BF Content\_Carrier\_Media
Type(1).jpg](media/image01.jpg){width="6.5in" height="4.875in"}

### Involved Classes

#### **bf:Carrier**

Label: Carrier type

URI:
[*http://id.loc.gov/ontologies/bibframe/Carrier*](http://id.loc.gov/ontologies/bibframe/Carrier)

Subclass of: rdfs:Resource

Definition: "Categorization reflecting the format of the storage medium
and housing of a carrier."

Dcterms:modified: "2016-04-21 (New)" .

#### **bf:Content**

Label: Content type

URI:
[*http://id.loc.gov/ontologies/bibframe/Content*](http://id.loc.gov/ontologies/bibframe/Content)

Subclass of: rdfs:Resource

Definition: "Categorization reflecting the fundamental form of
communication in which the content is expressed and the human sense
through which it is intended to be perceived."

Dcterms:modified: "2016-04-21 (New)" .

#### **bf:Media**

Label: Media type

URI:
[*http://id.loc.gov/ontologies/bibframe/Media*](http://id.loc.gov/ontologies/bibframe/Media)

Subclass of: rdfs:Resource

Definition: "Categorization reflecting the general type of
intermediation device required to view, play, run, etc., the content of
a resource."

Dcterms:modified: "2016-04-21 (New)" .

### Involved Properties

#### **bf:carrierType (object property)**

Label: Carrier type

URI:
[*http://id.loc.gov/ontologies/bibframe/carrier*](http://id.loc.gov/ontologies/bibframe/carrier)

Definition: "Categorization reflecting the format of the storage medium
and housing of a carrier."

Domain:
[*http://id.loc.gov/ontologies/bibframe/Instance*](http://id.loc.gov/ontologies/bibframe/Instance)

Range:
[*http://id.loc.gov/ontologies/bibframe/Carrier*](http://id.loc.gov/ontologies/bibframe/Carrier)

Dcterms:modified: "2016-04-21 (New)".

#### **bf:contentType (object property)**

Label: Content type

URI:
[*http://id.loc.gov/ontologies/bibframe/content*](http://id.loc.gov/ontologies/bibframe/content)

Definition: "Categorization reflecting the fundamental form of
communication in which the content is expressed and the human sense
through which it is intended to be perceived."

Domain:
[*http://id.loc.gov/ontologies/bibframe/Work*](http://id.loc.gov/ontologies/bibframe/Work)

Range:
[*http://id.loc.gov/ontologies/bibframe/Content*](http://id.loc.gov/ontologies/bibframe/Content)

Dcterms:modified: "2016-04-21 (New)".

#### **bf:mediaType (object property)**

Label: Media type

URI:
[*http://id.loc.gov/ontologies/bibframe/media*](http://id.loc.gov/ontologies/bibframe/media)

Definition: "Categorization reflecting the general type of
intermediation device required to view, play, run, etc., the content of
a resource."

Comment: "Used with Work or Instance"

Range:
[*http://id.loc.gov/ontologies/bibframe/Media*](http://id.loc.gov/ontologies/bibframe/Media)

Dcterms:modified: "2016-04-21 (New)".

#### **rdf:type** 

URI:
[*http://www.w3.org/1999/02/22-rdf-syntax-ns\#type*](http://www.w3.org/1999/02/22-rdf-syntax-ns#type)

Definition: "rdf:type is an instance of
[*rdf:Property*](https://www.w3.org/TR/2004/REC-rdf-schema-20040210/#ch_property)
that is used to state that a resource is an instance of a class."

Domain: rdfs:Resource

**bibliotek-o Approach to Content/Carrier/Media Types:**
========================================================

### Illustration

![LD4L Content\_Carrier\_Media
Type(2).jpg](media/image03.jpg){width="4.65625in" height="3.5625in"}

### Note: references to the ld4l namespace in the above illustration should be in the bib namespace

### Involved Properties

#### **rdf:type** 

URI:
[*http://www.w3.org/1999/02/22-rdf-syntax-ns\#type*](http://www.w3.org/1999/02/22-rdf-syntax-ns#type)

Definition: "rdf:type is an instance of
[*rdf:Property*](https://www.w3.org/TR/2004/REC-rdf-schema-20040210/#ch_property)
that is used to state that a resource is an instance of a class."

Domain: rdfs:Resource

Range: rdfs:Class

### Involved Classes BIBFRAME Work and Instance Subclasses

The proposal of classes below are loosely based on RDA Content and
Carrier Types. Proposed class implementations and changes are listed in
the “Proposed BIBFRAME Parallel” column; if LOC cannot make these
changes in BF (namely, the many new classes proposed), LD4L will reflect
these changes in the LD4L namespace and implementation pattern.

Admittedly, many of these carrier classes are not specific enough to be
useful to know playback requirements for particular carrier. This
hierarchy is a first pass at creating general classes, mainly to meet
the use case of when a cataloger has an item in hand, and all they might
know is that it has a particular general carrier type and/or that a
particular carrier type is design to carry a particular content type.
More specific classes (reflecting specific carrier models, e.g. Nintendo
64 Cartridge) should be added to the hierarchy in order to better
understand items in our collection.

The entire hierarchy needs to be reviewed and tested; the classes
highlighted in red below explicitly needs more discussion within their
domain communities.

[***Content Types***](http://www.rdaregistry.info/termList/RDAContentType/)
===========================================================================

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  RDA URI                                                                RDA Label (@en)                                                                                               RDA Definition                                                                                                                                                                          Proposed BIBFRAME Parallel
  ---------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [*rdaco:1001*](http://rdaregistry.info/termList/RDAContentType/1001)   [*"cartographic dataset"*](http://rdaregistry.info/termList/RDAContentType/1001) @en                          "A content type consisting of cartographic content expressed through a digitally encoded dataset intended to be processed by a computer." @en                                           bf:Cartography (subclass of bf:Work) & bf:Dataset (subclass of bf:Work)

  [*rdaco:1002*](http://rdaregistry.info/termList/RDAContentType/1002)   [*"cartographic image"*](http://rdaregistry.info/termList/RDAContentType/1002) @en                            "A content type consisting of cartographic content expressed through line, shape, shading, etc., intended to be perceived visually as a still image or images in two dimensions." @en   bf:Cartography (subclass of bf:Work) & bf:StillImage (subclass of bf:Work)

  [*rdaco:1003*](http://rdaregistry.info/termList/RDAContentType/1003)   [*"cartographic moving image"*](http://rdaregistry.info/termList/RDAContentType/1003) @en                     "A content type consisting of cartographic content expressed through images intended to be perceived as moving, in two dimensions." @en                                                 bf:Cartography (subclass of bf:Work) & bf:MovingImage (subclass of bf:Work)

  [*rdaco:1004*](http://rdaregistry.info/termList/RDAContentType/1004)   [*"cartographic tactile image"*](http://rdaregistry.info/termList/RDAContentType/1004) @en                    "A content type consisting of cartographic content expressed through line, shape, and/or other forms, intended to be perceived through touch as a still image in two dimensions." @en   bf:Cartography (subclass of bf:Work) & bib:Tactile (subclass of bf:Work) : Tactile in RDA relates to the Expression level; should BIBFRAME have Tactile then at the Work level instead of the Instance. For works not inherently meant to be perceived through touch, but have instances that use tactile notation, use bf:notation/bf:TactileNotation on the related bf:Instance.

  [*rdaco:1005*](http://rdaregistry.info/termList/RDAContentType/1005)   [*"cartographic tactile three-dimensional form"*](http://rdaregistry.info/termList/RDAContentType/1005) @en   "A content type consisting of cartographic content expressed through a form or forms intended to be perceived through touch as a three-dimensional form or forms." @en                  The same as above except adding bf:Object (subclass of bf:Work)

  [*rdaco:1006*](http://rdaregistry.info/termList/RDAContentType/1006)   [*"cartographic three-dimensional form"*](http://rdaregistry.info/termList/RDAContentType/1006) @en           "A content type consisting of cartographic content expressed through a form or forms intended to be perceived visually in three-dimensions." @en                                        bf:Cartography (subclass of bf:Work) and bf:Object (subclass of bf:Work)

  [*rdaco:1007*](http://rdaregistry.info/termList/RDAContentType/1007)   [*"computer dataset"*](http://rdaregistry.info/termList/RDAContentType/1007) @en                              "A content type consisting of content expressed through a digitally encoded dataset intended to be processed by a computer." @en                                                        bf:Dataset (subclass of bf:Work) & bf:Electronic (subclass of bf:Instance)

  [*rdaco:1008*](http://rdaregistry.info/termList/RDAContentType/1008)   [*"computer program"*](http://rdaregistry.info/termList/RDAContentType/1008) @en                              "A content type consisting of content expressed through digitally encoded instructions intended to be processed and performed by a computer." @en                                       bf:Multimedia is not recommended for use for this case
                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                               Create subclass of bf:Work that is bib:Software, “A compiled executable binary file”.
                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                               Create subclass of bf:Work, bf:Text that is bib:SourceCode, “A text listing of commands to be compiled or assembled into an executable computer program.”

  [*rdaco:1009*](http://rdaregistry.info/termList/RDAContentType/1009)   [*"notated movement"*](http://rdaregistry.info/termList/RDAContentType/1009) @en                              "A content type consisting of content expressed through a form of notation for movement intended to be perceived visually." @en                                                         bib:NotatedMovement (subclass of bf:Work)

  [*rdaco:1010*](http://rdaregistry.info/termList/RDAContentType/1010)   [*"notated music"*](http://rdaregistry.info/termList/RDAContentType/1010) @en                                 "A content type consisting of content expressed through a form of musical notation intended to be perceived visually." @en                                                              bf:NotatedMusic (subclass of bf:Work)

  [*rdaco:1011*](http://rdaregistry.info/termList/RDAContentType/1011)   [*"performed music"*](http://rdaregistry.info/termList/RDAContentType/1011) @en                               "A content type consisting of content expressed through music in an audible form." @en                                                                                                  \*\*Request creation of LD4All (or BIBFRAME2) bf:Work / bf:Audio subclass of bib:PerformedMusic\*\* Audio alone doesn’t suffice to capture that it is a musical performance, and the musicMedium / MusicMedium property and class combination (which has domain bf:Work) doesn’t necessarily allow for inference that the Work is PerformedMusic (since it’s semantics + intent are different than declaring a bf:Work type).

  [*rdaco:1012*](http://rdaregistry.info/termList/RDAContentType/1012)   [*"sounds"*](http://rdaregistry.info/termList/RDAContentType/1012) @en                                        "A content type consisting of content other than language or music, expressed in an audible form." @en                                                                                  Request bf:Sounds that is a subclass of bf:Audio (which is a subclass of bf:Work).

  [*rdaco:1013*](http://rdaregistry.info/termList/RDAContentType/1013)   [*"spoken word"*](http://rdaregistry.info/termList/RDAContentType/1013) @en                                   "A content type consisting of content expressed through language in an audible form." @en                                                                                               Request bf:SpokenWord that is a subclass of bf:Audio (which is a subclass of bf:Work), and bf:Text is applied only when it is specifically a resource originally written down (i.e. an audiobook versus an oral history which was never written down originally).

  [*rdaco:1014*](http://rdaregistry.info/termList/RDAContentType/1014)   [*"still image"*](http://rdaregistry.info/termList/RDAContentType/1014) @en                                   "A content type consisting of content expressed through line, shape, shading, etc., intended to be perceived visually as a still image or images in two dimensions." @en                bf:StillImage (subclass of bf:Work)

  [*rdaco:1015*](http://rdaregistry.info/termList/RDAContentType/1015)   [*"tactile image"*](http://rdaregistry.info/termList/RDAContentType/1015) @en                                 "A content type consisting of content expressed through line, shape, and/or other forms, intended to be perceived through touch as a still image in two dimensions." @en                bib:Tactile (subclass of bf:Work\* per discussions above) and bf:StillImage (subclass of bf:Work). See above comments on loosening Work/Instance affiliation of Tactile.

  [*rdaco:1016*](http://rdaregistry.info/termList/RDAContentType/1016)   [*"tactile notated music"*](http://rdaregistry.info/termList/RDAContentType/1016) @en                         "A content type consisting of content expressed through a form of musical notation intended to be perceived through touch." @en                                                         bf:NotatedMusic (subclass of bf:Work), and bf:notation / bf:TactileNotation on the related bf:Instance.

  [*rdaco:1017*](http://rdaregistry.info/termList/RDAContentType/1017)   [*"tactile notated movement"*](http://rdaregistry.info/termList/RDAContentType/1017) @en                      "A content type consisting of content expressed through a form of notation for movement intended to be perceived through touch." @en                                                    bf:NotatedMovement (subclass of bf:Work) and bf:notation / bf:TactileNotation on the related bf:Instance.

  [*rdaco:1018*](http://rdaregistry.info/termList/RDAContentType/1018)   [*"tactile text"*](http://rdaregistry.info/termList/RDAContentType/1018) @en                                  "A content type consisting of content expressed through a form of notation for language intended to be perceived through touch." @en                                                    bf:Text (subclass of bf:Work) and bf:notation / bf:TactileNotation on the related bf:Instance.

  [*rdaco:1019*](http://rdaregistry.info/termList/RDAContentType/1019)   [*"tactile three-dimensional form"*](http://rdaregistry.info/termList/RDAContentType/1019)@en                 "A content type consisting of content expressed through a form or forms intended to be perceived through touch as a three-dimensional form or forms." @en                               bib:Tactile (subclass of bf:Work) and bf:Object (subclass of bf:Work).

  [*rdaco:1020*](http://rdaregistry.info/termList/RDAContentType/1020)   [*"text"*](http://rdaregistry.info/termList/RDAContentType/1020) @en                                          "A content type consisting of content expressed through a form of notation for language intended to be perceived visually." @en                                                         bf:Text (subclass of bf:Work) - RDA definition doesn’t say anything about ‘Spoken Form’ as with BIBFRAME definition; however, this still may align depending on interpretation of spoken form (does it mean the Work is Audio or that language can serve the purpose also of being read aloud?). Perhaps if latter, we can request that LC remove that phrase.

  [*rdaco:1021*](http://rdaregistry.info/termList/RDAContentType/1021)   [*"three-dimensional form"*](http://rdaregistry.info/termList/RDAContentType/1021) @en                        "A content type consisting of content expressed through a form or forms intended to be perceived visually in three-dimensions." @en                                                     bf:Object (subclass of bf:Work, and we requested change of class name - note that the label currently says ‘Three Dimensional Object’)

  [*rdaco:1022*](http://rdaregistry.info/termList/RDAContentType/1022)   [*"three-dimensional moving image"*](http://rdaregistry.info/termList/RDAContentType/1022) @en                "A content type consisting of content expressed through images intended to be perceived to be moving, and in three dimensions." @en                                                     bf:MovingImage (subclass of bf:Work) with bf:Instance bf:projectionChracteristic bib:ThreeDimensionalProjectionCharacteristic. Consider relationship with http://rdaregistry.info/termList/rofid/T1002
                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                               Determine if keeping three-dimensional aspect at the bf:Instance level makes sense to the Moving Image experts.

  [rdaco:1023](http://rdaregistry.info/termList/RDAContentType/1023)     ["two-dimensional moving image"](http://rdaregistry.info/termList/RDAContentType/1023)@en                     "A content type consisting of content expressed through images intended to be perceived to be moving, and in two dimensions." @en                                                       bf:MovingImage (subclass of bf:Work) with bf:Instance bf:projectionChracteristic bib:TwoDimensionalProjectionCharacteric. Consider relationship with http://rdaregistry.info/termList/rofid/T1002
                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                               Determine if keeping two-dimensional aspect at the bf:Instance level makes sense to the Moving Image experts.
  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[***Carrier Types***](http://www.rdaregistry.info/termList/RDACarrierType/)
===========================================================================

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  RDA URI                                                                Label (@en)                                                                                             RDA Definition                                                                                                                                                                                                   Proposed BIBFRAME Parallel
  ---------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [*rdact:1001*](http://rdaregistry.info/termList/RDACarrierType/1001)   [*"Audio carriers (Deprecated)"*](http://rdaregistry.info/termList/RDACarrierType/1001) @en             @en \*                                                                                                                                                                                                           Would not be actually assigned to a resource

  [*rdact:1002*](http://rdaregistry.info/termList/RDACarrierType/1002)   [*"audio cartridge"*](http://rdaregistry.info/termList/RDACarrierType/1002) @en                         "A carrier type consisting of a cartridge containing an audio tape." @en                                                                                                                                         bf:Audio (subclass of bf:Work) and Create bf:Instance (or ld4all if LC not on board) subclass bf:Cartridge with a subclass bf:AudioCartridge

  [*rdact:1003*](http://rdaregistry.info/termList/RDACarrierType/1003)   [*"audio cylinder"*](http://rdaregistry.info/termList/RDACarrierType/1003) @en                          "A carrier type consisting of a roller-shaped object on which sound waves are incised or indented in a continuous circular groove." @en                                                                          bf:Audio (subclass of bf:Work) and Create bf:Instance (or ld4all if LC not on board) bf:Cylinder, with a subclass bf:AudioCylinder

  [*rdact:1004*](http://rdaregistry.info/termList/RDACarrierType/1004)   [*"audio disc"*](http://rdaregistry.info/termList/RDACarrierType/1004) @en                              "A carrier type consisting of a disc on which sound waves, recorded as modulations, pulses, etc., are incised or indented in a continuous spiral groove." @en                                                    bf:Audio (subclass of bf:Work) and Create bf:Instance (or ld4all if LC not on board) subclass bf:Disc, with a subclass of bf:AudioDisc

  [*rdact:1005*](http://rdaregistry.info/termList/RDACarrierType/1005)   [*"sound-track reel"*](http://rdaregistry.info/termList/RDACarrierType/1005) @en                        "A carrier type consisting of an open reel holding a length of film on which sound is recorded." @en                                                                                                             Create bf:Instance (or ld4all if LC not on board) subclass bf:Reel, with a subclass of bf:SoundTrackReel

  [*rdact:1006*](http://rdaregistry.info/termList/RDACarrierType/1006)   [*"audio roll"*](http://rdaregistry.info/termList/RDACarrierType/1006) @en                              "A carrier type consisting of a roll of paper on which musical notes are represented by perforations, designed to mechanically reproduce the music when used in a player piano, player organ, etc." @en          bf:Audio (subclass of bf:Work) and Create bf:Instance (or ld4all if LC not on board) subclass Roll, with a subclass bf:AudioRoll

  [*rdact:1007*](http://rdaregistry.info/termList/RDACarrierType/1007)   [*"audiocassette"*](http://rdaregistry.info/termList/RDACarrierType/1007) @en                           "A carrier type consisting of a cassette containing an audiotape." @en                                                                                                                                           bf:Audio (subclass of bf:Work) and Create bf:Instance (or ld4all if LC not on board) subclass bf:Cassette, with a subclass bf:AudioCassette. bf:AudioCassette is also a subclass of bib:Tape.

  [*rdact:1008*](http://rdaregistry.info/termList/RDACarrierType/1008)   [*"audiotape reel"*](http://rdaregistry.info/termList/RDACarrierType/1008) @en                          "A carrier type consisting of an open reel holding a length of audiotape to be used with reel-to-reel audio equipment." @en                                                                                      bf:Audio (subclass of bf:Work) and Create bf:Instance (or ld4all if LC not on board) subclass bf:Reel, with a subclass bf:AudioTapeReel. bf:AudioTapeReel is also a subclass of bib:Tape.

  [*rdact:1010*](http://rdaregistry.info/termList/RDACarrierType/1010)   [*"Computer carriers (Deprecated)"*](http://rdaregistry.info/termList/RDACarrierType/1010) @en          @en \*                                                                                                                                                                                                           Top level terms not actually assigned to resources.

  [*rdact:1011*](http://rdaregistry.info/termList/RDACarrierType/1011)   [*"computer card"*](http://rdaregistry.info/termList/RDACarrierType/1011) @en                           "A carrier type consisting of a card containing digitally encoded data designed for use with a computer." @en                                                                                                    Create bf:Instance (or ld4all if LC not on board) subclass bf:Card with a subclass bf:ComputerCard that is also a subclass of bf:Electronic

  [*rdact:1012*](http://rdaregistry.info/termList/RDACarrierType/1012)   [*"computer chip cartridge"*](http://rdaregistry.info/termList/RDACarrierType/1012)@en                  "A carrier type consisting of a cartridge containing a miniaturized electronic circuit on a small wafer of semiconductor silicon, designed to provide additional processing, memory, or storage capacity." @en   Create bf:Instance (or ld4all if LC not on board) subclass bf:Cartridge, with a subclass bf:ComputerChipCartridge that is also a subclass of bf:ComputerChip. bf:ComputerChip proposed as a subclass of bf:Electronic

  [*rdact:1013*](http://rdaregistry.info/termList/RDACarrierType/1013)   [*"computer disc"*](http://rdaregistry.info/termList/RDACarrierType/1013) @en                           "A carrier type consisting of a disc containing digitally encoded data, magnetically or optically recorded." @en                                                                                                 Create bf:Instance (or ld4all if LC not on board) subclass bf:Disc, with a subclass of bf:ComputerDisc that is also a subclass of bf:Electronic

  [*rdact:1014*](http://rdaregistry.info/termList/RDACarrierType/1014)   [*"computer disc cartridge"*](http://rdaregistry.info/termList/RDACarrierType/1014)@en                  "A carrier type consisting of a cartridge containing one or more computer discs." @en                                                                                                                            Create bf:Instance (or ld4all if LC not on board) subclass bf:Cartridge, with a subclass bf:ComputerDiscCartridge that is also a subclass of bf:Electronic and bf:ComputerDisc.

  [*rdact:1015*](http://rdaregistry.info/termList/RDACarrierType/1015)   [*"computer tape cartridge"*](http://rdaregistry.info/termList/RDACarrierType/1015)@en                  "A carrier type consisting of a cartridge containing a computer tape." @en                                                                                                                                       Create bf:Instance (or ld4all if LC not on board) subclass bf:Cartridge, with a subclass bf:ComputerTapeCartridge that is also a subclass of bf:Electronic and bf:Tape

  [*rdact:1016*](http://rdaregistry.info/termList/RDACarrierType/1016)   [*"computer tape cassette"*](http://rdaregistry.info/termList/RDACarrierType/1016)@en                   "A carrier type consisting of a cassette containing a computer tape." @en                                                                                                                                        Create bf:Instance (or ld4all if LC not on board) subclass bf:Cassette, with a subclass bf:ComputerTapeCassette that is also a subclass of bf:Electronic and bf:Tape.

  [*rdact:1017*](http://rdaregistry.info/termList/RDACarrierType/1017)   [*"computer tape reel"*](http://rdaregistry.info/termList/RDACarrierType/1017) @en                      "A carrier type consisting of an open reel holding a length of computer tape to be used with a computer tape drive." @en                                                                                         Create bf:Instance (or ld4all if LC not on board) subclass bf:Reel, with a subclass bf:ComputerTapeReel that is also a subclass of bf:Electronic and bf:Tape

  [*rdact:1018*](http://rdaregistry.info/termList/RDACarrierType/1018)   [*"online resource"*](http://rdaregistry.info/termList/RDACarrierType/1018) @en                         "A carrier type consisting of a digital resource accessed by means of hardware and software connections to a communications network." @en                                                                        Create bf:OnlineResource (or ld4all if LC not on board), a subclass of bf:Electronic, which is subclass of bf:Instance).

  [*rdact:1020*](http://rdaregistry.info/termList/RDACarrierType/1020)   [*"Microform carriers (Deprecated)"*](http://rdaregistry.info/termList/RDACarrierType/1020) @en         @en \*                                                                                                                                                                                                           Top level terms not actually assigned to resources.

  [*rdact:1021*](http://rdaregistry.info/termList/RDACarrierType/1021)   [*"aperture card"*](http://rdaregistry.info/termList/RDACarrierType/1021) @en                           "A carrier type consisting of a card with one or more rectangular openings or apertures holding frames of microfilm." @en                                                                                        Create bf:Instance (or ld4all if LC not on board) subclass bf:ApertureCard (seems to vary from bf:Card as requested or as exists in RDA currently)

  [*rdact:1022*](http://rdaregistry.info/termList/RDACarrierType/1022)   [*"microfiche"*](http://rdaregistry.info/termList/RDACarrierType/1022) @en                              "A carrier type consisting of a sheet of film bearing a number of microimages in a two-dimensional array." @en                                                                                                   Create bf:Instance (or ld4all if LC not on board) subclass bf:Microform, and then subclasses of bf:Microform that are bf:Microfilm and bf:Microfiche. This pattern facilitates searching for all microform options.

  [*rdact:1023*](http://rdaregistry.info/termList/RDACarrierType/1023)   [*"microfiche cassette"*](http://rdaregistry.info/termList/RDACarrierType/1023) @en                     "A carrier type consisting of a cassette containing uncut microfiches." @en                                                                                                                                      Create bf:Instance (or ld4all if LC not on board) subclass bf:Cassette, with a subclass bf:MicroficheCassette. bf:MicroficheCassette is proposed also as a subclass of bf:Microfiche.

  [*rdact:1024*](http://rdaregistry.info/termList/RDACarrierType/1024)   [*"microfilm cartridge"*](http://rdaregistry.info/termList/RDACarrierType/1024) @en                     "A carrier type consisting of a cartridge containing a microfilm." @en                                                                                                                                           Create bf:Instance (or ld4all if LC not on board) subclass bf:Cartridge, with a subclass bf:MicrofilmCartridge. bib:MicrofilmCartridge is also a subclass of bib:Microfilm.
                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                  bf:MicroficheCartridge is proposed also as a subclass of bf:Microfiche.

  [*rdact:1025*](http://rdaregistry.info/termList/RDACarrierType/1025)   [*"microfilm cassette"*](http://rdaregistry.info/termList/RDACarrierType/1025) @en                      "A carrier type consisting of a cassette containing a microfilm." @en                                                                                                                                            Create bf:Instance (or ld4all if LC not on board) subclass bf:Cassette, with a subclass bf:MicrofilmCassette.
                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                  bf:MicrofilmCassette is proposed also as a subclass of bf:Microfilm.

  [*rdact:1026*](http://rdaregistry.info/termList/RDACarrierType/1026)   [*"microfilm reel"*](http://rdaregistry.info/termList/RDACarrierType/1026) @en                          "A carrier type consisting of an open reel holding a microfilm, to be threaded into a microfilm reader." @en                                                                                                     Create bf:Instance (or ld4all if LC not on board) subclass bf:Reel, with a subclass bf:MicrofilmReel.
                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                  bf:MicrofilmReel is proposed also as a subclass of bf:Microfilm.

  [*rdact:1027*](http://rdaregistry.info/termList/RDACarrierType/1027)   [*"microfilm slip"*](http://rdaregistry.info/termList/RDACarrierType/1027) @en                          "A carrier type consisting of a short strip of microfilm cut from a roll." @en                                                                                                                                   Create bf:Instance (or ld4all if LC not on board) subclass bf:Microfilm with a subclass bf:MicrofilmSlip

  [*rdact:1028*](http://rdaregistry.info/termList/RDACarrierType/1028)   [*"microopaque"*](http://rdaregistry.info/termList/RDACarrierType/1028) @en                             "A carrier type consisting of a card or sheet of opaque material bearing a number of microimages in a two-dimensional array." @en                                                                                Create bf:Instance (or ld4all if LC not on board) subclass bf:Microform with a subclass bf:Microopaque

  [*rdact:1029*](http://rdaregistry.info/termList/RDACarrierType/1029)   [*"Microscopic carriers (Deprecated)"*](http://rdaregistry.info/termList/RDACarrierType/1029) @en       @en \*                                                                                                                                                                                                           Top level terms not actually assigned to resources.

  [*rdact:1030*](http://rdaregistry.info/termList/RDACarrierType/1030)   [*"microscope slide"*](http://rdaregistry.info/termList/RDACarrierType/1030) @en                        "A carrier type consisting of a small sheet of transparent material, with or without a protective mount, bearing a minute object designed for use with a device such as a microscope." @en                       Create bf:Instance (or ld4all if LC not on board) subclass bf:Slide, and create a subclass of bf:Slide that is bf:Microscopic (see below in Media types).

  [*rdact:1031*](http://rdaregistry.info/termList/RDACarrierType/1031)   [*"Projected image carriers (Deprecated)"*](http://rdaregistry.info/termList/RDACarrierType/1031) @en   @en \*                                                                                                                                                                                                           Top level terms not actually assigned to resources.

  [*rdact:1032*](http://rdaregistry.info/termList/RDACarrierType/1032)   [*"film cartridge"*](http://rdaregistry.info/termList/RDACarrierType/1032) @en                          "A carrier type consisting of a cartridge containing a motion picture film." @en                                                                                                                                 Create bf:Instance (or ld4all if LC not on board) subclass bf:Cartridge, with a subclass bf:FilmCartridge. bf:FilmCartridge is proposed also as a subclass of bf:Film.

  [*rdact:1033*](http://rdaregistry.info/termList/RDACarrierType/1033)   [*"film cassette"*](http://rdaregistry.info/termList/RDACarrierType/1033) @en                           "A carrier type consisting of a cassette containing a motion picture film." @en                                                                                                                                  Create bf:Instance (or ld4all if LC not on board) subclass bf:Cassette, with a subclass bf:FilmCassette. bf:FilmCassette is proposed also as a subclass of bf:Film.

  [*rdact:1034*](http://rdaregistry.info/termList/RDACarrierType/1034)   [*"film reel"*](http://rdaregistry.info/termList/RDACarrierType/1034) @en                               "A carrier type consisting of an open reel holding a motion picture film to be used with a motion picture film projector." @en                                                                                   Create bf:Instance (or ld4all if LC not on board) subclass bf:Reel, with a subclass bf:FilmReel. bf:FilmReel is proposed also as a subclass of bf:Film.

  [*rdact:1035*](http://rdaregistry.info/termList/RDACarrierType/1035)   [*"filmslip"*](http://rdaregistry.info/termList/RDACarrierType/1035) @en                                "A carrier type consisting of a short strip of film, usually in rigid format rather than rolled." @en                                                                                                            Create bf:Instance (or ld4all if LC not on board) subclass bf:Slip, with a subclass bf:FilmSlip. bf:FilmSlip is proposed also as a subclass of bf:Film.

  [*rdact:1036*](http://rdaregistry.info/termList/RDACarrierType/1036)   [*"filmstrip"*](http://rdaregistry.info/termList/RDACarrierType/1036) @en                               "A carrier type consisting of a roll of film, with or without recorded sound, containing a succession of images intended for projection one at a time." @en                                                      Create bf:Instance (or ld4all if LC not on board) subclass bf:Film, with a subclass bf:Filmstrip.

  [*rdact:1037*](http://rdaregistry.info/termList/RDACarrierType/1037)   [*"filmstrip cartridge"*](http://rdaregistry.info/termList/RDACarrierType/1037) @en                     "A carrier type consisting of a cartridge containing a filmstrip." @en                                                                                                                                           Create bf:Instance (or ld4all if LC not on board) subclass bf:Cartridge, with a subclass bf:FilmStripCartridge. bf:FilmStripCartridge is proposed also as a subclass of bf:Film.

  [*rdact:1039*](http://rdaregistry.info/termList/RDACarrierType/1039)   [*"overhead transparency"*](http://rdaregistry.info/termList/RDACarrierType/1039)@en                    "A carrier type consisting of a sheet of transparent material, with or without a protective mount, bearing an image designed for use with an overhead projector." @en                                            Create bf:Instance (or ld4all if LC not on board) subclass bf:OverheadTransparency

  [*rdact:1040*](http://rdaregistry.info/termList/RDACarrierType/1040)   [*"slide"*](http://rdaregistry.info/termList/RDACarrierType/1040) @en                                   "A carrier type consisting of a small sheet of transparent material, usually in a protective mount, bearing an image designed for use with a slide projector or viewer." @en                                     Create bf:Instance (or ld4all if LC not on board) subclass bf:Slide

  [*rdact:1041*](http://rdaregistry.info/termList/RDACarrierType/1041)   [*"Stereographic carriers (Deprecated)"*](http://rdaregistry.info/termList/RDACarrierType/1041) @en     @en \*                                                                                                                                                                                                           Top level terms not actually assigned to resources.

  [*rdact:1042*](http://rdaregistry.info/termList/RDACarrierType/1042)   [*"stereograph card"*](http://rdaregistry.info/termList/RDACarrierType/1042) @en                        "A carrier type consisting of a card bearing stereographic images." @en                                                                                                                                          Create bf:Stereograph (or ld4all if LC not on board) as subclass of bf:StillImage (which is subclass of bf:Work). Create bf:StereographCard (or ld4all if LC not on board) as subclass of bf:Card at bf:Instance level. Request insight of those who know more about this format.

  [*rdact:1043*](http://rdaregistry.info/termList/RDACarrierType/1043)   [*"stereograph disc"*](http://rdaregistry.info/termList/RDACarrierType/1043) @en                        "A carrier type consisting of a disc with openings around the perimeter holding pairs of still images designed for use with a stereograph viewer." @en                                                           Create bf:Stereograph (or ld4all if LC not on board) as subclass of bf:StillImage (which is subclass of bf:Work). Create bf:StereographDisc (or ld4all if LC not on board) as subclass of bf:Disc at bf:Instance level. Request insight of those who know more about this format.

  [*rdact:1044*](http://rdaregistry.info/termList/RDACarrierType/1044)   [*"Unmediated carriers (Deprecated)"*](http://rdaregistry.info/termList/RDACarrierType/1044) @en        @en \*                                                                                                                                                                                                           Top level terms not actually assigned to resources.

  [*rdact:1045*](http://rdaregistry.info/termList/RDACarrierType/1045)   [*"card"*](http://rdaregistry.info/termList/RDACarrierType/1045) @en                                    "A carrier type consisting of a small sheet of opaque material." @en                                                                                                                                             Create bf:Instance (or ld4all if LC not on board) subclass bf:Card

  [*rdact:1046*](http://rdaregistry.info/termList/RDACarrierType/1046)   [*"flipchart"*](http://rdaregistry.info/termList/RDACarrierType/1046) @en                               "A carrier type consisting of a hinging device holding two or more sheets designed for use on an easel." @en                                                                                                     Create bf:Instance (or ld4all if LC not on board) subclass bf:Flipchart

  [*rdact:1047*](http://rdaregistry.info/termList/RDACarrierType/1047)   [*"roll"*](http://rdaregistry.info/termList/RDACarrierType/1047) @en                                    "A carrier type consisting of a wound length of paper, film, tape, etc." @en                                                                                                                                     Create bf:Instance (or ld4all if LC not on board) subclass bf:Roll

  [*rdact:1048*](http://rdaregistry.info/termList/RDACarrierType/1048)   [*"sheet"*](http://rdaregistry.info/termList/RDACarrierType/1048) @en                                   "A carrier type consisting of a flat, thin piece of paper, plastic, etc." @en                                                                                                                                    Create bf:Instance (or ld4all if LC not on board) subclass bf:Sheet

  [*rdact:1049*](http://rdaregistry.info/termList/RDACarrierType/1049)   [*"volume"*](http://rdaregistry.info/termList/RDACarrierType/1049) @en                                  "A carrier type consisting of one or more sheets bound or fastened together to form a single unit." @en                                                                                                          Create bf:Instance (or ld4all if LC not on board) subclass bf:Volume

  [*rdact:1050*](http://rdaregistry.info/termList/RDACarrierType/1050)   [*"Video carriers (Deprecated)"*](http://rdaregistry.info/termList/RDACarrierType/1050) @en             @en \*                                                                                                                                                                                                           Top level terms not actually assigned to resources.

  [*rdact:1051*](http://rdaregistry.info/termList/RDACarrierType/1051)   [*"video cartridge"*](http://rdaregistry.info/termList/RDACarrierType/1051) @en                         "A carrier type consisting of a cartridge containing a video tape." @en                                                                                                                                          Create bf:Instance (or ld4all if LC not on board) subclass bf:Cartridge, with a subclass bf:VideoCartridge.
                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                  bfVideoCartridge is proposed also as a subclass of bf:Video and bib:Tape.

  [*rdact:1052*](http://rdaregistry.info/termList/RDACarrierType/1052)   [*"videocassette"*](http://rdaregistry.info/termList/RDACarrierType/1052) @en                           "A carrier type consisting of a cassette containing a video tape." @en                                                                                                                                           Create bf:Instance (or ld4all if LC not on board) subclass bf:Cassette, with a subclass bf:VideoCassette.
                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                  bf:VideoCassette is proposed also as a subclass of bf:Video and bib:Tape.

  [*rdact:1053*](http://rdaregistry.info/termList/RDACarrierType/1053)   [*"videotape reel"*](http://rdaregistry.info/termList/RDACarrierType/1053) @en                          "A carrier type consisting of an open reel holding a video tape for use with reel-to-reel video equipment." @en                                                                                                  Create bf:Instance (or ld4all if LC not on board) subclass bf:Reel, with a subclass bf:VideotapeReel.
                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                  bf:VideotapeReel is proposed also as a subclass of bf:Video and bib:Tape.

  [*rdact:1056*](http://rdaregistry.info/termList/RDACarrierType/1056)   [*"microfilm roll"*](http://rdaregistry.info/termList/RDACarrierType/1056) @en                          "A carrier type consisting of a wound length of microfilm." @en                                                                                                                                                  Create bf:Instance (or ld4all if LC not on board) subclass bf:Microfilm, with a subclass bf:MicrofilmRoll.
                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                  bf:MicrofilmRoll is proposed also as a subclass of bf:Roll.

  [*rdact:1059*](http://rdaregistry.info/termList/RDACarrierType/1059)   [*"object"*](http://rdaregistry.info/termList/RDACarrierType/1059) @en                                  "A carrier type consisting of a three-dimensional artifact, a replica of an artifact, or a naturally-occurring object." @en                                                                                      n/a - declared at the bf:Work level.

  [*rdact:1060*](http://rdaregistry.info/termList/RDACarrierType/1060)   [*"videodisc"*](http://rdaregistry.info/termList/RDACarrierType/1060) @en                               "A carrier type consisting of a disc on which video signals, with or without sound, are recorded." @en                                                                                                           Create bf:Instance (or ld4all if LC not on board) subclass bf:Disc, with a subclass bf:VideoDisc.
                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                  bf:VideoDisc is proposed also as a subclass of bib:Video.

  [*rdact:1069*](http://rdaregistry.info/termList/RDACarrierType/1069)   [*"film roll"*](http://rdaregistry.info/termList/RDACarrierType/1069) @en                               "A carrier type consisting of a wound length of film." @en                                                                                                                                                       Create bf:Instance (or ld4all if LC not on board) subclass bf:Film, with a subclass bf:FilmRoll.
                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                  bf:FilmRoll is proposed also as a subclass of bf:Roll.

  [*rdact:1070*](http://rdaregistry.info/termList/RDACarrierType/1070)   [*"audio belt"*](http://rdaregistry.info/termList/RDACarrierType/1070) @en                              "A carrier type consisting of a loop of flexible plastic or magnetic film on which audio signals are mechanically recorded, commonly known under the trade name Dictabelt." @en                                  Create bf:Instance (or ld4all if LC not on board) subclass bf:Belt, with a subclass bf:AudioBelt.
                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                  Brings up question of if ‘film’ counts for only movingImagecontent, or can be captured audio or image on a film medium.

  [*rdact:1071*](http://rdaregistry.info/termList/RDACarrierType/1071)   [*"audio wire reel"*](http://rdaregistry.info/termList/RDACarrierType/1071) @en                         "A carrier type consisting of a reel or spool of steel or stainless steel wire upon which audio signals are magnetically recorded." @en                                                                          Create bf:Instance (or ld4all if LC not on board) subclass bf:Reel, with a subclass bf:AudioWireReel.
                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                  If more than audio sounds are found to be capture on wire, consider minting bib:Wire and making bib:AudioWireReel a subclass.
  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[***Media Types***](http://www.rdaregistry.info/termList/RDAMediaType/)
=======================================================================

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  RDA URI                                                              Label (@en)                                                                   RDA Definition                                                                                                                                                                        Proposed BIBFRAME Parallel
  -------------------------------------------------------------------- ----------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [*rdamt:1001*](http://rdaregistry.info/termList/RDAMediaType/1001)   [*"audio"*](http://rdaregistry.info/termList/RDAMediaType/1001) @en           "A media type used to store recorded sound, designed for use with a playback device such as a turntable, audiocassette player, CD player, or MP3 player." @en                         Captured at the bf:Work level. Needed players to playback the Item are captured elsewhere in BIBFRAME (systemRequirements and bf:Instance subclass definitions)

  [*rdamt:1002*](http://rdaregistry.info/termList/RDAMediaType/1002)   [*"microform"*](http://rdaregistry.info/termList/RDAMediaType/1002) @en       "A media type used to store reduced-size images not readable to the human eye, designed for use with a device such as a microfilm or microfiche reader." @en                          Request subclass of bf:Instance (bf:Microform with subclasses bf:Microfilm, bf:Microfiche, and possibly bf:Microopaque)

  [*rdamt:1003*](http://rdaregistry.info/termList/RDAMediaType/1003)   [*"computer"*](http://rdaregistry.info/termList/RDAMediaType/1003) @en        "A media type used to store electronic files, designed for use with a computer." @en                                                                                                  Captured at bf:Instance level through bf:Electronic.

  [*rdamt:1004*](http://rdaregistry.info/termList/RDAMediaType/1004)   [*"microscopic"*](http://rdaregistry.info/termList/RDAMediaType/1004) @en     "A media type used to store minute objects, designed for use with a device such as a microscope to reveal details invisible to the naked eye." @en                                    Request subclass of bf:Instance that is bf:Microscopic. Different from bf:Microform due to type of materials captured. Update Microscope slide request in carrier types.

  [*rdamt:1005*](http://rdaregistry.info/termList/RDAMediaType/1005)   [*"projected"*](http://rdaregistry.info/termList/RDAMediaType/1005) @en       "A media type used to store moving or still images, designed for use with a projection device such as a motion picture film projector, slide projector, or overhead projector." @en   Request creation of bf:Instance subclass of bf:Projected ; move appropriate Carrier types made into bf:Instance subclasses (see above) that intend use by projection to be subclasses of bf:Projected ; kick to AV folks for review and clarification.

  [*rdamt:1006*](http://rdaregistry.info/termList/RDAMediaType/1006)   [*"stereographic"*](http://rdaregistry.info/termList/RDAMediaType/1006) @en   "A media type used to store pairs of still images, designed for use with a device such as a stereoscope or stereograph viewer to give the effect of three dimensions." @en            Create a subclass of bf:Work of bf:Stereographic ; open to discussions with AV folks if this should be at bf:Instance level instead.

  [*rdamt:1007*](http://rdaregistry.info/termList/RDAMediaType/1007)   [*"unmediated"*](http://rdaregistry.info/termList/RDAMediaType/1007) @en      "A media type used to store content designed to be perceived directly through one or more of the human senses without the aid of an intermediating device." @en                       Future work: consider requesting bf:Unmediated as subclass of bf:Instance for the sake of knowing something doesn’t require one a projector or is not one of the above, relevant types. This field’s presence indicates active review of the resource for declaring no need of equipment instead of leaving open to interpretation that the item was just not fully cataloged (i.e. this field not present and dropped from use). Can we translate the OCLC Macro for generating 3XX fields (especially, for capturing this unmediated field where relevant) to native-RDF cataloging clients? Might encourage use and is an implementation question.
                                                                                                                                                                                                                                                                                                                                           
                                                                                                                                                     Status: "Deprecated"                                                                                                                                                                  

  [*rdamt:1008*](http://rdaregistry.info/termList/RDAMediaType/1008)   [*"video"*](http://rdaregistry.info/termList/RDAMediaType/1008) @en           "A media type used to store moving or still images, designed for use with a playback device such as a videocassette player or DVD player." @en                                        Request subclass of bf:Instance for bf:Video.
  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Side by Side Examples**
=========================

A book with a print and electronic instance

  -----------------------------------------------------------------------------------------------------------------------
  \# BIBFRAME2
  
  :w1 a bf:Text ;
  
  bf:content &lt;[*http://id.loc.gov/vocabulary/contentTypes/txt*](http://id.loc.gov/vocabulary/contentTypes/txt)&gt; ;
  
  bf:hasInstance :i1 , :i2 .
  
  :i1 a bf:Print ;
  
  bf:carrier &lt;[*http://id.loc.gov/vocabulary/carriers/nc*](http://id.loc.gov/vocabulary/carriers/nc)&gt;
  
  bf:media &lt;[*http://id.loc.gov/vocabulary/mediaTypes/n*](http://id.loc.gov/vocabulary/mediaTypes/n)&gt; .
  
  :i2 a bf:Electronic ;
  
  bf:carrier &lt;[*http://id.loc.gov/vocabulary/carriers/cz*](http://id.loc.gov/vocabulary/carriers/cz)&gt; ;
  
  bf:media &lt;[*http://id.loc.gov/vocabulary/mediaTypes/c*](http://id.loc.gov/vocabulary/mediaTypes/c)&gt; .
  
  \# “a” used as a property is an abbreviation convention for the property “rdf:type”.
  -----------------------------------------------------------------------------------------------------------------------

  --------------------------------------------
  \# bibliotek-o version 2
  
  :w1 a bf:Text ;
  
  bf:hasInstance :i1 : :i2.
  
  :i1 a bf:Print , bib:Volume .
  
  :i2 a bf:Electronic , bib:OnlineResource .
  --------------------------------------------

**Future Work**
===============

-   Consider a strategy for alignment of BIBFRAME and bibliotek-o
    > Classes with existing skos:Concepts and existing external classes.

-   Consider a strategy for minted more specific (more useful) Instance
    > subclasses, that make it clear the type of resource and any
    > playback requirements.

-   This discussion paper focuses on IS-a patterns (types of things).
    > For related HAS-a patterns (characteristics of things, not things
    > themselves) there are currently a number of “characteristic”
    > properties (bf:digitalCharacteristic, bf:soundCharacteristic,
    > bf:videoCharacteristic, bf:grooveCharacteristic,
    > bf:projectionCharacteristic).

<!-- -->

-   []{#_tyjcwt .anchor}Investigate whether a general hasCharacteristic
    > property would be preferable for things like bf:FileSize,
    > bf:EncodedBitrate, or reuse existing (seemingly only) datatype
    > properties from other ontologies?

-   Some bf:DigitalCharacteristic subclasses (bf:EncodingFormat,
    > bf:FileType, maybe others) might be considered types of
    > bf:Work/bf:Instance/bf:Item. Review with related extension groups
    > to decide their treatment. Are some of these formats IS-a
    > relationships, or HAS-a relationships?

<!-- -->

-   Not specific to Content/Carrier/Media necessarily, but engage with
    > LOC on how they publish their linked data (sometimes using the
    > same URI for both the webpage and the thing, often/always
    > describing the entity differently depending on the format chosen)

[^1]: Using OWL with SKOS,
    [*https://www.w3.org/2006/07/SWD/SKOS/skos-and-owl/master.html*](https://www.w3.org/2006/07/SWD/SKOS/skos-and-owl/master.html)
