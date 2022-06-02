# FRONT

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# BACK

## First run
At first run you must :
- Start docker : `docker-compose up -d`
- Go to the symfony container terminal:
  - Install the vendors : `composer install`
  - Create the database : `symfony console doctrine:database:create`
  - Run the migrations : `symfony console doctrine:migrations:migrate`
  - Run the fixtures : `symfony console doctrine:fixtures:load`
  - Create the keys for the jwt : `symfony console lexik:jwt:generate-keypair`

## Next run
You just have to run `docker-compose up -d`

## Dev url
Your application run at `http://localhost:8000`
Phpmyadmin run at : `http://localhost:8080`

## Api
You must set the header `Accept : application/json` in all the requests !
Base url : `http://localhost:8000/api/`

### Routes : 
#### Public
**Login : `/login`**
                          
Method : POST  
Body : 
```
{
  "username": "admin@admin.com",
  "password": "password"
}
```
Headers : `Content-Type : application/json`  

**Register : `/register`**
                             
Method : POST  
Body :
```
{
  "username" : "username",
  "email" : "email@email.com",
  "password" : "password"	
}
```
Headers :
`Content-Type : application/json`

#### Protected

**List all posts : `/posts`**

Method : GET

**Create a post : `/posts`**   
                                
Method : POST       
Body :                             
```                                
{
  "title": "Hello world",
  "content": "Lorem ipsum sit dolores"
}

```                                
Headers :                          
`Content-Type : application/json`  
               
**Get a post : `/posts/{id}`**                
                                            
Method : GET   

**Delete a post : `/posts/{id}`**    
                                  
Method : DELETE                      
