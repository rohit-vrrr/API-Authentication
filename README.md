
# Social Media App
A mini social media application

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
