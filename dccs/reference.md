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

Textual button that sends the following message when clicked:
* topic - `button/on/clicked`
* message body - `"message to you"`

<dcc-play messages>
  <dcc-button label="On"
               topic="button/on/clicked"
               message="message to you">
  </dcc-button>
</dcc-play>

Image button with title `check` and whose image is located in `icons/icon-check.svg`. Since the image occupies all available area, a `<div>` surrounding it delimits the size to `100px`.

When clicked, the trigger will send a message with the topic: `button/Check/clicked`.

<dcc-play messages>
  <div style="width: 100px">
     <dcc-button label="Check"
                 image="https://harena-lab.github.io/harena-docs/dccs/reference/images/icon-check.svg">
     </dcc-button>
  </div>
</dcc-play>

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

<dcc-play messages>
  <dcc-slider statement="Select your age:"
              variable="age" value="20"
              min="1" max="130" index>
  </dcc-slider>
</dcc-play>

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
* `character` - path to the image file of the character;
* `speech` - text of the speech.

When a Lively Talk DCC receives a message, it shows the body of the message as a speech in the balloon.

### Examples

When the character image is not specified, it shows the standard image of a dinosaur.

A static dinosaur showing the speech "Grrraaauuuurrrr"

<dcc-play>
  <dcc-lively-talk speech="Grrraaauuuurrrr">
  </dcc-lively-talk>
</dcc-play>

The following examples show animations that probably were already executed when you reach this part of the reference. To run them again, click on the `<dcc-lively-talk>` code and click on the [render] button that is displayed.

An animated character - the animation takes two seconds:

<dcc-play>
  <dcc-lively-talk duration="2s"
                   speech="Grrraaauuuurrrr">
  </dcc-lively-talk>
</dcc-play>

An animated nurse that enters in 2 seconds and shows the speech "Doctor, please you have to evaluate a man!"

<dcc-play>
  <dcc-lively-talk duration="2s"
                   character="https://harena-lab.github.io/harena-docs/dccs/reference/images/nurse.png"
                   speech="Doctor, please you have to evaluate a man!">
  </dcc-lively-talk>
</dcc-play>

An animated doctor that enters in 2 seconds after waiting 2 seconds and shows the speech "Ok, I'm on my way." The doctor's animation goes in the right direction.

<dcc-play>
  <dcc-lively-talk duration="2s"
                   delay="2s"
                   direction="right"
                   Character="https://harena-lab.github.io/harena-docs/dccs/reference/images/doctor.png"
                     speech="Ok, I'm on my way.">
  </dcc-lively-talk>
</dcc-play>

### Talks Inside a Dialog

Talks can be grouped inside a `<dcc-lively-dialog>`, which define the parameters and rate of the complete dialog.

~~~html
<dcc-lively-dialog rate="rate"
                   duration="duration">
   <dcc-lively-talk ...></dcc-lively-talk>
   <dcc-lively-talk ...></dcc-lively-talk>
</dcc-lively-dialog>
~~~

* `rate` - complete time slot of each animation (talk) inside the dialog, including the duration - the rate minus the duration defines the delay among the animations;
* `duration` - duration of the animation (talk) inside the dialog, when it starts after the delay (duration=0 means a static image).
Animation of two characters. Each character will take a 6 seconds slot (4 seconds of delay plus 2 seconds of animation):

<dcc-play>
  <dcc-lively-dialog rate="6s" duration="2s">
   <dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/reference/images/nurse.png"
                    speech="Doctor, please you have to evaluate a man!">
   </dcc-lively-talk>
   <dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/reference/images/doctor.png"
                    speech="Ok, I'm on my way.">
   </dcc-lively-talk>
  </dcc-lively-dialog>
</dcc-play>

## Subscribing Messages (`<subscribe-dcc>`)

A DCC can subscribe to a message in such a way that whenever the message appears on the bus, it will receive it.

