// Get the numbers from our form inputs
// ENTRY POINT
// Controller Function
function getValues() {
  let startNumber = document.getElementById("startValue").value;
  let endNumber = document.getElementById("endValue").value;

  startNumber = Number(startNumber);
  endNumber = Number(endNumber);

  if (isNaN(startNumber) == true || isNaN(endNumber) == true) {
    Swal.fire({
      title: "Oops!",
      text: "Hundo only works with numbers.",
      icon: "error",
      backdrop: false,
    });
  } else if (startNumber > endNumber) {
    Swal.fire({
      title: "Oops!",
      text: "The starting number must be less than the ending number",
      icon: "error",
      backdrop: false,
    });
  } else {
    let numberArray = generateNumbers(startNumber, endNumber);

    displayNumbers(numberArray);
  }
}

// Business logic - creates every number in the input range
// Data Model
function generateNumbers(start, end) {
  let range = [];

  for (let number = start; number <= end; number++) {
    range.push(number);
  }

  return range;
}

// put the numbers on the page
// View Function
function displayNumbers(numbersToDisplay) {
  let tableHtml = "";

  for (let index = 0; index < numbersToDisplay.length; index = index + 1) {
    let currentNumber = numbersToDisplay[index];

    let className = "";

    if (currentNumber % 2 == 0) {
      className = "even";
    } else {
      className = "odd";
    }

    let tableRowHtml = `<tr><td class="${className}">${currentNumber} </td></tr>`;

    tableHtml += tableRowHtml;
  }

  document.getElementById("results").innerHTML = tableHtml;
}
