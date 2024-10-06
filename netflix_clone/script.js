// Developed by Aloisio Langa | GitHub: https://github.com/seu-usuario
$(document).ready(function () {
    let index = 0;
    const items = $('.carousel-item');
    const totalItems = items.length;

    // Function to show the current item
    function showItem() {
        items.each(function (i) {
            $(this).css('transform', 'translateX(' + (-index * 220) + 'px)');
        });
    }

    // Next button
    $('.next').click(function () {
        index = (index + 1) % totalItems; // Loop back to the start
        showItem();
    });

    // Previous button
    $('.prev').click(function () {
        index = (index - 1 + totalItems) % totalItems; // Loop back to the end
        showItem();
    });
});
