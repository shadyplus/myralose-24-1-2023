$(document).ready(function () {
  $("a[data-jump^='#']").click(function () {
    var _href = $(this).attr("data-jump");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });

  $(".boxes > div").click(function () {
    if ($(this).parent().hasClass("boxesfirsttry")) {
      $(".boxes").removeClass("boxesfirsttry");
      $(this).addClass("openbox");
      $(this).find(".try").hide();
      $(this).find(".opentry").show();
      setTimeout(function () {
        $(".sweet-overlay").show();
        $(".sweet-alert").show();
      }, 500);
    } else if ($(this).parent().hasClass("boxeslasttry")) {
      if (!$(this).hasClass("openbox")) {
        $(this).find(".try").hide();
        $(this).find(".opentry").show();
        $(this).find(".boxtext").css("display", "block");
        setTimeout(function () {
          if ($(".new-comebacker-overlay").is(":visible"))
            $(".new-comebacker-overlay").hide();
          $(".new-comebacker-overlay .boxes-is-open").show();
          $(".new-comebacker-overlay .boxes-not-open").hide();
          $(".spin-result-wrapper").show();
          setTimeout(function () {
            $("#boxesContainer").slideUp(250);
            setTimeout(function () {
              $(".order_block").slideDown(250);
            }, 500);
          }, 500);
        }, 500);
      }
    }
  });
  $("#update").click(function () {
    $(".sweet-overlay").hide();
    $(".sweet-alert").hide();
    $(".boxes").addClass("boxeslasttry");
  });
  $(".pop-up-button, .close-popup").click(function () {
    $(".spin-result-wrapper").hide();
  });
});

var $page = $("html, body");
$('a[href*="#"]').click(function () {
  $page.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    400
  );
  return false;
});

(function (m, e, t, r, i, k, a) {
  m[i] =
    m[i] ||
    function () {
      (m[i].a = m[i].a || []).push(arguments);
    };
  m[i].l = 1 * new Date();
  (k = e.createElement(t)),
    (a = e.getElementsByTagName(t)[0]),
    (k.async = 1),
    (k.src = r),
    a.parentNode.insertBefore(k, a);
})(
  window,
  document,
  "script",
  "https://mc.yandex.ru/metrika/tag.js",
  "ym"
);
ym(86381380, "init", {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true,
});
