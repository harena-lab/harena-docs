
[DCC Id] = event => [DCC Id]
@Id(DCC) = event => @Id(DCC)
@DCC = event => @DCC

@Id(DCC) = event "value" => @Id(DCC)

@SayHello(Trigger) = "Hello" => @Asdrubal(Entity)

~~~markdown
@TalkButton(Trigger "Talk") = "I am a doctor." => @Doctor(LivelyTalk "Hello, ")
~~~

~~~html
<dcc-trigger id="TalkButton" label="Talk" action="send/message" value="I am a doctor.">
</dcc-trigger>

<dcc-lively-talk id="Doctor"
                 duration="0s"
                 character="doctor"
                 speech="Hello, ">
  <subscribe-dcc message="send/message"></subscribe>
</dcc-lively-talk>
~~~

[Trigger SayHello] = "Hello" => [Entity Asdrubal]

[Input] = value => [Console]

[Trigger Send] => [Entity Asdrubal]

[Trigger Send "Hello!"] => [Entity Asdrubal]

[Trigger Send] = "Hello" => [Entity Asdrubal]
* positional parameters
* nominal parameters

[Entity Asdrubal "images/asdrubal.png"]*
* with memory ( * )

[Trigger Start] => [Metronome 20 1]

* Namespaces
[Gatilho Inicia] => [Metronomo 20 1]

[Trigger] = Start => [Metronome 20] = Cycle => [Counter]

[Simulador Foguete
   distancia: 20
   corpo: "     "
   base: "    "]

[Simulador Foguete] =

[Input Hypothesis
   rows: 5
   right answers: "teste"]
? Input
  * rows: 5
  * right answers: "teste"