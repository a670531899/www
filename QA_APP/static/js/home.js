$(function () {
    $('#main-nav a').click(function () {
        $(".mega-menu:not([data-menu='" + $(this).data('menu') + "'])").each(function () {
            if ($(this).is(':visible')) {
                $(this).slideToggle(500);
            }
        });
        $(".mega-menu[data-menu='" + $(this).data('menu') + "']").slideToggle(500);
    });

    $('.close-menu').click(function () {
        $(".mega-menu:visible").slideToggle(500);
    });

    $('#responsive-menu-button').click(function () {
        $('#responsive-menu').slideToggle(500);
    });

});

document.getElementById("search").addEventListener('keypress', function(event){
  if(event.keyCode === 13) {
      getEntry();
  }
});

var createScript = function(url) {
    var script = document.createElement('script');
    script.src = url

    document.body.appendChild(script);
};
var createLink = function(page) {
    var a = document.createElement("a");
    var baseUrl = "https://en.wikipedia.org/wiki/result.html?curid=";
    var url = baseUrl + page;
    var searchResult = document.getElementById("searchResult");

    a.href = url;
    a.setAttribute("target", "blank");
    a.setAttribute("id", page);

    searchResult.appendChild(a);
}

var getEntry = function() {
    var searchEntry = document.getElementById("search");
    var baseUrl = 'https://en.wikipedia.org/w/api.php?';
    var url = baseUrl+"action=query&generator=search&gsrsearch="+searchEntry.value+"&prop=extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&callback=parseEntry&format=json";

    createScript(url);
};

var parseEntry = function(data) {
    var pages = data.query.pages;
    var searchResult = document.getElementById("searchResult");

    if(searchResult) {
       while(searchResult.firstChild) {
           searchResult.removeChild(searchResult.firstChild);
       }
    }
    for(var page in pages) {
        createLink(pages[page].pageid);
        var link = document.getElementById(pages[page].pageid);
        link.innerHTML =  "<div>"+"<h2>"+pages[page].title+"</h2>"
                         +"<p>"+pages[page].extract+"</p>"+"</div>";
    }
};


