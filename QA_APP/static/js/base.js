$(function () {
   $('#main-nav a').click(function() {
     $(".mega-menu:not([data-menu='" + $(this).data('menu') + "'])").each(function() {
        if ($(this).is(':visible')) {
          $(this).slideToggle(500);
        }
     });
     $(".mega-menu[data-menu='" + $(this).data('menu') + "']").slideToggle(500);
   });

  $('.close-menu').click(function() {
    $(".mega-menu:visible").slideToggle(500);
  });

  $('#responsive-menu-button').click(function() {
     $('#responsive-menu').slideToggle(500);
  });
});