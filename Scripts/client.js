$(document).ready(readyNow);

employeeList = [];



function readyNow() {
    $('#submitButton').on('click', getInputs);
    $('#employeeTable').on('click', '.deleteButton', removeInputs)
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
    let monthlyCost = 0;

    if (employeeList.length === 0) {
        $('#monthlyCost').text(`Total Monthly: $0`);
    }

    if (monthlyCost < 20000) {
        $('#monthlyCost').removeClass('red');
    }

    $(monthlyCost).empty();

    for (const money of employeeList) {
        monthlyCost += money.annualSalary / 12;
        monthlyCostRounded = Math.round(100 * monthlyCost) / 100;
        $('#monthlyCost').text(`Total Monthly: $${monthlyCostRounded}`);

        if (monthlyCost > 20000) {
            $('#monthlyCost').addClass('red');
        }
    }
}


function displayInputs() {
    $('tbody').empty();

    for (const person of employeeList) {
        $('tbody').append(`<tr id="${person.id}"></tr>`);

        const newRow = $(`#${person.id}`)
        newRow.append(`<td>${person.firstName}</td>`);
        newRow.append(`<td>${person.lastName}</td>`);
        newRow.append(`<td>${person.id}</td>`);
        newRow.append(`<td>${person.title}</td>`);
        newRow.append(`<td class='${person.annualSalary}'>$${person.annualSalary}</td>`);
        newRow.append(`<td><button id='${person.id}' class="deleteButton">Delete</button></td>`)
    }
}

function removeInputs() {
    let id = $(this)[0].id

    employeeList = employeeList.filter(function (employee) {
        return id !== employee.id
    })

    $(this).closest('tr').remove();

    calculateMonthly();
}