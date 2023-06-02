module.exports = {
    en: {
        translation: {
            POSITIVE_SOUND: `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_positive_response_02'/>`,
            GREETING_SPEECHCON: `<say-as interpret-as="interjection">bravo</say-as>`,
            DOUBT_SPEECHCON: `<say-as interpret-as="interjection">hmm</say-as>`,
            WELCOME_MSG: `Welcome to Happy Birthday {{name}}. Let's have some fun with your birthday! `,
            WELCOME_BACK_MSG: 'Welcome back {{name}}! ',
            REJECTED_MSG: 'No problem. Please say the date again so I can get it right.',
            DAYS_LEFT_MSG: `{{name}} There's {{count}} day left `,
            DAYS_LEFT_MSG_plural: '{{name}} There are {{count}} days left ',
            WILL_TURN_MSG: `until you're {{count}} year old. `,
            WILL_TURN_MSG_plural: `until you're {{count}} years old. `,
            GREET_MSG: '$t(POSITIVE_SOUND) $t(GREETING_SPEECHCON) {{name}}. ',
            NOW_TURN_MSG: `You're now {{count}} year old! `,
            NOW_TURN_MSG_plural: `You're now {{count}} years old! `,
            MISSING_MSG: `$t(DOUBT_SPEECHCON). It looks like you haven't told me your birthday yet. `,
            POST_SAY_HELP_MSG: `If you want to change the date, try saying, register my birthday. Or just say the date directly. What would you like to do next? `,
            HELP_MSG: 'I can remember your birthday if you tell me the date. Or I can tell you the remaining days until your next birthday. Which one would you like to try? ',
            REPROMPT_MSG: `If you're not sure what to do next try asking for help. If you want to leave just say stop. What would you like to do next? `,
            GOODBYE_MSG: ['Goodbye {{name}}! ', 'So long {{name}}! ', 'See you later {{name}}! ', 'Cheers {{name}}! '],
            REFLECTOR_MSG: 'You just triggered {{intent}}',
            FALLBACK_MSG: `Sorry, I don't know about that. Please try again.`,
            ERROR_MSG: 'Sorry, there was an error. Please try again.',
            NO_TIMEZONE_MSG: `I can't determine your timezone. Please check your device settings and make sure a timezone was selected. After that please reopen the skill and try again!`,
        }
    },
    es: {
        translation: {
            POSITIVE_SOUND: `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_positive_response_02'/>`,
            GREETING_SPEECHCON: `<say-as interpret-as="interjection">felicidades</say-as>`,
            DOUBT_SPEECHCON: `<say-as interpret-as="interjection">hmm</say-as>`,
            WELCOME_MSG: 'Te doy la bienvenida a Feliz Cumpleaños {{name}}. Vamos a divertirnos un poco con tu cumpleaños! ',
            WELCOME_BACK_MSG: 'Te doy la bienvenida otra vez {{name}}! ',
            REJECTED_MSG: 'No pasa nada. Por favor dime la fecha otra vez y lo corregimos. ',
            DAYS_LEFT_MSG: '{{name}} Queda {{count}} día ',
            DAYS_LEFT_MSG_plural: '{{name}} Quedan {{count}} días ',
            WILL_TURN_MSG: 'para que cumplas {{count}} año. ',
            WILL_TURN_MSG_plural: 'para que cumplas {{count}} años. ',
            GREET_MSG: '$t(POSITIVE_SOUND) $t(GREETING_SPEECHCON) {{name}}. ',
            NOW_TURN_MSG: 'Hoy cumples {{count}} año! ',
            NOW_TURN_MSG_plural: 'Hoy cumples {{count}} años! ',
            MISSING_MSG: '$t(DOUBT_SPEECHCON). Parece que aun no me has dicho tu fecha de cumpleaños. ',
            POST_SAY_HELP_MSG: `Si quieres cambiar la fecha puedes decir, registra mi cumpleaños. O sólo dime la fecha directamente. Qué quieres hacer? `,
            HELP_MSG: 'Puedo recordar tu cumpleaños si me dices una fecha. O decirte cuanto falta para que cumplas. Qué quieres hacer? ',
            REPROMPT_MSG: 'Si no sabes como continuar intent pedir ayuda. Si quieres salir solo dí para. Qué quieres hacer? ',
            GOODBYE_MSG: ['Hasta luego {{name}}! ', 'Adios {{name}}! ', 'Hasta pronto {{name}}! ', 'Nos vemos {{name}}! '],
            REFLECTOR_MSG: 'Acabas de activar {{intent}}',
            FALLBACK_MSG: 'Lo siento, no se nada sobre eso. Por favor inténtalo otra vez. ',
            ERROR_MSG: 'Lo siento, ha habido un problema. Por favor inténtalo otra vez. ',
            NO_TIMEZONE_MSG: 'No he podido determinar tu zona horaria. Verifica la configuración de tu dispositivo, abre otraa vez la skill e inténtalo otra vez.'
        }
    },
    it: {
        translation: {
            POSITIVE_SOUND: `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_positive_response_02'/> `,
            GREETING_SPEECHCON: `<say-as interpret-as="interjection">hip hip hurrà</say-as> `,
            DOUBT_SPEECHCON: `<say-as interpret-as="interjection">hmm</say-as> `,
            WELCOME_MSG: `Benvenuto a Buon Compleanno. Esploreremo un paio di funzionalità usando la tua data di nascita! `,
            WELCOME_BACK_MSG: 'Ciao di nuovo, {{name}}! ',
            REJECTED_MSG: 'Nessun problema. Per favore ridimmi la data e sistemiamo subito. ',
            DAYS_LEFT_MSG: `Manca un giorno `,
            DAYS_LEFT_MSG_plural: 'Mancano {{count}} giorni ',
            WILL_TURN_MSG: `a quando farai un anno. `,
            WILL_TURN_MSG_plural: `a quando farai {{count}} anni. `,
            GREET_MSG: `$t(POSITIVE_SOUND) $t(GREETING_SPEECHCON) {{name}}. `,
            NOW_TURN_MSG: `Hai compiuto un anno `,
            NOW_TURN_MSG_plural: `Hai compiuto {{count}} anni! `,
            MISSING_MSG: `Non mi hai ancora detto quando compi gli anni. `,
            POST_SAY_HELP_MSG: `Se vuoi cambiare la data, chiedimi di ricordare il tuo compleanno, o dimmi pure direttamente la data. Cosa vuoi fare? `,
            HELP_MSG: 'Posso ricordarmi il tuo compleanno se mi dici la tua data di nascita. Posso anche dirti tra quanti giorni compi gli anni. Cosa vuoi fare? ',
            REPROMPT_MSG: `Se non sai cosa fare, prova a chiedermi aiuto. Se vuoi uscire dimmi pure stop. Cosa vuoi fare?`,
            GOODBYE_MSG: ['A presto, {{name}}! ', 'Ciao {{name}}! ', 'Arrivederci {{name}}! ', 'A dopo {{name}}! '],
            REFLECTOR_MSG: 'Hai invocato l\'intento {{intent}}',
            FALLBACK_MSG: 'Perdonami, penso di non aver capito bene. Riprova.',
            ERROR_MSG: 'Scusa, c\'è stato un errore. Riprova.',
            NO_TIMEZONE_MSG: 'Non ho potuto determinare il tuo fuso orario. Verifica la configurazione del tuo dispositivo, e riprova.'
        }
    },
    fr: {
        translation: {
            POSITIVE_SOUND: `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_positive_response_02'/>`,
            GREETING_SPEECHCON: `<say-as interpret-as="interjection">Cocorico</say-as>`,
            DOUBT_SPEECHCON: `<say-as interpret-as="interjection">Hmmm</say-as>`,
            WELCOME_MSG: 'Bienvenue sur la Skill des anniversaires {{name}}! ',
            WELCOME_BACK_MSG: 'Content de vous revoir {{name}}! ',
            REJECTED_MSG: 'D\'accord, je ne vais pas prendre en compte cette date. Dites-moi une autre date pour que je puisse l\'enregistrer.',
            DAYS_LEFT_MSG: '{{name}} Il vous reste {{count}} jour ',
            DAYS_LEFT_MSG_plural: '{{name}} Il vous reste {{count}} jours ',
            WILL_TURN_MSG: 'avant d\'avoir {{count}} an. ',
            WILL_TURN_MSG_plural: 'avant d\'avoir {{count}} ans. ',
            GREET_MSG: '$t(POSITIVE_SOUND) $t(GREETING_SPEECHCON) {{name}}. ',
            NOW_TURN_MSG: 'Aujourd\'hui, vous avez {{count}} an!',
            NOW_TURN_MSG_plural: 'Aujourd\'hui, vous avez {{count}} ans! ',
            MISSING_MSG: '$t(DOUBT_SPEECHCON). Il me semble que vous ne m\'avez pas encore dit votre date de naissance. ',
            POST_SAY_HELP_MSG: `Si vous souhaitez changez votre date de naissance, dites simplement "enregistre mon anniversaire" ou bien dites moi directement votre date de naissance. Quel est votre choix ?`,
            HELP_MSG: 'Je peux me souvenir de votre anniversaire et vous dire le nombre de jours restant avant de le fêter. Quel est votre choix ?',
            REPROMPT_MSG: `Pour obtenir plus d'informations sur ce que je peux faire pour vous, demandez-moi de l'aide. Si vous voulez quitter la Skill, dites simplement "stop". Quel est votre choix ?`,
            GOODBYE_MSG: ['Au revoir {{name}}! ', 'A bientôt {{name}}! ', 'A la prochaine fois {{name}}! '],
            REFLECTOR_MSG: 'Vous avez invoqué l\'intention {{intent}}',
            FALLBACK_MSG: 'Désolé, je ne sais pas répondre à votre demande. Pouvez-vous reformuler?. ',
            ERROR_MSG: 'Désolé, je n\'ai pas compris. Pouvez-vous reformuler? ',
            NO_TIMEZONE_MSG: 'Je n\'ai pas réussi à déterminer votre fuseau horaire. Veuillez vérifier les paramètres de votre appareil et réessayez.'
        }
    },
    "fr-CA" : {
        translation: {
            WELCOME_MSG: 'Bienvenue sur la Skill des fêtes {{name}}! ',
            POST_SAY_HELP_MSG: `Si vous souhaitez changez votre date de naissance, dites simplement "sauve ma fête" ou bien dites moi directement votre date de naissance. Quel est votre choix ?`,
            HELP_MSG: 'Je peux me souvenir de votre fête et vous dire le nombre de jours restant avant de le célébrer. Quel est votre choix ?'
        }
    }
}