const addItemToList = function() {
    function(event) {
        event.preventDefault();
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
            </li>`)
        searchText.val('');
    }
}


$(addItemListener = function () {
    let buttonTry = $(':submit');
    let searchText = $('.js-shopping-list-entry');
    $(':submit').click(addItemToList());
    }
)

