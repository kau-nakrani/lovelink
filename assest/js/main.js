/******** JS INDEX *********
  1.Multi step form
    1.1 Phone number
    1.2 Preview and Next button
******** JS INDEX *********/

(function ($) {
  //1.1 Phone number
  $("#mobile_code").intlTelInput({
    initialCountry: "in",
    separateDialCode: true,
  });

  //1.2 Preview and Next button
  //Preview button for multi step form
  jQuery(document).on("click", "#prevbtn", function (e) {
    e.preventDefault();
    let PreviewButton = jQuery("#multiplesteup .active ").data("pre-section");
    let NextButton = jQuery("#multiplesteup .active ").data("next-section");
    if (PreviewButton === "login") {
      window.location.replace("index.html");
    } else {
      jQuery("#multiplesteup ." + PreviewButton).hide();
      jQuery("#multiplesteup ." + NextButton).show();
    }
  });
  //Next button for multi step form
  jQuery(document).on("click", "#nextbtn", function (e) {
    e.preventDefault();
    let NextButton = jQuery("#multiplesteup .active ").data("next-section");
    let PreviewButton = jQuery("#multiplesteup .active ").data("pre-section");
    if (NextButton !== "") {
      if (PreviewButton == "login") {
        jQuery("#multiplesteup .step-1").hide();
        jQuery("#multiplesteup ." + NextButton).removeClass("d-none");
      } else {
        jQuery("#multiplesteup ." + PreviewButton).hide();
        jQuery("#multiplesteup ." + NextButton).show();
      }
    }
  });
})(jQuery);
