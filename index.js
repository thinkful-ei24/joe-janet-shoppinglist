'use strict';

const addItem = function(entry) {
    const htmlText = 
        `<li>
        <span class="shopping-item">${entry}</span>
        <div class="shopping-items-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">Check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">Delete</span>
            </button>
        </div>
    </li>`
    $('.shopping-list').append(htmlText);
}


$($('form').on('submit', function(event) {
    event.preventDefault();
    const textEntry = $('.js-shopping-list-entry').val();
    addItem(textEntry);
    $('.js-shopping-list-entry').val('');
    }
));

$(
  function(){
    const deleteButton = $('.shopping-item-delete');
    $('.shopping-list').on('click', '.shopping-item-delete',
      function(event){
        this.closest('li').remove();});
  }

);

          






