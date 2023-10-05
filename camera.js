var contraints = {audio: false, video: true}
navigator.mediaDevices.getUserMedia(contraints)
	.then(on_cam_success)
	.catch(on_cam_error);

function capteaza(){
	var c = document.getElementById("canvas");
	c.width = video.width;
	c.height = video.height;
	var ctx = c.getContext("2d");
	ctx.drawImage(video, 0, 0, 640, 480);
}