# nlw-return-server
Back-end made for NLW Return project.

### The project
A popup baloon for feedbacks. The purpose of this project was to create a simple, functional application. 

App must be able to send the feedback for a back-end, and the server must save the data in a database, and send an email to page administrator:

**The feedback:**

![image](https://user-images.githubusercontent.com/62719629/168511874-422e4225-e462-40f7-bc98-0201816c7422.png)

**The email:**

![image](https://user-images.githubusercontent.com/62719629/168512327-50b21198-8f56-4141-9fb0-78fe7ea81cf9.png)

### Functionality
Server has a unique route, POST, for /feedbacks. It uses Nodemailer to call Mailtrap, and Prisma for database migrations. 

```javascript
generator client {
  provider = "prisma-client-js"
}

datasource db {
  // provider = "sqlite"
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Feedback {
  id String @id @default(uuid())
  type       String
  comment    String
  screenshot String?
  @@map("feedbacks")
}
```

**Project is currently hosted at Railway app, along with its Postgres database:**

![image](https://user-images.githubusercontent.com/62719629/168513037-cb7ccf50-8c71-479c-9db9-52d6724c3341.png)
