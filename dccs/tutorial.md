---
categories: ["dccs","tutorial"]
title: "DCC Tutorial"
layout: tutorial
---

# Digital Content Component (DCC) Tutorial

A Digital Content Component (DCC) is a model and technology that enables the packaging of blocks of software and media inside components. These components can be customized and combined to solve small tasks; interact with a user; perform animations and simulations; or create applications.

This tutorial will present the basic steps to work with DCCs.

# Introductory Video (in Portuguese)

<iframe width="560" height="315" src="https://www.youtube.com/embed/AH1U6jhtutc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Instantiating and customizing DCCs

In this tutorial, we will work with a version of DCCs that runs straight in your browser. It derives from the Web Components model and, therefore, they are defined using HTML elements. We expect that you are familiar with the HTML language to follow this tutorial.

The first step involves instantiating a DCC. This process involves selecting a DCC from our library and creating an instance from it. You may imagine that each DCC from our library is a template or blueprint to create distinct “individuals” or objects that follow this blueprint. We call this process *instantiation*.

All instantiation follows the same procedure. It takes the following general form:

~~~html
<dcc-x property_1="value_1" ... property_n="value_n"><dcc-x>
~~~

Where `<dcc-x>` is the DCC from the library that you want to instantiate. Each DCC can be customized, while it is instantiated, by defining values to its properties, which take the form of HTML attributes. The available properties depend on the selected DCC.

The following example shows an instantiation of a `<dcc-slider>`:

<dcc-play messages>
   <dcc-slider></dcc-slider>
</dcc-play>

This tutorial is alive, i.e., the examples presented are real DCCs that you can interact with. On top of these DCCs, it is presented the HTML expression that generates it. Sometimes, a panel of `Messages on the Bus` is activated below these DCCs to unveil the messages on the DCC Message Bus.

You can try it yourself by modifying the expression and clicking on the [render] button to verify the results.

This DCC presents a slider on the screen. Four properties can be customized:
* `min` - minimal value accepted;
* `max` - maximal value accepted;
* `value` - current value of the slider;
* `index` - defines if the index is presented besides the slider.

This is an example of a customized Slider DCC:

<dcc-play messages>
   <dcc-slider min="0" max="100" value="30" index></dcc-slider>
</dcc-play>

## Subscribing Messages (attribute `subscribe` or `<subscribe-dcc>`)

Components can work together exchanging *messages*. DCCs support a method publish/subscribe, in which a component publishes a message and another component subscribes to it to receive the message. This message can have two roles: (i) it can activate some action in the target component; (ii) it can carry data from the first component to the second.

Each message is labeled by a *topic*, which is the basis of the publish/subscribe mechanism. The first component publishes the message in a topic T and the second component subscribes to the respective topic T to receive the message.

There are several ways to publish a message, it depends on the reason why the component is publishing it. Some components enable you to customize the published message, such as the `dcc-button`.

A `dcc-button` produces a clickable button that can send a message when it is clicked. The following example shows a `dcc-button` with a label `Talk` that publishes a message when it is clicked. The message will have the topic `action/speech` and the content `Graaauuuurrrr`:

<dcc-play messages>
   <dcc-button label="Talk" topic="action/speech" message="Graaauuuurrrr">
   </dcc-button>
</dcc-play>

