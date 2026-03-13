// Save the reference to text-field into a variable.
const itemInput = document.getElementById('item-input');

// Save the reference to new-item button into a variable.
const addBtn = document.getElementById('add-btn');

// Save the reference to unordered list into a variable.
const shoppingList = document.getElementById('shopping-list');

// Save the reference to paragraph for feedback
const feedback = document.querySelector('.feedback');

// Start function addItem.
function addItem() {

  // Create list-item and store output in a variable.
  const listItem = document.createElement('li');

  // Check if user entered the value in input text-field.
  if (itemInput.value.trim() !== '') {

    // Use textContent property on created list-item
    // and assign it with the value of the text written in the text-field
    listItem.textContent = itemInput.value.trim();

    // Append list item to unordered list.
    shoppingList.appendChild(listItem);

    // Clear a feedback-message.
    feedback.textContent = '';
    feedback.classList.remove('show', 'error');

    // Clear the text-field.
    itemInput.value = '';

    // Put the cursor back to text-field
    itemInput.focus();

  } else {
    // Print the message nothing entered in the paragraph "feedback"
    feedback.textContent = 'Nothing entered!';
    feedback.classList.add('show', 'error');
    itemInput.focus();
  }

} // End function addItem.

// Register your function addItem for click event on button.
addBtn.addEventListener('click', addItem);

// Also allow pressing Enter in the input field
itemInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') addItem();
});
