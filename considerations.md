DATABASE DESIGN:
-> User database
The user database consists of the following attributes: email, phone and password. The attributes email and password will allow a user to login to the system.
-> Room database
The room database consists of the following attributes: room name, subject name, start date and time, end date and time, capacity of the room and a list containing all the emails which have registered to the particular room. Room name, subject name, starting and ending times, capacity are included as they are asked in the question. Apart from this, the attribute that contains the list of emails is used to check if a particular user is registered to the room or not.

SECURITY CONSIDERATIONS:
We must be wary of cyber attacks that may leak information of our database. To ensure no passwords are leaked, the passwords are sent to the backend using POST request where they are first hashed and then stored into the database. 

MAINTAINABILITY:
The entire code is organized with proper file names and similar set of files grouped into a folder. This will make it easy for us to understand our code easily when we comeback to it after a while.

READABILITY:
Proper indentation is used throughout the project to make it readable and code comments are used wherever necessary.

SCALABILITY:
We have used MERN stack which is a collection of robust and highly scalable technologies used to develop scalable web applications. Therefore, this application can be scaled as per its needs.

YouTube link for the demo of the application: https://youtu.be/Oll5tiFRDwE