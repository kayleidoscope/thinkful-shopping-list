function handleSubmit (event) {
    event.preventDefault()
    const newItem = $(this).find(`#shopping-list-entry`).val();
    const html = `<li>
          <span class='shopping-item'>${newItem}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`
    $(".shopping-list").append(html);
  }
  
  function handleCheck(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
  }
  
  function handleDelete(event){
    $(this).closest('li').remove();
  }

  $(function() {
    $("form").on("submit",handleSubmit);
    $("ul").on("click", ".shopping-item-toggle", handleCheck);
    $("ul").on("click", ".shopping-item-delete", handleDelete);
  })
  