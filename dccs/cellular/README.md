# Cellular Digital Content Components

## Playground

Learn and try to instantiate and customize Digital Content Components (DCCs) at [DCC Playground](http://datasci4health.github.io/harena-space/src/adonisjs/public/dccs/playground/).

# Syntax and Examples

## Cellular Space DCC (`<dcc-space-cellular>`)

Defines a cellular space.

### Syntax

~~~html
<dcc-space-cellular>
</dcc-space-celullar>
~~~

### Examples

~~~html
<dcc-space-cellular>
t__t_t
__t_t_
ttt__t
</dcc-space-cellular>

<dcc-cell-color type="t" color="#aaffaa"/>
~~~

~~~html
<dcc-space-cellular>
t__t_t
__t_t_
ttt__t
</dcc-space-cellular>

<dcc-cell-image type="t" image="images/cell/energy/tree01.svg"/>
~~~

~~~html
<dcc-space-cellular id="cellular-space" rows="5">
r__r_r
__r_r_
</dcc-space-cellular>

<subscribe-dcc target="cellular-space" message="state/next" role="next"/>

<dcc-cell-image type="r" image="images/cell/energy/rock01.svg">
   <monitor-dcc-cell probability="100" new-source="_" old-target="_" new-target="r">
   ___
   ___
   _*_
   </monitor-dcc-cell>
</dcc-cell-image>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
~~~

~~~html
<dcc-space-cellular id="cellular-space" rows="5">
r__r_r
__r_r_
</dcc-space-cellular>

<subscribe-dcc target="cellular-space" message="state/next" role="next"/>

<dcc-cell-image type="r" image="images/cell/energy/rock01.svg">
   <monitor-dcc-cell probability="100" new-source="_" old-target="_" new-target="r">
   ___
   ___
   _*_
   </monitor-dcc-cell>
</dcc-cell-image>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"/></dcc-trigger>

<dcc-timer cycles="10" interval="1000" publish="state/next">
   <subscribe-dcc message="timer/start" role="start"/>
</dcc-timer>
~~~

~~~html
<dcc-space-cellular id="cellular-space">
r__r_r
__r_r_
______
______
t_t__t
</dcc-space-cellular>

<subscribe-dcc target="cellular-space" message="state/next" role="next"/>

<dcc-cell-image type="r" image="images/cell/energy/rock01.svg">
   <monitor-dcc-cell probability="100" new-source="_" old-target="_" new-target="r">
   ___
   ___
   _*_
   </monitor-dcc-cell>
</dcc-cell-image>

<dcc-cell-image type="t" image="images/cell/energy/tree01.svg"/>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"/></dcc-trigger>

<dcc-timer cycles="10" interval="1000" publish="state/next">
   <subscribe-dcc message="timer/start" role="start"/>
</dcc-timer>
~~~

~~~html
<dcc-space-cellular id="cellular-space" cell-width="8" cell-height="8">
_..
._.
#_#
___
___
___
</dcc-space-cellular>

<subscribe-dcc target="cellular-space" message="state/next" role="next"/>

<dcc-cell-color type="#" color="#0000ff"/>

<dcc-cell-color type="." color="#ff0000">
   <monitor-dcc-cell probability="100" new-source="_" old-target="_" new-target=".">
   ___
   ___
   _*_
   </monitor-dcc-cell>
   <monitor-dcc-cell probability="90" new-source="_" old-target="_" new-target=".">
   ___
   ___
   *_*
   </monitor-dcc-cell>
   <monitor-dcc-cell probability="40" new-source="_" old-target="_" new-target=".">
   ___
   *_*
   ___
   </monitor-dcc-cell>
</dcc-cell-image>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"/></dcc-trigger>

<dcc-timer cycles="10" interval="100" publish="state/next">
   <subscribe-dcc message="timer/start" role="start"/>
</dcc-timer>
~~~

~~~html
<dcc-space-cellular id="cellular-space" cell-width="8" cell-height="8">
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

<subscribe-dcc target="cellular-space" message="state/next" role="next"/>

<dcc-cell-color type="#" color="#0000ff"/>

<dcc-cell-color type="." color="#ff0000">
   <monitor-dcc-cell probability="100" new-source="_" old-target="_" new-target=".">
   ___
   ___
   _*_
   </monitor-dcc-cell>
   <monitor-dcc-cell probability="90" new-source="_" old-target="_" new-target=".">
   ___
   ___
   *_*
   </monitor-dcc-cell>
   <monitor-dcc-cell probability="40" new-source="_" old-target="_" new-target=".">
   ___
   *_*
   ___
   </monitor-dcc-cell>
</dcc-cell-image>

<dcc-trigger label="Next" action="state/next"></dcc-trigger>
<dcc-trigger label="Play" action="timer/start"/></dcc-trigger>

<dcc-timer cycles="800" interval="50" publish="state/next">
   <subscribe-dcc message="timer/start" role="start"/>
</dcc-timer>
~~~