The [DCC Tutorial](https://harena-lab.github.io/harena-docs/dccs/tutorial/) details how to subscribe messages.

In the following example, the character represented by a `dcc-lively-talk` shows the message `Graauuuurrrr` when the button with the label `Talk` is triggered:

<dcc-play>
   <dcc-lively-talk subscribe="action/speech"></dcc-lively-talk>

   <dcc-button label="Talk" topic="action/speech" message="Graauuuurrrr">
   </dcc-button>
</dcc-play>

## Input Choice DCC (`<dcc-input-choice>`)

To present a multiple-choice input:

For `<dcc-input-choice>`:
* `id` - unique id of the input;
* `statement` - statement presented before the options;
* `variable` - name of the variable that will receive the value selected;
* `value` - initial value (choice);
* `mandatory` - defines if the user must select some value;
* `exclusive` - exclusivity of the option explicitly declared, defines if the value will be exclusive (radio button) or not (checkbox) - default is non-exclusive;
* `shuffle` - shuffles the options - default is false;
* `reveal` - presentation of the options: horizontal, vertical or integral (consider extra html inside the choice)
* `target` - target to be triggered when an option is selected.

For `<dcc-input-option>`:
* `parent` - parent of the option explicitly declared (otherwise will be inferred by the hierarchy);
* `variable` - variable of the option explicitly declared, otherwise will assume the parent's variable (which is the expected scenario);
* `exclusive` - exclusivity of the option explicitly declared, defines if the value will be exclusive (radio button) or not (checkbox), otherwise will assume the parent's exclusivity (which is the expected scenario).

The following example shows options horizontally, with the default non-exclusive selection:

<dcc-play>
  <dcc-input-choice variable="role" statement="What is your role?" reveal="horizontal">
     <dcc-input-option>I am a patient</dcc-input-option>
     <dcc-input-option>I am a doctor</dcc-input-option>
     <dcc-input-option>I am a nurse</dcc-input-option>
  </dcc-input-choice>
</dcc-play>

When the option is selected, a message `input/change/<variable>` is produced, where `variable` is the name of the specified variable. When the value of each option is not specified, its label assumes also the role of value.

Changing parameters for `vertical` and `exclusive`:

<dcc-play>
  <dcc-input-choice variable="role" statement="What is your role?" reveal="vertical" exclusive>
     <dcc-input-option>I am a patient</dcc-input-option>
     <dcc-input-option>I am a doctor</dcc-input-option>
     <dcc-input-option>I am a nurse</dcc-input-option>
  </dcc-input-choice>
</dcc-play>

One can explicitly specify the value of each item. You will observe that this value is send in the message:

<dcc-play>
  <dcc-input-choice variable="role" statement="What is your role?" reveal="vertical" exclusive>
     <dcc-input-option value="patient">I am a patient</dcc-input-option>
     <dcc-input-option value="doctor">I am a doctor</dcc-input-option>
     <dcc-input-option value="nurse">I am a nurse</dcc-input-option>
  </dcc-input-choice>
</dcc-play>

The options `reveal` `horizontal` or `vertical` control the presentation and no extra HTML is considered. When the reveal option is not specified, no treatment is applied to the elements and it is possible to add extra HTML inside to customize the presentation:

<dcc-play>
  <dcc-input-choice variable="role" statement="What is your role?" exclusive>
     <dcc-input-option value="patient">I am a patient</dcc-input-option><br>
     <hr>
     <dcc-input-option value="doctor">I am a doctor</dcc-input-option><br>
     <hr>
     <dcc-input-option value="nurse">I am a nurse</dcc-input-option><br>
  </dcc-input-choice>
</dcc-play>

The following example shows a `dcc-input-choice` working with a `dcc-lively-talk`, so the option selected is presented by the character:

<dcc-play>
  <dcc-input-choice variable="role" statement="What is your role?" reveal="vertical" exclusive>
     <dcc-input-option>I am a patient</dcc-input-option>
     <dcc-input-option>I am a doctor</dcc-input-option>
     <dcc-input-option>I am a nurse</dcc-input-option>
  </dcc-input-choice>

  <dcc-lively-talk subscribe="input/changed/role:speech"></dcc-lively-talk>
</dcc-play>

When a `dcc-input-choice` or a `dcc-input-option` has a `target`, each option appears as a `dcc-button`, which triggers a navigation message when clicked, specified in the `target` attribute.


## Timer DCC `<dcc-timer>`

Generates rhythm messages timely spaced by an `interval`.

* `topic`  - the topic to be published in the message (default is `dcc/timer/cycle`);
* `cycles` - number of cycles and respective messages generated;
* `interval` - interval between messages in milliseconds;
* `autostart` - the timer starts automatically when it loads.

Topics of messages received and their role:
`action/reset` - restarts the timer;
`action/start` - starts the timer;
`action/stop` - stops the timer;
`action/step` - goes to the next cycle;
`action/interval` - redefines the timer interval.

In the following example a button starts a timer, which in turn sends ten `next/count` messages, spaced 1000 milliseconds one from the next:

<dcc-play messages>
  <dcc-timer cycles="10" interval="1000"
               topic="next/count"
             subscribe="start/timer:start">
  </dcc-timer>

  <dcc-button label="Start" topic="start/timer">
  </dcc-button>
</dcc-play>

Adding a character who displays the counting:

<dcc-play>
  <dcc-lively-talk speech="Counting: "
                   subscribe="next/count:speech">
  </dcc-lively-talk>

  <dcc-timer cycles="10" interval="1000"
               topic="next/count"
             subscribe="start/timer:start">
  </dcc-timer>

  <dcc-button label="Start" topic="start/timer">
  </dcc-button>
</dcc-play>

## RSS DCC `<dcc-rss>`

Fetches items from an RSS feed and publishes them as messages on the bus.

The attribute `source` specifies the address of the source of the feed. When a `next` is triggered, the component deploys the next RSS message from the source.

* `source` - the source of the RSS feeds;
* `topic`  - the topic to be published in the message (default is `dcc/rss/post`);

Topics of messages received and their role:
`action/next` - publishes one RSS item (the next in a sequence).

Example of an RSS Feed connected to a button that requests the next feed:

<dcc-play messages>
  <dcc-rss source="https://www.wired.com/category/science/feed"
           subscribe="next/rss:next"
           topic="rss/science">
  </dcc-rss>

  <dcc-button label="News" topic="next/rss">
  </dcc-button>
</dcc-play>

Example of an RSS Feed connected to a button and a character. The button requests the next feed displayed in the character balloon:

<dcc-play>
  <dcc-rss source="https://www.wired.com/category/science/feed"
           subscribe="next/rss:next"
           topic="rss/science">
  </dcc-rss>

  <dcc-lively-talk speech="News: " subscribe="rss/science:speech">
  </dcc-lively-talk>

  <dcc-button label="Next Item" topic="next/rss">
  </dcc-button>
</dcc-play>

Example of a timer that automatically requests the next feed and displays on the character balloon:

<dcc-play>
  <dcc-rss source="https://www.wired.com/category/science/feed"
           subscribe="next/rss:next"
           topic="rss/science">
  </dcc-rss>

  <dcc-lively-talk speech="News :" subscribe="rss/science:speech">
  </dcc-lively-talk>

  <dcc-timer cycles="10" interval="1000"
               topic="next/rss"
             subscribe="start/feed:start">
  </dcc-timer>

  <dcc-button label="Start" topic="start/feed">
  </dcc-button>
</dcc-play>

## Aggregator DCC (`<dcc-aggregator>`)

Aggregates items of messages, as RSS messages.

* `topic` - the topic to be published in the message (default is `dcc/aggregate/post`);
* `quantity` - the quantity of messages in the aggregation.

<dcc-play>
  <dcc-rss source="https://www.wired.com/category/science/feed"
           subscribe="next/rss:next"
           topic="rss/science">
  </dcc-rss>

  <dcc-aggregator topic="aggregate/science"
                  quantity="3"
                  subscribe="rss/science">
  </dcc-aggregator>

  <dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png"
                    speech="News: "
                    subscribe="rss/science:speech">
  </dcc-lively-talk>

  <dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png"
                    speech="Compact: "
                    subscribe="aggregate/science:speech">
  </dcc-lively-talk>

  <dcc-button label="Next Item" topic="next/rss">
  </dcc-button>
</dcc-play>

## CSV Table (`<dcc-table-csv>`)

Loads a CSV table and dispatches it as a message with the '`table/updated`' topic.

There are two methods to read the CSV: inside the element or a file dropdown. The default is the dropdown.

### Syntax

~~~html
<dcc-table-csv id="id"
               schema>
</dcc-table-csv>
~~~

* `id` - (optional) unique id;
* `schema` (optional) indicates that the table has a schema in the first line.

### Example

<dcc-play>
  <dcc-table-csv schema></dcc-table-csv>
</dcc-play>

## Table (`<dcc-table>`)

Displays a table received as a message. The message contains the '`table/update`' or '`update`' topic.

### Syntax

~~~html
<dcc-table id="id">
</dcc-table>
~~~

Download the files [Zombies Height and Weight](tutorial/zombies-height-weight.csv) and [Zombies Survey](tutorial/zombies-survey.csv) to test.

* `id` - (optional) unique id.

### Example

<dcc-play>
  <dcc-table-csv schema></dcc-table-csv>
  <dcc-table subscribe="table/updated:update"></dcc-table>
</dcc-play>

## Chart (`<dcc-chart>`)

Displays a chart received as a message. The message contains the '`table/update`' or '`update`' topic.

### Syntax

~~~html
<dcc-chart id="id">
</dcc-chart>
~~~

* `id` - (optional) unique id.

### Example

<dcc-play>
  <dcc-table-csv schema></dcc-table-csv>
  <dcc-chart subscribe="table/updated:update"></dcc-chart>
</dcc-play>

## Projection (`<dcc-projection>`)

Produces a projection of a table received by message and publishes a message with the projected table.  The received message contains the '`table/update`' or '`update`' topic. The produced message contains the '`table/projected`' topic.

### Syntax

~~~html
<dcc-projection id="id"
                fields="field1,field2">
</dcc-projection>
~~~

* `id` - (optional) unique id.
* `fields` - fields to be projected, separated by commas.

### Example

<dcc-play>
  <dcc-table-csv schema></dcc-table-csv>
  <dcc-projection fields="height,weight" subscribe="table/updated:update"></dcc-projection>
  <dcc-chart subscribe="table/projected:update"></dcc-chart>
  <dcc-table subscribe="table/projected:update"></dcc-table>
</dcc-play>

<hr>
<h1>Under Construction</h1>
<hr>

The following example shows a character that tells you "Grrraaaauuurrrr *your name*" when you type your name.

~~~html
<dcc-input-typed variable="name">Type your name:</dcc-input-typed>

<dcc-lively-talk speech="Grrraaaauuurrrr "
                 subscribe="var/name/changed:speech">
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

## Input Choice DCC (`<dcc-input-choice>`)
### Future

~~~html
<dcc-unfold><dcc-unfold-short>I am a patient</dcc-unfold-short></dcc-unfold>
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
  <subscribe-dcc topic="state/next" map="next"></subscribe-dcc>
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
* `autorun` - computes the expression and publishes the result on load;
* `active` - runs again the expression whenever a variable value changes.

~~~html
<dcc-compute expression="a:=4+2;b:=a+3" autorun></dcc-compute>
~~~

## Expression DCC `<dcc-expression>`

Shows the value of a variable or the result of an expression.

* `expression` - expression to compute - it can be an arithmetical expression or a logical expression; it is possible to write several statements in the same expression separated by semicolons;
* `active` - updates the displayed result whenever a variable value changes.

~~~html
<dcc-compute expression="a:=2+4" autorun></dcc-compute>
<dcc-expression expression="a" active></dcc-expression>
~~~

~~~html
<dcc-compute expression="p:=10" autorun></dcc-compute>
<p>Value of P: <dcc-expression expression="p" active></dcc-expression></p>

<dcc-button label="Plus 10" topic="compute/add"></dcc-button>

<dcc-compute expression="p:=p+10">
  <subscribe-dcc topic="compute/add" map="update"></subscribe-dcc>
</dcc-compute>
~~~

~~~html
<dcc-compute expression="p:=10" autorun></dcc-compute>
<p>Value of P: <dcc-expression expression="p" active></dcc-expression></p>

<dcc-compute id="plus10" expression="p:=p+10"></dcc-compute>

<dcc-button label="Plus 10" topic="compute/add" connect="click:plus10:compute/update">
</dcc-button>
~~~

~~~html
<dcc-compute expression="p:=10" autorun></dcc-compute>
<p>Value of P: <dcc-expression expression="p" active></dcc-expression></p>

<dcc-compute id="plus10" expression="p:=p+10"></dcc-compute>

<dcc-button id="add-button" label="Plus 10" topic="compute/add" connect="click:plus10:compute/update">
</dcc-button>

<dcc-compute expression="p>=30" autorun active connect="true:add-button:style/display/none">
</dcc-compute>
~~~

~~~html
<dcc-compute expression="p:=10" autorun></dcc-compute>
<p>Value of P: <dcc-expression expression="p" active></dcc-expression></p>

<dcc-compute id="plus10" expression="p:=p+10"></dcc-compute>
<dcc-compute id="subtract10" expression="p:=p-10"></dcc-compute>

<dcc-button id="add-button" label="Plus 10" topic="compute/add" connect="click:plus10:compute/update">
</dcc-button>
<dcc-button id="subtract-button" label="Subtract 10" topic="compute/subtract" connect="click:subtract10:compute/update">
</dcc-button>

<dcc-compute expression="p>=30" autorun active connect="true:add-button:style/display/none">
</dcc-compute>

<dcc-compute expression="p>=30" autorun active connect="false:add-button:style/display/initial">
</dcc-compute>
~~~

~~~html
<dcc-compute expression="p:=10" autorun></dcc-compute>
<p>Value of P: <dcc-expression expression="p" active></dcc-expression></p>

<dcc-compute id="plus10" expression="p:=p+10"></dcc-compute>

<dcc-timer cycles="10" interval="1000" connect="cycle:plus10:compute/update" autostart>
</dcc-timer>
~~~

~~~html
<dcc-compute expression="p:=10" autorun></dcc-compute>
<p>Value of P: <dcc-expression expression="p" active></dcc-expression></p>

<dcc-compute id="plus10" expression="p:=p+10"></dcc-compute>

<dcc-timer cycles="10" interval="1000" autostart>
  <connect-dcc trigger="cycle" to="plus10" topic="compute/update"></connect-dcc>
</dcc-timer>
~~~

~~~html
<dcc-timer cycles="5" interval="1000" autostart>
  <connect-dcc trigger="begin" to="power" topic="style/display/none"></connect-dcc>
  <connect-dcc trigger="cycle" to="power" topic="style/display/none"></connect-dcc>
  <connect-dcc trigger="end" to="power" topic="style/display/initial"></connect-dcc>
</dcc-timer>
<dcc-button id="power" label="Power On"></dcc-button>
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

The following example shows messages selectively displayed.

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
