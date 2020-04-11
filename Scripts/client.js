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

    displayInputs();
    calculateMonthly();
}

function calculateMonthly() {

    let monthlyCost = 0

    $(monthlyCost).empty()

    for (const money of employeeList) {
        monthlyCost += money.annualSalary / 12
        $('#monthlyCost').text(`Total Monthly: $${monthlyCost}`)
    }
}

function displayInputs() {
    $('tbody').empty();

    for (const person of employeeList) {
        const newRow = $('tbody').append(`<tr></tr>`);
        newRow.append(`<td>${person.firstName}</td>`);
        newRow.append(`<td>${person.lastName}</td>`);
        newRow.append(`<td>${person.id}</td>`);
        newRow.append(`<td>${person.title}</td>`);
        newRow.append(`<td>${person.annualSalary}</td>`);
    } 

}