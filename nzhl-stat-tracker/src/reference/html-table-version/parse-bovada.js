var url =
  "https://proclubs.ea.com/api/nhl/clubs/matches?clubIds=104917&platform=xbox-series-xs&matchType=club_private";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("User-Agent", "Gecko/20100101");

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    console.log(xhr.status);
    console.log(xhr.responseText);
  }
};

xhr.send();
