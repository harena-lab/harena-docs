---
categories: ["versum", "reference"]
title: Versum Reference
---

<!-- Jekyll directive to avoid Liquid filters
{% raw %}
-->

# Versum Reference

[Versum](/versum/README.md) is a narrative scripting language derived from Markdown, having narrative structures inspired in [Ink](https://github.com/inkle/ink/blob/master/Documentation/WritingWithInk.md). Besides the [Standard Markdown](https://daringfireball.net/projects/markdown/), Versum adopts the [GitHub Flavored Markdown](https://help.github.com/en/articles/basic-writing-and-formatting-syntax).

This document is a reference guide for Versum writers. Part of the language is still under debate; in this case, it will have an `[under debate]` indication.

## External References

### Markdown References
* [Standard Markdown](https://daringfireball.net/projects/markdown/)
* [GitHub Guides - Mastering Markdown](https://guides.github.com/features/mastering-markdown/).
* [GitHub Flavored Markdown](https://help.github.com/en/articles/basic-writing-and-formatting-syntax) - Basic writing and formatting syntax.

### Ink References
* [Ink](https://www.inklestudios.com/ink/)
* [Basics Tutorial](https://www.inklestudios.com/ink/web-tutorial/) - Writing web-based interactive fiction with ink.
* [Full Guide](https://github.com/inkle/ink/blob/master/Documentation/WritingWithInk.md) - Writing with ink.

# Versum

# Knot
A knot is the basic organizational unit of a case. A knot is a complete unit of presentation, it can represent, for example, a scene, a focus inside a scene, a state in the narrative, etc. Each knot is distinctively presented, one at a time.

Knots are delimited by markdown headers:
~~~markdown
# Emergency Room #

# Zombie Treatment #
~~~

They can be hierarchically grouped by header levels, but only the lower hierarchical levels are rendered.

Aggregator knots are not rendered. They are responsible for the structural organization of the case. In the following example, only knots `Level 3a`, `Level 3b`, and `Level 2b` are rendered. Knots `Level 2a` aggregates the knots `Level 3a` and `Level 3b`; node `Level 1` aggregates the remaining.

~~~markdown
# Level 1 #

## Level 2a ##

### Level 3a ###

### Level 3b ###

## Level 2b ##
~~~

There is one exception: when one level has only `notification nodes` as subordinates. We further explain this kind of node.

It is also possible to use the alternative Markdown format with underlines:

~~~markdown
=======
Level 1
=======

-------
Level 2
-------
~~~

## Category



## Diverts and Options
Transitions among knots or in the state of the current knot are triggered by diverts.

Diverts are transformed into a triggerable element in the presentation. Examples of triggerable elements are icons, buttons, and links. Each divert has three parts, as shows the example:
~~~markdown
Label -> Target
~~~
The left part is either a `Label` or a Logical `Expression`. `Label` is the label to be presented or related to the triggerable element; `Expression` is the logical expression to be evaluated. The middle that appears as an arrow ( `->`) or a variation (according to the type), defines the divert. The right element (` Target`) defines the target knot, to be addressed when the divert is triggered.

There are four types of divert:

~~~markdown
* Non numbered exclusive ordered option

+ Non numbered exclusive randomized option

[ ] Non numbered non-exclusive ordered option

( ) Non numbered non-exclusive randomized option
~~~

### Forward Divert
~~~markdown
* Label|Expression -> Target "Optional Parameter"
~~~
Deviates the course of the narrative to the target when triggered, i.e., the target knot is loaded and presented to the user.

### Round Divert
~~~markdown
* Label|Expression <-> Target Knot
* Label|Expression <-> "Target Message"
* Label|Expression <-> Target Knot "Optional Parameter"
~~~
Behaves similarly to the `Forward Divert`, but it returns to the origin (the knot where the divert was triggered) as soon as the user leaves the `Target` knot.

When a `"Target Message"` is specified without a `Target Knot`, it tries to activate a default target in the following order:
* Knot Level: looks for a knot with the same name of the current knot followed by `Note`, for example, if the name of the present knot is `Presentation`, it will look for a knot named `Presentation Note`.
* General Level: looks for a knot with the name `Note`.

### Enclosed Divert
~~~markdown
* Label|Expression (-) Target Knot
* Label|Expression (-) "Enclosed Message"
~~~
Does not deviates the course of the narrative. It instead presents in the body of the current knot:
- The content of the `Target Knot`.
- An `Enclosed Text`. In this case, the text must be in quotes.

### Using Expressions
A logical expression can be written and, when the condition is met inside the node, it triggers the divert.

Example:
~~~markdown
* Case.parameter == "description-ekg" -> Description
* Case.parameter == "ekg-description" -> EKG
~~~

### Informing Parameters
It is possible to inform a parameter after the target knot name. This parameter is a value or set of values that can be informed to the target knot when the divert is triggered.

The simplest parameter format is a value between quotation marks:
~~~markdown
* Submit -> Notice Board "very good!"
~~~

## Entity
Refers to a entity in the scene.

The current version uses `@` indicate the entity.
~~~markdown
@Lucinda: Hey doctor, you must come here.

@Lucinda
  ![nurse concerned]
  Hey doctor, you must come here.
~~~

## Input

~~~markdown
? <variable>
  * type: <input subtype>
  * rows: <rows>
  * options:
    * option1: value
    * option2: value
  * scramble
  * vocabulary: <vocabulary>, ..., <vocabulary>
  * <qualifier> answers: <answer>, ..., [answer] -> <target>
  * right answers: [right answer], ..., [right answer] -> [target]
  * wrong answers: [wrong answer], ..., [wrong answer] -> [target]
  * answers: [answer], ..., [answer] -> [target]
~~~

Optional fields:
* `type`: input type (default is short)
  * `short`, `text`, `group select`
* `variable`: the variable that will receive the input
* `rows`: number of rows for the input (if it is type text)
* `vocabulary`: set of vocabularies to interpret the input
* `answers`: possible answers
  * `<qualifier>`: answer qualifier (optional)
    * `right`, `wrong`, `incomplete`
  * `<target>`: target to divert if the answer is inputed (optional)

There are two types of input:

### Text Question

The following example represents an input for the variable `hypothesis`, which will be interpreted by the [MeSH](https://www.nlm.nih.gov/mesh/meshhome.html) (Medical Subject Headings) vocabulary. It is followed by a list of right answers (separated by commas) and wrong answers:
~~~markdown
? hypothesis
  * vocabularies: mesh
  * right answers: pericarditis, myopericarditis
  * wrong answers: infarction, myocardial infarction
~~~

The next example shows how to add a divert in each option, i.e., if a player chooses the right answer, the respective divert deviates the flow to the knot `Show Right`, if she chooses the wrong answer, the flow is deviated to `Show Wrong`.

~~~markdown
? hypothesis
  * vocabularies: mesh
  * right answers: pericarditis, myopericarditis -> Show Right
  * wrong answers: infarction, myocardial infarction -> Show Wrong

* hypothesis is right -> Show Right
* hypothesis is wrong -> Show Wrong
~~~

A math example:

~~~markdown
What is the sum of internal angles in a triangle?
? sum of angles
  right answers: 180o -> Show Right
  wrong answers: 90o -> Show Wrong
  answers: -> Show Unknown
~~~

## Group Select

~~~markdown
? relevant symptoms
  * type: group select
  * states: +,-,*,_
  * labels: contibutes, against, key, indiferent

Patient ... :chest pain:+: ... :pain in the chest(chest pain):+:
~~~


~~~
? hypothesis
  * Answer-key ->
~~~

## Annotation

Elements from the narrative and user inputs are annotated and connected to structured data and knowledge organization systems. We will use the acronym KOS (Knowledge Organization System) to refer generically to controlled vocabularies, taxonomies, thesaurus, ontologies, etc. An example of a KOS is [MeSH](https://www.nlm.nih.gov/mesh/meshhome.html) - Medical Subject Headings.

Segments between braces are annotated.

For example, the following narrative present symptoms of a patient:
~~~markdown
Patient a man 55 years old; rather fat;
subject to frequent attacks of winter cough, with asthmatic tendency.
~~~

Some key characteristics and symptoms of the patient were annotated:
~~~markdown
Patient a {man} {55 years old}; rather fat;
subject to frequent attacks of {winter cough}, with {asthmatic} tendency.
~~~

Whenever a segment is annotated, the translator tries to automatically relate it to a KOS.

It is possible to attach literal or formal annotations to the annotated terms. They come between parenthesis after the annotated term and are not presented when the text is rendered. Literal annotations are written in quotes, as follows:
~~~markdown
Patient a {man} {55 years old}("the age is important in this case"); rather fat;
subject to frequent attacks of {winter cough}("it was winter when he came"),
with {asthmatic} tendency.
~~~

Formal annotations do not come in quotes. They are meant to be interpreted by machines, therefore, they must be connected to a KOS. A usual application is when an annotated term cannot be automatically related to a KOS. In this case, an equivalent formal term is presented between parenthesis beside the term. The following text has annotated terms, which are aligned to a medical knowledge basis.

~~~markdown
Patient a {man}(male) {55 years old}(aging=51); rather fat;
subject to frequent attacks of winter {cough}, with {asthmatic}(asthma) tendency.
~~~

Annotations can be seen as the connection of segments to the Data-driven Layer. This layer is designed to be consumed by machines to support the automation of tasks as evaluation and feedback. This Data-driven Layer also defines how segments are associated with external KOSs as MeSH. It can define global associations or they can be guided by an annotation context, detailed in the next section.

One can intentionally associate a specific annotation to a KOS, preceding the annotation with the namespace of the respective KOS. In the following example, three terms (male, aging, and asthma) have formal annotations related to MeSH.

~~~markdown
Patient a {man}(mesh:male) {55 years old}(mesh:aging=51); rather fat;
subject to frequent attacks of winter {cough}, with {asthmatic}(mesh:asthma) tendency.
~~~

The Data Layer specifies the namespaces, as the following example:

~~~markdown
___ Data ___

* namespaces:
  * mesh: http://id.nlm.nih.gov/mesh/
~~~

## Annotation Context
A block of annotation context can be defined between double braces. The block defines a semantic context for the narrative and the respective annotations. The context guides the interpretation of parts of the narrative. The following example presents a `symptoms` annotation context.

~~~markdown
{{symptoms

Patient a {man}(male) {55 years old}(aging=51); rather fat;
subject to frequent attacks of winter {cough}, with {asthmatic}(asthma) tendency.

}}
~~~

The translator will try automatically to relate the context to a KOS. One can also explicitly specify a namespace in the context, as the example:

~~~markdown
{{mesh:symptoms

Patient a {man}(male) {55 years old}(aging=51); rather fat;
subject to frequent attacks of winter {cough}, with {asthmatic}(asthma) tendency.

}}
~~~

It is also possible to use context to define a preference namespace to a context. In the following example, the translator will try to relate the terms to MeSH before other KOS:

~~~markdown
{{mesh:

Patient a {man}(male) {55 years old}(aging=51); rather fat;
subject to frequent attacks of winter {cough}, with {asthmatic}(asthma) tendency.

}}
~~~

<!-- Jekyll directive to avoid Liquid filters
{% endraw %}
-->
