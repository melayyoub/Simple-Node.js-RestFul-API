# Simple-Node.js-RestFul-API
Simple example of RestFul API using Node.js, fully functional GET, PUT, DELETE, and POST

To start This Example is simple simply my numbers here i choosed to be only two fields, ID and the name of that Number

Numbers = [{ id: 1, name: one}, { id: 2, name: two} ... ]

Easier to understand by numbers, and then you can change it to more complicated situation as the old example, with framework as Angular or etc. However, Node.JS always better to work with NoSQL easier and faster.

## Start your Node Server
### start Your Node.JS server 
Run `node app.js` for a dev server. Navigate to `http://localhost:3000/`.  if you want to change your PORT please runt this command in your terminal

`export PORT=XXXX`  x can be any number 

then Run `node app.js`  or to make your life easier run nodemon instead of node `nodemon app.js` 

### User Postman for Testing or any API UI software

GET, PUT, DELETE, or POST, all methods would work with a simple test 

HTTP request
### GET

`GET /api/numbers HTTP/1.1
Host: localhost:XXXX
Content-Type: application/json
Cache-Control: no-cache 
`

### PUT

`PUT /api/numbers HTTP/1.1
Host: localhost:XXXX
Content-Type: application/json
Cache-Control: no-cache
{
"name": "Test for number name"
}
`

### DELETE 

`DELETE /api/numbers/1 HTTP/1.1
Host: localhost:XXXX
Content-Type: application/json
Cache-Control: no-cache
`

### POST new number to the server

`POST /api/numbers/1 HTTP/1.1
Host: localhost:5000
Content-Type: application/json
Cache-Control: no-cache
{
"name": "NewNumber"
}
`

Regards 
Sam Elayyoub