You can also try by yourself in a complete experimentation setup that we call [DCC Playground](https://harena-lab.github.io/harena-docs/js/harena/dccs/playground/). The parts of this Playground are further presented. After rendering the button, you can click on the button and the message published is presented in the panel `Messages`:


A DCC can subscribe to a topic in such a way that whenever a message with the respective topic appears on the bus, it will receive the message. There are two strategies to subscribe to a topic: the `subscribe` attribute and the `<subscribe-dcc>` element.

### `subscribe` attribute

A DCC can subscribe to a topic by adding an attribute subscribe in the following format:

~~~html
subscribe=“ topic:map”
~~~

* `topic` - the topic of the message subscribed;
* `map` (optional) - the external subscribed message can be mapped to an internal expected message related to an action.

In the following example, we added a second DCC, the `dcc-lively-talk`, which presents a character that shows the message `Graauuuurrrr` when the button with the label `Talk` is triggered:

<dcc-play>
   <dcc-lively-talk subscribe="action/speech"></dcc-lively-talk>

   <dcc-button label="Talk" topic="action/speech" message="Graauuuurrrr">
   </dcc-button>
</dcc-play>

The `dcc-button` publishes a topic `action/speech` and message `Talk` when the button is clicked. The `dcc-lively-talk` subscribes to the `action/speech` message, i.e., it receives the message whenever it is published in the bus. The `action/speech` message has a default interpretation by the `<dcc-lively-talk>` DCC - it shows in the balloon the content of the message.

The same procedure with the `<dcc-slider>`:

<dcc-play>
  <dcc-lively-talk speech="My age is " subscribe="input/changed/age:action/speech">
  </dcc-lively-talk>
  <dcc-slider variable="age" index></dcc-slider>
</dcc-play>

### `<subscribe-dcc>` element

For each subscribed message a DCC declares a `<subscribe-dcc>` inside its element. With the following syntax:

~~~html
<subscribe-dcc topic="topic" map="map"></subscribe-dcc>
~~~

They have the same roles as the previous subscribe:
* `topic` - the topic of the message subscribed;
* `map` (optional) - the external subscribed message can be mapped to an internal expected message related to an action.

The advantage of this second strategy is that a component can have just one `subscribe` attribute, but can have several `<dcc-subscribe>` sub-elements.

The following example shows two subscriptions of two buttons. The first one (label `Talk`) triggers the message `Graauuuurrrr` and the second one (label `Clear`) clears the message.

<dcc-play>
   <dcc-lively-talk>
      <subscribe-dcc topic="button/talk" map="speech"></subscribe-dcc>
      <subscribe-dcc topic="button/clear" map="clear"></subscribe-dcc>
   </dcc-lively-talk>

   <dcc-button label="Talk" topic="button/talk" message="Graauuuurrrr"></dcc-button>

   <dcc-button label="Clear" topic="button/clear"></dcc-button>
</dcc-play>

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

<dcc-play>
   <dcc-button label="Disease"
               topic="news/disease"
               message="dengue symptoms">
   </dcc-button>

   <dcc-button label="Drug"
               topic="news/drug"
               message="coronavirus vaccine">
   </dcc-button>

   <dcc-button label="Dinosaur"
               topic="news/dinosaur"
               message="brazilian dinosaurs">
   </dcc-button>

  <dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/doctor.png"
                    speech="I heard about: "
                    subscribe="news/#:speech">
  </dcc-lively-talk>

  <dcc-lively-talk character="https://harena-lab.github.io/harena-docs/dccs/tutorial/images/nurse.png"
                    speech="I heard about: "
                    subscribe="news/disease:speech">
  </dcc-lively-talk>

  <dcc-lively-talk speech="I heard about: "
                    subscribe="+/dinosaur:speech">
  </dcc-lively-talk>
</dcc-play>

<hr>
<h1>Under Construction</h1>
<hr>

## Connecting Components (attribute `connect` or `<connect-dcc>`)

An Origin DCC can be connected to a Target DCC in such a way that, whenever an event happens, the Origin DCC sends a request to the Target DCC. There  

<dcc-play>
   <dcc-lively-talk id="person"></dcc-lively-talk>

   <dcc-button label="Talk" connect="click:person:action/speech" message="Hello">
   </dcc-button>
</dcc-play>

<dcc-play>
   <dcc-compute expression="p:=10" onload></dcc-compute>
   <p>Value of P: <dcc-expression expression="p" active></dcc-expression></p>

   <dcc-compute id="plus10" expression="p:=p+10"></dcc-compute>

   <dcc-button label="Plus 10" topic="compute/add" connect="click:plus10:compute/update">
   </dcc-button>
</dcc-play>

<dcc-compute id="price" expression="price:=500;quantity:=2;total:=price*quantity"></dcc-compute>
<dcc-dhtml connect="retrieve:price:compute/calculate" autoupdate>
  <p>Price: {{price}}</p>
  <p>Quantity: {{quantity}}</p>
  <p>Total: {{total}}</p>
</dcc-dhtml>

<dcc-compute id="price" expression="a:=1;b:=2;test:=b>a"></dcc-compute>
<dcc-dhtml connect="retrieve:price:compute/calculate" autoupdate>
  <p>A: {{a}}</p>
  <p>B: {{b}}</p>
  <p>Test: {{test}}</p>
  {{@if test}}
    B é maior que A
  {{@endif}}
</dcc-dhtml>
