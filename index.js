'use strict';

const addItemToList = function(event) {
  event.preventDefault();
  const searchText = $('.js-shopping-list-entry');
  $('.shopping-list').append(`
            <li>
                <span class="shopping-item">${searchText.val()}</span>
                <div class="shopping-items-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">Check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">Delete</span>
                    </button>
                </div>
            </li>`);
  searchText.val('');
    
};

const deleteButton = $('.shopping-item-delete');



$(
  function () {
    const buttonTry = $('.js-shopping-list-entry').siblings(':submit');
    buttonTry.click(addItemToList);
  }
//   function(){
//       $('ul').on('click', '.shopping-list-item-delete' , function(event){
//     $('li').remove();
//       });

      
//   }
);





