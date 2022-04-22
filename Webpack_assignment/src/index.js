import webpackLogo from './images/webpack-logo.gif';
import('./index.css');

let logo = document.createElement('img')
logo.setAttribute('id', 'logo')
logo.src = webpackLogo;

let root = document.getElementById('root');


    let mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'mainDiv');

    let inputField = document.createElement('input');
    inputField.setAttribute('id', 'inputField');

    let label = document.createElement('label');
    label.setAttribute('for', 'inputField');
    label.innerText = 'Note: ';

    let submitBtn = document.createElement('button');
    submitBtn.innerText = 'SUBMIT';

    let resetBtn = document.createElement('button');
    resetBtn.innerText = 'RESET';

mainDiv.append(logo, label, inputField, submitBtn, resetBtn);

let notesDiv = document.createElement('div');
notesDiv.setAttribute('id', 'notesDiv');

submitBtn.addEventListener('click', () => {
    let note = document.createElement('h2');
    note.innerText = inputField.value;

    notesDiv.append(note);
    inputField.value = null;
    inputField.focus();
});

resetBtn.addEventListener('click', () => {
    notesDiv.innerHTML = null;
    inputField.value = null;
    inputField.focus();
});

root.append(mainDiv, notesDiv);