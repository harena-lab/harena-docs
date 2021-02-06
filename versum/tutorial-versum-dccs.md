# Combining Versus with Digital Content Components

~~~markdown
~ temperature:=25+5
Value of temperature: ^temperature^
~~~

~~~html
<dcc-compute expression="temperature:=25+5" onload></dcc-compute>
Value of temperature: <dcc-expression expression="temperature" active></dcc-expression>
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
<dcc-compute expression="temperature:=25+5" onload></dcc-compute>
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