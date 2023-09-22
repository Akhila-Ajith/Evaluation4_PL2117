document.addEventListener("DOMContentLoaded", function () {
    //Content
    const travelForm = document.getElementById("travelForm");
    const fromDate1Input = document.getElementById("fromDate1");
    const fromDate2Input = document.getElementById("fromDate2");
    const noOfDaysInput = document.getElementById("noOfDays");
    const empIdInput = document.getElementById("empId");
    const empNameInput = document.getElementById("empName");
    const projectInput = document.getElementById("project");
    const causeInput = document.getElementById("cause");
    const sourceInput = document.getElementById("source");
    const destinationInput = document.getElementById("destination");
    //to make past dates disappear
    //setting the minimum date as current date
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    fromDate1Input.min = formattedDates(minDate);
    fromDate2Input.min = formattedDates(minDate);
    function formattedDates(date) {
        //yyyy-mm-dd
        const year = date.getFullYear();
        let month = (date.getMonth() + 1).toString().padStart(2, "0");
        let day = date.getDate().toString().padStart(2, "0");
        return `${year}-${month}-${day}`

    }
    //adding event listener to set the number of days on change
    travelForm.addEventListener("change", function (event) {
        event.preventDefault();//prevent form submission

        // Get the selected dates from the 'fromDate1' and 'fromDate2' inputs
        const fromDate1 = new Date(fromDate1Input.value);
        const fromDate2 = new Date(fromDate2Input.value);

        if (fromDate1 >= fromDate2) {
            alert("From Date 2 should be greater than From Date 1.");
            return;
        }

        // Calculate the difference in days between 'fromDate1' and 'fromDate2'
        const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
        const diffDays = Math.round(Math.abs((fromDate2 - fromDate1) / oneDay));

        // Display the calculated number of days in the 'noOfDays' input
        noOfDaysInput.value = diffDays;

    });

    //adding event listener to check if every field of the form has values entered
    travelForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const empId = empIdInput.value.trim();
        const empName = empNameInput.value;
        const project = projectInput.value;
        const cause = causeInput.value;
        const source = sourceInput.value;
        const destination = destinationInput.value;
        //checking if any fields are left empty
        if (!empId) {
            empIdError.textContent = 'Employee ID is required';
        }
        else {
            empIdError.textContent = '';
        }
        if (!empName) {
            empNameError.textContent = 'Employee Name is required'
        }
        else {
            empNameError.textContent = '';
        }
        if (!project) {
            projectError.textContent = 'Project name is required';
        }
        else {
            projectError.textContent = '';
        }
        if (!cause) {
            causeError.textContent = 'Cause is required';
        }
        else {
            causeError.textContent = '';
        }
        if (!source) {
            sourceError.textContent = 'Source is required';
        }
        else {
            sourceError.textContent = '';
        }
        if (!source) {
            sourceError.textContent = 'Source is required';
        }
        else {
            sourceError.textContent = '';
        }
        if (!destination) {
            destinationError.textContent = 'Destination is required';
        }
        else {
            destinationError.textContent = '';
        }


    })

    //adding event listener to see whether the employeename has any other character other than alphabets
    empNameInput.addEventListener("input", function () {
        const empName = empNameInput.value;
        const empNameError = document.getElementById("empNameError");

        if (!/^[A-Za-z ]+$/.test(empName)) {
            empNameError.textContent = "Employee Name should contain only alphabets and spaces.";
        } else {
            empNameError.textContent = "";
        }
    });


});
