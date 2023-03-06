// cookie functions
function set_cookie(name, value, expires = 1, unit = "h") {
  const time = new Date();
  let factor = 1;
  switch (unit) {
    case "y":
      factor = 60 * 60 * 24 * 365.25
      break;
    case "d":
      factor = 60 * 60 * 24;
      break;
    case "m":
      factor = 60;
      break;
    case "s":
      factor = 1;
      break;
    case "h":
    default:
      factor = 60 * 60;
  }
  time.setTime(time.getTime() + (expires * factor * 1000));
  document.cookie = `${name}=${value};expires=${time.toUTCString()};path=/`;
}

function get_cookie(name) {
  name = `${name}=`;
  let array = document.cookie.split(";");
  for (let i = 0; i < array.length; i++) {
    let char = array[i];
    while (char.charAt(0) === " ")
      char = char.substring(1);
    if (char.indexOf(name) === 0)
      return char.substring(name.length, char.length);
  }
  return null;
}

// theme functions
function to_theme(theme) {
  return theme === "dark" ? "dark" : "light";
}

function set_theme(theme) {
  $("html").attr("data-theme", theme);
  set_cookie("theme", theme, 1, "y");
}

function get_theme(from_attr = false) {
  if (from_attr)
    return to_theme($("html").attr("data-theme"));
  return to_theme(get_cookie("theme"));
}

// debug functions
function set_debug(switch_on) {
  $("html").attr("debug", switch_on ? "true" : "false");
}

function get_debug() {
  return $("html").attr("debug") === "true";
}

// routine when document is ready
$(document).ready(function () {
  // update theme from cookie
  set_theme(get_theme());

  // add 'no_icon' class to links including images
  function parent_no_icon(element) { $(element).parent().addClass("no_icon"); }
  $("a > img").each(() => { parent_no_icon(this); });
  $("a > pictures").each(() => { parent_no_icon(this); });

  // open external urls in new tab
  $("a").each(function () {
    var a = $(this);
    var href = a.attr("href");
    if ((href ? href : "").includes("://") && !a.attr("target"))
      a.attr("target", "_blank");
  });

  // functionality for debug switch button
  $(".debug-switch").on("click touch", (evt) => {
    set_debug(!get_debug());
  });

  // functionality for theme selector button
  $(".theme-selector").on("click touch", (evt) => {
    set_theme($("html").attr("data-theme") === "dark" ? "light" : "dark");
  });
});