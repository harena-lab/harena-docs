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

<dcc-cell-image type="r" label="rock" image="images/cell/rock01.svg">
   <rule-dcc-cell-neighbor label="fall" probability="100" new-source="_" old-target="_" new-target="r">
   ___
   ___
   _*_
   </rule-dcc-cell-neighbor>
</dcc-cell-image>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<subscribe-dcc target="cellular-space" message="state/next" role="next"></subscribe-dcc>
~~~

~~~html
<dcc-space-cellular id="cellular-space" rows="5" grid>
r__r_r
__r_r_
</dcc-space-cellular>

<dcc-cell-image type="r" label="rock" image="images/cell/rock01.svg">
   <rule-dcc-cell-neighbor label="fall" probability="100" new-source="_" old-target="_" new-target="r">
   ___
   ___
   _*_
   </rule-dcc-cell-neighbor>
</dcc-cell-image>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>

<dcc-timer cycles="10" interval="1000" publish="state/next">
   <subscribe-dcc message="timer/start" role="start"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" message="state/next" role="next"></subscribe-dcc>
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
   <rule-dcc-cell-neighbor label="fall" probability="100" new-source="_" old-target="_" new-target="r">
   ___
   ___
   _*_
   </rule-dcc-cell-neighbor>
</dcc-cell-image>

<dcc-cell-image type="t" label="tree" image="images/cell/tree01.svg"></dcc-cell-image>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>

<dcc-timer cycles="10" interval="1000" publish="state/next">
   <subscribe-dcc message="timer/start" role="start"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" message="state/next" role="next"></subscribe-dcc>
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

<dcc-cell-color type="." label="sand" color="#ff0000">
   <rule-dcc-cell-neighbor label="fall vertical"
      probability="100" new-source="_" old-target="_" new-target=".">
   ___
   ___
   _*_
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="fall oblique"
      probability="90" new-source="_" old-target="_" new-target=".">
   ___
   ___
   *_*
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="roll"
      probability="40" new-source="_" old-target="_" new-target=".">
   ___
   *_*
   ___
   </rule-dcc-cell-neighbor>
</dcc-cell-color>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>

<dcc-timer cycles="10" interval="1000" publish="state/next">
   <subscribe-dcc message="timer/start" role="start"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" message="state/next" role="next"></subscribe-dcc>
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

<dcc-cell-color type="." label="sand" color="#ff0000">
   <rule-dcc-cell-neighbor label="fall vertical"
      probability="100" new-source="_" old-target="_" new-target=".">
   ___
   ___
   _*_
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="fall oblique"
      probability="90" new-source="_" old-target="_" new-target=".">
   ___
   ___
   *_*
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="roll"
      probability="40" new-source="_" old-target="_" new-target=".">
   ___
   *_*
   ___
   </rule-dcc-cell-neighbor>
</dcc-cell-color>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>
<dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>

<dcc-timer cycles="800" interval="50" publish="state/next">
   <subscribe-dcc message="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc message="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" message="state/next" role="next"></subscribe-dcc>
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
   <rule-dcc-cell-neighbor label="replicate"
      probability="30" new-source="#" old-target="_" new-target="#">
   ***
   *_*
   ***
   </rule-dcc-cell-neighbor>
</dcc-cell-image>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>
<dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>

<dcc-timer cycles="100" interval="500" publish="state/next">
   <subscribe-dcc message="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc message="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" message="state/next" role="next"></subscribe-dcc>
~~~

### Replication - Production
~~~html
<dcc-space-cellular id="cellular-space" rows="10" grid>
__###__####__####____###
</dcc-space-cellular>

<dcc-cell-color type="#" label="cloud" color="#ffffff">
   <rule-dcc-cell-neighbor label="produce rain"
      probability="10" new-source="#" old-target="_" new-target=".">
   ___
   ___
   _*_
   </rule-dcc-cell-neighbor>
</dcc-cell-color>

<dcc-cell-color type="." label="rain" color="#0000ff">
   <rule-dcc-cell-neighbor label="fall rain"
      probability="100" new-source="_" old-target="_" new-target=".">
   ___
   ___
   _*_
   </rule-dcc-cell-neighbor>
</dcc-cell-color>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>

<dcc-timer cycles="10" interval="1000" publish="state/next">
   <subscribe-dcc message="timer/start" role="start"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" message="state/next" role="next"></subscribe-dcc>
~~~

One drop per cloud.

~~~html
<dcc-space-cellular id="cellular-space" rows="10" grid>
__###__####__####____###
</dcc-space-cellular>

