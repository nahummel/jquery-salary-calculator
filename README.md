#  jQuery Salary Calculator

## Description

This webpage will allow users to input employee information and receive a list of all employees and their information in a table format. It will also calculate the monthly cost of all employee’s salaries and display it on the bottom right of the screen. The max amount of monthly cost is currently set to $20,000. Once this max is hit the monthly cost will be highlighted red to alert the user that they are over budget. For user ease, an alert has been added to pop up whenever an employee is added without all the required information. This helps reduce the errors that could show up when information is missing. If an employee’s information is input incorrectly or if they are no longer working for the company, a delete button is provided to delete them from the table. Once an employee is deleted the monthly cost will be adjusted to reflect only current employees that are listed. 


<!-- Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md). -->

### Main Project

- [x] Create inputs that take employee first name, last name, ID number, job title, annual salary
- [x] Create submit button
- [x] Submit button should collect info from input fields and store in an object
- [x] Append stored info onto DOM in table format
- [x] Clear input fields 
- [x] Using the stored info calculate monthly cost (divide by 12) 
- [x] Append monthly cost to DOM
- [x] If monthly cost exceedsd $20,000 add class that turns background color red
- [x] Create delete button
- [x] Delete button should remove an employee from DOM
