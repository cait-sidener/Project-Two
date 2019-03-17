/* eslint-disable linebreak-style */
$(document).ready(function() {
  function getUserMedia(callback) {
    var hints = {
      audio: true,
      video: {
        optional: [],

        // capture video stream
        mandatory: {
          minWidth: 1280,
          minHeight: 720,
          maxWidth: 1920,
          maxHeight: 1080,
          minAspectRatio: 1.77
        }
      }
    };

    navigator.getUserMedia(hints, function(stream) {
      peer.addStream(stream);
      callback(stream);

      // preview local video
      var video = document.createElement("video");
      video.srcObject = stream;
      video.controls = true;
      video.muted = true;

      peer.onStreamAdded({
        mediaElement: video,
        userid: "self",
        stream: stream
      });
    });
  }
});