<dcc-cell-color type="#" label="cloud" color="#ffffff">
   <rule-dcc-cell-neighbor label="produce rain"
      probability="10" new-source="e" old-target="_" new-target=".">
   ___
   ___
   _*_
   </rule-dcc-cell-neighbor>
</dcc-cell-color>

<dcc-cell-color type="e" label="cloud empty" color="#ffffff">
</dcc-cell-color>

<dcc-cell-color type="." label="rain" color="#0000ff">
   <rule-dcc-cell-neighbor label="fall rain"
      probability="100" new-source="_" old-target="_" new-target=".">
   ___
   ___
   _*_
   </rule-dcc-cell-neighbor>
</dcc-cell-color>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>

<dcc-timer cycles="10" interval="1000" publish="state/next">
   <subscribe-dcc message="timer/start" role="start"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" message="state/next" role="next"></subscribe-dcc>
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
   <rule-dcc-cell-neighbor label="death"
      probability="10" new-source="_" old-target="#" new-target="_">
   ___
   _*_
   ___
   </rule-dcc-cell-neighbor>
</dcc-cell-image>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>
<dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>

<dcc-timer cycles="100" interval="500" publish="state/next">
   <subscribe-dcc message="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc message="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" message="state/next" role="next"></subscribe-dcc>
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

<dcc-cell-image type="c" label="cyanobacteria" image="images/cell/cyanobacteria.svg"></dcc-cell-image>

<dcc-cell-image type="a" label="amoeba" image="images/cell/amoeba.svg">
   <rule-dcc-cell-neighbor rule="eat"
      probability="50" new-source="_" old-target="c" new-target="a">
   ***
   *_*
   ***
   </rule-dcc-cell-neighbor>
</dcc-cell-image>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>
<dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>

<dcc-timer cycles="100" interval="500" publish="state/next">
   <subscribe-dcc message="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc message="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" message="state/next" role="next"></subscribe-dcc>
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
   <rule-dcc-cell-neighbor label="cyanobacteria replication"
      probability="30" new-source="c" old-target="_" new-target="c">
   ***
   *_*
   ***
   </rule-dcc-cell-neighbor>
</dcc-cell-image>

<dcc-cell-image type="a" label="amoeba" image="images/cell/amoeba.svg">
   <rule-dcc-cell-neighbor label="amoeba replication"
      probability="5" new-source="a" old-target="_" new-target="a">
   ***
   *_*
   ***
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="eat"
      probability="50" new-source="_" old-target="c" new-target="a">
   ***
   *_*
   ***
   </rule-dcc-cell-neighbor>
</dcc-cell-image>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>
<dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>

<dcc-timer cycles="100" interval="500" publish="state/next">
   <subscribe-dcc message="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc message="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" message="state/next" role="next"></subscribe-dcc>
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

<dcc-cell-color type="w" color="#0000ff"></dcc-cell-color>
<dcc-cell-image type="r" image="images/cell/rock01.svg"></dcc-cell-image>
<dcc-cell-image type="t" image="images/cell/tree01.svg"></dcc-cell-image>

<dcc-cell-image type="c" label="carnivore" image="images/cell/carnivorous-dinosaur.svg">
   <rule-dcc-cell-neighbor label="carnivore eatd and replicates"
      probability="30" new-source="c" old-target="h" new-target="c">
   ***
   *_*
   ***
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="carnivore moves"
      probability="50" new-source="_" old-target="_" new-target="c">
   ***
   *_*
   ***
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="carnivore dies"
      probability="10" new-source="_" old-target="c" new-target="_">
   ___
   _*_
   ___
   </rule-dcc-cell-neighbor>
</dcc-cell-image>

<dcc-cell-image type="h" label="herbivore" image="images/cell/brontosaurus.svg">
   <rule-dcc-cell-neighbor label="herbivore replicates"
      probability="50" new-source="h" old-target="_" new-target="h">
   ***
   *_*
   ***
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="herbivore moves"
      probability="50" new-source="_" old-target="_" new-target="h">
   ***
   *_*
   ***
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="herbivore dies"
      probability="10" new-source="_" old-target="h" new-target="_">
   ___
   _*_
   ___
   </rule-dcc-cell-neighbor>
</dcc-cell-image>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>
<dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>

<dcc-timer cycles="1000" interval="500" publish="state/next">
   <subscribe-dcc message="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc message="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" message="state/next" role="next"></subscribe-dcc>
~~~

## Random Walk

~~~html
<dcc-space-cellular id="cellular-space" rows="50" cols="50" cell-width="7" cell-height="7" grid>
#______________________#
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

<dcc-cell-color type="#" label="boid" color="#ff0000">
   <rule-dcc-cell-neighbor label="move random"
      probability="100" new-source="_" old-target="_" new-target="#">
   ***
   *_*
   ***
   </rule-dcc-cell-neighbor>
