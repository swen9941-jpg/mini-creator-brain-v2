const shorts = [
    { day: 1, title: "One Move That Changed Everything", thumbnail: "Person at crossroads with glowing path", broll: "Feet moving → hands choosing → flash → city skyline", description: "One choice can spark a lifetime of change. 🔥 #EEF #StreetStories #LifeChoices", hashtags: "#ExploreEnjoyFire #Motivation #ShortStory #LifeLessons #AITruthBomb" },
    { day: 2, title: "The Hustle Never Stops", thumbnail: "Street vendor night lights", broll: "Counting cash → street montage → fast movement shots", description: "Every move matters when chasing your dream. 💪 #EEF #HustleHard", hashtags: "#StreetLife #Motivation #ExploreEnjoyFire #DailyHustle" },
    { day: 3, title: "Lost & Found in Managua", thumbnail: "Map with highlighted paths", broll: "Walking streets → discovering hidden gem → street shots", description: "Getting lost sometimes leads to the greatest finds. 🌮 #EEF #StreetVibes", hashtags: "#StreetStory #ExploreNicaragua #ExploreEnjoyFire #ShortVideo" },
    { day: 4, title: "AI Knows My Secret", thumbnail: "Glowing AI face", broll: "AI screen → typing → reaction → mind-blown effect", description: "What if AI could see what you can’t? 🤯 #EEF #AITruthBomb", hashtags: "#AI #ShortStory #StreetLife #ExploreEnjoyFire #MindBlown" },
    { day: 5, title: "Food That Heals The Soul", thumbnail: "Colorful healing meal", broll: "Ingredients → cooking → serving → smile", description: "What you eat fuels your hustle. 🌟 #EEF #SoulFood #StreetLifeStories", hashtags: "#HealingFood #ShortStory #StreetLife #ExploreEnjoyFire #DailyHustle" },
    { day: 6, title: "Street Music Vibes", thumbnail: "Street performer neon lights", broll: "Music performance → dancing → crowd reaction", description: "Street beats, real stories, pure vibes. 🎵 #EEF #StreetVibes #MusicStory", hashtags: "#MusicShorts #StreetLife #ExploreEnjoyFire #EEFShorts" },
    { day: 7, title: "Unexpected Kindness", thumbnail: "Hands exchanging glowing item", broll: "Stranger helping → smile → city shots", description: "One act of kindness can light up the street. 💛 #EEF #StreetLifeStory", hashtags: "#ShortStory #StreetVibes #ExploreEnjoyFire #Motivation #EEFShorts" },
    { day: 8, title: "Money Talks, Streets Listen", thumbnail: "Cash in hand, neon city behind", broll: "Counting bills → street reactions → zoom on face", description: "Money isn’t just currency; it’s energy. ⚡ #EEF #StreetHustle", hashtags: "#HustleLife #StreetStory #ShortVideo #ExploreEnjoyFire" },
    { day: 9, title: "Baby Laughs, Big Lessons", thumbnail: "Baby laughing, street overlay", broll: "Baby laughing → adult reactions → city joy shots", description: "Small things teach big lessons. 👶✨ #EEF #LifeLessons #StreetStory", hashtags: "#BabyLaughs #StreetLife #ShortVideo #ExploreEnjoyFire #EEFShorts" },
    { day: 10, title: "AI Predicts the Hustle", thumbnail: "Futuristic AI map over streets", broll: "AI visualization → street shots → text pop-ups", description: "The streets never lie… even AI agrees. 🤖 #EEF #AITruthBomb", hashtags: "#AI #StreetStory #ShortVideo #ExploreEnjoyFire #Motivation" },
    { day: 11, title: "Quick Street Hacks", thumbnail: "Hands showing a street trick", broll: "Quick tip demo → reaction shots → street backdrop", description: "Little hacks, big street impact. ⚡ #EEF #StreetHacks", hashtags: "#LifeHacks #ShortStory #StreetLife #ExploreEnjoyFire #EEFShorts" },
    { day: 12, title: "Soul Spoon Healing Moment", thumbnail: "Vibrant meal with glowing overlay", broll: "Cook → serve → person tasting → smile → text pop", description: "Healing food for your body and hustle. 🌟 #EEF #SoulSpoon", hashtags: "#FoodShorts #StreetLife #ExploreEnjoyFire #EEFShorts" },
    { day: 13, title: "Night Walk Stories", thumbnail: "Neon street at night", broll: "Footsteps → neon signs → city streets → slow motion → voiceover snippet", description: "Every street has a story. 🌃 #EEF #StreetStories", hashtags: "#ExploreNicaragua #StreetLife #ShortStory #ExploreEnjoyFire" },
    { day: 14, title: "From Zero to Hustler", thumbnail: "Person looking at city skyline", broll: "Empty street → small wins → building blocks montage", description: "The grind starts small but dreams grow fast. 🔥 #EEF #HustleStory", hashtags: "#Motivation #StreetLife #ExploreEnjoyFire #ShortVideo" },
    { day: 15, title: "Gemini Secrets Exposed", thumbnail: "Gemini symbol glowing neon", broll: "Zodiac symbols → street shots → thought bubble effects", description: "Gemini minds aren’t what they seem… ♊🧠 #EEF #AstroTruths", hashtags: "#Zodiac #StreetLife #ShortStory #ExploreEnjoyFire #EEFShorts" },
    { day: 16, title: "Scorpio’s Hidden Layers", thumbnail: "Scorpio symbol with shadow glow", broll: "Street interviews → symbolic hands → text overlay", description: "Trust takes time. Scorpio vibes decoded. 🔮 #EEF #Astrology", hashtags: "#ZodiacSecrets #StreetLife #ShortVideo #ExploreEnjoyFire" },
    { day: 17, title: "Healing Secrets of Fry Bread", thumbnail: "Close-up of golden fry bread", broll: "Cooking → flipping bread → serving → eating → reaction", description: "Traditional food, modern energy. ✨ #EEF #SoulFood #StreetVibes", hashtags: "#FoodShorts #StreetLife #ExploreEnjoyFire #EEFShorts" },
    { day: 18, title: "Unexpected Wins in the Street", thumbnail: "Small victory gesture, neon glow", broll: "Hands high-five → city smile → reaction shots", description: "Small wins spark big momentum. ⚡ #EEF #StreetStory", hashtags: "#Motivation #StreetLife #ExploreEnjoyFire #ShortVideo" },
    { day: 19, title: "AI Sees Your Potential", thumbnail: "AI eyes glowing over city map", broll: "AI interface → street shots → thought bubble overlay → reaction", description: "Even AI knows your grind matters. 🤖 #EEF #AITruthBomb", hashtags: "#AI #StreetLife #ExploreEnjoyFire #ShortStory" },
    { day: 20, title: "Street Food vs Fancy Food", thumbnail: "Split screen, street food vs plated dish", broll: "Close-up street cooking → fancy plating → person tasting → reaction", description: "Both can fuel the hustle, but one hits different. 🌮✨ #EEF #StreetFood", hashtags: "#FoodShorts #StreetLife #ExploreEnjoyFire #EEFShorts" },
    { day: 21, title: "Raw Street Energy", thumbnail: "Neon graffiti + dancer silhouette", broll: "Dancing → city streets → hands clapping → quick zoom shots", description: "The streets move to their own beat. ⚡ #EEF #StreetVibes", hashtags: "#ExploreEnjoyFire #StreetLife #ShortVideo #EEFShorts" },
    { day: 22, title: "Baby Comedy Chaos", thumbnail: "Laughing baby face overlay neon street", broll: "Baby reacting → adults laughing → fast-paced city montage", description: "Even babies teach hustle lessons. 👶😂 #EEF #StreetStories", hashtags: "#BabyLaughs #StreetLife #ExploreEnjoyFire #ShortVideo" },
    { day: 23, title: "Quick Motivation for Hustlers", thumbnail: "Hands holding small spark/fire", broll: "Montage of hustle → neon signs → reaction close-ups → text overlay", description: "Your grind today builds tomorrow. 💪 #EEF #MotivationShorts", hashtags: "#StreetLife #ExploreEnjoyFire #DailyHustle #EEFShorts" },
    { day: 24, title: "Hidden Gems of Managua", thumbnail: "Neon arrow pointing to street gem", broll: "Street exploration → local foods → small interactions → reaction → text pop", description: "Some treasures are hidden in plain sight. ✨ #EEF #StreetVibes", hashtags: "#StreetStory #ExploreEnjoyFire #ShortVideo #EEFShorts" },
    { day: 25, title: "SoulSpeak Music Drop", thumbnail: "SwenKrypt performing neon glow", broll: "Music snippet → dancing crowd → street lights → text overlay", description: "Music that speaks your hustle. 🎵 #EEF #SoulSpeak", hashtags: "#MusicShorts #StreetLife #ExploreEnjoyFire #EEFShorts" },
    { day: 26, title: "Motivation in a Minute", thumbnail: "Close-up of determined face + glowing text", broll: "Street action montage → quick motivational gestures → text pop", description: "One minute. One spark. 🔥 #EEF #QuickMotivation", hashtags: "#ExploreEnjoyFire #MotivationShorts #StreetLife #EEFShorts" },
    { day: 27, title: "AI vs The Streets", thumbnail: "Half AI face, half street silhouette", broll: "AI screens → street montage → neon split-screen → reaction", description: "Tech meets real life energy. 🤯 #EEF #AITruthBomb", hashtags: "#AI #StreetLife #ExploreEnjoyFire #ShortVideo" },
    { day: 28, title: "Healing Recipes Quick Tip", thumbnail: "Healing food close-up with neon glow", broll: "Ingredient prep → serving → tasting → smiling → quick overlay text", description: "Quick tips to fuel your hustle and soul. 🌟 #EEF #SoulSpoon", hashtags: "#FoodShorts #ExploreEnjoyFire #StreetLife #EEFShorts" },
    { day: 29, title: "Street Life Wins", thumbnail: "Fist bump in street with neon effect", broll: "High-fives → small victories → city reactions → text overlay", description: "Every small win counts. ⚡ #EEF #StreetStories", hashtags: "#Motivation #StreetLife #ExploreEnjoyFire #EEFShorts" },
    { day: 30, title: "The Power of One Spark", thumbnail: "Glowing spark in hand", broll: "Spark → street montage → slow-motion → neon overlay → reaction", description: "One spark can light your whole path. 🔥 #EEF #LifeLessons", hashtags: "#StreetLife #Motivation #ExploreEnjoyFire #ShortStory #EEFShorts" }
];

let used = [];

const generateBtn = document.getElementById("generateBtn");
const output = document.getElementById("output");
const usedCount = document.getElementById("usedCount");
const shortList = document.getElementById("shortList");

// Render initial list
shorts.forEach(s => {
    const li = document.createElement("li");
    li.id = "short-" + s.day;
    li.innerText = `DAY ${s.day} — ${s.title}`;
    shortList.appendChild(li);
});

generateBtn.addEventListener("click", () => {
    if (used.length === shorts.length) {
        output.innerText = "✅ All shorts have been used!";
        return;
    }

    let index;
    do {
        index = Math.floor(Math.random() * shorts.length);
    } while (used.includes(index));

    used.push(index);
    usedCount.innerText = used.length;

    const s = shorts[index];
    output.innerText = `🔥 DAY ${s.day} — "${s.title}"\n\nThumbnail: ${s.thumbnail}\nCapCut B-roll: ${s.broll}\nDescription: ${s.description}\nHashtags: ${s.hashtags}`;

    // Mark the used short in the list
    document.getElementById("short-" + s.day).classList.add("used");
});





