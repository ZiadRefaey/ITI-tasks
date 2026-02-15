$("form").submit(function (e) {
  e.preventDefault();
  $(".todo-container").append(
    `<div class='content'> <p>${$("input").val()}</p>
    <button class="delete">Delete Todo</button>
    </div>`,
  );
  $(".delete").click(function (e) {
    $(this).parent().remove();
  });
});
