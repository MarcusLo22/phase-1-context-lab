// Function to create an employee record
function createEmployeeRecord(array) {
  return {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
  };
}

// Function to create multiple employee records
function createEmployeeRecords(arrayOfArrays) {
  return arrayOfArrays.map(createEmployeeRecord);
}

// Function to create a time in event
function createTimeInEvent(dateStamp) {
  const [date, hour] = dateStamp.split(" ");
  const timeInEvent = {
      type: "TimeIn",
      hour: parseInt(hour),
      date: date
  };
  this.timeInEvents.push(timeInEvent);
  return this;
}

// Function to create a time out event
function createTimeOutEvent(dateStamp) {
  const [date, hour] = dateStamp.split(" ");
  const timeOutEvent = {
      type: "TimeOut",
      hour: parseInt(hour),
      date: date
  };
  this.timeOutEvents.push(timeOutEvent);
  return this;
}

// Function to determine hours worked on a specific date
function hoursWorkedOnDate(date) {
  const timeIn = this.timeInEvents.find(event => event.date === date);
  const timeOut = this.timeOutEvents.find(event => event.date === date);
  if (timeIn && timeOut) {
      return (timeOut.hour - timeIn.hour) / 100; // Convert hours and minutes to a decimal
  }
  return 0;
}

// Function to calculate wages earned on a specific date
function wagesEarnedOnDate(date) {
  const hours = hoursWorkedOnDate.call(this, date);
  return hours * this.payPerHour;
}

// Function to calculate total wages for an employee
function allWagesFor() {
  const datesWorked = this.timeInEvents.map(event => event.date);
  return datesWorked.reduce((total, date) => total + wagesEarnedOnDate.call(this, date), 0);
}

// Function to find an employee by first name
function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(employee => employee.firstName === firstName);
}

// Function to calculate total payroll for all employees
function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((total, record) => total + allWagesFor.call(record), 0);
}