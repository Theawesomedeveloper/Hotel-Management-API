# Hotel Management API

## Live Endpoints
Save yourself the strees of running it locally. find below the hosted version

```html
https://residenceinn.onrender.com/api/roomtypes

https://residenceinn.onrender.com/api/rooms

```

## Introduction
Hotel Management API is an api for managing Rooms and RoomTypes in an Hotel

## Project Support Features
* Create any room and Room Type
* Fetch all rooms and Room Types
* Edit any room and Room Type
* Delete any room and Room Type

## Installation Guide
* Clone this repository [here](https://github.com/Theawesomedeveloper/Hotel-Management-API.git).
* Run npm install to install all dependencies
* Configure Mongodb URI for your Database
* Create an .env file in your project root folder and add your variables. E.g `URI_PASSWORD`

### Usage
* Run npm start:dev to start the application.
* Connect to the API using Postman on port 3000.

## Directory Structure

- `/routes` contains the routes for each endpoint
- `/schemas` contains the schemas for each collection




```bash
Hotel-Management-API
├───app.js
├───CONFIG.js
├───controller.js
├───database.js
├───routes
|       ├───rooms.js
|       └───roomtypes.js
└───schemas
        ├───RoomModel.js
        └───RoomTypeModel.js
```

## API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| `POST` | /api/roomtypes | Create a new Room Type |
| `POST` | /api/rooms | Create a new Room |
| `GET` | /api/roomtypes | To retrieve all Room Types  |
| `GET` | /api/rooms | To retrieve all Rooms  |
| `GET` | /api/roomtypes/:roomtype | To retrieve a specific Room Type  |
| `GET` | /api/rooms/:roomId | To retrieve a specific room  |
| `PATCH` | /api/roomtypes/:roomtype | To edit the details of a roomtype |
| `PATCH` | /api/rooms/:roomId | To edit the details of a Room |
| `DELETE` | /api/roomtypes/:roomtype | To delete a single Room Type |
| `DELETE` | /api/rooms/roomId | To delete a single Room |

## HTTP GET Request Parameters



### rooms route

#### Example
```html
https://residenceinn.onrender.com/api/rooms?roomId=""&price=""&roomType=""

or

http://127.0.0.1:3000/api/rooms?roomId=""&price=""&roomType=""

```

|Object| Description|
|:-----|:-----------|
|`roomId`|[optional] use this parameter to filter response by room id|
|`price`| [optional] use this parameter to filter response by room id|
|`roomType`| [optional] use this parameter to filter response by room type|



### roomtypes route


#### Example
```html
https://residenceinn.onrender.com/api/roomtypes?bedCount=""&bedrooms=""&bathrooms=""&maxOccupancy=""

or

http://127.0.0.1:3000/api/roomtypes?bedCount=""&bedrooms=""&bathrooms=""&maxOccupancy=""

```

|Object| Description|
|:-----|:-----------|
|`bedCount`|[optional] use this parameter to filter response by bedCount|
|`bedrooms`| [optional] use this parameter to filter response by number of bedrooms|
|`bathrooms`| [optional] use this parameter to filter response by number of bathrooms|
|`maxOccupancy`|[optional] use this parameter to filter response by maxOccupancy|


## HTTP PATCH Request Parameters

### rooms route

#### Example
```html
https://residenceinn.onrender.com/api/roomtypes/:roomType

or

http://127.0.0.1:3000/api/roomtypes/:roomType


```

|Object| Description|
|:-----|:-----------|
|`roomId`| use this to edit a room id|
|`price`| use this to edit the price of a room|

#### NOTE : For now you can't edit a room type

### roomtypes route

#### Example
```html
https://residenceinn.onrender.com/api/rooms/:roomId

or

http://127.0.0.1:3000/api/rooms/:roomId


```

|Object| Description|
|:-----|:-----------|
|`bedCount`|[optional] use this parameter to edit a bedcount|
|`bedrooms`|[optional] use this parameter to edit the number of bedrooms of bedrooms|
|`bathrooms`| [optional] use this parameter to edit the number of bathrooms|
|`maxOccupancy`|[optional] use this parameter to edit  maxOccupancy|

## Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://expressjs.com/) This is a NodeJS web application framework.
* [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
* [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.
