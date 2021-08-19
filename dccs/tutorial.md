---
categories: ["dccs","tutorial"]
title: "DCC Tutorial"
layout: tutorial
---

# Digital Content Component (DCC) Tutorial

A Digital Content Component (DCC) is a model and technology that enables the packaging of blocks of software and media inside components. These components can be customized and combined to solve small tasks; interact with a user; perform animations and simulations; or create applications.

This tutorial will present the basic steps to work with DCCs.

# Introductory Video (in Portuguese)

[![Web Components and DCCs](http://img.youtube.com/vi/l8UFlxF29xE/0.jpg)](https://youtu.be/l8UFlxF29xE)

# Instantiating and customizing DCCs

In this tutorial we will work with a version of DCCs that run straight in your browser. It derives from the Web Components model and, therefore, they are defined using HTML elements. We expect that you are familiar with the HTML language to follow this tutorial.

The first step involves instantiating a DCC. This process involves selecting a DCC from our library and creating an instance from it. You may imagine that each DCC from our library is a template or blueprint to create distinct “individuals” or objects that follow this blueprint. We call this process *instantiation*.

All instantiation follows the same procedure. It takes the following general form:

~~~html
<dcc-x property_1=“value_1” ... property_n=“value_n”><dcc-x>
~~~

Where `<dcc-x>` is the DCC from the library that you want to instantiate. Each DCC can be customized, while it is instantiated, by defining values to its properties, which take the form of HTML attributes. The available properties depend on the selected DCC.

The following example shows an instantiation of a `<dcc-slider>`:

<dcc-play>
   <dcc-slider></dcc-slider>
</dcc-play>

This tutorial is alive, i.e., examples presented are real DCCs that you can interact with. On top of each DCC, it is presented the expression that generates it.


This DCC presents a slider on the screen. Four properties can be customized:
* `min` - minimal value accepted;
* `max` - maximal value accepted;
* `value` - current value of the slider;
* `index` - defines if the index is presented besides the slider.

<dcc-play>
   <dcc-slider min="0" max="100" value="30" index></dcc-slider>
</dcc-play>

## Subscribing Messages (attribute `subscribe` or `<subscribe-dcc>`)

Components can work together exchanging *messages*. DCCs support a method publish/subscribe, in which a component publishes a message and another component subscribes to it to receive the message. This message can have two roles: (i) it can activate some action in the target component; (ii) it can carry data from the first component to the second.

Each message is labeled by a *topic*, which is the basis of the publish/subscribe mechanism. The first component publishes the message in a topic T and the second component subscribes to the respective topic T to receive the message.

There are several ways to publish a message, it depends on the reason why the component is publishing it. Some components enable you to customize the published message, such as the `dcc-button`.

A `dcc-button` produces a clickable button that can send a message when it is clicked. The following example shows a `dcc-button` with a label `Talk` that publishes a message when it is clicked. The message will have the topic `action/speech` and the content `Hello`:

<dcc-play>
   <dcc-button label="Talk" topic="action/speech" message="Graauuuurrrr">
   </dcc-button>
</dcc-play>

The result is further presented. After rendering the button, you can click on the button and the message published is presented in the panel `Messages`:


A DCC can subscribe to a topic in such a way that whenever a message with the respective topic appears on the bus, it will receive the message. There are two strategies to subscribe to a topic: the `subscribe` attribute and the `<subscribe-dcc>` element.

### `subscribe` attribute

A DCC can subscribe a topic adding an attribute subscribe in the following format:

~~~html
subscribe=“ topic:map”
~~~

* `topic` - the topic of the message subscribed;
* `map` (optional) - the external subscribed message can be mapped to an internal expected message related to an action.

The following example we added a second DCC, the `dcc-lively-talk`, which presents a character with


shows the message `Hello.` when the button with the label `Talk` is triggered.

<dcc-play>
   <dcc-lively-talk subscribe="action/speech"></dcc-lively-talk>

   <dcc-button label="Talk" topic="action/speech" message="Hello">
   </dcc-button>
</dcc-play>

The `dcc-button` publishes a topic `action/speech` and message `Hello` when the button is clicked. The `dcc-lively-talk` subscribes to the `action/speech` message, i.e.,

For each subscribed message a DCC declares a `<subscribe-dcc>` inside its element. With the following syntax:

~~~html
<subscribe-dcc topic="message"></subscribe-dcc>
~~~

* message - specifies the subscribed message

The following example shows the message `I am a doctor.` when the button with the label `Talk` is triggered.

<dcc-play>
   <dcc-lively-talk>
      <subscribe-dcc topic="button/talk" map="speech"></subscribe-dcc>
      <subscribe-dcc topic="button/clear" map="clear"></subscribe-dcc>
   </dcc-lively-talk>

   <dcc-button label="Talk" topic="button/talk" message="Hello"></dcc-button>

   <dcc-button label="Clear" topic="button/clear"></dcc-button>
</dcc-play>


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
