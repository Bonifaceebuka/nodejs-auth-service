# nodejs-auth-service 
This is an assessment I did for the role of a NodeJS backend developer

## Software Engineer Assessment
This application is built with the following technologies:
1. NodeJS(v20.11.0)
2. MYSQL(5.7.39)
4. NPM version 10.2.4

### This is how you can install this application
1. Clone this Repository(Repo) with the following command `git clone https://github.com/Bonifaceebuka/nodejs-auth-service.git`
2. Move to the DIR of the Repo `cd nodejs-auth-service`
3. Install the necessary NPM packages with `npm install`
4. Save .env.example file as .env or run this command: `cp .env.example .env`
5.	Open the .env file and set the Database configurations as follows:<br>
	DB_CONNECTION_DIALECT=mysql<br>
	DB_HOST=127.0.0.1<br>
	DB_PORT=3306<br>
    APP_KEY=ANY_RANDOM_VALUE<br>
	DB_DATABASE=YOUR_DATABASE_NAME<br>
	DB_USERNAME=YOUR_SERVER_USERNAME<br>
	DB_PASSWORD=YOUR_DATABASE_PASSWORD (Leave it empty if you have none)<br>
    PORT=YOUR_PREFERRED_PORT_NUMBER<br>
6. Import the database tables using auth-app.sql file in 'db' folder of this project
7. Start your server with `npm run dev`

#### About the API documentation
The complete API documentation for this project is published on Postman. You can access it using this link `https://documenter.getpostman.com/view/16611684/2sA3QteWkE`