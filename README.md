
# API Authentication
Node JS API Authentication | JWT Auth

# Tech Used
**NodeJS**<br />
**MongoDB**<br />
**JWT**<br />

# NPM Packages
**express**<br />
**mongoose**<br />
**jsonwebtoken**<br />
**@hapi/joi**<br />
**bcrypt**<br />
**dotenv**<br />
**http-errors**<br />
**morgan**<br />
**nodemon**<br />

# Why We Need Two Tokens?
- After a successful authentication we send back two tokens back to the client, containing the client id as payload in the audience claim.
	1. **ACCESS TOKEN (validity: 1 hour)**
	2. **REFRESH TOKEN (validity: 1 year or so)**
- Access tokens are used to access Protected routes.
- Refresh tokens are used to get a new pair of Access token and Refresh token.

# Routes
```
http://localhost:3000
http://localhost:3000/auth/register
http://localhost:3000/auth/login
http://localhost:3000/auth/refresh-token
http://localhost:3000/auth/logout
```
# Initialize
1. Create **.env** file in the root directory and include the following:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017
DB_NAME=auth_db
ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=
```
2. **DB_NAME** is the Database name which can be given anything.
3. **ACCESS_TOKEN_SECRET** and **REFRESH_TOKEN_SECRET** are to be generated via "Helpers/keygen.js" where **key1** and **key2** corresponds to **ACCESS_TOKEN_SECRET** and **REFRESH_TOKEN_SECRET** respectively.
4. Copy and Paste the two keys generated in the **.env** file.
# REST Client
REST Client allows us to send HTTP requests and view the response in Visual Studio Code directly.<br />
<br />
1. Install the package **REST Client** from the VScode marketplace<br />
2. Create a **rest.http** file in the root directory<br />

Within the **rest.http** to get a response from root route:
```
GET http://localhost:3000
Authorization: Bearer <REFRESH_TOKEN>
```

**Register route:**
```
POST http://localhost:3000/auth/register
Content-Type: application/json

{
    "email": "abc_xyz@gmail.com",
    "password": "1234"
}
```

**Login route:**
```
POST http://localhost:3000/auth/login
Content-Type: application/json

{
    "email": "abc_xyz@gmail.com",
    "password": "1234"
}
```

**Refresh Token route:**
```
POST http://localhost:3000/auth/refresh-token
Content-Type: application/json

{
    "refreshToken": "<REFRESH_TOKEN>"
}
```

**Logout route:**
```
DELETE http://localhost:3000/auth/logout
Content-Type: application/json

{
    "refreshToken": "<REFRESH_TOKEN>"
}
```
