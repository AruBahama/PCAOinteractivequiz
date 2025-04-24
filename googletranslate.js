function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

document.addEventListener("DOMContentLoaded", function () {
  const div = document.createElement("div");
  div.id = "google_translate_element";
  document.body.insertBefore(div, document.body.firstChild);

  const script = document.createElement("script");
  script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.body.appendChild(script);
});
