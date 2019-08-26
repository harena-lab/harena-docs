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

## Knot
A knot is the basic organizational unit of a case. A knot is a complete unit of presentation, it can represent, for example, a scene, a focus inside a scene, a state in the narrative, etc. Each knot is distinctively presented, one at a time.

Knots are delimited by markdown headers:
~~~markdown
# Emergency Room

# Zombie Treatment
~~~

They can be hierarchically grouped by header levels, but only the lower hierarchical levels are rendered.

In the following example, only nodes `Level 3a`, `Level 3b` and `Level 2b` are rendered. Node `Level 2a` aggregates the nodes `Level 3a` and `Level 3b`; node `Level 1` aggregates the remaining. Aggregator nodes are never rendered, they are responsible for the structural organization of the case.

~~~markdown
# Level 1

## Level 2a

### Level 3a

### Level 3b

## Level 2b
~~~

It is also possible to use the alternative Markdown format with underlines:

~~~markdown
Level 1
=======

Level 2
-------
~~~


## Divert
Transitions among knots or in the state of the current knot are triggered by diverts.

Diverts are transformed into a triggerable element in the presentation. Examples of triggerable elements are icons, buttons, and links. Each divert has three parts, as shows the example:
~~~markdown
Label -> Target
~~~
The left part (`Label`) is the label to be presented or related to the triggerable element. The middle that appears as an arrow ( `->`) or a variation (according to the type), defines the divert. The right element (` Target`) defines the target knot, to be addressed when the divert is triggered.

There are three types of divert:

### Forward Divert
~~~markdown
* Label -> Target
~~~
Deviates the course of the narrative to the target when triggered, i.e., the target knot is loaded and presented to the user.

### Round Divert `[under debate]`
~~~markdown
* Label <-> Target
~~~
Behaves similarly to the `Forward Divert`, but it returns to the origin (the knot where the divert was triggered) as soon as the user leaves the `Target` knot.

### Enclosed Divert `[under debate]`
~~~markdown
* Label (-) Target Knot
* Label (-) "Enclosed Text"
~~~
Does not deviates the course of the narrative. It instead presents in the body of the current knot:
- The content of the `Target Knot`.
- An `Enclosed Text`. In this case, the text must be in quotes.

## Character
Refers to a character in the scene.

The current version uses `: :` indicate the character.
~~~markdown
:Lucinda: Hey doctor, you must come here.

:Lucinda:
![nurse concerned]
Hey doctor, you must come here.
::
~~~
The new version proposal `[under debate]` uses `@`:
~~~markdown
@Lucinda Hey doctor, you must come here.

@Lucinda
  ![nurse concerned]
  Hey doctor, you must come here.
~~~

## Input

~~~makdown
? <variable>
  * type: <input subtype>
  * rows: <rows>
  * vocabularies: <vocabulary>, ..., <vocabulary>
  * <qualifier> answers: <answer>, ..., [answer] -> <target>
  * right answers: [right answer], ..., [right answer] -> [target]
  * wrong answers: [wrong answer], ..., [wrong answer] -> [target]
  * answers: [answer], ..., [answer] -> [target]
~~~

Optional fields:
* `type`: input type (default is short)
  * `short`, `text`, `selector`
* `variable`: the variable that will receive the input
* `rows`: number of rows for the input (if it is type text)
* `vocabularies`: set of vocabularies to interpret the input
* `answers`: possible answers
  * `<qualifier>`: answer qualifier (optional)
    * `right`, `wrong`, `incomplete`
  * `<target>`: target to divert if the answer is inputed (optional)

There are two types of input:

### Text Question

The following example represents an input for the variable `hypothesis`, which will be interpreted by the [MeSH](https://www.nlm.nih.gov/mesh/meshhome.html) (Medical Subject Headings) vocabulary. It is followed by a list of right options (separated by commas) and wrong options:
~~~markdown
? hypothesis
  * vocabularies: mesh
  * right answers: pericarditis, myopericarditis -> Show Right
  * wrong answers: infarction, myocardial infarction -> Show Wrong
~~~

~~~markdown
What is the sum of internal angles in a triangle?
? sum of angles
  right answers: 180o -> Show Right
  wrong answers: 90o -> Show Wrong
  answers: -> Show Unknown
~~~

## Selector Question

~~~markdown
? relevant symptoms
  * type: group select
  * states: +,-,*,_
  * labels: contibutes, against, key, indiferent

Patient ... :chest pain:+: ... :pain in the chest(chest pain):+:
~~~

## Annotation

Elements from the narrative and user inputs are annotated and connected to structured data and knowledge structures defined in the Data-driven Layer, like dictionaries and ontologies. These structures are connected with external knowledge bases, e.g., [MeSH](https://www.nlm.nih.gov/mesh/meshhome.html) - Medical Subject Headings. This layer is designed to be consumed by machines to support the automation of tasks as evaluation and feedback. 

Segments between braces are annotated. Annotations connect terms and expressions to the Data-driven Layer. The following text has annotated terms, which are aligned to medical knowledge basis. 

For example, the following narrative present symptoms of a patient:
> Patient a man 55 years old; rather fat; subject to frequent attacks of winter cough, with asthmatic tendency.

Some key characteristics and symptoms of the patient were annotated, so they can be interpreted by machines:
> Patient a {man} {55 years old}; rather fat; subject to frequent attacks of winter {cough}, with {asthmatic} tendency.

Some of the terms were not automatically recognized in the knowledge base. An equivalent term is presented between parenthesis beside the term (this second term is not presented to the case rendering):
> Patient a {man(male)} {55 years old(aging=51)}; rather fat; subject to frequent attacks of winter {cough}, with {asthmatic(asthma)} tendency.

## Annotation Context
A block of annotation context can be defined between double braces. The block defines a semantic context for the narrative and the respective annotations. The context guides the interpretation of parts of the narrative. The following example presents a `symptoms` annotation context.
> {{symptoms

> Patient a {man(male)} {55 years old(aging=51)}; rather fat; subject to frequent attacks of winter {cough}, with {asthmatic(asthma)} tendency.

> }}
