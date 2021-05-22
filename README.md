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
- After a successful authenticatiton we send back two tokens back to the client, containing the client id as payload in the audience claim.<br />
	1. ACCESS TOKEN (validity: 1 hour)<br />
	2. REFRESH TOKEN (validity: 1 year or so)<br />
- Access tokens are used to access Protected routes.<br />
- Refresh tokens are used to get a new pair of Access token and Refresh token.<br />
<br />
# REST Client
REST Client allows us to send HTTP requests and view the response in Visual Studio Code directly.<br />
<br />
# ROUTES
```javascript
http://localhost:3000
http://localhost:3000/auth/register
http://localhost:3000/auth/login
http://localhost:3000/auth/refresh-token
http://localhost:3000/auth/logout
```
<br />
