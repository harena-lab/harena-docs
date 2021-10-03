---
categories: ["harena","message"]
title: "Harena Message Protocol"
---

# Harena Message Protocol

# Cycle of a Player

1. user selects a case to play

   * `data/case/<case id>/get` - loads and returns the markdown of the case

   * Harena compiles the case

   * `control/case/ready` - indicates that case is loaded, compiled, and ready to run

   * `knot/<</navigate` - navigates to the first knot of the case

   * `knot/<knot id>/start` - notifies that the node `<knot id>` started
     * this message demarks when the user starts to play the node - used to track how much time the user will spend in this node;
     * example: `knot/Day_1/start` - notifies that `Day_1` started

2. user types an answer to a question (variable related hypothesis)

   * for each typed key: `var/<knot id>.<var name>/typed`
     * the names of variables are preceded by the knot id, so their scope is restricted to the knot, i.e., the same variable name in two knots can have distinct values
     * example: for each typed key in an input in the knot `Day_1` whose related variable name is `hypothesis`: `var/Day_1.hypothesis/typed`

   * `var/<knot id>.<var name>/changed` - user confirms the input (tab to leave the field or click in another button/field)
     * example: `var/Day_1.hypothesis/changed` - user confirms the input related to the variable `hypothesis` in the knot `Day_1`

3. user clicks on button Next to go no the next knot

   * `flow/>/navigate` - navigates to the next knot in the flow

   * `var/Day_1.hypothesis/set` - sets the value of `hypothesis` variable  (before leaving the knot)

   * `control/input/submit` - notifies submission of the input (before leaving the knot)

   * `knot/Day_1/end` - indicates the end of a knot execution

## Control Actions

General protocol: `control/<entity>/<action>`.

Most of the control actions trigger the final action, for example, the `control/case/load` control action is the start of the process to trigger the `case/<case id>/load` action.

Levels of detail:
* `case`
* `knot`
* `element`


* `control/case/load`
* `control/case/selected`

* `control/case/save`
* `control/case/play`
* `control/knot/edit`
* `control/config/edit`

## Persisted Messages

All the internal paths are mapped to the external paths prefixing the path by: `/execution/<instance id>`, where `<instance id>` is the id of the case instance that is being executed.

### Entity: `template_family`
* `template_family/*/get` - Returns the list of the available template families.

  response topic: `template_family/*`
           message: `{<template_family id>: <template_family icon>}`

### Entity: `template`
* `data/theme/<template_family id>.<template id>/get` - Loads and returns the HTML of the template.

  response topic: `data/theme/<template_family id>.<template id>`
           message: `<template HTML>`


### Entity: `case`
* `case/*/get` - Returns the list of the available cases.

  response topic: `case/*`
           message: `{<case id>: <case icon>}`

* `data/case/<case id>/get` - Loads and returns the markdown of the case.

  response topic: `case/<case id>`
           message: `<case markdown>`

* `case/<case id>/set` - Saves the case in a markdown or object format (according to the format specified in the message).

  message: `{format: "markdown" | "json", source: <case source>}`

  * markdown format

    response topic: `case/<case id>/version`
           message: `<version id>` - id of the previous case version.

  * object format

    response topic: `case/<case id>/set/status`
           message: `<status>` - status of the opperation.

### Entity: `knot`
`<knot title>` - The title given by the author to the knot in the case.
`<knot id>` - Uniquely identifies a knot. Derived from the knot title replacing spaces for underscores (as we do not use spaces in the topics).

* `knot/<knot id>/selected` - A knot has been selected in the authoring environment.

  message: `<knot title>`

* `knot/<knot id>/navigate` - The player navigates to a specific knot.
* `knot/</navigate`
* `knot/<</navigate`
* `knot/>/navigate`

*

### Entity: `variable`

Variable input cycle:
  * `var/<variable>/input/ready`
  * `var/<variable>/typed`
  * `var/<variable>/changed`
  * `var/<variable>/set`
  * `var/<variable>/input/end`

#### Details

* `var/<variable>/typed` - Notifies that the user typed part of an input.

  message: `{sourceType: "dcc-input", value: <value>}`

* `var/<variable>/changed` - Notifies a change em the input variable.

  message: `{sourceType: "dcc-input", value: <value>}`

* `var/<variable>/set` - Notifies the input of a value by the user related to a `<variable>`.

  message: `{sourceType: "dcc-input", value: "<value>"}`

## Messages Not Persisted

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
