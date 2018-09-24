var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

getJSON('https://www.naodigonada.com/chrome/extensions/SciFiDashboard/json/sciFiDashboard.json',
  function(err, data) {
    if (err !== null) {
      alert('Something went wrong: ' + err);
    } else {
      alert('Your query count: ' + data);
    }
  });