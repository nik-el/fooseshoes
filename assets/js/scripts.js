"use strict";$(document).ready(function(){$(document).on("mouseover mouseout","a",function(e){var t=$(this).attr("href");t&&"#"!=t&&$("a").filter('[href="'+$(this).attr("href")+'"]').toggleClass("hover","mouseover"==e.type)})});