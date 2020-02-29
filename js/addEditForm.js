import { headers, update, create } from './dataUtils.js';
import { tBody, formSection, buttonSection, tableSection} from './environment.js';
import { buildForm } from './formBuilder.js';

//HIDE form section initially
formSection.style.display = 'none';

/**
 * EDIT or ADD Button listener will open EDIT Form
 */
tBody.addEventListener('click', edit);
tBody.addEventListener('click', add);
/**
 * Form Submit Event
 */
document.forms[0].addEventListener('submit', validate);
document.forms[0].addEventListener('reset', hideForm);

function edit(e) {
    if (e.target.textContent !== 'Edit') return;

    buildForm();
    showForm();
    populateForm(e.target.parentNode.parentNode.children);
}
function add(e){
    if (e.target.textContent !== 'Add') return;
    console.log(document.forms[0].elements)
}

function populateForm(row) {
    for (let i = 0; i < headers.length; i++) {
        document.forms[0].elements[headers[i]].value = row[i].textContent;
    }
    document.forms[0].elements['action'].value = 'edit';
}

function validate(e) {
    e.preventDefault();
    submit(e);
}

function submit(e) {
    const action = e.target.elements['action'].value;
    const post = {
        userId: e.target.elements['userId'].value,
        id: e.target.elements['id'].value,
        title: e.target.elements['title'].value,
        body: e.target.elements['body'].value
    }
    if(action === 'edit') {
        update(post, 'posts', post.id);
    }
    if(action === 'add'){
        create(post, 'posts');
    }
    hideForm();
}
function hideForm(){
    tableSection.style.display = 'block';
    buttonSection.style.display = 'block';
    formSection.style.display = 'none';
}
function showForm(){
    formSection.style.display = 'block';
    tableSection.style.display = 'none';
    buttonSection.style.display = 'none';
}

