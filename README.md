# library-management-system-setup

 this is library management API Backend for the management of users and the books

 # Roures and the Endpoints

##  /users
GET: Get all the list of users in the system
POST: Craete/Register a new user

## /users/{id}

GET: Get a user by their ID
PUT: Updating a user by their ID
DELETE: Deleting a user by their ID (Cheack if the user still has an issued book) && {is there any fine/penalty to be collected}

## /user/subscription-details/{id}
GET: Get a user subscription details by there ID
>> Date of subsctiption
>> Valid till ?
>> fine if any ?

# /books
GET: Get all the books in the system
    POST: Add all the new book to the system

# /books/{id}
GET: Get a book by its ID
POST: Update a book  by its ID
DELETE: Delete a book by its  ID
   
## /book/issued
GET: Get all the issued books

## /books/issued/withFine

GET: Get all issued books with their fine amount

### Subscripation Type
 >> Basic(3 months)
 >> Standard (6 months)
 >> premium (12 months)


> > If a user missed the renewal date, then user should be  collected with $100
> > If a user missed his subscription, then user is expected to pay $100
> > If a user missed both renewal & subscripation then  the collection amount should be $200
 ## commend
 npm init
 npm i express
 npm i nodemon --save-dev