---
categories: ["dccs","data"]
title: "Data DCCs"
---

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
  <subscribe-dcc topic="var/comic_id/changed" map="par/comic_id/get"></subscribe-dcc>
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
  <subscribe-dcc topic="var/region/changed" map="par/region/get"></subscribe-dcc>
</dcc-rest>
~~~

### Harena Examples

~~~html
<dcc-rest id="fastapi" bind="fastapi"></dcc-rest>
<dcc-rest id="harena-roles" bind="harena-roles"></dcc-rest>
<dcc-dhtml connect="retrieve:fastapi:service/request/get" autoupdate>
  <p><strong>Message:</strong> {{message}}</p>
</dcc-dhtml>
~~~

~~~html
<form>
  <p>email: <input id="email"></p>
  <p>password: <input type='password' id="password"></p>
  <dcc-submit label="Login" topic="service/request/post"></dcc-submit>
</form>
<dcc-rest bind="harena-login" subscribe="service/request/post:retrieve"></dcc-rest>
~~~

~~~html
<dcc-rest id="harena-login" bind="harena-login"></dcc-rest>
<form>
  <p>email: <input id="email"></p>
  <p>password: <input type='password' id="password"></p>
  <dcc-submit bind="submit-login" label="Login" connect="submit:harena-login:service/request/post">
  </dcc-submit>
</form>
~~~

~~~html
<dcc-rest id="harena-logout" bind="harena-logout"></dcc-rest>
<dcc-submit bind="submit-logout" label="Logout" connect="submit:harena-login:service/request/post">
~~~

~~~html
<form>
  <p>quest id: <input id="questId"></p>
  <dcc-submit label="Cases"></dcc-submit>
</form>
<dcc-rest bind="harena-cases" subscribe="button/Cases/clicked:get"></dcc-rest>
~~~

~~~html
<form>
  <p>email: <input id="email"></p>
  <p>password: <input type='password' id="password"></p>
  <dcc-submit label="Login"></dcc-submit>
</form>
<dcc-rest id="harena-login" bind="harena-login" subscribe="button/Login/clicked:post"></dcc-rest>
<dcc-dhtml subscribe="service/response/post/harena-login:update">
  <h1>Testing DHTML</h1>
  <p><strong>Name:</strong> {{username}}</p>
  <p><strong>Created at:</strong> {{created_at}}</p>
</dcc-dhtml>
~~~

~~~html
<dcc-button label="Roles" topic="service/request/get"></dcc-button>
<dcc-rest id="harena-roles" bind="harena-roles" subscribe="service/request/get:retrieve"></dcc-rest>

<hr>

<dcc-dhtml subscribe="service/response/get/harena-roles:update">
  <h1>Roles</h1>
  {{@foreach . role}}
    <p><strong>Name:</strong> {{role.name}}</p>
    <p><strong>Description:</strong> {{role.description}}</p>
  {{@endfor}}
</dcc-dhtml>
~~~

~~~html
<dcc-rest id="harena-roles" bind="harena-roles"></dcc-rest>
<dcc-dhtml connect="retrieve:harena-roles:service/request/get" autoupdate>
  <h1>Roles</h1>
  {{@foreach . role}}
    <p><strong>Name:</strong> {{role.name}}</p>
    <p><strong>Description:</strong> {{role.description}}</p>
  {{@endfor}}
</dcc-dhtml>
~~~

~~~html
<dcc-rest id="harena-logger-list" bind="harena-logger-list"></dcc-rest>
<dcc-dhtml connect="retrieve:harena-logger-list:service/request/get" autoupdate>
  <h1>Logger</h1>
  {{@foreach logs lg}}
    <p><strong>Id:</strong> {{lg.id}}</p>
    <p><strong>Description:</strong> {{lg.username}}</p>
  {{@endfor}}
</dcc-dhtml>
~~~

~~~html
<dcc-button label="Roles"></dcc-button>
<dcc-rest id="harena-roles" bind="harena-roles" subscribe="button/Roles/clicked:get"></dcc-rest>
<dcc-record key="harena-roles" subscribe="service/response/get/harena-roles:store">
</dcc-record>
~~~

~~~html
<dcc-record id="harena-roles" key="harena-roles"></dcc-record>
<dcc-dhtml connect="harena-roles:data/record/retrieve">
  <h1>Roles</h1>
  {{@foreach . role}}
    <p><strong>Name:</strong> {{role.name}}</p>
    <p><strong>Description:</strong> {{role.description}}</p>
  {{@endfor}}
</dcc-dhtml>
~~~

~~~html
<dcc-dhtml>
<h1>Name: {{page_url.name}}</h1>
<h2>Age: {{page_url.age}}</h2>
</dcc-dhtml>
~~~

~~~html
<dcc-space-cellular-editor id="cellular-space"
  cell-width="16" cell-height="16" background-color="#d6f0ff" grid analysis>
_###_
#.__#
#___#
_###_
</dcc-space-cellular-editor>
<subscribe-dcc target="cellular-space" topic="state/next" map="next"></subscribe-dcc>
<dcc-cell-color type="#" label="glass" color="green"></dcc-cell-color>
<dcc-cell-color type="." label="bug" color="blue"></dcc-cell-color>
<rule-dcc-cell-pair label="fall vertical" probability="100" transition="._>..">
___
__*
_*_
</rule-dcc-cell-pair>

<dcc-button label="Next" topic="state/next"></dcc-button>

<dcc-chart min="0,0" max="12,12" series="glass:green,bug:blue" subscribe="dcc/analysis/data:action/include"></dcc-chart>

<dcc-dhtml subscribe="dcc/analysis/data:update">
<span style="color:green">Glass: {{glass}}</span>,
<span style="color:blue">Bug: {{bug}}</span>
</dcc-dhtml>
~~~

~~~html
<dcc-table-csv view></dcc-table-csv>
<dcc-decision-tree subscribe="table/updated:ml/train"></dcc-decision-tree>
~~~

~~~html
<dcc-table-csv schema></dcc-table-csv>
<dcc-table subscribe="table/updated:update"></dcc-table>
~~~

~~~html
<dcc-table-csv schema></dcc-table-csv>
<dcc-chart subscribe="table/updated:update"></dcc-chart>
~~~

~~~html
<dcc-table-csv schema></dcc-table-csv>
<dcc-projection fields="height,weight" subscribe="table/updated:update"></dcc-projection>
<dcc-chart subscribe="table/projected:update"></dcc-chart>
<dcc-table subscribe="table/projected:update"></dcc-table>
~~~

~~~html
<dcc-slider variable="y" value="0" index></dcc-slider>
<dcc-chart subscribe="input/changed/y:action/include"></dcc-chart>
~~~

~~~html
<dcc-table-csv schema="comp_price" content="15;17;21" subscribe="var/set/rodada:table/retrieve/comp_price">
</dcc-table-csv>
<dcc-compute active expression="rodada:=3"></dcc-compute>
~~~
