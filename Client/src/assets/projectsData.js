const projectsData = [
    {
        id: 1,
        title: 'This website',
        description: 'Mainly for my portfolio but contains much more.',
        techStack: ['react', 'css3', 'nodejs', 'express', 'mongodb'],
        imageUrl: '/WebsiteSample.png',
        moreDetails: {
            para1: 'I wanted to create a portfolio for a while, since I\'m looking for a job application, it\'s a good time to start!',
            para2: 'I also, I added a contact form and an Admin panel to link my projects and stuff in the future in one place to manage everything (like sshing or RDP to use my windows machine from a linux browser).'
        },
        githubURL: 'https://github.com/SounaVR/PersonalWebsite'
    },
    {
        id: 2,
        title: 'Mozu',
        description: 'Discord RPG Bot (game).',
        techStack: ['javascript', 'mysql', 'discordjs'],
        imageUrl: '/mozu.gif',
        moreDetails: {
            para1: 'My biggest and longest project ever, I basically learned the most from this project, from basics to advanced API stuff.',
            para2: 'The goal was to get an idle farming bot to waste time. Before the end of the project, I was working on a dungeon with stages to fight various creatures along with your lovely pets. To look more modern and cool, I planned to work with Canvas to generate images.',
            para3: 'Apart from that you can: craft a gear, enchant it, put gems on it, upgrade your tools and more. Seems simple but the whole infrastructure is much crazier than you think, even for me today.'
        },
        githubURL: 'https://github.com/SounaVR/Mozu'
    },
    {
        id: 3,
        title: 'RatMessenger [WIP]',
        description: 'Discord clone but with rats.',
        techStack: ['react', 'css3', 'bootstrap', 'nodejs', 'express', 'mongodb'],
        imageUrl: '/rat.png',
        moreDetails: {
            para1: 'Context: Discord crashes a lot and it\'s complicated to use when it has API problems, so I thought I\'d make my own Discord with the features it offers (chat in text channels, talk in voice channels, share screens, etc).',
            para2: 'I tried to do it with chatGPT, but it\'s missing a few neurons, so I decided to do it myself.',
            para3: 'Basic Register/Login with JWT. API to create servers and channels (voice or text). Channels are server based (like Discord lol).',
            para4: 'Last time I worked on messages, works from API but now I need to implement them in the app.'
        },
        githubURL: 'https://github.com/SounaVR/RatMessenger'
    },
    {
        id: 4,
        title: 'Discord bots',
        description: 'Collection of small projects.',
        techStack: ['javascript', 'mongodb', 'discordjs'],
        imageUrl: '/discordbots.png',
        moreDetails: {
            para1: 'A while back, I built a bot to play with Notion\'s API.',
            para2: 'Another one for Trello\'s API.',
            para3: 'One for my personal server for moderation stuff or logs.',
            para4: 'And now I\'m working on a selfbot (runs under the user account) for music stuff on my Linux machine. Includes a queue system, skip and play/pause. In the future I want to manage the machine from there.'
        },
        githubURL: 'https://github.com/SounaVR'
    },
    {
        id: 5,
        title: 'MUSIC-CLI',
        description: 'Not really a project but it\'s fun.',
        techStack: ['bash'],
        imageUrl: '/mpd.png',
        moreDetails: {
            para1: 'I made scripts to listen to music or watch a YouTube video. The future goal is to invoke the script that records the microphone for the name of the music with a voice command (like Alexa).'
        },
        githubURL: 'https://github.com/SounaVR/music-cli'
    }
];

export default projectsData;