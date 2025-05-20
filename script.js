let listContainer = document.getElementById('list-container');

let inputBox = document.getElementById('input-box');

function addtask() {
    if (inputBox.value === '') {
        alert('Add Your Task');
    }
    else {
        let task = document.createElement('li');
        task.textContent = inputBox.value;
        listContainer.appendChild(task);

        let span = document.createElement('span');
        span.textContent = '\u00d7'
        task.appendChild(span);
    }
    inputBox.value = '';//cleare the add your text in c++
    saveData();

}

listContainer.addEventListener('click', (el) => {
    if (el.target.tagName == 'LI') {
        el.target.classList.toggle('checked');
        saveData();
    }
    else if (el.target.tagName == 'SPAN') {
        el.target.parentElement.remove();
        saveData();
    }
});
//save the data
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Show data function
function showDatas() {
    listContainer.innerHTML = localStorage.getItem('data');
}

showDatas();
