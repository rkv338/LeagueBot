const Telebot = require('telebot');
const config = require('./config.json');
const bot = new Telebot(config.teleToken);
const {Kayn, REGIONS} = require('kayn');
const kayn = Kayn(config.leagueToken)({
    region: REGIONS.NORTH_AMERICA,
    debugOptions: {
        isEnabled: true,
        showKey: false,
    },
    requestOptions: {
        shouldRetry: true,
        numberOfRetriesBeforeAbort: 3,
        delayBeforeRetry: 1000,
        burst: false,
    },
    cacheOptions: {
        cache: null,
        timeToLives: {
            useDefault: false,
            byGroup: {},
            byMethod: {},
        },
    },
});

function getSeason (seasonId) {
	switch(seasonId) {
		case 0: return "Preseason 3"; break;
		case 1: return "Season 3"; break;
		case 2: return "Preseason 2014"; break;
		case 3: return "Season 2014"; break;
		case 4: return "Preseason 2015"; break;
		case 5: return "Season 2015"; break;
		case 6: return "Preseason 2016"; break;
		case 7: return "Season 2016"; break;
		case 8: return "Preseason 2017"; break;
		case 9: return "Season 2017"; break;
		case 10: return "Preseason 2018"; break;
		case 11: return "Season 2018"; break;
		default: return "Season not found."; 		
	}
}

