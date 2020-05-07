(function (){
    "use strict";
    var toolkitTabs = document.querySelectorAll("a .toolkitCategory");
    var resourcesLinksDisplayed = document.querySelectorAll("a.resource_name");
    var resource_notes = document.querySelectorAll(".resource_notes");
    var resource_names = document.querySelectorAll(".resource_name");
    
    console.log(resource_notes)
    var categories = [];
    var selectedCategoryIndex;

    // event listener to change list styling based on selected tab
    function tabNavigator(e) {
        var selectedCategory = e.currentTarget.classList[1];
        // add category-specific color coding by adding style
        for(var i = 0; i < resourcesLinksDisplayed.length; i++) {
            resourcesLinksDisplayed[i].classList.add(selectedCategory);
            for (var c = 0; c < categories.length; c++) {
                if (categories[c] !== selectedCategory) {
                    resourcesLinksDisplayed[i].classList.remove(categories[c]);
                } else {
                    // update current selected category index
                    selectedCategoryIndex = c;
                }
            }
        }
    }

    // updates displayed info based on selected category
    function loadInfo() {
        var url = 'api';
        
        fetch(url)
        .then(function(response) {
            // console.log(response.json())
            return response.json();
        })
        .then(function(info){
            console.log(info)

            for (var i = 0; i < resource_notes.length; i++) {
                resource_notes[i].innerHTML = info[selectedCategoryIndex].Resources[i].notes;
                resource_names[i].innerHTML = info[selectedCategoryIndex].Resources[i].name;
                resource_names[i].href = info[selectedCategoryIndex].Resources[i].link;
            }
        })
        .catch(function(error){
            console.log(error);
        });
    }

    // register listeners to change styling, and ~ load info
    for (var i = 0; i < toolkitTabs.length; i++) {
        toolkitTabs[i].addEventListener("click", tabNavigator);
        toolkitTabs[i].addEventListener("click", loadInfo);

        // save all available cateogries
        categories[i] = toolkitTabs[i].classList[1];
    }
}());