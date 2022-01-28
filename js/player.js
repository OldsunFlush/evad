function changemusic(x){
	var urls = tab[x].urlmus;
	var typeaudio = tab[x].typemus;
	var infos = '<span id="title">' + tab[x].title + '</span>'
	$("#lecteur").attr({
		src: urls,
		type: typeaudio
	});
	$(".textaudio").html(infos);
}


$( document ).ready(function() {

	$(function(){
		//alert( navigator.userAgent);
		//stop if HTML5 audio isn't supported
		if(!document.createElement('audio').canPlayType) {
			$("#lectmusic").hide();
			return;
		}


		///////////// CHARGEMENT PLAYLIST ////////////

		// Tableau contenant données dans data.js=======//

		var max = tab.length-1;
		var idtab = 0;
		$( document ).ready(changemusic(idtab));
		$("#next").bind("click", function(){
			if (idtab<max){
				idtab=idtab+1;
			}else{
				idtab=0;
			}
			changemusic(idtab);
			document.getElementById('lecteur').play();
			document.getElementById('play').id = "pause";
			$(".icon-icon_play").attr("class","icon-icon_pause");
		});
		$("#prev").bind("click", function(){
			if (idtab>0){
				idtab=idtab-1;
			}else{
				idtab=max;
			}
			changemusic(idtab);
			document.getElementById('lecteur').play();
			document.getElementById('play').id = "pause";
			$(".icon-icon_play").attr("class","icon-icon_pause");
		});
		///////////// BOUTONS PLAYERS ////////////////

		//Play Pause button ============= //

		$("#play").bind("click", function(){
			if (document.getElementById('lecteur').paused){
				document.getElementById('lecteur').play();
				document.getElementById('play').id = "pause";
			$(".icon-icon_play").attr("class","icon-icon_pause");
			} else{
				document.getElementById('lecteur').pause();
				document.getElementById('pause').id = "play";
			$(".icon-icon_pause").attr("class","icon-icon_play");
			}
		});
	});
});