function giveName (champId){ 
	switch (champId) {
	case 266: return "Aatrox"; break;
    case 412: return "Thresh"; break;
    case 23: return "Tryndamere"; break;
    case 79: return "Gragas"; break;
    case 69: return "Cassiopeia"; break;
    case 136: return "Aurelion Sol"; break;
    case 13: return "Ryze"; break;
    case 78: return "Poppy"; break;
    case 14: return "Sion"; break;
    case 1: return "Annie"; break;
    case 202: return "Jhin"; break;
    case 43: return "Karma"; break;
    case 111: return "Nautilus"; break;
    case 240: return "Kled"; break;
    case 99: return "Lux"; break;
    case 103: return "Ahri"; break;
    case 2: return "Olaf"; break;
    case 112: return "Viktor"; break;
    case 34: return "Anivia"; break;
    case 27: return "Singed"; break;
    case 86: return "Garen"; break;
    case 127: return "Lissandra"; break;
    case 57: return "Maokai"; break;
    case 25: return "Morgana"; break;
    case 28: return "Evelynn"; break;
    case 105: return "Fizz"; break;
    case 74: return "Heimerdinger"; break;
    case 238: return "Zed"; break;
    case 68: return "Rumble"; break;
    case 82: return "Mordekaiser"; break;
    case 37: return "Sona"; break;
    case 96: return "Kog'Maw"; break;
    case 55: return "Katarina"; break;
    case 117: return "Lulu"; break;
    case 22: return "Ashe"; break;
    case 30: return "Karthus"; break;
    case 12: return "Alistar"; break;
    case 122: return "Darius"; break;
    case 67: return "Vayne"; break;
    case 110: return "Varus"; break;
    case 77: return "Udyr"; break;
    case 89: return "Leona"; break;
    case 126: return "Jayce"; break;
    case 134: return "Syndra"; break;
    case 80: return "Pantheon"; break;
    case 92: return "Riven"; break;
    case 121: return "Kha'Zix"; break;
    case 42: return "Corki"; break;
    case 268: return "Azir"; break;
    case 51: return "Caitlyn"; break;
    case 76: return "Nidalee"; break;
    case 85: return "Kennen"; break;
    case 3: return "Galio"; break;
    case 45: return "Veigar"; break;
    case 432: return "Bard"; break;
    case 150: return "Gnar"; break;
    case 90: return "Malzahar"; break;
    case 104: return "Graves"; break;
    case 254: return "Vi"; break;
    case 10: return "Kayle"; break;
    case 39: return "Irelia"; break;
    case 64: return "Lee Sin"; break;
    case 420: return "Illaoi"; break;
    case 60: return "Elise"; break;
    case 106: return "Volibear"; break;
    case 20: return "Nunu"; break;
    case 4: return "Twisted Fate"; break;
    case 24: return "Jax"; break;
    case 102: return "Shyvana"; break;
    case 429: return "Kalista"; break;
    case 36: return "Dr. Mundo"; break;
    case 427: return "Ivern"; break;
    case 131: return "Diana"; break;
    case 223: return "Tahm Kench"; break;
    case 63: return "Brand"; break;
    case 113: return "Sejuani"; break;
    case 8: return "Vladimir"; break;
    case 154: return "Zac"; break;
    case 421: return "Rek'Sai"; break;
    case 133: return "Quinn"; break;
    case 84: return "Akali"; break;
    case 163: return "Taliyah"; break;
    case 18: return "Tristana"; break;
    case 120: return "Hecarim"; break;
    case 15: return "Sivir"; break;
    case 236: return "Lucian"; break;
    case 107: return "Rengar"; break;
    case 19: return "Warwick"; break;
    case 72: return "Skarner"; break;
    case 54: return "Malphite"; break;
    case 157: return "Yasuo"; break;
    case 101: return "Xerath"; break;
    case 17: return "Teemo"; break;
    case 75: return "Nasus"; break;
    case 58: return "Renekton"; break;
    case 119: return "Draven"; break;
    case 35: return "Shaco"; break;
    case 50: return "Swain"; break;
    case 91: return "Talon"; break;
    case 40: return "Janna"; break;
    case 115: return "Ziggs"; break;
    case 245: return "Ekko"; break;
    case 61: return "Orianna"; break;
    case 114: return "Fiora"; break;
    case 9: return "Fiddlesticks"; break;
    case 31: return "Cho'Gath"; break;
    case 33: return "Rammus"; break;
    case 7: return "LeBlanc"; break;
    case 16: return "Soraka"; break;
    case 26: return "Zilean"; break;
    case 56: return "Nocturne"; break;
    case 222: return "Jinx"; break;
    case 83: return "Yorick"; break;
    case 6: return "Urgot"; break;
    case 203: return "Kindred"; break;
    case 21: return "Miss Fortune"; break;
    case 62: return "Wukong"; break;
    case 53: return "Blitzcrank"; break;
    case 98: return "Shen"; break;
    case 201: return "Braum"; break;
    case 5: return "Xin Zhao"; break;
    case 29: return "Twitch"; break;
    case 11: return "Master Yi"; break;
    case 44: return "Taric"; break;
    case 32: return "Amumu"; break;
    case 41: return "Gangplank"; break;
    case 48: return "Trundle"; break;
    case 38: return "Kassadin"; break;
    case 161: return "Vel'Koz"; break;
    case 143: return "Zyra"; break;
    case 267: return "Nami"; break;
    case 59: return "Jarvan IV"; break;
    case 81: return "Ezreal"; break;
    default: console.log(champId + " new champion?"); //if new champion is added, I will know and can add that new champion
	}

}

function getStats(summonerN, regionName, msg) {
	var posOutput = summonerN + "";	
	var masteryOutput = "";
	var finalOutput = "";
	
	kayn.Summoner.by.name(summonerN).region(regionName).callback(function(err, summoner) {
		if (err) {
			msg.reply.text('Summoner not found.', {asReply: true});
		}
		
		kayn.LeaguePositions.by.summonerID(summoner.id).region(regionName).callback(function(err, posSet) {
    		if (posSet.length == 0) {
    			posOutput += "\nUnranked in all queue types.";
    		}
    		else {
    			posOutput += "\nRanks in all queue types:";
	    		posSet.forEach(function callback(curr) {
	    			var queue = curr.queueType.replace(/_/g, ' ');
	    			posOutput += "\n" + queue + ": " + curr.tier + " " + curr.rank;
	    		});
    		}    		
    	
    	kayn.ChampionMastery.list(summoner.id).region(regionName).callback(function(err,champlist) {
    		
    		var goTo = -1;
    		if (champlist.length == 0) {
    			masteryOutput += "\nNo mastery in any champions.";
    			    			
    		}
    		else if (champlist.length < 5) {
    			goTo = champlist.length;
    			masteryOutput += "\n Mastery in less than 5 champions: ";
    		}
    		else {
    			goTo = 5;
    			masteryOutput += "Top 5 Played Champions: ";
    		}   		
    		for (var i = 0; i < goTo; i++) {    				
    			masteryOutput += "\n" + giveName(champlist[i].championId) + ": " + "Points: " + champlist[i].championPoints + " " + "Level: " + champlist[i].championLevel;    				
	    	}
	    	finalOutput = posOutput + "\n" + "\n" + masteryOutput;		
	    	msg.reply.text(finalOutput, {asReply: true});
    	})
    });
    		
    })   
    
}
//need to add other queue types
function getQueueType (queueId) {
	switch(queueId) {
		case 400: return "5v5 DRAFT PICK"; break;
		case 420: return "5v5 RANKED SOLO"; break;
		case 430: return "5v5 BLIND PICK"; break;
		case 440: return "5v5 RANKED FLEX"; break;
		case 450: return "5v5 ARAM"; break;
		default: console.log(queueId);
	}
}

