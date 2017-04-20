[]{#_30j0zll .anchor}NOTE: the following represents the direction taken
by the LD4L Labs and LD4P Ontology Group in the development of
bibliotek-o and may not be fully formed. This pattern document was used
internally to define a direction and is shared with the intention of
contextualizing a pattern found within the ontology; terms specified
below may not fully align to the ontology as published. Further,
discussion of BIBFRAME 2.0 may be out-of-date.

2016 December

This paper reviews the use of notes in BIBFRAME 2.0, including general
notes, informal notes, and notes with a noteType expressed or implied.
For many of the note properties, the adoption of the Web Annotation
Model is recommended. A note in the cataloging context can be
interpreted as a cataloger-asserted statement about the resource being
cataloged, or an existing statement about the resource whose external
source is being asserted. A resource does not itself have a summary, but
a cataloger or publisher asserts one. Furthermore, the Web Annotation
model is an appropriate framework to support use cases, such as those
involving rare materials, in which institution-specific notes are
needed. By using this model in all cases, we avoid creating multiple,
arbitrary patterns for different types of notes or different types of
materials, and avoid closing off options that may become useful in a
linked open data environment.

We view this an experiment to be evaluated through application in
production.

Pattern Overview
================

-   The majority of informal note properties have been addressed by
    > related recommendations, see [*Object versus DataType
    > Properties*](https://docs.google.com/document/d/1Lp9Od8x1XZDvmBkNE2lK7bF_zOsaOL77zgITodV5GM0/edit?usp=sharing),
    > [*Content
    > Accessibility*](https://docs.google.com/document/d/1VjcGbF3E4xrM_PI5mAR6LFDTlaWmR4llGZDSDYQ7MYU/edit?usp=sharing)
    > and
    > [*Activities*](https://docs.google.com/document/d/1-UWiCw50Q9s3vAU3FWZcyomRnPe_lp6ZTW868fjpMCQ/edit?usp=sharing).

-   Use Web Annotation Model for: bf:credits, bf:custodialHistory,
    > bf:historyOfWork, bf:natureOfContent, bf:preferredCitation,
    > bf:summary, bf:review, bf:systemRequirements, and
    > bf:tableOfContents.

    -   For properties that we prefer to describe as Activities, such as
        > bf:credits or bf:custodialHistory, we understand that a
        > human-readable note may still have a place in aiding the
        > user’s understanding, and that legacy data may not be easy to
        > parse into discrete Activities.

-   Use existing OA named individuals to describe motivation when
    > possible.

<!-- -->

-   Mint additional high level motivations, as narrower terms under
    > oa:describing, oa:assessing or oa:linking, as appropriate.

> oa:describing

-   bib:summarizing

-   bib:listing

-   ld4:specifying

> oa:assessing
>
> bib:reviewing
>
> oa:linking

-   bib:linkingTableOfContents

<!-- -->

-   Mint additional named individuals for more specific motivations, as
    > narrower terms under bib:summarizing, ld4:specifying, bib:listing
    > or bib:reviewing, as appropriate. As stated above, this is
    > considered to be an experimental approach; therefore no plans have
    > been put in place to maintain these specific terms.

ld4:specifying\
bib:specifyingPreferredCitation\
bib:specifyingCustodialHistory\
bib:specifyingHistoryOfWork\
bib:specifyingNatureOfContent\
bib:specifyingSystemRequirements\
bib:specifyingContents

bib:listing\
bib:listingCredits

-   Create a new object property, bib:isTargetOf, inverse of
    > oa:hasTarget, to link from an annotated resource to an
    > oa:Annotation.

Areas for Future Work
---------------------

-   There are many more motivations for notes in resource descriptions
    > than represented by the informal note properties listed below.
    > [*MARC 21 Bibliographic Data,
    > 5xx*](https://www.loc.gov/marc/bibliographic/bd5xx.html) , the
    > [*MODS note
    > types*](http://www.loc.gov/standards/mods/mods-notes.html) list or
    > content standards such as [*DCRM(G), area
    > 7*](https://rbms.info/dcrm/dcrmg/) may be sources that can be used
    > to identify additional Named Individuals for oa:Motivation that
    > are frequently needed in day-to-day cataloging workflows.

-   The Web Annotations model allows for expression of much more detail
    > than is specified in this recommendation. We leave it to each
    > project to determine which properties to implement in support of
    > their specific use cases, so that their outcomes can inform future
    > recommendations.

Recommended Model
-----------------

Side by Side Examples of BIBFRAME 2.0 and bibliotek-o
-----------------------------------------------------

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **\# BIBFRAME2**
  
  \_:w1 a bf:Work ;
  
  bf:summary \_:s1 .
  
  \_:s1 a bf:Summary ;
  
  rdfs:label “This film consists of alternating black and white frames.--IMDb” .
  
  \_:w2 a bf:Work ;
  
  bf:hasInstance :inst1 ;
  
  bf:credits “Strips of film coated with glue and powdered metal were ‘electrocuted’ at the HFA’s Carpenter Center at a performance given by Tony Conrad April 7, 2008. The film was then processed before the audience’s very eyes, dried (with the help of a Harvard student and his hair drier), and given to HFA film conservator Liz Coffey to project from the middle of the theatre using two Eiki slot-load projector with sound.” .
  
  \_:inst1 a bf:Instance ;
  
  bf:hasItem \_:item1 .
  
  \_:item1 a bf:Item ;
  
  bf:note \_:n1 ;
  
  bf:custodialHistory “Donated to the Harvard Film Archive by Tony Conrad.” .
  
  \_:n1 a bf:Note ;
  
  bf:noteType “condition” ;
  
  rdf:label “Footage is approximately the height of Tony Conrad. Scratched during performance. One loop was damaged by sprockets during performance.” .
  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

+-----------------------------------------------------------------------+
| **\# bibliotek-o v.2**                                                |
|                                                                       |
| \_:w1 a bf:Work ;                                                     |
|                                                                       |
| bib:isTargetOf \_:s1 .                                                |
|                                                                       |
| \_:s1 a oa:Annotation ;                                               |
|                                                                       |
| oa:hasTarget \_:w1 ;                                                  |
|                                                                       |
| oa:motivatedBy bib:summarizing ;                                      |
|                                                                       |
| oa:hasBody \_:b1 ;                                                    |
|                                                                       |
| dcterms:creator                                                       |
| &lt;[*https://library.harvard.edu/hfa/ld4l*](https://library.harvard. |
| edu/hfa/ld4l)&gt;                                                     |
| .                                                                     |
|                                                                       |
| \_:b1 a oa:SpecificResource ;                                         |
|                                                                       |
| oa:hasSource &lt;http://www.imdb.com/title/tt0059182/plotsummary&gt;  |
| ;                                                                     |
|                                                                       |
| oa:hasSelector \[\                                                    |
| a oa:TextQuoteSelector ;\                                             |
| oa:exact "This film consists of alternating black and white frames."  |
| \]                                                                    |
|                                                                       |
| \_:w2 a bf:Work ;                                                     |
|                                                                       |
| bf:hasInstance :inst1 ;                                               |
|                                                                       |
| bib:isTargetOf \_:n1 .                                                |
|                                                                       |
| \_:n1 a oa:Annotation ;                                               |
|                                                                       |
| oa:hasTarget \_:w2 ;                                                  |
|                                                                       |
| oa:motivatedBy bib:listingCredits ;                                   |
|                                                                       |
| oa:hasBody \_:b2 ;                                                    |
|                                                                       |
| dcterms:creator                                                       |
| &lt;[*https://library.harvard.edu/hfa/ld4l*](https://library.harvard. |
| edu/hfa/ld4l)&gt;                                                     |
| .                                                                     |
|                                                                       |
| \_:b2 a oa:TextualBody ;                                              |
|                                                                       |
| rdf:value “Strips of film coated with glue and powdered metal were    |
| ‘electrocuted’ at the HFA’s Carpenter Center at a performance given   |
| by Tony Conrad April 7, 2008. The film was then processed before the  |
| audience’s very eyes, dried (with the help of a Harvard student and   |
| his hair drier), and given to HFA film conservator Liz Coffey to      |
| project from the middle of the theatre using two Eiki slot-load       |
| projector with sound.” .                                              |
|                                                                       |
| \_:inst1 a bf:Instance ;                                              |
|                                                                       |
| bf:hasItem \_:item1 .                                                 |
|                                                                       |
| \_:n2 a oa:Annotation ;                                               |
|                                                                       |
| oa:hasTarget \_:item1 ;                                               |
|                                                                       |
| oa:motivatedBy bib:specifyingCustodialHistory ;                       |
|                                                                       |
| oa:hasBody \_:b3 ;                                                    |
|                                                                       |
| dcterms:creator                                                       |
| &lt;[*https://library.harvard.edu/hfa/ld4l*](https://library.harvard. |
| edu/hfa/ld4l)&gt;                                                     |
| .                                                                     |
|                                                                       |
| \_:b3 a oa:TextualBody ;                                              |
|                                                                       |
| rdf:value “Donated to the Harvard Film Archive by Tony Conrad.” .     |
|                                                                       |
| \_:n3 a oa:Annotation ;                                               |
|                                                                       |
| oa:hasTarget \_:item1 ;                                               |
|                                                                       |
| oa:motivatedBy oa:describing ;                                        |
|                                                                       |
| oa:hasBody \_:b4 ;                                                    |
|                                                                       |
| dcterms:creator                                                       |
| &lt;[*https://library.harvard.edu/hfa/ld4l*](https://library.harvard. |
| edu/hfa/ld4l)&gt;                                                     |
| .                                                                     |
|                                                                       |
| \_:b4 a oa:TextualBody ;                                              |
|                                                                       |
| rdf:value “Footage is approximately the height of Tony Conrad.        |
| Scratched during performance. One loop was damaged by sprockets       |
| during performance.” .                                                |
+-----------------------------------------------------------------------+

[]{#_1fob9te .anchor}

Recommended classes and properties
----------------------------------

Some recommendations below have been copied from related documents;
please follow links for the most up-to-date details.

+-----------------------------------+-----------------------------------+
| BIBFRAME 2.0                      | bibliotek-o                       |
+===================================+===================================+
| Involved Classes                  |                                   |
+-----------------------------------+-----------------------------------+
| #### bf:Note                      | #### oa:Annotation                |
|                                   |                                   |
| **Label:** Note                   | **URI:**                          |
|                                   | [*http://www.w3.org/ns/oa\#Annota |
| **URI**:                          | tion*](http://www.w3.org/ns/oa#An |
| [*http://id.loc.gov/ontologies/bi | notation)                         |
| bframe/Note*](http://id.loc.gov/o |                                   |
| ntologies/bibframe/Note)          | **Required Predicates:**          |
|                                   | [*oa:hasTarget*](https://www.w3.o |
| **Definition:** Information,      | rg/TR/2016/CR-annotation-vocab-20 |
| usually in textual form, on       | 160906/#hastarget),               |
| attributes of a resource or some  | [*rdf:type*](https://www.w3.org/T |
| aspect of a resource.             | R/2016/CR-annotation-vocab-201609 |
|                                   | 06/#rdf-type)                     |
| **SubClass Of:**                  |                                   |
| [*http://www.w3.org/2000/01/rdf-s | **Recommended Predicates:**       |
| chema\#Resource*](http://www.w3.o | [*oa:hasBody*](https://www.w3.org |
| rg/2000/01/rdf-schema#Resource)   | /TR/2016/CR-annotation-vocab-2016 |
|                                   | 0906/#hasbody),                   |
| **Used with:**                    | [*oa:motivatedBy*](https://www.w3 |
| [*http://id.loc.gov/ontologies/bi | .org/TR/2016/CR-annotation-vocab- |
| bframe/note*](http://id.loc.gov/o | 20160906/#motivatedby),           |
| ntologies/bibframe/note)          | [*dcterms:creator*](https://www.w |
|                                   | 3.org/TR/2016/CR-annotation-vocab |
|                                   | -20160906/#dcterms-creator),      |
|                                   | [*dcterms:created*](https://www.w |
|                                   | 3.org/TR/2016/CR-annotation-vocab |
|                                   | -20160906/#dcterms-created)       |
|                                   |                                   |
|                                   | **Other Predicates:**             |
|                                   | [*oa:bodyValue*](https://www.w3.o |
|                                   | rg/TR/2016/CR-annotation-vocab-20 |
|                                   | 160906/#bodyvalue),               |
|                                   | [*oa:styledBy*](https://www.w3.or |
|                                   | g/TR/2016/CR-annotation-vocab-201 |
|                                   | 60906/#styledby),                 |
|                                   | [*dcterms:issued*](https://www.w3 |
|                                   | .org/TR/2016/CR-annotation-vocab- |
|                                   | 20160906/#dcterms-issued),        |
|                                   | [*as:generator*](https://www.w3.o |
|                                   | rg/TR/2016/CR-annotation-vocab-20 |
|                                   | 160906/#as-generator)             |
+-----------------------------------+-----------------------------------+
| #### bf:Summary                   | #### **bib:summarizing** **(Named |
|                                   |  Individual of oa:Motivation)**   |
| **Label:** Summary\               |                                   |
| **URI:**                          | #### oa:describing &gt; bib:summa |
| [*http://id.loc.gov/ontologies/bi | rizing                            |
| bframe/Summary*](http://id.loc.go |                                   |
| v/ontologies/bibframe/Summary)\   |                                   |
| **Definition:** Description of    |                                   |
| the content of a resource, such   |                                   |
| as an abstract, summary, etc..    |                                   |
|                                   |                                   |
| **SubClass Of:**                  |                                   |
| [*http://www.w3.org/2000/01/rdf-s |                                   |
| chema\#Resource*](http://www.w3.o |                                   |
| rg/2000/01/rdf-schema#Resource)\  |                                   |
| **Used with:**                    |                                   |
| [*http://id.loc.gov/ontologies/bi |                                   |
| bframe/summary*](http://id.loc.go |                                   |
| v/ontologies/bibframe/summary)    |                                   |
+-----------------------------------+-----------------------------------+
| #### bf:TableOfContents           | #### **bib:specifyingContents (Na |
|                                   | med Individual of oa:Motivation)* |
| **Label:** Table of contents\     | *                                 |
| **URI:**                          |                                   |
| [*http://id.loc.gov/ontologies/bi | #### oa:describing &gt; bib:speci |
| bframe/TableOfContents*](http://i | fying &gt; bib:specifyingContents |
| d.loc.gov/ontologies/bibframe/Tab |                                   |
| leOfContents)\                    | #### **bib:linkingTableOfContents |
| **Definition:** Table of contents |  (Named Individual of oa:Motivati |
| of a resource.                    | on)**                             |
|                                   |                                   |
| **SubClass Of:**                  | oa:linking &gt;                   |
| [*http://www.w3.org/2000/01/rdf-s | bib:linkingTableOfContents        |
| chema\#Resource*](http://www.w3.o |                                   |
| rg/2000/01/rdf-schema#Resource)\  |                                   |
| **Used with:**                    |                                   |
| [*http://id.loc.gov/ontologies/bi |                                   |
| bframe/tableOfContents*](http://i |                                   |
| d.loc.gov/ontologies/bibframe/tab |                                   |
| leOfContents)                     |                                   |
+-----------------------------------+-----------------------------------+
| #### bf:Review                    | #### **bib:reviewing** **(Named I |
|                                   | ndividual of oa:Motivation)**     |
| **Label**: Review\                |                                   |
| **URI**:                          | #### oa:assessing &gt; bib:review |
| [*http://id.loc.gov/ontologies/bi | ing                               |
| bframe/Review*](http://id.loc.gov |                                   |
| /ontologies/bibframe/Review)      |                                   |
|                                   |                                   |
| **Definition**: Review of a       |                                   |
| resource                          |                                   |
|                                   |                                   |
| **SubClass Of**:                  |                                   |
| [*http://www.w3.org/2000/01/rdf-s |                                   |
| chema\#Resource*](http://www.w3.o |                                   |
| rg/2000/01/rdf-schema#Resource)   |                                   |
|                                   |                                   |
| **Used with**: bf:review          |                                   |
+-----------------------------------+-----------------------------------+
|                                   | #### oa:Motivation                |
|                                   |                                   |
|                                   | **IRI:**                          |
|                                   | http://www.w3.org/ns/oa\#Motivati |
|                                   | on                                |
|                                   |                                   |
|                                   | **Sub Class Of:**                 |
|                                   | [*skos:Concept*](http://www.w3.or |
|                                   | g/2004/02/skos/core#Concept)      |
|                                   |                                   |
|                                   | **Range Of:**                     |
|                                   | [*oa:motivatedBy*](https://www.w3 |
|                                   | .org/TR/2016/CR-annotation-vocab- |
|                                   | 20160906/#motivatedby),           |
|                                   | [*oa:hasPurpose*](https://www.w3. |
|                                   | org/TR/2016/CR-annotation-vocab-2 |
|                                   | 0160906/#haspurpose)              |
+-----------------------------------+-----------------------------------+
|                                   | #### oa:TextualBody\              |
|                                   |                                   |
|                                   | **IRI:**                          |
|                                   | [*http://www.w3.org/ns/oa\#Textua |
|                                   | lBody*](http://www.w3.org/ns/oa#T |
|                                   | extualBody)                       |
|                                   |                                   |
|                                   | **Equivalent Classes:**           |
|                                   | [*as:Note*](http://www.w3.org/ns/ |
|                                   | activitystreams#Note)             |
|                                   |                                   |
|                                   | **Required Predicates:**          |
|                                   | [*rdf:value*](https://www.w3.org/ |
|                                   | TR/2016/CR-annotation-vocab-20160 |
|                                   | 906/#rdf-value)                   |
|                                   |                                   |
|                                   | **Recommended Predicates:**       |
|                                   | [*dc:format*](https://www.w3.org/ |
|                                   | TR/2016/CR-annotation-vocab-20160 |
|                                   | 906/#dc-format),                  |
|                                   | [*dc:language*](https://www.w3.or |
|                                   | g/TR/2016/CR-annotation-vocab-201 |
|                                   | 60906/#dc-language),              |
|                                   | [*rdf:type*](https://www.w3.org/T |
|                                   | R/2016/CR-annotation-vocab-201609 |
|                                   | 06/#rdf-type)                     |
+-----------------------------------+-----------------------------------+
| Involved Properties               |                                   |
+-----------------------------------+-----------------------------------+
| #### bf:note                      | #### bib:isTargetOf               |
|                                   |                                   |
| **Label:** Note\                  | **Definition:** The relationship  |
| **URI:**                          | between a Target and an           |
| [*http://id.loc.gov/ontologies/bi | Annotation                        |
| bframe/note*](http://id.loc.gov/o |                                   |
| ntologies/bibframe/note)\         | #### oa:hasTarget                 |
| **Definition:** General textual   |                                   |
| information relating to a         | **IRI:**                          |
| resource, such as Information     | [*http://www.w3.org/ns/oa\#hasTar |
| about a specific copy of a        | get*](http://www.w3.org/ns/oa#has |
| resource or information about a   | Target)                           |
| particular attribute of a         |                                   |
| resource.\                        | **Definition:** The relationship  |
| **Comment:** Used with            | between an Annotation and its     |
| Unspecified                       | Target.\                          |
|                                   | **Domain:** oa:Annotation         |
| **Range:**                        |                                   |
| http://id.loc.gov/ontologies/bibf |                                   |
| rame/Note                         |                                   |
+-----------------------------------+-----------------------------------+
| #### bf:noteType\                 |                                   |
|                                   |                                   |
| **Label:** Note type\             |                                   |
| **URI:**                          |                                   |
| [*http://id.loc.gov/ontologies/bi |                                   |
| bframe/noteType*](http://id.loc.g |                                   |
| ov/ontologies/bibframe/noteType)  |                                   |
|                                   |                                   |
| **Definition:** Type of note\     |                                   |
| **Used with:**                    |                                   |
| [*http://id.loc.gov/ontologies/bi |                                   |
| bframe/Note*](http://id.loc.gov/o |                                   |
| ntologies/bibframe/Note)          |                                   |
|                                   |                                   |
| **Range:** Literal                |                                   |
+-----------------------------------+-----------------------------------+
|                                   | #### oa:motivatedBy               |
|                                   |                                   |
|                                   | **IRI**:                          |
|                                   | [*http://www.w3.org/ns/oa\#motiva |
|                                   | tedBy*](http://www.w3.org/ns/oa#m |
|                                   | otivatedBy)                       |
|                                   |                                   |
|                                   | **Definition**: The relationship  |
|                                   | between an Annotation and a       |
|                                   | Motivation that describes the     |
|                                   | reason for the Annotation's       |
|                                   | creation.\                        |
|                                   | **Domain:**                       |
|                                   | [*oa:Annotation*](https://www.w3. |
|                                   | org/TR/2016/CR-annotation-vocab-2 |
|                                   | 0160906/#annotation)              |
|                                   |                                   |
|                                   | **Range:**                        |
|                                   | [*oa:Motivation*](https://www.w3. |
|                                   | org/TR/2016/CR-annotation-vocab-2 |
|                                   | 0160906/#motivation)              |
+-----------------------------------+-----------------------------------+
|                                   | #### oa:hasBody                   |
|                                   |                                   |
|                                   | **IRI:**                          |
|                                   | [*http://www.w3.org/ns/oa\#hasBod |
|                                   | y*](http://www.w3.org/ns/oa#hasBo |
|                                   | dy)                               |
|                                   |                                   |
|                                   | **Definition**: The object of the |
|                                   | relationship is a resource that   |
|                                   | is a body of the Annotation.      |
|                                   |                                   |
|                                   | **Domain**: oa:Annotation         |
+-----------------------------------+-----------------------------------+
| #### bf:contentAccessibility\     | See: Content Accessibility        |
|                                   | discussion paper                  |
| **Label:** Content accessibility  |                                   |
| note\                             |                                   |
| **URI:**                          |                                   |
| [*http://id.loc.gov/ontologies/bi |                                   |
| bframe/contentAccessibility*](htt |                                   |
| p://id.loc.gov/ontologies/bibfram |                                   |
| e/contentAccessibility)\          |                                   |
| **Definition:** Information that  |                                   |
| assists those with a sensory      |                                   |
| impairment for greater            |                                   |
| understanding of content, e.g.,   |                                   |
| captions.\                        |                                   |
| **Comment:** Used with Work or    |                                   |
| Instance\                         |                                   |
| **Range:** Literal                |                                   |
+-----------------------------------+-----------------------------------+
| #### bf:credits                   | ### bib:listingCredits (Named Ind |
|                                   | ividual of oa:Motivation)         |
| **Informal note property**        |                                   |
|                                   | oa:describing &gt; bib:listing    |
| **Label:** Credits note\          | &gt; bib:listingCredits           |
| **URI:**                          |                                   |
| [*http://id.loc.gov/ontologies/bi | **Definition**: The motivation    |
| bframe/credits*](http://id.loc.go | for when the user needs to record |
| v/ontologies/bibframe/credits)\   | information about one or multiple |
| **Definition:** Information in    | agents and their roles in the     |
| note form of credits for persons  | creation and/or production of the |
| or organizations who have         | resource in one literal instead   |
| participated in the creation      | of parsing it out into discrete   |
| and/or production of the          | classes and properties.           |
| resource.\                        |                                   |
| **Comment:** Used with Work or    |                                   |
| Instance.                         |                                   |
|                                   |                                   |
| **Range:** Literal                |                                   |
+-----------------------------------+-----------------------------------+
| #### bf:awards\                   | See recommendation in [*Object    |
| \                                 | versus DataType                   |
| **Informal note property**        | Properties*](https://docs.google. |
|                                   | com/document/d/1Lp9Od8x1XZDvmBkNE |
| **Label:** Award note             | 2lK7bF_zOsaOL77zgITodV5GM0/edit?u |
|                                   | sp=sharing)                       |
| **URI:**                          | document.                         |
| [*http://id.loc.gov/ontologies/bi |                                   |
| bframe/awards*](http://id.loc.gov | notes from the ontology call on   |
| /ontologies/bibframe/awards)\     | 2/28:                             |
| **Definition**: Information on    |                                   |
| awards associated with the        | *Conclusion*: postpone for future |
| described resource.\              | work, use bf:awards, request      |
| **Comment:** Used with Work or    | changes to bf:grantingInstitution |
| Instance\                         | from LC                           |
| **Range:** Literal                |                                   |
+-----------------------------------+-----------------------------------+
| #### bf:natureOfContent\          | ### bib:specifyingNatureOfContent |
|                                   |  (Named Individual of oa:Motivati |
| **Informal note property**        | on)                               |
|                                   |                                   |
| **Label:** Content nature\        | oa:describing &gt; bib:specifying |
| **URI:**                          | &gt;                              |
| [*http://id.loc.gov/ontologies/bi | bib:specifyingNatureOfContent     |
| bframe/natureOfContent*](http://i |                                   |
| d.loc.gov/ontologies/bibframe/nat | **Definition:** The motivation    |
| ureOfContent)\                    | for when the user needs to        |
| **Definition:** Characterization  | characterize the primary content  |
| that epitomizes the primary       | of the resource.                  |
| content of a resource, e.g.,      |                                   |
| field recording of birdsong;      |                                   |
| combined time series analysis and |                                   |
| graph plotting system.\           |                                   |
| **Comment:** Used with Work or    |                                   |
| Instance\                         |                                   |
| **Range:** Literal                |                                   |
+-----------------------------------+-----------------------------------+
| #### bf:editionEnumeration\       | See recommendation in Object      |
| \                                 | versus dataType Property document |
| **Informal note property**        |                                   |
|                                   |                                   |
| **Label:** Edition enumeration\   |                                   |
| **URI:**                          |                                   |
| [*http://id.loc.gov/ontologies/bi |                                   |
| bframe/editionEnumeration*](http: |                                   |
| //id.loc.gov/ontologies/bibframe/ |                                   |
| editionEnumeration)\              |                                   |
| **Definition:** Enumeration of    |                                   |
| the edition; usually              |                                   |
| transcribed.\                     |                                   |
| **Domain:** Instance\             |                                   |
| **Range:** Literal                |                                   |
+-----------------------------------+-----------------------------------+
| #### bf:editionStatement          | See recommendation in Object      |
|                                   | versus dataType Property document |
| **Informal note property**\       |                                   |
| **Label:** Edition statement\     |                                   |
| **URI**:                          |                                   |
| [*http://id.loc.gov/ontologies/bi |                                   |
| bframe/editionStatement*](http:// |                                   |
| id.loc.gov/ontologies/bibframe/ed |                                   |
| itionStatement)\                  |                                   |
| **Definition:** Information       |                                   |
| identifying the edition or        |                                   |
| version of the resource and       |                                   |
| associated statements of          |                                   |
| responsibility for the edition;   |                                   |
| usually transcribed.\             |                                   |
| **Domain:** Instance\             |                                   |
| **Range:** Literal                |                                   |
+-----------------------------------+-----------------------------------+
| #### bf:historyOfWork             | ### bib:specifyingHistoryOfWork ( |
|                                   | Named Individual of oa:Motivation |
| **Informal note property**        | )                                 |
|                                   |                                   |
| **Label**: History of the work\   | oa:describing &gt; bib:specifying |
| **URI:**                          | &gt; bib:specifyingHistoryOfWork  |
| [*http://id.loc.gov/ontologies/bi |                                   |
| bframe/historyOfWork*](http://id. | **Definition**: The motivation    |
| loc.gov/ontologies/bibframe/histo | for when the user needs to record |
| ryOfWork)\                        | information about the history of  |
| **Definition:** Information about | a work.                           |
| the history of a Work.\           |                                   |
| **Domain**: Work\                 |                                   |
| **Range:** Literal                |                                   |
+-----------------------------------+-----------------------------------+
| #### bf:preferredCitation         | ### bib:specifyingPreferredCitati |
|                                   | on (Named Individual of oa:Motiva |
| **Informal note property**        | tion)                             |
|                                   |                                   |
| **Label:** Preferred citation\    | oa:describing &gt; bib:specifying |
| **URI:**                          | &gt;                              |
| [*http://id.loc.gov/ontologies/bi | bib:specifyingPreferredCitation   |
| bframe/preferredCitation*](http:/ |                                   |
| /id.loc.gov/ontologies/bibframe/p | **Definition:** The motivation    |
| referredCitation)                 | for when the user wants to        |
|                                   | specify a preferred citation for  |
| **Definition:** Citation to the   | a resource.                       |
| resource preferred by its         |                                   |
| custodian of the resource.        |                                   |
|                                   |                                   |
| **rdfs:comment**: Used with Work  |                                   |
| or Instance                       |                                   |
|                                   |                                   |
| **Range**: Literal                |                                   |
+-----------------------------------+-----------------------------------+
| #### bf:provisionActivityStatemen | See recommendation in Activities  |
| t                                 | document                          |
|                                   |                                   |
| **Informal note property**        |                                   |
|                                   |                                   |
| **Label:** Provider statement\    |                                   |
| **URI:**                          |                                   |
| [*http://id.loc.gov/ontologies/bi |                                   |
| bframe/provisionActivityStatement |                                   |
| *](http://id.loc.gov/ontologies/b |                                   |
| ibframe/provisionActivityStatemen |                                   |
| t)\                               |                                   |
| **Definition:** Statement         |                                   |
| relating to providers of a        |                                   |
| resource; usually transcribed.\   |                                   |
| **Domain:** Instance\             |                                   |
| **Range:** Literal                |                                   |
+-----------------------------------+-----------------------------------+
| #### bf:responsibilityStatement   | See recommendation in Object      |
|                                   | versus dataType Property document |
| **Informal note property**\       |                                   |
| **Label:** Creative               |                                   |
| responsibility statement\         |                                   |
| **URI:**                          |                                   |
| [*http://id.loc.gov/ontologies/bi |                                   |
| bframe/responsibilityStatement*]( |                                   |
| http://id.loc.gov/ontologies/bibf |                                   |
| rame/responsibilityStatement)\    |                                   |
| **Definition:** Statement         |                                   |
| relating to any persons,          |                                   |
| families, or corporate bodies     |                                   |
| responsible for the creation of,  |                                   |
| or contributing to the content of |                                   |
| a resource; usually transcribed.\ |                                   |
| **Domain:** Instance\             |                                   |
| **Range:** Literal                |                                   |
+-----------------------------------+-----------------------------------+
| #### bf:review                    | #### **bib:reviewing** **(Named I |
|                                   | ndividual of oa:Motivation)**     |
| **Label:** Review content\        |                                   |
| **URI**:                          | ####                              |
| [*http://id.loc.gov/ontologies/bi |                                   |
| bframe/review*](http://id.loc.gov | oa:assessing &gt; bib:reviewing   |
| /ontologies/bibframe/review)      |                                   |
|                                   |                                   |
| **Definition**: Review of a       |                                   |
| resource                          |                                   |
|                                   |                                   |
| **Comment**: Used with Work or    |                                   |
| Instance                          |                                   |
|                                   |                                   |
| **Range**: Review                 |                                   |
+-----------------------------------+-----------------------------------+
| #### bf:seriesEnumeration         | See recommendation in Object      |
|                                   | versus dataType Property document |
| **Informal note property**\       |                                   |
| **Label:** Series enumeration\    |                                   |
| **URI:**                          |                                   |
| [*http://id.loc.gov/ontologies/bi |                                   |
| bframe/seriesEnumeration*](http:/ |                                   |
| /id.loc.gov/ontologies/bibframe/s |                                   |
| eriesEnumeration)\                |                                   |
| **Definition:** Series            |                                   |
| enumeration of the resource;      |                                   |
| usually transcribed.\             |                                   |
| **Domain:** Instance\             |                                   |
| **Range:** Literal                |                                   |
+-----------------------------------+-----------------------------------+
| #### bf:seriesStatement           | See recommendation in Object      |
|                                   | versus dataType Property document |
| **Informal note property**        |                                   |
|                                   |                                   |
| **Label:** Series statement\      |                                   |
| **URI:**                          |                                   |
| [*http://id.loc.gov/ontologies/bi |                                   |
| bframe/seriesStatement*](http://i |                                   |
| d.loc.gov/ontologies/bibframe/ser |                                   |
| iesStatement)\                    |                                   |
| **Definition:** Statement of the  |                                   |
| series the resource is in;        |                                   |
| usually transcribed; includes the |                                   |
| ISSN if applicable.\              |                                   |
| **Domain:** Instance\             |                                   |
| **Range:** Literal                |                                   |
+-----------------------------------+-----------------------------------+
| #### bf:subseriesEnumeration      | See recommendation in Object      |
|                                   | versus dataType Property document |
| **Informal note property**\       |                                   |
| **Label:** Series statement\      |                                   |
| **URI:**                          |                                   |
| [*http://id.loc.gov/ontologies/bi |                                   |
| bframe/seriesStatement*](http://i |                                   |
| d.loc.gov/ontologies/bibframe/ser |                                   |
| iesStatement)\                    |                                   |
| **Definition:** Statement of the  |                                   |
| series the resource is in;        |                                   |
| usually transcribed; includes the |                                   |
| ISSN if applicable.\              |                                   |
| **Domain:** Instance\             |                                   |
| **Range:** Literal                |                                   |
+-----------------------------------+-----------------------------------+
| #### bf:subseriesStatement        | See recommendation in Object      |
|                                   | versus dataType Property document |
| **Informal note property**\       |                                   |
| **Label:** Subseries statement\   |                                   |
| **URI:**                          |                                   |
| [*http://id.loc.gov/ontologies/bi |                                   |
| bframe/subseriesStatement*](http: |                                   |
| //id.loc.gov/ontologies/bibframe/ |                                   |
| subseriesStatement)\              |                                   |
| **Definition:** Statement of the  |                                   |
| subseries the resource is in;     |                                   |
| usually transcribed; includes the |                                   |
| ISSN if applicable.\              |                                   |
| **Domain:** Instance\             |                                   |
| **Range:** Literal                |                                   |
+-----------------------------------+-----------------------------------+
| #### bf:summary                   | ### bib:summarizing (Named Indivi |
|                                   | dual of oa:Motivation)            |
| **Informal note property**\       |                                   |
| **Label:** Summary content\       | oa:describing &gt;                |
| **URI:**                          | bib:summarizing                   |
| [*http://id.loc.gov/ontologies/bi |                                   |
| bframe/summary*](http://id.loc.go | **Definition:** The motivation    |
| v/ontologies/bibframe/summary)\   | for when the user needs to add a  |
| **Definition:** Summary or        | summary or abstract to the        |
| abstract of the resource          | resource being described.         |
| described.\                       |                                   |
| **Domain:** Work or Instance\     |                                   |
| **Range:** Literal                |                                   |
+-----------------------------------+-----------------------------------+
| #### bf:systemRequirements        | ### bib:specifyingSystemRequireme |
|                                   | nts (Named Individual of oa:Motiv |
| **Informal note property**\       | ation)                            |
| **Label:** Equipment or system    |                                   |
| requirements\                     | oa:describing &gt; bib:specifying |
| **URI:**                          | &gt;                              |
| [*http://id.loc.gov/ontologies/bi | bib:specifyingSystemRequirements  |
| bframe/systemRequirements*](http: |                                   |
| //id.loc.gov/ontologies/bibframe/ | **Definition:** The motivation    |
| systemRequirements)\              | for when the user needs to record |
| **Definition:** Equipment or      | any equipment or system           |
| system requirements beyond what   | requirements beyond what is       |
| is normal and obvious for the     | normal and obvious for the type   |
| type of carrier or type of file,  | of carrier or type of file.       |
| such as make and model of         |                                   |
| equipment or hardware, operating  |                                   |
| system, amount of memory,         |                                   |
| programming language, other       |                                   |
| necessary software, any plug-ins  |                                   |
| or peripherals required to play,  |                                   |
| view, or run the resource, etc.   |                                   |
|                                   |                                   |
| **Domain:** Instance\             |                                   |
| **Range:** Literal                |                                   |
+-----------------------------------+-----------------------------------+
| #### bf:tableOfContents           | #### **bib:specifyingContents (Na |
|                                   | med Individual of oa:Motivation)* |
| **Informal note property**\       | *                                 |
| **Label:** Table of contents      |                                   |
| content\                          | #### oa:describing &gt; bib:speci |
| **URI:**                          | fying &gt; bib:specifyingContents |
| [*http://id.loc.gov/ontologies/bi |                                   |
| bframe/tableOfContents*](http://i | #### **bib:linkingTableOfContents |
| d.loc.gov/ontologies/bibframe/tab |  (Named Individual of oa:Motivati |
| leOfContents)\                    | on)**                             |
| **Definition:** Table of contents |                                   |
| of the described resource.        | oa:linking &gt;                   |
|                                   | bib:linkingTableOfContents        |
| **Domain:** Work or Instance\     |                                   |
| **Range:** bf:TableOfContents     |                                   |
+-----------------------------------+-----------------------------------+
| #### bf:custodialHistory          | **bib:specifyingCustodialHistory  |
|                                   | (Named Individual of              |
| **Informal note property**        | oa:Motivation)**                  |
|                                   |                                   |
| **Label:** Custodial history      | oa:describing &gt; bib:specifying |
|                                   | &gt;                              |
| **URI:**                          | bib:specifyingCustodialHistory    |
| [*http://id.loc.gov/ontologies/bi |                                   |
| bframe/custodialHistory*](http:// | **Definition:** The motivation    |
| id.loc.gov/ontologies/bibframe/cu | for when the user needs to record |
| stodialHistory)                   | information about the history of  |
|                                   | the resource being described in   |
| **Definition:** Information about | one literal.                      |
| the provenance, such as origin,   |                                   |
| ownership and custodial history   |                                   |
| (chain of custody), of a          |                                   |
| resource.                         |                                   |
|                                   |                                   |
| **Comment:** Used with Work,      |                                   |
| Instance or Item\                 |                                   |
| **Range:** Literal                |                                   |
+-----------------------------------+-----------------------------------+

BF2 Approach to Notes
=====================

For an in-depth explanation on use of notes in BIBFRAME 2.0 see the
[*BIBFRAME 2.0 Specifications,
Notes*](https://docs.google.com/document/d/1QrK6khdqxIWtinY0yQ8_1VEd_O18C9IbvML2UAQILIA/edit?usp=sharing).

Notes can be expressed in five different ways in BF 2.0: Informal notes,
a plain note with no type expressed; a note with type implied (a bf:note
used in conjunction with another property which provides context); as a
note with a noteType expressed as a literal and as a note with a type
expressed by an external class. BIBFRAME 2.0 does not internally define
any note types.

LD4L-O v.1 Approach to Notes
============================

LD4L-O v.1 defines broad range of note properties, all of them
subproperties of [*ld4l:note*](http://bib.ld4l.org/ontology.html#note),
with a range of literal, as well as other datatype properties that cover
textual information similar to BF2 notes, such as ld4l:custodialHistory
and ld4l:accessibilityFeature. It does not define any classes for notes.

LD4L-O v.1 also includes classes and properties from the Web Annotation
Model. It also includes an inverse for oa:hasTarget, ld4l:hasAnnotation.
