
var stop=1;
var cars = ["S", "T", "U", "W", "V"];
var nomore = [];
var lastId;
var lastArray;
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
    column = "0" + column;
  }
  var winner = [block, row, column];
  return winner;
}
function raffle() {
    if(stop == 0){
        setTimeout(raffle, 20);
        if(document.getElementById(lastId) != null){
          if(document.getElementById(lastId).className != "gr rd"){
            document.getElementById(lastId).className = "gr";
          }
        }
        var w;
        var wArray;
        for(;;){
          wArray = getAWinner();
          w = wArray[0] + wArray[1] + wArray[2];
          if(document.getElementById(w) != null && nomore.indexOf(w) === -1){
            break;
          }
        }
        lastId = w;
        lastArray = wArray;
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
    nomore.push(lastId);
    document.getElementById(lastId).className = "gr rd";
  //  $("div#block").text("Block\xa0\xa0\xa0\xa0\xa0" + lastArray[0]);
    $("#block_left").text("Block");
    $("#block_right").text(lastArray[0]);
    $("#row_left").text("Reihe");
    $("#row_right").text(lastArray[1]);
    $("#column_left").text("Sitz");
    $("#column_right").text(lastArray[2]);
  });

});
