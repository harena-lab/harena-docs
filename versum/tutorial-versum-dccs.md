---
categories: ["versum", "tutorial-versum-dccs"]
title: Versum-DCCs Tutorial
---

# Combining Versus with Digital Content Components

~~~markdown
~ temperature:=25+5
Value of temperature: ^temperature^
~~~

~~~markdown
[~][["temperature:=25+5";autorun]]
Value of temperature: [^][["temperature";active]]
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

Digite a quantidade:
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
[space-cellular-editor | cellular-space][[
  * rows: 14
  * cols: 20
  * cell-width: 32
  * cell-height: 32
  * background-color: #ebeba2
  * grid
wwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwww
gggggggggggggggggggg
.v.......v..........
....................
...v...v............
...v................
...............v....
........h......v....
....................
...v.........v......
..............v.....
........v...........
....................
]]

[dcc-cell-image][[
  * type: w
  * label: wave
  * image: https://mc-unicamp.github.io/oficinas/simula/contagion/harena/scripts/playground/images/cell/waves.svg
]]
~~~
