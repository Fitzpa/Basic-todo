$("ul").on("click", "li", function markAsChecked() {
    $(this).toggleClass("completed");
})

//click on x to delete todo
$("ul").on("click", "span", function deleteTodo(event) {
    //fades the li for 500 miliseconds and then removes if completely
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation(); //stops bubbling up to other elements

});

$('input[type="text"]').keypress(function (event) {
    if (event.which === 13) {
        var todoStr = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i> </span>" + todoStr + "</li>");
    }
});

$(".fa-plus").on("click", function() {
    $('input[type="text"]').fadeToggle();
});