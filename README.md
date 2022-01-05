# ELEVATE COLLABORATION





A Collaboration App built using the MERN stack.

When you make a new board, it also makes Github repository with same name as of board. 
Make sure to sign up with the same username as you have on Github because If you want to add a member in the board, then it will also add them as a collaborator on the Github repo for that specific board.

## Quick Start

You will need Node.js, a browser, and a terminal to run this application. You can use any code editor. I developed this app with Visual Studio Code, and that is what I would recommend.

### Add a .env file at the root specifying your own variables

MONGO_URI - This application uses MongoDB Atlas to host the database in the cloud. You can also use a local database during development. See https://www.mongodb.com/.

JWT_SECRET - Any random string will do.

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run the server and client at the same time from the root

```bash
npm run dev
```

## Credits

Major credits to Muhammad Usman and Archawin Wongkittiruk who inspired and helped me make this possible
