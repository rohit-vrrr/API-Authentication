# SOCIAL MEDIA APP
A mini social media application
<br />
# TECH USED
## NodeJS
## MongoDB
## JWT
<br />
# NPM PACKAGES
## express
## mongoose
## jsonwebtoken
## @hapi/joi
## bcrypt
## dotenv
## http-errors
## morgan
## nodemon
<br />
# WHY WE NEED TWO TOKENS?
- After a successful authenticatiton we send back two tokens back to the client, containing the client id as payload in the audience claim.<br />
	1. ACCESS TOKEN (validity: 1 hour)
	2. REFRESH TOKEN (validity: 1 year or so)<br />
- Access tokens are used to access Protected routes.<br />
- Refresh tokens are used to get a new pair of Access token and Refresh token.<br />
<br />
# REST Client
REST Client allows us to send HTTP requests and view the response in Visual Studio Code directly.<br />
<br />
# ROUTES
```
http://localhost:3000
http://localhost:3000/auth/register
http://localhost:3000/auth/login
http://localhost:3000/auth/refresh-token
http://localhost:3000/auth/logout
```
<br />
