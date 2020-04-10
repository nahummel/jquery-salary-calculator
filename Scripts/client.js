console.log('Works')

$(document).ready(readyNow);

employeeList = [ ]

function readyNow() {
    $('#submitButton').on('click', getInputs);
}

function getInputs() {
    let employee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        id: $('#id').val(),
        title: $('#title').val(),
        annualSalary: $('#annualSalary').val(),
    }
    employeeList.push(employee);
    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');
}