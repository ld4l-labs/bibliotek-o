Activities Pattern

# Table of Contents

[[TOC]]

# Recommendation Overview

## LD4All Ontology Alignment Decision

**Proposal****:**

* Link Agents to Works, Instance, and Items through an [ld4l:Activity](#heading=h.6iwh3b5nd5p1) class rather than make a distinction between bf:Contribution and bf:Provision. The class would be defined as "An activity or contribution by a single agent that affects or alters the existence or state of a resource."

    * Consider alignment with cidoc-crm:E7_Activity and/or other existing Activity classes in the future.

* Link Works, Instance, and Items to Activities using [ld4l:hasActivity](#heading=h.kbrgt7lbfqer).

* Use subclassing of ld4l:Activity to capture Agent roles, e.g. ld4l:IllustrationActivity (more on Roles below).

* Use dcterms:date to capture dates of the ld4l:Activity.

* Use bf:agent to link ld4l:Activities to Agents.

* Use ld4l:atLocation to link ld4l:Activities to prov:Locations (NOTE:  LD4L proposes the use prov:Location over bf:Place. The definition of bf:Place is narrowly defined as a Geographic location, and there are a number of non-geographic places we may want to refer to.)

**Comments on implementation:**

* Simplifying to Activities with specific roles, rather than Contributions/Provision distinction is an easier model to implement, while still meeting our use cases.

    * It isn't the intent of BIBFRAME that one must decide whether to assert a Contribution or ProvisionActivity based on whether the resource is a Work or Instance (although in most cases it would fall that way). bf:Work, bf:Instance, bf:Item are not defined as disjoint; there will likely be implementations that assert something to be both a bf:Work and bf:Instance, therefore distinguishing contributions on the basis of whether something is a bf:Work or bf:Instance, will not work across all implementations of BIBFRAME. 

* We recommend using [EDTF](https://www.loc.gov/standards/datetime/pre-submission.html) for encoding dates as the range of dcterms:date. dcterms:date is a well established date property, and EDTF allows use to handle a number date related use cases in a parseable way (e.g. date ranges, approximate dates) using only a single date property.

* With regard to co-authorship:

* Two broad types of co-authorship have been identified:

1. Collaboration: multiple authors collaborate on the entire work.

    * Make new Activity resource for each author. Follow cases above if specific author fits one of them.

1. Individual, independent contributions (e.g., chapters) to a whole work

    * Break Work into parts (new Works). 

    * Have an Activity resource for each part (new Works)

* Because the modeling differs from case to case, the* *relationship of an author of a part to the work as a whole **cannot** be inferred from the relationship to the part.

* It *might* be possible to identify specific types of works where the inference would be valid, but, such inferences are outside the scope of OWL.

* We thus refer the decision about whether a contribution to a part is also a contribution to the whole to content standards and implementation recommendations. 

* It *may* be possible to state these in terms of broad classes of Works, such as essay collections, journals, journal issues, etc. (this would be preferred); it may truly be a work-by-work modeling decision; or it may be some combination of the two. This analysis has been identified as future work.

## Requests for Modifications to BF2

### Open Requests

* Request LC to define bf:Activity and remove bf:Contribution and bf:ProvisionActivity and related subclasses.

    * If LOC is not open to removing bf:Contribution and bf:ProvisionActivity, request they are made subclasses of bf:Activity 

    * If LOC is not open to creating a bf:Activity class, LD4all will create ld4l:Activity class.

* Request LOC to create subclasses of :Activity to capture roles.

    * If LOC is not open to creating subclasses, request that they make bf:role an object property with a range of rdf:Property.

        * In this case, LD4all would make subclasses for roles.

* Request LOC to create bf:hasActivity and bf:isActivityOf (object properties)x

    * If LOC is not open to creating bf:hasActivity and bf:isActivityOf, LD4all will create ld4l:hasActivity and ld4l:isActivityOf.

### Approved Requests

## These requests have been approved by LC, though not yet published in the current BF2 spec.

### Rejected Requests

## These requests have been rejected by LC. LD4L action is stated.

* Request LOC make an inverse property of bf:agent, bf:isAgentOf.

    * If LOC is not open to creating a bf:isAgentOf property, LD4all will create ld4l:isAgentOf.

* Request LOC open the range of bf:agent, so that any type of Agent can be used with the property. If not mint ld4l:hasAgent.

* Request LOC create a bf:statement data type property, replacing bf:provisionActivityStatement. The LD4All Sprint Group recommendation is to use ld4l:Activity instead of bf:ProvisionActivity, and because this statement may have more than one agent listed the statement should be asserted on the Instance, rather than the  ld4l:Activity instances.

## Approach for Moving Forward (including questions if diverges)

## Summary of Recommendation Discussions 

LD4all discussion of the ld4l:Activity and bf:Contribution/bf:Provision patterns began with a focus on the Roles various Agents might have and how best to model these Roles. LD4all focused on devising a method to capture the role of Agents consistently that would rely on Roles as RDF Resources, rather than Literals, thereby encouraging greater linking and enabling more confident querying of instance data. Another attempt to provide confident querying was to minimize the number of ways roles might be captured in the model. In the end, the consensus was to use subclasses of the Contribution/Provision/Activity class that links an Agent to a bf:Work/Instance/Item. Recognizing that the Library of Congress is motivated to reuse their relator properties in the Role pattern, if they decide ultimately not to model Roles through subclassing of Contribution/Provision/Activity classes, we to recommend that bf:role be changed to an object property and have the range rdf:Property.

Irrespective of Roles, BIBFRAME 2.0 currently has a number of ways to relate agents to Works/Instances/Items ([illustration](https://docs.google.com/document/d/1NkLCM2OiOOwe7iajNoGdYXZCI-5VI3FydNA0AQDeDvg/edit?usp=sharing), and more on this below). LD4all spent a considerable amount of time discussing how best to prune BIBFRAME 2.0 so that the model provided a consistent, singular way for relating Agents to the Resources they were involved in the making of, or otherwise associated with. We ultimately began to think it would be best to remove the distinction between Contributions and Provisions, preferring instead a simpler Activity pattern. This way of thinking was informed, in part, by discussions on the preference to not treat [Works, Instances, and Items](https://docs.google.com/document/d/1UXEekre8vSlKQhHmdTyi_9nsIQxENEJU-tUwZN6mWvQ/edit?usp=sharing) as disjoint.

Because the outcome of these discussions included the possibility of collapsing Contributions and Provisions into a new Activity class (with related properties), LD4all first researched if existing patterns would meet our needs. [CIDOC-CRM](http://www.cidoc-crm.org/html/5.0.4/cidoc-crm.html)’s Activity Class ([cidoc-crm:E7_Activity](http://www.cidoc-crm.org/html/5.0.4/cidoc-crm.html#_Toc310250718)) and schema.org’s Action class ([schema:Action](https://schema.org/Action)) were identified as possible candidates. The options considered were to reuse either cidoc-crm:E7_Activity or schema:Action, or to create an ld4l:Activity class and that would align through rdfs:subClassOf assertions to either class. 

Creating an ld4l:Activity class and aligning to the external classes mentioned above has pros and cons. By creating a new class we have the agency to more narrowly define our definition of Activity to meet defined use cases, and to align with any and all other related classes that might exist. On the other hand, it also introduces a new Activity class where other linked data implementations are already be using an existing more broadly defined Activity/Action/Event classes. Ultimately it was decided to propose the new class and align to other classes, rather than relying on looser defined Activity classes which require documented implementation patterns separate from the model employed. While we do not rule out the possibility that some data will model relationships between bf:Works/Instances/Items through more general Activity/Action/Event classes, the preference for querying related Agents is through the more granular bf:Activity.

# Related Discussion Papers

#### [Work, Instance, Item](https://docs.google.com/document/d/1UXEekre8vSlKQhHmdTyi_9nsIQxENEJU-tUwZN6mWvQ/edit#)

#### [Attributions](https://docs.google.com/document/d/1W38EKLZpxKGcXb0WwHcyiAxoYUVM7Cs-fp3nYjh_hzk/edit)

# BF2 Approach to Contributions & Provisions

### Illustration

### ![image alt text](image_0.png)

### Involved Classes

#### Contribution

**Label**: Contribution

**URI: **[http://id.loc.gov/ontologies/bibframe/Contribution](http://id.loc.gov/ontologies/bibframe/Contribution)

**Subclass of: **rdfs:Resource

**Definition:**  "Agent and role with respect to the resource being described." 

**Dcterms:modified**:  "2016-04-21 (New)" .

#### ProvisionActivity

**Label**: "Provider entity"

**URI: **[http://id.loc.gov/ontologies/bibframe/ProvisionActivity](http://id.loc.gov/ontologies/bibframe/ProvisionActivity)

**Subclass of: **rdfs:Resource

**Subclassed as**:

* [http://id.loc.gov/ontologies/bibframe/Publication](http://id.loc.gov/ontologies/bibframe/Publication)

* [http://id.loc.gov/ontologies/bibframe/Manufacture](http://id.loc.gov/ontologies/bibframe/Manufacture)

* [http://id.loc.gov/ontologies/bibframe/Production](http://id.loc.gov/ontologies/bibframe/Production)

* [http://id.loc.gov/ontologies/bibframe/Distribution](http://id.loc.gov/ontologies/bibframe/Distribution) 

**Definition:**  "Information about the agent or place relating to the publication, printing, distribution, issue, release, or production of a resource." .

**Dcterms:modified**:  "2016-04-21 (New)" .

#### Publication

**Label**: Publisher

**URI: **[http://id.loc.gov/ontologies/bibframe/Publication](http://id.loc.gov/ontologies/bibframe/Publication)

**Subclass of: **[http://id.loc.gov/ontologies/bibframe/ProvisionActivity](http://id.loc.gov/ontologies/bibframe/ProvisionActivity)

**Definition:**  "Information relating to publication of a resource."

**Dcterms:modified**:  "2016-04-21 (New)" .

#### Production

**Label**: Producer

**URI: **[http://id.loc.gov/ontologies/bibframe/Production](http://id.loc.gov/ontologies/bibframe/Production)

**Subclass of: **[http://id.loc.gov/ontologies/bibframe/ProvisionActivity](http://id.loc.gov/ontologies/bibframe/ProvisionActivity)

**Definition:**  "Information relating to production of a resource."

**Dcterms:modified**:  "2016-04-21 (New)" .

#### ProductionMethod

**Label**: Production method

**URI: **[http://id.loc.gov/ontologies/bibframe/ProductionMethod](http://id.loc.gov/ontologies/bibframe/ProductionMethod) 

**Subclass of: **rdfs:Resource

**Definition:** "Process used to produce a resource"

**Dcterms:modified**:  "2016-04-21 (New)" .

#### Distribution

**Label**: Distributor

**URI: **[http://id.loc.gov/ontologies/bibframe/Distribution](http://id.loc.gov/ontologies/bibframe/Distribution) 

**Subclass of: **[http://id.loc.gov/ontologies/bibframe/ProvisionActivity](http://id.loc.gov/ontologies/bibframe/ProvisionActivity)

**Definition:**  "Information relating to distribution of a resource."

**Dcterms:modified**:  "2016-04-21 (New)" .

#### Manufacture

**Label**: Manufacturer

**URI: **[http://id.loc.gov/ontologies/bibframe/Manufacture](http://id.loc.gov/ontologies/bibframe/Manufacture)

**Subclass of: **[http://id.loc.gov/ontologies/bibframe/ProvisionActivity](http://id.loc.gov/ontologies/bibframe/ProvisionActivity)

**Definition:**  "Information relating to manufacture of a resource." 

**Dcterms:modified**:  "2016-04-21 (New)" .

#### Arrangement

**Label**: "Organization of materials information"

**URI: **[http://id.loc.gov/ontologies/bibframe/Arrangement](http://id.loc.gov/ontologies/bibframe/Arrangement) 

**Subclass of: **rdfs:Resource

**Definition:**  "Information about the organization and arrangement of a collection of items. For instance, for computer files, organization and arrangement information may be the file structure and sort sequence of a file; for visual materials, this information may be how a collection is arranged." .

**Dcterms:modified**:  "2016-04-21 (New)" .

#### Capture

**Label**: "Capture of content"

**URI: **[http://id.loc.gov/ontologies/bibframe/Capture](http://id.loc.gov/ontologies/bibframe/Capture) 

**Subclass of: **rdfs:Resource

**Definition:**  "Information about place and date associated with the capture (i.e., recording, filming, etc.) of the content of a resource." .

**Dcterms:modified**:  "2016-04-21 (New)" .

### Involved Properties

#### acquisitionSource (datatype property)

**Label:** "Source of acquisition"

**URI: **[http://id.loc.gov/ontologies/bibframe/acquisitionSource](http://id.loc.gov/ontologies/bibframe/acquisitionSource) 

**Definition**: "Information about an organization, etc., from which a resource may be obtained." 

**Comment**: "Used with Work or Instance"

**Range**: rdfs:Literal

**Dcterms:modified**: "2016-04-21 (New)" .

#### acquisitionTerms (datatype property)

**Label:** "Terms of acquisition"

**URI: **[http://id.loc.gov/ontologies/bibframe/acquisitionTerms](http://id.loc.gov/ontologies/bibframe/acquisitionTerms) 

**Definition**: "Conditions under which the publisher, distributor, etc., will normally supply a resource, e.g., price of a resource."

**Comment**: "Used with Work or Instance"

**Range**: rdfs:Literal

**Dcterms:modified**: "2016-04-21 (New)" .

#### agent (object property)

**Label:** Associated agent

**URI: **[http://id.loc.gov/ontologies/bibframe/agent](http://id.loc.gov/ontologies/bibframe/agent) 

**Definition**: "Entity associated with a resource or element of description, such as the name of the entity responsible for the content or of the publication, printing, distribution, issue, release or production of a resource."

**Comment**: "Used with Unspecified"

**Range**: [http://id.loc.gov/ontologies/bibframe/Agent](http://id.loc.gov/ontologies/bibframe/Agent) 

**Dcterms:modified**: "2016-04-21 (New)" .

#### arrangement (object property)

**Label:** Organization and arrangement

**URI: **[http://id.loc.gov/ontologies/bibframe/arrangement](http://id.loc.gov/ontologies/bibframe/arrangement)  

**Definition**: "Information about the organization and arrangement of a collection of resources." .

**Comment**: "Used with Work or Instance"

**Range**: [http://id.loc.gov/ontologies/bibframe/Arrangement](http://id.loc.gov/ontologies/bibframe/Arrangement) 

**Dcterms:modified**: "2016-04-21 (New)" .

#### contribution (object property)

**Label: **Contributor role

**URI: **http://id.loc.gov/ontologies/bibframe/contribution

**Definition**: "Agent and its role in relation to the resource."

**Comment**: "Used with Work, Instance or Item" .

**Range**: http://id.loc.gov/ontologies/bibframe/Contribution .

**Dcterms:modified**: "2016-04-21 (New)" .

#### capture (object property)

**Label: **Capture of content

**URI: **[http://id.loc.gov/ontologies/bibframe/capture](http://id.loc.gov/ontologies/bibframe/capture) 

**Definition**: "Information about place and date associated with the capture (i.e., recording, filming, etc.) of the content of a resource."

**Range**: [http://id.loc.gov/ontologies/bibframe/Capture](http://id.loc.gov/ontologies/bibframe/Capture) .

**Dcterms:modified**: "2016-04-21 (New)" .

#### copyrightDate (Data Property)

**Label:** Copyright date

**URI: **[http://id.loc.gov/ontologies/bibframe/copyrightDate](http://id.loc.gov/ontologies/bibframe/copyrightDate) 

**Subproperty of:** [http://id.loc.gov/ontologies/bibframe/date](http://id.loc.gov/ontologies/bibframe/date) 

**Definition**: "Date associated with a claim of protection under copyright or a similar regime."

**Comment**: Used with Work or Instance

**Range**: rdfs:Literal

**Dcterms:modified**: "2016-04-21 (New)" .

#### bf:place (Object property)

**Label:** Place

**URI:** [http://id.loc.gov/ontologies/bibframe/place](http://id.loc.gov/ontologies/bibframe/place)

**Description:** "Geographic location or place entity associated with a resource or element of description, such as the place associated with the publication, printing, distribution, issue, release or production of a resource, place of an event."

**Range:** bf:Place

#### productionMethod (Object property)

**Label:** Production method

**URI: **[http://id.loc.gov/ontologies/bibframe/provisionActivityStatement](http://id.loc.gov/ontologies/bibframe/provisionActivityStatement) 

**Definition**: "Process used to produce a resource."

**Domain:** [http://id.loc.gov/ontologies/bibframe/Instance](http://id.loc.gov/ontologies/bibframe/Instance) 

**Range**: [http://id.loc.gov/ontologies/bibframe/ProductionMethod](http://id.loc.gov/ontologies/bibframe/ProductionMethod) 

**Dcterms:modified**: "2016-04-21 (New)" .

#### provisionActivity (object property)

**Label:** Provider

**URI: **[http://id.loc.gov/ontologies/bibframe/provisionActivity](http://id.loc.gov/ontologies/bibframe/provisionActivity) 

**Definition**: "Place, name, and/or date information relating to the publication, printing, distribution, issue, release, or production of a resource."

**Domain:** [http://id.loc.gov/ontologies/bibframe/Instance](http://id.loc.gov/ontologies/bibframe/Instance) 

**Range**: [http://id.loc.gov/ontologies/bibframe/ProvisionActivity](http://id.loc.gov/ontologies/bibframe/ProvisionActivity) 

**Dcterms:modified**: "2016-04-21 (New)" .

#### provisionActivityStatement (datatype property)

**Label:** Provider statement

**URI: **[http://id.loc.gov/ontologies/bibframe/provisionActivityStatement](http://id.loc.gov/ontologies/bibframe/provisionActivityStatement) 

**Definition**: "Statement relating to providers of a resource; usually transcribed."

**Comment**: 

**Domain:** [http://id.loc.gov/ontologies/bibframe/Instance](http://id.loc.gov/ontologies/bibframe/Instance) 

**Range**: rdfs:Literal

**Dcterms:modified**: "2016-04-21 (New)" .

#### role (datatype property)

**Label: **Agent role

**URI: **http://id.loc.gov/ontologies/bibframe/role

**Definition**: "Specific role of agent."

**Comment**: 

**Domain**: http://id.loc.gov/ontologies/bibframe/Contribution

**Range**: rdfs:Literal

**Dcterms:modified**: "2016-04-21 (New)" .

#### owl:imports of MARC Code List of Relators

**URI:** [http://id.loc.gov/vocabulary/relators](http://id.loc.gov/vocabulary/relators)

**Description:** Relator terms and their associated codes designate the relationship between an agent and a bibliographic resource. The relator codes are three-character lowercase alphabetic strings that serve as identifiers. Either the term or the code may be used as controlled values.

# LD4all (v.2) Approach to Activities

### Illustration

![image alt text](image_1.png)

### Involved Classes

#### Activity (new in LD4L-O)

**Label**: Activity

**URI: **ld4l:Activity 

**Definition:**  "An activity or contribution by a single agent that affects or alters the existence or state of a resource."

**Proposed ld4l:Activity Subclasses Based on MARC Relators**:

<table>
  <tr>
    <td>ld4l:AbridgeActivity
ld4l:ActorActivity
ld4l:AcquisitionActivity*
ld4l:AdaptingActivity
ld4l:AddresseeActivity
ld4l:AnalystActivity
ld4l:AnimatorActivity
ld4l:AppellantActivity
ld4l:AppelleeActivity
ld4l:ApplicationActivity
ld4l:ArchitectActivity
ld4l:ArrangementActivity
ld4l:ArtCopyistActivity
ld4l:ArtDirectorActivity
ld4l:ArtistActivity
ld4l:ArtisticDirectorActivity
ld4l:AssigneeActivity
ld4l:AttributionActivity
ld4l:AuthorActivity
ld4l:BinderActivity
ld4l:BindingDesignerActivity
ld4l:BroadcasterActivity
ld4l:BorrowerActivity
ld4l:CaptureActivity*
ld4l:CartographerActivity
ld4l:ChoreographerActivity
ld4l:CinematographerActivity
ld4l:CollectorActivity
ld4l:CollectionRegistarActivity
ld4l:CollotyperActivity
ld4l:ColoristActivity
ld4l:CommentatorActivity
ld4l:CompilerActivity
ld4l:ComposerActivity
ld4l:ConductorActivity
ld4l:ConservatorActivity
ld4l:ConsultantActivity
ld4l:ContributorActivity
ld4l:CopyrightActivity
ld4l:CorrespondentActivity
ld4l:CoverDesignerActivity
ld4l:CreationActivity
ld4l:CurationActivity
ld4l:DancerActivity
ld4l:DedicateeActivity
ld4l:DedicatorActivity
ld4l:DepositorActivity
ld4l:DesignerActivity
ld4l:DirectorActivity
ld4l:DistributionActivity
ld4l:DonorActivity</td>
    <td>ld4l:DraftsmanActivity
ld4l:EditorActivity
ld4l:EngraverActivity
ld4l:EtcherActivity
ld4l:FacsimilistActivity
ld4l:FieldDirectorActivity
ld4l:FilmDirectorActivity
ld4l:FilmDistributorActivity
ld4l:FilmEditorActivity
ld4l:FilmProducerActivity
ld4l:FilmmakerActivity
ld4l:ForgerActivity
ld4l:HonoreeActivity
ld4l:HostActivity
ld4l:IlluminationActivity
ld4l:IllustrationActivity
ld4l:InscriberActivity
ld4l:InstrumentalistActivity
ld4l:IntervieweeActivity
ld4l:InterviewerActivity
ld4l:InventorActivity
ld4l:IssuingBodyActivity
ld4l:LenderActivity
ld4l:LibrettistActivity
ld4l:LicenseeActivity
ld4l:LicensorActivity
ld4l:LightingDesignerActivity
ld4l:LithographerActivity
ld4l:LyricistActivity
ld4l:ManufacturerActivity
ld4l:MarblerActivity
ld4l:MetalEngraverActivity
ld4l:MinuteTakerActivity
ld4l:ModeratorActivity
ld4l:MonitorActivity
ld4l:MusicCopyistActivity
ld4l:MusicalDirectorActivity
ld4l:MusicianActivity
ld4l:NarratiorActivity
ld4l:OfferActivity
ld4l:OpponentActivity
ld4l:OrganizerActivity
ld4l:OriginatorActivity
ld4l:OwnerActivity
ld4l:PanelistActivity
ld4l:PapermakerActivity
ld4l:PatentActivity
ld4l:PatronActivity
ld4l:PerformerActivity</td>
    <td>ld4l:PhotographerActivity
ld4l:PlatemakerActivity
ld4l:PresenterActivity
ld4l:PrinterActivity
ld4l:PrintmakerActivity
ld4l:ProducerActivity
ld4l:ProductionActivity
ld4l:ProgrammerActivity
ld4l:ProofreaderActivity
ld4l:ProviderActivity
ld4l:PublicationActivity
ld4l:PuppeteerActivity
ld4l:RecorderActivity
ld4l:RendererActivity
ld4l:ReporterActivity
ld4l:RepositoryActivity
ld4l:ResearcherActivity
ld4l:ReviewerActivity
ld4l:ScientificAdvisorActivity
ld4l:ScreenwriterActivity
ld4l:ScribeActivity
ld4l:SculptorActivity
ld4l:SecretaryActivity
ld4l:SetDesignerActivity
ld4l:SettingActivity
ld4l:SignerActivity
ld4l:SingerActivity
ld4l:SoundDesignerActivity
ld4l:SpeakerActivity
ld4l:SponsorActivity
ld4l:StageDirectorActivity
ld4l:StageManagerActivity
ld4l:StereotyperActivity
ld4l:StorytellerActivity
ld4l:SurveyorActivity
ld4l:TeacherActivity
ld4l:ThesisAdvisorActivity
ld4l:TranscriberActivity
ld4l:TranslatorActivity
ld4l:TypographerActivity
ld4l:VideographerActivity
ld4l:VoiceActorActivity
ld4l:WitnessActivity
ld4l:WoodEngraverActivity
ld4l:WoodcutterActivity
</td>
  </tr>
</table>


*A ld4l:Activity subclass without a corresponding MARC relator code

### Involved Properties

#### ld4l:atLocation (object property)

**Label:** At location

**URI: **ld4l:atLocation

**Definition**: "A location can be an identifiable geographic place (ISO 19112), but it can also be a non-geographic place such as a directory, row, or column. As such, there are numerous ways in which location can be expressed, such as by a coordinate, address, landmark, and so forth."

**Comment**: "Used with Unspecified"

#### dcterms:date (Data property)

**Label:** Date

**URI:** [http://purl.org/dc/terms/date](http://purl.org/dc/terms/date)

**Definition:** "A point or period of time associated with an event in the lifecycle of the resource."

**Comment:** "Date may be used to express temporal information at any level of granularity. Recommended best practice is to use an encoding scheme, such as the W3CDTF profile of ISO 8601 [W3CDTF]."

**Range:** rdfs:Literal

#### hasActivity (Object property)

**Label:** has Activity

**URI: **ld4l:hasActivity

**Description**: "Relates bibliographic resource to an activity that affects the resource’s state."

**Inverse**: ld4l:isActivityOf

isActivityOf (Object property)

**Label:** is Activity of

**URI: **ld4l:isActivityOf

**Description**: "Relates an activity that affects the resource’s state to bibliographic resource."

**Inverse:** ld4l:hasActivity

#### ld4l:isAgentOf (Object property)

**Label:** Agent for

**URI:** ld4l:isAgentOf

**Description:** "Relates an Agent to an Activity they participated in.

**Domain:** bf:Agent

**Inverse:** bf:agent

#### vivo:rank (Data property)

**Label:** rank

**URI:** [http://vivoweb.org/ontology/core#rank](http://vivoweb.org/ontology/core#rank)

**Comment:** "An integer indicating the position of an entity in a list."

# Side by Side Examples

Work is by author Edna O’Brien and a co-author, written in 1960 while she was in Dublin.

<table>
  <tr>
    <td># BIBFRAME2
:w1 a bf:Work ; 
    bf:contributor <http://id.loc.gov/rwo/agents/n78091520> ;
    ld4l:Activity :c1 , :c3 ;
    bf:hasInstance :i1 .
:c1 a ld4l:Activity ;
    bf:agent <http://id.loc.gov/rwo/agents/n78091520> ;
    bf:role "author" ;
    bf:date “1960” ;
    bf:place :dublin .
:c3 a ld4l:Activity ;
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

# A ld4l:Activity can be used instead of the bf:contributor property to record role, if known.
# The range of bf:role is currently rdfs:Literal, but LOC has discussed making it an object property to relate to MARC Relators.
# BF 2.0 doesn’t preclude using vivo:rank to order :c1 and :c3, but it doesn’t include it in the ontology.
# The “athor” typo in :c3’s bf:role is to make the point that we should avoid data properties. Other typos in this document were unintentional.</td>
  </tr>
</table>


<table>
  <tr>
    <td># LD4L-O version 2 (Activity)
:w1 a bf:Work ;
    ld4l:hasActivity :c1 , :c3 ; 
    bf:hasInstance :i1 .
:i1 a bf:Instance ;
    ld4l:hasActivity :c2 .
:c1 a ld4l:AuthorActivity ; 
    bf:agent <http://id.loc.gov/rwo/agents/n78091520> ;
    vivo:rank "1" ;
    dc:terms:date “1960” ;
    ld4l:atLocation :London .
:c3 a ld4l:AuthorActivity ;
    bf:agent :Agent1 .
    vivo:rank “2” ;
    dcterms:date “1960” ;
    ld4l:atLocation :dublin .
:c2 a ld4l:PublishingActivity ;
    bf:agent <Publisher1> ;
    dc:terms:date "2016-07-30" .
ld4l:AuthorActivity rdfs:subClassOf bf:Activity .
ld4l:EditorActivity rdfs:subClassOf bf:Activity .
ld4l:PublishingActivity rdfs:subClassOf bf:Activity .</td>
  </tr>
</table>


# Co-authorship modeling

Two broad types of co-authorship can be distinguished:

2. Collaboration: multiple authors collaborate on the entire work.

    * Make new Activity resource for each author. Follow cases above if specific author fits one of them.

3. Individual, independent contributions (e.g., chapters) to a whole work

    * Break Work into parts (new Works). 

    * Have an Activity resource for each part (new Works)

Note that the distinction is **only****_ _**relevant where the parts are defined as individual entities. Where this is not the case, the contribution to a part will necessarily be stated in relation to the whole.

Model 1: Collaboration

<table>
  <tr>
    <td>:work1 a bf:Work ;
    ld4l:hasActivity :activity1 , :activity2 .
:activity1 a ld4l:AuthorActivity ;
    bf:hasAgent :agent1 . 
:activity2 a ld4l:AuthorActivity ;
    bf:hasAgent :agent2 .  </td>
  </tr>
</table>


Model 1 is straightforward and requires no further discussion.

Individual contributions can be modeled as Activities on parts of a Work. 

Model 2: Individual contributions to parts of a Work

<table>
  <tr>
    <td>
:work1 a bf:Work ;
    rdfs:label "Some textbook"  ;
    dcterms:hasPart :part1 , :part2 .
:part1 a bf:Work ;
    rdfs:label “Chapter 1” ;
    ld4l:hasActivity :activity1 .
:activity1 a ld4l:AuthorActivity ;
    bf:hasAgent :agent1 .
:part2 a bf:Work ;
    rdfs:label “Chapter 2” ;
    ld4l:hasActivity :activity2 .
:activity2 a ld4l:AuthorActivity ;
    bf:hasAgent :agent2 .
</td>
  </tr>
</table>


Suppose for the sake of argument that whenever we have an Activity on the part, we also have an Activity on the whole:

Model 3: Individual contributions to parts of a Work imply contributions on the whole

<table>
  <tr>
    <td>
:work1 a bf:Work ;
    rdfs:label "Some textbook"  ;
    dcterms:hasPart :part1 , :part2 ;
    ld4l:hasActivity :activity3, :activity4 .
:part1 a bf:Work ;
    rdfs:label “Chapter 1” ;
    ld4l:hasActivity :activity1 .
:activity1 a ld4l:AuthorActivity ;
    bf:hasAgent :agent1 .
:part2 a bf:Work ;
    rdfs:label “Chapter 2” ;
    ld4l:hasActivity :activity2 .
:activity2 a ld4l:AuthorActivity ;
    bf:hasAgent :agent2 .
:activity3 a ld4l:AuthorActivity ;
    bf:hasAgent :agent1 .
:activity4 a ld4l:AuthorActivity ;
    bf:hasAgent :agent2 .
</td>
  </tr>
</table>


This model has the practical advantage of simplifying queries for contributions on a work: it is not necessary to query whether the work has parts, and if so, to drill down into the parts to get the full list of contributors to the whole.

If this were true, ideally we would want to *infer* rather than *assert* the agent-to-whole relationship; that is, the bolded statements in Model 4 would be inferred.

Model 3: Individual contributions to the whole are inferred based on contributions to the whole

<table>
  <tr>
    <td>
:work1 a bf:Work ;
    rdfs:label "Some textbook"  ;
    dcterms:hasPart :part1 , :part2 ;
    ld4l:hasActivity :activity3, :activity4 .
:part1 a bf:Work ;
    rdfs:label “Chapter 1” ;
    ld4l:hasActivity :activity1 .
:activity1 a ld4l:Activity ;
    bf:hasAgent :agent1 .
:part2 a bf:Work ;
    rdfs:label “Chapter 2” ;
    ld4l:hasActivity :activity2 .
:activity2 a ld4l:Activity ;
    bf:hasAgent :agent2 .
:activity3 a ld4l:Activity ;
    bf:hasAgent :agent1 .
:activity4 a ld4l:Activity ;
    bf:hasAgent :agent2 .
</td>
  </tr>
</table>


There are two problems here:

* Technical obstacles to stating such an inference. An OWL property chain axiom hasPart/hasActivity => hasActivity cannot work unless we want the *same *Activity for the part and the whole, which seems odd. Even if the inference could be stated in other rules systems, such as SWRL, if an application does not support such reasoning, the triples won’t exist.

* In fact, this assumption does not mirror the complexity of relationships between contributions to the part and contributions to the whole.

Consider some different cases of independent contributions: 

1. **Book chapters or sections **independently written by different but coordinate authors with the same degree of participation and/or credit. In this case, all contributors are listed as authors of the work, so we would want to express a relationship between each agent and the work as a whole (via ld4l:AuthorActivities, of course). For example we would have separate ld4l:AuthorActivities for Hans Augusto Rey and Margret Rey to capture their contributions to the whole of a Curious George book.

2. **Book chapters or sections** where one author is considered the author of the work as a whole and others are subordinate contributors to individual sections. Example: *Patterns of Enterprise Application Architecture*. On the book cover and title page: by Martin Fowler, with contributions by David Rice, Matthew Foemmel, Edward Hieatt, Robert Mee, and Randy Stafford. In the table of contents and within the book, each individual contributor is associated with an individual section.

3. **Journal articles and essay collections**. In this case, there may be only an editorial Activity on the entire work, and the authors are related only to the individual essays (via an ld4l:AuthorActivity), or we may want a direct contribution to the whole, in addition to the contribution to the part. Certainly the author of a journal article is *not* an author of the journal issue, nor of the journal in its entirety. But the author of a journal article may be considered a *contributor*, in some other sense, to both the journal issue and the journal in its entirety. (The nature of the contribution may be left unspecified by using just the superclass ld4l:Activity, or we could define a new subclass for this case.)

4. **Introduction or preface** written by an agent other than the author of the body of the work.

So the question is:

* In which cases is there an Activity on the whole as well as on the part? 

* Where such a relationship exists, what is the type of the Activity? Is it the same type of Activity as exists on the part, or different? E.g., a journal article author is probably not considered an author of the issue or the journal.

* And how should these be modeled?

Case 1 is clear: we want to directly assert the relationship between the work as a whole and each agent by instantiating another Activity node relating the two. This is shown as Model 3 above, repeated here for clarity.

Case 1 = Model 3: Individual contributions to parts of a Work imply contributions to the whole

<table>
  <tr>
    <td>:work1 a bf:Work ;
    rdfs:label "Some textbook" ;
    dcterms:hasPart :part1 , :part2 ;
    ld4l:hasActivity :activity3, :activity4 .
:part1 a bf:Work ;
    rdfs:label “Chapter 1” ;
    ld4l:hasActivity :activity1 .
:activity1 a ld4l:Activity ;
    bf:hasAgent :agent1 .
:part2 a bf:Work ;
    rdfs:label “Chapter 2” ;
    ld4l:hasActivity :activity2 .
:activity2 a ld4l:Activity ;
    bf:hasAgent :agent2 .
:activity3 a ld4l:Activity ;
    bf:hasAgent :agent1 .
:activity4 a ld4l:Activity ;
    bf:hasAgent :agent2 .

</td>
  </tr>
</table>


The modeling of cases 2-4 is less clear, and may differ from case to case: 

* In some cases we want a direct authorial connection (i.e., an ld4l:AuthorshipActivity) between author of parts and the whole work.

* In some cases we want a direct connection, but not an authorial connection, between the authors of parts and the whole work. We could leave the type of connection unspecified (using the superclass ld4l:Activity) or we could define one or more new subclasses for these cases.

* In some cases we want an editorial Activity on the whole work, with the agents of the parts not directly related to the whole work.

* In some cases we want no relationship between the whole work and the contributor of the part.

* In the case of journals, there are three tiers involved: the article, the journal issue, and the journal itself. 

## Conclusions

* Because the modeling differs from case to case, the* *relationship of an author of a part to the work as a whole **cannot** be inferred from the relationship to the part.

* It *might* be possible to identify specific types of works where the inference would be valid, but, as above, such inferences are outside the scope of OWL.

* We thus refer the decision about whether a contribution to a part is also a contribution to the whole to content standards and implementation recommendations. 

* It *may* be possible to state these in terms of broad classes of Works, such as essay collections, journals, journal issues, etc. (this would be preferred); it may truly be a work-by-work modeling decision; or it may be some combination of the two.

# Future Work

* Work out recommendations for when ld4l:Activities, and bf:Events have overlapping agents, places, dates, and resulting Work/Instances/Items, e.g. A CreationActivity for an Album and a Recording Session Event.

* Consider subclassing hierarchy possibilities of the newly minted ld4l:Activity subclasses.

* Consider alignment with cidoc-crm:E7_Activity and/or other existing Activity/Action classes, e.g. schema:Action and VIVO ISF patterns.

* Consider a better model for ordering Activities: Previously considered "If important, to order multiple ld4l:Activities (especially ld4l:Activities with the same role), use vivo:rank on the appropriate activities."

* Analyze whether it’s possible to state that contributions to parts of a work should be considered contributions to the whole in terms of broad classes of Works, such as essay collections, journals, journal issues, etc. (this would be preferred); it may truly be a work-by-work modeling decision; or it may be some combination of the two.

* Consider making associative relationships between MARC Relator Properties and corresponding Activities, through e.g. bf:reifies/bf:reifiedBy, or[ http://smiy.sourceforge.net/prv/spec/propertyreification.html](http://smiy.sourceforge.net/prv/spec/propertyreification.html).

# LD4all Ontology Group Discussion to Date

* [BIBFRAME 2 Specification on Roles](https://drive.google.com/drive/folders/0B_emVObBVZQ1MTUtR2hpMjEzUDg) from Library of Congress introduces a number of options for recording the role an Agent performed on a Bibliographic Resource. 

* [April 27 Call:](https://docs.google.com/document/d/1n8VVEqoY1nD53rBhpDxPXKUXY8znBfrPUYjl21QZPxk/edit)

    * Point 4: Rebecca: Strings to Things discussion. BF2 is much better, but still has some lacking points. In LD4L 1, they created a legacy property and shoved the literals there until they could be made into Objects/Things. 

        * Steven: Is the worry here that there aren’t vocabularies?

        * Ray: Take role for example. Kicked that around for last 3-4 years, not able to accept the idea that a every single role must be expressed as a Resource, because there are going to be folks defining roles that they can’t on the fly define a resource for. So idea in Agent Role spec, if there is a known URI, use it, if not, here’s a way to store the literal (the contribution construct). **Not at this point willing to give up the capability to specify strings. Don’t want to lose those.**

* [May 10th Call:](https://docs.google.com/document/d/1p4m69WJsi-WYf892vdopJRuoofMXvh2mL1luznK8_YY/edit)

    * Perhaps ContributionActivity would be clearer, consistent with ProvisionActivity.

    * [A lot of properties/patterns available to link Agents to Works/Instance/Items](https://docs.google.com/document/d/1NkLCM2OiOOwe7iajNoGdYXZCI-5VI3FydNA0AQDeDvg/edit?usp=sharing)

    * Relators owl:import. What is the expectation for their use within the BF context?

    * **Ray: LC favorable on eliminating BF:Contributor for ld4l:Activity**

        * For roles, e.g. Author, the suggestion was to define BF:AuthorContribution, but LOC would prefer bf:Author, rather than append "Contribution" to all subclasses. [LD4all responded that bf:Author could easily be mistaken as a person, rather than a role.]

        * Question: where do these classes reside? Feeling that want to define vocab in id.loc.gov for ContributionType

        * Several hundred Relators in Relator vocab; LOC doesn’t want to import all into BF but if we could devise manageable number (30 or 50?), could import those

        * Relators vocab defined as Properties

            * Ray: would need to be a class ld4l:Activity and in some cases not have a subclass and would then need to specify or not with a property bf:Role (data property) or leave blank in which case becomes contributor without further 

            * Steven: this gives us two methods of querying data for same thing; blank node subclasses may be better than a role property to a data type to allow for only one way to query

            * Ray: need support for capability to express a string role. 

            * Contribution pattern would be same as ProvisionActivity

        * Rebecca: likes "AuthorContribution" rather than "Author" as Author signals an entity and AuthorContribution signals the activity that points to the Author

        * Rebecca: saying there are several hundred relators in Relator Vocab but don't want to import all those -- how would we express types not imported?

            * Nate: currently point to MARC relators but those are all properties and people using as Properties; Role is not same as Contribution. Would make list of Classes and owl:import; would have ld4l:Activity as main class & others would be subclasses

            * Can say that different communities devise their lists

            * Steven: establishing an LOC list would set a pattern for community extensions

            * Steven: were talking how to link corresponding Relator to the Class; sketching out idea that properties have bf:reifiedBy __contribution class. How do we say "this property is associated with this class?"

            * Nate: sounds like OWL Property chain 

        * Steven: any more thought to dc:contributor property chain?

            * Ray: just spoke about this and needs further clarification on 

            * Nate: having something as subproperty of dc:contributor is not the same as a chain; -- defined in ontology as subProperty assertion.

* [5/24 Call:](https://docs.google.com/document/d/1T6TvGpUjV4piCbFCfxIvcwXPlvKrhH847OXAwXHsnRY/edit)

    * For bf:role, could remove, drop bf:role and use contribution subtypes

        * Ray: need to revisit this

* [Point 2 on Ray’s Current Issues in BIBFRAME/LD4 Document](https://docs.google.com/document/d/1m-039tJCNQ1r_LBr9d3cu8zePYY_QSYcWx_RBXi_1M4/edit#)

    * Discusses roles use, see examples.

* Meeting of 6/21

    * discussion MARC relator codes and roles in the Contribution/ProvisionActivity discussions so far: [https://docs.google.com/document/d/1Ba8SRl7X2d-jSYl1M2ZP6OpYqbLGOIwl7HuXTaJHqHA/edit](https://docs.google.com/document/d/1Ba8SRl7X2d-jSYl1M2ZP6OpYqbLGOIwl7HuXTaJHqHA/edit) 

    * Library of Congress hesitant to create new entities to be MARC relator codes alone as Classes (leaving current entities to be MARC relator codes as properties). Seems unlikely to change.

* [Ontology Sprint Outcomes:](https://docs.google.com/document/d/1NGTFNjAWigQ_jwOZ3xaWrJMnmYdk6CWpNFM7CZylelo/edit)

    * Issues are around role and how we model that. Whether we use subClasses of Contribution/Provisions or use the Role predicate. If the latter, what is the range of the Role predicate? 

        * If latter, Contribution is reification of that property

        * Attribution pattern has hasMotivation, which seems what we are discussing in roles in Contribution (this is from the Identities subgroup work).

        * Rebecca: other option would be create a set of subClasses of Contribution that parallel MARC relators; other way would be to have a set of named individuals that do the same time. 

        * Steven: Recommendations from others is to not use property and Class relators. If we’re trying to use property as a class, it wrecks RDFS. We’d need to ensure that the bf:role property has a range of property. If we don't want to create parallel classes for the relators, recommendation is to make the range of role a property.

        * Relators are both skos:Concept, and others class instances b/c LoC doesn’t want to create new URIs for things. 

        * Steven’s diagram is a look at all the ways BF ontology can relate to roles.

            * Intend people to use Contribution pattern but also did OWL import of all relators and relators are aligned with DC; 

            * owl:import is bringing in each shortcut properties; 

            * honoring range of properties, DC can go direct to Agent but also has contribution pattern with role literal.

            * If redraw with LD4all:

                * subClasses of Contributions that reflect Roles

                * Redefining range of bf:role to be property between Work and Agent; recognizes that there are already shortcut properties between works and agents and people are not necessarily going to be excited about implementing contribution pattern.

    * Question: can we define a controlled vocabulary of role types; LC wants literals?

        * In terms of role classes and subclasses, seems to do same thing with extra apparatus. What would be advantage of bf:Role with subClasses of Roles rather than Contribution?

        * Roles can exist outside Contribution

        * If existing role vocab, someone might not implement a contribution pattern but say things about an Agent -- might have acted in this capacity before.

        * This is looking from a different angle. We are looking at the person in relation to a resource. Not Person from a concept as person.

        * Analyzing Roles; other aspects of Contribution are alright.

        * Decision: Rejecting dataType property from BF; can mint local URIs for new role types. Role individuals rather than bf:Role subclasses.

        * Decision: Contribution bf:role. Named individuals

    * If using role, do we need a contribution? Why can we not stick dates / attributes on the Role?

        * CIDOC-CRM models in this way.

        * If role exists outside of a contribution in generalizable terms, then would want Role predicate with an individual.

        * If we use Role, why can we not cut out the contribution and go directly from Role to Agent? We are not talking about having a single contribution that multiple Agents are engaged? 

    * Need to define what a Contribution is.

        * In VIVO, its authorship and each author has its own authorship. In VIVO, for example, a grant resource links to person, organization, viv:PrincipalInvestigatorRole

        * Rob: seems like contribution is the reification of dcterms:contributor. At moment, the thing being contributed to and the person doing the contributing. Then have label & rank, etc. If we continue down that line, types of contribution and makes sense in natural language. If continuing down that path, would be consistent and straightforward.

        * Steven raised other point that role vocabs already exists

        * Rebecca: if using role to specify the nature of contribution, do we need contribution as separate class? 

        * Steven: need to hear more about Role as intermediary node. 

        * Rebecca: Simplifies model. Move Role over to contribution

        * Turn contribution over to a Role node

        * Question: what are criteria for deciding between named individuals?

        * Subclasses: Author, Editor, CopyEditor, etc.

        * LC gave sense they have little interest in subClassing and prefer to keep properties and use them. 

            * Why are they putting it as the object of a totally separate predicate? If using as the object of a property than the property's domain should be a property.

            * LOC doesn’t not want to create the properties that mimic the classes. MARC relator instances are currently defined as Classes and Properties

            * Nate explicitly said that contribution is not the same as role.

            * If we get rid of contribution, we are getting rid of distinction between contribution and provision

        * Proposal decision: will create LD4L subclasses of ld4l:Activity that will now represent the Role. We will ignore bf:Role, a point of divergence 

    * Alignments later: authorship, etc., that VIVO uses; pattern that VIVO uses, is there an easy alignment opportunity there? Javed: same pattern.

        * In VIVO, authorship is a subClass of Relationship and not a Contribution

        * Contribution is a reification of a direct relationship

        * VIVO will be missing many of the subClasses we want

<table>
  <tr>
    <td>:w1 a bf:Work ;
    ld4l:hasActivity :c1, :c3 ; 
    bf:hasInstance :i1.

:i1 a bf:Instance ;
    ld4l:hasActivity :c2 .

:c1 a ld4l:Authorship ; 
    bf:hasAgent <person> ;
    ld4l:rank 1 ;
    bf:date "2016-07-29" .</td>
  </tr>
</table>


        * Property chain: nice to have direct link. 

        * Using prov:Agent; are we okay with using bf:Agent?

            * Decision: yes. Took all PROV stuff out because of constraints.

            * What about using only Contribution classes?

            * Do we want to ignore provision pattern and use contribution?

                * Makes sense to distinguish; if we had used Role rather than Contribution, we would have lost provision

    * Provision pattern should work thru separately but will be similar

        * MARC relators include relationships that include both contributions and provisions

        * Are we okay with provisions being used to describe Agent roles on Instances and Items?

            * Marginalia on an item?

            * If distinguishing relationships of an Agent to a Work and an Agent to an Instance -- could make all subClasses

    * Question: Provision relates to Instance; could have contribution type activities occur on an item or instance; do we want to make generic relationships? Relationship activity could relate to all; contribution/provision separation is captured in the subject; no reason to relate in the predicate?

        * There is just a contribution and it can happen at a Work, Instance or Item. Specificity occurs in the subClassing

        * What about ld4l:Activity rather than bf/ld4l:Contribution?

            * Can you have no-activity contribution? Activity does not literally need an action : appropriate subClass would be used

    * ld4l:Activity simplifies the Contribution and Provision

        * Roles given via subClassing, subclasses denote role assertion

        * Properties (other than bf:Role) will hang off

        * schema:agent used in a similar pattern and lacks domain/range; unless we want entailment of object to be BF:Agent - related to question of whether using bf:Agent or foaf:Agent

        * Willing to decide on different properties but not on the pattern!

    * Decision: eliminate Provision pattern for LD4all. 

    * Decision: Use Activity (rather than Contribution) pattern

    * Using BF and other properties for further assertions on that Activity (bf:date, etc. AND vivo:rank)

    * Recommend to LOC that bf:role have a range rdf:Property if they are going to reuse property 

    * Recommend to LOC - ld4l:Activity & bf:Provision are subClasses of ld4l:Activity

    * Action item: figure out what alignments can exist with newly created Activity Class

    * Action item: take notes from Contribution/Provision doc and figure out what properties would need be added

    * Action item: create the subClasses of ld4l:Activity

    * Required range for ld4l:Activity

        * Recommendation: try to use BF properties on ld4l:Activity where possible

        * Recommendation: review properties following sprint (during spreadsheet review) rather than now

* Post "sprint" discussion around possible dependencies between Activities Modeling and the BIBFRAME - Identities Working Group. 

    * Conversation revolved around the importance of reuse, the cost of reuse on hard deadlines, and whether the semantics "decided" during the sprint were more appropriate for our use cases than those provided by the identified existing Activity patterns. 

    * A decision was made to try to keep the Activities pattern as separate as possible, allowing for the Sprint Group to weigh in on the Activities Proposal, before sharing with the wider group.

