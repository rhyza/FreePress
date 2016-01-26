/* Selects the first 3 elements with the class "group" and shows them.
 * On click, selects and shows the next 3 "group" elements then checks
 * if any hidden "group" elements still exists. If not, load more
 * button is hidden. */
var main = function() {
  $(".group").slice(0, 3).show(); 
    
  $(".arrow").click(function() {
    $(".group:hidden").slice(0, 3).show();
    if($(".group:hidden").length == 0) {
      $(".arrow").hide();
    }
  });
};

$(document).ready(main);