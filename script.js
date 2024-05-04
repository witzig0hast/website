function gotomainpage() {
    var currentPage = window.location.pathname.split("/").pop();
    
    if (currentPage === "index.html") {
        alert("You are currently on the main page.");
    }
    else { 
        console.log("Open Site:" +currentPage)
        window.location.href = "..//index.html";
    }
}

function gotoaboutpage() {
    var currentPage = window.location.pathname.split("/").pop();
    
    if (currentPage === "aboutus.html") {
        alert("You are currently on the about us page.");
    }
    else {
        if (currentPage === "index.html") { 
        window.location.href = "sites/aboutus.html";
    }
        else {
        window.location.href = "..//sites/aboutus.html";  
        }
    }   
}

function gototeampage() {
 
        var currentPage = window.location.pathname.split("/").pop();
    
    if (currentPage === "team.html") {
        alert("You are currently on the team page.");
    }
    else {
        if (currentPage === "index.html") { 
        window.location.href = "sites/team.html";
        }
        else {
        window.location.href = "..//sites/team.html";  
        }
    }
}