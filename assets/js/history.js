let competitionNames = [
  "Copa del Rey",
  "La Liga",
  "Supercopa de Espa&ntilde;a",
  "UEFA Champions League",
  "UEFA Cup Winners' Cup",
  "UEFA Super Cup"
];

let nbrOfTroph = [32, 28, 15, 5, 5, 5];

let tbody = document.getElementById("tbody_id");

for (var i = 0; i < competitionNames.length; i++) {
  tbody.innerHTML +=
    "<tr>" +
      "<td>" + competitionNames[i] + "</td>" +
      "<td>" + nbrOfTroph[i] + "</td>" +
    "</tr>";
}

var p_tags = document.getElementsByClassName("text-two");
var p_titles = document.getElementsByClassName("text-one");
let paragraph1 = '<span class="marked-text">Joan Gamper</span>, a swiss football executive, alongside a dozen other football enthusiasts, came together and formed the club on <span class="marked-text">November 29, 1899</span>. The year after, the infamous <span class="marked-text">Blaugrana</span> kit was first assembled and used in an official match. The club then started competing in Spain\'s first division of football, marking the start of a journey that continues to this very day. Over time, the club gained the nickname <span class="marked-text">Bar&ccedil;a</span> to distinguish it from the city it is located in.';
p_tags[0].innerHTML = paragraph1;
let paragraph2 = 'During its first 100 years of existence, the club went through many ups and downs. Interrupted by two major World Wars, the team\'s progress stagnated severely. Spain\'s political climate did not help either, as the then-dictator Francisco Franco repeatedly tried to prevent the club from succeeding in any way. <span class="marked-text">Club rivalries</span> were very prominent in Spain during that time. Bar&ccedil;a was a part of two major rivalries - the one with Real Madrid, and the one with Espanyol, which was also located in Barcelona. Both rivalries got their own special names for when the two teams would face each other, and they were named <span class="marked-text">El Cl&aacute;sico and Derbi Barcelon&iacute;</span>, respectively. The despair ended when a certain Dutch player joined the club. <span class="marked-text">Johan Cruyff</span> first started playing for Barcelona during the 1973/74 season, quickly proving that he was one of the best players of his generation. He later went on to coach the team, leading them to their <span class="marked-text">first Champions League trophy</span> in the 1991/92 season. Cruyff also invented the famous <span class="marked-text">tiki-taka</span> playstyle, whose philosophy centered around constant movement of the ball during the game. They ended that decade as one of the most prestigious football clubs in the world.'
p_tags[1].innerHTML = paragraph2;
let paragraph3 = 'Since the turn of the century, the club won four additional Champions League titles and twelve La Liga titles. They also achieved two sextuples in that period, being the only club to do so. Financially, this was the hardest period for the club. The amount of debt kept growing due to unpaid wages and reckless transfer spendings. This was the reason why the club had to let go of <span class="marked-text">Lionel Messi</span>, the greatest player of his generation. Since then, the things have calmed down, and Bar&ccedil;a is slowly getting back to where it once was.'
p_tags[2].innerHTML = paragraph3;
let paragraph4 = 'On paper, the club is having a very good season. Although, things are different if you look at their performance on the pitch. Their defensive prowess seems to have worsened a little, compared the last season. Numerous injuries have also plagued the team collectively, but the situation is starting to improve. They are still in competition for every trophy this season, first of which will be the <span class="marked-text">Spanish Super Cup</span>. ';
p_tags[3].innerHTML = paragraph4;

p_titles[0].innerHTML = 'The Beginning of FC Barcelona';
p_titles[1].innerHTML = 'The 20th Century';
p_titles[2].innerHTML = 'The Trophy Cabinet';
p_titles[3].innerHTML = 'The 21st Century';
p_titles[4].innerHTML = '25/26 Season So Far';

