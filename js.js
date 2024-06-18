function loadCamera() {
    var video = document.querySelector("#webCamera");
    video.setAttribute('autoplay', '');
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({audio: false, video: {facingMode: 'user'}})
        .then(function(stream) {
            video.srcObject = stream;
        })
        .catch(function(error) {
            alert("Oooopps... Falhou :'(");
        });
    }
}

loadCamera();
