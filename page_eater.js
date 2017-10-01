// Rest of add-on

console.log("Getting logo...");
var doodle = document.getElementById('hplogo');

var xkcd_img = document.createElement("img"); 

xkcd_img.id = "xkcd_img";
// xkcd_img.src = "https://imgs.xkcd.com/comics/usb_cables.png";
// xkcd_img.title = "Here goes the alt text :D";

doodle.appendChild(xkcd_img);
// var myHeaders = new Headers({
//   'content-type': 'application/json;charset=utf-8'
// });

// var myInit = { method: 'GET',
//                headers: myHeaders,
//                mode: 'cors',
//                cache: 'default' };
// // fetch('https://cors.now.sh/http://xkcd.com/info.0.json', myInit).then(function(response) { 
fetch('https://xkcd.com/info.0.json').then(function(response) { 
    	console.log("recieved response");
    	return response.json();
      }).then(function(json) {
      xkcd_img.src = json.img;
      xkcd_img.title = json.alt;
    }).catch(function(error) {
  console.log('There has been a problem with your fetch operation: ' + error.message);
});;

// Removing garbage styles
doodle.removeAttribute('onload');
doodle.removeAttribute('style');
doodle.removeAttribute('align');
doodle.removeAttribute('title');

// Removing stupid parent padding
doodle.parentElement.removeAttribute('style');


// TODO: this only worked for the Autumn doodle. Gotta generalize it.
// console.log("Getting link...");
// var doodle_link = doodle.getElementsByTagName('a')[0];

// console.log("Getting doodle img...");
// var doodle_link_img = doodle_link.getElementsByTagName('img')[0];

// // Automatic height
// console.log("Setting automatic height...");
// // doodle_link_img.removeAttribute('height');

// // FIXME: not the real alt text
// console.log("Setting alt text...");
// // doodle_link_img.title = "WOLOLO";

// // FIXME: use the xkcd JSON API to fetch this automatically
// console.log("Setting img source...");
// // doodle_link_img.src = "https://imgs.xkcd.com/comics/usb_cables.png";

// // ---------- Moving things around to fix the page layout XD -----------





















// // Remove stinky share thing. NOBODY USES THE SHARE THING.
console.log("Looking for stinky sharers...");
var stinky_sharers = document.getElementsByClassName('_P7b');

if(stinky_sharers.length > 0) {
	for(let sharer of stinky_sharers) {
		console.log("Removing stinky sharer...");
		sharer.remove();
	}
	console.log("No stinky sharers remaining.");
}
else {
	console.log("Did not find any sharers. Moving on...")
}

console.log("Looking for stinky subtexts...");
var stinky_subtexts = document.getElementsByClassName('logo-subtext');
if(stinky_subtexts.length > 0) {
	for(let subtext of stinky_subtexts) {
		console.log("Removing stinky subtext...");
		subtext.remove();
	}
	console.log("No stinky subtexts remaining.");
}
else {
	console.log("Did not find any subtexts. Moving on...")
}
