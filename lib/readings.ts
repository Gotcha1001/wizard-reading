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
  {
    id: "r49",
    title: "The Magician's Table",
    category: "tarot",
    shortText: "All four tools lie before you, waiting to be used...",
    fullReading:
      "The Magician stands at his table with the wand, the cup, the sword, and the pentacle spread before him. He does not need to acquire more tools. He needs to recognise what he already holds. This card arrives to tell you something you may have been resisting: you are not waiting for the right moment, the right circumstances, or the right resources. They are already in front of you. The Magician's gesture — one hand raised to the sky, one pointing to the earth — is not a pose. It is a circuit. You are the conductor between potential and reality. The only question the card asks is whether you are willing to make the connection.",
    colors: ["#7c3aed", "#fbbf24", "#dc2626"],
  },
  {
    id: "r50",
    title: "The Hermit's Lantern",
    category: "tarot",
    shortText:
      "Solitude is not loneliness — it is a different kind of company...",
    fullReading:
      "The Hermit does not walk away from the world in defeat. He walks away in order to see it clearly. The lantern he carries holds a six-pointed star — not enough light to illuminate the whole mountain, but exactly enough for the next step. This card is about the quality of your solitude: are you alone in a way that is feeding something, or in a way that is merely avoiding something? The Hermit's gift is the discovery that the answers you have been seeking from others live, in their most accurate form, inside you. The mountain is cold. The path is narrow. The lantern is precisely sufficient. Step forward.",
    colors: ["#374151", "#9ca3af", "#fbbf24"],
  },
  {
    id: "r51",
    title: "The Wheel Turns",
    category: "tarot",
    shortText: "Fortune's great mechanism completes another revolution...",
    fullReading:
      "The Wheel of Fortune does not ask whether you deserve to rise or fall — it simply turns. The sphinx at the top, the serpent descending, the jackal ascending: the wheel does not play favourites. What this card offers is not comfort about what is happening but clarity about the nature of all happening. Circumstances change. The conditions that feel permanent are the most temporary of all. If you are in a low place on the wheel, take genuine comfort: the mechanism is still moving. If you are in a high place, do not mistake the view from the top for the only view. The most useful response to the Wheel is to learn to remain yourself regardless of where on it you currently stand.",
    colors: ["#b45309", "#fbbf24", "#7c3aed"],
  },
  {
    id: "r52",
    title: "Justice Weighs",
    category: "tarot",
    shortText: "The scales do not lie, and neither should you...",
    fullReading:
      "Justice is seated, robed, and entirely still. The sword in one hand is not a threat — it is precision. The scales in the other are not indifferent — they are honest. This card does not arrive to punish. It arrives to align. There is a situation in your life in which you know, at a level below justification and narrative, what the honest assessment is. You may have been avoiding that assessment because the truth requires something of you — an acknowledgment, a change, an end, a beginning. Justice does not require that you suffer. It requires only that you be accurate. Stop arguing with what you know. The scales are already settled.",
    colors: ["#374151", "#fbbf24", "#1e3a8a"],
  },
  {
    id: "r53",
    title: "The Hanged One Waits",
    category: "tarot",
    shortText: "Suspension is its own form of motion...",
    fullReading:
      "The Hanged One is not suffering. Look at the face: serene, illuminated, entirely at peace with its inversion. This figure has chosen to stop — to hang between certainty and action, to see the world from a perspective no upright person can access. The card arrives when the most powerful move available to you is to make no move at all. Not from fear, not from paralysis — but from the deliberate decision to let circumstances reveal themselves before you act. The halo around the Hanged One's head is not a consolation. It is earned. The one who can bear not-knowing long enough to understand deeply is the one who acts most effectively when the time comes.",
    colors: ["#1e3a8a", "#a78bfa", "#fbbf24"],
  },
  {
    id: "r54",
    title: "Death Walks Gently",
    category: "tarot",
    shortText: "The pale rider clears the path for what comes next...",
    fullReading:
      "The Death card almost never speaks of physical death. It speaks of the thing in your life that has finished — that is, in fact, already over, even if you have not yet released it. The white horse moves unhurriedly. The figures in its path are not random: the child, the bishop, the king — none are immune. The flag it carries is black with a white rose: death and new life, inseparable. What the card is asking is not whether this ending is coming, but whether you will allow it to complete itself. The field on the other side of the river, visible in the card's distant light, is the life that becomes possible after you stop maintaining what no longer lives.",
    colors: ["#0f172a", "#e2e8f0", "#b45309"],
  },
  {
    id: "r55",
    title: "Temperance Pours",
    category: "tarot",
    shortText: "Between the extremes, the right mixture becomes art...",
    fullReading:
      "Temperance is one of the most underrated cards in the Major Arcana. The angel pours water between two cups — one silver, one gold — and the liquid flows upward, against gravity, because the card operates in the register of spiritual law rather than physical law. What Temperance brings you is not moderation in the sense of reduction. It brings you the precise calibration of opposing forces into something new. You have been treating elements of your life as either/or choices when they are actually ingredients. The angel is not making a compromise. The angel is making an alchemical mixture. The path between the two pillars in the background leads somewhere worth going.",
    colors: ["#059669", "#60a5fa", "#fbbf24"],
  },
  {
    id: "r56",
    title: "The Devil's Chain",
    category: "tarot",
    shortText: "Look closely — the chains are loose enough to lift off...",
    fullReading:
      "The Devil card depicts two figures chained to the pillar on which the devil perches. Look at the chains around their necks: they are loose. The figures could remove them at any moment. They have not because they have forgotten they are wearing them, or because the chains have come to feel like identity. The Devil in this reading is not an external force. It is the belief system, the habit, the story you tell yourself that has calcified into something that feels like fact. The card does not shame you for being chained. It points out, with great clarity, that the lock is on the outside, the key is in your hand, and the only reason you are still standing there is because some part of you has not yet decided to leave.",
    colors: ["#7f1d1d", "#dc2626", "#0f172a"],
  },
  {
    id: "r57",
    title: "The Sun Rises Fully",
    category: "tarot",
    shortText: "Nothing hides in this light, and nothing needs to...",
    fullReading:
      "The Sun card is the simplest and most joyful card in the Major Arcana, and it is also the most honest. The child on the white horse is naked — not vulnerable, but without pretense. The sunflowers behind the wall turn toward the light without strategy or self-consciousness. The sun itself shines with a face that is both powerful and playful. This card arrives to tell you that a period of clarity is available to you — not the complicated clarity of hard-won wisdom, but the straightforward, uncomplicated clarity of a moment that simply is what it is. Something in your life wants to be simple. The Sun card's invitation is to let it be.",
    colors: ["#fbbf24", "#f59e0b", "#86efac"],
  },
  {
    id: "r58",
    title: "The Lovers' Choice",
    category: "tarot",
    shortText: "Above the garden, the angel witnesses what cannot be undone...",
    fullReading:
      "The Lovers card is not primarily about romantic love. It is about the moment of choosing — the irreversible commitment to a path that defines the kind of person you are becoming. The angel Raphael above the couple does not bless one choice over another. It bears witness to the moment of choosing itself. The card arrives when you are standing at a genuine values decision: not between right and wrong, but between two legitimate visions of your life that cannot both be fully realised. The card does not tell you which to choose. It tells you that the choosing itself is significant, that it is yours to make, and that making it clearly and consciously is better than drifting into one path while nominally remaining open to both.",
    colors: ["#dc2626", "#fbbf24", "#8b3ff0"],
  },

  // ── RUNES (9 new) ────────────────────────────────────────────────────────────

  {
    id: "r59",
    title: "Gebo, the Gift Exchanged",
    category: "runes",
    shortText: "Every true gift creates a bond that must be honoured...",
    fullReading:
      "Gebo is shaped like an X — two lines crossing, the structure of exchange. In the Norse understanding, a gift was never simply a transfer of goods. It was the creation of a relationship, a bond of obligation and love between giver and receiver. The rune falls in your reading to ask about the exchanges that currently define your life. What have you given without acknowledgment of what you gave? What have you received without acknowledging what it cost the giver? Gebo is not a rune of debt or guilt. It is a rune of honest reckoning: the recognition that we are always in relationship, always in exchange, and that naming those relationships clearly is a form of respect.",
    colors: ["#059669", "#fbbf24", "#8b3ff0"],
  },
  {
    id: "r60",
    title: "Wunjo, the Banner of Joy",
    category: "runes",
    shortText: "The rune of belonging rises like a flag over the clan...",
    fullReading:
      "Wunjo is a rune of joy — not the sharp, surprising joy of a windfall, but the deep, sustained joy of a person who has found where they belong. It is the joy of harmony within a group, of a life well-ordered toward something that matters, of the knowledge that you are in the right place doing the right thing. This rune falls to ask a gentle but serious question: where do you feel that belonging right now? If the answer comes quickly and clearly, the rune is a confirmation. If you hesitate, if the question opens a space of longing — the rune is pointing to the thing your life most needs. Joy of the Wunjo variety is not found. It is built, slowly and deliberately, out of the right materials.",
    colors: ["#059669", "#fbbf24", "#f97316"],
  },
  {
    id: "r61",
    title: "Jera, the Year's Harvest",
    category: "runes",
    shortText: "The cycle completes — what was sown is ready...",
    fullReading:
      "Jera is the rune of the year, of the agricultural cycle, of the understanding that there is a right time for every stage and that rushing any of them diminishes the whole. It depicts two opposing J shapes, interlocked — summer and winter, planting and harvest, action and rest. The rune arrives to tell you that something you have been working toward is approaching its harvest point. This does not mean the work is over. Harvest has its own labour. But the shape of the reward is becoming visible, and the rune asks you to recognise it for what it is: the legitimate return on genuine effort, the natural completion of a genuine cycle. Receive it without deflection.",
    colors: ["#d97706", "#fbbf24", "#065f46"],
  },
  {
    id: "r62",
    title: "Eihwaz, the Yew's Persistence",
    category: "runes",
    shortText: "Death and life share the same root in the oldest tree...",
    fullReading:
      "Eihwaz is the rune of the yew tree, the most ancient of European trees, which can live for thousands of years and which is poisonous and sacred in equal measure. It stands at the axis of the runic system — neither entirely of the living world nor of the dead, but the axis through which both are connected. When this rune falls, it speaks of endurance of the most fundamental kind: the capacity to pass through transformation without losing the essential self. You are in the middle of something significant, and the yew's medicine is not speed or strategy. It is the deep, slow endurance of the tree whose roots drink from both worlds. You will come through. What comes through will be genuinely you.",
    colors: ["#064e3b", "#374151", "#d97706"],
  },
  {
    id: "r63",
    title: "Perthro, the Dice Cup",
    category: "runes",
    shortText: "Fate and chance are not enemies — they are collaborators...",
    fullReading:
      "Perthro is the most mysterious rune in the Elder Futhark — its meaning debated, its shape the image of an overturned cup or the mouth of a well. It is associated with fate, with the hidden, with the mysteries that the Norns weave and that no human fully controls. When it falls, it is not an invitation to helplessness. It is an invitation to the specific kind of engagement with uncertainty that the Norse called the wyrd — the personal fate that is partly written and partly made. You are in a situation where control is limited. The rune asks: can you engage fully, with genuine skill and effort, while releasing the outcome? That combination — total engagement, released attachment — is the most powerful move available.",
    colors: ["#7c3aed", "#0f172a", "#d97706"],
  },
  {
    id: "r64",
    title: "Laguz, the Lake's Depth",
    category: "runes",
    shortText:
      "The water rune asks you to flow where you have been standing still...",
    fullReading:
      "Laguz is water — not the violent water of storms, but the deep, patient water of a lake that knows exactly how low it sits and finds the path around every obstacle with perfect, unhurried ease. The rune is associated with intuition, with the unconscious, with the knowledge that does not arrive in words but in feelings, in dreams, in the body's quiet responses before the mind has caught up. It falls to ask you about your own water: where have you been resisting the flow, trying to hold yourself in a shape that circumstances keep eroding? The lake does not maintain its outline by force. It takes the shape of the land. And in doing so, it goes everywhere.",
    colors: ["#1e3a8a", "#60a5fa", "#e2e8f0"],
  },
  {
    id: "r65",
    title: "Mannaz, the Human Rune",
    category: "runes",
    shortText: "You are not alone in this — that is not weakness...",
    fullReading:
      "Mannaz is the rune of humanity — of the self in relation to others, of the understanding that a person is not a closed system but a node in a web of relationship and mutual influence. It is the rune that reminds the runemaster that wisdom is not always solitary: sometimes the most important act is to ask, to listen, to allow another person's perspective to genuinely alter your own. The rune falls in your reading when you have been trying to solve something alone that would yield more quickly to collaboration. Not because you lack the capacity — you do not — but because the thing itself has a social dimension that solitary effort cannot address. Who in your life sees this situation differently? Ask them.",
    colors: ["#1e3a8a", "#7c3aed", "#d97706"],
  },
  {
    id: "r66",
    title: "Dagaz, the Day's Breaking",
    category: "runes",
    shortText: "The final threshold is also the first light...",
    fullReading:
      "Dagaz is the rune of the dawn, of the paradox that stands at the boundary between darkness and light — the moment that is neither one nor the other, but the pure transition between them. The rune is shaped like an hourglass on its side, two triangles pointing toward each other and touching at a single point. That point is now. You are standing at a genuine threshold — a before and after that you will be able to identify for the rest of your life. The rune does not tell you what lies on the other side of the dawn. It tells you that the breaking of it is the right time to move. The darkness is ending. The light is not a guarantee. But it is real, and it is arriving.",
    colors: ["#fbbf24", "#1e3a8a", "#f3e8ff"],
  },
  {
    id: "r67",
    title: "Ingwaz, the Seed's Promise",
    category: "runes",
    shortText: "What is enclosed is not trapped — it is becoming...",
    fullReading:
      "Ingwaz is the rune of the fertility god Ing — of the enclosed, protected seed that holds enormous potential in dormancy. It is shaped like a diamond, a closed form, complete in itself. When it falls, it speaks of a creative or generative power that has been building internally, not yet visible to the outside world, not yet ready to emerge. The medicine of this rune is patience with your own development. Whatever you are working on — a project, a skill, a healing, a becoming — is not stalled. It is germinating. The seed does not crack open before it is ready, and the force that eventually splits it is not violence but readiness. Trust the timing of what is forming in you.",
    colors: ["#065f46", "#fbbf24", "#7c3aed"],
  },

  // ── CRYSTAL (9 new) ──────────────────────────────────────────────────────────

  {
    id: "r68",
    title: "Carnelian Burns Steady",
    category: "crystal",
    shortText: "The fire-stone warms what has gone cold with doubt...",
    fullReading:
      "Carnelian carries the colour of embers — the orange-red of fire that has found its sustainable form, no longer the wild blaze but the steady heat that cooks, that warms, that sustains. It is the stone of courage without recklessness, of confidence that is grounded in genuine self-knowledge rather than bravado. The crystal appears in your reading because your relationship with your own competence has recently become uncertain. Not because your competence has diminished — it has not — but because a particular challenge has highlighted the edge of your experience, and you have been interpreting that edge as evidence of insufficiency. Carnelian holds a different interpretation: the edge is exactly where growth happens. The discomfort is the signal, not the verdict.",
    colors: ["#dc2626", "#f97316", "#fbbf24"],
  },
  {
    id: "r69",
    title: "Fluorite Clears the Static",
    category: "crystal",
    shortText:
      "Through the purple-green haze, a single thought crystallises...",
    fullReading:
      "Fluorite grows in cubic structures — the geometry of organisation, of order imposed on chaos at the molecular level. The crystal's signature bands of purple, green, and clear layers are the visual record of different conditions during its formation, each phase preserved in the stone. It is the crystal of mental clarity: of the capacity to hold multiple complex considerations and arrange them into something coherent. The reading it offers is directed at the specific kind of overwhelm that comes from too many variables held without structure. Fluorite does not simplify your situation. It asks you to organise it. Take one question and complete your thinking about it before moving to the next. The clarity you need is available. It requires method.",
    colors: ["#7c3aed", "#059669", "#e2e8f0"],
  },
  {
    id: "r70",
    title: "Tiger's Eye Sees Through",
    category: "crystal",
    shortText: "The banded stone holds both the sun and the shadow...",
    fullReading:
      "Tiger's eye forms through the replacement of asbestos fibres by quartz — a literal transformation of one mineral into another, preserving the structure while changing the substance entirely. The golden-brown bands that give it its characteristic shimmer are the record of that transformation. This stone appears in your reading as a witness to your own capacity to transform under pressure without losing structural integrity. The tiger does not change its essential nature when it adapts to different terrain. Neither do you. The crystal also carries the tiger's quality of sight: the ability to see clearly in conditions that obscure things from others. Trust what you are seeing right now, even if what you see is uncomfortable.",
    colors: ["#d97706", "#78350f", "#fbbf24"],
  },
  {
    id: "r71",
    title: "Aquamarine Speaks from Depth",
    category: "crystal",
    shortText: "The sea-stone carries what the ocean knows...",
    fullReading:
      "Aquamarine is the colour of shallow tropical water — that particular blue-green that is neither fully one thing nor the other, that suggests both clarity and depth simultaneously. It was carried by sailors as a talisman, associated with safe passage across uncertain waters. The crystal appears in your reading at a moment of transition, specifically a transition that involves moving from one state of being to another across an uncertain middle space. The sea between known shores. Aquamarine does not promise still waters. It promises something more useful: that the qualities of calm, of clear perception, of trust in your own navigation are present in you and can be activated deliberately. The middle passage is real. You are equipped for it.",
    colors: ["#0891b2", "#60a5fa", "#e2e8f0"],
  },
  {
    id: "r72",
    title: "Garnet Holds the Deep Red",
    category: "crystal",
    shortText: "Passion that has deepened past heat becomes devotion...",
    fullReading:
      "Garnet is one of the oldest used gemstones in human history, found in jewellery across millennia and cultures. Its deep red is not the red of fire but the red of blood — the colour of life itself, of what runs deepest and cannot be faked. The crystal appears in your reading to speak of commitment: the particular kind of commitment that is no longer fuelled by excitement but by something much more durable. You have arrived, with something or someone in your life, at the place past the initial energy. What you feel now is quieter but truer. Garnet says: do not mistake the depth of this for a diminishment. The fire has not gone out. It has gone in.",
    colors: ["#7f1d1d", "#dc2626", "#d97706"],
  },
  {
    id: "r73",
    title: "Pyrite Holds Its Ground",
    category: "crystal",
    shortText: "Fool's gold is not foolish — it simply knows what it is...",
    fullReading:
      "Pyrite — iron sulphide, fool's gold — was long dismissed because it was not what people hoped it was. And yet it is remarkable in its own right: cubic crystals of extraordinary geometric precision, surfaces that mirror with a metallic lustre, a hardness that outlasts the confusion of those who once thought it something else. The crystal appears in your reading when you have been measuring yourself against a standard that was never yours, finding yourself lacking in the comparison, and failing to recognise what you actually are. You are not a lesser version of something else. You are precisely what you are, and there are qualities in you — reliability, structural integrity, a certain brilliant forthrightness — that are genuinely valuable on their own terms.",
    colors: ["#d97706", "#fbbf24", "#374151"],
  },
  {
    id: "r74",
    title: "Sodalite Deepens the Blue",
    category: "crystal",
    shortText: "The stone of truth holds the blue hour of understanding...",
    fullReading:
      "Sodalite is a deep, unflashy blue — the colour of the sky at the hour before full dark, when the light is still present but has lost its dazzle. It is the stone associated with truth-telling, with the honest assessment of situations that benefit from calm rather than heat. Unlike lapis lazuli, which speaks of the truth you carry outward, sodalite speaks of the truth you carry inward: the honest self-understanding that is the precondition of all genuine change. The crystal appears in your reading to offer you a quiet hour of actual honesty about a situation you have been approaching with some degree of management. Not self-criticism. Not shame. Simply accurate seeing — the blue-hour clarity that comes when the dazzle fades and the real forms become visible.",
    colors: ["#1e3a8a", "#3b82f6", "#e2e8f0"],
  },
  {
    id: "r75",
    title: "Rhodonite Binds the Wound",
    category: "crystal",
    shortText: "The pink and black stone heals what it cannot erase...",
    fullReading:
      "Rhodonite is distinctive for its combination of pink and black — manganese silicate shot through with black manganese oxide. The pink of love and compassion; the black of the wound that has been integrated rather than concealed. It is called the stone of compassion precisely because its appearance is honest about the coexistence of tenderness and damage. The crystal appears in your reading to work with a wound that has not fully healed — not because it was neglected, but because some wounds take longer than expected, and the expectation was unrealistic. Rhodonite does not promise the wound will disappear. It offers the more useful promise: that the wound and the tenderness can exist together, that one does not cancel the other, and that a heart containing both is not diminished. It is seasoned.",
    colors: ["#db2777", "#0f172a", "#fda4af"],
  },
  {
    id: "r76",
    title: "Hematite Roots Downward",
    category: "crystal",
    shortText: "Iron in the earth pulls the scattered self back together...",
    fullReading:
      "Hematite is iron oxide — the same compound that gives blood its colour and rusty metal its patina. In crystal form it is a dense, grounded, metallic grey-silver, heavy in the hand and cool against the skin. It is among the most grounding of stones: when the energy of a situation has become diffuse, scattered, living too much in the head and not enough in the body, hematite pulls it back down. The crystal appears in your reading during a period of genuine overextension — too many concerns held simultaneously, the centre of gravity rising toward abstraction. The remedy hematite offers is physical: feet on the ground, breath in the body, the specific gravity of your actual, present life. Not everything can be solved from the altitude of thinking. Come down.",
    colors: ["#374151", "#6b7280", "#e2e8f0"],
  },

  // ── ASTRAL (9 new) ───────────────────────────────────────────────────────────

  {
    id: "r77",
    title: "Chiron at the Wound",
    category: "astral",
    shortText: "The wounded healer places a hand on the oldest ache...",
    fullReading:
      "Chiron is neither planet nor asteroid but something in between — a centaur body orbiting between Saturn and Uranus, bridging the known and the unknown in the solar system's architecture. In the chart it marks the wound that does not fully heal and becomes, through that very refusal, the source of your greatest capacity to understand and assist others. The celestial reading shows Chiron making itself known in your sky. This is not punishment. The wound Chiron marks is ancient and real, and it is also the place where you have accumulated an expertise in pain — in navigating it, surviving it, finding meaning in it — that constitutes a genuine gift. The centaur asks: what do you know about endurance that others in your life are currently needing to learn?",
    colors: ["#7c3aed", "#dc2626", "#fbbf24"],
  },
  {
    id: "r78",
    title: "The Ascendant Rises",
    category: "astral",
    shortText:
      "The face you show the world is also the door the world enters by...",
    fullReading:
      "The Ascendant — the degree of the zodiac rising on the eastern horizon at the moment of your birth — is the mask, the first impression, the style through which your essential self interfaces with the world. But it is more than a mask. Over time, the Ascendant is inhabited so completely that it becomes genuinely you, not a performance but a personality. The celestial reading focuses here because something in how you have been presenting yourself to your circumstances is ready to shift — not a falsehood to be abandoned but an earlier version of yourself that has been outgrown. The face you are developing is not less you. It is more you. The horizon is always moving. So is the self that rises to meet it.",
    colors: ["#fbbf24", "#7c3aed", "#60a5fa"],
  },
  {
    id: "r79",
    title: "Pluto's Long Slow Burning",
    category: "astral",
    shortText:
      "The outermost planet turns everything it touches to ash and diamond...",
    fullReading:
      "Pluto moves so slowly that a single transit through a house of the birth chart can span decades. Its action is not swift. It is thorough. Where Pluto moves, it dismantles what is false and composted into something new — the mythology of Persephone and the underworld captures it precisely. What Pluto takes underground does not simply disappear. It transforms. The celestial reading shows Pluto active in a sector of your life associated with identity or relationship — and you have been feeling the pressure of that transformation as a kind of grief for what is no longer there. That grief is appropriate and real. And beneath it, something is emerging that would not have been possible without the descent. Wait. What is coming up is genuinely new.",
    colors: ["#0f172a", "#7c3aed", "#dc2626"],
  },
  {
    id: "r80",
    title: "Uranus Strikes Sideways",
    category: "astral",
    shortText: "The planet of revolution does not knock — it simply arrives...",
    fullReading:
      "Uranus moves in a way that confounds prediction: even experienced astrologers know that its transits bring the unexpected, the unprecedented, the reversal that could not have been seen from any prior vantage point. It is the planet of revolution, of genius, of the break with convention that turns out to have been necessary. The celestial reading shows Uranus active in your sky, and the message is not alarming. What it says is this: something that was fixed in your life — a plan, a relationship, an identity, a trajectory — has just become, or is about to become, unfixed. Not because you failed, but because Uranus is not concerned with your plans. It is concerned with your growth. The interruption is the gift. The question is how you meet it.",
    colors: ["#60a5fa", "#e2e8f0", "#7c3aed"],
  },
  {
    id: "r81",
    title: "Neptune Dissolves the Shore",
    category: "astral",
    shortText: "The god of the deep sea unmakes the lines you drew...",
    fullReading:
      "Neptune is the planet of dissolution — of the slow, pervasive erosion of boundaries, of the blurring of self and other, of the transcendence that can be mystical inspiration or confusion depending on how you meet it. Its transits do not announce themselves clearly. They seep. Under a Neptune transit, certainties become porous, identity becomes unclear, and the things you thought were solid reveal themselves as having been more permeable than you knew. The celestial reading brings this not as a warning but as an orientation: do not try to draw the shore back while Neptune is active. This is a time for the inner life — for art, for spiritual practice, for the imagination — and a time to hold your external structures loosely while the tide is high.",
    colors: ["#1e3a8a", "#6d28d9", "#60a5fa"],
  },
  {
    id: "r82",
    title: "The South Node Releases",
    category: "astral",
    shortText: "The past is fertile ground, not a home to stay in...",
    fullReading:
      "The South Node of the Moon is the complement to the North Node — the place of origin, the comfort zone, the deeply-grooved path that the soul can walk without effort because it has walked it so many times before. It is not a bad place. It is a familiar place. The celestial reading asks you to notice where in your life you are defaulting to the South Node's comfort: the pattern you return to when things get hard, the identity you revert to when challenged, the strategy that has worked before and is therefore reaching for it again even when the circumstances are genuinely new. The South Node is rich with competence. The invitation is to bring that competence forward into new territory, rather than retreating into the territory where it was first developed.",
    colors: ["#78350f", "#d97706", "#1e3a8a"],
  },
  {
    id: "r83",
    title: "The Lunar Return",
    category: "astral",
    shortText: "Once a month, the moon comes home and asks what has changed...",
    fullReading:
      "Every month the moon returns to the exact degree it occupied at the moment of your birth — a lunar return, a monthly reset, a gentle celestial check-in. The reading draws on this cycle to mark a moment of assessment: where are you, a month on from where you were? Not in external circumstances — those are obvious — but in the subtler registers of emotional weather, of what matters most, of what you have been learning without quite noticing you were learning it. The lunar return is not a dramatic event. It is a conversation. The moon is asking: in the time since we last stood here together, what has shifted in you? Answer honestly. The moon is a good listener.",
    colors: ["#e2e8f0", "#1e3a8a", "#8b3ff0"],
  },
  {
    id: "r84",
    title: "The Midheaven's Call",
    category: "astral",
    shortText: "The highest point in the sky at birth marks where you reach...",
    fullReading:
      "The Midheaven — the highest point in the sky at the moment of birth — is the public face, the vocational calling, the place in the chart where private development meets public expression. It is the mountaintop toward which the whole chart climbs. The celestial reading places attention here because a question about your work in the world — your contribution, your visibility, your sense of whether what you do reflects who you actually are — is becoming impossible to defer. The Midheaven does not ask you to be famous. It asks you to be aligned: for the work you bring to the world to be genuinely expressive of what you carry inside. That alignment is not a luxury. It is the specific calling of your particular life.",
    colors: ["#1e40af", "#fbbf24", "#7c3aed"],
  },
  {
    id: "r85",
    title: "Lunar Eclipse, What Spills",
    category: "astral",
    shortText:
      "The earth's shadow falls across the full moon and reveals what is full to overflowing...",
    fullReading:
      "A lunar eclipse occurs when the earth moves between the sun and the full moon, casting its shadow across the lunar surface and turning it blood-orange, copper, and rust. Lunar eclipses are associated with culminations, releases, and the surfacing of what has been accumulating below consciousness. Unlike solar eclipses — which are about revelation through absence — lunar eclipses are about what was always there, finally made visible through the intensity of the light that cannot quite reach it. The celestial reading shows a lunar eclipse active in your sky over an area associated with emotion and relationship. Something that has been building is ready to be released. You do not need to force this release. You simply need to allow it. The earth is already doing the work.",
    colors: ["#991b1b", "#f97316", "#0f172a"],
  },

  // ── SPIRIT (9 new) ───────────────────────────────────────────────────────────

  {
    id: "r86",
    title: "The Fire Keeper",
    category: "spirit",
    shortText:
      "Someone in your lineage learned how to tend what must not go out...",
    fullReading:
      "In many Indigenous traditions, there is the role of the fire keeper — the one entrusted with maintaining the sacred fire that is the community's spiritual centre, through weather and difficulty and the long nights when no one is watching. It is not a glamorous role. It is an essential one. The spirit reading invites you to consider whether you have been carrying a fire keeper role in your life — for your family, your community, your creative practice — without fully acknowledging it as the significant act it is. The fire keeper does not make the fire visible or impressive. The fire keeper makes it possible. What in your life would go out without your quiet, consistent tending? Name it. Then tend it with the dignity the role deserves.",
    colors: ["#dc2626", "#f97316", "#78350f"],
  },
  {
    id: "r87",
    title: "The Threshold Guardian",
    category: "spirit",
    shortText: "Not all guardians keep you out — some hold the door open...",
    fullReading:
      "In the stories of many cultures, the guardian at the threshold tests the traveller not to prevent passage but to ensure that what enters the sacred space is genuinely ready. The riddle, the challenge, the impossible-seeming task: these are not obstacles. They are initiations. The spirit reading places a guardian in your path — and invites you to understand it correctly. Whatever is currently blocking your forward movement — a person, a circumstance, an internal resistance — is not your enemy. It is the threshold test. The question it is asking is not whether you are good enough. The question is whether you are ready: whether you have done the preparation, whether you understand what you are entering, whether you are moving toward the threshold for the right reasons. Answer honestly. The door is waiting.",
    colors: ["#374151", "#7c3aed", "#fbbf24"],
  },
  {
    id: "r88",
    title: "The River of Memory",
    category: "spirit",
    shortText: "The waters that carry us came from somewhere older than us...",
    fullReading:
      "In many shamanic and ancestral traditions, the river is the image of time and memory — the water that flows through you came from clouds that formed over mountains that were once seabeds, and will become rain again over land not yet named. You are not the river's source. You are one moment in its long flowing. The spirit reading brings this perspective to a situation in which you have been treating yourself as the origin point of a pattern that is, in fact, much older than you. This is not to diminish your agency. It is to relieve you of an impossible burden — the belief that you created something that was already underway when you arrived. You can change the course of the river. You did not dam it. Work from that truth.",
    colors: ["#1e3a8a", "#065f46", "#e2e8f0"],
  },
  {
    id: "r89",
    title: "The Bone Woman Sings",
    category: "spirit",
    shortText: "From the desert of what is lost, life reassembles itself...",
    fullReading:
      "In the Clarissa Pinkola Estés tradition, La Llorona — the Bone Woman — wanders the desert collecting the bones of what has been lost and forgotten, and when she has assembled them, she sings them back to life. It is one of the most profound images of creative and spiritual resurrection in the mythological canon. The spirit reading brings the Bone Woman's medicine to a part of your life that has gone dry — a creative impulse, a relationship with something sacred, a sense of aliveness that once was present and is no longer. The bones are there. They have not been destroyed. They have been scattered, waiting for someone to care enough to gather them. The Bone Woman's work requires patience, solitude, and the willingness to be in the desert long enough to find what is scattered. Are you willing?",
    colors: ["#78350f", "#d97706", "#e2e8f0"],
  },
  {
    id: "r90",
    title: "The Sky Burial",
    category: "spirit",
    shortText: "What is released to the open air feeds what will fly...",
    fullReading:
      "In the Vajrayana Buddhist tradition of Tibet, the sky burial is the practice of offering the body of the deceased to the vultures — the sky, the air, the great cycle of return. It is not morbid. It is an act of profound generosity: the understanding that what we have held must eventually be released, and that the releasing itself has a sacred ecology. The spirit reading brings this medicine to something you have been holding past its time — a grief, a grievance, a version of yourself, a story about who you are that once protected you but no longer fits. The vultures in this reading are not fearsome. They are the mechanism by which what is complete becomes the material for what is beginning. Open your hands.",
    colors: ["#374151", "#60a5fa", "#fbbf24"],
  },
  {
    id: "r91",
    title: "The Inner Council",
    category: "spirit",
    shortText: "All the voices within you have something to contribute...",
    fullReading:
      "In certain shamanic and Jungian traditions, the inner council is the gathering of all the sub-personalities, the inner figures, the aspects of the self that each carry a partial but genuine truth. The warrior. The child. The sage. The trickster. The lover. None of them is the whole of you. None of them should govern alone. The spirit reading shows your inner council in a state of imbalance — one voice dominating the others, drowning out the perspectives that currently hold the information you need most. Which aspect of yourself have you not been listening to? It is often the quietest, the least socially acceptable, the one that has learned to wait. Give it the floor. It has been holding something that the whole council needs to hear.",
    colors: ["#7c3aed", "#059669", "#fbbf24"],
  },
  {
    id: "r92",
    title: "The Living Altar",
    category: "spirit",
    shortText:
      "What you return to again and again is sacred — whether or not you have named it so...",
    fullReading:
      "An altar is not a piece of furniture. It is a location of intentional relationship with the sacred — a place where the material and the spiritual meet, marked and maintained by repeated attention. The spirit reading asks you to identify the altars you are already tending, whether or not you call them that. The corner of the desk where a few meaningful objects have gathered. The route you walk when you need to think. The practice you return to when nothing else works. These are your altars. They are already sacred by virtue of your return to them. The reading asks you to bring that sacredness into full consciousness — to tend these places with the awareness that you are, in tending them, in relationship with something larger than the objects themselves.",
    colors: ["#dc2626", "#d97706", "#7c3aed"],
  },
  {
    id: "r93",
    title: "The Drum Speaks First",
    category: "spirit",
    shortText: "Before language, before thought, there was rhythm...",
    fullReading:
      "The drum is the oldest instrument and the primary vehicle of shamanic journey in traditions across every continent. Its rhythm — typically around four beats per second — entrains the brain toward the theta state, the border between waking and dreaming where the most fluid access to the deeper self becomes possible. The spirit reading brings the drum's medicine to a situation that has become too cognitive, too managed, too lived in the part of you that speaks and analyzes and decides. Something in you needs to be accessed below language. The drum's invitation is to find your way to the body, to rhythm, to the pre-verbal knowing that has been trying to communicate through feeling rather than words. You know more than you can currently say. The drum will help you hear it.",
    colors: ["#78350f", "#dc2626", "#1e3a8a"],
  },
  {
    id: "r94",
    title: "The Spider's Unfinished Web",
    category: "spirit",
    shortText:
      "Grandmother Spider weaves the world and leaves a space for you...",
    fullReading:
      "In many Native American traditions, Grandmother Spider — Spider Woman — is the creator deity who wove the world into existence and who continues to hold it together through her web of connection. The spider does not complete the web and step away. The web is always being extended, repaired, and re-tensioned in response to what the wind and the caught things do to its structure. The spirit reading brings Spider Woman's medicine to the creative and relational work you are doing. The web is not finished. It is never finished. That is not a failure of execution — it is the nature of living work. The strands you have laid are solid. The connection points are holding. The space at the edge where the web is still being extended is not emptiness. It is possibility.",
    colors: ["#0f172a", "#d97706", "#7c3aed"],
  },
  // NEW READINGS — to be appended to the readings array
  // Categories: tarot (×20), runes (×19), crystal (×19), astral (×18), spirit (×18)

  // ── TAROT (new) ──────────────────────────────────────────────────────────────

  {
    id: "r95",
    title: "The Ace of Cups Overflows",
    category: "tarot",
    shortText:
      "A single cup, brimming — the heart opens wider than expected...",
    fullReading:
      "The Ace of Cups is the purest expression of emotional beginning: a single chalice held aloft by a cloud-hand, overflowing with five streams of feeling into a sea of lotus blossoms. The dove descending into it carries a wafer marked with a cross — spirit meeting matter, the sacred made ordinary, love made real. This card arrives when something has cracked open in you that you were not expecting to crack. Not a wound. An opening. The distinction matters enormously. What is pouring out is not loss — it is the overflow of a container that has been quietly filling for longer than you noticed. You cannot hold the Ace of Cups tightly. It is, by nature, a spilling. Let it spill.",
    colors: ["#1e40af", "#60a5fa", "#f0abfc"],
  },
  {
    id: "r96",
    title: "The High Priestess Waits",
    category: "tarot",
    shortText: "Between the pillars, a scroll she will not yet unroll...",
    fullReading:
      "The High Priestess sits between Boaz and Jachin — the twin pillars of the temple — and she will not move aside for you. She is not being obstructive. She is teaching you the hardest lesson the Major Arcana contains: that some knowledge cannot be forced, purchased, or reasoned into existence. It arrives in its own time, through the channel that is built by patience and receptivity rather than effort. Behind her veil lies the sea — the deep waters of the unconscious that know everything that the waking mind has not yet been told. The card asks you to stop reaching for the answer. The answer is already in you, making its way up through the layers. The Priestess will unroll the scroll when you are ready to read it.",
    colors: ["#1e3a8a", "#7c3aed", "#e2e8f0"],
  },
  {
    id: "r97",
    title: "The Emperor Holds the Line",
    category: "tarot",
    shortText: "Order is not the enemy of freedom — it is its foundation...",
    fullReading:
      "The Emperor sits on his stone throne in an arid landscape — everything around him the product of will imposed on chaos. The ram heads at his shoulders speak of Aries energy: first, pioneering, unapologetic in its drive to establish. This card arrives not to demand that you become harder, but to ask whether you have been too long without structure. The Empress grows things; the Emperor defines the conditions in which growth can persist. You have had enough beginning. Something needs to be made durable. The Emperor's gift is not control for its own sake — it is the understanding that boundaries make things possible that boundlessness destroys. Where in your life do you need to build a wall that is also a garden wall?",
    colors: ["#991b1b", "#fbbf24", "#374151"],
  },
  {
    id: "r98",
    title: "Strength Holds the Lion",
    category: "tarot",
    shortText: "The gentlest hands can open the fiercest jaw...",
    fullReading:
      "The Strength card does not depict a warrior subduing a beast by force. It shows a figure — robed in white, crowned with the lemniscate of infinity — who opens the lion's mouth with bare hands, and the lion's eyes are soft, submitted not from defeat but from something it recognises in her. This is the card of the strength that is not aggression but mastery: the integration of the animal self through acceptance rather than suppression. What you have been fighting within yourself is not your enemy. It is unintegrated power. The lion is magnificent. The question is not how to defeat it. The question is how to walk with it. When you stop resisting it as foreign, it reveals itself as yours.",
    colors: ["#fbbf24", "#f59e0b", "#e879f9"],
  },
  {
    id: "r99",
    title: "The Two of Swords Rests",
    category: "tarot",
    shortText:
      "Blindfolded at the water's edge, she holds both swords aloft...",
    fullReading:
      "The Two of Swords is a card of chosen blindness — not as a failure but as a coping mechanism that has become a habit. The figure sits with arms crossed and blades raised, the sea of turbulent thought behind her, the crescent moon above. She is not stupid. She knows that taking off the blindfold will require her to choose. And choosing means one of the swords goes down — one option relinquished, one door closed. The card arrives to say something you may not want to hear: the stalemate you are maintaining is costing you more than the decision you are avoiding. Both swords cannot stay raised forever. Your arms are already tiring. The blindfold is removable. The choice, once made, will be lighter than the not-choosing.",
    colors: ["#1e3a8a", "#e2e8f0", "#7c3aed"],
  },
  {
    id: "r100",
    title: "The Three of Cups Celebrates",
    category: "tarot",
    shortText:
      "Three figures in the garden, goblets high, harvest behind them...",
    fullReading:
      "The Three of Cups is the most unambiguously joyful card in the deck — three figures dancing together in a circle of celebration, the harvest spread at their feet, everything abundant and complete. It is the card of community, of shared victory, of the specific joy that cannot be experienced alone because it is made entirely of relationship. The card arrives to ask you about your community: who are the people with whom you can genuinely celebrate? Not perform celebration, not manage how much joy you show — but actually let it out, fully and without self-editing, in the company of people who will match you measure for measure. If the answer comes slowly, the card is identifying a need. Joy shared is joy multiplied. Find your circle.",
    colors: ["#dc2626", "#fbbf24", "#059669"],
  },
  {
    id: "r101",
    title: "The Five of Pentacles Passes",
    category: "tarot",
    shortText:
      "Through the snow, a lit window — help was closer than it seemed...",
    fullReading:
      "The Five of Pentacles is among the most poignant cards in the Minor Arcana: two figures in the cold, one on crutches, one wrapped in thin cloth, passing a warmly lit stained-glass window — the church, the shelter — apparently without seeing it. It is the card of scarcity, of the felt experience of being left outside something warm and sufficient. But look again at the window: it is lit. It is there. The card does not say that help is unavailable. It asks why the figures are not looking up. The reading arrives to challenge a story you may be telling yourself about isolation or lack: that no one sees, that no door is open, that the cold is all there is. One of these is a fact. The others may be the grief talking. Look up.",
    colors: ["#1e3a8a", "#e2e8f0", "#fbbf24"],
  },
  {
    id: "r102",
    title: "The Nine of Cups Grants",
    category: "tarot",
    shortText: "The wish card sits, arms folded, satisfied...",
    fullReading:
      "The Nine of Cups is called the wish card: a satisfied figure seated before nine golden cups arranged in an arc, arms folded, expression content — almost smug. The image is deliberately earthly, deliberately human in its enjoyment of comfort and fulfilment. This is not a spiritual triumph card. It is a deeply material one, and it arrives to give you permission — the specific permission to want what you want, to acknowledge having received something good, to sit in the pleasure of a wish that came true without immediately reaching for the next. You have been taught that contentment is complacency. The Nine of Cups disagrees. Contentment is information. It tells you that you have arrived somewhere real. Rest here for a moment before the next movement.",
    colors: ["#fbbf24", "#d97706", "#1e40af"],
  },
  {
    id: "r103",
    title: "The Knight of Wands Rides",
    category: "tarot",
    shortText: "The desert blazes behind him, and he does not slow...",
    fullReading:
      "The Knight of Wands rides a rearing horse across a desert landscape, his salamander-covered armor blazing with confidence, his wand held aloft like a torch. He does not wait for favourable conditions. He is the favourable conditions — or he makes them as he moves. This card arrives for those who have been over-planning, over-preparing, over-deliberating at the threshold of something that wants to be begun. The Knight of Wands does not have all the answers. He has enough momentum to generate them in motion. The caution the card carries — and it does carry caution, the Knight can over-reach — is to pair your fire with a direction. Not a plan, exactly. A direction. Then ride.",
    colors: ["#dc2626", "#f97316", "#fbbf24"],
  },
  {
    id: "r104",
    title: "The Queen of Swords Perceives",
    category: "tarot",
    shortText:
      "She has seen enough to know, and she will not pretend otherwise...",
    fullReading:
      "The Queen of Swords sits on her cloud-throne with her sword held perfectly vertical — not as a weapon but as an instrument of precision. Her left hand is extended, palm up, in an offering: not of comfort, but of truth. She has known difficulty. The clouds around her are parting, not because they were never there, but because she has learned to see through them. This card arrives to activate a quality in you that you may have been suppressing in the interest of keeping the peace: the capacity for clear, compassionate, unsparing honesty. The Queen of Swords knows that the truth kindly withheld is not kind at all. She will tell you what you need to hear. More importantly, she trusts you to do the same.",
    colors: ["#e2e8f0", "#374151", "#7c3aed"],
  },
  {
    id: "r105",
    title: "The King of Cups Steadies",
    category: "tarot",
    shortText:
      "The sea surges around his throne, and he does not spill his cup...",
    fullReading:
      "The King of Cups sits on a stone throne in the middle of the sea — the waves around him turbulent, a fish leaping in the background, a ship tossing in the distance. His cup is full and perfectly level. He does not suppress the emotional world around him. He has learned to remain the stable centre of it. This is the card of emotional maturity: not the absence of feeling but the capacity to feel fully without being swept away. The card arrives when the emotional weather in your life is genuinely rough and the most powerful thing you can do is become the still point. Not by detaching, not by performing calm — but by actually finding the ground beneath the waves. You have access to that ground. The King knows you do.",
    colors: ["#1e40af", "#0891b2", "#fbbf24"],
  },
  {
    id: "r106",
    title: "The Ace of Swords Cuts Through",
    category: "tarot",
    shortText: "From the cloud, a single blade — the truth you needed...",
    fullReading:
      "The Ace of Swords emerges from a cloud-fist — a single blade wreathed in a crown of laurel and palm, rising over a grey, mountainous landscape. It is not a gentle card. It is the purest expression of the Swords suit: mental clarity so acute it functions as a cutting instrument, clearing away the accumulated fog of wishful thinking, rationalisation, and comfortable half-truth. The card arrives in a moment when the thing you most need is exactly what you have been most avoiding — the clear, cold, precise articulation of what is actually happening. Once said, it cannot be unsaid. Once seen, it cannot be unseen. The Ace of Swords does not ask whether you are ready for this clarity. It offers it regardless. Take it.",
    colors: ["#e2e8f0", "#1e3a8a", "#fbbf24"],
  },
  {
    id: "r107",
    title: "The Four of Swords Rests",
    category: "tarot",
    shortText:
      "The knight lies still beneath the stained glass — this rest is sacred...",
    fullReading:
      "The Four of Swords shows a knight in repose — not dead, but in the deliberate stillness of a warrior who has learned that rest is not absence of action but its essential counterpart. Three swords hang above him; one lies beneath him. The stained glass above shows a figure in prayer. This is the card of the necessary pause: the deliberate withdrawal from the field not in defeat but in order to return with something that constant movement cannot generate. You have been treating stillness as a luxury or an indulgence. The Four of Swords treats it as a discipline — as necessary to the whole as the fighting. What you need to understand about your current situation will not come to you in motion. Lie down. Let the understanding come.",
    colors: ["#374151", "#1e3a8a", "#d8b4fe"],
  },
  {
    id: "r108",
    title: "The Ten of Pentacles Endures",
    category: "tarot",
    shortText:
      "Three generations stand beneath the arch — this is what lasts...",
    fullReading:
      "The Ten of Pentacles shows a multi-generational scene: an elder, a couple, a child, dogs — all within an archway of pentacles, a city spread behind them. It is the card of enduring wealth — not the flashy accumulation of the Nine, but the kind that persists across time, that becomes the ground the next generation stands on. This card arrives to ask about your relationship with legacy: what are you building that will outlast your immediate circumstances? This need not be financial. The most lasting inheritances are relational, cultural, value-based — the particular quality of presence and care that you bring to your closest connections that will live in them long after your direct involvement has ended. What do you want to leave that is worth receiving?",
    colors: ["#d97706", "#fbbf24", "#7c3aed"],
  },
  {
    id: "r109",
    title: "The Page of Cups Wonders",
    category: "tarot",
    shortText:
      "The fish in the cup speaks, and the boy listens without embarrassment...",
    fullReading:
      "The Page of Cups stands at the water's edge in a flowered tunic, holding a cup from which a fish is emerging to look at him. And he is looking back — not alarmed, not trying to explain it, just genuinely curious about what the fish has to say. This is the quality the card activates: the willingness to be surprised, to allow the irrational and the unexpected to deliver its message without immediately running it through the filter of what makes sense. Something in your life is offering you an unusual communication — a dream, a coincidence, a sudden inexplicable feeling of knowing. The Page says: listen to the fish. Not because the fish is always right, but because the fish is carrying something your rational mind cannot reach. Hear it first. Evaluate it after.",
    colors: ["#60a5fa", "#fda4af", "#fbbf24"],
  },
  {
    id: "r110",
    title: "The Seven of Wands Stands Firm",
    category: "tarot",
    shortText: "Six wands rise against him, and he has the high ground...",
    fullReading:
      "The Seven of Wands shows a figure on a hilltop, fending off six unseen challengers with his single staff. He is outnumbered, but he has the advantage of position — the high ground, in every sense. The card arrives in situations where you feel under siege: too many demands, too many critics, too many voices telling you that your position is untenable. The Seven of Wands does not promise that the siege will end quickly. It promises that your position is defensible — not merely as stubbornness but as genuine conviction. You are not holding this ground out of pride. You are holding it because it is yours and because what stands on it matters. Know the difference between the position worth defending and the one you are holding out of habit. Then hold the first one with everything you have.",
    colors: ["#dc2626", "#f97316", "#065f46"],
  },
  {
    id: "r111",
    title: "The Six of Cups Remembers",
    category: "tarot",
    shortText:
      "The child hands over the cup of white flowers — a gift from before...",
    fullReading:
      "The Six of Cups is the card of the past returned — depicted as a young boy handing a cup of white flowers to a smaller child in a village square, an older figure receding into the background. It carries the particular emotional texture of memory: the warmth and the ache of it, the way the past can be both nourishing and a place one gets stuck. The card arrives with a dual invitation. First: there is something in your history — a quality, a relationship, a way of being — that genuinely nourishes you and is worth bringing forward. Second: there is something else in your history that you have been revisiting not because it feeds you but because it is familiar. The Six of Cups asks you to know the difference. Receive the flowers. Don't move into the memory.",
    colors: ["#fbbf24", "#86efac", "#60a5fa"],
  },
  {
    id: "r112",
    title: "The Eight of Cups Walks Away",
    category: "tarot",
    shortText:
      "Under the eclipse moon, the figure turns from eight full cups...",
    fullReading:
      "The Eight of Cups is perhaps the bravest card in the deck. A figure moves through shallow water away from eight carefully stacked cups — they are not broken, not empty, not taken by anyone else. They are simply being left. The gap between the seventh and eighth cups is visible: something was never quite completed there, never quite filled. The moon above is in eclipse — neither fully dark nor fully lit, the liminal sky of transition. This card arrives to name something you already know but have not yet said aloud: that a situation which once held genuine meaning for you has been completed, and that staying in it now is a choice against yourself. The leaving is not failure. It is the most difficult kind of faithfulness — to something truer than what you are leaving behind.",
    colors: ["#1e3a8a", "#374151", "#fbbf24"],
  },
  {
    id: "r113",
    title: "The Ace of Pentacles Grounds",
    category: "tarot",
    shortText: "The cloud-hand offers a coin above a garden in full bloom...",
    fullReading:
      "The Ace of Pentacles is the purest form of earthy potential: a single golden coin offered by a cloud-hand above a lush garden, a path leading through flowering hedges to a distant mountain. It is the seed of everything material — of resources, of the body, of work that becomes real in the world, of the satisfaction that comes from making something tangible. The card arrives at the beginning of something that has the quality of substance to it: a financial opportunity, a creative project that wants to be physically made, a commitment to your own health and embodied life. The Ace of Pentacles does not promise ease. It promises fertility. The ground is ready. The seed is in your hand. The act of planting is yours.",
    colors: ["#059669", "#fbbf24", "#d97706"],
  },
  {
    id: "r114",
    title: "The Two of Wands Surveys",
    category: "tarot",
    shortText:
      "The globe in his hands — the whole world, considered carefully...",
    fullReading:
      "The Two of Wands stands at the parapet of a castle, a globe in his hands, gazing out over water toward a distant horizon. He has achieved something — the castle is real, the wand behind him planted firmly in the stone. And now he is looking at what else is possible. This card is the moment after the initial success, when the comfortable could become a ceiling if you let it. The globe in his hands is not a trophy. It is a question: how large do you allow your thinking to become? The Two of Wands invites you to the expansiveness of genuine possibility — not daydreaming, not fantasy, but the serious contemplation of a larger horizon than the one you currently inhabit. What would you attempt if you were not required to be reasonable?",
    colors: ["#dc2626", "#fbbf24", "#1e3a8a"],
  },

  // ── RUNES (new) ──────────────────────────────────────────────────────────────

  {
    id: "r115",
    title: "Uruz, the Aurochs Strength",
    category: "runes",
    shortText: "Wild power stirs where tame strength has grown stale...",
    fullReading:
      "Uruz is the rune of the aurochs — the now-extinct wild ox of Northern Europe, an animal of such power and unpredictability that hunting it was considered a rite of passage. This is not the strength of the trained horse or the plough ox. This is strength in its primal, undomesticated form — the force that exists before it has been shaped by any particular purpose. The rune falls when the energy available to you has outgrown the container you have built for it. Not because the container was wrong, but because you have grown. Uruz asks: what would you do with your life if you were not trying to be manageable? Not as a permanent state — wildness needs direction to become useful — but as a question that reveals where your real vitality is currently imprisoned.",
    colors: ["#78350f", "#d97706", "#374151"],
  },
  {
    id: "r116",
    title: "Kenaz, the Torch Burns",
    category: "runes",
    shortText: "The controlled flame that illuminates and transforms...",
    fullReading:
      "Kenaz is the rune of the torch — not the wildfire of Hagalaz or the blaze of Sowilo, but the held flame: fire under human control, fire in service of craft, of healing, of the illumination of what was in darkness. It is the rune of the craftsperson, the artist, the healer — of skill applied to material with understanding of what the material wants to become. The rune falls in your reading to activate something in you that is more technical than inspirational: not the flash of the idea, but the long, patient work of bringing it into its final form. The torch in your hand is the specific competence you have been developing, sometimes without knowing it. The rune asks you to trust it. To apply it. To let the controlled flame do the work it is equipped to do.",
    colors: ["#dc2626", "#f97316", "#fbbf24"],
  },
  {
    id: "r117",
    title: "Ginnungagap Opens",
    category: "runes",
    shortText: "Before the first rune, the void that is not empty...",
    fullReading:
      "Before the runes were cast, before Odin hung on the tree and perceived their shapes, there was Ginnungagap — the primordial void between the ice of Niflheim and the fire of Muspelheim, the creative nothing from which everything emerged. When this reading opens into the space before naming, it is not an absence of meaning. It is the condition of maximum possibility — the moment before form, when everything that will be is still undifferentiated potential. You are in such a moment. The old form has dissolved or is dissolving. The new form has not yet precipitated. This space will feel like loss, like uncertainty, like the absence of the story you used to tell about yourself. It is none of those things. It is the void between the ice and the fire. And you know what came from that.",
    colors: ["#0f172a", "#1e3a8a", "#e2e8f0"],
  },
  {
    id: "r118",
    title: "Tiwaz, the Sky God's Justice",
    category: "runes",
    shortText: "The rune of Tyr holds the wolf and keeps the gods safe...",
    fullReading:
      "Tiwaz is Tyr's rune — the sky god who placed his hand in the mouth of the wolf Fenrir as a pledge while the gods bound him, knowing his hand would be taken when the wolf realised the binding was unbreakable. It is the rune of sacrifice for the greater good, of the willingness to pay a personal cost in service of something worth protecting. The rune falls in your reading to ask about your own relationship to sacrifice — specifically, whether the sacrifice you are currently being asked to make is of the Tyr variety: genuinely in service of something larger and worth the cost. Not all sacrifice is sacred. But some is. The rune asks you to look clearly at what you are giving up and why, and to make the choice consciously rather than by default.",
    colors: ["#1e3a8a", "#e2e8f0", "#dc2626"],
  },
  {
    id: "r119",
    title: "Ehwaz, the Horse and Rider",
    category: "runes",
    shortText: "Two who move as one travel farther than either alone...",
    fullReading:
      "Ehwaz is the rune of the horse — specifically, the bond between horse and rider, the partnership of two distinct beings who learn each other's rhythms so thoroughly that their movement together becomes something neither could achieve separately. It is the rune of symbiosis, of the relationship that amplifies rather than merely adds. In the ancient Norse world, the horse was not merely transport — it was a companion across worlds, the animal that carried its rider into battle, into the wilderness, and in the mythology, across the bridge between the living and the dead. The rune falls to speak of a partnership in your life that is more significant than you have been treating it. Horse and rider. The question is whether you have been riding without listening to what the horse already knows.",
    colors: ["#374151", "#d97706", "#fbbf24"],
  },
  {
    id: "r120",
    title: "Nauthiz, the Need Fire",
    category: "runes",
    shortText: "From friction, the flame that only necessity can kindle...",
    fullReading:
      "Nauthiz is need — the rune of necessity, of constraint, of the fire that can only be kindled by rubbing two sticks together in the specific friction of what cannot be avoided. It is not a comfortable rune. It marks the places where we are limited, where the gap between what is and what we need creates a grinding pressure. But the ancient Norse understood that need-fire — the fire made by friction — was uniquely sacred. It was used in times of illness, in times of communal crisis, precisely because it came from nothing but necessity and effort. The rune falls to reframe your current constraint: not as a punishment or a failure, but as the specific pressure that will produce the fire that nothing else could. What the friction is making in you is not damage. It is light.",
    colors: ["#0f172a", "#dc2626", "#fbbf24"],
  },
  {
    id: "r121",
    title: "Sowilo, the Sun Wheel",
    category: "runes",
    shortText: "The victory rune blazes — the dark was only ever temporary...",
    fullReading:
      "Sowilo is the sun rune — shaped like a lightning bolt or a turning wheel, associated with victory, with the life force at its fullest expression, with the light that cuts through every accumulated shadow. It is one of the unconditionally positive runes: a signal from the runemaster tradition that the current moment is one of genuine illumination and forward momentum. The rune falls to tell you something you may have been doubting: that you are moving in the right direction, that the energy available to you is clean and real, and that the clarity you have been seeking is arriving in full. Sowilo is not a rune for half-measures. When it blazes, it asks for the same in return: your full commitment to what you can now see clearly. The sun is out. Use the light.",
    colors: ["#fbbf24", "#f59e0b", "#dc2626"],
  },
  {
    id: "r122",
    title: "Perth, the Mystery Cup",
    category: "runes",
    shortText: "What falls from the cup was always already determined...",
    fullReading:
      "Perth — or Perthro — appears again, as it sometimes must, because the mystery does not resolve easily. The lot cup is overturned, the runes fall, and what lands is what was always going to land — and yet the casting is real, the moment is real, the choice of how to respond is entirely real. The rune arrives now not to counsel passivity but to offer a specific kind of freedom: the freedom from needing to understand everything before you can act. You have been waiting for certainty about something that will not yield certainty until after you have moved. The cup has been shaken. The lots are falling. You can watch them, or you can reach for the one that is yours.",
    colors: ["#7c3aed", "#374151", "#fbbf24"],
  },
  {
    id: "r123",
    title: "Hagalaz, the Hailstorm Passes",
    category: "runes",
    shortText:
      "The ice that falls from sky becomes the water that feeds the roots...",
    fullReading:
      "Hagalaz is the hailstone — the disruption that arrives without asking permission, that flattens what was carefully tended and leaves the landscape temporarily unrecognisable. It is not a kind rune, and the tradition does not pretend it is. It is a transformative one. The hailstone falls as ice; it melts into water; the water feeds the roots of everything that grows next season. The rune falls now to offer you a perspective on a disruption you have been through or are moving through: this is not the end of the garden. It is the end of this particular arrangement of the garden. The roots are unharmed. What grows from them will be shaped by the new light the clearing has let in. Hailstorms make space. What the space makes is yours to plant.",
    colors: ["#e2e8f0", "#1e3a8a", "#065f46"],
  },
  {
    id: "r124",
    title: "Raido's Return Journey",
    category: "runes",
    shortText: "The path that goes out always makes a way back...",
    fullReading:
      "Raidho — the rune of the journey — appears now in its return aspect. Every path that leads outward eventually curves back; every quest has a homecoming that is also a transformation. You have been in motion for a long time, and the rune marks a moment when the direction of movement is changing — not as retreat, but as the natural completion of the outward arc. What are you bringing back? Not what did you gain, not what did you achieve — but what are you carrying in the body of your experience, in the changed quality of your understanding, in the way you now stand in your own life? The rider who returns is not the rider who departed. Raidho honours both journeys equally: the going out, and the coming home.",
    colors: ["#7c3aed", "#d97706", "#374151"],
  },
  {
    id: "r125",
    title: "Wyrd, the Blank Rune",
    category: "runes",
    shortText:
      "The uncarved stone holds all futures and asks which you will choose...",
    fullReading:
      "The blank rune — sometimes called Wyrd, the unknowable fate — does not appear in the Elder Futhark, but it appears in contemporary practice as the rune that the tradition itself cannot fully contain. It is the space after the last letter, the silence after the last sound. When it falls in a reading, the tradition declines to speak — and in that declination, it speaks most honestly. There is an aspect of your situation that lies beyond what any system can map. Not because the situation is unknowable, but because the answer you are looking for is the one you have to make rather than receive. The blank rune is not absence. It is invitation. The wyrd — the personal fate — is not written until you write it. The rune is waiting for your mark.",
    colors: ["#e2e8f0", "#374151", "#0f172a"],
  },
  {
    id: "r126",
    title: "Wunjo's Deep Root",
    category: "runes",
    shortText: "Joy that has been tested knows where it lives...",
    fullReading:
      "Wunjo appears again, but in its deep form — not the bright banner of clan joy, but the root of it: the quiet, durable satisfaction of a person who has come through something difficult and found themselves still standing, still oriented, still capable of genuine gladness. This is not the joy that arrives easily. It is the joy that requires the loss of easier joys to reach — the superficial satisfactions that were, in the end, not satisfying. The rune asks you to feel, right now, what is genuinely right in your life. Not everything. Not even most things, perhaps. But something — a relationship, a capacity, a small daily pleasure — that is genuinely nourishing. Wunjo in its deep form says: that one thing is the root. Do not abandon it in pursuit of the full banner. The banner grows from the root.",
    colors: ["#059669", "#34d399", "#fbbf24"],
  },
  {
    id: "r127",
    title: "Elhaz Extends Its Arms",
    category: "runes",
    shortText:
      "The protective stance opens upward — toward what shelters you...",
    fullReading:
      "Elhaz — the elk rune, the protection rune — appears now with both its aspects visible: the upward reach toward divine protection, and the outward extension of protection toward others. In its upright form it is sanctuary; in its protective form it is the gesture of shielding. The rune falls to speak of a dual truth about your current situation: you are being protected, and you are being called to protect. The two movements are not separate. In traditions across cultures, the act of offering shelter activates the force of shelter in one's own life. What or who are you in a position to protect right now? Not because you have enough for yourself, necessarily — but because the act of protection is itself generative. The arms that open to shelter others become the arms that are held.",
    colors: ["#064e3b", "#34d399", "#d8b4fe"],
  },
  {
    id: "r128",
    title: "Berkano's Second Spring",
    category: "runes",
    shortText:
      "The birch returns to the burned hillside with absolute patience...",
    fullReading:
      "Berkano — the birch rune, the mother rune — appears now in its aspect of renewal after destruction. The birch is the first tree to return to land that has been burned or cleared; its seeds are so light that they travel enormous distances and its roots can take hold in conditions that would defeat hardier trees. This is the specific gift of this rune's return appearance: the teaching that new life does not require perfect conditions. It requires the lightest possible seed and the willingness to root in what is available. Something in your life that seemed too damaged to begin again is in fact capable of exactly the kind of beginning the birch specialises in — quiet, pioneering, unconcerned with the grandeur of the gesture. The first growth after fire is always small. It is always real.",
    colors: ["#065f46", "#86efac", "#fbbf24"],
  },
  {
    id: "r129",
    title: "Othala's Living Inheritance",
    category: "runes",
    shortText: "What you give forward is as sacred as what you received...",
    fullReading:
      "Othala returns to ask about the forward-facing dimension of inheritance: not what you have received from those who came before, but what you are actively building to pass forward. Every generation has the opportunity to break a chain or strengthen a thread — to take what was given, transmute whatever needed transmuting, and offer the result to those who come after. The rune arrives to ask you to think deliberately about this. Not in the abstract language of legacy, but in the specific: what do your children, your students, your community, the people whose lives you will influence — what do they receive from having known you? The enclosure of Othala is not a prison. It is a protected space. What grows inside it is what you tend.",
    colors: ["#78350f", "#d97706", "#34d399"],
  },
  {
    id: "r130",
    title: "Isa Breaks Open",
    category: "runes",
    shortText: "The ice that held everything still begins to move...",
    fullReading:
      "Isa returns, but in its breaking aspect. The still, vertical line of ice has been undercut by the slow work of what it was holding still — the inner life that continued to move even when the outer life appeared frozen. The thaw is the most dangerous moment in the life of ice: things that were held in stasis are released all at once, and the water that had been locked up begins to move with the urgency of all the distance it did not travel during the freeze. The rune arrives to tell you that the stillness is breaking, and to ask you to meet it consciously. The flood after the freeze can scatter as easily as it can irrigate. What was held in you during the still time — what understanding, what decision, what readiness — channel it now. The movement is beginning.",
    colors: ["#bfdbfe", "#1e3a8a", "#059669"],
  },
  {
    id: "r131",
    title: "Fehu Returns Home",
    category: "runes",
    shortText: "The herd completes its circuit — wealth is in the returning...",
    fullReading:
      "Fehu — the cattle rune, the mobile wealth rune — appears in its returning aspect. The herd that was sent out to pasture comes home; what was invested in the world returns to the source. This is the moment after the long effort, when the ledger begins to balance. Not all returns are financial — the rune is as likely to speak of the return of energy, of relationship, of creative momentum, of the sense of forward motion in a domain where things have felt stalled. What you sent out — in effort, in care, in genuinely applied skill — is completing its circuit. The rune asks you to be in your life to receive it: present, open, not already reaching toward the next thing so urgently that what is returning now passes by unacknowledged.",
    colors: ["#d97706", "#fbbf24", "#065f46"],
  },
  {
    id: "r132",
    title: "Dagaz at High Noon",
    category: "runes",
    shortText: "The threshold crossed — now stands the full bright middle...",
    fullReading:
      "Dagaz — the dawn rune — appears now in its noon aspect: not the transition between darkness and light, but the full expression of what that transition was moving toward. The paradox of the threshold resolved into the simple clarity of full illumination. You have crossed a threshold that was genuinely significant, and the rune marks the moment of arrival in the new place. Not with fanfare — the rune is too honest for that — but with the quiet acknowledgment that something has fundamentally changed and the change is real and the new place, however unfamiliar, is yours. The hourglass shape of the rune no longer points toward a single crossing point. It holds the full shape of the day. You are in the middle of it now. It is bright.",
    colors: ["#fbbf24", "#f59e0b", "#1e3a8a"],
  },
  {
    id: "r133",
    title: "Mannaz in the Mirror",
    category: "runes",
    shortText:
      "The human rune asks what you see when you see yourself clearly...",
    fullReading:
      "Mannaz — the rune of humanity — turns now inward. In its outward aspect it speaks of collaboration; in its inward aspect it speaks of self-knowledge, of the honest account of one's own nature that is the foundation of all genuine relationship with others. The rune falls to ask a question that is simple to state and difficult to answer honestly: who are you, actually? Not who you are trying to become, not who you were in your best moments or your worst, but the actual lived pattern of how you move through your life — what you consistently prioritise, how you respond when things are hard, what you are like when no one is watching. The runic tradition understood that the self-knowledge of Mannaz was not self-criticism. It was the beginning of the trustworthy self. Know yourself. Then others can know you too.",
    colors: ["#1e3a8a", "#7c3aed", "#e2e8f0"],
  },

  // ── CRYSTAL (new) ────────────────────────────────────────────────────────────

  {
    id: "r134",
    title: "Malachite Opens the Heart",
    category: "crystal",
    shortText: "The green stone pulls what is buried to the surface...",
    fullReading:
      "Malachite is among the most intense of the heart-centred crystals — its deep swirling greens and banded patterns speak of deep earth processes, of the copper-rich solutions that move slowly through stone over geological time and leave this extraordinary residue. It is called the stone of transformation because it does not merely work with emotions — it pulls them up from wherever they have settled and brings them into consciousness with a directness that can feel, initially, overwhelming. The crystal appears in your reading when something that has been stored in the body — a grief, a resentment, a longing that was judged as inconvenient and pressed down — is ready to complete its journey to the surface. Malachite does not ask how you feel about this. It simply facilitates it. You are more ready than you think.",
    colors: ["#059669", "#065f46", "#34d399"],
  },
  {
    id: "r135",
    title: "Smoky Quartz Clears the Air",
    category: "crystal",
    shortText:
      "The brown-grey crystal absorbs what has been making it hard to breathe...",
    fullReading:
      "Smoky quartz receives its characteristic colour from natural irradiation — exposure to the earth's own radioactivity transforming clear quartz into something that carries a quiet, grounded darkness within its transparency. It is the stone of transmutation: able to absorb energies that would otherwise accumulate and become oppressive, neutralising them by taking them into its own structure. The crystal appears in your reading when the psychic and emotional atmosphere around you has become dense with what has not been cleared — unresolved tensions, accumulated anxieties, the residue of other people's moods that have settled in your space. The stone asks simply: what needs to be cleared? Not processed, not understood, not worked through — just discharged, released, allowed to dissipate. Some things do not require transformation. They require removal. Smoky quartz handles the removal.",
    colors: ["#78350f", "#374151", "#d1d5db"],
  },
  {
    id: "r136",
    title: "Sunstone Kindles",
    category: "crystal",
    shortText:
      "The Viking navigator's stone catches the light that guides the way...",
    fullReading:
      "Sunstone was used by Viking navigators — held up to an overcast sky, it could locate the position of the hidden sun through the way it filtered polarised light, allowing navigation even when direct sight of the sun was impossible. This quality — finding the light source even when it is hidden — is the gift the crystal brings to your reading. You are navigating a situation in which the obvious direction markers have been obscured: the path ahead is not clear, the feedback is ambiguous, the conditions are overcast. Sunstone does not wait for the sky to clear. It works with the available light, even the indirect light, and from that finds true north. The reading asks you to trust your own capacity for indirect navigation. You can find the sun even when you cannot see it.",
    colors: ["#f97316", "#fbbf24", "#dc2626"],
  },
  {
    id: "r137",
    title: "Iolite Reads the Stars",
    category: "crystal",
    shortText: "The compass stone holds its blue even in the dark...",
    fullReading:
      "Iolite — the water sapphire, the Viking compass stone — is pleochroic: it shows different colours depending on the angle of light, shifting between blue, grey, and a pale yellow-gold. Like sunstone, it was used for navigation — specifically for locating the sun's position in cloudy conditions by the way it changes colour relative to the light's angle. The crystal carries the deep blue of true direction, the grey of realistic assessment, and the gold of the clarity that arrives when the angle is right. In your reading, iolite speaks of the capacity to hold your course through conditions that make direction hard to discern — not by refusing to acknowledge the ambiguity, but by carrying the compass within. Your sense of true north is more reliable than the current conditions suggest. Trust the colour shift.",
    colors: ["#3b82f6", "#374151", "#fbbf24"],
  },
  {
    id: "r138",
    title: "Turquoise Speaks of Sky",
    category: "crystal",
    shortText: "The oldest protector stone bridges heaven and earth...",
    fullReading:
      "Turquoise is one of the oldest gemstones in human spiritual use — worn by pharaohs, shamans, and warriors across cultures that had no contact with each other, as if its particular blue-green frequency independently communicated something sacred to every tradition that found it. It is the colour of the sky meeting the sea, of the horizon where the two worlds touch. In the shamanic traditions it is specifically protective of travellers — of those in the middle passage, between the familiar shore and the new one. The crystal appears in your reading because you are in that passage, and the protection it offers is real: not the protection of prevention, but the protection of connection — to the sky, to the earth, to the blue-green frequency of your own essential nature that does not change regardless of what shore you are crossing toward.",
    colors: ["#0891b2", "#059669", "#fbbf24"],
  },
  {
    id: "r139",
    title: "Peridot Renews the Eye",
    category: "crystal",
    shortText:
      "The green of new leaves clears old resentment from the vision...",
    fullReading:
      "Peridot is one of the few gemstones that forms in only one colour — the yellow-green of new growth, of the first leaves of spring, of the light that comes through a young canopy when the sun is still low. It forms in the mantle of the earth, carried to the surface by volcanic activity — deep earth energy expressed in the specific frequency of renewal. In the crystal traditions, it is the stone of releasing resentment: not the performative forgiveness that leaves the wound intact, but the genuine metabolisation of old grievance into something that can be composted into new growth. The crystal appears when there is something that has been carried past its useful term — a bitterness, a self-protective story about someone who hurt you — that is now costing more than the protection is worth. Peridot assists the actual releasing. It takes what was acid and makes it soil.",
    colors: ["#65a30d", "#86efac", "#fbbf24"],
  },
  {
    id: "r140",
    title: "Amber Holds Deep Time",
    category: "crystal",
    shortText:
      "The tree's blood, golden and patient, preserved what mattered...",
    fullReading:
      "Amber is not a crystal in the geological sense — it is fossilised tree resin, ancient sunlight trapped in the gum of trees that no longer exist. Pieces of amber have been found containing perfectly preserved insects, flowers, feathers from a world tens of millions of years old. This is the quality amber brings: the preservation of what is genuinely worth preserving, across spans of time that make human urgency seem momentary. The stone appears in your reading to speak of something in you that has been preserved through difficulty — a quality, a value, a particular way of understanding the world — that has not been destroyed by the pressures that surrounded it, only enclosed, like the insect in the amber, in the golden patience of your own endurance. It is still there. It is still alive. The resin can be dissolved. What it held, you can access again.",
    colors: ["#d97706", "#f59e0b", "#78350f"],
  },
  {
    id: "r141",
    title: "Kyanite Aligns",
    category: "crystal",
    shortText:
      "The blue blade of the crystal draws the scattered self into one line...",
    fullReading:
      "Kyanite grows in long, flat blades — a crystal of remarkable anisotropy, harder along one axis than another, as if it were designed for a specific directional purpose. It is one of the few crystals that never needs cleansing because it does not accumulate negative energy; it simply transmits alignment. The stone appears in your reading when the various aspects of your life — your values, your actions, your words, your interior experience — have drifted out of correspondence with each other. Not dramatically, not through any particular failure, but through the accumulated small adjustments of navigating a world that is not always aligned with what you know to be true. Kyanite draws a line. It asks you to look along it. Where does your life deviate from what you actually believe? That is where the work is.",
    colors: ["#1e40af", "#60a5fa", "#e2e8f0"],
  },
  {
    id: "r142",
    title: "Prehnite Prepares",
    category: "crystal",
    shortText:
      "The pale green stone that heals the healer knows what is coming...",
    fullReading:
      "Prehnite is a gentle, pale green stone — translucent, soft-looking, unassuming — known in the crystal traditions as the stone of prophetic vision and the healer's healer. It is associated with the capacity to be prepared without being anxious: the quality of knowing, in the body and the deeper registers of awareness, that something is approaching before it has announced itself through external events. The stone appears in your reading when the preparation you need to do is not practical or logistical but internal — the gathering of your own resources, the settling of your own centre, the quiet building of the specific kind of capacity that the approaching situation will require. What is coming is real, and you are already capable of meeting it. Prehnite asks you to complete your preparation in stillness, without rushing it into premature readiness.",
    colors: ["#65a30d", "#86efac", "#d8b4fe"],
  },
  {
    id: "r143",
    title: "Chrysocolla Speaks Gently",
    category: "crystal",
    shortText:
      "The blue-green stone asks for the words that have been swallowed...",
    fullReading:
      "Chrysocolla forms where copper deposits meet water, its blue-green colour the direct expression of copper's chemistry — the mineral made visible by the element that conducts electricity, that has been used in communication and connection since before history began. It is the stone of the gentle voice, of the truth spoken in the register of compassion rather than confrontation, of the capacity to say difficult things in ways that can actually be received. The crystal appears in your reading when there is a conversation that has been deferred because the words felt too large, too risky, too likely to damage something fragile. Chrysocolla offers a different approach: not the word that breaks but the word that opens. The truth does not have to be weaponised to be effective. Speak it gently. It will land more deeply.",
    colors: ["#0891b2", "#059669", "#fbbf24"],
  },
  {
    id: "r144",
    title: "Howlite Quiets the Mind",
    category: "crystal",
    shortText:
      "The white stone with grey veins holds the racing thought still...",
    fullReading:
      "Howlite is a white stone threaded with grey veins — calm, quiet, unflashy. It does not glow or shimmer; it absorbs. In the crystal traditions it is specifically associated with the calming of an overactive mind — not the suppression of thought, but the spaciousness that allows thoughts to complete themselves without immediately generating more thoughts in response. The stone appears in your reading in a period of cognitive overactivity: when the mind is running scenarios, planning for contingencies, processing and reprocessing information without arriving at rest. Howlite does not ask for the thinking to stop. It asks for the interval between thoughts to be honoured. In that interval — which is always available, always present — there is a quality of knowing that the thinking obscures. The white stone holds that interval open for you.",
    colors: ["#e2e8f0", "#9ca3af", "#374151"],
  },
  {
    id: "r145",
    title: "Chalcedony Smooths",
    category: "crystal",
    shortText:
      "The gentle microcrystalline blue soothes what has been abraded...",
    fullReading:
      "Blue chalcedony forms in the tiny gaps and voids of other rocks — it fills the spaces, builds in the interstices, smooths the rough edges of its geological environment with its slow, dense crystalline growth. It is the stone of gentle absorption: of the quality of receiving difficulty without resistance, of allowing what is harsh to become, through patient contact, something that no longer cuts. The crystal appears in your reading when you have been abraded — by circumstances, by other people's roughness, by the friction of a situation that has been persistently difficult — and the most useful quality available to you right now is not hardness but the specific softness that chalcedony models: the capacity to receive, to absorb, to allow the rough thing to wear smooth against your patient surface, without losing your own essential form.",
    colors: ["#60a5fa", "#e2e8f0", "#7c3aed"],
  },
  {
    id: "r146",
    title: "Vanadinite Grounds the Vision",
    category: "crystal",
    shortText:
      "The vivid orange crystal brings the dreamed thing into real work...",
    fullReading:
      "Vanadinite forms in dramatic geometric clusters — hexagonal prisms of vivid orange-red, sometimes honey-yellow, growing in patterns of almost architectural precision from their host rock. It is a stone of creative momentum and physical follow-through: the quality of bringing the visionary capacity of the mind into direct collaboration with the practical will of the body. The crystal appears in your reading when you have a clear vision — perhaps clearer than you are ready to admit — and the gap between the vision and the material reality is primarily one of applied, consistent, unglamorous effort. Vanadinite is not a stone of inspiration. It is a stone of implementation. The idea is formed. The crystal is asking what you are going to do with your hands today.",
    colors: ["#dc2626", "#f97316", "#d97706"],
  },
  {
    id: "r147",
    title: "Serpentine Sheds the Skin",
    category: "crystal",
    shortText:
      "The green-black stone of ancient earth knows how transformation feels...",
    fullReading:
      "Serpentine is named for its resemblance to the skin of a snake — greens and blacks and browns in patterns that recall the scales of the creature most associated with transformation, with the shedding of what is no longer needed. It is one of the oldest metamorphic rocks, formed under conditions of heat and pressure that re-crystallise existing minerals into something entirely new. The crystal appears in your reading as a witness to a transformation you are undergoing — one that involves the deliberate release of something that was once genuinely you and is no longer: an identity, a way of functioning, a protective mechanism that served its purpose. The snake does not mourn its shed skin. The skin is real; the release is real; the animal that emerges is larger, more supple, and genuinely itself in a way the old skin had begun to restrict.",
    colors: ["#065f46", "#374151", "#d97706"],
  },
  {
    id: "r148",
    title: "Celestite Lifts the Gaze",
    category: "crystal",
    shortText:
      "The pale blue cluster opens toward whatever is highest in you...",
    fullReading:
      "Celestite forms in clusters of pale blue-grey crystals — fragile-looking, light, the colour of the sky at its most open and uncluttered. It is the stone most commonly associated with higher guidance and the capacity for genuinely elevated perspective: the quality of being able to see one's situation from a vantage point above the immediate emotional weather. The crystal appears in your reading when the view from inside your circumstances has become too close — when you are too immersed in the detail of what is happening to access the larger pattern that the detail is part of. Celestite lifts the gaze without requiring the circumstances to change. The situation looks different from altitude. Not simpler, necessarily — but more comprehensible, more navigable, more legible as a chapter in a larger story that has a direction.",
    colors: ["#bfdbfe", "#e2e8f0", "#7c3aed"],
  },
  {
    id: "r149",
    title: "Red Jasper Holds the Base",
    category: "crystal",
    shortText: "The root stone asks if you have remembered you have a body...",
    fullReading:
      "Red jasper is among the most ancient of human talismans — a dense, opaque red stone of iron-rich chalcedony, heavy in the hand, solid and warm. It is the crystal of the root: of the body, of the earth, of the physical foundation on which all other experience rests. The stone appears in your reading as a gentle but firm reminder that you are an embodied being, and that the current orientation of your attention — heavily weighted toward the mental, the future-oriented, the abstract — is leaving the body underserved. The body knows things. It holds information in its tensions and its tiredness and its hungers that the mind cannot directly access. Red jasper asks you to come down from the altitude of your thinking and inhabit, for a while, the actual animal of yourself. What is your body telling you right now?",
    colors: ["#991b1b", "#dc2626", "#78350f"],
  },
  {
    id: "r150",
    title: "Tanzanite Opens What Is New",
    category: "crystal",
    shortText:
      "The rarest blue-violet holds frequencies not yet fully named...",
    fullReading:
      "Tanzanite exists in only one place on earth — the foothills of Kilimanjaro, in a geological condition so specific that new sources are essentially impossible. It is trichroic, showing blue, violet, and burgundy depending on the axis of light — three distinct frequencies in one stone. The crystal appears in your reading when something genuinely new is entering your life: not a variation on what you have known before, but a frequency of experience that does not yet have a name in your personal vocabulary. The rarity of tanzanite is the point — this is not an ordinary moment. What is arriving or emerging is genuinely unprecedented in your experience, and the crystal asks you to approach it with the openness of someone encountering something they cannot yet classify. Name it later. Meet it first.",
    colors: ["#4f46e5", "#7c3aed", "#db2777"],
  },
  {
    id: "r151",
    title: "Phantom Quartz Layers the Past",
    category: "crystal",
    shortText:
      "Inside the clear crystal, a ghost of what it once was remains...",
    fullReading:
      "Phantom quartz grows in stages — a crystal that pauses, receives a coating of another mineral, and then continues growing around that pause, leaving a ghostly outline of an earlier self visible within the clear outer form. The phantom is not a flaw. It is the record of a growth interruption that became part of the crystal's structure — evidence not of damage but of history made visible. The crystal appears in your reading as an invitation to see the layers of your own development not as complications or contradictions but as the phantom layers in the quartz: each growth period preserved within the current self, each interruption that felt like failure at the time now legible as the exact shape of a particular period of becoming. You are a layered thing. The phantoms are beautiful. They are you, in your various stages, all present at once.",
    colors: ["#e2e8f0", "#7c3aed", "#065f46"],
  },
  {
    id: "r152",
    title: "Alexandrite Changes Its Mind",
    category: "crystal",
    shortText:
      "Green by day, red by night — the same stone is never the same twice...",
    fullReading:
      "Alexandrite is among the most remarkable of gemstones — in daylight or fluorescent light it appears a clear, vibrant green; under incandescent light it shifts to a vivid red. The same stone, same chemistry, the same crystal structure — an entirely different colour depending on the quality of illumination. This is not inconsistency. It is the full expression of a complex nature that requires different conditions to reveal its different aspects. The crystal appears in your reading to speak of a quality in you that has been experienced by some as inconsistency and that is more accurately understood as range: the capacity to be genuinely different things in different contexts, not as performance but as the natural expression of a depth that no single light source can fully illuminate. You are not contradicting yourself. You are showing different facets of the same truth.",
    colors: ["#059669", "#dc2626", "#7c3aed"],
  },

  // ── ASTRAL (new) ─────────────────────────────────────────────────────────────

  {
    id: "r153",
    title: "The IC Speaks from Below",
    category: "astral",
    shortText: "The lowest point of the chart is also the deepest root...",
    fullReading:
      "The Imum Coeli — the IC, the lowest point of the natal chart — is the most private of the four angles, the one most hidden from public view, associated with the home, the family of origin, the foundational emotional ground. It is where you come from in the most elemental sense: the psychic soil in which the chart grows. The celestial reading directs attention here because something in the roots is asking to be acknowledged. Not excavated for drama — the IC does not respond well to drama — but tended, the way you would tend the soil in which something you care about is planted. What in your earliest emotional life is still active in ways you have not fully mapped? The root system extends further than the visible plant. The IC knows where every tendril goes.",
    colors: ["#78350f", "#374151", "#e2e8f0"],
  },
  {
    id: "r154",
    title: "The Vertex Fated Meeting",
    category: "astral",
    shortText: "The electric angle marks what was always going to happen...",
    fullReading:
      "The Vertex is a calculated point in the natal chart — sometimes called the electric ascendant — associated with fated encounters and significant turning points that feel, when they arrive, as though they were always meant to happen. It is the point where the path of the ecliptic crosses the prime vertical, an intersection of two distinct celestial planes. When another person's chart or a significant transit activates the Vertex, the experience is one of recognition — of the particular quality of meeting something you did not know you were waiting for. The celestial reading marks the Vertex active in your sky now. Something or someone currently in your life carries the quality of fated significance. Not in the sense of predetermination — in the sense of genuine importance to the direction of your becoming. Pay attention.",
    colors: ["#7c3aed", "#fbbf24", "#1e3a8a"],
  },
  {
    id: "r155",
    title: "The Part of Fortune Turns",
    category: "astral",
    shortText:
      "The ancient Arabic point marks where the luminaries align for you...",
    fullReading:
      "The Part of Fortune — calculated from the relationship between the sun, moon, and Ascendant — is one of the oldest points in astrological practice, used by Hellenistic astrologers as a significant indicator of worldly flourishing. It marks the place in the chart where, if you are aligned with your soul's deeper purpose, material and worldly life tend to support rather than resist you. The celestial reading activates the Part of Fortune in a moment when you are closer to that alignment than you have been in some time. Something in how you have recently been living — a choice made, a direction shifted, a false self abandoned — has moved you into a more genuine correspondence with the chart's deeper intention. Fortune responds to authenticity. The alignment you have been making is beginning to be rewarded.",
    colors: ["#d97706", "#fbbf24", "#7c3aed"],
  },
  {
    id: "r156",
    title: "Ceres in the Chart",
    category: "astral",
    shortText:
      "The dwarf planet of nourishment asks what feeds you and what starves...",
    fullReading:
      "Ceres — the largest object in the asteroid belt, now classified as a dwarf planet — is the celestial body associated with the Demeter mythology: with nourishment, with the grief of loss, with the specific anguish of separation from what we cherish, and with the negotiated return. In the chart it marks the way we were nourished as children and the way we subsequently nourish others and ourselves, including the places where those patterns went wrong. The celestial reading brings Ceres forward because a question about nourishment is active in your sky: are you being fed? Not merely kept alive — genuinely nourished, in the registers that matter most to you? And are you nourishing others in ways that honour both of you? The goddess asks about the quality of the table. What is being served matters as much as whether the table is full.",
    colors: ["#065f46", "#34d399", "#fbbf24"],
  },
  {
    id: "r157",
    title: "Pallas Athena Sees the Pattern",
    category: "astral",
    shortText:
      "The warrior-strategist asteroid brings the pattern into view...",
    fullReading:
      "Pallas Athena — the asteroid associated with the goddess of wisdom and strategic warfare — marks in the chart the capacity for pattern recognition, for the elegant strategic solution, for the seeing of the whole before others have apprehended the parts. It is associated with creative intelligence, with the inspired problem-solving that appears to arrive suddenly but is actually the synthesis of careful unconscious observation. The celestial reading activates Pallas in your sky at a moment when the pattern you have been half-seeing is about to become fully visible. You have had all the data. The synthesis has been happening below the level of conscious awareness. What is approaching is not a new insight but the arrival, in full conscious form, of something you have already understood at a deeper level. When it comes, it will feel both surprising and entirely obvious.",
    colors: ["#1e3a8a", "#7c3aed", "#e2e8f0"],
  },
  {
    id: "r158",
    title: "Juno Weighs the Partnership",
    category: "astral",
    shortText: "The marriage asteroid asks what you are willing to covenant...",
    fullReading:
      "Juno — the asteroid associated with the Roman goddess of marriage — marks in the natal chart the nature of significant partnerships and the patterns that draw us toward particular kinds of union. It speaks not just of romantic partnership but of all the significant covenants we make: the business alliance, the creative collaboration, the mentorship that carries the weight of genuine commitment. The celestial reading activates Juno in your sky in a way that asks you to look honestly at the most significant commitment in your life right now. Not whether you love what you have committed to — but whether the terms of the commitment are ones you have genuinely chosen, that honour both parties equally, that you would agree to if you were making the choice today. Juno is the goddess of the covenant. She asks whether yours is one you can stand in with both feet.",
    colors: ["#db2777", "#fda4af", "#1e3a8a"],
  },
  {
    id: "r159",
    title: "Vesta Keeps the Flame",
    category: "astral",
    shortText:
      "The hearth asteroid marks what is sacred enough to tend without reward...",
    fullReading:
      "Vesta — the brightest of the asteroids, associated with the Roman goddess of the hearth and the sacred flame — marks in the chart the place of devotion: the thing that is so genuinely important to the soul that it is tended without requiring external validation or reward. The Vestal Virgins were not celibate in the modern sense of the word — they were consecrated, set apart for their task, not diminished but completed by it. The celestial reading brings Vesta forward to ask: what is your sacred fire? Not what should be, not what you have been told to value — but what, when you return to it after time away, feels like the return to something essential? Identify it clearly. Then protect it with the same seriousness the Vestals brought to their charge. Some fires must not go out.",
    colors: ["#dc2626", "#f97316", "#fbbf24"],
  },
  {
    id: "r160",
    title: "The Progressed Moon Arrives",
    category: "astral",
    shortText:
      "One degree per year, the secondary moon completes its message...",
    fullReading:
      "In secondary progressions — one of the most intimate astrological techniques — the natal chart advances one day for every year of life. The progressed Moon, moving roughly one degree per month through the signs and houses of this advanced chart, marks the interior emotional weather of a given period: what the soul is processing, what themes are active beneath the surface of the more visible transits. The celestial reading tracks the progressed Moon to your current position and finds it in the final degrees of a sign — the degree of completion, of wrapping up, of the end of a chapter that has been running for approximately two and a half years. You may not be able to name everything that is closing. Some of it has been interior enough to resist naming. But you will feel the turn. And when the progressed Moon enters the next sign, something in you will be genuinely ready for what it brings.",
    colors: ["#e2e8f0", "#1e3a8a", "#8b3ff0"],
  },
  {
    id: "r161",
    title: "The Cazimi Moment",
    category: "astral",
    shortText:
      "When a planet sits in the heart of the sun, it is purified by fire...",
    fullReading:
      "In traditional astrology, a planet is 'cazimi' — in the heart of the sun — when it falls within a single degree of exact conjunction with the solar disc. This is a position of extraordinary potency: the planet is not diminished by proximity to the sun but exalted, purified, operating at its highest and most essential expression. The celestial reading marks a cazimi quality active in your sky — a moment when one of your inner energies is operating at its most essential and most clear. There is a capacity in you right now that is unusually uncontaminated by habit or compromise. Identify it. Use it. The cazimi moment is brief — the sun moves continuously, and the heart of the fire is only available for a short, potent interval. This is that interval.",
    colors: ["#fbbf24", "#f59e0b", "#dc2626"],
  },
  {
    id: "r162",
    title: "The Stellium Speaks as One",
    category: "astral",
    shortText:
      "Three or more planets in one house — that area of life is fully alive...",
    fullReading:
      "A stellium — three or more planets gathered in a single sign or house — concentrates an extraordinary amount of celestial energy in one area of experience, making that area of life simultaneously more intense, more significant, and more complex than it would be with single planetary influence. The celestial reading marks a stellium active in your current sky, gathered in the sector associated with your most pressing question. This concentration is not a problem. It is the universe putting multiple intelligences to work on the same domain of your life at once. The challenge of the stellium is that multiple planetary principles are all speaking simultaneously: it can feel overwhelming, like a room where everyone is talking at once. The skill is to hear each voice separately before you try to hear them in harmony.",
    colors: ["#7c3aed", "#1e40af", "#dc2626"],
  },
  {
    id: "r163",
    title: "The Mutual Reception Dances",
    category: "astral",
    shortText: "Two planets in each other's signs — an exchange of power...",
    fullReading:
      "Mutual reception occurs when two planets each occupy the sign that the other rules — a celestial guest exchange in which each planet is hosted in the other's domain and lends its energy in return. It is a configuration of reciprocity, of genuine exchange, of two principles working in a partnership of mutual support and amplification. The celestial reading marks a mutual reception active in your sky between energies associated with your creative life and your relational world: these two domains, which you have sometimes experienced as competing for your resources, are in a period of genuine collaboration. What feeds your creative work will also feed your relationships, and vice versa. The celestial exchange is real. What would change if you treated your most important relationships as creative partnerships?",
    colors: ["#db2777", "#7c3aed", "#fbbf24"],
  },
  {
    id: "r164",
    title: "The Grand Trine Opens",
    category: "astral",
    shortText:
      "Three planets in harmony — the triangle of effortless flowing...",
    fullReading:
      "The grand trine — three planets in trine aspect to each other, forming an equilateral triangle in the chart — is among the most harmonious of configurations. It indicates a natural flow of energy between three areas of life, a circuit that moves easily and without resistance. It can feel like luck, like natural talent, like the sense that certain things simply work for you without the effort they require of others. The celestial reading marks a grand trine active in your sky, touching areas associated with communication, resources, and creative expression. The circuit is open. The energy is available. The single caution the trine carries is that ease can become complacency: the circuit requires engagement to generate power. The trine does not do the work for you. It makes the work feel natural. That is the gift. Use it.",
    colors: ["#059669", "#1e40af", "#fbbf24"],
  },
  {
    id: "r165",
    title: "The Yod Points",
    category: "astral",
    shortText: "The Finger of God marks where the chart's purpose converges...",
    fullReading:
      "The Yod — sometimes called the Finger of God — is formed by two planets in sextile, both quincunx to a third planet at the apex. The quincunx is an aspect of adjustment, of the slight but persistent mis-alignment that requires constant recalibration; two of them pointing to the same planet create a configuration of relentless purposefulness, of being repeatedly returned to a specific point of focus regardless of where you try to take your attention. The celestial reading marks a Yod active in your sky, with its apex touching the sector of your chart associated with vocation. The Finger of God is not gentle. It insists. The area it points to is not optional in your life — it is the thing you were specifically configured to engage with. The adjustment this requires is real. The purpose it points toward is also real.",
    colors: ["#dc2626", "#7c3aed", "#fbbf24"],
  },
  {
    id: "r166",
    title: "The Progressed Sun Shifts Sign",
    category: "astral",
    shortText:
      "Once every thirty years, the progressed sun crosses a new threshold...",
    fullReading:
      "In secondary progressions, the progressed Sun moves approximately one degree per year — meaning it takes approximately thirty years to traverse each sign. When the progressed Sun changes signs, it marks one of the most significant interior shifts in a person's life: a fundamental change in the quality of one's identity, self-expression, and the manner in which one's essential nature seeks to manifest in the world. The celestial reading marks the progressed Sun at or near a sign boundary in your sky. This is a thirty-year threshold. What you have been for three decades is not what you are becoming — not in terms of values or soul, but in terms of style, approach, the flavour of your engagement with your life. The new sign's qualities are already emergent in you. You may have noticed yourself changing in ways you could not quite account for. This is the account.",
    colors: ["#fbbf24", "#dc2626", "#7c3aed"],
  },
  {
    id: "r167",
    title: "The Solar Return Speaks",
    category: "astral",
    shortText: "The sun returns to its birth degree — a new year begins...",
    fullReading:
      "The solar return — the moment each year when the sun returns to the exact degree it occupied at birth — is the astrological new year, a chart drawn for that moment that describes the quality and themes of the coming twelve months. In the solar return chart, the house the sun occupies describes where the year's primary attention will be directed; the aspects it makes describe the quality of that attention. The celestial reading draws from your current solar return a message about the year ahead: this is a year weighted toward interior development rather than external accomplishment. Not passivity — interior development is among the most demanding of undertakings — but the direction of growth is inward before it is outward. What you build inside yourself this year will be the foundation from which the following year's external movement launches.",
    colors: ["#fbbf24", "#f59e0b", "#1e3a8a"],
  },
  {
    id: "r168",
    title: "The Out-of-Bounds Moon",
    category: "astral",
    shortText:
      "When the moon strays beyond the sun's declination, wild knowing arrives...",
    fullReading:
      "An out-of-bounds moon — one that strays beyond 23°27' north or south declination, past the boundary of the sun's influence — is associated in astrological tradition with unusually heightened emotional and intuitive sensitivity, with the capacity to perceive things that are outside the normal range of experience, and with a certain creative and emotional wildness. When the moon is out of bounds in the sky above you, the quality of feeling available to you is not ordinary. The emotional and intuitive data arriving through your system may seem excessive, overwhelming, or implausible. The celestial reading asks you not to immediately rationalise it into proportionality. What the out-of-bounds moon brings cannot always be measured against ordinary experience, because it is coming from outside the ordinary range. Receive it. You can sort it later.",
    colors: ["#1e3a8a", "#8b3ff0", "#e2e8f0"],
  },
  {
    id: "r169",
    title: "The Sabian Symbol Speaks",
    category: "astral",
    shortText:
      "Each degree of the zodiac holds an image that reads your moment...",
    fullReading:
      "The Sabian Symbols — channelled in 1925 by medium Elsie Wheeler and interpreted by astrologer Marc Edmund Jones — assign a specific symbolic image to each of the 360 degrees of the zodiac. They are among the most mysterious and precise tools in the astrological tradition, often astonishingly accurate as descriptions of the quality of experience associated with a particular planetary degree. The celestial reading draws on the Sabian Symbol of the degree currently activated by a significant transit in your chart. The image is of a 'woman drawing aside two heavy curtains to gaze at a star' — the deliberate act of clearing the obstruction to see what has always been there, brilliant and patient, behind the heaviness. The curtains are real. The act of drawing them aside is yours. The star has not moved.",
    colors: ["#1e3a8a", "#7c3aed", "#e2e8f0"],
  },
  {
    id: "r170",
    title: "The Dispositor Chain",
    category: "astral",
    shortText:
      "Each planet leads to another, and the chain reveals the source...",
    fullReading:
      "In traditional astrology, a planet's dispositor is the ruler of the sign it occupies — the planet to which it is 'handed off' for its functioning. When you follow the chain of dispositors in a natal chart, you eventually reach a final dispositor: the planet that rules its own sign and holds no further referral. This planet is the ultimate source of the chart's energy, the foundation upon which every other energy in the chart depends. The celestial reading traces the dispositor chain in your current sky and arrives at a planet associated with your deepest creative and relational drives. The source of your current difficulty — and your current capacity — is in that domain. Every other problem in your life right now is, at its root, an expression of that one. Address the source. The chain leads back there regardless of where you enter it.",
    colors: ["#7c3aed", "#1e40af", "#fbbf24"],
  },

  // ── SPIRIT (new) ─────────────────────────────────────────────────────────────

  {
    id: "r171",
    title: "The Vision Quest Calls",
    category: "spirit",
    shortText:
      "The tradition of going alone into the wilderness to receive direction...",
    fullReading:
      "In many Indigenous traditions of North America, the vision quest — the deliberate withdrawal from ordinary life into solitude, fasting, and exposure to the natural world for a period of days — was not an optional spiritual practice. It was a necessity: the means by which a person received their purpose directly from the spirit world, without the mediation of other humans. You cannot replicate the literal practice in a modern context without appropriate cultural grounding and guidance. But the spirit reading brings its medicine to you as a principle: there is a direction available to you that cannot be received in the midst of ordinary life and its noise. You need, at some point soon, a quality of deliberate solitude and stillness that is different from being alone in your apartment. The spirit world is trying to communicate. The question is whether the channel is clear enough to receive.",
    colors: ["#78350f", "#d97706", "#1e3a8a"],
  },
  {
    id: "r172",
    title: "The Song Line Walks",
    category: "spirit",
    shortText: "The landscape remembers what has moved across it...",
    fullReading:
      "In the Aboriginal Australian tradition, Song Lines are the invisible paths that cross the continent, the routes walked by the ancestor beings in the Dreaming as they sang the world into existence. To walk a Song Line is to participate in the ongoing creation of the world — to re-sing the path, to maintain the relationship between the human and the landscape that brought both into being. The spirit reading brings the Song Line's medicine to your relationship with the physical world you move through. The places you return to, the routes you habitually take, the landscapes that ask something of you when you are in them — these are your song lines. Not metaphorically. They are the living geography of your soul's movement through the world. What are you singing as you walk them? What are they asking you to sing?",
    colors: ["#78350f", "#d97706", "#1e3a8a"],
  },
  {
    id: "r173",
    title: "The Fetch Travels",
    category: "spirit",
    shortText:
      "In the Norse tradition, the spirit double carries what the self cannot...",
    fullReading:
      "In the Norse and broader Germanic spirit tradition, the fetch — also called the fylgja — is the spirit double that accompanies a person throughout their life, sometimes appearing in the shape of an animal, sometimes as a woman who is seen at moments of significant transition. The fetch is not subordinate to the self — it is a separate spiritual entity with its own relationship to the soul it accompanies. It is most visible at crossroads, at the edges of sleep and waking, and at the approach of significant change. The spirit reading suggests that your fetch is active and visible now — that the spirit part of yourself that moves ahead of you through time is trying to show you something about the territory it has already entered. Pay attention to what meets you in the borderline states: the hypnagogic images, the vivid dreams, the animal that appears with unusual persistence.",
    colors: ["#374151", "#7c3aed", "#d97706"],
  },
  {
    id: "r174",
    title: "The Kachina Arrives",
    category: "spirit",
    shortText:
      "The spirit being comes not to take but to give what the season requires...",
    fullReading:
      "In the Hopi and Pueblo traditions, Kachinas are the spirit beings who come among the people during part of the year, bringing specific gifts, teachings, and medicine to the community. They are not gods to be worshipped but intermediaries — beings who bridge the human and the spirit world, carrying what is needed between them. Each Kachina carries a specific quality: rain, healing, discipline, fertility, the particular energy that the season and the community require. The spirit reading brings the principle of the Kachina to your moment: something is arriving in your life — a person, a circumstance, an opportunity — that is carrying a specific medicine you need. It may not arrive in a form that looks like a gift. Kachinas are often demanding, sometimes frightening, and always purposeful. Look past the form at what is being offered. What quality is this arrival carrying for you?",
    colors: ["#dc2626", "#d97706", "#1e3a8a"],
  },
  {
    id: "r175",
    title: "The Three Fates Spin",
    category: "spirit",
    shortText:
      "Clotho spins, Lachesis measures, Atropos cuts — and the thread is yours...",
    fullReading:
      "The Moirai — Clotho who spins the thread of life, Lachesis who measures its length, Atropos who cuts it with her shears — were, in the Greek tradition, powers older than the Olympians and immune to the gods' interference. They were not cruel. They were the principle of limitation as it applies to mortal life: the understanding that every life has a specific shape, a particular span, a set of actual rather than theoretical conditions within which it must be lived. The spirit reading brings the Moirai's medicine to a situation in which you have been fighting the actual conditions of your life with the energy that might otherwise be directed toward living it. The thread has a length. The life has a shape. The question is not whether you can extend it indefinitely but what you are doing with the span that Lachesis has already measured.",
    colors: ["#e2e8f0", "#374151", "#7c3aed"],
  },
  {
    id: "r176",
    title: "The Trickster Comes",
    category: "spirit",
    shortText:
      "Coyote, Loki, Anansi — the one who undoes what has been too tightly fixed...",
    fullReading:
      "The Trickster appears in virtually every mythological tradition — Coyote in the Americas, Loki in the Norse, Anansi in West Africa, Hermes in Greece, Crow in Aboriginal Australia. The Trickster is not evil. The Trickster is the principle of necessary disruption: the force that undoes what has become too rigid, too serious, too convinced of its own indispensability. When the Trickster arrives in a reading, it is rarely comfortable. But it is almost always necessary. What has become too fixed in your life? What are you taking too seriously, holding too tightly, defending past the point of proportionality? The Trickster is not asking you to abandon it. The Trickster is asking whether you can laugh at it — just slightly, just enough to loosen the grip and let some air in. Rigidity is always what breaks. The Trickster just speeds up the inevitable.",
    colors: ["#d97706", "#dc2626", "#7c3aed"],
  },
  {
    id: "r177",
    title: "The Sacred Wound Heals",
    category: "spirit",
    shortText:
      "The wound that cannot close becomes the gate through which others are healed...",
    fullReading:
      "The motif of the sacred wound — from Chiron, from the Fisher King, from the countless healers in shamanic traditions who bear the mark of their initiation in their bodies — speaks to a paradox that only experience confirms: the wound that does not fully heal, that stays sensitive, that occasionally opens again — this is often the very place from which the capacity to understand and accompany others in their pain originates. You carry a wound of this kind. You know which one. The spirit reading does not promise it will close. It offers a different possibility: that its sensitivity is itself a form of skill, that what it makes you attentive to in others is something they cannot always explain to someone who does not know it from the inside. The wound is not your weakness. It is your particular, costly form of knowledge.",
    colors: ["#dc2626", "#7c3aed", "#fbbf24"],
  },
  {
    id: "r178",
    title: "The World Tree Holds",
    category: "spirit",
    shortText:
      "Yggdrasil connects all the worlds, and its roots run under everything...",
    fullReading:
      "Yggdrasil — the great ash tree of Norse cosmology — stands at the centre of all the nine worlds, its branches reaching into the heavens and its three roots extending to the well of Urd, the spring of Mimir, and the realm of Niflheim. The eagle at the top and the serpent at the roots are in perpetual communication via the squirrel Ratatoskr who runs between them — the upper and lower, the spiritual and the chthonic, in constant relationship. The spirit reading brings Yggdrasil's image to your sense of connectedness: you are not a separate thing navigating a hostile environment. You are a node in a world-tree whose roots go deeper than memory and whose branches extend further than sight. The difficulty you are facing is one branch on the tree. The roots are unaffected. What you are connected to is larger than the branch that is currently in wind.",
    colors: ["#065f46", "#374151", "#d97706"],
  },
  {
    id: "r179",
    title: "The Bardo Crossing",
    category: "spirit",
    shortText:
      "In the transitional state between death and rebirth, recognition is the key...",
    fullReading:
      "In the Tibetan Buddhist tradition, the Bardo is the transitional state that the consciousness enters between death and the next incarnation — a space in which the experiences that arise are the projections of the mind itself, including the terrifying forms that are, if recognised for what they are, only the fearful aspects of the mind's own light. The instruction of the Tibetan Book of the Dead is consistent throughout: recognise. Do not flee what arises. Look directly at the light, even — especially — the blinding light, and know it as the radiance of your own awareness. The spirit reading brings this teaching to a transition you are navigating now, not between lives but between versions of your life. The forms that arise in this space are your own projections. Recognition dissolves them. Look directly at what frightens you most in this crossing. It is not other than you.",
    colors: ["#1e3a8a", "#e2e8f0", "#7c3aed"],
  },
  {
    id: "r180",
    title: "The Medicine Wheel Turns",
    category: "spirit",
    shortText:
      "East, South, West, North — each direction carries its season and its teaching...",
    fullReading:
      "The Medicine Wheel — used across many Indigenous traditions of North America in various forms — is a circular map of the cosmos, of the year, of the stages of human life, and of the directions that each carry specific qualities and teachings. East is the place of beginnings, of the rising sun, of vision and new sight. South is the place of growth and trust, of the fullness of summer. West is the place of transformation, of the setting sun and the underworld journey. North is the place of wisdom, of winter, of the understanding that comes from having moved through the other three. The spirit reading asks: which direction are you currently in? Not where you want to be — where you actually are in the cycle. The wheel always turns. The teaching of the direction you are in is exactly what this moment offers.",
    colors: ["#dc2626", "#d97706", "#1e3a8a", "#065f46"],
  },
  {
    id: "r181",
    title: "The Ancestral Name",
    category: "spirit",
    shortText:
      "Somewhere in the line before you, someone had your exact quality...",
    fullReading:
      "In many Indigenous and ancestral traditions, a person may carry the qualities, skills, or unfinished work of a specific ancestor — not as a burden but as a living inheritance, a thread that runs through time and manifests most fully in the person most capable of carrying it forward. The spirit reading senses a specific ancestor in your lineage — not a famous one, not necessarily one whose name survives — who had a quality that you also carry, perhaps in a form your family has not always welcomed or understood. A particular form of perception. A creative drive. A capacity for fierce love. An inability to be fully content with less than truth. It was in them before it was in you. You are not alone in carrying it. They carried it before you, under harder conditions, and they are sending it forward as a gift.",
    colors: ["#78350f", "#d97706", "#d8b4fe"],
  },
  {
    id: "r182",
    title: "The Green Man Breathes",
    category: "spirit",
    shortText: "The vegetation deity returns in the season that needs him...",
    fullReading:
      "The Green Man — the foliate face that appears in church carvings, in medieval manuscripts, in temple architecture across cultures and centuries — is the spirit of vegetation, of the life force that moves through growing things, of the return of green after winter. He dies and is reborn with each turning of the year; his face emerging from leaves, his mouth sometimes open, sometimes filled with the very foliage that constitutes his nature. The spirit reading brings the Green Man forward in your life at a moment when the life force itself — not as metaphor but as the actual, felt quality of aliveness — is making its return after a period of dormancy. Something in you that was winter is becoming spring. The green is arriving. What will grow in you this season, if you prepare the ground and do not resist the turning?",
    colors: ["#065f46", "#34d399", "#d97706"],
  },
  {
    id: "r183",
    title: "The Goddess of the Threshold",
    category: "spirit",
    shortText: "She who guards the liminal offers a third way through...",
    fullReading:
      "In many traditions, the goddess of the threshold — Hecate, Brigid, Janus in his female aspect — holds the place between what was and what will be, the guardian not of one side or the other but of the crossing itself. She does not tell you which side to choose. She holds the light for you while you choose. And sometimes — most usefully — she reveals that the apparent binary is a false one, that what appears to be a choice between two options is actually the opportunity for a third thing that neither option contains alone. The spirit reading places you at a threshold that feels like a forced choice: this or that, here or there, stay or go. The goddess asks you to look again. The threshold itself — the in-between space, the both-and possibility, the thing that is neither and both — may be exactly where you need to stand for now.",
    colors: ["#0f172a", "#7c3aed", "#fbbf24"],
  },
  {
    id: "r184",
    title: "The Wild Hunt Passes",
    category: "spirit",
    shortText:
      "The spectral riders cross the sky — what they take is what was already dead...",
    fullReading:
      "The Wild Hunt — the supernatural host of riders that crosses the sky in the dark of winter in Germanic, Norse, and Celtic traditions, led variously by Wotan, Herne, or the figure of death itself — is a terrifying and purifying force. The hunt does not take the living. It takes what has already died, what has already ended, what is clinging to form past the point of vitality. It is the great clearing, the winter wind that takes the last dead leaves, the force that sweeps the landscape in preparation for spring. The spirit reading marks the Wild Hunt passing through your sky — through the accumulated dead wood of your inner life, the finished things, the completed chapters, the selves that are no longer current. Let it take what it comes for. It is not your life the Hunt is claiming. It is what you have been holding onto past the life.",
    colors: ["#0f172a", "#374151", "#fbbf24"],
  },
  {
    id: "r185",
    title: "The Speaking Stone",
    category: "spirit",
    shortText: "In the oldest tradition, the land itself has a voice...",
    fullReading:
      "In animist traditions across the world, the stone is not inert. It is among the oldest of beings, formed in conditions no living thing could survive, bearing the compressed memory of geological time in its mineral structure. Some stones speak — not in language, but in the way that pressure in the hand communicates, the way the temperature of a surface tells you something about what lies beneath. The spirit reading brings the speaking stone to your attention as a reminder that the non-human world is not mute, and that your capacity to listen to it has been systematically underdeveloped by a culture that has decided only language counts as communication. Something in your environment — a place, a material, a natural thing — has been trying to communicate something to you. Not through language. Through presence. Go to where it is. Be still. Listen with your body rather than your mind.",
    colors: ["#374151", "#78350f", "#e2e8f0"],
  },
  {
    id: "r186",
    title: "The Ancestor Altar Speaks",
    category: "spirit",
    shortText:
      "Where the offerings are placed, the relationship remains open...",
    fullReading:
      "In the West African derived traditions — Candomblé, Vodou, Ifá — and in countless other ancestral practices worldwide, the ancestor altar is the material location of the ongoing relationship with the dead. Objects, photographs, food, water, light: these offerings maintain the channel, signal respect, and invite the ancestor's continued presence and participation in the life of the living. The spirit reading asks whether you have a relationship with your ancestors — however informal, however private, however non-literal — that is actively tended. Not because the dead need offerings. Because the living need the conversation. The lineage you come from is the context in which your life is happening. The people who came before are not gone. They are the condition of possibility for your existence. Speak to them. Leave something out for them. The relationship, tended, tends you in return.",
    colors: ["#78350f", "#d97706", "#7c3aed"],
  },
  {
    id: "r187",
    title: "The Night Sea Journey",
    category: "spirit",
    shortText:
      "In the belly of the great fish, the hero becomes capable of the real task...",
    fullReading:
      "The night sea journey — the hero swallowed by the great fish, or drawn into the underworld, or plunged beneath the waters — is among the oldest and most universal of mythological motifs. Jonah in the whale. Inanna in the underworld. Osiris in the tomb. The hero does not go down willingly, as a rule. The hero is taken. And in the dark, in the digestion, something happens that could not happen anywhere else: a fundamental reorientation, a death of the former self that is also the gestation of the new one. The spirit reading marks you in the midst of such a journey. You have not been swallowed by failure. You have been taken for transformation. The night is not permanent. The fish will eventually vomit you up — changed, oriented differently, capable of the task that sent you there in the first place.",
    colors: ["#0f172a", "#1e3a8a", "#fbbf24"],
  },
  {
    id: "r188",
    title: "The Holy Wells Remember",
    category: "spirit",
    shortText:
      "The waters that rise from below carry the knowing of the deep earth...",
    fullReading:
      "In the Celtic tradition, holy wells were places where the underworld broke through into the surface world — where the waters that had percolated through rock for centuries emerged carrying the minerals and the memory of their long journey upward. They were places of healing, of oracle, of the specific gift that is given at the crossing point between worlds. Offerings were left at the well — strips of cloth tied to the hawthorn, coins thrown into the water — as an exchange, a recognition that what was received had cost something to give. The spirit reading brings the holy well's medicine to a source of knowing in your own life: the place in you where the deep water rises, where the unconscious breaks through into consciousness with something it has been preparing for a long time. You know where this place is. You have not been visiting it as regularly as it deserves.",
    colors: ["#1e3a8a", "#065f46", "#e2e8f0"],
  },
];

export function getReadingByColor(colorIndex: number): Reading {
  // Legacy function — kept for backwards compatibility
  // No longer used for actual selection
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
