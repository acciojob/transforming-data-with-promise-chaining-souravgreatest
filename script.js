function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function transformNumber() {
  const inputValue = document.getElementById("ip").value;

  if (isNaN(inputValue) || inputValue === "") {
    alert("Please enter a valid number.");
    return;
  }

  let number = parseFloat(inputValue);

  new Promise(resolve => {
    setTimeout(() => {
      document.getElementById("output").textContent = `Result: ${number}`;
      resolve(number);
    }, 2000);
  })
  .then(result => {
    return new Promise(resolve => {
      setTimeout(() => {
        result *= 2;
        document.getElementById("output").textContent = `Result: ${result}`;
        resolve(result);
      }, 2000);
    });
  })
  .then(result => {
    return new Promise(resolve => {
      setTimeout(() => {
        result -= 3;
        document.getElementById("output").textContent = `Result: ${result}`;
        resolve(result);
      }, 1000);
    });
  })
  .then(result => {
    return new Promise(resolve => {
      setTimeout(() => {
        result /= 2;
        document.getElementById("output").textContent = `Result: ${result}`;
        resolve(result);
      }, 1000);
    });
  })
  .then(result => {
    return new Promise(resolve => {
      setTimeout(() => {
        result += 10;
        document.getElementById("output").textContent = `Final Result: ${result}`;
        resolve(result);
      }, 1000);
    });
  });
}

document.getElementById("btn").addEventListener("click", transformNumber);
