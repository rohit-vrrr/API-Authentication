# Social Media App
A mini social media application
<br />
# Tech Used
**NodeJS**<br />
**MongoDB**<br />
**JWT**<br />
<br />
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
<br />
# Why We Need Two Tokens?
- After a successful authenticatiton we send back two tokens back to the client, containing the client id as payload in the audience claim.;
	**ACCESS TOKEN (validity: 1 hour)**<br />
	**REFRESH TOKEN (validity: 1 year or so)**<br />
- Access tokens are used to access Protected routes.;
- Refresh tokens are used to get a new pair of Access token and Refresh token.;
<br />
# Routes
```
http://localhost:3000
http://localhost:3000/auth/register
http://localhost:3000/auth/login
http://localhost:3000/auth/refresh-token
http://localhost:3000/auth/logout
```
<br />
# REST Client
REST Client allows us to send HTTP requests and view the response in Visual Studio Code directly.<br />
<br />
Install the package **REST Client** from the VScode marketplace<br />
Create a **rest.http** file in the root directory<br />
<br />
Within the **rest.http** to get a response from root route:
```
GET http://localhost:3000
Authorization: Bearer <REFRESH_TOKEN>
```
<br />
**Register route:**
```
POST http://localhost:3000/auth/register
Content-Type: application/json

{
    "email": "abc_xyz@gmail.com",
    "password": "1234"
}
```
<br />
**Login route:**
```
POST http://localhost:3000/auth/login
Content-Type: application/json

{
    "email": "abc_xyz@gmail.com",
    "password": "1234"
}
```
<br />
**Refresh Token route:**
```
POST http://localhost:3000/auth/refresh-token
Content-Type: application/json

{
    "refreshToken": "<REFRESH_TOKEN>"
}
```
<br />
**Logout route:**
```
DELETE http://localhost:3000/auth/logout
Content-Type: application/json

{
    "refreshToken": "<REFRESH_TOKEN>"
}
```
<br />