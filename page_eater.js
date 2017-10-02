console.log("Getting logo...");
var doodle = document.getElementById('hplogo');

var xkcd_img = document.createElement("img");

xkcd_img.id = "xkcd_img";
// xkcd_img.src = "https://imgs.xkcd.com/comics/usb_cables.png";
// xkcd_img.title = "Here goes the alt text :D";

doodle.appendChild(xkcd_img);

/////////////// USAGE OF SETTINGS /////////////////

function onError(error) {
  console.log(`Error: ${error}`);
}

var display_last_comic = true;
function onGot(settings) {

	console.log("Got settings!");
	display_last_comic = settings.display_last_comic;

	if(display_last_comic) {
		console.log("[Setting] Displaying last comic...");
	}
	else {
		console.log("[Setting] Displaying random comic...");
	}



	var json_URL = '';
  fetch('https://xkcd.com/info.0.json')
  .then(function(response) {
  return response.json();
  })
  .then(function(json) {
  var num = json.num;
  var random_number = Math.floor((Math.random() * num) + 1);; ////Gets a random number for the comic
  var n_str = random_number.toString();
  if(display_last_comic) {
		n_str = num.toString();
	}
  var str_URL = 'https://xkcd.com/';
  var str_URL2 = '/info.0.json';
	json_URL = str_URL.concat(n_str.concat(str_URL2));
  console.log('after if');
  onKnownSetting(json_URL);
  })
  .catch(function(error) {
    console.log('There has been a problem with the fetch operation: ' + error.message);
  });
}  /// Final of function onGot

console.log("Getting settings...");

var getting_settings = browser.storage.local.get("display_last_comic");
getting_settings.then(onGot, onError);



///////////////////////////////////////////////////


function onKnownSetting(json_URL) {
  console.log(json_URL);
	console.log('Downloading comic from:' + json_URL);
	fetch(json_URL).then(function(response) {
	    	console.log("Recieved response from xkcd API!");
	    	return response.json();
	      }).then(function(json) {
	      xkcd_img.src = json.img;
	      xkcd_img.title = json.alt;
	    }).catch(function(error) {
	  console.log('There has been a problem with the fetch operation: ' + error.message);
	});;

}


///////////// FIXING GARBAGE STYLES //////////////


// Removing garbage styles
doodle.removeAttribute('onload');
doodle.removeAttribute('style');
doodle.removeAttribute('align');
doodle.removeAttribute('title');

// Removing stupid parent padding
doodle.parentElement.removeAttribute('style');

// Something
// FIXME: remember what this was
var _lga = document.getElementById('lga');
_lga.removeAttribute('style');

// Stupid blank height above the search bar.
// Without it, everything is nice and tight.
document.getElementById('body').childNodes[0].childNodes[1].removeAttribute('style');

//////////////////////////////////////////////////


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