</dcc-cell-color>


<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>

<dcc-timer cycles="100" interval="100" publish="state/next">
   <subscribe-dcc message="timer/start" role="start"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" message="state/next" role="next"></subscribe-dcc>
~~~

~~~html
<dcc-space-cellular id="cellular-space" rows="50" cols="50" cell-width="7" cell-height="7" grid>
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

<dcc-cell-color type="u" label="up" color="#ff0000">
   <rule-dcc-cell-neighbor label="move up"
      probability="100" new-source="_" old-target="_" new-target="u">
   _*_
   ___
   ___
   </rule-dcc-cell-neighbor>
</dcc-cell-color>

<dcc-cell-color type="d" label="down" color="#00ff00">
   <rule-dcc-cell-neighbor label="move down"
      probability="100" new-source="_" old-target="_" new-target="d">
   ___
   ___
   _*_
   </rule-dcc-cell-neighbor>
</dcc-cell-color>

<dcc-cell-color type="l" label="left" color="#0000ff">
   <rule-dcc-cell-neighbor label="move left"
      probability="100" new-source="_" old-target="_" new-target="l">
   ___
   *__
   ___
   </rule-dcc-cell-neighbor>
</dcc-cell-color>

<dcc-cell-color type="r" label="right" color="#ff00ff">
   <rule-dcc-cell-neighbor label="move right"
      probability="100" new-source="_" old-target="_" new-target="r">
   _*_
   ___
   ___
   </rule-dcc-cell-neighbor>
</dcc-cell-color>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>

<dcc-timer cycles="100" interval="100" publish="state/next">
   <subscribe-dcc message="timer/start" role="start"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" message="state/next" role="next"></subscribe-dcc>
~~~

~~~html
<dcc-space-cellular id="cellular-space" rows="50" cols="50" cell-width="7" cell-height="7" grid>
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

<dcc-cell-color type="u" label="up" color="#ff0000">
   <rule-dcc-cell-neighbor label="turn down"
      probability="5" new-source="d" old-target="u" new-target="d">
   ___
   _*_
   ___
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="turn left"
      probability="5" new-source="l" old-target="u" new-target="l">
   ___
   _*_
   ___
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="turn right"
      probability="5" new-source="r" old-target="u" new-target="r">
   ___
   _*_
   ___
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="move up"
      probability="100" new-source="_" old-target="_" new-target="u">
   _*_
   ___
   ___
   </rule-dcc-cell-neighbor>
</dcc-cell-color>

<dcc-cell-color type="d" label="down" color="#00ff00">
   <rule-dcc-cell-neighbor label="turn up"
      probability="5" new-source="u" old-target="d" new-target="u">
   ___
   _*_
   ___
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="turn left"
      probability="5" new-source="l" old-target="d" new-target="l">
   ___
   _*_
   ___
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="turn right"
      probability="5" new-source="r" old-target="d" new-target="r">
   ___
   _*_
   ___
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="move down"
      probability="100" new-source="_" old-target="_" new-target="d">
   ___
   ___
   _*_
   </rule-dcc-cell-neighbor>
</dcc-cell-color>

<dcc-cell-color type="l" label="left" color="#0000ff">
   <rule-dcc-cell-neighbor label="turn up"
      probability="5" new-source="u" old-target="l" new-target="u">
   ___
   _*_
   ___
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="turn down"
      probability="5" new-source="d" old-target="l" new-target="d">
   ___
   _*_
   ___
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="turn right"
      probability="5" new-source="r" old-target="l" new-target="r">
   ___
   _*_
   ___
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="move left"
      probability="100" new-source="_" old-target="_" new-target="l">
   ___
   *__
   ___
   </rule-dcc-cell-neighbor>
</dcc-cell-color>

<dcc-cell-color type="r" label="right" color="#ff00ff">
   <rule-dcc-cell-neighbor label="turn up"
      probability="5" new-source="u" old-target="r" new-target="u">
   ___
   _*_
   ___
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="turn down"
      probability="5" new-source="d" old-target="r" new-target="d">
   ___
   _*_
   ___
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="turn left"
      probability="5" new-source="l" old-target="r" new-target="l">
   ___
   _*_
   ___
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="move right"
      probability="100" new-source="_" old-target="_" new-target="r">
   ___
   __*
   ___
   </rule-dcc-cell-neighbor>
</dcc-cell-color>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>

<dcc-timer cycles="100" interval="100" publish="state/next">
   <subscribe-dcc message="timer/start" role="start"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" message="state/next" role="next"></subscribe-dcc>
