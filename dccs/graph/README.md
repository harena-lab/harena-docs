# Graph Digital Content Components

~~~html
<dcc-graph width="300" height="300">
  <dcc-node x="5" y="7" width="100" height="50" label="Teste duas"></dcc-node>
</dcc-graph>

<dcc-graph width="300" height="200">
  <dcc-node id="first" label="First"></dcc-node>
  <dcc-node id="second" label="Second"></dcc-node>
  <dcc-node id="third" label="Third"></dcc-node>
  <dcc-edge source="first" target="second" label="next"></dcc-edge>
  <dcc-edge source="first" target="third" label="next"></dcc-edge>
</dcc-graph>

<dcc-graph width="500" height="300">
  <dcc-node id="n1" label="1"></dcc-node>
  <dcc-node id="n1.1" label="1.1"></dcc-node>
  <dcc-node id="n1.2" label="1.2"></dcc-node>
  <dcc-node id="n1.1.1" label="1.1.1"></dcc-node>
  <dcc-node id="n1.1.2" label="1.1.2"></dcc-node>
  <dcc-edge source="n1" target="n1.1"></dcc-edge>
  <dcc-edge source="n1" target="n1.2"></dcc-edge>
  <dcc-edge source="n1.1" target="n1.1.1"></dcc-edge>
  <dcc-edge source="n1.1" target="n1.1.2"></dcc-edge>
</dcc-graph>

<dcc-graph width="500" height="300">
  <dcc-node id="n1" label="1"></dcc-node>
  <dcc-node id="n1.1" label="1.1"></dcc-node>
  <dcc-node id="n1.2" label="1.2"></dcc-node>
  <dcc-node id="n1.1.1" label="1.1.1"></dcc-node>
  <dcc-node id="n1.1.2" label="1.1.2"></dcc-node>
  <dcc-node id="n2" label="2"></dcc-node>
  <dcc-node id="n2.1" label="2.1"></dcc-node>
  <dcc-node id="n2.2" label="2.2"></dcc-node>
  <dcc-edge source="n1" target="n1.1"></dcc-edge>
  <dcc-edge source="n1" target="n1.2"></dcc-edge>
  <dcc-edge source="n1.1" target="n1.1.1"></dcc-edge>
  <dcc-edge source="n1.1" target="n1.1.2"></dcc-edge>
  <dcc-edge source="n2" target="n2.1"></dcc-edge>
  <dcc-edge source="n2" target="n2.2"></dcc-edge>
</dcc-graph>
~~~