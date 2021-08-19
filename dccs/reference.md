---
categories: ["dccs", "reference"]
title: "DCCs Reference"
layout: tutorial
---

# Digital Content Component (DCC) Reference

## Playground

Learn and try to instantiate and customize Digital Content Components (DCCs) at [DCC Playground](https://harena-lab.github.io/harena-docs/js/harena/dccs/playground/).

# Syntax and Examples

## Button DCC (`<dcc-button>`)

A visual element that acts as a button. Its standard shape is a button, but it can also be an image or an element customized by the author.

### Syntax

~~~html
<dcc-button id="id"
            label="label"
            image="image"
            topic="topic"
            message="message"
            divert="divert"
            variable="variable"
            inline>
</dcc-button>
~~~

* `id` - unique id of the trigger;
* `label`:
  * textual button - textual label showed in the button;
  * image trigger - the title of the image;
* `image` (optional) - when the trigger is an image, it is the path of the image file;
* `topic` (optional) - the topic of the message sent by the trigger; when the topic is not specified, the topic is built from the label ("button/<label>/clicked");
* `message` (optional) - a value included in the message body that accompanies the topic;
* `divert` (optional) - how the trigger diverts the course of action: forward, round, or enclosed;
* `variable` (optional) - a variable that receives the label or value of the trigger; if the variable name is followed by colon, it can indicate which field will be attributed to the variable, e.g., `variable="diagnostics:label`;
* `inline` (optional) - when true, the button will be inline, i.e., it will follow in the text flow.

### Examples

Textual button trigger that sends the following message when clicked:
* topic - `button/on/clicked`
* message body - `"message to you"`

<dcc-play>
<dcc-button label="On"
            topic="button/on/clicked"
            message="message to you">
</dcc-button>
</dcc-play>

Image trigger with title `check` and whose image is located in `icons/icon-check.svg`. Since the image occupies all available area, a `<div>` surrounding it delimits the size to `100px`.

When clicked, the trigger will send a message with the topic: `trigger/Check/clicked`.

~~~html
<div style="width: 100px">
   <dcc-button label="Check"
               image="icons/icon-check.svg">
   </dcc-button>
</div>
~~~

## Slider DCC (`<dcc-slider>`)

An input component presented as a slider.

### Syntax

~~~html
<dcc-slider id="id"
            statement="statement"
            variable="variable"
            value="current value"
            mandatory
            min="minimal value"
            max="maximal value"
            index>
</dcc-slider>
~~~

* `id` - unique id of the slider;
* `statement` - statement presented before the slider;
* `variable` - name of the variable related to the input value;
* `value` - current value of the slider;
* `mandatory` - defines if the user must select some value - i.e., the slide must be moved;
* `min` - minimal value accepted;
* `max` - maximal value accepted;
* `index` - defines if the index is presented besides the slider.

### Examples

A simple example:

~~~html
<dcc-slider variable="age" value="1" min="1" max="130" index>Select your age:</dcc-slider>
~~~


## Lively Talk DCC (`<dcc-lively-talk>`)

An animated image that also displays a text inside a ballon. Usually adopted for animated dialogs.

### Syntax

~~~html
<dcc-lively-talk duration="duration"
                 delay="delay"
                 direction="direction"
                 character="character"
                 speech="speech">
</dcc-lively-talk>
~~~

* `duration` - duration of the animation (duration=0 means a static image);
* `delay` - delay before the animation is started;
* `direction` - direction of the animation (`left` (default) or `right`);
* `character` - character that appears in the image;
* `speech` - text of the speech.

When a Lively Talk DCC receives a message, it shows the body of the message as a speech in the ballon.

### Examples

Available characters in the playground: nurse, doctor, and patient.

A static patient showing the speech "Please, help me!"

~~~html
<dcc-lively-talk duration="0"
                 character="patient"
                 speech="Please, help me!">
</dcc-lively-talk>
~~~

An animated nurse that enters in 2 seconds and shows the speech "Doctor, please you have to evaluate a man!"

~~~html
<dcc-lively-talk duration="2s"
                 character="nurse"
                 speech="Doctor, please you have to evaluate a man!">
</dcc-lively-talk>
~~~

An animated doctor that enters in 2 seconds after waiting 2 seconds and shows the speech "Ok, I'm on my way." The doctor's animation goes in the right direction.

~~~html
<dcc-lively-talk duration="2s"
                 delay="2s"
                 direction="right"
                 character="doctor"
                 speech="Ok, I'm on my way.">
</dcc-lively-talk>
~~~

### Talks Inside a Dialog

Talks can be grouped inside a `<dcc-lively-dialog>`, which define the parameters of the complete dialog.

~~~html
<dcc-lively-dialog rate="6s" duration="2s">
   <dcc-lively-talk character="nurse"
                    speech="Doctor, please you have to evaluate a man!">
   </dcc-lively-talk>
   <dcc-lively-talk character="doctor"
                    speech="Ok, I'm on my way.">
   </dcc-lively-talk>
</dcc-lively-dialog>
~~~

## Subscribing Messages (`<subscribe-dcc>`)

A DCC can subscribe to a message in such a way that whenever the message appears on the bus, it will receive it.

For each subscribed message a DCC declares a `<subscribe-dcc>` inside its element. With the following syntax:

~~~html
<subscribe-dcc topic="message"></subscribe-dcc>
~~~

* message - specifies the subscribed message

The following example shows the message `I am a doctor.` when the button with the label `Talk` is triggered.

~~~html
<dcc-button label="Talk" topic="send/message" message="I am a doctor.">
</dcc-button>

<dcc-lively-talk id="doctor"
                 duration="0s"
                 character="doctor"
                 speech="Hello, ">
  <subscribe-dcc topic="send/message"></subscribe-dcc>
</dcc-lively-talk>
~~~

The following example shows a character that tells you "Hello *your name*" when you type your name.

~~~html
<dcc-input-typed variable="name">Type your name:</dcc-input-typed>

<dcc-lively-talk id="doctor"
                 duration="0s"
                 character="doctor"
                 speech="Hello ">
  <subscribe-dcc topic="var/name/changed"></subscribe-dcc>
</dcc-lively-talk>
~~~

Or how a character tells you "Your age is *your age*" when you define your age in the slider.

~~~html
<dcc-slider variable="age" min="1" max="130" index>
Select your age:
</dcc-slider>

<dcc-lively-talk character="doctor"
                 speech="Your age is  ">
  <subscribe-dcc topic="var/age/changed"></subscribe-dcc>
</dcc-lively-talk>
~~~

To present a multiple-choice input:

For `<dcc-input-choice>`:
* `id` - unique id of the input;
* `statement` - statement presented before the options;
* `variable` - name of the variable that will receive the value selected;
* `value` - initial value (choice);
* `mandatory` - defines if the user must select some value;
* `exclusive` - exclusivity of the option explicitly declared, defines if the value will be exclusive (radio button) or not (checkbox) - default is non-exclusive;
* `shuffle` - shuffles the options - default is false;
* `target` - target to be triggered when an option is selected.

For `<dcc-input-option>`:
* `parent` - parent of the option explicitly declared (otherwise will be inferred by the hierarchy);
* `variable` - variable of the option explicitly declared, otherwise will assume the parent's variable (which is the expected scenario);
* `exclusive` - exclusivity of the option explicitly declared, defines if the value will be exclusive (radio button) or not (checkbox), otherwise will assume the parent's exclusivity (which is the expected scenario).


~~~html
<dcc-input-choice variable="role" statement="What is your role?" exclusive>
   <dcc-input-option>patient</dcc-input-option>
   <dcc-input-option>doctor</dcc-input-option>
   <dcc-input-option>nurse</dcc-input-option>
</dcc-input-choice>
~~~

~~~html
<dcc-input-choice variable="role" statement="What is your role?" exclusive>
   <dcc-input-option value="patient">I am a patient</dcc-input-option>
   <dcc-input-option value="doctor">I am a doctor</dcc-input-option>
   <dcc-input-option value="nurse">I am a nurse</dcc-input-option>
</dcc-input-choice>
~~~

~~~html
<dcc-unfold><dcc-unfold-short>I am a patient</dcc-unfold-short></dcc-unfold>
~~~

~~~html
<dcc-input-choice variable="role" exclusive>
   What is your role?
   <dcc-input-option value="patient">I am a patient</dcc-input-option>
   <dcc-input-option value="doctor">I am a doctor</dcc-input-option>
   <dcc-input-option value="nurse">I am a nurse</dcc-input-option>
</dcc-input-choice>
~~~

~~~html
<dcc-input-choice variable="role" statement="What is your role?" exclusive>
   <dcc-input-option value="patient">I am a patient</dcc-input-option>
   <dcc-input-option value="doctor">I am a doctor</dcc-input-option>
   <dcc-input-option value="nurse">I am a nurse</dcc-input-option>
</dcc-input-choice>

<dcc-lively-talk id="doctor"
                 duration="0s"
                 character="doctor"
                 speech="I am a ">
  <subscribe-dcc topic="var/role/changed"></subscribe-dcc>
</dcc-lively-talk>
~~~

~~~html
<dcc-input-choice variable="role" statement="What is your role?" exclusive>
   <dcc-input-option value="patient">I am a patient</dcc-input-option>
   <dcc-input-option value="doctor">I am a doctor</dcc-input-option>
   <dcc-input-option value="nurse">I am a nurse</dcc-input-option>
</dcc-input-choice>

<dcc-unfold message="var/role/changed" value="patient">You must wait here.</dcc-unfold>

<dcc-lively-talk id="doctor"
                 duration="0s"
                 character="doctor"
                 speech="I am a ">
  <subscribe-dcc topic="var/role/changed"></subscribe-dcc>
</dcc-lively-talk>
~~~

This is a multi-entry input presented as a table.

~~~html
<dcc-input-table id="person_list" variable="person" rows="3" schema="name, age, height">
</dcc-input-table>
~~~

## Image DCC (`<dcc-image>`)

* `style` - replicated attribute

~~~html
<dcc-image image="images/mv/mv-front-base.svg" style="width:300px"></dcc-image>
<dcc-image image="images/mv/mv-back-base.svg" style="width:300px"></dcc-image>
<dcc-state id="screen" value="off" rotate>
   <dcc-image role="off" image="images/mv/mv-screen-off.svg"
              style="position:absolute;left:36px;top:28px;width:193px">
   </dcc-image>
   <dcc-group role="start">
      <dcc-image image="images/mv/mv-screen-start.svg"
                 style="position:absolute;left:36px;top:28px;width:193px">
      </dcc-image>
      <dcc-image image="images/mv/mv-ventilation-mode.svg"
                 style="position:absolute;left:48px;top:30px;width:40px">
         <trigger-dcc event="click" target="screen" role="state" value="mode"></trigger-dcc>
      </dcc-image>
   </dcc-group>
   <dcc-image role="mode" image="images/mv/mv-mode-options.svg"
              style="position:absolute;left:36px;top:28px;width:193px">
   </dcc-image>
</dcc-state>
<dcc-state id="power-button" value="on" rotate>
   <dcc-image role="on" image="images/mv/mv-power.svg"
              style="position:absolute;left:190px;top:113px;width:20px">
      <trigger-dcc event="click" target="screen" role="state" value="start"></trigger-dcc>
      <trigger-dcc event="click" target="power-button" role="next"></trigger-dcc>
   </dcc-image>
   <dcc-image role="off" image="images/mv/mv-power-pressed.svg"
              style="position:absolute;left:190px;top:113px;width:20px">
      <trigger-dcc event="click" target="screen" role="state" value="off"></trigger-dcc>
      <trigger-dcc event="click" target="power-button" role="next"></trigger-dcc>
   </dcc-image>
</dcc-state>
~~~

## Trigger (`<trigger-dcc>`)

* `source` - explicitly indicates the source when the `<trigger-dcc>` element is not subordinated to another DCC;
* `event` - a monitored event which triggers the notification;
* `target` - target of the notification;
* `role` - the role of the notification - related to the action that will be taken by the target when receives the notification;
* `publish` - message to be published in the bus;
* `property` - property of the source DCC whose value will be sent to the target;
* `value` - value to be sent to the target (named as "value" property).

## State DCC (`<dcc-state>`)

~~~html
<dcc-state value="first" rotate>
  <dcc-image role="first" image="images/doctor-icon.png"></dcc-image>
  <dcc-image role="second" image="images/nurse-icon.png"></dcc-image>
  <dcc-image role="third" image="images/patient-icon.png"></dcc-image>
  <subscribe-dcc topic="state/next" role="next"></subscribe-dcc>
</dcc-state>

<dcc-button label="Next" topic="state/next">
</dcc-button>
~~~

~~~html
<dcc-state value="first" variable="state" rotate>
  <dcc-image role="first" image="images/doctor-icon.png"></dcc-image>
  <dcc-image role="second" image="images/nurse-icon.png"></dcc-image>
  <dcc-image role="third" image="images/patient-icon.png"></dcc-image>
  <trigger-dcc event="click" role="next"></trigger-dcc>
</dcc-state>
~~~

## Web DCC `<dcc-web>`

~~~html
<dcc-image id="mv-front" image="images/mv/mv-front.svg" style="width:200px"></dcc-image>
<dcc-image id="mv-back" image="images/mv/mv-back.svg" style="width:200px">
   <trigger-dcc event="click" publish="clicked"></trigger-dcc>
</dcc-image>
~~~

~~~html
<img id="mv-front" src="images/mv/mv-front.svg" style="width:200px">
<img id="mv-back" src="images/mv/mv-back.svg" style="width:200px">
<dcc-web location="mv-back">
   <trigger-dcc event="click" publish="clicked"></trigger-dcc>
</dcc-web>
~~~

## Compute DCC `<dcc-compute>`

Computes an assignment or a test, containing arithmetic or logical expression.

If the expression has variables, it requests their values sending messages `var/<name>/get`. Variables assigned produces messages `var/<name>/set`.

This component does not show the result - it is performed by the `<dcc-expression>` component.

* `expression` - expression to compute - it can be an arithmetical expression or a logical expression; it is possible to write several statements in the same expression separated by semicolons;
* `onload` - computes the expression and publishes the result on load;
* `active` - runs again the expression whenever a variable value changes.

~~~html
<dcc-compute expression="a:=4+2;b:=a+3" onload></dcc-compute>
~~~

## Expression DCC `<dcc-expression>`

Shows the value of a variable or the result of an expression.

* `expression` - expression to compute - it can be an arithmetical expression or a logical expression; it is possible to write several statements in the same expression separated by semicolons;
* `active` - updates the displayed result whenever a variable value changes.

~~~html
<dcc-compute expression="a:=2+4" onload></dcc-compute>
<dcc-expression expression="a" active></dcc-expression>
~~~

~~~html
<dcc-compute expression="p:=10" onload></dcc-compute>
<p>Value of P: <dcc-expression expression="p" active></dcc-expression></p>

<dcc-button label="Plus 10" topic="compute/add"></dcc-button>

<dcc-compute expression="p:=p+10">
  <subscribe-dcc topic="compute/add" role="update"></subscribe-dcc>
</dcc-compute>
~~~

~~~html
<dcc-compute expression="p:=10" onload></dcc-compute>
<p>Value of P: <dcc-expression expression="p" active></dcc-expression></p>

<dcc-compute id="plus10" expression="p:=p+10"></dcc-compute>

<dcc-button label="Plus 10" topic="compute/add" connect="click:plus10:compute/update">
</dcc-button>
~~~

~~~html
<dcc-compute expression="p:=10" onload></dcc-compute>
<p>Value of P: <dcc-expression expression="p" active></dcc-expression></p>

<dcc-compute id="plus10" expression="p:=p+10"></dcc-compute>

<dcc-button id="add-button" label="Plus 10" topic="compute/add" connect="click:plus10:compute/update">
</dcc-button>

<dcc-compute expression="p>=30" onload active connect="true:add-button:style/display/none">
</dcc-compute>
~~~

~~~html
<dcc-compute expression="p:=10" onload></dcc-compute>
<p>Value of P: <dcc-expression expression="p" active></dcc-expression></p>

<dcc-compute id="plus10" expression="p:=p+10"></dcc-compute>
<dcc-compute id="subtract10" expression="p:=p-10"></dcc-compute>

<dcc-button id="add-button" label="Plus 10" topic="compute/add" connect="click:plus10:compute/update">
</dcc-button>
<dcc-button id="subtract-button" label="Subtract 10" topic="compute/subtract" connect="click:subtract10:compute/update">
</dcc-button>

<dcc-compute expression="p>=30" onload active connect="true:add-button:style/display/none">
</dcc-compute>

<dcc-compute expression="p>=30" onload active connect="false:add-button:style/display/initial">
</dcc-compute>
~~~

~~~html
<dcc-compute expression="p:=10" onload></dcc-compute>
<p>Value of P: <dcc-expression expression="p" active></dcc-expression></p>

<dcc-compute id="plus10" expression="p:=p+10"></dcc-compute>

<dcc-timer cycles="10" interval="1000" connect="cycle:plus10:compute/update" autostart>
</dcc-timer>
~~~

~~~html
<dcc-compute expression="p:=10" onload></dcc-compute>
<p>Value of P: <dcc-expression expression="p" active></dcc-expression></p>

<dcc-compute id="plus10" expression="p:=p+10"></dcc-compute>

<dcc-timer cycles="10" interval="1000" autostart>
  <connect-dcc trigger="cycle" to="plus10" topic="compute/update"></connect-dcc>
</dcc-timer>
~~~html

~~~html
<dcc-timer cycles="5" interval="1000" autostart>
  <connect-dcc trigger="begin" to="power" topic="style/display/none"></connect-dcc>
  <connect-dcc trigger="cycle" to="power" topic="style/display/none"></connect-dcc>
  <connect-dcc trigger="end" to="power" topic="style/display/initial"></connect-dcc>
</dcc-timer>
<dcc-button id="power" label="Power On"></dcc-button>
~~~html

## RSS DCC `<dcc-rss>`

Fetches items from an RSS feed and publishes them as messages on the bus.

The attribute `source` specifies the address of the source of the feed. When a `start` is triggered, the component reads the feed and deploys the messages.

* `source` - the source of the RSS feeds;
* `publish`  - the topic to be published in the message (default is `dcc/rss/post`);
* `interval` - the interval between the publication of the messages in milliseconds (default is 1000).

Roles of notifications:
`start` - starts a cyclical process of publishing one item per interval;
`step` - publishes one RSS item (the next in a sequence);
`stop` - stops the cyclical process.

~~~html
<dcc-button label="News" topic="next/rss">
</dcc-button>

<dcc-rss source="https://www.wired.com/category/science/feed" publish="rss/science">
  <subscribe-dcc topic="next/rss" role="step"></subscribe-dcc>
</dcc-rss>
~~~

~~~html
<dcc-button label="Next Item" topic="next/rss">
</dcc-button>

<dcc-rss source="https://www.wired.com/category/science/feed">
  <subscribe-dcc topic="next/rss" role="step"></subscribe-dcc>
</dcc-rss>

<dcc-lively-talk id="doctor"
                 duration="0s"
                 character="doctor"
                 speech="News ">
  <subscribe-dcc topic="dcc/rss/post"></subscribe-dcc>
</dcc-lively-talk>
~~~

## Aggregator DCC (`<dcc-aggregator>`)

Aggregates items of messages, as RSS messages.

* `publish` - the topic to be published in the message (default is `dcc/rss/post`);

* `quantity` - the quantity of messages in the aggregation.

~~~html
<dcc-button label="Next Item" topic="next/rss">
</dcc-button>

<dcc-rss publish="rss/science" source="https://www.wired.com/category/science/feed">
  <subscribe-dcc topic="next/rss" role="step"></subscribe-dcc>
</dcc-rss>

<dcc-aggregator publish="aggregate/science" quantity="3">
  <subscribe-dcc topic="rss/science"></subscribe-dcc>
</dcc-aggregator>

<dcc-lively-talk id="doctor"
                 duration="0s"
                 character="doctor"
                 speech="News ">
  <subscribe-dcc topic="rss/science"></subscribe-dcc>
</dcc-lively-talk>

<dcc-lively-talk id="doctor"
                 duration="0s"
                 character="patient"
                 speech="News ">
  <subscribe-dcc topic="aggregate/science"></subscribe-dcc>
</dcc-lively-talk>
~~~

### Selective Publish/Subscribe

#### Topic Filters and Wildcards

In the subscription process, it is possible to specify a specific Topic Name or a Topic Filter, which works as a regular expression representing a set of possible Topic Names.

Wildcards are represented by the special `#` and/or `+` characters, appearing inside a Topic Name in the subscription process. They enable the subscription of a set of topics, since they generically represent one or more Topic Levels, according to the following rules:

#### Multilevel Wildcard `#`
The wildcard `#` can be used only in two positions in the Topic Filter:
* alone (the filter is only a `#`) - matches any Topic Name with any number of levels;
* end of the Topic Name (always preceded by a `/ `) -  matches any number of Topic Levels with the prefix specified before the wildcard.

#### Single Level Wildcard `+`
Only a single Topic Level can be matched by the wildcard  `+`, which represents any possible complete Topic Level Label. The `+` wildcard can appear only in four positions:
* alone (the filter is only a `+`) - matches any Topic Label in a single level (without slashes);
* beginning of the Topic Filter, always followed by a slash;
* end of the Topic Filter, always preceded by a slash;
* middle of the Topic Filter, always between two slashes.

The following example show messages selectively displayed.

~~~html
<dcc-button label="Disease"
            topic="news/disease"
            message="new disease">
</dcc-button>

<dcc-button label="Medication"
            topic="news/medication"
            message="new medication">
</dcc-button>

<dcc-lively-talk duration="0s"
                 character="doctor"
                 speech="I heard about a ">
  <subscribe-dcc topic="news/#"></subscribe-dcc>
</dcc-lively-talk>

<dcc-lively-talk duration="0s"
                 character="nurse"
                 speech="I heard about a ">
  <subscribe-dcc topic="news/disease"></subscribe-dcc>
</dcc-lively-talk>

<dcc-lively-talk duration="0s"
                 character="patient"
                 speech="I heard about a ">
  <subscribe-dcc topic="news/soccer"></subscribe-dcc>
</dcc-lively-talk>
~~~

## Notice or Input (`<dcc-notice-input>`)

~~~html
<dcc-notice-input text="Hello">
</dcc-notice-input>

<dcc-notice-input text="Do you agree?" buttona="Yes" buttonb="No">
</dcc-notice-input>

<dcc-notice-input itype="input" text="Type your name:">
</dcc-notice-input>
~~~

## Timer

~~~html
<dcc-button label="Start" topic="timer/start">
</dcc-button>

<dcc-timer cycles="10" interval="1000" publish="send/cycle">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
</dcc-timer>

<dcc-lively-talk id="doctor"
                 duration="0s"
                 character="doctor"
                 speech="Counting: ">
  <subscribe-dcc topic="send/cycle"></subscribe-dcc>
</dcc-lively-talk>
~~~

## Select a State

~~~html
Doctor, I am feeling chest pain since yesterday. The <dcc-state-select id="dcc1" states=" ,k,+,=,-" answer="=">pain is continuous</dcc-state-select> and {is located just in the middle of my chest}/=/, {worsening when I breathe}/+/ and {when I lay down on my bed}/+/. I have {arterial hypertension}/-/ and {I smoke 20 cigarettes}(smoking=20/day)/-/ every day.

Doctor, I am feeling chest pain since yesterday. The <dcc-state-select id="dcc1" states=" ,k,+,=,-">pain is continuous</dcc-state-select> and <dcc-state-select id="dcc2" states=" ,k,+,=,-">is located just in the middle of my chest</dcc-state-select> <dcc-state-select id="dcc3" states=" ,k,+,=,-">worsening when I breathe</dcc-state-select> and <dcc-state-select id="dcc4" states=" ,k,+,=,-">when I lay down on my bed</dcc-state-select>. I have <dcc-state-select id="dcc5" states=" ,k,+,=,-">arterial hypertension</dcc-state-select> and <dcc-state-select id="dcc6" states=" ,k,+,=,-">I smoke 20 cigarettes</dcc-state-select> every day.

Doctor, I am feeling chest pain since yesterday. The <dcc-state-select id="dcc1" states=" ,k,+,=,-" answer="=">pain is continuous</dcc-state-select> and <dcc-state-select id="dcc2" states=" ,k,+,=,-" answer="=">is located just in the middle of my chest</dcc-state-select> <dcc-state-select id="dcc3" states=" ,k,+,=,-" answer="+">worsening when I breathe</dcc-state-select> and <dcc-state-select id="dcc4" states=" ,k,+,=,-" answer="+">when I lay down on my bed</dcc-state-select>. I have <dcc-state-select id="dcc5" states=" ,k,+,=,-" answer="-">arterial hypertension</dcc-state-select> and <dcc-state-select id="dcc6" states=" ,k,+,=,-" answer="-">I smoke 20 cigarettes</dcc-state-select> every day.
~~~

~~~html
<dcc-group-select states=" ,k,+,=,-">
Doctor, I am feeling chest pain since yesterday. The <dcc-state-select id="dcc1">pain is continuous</dcc-state-select> and <dcc-state-select id="dcc2">is located just in the middle of my chest</dcc-state-select> <dcc-state-select id="dcc3">worsening when I breathe</dcc-state-select> and <dcc-state-select id="dcc4">when I lay down on my bed</dcc-state-select>. I have <dcc-state-select id="dcc5">arterial hypertension</dcc-state-select> and <dcc-state-select id="dcc6">I smoke 20 cigarettes</dcc-state-select> every day.
</dcc-group-select>
~~~
