var doodle = document.getElementById('hplogo');

var doodle_link = doodle.getElementsByTagName('a')[0];

var doodle_link_img = doodle_link.getElementsByTagName('img')[0];

// Automatic height
doodle_link_img.removeAttribute('height');

// FIXME: not the real alt text
doodle_link_img.title = "WOLOLO";

// FIXME: use the xkcd JSON API to fetch this automatically
doodle_link_img.src = "https://imgs.xkcd.com/comics/usb_cables.png";

// // ---------- Moving things around to fix the page layout XD -----------

// // Remove stinky share thing. NOBODY USES THE SHARE THING.
var stinky_sharer = document.getElementsByClassName('_P7b')[0];
stinky_sharer.remove();

// Loose search form and insert it after the xkcd doodle

console.log("Getting DOM shit");

var mainList = document.getElementById('viewport');
var searchForm = document.getElementById('searchform');

console.log("Got DOM shit");

// console.log("Setting static shit");

// searchForm.removeAttribute('position');
// // searchForm.setAttribute('position', 'static');

// console.log("Done with static shit");















// // ALL OF THIS DOESNT WORK

// // console.log("What about top");
// // searchform.style.top = "1500px";
// // console.log("Done with top");

// console.log("Setting DOM shit");

// mainList.appendChild(searchform);
// mainList.insertBefore(mainNode, mainList.childNodes[4]);

// console.log("Setting DOM shit");


