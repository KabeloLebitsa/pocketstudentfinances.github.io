

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function top_nav_response() 
{
    var x = document.getElementById("topnav");

    if (x.className === "navbar_menu") 
    {
      x.className += " responsive";
    } 
    else 
    {
      x.className = "navbar_menu";
    }
}


