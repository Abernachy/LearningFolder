# Using Express with Knex

Knex is essentially a SQL query builder but we can use Javascript to build not only our data tables but we can also make our queries.

We can use Knex in conjuction with express so that when a fetch request is made from the front end, the request is routed to Express, which then uses Knex to make a query request to our SQL server, which will then send that querie up from the database, through Express, and to the front end, which will return the data requested by the user or whatever it will do with it, who knows.  

Also, please be aware these notes are subject to become outdated, so look for the documentation at:

http://knexjs.org/


# Using Knex
After you install the modules with your application you need to let Knex build the skeleton.
 ```
 npx knex init
 ```

 Doing this will generate a Knexfile template at the root of your project.  The file itself is what you will modify with your database access settings so that knex can communicate with your database 

## Migrations

 Knex can be used to build your database schema.  
 ```
 npx knex migrate:make 'database name'
 //Then fill in your scheme data and run:
// to migrate your schema to the database
 npx knex migrate:latest  
 // to drop your tables 
 npx knex migrate:rollback
```

 ```
 // Example from the Galvanize project
 // Since Knex is promised base, you can chain request

exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('tags', function(tags) {
        tags.increments('tagid').primary();
        tags.string('tag_name')
    })
    .then(() => {
        return knex.schema
          .createTable('locations', function(locations){
              locations.increments('locationsid').primary();
              locations.string('base_name');
          })
// ...

  exports.down = function(knex) {
      return knex.schema
      .dropTable("posts")
      .dropTable("users")
      .dropTable("locations")
      .dropTable("tags")
  };
  
  ```
## Seeding data
Once you have your databases build, you can create a seed file to seed some data into them.

```
// example seed file
npx knex seed:make 'database name'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('tags').insert([
        {tag_name: 'Wanted'},
        {tag_name: 'Buy'},
        {tag_name: 'Sell'}
      ]);
    })
    .then( () => {
      return knex('locations').del()        
    })
    .then(() => {
      return knex('locations').insert([
        {base_name: 'No base'},
        {base_name: 'Fort Hood'},
        {base_name: 'Lackland AFB'}
      ])
    })


```

# Use cases/examples/etc