function convertMin (numSeconds) {
	return Math.floor(numSeconds / 60) + " minutes";
}
function secondsLeft (numSeconds) {
	var output = "";
	var remainder = numSeconds % 60;
	if (remainder != 0) {
		output += (remainder);
		if (remainder != 1) {
			output += " seconds";
		}
		else {
			output += " second";
		}
		return output;
	}
}
function getWin (summonerName, sumId, accountID , regionName , matchNum, msg) {
	kayn.Matchlist.by.accountID(accountID).region(regionName).callback(function(err, matchlist) {
			if (err) {
				msg.reply.text('Summoner has not played any matches.', {asReply: true});
			}
			var output = (matchNum + 1);				
			kayn.Match.get(matchlist.matches[matchNum].gameId).region(regionName).callback(function(err, match) {
				var partId = "";
				console.log(matchlist.matches[matchNum].lane);
				console.log(match.gameDuration);
				output  += "\n" + getSeason(matchlist.matches[matchNum].season) + " " + 
				getQueueType(matchlist.matches[matchNum].queue) + " " + matchlist.matches[matchNum].role +
				 " " + giveName(matchlist.matches[matchNum].champion) + "\n " + convertMin(match.gameDuration) 
				 + " " + secondsLeft(match.gameDuration); 
					
				for (var i = 0; i < match.participantIdentities.length; i++) {
					if (match.participantIdentities[i].player.summonerId == sumId) {
						partId = match.participantIdentities[i].participantId;
					}					
				}
					
				if (partId == "") {
					return msg.reply.text('Participant not found in match', {asReply: true});
				}

				for (var i = 0; i < match.participants.length; i++) {
					if (match.participants[i].participantId == partId) {
						if (match.participants[i].stats.win) {
							output += " - WIN";
						}
						else if (!match.participants[i].stats.win) {
							output += " - LOSS";
						}
						output += " " + match.participants[i].stats.kills + "/" 
						+ match.participants[i].stats.deaths + "/" + match.participants[i].stats.assists;

						output += "\n" + "Largest Killing Spree: " + match.participants[i].stats.largestKillingSpree;
						output += "\n" + "Greatest Multi-kill: " + match.participants[i].stats.largestMultiKill;
						output += "\n" + "Pentakills: " + match.participants[i].stats.pentaKills;
						output += "\n" + "CS: " + match.participants[i].stats.totalMinionsKilled;
					}
				}
				msg.reply.text(output, {asReply: false});
			});	
		
	});
}

function getRecent(summonerName, regionName, msg) {	
	kayn.Summoner.by.name(summonerName).region(regionName).callback(function(err, summoner) {
		if(err) {
			msg.reply.text('Summoner not found.', {asReply: true});
		}			
		for (var index = 0; index < 5; index++) {
			 getWin(summonerName, summoner.id, summoner.accountId, regionName, index, msg);
		}	
	});
}
//commands

//Champion mastery information as well as rank in all queue types
//DOES NOT INCLUDE ROTATING GAME MODES
bot.on(/^\/na (.+)$/, (msg, props) => {
    const summonerN = props.match[1]; 
    getStats(summonerN, REGIONS.NORTH_AMERICA, msg);
});

