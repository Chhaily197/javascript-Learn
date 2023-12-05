function loadContent(page){
    const contentElement = document.getElementById('editor_slide_left');

    const contentMap = {
        grid: '<p>Grid</p>',
        text: '<p>Text</p>',
        list: '<p>List</p>',
        table: '<p>Table</p>',
    };

    contentElement.innerHTML = contentMap[page];

    history.pushState({page}, null, `#${page}`);
}

window.onpopstate = function(e){
    const contentElement = document.getElementById('editor_slide_left');
    const page = e.state ? e.state.page : 'grid';
    contentElement.innerHTML = contentMap[page];
}

window.onload = function(){
    const initailPage = window.location.hash ? window.location.hash.substring(1) : 'grid';
    loadContent(initailPage);
}
