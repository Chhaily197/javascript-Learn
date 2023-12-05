let selectedOption = '';
function selectOption(opt){
    const slidebarLeft = document.getElementById('slidebar-left');
    slidebarLeft.innerHTML = "";

    switch(opt){
        case 'grid':
            slidebarLeft.innerHTML = `
            <div class="draggable col-1" draggable="true" ondragstart="drag(event)">Col 1</div>
            <div class="draggable col-2" draggable="true" ondragstart="drag(event)">Col 2</div>
            <div class="draggable col-3" draggable="true" ondragstart="drag(event)">Col 3</div>
            <div class="draggable col-4" draggable="true" ondragstart="drag(event)">Col 4</div>
            <div class="draggable col-5" draggable="true" ondragstart="drag(event)">Col 5</div>
            <div class="draggable col-6" draggable="true" ondragstart="drag(event)">Col 6</div>
            <div class="draggable col-7" draggable="true" ondragstart="drag(event)">Col 7</div>
            <div class="draggable col-8" draggable="true" ondragstart="drag(event)">Col 8</div>
            <div class="draggable col-9" draggable="true" ondragstart="drag(event)">Col 9</div>
            <div class="draggable col-10" draggable="true" ondragstart="drag(event)">Col 10</div>
            <div class="draggable col-11" draggable="true" ondragstart="drag(event)">Col 11</div>
            <div class="draggable col-12" draggable="true" ondragstart="drag(event)">Col 12</div> `;
        break;
        case 'text':
            slidebarLeft.innerHTML = '<div class="draggable" draggable="true" ondragstart="drag(event)">Grid Item 1</div>';
        break;
        case 'list':
            slidebarLeft.innerHTML = '<div class="draggable" draggable="true" ondragstart="drag(event)">Grid Item 1</div>';
        break;
        case 'table':
            slidebarLeft.innerHTML = '<div class="draggable" draggable="true" ondragstart="drag(event)">Grid Item 1</div>';
        break;
        default:
            break;
    }
    slidebarLeft.style.display = 'block';

    document.getElementById('center').innerHTML = "";
    document.getElementById('slidebar-right').style.display = "none";

    selectedOption = opt;
}

function allowDrop(event){
    event.preventDefault();
}

function drag(event){
    event.dataTransfer.setData('text/plain', event.target.outerHTML);
    event.target.classList.add('dragging');
    showRightSlide();
}

function drop(event){
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const newItem = document.createElement('div');
    newItem.className = 'draggale';
    newItem.innerHTML = data;
    newItem.draggable = true;
    newItem.ondragstart = drag;

    const center = document.getElementById('center');
    center.appendChild(newItem);

    const draggingItem =document.querySelector('.draggable.dragging');
    if(draggingItem){
        draggingItem.classList.remove('dragging');
    }
}

function showRightSlide(){
    document.getElementById('slidebar-right').style.display = 'block';
}

function customizeElement(event){
    event.preventDefault();
    const elementWidth = document.getElementById('element-width').value;
    const elementHeight = document.getElementById('element-height').value;

    const center = document.getElementById('center');
    const lastItem = center.lastChild;

    if(lastItem){
        lastItem.style.width = elementWidth ? elementWidth + 'px' : 'auto';
        lastItem.style.height = elementHeight ? elementHeight + 'px' : 'auto';
    }
}
