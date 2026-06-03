export type Reading = {
  id: string;
  title: string;
  category: "tarot" | "runes" | "crystal" | "astral" | "spirit";
  shortText: string;
  fullReading: string;
  colors: string[];
};

export const readings: Reading[] = [
  // ── TAROT ────────────────────────────────────────────────────────────────────

  {
    id: "r1",
    title: "The Veil Lifts",
    category: "tarot",
    shortText: "Ancient wisdom stirs within the mists...",
    fullReading:
      "The cards speak of a great awakening on your horizon. A door long closed is about to open — not by force, but by the quiet power of your readiness. The High Priestess watches from the shadows: she sees what you have buried, the knowing you've dismissed as 'just a feeling.' Trust it. The moon tonight is a lantern held up to your inner world. Something you've been seeking has already found you; you simply haven't looked down at your own hands.",
    colors: ["#8b3ff0", "#c084fc", "#e879f9"],
  },
  {
    id: "r6",
    title: "The Midnight Oracle",
    category: "tarot",
    shortText: "The Tower stands, yet its foundations are golden...",
    fullReading:
      "The Tower card is rarely welcomed — its lightning, its falling figures, its crown tumbling into void. But look closer at what the card does not show: the ground below, soft and ready. What falls away from you now is not your life. It is the architecture of a story that was never quite yours, built to impress visitors who were never truly paying attention. The real structure — bone-deep, root-deep — is untouchable by any lightning. Feel for it now, in the steadiness beneath your fear. That is where you actually live.",
    colors: ["#7f1d1d", "#dc2626", "#fbbf24"],
  },
  {
    id: "r7",
    title: "The Fool's First Step",
    category: "tarot",
    shortText: "On the cliff's edge, wings you didn't know you had...",
    fullReading:
      "The Fool does not leap in ignorance — the Fool leaps in faith, which is an entirely different thing. You stand at a beginning so new that you cannot yet see its shape. The cards show you holding something small — a flower, a satchel, a question — and behind you, a mountain of everything you've done before. Ahead: open sky. The white sun in this card is not a destination; it is a companion. What you are about to attempt has not been attempted by you before. That is precisely why it is yours to do.",
    colors: ["#fbbf24", "#f59e0b", "#8b3ff0"],
  },
  {
    id: "r8",
    title: "The Empress Stirs",
    category: "tarot",
    shortText: "Creation moves through you like a season...",
    fullReading:
      "The Empress sits among her wheat fields and her cypress groves, entirely unhurried. She is not waiting for permission to bloom — she is the permission. The cards have placed her in your reading to tell you something about your own creative and generative power, which has been lying fallow longer than it should. Whatever you have been trying to bring into being — a project, a relationship, a version of yourself — the Empress says: the season is right. You have been preparing. Now you may begin to bear fruit.",
    colors: ["#059669", "#34d399", "#c084fc"],
  },
  {
    id: "r9",
    title: "The Chariot Advances",
    category: "tarot",
    shortText: "Two forces harnessed become one unstoppable drive...",
    fullReading:
      "The Chariot does not steer with reins — it steers with will. The two sphinxes pulling in opposite directions are not a problem; they are the engine. What you have seen as internal contradiction — the part of you that wants to stay and the part that needs to go, the ambition and the fear — is not tearing you apart. It is your power source. The rider does not silence one sphinx. They learn to hold both, and in the tension between them, move forward at extraordinary speed. You have more forward momentum than you know.",
    colors: ["#1e3a8a", "#3b82f6", "#fbbf24"],
  },
  {
    id: "r10",
    title: "The Star Pours Forth",
    category: "tarot",
    shortText: "After the storm, a single light remains...",
    fullReading:
      "The Star appears after The Tower in the Major Arcana for a reason. After the lightning, after the dissolution of what no longer held — there is this: a naked figure kneeling at the water's edge, pouring from two vessels that never empty. One into the water. One onto the land. The Star is the card of hope that has been tested and survived. It is the renewal that comes not from avoiding difficulty but from passing through it. You are at the shore now. You are the one kneeling. The vessels in your hands are full.",
    colors: ["#1e40af", "#60a5fa", "#e2e8f0"],
  },
  {
    id: "r11",
    title: "Judgment Sounds",
    category: "tarot",
    shortText: "The angel's trumpet calls the sleeping to rise...",
    fullReading:
      "Judgment is not a card of punishment. It is a card of awakening — of being called, loudly and undeniably, to rise into a larger version of yourself. The figures emerging from their coffins in this card are not in fear; they are reaching upward with their arms, their faces turned to the sky in something that looks remarkably like relief. You have been in a kind of sleep: functional, managed, but not fully present to your own life. Something is sounding now — a call from deep within, or from circumstances without. Answer it. This is not the end of something. This is the beginning of your most conscious chapter.",
    colors: ["#dc2626", "#fbbf24", "#f3e8ff"],
  },
  {
    id: "r12",
    title: "The World Completes",
    category: "tarot",
    shortText: "The great dance arrives at its full expression...",
    fullReading:
      "The World card does not mean the end — it means completion. The figure at the centre dances in the wreath of laurel, surrounded by the four sacred creatures at the corners of existence. What you have been building, learning, becoming over this cycle of your life is approaching a moment of wholeness. You will feel it as a settling, a sense of rightness that is unfamiliar because you so rarely allow yourself to experience sufficiency. You have done it. Not perfectly — perfection is not the standard — but fully. The dance is complete. Rest in this before you begin the next one.",
    colors: ["#7c3aed", "#a78bfa", "#fbbf24"],
  },
  {
    id: "r13",
    title: "The Moon's Deception",
    category: "tarot",
    shortText: "What the night shows is not always what it is...",
    fullReading:
      "The Moon card arrives not to frighten but to illuminate — specifically, to illuminate the difference between what is real and what your fear has constructed. The wolf and the dog both baying at the moon are not your enemies; they are two aspects of your own response to uncertainty. One wild, one domesticated — both real, both yours. The path between them leads through the pillars and into something unknown. The Moon asks: what are you avoiding looking at directly? Not because it will destroy you, but because looking at it clearly is the only way through. The monsters in this card are shadows. Shadows require a light source. You are the light.",
    colors: ["#1e3a8a", "#6366f1", "#e2e8f0"],
  },
  {
    id: "r14",
    title: "The Hierophant Speaks",
    category: "tarot",
    shortText: "Between tradition and truth, wisdom waits...",
    fullReading:
      "The Hierophant holds the key to the sacred and the mundane both. He does not hoard wisdom — he passes it down, through gesture, through teaching, through the accumulated understanding of those who came before. This card has arrived in your reading to ask a question: which traditions in your life are serving you, and which are you keeping out of habit or fear of the unfamiliar? Not all that is established is worth preserving; not all that is new is worth pursuing. The Hierophant's gift is discernment — the ability to receive what is genuinely useful from the past and to leave behind what has become a cage.",
    colors: ["#78350f", "#b45309", "#d8b4fe"],
  },

  // ── RUNES ────────────────────────────────────────────────────────────────────

  {
    id: "r3",
    title: "Whispers of the Runes",
    category: "runes",
    shortText: "Elder Futhark speaks across the ages...",
    fullReading:
      "Hagalaz falls first — disruption, yes, but the disruption of a seed breaking open. Nauthiz follows: need, friction, the fire made by rubbing two sticks together. These runes do not bring destruction; they bring transformation wearing destruction's coat. The third rune, Sowilo, blazes beneath them both: the sun that was always there, behind every cloud you named catastrophe. You are not at the end of something. You are at the beginning of something that required an ending to begin.",
    colors: ["#78350f", "#d97706", "#fbbf24"],
  },
  {
    id: "r15",
    title: "Ansuz, the God's Breath",
    category: "runes",
    shortText: "The rune of communication opens your mouth...",
    fullReading:
      "Ansuz is Odin's rune — the breath of the divine made into language. It falls now to tell you that something important needs to be spoken, or written, or otherwise given form. You have been carrying a truth that has not yet been released into the world. It is not that the words are not ready; it is that you have been waiting for certainty before speaking. Ansuz does not require certainty. It requires courage and clarity — the willingness to say what is real even when you cannot guarantee how it will be received. The rune promises: what you say will land where it needs to.",
    colors: ["#1e40af", "#60a5fa", "#c084fc"],
  },
  {
    id: "r16",
    title: "Thurisaz, the Thorn Gate",
    category: "runes",
    shortText: "The threshold is guarded, but it can be passed...",
    fullReading:
      "Thurisaz is Thor's rune, the thorn, the giant — it marks a place of danger that is also a place of power. A challenge stands in your way, and it is not a small one. The rune does not promise ease. It promises that the force within you is equal to the force that faces you, if you choose to meet it directly rather than navigate around it. Every time you have sidestepped a confrontation — internal or external — it has grown. Thurisaz says: today is the day you turn and face it. Not with aggression, but with the quiet authority of someone who knows their own ground.",
    colors: ["#991b1b", "#dc2626", "#f97316"],
  },
  {
    id: "r17",
    title: "Fehu, the Flowing Cattle",
    category: "runes",
    shortText: "Wealth stirs and begins to move toward you...",
    fullReading:
      "Fehu is the first rune of the Elder Futhark, and it speaks of mobile wealth — cattle that move, resources that flow, abundance that circulates rather than hoards. This rune does not appear to announce a windfall. It appears to remind you of what you already have in motion: skills that are finally maturing, connections that are beginning to yield, efforts that are approaching their return. The old Norse understood that luck — hamingja — was not random. It was cultivated. You have been cultivating. The herd is beginning to walk in your direction.",
    colors: ["#d97706", "#fbbf24", "#86efac"],
  },
  {
    id: "r18",
    title: "Isa, the Still Ice",
    category: "runes",
    shortText: "Stillness is not stagnation — it is the pause before form...",
    fullReading:
      "Isa falls as a single vertical line: the rune of ice, of stillness, of the moment when everything appears to have stopped. This is not a punishment. This is the universe asking you to be quiet enough to hear something that cannot be heard over movement and noise. The frustration you feel with your current pace of progress is real, and the rune does not dismiss it. But Isa reminds you: ice is water in its most structured form. What appears to be freezing is actually consolidating. When the thaw comes — and it will — what moves will be clearer, stronger, and more purposeful than anything that moved before.",
    colors: ["#e2e8f0", "#bfdbfe", "#1e3a8a"],
  },
  {
    id: "r19",
    title: "Raidho, the Rider's Path",
    category: "runes",
    shortText: "The journey unfolds one right action at a time...",
    fullReading:
      "Raidho is the rune of the journey — not the destination, but the act of moving. It is the rune of good rhythm, of right timing, of the knowledge that arrival is not a place but a practice. You have been focused on where you are going and losing sight of how you are travelling. Raidho reorients you: the quality of your movement is the quality of your life. Are you moving from obligation or from genuine direction? Are you following a road someone else mapped, or the path that is revealing itself ahead of your feet? The rune asks you to feel the difference — and then to choose the second.",
    colors: ["#7c3aed", "#8b3ff0", "#d97706"],
  },
  {
    id: "r20",
    title: "Algiz, the Elk's Protection",
    category: "runes",
    shortText: "The guardian rune opens its arms above you...",
    fullReading:
      "Algiz is the rune of protection and connection to the divine — the image of an elk's antlers raised against the sky, or the open hand extended upward in sanctuary. This rune falls when the universe wishes to tell you: you are not alone in what you are facing. There are forces moving on your behalf that you cannot see — not because you lack perception, but because they work in the unseen registers of existence. Call on your allies, visible and invisible. The rune also asks: are you offering protection to others who need it? The act of sheltering someone in difficulty activates the rune's power in your own life.",
    colors: ["#064e3b", "#059669", "#d8b4fe"],
  },
  {
    id: "r21",
    title: "Othala, the Sacred Enclosure",
    category: "runes",
    shortText: "The inheritance of the ancestors grounds your becoming...",
    fullReading:
      "Othala is the rune of inheritance, of ancestral land, of what is received and what is passed forward. It marks the place where you belong — not necessarily where you were born, but the territory of your values, your people, the things you protect because they are worth protecting. This rune appears to ask you about your foundations: what do you stand on that is solid? What have you inherited — in temperament, in skill, in understanding — that is genuinely yours? And what are you building that will be worth handing forward? Othala is a rune of continuity. You are part of a lineage. The question is what you add to it.",
    colors: ["#78350f", "#b45309", "#4ade80"],
  },
  {
    id: "r22",
    title: "Berkano, the Birch's Blessing",
    category: "runes",
    shortText: "New life stirs in the gentlest of beginnings...",
    fullReading:
      "Berkano is the rune of the birch tree — the first tree to return to burned land, the mother rune, the symbol of new beginnings and careful tending. It falls in your reading as a gentle instruction: something new is being born, and it requires the same care you would give to any fragile, living thing. This is not the time for grand announcements. This is the time for quiet work, for creating conditions in which something can grow. Berkano asks you to be patient with what is just beginning — a project, a relationship, a version of yourself — and to resist the impulse to rush it into the world before it is ready.",
    colors: ["#065f46", "#34d399", "#f3e8ff"],
  },

  // ── CRYSTAL ──────────────────────────────────────────────────────────────────

  {
    id: "r4",
    title: "The Crystal Speaks",
    category: "crystal",
    shortText: "Amethyst light filters through the astral plane...",
    fullReading:
      "The amethyst pulses with a deep, slow rhythm — your rhythm, the one beneath your heartbeat. There is a relationship in your life right now that vibrates at a different frequency than your own. It is not wrong; it is a tuning fork. The dissonance you feel is not incompatibility — it is invitation. The crystal shows a bridge made of patience and honesty, two stones rarely used together. Lay them down, step by step, without looking at the far side. The path reveals itself only to feet that are already moving.",
    colors: ["#7c3aed", "#8b5cf6", "#a78bfa"],
  },
  {
    id: "r23",
    title: "Obsidian's Mirror",
    category: "crystal",
    shortText: "The volcanic glass shows what you have been afraid to see...",
    fullReading:
      "Obsidian is formed in the swift cooling of lava — fire and water collaborating on a surface so dark and so smooth it reflects with absolute fidelity. When obsidian appears in a reading, it is never to comfort. It is to clarify. There is something in your life you have been partially seeing, turning toward and then away, because the full sight of it is demanding. The crystal is not cruel. It is honest. The image it holds up is not a judgment — it is information. What you see in this dark mirror is not what you are. It is what you are working with. And working with the truth is always more efficient than working around it.",
    colors: ["#0f172a", "#334155", "#a78bfa"],
  },
  {
    id: "r24",
    title: "Rose Quartz Opens",
    category: "crystal",
    shortText: "The stone of unconditional love softens what has hardened...",
    fullReading:
      "Rose quartz does not work with drama. It works with persistence — the slow, steady frequency of genuine love pressing against whatever has calcified. Something in your heart has been in a protective posture for so long that it has forgotten it was a posture. The crystal sees this with perfect tenderness. It does not ask you to dissolve your protections — it asks you to examine whether they are still serving their original purpose, or whether they have become something you live inside without choosing. Rose quartz holds the frequency of the love that does not demand, does not perform, and does not expire. It is asking you if you can let a little of it in.",
    colors: ["#fda4af", "#fb7185", "#f3e8ff"],
  },
  {
    id: "r25",
    title: "Lapis Lazuli Speaks",
    category: "crystal",
    shortText: "The stone of pharaohs and night skies carries truth...",
    fullReading:
      "Lapis lazuli was ground into pigment for the ceilings of tombs and temples — the gold flecks of pyrite representing stars against the deep blue night of the stone. It was and is the stone of royalty, of truth, of the throat that has not yet spoken. The crystal appears in your reading because you carry a wisdom that has not yet been fully expressed. Not because you lack the words, but because you have not fully believed that what you know is worth saying. The pharaohs used lapis to line their vision of the afterlife. What would you inscribe on the ceiling of your life, if you believed people would look up?",
    colors: ["#1e3a8a", "#1d4ed8", "#fbbf24"],
  },
  {
    id: "r26",
    title: "Citrine's Bright Charge",
    category: "crystal",
    shortText: "The merchant's stone turns intention into motion...",
    fullReading:
      "Citrine does not absorb darkness — it dispels it. The pale yellow of this crystal carries the frequency of the sun internalized, the warmth of midday held in stone. It is the crystal of activated intention, of the point where wanting becomes doing. The reading it offers is brisk and direct: you have been circling the thing you need to do long enough. The preparation is complete. The planning has been thorough. The citrine doesn't ask you to feel ready — it asks you to begin regardless of readiness, because the act of beginning changes the feeling, not the other way around. The warmth you feel reaching toward this crystal is the warmth of your own next step.",
    colors: ["#fbbf24", "#f59e0b", "#fef3c7"],
  },
  {
    id: "r27",
    title: "Moonstone Remembers",
    category: "crystal",
    shortText: "The stone of cycles holds all that has turned before...",
    fullReading:
      "Moonstone carries the light of the moon in its layers — an optical phenomenon called adularescence, the shimmer of light moving through internal planes. This is what the crystal offers you: the shimmer of something real moving beneath the surface of what appears to be solid and unchanging. You are in a cycle that you have been in before — perhaps not in its exact form, but in its emotional shape. Moonstone asks you to remember: how did this cycle turn before? What did you learn in the turning? The stone does not promise that this cycle will be easier. It promises that your history with it has given you something that the past version of you did not have. Use it.",
    colors: ["#e2e8f0", "#cbd5e1", "#8b5cf6"],
  },
  {
    id: "r28",
    title: "Black Tourmaline Holds",
    category: "crystal",
    shortText: "The guardian stone draws the boundary that protects you...",
    fullReading:
      "Black tourmaline is the stone of the threshold — of the line between what enters and what does not. It forms in striated columns, as if the earth itself drew parallel lines saying: this far, no further. The crystal appears in your reading because a boundary is needed. Not out of hostility, not out of withdrawal — but out of the fundamental necessity of maintaining the integrity of your energy. Something has been draining from you through a gap that you have been reluctant to close. The tourmaline is not asking you to be less generous. It is asking you to be less permeable. You cannot pour from a vessel that is not sealed at the base.",
    colors: ["#0f172a", "#1e293b", "#6b21a8"],
  },
  {
    id: "r29",
    title: "Labradorite Flashes",
    category: "crystal",
    shortText: "Hidden fire lives within what appears grey and ordinary...",
    fullReading:
      "Labradorite appears, at first handling, to be a dull, grey stone. And then the angle shifts — and there it is: a spectrum of blue, gold, and green fire moving through its depths, unpredictable and extraordinary. This stone appears in your reading as a mirror of what you carry. You have been presenting yourself to the world in your most careful, most managed register — and you have been misread as a result. The people who know you only from your surface do not know what lives beneath it. The crystal is an invitation to shift the angle. To let the light hit you differently. To allow some of your own inner spectrum to become visible.",
    colors: ["#1e3a8a", "#059669", "#fbbf24"],
  },
  {
    id: "r30",
    title: "Selenite Opens the Ceiling",
    category: "crystal",
    shortText:
      "The stone of liquid light dissolves what blocks the way above...",
    fullReading:
      "Selenite is named for the moon goddess Selene, and it carries her quality: a luminous white clarity that appears almost to glow from within. It is a stone associated with higher guidance, with clearing the channel between what you are and what you might become. In this reading, selenite indicates that something has been interfering with your sense of direction — not through malice, but through accumulation. The noise of daily life, the weight of others' expectations, the sediment of old decisions still layered in your decision-making. The crystal asks you to create even a brief interval of genuine stillness. In that stillness, the ceiling opens. Something is waiting to come through.",
    colors: ["#f8fafc", "#e2e8f0", "#d8b4fe"],
  },

  // ── ASTRAL ───────────────────────────────────────────────────────────────────

  {
    id: "r2",
    title: "Shadows & Starlight",
    category: "astral",
    shortText: "The celestial tapestry weaves your fate...",
    fullReading:
      "Saturn and Venus dance at a rare angle tonight — a cosmic tension that mirrors something in your own life. Two forces you've seen as opposites are actually braided. The shadow you've been running from is not your enemy; it is the silhouette cast by a very bright star inside you. Stand still long enough and you'll see: the darkness is shaped exactly like your greatest gift. What frightens you most is precisely what the universe is asking you to carry.",
    colors: ["#1e3a8a", "#3b82f6", "#8b3ff0"],
  },
  {
    id: "r31",
    title: "Mars in the Crossing",
    category: "astral",
    shortText: "The red planet brings the courage the moment requires...",
    fullReading:
      "Mars does not arrive quietly. Its transit through your chart comes as an activation — sometimes welcome, sometimes alarming, always energising. The cosmic reading shows Mars entering a sector of your sky associated with action that has been deferred. The red planet is not asking for aggression; it is asking for directed force. There is something you have been approaching too carefully, too apologetically, too much from the side. Mars says: go directly. State what you need. Make the move you have been rehearsing. The energy available to you in this window is considerable, and it does not wait for perfect conditions before it moves on.",
    colors: ["#991b1b", "#dc2626", "#f97316"],
  },
  {
    id: "r32",
    title: "Venus in Her Own Light",
    category: "astral",
    shortText: "The morning star illuminates what you truly value...",
    fullReading:
      "Venus in her own sign or house is Venus at her most potent — the planet of value, beauty, connection, and worth operating without constraint. The celestial reading shows Venus casting her light on a question you have been asking in the wrong way. You have been asking: am I loveable? The correct question — the one Venus is placing before you — is: what do I love? The distinction matters enormously. The first question makes you passive, a thing to be evaluated. The second makes you active, a being with real aesthetic and emotional preferences. Begin from that second question. Everything about how you move through your relationships will shift.",
    colors: ["#e879f9", "#f0abfc", "#fda4af"],
  },
  {
    id: "r33",
    title: "Jupiter Opens the Gate",
    category: "astral",
    shortText: "The great benefic expands what you have been building...",
    fullReading:
      "Jupiter is the planet of expansion, of luck, of the principle that the universe is generous to those who participate in it fully. Its transit through your sky at this moment is not subtle: there is an amplification available to you of whatever you are already doing well. The caution — because Jupiter is not without caution — is this: the same magnification applies to whatever you are already doing poorly. The planet does not discriminate. It simply makes more. The celestial reading asks you to take honest stock before you welcome Jupiter's abundance: what habits, what relationships, what patterns do you want more of? And which would you prefer not to multiply?",
    colors: ["#d97706", "#fbbf24", "#7c3aed"],
  },
  {
    id: "r34",
    title: "Saturn's Slow Teaching",
    category: "astral",
    shortText: "The taskmaster planet offers a gift disguised as discipline...",
    fullReading:
      "Saturn is rarely anyone's favourite planet in transit, and yet the master astrologers of every tradition understand: the gifts Saturn leaves are the only ones that last. The ringed planet moves slowly and deliberately, and where it moves, it demands accountability, mastery, and the willingness to do the unglamorous work. It has been sitting in a significant part of your sky, and you have felt its weight. The celestial reading assures you: you are not being crushed. You are being condensed — made denser, more essential, more genuinely yourself. Coal under sufficient pressure becomes diamond. You are in the pressure. The diamond is coming.",
    colors: ["#374151", "#6b7280", "#fbbf24"],
  },
  {
    id: "r35",
    title: "The North Node Calls",
    category: "astral",
    shortText: "The point of destiny pulls you toward your truest future...",
    fullReading:
      "The North Node of the Moon is not a planet — it is a mathematical point, the place where the moon's path crosses the ecliptic in its ascent. In the chart and in the sky, it marks the direction of genuine growth: the thing you came here to learn, the experience your soul is reaching toward, even when your personality would rather retreat to the familiar South Node. The celestial reading shows your North Node lit by current transits — the universe is actively asking you to stretch toward what you have not yet mastered. It will feel uncomfortable. All genuine growth does. The discomfort is the signal, not the obstacle.",
    colors: ["#1e3a8a", "#6d28d9", "#d8b4fe"],
  },
  {
    id: "r36",
    title: "Mercury's Messenger",
    category: "astral",
    shortText:
      "The winged planet brings communications that change everything...",
    fullReading:
      "Mercury rules the movement of information, the quality of thought, the speed at which understanding travels between minds. In this celestial reading, Mercury is active and direct — no retrogrades, no shadows, just the planet at its most fleet and its most clear. A message is moving. It may already be in transit, or it may be waiting for you to send it. This is an excellent moment for the conversation you have been drafting in your head, for the letter that explains what you have not been able to explain in person, for the proposal that requires the right words at the right time. Mercury says: the words are ready. The moment is now.",
    colors: ["#fbbf24", "#f59e0b", "#7c3aed"],
  },
  {
    id: "r37",
    title: "The Void of Course",
    category: "astral",
    shortText: "Between transitions, the sky asks you to rest...",
    fullReading:
      "In astrological practice, the Moon is 'void of course' between leaving one sign and entering the next — a liminal interval when nothing begun under it will come easily to fruition. This reading draws from the same principle. You are between chapters. Not in a bad place — in a transitional place, which feels like a bad place to people who are used to moving. The celestial reading asks you to resist the urgency to begin something new immediately. The void has its own purpose: it is the held breath between phrases in a piece of music. The next note will land more surely for the pause. Let the sky change its mind. Then move.",
    colors: ["#0f172a", "#1e293b", "#8b5cf6"],
  },
  {
    id: "r38",
    title: "Solar Eclipse, New Sight",
    category: "astral",
    shortText:
      "The sun's face is hidden, and in the darkness, new eyes open...",
    fullReading:
      "A solar eclipse is the moon perfectly aligning with the sun, blocking the ordinary light and revealing the corona — the sun's atmosphere, normally invisible, blazing into view. Eclipses are among the most powerful moments in the celestial calendar, and their energy in this reading is unmistakable. Something is being revealed by its own temporary absence. What you have taken for granted — a relationship, a certainty, a version of yourself — is stepping back momentarily, and in that absence you are finally able to see the outline of what surrounds it. What is the corona of your life? What becomes visible when the bright centre is briefly blocked?",
    colors: ["#0f172a", "#fbbf24", "#dc2626"],
  },

  // ── SPIRIT ───────────────────────────────────────────────────────────────────

  {
    id: "r5",
    title: "Spirit of the Ancestors",
    category: "spirit",
    shortText: "Those who came before whisper through the flames...",
    fullReading:
      "Behind you stands a line of souls stretching back beyond memory. They did not all have easy lives — many carried wounds they never named and passed them forward, wrapped in silence. But tonight one ancestor steps forward from the rest. Not to add to your burdens, but to return something they held too long: a thread of fierce, unbroken joy. It was never lost. It was protected. It is yours now, sewn into the lining of your chest. Breathe deeply — you will feel it unfurl.",
    colors: ["#064e3b", "#059669", "#34d399"],
  },
  {
    id: "r39",
    title: "The Guide at the Crossroads",
    category: "spirit",
    shortText: "A spirit keeper marks the place where paths divide...",
    fullReading:
      "In many traditions, the crossroads is a sacred place — the meeting point of the mundane and the divine, the location where the spirit world is most permeable. Hecate, Eshu, Baron Samedi: the guardians of crossroads are found in every culture's mythology, and they all share a characteristic: they do not make your choice for you. They illuminate the options. A guide stands at your crossroads now, and the message is simple: both paths are real, and both have cost. The question is not which path is better in the abstract. The question is which path is yours. The guide sees the answer clearly. Look at where your feet already want to go.",
    colors: ["#0f172a", "#7c3aed", "#fbbf24"],
  },
  {
    id: "r40",
    title: "The Animal Messenger",
    category: "spirit",
    shortText: "The creature that appears carries a word for you...",
    fullReading:
      "Spirit traditions across the world recognise the animal messenger: the creature that arrives with unusual timing, that holds your gaze, that appears in a dream with a clarity that ordinary dream-creatures do not have. The reading asks you to consider: what animal has been appearing in your life, your thoughts, your peripheral vision? Not the animal you admire or aspire toward — the one that has actually been showing up. Each creature carries a specific medicine. The hawk brings perspective and the long view. The fox brings adaptability and quiet cunning. The deer brings gentleness that conceals remarkable endurance. What has come to you? It is not an accident.",
    colors: ["#78350f", "#d97706", "#064e3b"],
  },
  {
    id: "r41",
    title: "The Ancestors' Unfinished Work",
    category: "spirit",
    shortText: "What was left incomplete passes into your hands...",
    fullReading:
      "Ancestral healing traditions understand that patterns — gifts and wounds alike — move through lineages across generations. What your great-grandmother could not complete, your grandmother carried forward. What your grandmother could not resolve, your parent carried. And what your parent could not finish has arrived, in its newest form, at your door. This is not punishment. This is the lineage choosing its most capable living member for the work. The spirit reading sees an old pattern ready to be completed — not by reliving it, but by understanding it clearly enough to end it. You have the insight your ancestors did not. This is what you were given it for.",
    colors: ["#78350f", "#d97706", "#d8b4fe"],
  },
  {
    id: "r42",
    title: "The Child Within the Reading",
    category: "spirit",
    shortText: "The youngest part of you holds the oldest wisdom...",
    fullReading:
      "Before you learned to perform, before you understood that some feelings were acceptable and others were not, before you discovered the cost of being fully yourself in certain rooms — you were something uncomplicated and complete. That self did not disappear. It went underground. The spirit reading brings it forward now, not to regress you, but to recover something it has been keeping in safekeeping: a quality of aliveness, of genuine curiosity, of the capacity to find a single afternoon absorbing and sufficient. The youngest part of you is not damaged. It is waiting. The path back to it is shorter than you think, and the reunion is worth whatever it costs in dignity.",
    colors: ["#fda4af", "#a78bfa", "#86efac"],
  },
  {
    id: "r43",
    title: "The Departed Companion",
    category: "spirit",
    shortText: "A presence that has crossed the veil has not entirely left...",
    fullReading:
      "The spirit traditions do not agree on much, but they agree on this: the relationship does not fully end at death. What changes is the medium of communication — from voice and touch to dream, coincidence, the sudden clear memory that arrives without obvious cause. Someone who has passed and who matters to you is making themselves known in this reading. Not to unsettle, not with urgency — but with the quiet, insistent warmth of unfinished love. If there is something you need to say to them, say it. If there is something you need from them, ask. The conversation is not closed. The channel is thinner, but it is there.",
    colors: ["#e2e8f0", "#8b5cf6", "#059669"],
  },
  {
    id: "r44",
    title: "The Sacred Contract",
    category: "spirit",
    shortText: "Before birth, certain agreements were made...",
    fullReading:
      "Some spiritual traditions hold that before incarnation, souls negotiate the broad parameters of their lives: the families, the challenges, the gifts, the people they will meet and what those meetings will be for. You may or may not hold this belief — the reading asks you to hold it lightly as a lens, not a doctrine. Look at the central challenge of your life. Now ask: what if this were chosen? What if the difficulty you keep meeting were the precise difficulty you came here to become adequate to? Not as punishment. Not as random bad luck. As purpose, in the most demanding and most honourable sense of that word. What changes in how you relate to it?",
    colors: ["#7c3aed", "#a78bfa", "#fbbf24"],
  },
  {
    id: "r45",
    title: "The Elemental Conversation",
    category: "spirit",
    shortText: "Fire, water, earth, and air each have a word for you...",
    fullReading:
      "The four elements of classical and shamanic tradition are not merely physical substances — they are intelligences, qualities of being that exist inside you as much as outside. Fire: the part of you that transforms and illuminates and sometimes burns what it was meant to refine. Water: your emotional wisdom, the knowing that flows around obstacles and finds the lowest level. Earth: your capacity for solidity, patience, and the grounded reality of bodies and materials. Air: your mind, your communication, the quick movement of thought between perception and expression. The spirit reading shows one element out of balance. Which of these do you never speak of? That one is asking to be heard.",
    colors: ["#dc2626", "#1e40af", "#78350f", "#1e3a8a"],
  },
  {
    id: "r46",
    title: "The Dreamtime Opens",
    category: "spirit",
    shortText: "In the oldest tradition of all, the dreaming is the real...",
    fullReading:
      "In the Aboriginal Australian understanding of the world, the Dreamtime is not the past — it is the foundational reality that the present sits upon, the original pattern that all subsequent patterns echo. The spirit reading draws from this tradition to say: there is a pattern active in your life right now that is older than this situation. You have been trying to understand your present circumstances as if they were new, when actually they are the most recent expression of something that has been running in your life for a long time. The invitation is to find the original dreaming — the first time this pattern appeared — and to understand it there. That is where the change is possible.",
    colors: ["#78350f", "#d97706", "#1e3a8a"],
  },
  {
    id: "r47",
    title: "The Shamanic Descent",
    category: "spirit",
    shortText: "The healer goes below to retrieve what was lost...",
    fullReading:
      "In shamanic traditions worldwide, the practitioner descends into the lower world not to be consumed by it but to recover something essential that has been separated from the one who needs healing — a part of the soul fragmented by trauma, shock, or loss. The spirit reading sees a piece of yourself that has been absent. It left during a difficult period, in the way that a child withdraws to somewhere safe when the environment becomes too much. The shamanic reading does not ask you to relive what caused the loss. It asks you to simply call that part of yourself back. To say, aloud or in writing or in the silence of genuine intention: you are safe now. You can come home.",
    colors: ["#78350f", "#92400e", "#7c3aed"],
  },
  {
    id: "r48",
    title: "The Medicine Bundle",
    category: "spirit",
    shortText: "What you carry holds more power than you have used...",
    fullReading:
      "In many Indigenous traditions, the medicine bundle is a collection of sacred objects, each carrying a specific spiritual significance and power. Together, they form a portable altar — a concentrated gathering of relationship, memory, and intention. The spirit reading asks you to consider your own medicine bundle: not a physical object, but the collection of qualities, experiences, relationships, and understandings that constitute your spiritual resource. You carry more than you typically reach for. In moments of difficulty, you default to the most familiar tool in the bundle — usually the one acquired earliest, the most worn from use. The reading invites you to reach deeper. There are medicines in your bundle that have never been opened.",
    colors: ["#78350f", "#d97706", "#064e3b"],
  },
];

export function getReadingByColor(colorIndex: number): Reading {
  return readings[colorIndex % readings.length];
}

export function getRandomReading(): Reading {
  return readings[Math.floor(Math.random() * readings.length)];
}

export function getReadingsByCategory(
  category: Reading["category"],
): Reading[] {
  return readings.filter((r) => r.category === category);
}
