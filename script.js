var pageConfig = {};

// Fetch the configuration JSON file
fetch('config.json')
    .then(response => response.json())
    .then(data => {
        pageConfig = data;
    })
    .catch(error => console.error('Error loading config:', error));


    var pageConfig = {};

    // Fetch the configuration JSON file
    fetch('config.json')
        .then(response => response.json())
        .then(data => {
            pageConfig = data;
            createButtons();
        })
        .catch(error => console.error('Error loading config:', error));

    function switchPage(pageName) {
        var targetPage = pageConfig[pageName]?.url;
        if (!targetPage) {
            alert("The page does not exist in the configuration.");
            return;
        }

        var currentPage = window.location.href;
        if (currentPage === targetPage) {
            alert("You're currently on this page!");
        } else {
            window.location.href = targetPage; // Navigate to the target page
        }
    }

    function createButtons() {
        var container = document.getElementById('buttonContainer');
        for (var pageName in pageConfig) {
            if (pageConfig.hasOwnProperty(pageName)) {
                var button = document.createElement('button');
                button.textContent = pageConfig[pageName].name;
                button.onclick = (function(page) {
                    return function() {
                        switchPage(page);
                    };
                })(pageName);
                container.appendChild(button);
            }
        }
    }