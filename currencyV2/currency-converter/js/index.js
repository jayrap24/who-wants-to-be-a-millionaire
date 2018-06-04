$(document).ready(function() {
    
    $("#start").click(function(e) {
    showMainSection();
    });
    
    $("h1").click(function(e){
     reset();
    });
    
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
    
$(".reset").click(function(e) {
    reset();
  });
    
  //display the converted amount
  function showConvertedAmount() {
    $("#convertedAmount").delay(300).fadeIn(1000);
      $("#amountConversion").delay(300).hide();
      $("#total").delay(300).fadeIn(1000);
      
  }
  // display the amount conversion form
  function showAmountConversionForm() {
  $("#amountConversion").delay(300).fadeIn(1000);
      $("#whereAreYouTraveling").delay(300).hide();
      
      
      
  }
    
// display main section
    function showMainSection(){
        $("#mainSection").delay(300).fadeIn(1000);
        $("aside").hide(); 
    }
     
    
  //convert currency function
  function convertCurrency() {
    const countryCurrency = document.getElementById("countryCurrency").value;
    const fromDollar = document.getElementById("fromDollar").value;
    let usdCurrency = "USD";
   
      //GET JSON DATA
    const url = "https://data.fixer.io/api/latest?access_key=451a2006f25b2b0d3024093bc3e7e588";
    $.getJSON(url, function(key) {
      const dataRates = [];
      dataRates.push(key.rates)
      let userCurrencyRate = dataRates[0][countryCurrency];
      let convertedAmount = userCurrencyRate * fromDollar;
        let parsedConvertedAmount = parseFloat(Math.round(convertedAmount* 100) / 100).toFixed(2);
      $("#convertedAmount").append(parsedConvertedAmount + "  " + countryCurrency);
        
        
    });
  }
    
    
    function reset(){  
        $("#whereAreYouTraveling").show();
        $("#convertedAmount").hide();
        $("#total").hide();
        $("#amountConversion").hide();
    }
    
 
/* ----------- Animation ---------*/
    /* -------- Header Section-----*/
    
  
    
    /* -------- Welcome Section-----*/
        $("#helloWorld").delay(200).fadeIn(1000);
        $("#helloWorld").fadeOut(2000);
        $("#convertYour").delay(3000).fadeIn(3000);
        $("#start").delay(3200).fadeIn(5000);
   
    
convertCurrency()
});



