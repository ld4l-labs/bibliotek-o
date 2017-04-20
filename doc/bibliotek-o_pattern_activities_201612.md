[]{#_gjdgxs .anchor}NOTE: the following represents the direction taken
by the LD4L Labs and LD4P Ontology Group in the development of
bibliotek-o and may not be fully formed. This pattern document was used
internally to define a direction and is shared with the intention of
contextualizing a pattern found within the ontology; terms specified
below may not fully align to the ontology as published. Further,
discussion of BIBFRAME 2.0 may be out-of-date.

2016 December

Overview
========

-   Link Agents to Works, Instance, and Items through an
    > [*bib:Activity*](#_35nkun2) class rather than make a distinction
    > between bf:Contribution and bf:Provision. The class would be
    > defined as "An activity or contribution by a single agent that
    > affects or alters the existence or state of a resource."

    -   Consider alignment with cidoc-crm:E7\_Activity and/or other
        > existing Activity classes in the future.

-   Link Works, Instance, and Items to Activities using
    > [*bib:hasActivity*](#_1ksv4uv).

-   Use subclassing of bib:Activity to capture Agent roles, e.g.
    > bib:IllustrationActivity (more on Roles below).

-   Use dcterms:date to capture dates of the bib:Activity.

-   Use bf:agent to link bib:Activities to Agents.

-   Use bib:atLocation to link bib:Activities to prov:Locations[^1]

**Comments on implementation:**

-   Simplifying to Activities with specific roles, rather than
    > Contributions/Provision distinction is an easier model to
    > implement, while still meeting our use cases.

    -   It isn't the intent of BIBFRAME that one must decide whether to
        > assert a Contribution or ProvisionActivity based on whether
        > the resource is a Work or Instance (although in most cases it
        > would fall that way). bf:Work, bf:Instance, bf:Item are not
        > defined as disjoint; there will likely be implementations that
        > assert something to be both a bf:Work and bf:Instance,
        > therefore distinguishing contributions on the basis of whether
        > something is a bf:Work or bf:Instance, will not work across
        > all implementations of BIBFRAME.

-   We recommend using
    > [*EDTF*](https://www.loc.gov/standards/datetime/pre-submission.html)
    > for encoding dates as the range of dcterms:date. dcterms:date is a
    > well-established date property, and EDTF allows use to handle a
    > number date related use cases in a parseable way (e.g. date
    > ranges, approximate dates) using only a single date property.

-   With regard to co-authorship:

-   Two broad types of co-authorship have been identified:

1.  Collaboration: multiple authors collaborate on the entire work.

    -   Make new Activity resource for each author. Follow cases above
        > if specific author fits one of them.

<!-- -->

1.  Individual, independent contributions (e.g., chapters) to a whole
    > work

    -   Break Work into parts (new Works).

    -   Have an Activity resource for each part (new Works)

-   Because the modeling differs from case to case, the relationship of
    > an author of a part to the work as a whole **cannot** be inferred
    > from the relationship to the part.

-   It *might* be possible to identify specific types of works where the
    > inference would be valid, but, such inferences are outside the
    > scope of OWL.

-   We thus refer the decision about whether a contribution to a part is
    > also a contribution to the whole to content standards and
    > implementation recommendations.

-   It *may* be possible to state these in terms of broad classes of
    > Works, such as essay collections, journals, journal issues, etc.
    > (this would be preferred); it may truly be a work-by-work modeling
    > decision; or it may be some combination of the two. This analysis
    > has been identified as future work.

Requests for Modifications to BIBFRAME 2.0
------------------------------------------

### Open Requests

-   Request LC to define bf:Activity and remove bf:Contribution and
    > bf:ProvisionActivity and related subclasses.

    -   If LOC is not open to removing bf:Contribution and
        > bf:ProvisionActivity, request they are made subclasses of
        > bf:Activity

    -   If LOC is not open to creating a bf:Activity class, LD4all will
        > create bib:Activity class.

-   Request LOC to create subclasses of :Activity to capture roles.

    -   If LOC is not open to creating subclasses, request that they
        > make bf:role an object property with a range of rdf:Property.

        -   In this case, LD4all would make subclasses for roles.

-   Request LOC to create bf:hasActivity and bf:isActivityOf (object
    > properties)x

    -   []{#_3znysh7 .anchor}If LOC is not open to creating
        > bf:hasActivity and bf:isActivityOf, LD4all will create
        > bib:hasActivity and bib:isActivityOf.

### Approved Requests

These requests have been approved by LC, though not yet published in the current BF2 spec.
------------------------------------------------------------------------------------------

### Rejected Requests

These requests have been rejected by LC. LD4L action is stated.
---------------------------------------------------------------

-   Request LOC make an inverse property of bf:agent, bf:isAgentOf.

    -   If LOC is not open to creating a bf:isAgentOf property, LD4all
        > will create bib:isAgentOf.

-   Request LOC open the range of bf:agent, so that any type of Agent
    > can be used with the property. If not mint bib:hasAgent.

-   Request LOC create a bf:statement data type property, replacing
    > bf:provisionActivityStatement. The LD4All Sprint Group
    > recommendation is to use bib:Activity instead of
    > bf:ProvisionActivity, and because this statement may have more
    > than one agent listed the statement should be asserted on the
    > Instance, rather than the bib:Activity instances.

Approach for Moving Forward (including questions if diverges)
-------------------------------------------------------------

Summary of Recommendation Discussions 
--------------------------------------

LD4all discussion of the bib:Activity and bf:Contribution/bf:Provision
patterns began with a focus on the Roles various Agents might have and
how best to model these Roles. LD4all focused on devising a method to
capture the role of Agents consistently that would rely on Roles as RDF
Resources, rather than Literals, thereby encouraging greater linking and
enabling more confident querying of instance data. Another attempt to
provide confident querying was to minimize the number of ways roles
might be captured in the model. In the end, the consensus was to use
subclasses of the Contribution/Provision/Activity class that links an
Agent to a bf:Work/Instance/Item. Recognizing that the Library of
Congress is motivated to reuse their relator properties in the Role
pattern, if they decide ultimately not to model Roles through
subclassing of Contribution/Provision/Activity classes, we to recommend
that bf:role be changed to an object property and have the range
rdf:Property.

Irrespective of Roles, BIBFRAME 2.0 currently has a number of ways to
relate agents to Works/Instances/Items
([*illustration*](https://docs.google.com/document/d/1NkLCM2OiOOwe7iajNoGdYXZCI-5VI3FydNA0AQDeDvg/edit?usp=sharing),
and more on this below). LD4all spent a considerable amount of time
discussing how best to prune BIBFRAME 2.0 so that the model provided a
consistent, singular way for relating Agents to the Resources they were
involved in the making of, or otherwise associated with. We ultimately
began to think it would be best to remove the distinction between
Contributions and Provisions, preferring instead a simpler Activity
pattern. This way of thinking was informed, in part, by discussions on
the preference to not treat [*Works, Instances, and
Items*](https://docs.google.com/document/d/1UXEekre8vSlKQhHmdTyi_9nsIQxENEJU-tUwZN6mWvQ/edit?usp=sharing)
as disjoint.

Because the outcome of these discussions included the possibility of
collapsing Contributions and Provisions into a new Activity class (with
related properties), LD4all first researched if existing patterns would
meet our needs.
[*CIDOC-CRM*](http://www.cidoc-crm.org/html/5.0.4/cidoc-crm.html)’s
Activity Class
([*cidoc-crm:E7\_Activity*](http://www.cidoc-crm.org/html/5.0.4/cidoc-crm.html#_Toc310250718))
and schema.org’s Action class
([*schema:Action*](https://schema.org/Action)) were identified as
possible candidates. The options considered were to reuse either
cidoc-crm:E7\_Activity or schema:Action, or to create an bib:Activity
class and that would align through rdfs:subClassOf assertions to either
class.

Creating an bib:Activity class and aligning to the external classes
mentioned above has pros and cons. By creating a new class we have the
agency to more narrowly define our definition of Activity to meet
defined use cases, and to align with any and all other related classes
that might exist. On the other hand, it also introduces a new Activity
class where other linked data implementations are already be using an
existing more broadly defined Activity/Action/Event classes. Ultimately
it was decided to propose the new class and align to other classes,
rather than relying on looser defined Activity classes which require
documented implementation patterns separate from the model employed.
While we do not rule out the possibility that some data will model
relationships between bf:Works/Instances/Items through more general
Activity/Action/Event classes, the preference for querying related
Agents is through the more granular bf:Activity.

BF2 Approach to Contributions & Provisions
==========================================

### Illustration 

### ![Screen Shot 2017-04-09 at 9.15.20 PM.png](media/image02.png){width="5.744792213473316in" height="4.450190288713911in"}

### \*In the above illustration, predicates with the ld4l namespace should be in the bib namespace

### Involved Classes

#### Contribution

**Label**: Contribution

**URI:**
[*http://id.loc.gov/ontologies/bibframe/Contribution*](http://id.loc.gov/ontologies/bibframe/Contribution)

**Subclass of:** rdfs:Resource

**Definition:** "Agent and role with respect to the resource being
described."

**Dcterms:modified**: "2016-04-21 (New)" .

#### ProvisionActivity

**Label**: "Provider entity"

**URI:**
[*http://id.loc.gov/ontologies/bibframe/ProvisionActivity*](http://id.loc.gov/ontologies/bibframe/ProvisionActivity)

**Subclass of:** rdfs:Resource

**Subclassed as**:

-   [*http://id.loc.gov/ontologies/bibframe/Publication*](http://id.loc.gov/ontologies/bibframe/Publication)

-   [*http://id.loc.gov/ontologies/bibframe/Manufacture*](http://id.loc.gov/ontologies/bibframe/Manufacture)

-   [*http://id.loc.gov/ontologies/bibframe/Production*](http://id.loc.gov/ontologies/bibframe/Production)

-   [*http://id.loc.gov/ontologies/bibframe/Distribution*](http://id.loc.gov/ontologies/bibframe/Distribution)

**Definition:** "Information about the agent or place relating to the
publication, printing, distribution, issue, release, or production of a
resource." .

**Dcterms:modified**: "2016-04-21 (New)" .

#### Publication

**Label**: Publisher

**URI:**
[*http://id.loc.gov/ontologies/bibframe/Publication*](http://id.loc.gov/ontologies/bibframe/Publication)

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/ProvisionActivity*](http://id.loc.gov/ontologies/bibframe/ProvisionActivity)

**Definition:** "Information relating to publication of a resource."

**Dcterms:modified**: "2016-04-21 (New)" .

#### Production

**Label**: Producer

**URI:**
[*http://id.loc.gov/ontologies/bibframe/Production*](http://id.loc.gov/ontologies/bibframe/Production)

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/ProvisionActivity*](http://id.loc.gov/ontologies/bibframe/ProvisionActivity)

**Definition:** "Information relating to production of a resource."

**Dcterms:modified**: "2016-04-21 (New)" .

#### ProductionMethod

**Label**: Production method

**URI:**
[*http://id.loc.gov/ontologies/bibframe/ProductionMethod*](http://id.loc.gov/ontologies/bibframe/ProductionMethod)

**Subclass of:** rdfs:Resource

**Definition:** "Process used to produce a resource"

**Dcterms:modified**: "2016-04-21 (New)" .

#### Distribution

**Label**: Distributor

**URI:**
[*http://id.loc.gov/ontologies/bibframe/Distribution*](http://id.loc.gov/ontologies/bibframe/Distribution)

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/ProvisionActivity*](http://id.loc.gov/ontologies/bibframe/ProvisionActivity)

**Definition:** "Information relating to distribution of a resource."

**Dcterms:modified**: "2016-04-21 (New)" .

#### Manufacture

**Label**: Manufacturer

**URI:**
[*http://id.loc.gov/ontologies/bibframe/Manufacture*](http://id.loc.gov/ontologies/bibframe/Manufacture)

**Subclass of:**
[*http://id.loc.gov/ontologies/bibframe/ProvisionActivity*](http://id.loc.gov/ontologies/bibframe/ProvisionActivity)

**Definition:** "Information relating to manufacture of a resource."

**Dcterms:modified**: "2016-04-21 (New)" .

#### Arrangement

**Label**: "Organization of materials information"

**URI:**
[*http://id.loc.gov/ontologies/bibframe/Arrangement*](http://id.loc.gov/ontologies/bibframe/Arrangement)

**Subclass of:** rdfs:Resource

**Definition:** "Information about the organization and arrangement of a
collection of items. For instance, for computer files, organization and
arrangement information may be the file structure and sort sequence of a
file; for visual materials, this information may be how a collection is
arranged." .

**Dcterms:modified**: "2016-04-21 (New)" .

#### Capture

**Label**: "Capture of content"

**URI:**
[*http://id.loc.gov/ontologies/bibframe/Capture*](http://id.loc.gov/ontologies/bibframe/Capture)

**Subclass of:** rdfs:Resource

**Definition:** "Information about place and date associated with the
capture (i.e., recording, filming, etc.) of the content of a resource."
.

**Dcterms:modified**: "2016-04-21 (New)" .

### Involved Properties

#### acquisitionSource (datatype property)

**Label:** "Source of acquisition"

**URI:**
[*http://id.loc.gov/ontologies/bibframe/acquisitionSource*](http://id.loc.gov/ontologies/bibframe/acquisitionSource)

**Definition**: "Information about an organization, etc., from which a
resource may be obtained."

**Comment**: "Used with Work or Instance"

**Range**: rdfs:Literal

**Dcterms:modified**: "2016-04-21 (New)" .

#### acquisitionTerms (datatype property)

**Label:** "Terms of acquisition"

**URI:**
[*http://id.loc.gov/ontologies/bibframe/acquisitionTerms*](http://id.loc.gov/ontologies/bibframe/acquisitionTerms)

**Definition**: "Conditions under which the publisher, distributor,
etc., will normally supply a resource, e.g., price of a resource."

**Comment**: "Used with Work or Instance"

**Range**: rdfs:Literal

**Dcterms:modified**: "2016-04-21 (New)" .

#### agent (object property)

**Label:** Associated agent

**URI:**
[*http://id.loc.gov/ontologies/bibframe/agent*](http://id.loc.gov/ontologies/bibframe/agent)

**Definition**: "Entity associated with a resource or element of
description, such as the name of the entity responsible for the content
or of the publication, printing, distribution, issue, release or
production of a resource."

**Comment**: "Used with Unspecified"

**Range**:
[*http://id.loc.gov/ontologies/bibframe/Agent*](http://id.loc.gov/ontologies/bibframe/Agent)

**Dcterms:modified**: "2016-04-21 (New)" .

#### arrangement (object property)

**Label:** Organization and arrangement

**URI:**
[*http://id.loc.gov/ontologies/bibframe/arrangement*](http://id.loc.gov/ontologies/bibframe/arrangement)

**Definition**: "Information about the organization and arrangement of a
collection of resources." .

**Comment**: "Used with Work or Instance"

**Range**:
[*http://id.loc.gov/ontologies/bibframe/Arrangement*](http://id.loc.gov/ontologies/bibframe/Arrangement)

**Dcterms:modified**: "2016-04-21 (New)" .

#### contribution (object property)

**Label:** Contributor role

**URI:** http://id.loc.gov/ontologies/bibframe/contribution

**Definition**: "Agent and its role in relation to the resource."

**Comment**: "Used with Work, Instance or Item" .

**Range**: http://id.loc.gov/ontologies/bibframe/Contribution .

**Dcterms:modified**: "2016-04-21 (New)" .

#### capture (object property)

**Label:** Capture of content

**URI:**
[*http://id.loc.gov/ontologies/bibframe/capture*](http://id.loc.gov/ontologies/bibframe/capture)

**Definition**: "Information about place and date associated with the
capture (i.e., recording, filming, etc.) of the content of a resource."

**Range**:
[*http://id.loc.gov/ontologies/bibframe/Capture*](http://id.loc.gov/ontologies/bibframe/Capture)
.

**Dcterms:modified**: "2016-04-21 (New)" .

#### copyrightDate (Data Property)

**Label:** Copyright date

**URI:**
[*http://id.loc.gov/ontologies/bibframe/copyrightDate*](http://id.loc.gov/ontologies/bibframe/copyrightDate)

**Subproperty of:**
[*http://id.loc.gov/ontologies/bibframe/date*](http://id.loc.gov/ontologies/bibframe/date)

**Definition**: "Date associated with a claim of protection under
copyright or a similar regime."

**Comment**: Used with Work or Instance

**Range**: rdfs:Literal

**Dcterms:modified**: "2016-04-21 (New)" .

#### bf:place (Object property)

**Label:** Place

**URI:**
[*http://id.loc.gov/ontologies/bibframe/place*](http://id.loc.gov/ontologies/bibframe/place)

**Description:** “Geographic location or place entity associated with a
resource or element of description, such as the place associated with
the publication, printing, distribution, issue, release or production of
a resource, place of an event.”

**Range:** bf:Place

#### productionMethod (Object property)

**Label:** Production method

**URI:**
[*http://id.loc.gov/ontologies/bibframe/provisionActivityStatement*](http://id.loc.gov/ontologies/bibframe/provisionActivityStatement)

**Definition**: "Process used to produce a resource."

**Domain:**
[*http://id.loc.gov/ontologies/bibframe/Instance*](http://id.loc.gov/ontologies/bibframe/Instance)

**Range**:
[*http://id.loc.gov/ontologies/bibframe/ProductionMethod*](http://id.loc.gov/ontologies/bibframe/ProductionMethod)

**Dcterms:modified**: "2016-04-21 (New)" .

#### provisionActivity (object property)

**Label:** Provider

**URI:**
[*http://id.loc.gov/ontologies/bibframe/provisionActivity*](http://id.loc.gov/ontologies/bibframe/provisionActivity)

**Definition**: "Place, name, and/or date information relating to the
publication, printing, distribution, issue, release, or production of a
resource."

**Domain:**
[*http://id.loc.gov/ontologies/bibframe/Instance*](http://id.loc.gov/ontologies/bibframe/Instance)

**Range**:
[*http://id.loc.gov/ontologies/bibframe/ProvisionActivity*](http://id.loc.gov/ontologies/bibframe/ProvisionActivity)

**Dcterms:modified**: "2016-04-21 (New)" .

#### provisionActivityStatement (datatype property)

**Label:** Provider statement

**URI:**
[*http://id.loc.gov/ontologies/bibframe/provisionActivityStatement*](http://id.loc.gov/ontologies/bibframe/provisionActivityStatement)

**Definition**: "Statement relating to providers of a resource; usually
transcribed."

**Comment**:

**Domain:**
[*http://id.loc.gov/ontologies/bibframe/Instance*](http://id.loc.gov/ontologies/bibframe/Instance)

**Range**: rdfs:Literal

**Dcterms:modified**: "2016-04-21 (New)" .

#### role (datatype property)

**Label:** Agent role

**URI:** http://id.loc.gov/ontologies/bibframe/role

**Definition**: "Specific role of agent."

**Comment**:

**Domain**: http://id.loc.gov/ontologies/bibframe/Contribution

**Range**: rdfs:Literal

**Dcterms:modified**: "2016-04-21 (New)" .

#### owl:imports of MARC Code List of Relators

**URI:**
[*http://id.loc.gov/vocabulary/relators*](http://id.loc.gov/vocabulary/relators)

**Description:** Relator terms and their associated codes designate the
relationship between an agent and a bibliographic resource. The relator
codes are three-character lowercase alphabetic strings that serve as
identifiers. Either the term or the code may be used as controlled
values.

bibliotek-o Approach to Activities
==================================

### Illustration

![Screen Shot 2017-04-09 at 9.19.02
PM.png](media/image03.png){width="6.401042213473316in"
height="4.554587707786527in"}

### Involved Classes

#### Activity (new in bibliotek-o)

**Label**: Activity

**URI:** bib:Activity

**Definition:** "An activity or contribution by a single agent that
affects or alters the existence or state of a resource."

**Proposed bib:Activity Subclasses Based on MARC Relators**:

  -------------------------------- ------------------------------ -------------------------------
  bib:AbridgeActivity              bib:DraftsmanActivity          bib:PhotographerActivity
                                                                  
  bib:ActorActivity                bib:EditorActivity             bib:PlatemakerActivity
                                                                  
  bib:AcquisitionActivity\*        bib:EngraverActivity           bib:PresenterActivity
                                                                  
  bib:AdaptingActivity             bib:EtcherActivity             bib:PrinterActivity
                                                                  
  bib:AddresseeActivity            bib:FacsimilistActivity        bib:PrintmakerActivity
                                                                  
  bib:AnalystActivity              bib:FieldDirectorActivity      bib:ProducerActivity
                                                                  
  bib:AnimatorActivity             bib:FilmDirectorActivity       bib:ProductionActivity
                                                                  
  bib:AppellantActivity            bib:FilmDistributorActivity    bib:ProgrammerActivity
                                                                  
  bib:AppelleeActivity             bib:FilmEditorActivity         bib:ProofreaderActivity
                                                                  
  bib:ApplicationActivity          bib:FilmProducerActivity       bib:ProviderActivity
                                                                  
  bib:ArchitectActivity            bib:FilmmakerActivity          bib:PublicationActivity
                                                                  
  bib:ArrangementActivity          bib:ForgerActivity             bib:PuppeteerActivity
                                                                  
  bib:ArtCopyistActivity           bib:HonoreeActivity            bib:RecorderActivity
                                                                  
  bib:ArtDirectorActivity          bib:HostActivity               bib:RendererActivity
                                                                  
  bib:ArtistActivity               bib:IlluminationActivity       bib:ReporterActivity
                                                                  
  bib:ArtisticDirectorActivity     bib:IllustrationActivity       bib:RepositoryActivity
                                                                  
  bib:AssigneeActivity             bib:InscriberActivity          bib:ResearcherActivity
                                                                  
  bib:AttributionActivity          bib:InstrumentalistActivity    bib:ReviewerActivity
                                                                  
  bib:AuthorActivity               bib:IntervieweeActivity        bib:ScientificAdvisorActivity
                                                                  
  bib:BinderActivity               bib:InterviewerActivity        bib:ScreenwriterActivity
                                                                  
  bib:BindingDesignerActivity      bib:InventorActivity           bib:ScribeActivity
                                                                  
  bib:BroadcasterActivity          bib:IssuingBodyActivity        bib:SculptorActivity
                                                                  
  bib:BorrowerActivity             bib:LenderActivity             bib:SecretaryActivity
                                                                  
  bib:CaptureActivity\*            bib:LibrettistActivity         bib:SetDesignerActivity
                                                                  
  bib:CartographerActivity         bib:LicenseeActivity           bib:SettingActivity
                                                                  
  bib:ChoreographerActivity        bib:LicensorActivity           bib:SignerActivity
                                                                  
  bib:CinematographerActivity      bib:LightingDesignerActivity   bib:SingerActivity
                                                                  
  bib:CollectorActivity            bib:LithographerActivity       bib:SoundDesignerActivity
                                                                  
  bib:CollectionRegistarActivity   bib:LyricistActivity           bib:SpeakerActivity
                                                                  
  bib:CollotyperActivity           bib:ManufacturerActivity       bib:SponsorActivity
                                                                  
  bib:ColoristActivity             bib:MarblerActivity            bib:StageDirectorActivity
                                                                  
  bib:CommentatorActivity          bib:MetalEngraverActivity      bib:StageManagerActivity
                                                                  
  bib:CompilerActivity             bib:MinuteTakerActivity        bib:StereotyperActivity
                                                                  
  bib:ComposerActivity             bib:ModeratorActivity          bib:StorytellerActivity
                                                                  
  bib:ConductorActivity            bib:MonitorActivity            bib:SurveyorActivity
                                                                  
  bib:ConservatorActivity          bib:MusicCopyistActivity       bib:TeacherActivity
                                                                  
  bib:ConsultantActivity           bib:MusicalDirectorActivity    bib:ThesisAdvisorActivity
                                                                  
  bib:ContributorActivity          bib:MusicianActivity           bib:TranscriberActivity
                                                                  
  bib:CopyrightActivity            bib:NarratiorActivity          bib:TranslatorActivity
                                                                  
  bib:CorrespondentActivity        bib:OfferActivity              bib:TypographerActivity
                                                                  
  bib:CoverDesignerActivity        bib:OpponentActivity           bib:VideographerActivity
                                                                  
  bib:CreationActivity             bib:OrganizerActivity          bib:VoiceActorActivity
                                                                  
  bib:CurationActivity             bib:OriginatorActivity         bib:WitnessActivity
                                                                  
  bib:DancerActivity               bib:OwnerActivity              bib:WoodEngraverActivity
                                                                  
  bib:DedicateeActivity            bib:PanelistActivity           bib:WoodcutterActivity
                                                                  
  bib:DedicatorActivity            bib:PapermakerActivity         
                                                                  
  bib:DepositorActivity            bib:PatentActivity             
                                                                  
  bib:DesignerActivity             bib:PatronActivity             
                                                                  
  bib:DirectorActivity             bib:PerformerActivity          
                                                                  
  bib:DistributionActivity                                        
                                                                  
  bib:DonorActivity                                               
  -------------------------------- ------------------------------ -------------------------------

\*A bib:Activity subclass without a corresponding MARC relator code

### Involved Properties

#### bib:atLocation (object property)

**Label:** At location

**URI:** bib:atLocation

**Definition**: "A location can be an identifiable geographic place (ISO
19112), but it can also be a non-geographic place such as a directory,
row, or column. As such, there are numerous ways in which location can
be expressed, such as by a coordinate, address, landmark, and so forth."

**Comment**: "Used with Unspecified"

#### dcterms:date (Data property)

**Label:** Date

**URI:**
[*http://purl.org/dc/terms/date*](http://purl.org/dc/terms/date)

**Definition:** “A point or period of time associated with an event in
the lifecycle of the resource.”

**Comment:** “Date may be used to express temporal information at any
level of granularity. Recommended best practice is to use an encoding
scheme, such as the W3CDTF profile of ISO 8601 \[W3CDTF\].”

**Range:** rdfs:Literal

#### hasActivity (Object property)

**Label:** has Activity

**URI:** bib:hasActivity

**Description**: "Relates bibliographic resource to an activity that
affects the resource’s state."

**Inverse**: bib:isActivityOf

isActivityOf (Object property)

**Label:** is Activity of

**URI:** bib:isActivityOf

**Description**: "Relates an activity that affects the resource’s state
to bibliographic resource."

**Inverse:** bib:hasActivity

#### bib:isAgentOf (Object property)

**Label:** Agent for

**URI:** bib:isAgentOf

**Description:** “Relates an Agent to an Activity they participated in.

**Domain:** bf:Agent

**Inverse:** bf:agent

#### vivo:rank (Data property)

**Label:** rank

**URI:**
[*http://vivoweb.org/ontology/core\#rank*](http://vivoweb.org/ontology/core#rank)

**Comment:** “An integer indicating the position of an entity in a
list.”

Side by Side Examples
=====================

Work is by author Edna O’Brien and a co-author, written in 1960 while
she was in Dublin.

  --------------------------------------------------------------------------------------------------------------------------------------------------
  **\# BIBFRAME2**
  
  :w1 a bf:Work ;
  
  bf:contributor &lt;[*http://id.loc.gov/rwo/agents/n78091520*](http://id.loc.gov/rwo/agents/n78091520)&gt; ;
  
  bib:Activity :c1 , :c3 ;
  
  bf:hasInstance :i1 .
  
  :c1 a bib:Activity ;
  
  bf:agent &lt;[*http://id.loc.gov/rwo/agents/n78091520*](http://id.loc.gov/rwo/agents/n78091520)&gt; ;
  
  bf:role “author” ;
  
  bf:date “1960” ;
  
  bf:place :dublin .
  
  :c3 a bib:Activity ;
  
  bf:agent :Agent1
  
  bf:role “author”
  
  bf:date “1960” ;
  
  bf:place :dublin .
  
  :i1 a bf:Instance ;
  
  bf:provisionActivity :c2 .
  
  :c2 a bf:ProvisionActivity ;
  
  bf:role “publisher”
  
  bf:date “1960” ;
  
  bf:place :London .
  
  \# A bib:Activity can be used instead of the bf:contributor property to record role, if known.
  
  \# The range of bf:role is currently rdfs:Literal, but LOC has discussed making it an object property to relate to MARC Relators.
  
  \# BF 2.0 doesn’t preclude using vivo:rank to order :c1 and :c3, but it doesn’t include it in the ontology.
  
  \# The “athor” typo in :c3’s bf:role is to make the point that we should avoid data properties. Other typos in this document were unintentional.
  --------------------------------------------------------------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------
  **\# bibliotek-o version 2 (Activity)**
  
  :w1 a bf:Work ;
  
  bib:hasActivity :c1 , :c3 ;
  
  bf:hasInstance :i1 .
  
  :i1 a bf:Instance ;
  
  bib:hasActivity :c2 .
  
  :c1 a bib:AuthorActivity ;
  
  bf:agent &lt;[*http://id.loc.gov/rwo/agents/n78091520*](http://id.loc.gov/rwo/agents/n78091520)&gt; ;
  
  vivo:rank “1” ;
  
  dc:terms:date “1960” ;
  
  bib:atLocation :London .
  
  :c3 a bib:AuthorActivity ;
  
  bf:agent :Agent1 .
  
  vivo:rank “2” ;
  
  dcterms:date “1960” ;
  
  bib:atLocation :dublin .
  
  :c2 a bib:PublishingActivity ;
  
  bf:agent &lt;Publisher1&gt; ;
  
  dc:terms:date "2016-07-30" .
  
  bib:AuthorActivity rdfs:subClassOf bf:Activity .
  
  bib:EditorActivity rdfs:subClassOf bf:Activity .
  
  bib:PublishingActivity rdfs:subClassOf bf:Activity .
  -------------------------------------------------------------------------------------------------------

Co-authorship modeling
======================

Two broad types of co-authorship can be distinguished:

1.  Collaboration: multiple authors collaborate on the entire work.

    -   Make new Activity resource for each author. Follow cases above
        > if specific author fits one of them.

2.  Individual, independent contributions (e.g., chapters) to a whole
    > work

    -   Break Work into parts (new Works).

    -   Have an Activity resource for each part (new Works)

Note that the distinction is **only** relevant where the parts are
defined as individual entities. Where this is not the case, the
contribution to a part will necessarily be stated in relation to the
whole.

Model 1: Collaboration

  -------------------------------------------
  :work1 a bf:Work ;
  
  bib:hasActivity :activity1 , :activity2 .
  
  :activity1 a bib:AuthorActivity[^2] ;
  
  bf:hasAgent :agent1 .
  
  :activity2 a bib:AuthorActivity ;
  
  bf:hasAgent :agent2 .
  -------------------------------------------

Model 1 is straightforward and requires no further discussion.

Individual contributions can be modeled as Activities on parts of a
Work.

Model 2: Individual contributions to parts of a Work

  -----------------------------------
  :work1 a bf:Work ;
  
  rdfs:label “Some textbook” ;
  
  dcterms:hasPart :part1 , :part2 .
  
  :part1 a bf:Work ;
  
  rdfs:label “Chapter 1” ;
  
  bib:hasActivity :activity1 .
  
  :activity1 a bib:AuthorActivity ;
  
  bf:hasAgent :agent1 .
  
  :part2 a bf:Work ;
  
  rdfs:label “Chapter 2” ;
  
  bib:hasActivity :activity2 .
  
  :activity2 a bib:AuthorActivity ;
  
  bf:hasAgent :agent2 .
  -----------------------------------

Suppose for the sake of argument that whenever we have an Activity on
the part, we also have an Activity on the whole:

Model 3: Individual contributions to parts of a Work imply contributions
on the whole

  ------------------------------------------
  :work1 a bf:Work ;
  
  rdfs:label “Some textbook” ;
  
  dcterms:hasPart :part1 , :part2 ;
  
  bib:hasActivity :activity3, :activity4 .
  
  :part1 a bf:Work ;
  
  rdfs:label “Chapter 1” ;
  
  bib:hasActivity :activity1 .
  
  :activity1 a bib:AuthorActivity ;
  
  bf:hasAgent :agent1 .
  
  :part2 a bf:Work ;
  
  rdfs:label “Chapter 2” ;
  
  bib:hasActivity :activity2 .
  
  :activity2 a bib:AuthorActivity ;
  
  bf:hasAgent :agent2 .
  
  :activity3 a bib:AuthorActivity ;
  
  bf:hasAgent :agent1 .
  
  :activity4 a bib:AuthorActivity ;
  
  bf:hasAgent :agent2 .
  ------------------------------------------

This model has the practical advantage of simplifying queries for
contributions on a work: it is not necessary to query whether the work
has parts, and if so, to drill down into the parts to get the full list
of contributors to the whole.

If this were true, ideally we would want to *infer* rather than *assert*
the agent-to-whole relationship; that is, the bolded statements in Model
4 would be inferred.

Model 3: Individual contributions to the whole are inferred based on
contributions to the whole

  ----------------------------------------------
  :work1 a bf:Work ;
  
  rdfs:label “Some textbook” ;
  
  dcterms:hasPart :part1 , :part2 ;
  
  **bib:hasActivity :activity3, :activity4** .
  
  :part1 a bf:Work ;
  
  rdfs:label “Chapter 1” ;
  
  bib:hasActivity :activity1 .
  
  :activity1 a bib:Activity ;
  
  bf:hasAgent :agent1 .
  
  :part2 a bf:Work ;
  
  rdfs:label “Chapter 2” ;
  
  bib:hasActivity :activity2 .
  
  :activity2 a bib:Activity ;
  
  bf:hasAgent :agent2 .
  
  **:activity3 a bib:Activity ;**
  
  **bf:hasAgent :agent1 .**
  
  **:activity4 a bib:Activity ;**
  
  **bf:hasAgent :agent2** .
  ----------------------------------------------

There are two problems here:

-   Technical obstacles to stating such an inference. An OWL property
    > chain axiom hasPart/hasActivity =&gt; hasActivity cannot work
    > unless we want the *same* Activity for the part and the whole,
    > which seems odd. Even if the inference could be stated in other
    > rules systems, such as SWRL, if an application does not support
    > such reasoning, the triples won’t exist.

-   In fact, this assumption does not mirror the complexity of
    > relationships between contributions to the part and contributions
    > to the whole.

Consider some different cases of independent contributions:

1.  **Book chapters or sections** independently written by different but
    > coordinate authors with the same degree of participation and/or
    > credit. In this case, all contributors are listed as authors of
    > the work, so we would want to express a relationship between each
    > agent and the work as a whole (via bib:AuthorActivities, of
    > course). For example we would have separate bib:AuthorActivities
    > for Hans Augusto Rey and Margret Rey to capture their
    > contributions to the whole of a Curious George book.

2.  **Book chapters or sections** where one author is considered the
    > author of the work as a whole and others are subordinate
    > contributors to individual sections. Example: *Patterns of
    > Enterprise Application Architecture*. On the book cover and title
    > page: by Martin Fowler, with contributions by David Rice, Matthew
    > Foemmel, Edward Hieatt, Robert Mee, and Randy Stafford. In the
    > table of contents and within the book, each individual contributor
    > is associated with an individual section.

3.  **Journal articles and essay collections**. In this case, there may
    > be only an editorial Activity on the entire work, and the authors
    > are related only to the individual essays (via an
    > bib:AuthorActivity), or we may want a direct contribution to the
    > whole, in addition to the contribution to the part. Certainly the
    > author of a journal article is *not* an author of the journal
    > issue, nor of the journal in its entirety. But the author of a
    > journal article may be considered a *contributor*, in some other
    > sense, to both the journal issue and the journal in its entirety.
    > (The nature of the contribution may be left unspecified by using
    > just the superclass bib:Activity, or we could define a new
    > subclass for this case.)

4.  **Introduction or preface** written by an agent other than the
    > author of the body of the work.

So the question is:

-   In which cases is there an Activity on the whole as well as on the
    > part?

-   Where such a relationship exists, what is the type of the Activity?
    > Is it the same type of Activity as exists on the part, or
    > different? E.g., a journal article author is probably not
    > considered an author of the issue or the journal.

<!-- -->

-   And how should these be modeled?

Case 1 is clear: we want to directly assert the relationship between the
work as a whole and each agent by instantiating another Activity node
relating the two. This is shown as Model 3 above, repeated here for
clarity.

Case 1 = Model 3: Individual contributions to parts of a Work imply
contributions to the whole

  ------------------------------------------
  :work1 a bf:Work ;
  
  rdfs:label “Some textbook” ;
  
  dcterms:hasPart :part1 , :part2 ;
  
  bib:hasActivity :activity3, :activity4 .
  
  :part1 a bf:Work ;
  
  rdfs:label “Chapter 1” ;
  
  bib:hasActivity :activity1 .
  
  :activity1 a bib:Activity ;
  
  bf:hasAgent :agent1 .
  
  :part2 a bf:Work ;
  
  rdfs:label “Chapter 2” ;
  
  bib:hasActivity :activity2 .
  
  :activity2 a bib:Activity ;
  
  bf:hasAgent :agent2 .
  
  :activity3 a bib:Activity ;
  
  bf:hasAgent :agent1 .
  
  :activity4 a bib:Activity ;
  
  bf:hasAgent :agent2 .
  ------------------------------------------

The modeling of cases 2-4 is less clear, and may differ from case to
case:

-   In some cases we want a direct authorial connection (i.e., an
    > bib:AuthorshipActivity) between author of parts and the whole
    > work.

-   In some cases we want a direct connection, but not an authorial
    > connection, between the authors of parts and the whole work. We
    > could leave the type of connection unspecified (using the
    > superclass bib:Activity) or we could define one or more new
    > subclasses for these cases.

-   In some cases we want an editorial Activity on the whole work, with
    > the agents of the parts not directly related to the whole work.

-   In some cases we want no relationship between the whole work and the
    > contributor of the part.

-   In the case of journals, there are three tiers involved: the
    > article, the journal issue, and the journal itself.

Conclusions
-----------

-   Because the modeling differs from case to case, the relationship of
    > an author of a part to the work as a whole **cannot** be inferred
    > from the relationship to the part.

-   It *might* be possible to identify specific types of works where the
    > inference would be valid, but, as above, such inferences are
    > outside the scope of OWL.

-   We thus refer the decision about whether a contribution to a part is
    > also a contribution to the whole to content standards and
    > implementation recommendations.

-   It *may* be possible to state these in terms of broad classes of
    > Works, such as essay collections, journals, journal issues, etc.
    > (this would be preferred); it may truly be a work-by-work modeling
    > decision; or it may be some combination of the two.

Future Work
===========

-   Work out recommendations for when bib:Activities, and bf:Events have
    > overlapping agents, places, dates, and resulting
    > Work/Instances/Items, e.g. A CreationActivity for an Album and a
    > Recording Session Event.

-   Consider subclassing hierarchy possibilities of the newly minted
    > bib:Activity subclasses.

-   Consider alignment with cidoc-crm:E7\_Activity and/or other existing
    > Activity/Action classes, e.g. schema:Action and VIVO ISF patterns.

-   Consider a better model for ordering Activities: Previously
    > considered “If important, to order multiple bib:Activities
    > (especially bib:Activities with the same role), use vivo:rank on
    > the appropriate activities.”

-   Analyze whether it’s possible to state that contributions to parts
    > of a work should be considered contributions to the whole in terms
    > of broad classes of Works, such as essay collections, journals,
    > journal issues, etc. (this would be preferred); it may truly be a
    > work-by-work modeling decision; or it may be some combination of
    > the two.

-   Consider making associative relationships between MARC Relator
    > Properties and corresponding Activities, through e.g.
    > bf:reifies/bf:reifiedBy, or
    > [*http://smiy.sourceforge.net/prv/spec/propertyreification.html*](http://smiy.sourceforge.net/prv/spec/propertyreification.html)

[^1]: LD4L proposes the use prov:Location over bf:Place. The definition
    of bf:Place is narrowly defined as a Geographic location, and there
    are a number of non-geographic places we may want to refer to.

[^2]: We use bib:AuthorActivity for illustration, but of course the
    model applies equally to other types of Activity.
