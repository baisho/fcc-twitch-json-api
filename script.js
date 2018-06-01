$(document).ready(function () {

    var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

    $.each(streamers, function (streamer) {
        var result = $("<div>").addClass("results__item");
 

        $.getJSON('https://wind-bow.glitch.me/twitch-api/streams/' + streamer, function (getJsonData) {
            if (getJsonData.stream != null) {
                $("#logo").html('<img src="' + getJsonData.stream.channel.logo + '" alt="Channel logo" height="42" width="42">');
                $("#name").html(getJsonData.stream.channel.display_name);
                $("#game").html(getJsonData.stream.game);
            } else {
                $("#name").html("nem vagyok");

            }
        });

    });

});