(function() {

    var videos = document.getElementsByTagName('video');

    var toWindow = function(video) {
        addOverlay();

        video.style.position = 'fixed';
        video.style.top = '0';
        video.style.left = '0';
        video.style.width = '100%';
        video.style.zIndex = '9999999999999999';
        document.body.appendChild(video);
    };

    var addOverlay = function() {
        var overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = '#000';
        overlay.style.zIndex = '9999999999999998';
        document.body.appendChild(overlay);
    };

    if (videos.length < 1) {
        alert('No video element found');
    }
    if (videos.length === 1) {
        toWindow(videos.item(0));
    }
})();
