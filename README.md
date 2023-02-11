# Hotel Management API

### Introduction
Hotel Management API is an api for managing Rooms and RoomTypes in an Hotel

### Project Support Features
* Create any room and Room Type
* Fetch all rooms and Room Types
* Edit any room and Room Type
* Delete any room and Room Type

### Installation Guide
* Clone this repository [here](https://github.com/Theawesomedeveloper/Hotel-Management-API.git).
* Run npm install to install all dependencies
* Configure Mongodb URI for your Database
* Create an .env file in your project root folder and add your variables. E.g `URI_PASSWORD`

### Usage
* Run npm start:dev to start the application.
* Connect to the API using Postman on port 3000.

### API Endpoints
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

### Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
* [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.
