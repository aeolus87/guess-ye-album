   //src\data\gamedata.js
    import collegeDropoutIcon from '../assets/albums/cdicon.jpg';
    import lateRegistrationIcon from '../assets/albums/lgicon.jpg';
    import graduationIcon from '../assets/albums/gicon.png';
    import eightIcon from '../assets/albums/808icon.png';
    import mbdtfIcon from '../assets/albums/mbdtficon.png';
    import watchTheThroneIcon from '../assets/albums/wtticon.png';
    import yeezusIcon from '../assets/albums/yeezusicon.png';
    import tlopIcon from '../assets/albums/tlopicon.png';
    import yeIcon from '../assets/albums/yeIcon.png';
    import jikIcon from '../assets/albums/jikicon.png';
    import dondaIcon from '../assets/albums/dondaicon.png';
    import vulturesOneIcon from '../assets/albums/vultures1icon.png';
    import vulturesTwoIcon from '../assets/albums/v2icon.png';

    export const albums = [
        {
          title: "The College Dropout",
          year: 2004,
          description: "Kanye's debut studio album, featuring hit singles like 'Through the Wire' and 'Jesus Walks'. It established his unique sound, blending soul samples with witty, introspective lyrics.",
          color: "bg-orange-500",
          imageUrl: collegeDropoutIcon,
          spotifyUrl: "https://open.spotify.com/album/4Uv86qWpGTxf7fU7lG5X6F?si=eRuZOyBbRKaaszY1LtbgaA",
          tracks: [
            { title: "Intro", audioSnippet: "/assets/snippets/college-dropout/intro.mp3" },
            { title: "We Don't Care", audioSnippet: "/assets/snippets/college-dropout/we-dont-care.mp3" },
            { title: "Graduation Day", audioSnippet: "/assets/snippets/college-dropout/graduation-day.mp3" },
            { title: "All Falls Down", audioSnippet: "/assets/snippets/college-dropout/all-falls-down.mp3" },
            { title: "I'll Fly Away", audioSnippet: "/assets/snippets/college-dropout/ill-fly-away.mp3" },
            { title: "Spaceship", audioSnippet: "/assets/snippets/college-dropout/spaceship.mp3" },
            { title: "Jesus Walks", audioSnippet: "/assets/snippets/college-dropout/jesus-walks.mp3" },
            { title: "Never Let Me Down", audioSnippet: "/assets/snippets/college-dropout/never-let-me-down.mp3" },
            { title: "Get Em High", audioSnippet: "/assets/snippets/college-dropout/get-em-high.mp3" },
            { title: "Workout Plan", audioSnippet: "/assets/snippets/college-dropout/workout-plan.mp3" },
            { title: "The New Workout Plan", audioSnippet: "/assets/snippets/college-dropout/the-new-workout-plan.mp3" },
            { title: "Slow Jamz", audioSnippet: "/assets/snippets/college-dropout/slow-jamz.mp3" },
            { title: "Breathe In Breathe Out", audioSnippet: "/assets/snippets/college-dropout/breathe-in-breathe-out.mp3" },
            { title: "School Spirit Skit 1", audioSnippet: "/assets/snippets/college-dropout/school-spirit-skit-1.mp3" },
            { title: "School Spirit", audioSnippet: "/assets/snippets/college-dropout/school-spirit.mp3" },
            { title: "School Spirit Skit 2", audioSnippet: "/assets/snippets/college-dropout/school-spirit-skit-2.mp3" },
            { title: "Lil Jimmy Skit", audioSnippet: "/assets/snippets/college-dropout/lil-jimmy-skit.mp3" },
            { title: "Two Words", audioSnippet: "/assets/snippets/college-dropout/two-words.mp3" },
            { title: "Through the Wire", audioSnippet: "/assets/snippets/college-dropout/through-the-wire.mp3" },
            { title: "Family Business", audioSnippet: "/assets/snippets/college-dropout/family-business.mp3" },
            { title: "Last Call", audioSnippet: "/assets/snippets/college-dropout/last-call.mp3" }
        ]
        },
        {
          title: "Late Registration",
          year: 2005,
          description: "Building on his debut's success, this album showcased more complex production and collaborations. It includes popular tracks like 'Gold Digger' and 'Touch the Sky'.",
          color: "bg-amber-800",
          imageUrl: lateRegistrationIcon,
          spotifyUrl: "https://open.spotify.com/album/5ll74bqtkcXlKE7wwkMq4g?si=rwRaU_PVTM2EU4hy3Gl1fg",
          tracks: [
            { title: "Wake Up Mr. West", audioSnippet: "/assets/snippets/late-registration/wake-up-mr-west.mp3" },
            { title: "Heard 'Em Say", audioSnippet: "/assets/snippets/late-registration/heard-em-say.mp3" },
            { title: "Touch the Sky", audioSnippet: "/assets/snippets/late-registration/touch-the-sky.mp3" },
            { title: "Gold Digger", audioSnippet: "/assets/snippets/late-registration/gold-digger.mp3" },
            { title: "Skit #1", audioSnippet: "/assets/snippets/late-registration/skit-1.mp3" },
            { title: "Drive Slow 🅴", audioSnippet: "/assets/snippets/late-registration/drive-slow.mp3" },
            { title: "My Way Home", audioSnippet: "/assets/snippets/late-registration/my-way-home.mp3" },
            { title: "Crack Music", audioSnippet: "/assets/snippets/late-registration/crack-music.mp3" },
            { title: "Roses 🅴",  audioSnippet: "/assets/snippets/late-registration/crack-music.mp3" },
            { title: "Bring Me Down", audioSnippet: "/assets/snippets/late-registration/bring-me-down.mp3" },
            { title: "Addiction", audioSnippet: "/assets/snippets/late-registration/addiction.mp3" },
            { title: "Skit #2", audioSnippet: "/assets/snippets/late-registration/skit-2.mp3" },
            { title: "Diamonds from Sierra Leone", audioSnippet: "/assets/snippets/late-registration/diamonds-from-sierra-leone.mp3" },
            { title: "We Major", audioSnippet: "/assets/snippets/late-registration/we-major.mp3" },
            { title: "Skit #3", audioSnippet: "/assets/snippets/late-registration/skit-3.mp3" },
            { title: "Hey Mama 🅴", audioSnippet: "/assets/snippets/late-registration/hey-mama-3.mp3" },
            { title: "Celebration", audioSnippet: "/assets/snippets/late-registration/celebration.mp3" },
            { title: "Skit #4", audioSnippet: "/assets/snippets/late-registration/skit-4.mp3" },
            { title: "Gone", audioSnippet: "/assets/snippets/late-registration/gone.mp3" },
            { title: "Diamonds from Sierra Leone (Bonus Track)", audioSnippet: "/assets/snippets/late-registration/diamonds-from-sierra-leone-bonus-track.mp3" },
            { title: "Late", audioSnippet: "/assets/snippets/late-registration/late.mp3" }
          ]
        },
        {
          title: "Graduation",
          year: 2007,
          description: "A departure from his previous sound, 'Graduation' incorporated more electronic and synthesizer-driven production. It features hits like 'Stronger' and 'Good Life'.",
          color: "bg-pink-500",
          imageUrl: graduationIcon,
          spotifyUrl: "https://open.spotify.com/album/4SZko61aMnmgvNhfhgTuD3?si=z1k2MNBdTOe3u0PuL1zfCg",
          tracks: [
            { title: "Good Morning", audioSnippet: "/assets/snippets/graduation/good-morning.mp3" },
            { title: "Champion", audioSnippet: "/assets/snippets/graduation/champion.mp3" },
            { title: "Stronger", audioSnippet: "/assets/snippets/graduation/stronger.mp3" },
            { title: "I Wonder", audioSnippet: "/assets/snippets/graduation/i-wonder.mp3" },
            { title: "Good Life", audioSnippet: "/assets/snippets/graduation/good-life.mp3" },
            { title: "Can't Tell Me Nothing", audioSnippet: "/assets/snippets/graduation/cant-tell-me-nothing.mp3" },
            { title: "Barry Bonds", audioSnippet: "/assets/snippets/graduation/barry-bonds.mp3" },
            { title: "Drunk and Hot Girls", audioSnippet: "/assets/snippets/graduation/drunk-and-hot-girls.mp3" },
            { title: "Flashing Lights", audioSnippet: "/assets/snippets/graduation/flashing-lights.mp3" },
            { title: "Everything I Am", audioSnippet: "/assets/snippets/graduation/everything-i-am.mp3" },
            { title: "The Glory", audioSnippet: "/assets/snippets/graduation/the-glory.mp3" },
            { title: "Homecoming", audioSnippet: "/assets/snippets/graduation/homecoming.mp3" },
            { title: "Big Brother", audioSnippet: "/assets/snippets/graduation/big-brother.mp3" }
        ]
        },
        {
          title: "808s & Heartbreak",
          year: 2008,
          description: "A bold shift in style, this album heavily features auto-tune and minimalist electropop sounds. It's known for its emotional depth and influence on hip-hop's direction.",
          color: "bg-gray-500",
          imageUrl: eightIcon,
          spotifyUrl: "https://open.spotify.com/album/3WFTGIO6E3Xh4paEOBY9OU?si=8BkvP31xST2gYUALUcM5Ow",
          tracks: [
            { title: "Say You Will", audioSnippet: "/assets/snippets/808s-heartbreak/say-you-will.mp3" },
            { title: "Welcome to Heartbreak", audioSnippet: "/assets/snippets/808s-heartbreak/welcome-to-heartbreak.mp3" },
            { title: "Heartless", audioSnippet: "/assets/snippets/808s-heartbreak/heartless.mp3" },
            { title: "Amazing", audioSnippet: "/assets/snippets/808s-heartbreak/amazing.mp3" },
            { title: "Love Lockdown", audioSnippet: "/assets/snippets/808s-heartbreak/love-lockdown.mp3" },
            { title: "Robocop", audioSnippet: "/assets/snippets/808s-heartbreak/robocop.mp3" },
            { title: "Street Lights", audioSnippet: "/assets/snippets/808s-heartbreak/street-lights.mp3" },
            { title: "Bad News", audioSnippet: "/assets/snippets/808s-heartbreak/bad-news.mp3" },
            { title: "See You in My Nightmares", audioSnippet: "/assets/snippets/808s-heartbreak/see-you-in-my-nightmares.mp3" },
            { title: "Coldest Winter", audioSnippet: "/assets/snippets/808s-heartbreak/coldest-winter.mp3" },
            { title: "Pinocchio Story", audioSnippet: "/assets/snippets/808s-heartbreak/pinocchio-story.mp3" }
        ]
        },
        {
          title: "My Beautiful Dark Twisted Fantasy",
          year: 2010,
          description: "Widely regarded as Kanye's magnum opus, this album is a grandiose and maximalist work that showcases his artistic vision at its peak. It includes tracks like 'Power' and 'Runaway'.",
          color: "bg-red-500",
          imageUrl: mbdtfIcon,
          spotifyUrl: "https://open.spotify.com/album/20r762YmB5HeofjMCiPMLv?si=bvnEnLVvSVSA_6iUbzWCfw",
          tracks: [
            { title: "Dark Fantasy", audioSnippet: "/assets/snippets/mbdtf/dark-fantasy.mp3" },
            { title: "Gorgeous", audioSnippet: "/assets/snippets/mbdtf/gorgeous.mp3" },
            { title: "Power", audioSnippet: "/assets/snippets/mbdtf/power.mp3" },
            { title: "All of the Lights", audioSnippet: "/assets/snippets/mbdtf/all-of-the-lights.mp3" },
            { title: "Monster", audioSnippet: "/assets/snippets/mbdtf/monster.mp3" },
            { title: "So Appalled", audioSnippet: "/assets/snippets/mbdtf/so-appalled.mp3" },
            { title: "Devil in a New Dress", audioSnippet: "/assets/snippets/mbdtf/devil-in-a-new-dress.mp3" },
            { title: "Runaway", audioSnippet: "/assets/snippets/mbdtf/runaway.mp3" },
            { title: "Hell of a Life", audioSnippet: "/assets/snippets/mbdtf/hell-of-a-life.mp3" },
            { title: "Blame Game", audioSnippet: "/assets/snippets/mbdtf/blame-game.mp3" },
            { title: "Lost in the World", audioSnippet: "/assets/snippets/mbdtf/lost-in-the-world.mp3" },
            { title: "Who Will Survive in America", audioSnippet: "/assets/snippets/mbdtf/who-will-survive-in-america.mp3" }
        ]
        },
        {
          title: "Watch the Throne",
          year: 2011,
          description: "A collaborative album with Jay-Z, 'Watch the Throne' features a blend of grandiose production and introspective lyrics, reflecting the duo's dominance in the rap game.",
          color: "bg-yellow-600",
          imageUrl: watchTheThroneIcon,
          spotifyUrl: "https://open.spotify.com/album/0OcMap99vLEeGkBCfCwRwS?si=szSnNJrzSome1pSRRt_drA",
          tracks: [
            { title: "No Church in the Wild 🅴", audioSnippet: "/assets/snippets/watch-the-throne/no-church-in-the-wild.mp3" },
            { title: "Lift Off 🅴", audioSnippet: "/assets/snippets/watch-the-throne/lift-off.mp3" },
            { title: "Niggas in Paris 🅴", audioSnippet: "/assets/snippets/watch-the-throne/niggas-in-paris.mp3" },
            { title: "Otis 🅴", audioSnippet: "/assets/snippets/watch-the-throne/otis.mp3" },
            { title: "Gotta Have It 🅴", audioSnippet: "/assets/snippets/watch-the-throne/gotta-have-it.mp3" },
            { title: "New Day 🅴", audioSnippet: "/assets/snippets/watch-the-throne/new-day.mp3" },
            { title: "That’s My Bitch 🅴", audioSnippet: "/assets/snippets/watch-the-throne/thats-my-bitch.mp3" },
            { title: "Who Gon Stop Me 🅴", audioSnippet: "/assets/snippets/watch-the-throne/who-gon-stop-me.mp3" },
            { title: "Murder to Excellence 🅴", audioSnippet: "/assets/snippets/watch-the-throne/murder-to-excellence.mp3" },
            { title: "Runaway 🅴", audioSnippet: "/assets/snippets/watch-the-throne/runaway.mp3" },
            { title: "The Joy 🅴", audioSnippet: "/assets/snippets/watch-the-throne/the-joy.mp3" }
        ]
        },
        {
          title: "Yeezus",
          year: 2013,
          description: "A stark contrast to his previous work, 'Yeezus' features a harsh, industrial sound. It's known for its minimalist approach and provocative lyrics.",
          color: "bg-[#f1133]",
          imageUrl: yeezusIcon,
          spotifyUrl: "https://open.spotify.com/album/7D2NdGvBHIavgLhmcwhluK?si=7GnYOrYATA6SCe-3Jl3aNw",
          tracks: [
            { title: "On Sight 🅴", audioSnippet: "/assets/snippets/yeezus/on-sight.mp3" },
            { title: "Black Skinhead 🅴", audioSnippet: "/assets/snippets/yeezus/black-skinhead.mp3" },
            { title: "I Am a God 🅴", audioSnippet: "/assets/snippets/yeezus/i-am-a-god.mp3" },
            { title: "New Slaves 🅴", audioSnippet: "/assets/snippets/yeezus/new-slaves.mp3" },
            { title: "Hold My Liquor 🅴", audioSnippet: "/assets/snippets/yeezus/hold-my-liquor.mp3" },
            { title: "I'm In It 🅴", audioSnippet: "/assets/snippets/yeezus/im-in-it.mp3" },
            { title: "Blood on the Leaves 🅴", audioSnippet: "/assets/snippets/yeezus/blood-on-the-leaves.mp3" },
            { title: "Guilt Trip 🅴", audioSnippet: "/assets/snippets/yeezus/guilt-trip.mp3" },
            { title: "Send It Up 🅴", audioSnippet: "/assets/snippets/yeezus/send-it-up.mp3" },
            { title: "Bound 2 🅴", audioSnippet: "/assets/snippets/yeezus/bound-2.mp3" }
        ]
        },
        {
          title: "The Life of Pablo",
          year: 2016,
          description: "This album showcases Kanye's eclectic style, blending various genres and featuring numerous collaborators. It includes tracks like 'Famous' and 'Ultralight Beam'.",
          color: "bg-orange-500",
          imageUrl: tlopIcon,
          spotifyUrl: "https://open.spotify.com/album/7gsWAHLeT0w7es6FofOXk1?si=QkHsCjArTVGZypqogskyAw",
          tracks: [
            { title: "Ultralight Beam 🅴", audioSnippet: "/assets/snippets/tlop/ultralight-beam.mp3" },
            { title: "Father Stretch My Hands Pt. 1 🅴", audioSnippet: "/assets/snippets/tlop/father-stretch-my-hands-pt-1.mp3" },
            { title: "Pt. 2 🅴", audioSnippet: "/assets/snippets/tlop/pt-2.mp3" },
            { title: "Famous 🅴", audioSnippet: "/assets/snippets/tlop/famous.mp3" },
            { title: "Feedback 🅴", audioSnippet: "/assets/snippets/tlop/feedback.mp3" },
            { title: "Low Lights 🅴", audioSnippet: "/assets/snippets/tlop/low-lights.mp3" },
            { title: "Highlights 🅴", audioSnippet: "/assets/snippets/tlop/highlights.mp3" },
            { title: "Waves 🅴", audioSnippet: "/assets/snippets/tlop/waves.mp3" },
            { title: "FML 🅴", audioSnippet: "/assets/snippets/tlop/fml.mp3" },
            { title: "Real Friends 🅴", audioSnippet: "/assets/snippets/tlop/real-friends.mp3" },
            { title: "Wolves 🅴", audioSnippet: "/assets/snippets/tlop/wolves.mp3" },
            { title: "30 Hours 🅴", audioSnippet: "/assets/snippets/tlop/30-hours.mp3" },
            { title: "No More Parties in L.A. 🅴", audioSnippet: "/assets/snippets/tlop/no-more-parties-in-la.mp3" },
            { title: "Fade 🅴", audioSnippet: "/assets/snippets/tlop/fade.mp3" },
            { title: "Saint Pablo 🅴", audioSnippet: "/assets/snippets/tlop/saint-pablo.mp3" }
        ]
        },
        {
          title: "ye",
          year: 2018,
          description: "A more introspective and personal album, 'Ye' delves into Kanye's mental health struggles and family life. It's known for its raw honesty and vulnerability.",
          color: "bg-[#f1111]",
          imageUrl: yeIcon,
          spotifyUrl: "https://open.spotify.com/album/2Ek1q2haOnxVqhvVKqMvJe?si=xTIiy847RZSbghMUGOB3Sg",
          tracks: [
            { title: "I Thought About Killing You 🅴", audioSnippet: "/assets/snippets/ye/i-thought-about-killing-you.mp3" },
            { title: "Yikes 🅴", audioSnippet: "/assets/snippets/ye/yikes.mp3" },
            { title: "All Mine 🅴", audioSnippet: "/assets/snippets/ye/all-mine.mp3" },
            { title: "Wouldn't Leave 🅴", audioSnippet: "/assets/snippets/ye/wouldnt-leave.mp3" },
            { title: "No Mistakes 🅴", audioSnippet: "/assets/snippets/ye/no-mistakes.mp3" },
            { title: "Ghost Town 🅴", audioSnippet: "/assets/snippets/ye/ghost-town.mp3" },
            { title: "Violent Crimes 🅴", audioSnippet: "/assets/snippets/ye/violent-crimes.mp3" }
        ]
        },
        {
          title: "Jesus Is King",
          year: 2019,
          description: "Marking Kanye's foray into gospel music, this album reflects his renewed Christian faith. It features a choir and focuses on religious themes.",
          color: "bg-blue-800",
          imageUrl: jikIcon,
          spotifyUrl: "https://open.spotify.com/album/0FgZKfoU2Br5sHOfvZKTI9?si=P3SNEP5gRH6YHYnkJalH0A",
          tracks: [
            { title: "Every Hour", audioSnippet: "/assets/snippets/jik/every-hour.mp3" },
            { title: "Selah", audioSnippet: "/assets/snippets/jik/selah.mp3" },
            { title: "Follow God", audioSnippet: "/assets/snippets/jik/follow-god.mp3" },
            { title: "Closed on Sunday", audioSnippet: "/assets/snippets/jik/closed-on-sunday.mp3" },
            { title: "On God", audioSnippet: "/assets/snippets/jik/on-god.mp3" },
            { title: "Everything We Need", audioSnippet: "/assets/snippets/jik/everything-we-need.mp3" },
            { title: "Water", audioSnippet: "/assets/snippets/jik/water.mp3" },
            { title: "God Is", audioSnippet: "/assets/snippets/jik/god-is.mp3" },
            { title: "Hands On", audioSnippet: "/assets/snippets/jik/hands-on.mp3" },
            { title: "Use This Gospel", audioSnippet: "/assets/snippets/jik/use-this-gospel.mp3" },
            { title: "Jesus Is Lord", audioSnippet: "/assets/snippets/jik/jesus-is-lord.mp3" }
        ]
        },
        {
          title: "Donda",
          year: 2021,
          description: "Named after Kanye's late mother, 'Donda' is a sprawling, ambitious project that touches on themes of family, faith, and personal struggles.",
          color: "bg-black",
          imageUrl: dondaIcon,
          spotifyUrl: "https://open.spotify.com/album/5CnpZV3q5BcESefcB3WJmz?si=4Fun_c31QKylUIeQTw04bA",
          tracks: [
            { title: "Donda Chant", audioSnippet: "/assets/snippets/donda/donda-chant.mp3" },
            { title: "Jail", audioSnippet: "/assets/snippets/donda/jail.mp3" },
            { title: "God Breathed", audioSnippet: "/assets/snippets/donda/god-breathed.mp3" },
            { title: "Off the Grid", audioSnippet: "/assets/snippets/donda/off-the-grid.mp3" },
            { title: "Hurricane", audioSnippet: "/assets/snippets/donda/hurricane.mp3" },
            { title: "Praise God", audioSnippet: "/assets/snippets/donda/praise-god.mp3" },
            { title: "Jonah", audioSnippet: "/assets/snippets/donda/jonah.mp3" },
            { title: "Ok Ok", audioSnippet: "/assets/snippets/donda/ok-ok.mp3" },
            { title: "Junya", audioSnippet: "/assets/snippets/donda/junya.mp3" },
            { title: "Believe What I Say", audioSnippet: "/assets/snippets/donda/believe-what-i-say.mp3" },
            { title: "24", audioSnippet: "/assets/snippets/donda/24.mp3" },
            { title: "Remote Control", audioSnippet: "/assets/snippets/donda/remote-control.mp3" },
            { title: "Moon", audioSnippet: "/assets/snippets/donda/moon.mp3" },
            { title: "Heaven and Hell", audioSnippet: "/assets/snippets/donda/heaven-and-hell.mp3" },
            { title: "Donda", audioSnippet: "/assets/snippets/donda/donda.mp3" },
            { title: "Keep My Spirit Alive", audioSnippet: "/assets/snippets/donda/keep-my-spirit-alive.mp3" },
            { title: "Donda Chant Pt. 2", audioSnippet: "/assets/snippets/donda/donda-chant-pt-2.mp3" }
        ]
        },
        {
          title: "Vultures 1",
          year: 2024,
          description: "Released in February 2024, 'Vultures 1' marks Kanye's return to more traditional hip-hop sounds while continuing to push boundaries in production and lyricism.",
          color: "bg-gray-700",
          imageUrl: vulturesOneIcon,
          spotifyUrl: "https://open.spotify.com/album/0v9QGZDE2msGl8zAlXKP93?si=L8WtnsnES9GM-FPrlo2KoA",
          tracks: [
            { title: "STARS", audioSnippet: "/assets/snippets/vultures-one/stars.mp3" },
            { title: "KEYS TO MY LIFE", audioSnippet: "/assets/snippets/vultures-one/keys-to-my-life.mp3" },
            { title: "PAID", audioSnippet: "/assets/snippets/vultures-one/paid.mp3" },
            { title: "TALKING", audioSnippet: "/assets/snippets/vultures-one/talking.mp3" },
            { title: "BACK TO ME", audioSnippet: "/assets/snippets/vultures-one/back-to-me.mp3" },
            { title: "HOODRAT", audioSnippet: "/assets/snippets/vultures-one/hoodrat.mp3" },
            { title: "DO IT", audioSnippet: "/assets/snippets/vultures-one/do-it.mp3" },
            { title: "PAPERWORK", audioSnippet: "/assets/snippets/vultures-one/paperwork.mp3" },
            { title: "BURN", audioSnippet: "/assets/snippets/vultures-one/burn.mp3" },
            { title: "FUK SUMN", audioSnippet: "/assets/snippets/vultures-one/fuk-sumn.mp3" },
            { title: "VULTURES", audioSnippet: "/assets/snippets/vultures-one/vultures.mp3" },
            { title: "CARNIVAL", audioSnippet: "/assets/snippets/vultures-one/carnival.mp3" },
            { title: "BEG FORGIVENESS", audioSnippet: "/assets/snippets/vultures-one/beg-forgiveness.mp3" },
            { title: "PROBLEMATIC", audioSnippet: "/assets/snippets/vultures-one/problematic.mp3" },
            { title: "KING", audioSnippet: "/assets/snippets/vultures-one/king.mp3" }
        ]
    },
    {
        title: "Vultures 2",
        year: 2024,
        description: "Released unexpectedly on August 3, 2024, the second studio album by the American hip-hop supergroup ¥$, featuring rapper Kanye West and singer Ty Dolla Sign. The album was independently dropped through Kanye's YZY brand.",
        color: "bg-gray-800",
        imageUrl: vulturesTwoIcon,
        spotifyUrl: "https://open.spotify.com/album/5RV2TNyjylqWJNxQyHBTeJ?si=PemJwA7xQJqe4s1NuOa_vQ",
        tracks: [
            { title: "SLIDE", audioSnippet: "/assets/snippets/vultures-two/slide.mp3" },
            { title: "TIME MOVING SLOW", audioSnippet: "/assets/snippets/vultures-two/time-moving-slow.mp3" },
            { title: "FIELD TRIP", audioSnippet: "/assets/snippets/vultures-two/field-trip.mp3" },
            { title: "FRIED", audioSnippet: "/assets/snippets/vultures-two/fried.mp3" },
            { title: "ISABELLA", audioSnippet: "/assets/snippets/vultures-two/isabella.mp3" },
            { title: "PROMOTION", audioSnippet: "/assets/snippets/vultures-two/promotion.mp3" },
            { title: "530", audioSnippet: "/assets/snippets/vultures-two/530.mp3" },
            { title: "DEAD", audioSnippet: "/assets/snippets/vultures-two/dead.mp3" },
            { title: "FOREVER ROLLING", audioSnippet: "/assets/snippets/vultures-two/forever-rolling.mp3" },
            { title: "BOMB", audioSnippet: "/assets/snippets/vultures-two/bomb.mp3" },
            { title: "RIVER", audioSnippet: "/assets/snippets/vultures-two/river.mp3" },
            { title: "FOREVER", audioSnippet: "/assets/snippets/vultures-two/forever.mp3" },
            { title: "HUSBAND", audioSnippet: "/assets/snippets/vultures-two/husband.mp3" },
            { title: "LIFESTYLE", audioSnippet: "/assets/snippets/vultures-two/lifestyle.mp3" },
            { title: "SKY CITY", audioSnippet: "/assets/snippets/vultures-two/sky-city.mp3" },
            { title: "MY SOUL", audioSnippet: "/assets/snippets/vultures-two/my-soul.mp3" }
        ]
        }
      ];