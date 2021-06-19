---
categories: ["dccs","cellular"]
title: "Cellular DCCs"
---

# Cellular Digital Content Components

## Playground

Learn and try to instantiate and customize Digital Content Components (DCCs) at [DCC Playground](http://datasci4health.github.io/harena-space/src/adonisjs/public/dccs/playground/).

# Syntax and Examples

## Cellular Space DCC (`<dcc-space-cellular>`)

Defines a cellular space.

### Syntax

Empty cellular space with the default number of columns and rows (20). The parameter `grid` indicates that the grid will be presented.

~~~html
<dcc-space-cellular grid>
</dcc-space-celullar>
~~~

## Grid and Cells

### Examples

~~~html
<dcc-space-cellular grid>
t__t_t
__t_t_
ttt__t
</dcc-space-cellular>

<dcc-cell-color type="t" label="tree" color="#aaffaa"></dcc-cell-color>
~~~

~~~html
<dcc-space-cellular background-color="#aaffaa" grid>
t__t_t
__t_t_
ttt__t
</dcc-space-cellular>

<dcc-cell-image type="t" label="tree" image="images/cell/tree01.svg"></dcc-cell-image>
~~~

~~~html
<dcc-space-cellular background-color="#aaffaa" grid>
t__t_t
r_t_t_
ttr__t
</dcc-space-cellular>

<dcc-cell-image type="t" label="tree" image="images/cell/tree01.svg"></dcc-cell-image>
<dcc-cell-image type="r" label="rock" image="images/cell/rock01.svg"></dcc-cell-image>
~~~

## Movement

### Examples

~~~html
<dcc-space-cellular id="cellular-space" rows="5" grid>
r__r_r
__r_r_
</dcc-space-cellular>

<dcc-cell-image type="r" label="rock" image="images/cell/rock01.svg"></dcc-cell-image>

<rule-dcc-cell-pair label="fall" probability="100" transition="r_>_r">
___
___
_*_
</rule-dcc-cell-pair>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
~~~

~~~html
<dcc-space-cellular id="cellular-space" rows="5" grid>
r__r_r
__r_r_
</dcc-space-cellular>

<dcc-cell-image type="r" label="rock" image="images/cell/rock01.svg"></dcc-cell-image>

<rule-dcc-cell-pair label="fall" probability="100" transition="r_>_r">
___
___
_*_
</rule-dcc-cell-pair>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>

<dcc-timer cycles="10" interval="1000" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
~~~

~~~html
<dcc-space-cellular id="cellular-space" cell-width="50" cell-height="50" grid>
r__r_r
__r_r_
______
______
t_t__t
</dcc-space-cellular>

<dcc-cell-image type="r" label="rock" image="images/cell/rock01.svg">
</dcc-cell-image>
<rule-dcc-cell-pair label="fall" probability="100" transition="r_>_r">
___
___
_*_
</rule-dcc-cell-pair>

<dcc-cell-image type="t" label="tree" image="images/cell/tree01.svg"></dcc-cell-image>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>

<dcc-timer cycles="10" interval="1000" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
~~~

~~~html
<dcc-space-cellular id="cellular-space" grid>
_..
._.
#_#
___
___
___
</dcc-space-cellular>

<dcc-cell-color type="#" label="obstacle" color="#0000ff"></dcc-cell-color>

<dcc-cell-color type="." label="sand" color="#ff0000"></dcc-cell-color>
<rule-dcc-cell-pair label="fall vertical" probability="100" transition="._>_.">
___
___
_*_
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="fall oblique" probability="90" transition="._>_.">
___
___
*_*
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="roll" probability="40" transition="._>_.">
___
*_*
___
</rule-dcc-cell-pair>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>

<dcc-timer cycles="10" interval="1000" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
~~~

~~~html
<dcc-space-cellular id="cellular-space" label="sand clock" cell-width="6" cell-height="6">
#############################################
#...........................................#
#...........................................#
#...........................................#
#...........................................#
##.........................................##
_#.........................................#_
_##.......................................##_
__#.......................................#__
__##.....................................##__
___#.....................................#___
___##...................................##___
____#...................................#____
____##.................................##____
_____##...............................##_____
______##.............................##______
_______##...........................##_______
________##.........................##________
_________##.......................##_________
__________##.....................##__________
___________###.................###___________
_____________###.............###_____________
_______________###.........###_______________
_________________###.....###_________________
___________________##___##___________________
___________________##___##___________________
_________________###_____###_________________
_______________###_________###_______________
_____________###_____________###_____________
___________###_________________###___________
__________##_____________________##__________
_________##_______________________##_________
________##_________________________##________
_______##___________________________##_______
______##_____________________________##______
_____##_______________________________##_____
____##_________________________________##____
____#___________________________________#____
___##___________________________________##___
___#_____________________________________#___
__##_____________________________________##__
__#_______________________________________#__
_##_______________________________________##_
_#_________________________________________#_
##_________________________________________##
#___________________________________________#
#___________________________________________#
#___________________________________________#
#___________________________________________#
#############################################
</dcc-space-cellular>

<dcc-cell-color type="#" label="glass" color="#0000ff"></dcc-cell-color>

<dcc-cell-color type="." label="sand" color="#ff0000"></dcc-cell-color>
<rule-dcc-cell-pair label="fall vertical" probability="100" transition="._>_.">
___
___
_*_
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="fall oblique" probability="90" transition="._>_.">
___
___
*_*
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="roll" probability="40" transition="._>_.">
___
*_*
___
</rule-dcc-cell-pair>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>
<dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>

<dcc-timer cycles="800" interval="50" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
~~~

## Replication

### Examples

~~~html
<dcc-space-cellular id="cellular-space" cell-width="32" cell-height="32" grid>
__________
__________
___#______
__________
__________
__________
__________
</dcc-space-cellular>

<dcc-cell-image type="#" label="cyanobacteria" image="images/cell/cyanobacteria.svg">
</dcc-cell-image>

<rule-dcc-cell-pair label="replicate" probability="30" transition="#_>##">
***
*_*
***
</rule-dcc-cell-pair>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>
<dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>

<dcc-timer cycles="100" interval="500" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
~~~

### Production
~~~html
<dcc-space-cellular id="cellular-space" background-color="#aaaaaa" rows="10">
__###__####__####____###
</dcc-space-cellular>

<dcc-cell-color type="#" label="cloud" color="#ffffff"></dcc-cell-color>
<dcc-cell-color type="." label="rain" color="#0000ff"></dcc-cell-color>

<rule-dcc-cell-pair label="produce rain" probability="10" transition="#_>#.">
___
___
_*_
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="fall rain" probability="100" transition="._>_.">
___
___
_*_
</rule-dcc-cell-pair>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>

<dcc-timer cycles="10" interval="1000" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
~~~

One drop per cloud.

~~~html
<dcc-space-cellular id="cellular-space" background-color="#aaaaaa" rows="10">
__###__####__####____###
</dcc-space-cellular>

<dcc-cell-color type="#" label="cloud" color="#ffffff"></dcc-cell-color>
<dcc-cell-color type="e" label="cloud empty" color="#ffffff"></dcc-cell-color>
<dcc-cell-color type="." label="rain" color="#0000ff"></dcc-cell-color>

<rule-dcc-cell-pair label="produce rain" probability="10" transition="#_>e.">
___
___
_*_
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="fall rain" probability="100" transition="._>_.">
___
___
_*_
</rule-dcc-cell-pair>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>

<dcc-timer cycles="10" interval="1000" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
~~~

## Vanish

### Examples

### Death

~~~html
<dcc-space-cellular id="cellular-space" cell-width="32" cell-height="32" grid>
______#___
__________
___#______
_______#__
_____#____
_#________
______#___
</dcc-space-cellular>

<dcc-cell-image type="#" label="cyanobacteria" image="images/cell/cyanobacteria.svg">
</dcc-cell-image>
<rule-dcc-cell-pair label="death" probability="10" transition="##>__">
___
_*_
___
</rule-dcc-cell-pair>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>
<dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>

<dcc-timer cycles="100" interval="500" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
~~~

### Predation

~~~html
<dcc-space-cellular id="cellular-space" cell-width="32" cell-height="32" grid>
______c___
__a_c_____
___cc_____
_______c__
____ac____
_c____c__
______c___
</dcc-space-cellular>

<dcc-cell-image type="c" label="cyanobacteria" image="images/cell/cyanobacteria.svg">
</dcc-cell-image>

<dcc-cell-image type="a" label="amoeba" image="images/cell/amoeba.svg"></dcc-cell-image>
<rule-dcc-cell-pair rule="eat" probability="70" transition="ac>_a">
***
*_*
***
</rule-dcc-cell-pair>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>
<dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>

<dcc-timer cycles="100" interval="500" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
~~~

## Combining Replication and Predation

### Example

~~~html
<dcc-space-cellular id="cellular-space" cell-width="32" cell-height="32" grid>
  ______c___
  __a_c_____
  ___cc_____
  _______c__
  ____ac____
  _c____c___
  ______c___
</dcc-space-cellular>

<dcc-cell-image type="c" label="cyanobacteria" image="images/cell/cyanobacteria.svg">
</dcc-cell-image>
<rule-dcc-cell-pair label="cyanobacteria replication" probability="30" transition="c_>cc">
   ***
   *_*
   ***
</rule-dcc-cell-pair>

<dcc-cell-image type="a" label="amoeba" image="images/cell/amoeba.svg"></dcc-cell-image>
<rule-dcc-cell-pair label="amoeba replication" probability="5" transition="a_>aa">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="eat"probability="50" transition="ac>_a">
   ***
   *_*
   ***
</rule-dcc-cell-pair>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>
<dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>

<dcc-timer cycles="100" interval="500" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
~~~

## Combining Movement, Replication, and Vanish


~~~html
<dcc-space-cellular id="cellular-space" cell-width="32" cell-height="32" background-color="#aaffaa">
__c_____h___hhc____h
_____t____t____r____
________w________h__
h__c_twwwww___t_____
___t_wwwwwww______c_
____h__wwwwwtt__t___
c_t______wwr_____r__
_____c______t_______
_h_____r______hc____
</dcc-space-cellular>

<dcc-cell-color type="w" label="water" color="#0000ff"></dcc-cell-color>
<dcc-cell-image type="r" label="rock" image="images/cell/rock01.svg"></dcc-cell-image>
<dcc-cell-image type="t" label="tree"image="images/cell/tree01.svg"></dcc-cell-image>

<dcc-cell-image type="c" label="carnivore" image="images/cell/carnivorous-dinosaur.svg">
</dcc-cell-image>

<dcc-cell-image type="h" label="herbivore" image="images/cell/brontosaurus.svg">
</dcc-cell-image>

<rule-dcc-cell-pair label="herbivore dies" probability="15" transition="hh>__">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="carnivore dies" probability="10" transition="cc>__">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="carnivore eat and replicates" probability="30" transition="ch>cc">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="herbivore replicates" probability="30" transition="h_>hh">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="herbivore moves" probability="50" transition="h_>_h">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="carnivore moves" probability="50" transition="c_>_c">
   ***
   *_*
   ***
</rule-dcc-cell-pair>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>
<dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>

<dcc-timer cycles="1000" interval="500" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
~~~

## Random Walk

~~~html
<dcc-space-cellular id="cellular-space" rows="50" cols="50" cell-width="7" cell-height="7" grid>
#_____________________#
_______________________
_______________________
_#___________#_________
_______________________
_____________________#_
_______________________
____#__________________
_______________________
_______________________
_______________________
_#_____________________
</dcc-space-cellular>

<dcc-cell-color type="#" label="boid" color="#ff0000"></dcc-cell-color>
<rule-dcc-cell-pair label="move random" probability="100" transition="#_>_#">
   ***
   *_*
   ***
</rule-dcc-cell-pair>


<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>

<dcc-timer cycles="100" interval="100" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
~~~

~~~html
<dcc-space-cellular id="cellular-space" rows="50" cols="50" cell-width="7" cell-height="7" grid infinite>
r______________________d
_______________________
_______________________
_u___________r_________
_______________________
_____________________l_
_______________________
____d__________________
_______________________
_______________________
_______________________
_r_____________________
</dcc-space-cellular>

<dcc-cell-color type="u" label="up" color="#ff0000"></dcc-cell-color>
<dcc-cell-color type="d" label="down" color="#00ff00"></dcc-cell-color>
<dcc-cell-color type="l" label="left" color="#0000ff"></dcc-cell-color>
<dcc-cell-color type="r" label="right" color="#ff00ff"></dcc-cell-color>

<rule-dcc-cell-pair label="move up" transition="u_>_u">
  _*_
  ___
  ___
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="move down" transition="d_>_d">
  ___
  ___
  _*_
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="move left" transition="l_>_l">
  ___
  *__
  ___
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="move right" transition="r_>_r">
  ___
  __*
  ___
</rule-dcc-cell-pair>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>

<dcc-timer cycles="100" interval="100" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
~~~


Clustering Effect with Random change
~~~html
<dcc-space-cellular id="cellular-space" rows="50" cell-width="7" cell-height="7" grid infinite>
r___r_____d__r____l_______d__l___r___d_r_u__r____d____l_r____u
_l_____l____d____d___u___l___d___l___d___u___l__l___r_uuu__l__
___r___l___d__d__l_____u____ll__rr__uu__dd__l__r__l__d___d__l_
r___r_____d__r____l_______d__l___r___d_r_u__r____d____l_r____u
_l_____l____d____d___u___l___d___l___d___u___l__l___r_uuu__l__
___r___l___d__d__l_____u____ll__rr__uu__dd__l__r__l__d___d__l_
r___r_____d__r____l_______d__l___r___d_r_u__r____d____l_r____u
_l_____l____d____d___u___l___d___l___d___u___l__l___r_uuu__l__
___r___l___d__d__l_____u____ll__rr__uu__dd__l__r__l__d___d__l_
r___r_____d__r____l_______d__l___r___d_r_u__r____d____l_r____u
_l_____l____d____d___u___l___d___l___d___u___l__l___r_uuu__l__
___r___l___d__d__l_____u____ll__rr__uu__dd__l__r__l__d___d__l_
r___r_____d__r____l_______d__l___r___d_r_u__r____d____l_r____u
_l_____l____d____d___u___l___d___l___d___u___l__l___r_uuu__l__
___r___l___d__d__l_____u____ll__rr__uu__dd__l__r__l__d___d__l_
r___r_____d__r____l_______d__l___r___d_r_u__r____d____l_r____u
_l_____l____d____d___u___l___d___l___d___u___l__l___r_uuu__l__
___r___l___d__d__l_____u____ll__rr__uu__dd__l__r__l__d___d__l_
r___r_____d__r____l_______d__l___r___d_r_u__r____d____l_r____u
_l_____l____d____d___u___l___d___l___d___u___l__l___r_uuu__l__
___r___l___d__d__l_____u____ll__rr__uu__dd__l__r__l__d___d__l_
</dcc-space-cellular>

<dcc-cell-color type="u" label="up" color="#ff0000"></dcc-cell-color>
<dcc-cell-color type="d" label="down" color="#00ff00"></dcc-cell-color>
<dcc-cell-color type="l" label="left" color="#0000ff"></dcc-cell-color>
<dcc-cell-color type="r" label="right" color="#ff00ff"></dcc-cell-color>

<rule-dcc-cell-pair label="follow" probability="50" transition="?!>!!">
  ***
  *_*
  ***
</rule-dcc-cell-pair>

<rule-dcc-cell-pair label="turn" probability="10" transition="?!>?@">
  ___
  _*_
  ___
</rule-dcc-cell-pair>

<rule-dcc-cell-pair label="move up" transition="u_>_u">
  _*_
  ___
  ___
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="move down" transition="d_>_d">
  ___
  ___
  _*_
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="move left" transition="l_>_l">
  ___
  *__
  ___
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="move right" transition="r_>_r">
  ___
  __*
  ___
</rule-dcc-cell-pair>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>
<dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>

<dcc-timer cycles="10000" interval="100" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
~~~

~~~html
<dcc-space-cellular id="cellular-space" rows="50" cols="50" cell-width="7" cell-height="7" grid>
_______________________
_______________________
_______________________
_____________#_________
_______________________
_______________________
_______________________
_______________________
_______________________
_______________________
_______________________
_______________________
</dcc-space-cellular>

<dcc-cell-color type="#" label="boid" color="#ff0000"></dcc-cell-color>
<rule-dcc-cell-pair label="move random" probability="100" transition="#_>_#">
   ***
   *_*
   ***
</rule-dcc-cell-pair>


<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>

<dcc-timer cycles="100" interval="100" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
~~~

Water flow
~~~html
<dcc-space-cellular id="cellular-space" rows="50" cols="50" cell-width="7" cell-height="7" grid>
#_____________________#
_______________________
_______________________
_#___________#_________
_______________________
_____________________#_
_______________________
____#__________________
_______________________
_______________________
_______________________
_#_____________________
</dcc-space-cellular>

<dcc-cell-color type="#" label="water" color="#0000ff">
   <property-dcc name="value" initial="50"></property-dcc>
</dcc-cell-color>
<rule-dcc-cell-pair label="move random" probability="100" transition="#_>_#">
   ***
   *_*
   ***
</rule-dcc-cell-pair>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>

<dcc-timer cycles="100" interval="100" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
~~~

~~~html
<dcc-space-cellular id="cellular-space" rows="30" cols="30" cell-width="7" cell-height="7" grid>
_
_
_
_
_
_
_
_
_
_
_
_______________w
</dcc-space-cellular>

<dcc-cell-color type="w" label="water" color="#0000ff" opacity="3">
  <property-dcc name="value" initial="300"></property-dcc>
</dcc-cell-color>
<dcc-cell-color type="#" label="wall" color="#aaaaaa"></dcc-cell-color>
<rule-dcc-cell-flow label="spread random 1" probability="100" transition="w_>ww">
   ***
   *_*
   ***
</rule-dcc-cell-flow>
<rule-dcc-cell-flow label="spread random 2" probability="100" transition="ww>ww">
   ***
   *_*
   ***
</rule-dcc-cell-flow>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>
<dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>

<dcc-timer cycles="500" interval="100" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
~~~

## Flow Policy

In the following sentences, all items listed as "conditions" must be true to trigger the rule:
* `-+`
  * conditions:
    * the origin's value is greater than 1
    * the origin's value is greater than the target's value
  * action:
    * the origin decreases its value and the target increases its value
* `+-`
  * conditions:
    * the target's value is greater than 1
    * the origin has a value field
  * action:
    * the origin increases its value and the target decreases its value
* `-1`
  * conditions:
    * the origin's value is greater than 1
    * the origin's value is greater than the target's value or the target has no value
  * action:
    * the origin sets value 1 to the target and decreases its value;
* `-/`
  * calculates a share rate, which is the value origin equally divided by the neighbors
  * conditions:
    * the share rate is greater than 1
   * the source minus the share rate is equal or greater than the value of the target or the target has no value
  * action:
    * the origin transfers a share rate to the destination, decreasing it from the origin;
* `_=`
  * conditions:
    * the origin's value is greater than 0
    * the origin's value is greater than the target's value or the target has no value
  * action:
    * the origin transfers its value to the target
* `_-`
  * conditions:
    * the origin's value is greater than 1
    * the value of the origin is greater than the value of the target or the target has no value
  * action:
    * the origin transfers its value to the destination, decreasing it in the process
* `_+`
  * conditions:
    * the origin has a value
    * the origin's value+1 is greater than the target's value
  * action:
    * the origin transfers its value to the destination, increasing it in the process
* `==`
  * conditions:
    * the origin's value is greater than 0
    * the origin's value is greater than the target's value or the target has no value
  * action:
    * the origin copies its value to the target
* `=-`
  * conditions:
    * the origin's value is greater than 1
    * the origin's value is greater than the target's value or the target has no value
  * action:
    * the origin copies its value to the target, decreasing it in the process
* `=+`
  * conditions:
    * the origin has a value
    * the origin's value+1 is greater than the target's value
  * action:
    * the origin copies its value to the target, increasing it in the process
* `=/`
  * calculates a share rate, which is the value origin equally divided by the neighbors
  * conditions:
    * the share rate is greater than 1
    * the source minus the share rate is equal or greater than the value of the target or the target has no value
  * action:
    * the origin copies the share rate to the destination
* `1`
  * condition:
    * the origin's value is 1
  * action:
    * the rule is applied
* `0`
  * condition:
    * the origin's value is 0
  * action:
    * the rule is applied

~~~html
<dcc-space-cellular id="cellular-space" rows="30" cols="30" cell-width="10" cell-height="10" grid>
_
_
____________####
__________###__###
_________##______##
______####___w____###
_____##_____________######
__####___________________##
_###############__________##
_#_________________________#
##_________________________##
#___________________________#
##_________________________##
_#_________________________#
_##########__________#######
__________##________##
_______####__________####
_______#________________##
_______###_____________##
_________#####______####
_____________########
</dcc-space-cellular>

<dcc-cell-color type="w" label="water" color="#0000ff" opacity="10">
  <property-dcc name="value" initial="500"></property-dcc>
</dcc-cell-color>
<dcc-cell-color type="#" label="wall" color="#aaaaaa"></dcc-cell-color>
<rule-dcc-cell-flow label="spread random 1" probability="100" transition="w_>ww" flow="-1">
   ***
   *_*
   ***
</rule-dcc-cell-flow>
<rule-dcc-cell-flow label="spread random 2" probability="100" transition="ww>ww" flow="-+">
   ***
   *_*
   ***
</rule-dcc-cell-flow>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>
<dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>

<dcc-timer cycles="500" interval="100" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
~~~

~~~html
<dcc-space-cellular id="cellular-space" rows="30" cols="30" cell-width="10" cell-height="10" grid>
_
_
____________####
__________###__###
_________##______##
______####___w____###
_____##_____________######
__####___________________##
_###############__________##
_#____________________d____#
##_________________________##
#___________________________#
##_________________________##
_#_________________________#
_##########__________#######
__________##________##
_______####__________####
_______#________________##
_______###_____________##
_________#####______####
_____________########
</dcc-space-cellular>

<dcc-cell-color type="w" label="water" color="#0000ff" opacity="10">
  <property-dcc name="value" initial="500"></property-dcc>
</dcc-cell-color>
<dcc-cell-color type="d" label="drain" color="#ff0000">
  <property-dcc name="value" initial="0"></property-dcc>
</dcc-cell-color>
<dcc-cell-color type="#" label="wall" color="#aaaaaa"></dcc-cell-color>
<rule-dcc-cell-flow label="spread random 1" probability="100" transition="w_>ww" flow="-1">
   ***
   *_*
   ***
</rule-dcc-cell-flow>
<rule-dcc-cell-flow label="spread random 2" probability="100" transition="ww>ww" flow="-+">
   ***
   *_*
   ***
</rule-dcc-cell-flow>
<rule-dcc-cell-flow label="collect water" probability="100" transition="dw>dw" flow="+-">
   ***
   *_*
   ***
</rule-dcc-cell-flow>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>
<dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>

<dcc-timer cycles="500" interval="100" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
~~~

~~~html
<dcc-space-cellular id="cellular-space" cell-width="10" cell-height="10">
swwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
</dcc-space-cellular>
<dcc-cell-color type="w" label="wire type 1" color="#00ff00"></dcc-cell-color>
<dcc-cell-color type="s" label="energy source" color="#808000">
  <property-dcc name="value" initial="45"></property-dcc>
</dcc-cell-color>
<dcc-cell-color type="e" label="eletron" color="#0000ff" opacity="45"></dcc-cell-color>

<rule-dcc-cell-flow label="create energy" probability="100" transition="sw>se" flow="==">
***
*_*
***
</rule-dcc-cell-flow>
<rule-dcc-cell-flow label="follow wire" probability="100" transition="ew>we" flow="_-">
***
*_*
***
</rule-dcc-cell-flow>
<rule-dcc-cell-flow label="dies" probability="100" transition="ew>ww" flow="1">
***
*_*
***
</rule-dcc-cell-flow>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>
<dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>

<dcc-timer cycles="10000" interval="100" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
~~~



~~~html
<dcc-space-cellular-editor id="cellular-space" cell-width="50" cell-height="50" grid>
r__r_r
__r_r_
______
______
t_t__t
</dcc-space-cellular-editor>

<dcc-cell-image type="r" label="rock" image="images/cell/rock01.svg">
</dcc-cell-image>
<dcc-cell-image type="t" label="tree" image="images/cell/tree01.svg"></dcc-cell-image>

<rule-dcc-cell-pair label="fall" probability="100" transition="r_>_r">
___
___
_*_
</rule-dcc-cell-pair>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>

<dcc-trigger label="Empty" action="type/empty"></dcc-trigger>
<dcc-trigger label="Rock" action="type/rock"></dcc-trigger>
<dcc-trigger label="Tree" action="type/tree"></dcc-trigger>

<dcc-timer cycles="10" interval="1000" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="type/#" role="type"></subscribe-dcc>
~~~

~~~html
<dcc-space-cellular-editor id="cellular-space" label="sand clock" cell-width="6" cell-height="6">
#############################################
#...........................................#
#...........................................#
#...........................................#
#...........................................#
##.........................................##
_#.........................................#_
_##.......................................##_
__#.......................................#__
__##.....................................##__
___#.....................................#___
___##...................................##___
____#...................................#____
____##.................................##____
_____##...............................##_____
______##.............................##______
_______##...........................##_______
________##.........................##________
_________##.......................##_________
__________##.....................##__________
___________###.................###___________
_____________###.............###_____________
_______________###.........###_______________
_________________###.....###_________________
___________________##___##___________________
___________________##___##___________________
_________________###_____###_________________
_______________###_________###_______________
_____________###_____________###_____________
___________###_________________###___________
__________##_____________________##__________
_________##_______________________##_________
________##_________________________##________
_______##___________________________##_______
______##_____________________________##______
_____##_______________________________##_____
____##_________________________________##____
____#___________________________________#____
___##___________________________________##___
___#_____________________________________#___
__##_____________________________________##__
__#_______________________________________#__
_##_______________________________________##_
_#_________________________________________#_
##_________________________________________##
#___________________________________________#
#___________________________________________#
#___________________________________________#
#___________________________________________#
#############################################
</dcc-space-cellular-editor>

<dcc-cell-color type="#" label="glass" color="#0000ff"></dcc-cell-color>

<dcc-cell-color type="." label="sand" color="#ff0000"></dcc-cell-color>
<rule-dcc-cell-pair label="fall vertical" probability="100" transition="._>_.">
___
___
_*_
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="fall oblique" probability="90" transition="._>_.">
___
___
*_*
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="roll" probability="40" transition="._>_.">
___
*_*
___
</rule-dcc-cell-pair>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>
<dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>

<dcc-trigger label="Empty" action="type/empty"></dcc-trigger>
<dcc-trigger label="Glass" action="type/glass"></dcc-trigger>
<dcc-trigger label="Sand" action="type/sand"></dcc-trigger>

<dcc-timer cycles="800" interval="50" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="type/#" role="type"></subscribe-dcc>
~~~


~~~html
<dcc-space-cellular-editor id="cellular-space" cell-width="32" cell-height="32" background-color="#aaffaa">
__c_____h___hhc____h
_____t____t____r____
________w________h__
h__c_twwwww___t_____
___t_wwwwwww______c_
____h__wwwwwtt__t___
c_t______wwr_____r__
_____c______t_______
_h_____r______hc____
</dcc-space-cellular-editor>

<dcc-cell-color type="w" label="water" color="#0000ff"></dcc-cell-color>
<dcc-cell-image type="r" label="rock" image="images/cell/rock01.svg"></dcc-cell-image>
<dcc-cell-image type="t" label="tree"image="images/cell/tree01.svg"></dcc-cell-image>

<dcc-cell-image type="c" label="carnivore" image="images/cell/carnivorous-dinosaur.svg">
</dcc-cell-image>

<dcc-cell-image type="h" label="herbivore" image="images/cell/brontosaurus.svg">
</dcc-cell-image>

<rule-dcc-cell-pair label="herbivore dies" probability="10" transition="hh>__">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="carnivore dies" probability="10" transition="cc>__">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="carnivore eat and replicates" probability="30" transition="ch>cc">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="herbivore replicates" probability="50" transition="h_>hh">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="herbivore moves" probability="50" transition="h_>_h">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="carnivore moves" probability="50" transition="c_>_c">
   ***
   *_*
   ***
</rule-dcc-cell-pair>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>
<dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>

<dcc-trigger label="Empty" action="type/empty"></dcc-trigger>
<dcc-trigger label="Water" action="type/water"></dcc-trigger>
<dcc-trigger label="Rock" action="type/rock"></dcc-trigger>
<dcc-trigger label="Tree" action="type/tree"></dcc-trigger>
<dcc-trigger label="Carnivore" action="type/carnivore"></dcc-trigger>
<dcc-trigger label="Herbivore" action="type/herbivore"></dcc-trigger>

<dcc-timer cycles="1000" interval="500" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="type/#" role="type"></subscribe-dcc>
~~~

~~~html
<dcc-space-cellular-editor id="cellular-space" rows="30" cols="30" cell-width="10" cell-height="10" grid>
_
_
____________####
__________###__###
_________##______##
______####___w____###
_____##_____________######
__####___________________##
_###############__________##
_#_________________________#
##_________________________##
#___________________________#
##_________________________##
_#_________________________#
_##########__________#######
__________##________##
_______####__________####
_______#________________##
_______###_____________##
_________#####______####
_____________########
</dcc-space-cellular-editor>

<dcc-cell-color type="w" label="water" color="#0000ff" opacity="10">
  <property-dcc name="value" initial="500"></property-dcc>
</dcc-cell-color>
<dcc-cell-color type="#" label="wall" color="#aaaaaa"></dcc-cell-color>

<rule-dcc-cell-flow label="spread random 1" probability="100" transition="w_>ww">
   ***
   *_*
   ***
</rule-dcc-cell-flow>
<rule-dcc-cell-flow label="spread random 2" probability="100" transition="ww>ww">
   ***
   *_*
   ***
</rule-dcc-cell-flow>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>
<dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>

<dcc-trigger label="Empty" action="type/empty"></dcc-trigger>
<dcc-trigger label="Water" action="type/water"></dcc-trigger>
<dcc-trigger label="Wall" action="type/wall"></dcc-trigger>

<dcc-timer cycles="500" interval="100" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="type/#" role="type"></subscribe-dcc>
~~~


# Ecosystem

~~~html
<dcc-space-cellular id="cellular-space" cell-width="32" cell-height="32" background-color="#aaffaa">
________________r___
_____p____p_________
__r_________________
_____pwwwww___p_____
___p_wwwwwww________
_______wwwwwpp__p___
__p______wwr________
____________p_______
_______r____________
</dcc-space-cellular>

<dcc-cell-color type="w" label="water" color="#0000ff"></dcc-cell-color>
<dcc-cell-image type="r" label="rock" image="images/cell/rock01.svg"></dcc-cell-image>
<dcc-cell-image type="p" label="plant" image="images/cell/plant01.svg"></dcc-cell-image>

<rule-dcc-cell-pair id="plant-dies" label="plant dies" probability="15" transition="pp>__">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="plant-replicates" label="plant replicates" probability="30" transition="p_>pp">
   ***
   *_*
   ***
</rule-dcc-cell-pair>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>
<dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>

<dcc-slider variable="replicate" value="30" index>Chance de se multiplicar</dcc-slider>
<dcc-slider variable="die" value="15" index>Chance de morrer</dcc-slider>

<dcc-timer cycles="1000" interval="500" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
<subscribe-dcc target="plant-replicates" topic="var/replicate/changed" role="probability"></subscribe-dcc>
<subscribe-dcc target="plant-dies" topic="var/die/changed" role="probability"></subscribe-dcc>
~~~

~~~html
<dcc-space-cellular id="cellular-space" cell-width="32" cell-height="32" background-color="#aaffaa">
________h_____p____h
_____p____p____r____
________w________h__
h____pwwwww___p_____
___p_wwwwwww________
____h__wwwwwpp__p___
__p______wwr_____r__
____________p_______
_h_____r______h_____
</dcc-space-cellular>

<dcc-cell-color type="w" label="water" color="#0000ff"></dcc-cell-color>
<dcc-cell-image type="r" label="rock" image="images/cell/rock01.svg"></dcc-cell-image>
<dcc-cell-image type="p" label="plant" image="images/cell/plant01.svg"></dcc-cell-image>
<dcc-cell-image type="h" label="herbivore" image="images/cell/brontosaurus.svg">
</dcc-cell-image>

<rule-dcc-cell-pair id="plant-dies" label="plant dies" probability="15" transition="pp>__">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="plant-replicates" label="plant replicates" probability="70" transition="p_>pp">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="herbivore-dies" label="herbivore dies" probability="10" transition="hh>__">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="herbivore-replicates" label="herbivore eat and replicates"
                    probability="25" transition="hp>hh">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="herbivore moves" probability="50" transition="h_>_h">
   ***
   *_*
   ***
</rule-dcc-cell-pair>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>
<dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>

<dcc-slider variable="plant_replicates" value="70" index>Chance da planta se multiplicar</dcc-slider>
<dcc-slider variable="plant_dies" value="15" index>Chance da planta morrer</dcc-slider>
<dcc-slider variable="herbivore_replicates" value="25" index>Chance do herbívoro se multiplicar</dcc-slider>
<dcc-slider variable="herbivore_dies" value="10" index>Chance do herbívoro morrer</dcc-slider>

<dcc-timer cycles="1000" interval="500" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
<subscribe-dcc target="plant-replicates" topic="var/plant_replicates/changed" role="probability">
</subscribe-dcc>
<subscribe-dcc target="plant-dies" topic="var/plant_dies/changed" role="probability"></subscribe-dcc>
<subscribe-dcc target="herbivore-replicates" topic="var/herbivore_replicates/changed" role="probability">
</subscribe-dcc>
<subscribe-dcc target="herbivore-dies" topic="var/herbivore_dies/changed" role="probability">
</subscribe-dcc>
~~~

~~~html
<dcc-space-cellular id="cellular-space" cell-width="32" cell-height="32" background-color="#aaffaa">
________h_____p____h
___c_p____p____r____
_____c__w________h__
h____pwwwww___p_____
___p_wwwwwww____c___
____h__wwwwwpp__p___
__p__c___wwr_____r__
____________p_______
_h_____r___c__h_____
</dcc-space-cellular>

<dcc-cell-color type="w" label="water" color="#0000ff"></dcc-cell-color>
<dcc-cell-image type="r" label="rock" image="images/cell/rock01.svg"></dcc-cell-image>
<dcc-cell-image type="p" label="plant" image="images/cell/plant01.svg"></dcc-cell-image>
<dcc-cell-image type="h" label="herbivore" image="images/cell/brontosaurus.svg">
</dcc-cell-image>
<dcc-cell-image type="c" label="carnivore" image="images/cell/carnivorous-dinosaur.svg">
</dcc-cell-image>

<rule-dcc-cell-pair id="plant-dies" label="plant dies" probability="15" transition="pp>__">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="plant-replicates" label="plant replicates" probability="70" transition="p_>pp">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="herbivore-dies" label="herbivore dies" probability="10" transition="hh>__">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="herbivore-replicates" label="herbivore eat and replicates"
                    probability="25" transition="hp>hh">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="herbivore moves" probability="50" transition="h_>_h">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="carnivore-dies" label="carnivore dies" probability="10" transition="cc>__">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="carnivore-replicates" label="carnivore eat and replicates"
                    probability="25" transition="ch>cc">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="carnivore moves" probability="50" transition="c_>_c">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="carnivore moves" probability="50" transition="cp>pc">
   ***
   *_*
   ***
</rule-dcc-cell-pair>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>
<dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>

<dcc-slider variable="plant_replicates" value="70" index>Chance da planta se multiplicar</dcc-slider>
<dcc-slider variable="plant_dies" value="15" index>Chance da planta morrer</dcc-slider>
<dcc-slider variable="herbivore_replicates" value="25" index>Chance do herbívoro se multiplicar</dcc-slider>
<dcc-slider variable="herbivore_dies" value="10" index>Chance do herbívoro morrer</dcc-slider>
<dcc-slider variable="carnivore_replicates" value="25" index>Chance do carnívoro se multiplicar</dcc-slider>
<dcc-slider variable="carnivore_dies" value="10" index>Chance do carnívoro morrer</dcc-slider>

<dcc-timer cycles="1000" interval="500" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
<subscribe-dcc target="plant-replicates" topic="var/plant_replicates/changed" role="probability">
</subscribe-dcc>
<subscribe-dcc target="plant-dies" topic="var/plant_dies/changed" role="probability"></subscribe-dcc>
<subscribe-dcc target="herbivore-replicates" topic="var/herbivore_replicates/changed" role="probability">
</subscribe-dcc>
<subscribe-dcc target="herbivore-dies" topic="var/herbivore_dies/changed" role="probability">
</subscribe-dcc>
<subscribe-dcc target="carnivore-replicates" topic="var/carnivore_replicates/changed" role="probability">
</subscribe-dcc>
<subscribe-dcc target="carnivore-dies" topic="var/carnivore_dies/changed" role="probability">
</subscribe-dcc>
~~~

~~~html
<dcc-space-cellular-editor id="cellular-space" cell-width="32" cell-height="32" background-color="#aaffaa">
________h_____p____h
___c_p____p____r____
_____c__w________h__
h____pwwwww___p_____
___p_wwwwwww____c___
____h__wwwwwpp__p___
__p__c___wwr_____r__
____________p_______
_h_____r___c__h_____
</dcc-space-cellular-editor>

<dcc-cell-color type="w" label="water" color="#0000ff"></dcc-cell-color>
<dcc-cell-image type="r" label="rock" image="images/cell/rock01.svg"></dcc-cell-image>
<dcc-cell-image type="p" label="plant" image="images/cell/plant01.svg"></dcc-cell-image>
<dcc-cell-image type="h" label="herbivore" image="images/cell/brontosaurus.svg">
</dcc-cell-image>
<dcc-cell-image type="c" label="carnivore" image="images/cell/carnivorous-dinosaur.svg">
</dcc-cell-image>

<rule-dcc-cell-pair id="plant-dies" label="plant dies" probability="15" transition="pp>__">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="plant-replicates" label="plant replicates" probability="70" transition="p_>pp">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="herbivore-dies" label="herbivore dies" probability="10" transition="hh>__">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="herbivore-replicates" label="herbivore eat and replicates"
                    probability="25" transition="hp>hh">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="herbivore moves" probability="50" transition="h_>_h">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="carnivore-dies" label="carnivore dies" probability="10" transition="cc>__">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="carnivore-replicates" label="carnivore eat and replicates"
                    probability="25" transition="ch>cc">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="carnivore moves" probability="50" transition="c_>_c">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="carnivore moves" probability="50" transition="cp>pc">
   ***
   *_*
   ***
</rule-dcc-cell-pair>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>
<dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>

<dcc-trigger label="Nada" action="type/empty"></dcc-trigger>
<dcc-trigger label="Água" action="type/water"></dcc-trigger>
<dcc-trigger label="Pedra" action="type/rock"></dcc-trigger>
<dcc-trigger label="Planta" action="type/plant"></dcc-trigger>
<dcc-trigger label="Carnívoro" action="type/carnivore"></dcc-trigger>
<dcc-trigger label="Herbívoro" action="type/herbivore"></dcc-trigger>

<dcc-slider variable="plant_replicates" value="70" index>Chance da planta se multiplicar</dcc-slider>
<dcc-slider variable="plant_dies" value="15" index>Chance da planta morrer</dcc-slider>
<dcc-slider variable="herbivore_replicates" value="25" index>Chance do herbívoro se multiplicar</dcc-slider>
<dcc-slider variable="herbivore_dies" value="10" index>Chance do herbívoro morrer</dcc-slider>
<dcc-slider variable="carnivore_replicates" value="25" index>Chance do carnívoro se multiplicar</dcc-slider>
<dcc-slider variable="carnivore_dies" value="10" index>Chance do carnívoro morrer</dcc-slider>

<dcc-timer cycles="1000" interval="500" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
<subscribe-dcc target="plant-replicates" topic="var/plant_replicates/changed" role="probability">
</subscribe-dcc>
<subscribe-dcc target="plant-dies" topic="var/plant_dies/changed" role="probability"></subscribe-dcc>
<subscribe-dcc target="herbivore-replicates" topic="var/herbivore_replicates/changed" role="probability">
</subscribe-dcc>
<subscribe-dcc target="herbivore-dies" topic="var/herbivore_dies/changed" role="probability">
</subscribe-dcc>
<subscribe-dcc target="carnivore-replicates" topic="var/carnivore_replicates/changed" role="probability">
</subscribe-dcc>
<subscribe-dcc target="carnivore-dies" topic="var/carnivore_dies/changed" role="probability">
</subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="type/#" role="type"></subscribe-dcc>
~~~

~~~html
<div style="width: 100%; display:flex; flex-direction:row">

<div style="flex:50%">
<dcc-space-cellular-editor id="cellular-space" label="sand clock" cell-width="6" cell-height="6">
#############################################
#...........................................#
#...........................................#
#...........................................#
#...........................................#
##.........................................##
_#.........................................#_
_##.......................................##_
__#.......................................#__
__##.....................................##__
___#.....................................#___
___##...................................##___
____#...................................#____
____##.................................##____
_____##...............................##_____
______##.............................##______
_______##...........................##_______
________##.........................##________
_________##.......................##_________
__________##.....................##__________
___________###.................###___________
_____________###.............###_____________
_______________###.........###_______________
_________________###.....###_________________
___________________##___##___________________
___________________##___##___________________
_________________###_____###_________________
_______________###_________###_______________
_____________###_____________###_____________
___________###_________________###___________
__________##_____________________##__________
_________##_______________________##_________
________##_________________________##________
_______##___________________________##_______
______##_____________________________##______
_____##_______________________________##_____
____##_________________________________##____
____#___________________________________#____
___##___________________________________##___
___#_____________________________________#___
__##_____________________________________##__
__#_______________________________________#__
_##_______________________________________##_
_#_________________________________________#_
##_________________________________________##
#___________________________________________#
#___________________________________________#
#___________________________________________#
#___________________________________________#
#############################################
</dcc-space-cellular-editor>

<dcc-cell-color type="#" label="glass" color="#57c86e"></dcc-cell-color>

<dcc-cell-color type="." label="sand" color="#7f8395"></dcc-cell-color>
<rule-dcc-cell-pair id="fall-vertical" label="fall vertical" probability="100" transition="._>_.">
___
___
_*_
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="fall-oblique" label="fall oblique" probability="90" transition="._>_.">
___
___
*_*
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="roll" label="roll" probability="40" transition="._>_.">
___
*_*
___
</rule-dcc-cell-pair>

<div>
   <dcc-trigger label="Próximo" action="state/next"></dcc-trigger>
   <dcc-trigger label="Play" action="timer/start"></dcc-trigger>
   <dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>
   <dcc-trigger label="Gravar" action="state/save"></dcc-trigger>
   <dcc-trigger label="Ler" action="state/load"></dcc-trigger>
   <dcc-trigger label="Baixar" action="state/download"></dcc-trigger>
</div>
</div>

<div style="flex:50%">
Selecione um dos ícones abaixo para editar o ambiente:
<div style="flex:48px; max-height:48px; display:flex; flex-direction:row; border:2px">
   <div style="flex:10%; max-width:48px; max-height:48px; margin-right:10px">
      <dcc-trigger label="Vidro" action="type/glass"
                   image="images/cell/glass.svg">
      </dcc-trigger>
   </div>
   <div style="flex:10%; max-width:48px; max-height:48px; margin-right:10px">
      <dcc-trigger label="Areia" action="type/sand"
                   image="images/cell/sand.svg">
      </dcc-trigger>
   </div>
   <div style="flex:10%; max-width:48px; max-height:48px; margin-right:10px">
      <dcc-trigger label="Nada" action="type/empty"
                   image="images/cell/cell-yellow.svg">
      </dcc-trigger>
   </div>
</div>

Selecione abaixo a chance de cada um dos eventos:
<div style="flex:48px; max-height:48px; display:flex; flex-direction:row">
   <div style="flex:20%; max-width:96px; max-height:48px">
      <img style="max-width:96px; max-height:48px; margin-left:40px; margin-right:40px"
           src="images/cell/arrow-down.svg">
   </div>
   <div style="flex:50%; max-height:48px; margin-right:10px">
      <dcc-slider variable="fall_vertical" value="100" index></dcc-slider>
   </div>
</div>
<div style="flex:48px; max-height:48px; display:flex; flex-direction:row">
   <img src="images/cell/arrow-left-oblique.svg" style="flex:10%; max-width:48px; max-height:48px">
   <img src="images/cell/arrow-right-oblique.svg" style="flex:10%; max-width:48px; max-height:48px">
   <div style="flex:50%; max-height:48px; margin-right:10px">
      <dcc-slider variable="fall_oblique" value="90" index></dcc-slider>
   </div>
</div>
<div style="flex:48px; max-height:48px; display:flex; flex-direction:row">
   <img src="images/cell/arrow-left.svg" style="flex:10%; max-width:48px; max-height:48px">
   <img src="images/cell/arrow-right.svg" style="flex:10%; max-width:48px; max-height:48px">
   <div style="flex:50%; max-height:48px; margin-right:10px">
      <dcc-slider variable="roll" value="40" index></dcc-slider>
   </div>
</div>

<dcc-timer cycles="800" interval="50" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="type/#" role="type"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/save" role="save"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/load" role="load"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/download" role="download"></subscribe-dcc>
<subscribe-dcc target="fall-vertical" topic="var/fall_vertical/changed" role="probability"></subscribe-dcc>
<subscribe-dcc target="fall-oblique" topic="var/fall_oblique/changed" role="probability"></subscribe-dcc>
<subscribe-dcc target="roll" topic="var/roll/changed" role="probability"></subscribe-dcc>

</div>
</div>
~~~

~~~html
<div style="width: 100%; display:flex; flex-direction:row">

<div style="flex:50%">
<dcc-space-cellular-editor id="cellular-space" cell-width="32" cell-height="32" background-color="#aaffaa">
________h________c__
____p_______p_______
________h_____p____h
___c_p____p____r____
_____c__w________h__
h____pwwwww___p_____
___p_wwwwwww____c___
____h__wwwwwpp__p___
__p__c___wwr_____r__
____________p_______
_h_____r___c__h_____
___ppp___________r__
___________p________
_____h______________
</dcc-space-cellular-editor>

<dcc-cell-color type="w" label="water" color="#0000ff"></dcc-cell-color>
<dcc-cell-image type="r" label="rock" image="images/cell/rock01.svg"></dcc-cell-image>
<dcc-cell-image type="p" label="plant" image="images/cell/plant01.svg"></dcc-cell-image>
<dcc-cell-image type="h" label="herbivore" image="images/cell/brontosaurus.svg">
</dcc-cell-image>
<dcc-cell-image type="c" label="carnivore" image="images/cell/carnivorous-dinosaur.svg">
</dcc-cell-image>

<rule-dcc-cell-pair id="plant-dies" label="plant dies" probability="15" transition="pp>__">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="plant-replicates" label="plant replicates" probability="70" transition="p_>pp">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="herbivore-dies" label="herbivore dies" probability="10" transition="hh>__">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="herbivore-replicates" label="herbivore eat and replicates"
                    probability="25" transition="hp>hh">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="herbivore moves" probability="50" transition="h_>_h">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="carnivore-dies" label="carnivore dies" probability="10" transition="cc>__">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="carnivore-replicates" label="carnivore eat and replicates"
                    probability="25" transition="ch>cc">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="carnivore moves" probability="50" transition="c_>_c">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="carnivore moves" probability="50" transition="cp>pc">
   ***
   *_*
   ***
</rule-dcc-cell-pair>

<div>
   <dcc-trigger label="Próximo" action="state/next"></dcc-trigger>
   <dcc-trigger label="Play" action="timer/start"></dcc-trigger>
   <dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>
   <dcc-trigger label="Gravar" action="state/save"></dcc-trigger>
   <dcc-trigger label="Ler" action="state/load"></dcc-trigger>
   <dcc-trigger label="Baixar" action="state/download"></dcc-trigger>
</div>
</div>

<div style="flex:50%">
Selecione um dos ícones abaixo para editar o ambiente:
<div style="flex:48px; max-height:48px; display:flex; flex-direction:row; border:2px">
   <div style="flex:10%; max-width:48px; max-height:48px; margin-right:10px">
      <dcc-trigger label="Água" action="type/water"
                   image="images/cell/waves.svg">
      </dcc-trigger>
   </div>
   <div style="flex:10%; max-width:48px; max-height:48px; margin-right:10px">
      <dcc-trigger label="Rocha" action="type/rock"
                   image="images/cell/rock01.svg">
      </dcc-trigger>
   </div>
   <div style="flex:10%; max-width:48px; max-height:48px; margin-right:10px">
      <dcc-trigger label="Planta" action="type/plant"
                   image="images/cell/plant01.svg">
      </dcc-trigger>
   </div>
   <div style="flex:10%; max-width:48px; max-height:48px; margin-right:10px">
      <dcc-trigger label="Herbívoro" action="type/herbivore"
                   image="images/cell/brontosaurus.svg">
      </dcc-trigger>
   </div>
   <div style="flex:10%; max-width:48px; max-height:48px; margin-right:10px">
      <dcc-trigger label="Carnívoro" action="type/carnivore"
                   image="images/cell/carnivorous-dinosaur.svg">
      </dcc-trigger>
   </div>
   <div style="flex:10%; max-width:48px; max-height:48px; margin-right:10px">
      <dcc-trigger label="Nada" action="type/empty"
                   image="images/cell/cell-green.svg">
      </dcc-trigger>
   </div>
</div>

Selecione abaixo a chance de cada um dos eventos:
<div style="flex:48px; max-height:48px; display:flex; flex-direction:row">
   <img src="images/cell/plant01.svg" style="flex:10%; max-width:48px; max-height:48px">
   <img src="images/cell/plant01.svg" style="flex:10%; max-width:48px; max-height:48px">
   <div style="flex:50%; max-height:48px; margin-right:10px">
      <dcc-slider variable="plant_replicates" value="70" index></dcc-slider>
   </div>
</div>
<div style="flex:48px; max-height:48px; display:flex; flex-direction:row">
   <div style="flex:20%; max-width:96px; max-height:48px">
      <img style="max-width:96px; max-height:48px; margin-left:24px; margin-right:24px"
           src="images/cell/plant-dies.svg">
   </div>
   <div style="flex:50%; max-height:48px; margin-right:10px">
      <dcc-slider variable="plant_dies" value="15" index></dcc-slider>
   </div>
</div>
<div style="flex:48px; max-height:48px; display:flex; flex-direction:row">
   <img src="images/cell/brontosaurus.svg" style="flex:10%; max-width:48px; max-height:48px">
   <img src="images/cell/brontosaurus.svg" style="flex:10%; max-width:48px; max-height:48px">
   <div style="flex:50%; max-height:48px; margin-right:10px">
      <dcc-slider variable="herbivore_replicates" value="25" index></dcc-slider>
   </div>
</div>
<div style="flex:48px; max-height:48px; display:flex; flex-direction:row">
   <div style="flex:20%; max-width:96px; max-height:48px">
      <img style="max-width:96px; max-height:48px; margin-left:24px; margin-right:24px"
           src="images/cell/brontosaurus-dies.svg" style="flex:10%; max-width:48px; max-height:48px">
   </div>
   <div style="flex:50%; max-height:48px; margin-right:10px">
      <dcc-slider variable="herbivore_dies" value="10" index></dcc-slider>
   </div>
</div>
<div style="flex:48px; max-height:48px; display:flex; flex-direction:row">
   <img src="images/cell/carnivorous-dinosaur.svg" style="flex:10%; max-width:48px; max-height:48px">
   <img src="images/cell/carnivorous-dinosaur.svg" style="flex:10%; max-width:48px; max-height:48px">
   <div style="flex:50%; max-height:48px; margin-right:10px">
      <dcc-slider variable="carnivore_replicates" value="25" index></dcc-slider>
   </div>
</div>
<div style="flex:48px; max-height:48px; display:flex; flex-direction:row">
   <div style="flex:20%; max-width:96px; max-height:48px">
      <img style="max-width:96px; max-height:48px; margin-left:24px; margin-right:24px"
           src="images/cell/carnivorous-dinosaur-dies.svg" style="flex:10%; max-width:48px; max-height:48px">
   </div>
   <div style="flex:50%; max-height:48px; margin-right:10px">
      <dcc-slider variable="carnivore_dies" value="10" index></dcc-slider>
   </div>
</div>

<dcc-timer cycles="100000" interval="500" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
<subscribe-dcc target="plant-replicates" topic="var/plant_replicates/changed" role="probability">
</subscribe-dcc>
<subscribe-dcc target="plant-dies" topic="var/plant_dies/changed" role="probability"></subscribe-dcc>
<subscribe-dcc target="herbivore-replicates" topic="var/herbivore_replicates/changed" role="probability">
</subscribe-dcc>
<subscribe-dcc target="herbivore-dies" topic="var/herbivore_dies/changed" role="probability">
</subscribe-dcc>
<subscribe-dcc target="carnivore-replicates" topic="var/carnivore_replicates/changed" role="probability">
</subscribe-dcc>
<subscribe-dcc target="carnivore-dies" topic="var/carnivore_dies/changed" role="probability">
</subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="type/#" role="type"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/save" role="save"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/load" role="load"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/download" role="download"></subscribe-dcc>

</div>
</div>
~~~

~~~html
<div style="width: 100%; display:flex; flex-direction:row">

<div style="flex:50%">

<dcc-space-cellular-editor id="cellular-space" rows="30" cols="30" cell-width="10" cell-height="10" grid>
_
_
____________####
__________###__###
_________##______##
______####___w____###
_____##_____________######
__####___________________##
_###############__________##
_#_________________________#
##_________________________##
#___________________________#
##_________________________##
_#_________________________#
_##########__________#######
__________##________##
_______####__________####
_______#________________##
_______###_____________##
_________#####______####
_____________########
</dcc-space-cellular-editor>

<dcc-cell-color type="w" label="water" color="#0000ff" opacity="10">
  <property-dcc name="value" initial="500"></property-dcc>
</dcc-cell-color>
<dcc-cell-color type="#" label="wall" color="#9b3234"></dcc-cell-color>
<rule-dcc-cell-flow label="spread random 1" probability="100" transition="w_>ww" flow="-1">
   ***
   *_*
   ***
</rule-dcc-cell-flow>
<rule-dcc-cell-flow label="spread random 2" probability="100" transition="ww>ww" flow="-+">
   ***
   *_*
   ***
</rule-dcc-cell-flow>

<div>
   <dcc-trigger label="Próximo" action="state/next"></dcc-trigger>
   <dcc-trigger label="Play" action="timer/start"></dcc-trigger>
   <dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>
   <dcc-trigger label="Gravar" action="state/save"></dcc-trigger>
   <dcc-trigger label="Ler" action="state/load"></dcc-trigger>
   <dcc-trigger label="Baixar" action="state/download"></dcc-trigger>
</div>
</div>

<div style="flex:50%">
Selecione um dos ícones abaixo para editar o ambiente:
<div style="flex:48px; max-height:48px; display:flex; flex-direction:row; border:2px">
   <div style="flex:10%; max-width:48px; max-height:48px; margin-right:10px">
      <dcc-trigger label="Água" action="type/water"
                   image="images/cell/waves.svg">
      </dcc-trigger>
   </div>
   <div style="flex:10%; max-width:48px; max-height:48px; margin-right:10px">
      <dcc-trigger label="Parede" action="type/wall"
                   image="images/cell/wall.svg">
      </dcc-trigger>
   </div>
   <div style="flex:10%; max-width:48px; max-height:48px; margin-right:10px">
      <dcc-trigger label="Nada" action="type/empty"
                   image="images/cell/cell-yellow.svg">
      </dcc-trigger>
   </div>
</div>

<dcc-timer cycles="500" interval="100" publish="state/next">
   <subscribe-dcc topic="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="type/#" role="type"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/next" role="next"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/save" role="save"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/load" role="load"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/download" role="download"></subscribe-dcc>

</div>
</div>
~~~
