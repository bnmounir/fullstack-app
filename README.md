# fullstack-app
#### for people who clone this repo, follow these steps:


## step one ===> server-side

  npm install all dependencies
  
  you will need to create a dot env file ==> .env == this will 
    inside, you will need 2 environment variables: 
        
        MONGO_CLOUD_DB= this is provided by the atlas mongoDB cloud instance.
            Brad Traversy has a good tutorial on how to create a cloud DB ==> src="https://www.youtube.com/watch?v=KKyag6t98g8&t=303s"
        
        SECRET_KEY= this could be anything, helps JWT to generate a unique HASH key
        
 
## step two ===> client-side

  npm install all dependencies
  
  
    go to your package.json in client folder and change the proxy to point to the server you created instead of mine which is ==>
          "proxy": "https://stormy-reef-64738.herokuapp.com"

   
 
 

##### note: if something goes wrong message me.
