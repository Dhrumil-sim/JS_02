// Script to toggle image slider visibility when the dropdown button is clicked
document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', function() {
        const parentRow = this.closest('tr');  // Get the parent product row
        const contentRow = parentRow.nextElementSibling;  // Get the next row (the dropdown content)

        // Toggle the display of the next row
        if (contentRow.style.display === 'table-row') {
            contentRow.style.display = 'none';  // Hide it
        } else {
            contentRow.style.display = 'table-row';  // Show it
        }
    });
});