bot.on(/^\/kr (.+)$/, (msg, props) => {
    const summonerN = props.match[1]; 
    getStats(summonerN, REGIONS.KOREA, msg);
});

bot.on(/^\/euw (.+)$/, (msg, props) => {
    const summonerN = props.match[1]; 
    getStats(summonerN, REGIONS.EUROPE_WEST, msg);
});

bot.on(/^\/eue (.+)$/, (msg, props) => {
    const summonerN = props.match[1]; 
    getStats(summonerN, REGIONS.EUROPE, msg);
});

bot.on(/^\/br (.+)$/, (msg, props) => {
    const summonerN = props.match[1]; 
    getStats(summonerN, REGIONS.BRAZIL, msg);
});

bot.on(/^\/lan (.+)$/, (msg, props) => {
    const summonerN = props.match[1]; 
    getStats(summonerN, REGIONS.LATIN_AMERICA_NORTH, msg);
});

bot.on(/^\/las (.+)$/, (msg, props) => {
    const summonerN = props.match[1]; 
    getStats(summonerN, REGIONS.LATIN_AMERICA_SOUTH, msg);
});

bot.on(/^\/oc (.+)$/, (msg, props) => {
    const summonerN = props.match[1]; 
    getStats(summonerN, REGIONS.OCEANIA, msg);
});

bot.on(/^\/ra (.+)$/, (msg, props) => {
    const summonerN = props.match[1]; 
    getStats(summonerN, REGIONS.RUSSIA, msg);
});

bot.on(/^\/jp (.+)$/, (msg, props) => {
    const summonerN = props.match[1]; 
    getStats(summonerN, REGIONS.JAPAN, msg);
});

bot.on(/^\/tr (.+)$/, (msg, props) => {
    const summonerN = props.match[1]; 
    getStats(summonerN, REGIONS.TURKEY, msg);
});

//recent match stats
bot.on(/^\/recentna (.+)$/, (msg, props) => {
	const summonerName = props.match[1];
	getRecent(summonerName, REGIONS.NORTH_AMERICA, msg);
});

bot.on(/^\/recentkr (.+)$/, (msg, props) => {
	const summonerName = props.match[1];
	getRecent(summonerName, REGIONS.KOREA, msg);
});

bot.on(/^\/recenteuw (.+)$/, (msg, props) => {
	const summonerName = props.match[1];
	getRecent(summonerName, REGIONS.EUROPE_WEST, msg);
});

bot.on(/^\/recenteue (.+)$/, (msg, props) => {
	const summonerName = props.match[1];
	getRecent(summonerName, REGIONS.EUROPE, msg);
});

bot.on(/^\/recentlas (.+)$/, (msg, props) => {
	const summonerName = props.match[1];
	getRecent(summonerName, REGIONS.LATIN_AMERICA_SOUTH, msg);
});

bot.on(/^\/recentlan (.+)$/, (msg, props) => {
	const summonerName = props.match[1];
	getRecent(summonerName, REGIONS.LATIN_AMERICA_NORTH, msg);
});

bot.on(/^\/recentjp (.+)$/, (msg, props) => {
	const summonerName = props.match[1];
	getRecent(summonerName, REGIONS.JAPAN, msg);
});

bot.on(/^\/recentoc (.+)$/, (msg, props) => {
	const summonerName = props.match[1];
	getRecent(summonerName, REGIONS.OCEANIA, msg);
});

bot.on(/^\/recentra (.+)$/, (msg, props) => {
	const summonerName = props.match[1];
	getRecent(summonerName, REGIONS.RUSSIA, msg);
});

bot.on(/^\/recenttr (.+)$/, (msg, props) => {
	const summonerName = props.match[1];
	getRecent(summonerName, REGIONS.TURKEY, msg);
});

bot.on(/^\/recentbr (.+)$/, (msg, props) => {
	const summonerName = props.match[1];
	getRecent(summonerName, REGIONS.BRAZIL, msg);
});


bot.start();