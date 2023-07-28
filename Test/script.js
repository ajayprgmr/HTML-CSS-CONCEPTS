const uploadContainer = document.querySelector('.upload-container');
const fileInput = document.getElementById('fileInput');

// Prevent default behavior for file drag-and-drop
uploadContainer.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadContainer.classList.add('drag-over');
});

uploadContainer.addEventListener('dragleave', () => {
  uploadContainer.classList.remove('drag-over');
});

uploadContainer.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadContainer.classList.remove('drag-over');
  handleFileUpload(e.dataTransfer.files);
});

fileInput.addEventListener('change', (e) => {
  handleFileUpload(e.target.files);
});

function handleFileUpload(files) {
  if (files.length > 0) {
    const file = files[0];
    // Here, you can handle the uploaded file, such as displaying an image preview or uploading it to a server.
    console.log('Uploaded file:', file);
  }
}
