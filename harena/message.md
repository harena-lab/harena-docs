---
categories: ["harena","message"]
title: "Harena Message Protocol"
---

# Harena Message Protocol

# Pattern to Build the Message Hierarchy

`<entity>/<action>/<identifier>`

* `<entity>` - the entity affected by the action
  * `user`
  * `section`
  * `case`
  * `knot`
  * `flow`
  * `input`
  * `var`

* `<action>` - the action executed over or by the `<entity>`
  * `login`
  * `ready`
  * `start`
  * `get`
  * `set`
  * `navigate`
  * `typed`
  * `changed`

* `<identifier>` - identifies the entity; `*` can be used to refer to all entities
  * user identifier
  * case identifier
  * instance identifier
  * variable name

# Cycle of a Player

1. user login
   * `user/login/<user id>` - notifies the user login and its id

2. user selects a case to play

   * `case/get/<case id>` - loads and returns the markdown of the case

   * Harena compiles the case

   * `case/ready/<case id>` - indicates that case is loaded, compiled, and ready to run

   * case/start/<instance id> - demarks the start of a case by the user

   * `knot/navigate/<<` - navigates to the first knot of the case

   * `knot/start/<knot id>` - indicates that the knot `<knot id>` started
     * demarks when the user starts to play the knot - used to track how much time the user will spend in this knot
     * example: `knot/start/Day_1` - notifies that `Day_1` started

3. user types an answer to a question (variable related hypothesis)

   * for each typed key: `input/typed/<knot id>/<var name>`
     * the names of variables are preceded by the knot id, so their scope is restricted to the knot, i.e., the same variable name in two knots can have distinct values
     * example: for each typed key in an input in the knot `Day_1` whose related variable name is `hypothesis`: `input/typed/Day_1/hypothesis`

   * `input/changed/<knot id>/<var name>` - user confirms the input (tab to leave the field or click in another button/field)
     * example: `input/changed/Day_1/hypothesis` - user confirms the input related to the variable `hypothesis` in the knot `Day_1`

4. user clicks on button Next to go no the next knot

   * `flow/navigate/>` - navigates to the next knot in the flow (see the topic: Navigating through knots)

   * `input/submit/*` - before leaving the knot, this message requests to all components to notify any value to be recorded

   * every value produced in the knot (e.g., data from the input fields) will be persisted by the following message

   * `var/set/<knot id>/<var name>` - stores the value of a variable in the State Mechanism (an Harena mechanism that persists values of variables during the entire case)
     * example: `var/set/Day_1/hypothesis` - stores the `Day_1.hypothesis` variable in the State Mechanism

   * `knot/end/<knot id>` - indicates that the knot `<knot id>` ended
     * demarks when the user ends playing this knot - used to track how much time the user spent in this knot
     * example: `knot/end/Day_1` - indicates the end of `Day_1` knot execution

5. the previous cycle follows until the user reaches a knot assigned as the `end` knot

   * `case/completed/<instance id>` - indicates that the user reached the last knot of the case and that the case was completed

   * `case/summary/<instance id>` - a special message dispatched in the end of the case by the State Machine summarizing: (i) the sequence of knots visited by the user with timestamp; (ii) the value of all variables defined during the case

# Navigating through the Knots

The following messages are triggered whenever there is a request to the player to navigate to another knot or case. Each type requests a navigation to:

* `knot/navigate/<knot id>` - a knot specified by the `<knot id>`
* `knot/navigate/<<` - first knot (assigned by a special type or the first in the knot sequence of the case)
* `knot/navigate/>` - next knot considering the sequence of knots in the case
* `knot/navigate/<` - previous knot in the navigation stack
* `flow/navigate/>` - in the flow sequence (specification of the sequence of nodes to be followed, which is independent of the sequence of nodes in the case)
* `case/navigate/>` - next case in the case list

## Some User Actions








### Entity: `template_family`
* `template_family/get/*` - Returns the list of the available template families.

  response topic: `template_family/*`
           message: `{<template_family id>: <template_family icon>}`

### Entity: `template`
* `theme/get/<template_family id>/<template id>` - Loads and returns the HTML of the template.

  response topic: `data/theme/<template_family id>.<template id>`
           message: `<template HTML>`


### Entity: `case`

* `case/get/*` - Returns the list of the available cases.

  response topic: `case/*`
           message: `{<case id>: <case icon>}`

* `case/selected/<case id>` - User selected a case.

* `case/load/<case id>` - User requests to load a specific case.


* `case/get/<case id>` - Loads and returns the markdown of the case.

  response topic: `case/<case id>`
           message: `<case markdown>`

* `case/config/<case id>` - Edits the properties of a case (title, author, description etc.)

* `case/save/<case id>` - User requests a case save.

* `case/set/<case id>` - Saves the case in a markdown or object format (according to the format specified in the message).

  message: `{format: "markdown" | "json", source: <case source>}`

  * markdown format

    response topic: `case/<case id>/version`
           message: `<version id>` - id of the previous case version.

  * object format

    response topic: `case/<case id>/set/status`
           message: `<status>` - status of the operation.

* `case/play/<case id>` - User requests to play a specific case.


### Entity: `knot`
`<knot title>` - The title given by the author to the knot in the case.
`<knot id>` - Uniquely identifies a knot. Derived from the knot title replacing spaces for underscores (as we do not use spaces in the topics).

* `knot/selected/<knot id>` - A knot has been selected in the authoring environment.
   message: `<knot title>`

* `knot/edit/<knot id>` - A knot started to be edited.

### Entities: `input` and `variable`

Variable input cycle:
  * `input/ready/<variable>`
  * `input/typed/<variable>`
  * `input/changed/<variable>`
  * `var/set/<variable>`
  * `input/end/<variable>`

#### Details

* `input/typed/<variable>` - Notifies that the user typed part of an input.

  message: `{sourceType: "dcc-input", value: <value>}`

* `input/changed/<variable>` - Notifies a change em the input variable.

  message: `{sourceType: "dcc-input", value: <value>}`

* `var/set/<variable>` - Notifies that the `<variable>` related to the input was changed.

  message: `{sourceType: "dcc-input", value: "<value>"}`

## Messages Not Persisted

**Under Construction**

Messages to coordinate DCCs.

### Entity: `dcc-block`

Operations:
* `get xstyle` \[`/dcc-block/get/xstyle`\] - Requests to a DCC Styler the styling policy.

  return: \[`/dcc-block/xstyle`\] - one of the following values:
  * `in ` - default style defined inside the DCC;
  * `none` - no style defined;
  * `out` - style defined externally.

### Entity: `dcc-state-select`

Operations:
* `get states` \[`/dcc-state-select/get/states`\] - Requests for an upper level DCC (e.g., an aggregattor DCC) or a group coordinator DCC the set of possible states present in the selector.

  return: \[`/dcc-state-select/states`\] - List of states separated by commas.
