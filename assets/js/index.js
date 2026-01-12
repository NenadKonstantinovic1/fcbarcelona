var p_tags = document.getElementsByClassName("text-two");
var p_titles = document.getElementsByClassName("text-one");

let paragraph1 = 'FC Barcelona, located in Barcelona, Spain, was founded on <span class="marked-text">November 29th, 1899</span>. They play in <span class="marked-text">Blaugrana</span> (blue and garnet) kits, a long tradition that spans to the early 20th century. Their stadium is the <span class="marked-text">Camp Nou</span>, which ranks first in stadium capacity in Europe. The supporters, locally known as <span class="marked-text">Cul&eacute;s</span>, attend as much games as possible and cheer like there\'s no tomorrow.FC Barcelona\'s unique and infamous <span class="marked-text">tiki-taka</span> playstyle earned them a place among the giants of European football. <span class="marked-text">La Masia</span>, Barcelona\'s youth academy, has produced many talented young players.'
p_tags[0].innerHTML = paragraph1;
let paragraph2 = 'FC Barcelona is not just a football team. It is a symbol of <span class="marked-text">Catalonia\'s passion, tradition and pride</span>. It has been recognized for its unique playing style, legendary history and the unshakable loyalty of its supporters.'
p_tags[1].innerHTML = paragraph2;

p_titles[0].innerHTML = 'Essential Information';
p_titles[1].innerHTML = '<em>M&eacute;s que un club</em> - <span class="marked-text">More than a club</span>';