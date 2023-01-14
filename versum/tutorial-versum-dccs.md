---
categories: ["versum", "tutorial-versum-dccs"]
title: Versum-DCCs Tutorial
---

# Combining Versus with Digital Content Components

## From Versum to DCCs

Versum sentence:

~~~markdown
~ temperature:=25+5
Value of temperature: ^temperature^
~~~

The equivalent using Versum DCCs maintaining aspects of the original syntax:

~~~markdown
[~][["temperature:=25+5";autorun]]
Value of temperature: [^][["temperature";active]]
~~~

~~~markdown
[compute][[expression:"temperature:=25+5";autorun]]
Value of temperature: [expression][[expression:"temperature";active]]
~~~

~~~markdown
[~][[
  temperature:=25+5
  * autorun
]]
Value of temperature: [^][[
  temperature
  * active
]]
~~~

~~~html
<dcc-compute expression="temperature:=25+5" autorun></dcc-compute>
Value of temperature: <dcc-expression expression="temperature" active></dcc-expression>
~~~

~~~markdown
~ p:=10

<p>Value of P: ^p^</p>

[~|plus10][["p:=p+10"]]

[*|add-button][["Add 10"]]

[add-button] =click|update=> [plus10]
~~~

~~~markdown
[~][["p:=10";autorun]]

<p>Value of P: [^][["p";active]]</p>

[~|plus10][["p:=p+10"]]

[*|add-button][["Add 10"]]

[add-button] =click|update=> [plus10]
~~~

~~~markdown
[~][[
  * autorun
  p:=10
]]

<p>Value of P: [^][[
  * active
  p
]]</p>

[~|plus10][[
  p:=p+10
]]

[*|add-button][[
  Plus 10
]]

[add-button] =click|update=> [plus10]
~~~

~~~html
<dcc-compute id="dcc1" autorun expression="p:=10"></dcc-compute>

<p>Value of P: <dcc-expression id="dcc4" active expression="p"></dcc-expression></p>

<dcc-compute id="plus10" expression="p:=p+10"></dcc-compute>

<dcc-button id="add-button" label="Add 10"></dcc-button>

<connect-dcc from="add-button" trigger="click" to="plus10" topic="update"></connect-dcc>
~~~

~~~markdown
~ p:=10
~ half:=p/2
~ double:=p*2

<p>Value of P: ^p^</p>
<p>Value of Half: ^half^</p>
<p>Value of Double: ^double^</p>

[~|plus10][[
p:=p+10
half:=p/2
double:=p*2
]]

[*|add-button][["Add 10"]]

[add-button] =click|update=> [plus10]
~~~

~~~markdown
~ total:=0

Escolha a quantidade:
[slider][[
  * variable: quantidade
  * index
]]

[*|vender][["Vender"]]

[~|total][[
  total:=10*quantidade
]]

Total: ^total^

[vender] =click|update=> [total]
~~~

~~~markdown
[input-typed|dccinput][[
  Fale <b>TUDO</b> que você sabe sobre doença pulmonar obstrutiva crônica. <b>TODAS</b> as informações que você souber são importantes.
  * variable: Presentation.hypothesis
  * rows: 25
]]
[markdown|faltam][[
  <span style="background-color:blue;color:white">Faltam 30 segundos</span>
  * display: none
]]
[markdown|esgotado][[
  <span style="background-color:purple;color:white">Tempo esgotado</span>
  * display: none
]]
[timer|clockf][[
  * autostart
  * interval: 1000
  * cycles: 270
]]
[timer|clocke][[
  * autostart
  * interval: 1000
  * cycles: 300
]]
[clockf] =end|style/display/initial=> [faltam]
[clocke] =end|style/display/none=> [faltam]
[clocke] =end|style/display/initial=> [esgotado]
[clocke] =end|readonly/true=> [dccinput]
~~~

~~~html
# Presentation

The temperature is ^temperature^.

<form>
  <p>temperature: <input id="temperature"></p>
  <dcc-submit label="Set Temperature" topic="var/*/set"></dcc-submit>
</form>
~~~

~~~html
# Presentation

<form>
  <p>temperature: <input id="temperature"></p>
  What is your evaluation: <select name="evaluation" id="evaluation">
	<option value="low">Too low</option>
	<option value="regular">Regular</option>
	<option value="high">Too high</option>
  </select>
  <dcc-submit label="Set Temperature" topic="var/*/set"></dcc-submit>
</form>

The temperature is ^temperature^.
Your evaluation ^evaluation^.
~~~

~~~html
<dcc-compute expression="temperature:=25+5" autorun></dcc-compute>
<dcc-dhtml autoupdate>
Temperature: {{temperature}}
<end-dcc></end-dcc>
</dcc-dhtml>
~~~

