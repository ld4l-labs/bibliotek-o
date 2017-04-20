[]{#_30j0zll .anchor}NOTE: the following represents the direction taken
by the LD4L Labs and LD4P Ontology Group in the development of
bibliotek-o and may not be fully formed. This pattern document was used
internally to define a direction and is shared with the intention of
contextualizing a pattern found within the ontology; terms specified
below may not fully align to the ontology as published. Further,
discussion of BIBFRAME 2.0 may be out of date.

2016 December

Overview
========

[]{#_1fob9te .anchor}We recommend the use of the properties and classes
recommended below for capturing bibliographic resource physical/digital
content accessibility and hazard features. We recognize there will be
implementation-level decision issues to be determined between which of
these content accessibility features are captured as assertions on the
Work, Instance or Item versus on the bib:ContentAccessibility class
instance.

We will first request that the Library of Congress will change their
datatype property, bf:contentAccessibility, to an object property, and
then create the relevant bf:ContentAccessibility class and subclasses,
as detailed below.

In the case that the Library of Congress decides to remain with their
current datatype property, we will create the relevant property and
classes in the bib namespace.

bibliotek-o Approach to Accessibility
=====================================

Involved Classes
----------------

bf:Instance only for the domain; otherwise, no classes involved, as this
is a datatype property.

Involved Properties
-------------------

### schema:accessibilityFeature (datatype property)

**Label**: accessibility feature

**URI**:
[*https://schema.org/accessibilityFeature*](https://schema.org/accessibilityFeature)

**Definition**: "Accessibility feature of the resource, such as
accessible media, alternatives and supported enhancements for
accessibility (WebSchemas wiki lists possible values)." .

**Domain:** bf:Instance *(schema:CreativeWork from the schema.org
ontology)*

**Range:** rdfs:Literal *(schema:Text datatype from the schema.org
ontology)*

BF2 Approach to Accessibility
=============================

Involved Classes
----------------

None explicitly, as this is a datatype property with a loose
recommendation (via rdfs:comment) to use a domain of bf:Work or
bf:Instance.

Involved Properties
-------------------

### contentAccessibility (datatype property)

**Label**: Content accessibility note

**URI**:
[*http://id.loc.gov/ontologies/bibframe/contentAccessibility*](http://id.loc.gov/ontologies/bibframe/contentAccessibility)

**Definition**: "Information that assists those with a sensory
impairment for greater understanding of content, e.g., captions." .

**Domain:** n/a

**Range:** rdfs:Literal

**Comment:** "Used with Work or Instance"

**Dcterms:modified**: "2016-04-21 (New)" .

Side by Side Examples of BIBFRAME v. 2, LD4L-O v. 1
---------------------------------------------------

A video instance that has synchronized captions provided by the
publisher.

  --------------------------------------
  **\# BIBFRAME2**
  
  \_:i1 a bf:Instance ;
  
  bf:contentAccessibility "captions" .
  --------------------------------------

  ------------------------------------------
  **\# LD4L-O**
  
  \_:i1 a ld4l:Instance ;
  
  schema:accessibilityFeature "captions" .
  ------------------------------------------

Recommended Model
-----------------

Recommended Classes
-------------------

### bib:Accessibility

**Label**: Accessibility

**URI**: TBD

**Definition**: Physical or digital accessibility characteristic of the
resource. This class can represent either presence or absence of the
characteristic. See
[*https://www.w3.org/wiki/WebSchemas/Accessibility*](https://www.w3.org/wiki/WebSchemas/Accessibility).

**Subclassed as:**

-   bib:AccessibilityFeature

-   bib:AccessibilityHazard

### bib:AccessibilityFeature

**Label**: Accessibility Feature

**URI**: TBD

**Definition**: Accessibility feature of the resource, such as
accessible media, alternatives and supported enhancements for
accessibility. See
[*https://www.w3.org/wiki/WebSchemas/Accessibility*](https://www.w3.org/wiki/WebSchemas/Accessibility).

**Subclass of:** bib:Accessibility

**Subclassed as:**

-   bib:AlternativeText

-   bib:Annotations

-   bib:AudioDescription

-   bib:Bookmarks

-   bib:Braille (also subclasses bf:TactileNotation)

-   bib:Captions

-   bib:ChemMl

-   bib:DescribedMath

-   bib:DisplayTransformability

-   bib:HighContrastAudio

-   bib:HighContrastDisplay

-   bib:Index (also subclasses bf:Work)

-   bib:LargePrint

-   bib:LongDescription

-   bib:MathMl

-   bib:PrintPageNumbers

-   bib:ReadingOrder

-   bib:SignLanguage

-   bib:StructuralNavigation

-   bib:SynchronizedAudioText

-   bib:TableOfContents (also subclasses bf:TableOfContents?)

-   bib:TaggedPdf

-   bib:TactileGraphic

-   bib:TactileObject

-   bib:TimingControl

-   bib:Transcript

-   bib:TtsMarkup

-   bib:Unlocked

### bib:AccessibilityHazard

**Label**: Accessibility Hazard

**URI**: TBD

**Definition**: An accessibility characteristic of the resource that can
be physiologically dangerous to some users, such as flashing, motion
simulation, or sound. See
[*https://www.w3.org/wiki/WebSchemas/Accessibility*](https://www.w3.org/wiki/WebSchemas/Accessibility).

**Subclass of:** bib:Accessibility

**Subclassed as:**

-   bib:FlashingHazard

-   bib:NoFlashingHazard

-   bib:MotionSimulationHazard

-   bib:NoMotionSimulationHazard

-   bib:SoundHazard

-   bib:NoSoundHazard

Recommended Properties
----------------------

### bib:hasAccessibility (object property)

**Label**: accessibility characteristic

**URI**: TBD

**Definition**: Connects a resource to an accessibility characteristic
of the resource.

**Domain:** \[Open\]

**Range:** bib:Accessibility

**Similar to (rdfs:comment)**:
[*https://schema.org/accessibilityFeature*](https://schema.org/accessibilityFeature)
, bf:contentAccessibility (if the Library of Congress doesn’t make
changes to BIBFRAME 2)

Core Accessibility Class Profile
--------------------------------

### bib:Accessibility

**rdfs:label:** A human-readable version of an Accessibility instance’s
name. Best practice says to include language typing for the label.

**rdfs:comment:** A human-readable description of an Accessibility
instance, including any needed details on using the resource.

**bib:hasSource (or bf:source given outstanding questions):** The source
of the Accessibility instance, whether an agent, another work, a
software event, or other.

Example of Recommendation (bibliotek-o)
---------------------------------------

A video instance that has synchronized captions provided by the
publisher.

  ---------------------------------------------------------------------------------------------------------------
  **\# bibliotek-o**
  
  :i1 a bf:Instance ;
  
  bib:hasAccessibility :a1 .
  
  :a1 a bib:Captions ;
  
  rdfs:label “captions”@en ;
  
  rdfs:comment “Closed caption of audio available in English and Spanish.”
  
  dcterms:language &lt;[*http://www.lexvo.org/page/iso639-3/eng*](http://www.lexvo.org/page/iso639-3/eng)&gt; ;
  
  dcterms:language &lt;[*http://www.lexvo.org/page/iso639-3/spa*](http://www.lexvo.org/page/iso639-3/spa)&gt; ;
  
  bib:source :ag1 .
  
  :ag1 a foaf:Organization ;
  
  foaf:name “Music video publishers” .
  ---------------------------------------------------------------------------------------------------------------

Areas for Future Work
=====================

For deciding the appropriate subclasses of bib:AccessibilityHazard and
bib:AccessibilityFeature, and for further profiling and scoping of the
Accessibility pattern (based off the following core pattern), we will
approach library, technology, and accessibility communities for help;
this may yield a future collaboration and BIBFRAME or LD4All Ontology
Extension. Possible extension work could involve members behind the
[*WebSchemas Accessibility
work*](https://www.w3.org/wiki/WebSchemas/Accessibility), which we
already leverage heavily in the recommended core.

Future work should include investigation for indicating Accessibility
Standards compliance in the ontology pattern.
