
###  Spec:
A clean modular angular code that talks to a RESTful API endpoints.
* Build a todo list single page application.
* Add/Edit/Delete todo items
* Mark todo item as done
* Ability to filter items in the todo list

I have set up a project and a mock local server.              

GET  from http://localhost:3000/tasks ← list all todo items                 
GET /1 ← view detail of a specific todo item, where id = 1                  
POST ← creates a new todo item (as long as it has an available id)                 
PATCH /1 ← edits the todo item with id = 1             
DELETE /1 ← deletes the todo item, with id = 1               

              
* JS code unit tests
* Modular Angular code 
* Dependency injection 




### Quick start
#### clone the repo
Go to your developer folder
Clone this project repository to your local machine, by running command
`git clone https://github.com/OriginMarkets/angular8TechinicalTest.git`

#### change into the repo directory
`cd tech-test`

#### install
`npm install`

#### serve
`ng server`     

#### json-server
On another console
`npm run json-server`

#### Running unit tests
`npm run test`

