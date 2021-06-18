---
layout: tutorial
title: "Digital Content Component Compositions"
categories: tutorial
---

## Subscribing Messages

Components can work together exchanging *messages*. DCCs support a method publish/subscribe, in which a component publishes a message and another component subscribes to it to receive the message. This message can have two roles: (i) it can activate some action in the target component; (ii) it can carry data from the first component to the second.

Each message is labeled by a *topic*, which is the basis of the publish/subscribe mechanism. The first component publishes the message in a topic T and the second component subscribes to the respective topic T to receive the message.

There are several ways to publish a message, it depends on the reason why the component is publishing it. Some components enable you to customize the published message, such as the `dcc-button`.

A `dcc-button` produces a clickable button that can send a message when it is clicked. The following example shows a `dcc-button` with a label `Talk` that publishes a message when it is clicked. The message will have the topic `action/speech` and the content `Hello`:
