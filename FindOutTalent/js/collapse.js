const tabsBtn   = document.querySelectorAll(".accordion_item");
const tabsItems = document.querySelectorAll(".collapse");


tabsBtn.forEach(function(item) {
    
});

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {

            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }

    });
};

document.querySelector('.collapse').click();