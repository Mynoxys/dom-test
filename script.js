document.getElementById('p-button').addEventListener('click', function() {
    var pDiv = document.getElementById('p-div');
    var newParagraph = document.createElement('p');
    newParagraph.className = 'paragraph';
    newParagraph.textContent = 'Hot chocolate is bad today';
    pDiv.appendChild(newParagraph);
});

document.getElementById('img-button').addEventListener('click', function() {
    var imgDiv = document.getElementById('img-div');
    var newImage = document.createElement('img');
    newImage.src = 'Image20240730154612.png'; // Replace with your image URL
    newImage.alt = 'Placeholder Image';
    imgDiv.style.display = 'block'; // Make the img-div visible
    imgDiv.appendChild(newImage);
});
