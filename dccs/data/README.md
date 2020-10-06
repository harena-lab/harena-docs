# Data-related Digital Content Components

The schemas specification follows the [JSON schema](https://json-schema.org/) format.

Types supported by the schema:
* string
* number
* boolean
* object
* array
* null

## `<dcc-model>`

Embeds a data model.

~~~html
<dcc-input-typed variable="comic_id"></dcc-input-typed>
<dcc-model id="xkcd-model" bind="xkcd"></dcc-model>
<dcc-rest id="xkcd-rest" bind="xkcd">
  <connect-dcc to="xkcd-model" topic="data/schema"></connect-dcc>
  <subscribe-dcc topic="var/comic_id/changed" role="get"></subscribe-dcc>
</dcc-rest>
<dcc-dhtml type="get" request="comic_id">
  <connect-dcc to="xkcd-model" topic="data/schema"></connect-dcc>
  <connect-dcc to="xkcd-rest" topic="data/rest"></connect-dcc>
  XKCD number: {{comic_id}}
</dcc-dhtml>
~~~

~~~html
<dcc-input-typed variable="region"></dcc-input-typed>
<dcc-model id="coronavirus-model" bind="coronavirus"></dcc-model>
<dcc-rest id="coronavirus-rest" bind="coronavirus">
  <connect-dcc to="coronavirus-model" topic="data/schema"></connect-dcc>
  <subscribe-dcc topic="var/region/changed" role="get"></subscribe-dcc>
</dcc-rest>
~~~

~~~html
<dcc-model id="user-model" bind="user"></dcc-model>
<p>email: <input id="email"></p>
<p>password: <input id="password"></p>
<dcc-submit label="Submit" topic="data/request">
  <connect-dcc to="user-model" topic="data/schema"></connect-dcc>
</dcc-submit>
~~~

~~~html
<form>
  <p>email: <input id="email"></p>
  <p>password: <input id="password"></p>
  <dcc-submit label="Submit" topic="data/request">
    <connect-dcc 
    to="user-model" topic="data/schema"></connect-dcc>
  </dcc-submit>
</form>
~~~

~~~html
<form>
  <p>email: <input id="email"></p>
  <p>password: <input type='password' id="password"></p>
  <dcc-submit label="Login"></dcc-submit>
  <dcc-rest bind="harena-login">
    <subscribe-dcc topic="button/Login/clicked" role="post"></subscribe-dcc>
  </dcc-rest>
</form>
~~~

~~~html
<form>
  <p>email: <input id="email"></p>
  <p>password: <input type="password" id="password"></p>
  <dcc-submit label="Login"></dcc-submit>
  <dcc-rest bind="harena-login">
    <subscribe-dcc topic="button/Login/clicked" role="post"></subscribe-dcc>
  </dcc-rest>
</form>

<hr>

<form>
  <p>quest id: <input id="questId"></p>
  <dcc-submit label="Cases"></dcc-submit>
  <dcc-rest bind="harena-cases">
    <subscribe-dcc topic="button/Cases/clicked" role="get"></subscribe-dcc>
  </dcc-rest>
</form>
~~~

~~~html
<form>
  <p>email: <input id="email"></p>
  <p>password: <input type='password' id="password"></p>
  <dcc-submit label="Login"></dcc-submit>
  <dcc-rest bind="harena-login">
    <subscribe-dcc topic="button/Login/clicked" role="post"></subscribe-dcc>
  </dcc-rest>
</form>
<dcc-dhtml subscribe="data/service/login">
  <h1>Testing DHTML</h1>
  <p><strong>Name:</strong> {{username}}</p>
  <p><strong>Created at:</strong> {{created_at}}</p>
</dcc-dhtml>
~~~

~~~html
<form>
  <p>email: <input id="email"></p>
  <p>password: <input type='password' id="password"></p>
  <dcc-submit label="Login"></dcc-submit>
  <dcc-rest bind="harena-login">
    <subscribe-dcc topic="button/Login/clicked" role="post"></subscribe-dcc>
  </dcc-rest>
</form>

<hr>

<dcc-button label="Roles"></dcc-button>
<dcc-rest bind="harena-roles">
  <subscribe-dcc topic="button/Roles/clicked" role="get"></subscribe-dcc>
</dcc-rest>

<hr>

<dcc-dhtml subscribe="data/service/roles">
  <h1>Roles</h1>
  {{@foreach . role}}
    <p><strong>Name:</strong> {{role.name}}</p>
    <p><strong>Description:</strong> {{role.description}}</p>
  {{@endfor}}
</dcc-dhtml>
~~~