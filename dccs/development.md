---
categories: ["dccs","development"]
title: "DCC Development Guide"
---

Components work together by exchanging messages. A message bus, which is part of the framework, delivers these messages. When the framework starts, it instantiates a default global message bus. If not indicated otherwise, the default message bus links all DCCs.

The primary way to publish messages on the bus is the `publish` method:

~~~javascript
<reference>.publish(topic, message, track)
~~~

With the following arguments:
* `topic` - the topic of the message
* `message` - message body
* `track` - indicates if this message will be tracked by the logger system

The `track` argument is optional. The default value is false.

`<reference>` is an instance of a bus that can be achieved in several ways, as further described.

## Publishing a message by a DCC

A DCC publishes a message on the bus through the following statement:

~~~javascript
this.publish(topic, message, track)
~~~

Every DCC inherits the `publish` method from the DCC Base, which in turn calls the publish method from the bus. By default, each DCC published the message in the default DCC, but the scope can be also constrained. We further describe it.

## Publishing a message outside a DCC

Any javascript code outside a DCC can publish a message on the bus through the following statement:

~~~javascript
MessageBus.i.publish(topic, message, track)
~~~

`MessageBus.i` represents a default instance of a message bus. It is a static attribute created with the class.

## Creating a Private Bus

It is possible to create a private bus that restricts the communication to a subset of components.

~~~javascript
gx = MessageBus.create('groupx')
~~~

The method creates a private bus named `groupx`.

There are two ways to use the private bus through Javascript. The first is through the reference received:

~~~javascript
gx.publish(topic, message, track)
~~~

The second is through the `publishTo` method:

~~~javascript
MessageBus.publishTo(busId, topic, message, track)
~~~

The `busId` argument is the id of the private bus, e.g., `'groupx'`.

## Restricting Scopes in HTML

In the HTML page, the restriction can be carried by the `<scope-dcc>` element:

~~~html
<scope-dcc id="groupw">
   <dcc-lively-talk subscribe="action/speech"></dcc-lively-talk>

   <dcc-button label="Talk" topic="action/speech" message="Hello">
   </dcc-button>
</scope-dcc>
~~~

In this case, all messages of the DCCs inside the element `scope-dcc` will be exchanged in the private bus `groupw`.

The bus identification is global, i.e., the following sentence will send a message on the bus previously defined:

~~~javascript
MessageBus.publishTo('groupw', 'action/speech', 'How are you?', false)
~~~
