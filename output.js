function submitForm() {
    const text = document.getElementById('text').value;
    const image = document.getElementById('image').files[0];
    const model = document.getElementById('model').value;

    if (text && image && model) {
        sessionStorage.setItem('text', text);
        sessionStorage.setItem('model', model);

        const reader = new FileReader();
        reader.onload = function(event) {
            // Store the base64 string of the image in sessionStorage
            sessionStorage.setItem('image', event.target.result);
            
            window.location.href = 'redirect.html';
        };
        reader.readAsDataURL(image); // Convert image to base64
    } else {
        alert("Please fill all the fields!");
    }
}

