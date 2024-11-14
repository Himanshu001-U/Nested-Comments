document.addEventListener("DOMContentLoaded", function() {
    // let replyCount = 1; // Counter to keep track of replies

    // // Handle the reply button click
    // const replyButtons = document.querySelectorAll(".box1 button, .box2 button, .box3 button");
    // replyButtons.forEach(button => {
    //     button.addEventListener("click", function(event) {
    //         const parentBox = event.target.closest('.box1, .box2, .box3');
    //         const replyBox = createReplyBox();
    //         parentBox.appendChild(replyBox);
    //     });
    // });

    // Handle the edit button click
    const editButtons = document.querySelectorAll(".box2 .buttons button:nth-child(2), .box3 .buttons button:nth-child(2)");
    editButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            const parentBox = event.target.closest('.box2, .box3');
            const commentText = parentBox.querySelector('p');
            const currentText = commentText.textContent;
            
            // Prompt user to edit the comment text
            const newText = prompt("Edit your comment:", currentText);
            if (newText !== null && newText !== "") {
                commentText.textContent = newText;
            }
        });
    });

    // Handle the delete button click
    const deleteButtons = document.querySelectorAll(".box2 .buttons button:nth-child(3), .box3 .buttons button:nth-child(3)");
    deleteButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            const parentBox = event.target.closest('.box2, .box3');
            parentBox.remove();
        });
    });

    // Function to create a new reply box
    function createReplyBox() {
        const replyBox = document.createElement('div');
        replyBox.classList.add('box1'); // You can create a separate class for replies if needed

        const img = document.createElement('img');
        img.src = './images/pic.jpeg';
        img.alt = '';

        const h1 = document.createElement('h1');
        h1.textContent = `User ${replyCount}`;  // Dynamically update user names for each reply

        const p = document.createElement('p');
        p.textContent = 'Write your reply here...';

        const button = document.createElement('button');
        button.textContent = 'Reply';
        button.addEventListener('click', function() {
            const newReply = createReplyBox();
            replyBox.appendChild(newReply);
        });

        replyBox.appendChild(img);
        replyBox.appendChild(h1);
        replyBox.appendChild(p);
        replyBox.appendChild(button);

        replyCount++;  // Increment the counter for the next reply user

        return replyBox;
    }

    // Reset Button Functionality
    const resetButton = document.querySelector(".btn button");
    resetButton.addEventListener("click", function() {
        const main = document.querySelector("main");
        
        // Clear all replies (remove all dynamically added reply boxes)
        const replyBoxes = main.querySelectorAll('.box1, .box2, .box3');
        replyBoxes.forEach(box => {
            // Only remove replies, not the initial comment boxes
            if (box !== document.querySelector('.box1') && box !== document.querySelector('.box2') && box !== document.querySelector('.box3')) {
                box.remove();
            }
        });

        // Reset the reply count
        replyCount = 1;
        
        // Optionally, you can reset the initial state of any editable comments or elements.
        // For now, this clears only the replies and resets the user count.
    });
});
