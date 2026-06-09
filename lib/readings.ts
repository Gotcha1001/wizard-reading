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
