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

~~~markdown
# Emergency Room

## Start

## Request Exams
~~~


## Divert
Transitions among knots or in the state of the current knot are triggered by diverts.  There are three types of divert:

### Forward Divert
~~~markdown
* Option 1 -> Scene 2
~~~

### Round Divert `[under debate]`
~~~markdown
* Option 1 <-> Scene 2
~~~

### Enclosed Divert `[under debate]`
~~~markdown
* Option 1 (-) Scene 2
~~~

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

## Question
User inputs, in the current version, are represented by the question mark between braces `{? }`. The following example represents an input for the variable `hypothesis`, which will be interpreted by the [MeSH](https://www.nlm.nih.gov/mesh/meshhome.html) (Medical Subject Headings) vocabulary. It is followed by a list of right options (separated by commas) and wrong options (after the semi-colon):
~~~markdown
{?1 hypothesis:mesh#pericarditis,myopericarditis,pericardial inflammation,pericardial infection,pericardial effusion;infarction,myocardial infarction,coronary syndrome,acute coronary syndrome,ischemia,myocardial ischemia,coronary insufficiency,angina,angina pectoris}
~~~

This version if hard to read, therefore, there is a new proposed version `[under debate]`:

~~~markdown
What is the sum of internal angles in a triangle?
? Sum of Angles
  right: 180o -> Right Answer
  wrong: -> Wrong Answer

What is your diagnostics?
? hypothesis(mesh)
  1 line / n lines
  mesh dictionary
  right:
  * pericarditis
  * myopericarditis...
  wrong:
  * infarction
  * myocardial infarction...
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
Patient a {man(male)} {55 years old(aging=51)}; rather fat; subject to frequent attacks of winter {cough}, with {asthmatic(asthma)} tendency.
}}
