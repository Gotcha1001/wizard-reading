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
