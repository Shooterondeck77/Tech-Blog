const submitComment = async (event) => {
    event.preventDefault()
    const post_id = document.getElementById('post-id').textContent;
    const commentBody = document.querySelector('.commentBody').value;

    if(commentBody) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ commentBody, post_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.reload()
        } else {
            //document.location.replace('/login');
            alert('Failed to create comment');
        }
    }
};


document
    .querySelector('.postComment')
    .addEventListener('click', submitComment);
