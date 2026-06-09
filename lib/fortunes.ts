export type Fortune = {
  id: string;
  title: string;
  category: "love" | "wealth" | "destiny" | "warning" | "blessing";
  shortText: string;
  fortune: string;
  omen: string;
  luckyElements: { number: number; color: string; symbol: string };
};

export const fortunes: Fortune[] = [
  // ── DESTINY ─────────────────────────────────────────────────────────────────
  {
    id: "f1",
    title: "A Door Ajar",
    category: "destiny",
    shortText: "The threads of fate converge on your path...",
    fortune:
      "An unexpected encounter within the next seven days will alter the landscape of your life in a way that seems small at first — a sentence, a glance, a name mentioned in passing. Do not dismiss the unremarkable. Fate's greatest movements often enter through the side door, wearing ordinary clothes. The stranger who sits beside you, the message you almost don't open, the wrong turn that takes you somewhere right — pay attention to these. One of them carries a key.",
    omen: "You will notice crows gathering in unusual numbers — this is a favorable sign. Do not shoo them away.",
    luckyElements: { number: 7, color: "Amethyst", symbol: "⚷" },
  },
  {
    id: "f6",
    title: "The Phoenix Thread",
    category: "destiny",
    shortText: "From ash, the great transformation begins...",
    fortune:
      "Something that seemed like an ending was secretly a becoming. The situation you've been mourning — the closed door, the lost opportunity, the relationship that unraveled — was not taken from you. It completed. There is a difference. Completion makes space. And in that space, something you could not have imagined is already beginning to form. The phoenix does not choose to burn — but it chooses what it becomes in the burning. What are you choosing to become? The answer you give in your quietest moments is shaping the world around you right now.",
    omen: "A bird flying directly toward you and then veering upward is the phoenix's signature — watch for it.",
    luckyElements: { number: 9, color: "Ember", symbol: "🔥" },
  },
  {
    id: "f7",
    title: "The Cartographer's Dream",
    category: "destiny",
    shortText: "Uncharted territories await your footsteps...",
    fortune:
      "You have been trying to follow a map drawn by someone else — their ambitions, their timeline, their definition of arrival. The stars are asking you to fold that map and put it away. The territory of your true life cannot be charted in advance; it is made by walking. A restlessness you've been feeling is not discontent — it is a compass. Trust the pull even when you cannot see the destination. The greatest journeys in human history began with someone who simply could not stay where they were.",
    omen: "A moth drawn to light in an unexpected place marks the first night your new direction becomes clear.",
    luckyElements: { number: 4, color: "Midnight Blue", symbol: "✦" },
  },
  {
    id: "f8",
    title: "The Hermit's Lantern",
    category: "destiny",
    shortText: "The light you seek has always been your own...",
    fortune:
      "You have walked a long road in search of wisdom that lives, it turns out, already inside you. This is not a disappointment — it is the most ancient and sacred discovery a soul can make. The teachers you've sought, the books you've devoured, the mentors you've hoped would reveal some secret: they were always just mirrors. What you recognised in them was your own reflection. The hermit carries a lantern not to light the path for others, but to illuminate what was always there. You are both the seeker and the sought.",
    omen: "A candle that burns without flickering in a breeze is a sign your inner knowing is strengthening.",
    luckyElements: { number: 9, color: "Ivory", symbol: "🕯" },
  },
  {
    id: "f9",
    title: "Crossing the Threshold",
    category: "destiny",
    shortText: "The old life ends where the new one breathes...",
    fortune:
      "Every mythology carries the same story: a hero who must leave the familiar world to find what they truly are. You are at that crossing now. It may not feel dramatic — most real thresholds don't. It may look like a quiet decision, an unanswered email you finally send, or a room you stop walking into. But the crossing is real. And once you have moved through it, you will not be the same person who stood at the edge. The life waiting on the other side has been waiting patiently for you. It is not impatient. It simply knows you are coming.",
    omen: "The first sunrise you witness after reading this will carry a particular colour — remember it. It is yours.",
    luckyElements: { number: 1, color: "Dawn Gold", symbol: "☀" },
  },
  {
    id: "f10",
    title: "The Loom and the Thread",
    category: "destiny",
    shortText: "The great weaving of your story is not yet done...",
    fortune:
      "The Fates do not cut threads carelessly. What feels like tangling is often the loom making something intricate — a pattern only visible from a distance. You are too close to your own story right now to see what is being made. Step back. Consider that the difficult chapters were not mistakes in the weaving but deliberate techniques: contrast, tension, depth. The tapestry of a life with no shadow has no dimension. Your shadows are making you three-dimensional, and the finished work will be extraordinary.",
    omen: "Seeing a spider weaving its web undisturbed is an omen of careful, beautiful creation — do not disturb it.",
    luckyElements: { number: 8, color: "Deep Violet", symbol: "⧖" },
  },
  {
    id: "f11",
    title: "The Astronomer's Vision",
    category: "destiny",
    shortText: "Your star has been charted in the heavens above...",
    fortune:
      "Ancient astronomers named each star not to possess it, but to speak of it — to say: this light has meaning, this light belongs to the story we are telling. You belong to a story larger than the one you can see from where you stand. A purpose has been moving toward you the way a tide moves toward a shore: unhurried, inevitable, shaped by forces that began long before you and will continue long after. You do not have to strain toward it. You have only to remain open, remain present, remain — recognisably — yourself.",
    omen: "A clear night where you can count more stars than usual is the sky confirming your place within it.",
    luckyElements: { number: 12, color: "Starlight", symbol: "★" },
  },
  {
    id: "f12",
    title: "The Serpent Sheds",
    category: "destiny",
    shortText: "What you are becoming requires what you leave behind...",
    fortune:
      "The serpent does not mourn its skin. It simply grows until the old covering no longer fits, and then it moves on — sleeker, more itself, unmarked by what it has shed. You have been in a growing season. Something in your life no longer fits: a role, a relationship, a story you tell about who you are. This is not loss. This is you becoming too alive for what once contained you. The shedding may be uncomfortable — it always is — but on the other side of it is a version of yourself that moves with far less friction through the world.",
    omen: "Finding a feather in an unusual place is a sign your transformation is already underway.",
    luckyElements: { number: 5, color: "Jade", symbol: "🐍" },
  },

  // ── WEALTH ──────────────────────────────────────────────────────────────────
  {
    id: "f2",
    title: "Coins of Light",
    category: "wealth",
    shortText: "Gold stirs in the river of your fortune...",
    fortune:
      "A financial shift approaches — not sudden wealth, but a slow rebalancing, like a scale finding its level. Something you invested in long ago — effort, study, a relationship, a creative seed — is about to yield. The universe does not forget what you planted. It simply has its own growing season. In the coming weeks, remain open to receiving: a compliment, an opportunity, an offer that doesn't look exactly like what you expected. Abundance rarely arrives in the shape we imagined.",
    omen: "Finding a coin in an unexpected place in the next three days confirms this fortune is moving toward you.",
    luckyElements: { number: 3, color: "Gold", symbol: "✦" },
  },
  {
    id: "f13",
    title: "The Merchant's Wind",
    category: "wealth",
    shortText: "Favourable currents carry your vessel to harbour...",
    fortune:
      "There is a difference between chasing wealth and allowing it. The merchant who reads the wind does not fight it — they set their sails to use it. A current is shifting in your favour now. It may arrive as an invitation you weren't expecting, a skill you underestimated, or a connection that turns out to be worth more than money. The stars advise: do not grasp. Present yourself clearly, do your work well, and trust that what you bring to the table has value even in rooms that haven't recognised it yet. They are about to.",
    omen: "The smell of rain on dry earth — petrichor — is an ancient omen of incoming abundance and fertile ground.",
    luckyElements: { number: 6, color: "Copper", symbol: "⚖" },
  },
  {
    id: "f14",
    title: "The Alchemist's Promise",
    category: "wealth",
    shortText: "Lead transmutes to gold in patient hands...",
    fortune:
      "Alchemy was never really about metal. It was about the transformation of the ordinary into the extraordinary through attention, patience, and understanding of hidden laws. You possess a raw material — a skill, an insight, an experience — that others would pay dearly for if it were properly refined and offered. The work now is not to chase new opportunities but to deepen your mastery of what you already hold. Specialisation is the alchemist's furnace. What you know better than almost anyone is your gold.",
    omen: "A dream involving fire that does not burn — only illuminates — is the alchemist's blessing upon your work.",
    luckyElements: { number: 8, color: "Burnished Gold", symbol: "⚗" },
  },
  {
    id: "f15",
    title: "The Buried Chest",
    category: "wealth",
    shortText: "Treasure waits where you ceased to look...",
    fortune:
      "Pirates buried their treasure not to lose it but to keep it safe until the right time. Something of great value to you — financial, creative, reputational — was set aside during a difficult period and nearly forgotten. It is still there. A project, a talent, a contact, a half-formed idea: whatever you shelved when life demanded too much. The stars are insisting it is time to dig. The 'right time' you were waiting for is not some future condition of perfect readiness. It is now, imperfect and ready enough.",
    omen: "Uncovering something you thought you'd lost — a key, a photo, a note — points to the buried treasure awaiting you.",
    luckyElements: { number: 10, color: "Ochre", symbol: "🗝" },
  },
  {
    id: "f16",
    title: "The River Does Not Hoard",
    category: "wealth",
    shortText: "Generosity opens the channels of return...",
    fortune:
      "The river that hoards its water becomes a swamp. The river that flows becomes a source of life, and is continually replenished. There is a law of reciprocity at work in your financial life right now, and it is asking you to consider where you have been holding back — not out of caution, but out of fear. A small, genuine act of generosity in the coming days will open a channel that has been blocked. This is not about grand gestures. It is about releasing your grip, even slightly, on what you've been clutching. Water knows how to find its own level.",
    omen: "The sound of running water — a stream, even a pipe — when you are worried about money is a sign of flow returning.",
    luckyElements: { number: 3, color: "Aquamarine", symbol: "≋" },
  },
  {
    id: "f17",
    title: "The Architect's Blueprint",
    category: "wealth",
    shortText: "What you build with intention shall stand...",
    fortune:
      "The most enduring structures are not built quickly. They are designed with care, assembled with skill, and tested by weather before they become shelters for others. You are in a building phase — and building phases are unglamorous. There is no ribbon-cutting yet, no applause. There is only the work: the laying of foundations, the sourcing of materials, the solving of problems that only arise once construction begins. Trust the blueprint you carry. The structure is sound. What you are building will outlast the doubt you feel while building it.",
    omen: "Seeing construction or renovation happening near you is the universe echoing your own building work.",
    luckyElements: { number: 4, color: "Stone Grey", symbol: "⬡" },
  },
  {
    id: "f18",
    title: "Seeds in Winter Ground",
    category: "wealth",
    shortText: "Patient roots reach deeper in the cold...",
    fortune:
      "There are seasons of dormancy that look, from the outside, indistinguishable from failure. Nothing is visible. Nothing seems to be happening. But underground, in the cold, the work continues: roots extending, nutrients gathering, strength accumulating. You may be in such a season now. The absence of visible results does not mean the absence of progress. What you are building in the unseen — the skills refined, the habits formed, the knowledge slowly integrated — is preparing something that will break the surface when the season turns. It always turns.",
    omen: "A plant in your home or nearby putting out an unexpected new shoot is a sign of your hidden growth surfacing.",
    luckyElements: { number: 2, color: "Forest Green", symbol: "🌱" },
  },

  // ── LOVE ────────────────────────────────────────────────────────────────────
  {
    id: "f3",
    title: "Hearts Entangled",
    category: "love",
    shortText: "Venus charts a course through your heart...",
    fortune:
      "The stars see a love story unfolding — and it is not necessarily with another person. First, there is a reconciliation required between you and your own heart. A part of you has been waiting for permission to want what it wants. That permission comes from no one but you. Once granted, a space opens — and spaces, the universe cannot help but fill. Whether this manifests as a new connection, a deepening of what already exists, or the first truly peaceful solitude you've known, it will feel like coming home.",
    omen: "The scent of something floral when there are no flowers nearby is your sign that this fortune is blessed.",
    luckyElements: { number: 2, color: "Rose Quartz", symbol: "♡" },
  },
  {
    id: "f19",
    title: "The Mirror Pool",
    category: "love",
    shortText: "Love shows you who you truly are...",
    fortune:
      "Every great love is also a mirror. The qualities you most admire in another — their courage, their warmth, their peculiar brilliance — are qualities you carry and may not yet see in yourself. The universe is not arbitrary in its attractions. You are drawn to the reflection of your own unlived potential. This can be unsettling. It can feel like yearning. But the invitation is this: instead of searching for someone who embodies what you love, begin embodying it yourself. The mirror will then show you something astonishing.",
    omen: "A reflection catching your eye unexpectedly — in water, glass, a polished surface — is the mirror's confirmation.",
    luckyElements: { number: 6, color: "Pearl", symbol: "◎" },
  },
  {
    id: "f20",
    title: "The Red Thread",
    category: "love",
    shortText: "An ancient bond pulls across the distance...",
    fortune:
      "The old legend says that those who are meant to find each other are connected by a red thread from birth — invisible, unbreakable, and never taut for long. It tangles sometimes. It stretches across years and continents and misunderstandings. But it does not break. If there is a person in your life — past or present — whose presence keeps returning to you in thought, in dreams, in the strange recurrence of their name in unrelated places: pay attention. The thread is pulling. Whether toward reunion, resolution, or simply the acknowledgment of something real — it is asking you not to ignore it.",
    omen: "Something red appearing unexpectedly in your field of vision three times in a single day confirms the thread is active.",
    luckyElements: { number: 8, color: "Crimson", symbol: "∞" },
  },
  {
    id: "f21",
    title: "After the Storm",
    category: "love",
    shortText: "The heart grows clearest in the aftermath...",
    fortune:
      "You have weathered something. A heartbreak, a misunderstanding, a long silence where warmth once lived. The stars do not celebrate your suffering — but they do see what it has made of you. You are softer in the places that once were defended. You are clearer about what you need. You are less willing to settle for love that doesn't actually see you. This is not hardness — it is discernment. And discernment is the compass that will bring you toward a love that matches the person you have become, not the person you were before the storm.",
    omen: "A double rainbow, or any rainbow appearing when you did not expect it, heralds the clearing after your storm.",
    luckyElements: { number: 7, color: "Blush", symbol: "🌈" },
  },
  {
    id: "f22",
    title: "The Language of Touch",
    category: "love",
    shortText: "Connection lives in the spaces between words...",
    fortune:
      "Not all love is spoken. The deepest bonds are often communicated in the unguarded moment: the way someone stands slightly closer than they need to, the glance that lingers a breath too long, the quiet that feels different from other quiets. You may have been waiting for a declaration when the declaration has already been made, repeatedly, in a language you haven't learned to read yet. Pay attention to what is given without fanfare. The person who shows up — practically, quietly, consistently — is telling you everything.",
    omen: "A butterfly landing on you or hovering near you is an old omen of tenderness and affection approaching.",
    luckyElements: { number: 5, color: "Soft Amber", symbol: "☯" },
  },
  {
    id: "f23",
    title: "The Garden and the Wall",
    category: "love",
    shortText: "The heart that opens finds it was a garden all along...",
    fortune:
      "There is a wall you built at some point — for excellent reasons, no doubt. It kept out what needed to be kept out. But walls, unlike fences, don't have gates, and somewhere in the keeping-out, the desired also stopped being let in. The stars see you beginning to notice the weight of the stone. What would it cost you to remove just one block? Not the whole wall — just one. To let one person see one true thing about you that you usually protect. This is how gardens begin: a single gap in the stone. Sunlight through a crack.",
    omen: "Finding something blooming where you didn't plant it — a weed-flower in a crack, moss on a stone — is the garden's promise.",
    luckyElements: { number: 4, color: "Sage Green", symbol: "♣" },
  },
  {
    id: "f24",
    title: "The Twin Flames",
    category: "love",
    shortText: "Two lights that recognise each other across time...",
    fortune:
      "There are people we meet and immediately feel the impossible familiarity of — as if the introduction were a formality both parties had forgotten was necessary. If you have met such a person, or sense one approaching, do not let the strangeness of the recognition make you retreat. The soul has a longer memory than the mind. What feels like acceleration is simply a relationship that has been preparing itself for this lifetime. The intensity is not a warning. It is a homecoming. Breathe into it rather than away from it.",
    omen: "Two flames from separate sources burning toward each other — candles, torches — is the ancient sign of twin recognition.",
    luckyElements: { number: 11, color: "Scarlet", symbol: "⚭" },
  },
  {
    id: "f25",
    title: "The Quiet Love",
    category: "love",
    shortText: "Still waters carry the deepest reflections...",
    fortune:
      "Not all love arrives in thunder. Some of the truest, most enduring loves are quiet ones — the kind that do not perform themselves for an audience, that do not require the drama of uncertainty to feel real. If you have been dismissing a steady, gentle presence in your life because it lacks the electricity of passion, reconsider. The electricity of early passion is a spark. What you're perhaps overlooking is a hearth — something that burns long and warm and reliably, something you can build an entire life beside without ever being cold.",
    omen: "A warm unexpected gust of air when you are indoors — as if from nowhere — is the quiet love announcing its presence.",
    luckyElements: { number: 2, color: "Warm Cream", symbol: "~" },
  },

  // ── WARNING ─────────────────────────────────────────────────────────────────
  {
    id: "f4",
    title: "The Watching Eye",
    category: "warning",
    shortText: "The spirits urge caution on the eastern wind...",
    fortune:
      "Not all fortunes are celebrations — some are lanterns held up to a crossroads. You stand at one now. A decision you have been postponing is beginning to make itself; if you do not choose, the path will narrow until only one remains. The warning is not of disaster but of a smaller tragedy: the life you settle for instead of the one you build. The spirits do not ask you to be fearless. They ask you to be afraid and go anyway. The courage required is not enormous — just enough to take the next single step.",
    omen: "Three consecutive nights of vivid dreams signals this message is urgent. Keep a record of what appears.",
    luckyElements: { number: 13, color: "Obsidian", symbol: "⚠" },
  },
  {
    id: "f26",
    title: "The Gilded Cage",
    category: "warning",
    shortText: "Beauty can be a prison if you do not examine it...",
    fortune:
      "There is something in your life that looks like a blessing but functions as a limitation — a comfortable situation that has quietly become a ceiling, a relationship that is pleasant enough to stay in but not nourishing enough to grow in, a role you are good at that prevents you from discovering what you might be great at. The gilded cage is the most insidious kind because the bars are beautiful and the captive has often forgotten they are a captive. The spirits ask you one question: where have you stopped imagining beyond what already exists?",
    omen: "A bird seen straining at a window but not finding its way out mirrors the situation the spirits are pointing to.",
    luckyElements: { number: 14, color: "Tarnished Gold", symbol: "⛓" },
  },
  {
    id: "f27",
    title: "The Second Voice",
    category: "warning",
    shortText: "Something whispers what the other voice does not want heard...",
    fortune:
      "You have been listening to the louder voice. The one that speaks in logic, in practicality, in the language of what other people will think. But there is a second voice — quieter, slower, older — that has been trying to reach you. It speaks in the language of unease: the hesitation before you say yes to something, the restlessness that arrives at three in the morning, the strange reluctance your body has to certain rooms or certain conversations. This second voice is not anxiety. It is intelligence. The spirits urge you to give it some of your attention before the louder voice commits you to something it cannot undo.",
    omen: "Waking suddenly in the night without cause is the second voice clearing its throat. Lie still and listen.",
    luckyElements: { number: 3, color: "Charcoal", symbol: "⊘" },
  },
  {
    id: "f28",
    title: "The Fraying Rope",
    category: "warning",
    shortText: "What stretches without rest will one day break...",
    fortune:
      "You have been holding too many things for too long and the rope — your energy, your patience, your sense of self — is beginning to show the strain. This is not a weakness. This is a structural warning that an engineer would take seriously. The spirits are not judging your capacity; they are noticing that you have been using it without replenishment. What was the last thing you did that had no purpose other than restoring you? If you cannot answer, that is the answer. The most urgent thing on your list is rest. Everything else will be more possible after.",
    omen: "Something in your environment breaking unexpectedly — a thread, a clasp, a handle — is the physical echo of this warning.",
    luckyElements: { number: 0, color: "Slate", symbol: "∅" },
  },
  {
    id: "f29",
    title: "The False Map",
    category: "warning",
    shortText: "The path drawn by another does not lead to your destination...",
    fortune:
      "You have been following instructions that were written for someone else's life. The map was given to you with love, or with authority, or simply by default — the path that was laid out before you arrived and which you stepped onto without really deciding to. But maps written for one terrain cannot navigate another. You have been feeling the mismatch as a vague sense that you are working very hard and arriving somewhere you don't recognise. The spirits are not saying the instructions were wrong — only that they are wrong for you. Permission granted to draw your own.",
    omen: "Getting lost — physically, even briefly — is the universe making the metaphor literal. Notice where you end up.",
    luckyElements: { number: 6, color: "Rust", symbol: "⊗" },
  },
  {
    id: "f30",
    title: "The Borrowed Face",
    category: "warning",
    shortText: "The mask fits so well you have forgotten it is a mask...",
    fortune:
      "Somewhere along the way — in childhood, in a relationship, in a profession — you adopted a version of yourself that was built for a particular environment. It was useful. It may have saved you. But you are no longer in that environment, and the face you borrowed to survive it has stayed on so long it has started to feel like your original. The spirits see the person behind the performance, and they are asking: when did you last let them out? Not the edited version, not the managed version — but the actual one. They miss you. And someone who will truly love you is waiting to meet them.",
    omen: "Catching your own gaze in a mirror and not immediately looking away is the first crack in the borrowed face.",
    luckyElements: { number: 7, color: "Smoke", symbol: "◈" },
  },
  {
    id: "f31",
    title: "The Unanswered Letter",
    category: "warning",
    shortText: "Silence given too long becomes a kind of answer...",
    fortune:
      "There is something you have been meaning to address — a conversation postponed, an apology withheld, a truth left unspoken in a relationship that needs it. The spirits understand the difficulty. Some truths cost something to say. But consider the cost of the silence: the growing distance, the resentment that deposits itself in the unsaid, the relationship that slowly becomes a performance because the real conversation never happened. You are not being asked to be brutal. You are being asked to be brave enough to begin. The person on the other side of this silence is also waiting.",
    omen: "An old letter, message, or photograph surfacing unexpectedly is the universe handing you the pen.",
    luckyElements: { number: 5, color: "Faded Ink", symbol: "✉" },
  },

  // ── BLESSING ─────────────────────────────────────────────────────────────────
  {
    id: "f5",
    title: "Blessing of the Moon",
    category: "blessing",
    shortText: "Silver moonlight bathes your spirit in grace...",
    fortune:
      "You have been carrying more than your share, and the spirits see it. This fortune brings a specific blessing: release. Something you have been holding — a guilt, a grief, a version of yourself you've outgrown — is ready to be laid down. The moon's light is not just illumination; tonight it is permission. You are allowed to stop explaining yourself. You are allowed to be different than you were. The blessing moves through water: stand in rain, drink deeply, sit beside a stream. Let it carry away what is no longer yours to hold.",
    omen: "A full moon appearing larger than usual within the next cycle is the blessing's confirmation.",
    luckyElements: { number: 11, color: "Silver", symbol: "☽" },
  },
  {
    id: "f32",
    title: "The Healer's Touch",
    category: "blessing",
    shortText: "Ancient medicine flows through your lineage...",
    fortune:
      "There is a gift in your hands that you may not have named. Not necessarily literal healing — though perhaps that too — but the capacity to make things better: to walk into a difficult room and ease something, to say the thing that unknots a situation, to offer a presence that is genuinely nourishing to those who receive it. This is not a small thing. The world is in perpetual need of it. The blessing being offered now is the recognition of this gift — and the invitation to use it without apology, without minimising it, and without waiting for external validation to confirm what your hands have always known.",
    omen: "Something hurt finding its way to you — an injured animal, a distressed stranger who opens up unexpectedly — is the gift declaring itself.",
    luckyElements: { number: 5, color: "Sage", symbol: "✚" },
  },
  {
    id: "f33",
    title: "The Ancestor's Hand",
    category: "blessing",
    shortText: "Those who came before lend you their strength...",
    fortune:
      "You did not arrive in this life empty. You carry in your blood the accumulated resilience of every person who came before you — every ancestor who endured, who adapted, who found a way forward through circumstances that would have unmade a lesser spirit. When you feel depleted, when you feel alone in your difficulty, you are permitted to reach backward through time and borrow their strength. It is yours by inheritance. Light a candle. Say a name if you know one. The blessing of lineage flows forward through you, and it has been waiting for you to remember it.",
    omen: "An unexpected memory of someone who has passed — vivid, warm, unbidden — is them reaching forward to remind you.",
    luckyElements: { number: 4, color: "Earth Brown", symbol: "⌂" },
  },
  {
    id: "f34",
    title: "The Song Remembered",
    category: "blessing",
    shortText: "A melody returns that your soul has always known...",
    fortune:
      "There is a version of you that exists entirely outside of productivity, usefulness, and the performance of having your life together. This version of you simply is — curious, playful, enchanted by the world, capable of joy that requires no justification. You may have lost touch with this part of yourself in the serious business of becoming a functional adult. The blessing being offered now is a doorway back. It may come through music, through a memory, through a moment of unexpected delight. When it comes, do not dismiss it as trivial. This is the part of you that keeps the whole enterprise worth having.",
    omen: "Hearing a song unexpectedly that takes you back to a happy time is the blessing opening its first door.",
    luckyElements: { number: 3, color: "Violet", symbol: "♪" },
  },
  {
    id: "f35",
    title: "Grace in the Ordinary",
    category: "blessing",
    shortText: "The sacred moves through the everyday unseen...",
    fortune:
      "Mystics across centuries have described the same experience: the sudden perception of the extraordinary inside the ordinary. The light through a window becoming unbearably beautiful. The face of a stranger briefly luminous. A cup of tea that tastes, for one impossible moment, like proof that existence is kind. These are not hallucinations. They are moments when the veil thins. The blessing of this reading is an invitation to notice: to move through your coming days with the attention of someone who suspects — correctly — that grace is hiding in plain sight everywhere.",
    omen: "A moment of inexplicable gratitude — for no specific thing — is the grace making itself briefly visible.",
    luckyElements: { number: 1, color: "Clear Light", symbol: "✧" },
  },
  {
    id: "f36",
    title: "The Scholar's Reward",
    category: "blessing",
    shortText: "All that you have studied begins now to bloom...",
    fortune:
      "Learning has a strange economy: the return on investment rarely comes when expected. You study, you practise, you absorb — and then nothing visible happens for what can seem like a very long time. And then, suddenly, you find yourself knowing things you don't remember learning, moving through a problem with a fluency that surprises even you. This is the blessing being delivered now: a blooming of competence that was always coming, rooted in all the diligent and patient work you did when no one was watching. What you know is worth more than you currently charge for it. Begin to adjust.",
    omen: "Being asked for advice in an area where you doubted your own expertise is the world confirming your readiness.",
    luckyElements: { number: 8, color: "Indigo", symbol: "◉" },
  },
  {
    id: "f37",
    title: "The Open Hand",
    category: "blessing",
    shortText: "What you receive now was always meant for you...",
    fortune:
      "Practice receiving. This is the instruction that arrives with this blessing — because for some souls, receiving gracefully is harder than giving. You may have learned to need nothing, to appear self-sufficient, to deflect kindness with a joke or a quick return gesture. The universe is offering you something now that you have earned — recognition, love, support, a break. And it would like you to accept it, without immediately giving it back, without shrinking from it, without feeling you haven't done enough to deserve it. Open your hands. The blessing is already falling into them.",
    omen: "Someone doing you an unexpected kindness without being asked is the open hand of this blessing made physical.",
    luckyElements: { number: 9, color: "Warm Gold", symbol: "✋" },
  },
  {
    id: "f38",
    title: "The Pilgrim's Rest",
    category: "blessing",
    shortText: "You have arrived, even if you do not yet know it...",
    fortune:
      "You have been walking for a long time. The journey has been longer than you planned for, rougher in places than you were prepared for, and there have been stretches where you could not see the path and simply moved by faith. The spirits want you to know: you have arrived at something. Not the final destination — the road is long — but a resting place that you have genuinely earned. Allow yourself to stop here, briefly, without immediately looking toward the next leg of the journey. Sit down. Look back at what you have crossed. It is considerable, and it is yours.",
    omen: "An unexpected comfort — a seat appearing when you are tired, shelter from unexpected rain — is the resting place announcing itself.",
    luckyElements: { number: 10, color: "Ochre Dusk", symbol: "⌾" },
  },
  {
    id: "f39",
    title: "Waters of Remembrance",
    category: "blessing",
    shortText: "The deep wells of your soul are full...",
    fortune:
      "There is a vitality in you that has not been touched by the difficulties of the past years — a deep reserve that the surface weather of life cannot reach. The spirits are blessing you with the remembrance of this. When you feel emptied, when you feel ground down, there is a place below all of it that is still whole. You have always been able to find it, though sometimes it takes stillness to reach it. Drink from it. It replenishes those who drink, and it has been waiting patiently for you to come down to its level and rest at its edge.",
    omen: "The sight of still, clear water — a lake surface, a filled glass in particular light — is the blessing reflecting itself back at you.",
    luckyElements: { number: 6, color: "Deep Blue", symbol: "⊹" },
  },
  {
    id: "f40",
    title: "The Unexpected Teacher",
    category: "blessing",
    shortText: "Wisdom arrives in the form you least expected...",
    fortune:
      "The most important lessons of your life have not come from the places you went looking for wisdom. They came from a conversation overheard, from a failure that taught what success couldn't, from a child's question that broke open a complexity you'd been carrying for years. This blessing announces the arrival of an unexpected teacher — a person, an event, an animal, a dream — who carries something you have been needing to understand. Your only task is to remain humble enough to recognise the lesson when it arrives, regardless of how it is dressed.",
    omen: "An animal crossing your path and pausing to look directly at you is one of the oldest forms of unexpected teaching.",
    luckyElements: { number: 7, color: "Teal", symbol: "◬" },
  },
  {
    id: "f41",
    title: "The First Light",
    category: "blessing",
    shortText: "Before the sun rises, it is already on its way...",
    fortune:
      "Hope, properly understood, is not an emotion. It is a practice — the daily decision to orient toward the possibility of good even when the evidence is mixed. What you have been through would have extinguished hope in a less tenacious spirit. That yours persists is itself a form of grace. And the blessing being delivered now is this: the thing you have been hoping for — in its truest, deepest form, beneath whatever specific shape you've given it — is not a fantasy. It is a direction. Keep moving in it. The first light is not yet visible, but the darkness is already changing.",
    omen: "Waking just before sunrise, even once, and witnessing the sky's change is the blessing marking itself in memory.",
    luckyElements: { number: 1, color: "Pale Gold", symbol: "☀" },
  },

  // ── ADDITIONAL DESTINY ──────────────────────────────────────────────────────
  {
    id: "f42",
    title: "The Tide Caller",
    category: "destiny",
    shortText:
      "You have more influence over your circumstances than you believe...",
    fortune:
      "The tide cannot be commanded, but it can be read. And the person who reads it well never fights it — they time their movements to its rhythm, so that the same force that swamps those who misunderstand it carries them, effortlessly, where they need to go. You have been exhausting yourself fighting conditions that cannot be forced. There is a rhythm available to you, if you are willing to observe rather than push. What is naturally moving in your life right now? Go with it. What is naturally receding? Let it go. The tide caller doesn't work harder — they work in time.",
    omen: "Any encounter with the sea, a river, or even a significant rainfall carries a particular message for you at this time.",
    luckyElements: { number: 7, color: "Ocean Blue", symbol: "〰" },
  },
  {
    id: "f43",
    title: "The Unfinished Manuscript",
    category: "destiny",
    shortText: "The story of your life has many pages still unwritten...",
    fortune:
      "You have been reading the book of your life from the wrong chapter — returning again and again to the difficult pages, the ones with the most ink damage, the margin notes in someone else's hand. But you are not required to live in those chapters. You are the author. The blank pages ahead are not a void — they are possibility, which is the rarest substance in the universe. What would you write there, if you remembered you were the one holding the pen? The spirits invite you to begin the next sentence without waiting to know how the chapter ends.",
    omen: "Finding a pen or pencil where you don't expect one is the manuscript putting itself in your hand.",
    luckyElements: { number: 3, color: "Ink Black", symbol: "✒" },
  },
  {
    id: "f44",
    title: "The Bridge Builder",
    category: "destiny",
    shortText: "You were made to connect what has been divided...",
    fortune:
      "Some people are born with the rare gift of standing between worlds — between generations, between disciplines, between people who cannot speak the same language. You are one of them. You have experienced it as a kind of loneliness, this in-between position; belonging fully to neither side of the divide you bridge. But this is your purpose taking shape. The bridge that spans the most difficult crossing is the one with the most value. You are not between things. You are the connection itself — and connections, in a fragmented world, are sacred work.",
    omen: "Crossing any bridge — on foot, in a vehicle — while thinking about this fortune is an act of claiming your nature.",
    luckyElements: { number: 5, color: "Sandstone", symbol: "⌀" },
  },
  {
    id: "f45",
    title: "The Star That Guides",
    category: "destiny",
    shortText:
      "There is a fixed point by which all your navigation is possible...",
    fortune:
      "Ancient navigators did not know the whole map. They knew one reliable light in the sky and they knew how to use it. That was enough to cross oceans. You have such a point in your life — a value, a person, a vision of who you want to be — that is as fixed and reliable as any north star. When you have felt most lost, it was not because the star had moved, but because clouds obscured your view of it. The skies are clearing. Reorient. Take your bearings from what has always been true about you, and the path will become navigable again, step by step, night by night.",
    omen: "The first star visible after sunset on any evening this week carries your name. Look for it deliberately.",
    luckyElements: { number: 5, color: "White Gold", symbol: "✵" },
  },
  {
    id: "f46",
    title: "The Gardener of Souls",
    category: "destiny",
    shortText: "What grows near you grows toward the light...",
    fortune:
      "There are those who, simply by being themselves, create conditions in which others flourish. You are one of these rare gardeners of spirit. You may not be aware of the extent of your effect — the person who made a different choice because of a conversation with you, the one who stayed when they were about to leave because your presence made the place feel worth staying in. This is not manipulation or performance. It is what happens when someone brings genuine warmth and genuine interest to every room. Your destiny is inseparable from the growth of those around you.",
    omen: "A plant thriving unexpectedly in your care is the universe showing you your own effect in miniature.",
    luckyElements: { number: 6, color: "Moss Green", symbol: "✿" },
  },

  // ── ADDITIONAL LOVE ─────────────────────────────────────────────────────────
  {
    id: "f47",
    title: "The Patient Star",
    category: "love",
    shortText: "Love that waits without expectation is the rarest kind...",
    fortune:
      "There is someone in your life who has been quietly, consistently, without drama or ultimatum, waiting. Not waiting in the passive sense, not waiting in resentment — but carrying a kind of steady warmth in your direction that does not require you to receive it in order to continue. You may have been too preoccupied with louder feelings to notice. The spirits are drawing your attention gently to this. Not because you owe anyone anything, but because the thing you might be searching for in complicated places may be sitting calmly, patiently, in a place you have overlooked.",
    omen: "A star that appears to hold its position in the sky while others wheel around it — the North Star, or any fixed point — is the omen here.",
    luckyElements: { number: 9, color: "Candlelight", symbol: "✦" },
  },
  {
    id: "f48",
    title: "The Return",
    category: "love",
    shortText: "What was lost finds its way home across the dark...",
    fortune:
      "The salmon returns to its birth river. The migrating bird returns to its nesting ground. There is in nature an extraordinary drive toward return — and it operates in the heart as surely as it does in the wild. Something or someone that was once significant to you — a friendship, a love, a version of yourself you left behind in an earlier chapter — is asking to be let back in. The spirits do not say whether this is wise in every case. But they ask you to consider: is the door you are keeping closed serving you, or is it protecting an old wound that has already healed?",
    omen: "A bird or animal returning to the same spot near you, day after day, is the pattern of return pointing to your own situation.",
    luckyElements: { number: 4, color: "Heather", symbol: "↩" },
  },

  // ── ADDITIONAL WARNING ──────────────────────────────────────────────────────
  {
    id: "f49",
    title: "The Sleeping Volcano",
    category: "warning",
    shortText: "Long patience has its own point of rupture...",
    fortune:
      "You have been managing, containing, and redirecting a feeling that has been building for a long time. This is not a criticism — there are seasons when endurance is the only available response, and you have endured magnificently. But the spirits observe that the pressure has not diminished; it has accumulated. Volcanoes that erupt are not malfunctioning. They are releasing what the earth cannot indefinitely contain. You are being gently warned: find a safe and chosen form for what you are carrying before it finds its own form. A letter never sent. A run. A conversation with someone who can hold it.",
    omen: "Ground that vibrates unexpectedly, or a low sound with no visible source, is the sleeping volcano's early signal.",
    luckyElements: { number: 8, color: "Ember Red", symbol: "△" },
  },
  {
    id: "f50",
    title: "The Comfortable Lie",
    category: "warning",
    shortText: "The story that soothes is not always the story that serves...",
    fortune:
      "There is a narrative you have been living inside that makes things feel manageable — a story about why things are the way they are, about what you're capable of, about what is and isn't possible for a person like you. This story has been kind to you in some ways: it has kept the anxiety at a distance, kept the discomfort contained. But it has also been keeping you small. The spirits are not here to destroy your peace. They are here to ask, gently: what if the story is not quite true? What would change, if the one limitation you've accepted turned out to be something you put there yourself?",
    omen: "A mirror giving you a reflection you don't immediately recognise as yourself is the comfortable lie loosening.",
    luckyElements: { number: 2, color: "Pewter", symbol: "⁂" },
  },

  // ── ADDITIONAL WEALTH ───────────────────────────────────────────────────────
  {
    id: "f51",
    title: "The Night Market",
    category: "wealth",
    shortText: "Opportunity does not always present itself in daylight...",
    fortune:
      "Some of the most extraordinary transactions in history happened after dark, in unlit rooms, between people who had the courage to deal in things that hadn't yet been named. The opportunity approaching you may not look, at first, like an opportunity. It may look like a problem, a detour, an unexpected demand that seems to be taking you off course. The spirits are asking you to look again. The night market is not less real than the day market. What is being offered — in the form that requires the most imagination to recognise as an offer — may be the transaction that changes everything.",
    omen: "Any significant encounter or exchange that happens after your usual hours, in unfamiliar company, should be examined carefully.",
    luckyElements: { number: 7, color: "Jet Black", symbol: "☽" },
  },
  {
    id: "f52",
    title: "The Inheritance",
    category: "wealth",
    shortText:
      "What was passed down to you holds more value than you've counted...",
    fortune:
      "Inheritance is not only money. It is knowledge, it is method, it is the particular way of seeing that was shaped by your family, your culture, your specific experience of difficulty and beauty. You carry an inheritance that has not yet been properly inventoried. Somewhere in what you take for granted — the skills that feel ordinary because you grew up with them, the understanding you assume everyone shares — is something rare. The world will pay for what is rare. Begin the inventory. What do you know that others do not? What can you do that others find difficult? There is your estate.",
    omen: "An object from your childhood or family history surfacing unexpectedly is the inheritance asking to be recognised.",
    luckyElements: { number: 12, color: "Mahogany", symbol: "⊕" },
  },
  {
    id: "f53",
    title: "The Clockmaker's Gift",
    category: "destiny",
    shortText: "Every second is a mechanism in your favour...",
    fortune:
      "There is a clockmaker's logic to your life that you cannot see while standing inside it. Each delay, each detour, each moment that arrived too early or too late — none of it was arbitrary. The mechanism was adjusting. What felt like loss of time was the spring being wound tighter. A release is coming. And when it comes, you will look back at the pauses with the recognition that precision was at work all along. Your timing has never been broken. It has been, in every instance, exact.",
    omen: "An old clock beginning to work again — or any clock stopped and then restarted — confirms the mechanism is yours.",
    luckyElements: { number: 6, color: "Burnished Brass", symbol: "⌚" },
  },
  {
    id: "f54",
    title: "The Tidal Cave",
    category: "destiny",
    shortText: "The deepest places reveal themselves only at low tide...",
    fortune:
      "There are truths about yourself that only become visible when everything else has receded. The busyness, the noise, the constant forward motion — these are the tide that covers the cave. In the quiet that has been approaching you — or the quiet you have been avoiding — something significant waits to be seen. The spirits do not promise it will be comfortable. They promise it will be true. And the truest thing about you, when finally seen, turns out to be far more solid ground than the performance of a self that you have been standing on.",
    omen: "Any moment of sudden, unexpected quiet — a power outage, a cancelled plan — is the tide going out. Use it.",
    luckyElements: { number: 3, color: "Slate Blue", symbol: "〰" },
  },
  {
    id: "f55",
    title: "The Wanderer's Return",
    category: "destiny",
    shortText: "Every great journey curves back toward its origin...",
    fortune:
      "The hero's journey is not a straight line. It is a circle — or more precisely, a spiral. You return to where you began, but higher. What you could not see in the place of your origin when you left it, you will now see with new eyes. This may be literal: a return to a city, a family, a field of work you left behind. Or it may be internal: a return to something you believed before the world complicated your beliefs. The wanderer who returns is never the same person who departed. That asymmetry is the entire point.",
    omen: "Bumping into someone from a much earlier chapter of your life is the spiral declaring itself.",
    luckyElements: { number: 9, color: "Warm Terra", symbol: "↩" },
  },
  {
    id: "f56",
    title: "The Unlit Room",
    category: "destiny",
    shortText: "What waits in darkness is not threat but gift...",
    fortune:
      "You have been avoiding a part of yourself — a capacity, a truth, an aspect of your nature that you have kept in the dark room of the self because you did not know what to do with it. The spirits have been noticing its presence through the locked door: the way it makes itself felt in your interests, your dreams, your automatic reactions to certain kinds of beauty or certain kinds of pain. The time has come to open the door. Not to fix what is inside. Simply to acknowledge it. The light you carry is sufficient. What you find will not unmake you. It will complete you.",
    omen: "A room in a dream that you have not been in before is the door announcing it is ready to be opened.",
    luckyElements: { number: 0, color: "Deep Indigo", symbol: "⌀" },
  },
  {
    id: "f57",
    title: "The Sculptor's Eye",
    category: "destiny",
    shortText: "The finished form already exists inside the stone...",
    fortune:
      "Michelangelo claimed he did not create figures — he removed the marble that was hiding them. The shape was already there, waiting. This is the nature of your own becoming: not the construction of something new from nothing, but the patient removal of everything that was never truly you. The misaligned expectations, the borrowed identities, the protective coverings that were necessary once and have since become constricting — these are the marble. The figure emerging from their removal is not a stranger. It is the most recognisable version of you that has ever existed.",
    omen: "Seeing a piece of unfinished sculpture or carving — in any medium — is the Sculptor's invitation to your own work.",
    luckyElements: { number: 5, color: "White Marble", symbol: "◇" },
  },
  {
    id: "f58",
    title: "The Wind Rose",
    category: "destiny",
    shortText: "All directions lead somewhere. Only one leads home...",
    fortune:
      "You have been considering too many directions at once, and the result has been paralysis dressed as patience. A wind rose shows all the possible directions — but the sailor must choose one and commit the sail to it. The spirits are not telling you which direction is correct; they are saying that movement in almost any aligned direction is better than the motionless contemplation of all directions at once. You know more than you are admitting. The hesitation is not uncertainty — it is the last moment before the commitment that changes things. Commit.",
    omen: "Wind from an unexpected direction on a still day is the rose spinning to point you somewhere specific.",
    luckyElements: { number: 1, color: "Sky Blue", symbol: "✦" },
  },
  {
    id: "f59",
    title: "The Night Crossing",
    category: "destiny",
    shortText: "What is crossed in darkness is crossed for good...",
    fortune:
      "There are crossings that can only happen in the dark — when you cannot see the far shore, when there is no proof that the boat holds, when the only reason to keep rowing is that turning back is no longer the answer. You are in the middle of one of these crossings now. The spirits want you to know: the far shore exists. It is not visible from here. That is the nature of this particular crossing. The darkness is not a sign that you are lost; it is the condition of a crossing that requires trust rather than evidence. Row. You are closer than it feels.",
    omen: "A light appearing where there was darkness — a lamp in a window, a phone screen in a crowd — is the far shore signalling.",
    luckyElements: { number: 12, color: "Midnight Silver", symbol: "☽" },
  },

  // ── ADDITIONAL WEALTH ───────────────────────────────────────────────────────
  {
    id: "f60",
    title: "The Glassblower's Breath",
    category: "wealth",
    shortText: "Shape your resources while they are still molten...",
    fortune:
      "Glass cannot be shaped once it has cooled. The glassblower knows they have seconds in which the material is responsive — after that, it is fixed. There is a window of similar responsiveness in your financial life right now. A resource — time, money, a relationship, an opportunity — is in its molten state, open to being shaped. The spirits urge you not to wait for it to solidify before you decide what form you want it to take. The decisions made in the molten moment determine the object. Begin shaping, even if imperfectly. You can refine the form; you cannot reheat the glass.",
    omen: "Watching fire — a candle, a hearth, a bonfire — and feeling something clarify is the glass beginning to move.",
    luckyElements: { number: 4, color: "Blown Glass Blue", symbol: "◎" },
  },
  {
    id: "f61",
    title: "The Waystation",
    category: "wealth",
    shortText: "Not all value arrives at the final destination...",
    fortune:
      "You have been measuring your financial progress against the final destination only, and finding the journey disappointing. But waystations have their own economy. What you are building, learning, and connecting in this in-between period has independent value that is not visible in the ledger of the destination. A skill refined here will be worth more there. A relationship cultivated now will open a door later. A practice established in scarcity will compound in abundance. The waystation is not a delay. It is part of the journey's value, and it is teaching you things that could not be taught at the destination.",
    omen: "Any place you stop unexpectedly — a delay, a detour, an unplanned rest — holds something worth noticing.",
    luckyElements: { number: 6, color: "Amber Dusk", symbol: "⌂" },
  },
  {
    id: "f62",
    title: "The Orchard Keeper",
    category: "wealth",
    shortText: "Tended things give what untended things cannot...",
    fortune:
      "An orchard kept well produces more than the wild fruit tree, not because the keeper added something unnatural, but because they removed what competed, supported what was weak, and pruned what was taking energy from the fruit. What in your financial life needs this kind of tending? Not the addition of new ventures before the current ones have reached their potential, but the quiet, methodical work of removing what is consuming resources without yielding them. Pruning is not failure. It is the orchard keeper's most important act.",
    omen: "The sight of a well-kept garden or orchard — anything growing under deliberate care — is the keeper handing you the shears.",
    luckyElements: { number: 8, color: "Apple Green", symbol: "✿" },
  },
  {
    id: "f63",
    title: "The Stone in the River",
    category: "wealth",
    shortText: "Persistence shapes what force alone cannot...",
    fortune:
      "The river does not force its way through the stone. It outlasts it. Over years, decades, centuries, the patient consistent movement of water achieves what no single powerful surge could manage — not because the water is stronger than the stone, but because the water never stops. Your financial life may currently feel like you are pressing against something unyielding. The message is not to press harder. It is to keep moving, consistently, with the small flows: the steady saving, the regular offering of your work, the patient maintenance of your position. The stone will give.",
    omen: "The sound of running water — particularly over rocks — is the river offering its counsel directly.",
    luckyElements: { number: 7, color: "River Stone", symbol: "≋" },
  },
  {
    id: "f64",
    title: "The Empty Bowl",
    category: "wealth",
    shortText: "What is emptied is first made ready to receive...",
    fortune:
      "There is a practice in certain traditions: holding out an empty bowl as both prayer and practical act — the acknowledgment that abundance requires a vessel prepared to receive it. You may have been holding a bowl that is not quite empty: half-filled with the residue of old financial beliefs, inherited stories about what money means or what you deserve. The spirits are not asking you to demand abundance. They are asking you to examine the bowl. What old beliefs are taking up space in it? What you release from the bowl creates the capacity that the new can fill.",
    omen: "Any empty container that catches your eye — a bowl, a cup, an open box — is pointing to the vessel asking to be cleared.",
    luckyElements: { number: 0, color: "Pale Clay", symbol: "∅" },
  },
  {
    id: "f65",
    title: "The Lamplighter's Route",
    category: "wealth",
    shortText: "Each light you kindle brightens the return path...",
    fortune:
      "The lamplighter did not only illuminate the path for others. The lit street also meant they could find their way home. Your current acts of professional generosity — the knowledge shared, the introduction made, the recommendation given — are doing double work. They are creating light for others, yes. But that light is also visible from a long way off, and it marks you as someone worth seeking. The economic return on genuine generosity is not immediate and it is not guaranteed, but over time and across a career, it is among the most reliable returns available. Keep lighting.",
    omen: "Street lights flickering on at dusk — or any lamp kindling — is the route confirming it will lead you home.",
    luckyElements: { number: 3, color: "Lamp Gold", symbol: "✧" },
  },

  // ── ADDITIONAL LOVE ─────────────────────────────────────────────────────────
  {
    id: "f66",
    title: "The Untranslatable Word",
    category: "love",
    shortText: "Some feelings exceed the language built to hold them...",
    fortune:
      "Every language has words that cannot be translated — feelings so specific that only the culture that named them fully understood they existed. What you are feeling for someone in your life right now may be one of these: too particular, too layered, too true to fit inside the standard vocabulary. The spirits see this complexity and they are not asking you to simplify it into a word that doesn't fit. But they are asking you to find some way to let the other person know the word exists, even if neither of you can translate it. The attempt at expression is itself an act of love.",
    omen: "Hearing a piece of music that expresses something you cannot name is the feeling declaring itself in a different tongue.",
    luckyElements: { number: 7, color: "Rose Gold", symbol: "♡" },
  },
  {
    id: "f67",
    title: "The Beekeeper's Patience",
    category: "love",
    shortText: "What is sweet is also defended — approach with care...",
    fortune:
      "The beekeeper approaches the hive not with force but with smoke and patience and the understanding that the bees are not hostile — they are protective of something precious. Someone in your life carries a sweetness that is guarded by exactly this kind of self-protective energy. They will not open to pressure. They will not be persuaded by argument. What will work — if anything will — is the consistent, unhurried presence of someone who clearly means no harm. The spirits are advising patience so specific it almost feels like a skill. It is.",
    omen: "Any encounter with bees or honey — the sight, the taste, the sound — is the hive indicating whether to approach.",
    luckyElements: { number: 5, color: "Honey Gold", symbol: "⬡" },
  },
  {
    id: "f68",
    title: "The Stone Soup",
    category: "love",
    shortText: "What each brings transforms what is possible together...",
    fortune:
      "The old story: a stone in a pot, a fire lit, and slowly the neighbours come to see, and each brings something — a carrot, an onion, a handful of barley — and what began as nothing becomes enough for all. This is what genuine partnership does. It is not about finding someone who completes what you lack; it is about creating something neither of you could make alone. The question the spirits are putting before you is: in the important relationships of your life, are you still each bringing something to the pot? And is the fire still lit?",
    omen: "Sharing a meal with someone — especially an improvised or unexpected one — carries the stone soup's blessing.",
    luckyElements: { number: 4, color: "Earthen Red", symbol: "∞" },
  },
  {
    id: "f69",
    title: "The Lighthouse and the Ship",
    category: "love",
    shortText: "Some loves guide without going anywhere themselves...",
    fortune:
      "Not every love is meant to be a journey shared. Some loves are lighthouses — fixed, luminous, essential — that allow you to find your way through difficult waters without coming aboard. A person who has loved you from a steady position, whose presence in your life has oriented you more than you have acknowledged: the spirits are asking you to see them. Not necessarily to change the nature of the relationship. But to recognise what you have been navigating by, and to let them know the light has not gone unnoticed.",
    omen: "Any fixed light visible from a distance — a tower, a lamp in a window — is the lighthouse returning your gaze.",
    luckyElements: { number: 11, color: "Beacon White", symbol: "★" },
  },
  {
    id: "f70",
    title: "The First Thaw",
    category: "love",
    shortText: "After the long cold, the earth remembers how to soften...",
    fortune:
      "You have been in a cold season of the heart. Something — a loss, a betrayal, a gradual accumulation of disappointments — lowered the temperature until feeling safely less seemed preferable to feeling openly more. The spirits do not rush the thaw. They know it happens in its own time, from the inside out. But they are noting: the season is changing. A small warmth has arrived — in a conversation, in a moment of unexpected connection, in the return of something you thought had gone permanently numb. Notice it. Tend it. Let the thaw proceed at its own pace. The earth has not forgotten how to bloom.",
    omen: "Any sign of season changing — a warm day in cold weather, a bud on a bare branch — is the thaw beginning in the outer world.",
    luckyElements: { number: 2, color: "Pale Blush", symbol: "~" },
  },
  {
    id: "f71",
    title: "The Shared Horizon",
    category: "love",
    shortText: "Love that faces the same direction is rare and real...",
    fortune:
      "There is a kind of partnership that is not about gazing at each other but about gazing together at the same horizon — the same values, the same direction, the same quality of life being built. The face-to-face intensity of early attraction gives way, in lasting love, to this: two people standing side by side, moved by the same things, troubled by the same things, reaching toward the same version of a good life. Look around you. Is there someone who has been standing beside you, looking at what you look at? That alignment is not ordinary. It is the horizon showing you where to stand.",
    omen: "A shared sunset or sunrise — watching the same sky at the same moment as another — is the horizon's confirmation.",
    luckyElements: { number: 6, color: "Horizon Amber", symbol: "☯" },
  },

  // ── ADDITIONAL WARNING ──────────────────────────────────────────────────────
  {
    id: "f72",
    title: "The Understudy",
    category: "warning",
    shortText: "You have been rehearsing someone else's performance...",
    fortune:
      "The understudy knows every line of a play they did not write, for a role that was not built for their particular gifts. They are excellent at it. Everyone says so. And they go home exhausted in a way they cannot quite explain, because excellence in a role that isn't yours costs differently than excellence in one that is. The spirits are asking: where in your life are you the understudy? Not a supporting player — that is honourable. But the one learning lines for a production that does not need what you specifically, unreproducibly have. The audience wants to see you. Not the role you've been covering.",
    omen: "Watching a performance — live, recorded, any kind — and feeling a specific pang of recognition is the understudy looking in a mirror.",
    luckyElements: { number: 13, color: "Stage Grey", symbol: "◈" },
  },
  {
    id: "f73",
    title: "The Unseasoned Wood",
    category: "warning",
    shortText: "What is rushed to fire burns poorly and smokes...",
    fortune:
      "Something you are considering doing — or have already begun — has not been given enough time to season. Green wood placed in the fire does not burn cleanly; it smokes and smoulders and eventually goes out. The spirits are not telling you to abandon the plan. They are telling you to give it the time it requires before you place it in the fire of the world's judgment. The preparation that feels like delay is the seasoning. A few more weeks of invisible work — more conversations, more research, more honest stress-testing of the idea — will make the difference between a clean burn and a disappointing smoulder.",
    omen: "The smell of smoke without a visible fire is the warning arriving in sensory form — notice what you were thinking about when it reached you.",
    luckyElements: { number: 5, color: "Ash Grey", symbol: "△" },
  },
  {
    id: "f74",
    title: "The Borrowed Clock",
    category: "warning",
    shortText: "You are spending time that belongs to your future self...",
    fortune:
      "There is a version of you in the future who will need what you are spending now — the energy, the health, the attention that is being loaned to things that do not repay it. The spirits hold no judgment about the past spending; there were reasons for all of it. But they are noting the accumulating debt. The interest is paid in depletion: the slow wearing of patience, the shortening of the intervals between exhaustion and recovery, the growing difficulty of accessing joy that once came easily. The most important repayment you can make to your future self costs you nothing financial. It costs only your willingness to change one thing.",
    omen: "Waking tired after a full night's sleep, repeatedly, is the future self returning the debt with interest — listen.",
    luckyElements: { number: 8, color: "Pewter", symbol: "⧖" },
  },
  {
    id: "f75",
    title: "The Locked Compass",
    category: "warning",
    shortText:
      "A compass stuck on one bearing is worse than no compass at all...",
    fortune:
      "You have a value, a principle, a way of seeing that once served as a reliable guide. It was well-calibrated at the time you set it. But conditions have changed — you have changed — and the compass has not been recalibrated. It still points to true north as understood by an earlier version of you, in an earlier season of your life. The spirits are not asking you to abandon your values. They are asking you to reopen the question of whether the specific bearing you have been following is still the right interpretation of them. True north is real. The old map of it may not be.",
    omen: "Getting turned around — physically, briefly confused about directions — is the compass asking to be rechecked.",
    luckyElements: { number: 9, color: "Iron Grey", symbol: "⊘" },
  },
  {
    id: "f76",
    title: "The Closed Fist",
    category: "warning",
    shortText: "What you grip too tightly, you cannot use...",
    fortune:
      "You are holding something so tightly that it has lost its usefulness. This may be a relationship, a plan, an identity, a version of how things should go. The grip began as protection — reasonable, even necessary. But what began as protection has become control, and control is not the same thing as safety. The spirits observe that you are exhausted by the effort of the grip and that the thing you are gripping is being distorted by the pressure. Open the hand, slowly. Not to release what you love, but to hold it in a way that lets it remain what it is, rather than what the grip makes it.",
    omen: "Finding your hands clenched when you thought they were relaxed is the fist delivering its own message.",
    luckyElements: { number: 3, color: "Charcoal", symbol: "⊗" },
  },
  {
    id: "f77",
    title: "The Drought Season",
    category: "warning",
    shortText:
      "Scarcity is real, but the belief in permanent drought is not...",
    fortune:
      "There is a difference between the drought that is happening and the belief that rain will never return. Both are difficult. Only one is accurate. You have been living as though the current scarcity — of time, of love, of recognition, of money, of energy — is the permanent condition rather than the present one. The spirits do not minimise what is scarce. They are addressing the belief that has attached itself to the scarcity and begun telling you stories about your permanent unworthiness of rain. That belief is a lie. The drought has a length. You do not know it yet. But it ends.",
    omen: "The smell of rain approaching — petrichor, that specific clean earthiness — is the drought's ending giving advance notice.",
    luckyElements: { number: 2, color: "Dust Brown", symbol: "∅" },
  },

  // ── ADDITIONAL BLESSING ──────────────────────────────────────────────────────
  {
    id: "f78",
    title: "The Gift of Groundedness",
    category: "blessing",
    shortText: "The root goes as deep as the branch goes high...",
    fortune:
      "You have developed, over time and often through difficulty, a quality that cannot be bought and is rarely taught: the ability to remain yourself under pressure. While others are swept by each new current — of opinion, of fashion, of collective anxiety — you have learned to stand in the water without being moved off your ground. This is not stubbornness. It is the deep root system of someone who has survived their own uprooting and chosen to plant themselves deliberately. The blessing being given now is the recognition of this: you are more stable than you feel. The root goes deeper than the storm.",
    omen: "A large tree weathering wind without breaking — particularly one you can touch — is the root blessing confirming its depth.",
    luckyElements: { number: 4, color: "Earth Brown", symbol: "⌂" },
  },
  {
    id: "f79",
    title: "The Returning Light",
    category: "blessing",
    shortText: "The solstice turns, and every darkness shortens after...",
    fortune:
      "You have passed the longest night. You may not have noticed the moment it turned — it is never dramatic, the winter solstice — but the light has been lengthening since, by seconds first, then minutes, then in ways you can feel. A difficulty in your life has passed its darkest point. The evidence may not yet be visible. The days still seem short. But the arc has changed, and what seemed permanent is now provably temporary. Let the lengthening light do what lengthening light does: illuminate incrementally, warm gradually, invite things that were waiting to begin their beginning.",
    omen: "Noticing the light lasting longer than you expected — a delayed dusk, a bright morning — is the solstice marking itself in your day.",
    luckyElements: { number: 1, color: "Winter Gold", symbol: "☀" },
  },
  {
    id: "f80",
    title: "The Rain After Drought",
    category: "blessing",
    shortText: "What waited in the seed now finds its moment...",
    fortune:
      "The seed that survives a drought has strengthened. The germination that follows is not the same as it would have been in an easier season — it is deeper, more resilient, shaped by the waiting. What you have been carrying through a dry season — a hope, a project, a relationship, a version of yourself — is not diminished by the wait. It has been compressing. The rain is coming, and when it comes, what breaks the surface will break it with a force that reflects the depth of the waiting. The blessing of this fortune is the announcement: the dry season is ending. Prepare the ground.",
    omen: "The first rain after a dry spell — felt on your skin — is the blessing arriving in its most physical form.",
    luckyElements: { number: 7, color: "Storm Blue", symbol: "⊹" },
  },
  {
    id: "f81",
    title: "The Master's Nod",
    category: "blessing",
    shortText: "Your mastery is being seen by those who can recognise it...",
    fortune:
      "There is a particular pleasure that belongs only to the masters of a craft: the ability to recognise mastery in others. A concert violinist hears what the audience cannot. A chess grandmaster sees combinations invisible to the merely competent. Someone with this depth of perception has noticed you recently. They may not have said it in the vocabulary of formal praise — mastery rarely communicates in formal praise. It communicates in the particular attention they gave you, the specific question they asked, the invitation extended. The blessing of this fortune is the recognition: you are being seen by someone who can see.",
    omen: "Any moment of being asked for your opinion by someone you deeply respect is the master's nod in its clearest form.",
    luckyElements: { number: 8, color: "Indigo", symbol: "◉" },
  },
  {
    id: "f82",
    title: "The Wild Garden",
    category: "blessing",
    shortText: "What grows without instruction grows most truly...",
    fortune:
      "You have a place inside yourself — a set of interests, energies, inclinations — that was never trained, never directed, never made to justify itself in terms of productivity or purpose. This wild garden has been growing regardless. The spirits are blessing it now: this untrained part of you has quietly become something extraordinary. The reading done for pure love of reading. The making done with no audience. The thinking done for no one's approval but your own. This is where your most original contribution to the world is forming. Do not clear the wild garden to plant something more respectable. Let it go to seed.",
    omen: "Finding something growing in an unexpected place — between pavement cracks, on a wall — is the wild garden pointing at itself.",
    luckyElements: { number: 3, color: "Moss Gold", symbol: "✚" },
  },
  {
    id: "f83",
    title: "The Thin Place",
    category: "blessing",
    shortText:
      "The veil between ordinary and sacred has thinned where you stand...",
    fortune:
      "The Celts had a concept: thin places — locations where the distance between the human world and the divine was unusually small, where the veil between visible and invisible had worn through with use. You are in a thin place right now: a season, a location, a relationship where something larger than the everyday becomes accessible. You may have felt it as a heightened sensitivity, an unusual capacity for gratitude, moments of inexplicable recognition. The blessing being offered is the instruction: pay close attention during this thin time. What arrives here, what you perceive here, what you decide here, carries a particular weight and a particular grace.",
    omen: "A moment of sudden inexplicable peace — in a crowd, in difficulty, in a surprising location — is the veil thinning.",
    luckyElements: { number: 11, color: "Silver", symbol: "☽" },
  },
  {
    id: "f84",
    title: "The Second Language",
    category: "blessing",
    shortText: "A new fluency is opening in you...",
    fortune:
      "There is a second language you have been learning — not in a classroom, but through experience. The language of a new field, a new community, a new emotional register, a new way of being in the world. And there is a threshold in second-language learning past which something shifts: the thinking begins to happen in the new language rather than being translated from the old one. You are approaching this threshold. The fluency you have been building through months or years of fumbling and mistranslation is about to declare itself. The blessing is the approach: you are almost native. Speak.",
    omen: "Being understood completely in a context where you expected to be misunderstood is the second language fluency arriving.",
    luckyElements: { number: 5, color: "Warm Teal", symbol: "◬" },
  },
  {
    id: "f85",
    title: "The Long Promise",
    category: "blessing",
    shortText:
      "What was promised to you before you could ask has not been forgotten...",
    fortune:
      "Before you understood want, there was something moving toward you. A potential, a gift, a particular form of flourishing that was set in motion by forces you did not choose and cannot claim credit for — your nature, your timing, the specific circumstances that formed you. This is not a small thing. It is, in fact, everything. The spirits are offering this blessing as a reminder of it: what you were born capable of has not expired. The world's failure to receive it yet does not mean it has been rescinded. The promise is long. It is patient. It is still in motion.",
    omen: "Something long-awaited arriving — a letter, a package, a person — is the long promise demonstrating its patience paid.",
    luckyElements: { number: 9, color: "Warm Gold", symbol: "✋" },
  },
  {
    id: "f86",
    title: "The Watercolour Sky",
    category: "blessing",
    shortText: "Beauty is arriving unannounced, as it always does...",
    fortune:
      "You have been so focused on what needs fixing, what needs building, what needs solving, that you have been moving through a world of extraordinary beauty with your eyes turned down. The spirits are not scolding this — survival requires exactly the focus you have been giving. But they are offering, right now, a temporary lifting of the requirement: permission to be moved by the sky, the face, the music, the accidental composition of light and ordinary objects that constitutes a Wednesday afternoon in a human life. This is not distraction from the important. This is the important, arrived without announcement as it always does.",
    omen: "A sky of unusual colour or beauty, noticed without trying — dawn, dusk, storm light, clear night — is the watercolour offering itself.",
    luckyElements: { number: 1, color: "Clear Light", symbol: "✧" },
  },

  // ── ADDITIONAL DESTINY ──────────────────────────────────────────────────────
  {
    id: "f87",
    title: "The Hidden Door",
    category: "destiny",
    shortText: "Not all entrances are visible from the main corridor...",
    fortune:
      "You have been looking for a way forward in the obvious places — the main door, the lit corridor, the path that others have walked visibly before you. The way forward in this particular chapter is through a less obvious entrance. It may be disguised as something small: an introduction dismissed as unimportant, a creative detour that seems off-topic, a skill you think doesn't count. The spirits are directing your attention away from the grand entrance and toward the side door that has always been there, slightly ajar, waiting for someone who had the patience to look past the obvious.",
    omen: "Finding a door, gate, or passage you hadn't noticed before in a familiar place is the hidden door making itself visible.",
    luckyElements: { number: 7, color: "Forest Green", symbol: "⚷" },
  },
  {
    id: "f88",
    title: "The Patient Cartographer",
    category: "destiny",
    shortText: "You are mapping a territory that has never been mapped...",
    fortune:
      "The first cartographers of unknown coastlines drew what they could see and left the rest blank — not 'here be dragons' in fear, but simply: unknown, to be filled in. You are in the process of mapping something that has no prior chart: your particular combination of gifts, circumstances, and timing has not been navigated before. No one's previous map will tell you where the deep water is. This is not a disadvantage. It is the cartographer's greatest adventure — the first sighting of a coastline, the first notation of a current, the beginning of the map that others will one day use. What you are learning through trial is the chart itself.",
    omen: "Arriving somewhere and recognising you are the first person you know to have been there is the cartographer noting a new coast.",
    luckyElements: { number: 4, color: "Parchment", symbol: "✦" },
  },
  {
    id: "f89",
    title: "The Twice-Born",
    category: "destiny",
    shortText:
      "Some people have two lives — the one before and the one after...",
    fortune:
      "There are people who live one life continuously, and there are people who live two: before and after a transformation so significant that the person who emerged could not have been predicted from the person who entered. You are of the second kind. The 'after' version of you — the one that the difficulty, the crossing, the long darkness has been producing — is not a recovered version of who you were. It is someone new. Different capacities. Different freedoms. Different relationship to the things that once held you. The twice-born carry a particular kind of authority: they have evidence that the before is not the whole story.",
    omen: "A dream of water — immersion, crossing, emergence — is the twice-born nature speaking through the oldest symbolic language available.",
    luckyElements: { number: 2, color: "Rebirth Blue", symbol: "🔥" },
  },
  {
    id: "f90",
    title: "The Constellation Maker",
    category: "destiny",
    shortText: "You connect things that others see only as scattered lights...",
    fortune:
      "The stars existed long before anyone drew lines between them. The act of constellation-making was a human act — the imposition of story, pattern, and meaning on the raw material of light. You possess this gift: the ability to look at what appears to others as disconnected information, isolated experiences, unrelated fields, and to perceive the pattern that connects them. This is not a small thing in a world drowning in data and starving for meaning. Your particular skill of connection-making — across disciplines, across contexts, across what should not obviously relate — is one of the most valuable a human being can possess. Use it without apology.",
    omen: "Looking up at stars and having a new constellation suggest itself — a pattern you hadn't seen before — is the gift naming itself.",
    luckyElements: { number: 12, color: "Starlight", symbol: "★" },
  },
  {
    id: "f91",
    title: "The Tide That Lifts",
    category: "destiny",
    shortText: "A rising current carries all who float upon it...",
    fortune:
      "You are about to be carried by something larger than your own effort — a cultural moment, a generational need, a confluence of conditions that align precisely with what you have been building. This is not luck divorced from preparation: the tide lifts all boats, but only the ones in the water. You have been in the water. You have been doing the work in the seasons when no tide was rising. Now the conditions are shifting, and the same effort that previously moved you an inch is about to move you a league. Stay in the water. The tide is coming in.",
    omen: "The feeling of ease in an area where you previously strained is the first movement of the incoming tide.",
    luckyElements: { number: 9, color: "Ocean Blue", symbol: "〰" },
  },

  // ── ADDITIONAL LOVE ─────────────────────────────────────────────────────────
  {
    id: "f92",
    title: "The Morning After the Storm",
    category: "love",
    shortText: "What survives the night together is stronger by morning...",
    fortune:
      "You have been through something difficult with someone — or you are in it now. A conflict, a misunderstanding, a period of distance that tested whether what was between you was real. The storms in relationships are not evidence of wrongness. They are the testing of the material. What holds through the storm is not the same thing that existed before it: it has been proven, tempered, made demonstrably stronger than before. The spirits are asking you to consider: is there something worth carrying into the morning? If so, the storm has not destroyed anything. It has revealed what was structural from the beginning.",
    omen: "Clear air after rain — that particular freshness — arriving when you are thinking about a relationship is the morning after speaking.",
    luckyElements: { number: 7, color: "Rain-washed Blue", symbol: "🌈" },
  },
  {
    id: "f93",
    title: "The Living Archive",
    category: "love",
    shortText: "Someone holds the version of you that you cannot remember...",
    fortune:
      "There are people in your life who carry the archive of you — who remember things you have forgotten, who hold the continuity of your story through the chapters you passed through too quickly to retain. This is a form of love that does not always announce itself dramatically. It shows up as 'remember when you', as the photograph you didn't know existed, as the story that begins with 'you always'. The spirits want you to recognise the value of those who hold your history with tenderness. They are not just people who know you. They are the living record of a self that would otherwise be lost.",
    omen: "Being reminded of something you had genuinely forgotten about yourself — and feeling recognised by the reminder — is the archive opening.",
    luckyElements: { number: 8, color: "Sepia", symbol: "∞" },
  },

  // ── ADDITIONAL WARNING ──────────────────────────────────────────────────────
  {
    id: "f94",
    title: "The Eroding Cliff",
    category: "warning",
    shortText: "What seems solid from above may be hollowing from beneath...",
    fortune:
      "Coastal cliffs look permanent from above, from land. The erosion happens at the base, underwater, invisible from where most people stand. By the time the cliff face is visibly compromised, the hollowing has been happening for a long time. The spirits are drawing your attention to a structure in your life — a relationship, a professional situation, a habit, a belief about yourself — that looks fine from the surface and the expected vantage point. But there is pressure at the base that you may not be examining. Not because you are careless, but because the base is not where you usually look. Look there.",
    omen: "Noticing cracks in something that seemed solid — a wall, a pavement, even earth — is the cliff directing your attention downward.",
    luckyElements: { number: 6, color: "Rust", symbol: "⚠" },
  },
  {
    id: "f95",
    title: "The Echo Chamber",
    category: "warning",
    shortText: "The voice you have been hearing may be your own, repeated...",
    fortune:
      "There is a situation — a belief, a plan, a self-narrative — that has been receiving consistent confirmation recently. Everyone you discuss it with agrees. Every piece of evidence you encounter supports it. This unanimity should give you pause, not confidence. Not because the thing is necessarily wrong, but because the absence of resistance often means you have, unconsciously, stopped presenting it to people or places where resistance might arise. The spirits are not saying you are wrong. They are saying: find one honest dissenter. One real challenge. Test the echo. If the thing is true, it will survive the test.",
    omen: "An unexpected silence where you expected agreement — a room going quiet, a question unanswered — is the echo's absence pointing to open air.",
    luckyElements: { number: 5, color: "Faded Ink", symbol: "⁂" },
  },

  // ── ADDITIONAL WEALTH ───────────────────────────────────────────────────────
  {
    id: "f96",
    title: "The Uncommon Frequency",
    category: "wealth",
    shortText: "Your specific gift is rarer than you believe...",
    fortune:
      "You keep comparing your earnings, your progress, your position, to people who are doing something that only resembles what you do. The comparison is flattering to them and deflating to you — and it is also inaccurate. What you specifically bring is not on the same frequency as what they bring. There is no direct comparison because there is no true equivalent. The spirits are urging you toward a different question: not 'why am I not where they are?' but 'who specifically needs what only I can give?' That question leads to a market that has your name already on it, waiting for you to arrive.",
    omen: "Hearing a piece of music that no one else in the room seems to notice — only you — is your frequency sounding.",
    luckyElements: { number: 10, color: "Copper", symbol: "⚗" },
  },
  {
    id: "f97",
    title: "The Underpriced Offering",
    category: "wealth",
    shortText: "What you charge reflects what you believe you are worth...",
    fortune:
      "The price you put on your work is not merely a financial figure. It is a statement about what you believe the work is worth, and by extension, what you believe you are worth. The spirits see you consistently setting that price too low — not from humility, which is a virtue, but from a fear that the true price will be refused, which is a wound masquerading as modesty. The world often values things at the price they are offered. An underpriced offering signals to the market that it is an undervalued thing. Raise the number. Not all at once. But begin. Let the price be an honest statement of the work's actual worth.",
    omen: "Being asked for more than you expected to receive — a tip, an upgrade, a better offer than you proposed — is the market correcting your self-assessment.",
    luckyElements: { number: 6, color: "Burnished Gold", symbol: "⚖" },
  },
  {
    id: "f98",
    title: "The Patron's Arrival",
    category: "wealth",
    shortText: "Somewhere a believer in your work is moving toward you...",
    fortune:
      "Every great work in history had its patron: the person or institution that saw the value before it was obvious to everyone, that provided the material conditions in which the work could happen. The patron is not always a person. It can be a grant, an audience, a platform, an employer whose needs align precisely with your gifts. Somewhere, moving through the world right now, is an entity with resources and a need that your specific work addresses. The spirits cannot tell you where they are. But they are telling you to be visible: to put your work in places where it can be found, to speak clearly about what you do and why, to remain findable by what is looking for you.",
    omen: "Being approached by someone who has been watching your work without your knowing is the patron announcing their approach.",
    luckyElements: { number: 3, color: "Mahogany", symbol: "⊕" },
  },
  {
    id: "f99",
    title: "The Winter Count",
    category: "wealth",
    shortText: "What is recorded carefully is not lost to time...",
    fortune:
      "Certain Indigenous traditions kept a winter count: a single image chosen to represent each year, so that the passage of time became a visible, intentional record rather than a blur of forgotten seasons. The spirits are inviting you to make your own winter count — not of years, but of value. What have you built, learned, contributed, and created that you have not properly recorded? The professional experience that seems unremarkable because it is so familiar to you. The network carefully maintained. The expertise accumulated across irregular projects. Inventory this. Written clearly, it becomes leverage. Unexamined, it remains invisible even to you.",
    omen: "Finding a journal, a list, a record you had forgotten — and seeing evidence of more progress than you recalled — is the winter count revealing itself.",
    luckyElements: { number: 2, color: "Forest Green", symbol: "🌱" },
  },

  // ── ADDITIONAL BLESSING ──────────────────────────────────────────────────────
  {
    id: "f100",
    title: "The Midnight Tide",
    category: "blessing",
    shortText: "Even in the darkest hour, the water is moving...",
    fortune:
      "The tide moves at midnight as reliably as it moves at noon. No one is watching. There is no light to confirm it. The evidence of the movement will only be visible at dawn, when the waterline has shifted. Your life is moving in its most important directions right now, in the dark, in the hours when you cannot see the evidence of motion. The practice of faith — not religious faith necessarily, but the faith of the sailor who trusts the tide even at midnight — is the only instrument available for navigating this particular stretch. The water is moving. Dawn is a reliable phenomenon. Trust the tide.",
    omen: "Any encounter with the sea — or a dream of it — in a period of apparent stagnation is the midnight tide delivering its report.",
    luckyElements: { number: 6, color: "Deep Blue", symbol: "⌾" },
  },
  {
    id: "f101",
    title: "The Sacred Ordinary",
    category: "blessing",
    shortText: "The holiest things are in the most familiar places...",
    fortune:
      "You have been looking for the extraordinary in the special and the exceptional, not knowing that the spiritual traditions most worth trusting have always said the opposite: the holy is concentrated most densely in the ordinary — in bread, in water, in the face of someone loved, in the simple fact of being alive on a Tuesday. The blessing offered here is not an event. It is a shift in perception: the ability, for a period, to experience the things that are always there as if for the first time. The cup of coffee. The walk you have taken a hundred times. The face of someone you know so well you have stopped seeing them. Look again.",
    omen: "A moment of sudden, intense awareness of something completely ordinary — its colour, its texture, its extraordinary existence — is the sacred ordinary declaring itself.",
    luckyElements: { number: 10, color: "Warm Gold", symbol: "✋" },
  },
  {
    id: "f102",
    title: "The Permission Slip",
    category: "blessing",
    shortText: "You have been waiting for someone to say it is allowed...",
    fortune:
      "Here it is: it is allowed. Whatever you have been waiting for official permission to do — to rest, to change your mind, to want something different, to take up more space, to try something that might not work, to stop performing a version of yourself that no longer fits — the permission is hereby granted. Not by any authority. By the part of you that has known all along that the waiting was for something that was never going to arrive from outside. The blessing is the permission. The permission is yours. It has always been yours. The spirits are simply pointing out that you left it on the table.",
    omen: "Any moment in which you feel suddenly, inexplicably free to do something you have been hesitating over is the permission slip being delivered.",
    luckyElements: { number: 1, color: "Clear Light", symbol: "☀" },
  },
  {
    id: "f103",
    title: "The Ancient Friendship",
    category: "blessing",
    shortText: "Some bonds predate the logic of how they formed...",
    fortune:
      "You have at least one friend — maybe more — with whom the normal logic of friendship doesn't entirely explain the depth of what exists between you. The shared history, while real, doesn't account for the quality of the recognition. The comfort is too immediate, the understanding too precise, the return after long absence too seamless. These are the friendships the spirits call ancient: not because they are old in years, but because they feel, somehow, prior to the years. Whatever they are, they are among the greatest blessings a human life can hold. The instruction: do not let the ordinary drift of busy lives silently erode them. Reach out.",
    omen: "Thinking of someone just before they contact you — or just after a long silence — is the ancient bond signalling its existence.",
    luckyElements: { number: 11, color: "Warm Amber", symbol: "⌾" },
  },
  {
    id: "f104",
    title: "The Deep Well",
    category: "blessing",
    shortText:
      "The source within you has not run dry — it has never run dry...",
    fortune:
      "You have drawn deeply on yourself in this season — your patience, your creativity, your resilience, your reserves of care. And it has felt, at times, like the bucket is coming up with less than it used to. The spirits want to correct a misperception: the well is not the capacity that you feel depleted. The well is a deeper source that is not subject to the same seasons of depletion. It does not fill and empty the way the surface reserves do. It is fed by something that does not depend on your effort or your circumstances. Return to stillness — even briefly — and you will find it there. It has not moved. It has been waiting.",
    omen: "Finding water unexpectedly — a source you didn't know was there, water appearing in an unusual place — is the deep well surfacing.",
    luckyElements: { number: 9, color: "Deep Blue", symbol: "⊹" },
  },
];

export function getFortuneByColor(colorIndex: number): Fortune {
  return fortunes[colorIndex % fortunes.length];
}

export function getRandomFortune(): Fortune {
  return fortunes[Math.floor(Math.random() * fortunes.length)];
}

export function getFortunesByCategory(
  category: Fortune["category"],
): Fortune[] {
  return fortunes.filter((f) => f.category === category);
}
