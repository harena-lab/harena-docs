# Message Paths

## Entity `user`

### Login
The Harena Manager executes the login of the user based in his/her email and password. It starts a session and produces a session token.

* Message Bus: `internal`
  * request 
    * **request topic:** `user/login`
    * **request body:** 
      ```json
       { "emailid" : "<user email>",  
         "password": "<password>" }
      ```
  * response 
    * **response topic:** `user/login/token`
    * **response body:** 
      ```json
      { "token": "<session token>" }
    ```
      
* Message Bus: `manager`
  * request 
    * **request topic:** `user/login`
    * **request body:** 
      ```json
       { "emailid" : "<user email>",  
         "password": "<password>" }
      ```
  * response 
    * **response topic:** `user/login/token`
    * **response body:** 
      ```json
      { "token": "<session token>" }
    ```
      


* *Manager*: `user/login`
  body: `{emailid: <user email>, password: <password>}`
  returns: `{token: <session token>}`

* *Logger*: prefix:`auth//` or `exec//`
  sufix: `user/login`
    message: `{id: <user email>}`
