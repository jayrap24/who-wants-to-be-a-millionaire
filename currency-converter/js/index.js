$(document).ready(function() {
  function symbolApi() {
    const symbolURL = "https://data.fixer.io/api/symbols?access_key=451a2006f25b2b0d3024093bc3e7e588";
    $.getJSON(symbolURL, function(key) {
    })
  }
  function flucApi() {
    const fluctQuery = {
      base: "USD"
    }
    const fluctUrl = "https://data.fixer.io/api/latest?access_key=451a2006f25b2b0d3024093bc3e7e588";
    $.getJSON(fluctUrl, fluctQuery, function(key) {
      data = key;
      navRates();
    });
  }
  function loadingApi() {
    const yourCurrency = document.getElementById("yourCurrency").value;
    const currencyAmount = document.getElementById("currencyAmount").value;
    const countryCurrency = document.getElementById("countryCurrency").value;
    const url = "https://data.fixer.io/api/convert?access_key=451a2006f25b2b0d3024093bc3e7e588";
    const query = {
      "from": yourCurrency,
      "to": countryCurrency,
      "amount": currencyAmount
    };
    $.getJSON(url, query, function(key) {

      const from = key.query.from;
      const to = key.query.to
      const result = key.result;
      const parsedResult = parseFloat(Math.round(result * 100) / 100).toFixed(2);

      function convertedAmount() {
        $("#convertedAmount").append("<p>" + parsedResult + "</p>");
      }
      convertedAmount();
    });
  };
  function navRates() {
    let audRate = data.rates["AUD"];
    $("#aud").append("AUD/USD" + "<br>" + audRate);
    let jpyRate = data.rates["JPY"];
    $("#jpy").append("JPY/USD" + "<br>" + jpyRate);
    let gbpRate = data.rates["GBP"];
    $("#gbp").append("GBP/USD" + "<br>" + gbpRate);
    let brlRate = data.rates["BRL"];
    $("#brl").append("BRL/USD" + "<br>" + brlRate);
    let eurRate = data.rates["EUR"];
    $("#eur").append("EUR/USD" + "<br>" + eurRate);
    let idrRate = data.rates["IDR"];
    $("#idr").append("IDR/USD" + "<br>" + idrRate);
  }
  function emptyResult() {
    $("#convertedAmount").empty();
  };
  $("#yourCurrency").change(function(e) {
    e.preventDefault();
    loadingApi();
    emptyResult();
  });
  $("#countryCurrency").change(function(e) {
    e.preventDefault();
    loadingApi();
    emptyResult()
  });
  $("#currencyAmount").change(function(e) {
    e.preventDefault();
    loadingApi();
    emptyResult();
  });
  function showAmountConversion() {
    $("#start").click(function() {
      $("#amountConversion").show();
      $("#welcomePage").hide();
    });
  };
  function showWhereAreYouTraveling() {
    $("#nextToConvertedAmount").click(function() {
      $("#whereAreYouTraveling").show();
      $("#amountConversion").hide();
    });
  };
  function showConvertedAmount() {
    $("#nextToAmountConversion").click(function() {
      $("#amountDiv").show();
      $("#whereAreYouTraveling").show();
    })
  }
  function showResults() {
    $("#nextToAmountConversion").click(function() {
      $("#whereAreYouTraveling").hide();
      $("#amountDiv").show();
    })
  }
  function logo() {
    $("img").click(function() {
      window.location.reload()
    })
  }
  function reset() {
    $(".reset").click(function() {
      window.location.reload()
    })

  }
  /* animated function */
  function welcome() {
    $("#helloWorld").delay(200).fadeIn(1000);
    $("#helloWorld").fadeOut(2000);
    $("#convertYour").delay(3000).fadeIn(3000);
    $("#start").delay(3200).fadeIn(5000);
  }
  welcome();
  symbolApi();
  loadingApi();
  flucApi();
  emptyResult();
  showAmountConversion();
  showWhereAreYouTraveling();
  showConvertedAmount();
  showResults();
  reset();
  logo()
});
