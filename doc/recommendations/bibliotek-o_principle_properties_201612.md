**LD4L Labs / LD4P Ontology Group**

**December 2016**

General Recommendations
-----------------------

-   Use object properties where:

    -   \(1) The modeling warrants it - i.e., you have or could have something
        > more to say about the object of the triple. Object properties with
        > related classes allow for richer information capture and resource reuse.

    -   \(2) There is a (existing or potential) defined set of values (i.e., a
        > controlled vocabulary).

-   If you are not wanting to use object properties because:

    -   there doesn’t exist a controlled vocabulary, Class, or other at
        > present for the object values (which could be many):

        -   Create a controlled vocabulary in a new namespace.

        -   This ‘controlled vocabulary’ could be supported by creating
            > a new Class and then using:

            -   Subclasses

            -   Named Individuals

            -   RDF instance data

    -   there is difficult existing or legacy data:

        -   You do not want to limit the modeling or richer capture of
            > native RDF instance data because of past practices in
            > legacy data.

        -   Follow the [*Legacy Literals
            > recommendation*](http://drive.google.com/open?id=1CyUl0tID3c62_klq77B2YFERtFtFrLeHULqWnjzLnvg)
            > by modeling according to what fits best the needs of
            > native RDF instance data. Legacy data will be captured on
            > a string value (see the recommendation for details about
            > precisely how it is captured) for future normalization.

        -   This allows a single query path to get what should be the
            > same type of information, which is good RDF modeling
            > practice **and** makes data normalization and cleaning
            > efforts easier down the road.

    -   there is incomplete existing or legacy data:

        -   This follows the reasons for difficult existing or legacy
            > data (above).

        -   Then, instead of planning for normalization, you’re just
            > focused on enhancement (capturing further information or
            > performing reconciliation).

-   There are cases when a datatype property should genuinely be used.
    > This is when there will be nothing else to say about the object of
    > a triple statement. These include but are not limited to:

    -   Encoded date values

    -   Counts or other numeric values

    -   A label literal

    -   Unstructured text that should remain unstructured
        > (transcriptions, specific note values, etc.)

    -   Transcribed statements as literals that are specifically
        > transcribed for a particular use case.

Other Patterns & Guidelines related to this Recommendation
----------------------------------------------------------

1.  [*Legacy
    > Literals*](http://drive.google.com/open?id=1CyUl0tID3c62_klq77B2YFERtFtFrLeHULqWnjzLnvg)
    > (Unstructured legacy data)

2.  [*Notes and Annotations (including a discussion of
    > bf:Note)*](http://drive.google.com/open?id=1aGG19L48ljyHpw-wcGfshakU6DTxORBj6zoX8iygu3Q)

3.  Others as listed below.

Datatype Properties in BF2 versus LD4L-O
----------------------------------------

What follows is a review of datatype properties currently in BIBFRAME
v.2 that have been discussed with regards to making (or not) these into
object properties. The related LD4All Sprint Group Recommendation or
Discussion Status for the property is in the second column.

This is not an exhaustive list of datatype properties, and many of the
discussions will link out to other patterns or topic areas currently
queued for LD4All Alignment Group discussion.

+-----------------------------------+-----------------------------------+
| **BIBFRAME v.2 **                 | **LD4All Status**                 |
|                                   |                                   |
| **Including openness of LC to     | **Including current               |
| changing from a datatype to an    | recommendations from LD4All       |
| object property.**                | discussions on using these.**     |
+===================================+===================================+
| ### bf:acquisitionSource          | ### ld4l:AcquisitionActivity bf:s |
|                                   | ource foaf:Agent                  |
| **Datatype that could be object   |                                   |
| property.**                       | This should point to an           |
|                                   | organization or other type of     |
| **Label**: Source of acquisition  | entity resource, making it an     |
|                                   | Object Property.                  |
| **URI**:                          |                                   |
| http://id.loc.gov/ontologies/bibf | In LD4All recommendations, it is  |
| rame/acquisitionSource            | seen as part of an Activity       |
|                                   | resource, namely, the source of   |
| **Definition**: "Information      | ld4l:AcquisitionActivity captured |
| about an organization, etc., from | with bf:source pointing to a      |
| which a resource may be           | foaf:Agent instance (URI for the  |
| obtained."                        | Agent - probably, Organization).  |
|                                   |                                   |
| **Comment:** Used with Work or    |                                   |
| Instance                          |                                   |
|                                   |                                   |
| **Domain:** None                  |                                   |
|                                   |                                   |
| **Range:** rdfs:Literal           |                                   |
|                                   |                                   |
| **Modified**: "2016-04-21 (New)"  |                                   |
+-----------------------------------+-----------------------------------+
| ### bf:acquisitionTerms           | ### ld4l Activity Pattern ...     |
|                                   |                                   |
| **Datatype that could be object   | This could point to a variety of  |
| property.**                       | types of information. This        |
|                                   | supports making this an Object    |
| **Label**: Terms of acquisition\  | Property with a new Class for     |
| **Definition**: "Conditions under | having all the related            |
| which the publisher, distributor, | information in a more granular    |
| etc., will normally supply a      | way (i.e. bf:AcquisitionTerms     |
| resource, e.g., price of a        | bf:price “data” ; bf:license      |
| resource." .\                     | \[license URI?\]; etc.)           |
| **Comment**: Used with Work or    |                                   |
| Instance                          | [*LD4All will use a subclass of   |
|                                   | Activity to cover this needed     |
| **Domain**: None                  | Class*](http://drive.google.com/o |
|                                   | pen?id=1-UWiCw50Q9s3vAU3FWZcyomRn |
| **Range:** rdfs:Literal\          | Pe_lp6ZTW868fjpMCQ).              |
| **URI**:                          | The generated LD4L Activity class |
| http://id.loc.gov/ontologies/bibf | will contain properties according |
| rame/acquisitionTerms             | to what type of information is    |
|                                   | found/contained by this resource  |
|                                   | (e.g. price, license, format,     |
|                                   | deal, etc.)                       |
+-----------------------------------+-----------------------------------+
| ### bf:ascensionAndDeclination    | ### TBD                           |
|                                   |                                   |
| **Datatype that is a placeholder  | This is an extremely lossy data   |
| for legacy literals.**            | property when looking at MARC21   |
|                                   | to BIBFRAME v.2 conversion. It    |
| **URI**:                          | should be supported by creating   |
| http://id.loc.gov/ontologies/bibf | the appropriate modeling of an    |
| rame/ascensionAndDeclination\     | ontology fragment that best       |
| **Domain**: bf:Cartographic\      | serves capturing this             |
| **Range**: rdfs:Literal\          | information. The legacy literals  |
| **Definition**: "System for       | data is then captured as best     |
| identifying the location of a     | able as outlined in the [*legacy  |
| celestial object in the sky       | literals                          |
| covered by the cartographic       | recommendation.*](http://drive.go |
| content of a resource using the   | ogle.com/open?id=1CyUl0tID3c62_kl |
| angles of right ascension and     | q77B2YFERtFtFrLeHULqWnjzLnvg)     |
| declination." .\                  |                                   |
| **Label**: "Cartographic          | LD4All is leaving the modeling    |
| ascension and declination"        | work for this data to the         |
|                                   | Geospatial extension.             |
+-----------------------------------+-----------------------------------+
| ### bf:awards                     | ### ld4l:Award & ld4l:AwardReceip |
|                                   | t                                 |
| **Datatype that is an informal    |                                   |
| note property.**                  | This note contains information    |
|                                   | about an Award received by the    |
| **URI**:                          | resource described. This is an    |
| http://id.loc.gov/ontologies/bibf | ideal candidate for improved      |
| rame/awards\                      | modeling starting with BIBFRAME   |
| **Range**: rdfs:Literal\          | v.2 natively-created RDF, albeit  |
| **Definition**: "Information on   | the conversion of existing data   |
| awards associated with the        | will be hard.                     |
| described resource." .\           |                                   |
| **Comment**: "Used with Work or   | LD4All is recommending following  |
| Instance" .\                      | the [*Awards                      |
| **Label**: "Award note"           | pattern*](http://drive.google.com |
|                                   | /open?id=1qhTlta2ZlCeo7TinnSlUG_o |
|                                   | UEqAqG6x5mIi0scT6aOI),            |
|                                   | which follows the [*VIVO          |
|                                   | Ontology*](http://www.vivoweb.org |
|                                   | /downloads)                       |
|                                   | in its approach to Awards - it    |
|                                   | uses Object Properties with       |
|                                   | Classes ld4l:Award and            |
|                                   | ld4l:AwardReceipt. It also        |
|                                   | recommends following the [*Legacy |
|                                   | Literals*](http://drive.google.co |
|                                   | m/open?id=1CyUl0tID3c62_klq77B2YF |
|                                   | ERtFtFrLeHULqWnjzLnvg)            |
|                                   | recommendation when moving        |
|                                   | existing data to this Awards      |
|                                   | modeling construct.               |
+-----------------------------------+-----------------------------------+
| ### bf:changeDate                 | ### TBD                           |
|                                   |                                   |
| **Datatype that should stay so.** | Dates should be datatype          |
|                                   | properties, in particular using   |
| **URI**:                          | [*EDTF*](https://www.loc.gov/stan |
| http://id.loc.gov/ontologies/bibf | dards/datetime/)                  |
| rame/changeDate\                  | encoding for capturing related    |
| **Domain**: bf:AdminMetadata\     | information (approximate versus   |
| **Range**: rdfs:Literal\          | exact, date ranges, etc.) about   |
| **Definition**: "Date or date and | the date in an standardized       |
| time on which the metadata was    | fashion.                          |
| modified." .\                     |                                   |
| **subPropertyOf**: bf:date\       | This is part of a forthcoming     |
| **Label**: Description change     | [*Administration Metadata         |
| date                              | recommendation*](http://drive.goo |
|                                   | gle.com/open?id=1sPT_r_nZob99pkn3 |
|                                   | EBkwZlB_rOdtjuW9JEnK5e7Jv-A),     |
|                                   | where these properties are        |
|                                   | applied to BIBFRAME RDF instance  |
|                                   | data in a different fashion. It   |
|                                   | doesn’t change using a datatype   |
|                                   | property (for LD4All,             |
|                                   | dcterms:date) for date, but would |
|                                   | change where this assertion would |
|                                   | occur.                            |
+-----------------------------------+-----------------------------------+
| ### bf:classificationPortion      | ### bf:classificationPortion      |
|                                   |                                   |
| **Datatype with ‘too many         | This is a property LD4All will be |
| possible values to have any use   | largely recommending to use as    |
| as an object property’.**         | found in BIBFRAME.                |
|                                   |                                   |
| **URI**:                          | There is a [*Classification       |
| http://id.loc.gov/ontologies/bibf | Recommendation                    |
| rame/classificationPortion\       | document*](http://drive.google.co |
| **Domain**: bf:Classification\    | m/open?id=1XnI1BoujCZonsGaKCuMUF5 |
| **Range**: rdfs:Literal\          | 88mqb_q0QvXev3JSc-QfY)            |
| **Definition**: "Classification   | to recommend future exploration   |
| number (single class number or    | if and how one could improve the  |
| beginning number of a span) that  | Classification information        |
| indicates the subject by applying | captured through use of Object    |
| a formal system of coding and     | Properties and Classes. This is   |
| organizing resources." .\         | an area for future exploration,   |
| **Label**: "Classification        | not a current recommendation for  |
| number"                           | change.                           |
+-----------------------------------+-----------------------------------+
| ### bf:code                       | ### TBD                           |
|                                   |                                   |
| **Datatype with ‘too many         | [*There is uncertainty in the     |
| possible values to have any use   | LD4All Sprint                     |
| as an object property’.**         | Group*](http://drive.google.com/o |
|                                   | pen?id=1DZ7f8O4hpwGl9Hnw6HMN7gGS7 |
| **URI**:                          | BZAd74_IAxGS-fhhhY)               |
| http://id.loc.gov/ontologies/bibf | around how this property would be |
| rame/code\                        | used.                             |
| **Range**: rdfs:Literal\          |                                   |
| **Definition**: "String of        | If this is primarily a way to     |
| characters that serves as a code  | capture MARC21 fixed field codes, |
| representing information." .\     | it is probably recommended to     |
| **Comment**: "Used with           | review the various codes and      |
| Unspecified"\                     | determine if those shouldn’t have |
| **Label**: "Code"                 | MARC code to URI (bf:Work or      |
|                                   | bf:Instance subclasses most       |
|                                   | likely, but other Classes         |
|                                   | involved) conversion mapping.     |
+-----------------------------------+-----------------------------------+
| ### bf:coordinates                | ### TBD                           |
|                                   |                                   |
| **Datatype that is a placeholder  | This is an extremely lossy data   |
| for legacy literals.**            | property when looking at MARC21   |
|                                   | to BIBFRAME v.2 conversion. It    |
| **URI**:                          | should be supported by creating   |
| http://id.loc.gov/ontologies/bibf | the appropriate modeling of an    |
| rame/coordinates\                 | ontology fragment that best       |
| **Domain**: bf:Cartographic\      | serves capturing this information |
| **Range**: rdfs:Literal\          | (which would be an Object         |
| **Definition**: "Mathematical     | Property and needed Classes). The |
| system for identifying the area   | legacy literals data is then      |
| covered by the cartographic       | captured as best able in that     |
| content of a resource, expressed  | fragment through the use of       |
| either by means of longitude and  | rdfs:label and rdfs:comment. See  |
| latitude on the surface of        | the [*legacy literals             |
| planets or by the angles of right | recommendation.*](http://drive.go |
| ascension and declination for     | ogle.com/open?id=1CyUl0tID3c62_kl |
| celestial cartographic content."  | q77B2YFERtFtFrLeHULqWnjzLnvg)     |
| .\                                |                                   |
| **Label**: "Cartographic          | LD4All is leaving the modeling    |
| coordinates"                      | work for this data to the         |
|                                   | Geospatial extension.             |
+-----------------------------------+-----------------------------------+
| ### bf:copyrightDate              | ### ld4l:CopyrightActivity dcterm |
|                                   | s:date literal                    |
| **Datatype that should stay so.** |                                   |
|                                   | Dates should be datatype          |
| **URI**:                          | properties, in particular using   |
| http://id.loc.gov/ontologies/bibf | [*EDTF*](https://www.loc.gov/stan |
| rame/copyrightDate\               | dards/datetime/)                  |
| **Range**: rdfs:Literal\          | encoding for capturing related    |
| **Definition**: "Date associated  | information (approximate versus   |
| with a claim of protection under  | exact, date ranges, etc.) about   |
| copyright or a similar regime."   | the date in an standardized       |
| .\                                | fashion.                          |
| **subPropertyOf:** bf:date\       |                                   |
| **Comment**: "Used with Work or   | LD4All will use a subclass of     |
| Instance" .\                      | ld4l:Activity called              |
| **Label**: "Copyright date"       | ld4l:CopyrightActivity. The       |
|                                   | ld4l:CopyrightActivity class will |
|                                   | contain properties according to   |
|                                   | what type of information is       |
|                                   | found/contained by this resource, |
|                                   | including date.                   |
+-----------------------------------+-----------------------------------+
| ### bf:contentAccessibility       | ### ld4l:hasAccessibility ld4l:Ac |
|                                   | cessibility                       |
| **Datatype that could be object   |                                   |
| property.**                       | The LD4All Sprint Group           |
|                                   | recommendation is to make this an |
| **URI**:                          | Object Property with related      |
| http://id.loc.gov/ontologies/bibf | Class (and subclasses). This is   |
| rame/contentAccessibility\        | to manage being able to say more  |
| **Range:** rdfs:Literal\          | about the accessibility feature   |
| **Definition**: "Information that | or hazard present in the          |
| assists those with a sensory      | resource. Read more on the        |
| impairment for greater            | [*Content Accessibility Sprint    |
| understanding of content, e.g.,   | Recommendation                    |
| captions." .\                     | Document*](http://drive.google.co |
| **Comment**: "Used with Work or   | m/open?id=1VjcGbF3E4xrM_PI5mAR6LF |
| Instance" .\                      | DTlaWmR4llGZDSDYQ7MYU).           |
| **Label**: "Content accessibility |                                   |
| note" .                           |                                   |
+-----------------------------------+-----------------------------------+
| ### bf:count                      | ### bf:count                      |
|                                   |                                   |
| **Datatype that should stay so.** | LD4All Sprint Group               |
|                                   | recommendation is to use this     |
| **URI**:                          | property as found in BIBFRAME,    |
| http://id.loc.gov/ontologies/bibf | and to keep it as a datatype      |
| rame/count\                       | property. In some circumstances   |
| **Range**: rdfs:Literal\          | this data would be modeled using  |
| **Definition**: "Number           | the recommendation in the         |
| associated with a measure of      | [*Dimensions                      |
| units, such as the number of      | Recommendation*](https://docs.goo |
| units and/or subunits making up a | gle.com/document/d/1QCVkYM3NR99NI |
| resource." .\                     | Ti-ZWF8HkMYYDSkYrfRhZ30frQD7_w/ed |
| **Comment**: "Used with           | it?usp=drive_web).                |
| Unspecified" .\                   |                                   |
| **Label**: "Number of units"      |                                   |
+-----------------------------------+-----------------------------------+
| ### bf:creationDate               | ### dcterms:date                  |
|                                   |                                   |
| **Datatype that should stay so.** | This is part of a forthcoming     |
|                                   | [*Administration Metadata         |
| **URI**:                          | recommendation*](http://drive.goo |
| http://id.loc.gov/ontologies/bibf | gle.com/open?id=1sPT_r_nZob99pkn3 |
| rame/creationDate\                | EBkwZlB_rOdtjuW9JEnK5e7Jv-A),     |
| **Domain**: bf:AdminMetadata\     | where these properties are        |
| **Range**: rdfs:Literal\          | applied to BIBFRAME RDF instance  |
| **Definition**: "Date or date and | data in a different fashion. In   |
| time on which the original        | that context, this would very     |
| metadata first created." .\       | likely stay a datatype property   |
| **subPropertyOf**: bf:date\       | that relates an                   |
| **Label**: "Description creation  | [*EDTF*](https://www.loc.gov/stan |
| date"                             | dards/datetime/)-encoded          |
|                                   | date to the Administrative        |
|                                   | Metadata activity.                |
+-----------------------------------+-----------------------------------+
| ### bf:credits                    | ### ld4l:Activity rdfs:label      |
|                                   |                                   |
| **Datatype that is an informal    | It is uncertain if this property  |
| note property.**                  | is a note property because the    |
|                                   | legacy literal data is hard to    |
| **URI**:                          | parse into more granularly        |
| http://id.loc.gov/ontologies/bibf | modeled instance data, or if it   |
| rame/credits\                     | is information that should remain |
| **Range**: rdfs:Literal\          | a note.                           |
| **Definition**: "Information in   |                                   |
| note form of credits for persons  | The current LD4All Sprint Group   |
| or organizations who have         | recommendation is to capture this |
| participated in the creation      | information using the appropriate |
| and/or production of the          | ld4l:Activity pattern, then to    |
| resource." .\                     | assert the legacy data onto the   |
| **Comment**: "Used with Work or   | ld4l:Activity instance following  |
| Instance" .\                      | the [*Legacy Literals             |
| **Label**: "Credits note"         | recommendation*](http://drive.goo |
|                                   | gle.com/open?id=1CyUl0tID3c62_klq |
|                                   | 77B2YFERtFtFrLeHULqWnjzLnvg).     |
|                                   |                                   |
|                                   | We might reconsider this          |
|                                   | information as a different type   |
|                                   | of note (especially if it is      |
|                                   | meant to contain multiple agents  |
|                                   | in one literal, instead of being  |
|                                   | a place for legacy data yet to be |
|                                   | parsed) following the [*Notes and |
|                                   | Annotations                       |
|                                   | Recommendation*](http://drive.goo |
|                                   | gle.com/open?id=1aGG19L48ljyHpw-w |
|                                   | cGfshakU6DTxORBj6zoX8iygu3Q)      |
|                                   | - namely, making an oa:Motivation |
|                                   | named individual of ld4l:Credits. |
+-----------------------------------+-----------------------------------+
| ### bf:custodialHistory           | ### TBD                           |
|                                   |                                   |
| **Datatype that could be object   | This is being reviewed for better |
| property.**                       | handling as part of the           |
|                                   | [*Activities                      |
| **URI**:                          | Recommendation*](http://drive.goo |
| http://id.loc.gov/ontologies/bibf | gle.com/open?id=1-UWiCw50Q9s3vAU3 |
| rame/custodialHistory\            | FWZcyomRnPe_lp6ZTW868fjpMCQ).     |
| **Range:** rdfs:Literal\          |                                   |
| **Definition**: "Information      | Namely, instead of using a        |
| about the provenance, such as     | datatype property, have this      |
| origin, ownership and custodial   | information captured through the  |
| history (chain of custody), of a  | use of ld4l:OwnershipActivity or  |
| resource." .\                     | ld4l:CustodialActivity resources  |
| **Comment**: “Used with Work,     | that have dates and agents (among |
| Instance or Item"\                | other information) for ownership. |
| **Label**: Custodial history      | These resources would be asserted |
|                                   | directly on the appropriate Item  |
|                                   | instead of related directly to    |
|                                   | each other.                       |
+-----------------------------------+-----------------------------------+
| ### bf:date                       | ### dcterms:date                  |
|                                   |                                   |
| **Datatype that should stay so.** | Dates should be datatype          |
|                                   | properties, in particular using   |
| **URI**:                          | [*EDTF*](https://www.loc.gov/stan |
| http://id.loc.gov/ontologies/bibf | dards/datetime/)                  |
| rame/date\                        | encoding for capturing related    |
| **Range**: rdfs:Literal\          | information (approximate versus   |
| **Definition**: "Date designation | exact, date ranges, etc.) about   |
| associated with a resource or     | the date in a standardized        |
| element of description, such as   | fashion.                          |
| date of title variation; year a   |                                   |
| degree was awarded; date          | The generic dcterms:date is       |
| associated with the publication,  | recommended for use. The literal  |
| printing, distribution, issue,    | value for the date is recommended |
| release or production of a        | to use EDTF encoding. LD4All      |
| resource. May be date typed." .\  | recommends asserted dcterms:date  |
| **Comment**: "Used with           | on subclasses of ld4l:Activity to |
| Unspecified" .\                   | indicate the kind of date (as     |
| **Label**: "Date"                 | well as other information)        |
|                                   | captured.                         |
+-----------------------------------+-----------------------------------+
| ### bf:degree                     | ### ld4l:AcademicDegree & ld4l:De |
|                                   | greeReceipt                       |
| **Datatype that could be object   |                                   |
| property.**                       | This note contains information    |
|                                   | about an Academic Degree received |
| **Label**: Degree                 | by the resource described. This   |
|                                   | is an ideal candidate for         |
| **URI**:                          | improved modeling starting with   |
| http://id.loc.gov/ontologies/bibf | BIBFRAME v.2 natively-created     |
| rame/degree                       | RDF, albeit the conversion of     |
|                                   | existing data will be hard.       |
| **Definition**: "Degree for which |                                   |
| author was a candidate."          | LD4All is recommending following  |
|                                   | the [*Degrees                     |
| **Domain:** bf:Dissertation       | pattern*](http://drive.google.com |
|                                   | /open?id=1P5rOZYe0YOlYj7Ph4wBQBhZ |
| **Range:** rdfs:Literal           | SH5ouiK5pcyQTz4I0RjY),            |
|                                   | which follows the [*VIVO          |
| **Modified**: "2016-04-21 (New)"  | Ontology*](http://www.vivoweb.org |
|                                   | /downloads)                       |
|                                   | in its approach to Academic       |
|                                   | Degrees - it uses Object          |
|                                   | Properties with Classes           |
|                                   | ld4l:AcademicDegree and           |
|                                   | ld4l:DegreeReceipt. It also       |
|                                   | recommends following the [*Legacy |
|                                   | Literals*](http://drive.google.co |
|                                   | m/open?id=1CyUl0tID3c62_klq77B2YF |
|                                   | ERtFtFrLeHULqWnjzLnvg)            |
|                                   | recommendation when moving        |
|                                   | existing data to this Degrees     |
|                                   | modeling construct.               |
+-----------------------------------+-----------------------------------+
| ### bf:derivedFrom                | ### TBD                           |
|                                   |                                   |
| **Datatype that could be object   | This is part of a forthcoming     |
| property.**                       | [*Administration Metadata         |
|                                   | recommendation*](http://drive.goo |
| **Label**: Source metadata        | gle.com/open?id=1sPT_r_nZob99pkn3 |
|                                   | EBkwZlB_rOdtjuW9JEnK5e7Jv-A),     |
| **URI**:                          | where these properties are        |
| http://id.loc.gov/ontologies/bibf | applied to BIBFRAME RDF instance  |
| rame/derivedFrom                  | data in a different fashion. In   |
|                                   | that context, this would very     |
| **Definition**: "Link to the      | likely become an Object Property  |
| metadata that was the source of   | that links datasets or named      |
| the data."                        | graph resources together through  |
|                                   | a derivation/conversion property, |
| **Domain:** bf:AdminMetadata      | TBD.                              |
|                                   |                                   |
| **Range:** rdfs:Literal           |                                   |
|                                   |                                   |
| **Modified**: "2016-04-21 (New)"  |                                   |
+-----------------------------------+-----------------------------------+
| ### bf:dimensions                 | ### ld4l:hasDimension ld4l:Dimens |
|                                   | ion                               |
| **Datatype that is a placeholder  |                                   |
| for legacy literals.**            | This is being reviewed as part of |
|                                   | the [*Dimensions Recommendation   |
| **URI**:                          | work*](http://drive.google.com/op |
| http://id.loc.gov/ontologies/bibf | en?id=1QCVkYM3NR99NITi-ZWF8HkMYYD |
| rame/dimensions\                  | SkYrfRhZ30frQD7_w)                |
| **Domain**: bf:Instance\          | - in particular, looking for      |
| **Range**: rdfs:Literal\          | external ontologies to reuse. See |
| **Definition**: "Measurements of  | also the [*legacy literals        |
| the carrier or carriers and/or    | recommendation*](http://drive.goo |
| the container of a resource." .\  | gle.com/open?id=1CyUl0tID3c62_klq |
| **Label**: "Dimensions"           | 77B2YFERtFtFrLeHULqWnjzLnvg)      |
|                                   | which should guide the capturing  |
|                                   | of existing, problematic legacy   |
|                                   | data.                             |
|                                   |                                   |
|                                   | In case of failure to identify an |
|                                   | appropriate external vocabulary,  |
|                                   | LD4L-O will define a              |
|                                   | ld4l:hasDimension property with   |
|                                   | range ld4l:Dimension, which       |
|                                   | allows assertion of more granular |
|                                   | data such as ld4l:height,         |
|                                   | ld4l:width, ld4l:length, bf:count |
|                                   | (already exists), bf:unit         |
|                                   | (already exists), etc.            |
+-----------------------------------+-----------------------------------+
| ### bf:duration                   | ### ld4l:dimension ld4l:Dimension |
|                                   |  ...                              |
| **Datatype that should stay so.** |                                   |
|                                   | This is being reviewed as part of |
| **URI**:                          | the [*Dimensions Recommendation   |
| http://id.loc.gov/ontologies/bibf | work*](http://drive.google.com/op |
| rame/duration\                    | en?id=1QCVkYM3NR99NITi-ZWF8HkMYYD |
| **Range**: rdfs:Literal\          | SkYrfRhZ30frQD7_w)                |
| **Definition**: "Information      | - in particular, looking for      |
| about the playing time, running   | external ontologies to reuse. See |
| time, etc. of a resource." .\     | also the [*legacy literals        |
| **Comment**: "Used with Work or   | recommendation*](http://drive.goo |
| Instance" .\                      | gle.com/open?id=1CyUl0tID3c62_klq |
| **Label**: "Duration"             | 77B2YFERtFtFrLeHULqWnjzLnvg)      |
|                                   | which should guide the capturing  |
|                                   | of existing, problematic legacy   |
|                                   | data.                             |
|                                   |                                   |
|                                   | In case of failure to identify an |
|                                   | appropriate external vocabulary,  |
|                                   | LD4L-O will define a              |
|                                   | ld4l:hasDimension property with   |
|                                   | range ld4l:Dimension, which       |
|                                   | allows assertion of more granular |
|                                   | data such as ld4l:height,         |
|                                   | ld4l:width, ld4l:length, bf:count |
|                                   | (already exists), bf:unit         |
|                                   | (already exists), etc.            |
+-----------------------------------+-----------------------------------+
| ### bf:edition                    | ### bf:edition (generic)          |
|                                   |                                   |
| **Datatype with ‘too many         | This is a property LD4All will be |
| possible values to have any use   | largely recommending to use as    |
| as an object property’.**         | found in BIBFRAME. There is a     |
|                                   | [*Classification Recommendation   |
| **URI**:                          | document*](http://drive.google.co |
| http://id.loc.gov/ontologies/bibf | m/open?id=1XnI1BoujCZonsGaKCuMUF5 |
| rame/edition\                     | 88mqb_q0QvXev3JSc-QfY)            |
| **Domain**: bf:Classification\    | to recommend future exploration   |
| **Range**: rdfs:Literal\          | if and how one could improve the  |
| **Definition**: "Edition of the   | Classification information        |
| classification scheme, such as    | captured through use of Object    |
| full, abridged or a number, when  | Properties and Classes. This is   |
| a classification scheme           | an area for future exploration,   |
| designates editions." .\          | not a current recommendation for  |
| **Label**: "Classification scheme | change.                           |
| edition"                          |                                   |
|                                   | There is confusion over the use   |
|                                   | of bf:edition property            |
|                                   | specifically for                  |
|                                   | bf:Classification instead of      |
|                                   | creating a more general           |
|                                   | bf:edition property (that could   |
|                                   | capture also the edition          |
|                                   | information detailed below).      |
+-----------------------------------+-----------------------------------+
| ### bf:editionEnumeration         | ### bf:edition (generic)          |
|                                   |                                   |
| **Datatype with ‘too many         | Keeping this as a datatype        |
| possible values to have any use   | property makes sense to the       |
| as an object property’.**         | LD4All Sprint Group.              |
|                                   |                                   |
| **URI**:                          | There is a recommendation to      |
| http://id.loc.gov/ontologies/bibf | collapse this with bf:edition,    |
| rame/editionEnumeration\          | which is currently specified for  |
| **Domain**: bf:Instance\          | use with bf:Classification. This  |
| **Range**: rdfs:Literal\          | would make bf:edition a generic,  |
| **Definition**: "Enumeration of   | datatype property for capturing   |
| the edition; usually              | edition information.              |
| transcribed." .\                  |                                   |
| **Label**: "Edition enumeration"  |                                   |
+-----------------------------------+-----------------------------------+
| ### bf:editionStatement           | ### bf:editionStatement           |
|                                   |                                   |
| **Datatype that is an informal    | Keeping this as a datatype        |
| note property.**                  | property makes sense to the       |
|                                   | LD4All Sprint Group, and to keep  |
| **URI**:                          | distinct from                     |
| http://id.loc.gov/ontologies/bibf | bf:editionEnumeration if indeed   |
| rame/editionStatement\            | different (from examples given,   |
| **Domain**: bf:Instance\          | it appears so). Relating this in  |
| **Range**: rdfs:Literal\          | some way with                     |
| **Definition**: "Information      | bf:responsibilityStatement seems  |
| identifying the edition or        | appropriate, but is out of scope  |
| version of the resource and       | of this recommendation document.  |
| associated statements of          |                                   |
| responsibility for the edition;   |                                   |
| usually transcribed." .\          |                                   |
| **Label**: "Edition statement"    |                                   |
+-----------------------------------+-----------------------------------+
| ### bf:ensembleType               | ### TBD                           |
|                                   |                                   |
| **Datatype that is a placeholder  | This is being handled by the      |
| for legacy literals.**            | Performed Music Extension.        |
|                                   |                                   |
| **URI**:                          | In general, any datatype property |
| http://id.loc.gov/ontologies/bibf | with \*Type in the label,         |
| rame/ensembleType\                | however, is an ideal candidate    |
| **Domain**: bf:MusicEnsemble\     | for becoming an object property   |
| **Range**: rdfs:Literal\          | (with the types becoming          |
| **Definition**: "Specific type of | subclasses or named individuals   |
| ensemble, such as orchestra,      | of a new Class).                  |
| band, guitar ensemble." .\        |                                   |
| **Label**: "Ensemble type"        |                                   |
+-----------------------------------+-----------------------------------+
| ### bf:equinox                    | ### TBD                           |
|                                   |                                   |
| **Datatype that is a placeholder  | LD4All is leaving the modeling    |
| for legacy literals.**            | work for this data to the         |
|                                   | Geospatial extension.             |
| **URI**:                          |                                   |
| http://id.loc.gov/ontologies/bibf |                                   |
| rame/equinox\                     |                                   |
| **Domain**: bf:Cartographic\      |                                   |
| **Range**: rdfs:Literal\          |                                   |
| **Definition**: "One of two       |                                   |
| points of intersection of the     |                                   |
| ecliptic and the celestial        |                                   |
| equator, occupied by the sun when |                                   |
| its declination is 0 degrees." .\ |                                   |
| **Label**: "Cartographic equinox" |                                   |
+-----------------------------------+-----------------------------------+
| ### bf:exclusionGRing             | ### TBD                           |
|                                   |                                   |
| **Datatype that is a placeholder  | LD4All is leaving the modeling    |
| for legacy literals.**            | work for this data to the         |
|                                   | Geospatial extension.             |
| **URI**:                          |                                   |
| http://id.loc.gov/ontologies/bibf |                                   |
| rame/exclusionGRing\              |                                   |
| **Domain**: bf:Cartographic\      |                                   |
| **Range**: rdfs:Literal\          |                                   |
| **Definition**: "Coordinate pairs |                                   |
| that identify the closed          |                                   |
| non-intersecting boundary of the  |                                   |
| area contained within the         |                                   |
| G-polygon outer ring that is      |                                   |
| excluded." .\                     |                                   |
| **Label**: "Cartographic G ring   |                                   |
| area excluded"                    |                                   |
+-----------------------------------+-----------------------------------+
| ### bf:firstIssue                 | ### Work Relationships (Object Pr |
|                                   | operties)                         |
| **Datatype that should stay so.** |                                   |
|                                   | This is a clear case for where an |
| **URI**:                          | Object Property should be used,   |
| http://id.loc.gov/ontologies/bibf | as it would link a Series title   |
| rame/firstIssue\                  | (bf:Work resource) to an Issue    |
| **Range**: rdfs:Literal\          | (another bf:Work resource). It    |
| **Definition**: "Beginning date   | falls into the work proposed by   |
| of a resource and/or the          | the [*LD4All Sprint Group         |
| sequential designations." .\      | Recommendation Document for       |
| **Comment**: "Used with Work or   | handling Series, Serials and      |
| Instance" .\                      | Complex                           |
| **Label**: "Multipart first       | Objects*](http://drive.google.com |
| issue"                            | /open?id=1RfIkxkvmtDMsxGEsesMh7Of |
|                                   | u9ZViIJja4u1wI79UTlY).            |
+-----------------------------------+-----------------------------------+
| ### bf:generationDate             | ### TBD                           |
|                                   |                                   |
| **Datatype that should stay so.** | Dates should be datatype          |
|                                   | properties, in particular using   |
| **URI**:                          | [*EDTF*](https://www.loc.gov/stan |
| http://id.loc.gov/ontologies/bibf | dards/datetime/)                  |
| rame/generationDate\              | encoding for capturing related    |
| **Domain**: bf:AdminMetadata\     | information (approximate versus   |
| **Range**: rdfs:Literal\          | exact, date ranges, etc.) about   |
| **Definition**: "Date of          | the date in a standardized        |
| conversion of the metadata from   | fashion.                          |
| another format." .\               |                                   |
| **subPropertyOf**: bf:date\       | This is part of a forthcoming     |
| **Label**: "Date generated"       | [*Administration Metadata         |
|                                   | recommendation*](http://drive.goo |
|                                   | gle.com/open?id=1sPT_r_nZob99pkn3 |
|                                   | EBkwZlB_rOdtjuW9JEnK5e7Jv-A),     |
|                                   | where these properties are        |
|                                   | applied to BIBFRAME RDF instance  |
|                                   | data in a different fashion. It   |
|                                   | doesn’t change using datatype     |
|                                   | properties for date, but would    |
|                                   | change where this assertion would |
|                                   | occur.                            |
+-----------------------------------+-----------------------------------+
| ### bf:geographicCoverage         | ### ld4l:geographicCoverage       |
|                                   |                                   |
| **Datatype that could be object   | This should be an Object          |
| property.**                       | Property, with prov:Location or   |
|                                   | bf:Place as the range. See the    |
| **URI**:                          | [*legacy literals                 |
| http://id.loc.gov/ontologies/bibf | recommendation*](http://drive.goo |
| rame/geographicCoverage\          | gle.com/open?id=1CyUl0tID3c62_klq |
| **Domain:** bf:Work\              | 77B2YFERtFtFrLeHULqWnjzLnvg)      |
| **Range:** rdfs:Literal\          | for the handling of existing data |
| **Definition**: "Geographic       | in the conversion process.        |
| coverage of the content of the    |                                   |
| resource." .\                     |                                   |
| **Label**: "Geographic coverage"  |                                   |
+-----------------------------------+-----------------------------------+
| ### bf:hierarchicalLevel          | ### TBD                           |
|                                   |                                   |
| **Datatype that needs for         | The proposed usage of this        |
| evaluation.**                     | property is unclear - could be    |
|                                   | modeling archival collections,    |
| **Label**: Hierarchical level of  | general collection-level records, |
| material                          | table of contents type levels, or |
|                                   | other.                            |
| **URI**:                          |                                   |
| http://id.loc.gov/ontologies/bibf | This seems an ideal candidate to  |
| rame/hierarchicalLevel            | become an Object Property in the  |
|                                   | future, as the use cases given    |
| **Definition**: "Hierarchical     | could be reflected in Work - Work |
| position of the described         | relationships, or Part - Whole    |
| materials relative to other       | relationships, or other. This     |
| material from the same source."   | will rest on discussions          |
|                                   | occurring around question for LC  |
| **Domain:** bf:Arrangement        | from the LD4All Sprint Group.     |
|                                   |                                   |
| **Range:** rdfs:Literal           |                                   |
|                                   |                                   |
| **Modified**: "2016-04-21 (New)"  |                                   |
+-----------------------------------+-----------------------------------+
| ### bf:historyOfWork              | ### TBD                           |
|                                   |                                   |
| **Datatype that is an informal    | This is a property for which the  |
| note property.**                  | LD4All Sprint Group asked the     |
|                                   | Library of Congress for further   |
| **URI**:                          | examples.                         |
| http://id.loc.gov/ontologies/bibf |                                   |
| rame/historyOfWork\               | LD4All Sprint Group               |
| **Domain**: bf:Work\              | recommendations for this          |
| **Range**: rdfs:Literal\          | particular property is dependent  |
| **Definition**: "Information      | on that response.                 |
| about the history of a Work." .\  |                                   |
| **Label**: "History of the work"  |                                   |
+-----------------------------------+-----------------------------------+
| ### bf:immediateAcquisition       | ### ld4l:AcquisitionActivity ...  |
|                                   |                                   |
| **Datatype that could be object   | This property points to a note    |
| property.**                       | that has a variety of information |
|                                   | in it about the acquisition of a  |
| **Label**: Immediate acquisition  | resource by a particular library. |
|                                   | This leans toward using an object |
| **URI**:                          | property and related Class minted |
| http://id.loc.gov/ontologies/bibf | for the sake of capturing more    |
| rame/immediateAcquisition         | granularly the information about  |
|                                   | the acquisition.                  |
| **Definition**: "Information      |                                   |
| about the circumstances, e.g.,    | In LD4All recommendations, it is  |
| source, date, method, under which | seen as information captured on   |
| the resource was directly         | an instance of ld4l:Activity,     |
| acquired."                        | namely, the assertions to be made |
|                                   | on ld4l:AcquisitionActivity.      |
| **Domain:** bf:Item               | Dates and sources, agents would   |
|                                   | capture the relevant information  |
| **Range:** rdfs:Literal           | around the idea “directly         |
|                                   | required”. See the [*Activity     |
| **Modified**: "2016-04-21 (New)"  | Recommendation                    |
|                                   | document*](http://drive.google.co |
|                                   | m/open?id=1-UWiCw50Q9s3vAU3FWZcyo |
|                                   | mRnPe_lp6ZTW868fjpMCQ)            |
|                                   | for more information.             |
+-----------------------------------+-----------------------------------+
| ### bf:instrumentalType           | ### TBD                           |
|                                   |                                   |
| **Datatype that is a placeholder  | This is being handled by the      |
| for legacy literals.**            | Performed Music Extension.        |
|                                   |                                   |
| **URI**:                          | In general, any datatype property |
| http://id.loc.gov/ontologies/bibf | with \*Type in the label,         |
| rame/instrumentalType\            | however, is an ideal candidate    |
| **Domain**: bf:MusicInstrument\   | for becoming an Object Property   |
| **Range**: rdfs:Literal\          | (with the types becoming          |
| **Definition**: "Specific role of | subclasses, named individuals, or |
| instrument, such as alternate,    | other of a new Class).            |
| doubling, solo, ensemble." .\     |                                   |
| **Label**: "Instrument role"      |                                   |
+-----------------------------------+-----------------------------------+
| ### bf:itemPortion                | ### bf:itemPortion                |
|                                   |                                   |
| **Datatype that is a placeholder  | This is a property LD4All will be |
| for legacy literals.**            | largely recommending to use as    |
|                                   | found in BIBFRAME.                |
| **URI**:                          |                                   |
| http://id.loc.gov/ontologies/bibf | There is a [*Classification       |
| rame/itemPortion\                 | Recommendation                    |
| **Domain**: bf:Classification\    | document*](http://drive.google.co |
| **Range**: rdfs:Literal\          | m/open?id=1XnI1BoujCZonsGaKCuMUF5 |
| **Definition**: "Number attached  | 88mqb_q0QvXev3JSc-QfY)            |
| to a classification string that   | to recommend future exploration   |
| indicates a particular item." .\  | if and how one could improve the  |
| **Label**: "Classification item   | Classification information        |
| number"                           | captured through use of Object    |
|                                   | Properties and Classes. This is   |
|                                   | an area for future exploration,   |
|                                   | not a current recommendation for  |
|                                   | change.                           |
+-----------------------------------+-----------------------------------+
| ### bf:lastIssue                  | ### Work Relationships (Object Pr |
|                                   | operties)                         |
| **Datatype that should stay so.** |                                   |
|                                   | This is a clear case for where an |
| **URI**:                          | Object Property should be used,   |
| http://id.loc.gov/ontologies/bibf | as it would link a Series title   |
| rame/lastIssue\                   | (a bf:Work instance) to an Issue  |
| **Range**: rdfs:Literal\          | (another bf:Work instance). It    |
| **Definition**: "Ending date of a | falls into the work proposed by   |
| resource and/or the sequential    | the [*LD4All Sprint Group         |
| designations." .\                 | Recommendation Document for       |
| **Comment**: "Used with Work or   | handling Series, Serials and      |
| Instance" .\                      | Complex                           |
| **Label**: "Multipart last issue" | Objects*](http://drive.google.com |
|                                   | /open?id=1RfIkxkvmtDMsxGEsesMh7Of |
|                                   | u9ZViIJja4u1wI79UTlY).            |
+-----------------------------------+-----------------------------------+
| ### bf:legalDate                  | ### ld4l:EnactmentActivity dcterm |
|                                   | s:date literal                    |
| **Datatype that should stay so.** |                                   |
|                                   | Dates should be datatype          |
| **URI**:                          | properties, in particular using   |
| http://id.loc.gov/ontologies/bibf | [*EDTF*](https://www.loc.gov/stan |
| rame/legalDate\                   | dards/datetime/)                  |
| **Domain**: bf:Work\              | encoding for capturing related    |
| **Range**: rdfs:Literal\          | information (approximate or       |
| **Definition**: "Date of legal    | exact, date ranges, etc.) about   |
| work, or promulgation of a law,   | the date in a standardized        |
| or signing of a treaty." .\       | fashion.                          |
| **subPropertyOf**: bf:date\       |                                   |
| **Label**: "Date of legal work"   | LD4All recommends using a         |
|                                   | subclass of Activity called       |
|                                   | ld4l:EnactmentActivity. The       |
|                                   | ld4l:EnactmentActivity instance   |
|                                   | will contain properties according |
|                                   | to what type of information is    |
|                                   | found/contained by this resource, |
|                                   | including date (captured through  |
|                                   | use of dcterms:date). There could |
|                                   | be further subclasses for         |
|                                   | particular types of legal         |
|                                   | activities.                       |
+-----------------------------------+-----------------------------------+
| ### bf:mainTitle                  | ### madsrdf:MainTitleElement      |
|                                   |                                   |
| **Datatype with ‘too many         | LD4All Sprint Group               |
| possible values to have any use   | recommendation is to follow the   |
| as an object property’.**         | [*LD4L-O approach to              |
|                                   | Titles*](http://drive.google.com/ |
| **URI**:                          | open?id=1Zj4NJKqv38KmVMQzcu2PAn0K |
| http://id.loc.gov/ontologies/bibf | bZM8nSFfrNwAU2IYry8),             |
| rame/mainTitle\                   | which uses MADS/RDF. This makes   |
| **Domain**: bf:Title\             | all Title portions into classes   |
| **Range**: rdfs:Literal\          | linked by object properties, so   |
| **Definition**: "Title being      | they can be ordered by a rank     |
| addressed. Possible title         | property; different title         |
| component." .\                    | portions can have different       |
| **Label**: "Main title"           | language types; other information |
|                                   | specific to a portion of a title  |
|                                   | can be asserted. If LC is         |
|                                   | reluctant to use MADS/RDF terms,  |
|                                   | the recommendation is to define a |
|                                   | parallel set of terms in the      |
|                                   | BIBFRAME namespace.               |
+-----------------------------------+-----------------------------------+
| ### bf:musicKey                   | ### TBD                           |
|                                   |                                   |
| **Datatype that is a placeholder  | This is being handled by the      |
| for legacy literals.**            | Performed Music Extension.        |
|                                   |                                   |
| **URI**:                          |                                   |
| http://id.loc.gov/ontologies/bibf |                                   |
| rame/musicKey\                    |                                   |
| **Domain**: bf:Work\              |                                   |
| **Range**: rdfs:Literal\          |                                   |
| **Definition**: "Pitch and mode   |                                   |
| for music." .\                    |                                   |
| **Label**: "Music key"            |                                   |
+-----------------------------------+-----------------------------------+
| ### bf:musicOpusNumber            | ### TBD                           |
|                                   |                                   |
| **Datatype that is a placeholder  | This is being handled by the      |
| for legacy literals.**            | Performed Music Extension.        |
|                                   |                                   |
| **URI**:                          | Depending on the recommendations  |
| http://id.loc.gov/ontologies/bibf | of that extension group, this     |
| rame/musicOpusNumber\             | could be an ideal candidate for   |
| **Domain**: bf:Work\              | following a pattern similar or    |
| **Range**: rdfs:Literal\          | parallel to the [*Identifiers     |
| **Definition**: "Numeric          | pattern*](http://drive.google.com |
| designation of a musical work     | /open?id=1h8Yh_x4uEovBefszppHYw5e |
| assigned by a composer,           | wXSfQTbmtHxv-9L4CPhM).            |
| publisher, or a musicologist." .\ |                                   |
| **Label**: "Music opus number"    |                                   |
+-----------------------------------+-----------------------------------+
| ### bf:musicSerialNumber          | ### TBD                           |
|                                   |                                   |
| **Datatype that is a placeholder  | This is being handled by the      |
| for legacy literals.**            | Performed Music Extension.        |
|                                   |                                   |
| **URI**:                          | Depending on the recommendations  |
| http://id.loc.gov/ontologies/bibf | of that extension group, this     |
| rame/musicSerialNumber\           | could be an ideal candidate for   |
| **Domain**: bf:Work\              | following a pattern similar or    |
| **Range**: rdfs:Literal\          | parallel to the [*Identifiers     |
| **Definition**: "Numeric          | pattern*](http://drive.google.com |
| designation for musical works     | /open?id=1h8Yh_x4uEovBefszppHYw5e |
| consecutively numbered in music   | wXSfQTbmtHxv-9L4CPhM).            |
| reference sources." .\            |                                   |
| **Label**: "Music serial number"  |                                   |
+-----------------------------------+-----------------------------------+
| ### bf:musicThematicNumber        | ### TBD                           |
|                                   |                                   |
| **Datatype that is a placeholder  | This is being handled by the      |
| for legacy literals.**            | Performed Music Extension.        |
|                                   |                                   |
| **URI**:                          | Depending on the recommendations  |
| http://id.loc.gov/ontologies/bibf | of that extension group, this     |
| rame/musicThematicNumber\         | could be an ideal candidate for   |
| **Domain**: bf:Work\              | following a pattern similar or    |
| **Range**: rdfs:Literal\          | parallel to the [*Identifiers*    |
| **Definition**: "Numeric          | *pattern*](http://drive.google.co |
| designation for a musical work as | m/open?id=1h8Yh_x4uEovBefszppHYw5 |
| found in a thematic index for the | ewXSfQTbmtHxv-9L4CPhM)            |
| composer." .\                     | or the [*Classification*          |
| **Label**: "Music thematic        | *pattern*](http://drive.google.co |
| number"                           | m/open?id=1XnI1BoujCZonsGaKCuMUF5 |
|                                   | 88mqb_q0QvXev3JSc-QfY).           |
+-----------------------------------+-----------------------------------+
| ### bf:natureOfContent (datatype, | ### ld4l:NatureOfContent (Named I |
|  informal note properties)        | ndividual of oa:Motivation)       |
|                                   |                                   |
| **URI**:                          | This property should remain as a  |
| http://id.loc.gov/ontologies/bibf | datatype property if used with    |
| rame/natureOfContent\             | bf:Note.                          |
| **Range**: rdfs:Literal\          |                                   |
| **Definition**: "Characterization | However, the LD4All Sprint Group  |
| that epitomizes the primary       | recommendation is to use Open     |
| content of a resource, e.g.,      | Annotations for capturing Notes,  |
| field recording of birdsong;      | as this allows better modeling    |
| combined time series analysis and | options as described in the       |
| graph plotting system." .\        | [*Notes and Annotations           |
| **Comment**: "Used with Work or   | Recommendation                    |
| Instance" .\                      | Document*](http://drive.google.co |
| **Label**: "Content nature"       | m/open?id=1aGG19L48ljyHpw-wcGfsha |
|                                   | kU6DTxORBj6zoX8iygu3Q).           |
|                                   | This would then use an            |
|                                   | oa:Motivation Named Individual of |
|                                   | ld4l:NatureOfContent to indicate  |
|                                   | the type of note/annotation       |
|                                   | captured.                         |
+-----------------------------------+-----------------------------------+
| ### bf:noteType                   | ### oa:Motivation Named Individua |
|                                   | ls                                |
| **Datatype that only can be a     |                                   |
| datatype.**                       | In general, any datatype property |
|                                   | with \*Type in the label is an    |
| **URI**:                          | ideal candidate for becoming an   |
| http://id.loc.gov/ontologies/bibf | Object Property (with the types   |
| rame/noteType\                    | becoming subclasses, named        |
| **Domain**: bf:Note\              | individuals, or other of a new    |
| **Range**: rdfs:Literal\          | Class).                           |
| **Definition**: "Type of note."   |                                   |
| .\                                | However, the LD4All Sprint Group  |
| **Label**: "Note type"            | recommendation is to use Open     |
|                                   | Annotations for capturing Notes,  |
|                                   | as this allows better modeling    |
|                                   | options as described in the       |
|                                   | [*Notes and Annotations           |
|                                   | Recommendation                    |
|                                   | Document*](http://drive.google.co |
|                                   | m/open?id=1aGG19L48ljyHpw-wcGfsha |
|                                   | kU6DTxORBj6zoX8iygu3Q).           |
|                                   | This would then use an            |
|                                   | oa:Motivation Named Individuals   |
|                                   | to indicate the type of           |
|                                   | note/annotation captured.         |
+-----------------------------------+-----------------------------------+
| ### bf:organization               | ### TBD                           |
|                                   |                                   |
| **Datatype that could be object   | The proposed usage of this        |
| property.**                       | property is unclear - could be    |
|                                   | modeling archival collections,    |
| **Label**: Organization of        | general collection-level records, |
| material                          | table of contents type levels, or |
|                                   | other.                            |
| **URI**:                          |                                   |
| http://id.loc.gov/ontologies/bibf | This seems an ideal candidate to  |
| rame/organization                 | become an Object Property in the  |
|                                   | future, as the use cases given    |
| **Definition**: "Manner in which  | could be reflected in Work - Work |
| the resource is divided into      | relationships, or Part - Whole    |
| smaller units."                   | relationships, or other. This     |
|                                   | will rest on discussions          |
| **Domain:** bf:Arrangement        | occurring around question for LC  |
|                                   | from the LD4All Sprint Group.     |
| **Range:** rdfs:Literal           |                                   |
|                                   |                                   |
| **Modified**: "2016-04-21 (New)"  |                                   |
+-----------------------------------+-----------------------------------+
| ### bf:originDate                 | ### ld4l:CreationActivity dcterms |
|                                   | :date literal                     |
| **Datatype that should stay so.** |                                   |
|                                   | Dates should be datatype          |
| **URI**:                          | properties, in particular using   |
| http://id.loc.gov/ontologies/bibf | [*EDTF*](https://www.loc.gov/stan |
| rame/originDate\                  | dards/datetime/)                  |
| **Domain**: bf:Work\              | encoding for capturing related    |
| **Range**: rdfs:Literal\          | information (approximate or       |
| **Definition**: "Date or date     | exact, date ranges, etc.) about   |
| range associated with the         | the date in a standardized        |
| creation of a Work." .\           | fashion.                          |
| **subPropertyOf**: bf:date\       |                                   |
| **Label**: "Associated title      | LD4All recommends using a         |
| date"                             | subclass of Activity called       |
|                                   | ld4l:CreationActivity. The        |
|                                   | ld4l:CreationActivity instance    |
|                                   | will contain properties according |
|                                   | to what type of information is    |
|                                   | found/contained by this resource, |
|                                   | including date (captured through  |
|                                   | use of dcterms:date).             |
+-----------------------------------+-----------------------------------+
| ### bf:outerGRing                 | ### TBD                           |
|                                   |                                   |
| **Datatype that is a placeholder  | LD4All is leaving the modeling    |
| for legacy literals.**            | work for this data to the         |
|                                   | Geospatial extension.             |
| **URI**:                          |                                   |
| http://id.loc.gov/ontologies/bibf |                                   |
| rame/outerGRing\                  |                                   |
| **Domain**: bf:Cartographic\      |                                   |
| **Range**: rdfs:Literal\          |                                   |
| **Definition**: "Coordinate pairs |                                   |
| that identify the closed          |                                   |
| non-intersecting boundary of the  |                                   |
| area covered." .\                 |                                   |
| **Label**: "Cartographic outer G  |                                   |
| ring area covered"                |                                   |
+-----------------------------------+-----------------------------------+
| ### bf:part                       | ### Work Relationships (Object Pr |
|                                   | operties)                         |
| **Datatype that could be object   |                                   |
| property.**                       | This is a clear case for where an |
|                                   | Object Property should be used,   |
| **URI**:                          | as it would link one bf:Work      |
| http://id.loc.gov/ontologies/bibf | resource to parts that ultimately |
| rame/part\                        | constitute other bf:Work (or      |
| **Range:** rdfs:Literal\          | other Classes) resources. It      |
| **Definition**: "Part of a        | falls into the work proposed by   |
| resource to which information     | the [*LD4All Sprint Group         |
| applies." .\                      | Recommendation Document for       |
| **Comment**: "Used with           | handling Series, Serials and      |
| Unspecified" .\                   | Complex                           |
| **Label**: Part                   | Objects*](http://drive.google.com |
|                                   | /open?id=1RfIkxkvmtDMsxGEsesMh7Of |
|                                   | u9ZViIJja4u1wI79UTlY).            |
+-----------------------------------+-----------------------------------+
| ### bf:partName                   | ### madsrdf:PartNameElement       |
|                                   |                                   |
| **Datatype with ‘too many         | LD4All Sprint Group               |
| possible values to have any use   | recommendation is to follow the   |
| as an object property’.**         | [*LD4L-O approach to              |
|                                   | Titles*](http://drive.google.com/ |
| **URI**:                          | open?id=1Zj4NJKqv38KmVMQzcu2PAn0K |
| http://id.loc.gov/ontologies/bibf | bZM8nSFfrNwAU2IYry8),             |
| rame/partName\                    | which uses MADSRDF. This makes    |
| **Domain**: bf:Title\             | all Title portions into Classes   |
| **Range**: rdfs:Literal\          | linked by object properties, so   |
| **Definition**: "Part or section  | they can be put in order by       |
| name of a title. Possible title   | ranking properties, as well as    |
| component." .\                    | different language assertions     |
| **Label**: "Part title"           | supported.                        |
+-----------------------------------+-----------------------------------+
| ### bf:partNumber                 | ### madsrdf:PartNumberElement     |
|                                   |                                   |
| **Datatype with ‘too many         | LD4All Sprint Group               |
| possible values to have any use   | recommendation is to follow the   |
| as an object property’.**         | [*LD4L-O approach to              |
|                                   | Titles*](http://drive.google.com/ |
| **URI**:                          | open?id=1Zj4NJKqv38KmVMQzcu2PAn0K |
| http://id.loc.gov/ontologies/bibf | bZM8nSFfrNwAU2IYry8),             |
| rame/partNumber\                  | which uses MADSRDF. This makes    |
| **Domain**: bf:Title\             | all Title portions into Classes   |
| **Range**: rdfs:Literal\          | linked by object properties, so   |
| **Definition**: "Part or section  | they can be put in order by       |
| enumeration of a title. Possible  | ranking properties, as well as    |
| title component." .\              | different language assertions     |
| **Label**: "Part number"          | supported.                        |
+-----------------------------------+-----------------------------------+
| ### bf:pattern                    | ### TBD                           |
|                                   |                                   |
| **Datatype that could be object   | The proposed usage of this        |
| property.**                       | property is unclear - could be    |
|                                   | modeling archival collections,    |
| **Label**: Arrangement of         | general collection-level records, |
| material                          | table of contents type levels, or |
|                                   | other.                            |
| **URI**:                          |                                   |
| http://id.loc.gov/ontologies/bibf | This will rest on discussions     |
| rame/pattern                      | occurring around question for LC  |
|                                   | from the LD4All Sprint Group.     |
| **Definition**: "Pattern of       |                                   |
| arrangement of materials within a |                                   |
| unit."                            |                                   |
|                                   |                                   |
| **Domain:** bf:Arrangement        |                                   |
|                                   |                                   |
| **Range:** rdfs:Literal           |                                   |
|                                   |                                   |
| **Modified**: "2016-04-21 (New)"  |                                   |
+-----------------------------------+-----------------------------------+
| ### bf:physicalLocation           | ### ld4l:atLocation prov:Location |
|                                   |                                   |
| **Datatype that could be object   | This seems a clear candidate for  |
| property.**                       | being an object property, as it   |
|                                   | is pointing to a resource that    |
| **Label**: Storing or shelving    | should be some Location entity.   |
| location                          | Note that prov:Location does not  |
|                                   | limit the definition of           |
| **URI**:                          | ‘location’ to geographic, hence   |
| http://id.loc.gov/ontologies/bibf | its recommended use by the LD4All |
| rame/physicalLocation             | Sprint Group (in place of         |
|                                   | bf:Place).                        |
| **Definition**: "Location in the  |                                   |
| holding agency where the item is  |                                   |
| shelved or stored."               |                                   |
|                                   |                                   |
| **Domain:** bf:Item               |                                   |
|                                   |                                   |
| **Range:** rdfs:Literal           |                                   |
|                                   |                                   |
| **Modified**: "2016-04-21 (New)"  |                                   |
+-----------------------------------+-----------------------------------+
| ### bf:preferredCitation          | ### bf:preferredCitation          |
|                                   |                                   |
| **Datatype that could be object   | Use as found in BIBFRAME v.2,     |
| property.**                       | which currently makes this a      |
|                                   | datatype property.                |
| **Label**: Preferred citation     |                                   |
|                                   |                                   |
| **URI**:                          |                                   |
| http://id.loc.gov/ontologies/bibf |                                   |
| rame/preferredCitation            |                                   |
|                                   |                                   |
| **Definition**: "Citation to the  |                                   |
| resource preferred by its         |                                   |
| custodian of the resource."       |                                   |
|                                   |                                   |
| **Comment:** Used with Work or    |                                   |
| Instance                          |                                   |
|                                   |                                   |
| **Range:** rdfs:Literal           |                                   |
|                                   |                                   |
| **Modified**: "2016-04-21 (New)"  |                                   |
+-----------------------------------+-----------------------------------+
| ### bf:projection                 | ### TBD                           |
|                                   |                                   |
| **Datatype that is a placeholder  | LD4All is leaving the modeling    |
| for legacy literals.**            | work for this data to the         |
|                                   | Geospatial extension.             |
| **URI**:                          |                                   |
| http://id.loc.gov/ontologies/bibf |                                   |
| rame/projection\                  |                                   |
| **Domain**: bf:Cartographic\      |                                   |
| **Range**: rdfs:Literal\          |                                   |
| **Definition**: "Method or system |                                   |
| used to represent the surface of  |                                   |
| the earth or of a celestial       |                                   |
| sphere on a plane." .\            |                                   |
| **Label**: "Cartographic          |                                   |
| projection"                       |                                   |
+-----------------------------------+-----------------------------------+
| ### bf:provisionActivityStatement | ### ld4l:Activity ld4l:statement  |
|                                   | literal                           |
|                                   |                                   |
| **Datatype that is an informal    | The value captured here should be |
| note property.**                  | a literal, as it is a transcribed |
|                                   | value leveraged in part for       |
| **URI**:                          | resource identification.          |
| http://id.loc.gov/ontologies/bibf |                                   |
| rame/provisionActivityStatement\  | [*However, the LD4All Sprint      |
| **Domain**: bf:Instance\          | Group recommendation is to use    |
| **Range**: rdfs:Literal\          | ld4l:Activity* *instead of        |
| **Definition**: "Statement        | bf:ProvisionActivity*](http://dri |
| relating to providers of a        | ve.google.com/open?id=1-UWiCw50Q9 |
| resource; usually transcribed."   | s3vAU3FWZcyomRnPe_lp6ZTW868fjpMCQ |
| .\                                | ),                                |
| **Label**: "Provider statement"   | and this statement would be       |
|                                   | asserted on the particular,       |
|                                   | related ld4l:Activity instance.   |
+-----------------------------------+-----------------------------------+
| ### bf:qualifier                  | ### bf:qualifier                  |
|                                   |                                   |
| **Datatype with ‘too many         | Use as found in BIBFRAME2, which  |
| possible values to have any use   | means as a datatype property.     |
| as an object property’.**         |                                   |
|                                   | Generally, in LD4All Sprint Group |
| **URI**:                          | recommendations, the proposed     |
| http://id.loc.gov/ontologies/bibf | usage of bf:qualifier by the      |
| rame/qualifier\                   | Library of Congress is ignored,   |
| **Range**: rdfs:Literal\          | as for titles and identifiers,    |
| **Definition**: "Qualifier of     | different approaches for          |
| information, such as an addition  | capturing “qualifying             |
| to a title to make it unique or   | information” are followed. See    |
| qualifying information associated | the related                       |
| with an identifier." .\           | [*Titles*](http://drive.google.co |
| **Comment**: "Used with           | m/open?id=1Zj4NJKqv38KmVMQzcu2PAn |
| Unspecified" .\                   | 0KbZM8nSFfrNwAU2IYry8)            |
| **Label**: "Qualifier"            | and                               |
|                                   | [*Identifiers*](http://drive.goog |
|                                   | le.com/open?id=1h8Yh_x4uEovBefszp |
|                                   | pHYw5ewXSfQTbmtHxv-9L4CPhM)       |
|                                   | recommendation documents for more |
|                                   | information.                      |
+-----------------------------------+-----------------------------------+
| ### bf:responsibilityStatement    | ### bf:responsibilityStatement    |
|                                   |                                   |
| **Datatype that is an informal    | Use as found in BIBFRAME2, which  |
| note property.**                  | means as a datatype property      |
|                                   | asserted on an bf:Instance.       |
| **URI**:                          |                                   |
| http://id.loc.gov/ontologies/bibf |                                   |
| rame/responsibilityStatement\     |                                   |
| **Domain**: bf:Instance\          |                                   |
| **Range**: rdfs:Literal\          |                                   |
| **Definition**: "Statement        |                                   |
| relating to any persons,          |                                   |
| families, or corporate bodies     |                                   |
| responsible for the creation of,  |                                   |
| or contributing to the content of |                                   |
| a resource; usually transcribed." |                                   |
| .\                                |                                   |
| **Label**: "Creative              |                                   |
| responsibility statement"         |                                   |
+-----------------------------------+-----------------------------------+
| ### bf:role                       | ### ld4l:Activity subclasses      |
|                                   |                                   |
| **Datatype that only can be a     | The use of subclasses of          |
| datatype.**                       | ld4l:Activity captures the        |
|                                   | related bf:role information,      |
| **URI**:                          | which has been a heavily          |
| http://id.loc.gov/ontologies/bibf | discussed property regardless in  |
| rame/role\                        | LD4All Alignment calls so far     |
| **Domain**: bf:Contribution\      | (with arguments for it being used |
| **Range**: rdfs:Literal\          | both as an object and a datatype  |
| **Definition**: "Specific role of | property). See the [*Activity     |
| agent." .\                        | Recommendation                    |
| **Label**: "Agent role"           | Document*](http://drive.google.co |
|                                   | m/open?id=1-UWiCw50Q9s3vAU3FWZcyo |
|                                   | mRnPe_lp6ZTW868fjpMCQ)            |
|                                   | for further information.          |
+-----------------------------------+-----------------------------------+
| ### bf:scale                      | ### TBD                           |
|                                   |                                   |
| **Datatype that is a placeholder  | LD4All is leaving the modeling    |
| for legacy literals.**            | work for this data to the         |
|                                   | Geospatial extension, the Moving  |
| **URI**:                          | Images extension, and the A/V     |
| http://id.loc.gov/ontologies/bibf | extension.                        |
| rame/scale\                       |                                   |
| **Range**: rdfs:Literal\          |                                   |
| **Definition**: "Ratio of the     |                                   |
| dimensions of a form contained or |                                   |
| embodied in a resource to the     |                                   |
| dimensions of the entity it       |                                   |
| represents, e.g., for images or   |                                   |
| cartographic resources." .\       |                                   |
| **Comment**: "Used with Work or   |                                   |
| Instance" .\                      |                                   |
| **Label**: "Scale"                |                                   |
+-----------------------------------+-----------------------------------+
| ### bf:schedulePart               | ### bf:schedulePart               |
|                                   |                                   |
| **Datatype that should stay so.** | This is a property LD4All will be |
|                                   | largely recommending to use as    |
| **URI**:                          | found in BIBFRAME.                |
| http://id.loc.gov/ontologies/bibf |                                   |
| rame/schedulePart\                | There is a [*Classification       |
| **Domain**: bf:Classification\    | Recommendation                    |
| **Range**: rdfs:Literal\          | document*](http://drive.google.co |
| **Definition**: "Designates       | m/open?id=1XnI1BoujCZonsGaKCuMUF5 |
| whether the classification number | 88mqb_q0QvXev3JSc-QfY)            |
| is from the standard or optional  | to recommend future exploration   |
| part of a schedule or table." .\  | if and how one could improve the  |
| **Label**: "Classification        | Classification information        |
| designation"                      | captured through use of Object    |
|                                   | Properties and Classes. This is   |
|                                   | an area for future exploration,   |
|                                   | not a current recommendation for  |
|                                   | change.                           |
+-----------------------------------+-----------------------------------+
| ### bf:seriesEnumeration          | ### TBD                           |
|                                   |                                   |
| **Datatype that is an informal    | The value captured here should be |
| note property.**                  | a literal, as it is a numeric     |
|                                   | value attached to a particular    |
| **URI**:                          | issuance or series title. Where   |
| http://id.loc.gov/ontologies/bibf | this information is asserted may  |
| rame/seriesEnumeration\           | be different in the LD4All        |
| **Domain**: bf:Instance\          | recommendation, however.          |
| **Range**: rdfs:Literal\          |                                   |
| **Definition**: "Series           | It falls into the work proposed   |
| enumeration of the resource;      | by the [*LD4All Sprint Group      |
| usually transcribed." .\          | Recommendation Document for       |
| **Label**: "Series enumeration"   | handling Series, Serials and      |
|                                   | Complex                           |
|                                   | Objects*](http://drive.google.com |
|                                   | /open?id=1RfIkxkvmtDMsxGEsesMh7Of |
|                                   | u9ZViIJja4u1wI79UTlY).            |
+-----------------------------------+-----------------------------------+
| ### bf:seriesStatement\           | ### TBD                           |
| **Datatype that is an informal no |                                   |
| te property.**                    | The value captured here should be |
|                                   | a literal, as it is a transcribed |
| **URI**:                          | value leveraged in part for       |
| http://id.loc.gov/ontologies/bibf | resource identification. However, |
| rame/seriesStatement\             | where to assert this information, |
| **Domain**: bf:Instance\          | or if a transcribed statement     |
| **Range**: rdfs:Literal\          | value akin in function to         |
| **Definition**: "Statement of the | bf:responsibilityStatement, is    |
| series the resource is in;        | under discussion.                 |
| usually transcribed; includes the |                                   |
| ISSN if applicable." .\           | It falls into the work proposed   |
| **Label**: "Series statement"     | by the [*LD4All Sprint Group      |
|                                   | Recommendation Document for       |
|                                   | handling Series, Serials and      |
|                                   | Complex                           |
|                                   | Objects*](http://drive.google.com |
|                                   | /open?id=1RfIkxkvmtDMsxGEsesMh7Of |
|                                   | u9ZViIJja4u1wI79UTlY).            |
+-----------------------------------+-----------------------------------+
| ### bf:spanEnd                    | ### bf:spanEnd                    |
|                                   |                                   |
| **Datatype with ‘too many         | This is a property LD4All will be |
| possible values to have any use   | largely recommending to use as    |
| as an object property’.**         | found in BIBFRAME.                |
|                                   |                                   |
| **URI**:                          | There is a [*Classification       |
| http://id.loc.gov/ontologies/bibf | Recommendation                    |
| rame/spanEnd\                     | document*](http://drive.google.co |
| **Domain**: bf:Classification\    | m/open?id=1XnI1BoujCZonsGaKCuMUF5 |
| **Range**: rdfs:Literal\          | 88mqb_q0QvXev3JSc-QfY)            |
| **Definition**: "Ending number of | to recommend future exploration   |
| classification number span." .\   | if and how one could improve the  |
| **Label**: "Classification number | Classification information        |
| span end"                         | captured through use of Object    |
|                                   | Properties and Classes. This is   |
|                                   | an area for future exploration,   |
|                                   | not a current recommendation for  |
|                                   | change.                           |
+-----------------------------------+-----------------------------------+
| ### bf:subseriesEnumeration       | ### Do not use                    |
|                                   |                                   |
| **Datatype that is an informal    | This falls into the work proposed |
| note property.**                  | by the [*LD4All Sprint Group      |
|                                   | Recommendation Document for       |
| **URI**:                          | handling Series, Serials and      |
| http://id.loc.gov/ontologies/bibf | Complex                           |
| rame/subseriesEnumeration\        | Objects*](http://drive.google.com |
| **Domain**: bf:Instance\          | /open?id=1RfIkxkvmtDMsxGEsesMh7Of |
| **Range**: rdfs:Literal\          | u9ZViIJja4u1wI79UTlY).            |
| **Definition**: "Subseries        | The issue is not with the         |
| enumeration of the resource;      | datatype properties, but          |
| usually transcribed." .\          | indicating subseries (information |
| **Label**: "Subseries             | that should be derived from       |
| enumeration"                      | Series to Series relationships).  |
+-----------------------------------+-----------------------------------+
| ### bf:subseriesStatement         | ### Do not use                    |
|                                   |                                   |
| **Datatype that is an informal    | This falls into the work proposed |
| note property.**                  | by the [*LD4All Sprint Group      |
|                                   | Recommendation Document for       |
| **URI**:                          | handling Series, Serials and      |
| http://id.loc.gov/ontologies/bibf | Complex                           |
| rame/subseriesStatement\          | Objects*](http://drive.google.com |
| **Domain**: bf:Instance\          | /open?id=1RfIkxkvmtDMsxGEsesMh7Of |
| **Range**: rdfs:Literal\          | u9ZViIJja4u1wI79UTlY).            |
| **Definition**: "Statement of the | The issue is not with the         |
| subseries the resource is in;     | datatype properties, but          |
| usually transcribed; includes the | indicating subseries (information |
| ISSN if applicable." .\           | that should be derived from       |
| **Label**: "Subseries statement"  | Series to Series relationships).  |
+-----------------------------------+-----------------------------------+
| ### bf:systemRequirements         | ### ld4l:SystemRequirements (Name |
|                                   | d Individual of oa:Motivation)    |
| **Datatype that is an informal    |                                   |
| note property.**                  | This property should remain as a  |
|                                   | datatype property if used with    |
| **URI**:                          | bf:Note.                          |
| http://id.loc.gov/ontologies/bibf |                                   |
| rame/systemRequirements\          | However, the LD4All Sprint Group  |
| **Domain**: bf:Instance\          | recommendation is to use Open     |
| **Range**: rdfs:Literal\          | Annotations for capturing Notes,  |
| **Definition**: "Equipment or     | as this allows better modeling    |
| system requirements beyond what   | options as described in the       |
| is normal and obvious for the     | [*Notes and Annotations           |
| type of carrier or type of file,  | Recommendation                    |
| such as make and model of         | Document*](http://drive.google.co |
| equipment or hardware, operating  | m/open?id=1aGG19L48ljyHpw-wcGfsha |
| system, amount of memory,         | kU6DTxORBj6zoX8iygu3Q).           |
| programming language, other       | This would then use an            |
| necessary software, any plug-ins  | oa:Motivation Named Individual of |
| or peripherals required to play,  | ld4l:SystemRequirements to        |
| view, or run the resource, etc."  | indicate the type of              |
| .\                                | note/annotation captured.         |
| **Label**: "Equipment or system   |                                   |
| requirements"                     |                                   |
+-----------------------------------+-----------------------------------+
| ### bf:table                      | ### bf:table                      |
|                                   |                                   |
| **Datatype with ‘too many         | This is a property LD4All will be |
| possible values to have any use   | largely recommending to use as    |
| as an object property’.**         | found in BIBFRAME.                |
|                                   |                                   |
| **URI**:                          | There is a [*Classification       |
| http://id.loc.gov/ontologies/bibf | Recommendation                    |
| rame/table\                       | document*](http://drive.google.co |
| **Domain**: bf:Classification\    | m/open?id=1XnI1BoujCZonsGaKCuMUF5 |
| **Range**: rdfs:Literal\          | 88mqb_q0QvXev3JSc-QfY)            |
| **Definition**: "Number of the    | to recommend future exploration   |
| table from which the              | if and how one could improve the  |
| classification number in a        | Classification information        |
| subdivision entry is taken, e.g., | captured through use of Object    |
| a DDC table." .\                  | Properties and Classes. This is   |
| **Label**: "Classification table  | an area for future exploration,   |
| identification"                   | not a current recommendation for  |
|                                   | change.                           |
+-----------------------------------+-----------------------------------+
| ### bf:tableSeq                   | ### bf:tableSeq                   |
|                                   |                                   |
| **Datatype with ‘too many         | This is a property LD4All will be |
| possible values to have any use   | largely recommending to use as    |
| as an object property’.**         | found in BIBFRAME.                |
|                                   |                                   |
| **URI**:                          | There is a [*Classification       |
| http://id.loc.gov/ontologies/bibf | Recommendation                    |
| rame/tableSeq\                    | document*](http://drive.google.co |
| **Domain**: bf:Classification\    | m/open?id=1XnI1BoujCZonsGaKCuMUF5 |
| **Range**: rdfs:Literal\          | 88mqb_q0QvXev3JSc-QfY)            |
| **Definition**: "Sequence number  | to recommend future exploration   |
| or other identifier for an        | if and how one could improve the  |
| internal classification sub       | Classification information        |
| arrangement or add in a           | captured through use of Object    |
| classification scheme." .\        | Properties and Classes. This is   |
| **Label**: "Classification table  | an area for future exploration,   |
| sequence number"                  | not a current recommendation for  |
|                                   | change.                           |
+-----------------------------------+-----------------------------------+
| ### bf:temporalCoverage           | ### ld4l:temporalCoverage         |
|                                   |                                   |
| **Datatype that could be object   | This should be an Object          |
| property.**                       | Property, with bf:Temporal as the |
|                                   | range. See the [*legacy literals  |
| **URI**:                          | recommendation*](http://drive.goo |
| http://id.loc.gov/ontologies/bibf | gle.com/open?id=1CyUl0tID3c62_klq |
| rame/temporalCoverage\            | 77B2YFERtFtFrLeHULqWnjzLnvg)      |
| **Domain:** bf:Work\              | for the handling of existing data |
| **Range:** rdfs:Literal\          | in the conversion process.        |
| **Definition**: "Time period      |                                   |
| coverage of the content of the    |                                   |
| resource." .\                     |                                   |
| **Label**: "Temporal coverage"    |                                   |
+-----------------------------------+-----------------------------------+
| ### bf:variantType                | ### madsrdf:Title subclasses in L |
|                                   | D4L                               |
| **Datatype that only can be a     |                                   |
| datatype.**                       | LD4All Sprint Group               |
|                                   | recommendation is to follow the   |
| **URI**:                          | [*LD4L-O approach to              |
| http://id.loc.gov/ontologies/bibf | Titles*](http://drive.google.com/ |
| rame/variantType\                 | open?id=1Zj4NJKqv38KmVMQzcu2PAn0K |
| **Domain**: bf:VariantTitle\      | bZM8nSFfrNwAU2IYry8),             |
| **Range**: rdfs:Literal\          | which uses MADSRDF. This makes    |
| **Definition**: "Type of title    | all Title portions into Classes   |
| variation, e.g., acronym, cover,  | linked by Object Properties, so   |
| spine, earlier, later, series     | they can be put in order by       |
| version." .\                      | ranking properties, as well as    |
| **Label**: "Variant title type"   | different language assertions     |
|                                   | supported.                        |
|                                   |                                   |
|                                   | In general, any datatype property |
|                                   | with \*Type in the label,         |
|                                   | however, is an ideal candidate    |
|                                   | for becoming an Object Property   |
|                                   | (with the types becoming          |
|                                   | subclasses, named individuals, or |
|                                   | other of a new Class).            |
+-----------------------------------+-----------------------------------+
| ### bf:voiceType                  | ### TBD                           |
|                                   |                                   |
| **Datatype that is a placeholder  | This is being handled by the      |
| for legacy literals.**            | Performed Music Extension.        |
|                                   |                                   |
| **URI**:                          | In general, any datatype property |
| http://id.loc.gov/ontologies/bibf | with \*Type in the label,         |
| rame/voiceType\                   | however, is an ideal candidate    |
| **Domain**: bf:MusicVoice\        | for becoming an Object Property   |
| **Range**: rdfs:Literal\          | (with the types becoming          |
| **Definition**: "Specific type of | subclasses, named individuals, or |
| voice group, such as chorus,      | other of a new Class).            |
| solo." .\                         |                                   |
| **Label**: "Type of voice"        |                                   |
+-----------------------------------+-----------------------------------+
| ### bf:version                    | ### TBD                           |
|                                   |                                   |
| **Datatype with ‘too many         | This seems an ideal candidate to  |
| possible values to have any use   | become an object property in the  |
| as an object property’.**         | future, as the use cases given    |
|                                   | could be reflected in Work - Work |
| **URI**:                          | relationships, or Part - Whole    |
| http://id.loc.gov/ontologies/bibf | relationships, or other.          |
| rame/version\                     |                                   |
| **Domain**: bf:Work\              | The exact object properties used  |
| **Range**: rdfs:Literal\          | will rest on work occurring       |
| **Definition**: "Term or terms    | around RDA ontology alignment     |
| that identify works such as       | within BIBFRAME, particular on    |
| arranged for music, vulgate for   | [*Relations*](http://drive.google |
| religious work, etc." .\          | .com/open?id=1SU4VqY-T8sh3WHIfkKZ |
| **Label**: Version                | aj2SpOzjlgOZE56F1NpGMmaM).        |
+-----------------------------------+-----------------------------------+

[]{#_3ls5o66 .anchor}
