# Test Driven Development

TDD is about writing the test first before adding new functionality to the system.  The Reason?  

1.  Defines success up front
2.  Helps break our design down into incremenetal units
3.  Provides working documentation for the codebase
4.  Ensure correctness
5.  Catching regressions
6.  Inform design
   

## Testing types  

Unit Test - tend to be small as they test isolated parts of an application.  They are fast and easy but give low confidence  

Integration Test - tests multiple components of your application. They are harder to write and maintain but give you better confidence  


## Testing pyramid
                           _     
                          / \
                 _______/     \________
                /Integration Test (all)\
               /------------------------\
              /-integration Tests (some)-\
             /----------------------------\
            /--------Unit Tests------------\



Bottom represents the unit level tests.  These tests are data conversions and smaller elements.

Integration represents a few levels of the stack for testing

The toplayer represents the full stack integration tests.  These kinds of tests are slow and should be reserved for small amounts of testing.





## Refractoring
Red -Green- Refractor process

Its a way to do TDD.  
[Red] - Write failing test
[Green] - Make it pass
[Refactor] - improve the code

Rules for writing these test:
1.  Only write code in resposne to a failing test
2.  Make the tests pass with the simplest code possible
3.  You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures

## JEST
Is a testing framework that has all the tools you need for TDD


## NZOMBIES
NZOMBIES is to give you a basic starting point or an idea where to start for your testing

N.      Null
Z.      Zero
O.      One
M.      Many ( or More Complex)
B.      Boundary Behaviors
I.      Interface definition
E.      Exercise Exceptional behavior
S.      Simple Scenarios, Simple Solutions


The first test scenarios are for simple post conditions of a just created object.  These are your Zero cases.  While defning a Zero case, you designt he Interface


# Approaches to consider for creating a unit test
https://www.altexsoft.com/blog/business/acceptance-criteria-purposes-formats-and-best-practices/