~~~

Clustering Effect
~~~html
<dcc-space-cellular id="cellular-space" rows="50" cell-width="7" cell-height="7" grid>
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

<dcc-cell-color type="u" label="up" color="#ff0000">
   <rule-dcc-cell-neighbor label="follow down"
      probability="100" new-source="d" old-target="d" new-target="d">
   ***
   *_*
   ***
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="follow left"
      probability="100" new-source="l" old-target="l" new-target="l">
   ***
   *_*
   ***
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="follow right"
      probability="100" new-source="r" old-target="r" new-target="r">
   ***
   *_*
   ***
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="turn down"
      probability="1" new-source="d" old-target="d" new-target="d">
   ***
   *_*
   ***
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="turn down"
      probability="1" new-source="d" old-target="u" new-target="d">
   ___
   _*_
   ___
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="turn left"
      probability="1" new-source="l" old-target="u" new-target="l">
   ___
   _*_
   ___
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="turn right"
      probability="1" new-source="r" old-target="u" new-target="r">
   ___
   _*_
   ___
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="move up"
      probability="100" new-source="_" old-target="_" new-target="u">
   _*_
   ___
   ___
   </rule-dcc-cell-neighbor>
</dcc-cell-color>

<dcc-cell-color type="d" label="down" color="#00ff00">
   <rule-dcc-cell-neighbor label="follow up"
      probability="100" new-source="u" old-target="u" new-target="u">
   ***
   *_*
   ***
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="follow left"
      probability="100" new-source="l" old-target="l" new-target="l">
   ***
   *_*
   ***
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="follow right"
      probability="100" new-source="r" old-target="r" new-target="r">
   ***
   *_*
   ***
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="turn up"
      probability="1" new-source="u" old-target="d" new-target="u">
   ___
   _*_
   ___
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="turn left"
      probability="1" new-source="l" old-target="d" new-target="l">
   ___
   _*_
   ___
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="turn right"
      probability="1" new-source="r" old-target="d" new-target="r">
   ___
   _*_
   ___
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="move down"
      probability="100" new-source="_" old-target="_" new-target="d">
   ___
   ___
   _*_
   </rule-dcc-cell-neighbor>
</dcc-cell-color>

<dcc-cell-color type="l" label="left" color="#0000ff">
   <rule-dcc-cell-neighbor label="follow up"
      probability="100" new-source="u" old-target="u" new-target="u">
   ***
   *_*
   ***
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="follow down"
      probability="100" new-source="d" old-target="d" new-target="d">
   ***
   *_*
   ***
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="follow right"
      probability="100" new-source="r" old-target="r" new-target="r">
   ***
   *_*
   ***
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="turn up"
      probability="1" new-source="u" old-target="l" new-target="u">
   ___
   _*_
   ___
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="turn down"
      probability="1" new-source="d" old-target="l" new-target="d">
   ___
   _*_
   ___
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="turn right"
      probability="1" new-source="r" old-target="l" new-target="r">
   ___
   _*_
   ___
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="move left"
      probability="100" new-source="_" old-target="_" new-target="l">
   ___
   *__
   ___
   </rule-dcc-cell-neighbor>
</dcc-cell-color>

<dcc-cell-color type="r" label="right" color="#ff00ff">
   <rule-dcc-cell-neighbor label="follow up"
      probability="100" new-source="u" old-target="u" new-target="u">
   ***
   *_*
   ***
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="follow down"
      probability="100" new-source="d" old-target="d" new-target="d">
   ***
   *_*
   ***
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="follow left"
      probability="100" new-source="l" old-target="l" new-target="l">
   ***
   *_*
   ***
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="turn up"
      probability="1" new-source="u" old-target="r" new-target="u">
   ___
   _*_
   ___
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="turn down"
      probability="1" new-source="d" old-target="r" new-target="d">
   ___
   _*_
   ___
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="turn left"
      probability="1" new-source="l" old-target="r" new-target="l">
   ___
   _*_
   ___
   </rule-dcc-cell-neighbor>
   <rule-dcc-cell-neighbor label="move right"
      probability="100" new-source="_" old-target="_" new-target="r">
   ___
   __*
   ___
   </rule-dcc-cell-neighbor>
</dcc-cell-color>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"></dcc-trigger>
<dcc-trigger label="Stop" action="timer/stop"></dcc-trigger>

<dcc-timer cycles="10000" interval="100" publish="state/next">
   <subscribe-dcc message="timer/start" role="start"></subscribe-dcc>
   <subscribe-dcc message="timer/stop" role="stop"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" message="state/next" role="next"></subscribe-dcc>
~~~