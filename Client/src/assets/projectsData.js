const projectsData = [
    {
        id: 1,
        title: {
            en: 'This website',
            fr: 'Ce site'
        },
        description: {
            en: 'Mainly for my portfolio but has more.',
            fr: 'Principalement pour mon portfolio, mais contient bien plus.'
        },
        techStack: ['react', 'css3', 'nodejs', 'express', 'mongodb'],
        imageUrl: '/WebsiteSample.png',
        moreDetails: {
            para1: {
                en: "I wanted to create a portfolio for a while, since I'm looking for a job application, it's a good time to start!",
                fr: "Cela fait un moment que je voulais créer un portfolio, depuis que je cherche à postuler à un emploi, c'est le bon moment pour commencer !"
            },
            para2: {
                en: 'I also, I added a contact form and an Admin panel to link my projects and stuff in the future in one place to manage everything (like sshing or RDP to use my windows machine from a linux browser).',
                fr: "J'ai également ajouté un formulaire de contact et un panneau d'administration pour lier mes projets et autres choses à l'avenir en un seul endroit pour tout gérer (comme ssh ou RDP pour utiliser ma machine Windows à partir d'un navigateur linux)."
            }
        },
        githubURL: 'https://github.com/SounaVR/PersonalWebsite'
    },
    {
        id: 2,
        title: {
            en: 'Lock2FA [WIP]',
            fr: 'Lock2FA [WIP]'
        },
        description: {
            en: '2FA Cross-Platform Application to replace Authy',
            fr: 'Application A2F Cross-Platform pour remplacer Authy'
        },
        techStack: ['react', 'css3', 'bootstrap', 'nodejs', 'express', 'mongodb'],
        imageUrl: '/lock2fa.jpg',
        moreDetails: {
            para1: {
                en: 'One-time password application (Two-factor authentication (A2F)) to replace Authy, which will discontinue the PC application on March 19.',
                fr: 'Application de mot de passe à usage unique (Authentification à double facteur (A2F)) pour remplacer Authy qui abandonnera l\'application PC le 19 Mars.'
            },
            para2: {
                en: 'I use it every day, so I had to create my own, since there\'s no cross-platform alternative.',
                fr: 'Je l\'utilise quotidiennement donc je me devais de créer la mienne vu qu\'il n\'existe aucune alternative cross-plateforme.'
            }
        }
        //TODO add github url
    },
    {
        id: 3,
        title: {
            en: 'Mozu',
            fr: 'Mozu'
        },
        description: {
            en: 'Discord RPG Bot (game).',
            fr: 'Discord RPG Bot (Jeu).'
        },
        techStack: ['javascript', 'mysql', 'discordjs'],
        imageUrl: '/mozu.gif',
        moreDetails: {
            para1: {
                en: 'My biggest and longest project ever, I basically learned the most from this project, from basics to advanced API stuff.',
                fr: "Mon projet le plus important et le plus long, c'est celui qui m'a le plus appris, des bases aux API les plus avancées."
            },
            para2: {
                en: 'The goal was to get an idle farming bot to waste time. Before the end of the project, I was working on a dungeon with stages to fight various creatures along with your lovely pets. To look more modern and cool, I planned to work with Canvas to generate images.',
                fr: "Le but était d'avoir un bot de farm oisif pour perdre du temps. Avant la fin du projet, je travaillais sur un donjon avec des étages pour combattre diverses créatures avec vos adorables animaux de compagnie. Pour avoir un aspect plus moderne et plus cool, j'avais prévue de travailler avec Canvas pour générer des images."
            },
            para3: {
                en: 'Apart from that you can: craft a gear, enchant it, put gems on it, upgrade your tools and more. Seems simple but the whole infrastructure is much crazier than you think, even for me today.',
                fr: "En outre, vous pouvez : fabriquer un équipement, l'enchanter, y ajouter des gemmes, améliorer vos outils et bien plus encore. Cela semble simple, mais toute l'infrastructure est bien plus folle que vous ne le pensez, même pour moi aujourd'hui."
            }
        },
        githubURL: 'https://github.com/SounaVR/Mozu'
    },
    {
        id: 4,
        title: {
            en: 'Personal Voice Assistant [WIP]',
            fr: 'Assistant Vocal Personnel [WIP]'
        },
        description: {
            en: '"Raw" Artificial Intelligence',
            fr: 'Intelligence artificielle "brute"'
        },
        techStack: ['python'],
        imageUrl: '/snake_mic.png',
        moreDetails: {
            para1: {
                en: 'A Python project for my Linux machine to run things by voice (like Alexa or the Google Home).',
                fr: 'Un projet en Python pour ma machine Linux afin d\'exécuter des choses par la voix (comme Alexa ou le Google Home).'
            },
            para2: {
                en: 'The principle is to capture the microphone input to wait for the "wake-up" word, once the app is "awake", we recapture the microphone to retrieve the desired action, thanks to Speech to Text, we convert the audio into text to trigger the associated logic and at the end we obtain user feedback via the audio output thanks to Text to Speech.',
                fr: 'Le principe est de capturer l\'entrée micro pour attendre le mot de "réveil", une fois que l\'app est "réveillée", on recapture le micro afin de récupérer l\'action voulue, grâce au Speech to Text, on convertit l\'audio en texte pour déclencher la logique associée et à la fin on obtient un retour utilisateur via la sortie audio grâce au Text to Speech.'
            }
        },
        //TODO add github url
    },
    {
        id: 5,
        title: {
            en: 'RatMessenger [WIP]',
            fr: 'RatMessenger [WIP]'
        },
        description: {
            en: 'Discord clone but with rats.',
            fr: 'Clone de Discord mais avec des rats'
        },
        techStack: ['react', 'css3', 'bootstrap', 'nodejs', 'express', 'socketio', 'mongodb' ],
        imageUrl: '/rat.png',
        moreDetails: {
            para1: {
                en: 'Context: Discord crashes a lot and it\'s complicated to use when it has API problems, so I thought I\'d make my own Discord with the features it offers (chat in text channels, talk in voice channels, share screens, etc).',
                fr: "Contexte : Discord plante souvent et il est compliqué à utiliser quand il a des problèmes d'API, alors j'ai pensé créer mon propre Discord avec les fonctionnalités qu'il offre (discuter dans des canaux de texte, parler dans des canaux de voix, partager des écrans, etc)."
            },
            para2: {
                en: 'I tried to do it with chatGPT, but it\'s missing a few neurons, so I decided to do it myself.',
                fr: "J'ai essayé de le faire avec chatGPT, mais il manque quelques neurones, alors j'ai décidé de le faire moi-même."
            },
            para3: {
                en: 'Basic Register/Login with JWT. API to create servers and channels (voice or text) stored in a database (I use MongoDB). Channels are server based (like Discord lol).',
                fr: "Inscription/connexion basique avec JWT. API pour créer des serveurs et des canaux (voix ou texte) stockés dans une base de données (j'utilise MongoDB). Les canaux sont par serveurs (comme Discord)."
            },
            para4: {
                en: 'The real-time message system is operational, so each message is stored per channel (and therefore per server). Socket.io was used for this.',
                fr: "Le système de messages en temps réel est opérationnel, donc chaque message est stocké par salon (et du coup par serveur). Socket.io a été utilisé pour cela."
            },
            para5: {
                en: 'Last time, I worked on the list of users present in a server, did some dynamic routing on the front side and prepared the ground for the friend system (so adding someone, notifying the person + pending request on the target, being able to block the person and having the list of these people). Ideally, I\'d also like to implement private conversations at the same time.',
                fr: "La dernière fois, j'ai travaillé sur la liste des utilisateurs présents dans un serveur, j'ai fais un routing dynamique côté front et j'ai préparer le terrain pour le système d'amis (donc ajouter quelqu'un, notification à la personne + requête en attente sur la cible, pouvoir bloquer la personne et avoir la liste de ces personnes là). L'idéal serait que j'implémenter aussi les conversations privées en même temps."
            }
        },
        githubURL: 'https://github.com/SounaVR/RatMessenger'
    },
    {
        id: 6,
        title: {
            en: 'Discord Bots',
            fr: 'Bots Discord'
        },
        description: {
            en: 'Collection of small projects.',
            fr: 'Collection de petits projets.'
        },
        techStack: ['javascript', 'mongodb', 'discordjs'],
        imageUrl: '/discordbots.png',
        moreDetails: {
            para1: {
                en: 'A while back, I built a bot to play with Notion\'s API.',
                fr: "Il y a quelque temps, j'ai construit un bot pour jouer avec l'API de Notion."
            },
            para2: {
                en: 'Another one for Trello\'s API.',
                fr: "Un autre pour l'API de Trello."
            },
            para3: {
                en: 'One for my personal server for moderation stuff or logs.',
                fr: "Un pour mon serveur personnel pour la modération ou les logs."
            },
            para4: {
                en: 'And now I\'m working on a selfbot (runs under the user account) for music stuff on my Linux machine. Includes a queue system, skip and play/pause. In the future I want to manage the machine from there.',
                fr: "Et maintenant, je travaille sur un selfbot (qui tourne sous le compte utilisateur) pour la musique sur ma machine Linux. Il comprend un système de file d'attente, de skip et de lecture/pause. Dans le futur, je voudrais gérer la machine à partir de là."
            }
        },
        githubURL: 'https://github.com/SounaVR'
    },
    {
        id: 7,
        title: {
            en: 'MUSIC-CLI',
            fr: 'MUSIC-CLI'
        },
        description: {
            en: 'Not really a project but it\'s fun.',
            fr: "Pas vraiment un projet mais c'est marrant."
        },
        techStack: ['bash'],
        imageUrl: '/mpd.png',
        moreDetails: {
            para1: {
                en: 'I made scripts to listen to music or watch a YouTube video. The future goal is to invoke the script that records the microphone for the name of the music with a voice command (like Alexa).',
                fr: "J'ai créé des scripts pour écouter de la musique ou regarder une vidéo YouTube. L'objectif futur est d'invoquer le script qui enregistre le microphone pour le nom de la musique avec une commande vocale (comme Alexa)."
            }
        },
        githubURL: 'https://github.com/SounaVR/music-cli'
    }
];

export default projectsData;