# Message Paths

## Entity `user`

### Login
The Harena Manager executes the login of the user based in his/her email and password. It starts a session and produces a session token.

* Message Bus: `internal`
  * request 
    * **request topic:** `user/login`
    * **request body:** 
                     ```json
                      { "emailid" : "<user email>",  "password": "<password>" }
                     ```
      
  * request 
    * **response topic:** `user/login/token`
    * **response body:** 
      ```json
      { "token": "<session token>" }
    ```
      
2234234
> asdasdas4d
g234r23423
