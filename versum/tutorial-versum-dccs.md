# Combining Versus with Digital Content Components

~~~markdown
~ temperature:=25+5
Value of temperature: ^temperature^
~~~

~~~html
<dcc-compute expression="a:=2+4" onload></dcc-compute>
Value of temperature: <dcc-expression expression="a" active></dcc-expression>
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
# Presentation

<form>
  <p>temperature: <input id="temperature"></p>
  What is your evaluation: <select name="evaluation" id="evaluation">
	<option value="1">Too low</option>
	<option value="2">Regular</option>
	<option value="3">Too high</option>
  </select>
  <dcc-submit label="Set Temperature" topic="var/*/set"></dcc-submit>
</form>

~ evaluation=1?
> Risk
? risk
  * type: slider
  * min: 0
  * max: 10
  * initial: 8

~ evaluation=2?
> Risk
? risk
  * type: slider
  * min: 0
  * max: 10
  * initial: 0

~ evaluation=3?
> Risk
? risk
  * type: slider
  * min: 0
  * max: 10
  * initial: 5

The temperature is <spam style="color:red">^temperature^</spam>.
Your evaluation **^evaluation^**.
~~~