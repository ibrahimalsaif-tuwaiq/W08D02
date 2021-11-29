# Auth Express

This a backend app for authentication and authorization in Express.

## Getting Started

### Installing Dependencies

#### Node js

Follow instructions to install the latest version of Node js for your platform in the [Node js docs](https://nodejs.org/en/).

#### NPM Dependencies

Once you have the project in your local machine, install dependencies by running:

```bash
npm install
```

This will install all of the required packages.

## Running the server

To run the server, execute:

```bash
npm run dev
```

For running the server in development mode, and execute:


```bash
npm run start
```

To run the server on production mode.

## API Reference

## Getting Started
Base URL: This application can be run locally on the http:/localhost:5000.

## Error Handling
Errors are returned as JSON objects depend on the error.

The API will return two error types when requests fail:

 - 400: Bad Request
 - 404: Not Found

## Endpoints

#### GET /roles
 - General
   - gets the list of all the roles

- Sample Request
   - `http://localhost:5000/roles`

<details>
<summary>Response</summary>

```
[
  {
    "_id": "61a4f5ad656c03ed403467ce",
    "role": "user",
    "permissions": [
      "read"
    ],
    "__v": 0
  },
  {
    "_id": "61a4f5cd656c03ed403467d0",
    "role": "admin",
    "permissions": [
      "read",
      "create",
      "update",
      "delete"
    ],
    "__v": 0
  }
]
```

</details>

#### POST /createRole
 - General
   - creates a new role
 
 - Request Body
   - role
   - permissions
 
 - Sample Request
   - `http://localhost:5000/createRole`
   - Request Body
```
{
    "role":"user",
    "permissions": ["read"]
}
```

<details>
<summary>Response</summary>

```
{
    "_id": "61a4f5ad656c03ed403467ce",
    "role": "user",
    "permissions": [
      "read"
    ],
    "__v": 0
  }
```
  
</details>

#### POST /signup
 - General
   - creates a new user
 
 - Request Body 
   - email
   - password
   - role
 
 - Sample Request
   - `http://localhost:5000/signup`
   - Request Body
```
{
    "email":"user@gamil.com",
    "password":"12345",
    "role":"61a4f5ad656c03ed403467ce"
}
```

<details>
<summary>Response</summary>

```
{
  "email": "user@gamil.com",
  "password": "$2b$10$QpGBhgYKuNAAIexxMqzJFeQNTLbPnZCWDg..1aoGmmHP9.LzH0Spm",
  "role": "61a4f5ad656c03ed403467ce",
  "_id": "61a507bf2fc1151a7a98782f",
  "__v": 0
}
```
  
</details>

#### POST /login
 - General
   - login a user
 
 - Request Body 
   - email
   - password
 
 - Sample Request
   - `http://localhost:5000/login`
   - Request Body
```
{
    "email":"user@gamil.com",
    "password":"12345",
}
```

<details>
<summary>Response</summary>

```
{
  "result": {
    "_id": "61a507bf2fc1151a7a98782f",
    "email": "user@gamil.com",
    "password": "$2b$10$QpGBhgYKuNAAIexxMqzJFeQNTLbPnZCWDg..1aoGmmHP9.LzH0Spm",
    "role": {
      "_id": "61a4f5ad656c03ed403467ce",
      "role": "user",
      "permissions": [
        "read"
      ],
      "__v": 0
    },
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQGdhbWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjM4MjA1NDg2LCJleHAiOjE2MzgyMDkwODZ9.WBpcGJ5QngMzbPl1jvTcH4HOuvPv_u7irhHd5D-HUjM"
}
```
  
</details>
