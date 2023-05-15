$(document).ready(function () {
    var teams = window.localStorage.getItem('teams') || null;
    if (!teams) {
        localStorage.setItem('players', JSON.stringify([
            {
                "id": 0,
                "playerName": "Hardik Pandya",
                "from": "MI",
                "price": "6.50 Cr",
                "isPlaying": true,
                "description": "All-rounder"
                ,
                image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            },
            {
                "id": 1,
                "playerName": "Virat Kohli",
                "from": "RCB",
                "price": "8.00 Cr",
                "isPlaying": true,
                "description": "Batsman"
                ,
                image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            },
            {
                "id": 2,
                "playerName": "Yuvraj Singh",
                "from": "MI",
                "price": "1.00 Cr",
                "isPlaying": false,
                "description": "Batsman"

                ,
                image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            },
            {
                "id": 3,
                "playerName": "Chris Morris",
                "from": "RR",
                "price": "16.25 Cr",
                "isPlaying": true,
                "description": "All-rounder"
                ,
                image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            },
            {
                "id": 4,
                "playerName": "Glenn Maxwell",
                "from": "RCB",
                "price": "14.25",
                "isPlaying": true,
                "description": "All-rounder"
                ,
                image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            },
            {
                "id": 5,
                "playerName": "Rohit Sharma",
                "from": "MI",
                "price": "6.50 Cr",
                "isPlaying": true,
                "description": "BatsMan"
                ,
                image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            },
            {
                "id": 6,
                "playerName": "Ishan Kishan",
                "from": "MI",
                "price": "2.50 Cr",
                "isPlaying": true,
                "description": "BatsMan"
                ,
                image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            },
        ]))

        localStorage.setItem("teams", JSON.stringify([
            {
                "id": 0,
                "name": "Chennai Super King",
                "short_name": "CSK",
                "image": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Logooutline/CSKoutline.png",
                player_count: 4,
                top_bats_man: "MS Dhoni",
                top_bowler: "",
                championship_wo_count: 2,

            }
        ]))

        location.reload();
    }

    teams = teams.length > 0 ? JSON.parse(teams) : [];
    let teamDesign = ""
    for (let team of teams) {
        teamDesign += `<a class="article-wrapper" href="./details.html?team=${team['id']}">
            <div class="rounded-lg container-project">

                <img height="170px" width="300px"
                    src="${team['image']}" />

            </div>
            <div class="project-info">
                <div class="flex-pr">
                    <div class="project-title text-nowrap">${team['name']}</div>
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
                    class="project-type">• Players: ${team['player_count']}</span>
                    
                </div>
            </div>
        </a>`
    }

    $('#teams-grid').html(teamDesign)


    $('#add_team').click(function () {
        $('#my-popup').show();
        $('body').css('overflow', 'hidden');
    });

    $('#add_player').click(function () {
        $('#my-popup2').show();
        $('body').css('overflow', 'hidden');
    });

    $('.cancel_button').click(function () {
        $('#my-popup').hide();
        $('#my-popup2').hide();
        $('body').css('overflow', 'auto');
    });

    $('#my-form').submit(function (event) {
        event.preventDefault(); // prevent the default form submit behavior

        let team_name = $('#team_name').val()
        let team_short_name = $('#team_short_name').val()
        let player_count = $('#player_count').val()
        let top_batsman = $('#top_batsman').val()
        let top_bowler = $('#top_bowler').val()
        let championship_wo_count = $('#championship_wo_count').val()
        let team_img = $('#team_img').val();
        let id = Math.floor(Math.random() * 100) + 1;


        var teams = window.localStorage.getItem('teams') || null;
        teams = teams.length > 0 ? JSON.parse(teams) : [];
        if (teams) {
            teams.push({
                "id": id,
                "name": team_name,
                "short_name": team_short_name,
                "image": team_img,
                player_count: player_count,
                top_bats_man: top_batsman,
                top_bowler: top_bowler,
                championship_wo_count: championship_wo_count,

            })
        }

        localStorage.setItem('teams', JSON.stringify(teams))
        $('#my-popup').hide();
        $('body').css('overflow', 'auto');
        location.reload();
    });

    $('#my-form2').submit(function (event) {
        event.preventDefault(); // prevent the default form submit behavior

        let player_name = $('#player_name').val()
        let from_team = $('#from_team').val()
        let player_img = $('#player_img').val()
        let price = $('#price').val()
        let status = $('#status').val()
        let description = $('#description').val()
        let id = Math.floor(Math.random() * 100) + 1;


        var players = window.localStorage.getItem('players') || null;
        players = players.length > 0 ? JSON.parse(players) : [];
        if (players) {
            players.push({
                "id": id,
                "playerName": player_name,
                "from": from_team,
                "price": price,
                image: player_img,
                "isPlaying": status == "true" ? true : false,
                "description": description
            })
        }

        localStorage.setItem('players', JSON.stringify(players))
        $('#my-popup2').hide();
        $('body').css('overflow', 'auto');
        location.reload();
    });

    $('#search-input').keyup(function () {
        console.log($('#search-input').val());
        if ($('#search-input').val().length > 1) {
            var teams = window.localStorage.getItem('teams') || null;
            teams = teams.length > 0 ? JSON.parse(teams) : [];
            let show = ''
            if (teams.length > 0) {
                let filetedTeams = teams.filter(ele => ele.short_name.toLowerCase().includes($('#search-input').val()) || ele.name.toLowerCase().includes($('#search-input').val()))
                console.log(filetedTeams);
                for (let i = 0; i < filetedTeams.length; i++) {
                    const filetedTeam = filetedTeams[i];
                    show += `<li><a href="./details.html?team=${filetedTeam.id}">${filetedTeam.name}</a></li>`
                }

                if (filetedTeams.length) {
                    $('#search-results').html(show)
                    $('#search-results').show()
                } else {
                    $('#search-results').hide()
                }
            }


        } else {
            $('#search-results').hide()

        }

    })

    var teams = window.localStorage.getItem('teams') || null;
    teams = teams.length > 0 ? JSON.parse(teams) : [];

    let selectHtml = "<option disabled selected>Select Team</option>"

    for (let team of teams) {
        selectHtml += `<option value="${team.short_name}">${team.name}</option>`
    }

    $('#from_team').html(selectHtml)
})