# PassVault-server
### Language, library, and packages:
- JavaScript
- Node JS
- Express JS
- Mongo DB
- Mongoose
- jsonwebtoken
- generate-password

### What is PassVault?
It's a personal project that will suggest you passwords. You'll simply select the length of the password, which characters you want and you're ready to go. Besides, this application will store the encrypted version of your passwords into a central DB. So, there is no need to memorize all your passwords for various websites. 

### Structure:
This server side code is developed by following the MVC pattern. As we'll have a seperate front-end very soon, so there is no view for now.

### Authentication:
Here I have developed a custom authentication system with JWT token. Here you'll be given a JWT token and all your requests will be take place based on that token. As soon as you logged out from the application, the token will be blacklisted and no one can use that ever again.

**Resume:** [https://drive.google.com/file/d/16hc-Pd4QrOeXGg8khFc2sq3RYKZD833D/view]