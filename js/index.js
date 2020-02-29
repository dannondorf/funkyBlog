import './addEditForm.js';
import {read, headers, data} from './dataUtils.js';
import {populateTableHeaders, populateTableRows} from './tableBuilder.js';

const mainNav = document.querySelector('main section nav');
/**
 * Main Section Nav Button Clicks 
 * "POSTS" or "COMMENTS"
 */
mainNav.addEventListener('click', loadData);
mainNav.querySelector('button:first-of-type').click();

function loadData(e) {
    if (e.target.textContent == 'Posts') {
         read('posts').then(loadTable);
    }
    if (e.target.textContent == 'Comments') {
        read('comments').then(loadTable);
    }
    function loadTable(){
        populateTableHeaders(headers);
        populateTableRows(data, headers);
    }
}






