function changeLanguage(i18n, stateLan) {
  let language = "en";
  if (stateLan.lan === "en") {
    i18n.changeLanguage("it");
    language = "it";
  } else {
    i18n.changeLanguage("en");
    language = "en";
  }
  return language;
}

export { changeLanguage };
