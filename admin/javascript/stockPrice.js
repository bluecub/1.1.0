let socket = new WebSocket("wss://ws.twelvedata.com/v1/quotes/price?apikey=8c3f373703924de8b7d1020af6c28176");

var data = JSON.stringify({'action':"subscribe", "params":{'symbols':"BT.A:LSE,RY"}})

socket.onopen = function(e) {
  socket.send(data);
};

socket.onmessage = function(event) {

  var data = event.data;
  var fd = new FormData();
  fd.append('data', data)
  var xhr = new XMLHttpRequest();
  xhr.onload = () =>{
    console.log(xhr.response);
  }
  xhr.open('POST', 'API/stockData.php?fn=set');
  xhr.send(fd);
  
};

socket.onerror = function(error) {
    alert(`[error] ${error.message}`);
};
