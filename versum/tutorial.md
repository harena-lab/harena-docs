---
categories: ["versum", "tutorial"]
title: Versum Tutorial
---

# Tutorial

~~~
# Machine

You are exploring an abandoned factory and found this machine:
![The Machine](https://openclipart.org/image/400px/300339)

> What do you want to do?
? action

* Go ahead -> Feedback

# Feedback

Your action will be: **^Machine.action^**
~~~

~~~
# Machine

You are exploring an abandoned factory and found this machine:
![The Machine](https://openclipart.org/image/400px/300339)

> What do you want to do?
? action

* Go ahead -> Feedback

# Feedback (note)

Your action will be: **^Machine.action^**

* Return -> Machine
~~~

~~~
# Machine

You are exploring an abandoned factory and found this machine:
![The Machine](https://openclipart.org/image/400px/300339)

> What do you want to do?
? action

> How certain are you?
? certain
  * type: slider
  * index

* Go ahead -> Feedback

# Feedback (note)

Your action will be: **^Machine.action^**
Your certainty: **^Machine.certain^**

* Return -> Machine
~~~

~~~
# Machine

You are exploring an abandoned factory and found this machine:
![The Machine](https://openclipart.org/image/400px/300339)

> What do you want to do?
? action
  * type: choice
  * options:
    * turn the front crank
    * turn a crank from the left
    * turn a crank from the right

* Go ahead -> Feedback

# Feedback (note)

Your action will be: **^Machine.action^**

* Return -> Machine
~~~

~~~
# Machine

You are exploring an abandoned factory and found this machine:
![The Machine](https://openclipart.org/image/400px/300339)

> What do you want to do?
? action
  * type: choice
  * exclusive
  * options:
    * turn the front crank
    * turn a crank from the left
    * turn a crank from the right

* Go ahead -> Feedback

# Feedback (note)

Your action will be: **^Machine.action^**

* Return -> Machine
~~~

~~~
# Machine

You are exploring an abandoned factory and found this machine:
![The Machine](https://openclipart.org/image/400px/300339)

> What do you want to do?
? action
  * type: choice
  * exclusive
  * shuffle
  * options:
    * turn the front crank: front
    * turn a crank from the left: left
    * turn a crank from the right: right

* Go ahead -> Feedback

# Feedback (note)

Your action will be: **^Machine.action^**

* Return -> Machine
~~~

~~~
# Machine

You are exploring an abandoned factory and found this machine:
![The Machine](https://openclipart.org/image/400px/300339)

> What do you want to do?
? action
  * type: choice
  * exclusive
  * options:
    * turn the front crank: front
    * turn a crank from the left: left
    * turn a crank from the right: right

* Go ahead -> Feedback

# Feedback (note)

Your action will be: **^Machine.action^**

* Return -> Machine
~~~

~~~
# Machine

You are exploring an abandoned factory and found this machine:
![The Machine](https://openclipart.org/image/400px/300339)

> What do you want to do?
* turn the front crank -> Front
* turn a crank from the left -> Left
* turn a crank from the right -> Right

* Go ahead -> Feedback

# Front (note)

The machine exploded due to excess pressure.

* Return -> Machine

# Left (note)

The machine stopped.

* Return -> Machine

# Right (note)

The machine teletransported you to another dimension.

* Return -> Machine
~~~

~~~
# Machine

You are exploring an abandoned factory and found this machine:
![The Machine](https://openclipart.org/image/400px/300339)

> What do you want to do?
+ turn the front crank -> Front
+ turn a crank from the left -> Left
+ turn a crank from the right -> Right

# Front (note)

The machine exploded due to excess pressure.

* Return -> Machine

# Left (note)

The machine stopped.

* Return -> Machine

# Right (note)

The machine teletransported you to another dimension.

* Return -> Machine
~~~

~~~
# Machine

You are exploring an abandoned factory and found this machine:
![The Machine](https://openclipart.org/image/400px/300339)

> What do you want to do?
+ turn the front crank -> Front ~ points:=0
+ turn a crank from the left -> Left ~ points:=10
+ turn a crank from the right -> Right ~ points:=5

# Front (note)

The machine exploded due to excess pressure.

Points: ^points^

* Return -> Knot.Previous

# Left (note)

The machine stopped.

Points: ^points^

* Return -> Knot.Previous

# Right (note)

The machine teletransported you to another dimension.

Points: ^points^

* Return -> Knot.Previous
~~~

~~~
# Machine

You are exploring an abandoned factory and found this machine:
![The Machine](https://openclipart.org/image/400px/300339)

> What do you want to do?
+ turn the front crank -> Front
+ turn a crank from the left -> Left
+ turn a crank from the right -> Right

# Front (note)
~ points := 0

The machine exploded due to excess pressure.

Points: ^points^

* Return -> Knot.Previous

# Left (note)
~ points := 5

The machine stopped.

Points: ^points^

* Return -> Knot.Previous

# Right (note)
~ points := points + 10

The machine teletransported you to another dimension.

Points: ^points^

* Return -> Knot.Previous
~~~


~~~
# Presentation #

> Digite a quantidade que você quer fabricar
? quantidade

> Digite o preço de venda
? preco

* Faturamento Previsto -> Income

# Income #
~ faturamento := Presentation.preco * Presentation.quantidade

O faturamento previsto é: ^faturamento^
~~~

~~~
# Presentation #

> Digite a quantidade que você quer fabricar
? quantidade

> Digite o preço de venda
? preco

* Faturamento Previsto -> Income

# Income #
~ faturamento := Presentation.preco * Presentation.quantidade
~ vendas := random(Presentation.quantidade)

O faturamento previsto é: ^faturamento^.
As vendas foram de: ^vendas^.
~~~

~~~
# Presentation #
~ disponivel := 50

Quantidade disponível: ^disponivel^

> Digite a quantidade que você quer fabricar
? quantidade

> Digite o preço de venda
? preco

* Faturamento Previsto -> Income

# Income #
~ faturamento := Presentation.preco * Presentation.quantidade
~ vendas := random(Presentation.quantidade)
~ excedeu := Presentation.quantidade > disponivel

O faturamento previsto é: ^faturamento^.
As vendas foram de: ^vendas^.
Excedeu disponível: ^excedeu^.
~~~

~~~
# Knot
~ custo := 10
~ preco := 9
~ quantidade := 3

~ saldo := abs((preco - custo) * quantidade)

Custo: ^custo^
Preço: ^preco^
Quantidade: ^quantidade^

$ (custo < preco)
  Você teve um lucro.

$ (custo > preco)
  Você teve um prejuízo.

Valor: ^saldo^
~~~

~~~
[~ | venda][[
qtd_1R := Round1.Buy_Item.Buy.quantidade
custo_1R := qtd_1R * cost
avaiable_1R:= avaiable_initial_1R - custo_1R
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
~~~
