
var stop=1;
var cars = ["S", "T", "U", "W", "V"];
var lastId;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getAWinner(){
  var block = cars[getRandomInt(0, 4)];
  var row = getRandomInt(1, 18);
  var column = getRandomInt(1, 24);
  if(row < 10){
    row = "0" + row;
  }
  if(column < 10){
    column = "0" + column
  }
  var winner = (block + row + column);
  return winner;
}
function raffle() {
    if(stop == 0){
        setTimeout(raffle, 30);
        if(document.getElementById(lastId) != null){
          document.getElementById(lastId).className = "gr";
        }
        var w;
        for(;;){
          w = getAWinner();
          if(document.getElementById(w) != null){
            break;
          }
        }
        lastId = w;
        document.getElementById(w).className = "gr or";
    }
}
$(document).ready(function () {

  $("#start").click(function() {
    if(stop == 1){
      stop=0;
      raffle();
    }
  });

  $('#end').click(function(){
    stop = 1;
    $("div#res").text(lastId);
  });

});