~~~html
<form>
  <p>temperature: <input id="temperature"></p>
  <dcc-submit label="Set Temperature" topic="var/*/set"></dcc-submit>
</form>

<dcc-dhtml autoupdate>
Temperature: {{temperature}}.
<end-dcc></end-dcc>
</dcc-dhtml>
~~~

~~~html
<form>
  <p>temperature: <input id="temperature"></p>
  What is your evaluation: <select name="evaluation" id="evaluation">
  <option value="blue">Too low</option>
  <option value="green">Regular</option>
  <option value="red">Too high</option>
  </select>
  <dcc-submit label="Set Temperature" topic="var/*/set"></dcc-submit>
</form>

<dcc-dhtml autoupdate>
<spam style="color:{{evaluation}}">Temperature: {{temperature}}.</spam>
<end-dcc></end-dcc>
</dcc-dhtml>
~~~

~~~html
# Presentation

<form>
  <p>temperature: <input id="temperature"></p>
  <dcc-submit label="Set Temperature" topic="var/*/set"></dcc-submit>
</form>

<dcc-dhtml autoupdate>
<dcc-slider min="0" max="100" value="{{temperature}}" variable="temp" index></dcc-slider>
<end-dcc></end-dcc>
</dcc-dhtml>
~~~

~~~html
# Knot 1

<form>
  <p>temperature: <input id="temperature"></p>
  <dcc-submit label="Set Temperature" topic="var/*/set"></dcc-submit>
</form>

* Go Next -> Knot 2

# Knot 2

<dcc-dhtml autoupdate>
Temperature: {{temperature}}.
<end-dcc></end-dcc>
</dcc-dhtml>
~~~

~~~html
# Knot 1

Temperature:
? temperature

* Go Next -> Knot 2

# Knot 2

<dcc-dhtml autoupdate>
Temperature: {{Knot_1.temperature}}.
<end-dcc></end-dcc>
</dcc-dhtml>
~~~

~~~markdown
Escolha a quantidade:
[slider][[
  * variable: quantity
  * index
]]

[*|vender][[
  * topic: timer/start
  Vender
]]

[space-cellular-editor | cellular-space][[
  * rows: 14
  * cols: 20
  * cell-width: 32
  * cell-height: 32
  * background-color: #ebeba2
  * grid
wwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwww
22222222222222222222
.u.......u..........
....................
...u...u............
...u................
...............u....
........i......u....
....................
...u.........u......
..............u.....
........u...........
....................
]]
=type/#=> [cellular-space]
=state/next|next=> [cellular-space]

[cell-image][[
  * type: .
  * label: sand
  * image: https://mc-unicamp.github.io/oficinas/simula/business/image/cell-yellow-green-black.png
]]
[cell-image][[
  * type: i
  * label: icecream
  * image: https://mc-unicamp.github.io/oficinas/simula/business/image/icecream-cart-green.png
]]
[cell-image][[
  * type: u
  * label: umbrella
  * image: https://mc-unicamp.github.io/oficinas/simula/business/image/beach-umbrella.png
]]
[cell-image][[
  * type: 2
  * label: waves2
  * image: https://mc-unicamp.github.io/oficinas/simula/business/image/waves_espuma2.png
]]
[cell-image][[
  * type: w
  * label: waves
  * image: https://mc-unicamp.github.io/oficinas/simula/contagion/harena/scripts/playground/images/cell/waves.svg
]]


[rule-dcc-cell-pair][[
  * label: icecream moves
  * probability: 100
  * transition: i.>.i
  ***
  *_*
  ***
]]
[rule-dcc-cell-pair][[
  * label: icecream sold
  * probability: 80
  * transition: ui>ui
  * topic: icecream/sold
  _*_
  *_*
  _*_
]]

[~|sold-reset][[
  * autorun
  sold:=0
]]
[~|sold-increment][[
  sold:=sold+1
]]
=icecream/sold|update=> [sold-increment]

[~][[
  * condition: sold>=quantity
  * dependency: sold-reset
  * active
  stop:=1
]]

Quantidade Vendida: ^sold^

[timer|clock][[
  * cycles: 100000
  * interval: 125
  * topic: state/next
]]
=timer/start|start=> [clock]
=timer/stop|stop=> [clock]
=var/set/stop|stop=> [clock]
~~~

~~~markdown
[table-csv][[schema]]
[table|tbl1][[]]
=table/updated|update=>[tbl1]
~~~

~~~markdown
[table-csv][[schema]]
[chart|cht1][[]]
=table/updated|update=>[cht1]
~~~

~~~markdown
[table-csv][[schema]]
[projection|prj1][[
  * fields: height,weight
]]
=table/updated|update=>[prj1]
[chart|cht1][[]]
=table/projected|update=>[cht1]
~~~
