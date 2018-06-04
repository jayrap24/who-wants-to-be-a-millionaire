$(document).ready(function() {
  $("#countryCurrency").change(function(e) {
    convertCurrency();
    //empty the div if changing the currency
    $("#convertedAmount").empty()
  });
  $("#fromDollar").keypress(function(e) {
    convertCurrency();
    //empty the div if changing the currency
    $("#convertedAmount").empty()
  });
  $("#fromDollar").change(function(e) {
    convertCurrency();
    //empty the div if changing the currency
    $("#convertedAmount").empty()
  });
  $("#nextToAmountConversion").click(function(e) {
    showAmountConversionForm();
  });
  $("#nextToConvertedAmount").click(function(e) {
    showConvertedAmount();
  });
    
    
    
  //display the converted amount
  function showConvertedAmount() {
    $("#convertedAmount").show();
  }
  // display the amount conversion form
  function showAmountConversionForm() {
    $("#amountConversion").show();
  }
    
    
    
  //convert currency function
  function convertCurrency() {
    const countryCurrency = document.getElementById("countryCurrency").value;
    const fromDollar = document.getElementById("fromDollar").value;
    let usdCurrency = "USD";
   
      //GET JSON DATA
    const url = "http://data.fixer.io/api/latest?access_key=727cb8f4f7066385df06977d0ee4a9df";
      

      
      
    $.getJSON(url, function(key) {
      const dataRates = [];
      dataRates.push(key.rates)
      let userCurrencyRate = dataRates[0][countryCurrency];
      let convertedAmount = userCurrencyRate * fromDollar;
      $("#convertedAmount").append(convertedAmount)
    });
  }
    
    
    
  //google maps function
  function initMap() {
    let mapPosition = {
      center: {
        lat: 34.0522,
        lng: -118.2437
      },
      zoom: 8
    };
    let googleMaps = new google.maps.Map(document.getElementById("googleMaps"), mapPosition);
    //create a addMarker function to pass in miltiple locations
    function addMarker(location) {
      let mapMarker = new google.maps.Marker({
        position: location,
        map: googleMaps
      });
      let infoWindow = new google.maps.InfoWindow({
        content: "<p>Local Currency Exchange Here"
      });
      mapMarker.addListener('click', function() {
        infoWindow.open(googleMaps, mapMarker);
      })
    }

    //Data of Multiple locations by calling addMarker function
    addMarker({
      lat: 34.0522,
      lng: -118.2437
    });
    addMarker({
      lat: 33.0522,
      lng: -117.2437
    });
  }

  initMap();
convertCurrency()
});



