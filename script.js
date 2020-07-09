var btnList = ["myBtn", "Append", "Prepend", "To Console", "To String"]

function generateTextFields() {
    var newDiv = document.createElement('div');
    if(newDiv) {
        document.body.appendChild(newDiv);
        newDiv.setAttribute('id','txtDiv');

        var input = document.createElement('input');
        input.setAttribute('id', 'nodeInput');
        newDiv.appendChild(input);
    }
    else {
        console.log("Failed to append to body")
    }
}

function generateButtons() {
    var div = document.getElementById('div0');

    btnList.forEach(element =>  {
        var btn = document.createElement('button');
        btn.innerText = element;
        btn.setAttribute('id', element)
        div.appendChild(btn);
    });
}

window.addEventListener('load', (event) => {
    console.log("Window Loaded");
    generateButtons();
    generateTextFields();
})
