function calculateFootprint() {
  var transport = document.getElementById("transport").value;
  var distance = parseFloat(document.getElementById("distance").value);
  var duration = parseInt(document.getElementById("duration").value);
  var footprint;

  switch (transport) {
      case "car":
          footprint = distance * 0.4; // assuming 0.4 lbs of CO2 per mile for car
          break;
      case "bus":
          footprint = distance * 0.2; // assuming 0.2 lbs of CO2 per mile for bus
          break;
      case "train":
          footprint = distance * 0.1; // assuming 0.1 lbs of CO2 per mile for train
          break;
      case "plane":
          footprint = distance * 0.5; // assuming 0.5 lbs of CO2 per mile for plane
          break;
      default:
          break;
  }

  var totalFootprint = footprint * duration;
  document.getElementById("result").innerHTML = "Estimated carbon footprint for your vacation: " + totalFootprint.toFixed(2) + " lbs of CO2.";
}

/* currency converter js */
function convertCurrency() {
  var amount = parseFloat(document.getElementById('amount').value);
  var fromCurrency = document.getElementById('fromCurrency').value;
  var toCurrency = document.getElementById('toCurrency').value;
  
  // Example conversion rates (as of January 2022)
  var conversionRates = {
    'USD': {
      'EUR': 0.85,
      'GBP': 0.73,
      'INR': 73.34 // 1 USD = 73.34 INR
    },
    'EUR': {
      'USD': 1.18,
      'GBP': 0.86,
      'INR': 86.65 // 1 EUR = 86.65 INR
    },
    'GBP': {
      'USD': 1.37,
      'EUR': 1.16,
      'INR': 100.41 // 1 GBP = 100.41 INR
    },
    'INR': {
      'USD': 0.014,
      'EUR': 0.012,
      'GBP': 0.010 // 1 INR = 0.010 GBP
    }
  };
  
  // Perform conversion
  var convertedAmount = amount * conversionRates[fromCurrency][toCurrency];
  
  document.getElementById('result').innerHTML = '<p>Converted amount: ' + convertedAmount.toFixed(2) + ' ' + toCurrency + '</p>';
}


// function([string1, string2],target id,[color1,color2])    
consoleText(['Hello World.', 'Console Text', 'Made with Love.'], 'text',['tomato','rebeccapurple','lightblue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}