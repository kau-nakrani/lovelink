/******** JS INDEX *********
 * 
  1.Multi step form
    1.1 Phone Number
    1.2 Preview and Next button
    1.3 OTP Number
    1.4 Border

******** JS INDEX *********/

(function ($) {
  /*--------------------------
  1.1 Phone Number
--------------------------*/

  $("#mobile_code").intlTelInput({
    initialCountry: "in",
    separateDialCode: true,
  });

  /*-----------------------------
  1.2 Preview and Next button
-----------------------------*/

  //Preview button for multi step form
  jQuery(document).on("click", "#prevbtn", function (e) {
    e.preventDefault();
    let PreviewButton = jQuery("#multiplesteup .active ").data("pre-steup");

    //index.html
    if (PreviewButton == "index.html") {
      window.location.replace(PreviewButton);
    } else {
      jQuery("#multiplesteup section")
        .hide()
        .removeClass("active")
        .addClass("d-none");
      jQuery("#multiplesteup ." + PreviewButton)
        .show()
        .addClass("active")
        .removeClass("d-none");
    }
  });

  //Next button for multi step form
  jQuery(document).on("click", "#nextbtn", function (e) {
    e.preventDefault();
    let NextButton = jQuery("#multiplesteup .active").data("next-steup");
    let nextClass = jQuery("#multiplesteup ." + NextButton).length;
    //index.html
    if (NextButton !== "" && nextClass > 0) {
      jQuery("#multiplesteup section")
        .hide()
        .removeClass("active")
        .addClass("d-none");
      jQuery("#multiplesteup ." + NextButton)
        .show()
        .addClass("active")
        .removeClass("d-none");
    }
  });

  /*-----------------------------
  1.3. OTP Number
-----------------------------*/
  /*---------Past Number-----------*/

  document.querySelector(".otpnumber").addEventListener("paste", function (e) {
    var dataLength = e.clipboardData.getData("text").length;

    for (var i = 1; i <= dataLength; i++) {
      $("input[tabindex='" + i + "']").val(
        e.clipboardData.getData("text")[i - 1]
      );

      if (this.value.length >= this.maxLength) {
        $("input[tabindex='" + i + "']").focus();
      }
    }
  });

  /*---------Manual Enter Number-----------*/
  jQuery(document).on("keyup", ".otpnumber", function (e) {
    if (this.value.length >= this.maxLength) {
      if (e.keyCode !== 9 && e.keyCode !== 16) {
        var tabIndex = this.tabIndex + 1;
        $("input[tabindex='" + this.tabIndex + "']").val(this.value);
        $("input[tabindex='" + tabIndex + "']").focus();
      }
    } else {
      if (e.keyCode === 8) {
        var tabIndex = this.tabIndex - 1;
        $("input[tabindex='" + tabIndex + "']").focus();
      }
    }
  });

  /*-----------------------------
  1.4. Year Increase
-----------------------------*/
  let startYear = 1990;
  let endYear = new Date().getFullYear();
  for (i = endYear; i > startYear; i--) {
    $("#yearpicker").append($("<option />").val(i).html(i));
  }

  /*-----------------------------
  1.5. Border add and remove
-----------------------------*/
  jQuery('.checkbox-selected-lable input[type="checkbox"]').click(function () {
    jQuery(this).parents("label").toggleClass("selected-lable");
  });

  jQuery(document).on("click", ".themeicon-plus", function () {
    jQuery(this).next(".file-input").click();
  });

  jQuery(document).on("change", ".file-input", function (e) {
    jQuery(this)
      .next("img")
      .attr("src", URL.createObjectURL(e.target.files[0]))
      .removeClass("d-none");
    jQuery(this).prev(".themeicon-plus").hide();
  });
})(jQuery);
