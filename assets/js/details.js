$(document).ready(function () {
    var teamId = window.location.search.split('=')[1];
    var teams = window.localStorage.getItem('teams') || null;
    teams = teams.length > 0 ? JSON.parse(teams) : [];
    let team = teams.find(el => el.id == teamId);
    if (team) {
        $('#team-preview').attr("src", team['image'])
        $("#team-title").text(team['name'])
        $("#pc").text('Player Count: ' + team['player_count'])
        $("#tb").text('Top Batsman: ' + team['top_bats_man'])
        $("#tbo").text('Top Bowler: ' + team['top_bowler'])
        $("#cwc").text('Championship Won Count: ' + team['championship_wo_count'])
        let players = window.localStorage.getItem('players') || null;
        players = players.length > 0 ? JSON.parse(players) : [];
        players = players.filter(el => el.from == team.short_name);
        let playerHtml = ''
        for (let player of players) {
            console.log(player);
            playerHtml += `<a class="article-wrapper" href="./player-detail.html?player=${player.id}">
        <div class="rounded-lg player-project">

            <img height="260px" width="280px"
                src="${player.image}">
        </div>
        <div class=" project-info">
            <div class="flex-pr">
                <div class="project-title text-nowrap">${player.playerName}</div>
                <div class="project-hover">
                    <svg style="color: black;" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em"
                        color="black" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24"
                        stroke-width="2" fill="none" stroke="currentColor">
                        <line y2="12" x2="19" y1="12" x1="5"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>
            </div>
            <div class="types">
                <span style="background-color: rgba(165, 96, 247, 0.43); color: rgb(85, 27, 177);"
                    class="project-type">${player.description}</span>
                <span class="project-type">${player.price}</span>
                <span class="project-type">${player.isPlaying ? 'Playing' : 'Not Playing'}</span>
            </div>
        </div>
            </a>`
        }

        $('#players-grid').html(playerHtml)

    }



});