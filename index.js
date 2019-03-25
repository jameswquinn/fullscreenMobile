/*
if('orientation' in screen){
    screen.orientation.addEventListener('change', function(){
        if (screen.orientation.type.startsWith('landscape') ){
            requestFullscreenVideo();
        } else if (document.fullscreenElement) {
                document.exitFullscreen();
        }
    })
}
*/
/*
if ( 'orientation' in screen ){
	screen.orientation.addEventListener('change', function(){
		//Let's request fullscreen if user switches device in landscape mode.
		if ( screen.orientation.type.startsWith('landscape') ){
			requestFullscreenVideo();
		} else if ( document.fullscreenElement ){
			document.exitFullscreen();
		}
	})
}
*/

if ('orientation' in screen) {
  screen.orientation.addEventListener('change', function() {
    // Let's request fullscreen if user switches device in landscape mode.
    if (screen.orientation.type.startsWith('landscape')) {
      requestFullscreenVideo();
    } else if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  });
}
