function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    display_last_comic: document.querySelector("#rb_last").checked
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#rb_last").checked = result;
    document.querySelector("#rb_random").checked = !result;
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.local.get("display_last_comic");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);