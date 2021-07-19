# Work day scheduler

## Description

The Work Day Scheduler is a simple application where users can plan out their day hour by hour. 

Its primary function allows a user to type any events/tasks into each "time block" and save that event with the click of a button! 

Every hour has a color code assigned to it-- if an hour has passed the time block will appear grey, the current hour is highlighted red, and all future hours are green. 

## Utilized technologies 

At its core-- this application consists of HTML, CSS, and JavaScript. 

In order to make this codebase more efficient the following libraries were implemented: 
* Bootstrap
* jQuery 
* Moment.js

**Bootstrap** was imported to help easily layout a row/column structure for each time block. 

**jQuery** helped reduce the amount of code needed for DOM manipulation. 

**Moment.js** was used to generate the current date, and using the *.hour()* method I was able to build out the logic to color code every time block relative to the user's current time. 

## Challenges

Up until this point in my "coding career" data persistence has been the biggest challenge for me-- specifically with localStorage. 

I found myself struggling with setting up the initial logic around **saving** and **loading** any current or previous user inputs. 

When first implementing data persistence it can feel like a "chicken & egg" paradox. When you are dynamically generating <textarea> tags with each refresh-- I had to consider how to append previous user inputs into only the time blocks that have been filled out (and saved). 
  
This project-- however-- I gained an appreciation for *compartmentalizing* code/logic as much as possible. Once I built out an empty array that loaded the text and ID from any preivous saves it was simply a matter of assigning that text to the **.val()** of the respective time block being dynamically generated. 
  
I now feel confident to take on any other data persistence functionalities in future endeavours. 
