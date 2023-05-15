$(document).ready(function () {
    var playerId = window.location.search.split('=')[1];
    var players = window.localStorage.getItem('players') || null;
    players = players.length > 0 ? JSON.parse(players) : [];
    let player = players.find(el => el.id == playerId);
    if (player) {
        $('.text-container h1').text(player.playerName)
        $('.player-overview div h4').html(`${player.description}</span>
                <span class="project-type">${player.price}</span>
                <span class="project-type">${player.isPlaying ? 'Playing' : 'Not Playing'}</span>
            </div>
        </div>
            </a>`)
        $('#player-image-preview').attr('src', `${player.image || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}`)
    }

});