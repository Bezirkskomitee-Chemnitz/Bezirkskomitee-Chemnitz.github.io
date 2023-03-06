// cookie functions
function set_cookie(cookieName, cookieValue, expiredTime = 1, unit = "h") {
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
  time.setTime(time.getTime() + (expiredTime * factor * 1000));
  let expires = "expires=" + time.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function get_cookie(cookieName) {
  let name = cookieName + "=";
  let cookieArray = document.cookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    let cookieChar = cookieArray[i];
    while (cookieChar.charAt(0) === " ") {
      cookieChar = cookieChar.substring(1);
    }
    if (cookieChar.indexOf(name) === 0) {
      return cookieChar.substring(name.length, cookieChar.length);
    }
  }
  return null;
}

// theme functions
function set_theme(theme) {
  $("html").attr("data-theme", theme);
  set_cookie("theme", theme, 1, "y");
}

function get_theme(from_attr = false) {
  if (from_attr) return $("html").attr("data-theme");
  return get_cookie("theme");
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
  $("a > img").each(function () {
    $(this).parent().addClass("no_icon");
  });
  $("a > pictures").each(function () {
    $(this).parent().addClass("no_icon");
  });

  // open external urls in new tab
  $("a").each(function () {
    var a = $(this);
    var href = a.attr("href");
    if ((href ? href : "").includes("://") && !a.attr("target")) {
      a.attr("target", "_blank");
    }
  });

  // functionality for debug switch button
  $(".debug-switch").on("click touch", (evt) => {
    // toggle state
    set_debug(!get_debug());
  });

  // functionality for theme selector button
  $(".theme-selector").on("click touch", (evt) => {
    if ($("html").attr("data-theme") === "dark") {
      set_theme("light");
    } else {
      set_theme("dark");
    }
  });
});