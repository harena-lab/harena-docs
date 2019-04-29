* message bus: **internal**
 * **request topic:** `user/login`
 * **request body:** 
   ```json
    {"emailid" : "<user email>", 
     "password": "<password>"}
   ```

 * **response topic:** `user/login/token`
 * **response body:** 
   ```json
   {"token": "<session token>"}
   ```
