// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


// Toggle between showing and hiding the sidenav when clicking the menu icon
var mySidenav = document.getElementById("mySidenav");

function w3_open() {
    if (mySidenav.style.display === 'block') {
        mySidenav.style.display = 'none';
    } else {
        mySidenav.style.display = 'block';
    }
}

// Close the sidenav with the close button
function w3_close() {
    mySidenav.style.display = "none";
}


//smooth scrolling
$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

 $(document).ready(function (){
            $("a[href='#about']").click(function (){
                $('html, body').animate({
                    scrollTop: $("#about").offset().top
                }, 1000);
            });
        });

 $(document).ready(function (){
            $("a[href='#photo']").click(function (){
                $('html, body').animate({
                    scrollTop: $("#photo").offset().top
                }, 1000);
            });
        });

 $(document).ready(function (){
            $("a[href='#team']").click(function (){
                $('html, body').animate({
                    scrollTop: $("#team").offset().top
                }, 1000);
            });
        });

  $(document).ready(function (){
            $("a[href='#contact']").click(function (){
                $('html, body').animate({
                    scrollTop: $("#contact").offset().top
                }, 1000);
            });
        });
