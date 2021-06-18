---
layout: tutorial
title: "Digital Content Component Compositions"
---

## Subscribing Messages (attribute `subscribe` or `<subscribe-dcc>`)

Components can work together exchanging *messages*. DCCs support a method publish/subscribe, in which a component publishes a message and another component subscribes to it to receive the message. This message can have two roles: (i) it can activate some action in the target component; (ii) it can carry data from the first component to the second.

Each message is labeled by a *topic*, which is the basis of the publish/subscribe mechanism. The first component publishes the message in a topic T and the second component subscribes to the respective topic T to receive the message.

There are several ways to publish a message, it depends on the reason why the component is publishing it. Some components enable you to customize the published message, such as the `dcc-button`.

A `dcc-button` produces a clickable button that can send a message when it is clicked. The following example shows a `dcc-button` with a label `Talk` that publishes a message when it is clicked. The message will have the topic `action/speech` and the content `Hello`:

~~~html
<dcc-button label="Talk" topic="action/speech" message="Hello">
</dcc-button>
~~~

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

~~~html
<dcc-lively-talk subscribe="action/speech"></dcc-lively-talk>

<dcc-button label="Talk" topic="action/speech" message="Hello">
</dcc-button>
~~~

The `dcc-button` publishes a topic `action/speech` and message `Hello` when the button is clicked. The `dcc-lively-talk` subscribes to the `action/speech` message, i.e.,

For each subscribed message a DCC declares a `<subscribe-dcc>` inside its element. With the following syntax:

~~~html
<subscribe-dcc topic="message"></subscribe-dcc>
~~~

* message - specifies the subscribed message

The following example shows the message `I am a doctor.` when the button with the label `Talk` is triggered.

~~~html
<dcc-lively-talk>
  <subscribe-dcc topic="button/talk" map="speech"></subscribe-dcc>
  <subscribe-dcc topic="button/clear" map="clear"></subscribe-dcc>
</dcc-lively-talk>

<dcc-button label="Talk" topic="button/talk" message="Hello"></dcc-button>

<dcc-button label="Clear" topic="button/clear"></dcc-button>
~~~


## Connecting Components (attribute `connect` or `<connect-dcc>`)

An Origin DCC can be connected to a Target DCC in such a way that, whenever an event happens, the Origin DCC sends a request to the Target DCC. There  

~~~html
<dcc-lively-talk id="person"></dcc-lively-talk>

<dcc-button label="Talk" connect="click:person:action/speech" message="Hello">
</dcc-button>
~~~

~~~html
<dcc-compute expression="p:=10" onload></dcc-compute>
<p>Value of P: <dcc-expression expression="p" active></dcc-expression></p>

<dcc-compute id="plus10" expression="p:=p+10"></dcc-compute>

<dcc-button label="Plus 10" topic="compute/add" connect="click:plus10:compute/update">
</dcc-button>
~~~
