# Tutorial

~~~markdown
# Machine

You are exploring an abandoned factory and found this machine:
![The Machine](https://openclipart.org/image/400px/300339)

> What do you want to do?
? action

* Go ahead -> Feedback

# Feedback

Your action will be: **^Machine.action^**
~~~

~~~markdown
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

~~~markdown
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

~~~markdown
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

~~~markdown
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

~~~markdown
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

~~~markdown
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

~~~markdown
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

~~~markdown
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

~~~markdown
# Machine

You are exploring an abandoned factory and found this machine:
![The Machine](https://openclipart.org/image/400px/300339)

> What do you want to do?
+ turn the front crank -> Front ~ points=0
+ turn a crank from the left -> Left ~ points=10
+ turn a crank from the right -> Right ~ points=5

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
