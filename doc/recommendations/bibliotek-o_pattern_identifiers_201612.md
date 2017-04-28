[]{#_gjdgxs .anchor}NOTE: the following represents the direction taken
by the LD4L Labs and LD4P Ontology Group in the development of
bibliotek-o and may not be fully formed. This pattern document was used
internally to define a direction and is shared with the intention of
contextualizing a pattern found within the ontology; terms specified
below may not fully align to the ontology as published. Further,
discussion of BIBFRAME 2.0 may be out-of-date.

2016 December

Open Questions for LC
=====================

No remaining open questions.

Requests for Modifications to BF2
=================================

Open Requests
-------------

No remaining open requests.
---------------------------

Resolved requests
-----------------

### Approved

LC has agreed to the following requests:

-   Resource-to-identifier relationships

    -   Define object property bf:identifies as inverse of
        > bf:identifiedBy.

    -   Eliminate bf:barcode and use bf:identifiedBy with a bf:Barcode
        > object.

-   Define the following new Identifier types with the definitions
    > shown:

    -   bf:AudioTake: Identifier assigned to the smallest identifiable
        > unit of a recording session, e.g., a specific recording of an
        > individual song.

    -   bf:Gtin14Number: 14-digit number assigned to identify trade
        > items at various packaging levels.

    -   bf:MusicAvDistributorIdentifier: Identifier appearing on a
        > resource assigned by a distributor to a specific audio
        > recording, publication of notated music, other music-related
        > resource, or video recording.

    -   bf:VideoGamePlatformIdentifier: Identifier assigned to a video
        > game platform, e.g., CUSA 54321 (a PlayStation 4 number).

-   Modify the definitions of the following Identifier types as shown:

    -   bf:MusicPlate: Identifer assigned by a music publisher or
        > printer to to the printing plates for the notated portion of a
        > notated music publication, or an identifier that emulates the
        > printing plate tradition in contemporary publications.

    -   bf:MusicPublisherNumber: Identifier assigned to a notated music
        > publication other than an issue, matrix, or plate number.

    -   bf:MatrixNumber: Matrix identifier assigned to the master from
        > which a specific sound recording was pressed.

    -   bf:IssueNumber: Identifier assigned by a publisher of an audio
        > recording to identify the issue designation or serial
        > identification.

-   Name change:

    -   Change bf:IssueNumber to bf:AudioIssueNumber.

    -   Change bf:VideorecordingNumber to bf:VideoRecordingNumber.

### Rejected

LC has not agreed to the following requests. LD4L will take the
specified action.

-   Identifier status

    -   Define owl:NamedIndividuals (i.e., a controlled vocabulary) of
        > type bf:Status within the id.loc.gov namespace.

        -   Full set of individuals TBD, but should include:

            -   current

            -   deprecated

            -   invalid

            -   cancelled (02X \$z)

    -   LC has declined to define these individuals in the id.loc.gov
        > namespace. BIBLIOTEK-O will define these NamedIndividuals in
        > its namespace. This allows for the use of other individuals
        > with an rdf:value rather than one of the NamedIndividuals.

-   Identifier source

    -   Remove the specified range of bf:source (bf:Source) so that any
        > resource may serve as its object. (Also requested in the
        > [*Titles
        > recommendation*](https://docs.google.com/document/d/1Zj4NJKqv38KmVMQzcu2PAn0KbZM8nSFfrNwAU2IYry8/)).

    -   LD4L will define bib:hasSource and bib:isSourceOf, domain and
        > range unspecified.

-   Resource-to-identifier relationships

    -   Eliminate bf:shelfMark and use bf:identifiedBy with a
        > bf:ShelfMark (or subclass) object. (Request not yet made.)

Recommended for Review by Other Groups
======================================

The following identifiers are recommended for review by LD4P Ontology
Extension groups.

-   Performed Music Ontology Extension

    -   bf:Ismn

    -   [bf:IssueNumber](#_4i7ojhp)

    -   [bf:Iswc](#_2xcytpi)

    -   [bf:MatrixNumber](#_1ci93xb)

    -   [bf:MusicPlate](#_3whwml4)

    -   [bf:MusicPublisherNumber](#_2bn6wsx)

-   RareMat Ontology Extension

    -   [bf:Fingerprint](#_qsh70q)

    -   [Canonical bibliographies](#z337ya)

-   MovingImage Extension

    -   [bf:VideorecordingNumber](#_3as4poj)

The following identifiers are recommended for review by the Serials
community:

-   [bf:Issn](#_1pxezwc)

-   [bf:IssnL](#_49x2ik5)

-   [bf:Sici](#_2p2csry)

BF2 Identifier Model
====================

See details in the [*LC BF2 Identifiers
Specification*](https://www.loc.gov/bibframe/docs/pdf/bf2-identifiers-apr2016.pdf).

##### Diagram 1. Identifier in BF2 namespace

##### Diagram 2. Identifier in external namespace

##### Diagram 3. Identifier with source 

BF2 Resource-to-Identifier Relationships
----------------------------------------

#### bf:barcode (object property)

**Label**: Barcode

**URI**:
[*http://id.loc.gov/ontologies/bibframe/barcode*](http://id.loc.gov/ontologies/bibframe/barcode)

**Definition**: Optical machine-readable representation of data relating
to the item, to which it is attached.

**Domain:** bf:Item

**Range**: bf:Barcode (subclass of bf:Identifier)

#### bf:identifiedBy (object property)

**Label**: Identifier

**URI**:
[*http://id.loc.gov/ontologies/bibframe/identifiedBy*](http://id.loc.gov/ontologies/bibframe/identifiedBy)

**Definition**: Character string associated with a resource that serves
to differentiate that resource from other resources, i.e., that uniquely
identifies an entity.

**Comment**: Used with Unspecified

**Domain:** unspecified

**Range**: bf:Identifier

#### bf:shelfMark (object property)

**Label**: Shelf mark

**URI**:
[*http://id.loc.gov/ontologies/bibframe/shelfMark*](http://id.loc.gov/ontologies/bibframe/shelfMark)

**Definition**: Piece identifier, such as a call or other type of
number.

**Domain:** bf:Item

**Range**: bf:ShelfMark (subclass of bf:Identifier)

BF2 Identifier Class Hierarchy
------------------------------

#### bf:Identifier

**Label**: Identifier

**URI**:
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

**Definition**: "Token or name that is associated with a resource, such
as a URI or an ISBN." .

**Subclass of:** rdfs:Resource

### Subclasses of bf:Identifier

#### bf:Ansi

**Label**: ANSI number

**URI**:
[*http://id.loc.gov/ontologies/bibframe/Ansi*](http://id.loc.gov/ontologies/bibframe/Ansi)

**Definition**: American National Standards Institute identifier.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  --------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Ansi ;
  
  rdf:value "ANSI\_ID"\] .
  --------------------------

#### bf:Barcode

**Label**: Barcode

**URI**:
[*http://id.loc.gov/ontologies/bibframe/Barcode*](http://id.loc.gov/ontologies/bibframe/Barcode)

**Definition**: Optical machine-readable representation of data relating
to the item to which it is attached.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  ------------------------------------------------------------------------
  :inst1 a bf:Instance ;
  
  bf:hasItem :item1 ;
  
  :item1 a bf:Item ;
  
  \# LC has agreed to remove bf:barcode and use bf:identifiedBy instead.
  
  bf:barcode
  
  \[ a bf:Barcode ;
  
  rdf:value “0 360029145 2” .
  
  \] .
  ------------------------------------------------------------------------

#### bf:Coden

**Label**: CODEN

**URI**:
[*http://id.loc.gov/ontologies/bibframe/Coden*](http://id.loc.gov/ontologies/bibframe/Coden)

**Definition**: "Identifier for scientific and technical periodical
titles assigned by the International CODEN Section of Chemical Abstracts
Service."

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

**Last Updated:** 2016-04-21 (New)

  ------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Coden ;
  
  rdf:value "NATUAS"\] .
  ------------------------

#### bf:CopyrightNumber

**Label**: Copyright-legal deposit number

**URI**:
[*http://id.loc.gov/ontologies/bibframe/CopyrightNumber*](http://id.loc.gov/ontologies/bibframe/CopyrightNumber)

**Definition**: "Identifier assigned to a copyright registration or
legal deposit."

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

**Last Updated:** 2016-04-21 (New)

  ------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:CopyrightNumber ;
  
  rdf:value "PA0000217251"\] .
  ------------------------------

#### bf:DissertationIdentifier

**Label**: Dissertation Identifier

**URI**:
[*http://id.loc.gov/ontologies/bibframe/DissertationIdentifier*](http://id.loc.gov/ontologies/bibframe/DissertationIdentifier)

**Definition**: "Identifier assigned to a thesis or dissertation for
identification purposes ." .

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

**Used with:** bf:Dissertation

**Last Updated:** 2016-04-21 (New)

  ---------------------------------------------------------------------------------------------------
  :work1 a bf:Work ;
  
  bf:dissertation \_:dissertation1 ;
  
  owl:sameAs [*http://dx.doi.org/10.5860/lrts.60n3.140*](http://dx.doi.org/10.5860/lrts.60n3.140) .
  
  \_:dissertation1 a bf:Dissertation ;
  
  bf:identifiedBy
  
  \[a bf:DissertationIdentifier ;
  
  rdf:value "dissID1"
  
  \] .
  ---------------------------------------------------------------------------------------------------

#### bf:Doi

**Label**: DOI

**URI**:
[*http://id.loc.gov/ontologies/bibframe/Doi*](http://id.loc.gov/ontologies/bibframe/Doi)

**Definition**: Digital Object Identifier.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  ---------------------------------------------------------------------------------------------------
  :work1 a bf:Work ;
  
  bf:dissertation \_:dissertation1 ;
  
  owl:sameAs [*http://dx.doi.org/10.5860/lrts.60n3.140*](http://dx.doi.org/10.5860/lrts.60n3.140) .
  
  \_:dissertation1 a bf:Dissertation ;
  
  bf:identifiedBy
  
  \[a bf:Doi ;
  
  rdf:value "dissID1"\] .
  ---------------------------------------------------------------------------------------------------

#### bf:Ean

**Label**: EAN

**URI**:
[*http://id.loc.gov/ontologies/bibframe/Ean*](http://id.loc.gov/ontologies/bibframe/Ean)

**Definition**: "International Article Identifier."

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  -------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Ean ;
  
  rdf:value "4006381333931"\] .
  -------------------------------

#### bf:Fingerprint

**Label**: Fingerprint identifier

**URI**:
[*http://id.loc.gov/ontologies/bibframe/Fingerprint*](http://id.loc.gov/ontologies/bibframe/Fingerprint)

**Definition**: "Identifier that is used to assist in the identification
of antiquarian books by recording information comprising groups of
characters taken from specified positions on specified pages of the
book." .

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

#### bf:Hdl

**Label**: Handle

**URI**: http://id.loc.gov/ontologies/bibframe/Hdl

**Definition**: "Unique and persistent identifier for digital objects
developed by the Corporation for National Research Initiatives." .

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

**Last Updated:** 2016-04-21 (New)

  --------------------------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Hdl ;
  
  rdf:value http://hdl.handle.net/4263537/5041\] ;
  --------------------------------------------------

#### bf:Isan

**Label**: ISAN

**URI**: http://id.loc.gov/ontologies/bibframe/Isan

Definition: International Standard Audiovisual Number.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  ---------------------------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Isan ;
  
  rdf:value "0000-0000-3A8D-0000-Z-0000-0000-6"\] .
  ---------------------------------------------------

#### bf:Isbn

**Label**: ISBN

**URI**: http://id.loc.gov/ontologies/bibframe/Isbn

**Definition:** International Standard Book Number.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  -----------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Isbn ;
  
  rdf:value "0912700513" \] ;
  
  \[a bf:Isbn ;
  
  rdf:value "0912700947"
  
  \] .
  -----------------------------

#### bf:Ismn

**Label**: ISMN

**URI**: http://id.loc.gov/ontologies/bibframe/Ismn

**Definition**: International Standard Music Number.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  -----------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Ismn ;
  
  rdf:value "979-0-9016791-7-7"\] .
  -----------------------------------

#### bf:Iso

**Label**: ISO number

**URI**: http://id.loc.gov/ontologies/bibframe/Iso

**Definition:** International Organization for Standardization standard
number.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  ----------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Iso ;
  
  rdf:value "23950:1998"\] .
  ----------------------------

#### bf:Isrc

**Label**: ISRC

**URI**: http://id.loc.gov/ontologies/bibframe/Isrc

**Definition:** International Standard Recording Code.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  ---------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Isrc ;
  
  rdf:value "US-S1Z-99-00001"\] .
  ---------------------------------

#### bf:Issn

**Label**: ISSN

**URI**: http://id.loc.gov/ontologies/bibframe/Issn

**Definition:** International Standard Serial Number.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  ---------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Issn ;
  
  rdf:value "0028-0836"\] .
  ---------------------------

#### bf:IssnL

**Label**: ISSN-L

**URI**: http://id.loc.gov/ontologies/bibframe/IssnL

**Definition:** International Standard Serial Number that links together
various media versions of a continuing resource.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  ----------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:IssnL ;
  
  rdf:value "ISSNLXXXXX"\] .
  ----------------------------

#### bf:IssueNumber

**Label**: Audio issue number

**URI**: http://id.loc.gov/ontologies/bibframe/IssueNumber

**Definition**: Number used to identify the issue designation, or serial
identification, assigned by a publisher to a sound recording.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  ------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:IssueNumber ;
  
  rdf:value "No. 1"\] .
  ------------------------

#### bf:Istc

**Label**: ISTC

**URI**: http://id.loc.gov/ontologies/bibframe/Istc

**Definition**: International Standard Text Code, a numbering system
developed to enable the unique identification of textual works.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  -------------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Istc ;
  
  rdf:value "A02-2009-000004BE-A"\] .
  -------------------------------------

#### bf:Iswc

**Label**: ISWC

**URI**: http://id.loc.gov/ontologies/bibframe/Iswc

**Definition**: International Standard Musical Work Code, a unique,
persistent reference number for the identification of musical works.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  ---------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Iswc ;
  
  rdf:value "T-000.000.001-0"\] .
  ---------------------------------

#### bf:Lccn

**Label**: LCCN

**URI**: http://id.loc.gov/ontologies/bibframe/Lccn

**Definition**: Library of Congress Control Number that identifies a
resource description.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  ------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Lccn ;
  
  rdf:value "LCCN\_Number"\] .
  ------------------------------

#### bf:LcOverseasAcq

**Label**: LC acquisition program

**URI**: http://id.loc.gov/ontologies/bibframe/LcOverseasAcq

**Definition**: Identification number assigned by the Library of
Congress to works acquired through one of its collaborative overseas
acquisition programs.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  --------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:LcOverseasAcq ;
  
  rdf:value "I-E-2016315043"\] .
  --------------------------------

#### bf:Local

**Label**: Local identifier

**URI**: http://id.loc.gov/ontologies/bibframe/Local

**Definition**: Identifier established locally and not a standard
number.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  -----------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Local ;
  
  rdf:value "ab3167-c-20161005"\] .
  -----------------------------------

#### bf:MatrixNumber

**Label**: Audio matrix number

**URI**: http://id.loc.gov/ontologies/bibframe/MatrixNumber

**Definition**: Matrix number from the master from which a specific
sound recording was pressed.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  -----------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:MatrixNumber ;
  
  rdf:value "ABC123XYZ890"\].
  -----------------------------

#### bf:MusicPlate

**Label**: Music plate number

**URI**: http://id.loc.gov/ontologies/bibframe/MusicPlate

**Definition**: Number assigned by a music publisher to a specific music
publication.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  --------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:MusicPlate ;
  
  rdf:value "028 32 EP 7958"\] .
  --------------------------------

#### bf:MusicPublisherNumber

**Label**: Music publisher number

**URI**: http://id.loc.gov/ontologies/bibframe/MusicPublisherNumber

**Definition**: Number assigned to a notated music publication other
than a matrix or plate number.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  -------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:MusicPublisherNumber ;
  
  rdf:value "2012564395"\] .
  -------------------------------

#### bf:Nbn

**Label**: NBD

**URI**: http://id.loc.gov/ontologies/bibframe/Nbd

**Definition**: National Bibliography Number that identifies a resource
description.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  ------------------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Nbn ;
  
  rdf:value "urn:nbn:de:bvb:19-146642"\] .
  ------------------------------------------

#### bf:PostalRegistration

**Label**: Postal registration number

**URI**: http://id.loc.gov/ontologies/bibframe/PostalRegistration

**Definition**: Number assigned to a publication for which the specified
postal service permits the use of a special mailing class privilege.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  -------------------------------------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:PostalRegistration ;
  
  rdf:value "003752" ;
  
  bf:source [*http://www.usps.com*](http://www.usps.com) \] .
  -------------------------------------------------------------

#### bf:PublisherNumber

**Label**: Other publisher number

**URI**: http://id.loc.gov/ontologies/bibframe/PublisherNumber

**Definition**: Number assigned by a publisher that is not one of the
specific defined types.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  --------------------------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:PublisherNumber ;
  
  rdf:value "440 073 033-9" ;
  
  bf:source http://www.deutschegrammophon.com \] .
  --------------------------------------------------

#### bf:ReportNumber

**Label**: Technical report number

**URI**: http://id.loc.gov/ontologies/bibframe/ReportNumber

**Definition**: Identification number of a technical report that is not
a Standard Technical Report Number.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  ----------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:ReportNumber;
  
  rdf:value "Report Number XX"\] .
  ----------------------------------

#### bf:ShelfMark

**Label**: Shelf location

**URI**: http://id.loc.gov/ontologies/bibframe/ShelfMark

**Definition**: Piece/item identifier, such as a call or other type of
number.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

**Subclassed as: **

http://id.loc.gov/ontologies/bibframe/ShelfMarkDdc

http://id.loc.gov/ontologies/bibframe/ShelfMarkLcc

http://id.loc.gov/ontologies/bibframe/ShelfMarkUdc

http://id.loc.gov/ontologies/bibframe/ShelfMarkNlm

  ------------------------
  :inst1 a bf:Instance ;
  
  bf:hasItem :item1 ;
  
  :item1 a bf:Item ;
  
  bf:shelfMark \[
  
  a bf:ShelfMark ;
  
  rdf:value "B48"
  
  \] .
  ------------------------

#### bf:ShelfMarkDdc

**Label**: Shelf location

**URI**: http://id.loc.gov/ontologies/bibframe/ShelfMarkDdc

**Definition**: Shelf mark based on Dewey Decimal Classification

**Subclass of:** http://id.loc.gov/ontologies/bibframe/ShelfMark

#### bf:ShelfMarkLcc

**Label**: Shelf location

**URI**: http://id.loc.gov/ontologies/bibframe/ShelfMarkLcc

**Definition**: Shelf mark based on Library of Congress Classification

**Subclass of:** http://id.loc.gov/ontologies/bibframe/ShelfMark

#### bf:ShelfMarkNlm

**Label**: Shelf location

**URI**: http://id.loc.gov/ontologies/bibframe/ShelfMarkNlm

**Definition**: Shelf mark based on Univerasl Decimal Classification

**Subclass of:** http://id.loc.gov/ontologies/bibframe/ShelfMark

#### bf:ShelfMarkUdc

**Label**: Shelf location

**URI**: http://id.loc.gov/ontologies/bibframe/ShelfMarkUdc

**Definition**: Piece/item identifier, such as a call or other type of
number.

**Subclass of:** http://id.loc.gov/ontologies/bibframe/ShelfMark

#### bf:Sici

**Label**: SICI

**URI**: http://id.loc.gov/ontologies/bibframe/Sici

**Definition**: Serial Item and Contribution Identifier.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  --------------------------------------------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Sici ;
  
  rdf:value "0002-8231(199412)45:10&lt;737:TIODIM&gt;2.3.TX;2-M"\] .
  --------------------------------------------------------------------

#### bf:StockNumber

**Label**: Stock number

**URI**: http://id.loc.gov/ontologies/bibframe/StockNumber

**Definition**: Identification number used for stock purposes and
assigned by agencies such as distributors, publishers, or vendors.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  ------------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:StockNumber ;
  
  rdf:value "Stock Number 12345"\] .
  ------------------------------------

#### bf:Strn

**Label**: STRN

**URI**: http://id.loc.gov/ontologies/bibframe/Strn

**Definition**: Standard Technical Report Number.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  ------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Strn ;
  
  rdf:value "MPC-386" ;
  
  bf:status "Canceled"
  
  \] .
  ------------------------

#### bf:StudyNumber

**Label**: Study number

**URI**: http://id.loc.gov/ontologies/bibframe/StudyNumber

**Definition**: Identification number for a computer data file.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  --------------------------------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:StudyNumber ;
  
  rdf:value "CNRS 84115"
  
  bf:source [*http://www.cnrs.com*](http://www.cnrs.com)
  
  \] .
  --------------------------------------------------------

#### bf:Upc

**Label**: UPC

**URI**: http://id.loc.gov/ontologies/bibframe/Upc

**Definition**: Universal Product Code.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  ------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Upc ;
  
  rdf:value "042100005264"\] .
  ------------------------------

#### bf:Urn

**Label**: URN

**URI**: http://id.loc.gov/ontologies/bibframe/Urn

**Definition**: Uniform Resource Number.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  -------------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Urn;
  
  rdf:value "urn:isbn:0451450523"\] .
  -------------------------------------

#### bf:VideorecordingNumber

**Label**: Videorecording number

**URI**: http://id.loc.gov/ontologies/bibframe/VideorecordingNumber

**Definition**: Number assigned by a publisher to a videorecording.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  -------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:VideorecordingNumber ;
  
  rdf:value "aVM5108"
  
  \] .
  -------------------------------

BF2 Identifier Source
---------------------

#### bf:source (object property)

**Label**: Source

**URI**:
[*http://id.loc.gov/ontologies/bibframe/source*](http://id.loc.gov/ontologies/bibframe/source)

**Definition**: Resource from which value or label came or was derived,
such as the formal source/scheme from which a classification number is
taken or derived, list from which an agent name is taken or derived,
source within which an identifier is unique.

**Comment**: Used with Unspecified. The expected value is bf:Source.

**Domain:** unspecified

**Range**: unspecified

#### bf:Source

**Label:** Source

**URI:**
[*http://id.loc.gov/ontologies/bibframe/Source*](http://id.loc.gov/ontologies/bibframe/Source)

**Definition:** Resource from which value or label came or was derived.

BF2 Identifier Value
--------------------

#### rdf:value (property)

**Label**: value

**URI**:
[*http://www.w3.org/1999/02/22-rdf-syntax-ns\#*](http://www.w3.org/1999/02/22-rdf-syntax-ns)

**Definition**: Idiomatic property used for structured values

bibliotek-o Identifier Model 
=============================

**NOTE:** *The bibliotek-o is presented with the recommended BF2 terms,
according to the [*modifications requested above*](#_147n2zr). Those
terms that are not adopted by BF2 will be defined in the BIBLIOTEK-O
namespace, with corresponding revisions made to this document.*

The following diagram provides an overview of the model. It does not
differ from the BF2 representation of the same data, but is provided to
illustrate the overall model and the use of owl:sameAs vs.
bf:identifiedBy.

##### Diagram 4. Instance with Identifier and sameAs.

![Instance with Identifier and
sameAs.png](media/image01.png){width="6.5in"
height="3.7916666666666665in"}

Identifiers and owl:sameAs
--------------------------

There is a relationship between bf:identifiedBy and owl:sameAs
assertions. The following example shows the relationship of a Work to
both a URI and non-URI identifier of the Work (from [*Rob Sanderson’s
Analysis of
BF1*](https://docs.google.com/document/d/1dIy-FgQsH67Ay0T0O0ulhyRiKjpf_I0AVQ9v8FLmPNo/)).
Because generally catalogs will require a local URI for bf:Works and
other local resources in order to make local assertions, the local URI
is not simply replaced with
[*http://dx.doi.org/10.1007/study-1345b*](http://dx.doi.org/10.1007/study-1345b).

  -------------------------------------------------------------------------------------------------------
  :work1 a bf:Work ;
  
  bf:identifiedBy \[
  
  a bf:Doi ;
  
  > rdf:value "1345b" \] ;
  
  owl:sameAs &lt;[*http://dx.doi.org/10.1007/study-1345b*](http://dx.doi.org/10.1007/study-1345b)&gt; .
  -------------------------------------------------------------------------------------------------------

bibliotek-o Resource-to-Identifier Relationships
------------------------------------------------

#### bf:identifiedBy (object property)

**Label**: Identifier

**URI**:
[*http://id.loc.gov/ontologies/bibframe/identifiedBy*](http://id.loc.gov/ontologies/bibframe/identifiedBy)

**Definition**: Character string associated with a resource that serves
to differentiate that resource from other resources, i.e., that uniquely
identifies an entity.

**Comment**: Used with Unspecified

**Domain:** unspecified

**Range**: bf:Identifier

**Inverse:**
[*http://id.loc.gov/ontologies/bibframe/identifies*](http://id.loc.gov/ontologies/bibframe/identifies)

#### bf:identifies (object property)

**Label**: identifies

**URI**:
[*http://id.loc.gov/ontologies/bibframe/identifies*](http://id.loc.gov/ontologies/bibframe/identifies)

**Definition**: Resource that this character string serves to
differentiate that resource from other resources, i.e., that uniquely
identifies an entity.

**Domain:** bf:Identifier

**Range**: unspecified

**Inverse:**
[*http://id.loc.gov/ontologies/bibframe/identifiedBy*](http://id.loc.gov/ontologies/bibframe/identifiedBy)

bibliotek-o Identifier Class Hierarchy
--------------------------------------

#### bf:Identifier

**Label**: Identifier

**URI**:
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

**Definition**: Token or name that is associated with a resource, such
as a URI or an ISBN.

**Comment**: Used with Unspecified

### Subclasses of bf:Identifier

The vast majority of these are the same as BF2. They are included here
to clarify points of departure in bibliotek-o, including the RDF
samples. Differences are highlighted in yellow.

#### bf:Ansi

**Label**: ANSI number

**URI**:
[*http://id.loc.gov/ontologies/bibframe/Ansi*](http://id.loc.gov/ontologies/bibframe/Ansi)

**Definition**: American National Standards Institute identifier.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  --------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Ansi ;
  
  rdf:value "ANSI\_ID"\] .
  --------------------------

#### bf:Barcode

**Label**: Barcode

**URI**:
[*http://id.loc.gov/ontologies/bibframe/Barcode*](http://id.loc.gov/ontologies/bibframe/Barcode)

**Definition**: Optical machine-readable representation of data relating
to the item to which it is attached.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  ------------------------------------------------------------------------
  :inst1 a bf:Instance ;
  
  bf:hasItem :item1 ;
  
  :item1 a bf:Item ;
  
  \# LC has agreed to remove bf:barcode and use bf:identifiedBy instead.
  
  bf:barcode
  
  \[ a bf:Barcode ;
  
  rdf:value “0 360029145 2” .
  
  \] .
  ------------------------------------------------------------------------

#### bf:Coden

**Label**: CODEN

**URI**:
[*http://id.loc.gov/ontologies/bibframe/Coden*](http://id.loc.gov/ontologies/bibframe/Coden)

**Definition**: "Identifier for scientific and technical periodical
titles assigned by the International CODEN Section of Chemical Abstracts
Service."

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

**Last Updated:** 2016-04-21 (New)

  ------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Coden ;
  
  rdf:value "NATUAS"\] .
  ------------------------

#### bf:CopyrightNumber

**Label**: Copyright-legal deposit number

**URI**:
[*http://id.loc.gov/ontologies/bibframe/CopyrightNumber*](http://id.loc.gov/ontologies/bibframe/CopyrightNumber)

**Definition**: "Identifier assigned to a copyright registration or
legal deposit."

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

**Last Updated:** 2016-04-21 (New)

  ------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:CopyrightNumber ;
  
  rdf:value "PA0000217251"\] .
  ------------------------------

#### bf:DissertationIdentifier

**Label**: Dissertation Identifier

**URI**:
[*http://id.loc.gov/ontologies/bibframe/DissertationIdentifier*](http://id.loc.gov/ontologies/bibframe/DissertationIdentifier)

**Definition**: "Identifier assigned to a thesis or dissertation for
identification purposes ." .

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

**Used with:** bf:Dissertation

Using BF2 model for now; will revisit as part of [*Degrees
recommendation*](https://docs.google.com/document/d/1P5rOZYe0YOlYj7Ph4wBQBhZSH5ouiK5pcyQTz4I0RjY/edit)
(not yet ready for review).

  ---------------------------------------------------------------------------------------------------
  :work1 a bf:Work ;
  
  bf:dissertation \_:dissertation1 ;
  
  owl:sameAs [*http://dx.doi.org/10.5860/lrts.60n3.140*](http://dx.doi.org/10.5860/lrts.60n3.140) .
  
  \_:dissertation1 a bf:Dissertation ;
  
  bf:identifiedBy
  
  \[a bf:DissertationIdentifier ;
  
  rdf:value "dissID1"
  
  \] .
  ---------------------------------------------------------------------------------------------------

#### bf:Doi

**Label**: DOI

**URI**:
[*http://id.loc.gov/ontologies/bibframe/Doi*](http://id.loc.gov/ontologies/bibframe/Doi)

**Definition**: Digital Object Identifier.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

Using BF2 model for now; will revisit as part of [*Degrees
recommendation*](https://docs.google.com/document/d/1P5rOZYe0YOlYj7Ph4wBQBhZSH5ouiK5pcyQTz4I0RjY/edit)
(not yet ready for review).

  ---------------------------------------------------------------------------------------------------
  :work1 a bf:Work ;
  
  bf:dissertation \_:dissertation1 ;
  
  owl:sameAs [*http://dx.doi.org/10.5860/lrts.60n3.140*](http://dx.doi.org/10.5860/lrts.60n3.140) .
  
  \_:dissertation1 a bf:Dissertation ;
  
  bf:identifiedBy
  
  \[a bf:Doi ;
  
  rdf:value "dissID1"\] .
  ---------------------------------------------------------------------------------------------------

#### bf:Ean

**Label**: EAN

**URI**:
[*http://id.loc.gov/ontologies/bibframe/Ean*](http://id.loc.gov/ontologies/bibframe/Ean)

**Definition**: "International Article Identifier."

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  -------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Ean ;
  
  rdf:value "4006381333931"\] .
  -------------------------------

#### bf:Fingerprint

**Label**: Fingerprint identifier

**URI**:
[*http://id.loc.gov/ontologies/bibframe/Fingerprint*](http://id.loc.gov/ontologies/bibframe/Fingerprint)

**Definition**: "Identifier that is used to assist in the identification
of antiquarian books by recording information comprising groups of
characters taken from specified positions on specified pages of the
book."

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

***Referred to RareMat Ontology Extension group.***

#### bf:Hdl

**Label**: Handle

**URI**: http://id.loc.gov/ontologies/bibframe/Hdl

**Definition**: "Unique and persistent identifier for digital objects
developed by the Corporation for National Research Initiatives." .

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

**Last Updated:** 2016-04-21 (New)

  --------------------------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Hdl ;
  
  rdf:value http://hdl.handle.net/4263537/5041\] .
  --------------------------------------------------

#### bf:Isan

**Label**: ISAN

**URI**: http://id.loc.gov/ontologies/bibframe/Isan

Definition: International Standard Audiovisual Number.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  ---------------------------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Isan ;
  
  rdf:value "0000-0000-3A8D-0000-Z-0000-0000-6"\] .
  ---------------------------------------------------

#### bf:Isbn

**Label**: ISBN

**URI**: http://id.loc.gov/ontologies/bibframe/Isbn

**Definition:** International Standard Book Number.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  -----------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Isbn ;
  
  rdf:value "0912700513" \] ;
  
  \[a bf:Isbn ;
  
  rdf:value "0912700947" \] .
  -----------------------------

#### bf:Ismn

**Label**: ISMN

**URI**: http://id.loc.gov/ontologies/bibframe/Ismn

**Definition**: International Standard Music Number.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

***Referred to Performed Music Ontology Extension group.***

  -----------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Ismn ;
  
  rdf:value "979-0-9016791-7-7"\] .
  -----------------------------------

#### bf:Iso

**Label**: ISO number

**URI**: http://id.loc.gov/ontologies/bibframe/Iso

**Definition:** International Organization for Standardization standard
number.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  ----------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Iso ;
  
  rdf:value "23950:1998"\] .
  ----------------------------

#### bf:Isrc

**Label**: ISRC

**URI**: http://id.loc.gov/ontologies/bibframe/Isrc

**Definition:** International Standard Recording Code.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  ---------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Isrc ;
  
  rdf:value "US-S1Z-99-00001"\] .
  ---------------------------------

#### bf:Issn

**Label**: ISSN

**URI**: http://id.loc.gov/ontologies/bibframe/Issn

**Definition:** International Standard Serial Number.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

***Referred to [*Serials and Other Multipart Works
Recommendation*](https://docs.google.com/document/d/1RfIkxkvmtDMsxGEsesMh7Ofu9ZViIJja4u1wI79UTlY/edit).***

  ---------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Issn ;
  
  rdf:value "0028-0836"\] .
  ---------------------------

#### bf:IssnL

**Label**: ISSN-L

**URI**: http://id.loc.gov/ontologies/bibframe/IssnL

**Definition:** International Standard Serial Number that links together
various media versions of a continuing resource.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

***Referred to [*Serials and Other Multipart Works
Recommendation*](https://docs.google.com/document/d/1RfIkxkvmtDMsxGEsesMh7Ofu9ZViIJja4u1wI79UTlY/edit).***

  ----------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:IssnL ;
  
  rdf:value "ISSNLXXXXX"\] .
  ----------------------------

#### bf:IssueNumber

**Label**: Audio issue number

**URI**: http://id.loc.gov/ontologies/bibframe/IssueNumber

**Definition**: Number used to identify the issue designation, or serial
identification, assigned by a publisher to a sound recording.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  ------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:IssueNumber ;
  
  rdf:value "No. 1"\] .
  ------------------------

#### bf:Istc

**Label**: ISTC

**URI**: http://id.loc.gov/ontologies/bibframe/Istc

**Definition**: International Standard Text Code, a numbering system
developed to enable the unique identification of textual works.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  -------------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Istc ;
  
  rdf:value "A02-2009-000004BE-A"\] .
  -------------------------------------

#### bf:Iswc

**Label**: ISWC

**URI**: http://id.loc.gov/ontologies/bibframe/Iswc

**Definition**: International Standard Musical Work Code, a unique,
persistent reference number for the identification of musical works.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

***Referred to Performed Music Ontology Extension group.***

  ---------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Iswc ;
  
  rdf:value "T-000.000.001-0"\] .
  ---------------------------------

#### bf:Lccn

**Label**: LCCN

**URI**: http://id.loc.gov/ontologies/bibframe/Lccn

**Definition**: Library of Congress Control Number that identifies a
resource description.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  ------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Lccn ;
  
  rdf:value "LCCN\_Number"\] .
  ------------------------------

#### bf:LcOverseasAcq

**Label**: LC acquisition program

**URI**: http://id.loc.gov/ontologies/bibframe/LcOverseasAcq

**Definition**: Identification number assigned by the Library of
Congress to works acquired through one of its collaborative overseas
acquisition programs.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  --------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:LcOverseasAcq ;
  
  rdf:value "I-E-2016315043"\] .
  --------------------------------

#### bf:Local

**Label**: Local identifier

**URI**: http://id.loc.gov/ontologies/bibframe/Local

**Definition**: Identifier established locally and not a standard
number.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  -----------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Local ;
  
  rdf:value "ab3167-c-20161005"\] .
  -----------------------------------

#### bf:MatrixNumber

**Label**: Audio matrix number

**URI**: http://id.loc.gov/ontologies/bibframe/MatrixNumber

**Definition:** Matrix number from the master from which a specific
sound recording was pressed.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

***Referred to Performed Music Ontology Extension group.***

  -----------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:MatrixNumber ;
  
  rdf:value "ABC123XYZ890"\].
  -----------------------------

#### bf:MusicPlate

**Label**: Music plate number

**URI**: http://id.loc.gov/ontologies/bibframe/MusicPlate

**Definition**: Number assigned by a music publisher to a specific music
publication.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

***Referred to Performed Music Ontology Extension group.***

  --------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:MusicPlate ;
  
  rdf:value "028 32 EP 7958"\] .
  --------------------------------

#### bf:MusicPublisherNumber

**Label**: Music publisher number

**URI**: http://id.loc.gov/ontologies/bibframe/MusicPublisherNumber

**Definition**: Number assigned to a notated music publication other
than a matrix or plate number.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

***Referred to Performed Music Ontology Extension group.***

  -------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:MusicPublisherNumber ;
  
  rdf:value "2012564395"\] .
  -------------------------------

#### bf:Nbn

**Label**: NBD

**URI**: http://id.loc.gov/ontologies/bibframe/Nbd

**Definition**: National Bibliography Number that identifies a resource
description.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  ------------------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Nbn ;
  
  rdf:value "urn:nbn:de:bvb:19-146642"\] .
  ------------------------------------------

#### bib:OclcIdentifier

**Label**: A number assigned to a bibliographic MARC record from OCLC

**URI**: http://bibliotek-o.org/ontology/OclcIdentifier

**Definition**: OCLC Worldcat identifier.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

#### bf:PostalRegistration

**Label**: Postal registration number

**URI**: http://id.loc.gov/ontologies/bibframe/PostalRegistration

**Definition**: Number assigned to a publication for which the specified
postal service permits the use of a special mailing class privilege.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  -------------------------------------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:PostalRegistration ;
  
  rdf:value "003752" ;
  
  bf:source [*http://www.usps.com*](http://www.usps.com) \] .
  -------------------------------------------------------------

#### bf:PublisherNumber

**Label**: Other publisher number

**URI**: http://id.loc.gov/ontologies/bibframe/PublisherNumber

**Definition**: Number assigned by a publisher that is not one of the
specific defined types.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  -----------------------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:PublisherNumber ;
  
  rdf:value "440 073 033-9" ;
  
  bf:source http://www.deutschegrammophon.com .
  -----------------------------------------------

#### bf:ReportNumber

**Label**: Technical report number

**URI**: http://id.loc.gov/ontologies/bibframe/ReportNumber

**Definition**: Identification number of a technical report that is not
a Standard Technical Report Number.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  ----------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:ReportNumber;
  
  rdf:value "Report Number XX"\] .
  ----------------------------------

#### bf:ShelfMark

**Label**: Shelf location

**URI**: http://id.loc.gov/ontologies/bibframe/ShelfMark

**Definition**: Piece/item identifier, such as a call or other type of
number.

**Subclass of:** bf:Identifier

**Subclassed as: **

http://id.loc.gov/ontologies/bibframe/ShelfMarkDdc

http://id.loc.gov/ontologies/bibframe/ShelfMarkLcc

http://id.loc.gov/ontologies/bibframe/ShelfMarkUdc

http://id.loc.gov/ontologies/bibframe/ShelfMarkNlm

  ------------------------
  :inst1 a bf:Instance ;
  
  bf:hasItem :item1 ;
  
  :item1 a bf:Item ;
  
  bf:identifiedBy \[
  
  a bf:ShelfMark ;
  
  rdf:value "B48"
  
  \] .
  ------------------------

See [*proposal to model shelf marks as locations*](#3j2qqm3) as an area
for future research.

#### bf:ShelfMarkDdc

**Label**: Shelf location

**URI**: http://id.loc.gov/ontologies/bibframe/ShelfMarkDdc

**Definition**: Shelf mark based on Dewey Decimal Classification

**Subclass of:** http://id.loc.gov/ontologies/bibframe/ShelfMark

#### bf:ShelfMarkLcc

**Label**: Shelf location

**URI**: http://id.loc.gov/ontologies/bibframe/ShelfMarkLcc

**Definition**: Shelf mark based on Library of Congress Classification

**Subclass of:** http://id.loc.gov/ontologies/bibframe/ShelfMark

#### bf:ShelfMarkNlm

**Label**: Shelf location

**URI**: http://id.loc.gov/ontologies/bibframe/ShelfMarkNlm

**Definition**: Shelf mark based on Univerasl Decimal Classification

**Subclass of:** http://id.loc.gov/ontologies/bibframe/ShelfMark

#### bf:ShelfMarkUdc

**Label**: Shelf location

**URI**: http://id.loc.gov/ontologies/bibframe/ShelfMarkUdc

**Definition**: Piece/item identifier, such as a call or other type of
number.

**Subclass of:** http://id.loc.gov/ontologies/bibframe/ShelfMark

#### bf:Sici

**Label**: SICI

**URI**: http://id.loc.gov/ontologies/bibframe/Sici

**Definition**: Serial Item and Contribution Identifier.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

Referred to [*Serials and Other Multipart Works
Recommendation*](https://docs.google.com/document/d/1RfIkxkvmtDMsxGEsesMh7Ofu9ZViIJja4u1wI79UTlY/edit).

  --------------------------------------------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Sici ;
  
  rdf:value "0002-8231(199412)45:10&lt;737:TIODIM&gt;2.3.TX;2-M"\] .
  --------------------------------------------------------------------

#### bf:StockNumber

**Label**: Stock number

**URI**: http://id.loc.gov/ontologies/bibframe/StockNumber

**Definition**: Identification number used for stock purposes and
assigned by agencies such as distributors, publishers, or vendors.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  ------------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:StockNumber ;
  
  rdf:value "Stock Number 12345"\] .
  ------------------------------------

#### bf:Strn

**Label**: STRN

**URI**: http://id.loc.gov/ontologies/bibframe/Strn

**Definition**: Standard Technical Report Number.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  ------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Strn ;
  
  rdf:value "MPC-386" ;
  
  bf:status :canceled .
  
  \] .
  ------------------------

#### bf:StudyNumber

**Label**: Study number

**URI**: http://id.loc.gov/ontologies/bibframe/StudyNumber

**Definition**: Identification number for a computer data file.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  --------------------------------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:StudyNumber ;
  
  rdf:value "CNRS 84115"
  
  bf:source [*http://www.cnrs.com*](http://www.cnrs.com)
  
  \] .
  --------------------------------------------------------

#### 

#### bf:Upc

**Label**: UPC

**URI**: http://id.loc.gov/ontologies/bibframe/Upc

**Definition**: Universal Product Code.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  ------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Upc ;
  
  rdf:value "042100005264"\] .
  ------------------------------

#### bf:Urn

**Label**: URN

**URI**: http://id.loc.gov/ontologies/bibframe/Urn

**Definition**: Uniform Resource Number.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

  -------------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:Urn;
  
  rdf:value "urn:isbn:0451450523"\] .
  -------------------------------------

#### bf:VideorecordingNumber

**Label**: Videorecording number

**URI**: http://id.loc.gov/ontologies/bibframe/VideorecordingNumber

**Definition**: Number assigned by a publisher to a videorecording.

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/Identifier*](http://id.loc.gov/ontologies/bibframe/Identifier)

Referred to Moving Image Ontology Extension group.

  -------------------------------
  :inst1 a bf:Instance ;
  
  bf:identifiedBy
  
  \[a bf:VideorecordingNumber ;
  
  rdf:value "aVM5108"
  
  \] .
  -------------------------------

bibliotek-o Identifier Status
-----------------------------

##### Diagram 5. Identifier status

![Identifier Status.png](media/image05.png){width="6.5in"
height="3.263888888888889in"}

#### bf:status (object property)

**Label**: status

**URI**:
[*http://id.loc.gov/ontologies/bibframe/status*](http://id.loc.gov/ontologies/bibframe/status)

**Definition**: The status of a resource

**Domain:** unspecified

**Range**: bf:Status

#### bibliotek-o Status Named Individuals 

Namespace TBD.

#### cancelled 

**Label**: cancelled

**Type:** owl:NamedIndividual, bf:Status

#### current

**Label**: current

**Type:** owl:NamedIndividual, bf:Status

#### deprecated

**Label**: deprecated

**Type:** owl:NamedIndividual, bf:Status

#### invalid 

**Label**: invalid

**Type:** owl:NamedIndividual, bf:Status

bibliotek-o Identifier Date
---------------------------

##### Diagram 6. Identifier Date

#### dcterms:date (property) ![](media/image07.png){width="6.5in" height="2.2916666666666665in"}

**Label**: Date

**URI**:
[*http://purl.org/dc/terms/date*](http://purl.org/dc/terms/date)

**Definition**: A point or period of time associated with an event in
the lifecycle of the resource.

**Comment:** Date may be used to express temporal information at any
level of granularity. Recommended best practice is to use an encoding
scheme, such as the W3CDTF profile of ISO 8601.

[]{#_1ksv4uv .anchor}**Range**: rdfs:Literal

bibliotek-o Identifier Source
-----------------------------

##### Diagram 7. Identifier source![](media/image06.png){width="4.533333333333333in" height="2.9930555555555554in"}

#### 

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

The object of bf:source is expected to be a URI for the assigner of the
identifier.

#### bf:sourceOf (object property)

**Label**: is source of

**URI**:
[*http://id.loc.gov/ontologies/bibframe/sourceOf*](http://id.loc.gov/ontologies/bibframe/sourceOf)

**Definition:** This resource is the source of the object.

**Domain:** unspecified

**Range:** unspecified

**Inverse:**
[*http://id.loc.gov/ontologies/bibframe/source*](http://id.loc.gov/ontologies/bibframe/source)

The subject of bf:source is expected to be a URI for the assigner of the
identifier.

bibliotek-o Identifier Value
----------------------------

#### rdf:value (property)

**Label**: value

**URI**:
[*http://www.w3.org/1999/02/22-rdf-syntax-ns\#*](http://www.w3.org/1999/02/22-rdf-syntax-ns)

**Definition**: Idiomatic property used for structured values

**Domain:** rdfs:Resource

**Range**: rdfs:Resource

Open Questions and Areas for Future Work
========================================

-   What to do when stable identifiers become URIs?

    -   ISBNs, ESTC numbers, etc.

-   []{#z337ya .anchor}What to do with canonical bibliographies whose
    > identifiers are essential to rare book cataloging? (510s)

    -   Referred to RareMat extension group

-   Attach DissertationIdentifier to Work rather than the Dissertation
    > object.

-   []{#3j2qqm3 .anchor}Modeling shelf marks as locations has been
    > discussed but not finalized as a recommendation.

    -   bibliotek-o has adopted the following model for locations:

        -   Replaces bf:Place with prov:Location.

        -   Defines subclasses of prov:Location:

            -   bib:GeographicLocation

            -   bib:PhysicalLocation

            -   bib:ElectronicLocation

        -   Defines predicates bib:atLocation (range prov:Location) and
            > inverse bib:locationOf (domain prov:Location).

    -   []{#_1y810tw .anchor}Future integration of shelf marks into this
        > model would involve making the ShelfMark class a subclass of
        > prov:Location, and using bib:locationOf rather than
        > bf:identifiedBy to link the resource to the ShelfMark. This
        > would be recommended for BF, but if not adopted then
        > BIBLIOTEK-O would define bib:ShelfMark as subclass of
        > prov:Location. Current subclasses of ShelfMark would remain.


