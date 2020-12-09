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
  <end-dcc></end-dcc>
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

### Harena Examples

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
  <dcc-submit bind="submit-login" label="Login" connect="harena-login:service/request/post:submit">
  </dcc-submit>
</form>
~~~

~~~html
<dcc-rest id="harena-logout" bind="harena-logout"></dcc-rest>
<dcc-submit bind="submit-logout" label="Logout" connect="harena-logout:service/request/post:submit">
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
  <end-dcc></end-dcc>
</dcc-dhtml>
~~~

~~~html
<dcc-rest id="harena-roles" bind="harena-roles"></dcc-rest>
<dcc-dhtml connect="harena-roles:service/request/get:retrieve">
  <h1>Roles</h1>
  {{@foreach . role}}
    <p><strong>Name:</strong> {{role.name}}</p>
    <p><strong>Description:</strong> {{role.description}}</p>
  {{@endfor}}
  <end-dcc></end-dcc>
</dcc-dhtml>
~~~

~~~html
<dcc-button label="Roles"></dcc-button>
<dcc-rest id="harena-roles" bind="harena-roles" subscribe="button/Roles/clicked:get"></dcc-rest>
<dcc-record key="harena-roles" subscribe="service/response/get/harena-roles:store"></dcc-record>
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