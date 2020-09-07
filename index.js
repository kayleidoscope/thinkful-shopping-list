$(function () {
    //when the shopping list form is submitted, do the following
    $('.js-shopping-list-form').submit(event => {
        // stop the default form submission behavior
        event.preventDefault();
        // put new item from input into a variable
        const newItem = $(event.currentTarget).find(`#shopping-list-entry`);
        // append the new item onto the shopping list ul
        $(".shopping-list").append(`<li>${newItem}</li>`);
    })
})

$(function () {
    // when the "Check" botton is clicked, do the following
    $('button .shopping-item-toggle').on("click", (function(event) {
        //toggle the class of the closest span
        $(event.currentTarget).closest('span').toggleClass('shopping-item_checked');
    })
)});


$(function () {
    //when the "Delete" button is clicked, do the following
    $('button .shopping-item-delete').on("click", (function(event) {
        $('.shopping-list').removeChild();
    }))
})