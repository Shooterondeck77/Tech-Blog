const submitComment = async (event) => {
    event.preventDefault();

    const commentBody = document.querySelector('.commentBody').value;

    if (commentBody) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ commentBody }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create comment');
        }
    }
};


document
    .querySelector('.postComment')
    .addEventListener('click', submitComment);
