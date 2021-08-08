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
<dcc-x property_1=“value_1” … property_n=“value_n”><dcc-x>
~~~

Where `<dcc-x>` is the DCC from the library that you want to instantiate. Each DCC can be customized, while it is instantiated, by defining values to its properties, which take the form of HTML attributes. The available properties depend on the selected DCC.

The following example shows an instantiation of a `<dcc-slider>`:

<dcc-play>
   <dcc-slider></dcc-slider>
</dcc-play>
