// This file manages the feedback page functionality, including form submissions and displaying user testimonials.

document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedback-form');
    const feedbackList = document.getElementById('feedback-list');

    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        if (name && message) {
            const feedbackItem = document.createElement('li');
            feedbackItem.textContent = `${name}: ${message}`;
            feedbackList.appendChild(feedbackItem);

            feedbackForm.reset();
        } else {
            alert('يرجى ملء جميع الحقول.');
        }
    });
});