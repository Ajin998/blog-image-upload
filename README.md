# Blog Backend API with Image upload

## Introduction:-
This project is based on express application that will fetch all blog/blogs through API(Application Programming)Interface) specified by the user.

## Technologies

1. Node.js
2. Express (Node.js Framework)
3. Postman (Testing tool for making API call to our application)
4. JSON--> JavaScript Object Notation (Our Data).

## Setup:-

To run this project Firstly:-
1. Clone this project in your repository.
2. Run $ npm install, that will basically install all the dependencies of our application in your local machine.
3. Finally run $ npm start, to start our application's server.

### :smile: Congratulation you made it!! server is running.... on your localhost://3000.

## Fetching Data

1. Now head to localhost:3000/Blog
2. Now here Blogs is our endpoint to serve all our blog posts.
3. To fetch blog by id simply head to localhost:3000/Blog/ and at the end append the id of the blog.
4. For performing query simply head to localhost:3000/Blog/query/?...
5. For creating a new blog head to localhost:3000/Blog with POST request.
6. Here we are demonstrating how to handle image file upload using multer, hence while giving the name of body one should not give imageUrl as a parameter this will automatically handle by the application.


## Example:-

For creating blog and upload image as a parameter to imageUrl:-
1. localhost:3000/Blog ---> with Post request and under body choose form-data instead of raw as we do as usual.

:warning: The request should be POST

Output:- Following in the screenshot it tells how we should enter data in form data.

:warning: While uploading image make sure the key name should match upload.single(..)  here in application I have used Image so the name of the key name will be Image. 
![Screenshot from 2020-12-19 13-12-15](https://user-images.githubusercontent.com/73870819/102684412-4597b180-41fe-11eb-9495-1a2f855bd1f2.png)



## Future updates:-

1. Since we are passing data and file in the form-data, in future we will send both as seperate by using concept of multipart multer. like file in form-data and json data in raw tab of POSTMAN
2. This application can support only single file upload, in future it will handle multiple files upload.

        
