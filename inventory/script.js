function addItem(){
    const itemName = document.querySelector('#itemName').value;
    const quanity = document.querySelector('#quanity').value;

    if(itemName && quanity){
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
           <td>${itemName}</td>
           <td>${quanity}</td>
        `;
        document.getElementById('inventoryBody').appendChild(newRow);
        document.querySelector('#itemName').value = "";
        document.querySelector('#quanity').value = "";
    }else{
        alert("Please enter both item name and quanity.");
    }
}