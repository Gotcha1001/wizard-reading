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
  // ── NEW DESTINY (f105–f129) ──────────────────────────────────────────────────
  {
    id: "f105",
    title: "The Returning Comet",
    category: "destiny",
    shortText: "Some arrivals are written in celestial ink...",
    fortune:
      "There are events that follow long, elliptical orbits — returning after years, decades, sometimes a lifetime, to pass close to you again. A theme, a person, a type of opportunity you have met before is coming back around. This time you are not the same person who encountered it last. You have the experience now that you lacked then, the composure, the capacity to receive what you could not receive before. The comet does not care whether you were ready on its last pass. It simply returns. What matters is that you are ready now.",
    omen: "Seeing a streak of light in the sky — or anything moving in a long, slow arc — is the comet marking its approach.",
    luckyElements: { number: 76, color: "Pale Cyan", symbol: "☄" },
  },
  {
    id: "f106",
    title: "The Seed Library",
    category: "destiny",
    shortText: "What you carry forward is more than you know...",
    fortune:
      "In certain vaults around the world, seeds are stored against catastrophe — not because disaster is certain, but because what the seeds hold is too important to risk losing. You are a kind of seed library. Inside you are possibilities that have not yet germinated, capacities that have not yet been called upon, wisdoms accumulated through living that you have not yet had occasion to use. The world will need what you carry. Not all at once, not dramatically — but steadily, across years, in small offerings and large ones. Do not underestimate the inventory you hold.",
    omen: "Finding a seed or stone in an unexpected pocket or drawer is the library signalling its contents.",
    luckyElements: { number: 4, color: "Harvest Gold", symbol: "⌘" },
  },
  {
    id: "f107",
    title: "The Echo in Stone",
    category: "destiny",
    shortText: "Ancient walls remember every word spoken in them...",
    fortune:
      "You have said things, made choices, sent intentions into the world that felt small at the time. The echo, however, travels farther than the voice that made it. Something you did or said in a quiet moment — months ago, perhaps years — has been reverberating through the life of someone you may never know changed by it. Your influence moves in ways you cannot track. This is not a reason to become self-conscious. It is a reason to act and speak from the best of yourself even in the unremarkable moments. The stone carries everything.",
    omen: "Hearing your name spoken from a distance — or an unexpected reference to something you said long ago — is the echo returning.",
    luckyElements: { number: 5, color: "Limestone", symbol: "⧓" },
  },
  {
    id: "f108",
    title: "The Fog Lifts",
    category: "destiny",
    shortText:
      "The landscape was always there — you simply could not see it...",
    fortune:
      "You have been navigating by instinct through a stretch of fog — moving forward carefully, unable to see the full shape of where you were going. A clarity is coming. Not all at once, but the way fog actually lifts: in patches, the nearest things becoming visible first, then the middle distance, and finally — unexpectedly — the far horizon. When it clears, you will see that the landscape you have been moving through has been more beautiful and more coherent than it felt while you were inside the obscuring cloud. The path makes sense from this side of the fog.",
    omen: "Literal fog or mist clearing while you are watching it is the fortune demonstrating its own meaning.",
    luckyElements: { number: 3, color: "Mist Grey", symbol: "◌" },
  },
  {
    id: "f109",
    title: "The Clocktower City",
    category: "destiny",
    shortText: "Every tower marks time differently — yours is not wrong...",
    fortune:
      "You have been measuring your progress against clocks that were set in different cities, for different people, to mark different arrivals. Your timing is not a failure of discipline or ambition. It is a different clock, set to a different meridian, measuring a different kind of journey. The poet who publishes at sixty was not late — they were accumulating. The entrepreneur who succeeds on their third attempt was not behind — they were preparing. Stop converting your time into someone else's timezone. Your clock is accurate. It is simply set to your life, not theirs.",
    omen: "A clock that you notice is set differently from what you expected — fast or slow — is the timing message made literal.",
    luckyElements: { number: 8, color: "Bronze", symbol: "⌚" },
  },
  {
    id: "f110",
    title: "The Migratory Path",
    category: "destiny",
    shortText:
      "Some creatures cross entire worlds guided by invisible forces...",
    fortune:
      "The monarch butterfly navigates thousands of miles without a map, guided by the angle of the sun and a magnetic sensitivity no instrument can fully explain. You possess a navigation system of comparable sophistication — one that operates below conscious awareness, integrating signals from your body, your history, your deepest values. It has been right more often than you have credited it. The times you overrode it in favour of the louder, more logical voice — did you arrive somewhere better? Trust the migration. The force pulling you in a particular direction has been calibrated by a longer intelligence than reason.",
    omen: "Seeing migratory birds — geese in formation, swallows gathering on wires — is the navigation system pointing itself out.",
    luckyElements: { number: 7, color: "Autumn Orange", symbol: "✦" },
  },
  {
    id: "f111",
    title: "The Geologist's Eye",
    category: "destiny",
    shortText: "What looks like rock is time made visible...",
    fortune:
      "A geologist reads the landscape differently from the rest of us: where others see rock, they see compressed time — millions of years of pressure, heat, movement, catastrophe, and calm, all visible in the strata. You are beginning to develop a similar vision of your own life. What once looked like damage is revealing itself as evidence of force applied and survived. What once looked like irregularity is showing itself as pattern. The events you could not understand while inside them are becoming, from this new vantage, readable. You are learning to read the strata of yourself.",
    omen: "Picking up a stone and feeling its weight — really attending to it — is the geologist's blessing entering your hands.",
    luckyElements: { number: 11, color: "Slate", symbol: "◬" },
  },
  {
    id: "f112",
    title: "The Winter Apiary",
    category: "destiny",
    shortText: "The hive goes quiet but is never empty...",
    fortune:
      "In winter, the hive clusters: the bees stop foraging, stop producing visibly, turn their energy entirely inward — maintaining warmth, protecting the queen, sustaining life through the cold. From the outside, the hive looks dormant. From the inside, it is a miracle of organised survival. What looks, from the outside, like your quietest period may be your most important one. The work of maintaining and sustaining yourself through a difficult season is not lesser work than the visible, outward production of summer. The hive that survives winter has everything it needs to be extraordinary in spring.",
    omen: "The sound of bees — near or distant, dreamed or waking — is the winter apiary declaring its continuity.",
    luckyElements: { number: 6, color: "Honeycomb", symbol: "⬡" },
  },
  {
    id: "f113",
    title: "The Undersea Current",
    category: "destiny",
    shortText: "Deeper than storms, a steady force moves you home...",
    fortune:
      "Beneath the surface turbulence of waves and weather, the deep ocean currents move with extraordinary patience and extraordinary power — turning over entire volumes of water across centuries, distributing warmth and cold around the whole of the planet. You have a current like this running through your life. It is not visible in the day-to-day. It cannot be felt in single moments. But over time, it has been moving you, consistently, in a direction that is yours. The storms on the surface have not and cannot deflect it. Rest in the knowledge of this current. It is deeper than any difficulty that crosses your path.",
    omen: "Any encounter with the sea's hidden movement — a visible current, foam tracing a deep pattern — is the current identifying itself.",
    luckyElements: { number: 9, color: "Deep Teal", symbol: "〰" },
  },
  {
    id: "f114",
    title: "The Falconer's Release",
    category: "destiny",
    shortText:
      "What was trained through discipline is now ready for the sky...",
    fortune:
      "The falcon is trained through years of patient, consistent work: first the glove, then the lure, then the longer flights, then the terrifying moment when the hood comes off and the bird is cast into open sky for the first time. The falconer who loves the bird most is the one who can endure that moment — the potential of loss for the sake of the bird's full becoming. Something in you has been in training. The lure, the hood, the close work of preparation: all of it was preparation for this. The hood is coming off. The sky is open. You are ready for what you were trained for.",
    omen: "A bird of prey seen overhead — circling, stooping, resting on a high point — is the falcon showing you what free flight looks like.",
    luckyElements: { number: 2, color: "Feather Brown", symbol: "⚷" },
  },
  {
    id: "f115",
    title: "The Night Market Bell",
    category: "destiny",
    shortText: "When the bell rings, you will know it is for you...",
    fortune:
      "Not every bell is meant for every ear. In the old stories, a particular bell rings and one person, out of all the crowd, hears it differently — knows, without being told, that it is calling them specifically. You are approaching a moment of unmistakable specific calling. Not a vague sense of being needed, but a clear, particular recognition: this is the work, this is the person, this is the place that requires exactly and specifically what you are. When that clarity comes — and it will come — do not bargain with it. Do not ask whether you are qualified. A bell does not ring by mistake.",
    omen: "Hearing a bell unexpectedly — a church, a shop door, a phone — in a moment of particular stillness is the calling bell sounding.",
    luckyElements: { number: 1, color: "Midnight Silver", symbol: "⎋" },
  },
  {
    id: "f116",
    title: "The Surveyor's Mark",
    category: "destiny",
    shortText: "You are exactly where the map says you should be...",
    fortune:
      "The surveyor drives a stake into the ground not at random but at a precisely calculated point — a coordinate derived from measurements, calculations, and reference to landmarks both near and distant. That stake is not arbitrary. You are at a coordinate in your life that is equally non-arbitrary. The experiences that brought you here were the measurements. The people who shaped you were the landmarks. The losses that recalibrated you were the corrections. You are, right now, at a point that has been precisely arrived at, whether it was comfortable to arrive at or not. From this exact point, the next measurement begins.",
    omen: "Any act of physical marking — a stake, a painted line, a cornerstone — seen in your environment is the surveyor confirming your position.",
    luckyElements: { number: 4, color: "Red Chalk", symbol: "✱" },
  },
  {
    id: "f117",
    title: "The River's Memory",
    category: "destiny",
    shortText: "The water knows the valley before it has made it...",
    fortune:
      "Rivers do not choose their valleys by consulting maps. They find them through the patient yielding to the pull of gravity — and in doing so, create the very landscape that will channel everything that follows. Your path is being made in this same way. You are not behind a map. You are ahead of it. The valley of your future life is being formed by your current movement through the landscape. The particular contours it will have — the bends, the widening, the places where it runs swift and shallow — are being determined by how you move now. Trust the gravity. The valley is forming.",
    omen: "Standing at the edge of any river and watching how it moves is the future path offering itself for observation.",
    luckyElements: { number: 7, color: "River Clay", symbol: "≋" },
  },
  {
    id: "f118",
    title: "The High Pasture",
    category: "destiny",
    shortText: "The elevation was the destination all along...",
    fortune:
      "In the old pastoral tradition, the high summer pastures were not reached easily — the journey up was arduous, the weather unpredictable, the path unmarked by signposts. But the pastures themselves, when reached, were extraordinary: new vistas, fresh air, grass unlike anything below, the whole valley visible at last. You have been climbing toward a high pasture. The path has been hard in the way mountain paths are — not cruel, but demanding, requiring your full attention and full body. The elevation you gain is the destination, not a preliminary to some further destination. You are closer to the top than you think.",
    omen: "Any high vantage point reached unexpectedly — a hilltop, a rooftop, a tall building's view — is the high pasture previewing itself.",
    luckyElements: { number: 9, color: "Alpine Green", symbol: "✧" },
  },
  {
    id: "f119",
    title: "The Keeper of the Gate",
    category: "destiny",
    shortText: "What guards the threshold also recognises who belongs...",
    fortune:
      "In every tradition, the gatekeeper is not an obstacle — they are a discernment mechanism. They are there precisely because what lies beyond the gate is worth protecting. The difficulty you have encountered in getting somewhere — the rejection, the closed door, the repeated obstacle — was not the universe's cruelty. It was the gate distinguishing between those who simply want entry and those who belong inside. You have been demonstrating, through your persistence and your willingness to keep returning, that you are the latter. The gate is about to recognise what it has already seen.",
    omen: "A door that swings open without effort — one you expected resistance from — is the gate declaring its recognition.",
    luckyElements: { number: 10, color: "Iron Grey", symbol: "⌂" },
  },
  {
    id: "f120",
    title: "The Compass Rose",
    category: "destiny",
    shortText: "All directions have their beauty; only one is yours...",
    fortune:
      "The compass rose marks every direction with equal precision — there is no wrong on a compass rose, only orientation. North is not superior to south. But the ship that sails toward every direction at once does not reach any port. You have been admiring the full rose and delaying the commitment to a heading. The spirits ask you to understand: choosing a direction does not diminish the other directions, does not close them permanently, does not mean the unexplored routes are lost forever. It simply means you will arrive somewhere. And arrival, with all its imperfection and incompleteness, is what makes a life.",
    omen: "Finding a compass — physical or decorative — in an unexpected place is the rose handing you the needle.",
    luckyElements: { number: 8, color: "Nautical Blue", symbol: "✵" },
  },
  {
    id: "f121",
    title: "The Unfired Kiln",
    category: "destiny",
    shortText: "The heat that transforms is also the heat that reveals...",
    fortune:
      "Pottery does not know what it will become until it enters the kiln. The clay that has been shaped with care, allowed to dry slowly, is placed in an intense heat that burns away everything impermanent — the water, the plasticity, the softness — and what emerges is what was always structurally true of the piece. You are approaching your kiln. Something in your life is about to be tested at high temperature: a commitment, an identity, a belief about what you are capable of. Do not fear the heat. Fear the false softness. What is genuinely true of you will emerge harder and more beautiful than what went in.",
    omen: "The smell of earth or clay — a garden after rain, a potter's studio — is the kiln announcing its readiness.",
    luckyElements: { number: 5, color: "Fired Clay", symbol: "△" },
  },
  {
    id: "f122",
    title: "The Second Harvest",
    category: "destiny",
    shortText: "What was not gathered in autumn may yet ripen in spring...",
    fortune:
      "Not everything that grows is gathered at the expected time. Some fruits need the frost first — the sweetness comes only after the cold has broken down the starch. Some ideas, relationships, and opportunities that seemed to miss their season are still on the branch, transforming slowly into something richer than they would have been if gathered early. What you thought you missed, what you mourned as a failure of timing — not all of it is gone. Some of it is still ripening, having been made better by the wait. The second harvest is coming. Bring the basket.",
    omen: "Finding fruit still on a branch or vine after you thought the season was past is the second harvest naming itself.",
    luckyElements: { number: 2, color: "Frost Blue", symbol: "❄" },
  },
  {
    id: "f123",
    title: "The Light in the Archive",
    category: "destiny",
    shortText: "Among all the records, one is yours alone...",
    fortune:
      "In the vast archive of human experience — all the lives lived, all the paths walked, all the stories told — there is a record that bears your particular signature. No one else will create the exact intersection of connections, perceptions, creations, and acts of care that you will create. This is not a pressure to be extraordinary by conventional measures. It is the simple truth that your particular existence is unrepeatable, and therefore irreplaceable. The archive is incomplete without it. The spirits are asking you to take seriously what only you can contribute — not from vanity, but from an understanding of what the record actually requires.",
    omen: "Coming across your own handwriting or an old creative work unexpectedly is the archive holding up your signature.",
    luckyElements: { number: 12, color: "Parchment Gold", symbol: "✒" },
  },
  {
    id: "f124",
    title: "The Threshold Keeper's Lantern",
    category: "destiny",
    shortText: "At every crossing, a light is left burning for you...",
    fortune:
      "Across the threshold between who you were and who you are becoming, there is always a light that someone left on. A mentor who believed in you before you believed in yourself. A book found at precisely the right moment. A chance encounter that became a turning point. A part of yourself that refused to be extinguished even when the surrounding circumstance was very dark. The lantern is burning at the threshold ahead of you as well. You will not enter the next chapter in total darkness. Someone — or something — is already there, waiting, with light enough to take the first steps.",
    omen: "A light left on in an empty room — one you did not light — is the threshold keeper's lantern confirming its presence.",
    luckyElements: { number: 1, color: "Amber Glow", symbol: "🕯" },
  },
  {
    id: "f125",
    title: "The Stone Bridge",
    category: "destiny",
    shortText:
      "What took centuries to build will bear the weight of crossing...",
    fortune:
      "Old stone bridges were built by people who would never cross them — who laid the first stones knowing the arch would be completed by others, knowing they were building something for lifetimes they would not live to see. You are doing this too. Some of what you are building now is for a future version of yourself who will walk across it not knowing how it came to be there, and some of it is for people not yet born into your life who will need what you are constructing. The building of stone bridges is sacred work. The weight they bear justifies every stone.",
    omen: "Crossing any stone bridge — even incidentally — is the act of both receiving someone else's gift and committing to your own building.",
    luckyElements: { number: 13, color: "Granite", symbol: "⌀" },
  },
  {
    id: "f126",
    title: "The Silver Lining",
    category: "destiny",
    shortText: "Even the densest cloud is lit from behind...",
    fortune:
      "The cloud that blocks the most light also receives the most light — it is simply transformed by the mass of the cloud into an edge-glow rather than a beam. Whatever in your life has been blocking the way, absorbing the energy you would have preferred to receive directly, creating the shadow you have been living in: consider that it too is being lit from behind. There is something on the far side of the obstruction that is so bright it illuminates even the obstacle. The difficulty in your path is not the source of darkness. It is the thing closest to the source of light.",
    omen: "Clouds with visible silver or gold edges — at any time of day — are the fortune's visual confirmation.",
    luckyElements: { number: 3, color: "Silver Edge", symbol: "☀" },
  },
  {
    id: "f127",
    title: "The Returning Pilgrim",
    category: "destiny",
    shortText:
      "The journey changes the pilgrim; the pilgrim changes the journey...",
    fortune:
      "The pilgrim returns from the long road not the same person who set out, but also not entirely different — the same essential self, now informed by what was walked through, what was endured, who was met on the road. You are returning from something — a period of difficulty, a long effort, an extended season of becoming. The home you are returning to may look the same from the outside. But you will see it differently, because the pilgrim sees what the settled inhabitant stops noticing. Welcome home. And welcome the strangeness of seeing the familiar with new eyes — it is one of the pilgrim's great gifts.",
    omen: "Noticing something familiar — a street, a room, a face — as if for the first time is the pilgrim's new eyes opening.",
    luckyElements: { number: 9, color: "Dusty Rose", symbol: "↩" },
  },
  {
    id: "f128",
    title: "The Storm Petrel",
    category: "destiny",
    shortText: "Some spirits are most alive in what others flee...",
    fortune:
      "The storm petrel is a small bird that lives its life almost entirely at sea — that feeds in the open ocean and nests only to breed, that is most at home precisely in the conditions that send other creatures to shelter. You have something of the storm petrel in you: a resilience, a strange comfort with difficulty and uncertainty that you may not recognise as a gift because the people around you do not share it. What would exhaust another gives you a particular kind of energy. This is not masochism — it is vocation. The ocean that frightens others is your native element. Do not apologise for being at home in it.",
    omen: "Weather that would send others inside and that you find yourself wanting to stand in is the storm petrel recognising its own kind.",
    luckyElements: { number: 7, color: "Storm Silver", symbol: "〰" },
  },
  {
    id: "f129",
    title: "The Slow River",
    category: "destiny",
    shortText: "The widest rivers are also the most patient...",
    fortune:
      "The great rivers that carry the most — the Amazon, the Nile, the Mississippi — are not the fastest. They are wide, slow, deliberate movers whose power is in their volume, their persistence, their absolute certainty of direction. The torrential mountain stream is impressive, but it dries in August. The slow river arrives at the sea in every season. What you are building has more of the slow river about it than the impressive torrent. The measure of it is not speed or visible drama. It is the extraordinary volume of what you are quietly, steadily carrying, and the fact that you carry it in every season, through every drought and flood.",
    omen: "Watching a wide, slow river and feeling unexpectedly moved by its patience is the river showing you your own nature.",
    luckyElements: { number: 6, color: "River Stone", symbol: "⊹" },
  },

  // ── NEW WEALTH (f130–f148) ───────────────────────────────────────────────────
  {
    id: "f130",
    title: "The Prospector's Pan",
    category: "wealth",
    shortText: "Gold is already in the water — the skill is in the seeing...",
    fortune:
      "The prospector's art is not finding new rivers — it is learning to see what is already in the familiar one. Others have panned this same stretch of water and moved on, finding nothing. The prospector who succeeds is the one who has developed the eye for what has been overlooked: the glint that others dismissed as mica, the concentrate in the corner of the pan that requires patience to isolate. You have resources in your immediate environment — skills, relationships, knowledge, opportunities — that you have been treating as mica. Look again. More carefully. The gold has been there.",
    omen: "Sunlight catching on water, glass, or metal in a way that briefly dazzles you is the prospector's gold announcing itself.",
    luckyElements: { number: 5, color: "Gold Dust", symbol: "✦" },
  },
  {
    id: "f131",
    title: "The Tide Table",
    category: "wealth",
    shortText: "The patient fisher knows when the sea will give...",
    fortune:
      "The fisherman who consults the tide table does not fish at random — they time their casting to the turning of the water, when the fish are moving and the conditions are favorable. There is a tide table for your financial life, and it is not published anywhere, but it is legible to those who have been paying attention. When is your energy at its peak? When are the decision-makers you need reachable? When does your work land most strongly on those who receive it? These rhythms are real. Timing your most important efforts to them is not superstition — it is the fisherman reading the sea.",
    omen: "A sense of precise and inexplicable rightness about a particular moment — a day, an hour — is the tide table pointing to its turning.",
    luckyElements: { number: 3, color: "Brine Blue", symbol: "≋" },
  },
  {
    id: "f132",
    title: "The Weaver's Shuttle",
    category: "wealth",
    shortText: "Back and forth, the pattern builds from passage...",
    fortune:
      "The shuttle does not travel in one direction. It passes back, then forward, then back — and it is precisely this repetition of passage that creates the fabric. Your most productive financial period will not be built by a single grand forward movement but by the patient, repetitive work of the shuttle: offers made and returned, relationships maintained through consistent contact, skills deepened through repetition. The weaver who watches only for the finished cloth loses the rhythm. Be the shuttle. Trust the back-and-forth. The fabric is being made.",
    omen: "The sound of repetitive work — a loom, a sewing machine, rhythmic typing — is the shuttle's pace matching yours.",
    luckyElements: { number: 8, color: "Loom Scarlet", symbol: "⧖" },
  },
  {
    id: "f133",
    title: "The Artisan's Mark",
    category: "wealth",
    shortText: "Signature carries the story of mastery...",
    fortune:
      "In the age before mass production, the artisan's mark on a piece was not decoration — it was provenance. It said: this was made by a specific person, with a specific skill, with specific standards, and that specificity is worth something particular. You have arrived at a level of work that deserves to be marked. Not anonymously offered, not generically branded, but clearly, confidently associated with your specific name and your specific approach. The spirits urge you: stop offering your work without your mark on it. The mark is not arrogance. It is information. It tells the right buyer where to find you again.",
    omen: "Noticing your own signature or initials — on an old document, a forgotten piece of work — is the mark asking to be used.",
    luckyElements: { number: 7, color: "Ink Black", symbol: "◉" },
  },
  {
    id: "f134",
    title: "The Second Soil",
    category: "wealth",
    shortText: "The ground beneath is richer than the surface suggests...",
    fortune:
      "Farmers know that the topsoil — what is visible and easily worked — is rarely the most nourishing. Below it lies the subsoil, harder to reach but richer in minerals, older in composition, capable of sustaining what the thin layer above cannot. You have been farming the surface of your capabilities and resources. The deeper layer — the knowledge accumulated below conscious awareness, the relationships not yet fully cultivated, the skills not yet fully expressed — is still largely untouched and extraordinarily rich. Dig deeper. Not wider — deeper. The second soil will produce what the first cannot.",
    omen: "Digging in actual earth — a garden, a building site, any excavation — and noticing a change in the soil at depth is the second soil making itself literal.",
    luckyElements: { number: 4, color: "Dark Loam", symbol: "⌂" },
  },
  {
    id: "f135",
    title: "The Tidal Flat's Treasure",
    category: "wealth",
    shortText: "What the tide reveals it reveals only briefly — watch...",
    fortune:
      "The tidal flat is unremarkable for most of the day — covered by water, indistinguishable from the surrounding sea. But for the brief window of low tide, it is exposed, and what lives in it and what has been deposited in it is suddenly accessible. Those who know this go to the flat at the right moment and find what others never see. An opportunity is about to be exposed in your financial life — briefly, in a window that will not stay open indefinitely. The spirits are alerting you in advance so that when the tide goes out, you are already there, already watching, already ready to reach for what is temporarily available.",
    omen: "Any glimpse of something usually hidden — beneath water, beneath a covering, beneath a surface — is the tidal flat at low tide.",
    luckyElements: { number: 6, color: "Estuary Brown", symbol: "◎" },
  },
  {
    id: "f136",
    title: "The Cooper's Craft",
    category: "wealth",
    shortText: "Tight-made vessels hold more than loose ones ever can...",
    fortune:
      "The cooper's barrel holds liquid through the precise pressure of every stave against every other — no single stave is sufficient, but together, shaped correctly and banded tightly, they create something that holds what none of them could hold alone. Your financial life needs this kind of structural attention. Not more income necessarily — more containment. The places where value leaks out: the subscriptions not examined, the agreements not honoured by others, the relationships that take without returning, the time spent on work that does not pay its rate. Tighten the staves. The barrel of your economy is worth making properly tight.",
    omen: "Anything that leaks — a tap, a bag, a container — noticed and fixed is the barrel being mended in the physical world.",
    luckyElements: { number: 5, color: "Oak Brown", symbol: "⊗" },
  },
  {
    id: "f137",
    title: "The Pearl's Making",
    category: "wealth",
    shortText: "The irritant becomes the treasure through patient covering...",
    fortune:
      "The pearl begins with an invasion — a grain of sand, a parasite, something unwanted and uncomfortable that the oyster cannot expel. Rather than endure the irritation forever, the oyster coats it, layer by patient layer, in nacre — the same substance that lines its shell, the most beautiful thing it has. The irritation becomes, over years, a pearl. The difficulty in your financial life that feels most like an embedded irritant is your pearl in the making. You already have the nacre — the skill, the patience, the capacity to transform difficulty into something of value. The covering is already underway.",
    omen: "Finding a pearl, a smooth stone, a bead — or something round and perfect in an unexpected place — is the pearl announcing its completion.",
    luckyElements: { number: 9, color: "Nacre White", symbol: "◌" },
  },
  {
    id: "f138",
    title: "The Slow Burn",
    category: "wealth",
    shortText: "What catches slowly sustains the longest...",
    fortune:
      "There are fires made for drama and fires made for warmth. The dramatic fire catches quickly, burns brilliantly, and is ash in an hour. The slow fire — laid with patience, fed with the right material, tended through the night — provides heat for a season. You are in the process of building a slow fire, and the lack of immediate visible drama is not a failure. The slow fire does not try to prove itself in its first minutes. It builds, quietly and methodically, toward a sustained heat that the quick fire never achieves. The question is only whether you will continue tending it through the early hours of low flame.",
    omen: "A fire that burns steadily and for a long time — a hearth, a candle lasting through a night — is the slow burn's encouragement.",
    luckyElements: { number: 8, color: "Ember Gold", symbol: "🔥" },
  },
  {
    id: "f139",
    title: "The Merchant's Ledger",
    category: "wealth",
    shortText: "What is written is not yet lost — review the record...",
    fortune:
      "The merchant who does not keep a ledger loses not just money but the ability to understand the pattern of their trade — what sells, what doesn't, where the margins are, where the losses hide. You have accumulated significant experience in your financial life that has not been properly ledgered. The patterns are in the data of your history, waiting to be examined. What has consistently worked, even in small ways? What has consistently cost more than it returned? The ledger does not judge — it simply records. Reading it with honesty is one of the most powerful financial acts available to you right now.",
    omen: "Finding an old receipt, invoice, or financial record you had forgotten is the ledger offering itself for review.",
    luckyElements: { number: 2, color: "Ledger Green", symbol: "⚖" },
  },
  {
    id: "f140",
    title: "The Topiary Master",
    category: "wealth",
    shortText: "Shape is revealed by removing what obscures it...",
    fortune:
      "The topiary master does not add to the hedge — they remove from it, with precision and vision, until the shape that was always implicit in the growth becomes visible to everyone. Your financial life may have too much in it to see its true shape. Too many projects, too many half-commitments, too many directions that diffuse the energy. The art is not addition. It is the precise removal of what obscures the form. What would remain if you cut away the obligations that drain without returning? What would be revealed? The shape inside your hedge is already elegant — the shears are ready.",
    omen: "Any deliberately shaped plant or garden — a hedgerow, a trained tree — seen with sudden appreciation is the topiary master at work.",
    luckyElements: { number: 3, color: "Topiary Green", symbol: "✿" },
  },
  {
    id: "f141",
    title: "The Millwright's River",
    category: "wealth",
    shortText: "The same water that flows past all may be harnessed by one...",
    fortune:
      "The millwright looks at the same river everyone else looks at and sees something different: not just water but potential energy, not just flow but force available to be directed. The skill is not in the river — the river is available to all who live beside it. The skill is in the millwright's ability to see what the river is already doing and build something that captures what is already in motion. What force is already flowing in your professional environment — a trend, a need, a movement of attention — that you could position yourself to harness rather than fight?",
    omen: "The sound of moving water when you are thinking about a plan is the millwright confirming the force is already there.",
    luckyElements: { number: 7, color: "Mill Stone", symbol: "⚗" },
  },
  {
    id: "f142",
    title: "The Vintage Season",
    category: "wealth",
    shortText: "This year's harvest will be spoken of for decades...",
    fortune:
      "Not every year produces a vintage. Most years produce ordinary wine — drinkable, honest, unremarkable. But occasionally, a particular combination of soil, weather, tending, and timing produces something that the whole region will speak of for a generation. You are in a vintage year. The conditions aligning around your work right now — your maturity, the timing of the market, the specific ripeness of what you have been developing — are not ordinary. What you bring to harvest in this particular window will not be the same as what you brought last year or will bring next year. Pay attention to the ripeness. This year matters differently.",
    omen: "A taste of something extraordinarily good — food, drink, a particular moment — is the vintage year declaring its quality.",
    luckyElements: { number: 10, color: "Deep Burgundy", symbol: "◈" },
  },
  {
    id: "f143",
    title: "The Cartwright's Wheel",
    category: "wealth",
    shortText: "The hub must be true for the wheel to turn rightly...",
    fortune:
      "The wheel that wobbles does so because the hub is off-centre — the spokes, however well made, cannot compensate for a hub that is not precisely placed. All the surrounding activity of your financial life — the sales, the offers, the networking, the presentation — is the spokes. But the hub is something deeper: your actual belief in the value of what you offer. A misaligned hub — a belief that your work is less than it is, that you are somehow doing others a favour they may not deserve — will make the wheel wobble regardless of how excellent the spokes are. True the hub. Centre it in an honest assessment of the value you bring.",
    omen: "A wheel turning smoothly — a bicycle, a cart, anything rolling cleanly — is the hub demonstrating true alignment.",
    luckyElements: { number: 6, color: "Spoked Grey", symbol: "◎" },
  },
  {
    id: "f144",
    title: "The Locksmith's Gift",
    category: "wealth",
    shortText: "The key that opens this door is already in your hand...",
    fortune:
      "The locksmith knows that every lock has a key — not a universal key, but a specific one, cut to the precise topology of that particular mechanism. The error of most people trying to open a financial door is that they are using a key cut for a different door: a strategy from someone else's playbook, advice designed for a different industry, a version of success that fits a different person's life. Your lock requires a key cut to your specific situation. And the interesting news is that you already have the material for it — in your particular skills, your particular relationships, your particular insight. The key is in your hand. It only needs cutting.",
    omen: "Finding a key — loose, forgotten, or unexpected — is the locksmith placing the blank in your palm.",
    luckyElements: { number: 1, color: "Brass", symbol: "🗝" },
  },
  {
    id: "f145",
    title: "The Smelter's Fire",
    category: "wealth",
    shortText: "What enters as ore leaves as something of value...",
    fortune:
      "The smelter applies intense heat to raw ore and separates what is valuable from what is not — the process destroys nothing real, it only removes what was never worth keeping: the slag, the impurities, the surrounding rock. You are being smelted. The intensity in your financial life right now — the pressure, the heat, the difficulty of maintaining what you have been maintaining — is not destruction. It is separation. What is valuable in you is not being damaged by this heat. It is being concentrated, purified, brought to a clarity that the ore-state could never achieve. What comes out will be denser and purer than what went in.",
    omen: "Seeing metal worked — a forge, a weld, even a spark — is the smelter's fire showing you the transformation already underway.",
    luckyElements: { number: 8, color: "Molten Gold", symbol: "⚗" },
  },
  {
    id: "f146",
    title: "The Sailor's Knot",
    category: "wealth",
    shortText: "The right knot holds under any pressure...",
    fortune:
      "The sailor does not use the same knot for every purpose — they use the knot that fits the load, the rope, the circumstance. A knot that holds perfectly in one situation will fail in another. You have been applying the same approach — the same financial strategy, the same professional method, the same way of offering your work — to situations that require different knots. The effort is not the problem. The knot is the problem. There is a specific configuration of how you present yourself and your value that will hold under the particular load you are carrying right now. Someone who knows the ropes can show you. Ask.",
    omen: "Any piece of rope or cord noticed in passing — tied, untied, knotted — is the sailor asking whether you know the right knot.",
    luckyElements: { number: 4, color: "Hemp", symbol: "⌘" },
  },
  {
    id: "f147",
    title: "The Ink Trade",
    category: "wealth",
    shortText:
      "What you write down becomes real in ways the spoken does not...",
    fortune:
      "The oldest trade agreements were sealed in ink, not air. What is written creates a different kind of reality from what is spoken — it can be referred to, witnessed by, built upon. Your financial life is missing some ink. Agreements that have been verbal and therefore vague. Plans that have been mental and therefore unmeasured. Intentions that have been emotional and therefore inconsistent. The spirits urge a simple practice: write it down. The number you are working toward. The agreements that govern your key relationships. The terms on which you are willing to work. Ink makes the invisible visible and the vague real.",
    omen: "Finding a pen or pencil at a moment when you are thinking about something financial is the ink trade offering its tools.",
    luckyElements: { number: 3, color: "India Ink", symbol: "✒" },
  },
  {
    id: "f148",
    title: "The Miller's Grinding",
    category: "wealth",
    shortText: "Patience between the stones produces what the grain cannot...",
    fortune:
      "The grain that enters the millstone is transformed by the grinding into something far more useful than it was — the flour that feeds, the meal that sustains, the powder that becomes bread. The transformation requires the grain to be willing to be changed, and the miller to keep the stones turning at the right pace: too fast and the flour burns, too slow and nothing is ground. You have grain — raw material, unshaped potential — that needs the millstone of consistent, patient effort to become what it can be. The grinding is not the suffering. It is the transformation. Keep the stones turning.",
    omen: "The smell of bread baking — in a bakery, a home, unexpectedly from a window — is the flour already made, the grinding already done.",
    luckyElements: { number: 5, color: "Flour White", symbol: "⬡" },
  },

  // ── NEW LOVE (f149–f166) ─────────────────────────────────────────────────────
  {
    id: "f149",
    title: "The Familiar Shore",
    category: "love",
    shortText: "There are coasts that know your name before you arrive...",
    fortune:
      "There is a kind of love that does not arrive like weather — loudly, with drama, impossible to miss. It arrives like a coastline: you realise you have been moving toward it for some time, and when it comes into view, there is a recognition so deep and quiet that it barely announces itself. You know this shore. You have known it in some form for longer than the particular person in front of you. The recognition is real. The spirits are asking you not to talk yourself out of it through the logic of what is sensible or timely or explicable. Some shores are simply yours.",
    omen: "The particular smell of the sea — brine, iodine, the edge of tides — when you are thinking of someone is the familiar shore.",
    luckyElements: { number: 4, color: "Sea Glass", symbol: "〰" },
  },
  {
    id: "f150",
    title: "The Patient Cartographer",
    category: "love",
    shortText: "The map of another person is drawn slowly and with care...",
    fortune:
      "The first explorers who mapped unknown coastlines spent years returning to the same waters, refining their charts with each pass — correcting early impressions, filling in what had been guessed at, learning the subtleties of a coast that could not be known from a single voyage. You are in the long, patient work of cartography with someone you love. The early map was drawn in excitement and may have some errors of impression. What is required now is the patient return — the willingness to see the person in front of you more accurately, to correct the map where your assumptions were wrong. The accurate map is worth far more than the romantic sketch.",
    omen: "Being surprised by someone you thought you knew completely — a new quality revealed — is the cartographer discovering an unmapped bay.",
    luckyElements: { number: 7, color: "Parchment", symbol: "✦" },
  },
  {
    id: "f151",
    title: "The Solstice Fire",
    category: "love",
    shortText:
      "The fire at the longest night is lit by those who will not give up on warmth...",
    fortune:
      "In many traditions, the solstice fire is lit against the longest dark — not because the fire can hold back winter, but because the act of gathering around a fire with the people you love is the answer to darkness that human beings have always known. You have been in a long dark with someone. The gathering is not contingent on the darkness ending first. The fire is lit in the darkness. The warmth is made now, not after the season turns. Gather the people. Light the fire. The solstice marks the turning, but the turning requires someone to believe in it enough to strike the first spark.",
    omen: "Any fire lit in a gathering — a candle shared, a bonfire around which people cluster — is the solstice fire asking to be honoured.",
    luckyElements: { number: 11, color: "Bonfire Amber", symbol: "🔥" },
  },
  {
    id: "f152",
    title: "The Keeper of Silences",
    category: "love",
    shortText: "The one who sits with you in quiet knows you most truly...",
    fortune:
      "There is a love that reveals itself in what it does not require of you. You do not have to be entertaining, or composed, or especially interesting. You do not have to explain yourself or justify your mood or fill the quiet with proof of your worth. The person who can sit with you in undemanding silence — who does not need the performance of you, only your presence — is offering one of love's rarest forms. If you have such a person, do not take the silence for granted. It is not absence. It is the most complete acceptance available between two people.",
    omen: "A comfortable silence that falls naturally between you and another person — neither reaching to fill it — is the keeper's gift being offered.",
    luckyElements: { number: 2, color: "Dove Grey", symbol: "~" },
  },
  {
    id: "f153",
    title: "The Open Letter",
    category: "love",
    shortText: "Some things written for one are meant for everyone...",
    fortune:
      "A letter written with full honesty — not to persuade, not to manage impression, but simply to tell the truth of what is felt — becomes more than a private communication. It becomes something that recognises the reader's full humanity. The spirits are inviting you toward a conversation or a written expression in a relationship that has needed more honesty than it has received. Not the brutal honesty that serves the speaker at the expense of the listener. The careful honesty that says: you deserve to know what is actually true for me, and I trust you enough to tell you. That trust is love of a high order.",
    omen: "An urge to write something down — a letter, a message, a note — that doesn't quite leave you is the open letter asking to be written.",
    luckyElements: { number: 5, color: "Cream", symbol: "✉" },
  },
  {
    id: "f154",
    title: "The Hummingbird Visit",
    category: "love",
    shortText:
      "Some arrivals are so swift and bright you might doubt they happened...",
    fortune:
      "The hummingbird hovers for a moment — impossibly still despite its speed — and is gone. You might wonder, afterward, whether you really saw it. Some moments of genuine connection are like this: so brief and luminous that they feel dreamlike in retrospect, and the temptation is to decide they were not quite real, not quite significant, because they did not last long enough to fit the usual shapes of important experience. The spirits are asking you to resist that erasure. Some of the most real things that have ever happened to you lasted only a moment. Duration is not the only measure of meaning.",
    omen: "Any creature that appears briefly and with astonishing beauty — a butterfly, a flash of light, a rare bird — is the hummingbird confirming the reality of brief gifts.",
    luckyElements: { number: 8, color: "Iridescent Green", symbol: "♡" },
  },
  {
    id: "f155",
    title: "The Worn Threshold",
    category: "love",
    shortText: "Stone smooth with crossing holds the memory of arrivals...",
    fortune:
      "In old houses, the threshold stone is worn smooth by the accumulated footsteps of everyone who has ever entered or left — generations of arrivals and departures, visible in the polished stone. A relationship that has been entered and re-entered many times — survived difficulty, deepened through what has been crossed together — has this worn smoothness. The evidence of use is not damage. It is the mark of all the crossings: every argument survived, every distance bridged, every morning after a hard night that found the two of you still there. The smoothness is the history. It is not wear. It is love made visible in stone.",
    omen: "Noticing a well-worn threshold, doorstep, or path — smooth with years of passage — is the memory of arrivals speaking.",
    luckyElements: { number: 6, color: "Hearthstone", symbol: "⌂" },
  },
  {
    id: "f156",
    title: "The Field of Flowers",
    category: "love",
    shortText:
      "You do not have to choose only one — some fields are for wandering...",
    fortune:
      "There is a season for wandering through the field without choosing, allowing the fullness of what is possible to be seen before committing to what to carry home. You may be in that season now — a time of genuine openness, not indecision born of fear but openness born of genuine curiosity about what and who is possible. The spirits are not asking you to settle for the nearest flower. They are asking you to wander with intention: present to what you encounter, genuinely curious, open to being surprised by where your deepest appreciation comes to rest. The field is wide and the season is generous.",
    omen: "An actual field of flowers — or anything blooming in abundance — encountered unexpectedly is the season revealing its generosity.",
    luckyElements: { number: 3, color: "Meadow Gold", symbol: "✿" },
  },
  {
    id: "f157",
    title: "The Forged Link",
    category: "love",
    shortText: "What is made under heat holds what cold alone cannot...",
    fortune:
      "Chain links are not joined cold — the metal must be heated before it can be worked into the connection that will hold under load. The bond between people who have been through something together — genuinely difficult, genuinely hot — is a forged link. It cannot be made by pleasant agreement alone. There is in your significant relationships at least one forged link: something that was hard to make and that, because of the heat required to make it, now holds in a way that was not possible before. The spirits ask you to recognise this link for what it is. It is not evidence that the relationship was damaged. It is evidence that it is structural.",
    omen: "The sight or sound of metalwork — a weld, a hammer on iron — is the forge confirming the link is holding.",
    luckyElements: { number: 9, color: "Forge Orange", symbol: "∞" },
  },
  {
    id: "f158",
    title: "The Midnight Letter",
    category: "love",
    shortText: "What is written in the dark holds a particular truth...",
    fortune:
      "The letters written at three in the morning are not always the ones sent — but they are often the most honest. In the unguarded hours, the self strips away its management and says what it means. You are being asked to pay attention to what surfaces in you in those unguarded hours regarding someone in your life. Not to act immediately on everything that arises — the midnight letter is sometimes wisely left unsent until dawn revises it. But to take seriously what appears when the defences are down. The truth that arrives at three is not delusion. It is the edited self finally stepping back.",
    omen: "Waking at an unusual hour with a particular person strongly in your thoughts is the midnight letter composing itself.",
    luckyElements: { number: 3, color: "Midnight Blue", symbol: "☽" },
  },
  {
    id: "f159",
    title: "The Returning Song",
    category: "love",
    shortText: "A melody once heard between two people does not forget...",
    fortune:
      "There is a piece of music that lives between you and someone you have loved — a song that belongs to the two of you in the way that songs sometimes do, privately and completely. When it returns — in a shop, on the radio, drifting from a window — it is not nostalgia that you feel, though nostalgia comes too. It is the music itself, carrying its original meaning, undimmed by time, asking whether you have resolved what it was the soundtrack to. The song does not forget. It will keep returning until you have done what the music knew was needed.",
    omen: "A song arriving unexpectedly — heard, remembered, hummed without knowing why — in a context that feels too precise to be random is the fortune's signal.",
    luckyElements: { number: 7, color: "Rose Gold", symbol: "♪" },
  },
  {
    id: "f160",
    title: "The Wildflower Witness",
    category: "love",
    shortText: "Love grows where it is not forced or managed...",
    fortune:
      "The wildflower appears where conditions are right — not because anyone planted it there, but because the particular combination of light, soil, and moisture was exactly what it needed. When it appears, it is more beautiful than anything planted by design in the same spot would have been. A connection has arisen in your life in this way — not planned, not forced into a category, not following the expected sequence of how things develop. The spirits ask you not to manage it into shape or pull it from the ground because it appeared in the wrong season. Let the wildflower grow where it chose to grow. It chose well.",
    omen: "A flower growing in an improbable location — a crack, a wall, between stones — is the wildflower showing you the love that chose its own ground.",
    luckyElements: { number: 4, color: "Wildflower Pink", symbol: "♣" },
  },
  {
    id: "f161",
    title: "The Tended Wound",
    category: "love",
    shortText: "The injury that is cared for becomes the healed place...",
    fortune:
      "There is a wound in a relationship you are part of — old or recent, the injury of a word said in haste, an absence at a critical moment, a truth withheld too long. This wound does not need to be the end of the story. Wounds that are tended — acknowledged, cleaned of the toxin of resentment, covered while they knit — heal. Not into their former state, exactly. Healed wounds leave a different tissue, often stronger at the site of injury than the surrounding area. The relationship that has survived the tending of its wounds is not the same as the one that never had wounds. It is better: proved, tested, and made of a tougher love.",
    omen: "A physical wound healing well — noticed, tended, clearly mending — is the relationship's own injury showing how it might go.",
    luckyElements: { number: 5, color: "Healed Rose", symbol: "✚" },
  },
  {
    id: "f162",
    title: "The Echo of Kindness",
    category: "love",
    shortText:
      "What you offer freely will find its way back changed but recognisable...",
    fortune:
      "Kindness is strange in its economy: you cannot trace exactly where your offering goes, or predict what form it takes when it returns. But it returns. Not necessarily from the person you offered it to, not necessarily in the form you would recognise as repayment. It circulates through the people around you, reentering your life through sources you could not have predicted. You have been generous — perhaps more than has been reflected back to you recently — and the spirits are noting that the echo of that generosity is in motion. It is moving through the system toward you. Remain open to receiving it from unexpected directions.",
    omen: "A kindness received from a stranger — a door held, an unexpected help, a warm word from someone with nothing to gain — is the echo of yours returning.",
    luckyElements: { number: 2, color: "Warm Amber", symbol: "☯" },
  },
  {
    id: "f163",
    title: "The Same Table",
    category: "love",
    shortText: "Sitting together at the same table again is enough...",
    fortune:
      "There is a relationship in your life that was disrupted — by distance, by disagreement, by the accumulated drift of two people moving differently through time. What is needed is not a grand gesture of repair. What is needed is simpler and more demanding: the willingness to sit at the same table again. To eat together, or work side by side, or simply inhabit the same room without the noise of what has been between you filling all the space. The table is just a table. But choosing to sit at it together again is the act of choosing each other, and acts of choosing, done simply and without drama, are how love is made real.",
    omen: "An invitation to eat with someone — any gathering around food — is the same table asking whether you will come.",
    luckyElements: { number: 6, color: "Bread Brown", symbol: "⊹" },
  },
  {
    id: "f164",
    title: "The Paper Crane",
    category: "love",
    shortText: "What is made by hand and given holds the hand's warmth...",
    fortune:
      "In the folding of a paper crane, the hands of the maker are present in every crease — the slight inconsistencies, the pressure of particular fingers, the decision at each step. The crane carries the person who made it. When love is expressed through something made — however simple, however imperfect — it carries the maker in the object. You are being invited toward a handmade expression: not a purchased gesture but a made one. The quality of the making matters less than the fact that your hands were in it. The person who receives it will feel the warmth your hands left there.",
    omen: "Any handmade object — even a simple note, a folded piece of paper, something repaired — appearing in your life is the crane asking to be made.",
    luckyElements: { number: 1, color: "Paper White", symbol: "◇" },
  },
  {
    id: "f165",
    title: "The Long Friendship",
    category: "love",
    shortText: "What deepens over decades cannot be found in months...",
    fortune:
      "There is a kind of love that only time makes — the friendship that has crossed enough seasons together to carry the whole of a person in its memory. The friend who knew you before you knew yourself. The one who has watched you fail and return, and whose faith in you has not been damaged by the failures, only deepened by the watching. This long love is different in kind from the bright intensity of new connection, not lesser — more structural. The spirits are asking you to recognise which of your long friendships has been running on the accumulated capital of earlier closeness without recent deposits. Make a deposit. The account is worth maintaining.",
    omen: "A memory of a long friendship arising unexpectedly — vivid, warm, full of detail — is the account notifying you it has been some time.",
    luckyElements: { number: 9, color: "Sepia", symbol: "∞" },
  },
  {
    id: "f166",
    title: "The Unlit Candle",
    category: "love",
    shortText: "The capacity to give light is present even in the dark...",
    fortune:
      "The unlit candle carries everything it needs to give light — the wick, the wax, the potential of the flame — and asks only for a spark from outside itself. You carry a comparable fullness of what is needed for the love you seek. The warmth is there. The patience is there. The willingness to burn in service of shared light is there. What has been missing is not capacity but contact — the spark from another source that allows what is already present in you to ignite. The spirits promise: the spark is coming. Do not, in the waiting, mistake the unlitness for emptiness. You are not empty. You are ready.",
    omen: "Lighting a candle — even routinely, even casually — is the unlit flame recognising its own readiness.",
    luckyElements: { number: 11, color: "Beeswax Yellow", symbol: "🕯" },
  },

  // ── NEW WARNING (f167–f183) ───────────────────────────────────────────────────
  {
    id: "f167",
    title: "The Rotting Beam",
    category: "warning",
    shortText: "What supports the house must be examined, not assumed...",
    fortune:
      "The rotting beam does not announce itself. It is inside the wall, invisible, quietly losing the structural integrity that everything above it depends upon. The house looks fine. The room is furnished and pleasant. But the beam is compromised, and the people living there do not know it because they have trusted the appearance rather than examined the structure. The spirits are asking you to look behind a wall. Not in fear, but in the clear-eyed way of the builder who knows that maintenance requires seeing what is hidden. One of the supporting structures in your life needs an honest inspection. The sooner you examine it, the simpler the repair.",
    omen: "Any sign of hidden damage — a damp patch on a ceiling, a crack from below, a soft spot in a floor — is the beam asking to be seen.",
    luckyElements: { number: 0, color: "Mould Green", symbol: "⚠" },
  },
  {
    id: "f168",
    title: "The Shrinking Map",
    category: "warning",
    shortText:
      "The world you allow yourself grows smaller without your noticing...",
    fortune:
      "There is a gradual, almost imperceptible process by which some people's world shrinks — not through catastrophe, but through the slow accumulation of avoided situations, foreclosed possibilities, places and people gradually subtracted from the range of what feels accessible. The map of what you are willing to risk, willing to try, willing to expose yourself to has been contracting, perhaps for some time. The spirits are noting this not as judgment but as an alert: the contraction is reversible, but it is easier to reverse early than late. The edge of your current map is not the edge of the world. There is more beyond it than you remember.",
    omen: "Feeling unexpectedly confined in a space that was previously comfortable is the map showing you its edges.",
    luckyElements: { number: 5, color: "Faded Ink", symbol: "⊘" },
  },
  {
    id: "f169",
    title: "The Borrowed Confidence",
    category: "warning",
    shortText: "What performs certainty is not the same as having it...",
    fortune:
      "There is a confidence you have been performing that is not entirely your own — borrowed from a role, a title, a status, a relationship that confers authority. This borrowed confidence has served you well: it has opened rooms and sustained presentations and carried you through moments when your own native confidence was insufficient. But it is borrowed, and therefore it has a cost — the cost of maintaining the performance, of never quite knowing whether people are responding to you or to the borrowed mantle. The spirits are not asking you to drop the mantle suddenly. They are asking: what would happen if you developed the confidence that is entirely your own? That work has been postponed.",
    omen: "A moment when the performance slips and you are more genuinely yourself than usual — and something good results — is the borrowed confidence releasing its debtor.",
    luckyElements: { number: 7, color: "Stage Grey", symbol: "◈" },
  },
  {
    id: "f170",
    title: "The Unexamined Agreement",
    category: "warning",
    shortText:
      "What was agreed to long ago may no longer reflect the parties...",
    fortune:
      "At some point in the past — perhaps many years ago — you made an agreement: with a person, with an institution, with yourself. The terms were fair at the time, or seemed so, or were accepted because the alternatives were unclear. But the parties to that agreement have changed, and the terms have not been renegotiated. You have been honouring a contract that one or both of you has outgrown. The spirits are not saying the agreement was wrong. They are asking whether its terms still accurately reflect what both parties actually need now. Unopened agreements gather interest. It is past time to open this one.",
    omen: "Finding an old contract, letter, or record of a previous arrangement is the agreement asking to be reread.",
    luckyElements: { number: 6, color: "Faded Ochre", symbol: "✉" },
  },
  {
    id: "f171",
    title: "The Over-Pruned Tree",
    category: "warning",
    shortText: "What is cut back too severely cannot bloom as it should...",
    fortune:
      "Pruning is good gardening — removing dead wood, shaping growth, directing energy toward the most vital branches. But a tree pruned too aggressively loses not just the dead wood but the living, the capacity to produce, the reserve that sustains it through hard seasons. You have been pruning yourself — your needs, your wants, your claims on the people around you — more aggressively than is healthy. The self-reduction that began as discipline has become something else: an erasure of legitimate need, an editing-out of things that are not excess but essential. What you have been cutting back was not dead wood. It was alive.",
    omen: "A plant that is struggling despite your care — failing to thrive — is the over-pruned tree showing you the consequence.",
    luckyElements: { number: 3, color: "Ash Grey", symbol: "✿" },
  },
  {
    id: "f172",
    title: "The Debt of Gratitude",
    category: "warning",
    shortText: "What is owed in thanks becomes a weight when unspoken...",
    fortune:
      "There is someone in your life to whom you owe a debt of gratitude that has gone unacknowledged — not out of ingratitude, but out of the common failure to say, clearly, what we genuinely feel toward those who have helped us most. Sometimes the enormity of what we owe makes the acknowledgment feel inadequate, and the inadequacy becomes paralysis, and the paralysis becomes years of silence on something important. The spirits are pressing gently on this specific debt. Not to cause guilt — to create relief. For you and for the person who has been carrying the gift without knowing whether it was received.",
    omen: "Feeling sudden gratitude for someone — unexpectedly, while doing something mundane — is the debt reminding you it is ready to be paid.",
    luckyElements: { number: 4, color: "Warm Brown", symbol: "∅" },
  },
  {
    id: "f173",
    title: "The Frozen Clock",
    category: "warning",
    shortText: "The moment that stops time keeps you from living beyond it...",
    fortune:
      "In the story, she stopped every clock in the house at the moment of her heartbreak and refused to let time move forward. The wedding cake rotted on the table. The dress yellowed. Everything around her became a monument to the moment she refused to release. You have a frozen clock somewhere — a wound, a failure, a moment of humiliation or loss that has been preserved in amber while everything around it continued changing. The spirits are not asking you to forget it. They are asking you to let the clock run again. To allow the moment to become the past rather than the permanent present. The house can be cleared. The clocks can start.",
    omen: "A clock that isn't keeping correct time — fast, slow, stopped — seen in the home or in a dream is your frozen clock pointing to itself.",
    luckyElements: { number: 2, color: "Yellowed Ivory", symbol: "⧖" },
  },
  {
    id: "f174",
    title: "The Thin Ice",
    category: "warning",
    shortText: "What holds now may not hold under the weight you are adding...",
    fortune:
      "The ice that feels solid beneath your feet may not be solid beneath the weight you are planning to place on it. This is not a prophecy of catastrophe — it is the observation of someone who can see the thickness from the shore while you are mid-crossing. In one area of your life, you are adding weight — expectations, commitments, investments — to a foundation that has not yet thickened sufficiently to bear it. The spirits are not saying do not cross. They are saying: check the ice before you bring the whole party. A small test now avoids a large consequence later. The caution is temporary; the ice will thicken.",
    omen: "Seeing ice of any kind — frozen puddle, frost on glass — and noticing its thickness is the thin ice making the metaphor available.",
    luckyElements: { number: 8, color: "Ice Blue", symbol: "△" },
  },
  {
    id: "f175",
    title: "The Unsharpened Blade",
    category: "warning",
    shortText: "A dull edge works harder and cuts less cleanly...",
    fortune:
      "The craftsman's first act before any significant work is to sharpen the tool. The dull blade requires more force, produces more damage, exhausts more of the worker, and does less precise work than the sharp one. You have been working with a dull blade — not through negligence, but through the relentlessness of the work that has left no time for sharpening. The tool is your focus, your skill, your strategic clarity, your ability to say no to what is not your work. These need tending. The spirits are advising that the most productive thing you could do right now is not more work with the existing blade, but stopping to sharpen it.",
    omen: "A knife, tool, or implement noticed as dull — needing sharpening — is the blade making its requirement literal.",
    luckyElements: { number: 5, color: "Steel Grey", symbol: "◈" },
  },
  {
    id: "f176",
    title: "The Ignored Symptom",
    category: "warning",
    shortText: "The body's message is the earliest message; do not wait...",
    fortune:
      "There is something your body has been trying to tell you that you have been managing rather than listening to. Managed symptoms — suppressed, medicated past, powered through — do not disappear. They go underground and grow more insistent. The spirits are not delivering a diagnosis. They are delivering an instruction: stop managing and start listening. What is the symptom a signal of? Not necessarily disease — sometimes exhaustion, sometimes grief, sometimes the accumulated cost of a life not quite aligned with what you actually need. The body is not an obstacle to the important work. It is the one doing the important work. Hear it.",
    omen: "Any physical symptom that persists — or that returns after you thought it was resolved — is the body repeating itself with more emphasis.",
    luckyElements: { number: 0, color: "Pale Ash", symbol: "✚" },
  },
  {
    id: "f177",
    title: "The Crowded Threshold",
    category: "warning",
    shortText: "Too many people have been given the key...",
    fortune:
      "Your inner life — your time, your attention, your access to your own quietest self — has too many people in it. Not because you are careless about boundaries, but because you are generous, and because the world has a way of rewarding openness with demands that accumulate past the point of sustainability. The threshold of your interior house has become crowded with the requirements of others. The spirits are asking you to review who holds a key to your quietest rooms. Not to evict everyone — some of them belong there — but to recognise that a threshold accessible to all is no threshold at all. Your deepest self needs space to exist.",
    omen: "An actual doorway or entrance that feels too crowded or inaccessible is the threshold of your inner house in literal form.",
    luckyElements: { number: 9, color: "Charcoal", symbol: "⊘" },
  },
  {
    id: "f178",
    title: "The Painted Over",
    category: "warning",
    shortText: "What lies beneath the fresh coat has not been resolved...",
    fortune:
      "Fresh paint over damaged plaster looks fine for a while — the surface is smooth, the colour is clean, the room looks cared for. But the damage beneath continues: the moisture, the crumbling, the crack that has not been filled — and it shows again eventually, often in a worse state for having been concealed rather than repaired. You have painted over something. A resentment not properly resolved, an agreement not honestly renegotiated, a need you presented as managed when it was merely suppressed. The surface holds for now. But the spirits are asking you to strip the paint, face the damage, and repair what is underneath rather than cover it again.",
    omen: "Seeing paint peeling or bubbling — on any surface — is the fresh coat revealing what was painted over beneath it.",
    luckyElements: { number: 6, color: "Peeling White", symbol: "⁂" },
  },
  {
    id: "f179",
    title: "The Borrowed Story",
    category: "warning",
    shortText:
      "The narrative you live inside may have been written by another...",
    fortune:
      "Every family has its stories about what is possible for people like you — what they achieve, what they fall short of, what they are capable of, what inevitably defeats them. These stories are told with love, mostly. They are not malicious. But they were written from someone else's evidence, about someone else's circumstances, and they have been handed to you as though they were your own. The spirits are asking you to read the story you currently live inside with some critical distance. Does it have your name on it, or someone else's? Does it describe your possibilities, or the possibilities of a version of you assembled from other people's limits?",
    omen: "Hearing a family story you have heard many times before and suddenly feeling it doesn't quite fit you is the borrowed story starting to return its author.",
    luckyElements: { number: 3, color: "Faded Sepia", symbol: "✒" },
  },
  {
    id: "f180",
    title: "The Full Cup",
    category: "warning",
    shortText: "What is already full cannot receive — make space...",
    fortune:
      "In the old Zen story, the master pours tea until the cup overflows, and when the student protests, explains: you are like this cup. Full of your own opinions, full of your own certainties. Before I can teach you anything, you must first empty. Your current certainties — about how your situation works, about what is possible and what isn't, about who you are and what you want — are so complete that there is no room for what the next chapter requires. The spirits are not asking you to abandon your knowledge. They are asking you to hold it a little less tightly — to leave room for what you have not yet learned.",
    omen: "Any cup or vessel filled to the exact brim — about to overflow — seen at a significant moment is the fortune making itself literal.",
    luckyElements: { number: 0, color: "Pale Clay", symbol: "∅" },
  },
  {
    id: "f181",
    title: "The Uncrossed Distance",
    category: "warning",
    shortText: "A small gap uncrossed becomes a canyon over time...",
    fortune:
      "In one of your significant relationships, there is a small uncrossed distance — a gulf that has existed for some time but has not grown dramatically, and which has therefore been tolerated rather than bridged. The danger is not that the distance is currently enormous. The danger is that small uncrossed distances grow silently. What can be crossed now with a few honest words will require a significant effort after another year of silence, and may not be crossable at all after several more. The spirits are asking you not to wait for the gulf to become unmistakable before you address it. Cross it now, while it is still small.",
    omen: "Standing at the edge of any gap or crossing — a stream, a ditch, a space between buildings — and pausing is the distance asking whether you will cross it.",
    luckyElements: { number: 7, color: "Rust Orange", symbol: "⊗" },
  },
  {
    id: "f182",
    title: "The Tide Going Out",
    category: "warning",
    shortText: "What the receding water reveals, you must see clearly...",
    fortune:
      "When the tide pulls back, it exposes what was hidden: the rocks, the debris, the accumulated deposits that the high water covered with its clean surface. This is not pleasant to see but it is necessary to see. A situation in your life — a relationship, a professional arrangement, a financial picture — is having its tide go out. The flattering surface is pulling back. What is being revealed is real, and it requires your honest attention. The spirits are not delivering this as disaster. The tide goes out so that the exposed ground can be cleaned, the hidden rocks can be mapped, the truth of the bottom can be known. See it. Use what you see.",
    omen: "Water receding — from a glass slowly emptied, from a shoreline, from a rain puddle drying — is the tide demonstrating its withdrawal.",
    luckyElements: { number: 4, color: "Exposed Sand", symbol: "⚠" },
  },
  {
    id: "f183",
    title: "The Uncalibrated Scale",
    category: "warning",
    shortText: "What has never been zeroed cannot measure truly...",
    fortune:
      "A scale never zeroed will give every reading with the same consistent error — it will measure a pound as slightly more or less than a pound, and that error will compound across every transaction that relies on it. You have a scale like this somewhere in your thinking — a belief, an assumption, an inherited metric of value that has never been examined and zeroed against reality. It colours every judgment you make in its domain without your knowing it. The spirits are asking you to find the zero. Not to abandon measurement — to correct it. Once corrected, even by a small amount, the accuracy of everything that follows improves.",
    omen: "Any moment of realising that your estimate of something was consistently off — in one direction, by a similar amount — is the scale being zeroed.",
    luckyElements: { number: 2, color: "Balance Grey", symbol: "⚖" },
  },

  // ── NEW BLESSING (f184–f208) ──────────────────────────────────────────────────
  {
    id: "f184",
    title: "The Stone Table",
    category: "blessing",
    shortText: "What holds everything needs no ornamentation...",
    fortune:
      "The great stone tables of ancient traditions needed nothing added to them — no gilding, no carving, no surface decoration — because the stone itself was enough: massive, stable, old beyond counting, capable of bearing anything placed upon it without trembling. You have developed this quality. The stability you offer to those around you — the steady table-ness of you, the fact that people can place the heaviest things on your presence without fear of collapse — is a gift of enormous value in a world full of surfaces that move. The blessing being offered is the recognition of this: you are more solid than you feel. What is placed on you is held.",
    omen: "A stone surface felt beneath your hands — a wall, a step, a counter — and its solidity noticed is the stone table affirming itself.",
    luckyElements: { number: 4, color: "Granite Grey", symbol: "⌂" },
  },
  {
    id: "f185",
    title: "The Naming",
    category: "blessing",
    shortText:
      "What is named is acknowledged; what is acknowledged becomes real...",
    fortune:
      "There is something in your life — a gift, a quality, an aspect of your nature, a relationship — that has existed without being named. The unnamed things are at risk of being treated as though they do not exist, because in human experience, naming is a kind of summoning: it calls attention, it confirms reality, it allows the named thing to be honoured and tended. The blessing being offered is the instruction to name it. Say aloud what the gift is. Tell someone what the relationship means. Acknowledge to yourself what the quality in you that you have been dismissing actually is. The naming completes the thing and allows it to grow.",
    omen: "Hearing your own name spoken with unusual warmth — by anyone, in any context — is the naming power demonstrating itself.",
    luckyElements: { number: 1, color: "Clear Light", symbol: "✧" },
  },
  {
    id: "f186",
    title: "The Repaired Bowl",
    category: "blessing",
    shortText:
      "In the gold of the mending, the broken place becomes the most beautiful...",
    fortune:
      "The Japanese art of kintsugi fills the cracks of broken pottery with gold — not disguising the break, not trying to make the repaired vessel look as though it had never been broken, but celebrating the history of fracture and repair as the most beautiful part of the object's story. The place where you were broken and repaired is not your weakness. It is your kintsugi. The healing that happened there — imperfect, visible, traced in something that looks like gold if you know what you are seeing — is the most interesting part of your history. The spirits are offering you permission to stop hiding the mended places. They are, in fact, what makes you luminous.",
    omen: "Any cracked or broken object that you continue to use and love rather than discard is your repaired bowl in material form.",
    luckyElements: { number: 7, color: "Kintsugi Gold", symbol: "◎" },
  },
  {
    id: "f187",
    title: "The Morning Star",
    category: "blessing",
    shortText: "The brightest star appears just before the dawn...",
    fortune:
      "Venus, the morning star, appears at her most brilliant in the sky just before sunrise — so bright that people who don't know what they are looking at sometimes mistake her for a light in a window, a plane, an impossibility. She appears precisely in the darkest and final part of the night, as if to mark the approaching light by being extraordinary. What is approaching in your life — the clarity, the change, the arrival — will be preceded by something that seems, in the darkness, almost too vivid to be real. When you see something unexpectedly luminous in your life, do not question it. It is the morning star. The dawn it announces is already on its way.",
    omen: "Seeing a particularly bright and steady light in the pre-dawn or dawn sky is the morning star in its announcement role.",
    luckyElements: { number: 1, color: "Venus Gold", symbol: "★" },
  },
  {
    id: "f188",
    title: "The Unexpected Inheritance",
    category: "blessing",
    shortText:
      "From the most unlikely source, something of great value arrives...",
    fortune:
      "Not all inheritances are expected. Some come from outside the bloodline — from a mentor, a stranger, a community, a tradition encountered later in life that claims you as its own with an unexpectedness that leaves you bewildered and grateful in equal measure. Something is about to be given to you that you did not ask for and did not know you needed: a body of knowledge, a way of seeing, a community that recognises you, a set of skills that turns out to have been waiting for your particular use of them. Receive it without demanding an explanation of why it chose you. It knows its heir.",
    omen: "Receiving anything unexpected — an object, knowledge, an invitation from an unusual source — is the inheritance presenting its deed.",
    luckyElements: { number: 8, color: "Mahogany", symbol: "⊕" },
  },
  {
    id: "f189",
    title: "The Restored Voice",
    category: "blessing",
    shortText: "What was silenced finds its register again...",
    fortune:
      "At some point, under some pressure, you learned to be quieter than you were — to modulate the full register of your voice, to speak less and smaller, to occupy less acoustic space. This learning was perhaps necessary. But the voice that was reduced is ready to be restored. Not to volume necessarily, or volume alone, but to its full range: the frequency of honest opinion, the tone of genuine delight, the quality of speech that comes from someone who has stopped editing their presence for the comfort of others. The blessing is the restoration. Speak. With the full instrument you were given. Someone who needs to hear it is already listening.",
    omen: "Singing unexpectedly — in the car, in the shower, without thinking — and feeling it as a kind of freedom is the voice remembering its full register.",
    luckyElements: { number: 5, color: "Warm Teal", symbol: "♪" },
  },
  {
    id: "f190",
    title: "The Threshold of Spring",
    category: "blessing",
    shortText:
      "After the long withholding, the earth gives everything at once...",
    fortune:
      "There is a threshold in early spring when the decision has been made — not yet visible in full, but irreversible: the bulbs have broken ground, the first warmth has reached the root systems, and what has been withheld through winter is now in the process of giving itself all at once. You are at this threshold. Something that has been accumulating underground through a long cold season is about to break through — not gradually, but in the sudden, inexorable way of spring, where what was bare ground is covered in green before you noticed the transition. The abundance is already in motion. You will see it very soon.",
    omen: "Any sign of spring — a bud, a returning bird, warmth arriving where it was cold — is the threshold declaring it has been crossed.",
    luckyElements: { number: 3, color: "Pale Green", symbol: "🌱" },
  },
  {
    id: "f191",
    title: "The Coral Reef",
    category: "blessing",
    shortText: "What you have built slowly is teeming with life...",
    fortune:
      "The coral reef is built grain by grain over centuries — each individual polyp adding its small structure to the whole, none of them aware of the extraordinary ecosystem they are collectively creating. The reef does not try to be abundant. It simply grows, consistently, in its nature, and abundance clusters around it as a consequence. You have been building your reef — the accumulated work, the consistent presence, the relationships maintained across years — and what has clustered around it is more than you can see from inside it. Others see the abundance you have created. The blessing is the invitation to see it yourself.",
    omen: "Any teeming, living thing — a garden in bloom, a busy street corner, an active hive — is the reef showing you what consistent small building creates.",
    luckyElements: { number: 6, color: "Coral", symbol: "✿" },
  },
  {
    id: "f192",
    title: "The Translator's Gift",
    category: "blessing",
    shortText:
      "You carry something between worlds that neither world can give itself...",
    fortune:
      "The great translators do not merely convert words — they carry meaning across a gap that neither side can cross alone, finding equivalences that illuminate both languages in the act of bridging them. You have this gift. Not necessarily in literal language, but in the capacity to move between worlds — between disciplines, between generations, between the people who cannot quite reach each other without your particular form of bridging. This gift has felt like belonging nowhere. It is, in fact, the gift of belonging to the space between — which is the most valuable place in any system that needs itself to be connected. The blessing is the recognition: the bridge is not homeless. It is essential.",
    omen: "A moment of being understood across an expected gap — of being the thing that makes two separate things connect — is the translator's gift in action.",
    luckyElements: { number: 5, color: "Bridge Grey", symbol: "⌀" },
  },
  {
    id: "f193",
    title: "The Lantern Festival",
    category: "blessing",
    shortText:
      "When many lights are released together, the sky remembers warmth...",
    fortune:
      "The tradition of releasing lanterns is the tradition of collective hope — the act of placing your light alongside others' lights and letting them rise together, each separate but part of the same ascent. You have been burning as a solitary lamp. The spirits are announcing a gathering: a convergence of people who carry the same kind of light you carry, who are engaged with the same questions, who find in your particular frequency something that matches theirs. The festival is assembling. Some of the lights you will recognise immediately. Others will surprise you with how closely they resemble your own. Rise with them.",
    omen: "Lights seen in multiples — a row of candles, a string of lights, stars in a clear grouping — is the festival announcing its gathering.",
    luckyElements: { number: 11, color: "Paper Lantern Gold", symbol: "✧" },
  },
  {
    id: "f194",
    title: "The Trusted Hands",
    category: "blessing",
    shortText:
      "What you place in the right hands is not lost but multiplied...",
    fortune:
      "There is a freedom available to you that you have not yet taken: the freedom of entrusting something important to the care of someone whose capability and care you trust completely. You have been carrying something — a project, a responsibility, a piece of your own vulnerability — that you could put down into the right hands without it being lost. The spirits are pointing to the hands that are ready. Not out of your abdication, but out of the deep collaborative sense that what you carry can be better served by a partnership than by your solo stewardship of it. Put it down. The right hands are already open.",
    omen: "Someone offering their hands — literally, to help you carry something — is the trusted hands arriving in their most physical form.",
    luckyElements: { number: 9, color: "Warm Gold", symbol: "✋" },
  },
  {
    id: "f195",
    title: "The Returning Rains",
    category: "blessing",
    shortText: "The long wait was the soil preparing itself to receive...",
    fortune:
      "There are places where the rains come once a year and the entire ecosystem prepares for months in advance — hardening, conserving, waiting in a disciplined readiness that the casual observer might mistake for desolation. When the rains arrive, the landscape transforms within hours: seeds that have been patient for years crack open, flowers that were invisible bloom overnight, the ground drinks deeply and the whole terrain becomes a different thing than it was. You have been the landscape in the dry season. The rains are returning. What they will find is not depleted but ready: hardened, conserved, prepared by the very drought that looked like its destruction.",
    omen: "First rain after a dry period — felt on the skin, heard on a window — is the returning rains confirming their arrival in your life.",
    luckyElements: { number: 7, color: "Storm Blue", symbol: "⊹" },
  },
  {
    id: "f196",
    title: "The Gift of Years",
    category: "blessing",
    shortText: "What the young cannot have, time is giving you...",
    fortune:
      "There is a particular richness that belongs only to those who have lived long enough to know the pattern — who have made enough mistakes to recognise a category of error before it fully arrives, who have loved enough times to know what love actually feels like in its sustainable forms, who have been through enough seasons to know that the current one will not last forever. This knowledge is not wisdom in the abstract. It is the practical, warm, specific knowledge of someone who has been here before. The blessing of years is this knowledge. You have it. It is worth sharing, worth trusting, worth letting guide you. Do not make young mistakes out of habit.",
    omen: "Being asked by someone younger for your perspective on something you have genuinely been through is the gift of years presenting itself to be used.",
    luckyElements: { number: 12, color: "Aged Wood", symbol: "⌾" },
  },
  {
    id: "f197",
    title: "The Cleared Hearth",
    category: "blessing",
    shortText: "The fire burns better when the old ash is swept away...",
    fortune:
      "The hearth that has been cleared of its accumulated ash draws better: the air flows freely, the new fire catches more easily, the heat distributes more completely through the room. Something in your life has been cleared — the ending that made room, the loss that made space, the closing of something that had been smouldering long past its useful heat. The clearing was painful. But look at the hearth now. The air is moving again. The room is ready for new heat. The clearing was not the loss of the fire — it was the preparation for a better one. Light it.",
    omen: "A fireplace or hearth freshly cleaned and ready — or any space cleared and made ready — is the cleared hearth inviting the new flame.",
    luckyElements: { number: 2, color: "Hearthstone Grey", symbol: "🕯" },
  },
  {
    id: "f198",
    title: "The Archive of Joy",
    category: "blessing",
    shortText: "What delighted you once still holds that delight intact...",
    fortune:
      "Somewhere in your history there is an archive of pure delight — the things that once made you incandescent with joy: a particular landscape, a kind of music, a physical sensation, a way of spending an afternoon that filled you completely without requiring justification. You have set some of these things down — in the serious business of becoming a functional adult, in the compression of a busy life, in the belief that delight requires deserving. The spirits are granting access to the archive. Not as nostalgia, but as living inventory: these things still exist, and your capacity for the joy they bring has not been extinguished. Go back to one of them. Today.",
    omen: "Coming across an old object, photo, or memory from a time of particular joy is the archive opening its door.",
    luckyElements: { number: 3, color: "Sunflower Yellow", symbol: "★" },
  },
  {
    id: "f199",
    title: "The Night Heron",
    category: "blessing",
    shortText:
      "Some gifts are given only in the dark to those who are awake to receive them...",
    fortune:
      "The night heron is rarely seen by those who do not look for it — it feeds in the hours when most creatures have gone to shelter, moving silently at the water's edge in the dark. To see it requires the willingness to be present in the time that others do not value. You have spent time in the dark — in the late hours, in the difficult seasons, in the quiet places that do not attract crowds — and in that time you have received gifts that are only available there. A particular depth of understanding. A quality of presence that the comfortably lit do not develop. A knowledge of what endures through the night. These are extraordinary gifts. The heron has been your companion in them.",
    omen: "Seeing any bird that is active at the times others sleep — owl, heron, bat — is the night heron confirming the gifts of the dark hours.",
    luckyElements: { number: 8, color: "Night Blue", symbol: "☽" },
  },
  {
    id: "f200",
    title: "The Book Found Twice",
    category: "blessing",
    shortText: "The second reading reveals what the first could not receive...",
    fortune:
      "There is a book — or a piece of music, a teaching, a conversation — that you encountered earlier in your life and could not quite receive, because you were not yet the person who was ready for it. It is approaching you again. You will recognise it — perhaps literally, perhaps in the way an idea that once seemed abstract now arrives with the weight of lived confirmation. This second encounter will be different from the first. You have become, through your living, the reader this particular text has been waiting for. Something will open in it that was sealed before. Pay attention to returns, to things that find you for a second time. They are usually more important than the new arrivals.",
    omen: "Encountering something — a title, an idea, a name — that you first encountered years ago, and feeling it land differently now, is the book found twice.",
    luckyElements: { number: 6, color: "Old Paper", symbol: "◉" },
  },
  {
    id: "f201",
    title: "The Living Root",
    category: "blessing",
    shortText: "What appears dead at the surface is alive beneath...",
    fortune:
      "The tree that appears dead in winter — no leaves, no visible growth, the bark grey and still — is not dead. It is drawing down, drawing inward, drawing into the root system where life is maintained at a temperature and depth the frost cannot reach. What looks dead in your life right now is more likely dormant. The project that has stalled, the relationship that has gone quiet, the part of yourself that seems to have stopped producing: look more carefully. Is there stillness, or is there cessation? Stillness is seasonal. Cessation is different. What the spirits see is stillness. The root is alive. Spring acts in its own time.",
    omen: "A plant that was thought dead putting out a single new shoot is the living root declaring its survival in the most obvious terms available.",
    luckyElements: { number: 4, color: "Bark Brown", symbol: "⌂" },
  },
  {
    id: "f202",
    title: "The Tended Flame",
    category: "blessing",
    shortText: "Some lights exist because someone kept them burning...",
    fortune:
      "In the ancient temples, someone was always responsible for the eternal flame — not a dramatic act, not a glamorous role, but the daily and nightly act of tending, feeding, adjusting, ensuring the continuity of the light. You have been this person — for a family, a community, an institution, a tradition, a relationship, a person who needed the flame kept for them while they could not tend it themselves. This is unglamorous, necessary, sacred work. The blessing being offered is the recognition: the light that has continued is continuing because of your tending. There are people who are warm because you did not let it go out. That is not a small thing.",
    omen: "A candle or flame burning in a window — seen from outside, suggesting someone is home — is the tended flame showing its meaning.",
    luckyElements: { number: 10, color: "Candle Glow", symbol: "🕯" },
  },
  {
    id: "f203",
    title: "The Crossroads Blessing",
    category: "blessing",
    shortText: "Where the roads meet, power gathers...",
    fortune:
      "The crossroads has always been a sacred place — where paths from different directions meet, where travelers from different origins arrive at the same point, where the geography of the world creates a particular convergence of possibility. You are at a crossroads. Not a crisis necessarily — a convergence. Multiple directions are arriving at the same point in your life, and the meeting place has a particular power. The spirits are blessing the crossroads itself, not just the direction you will choose from it. Something about being at the meeting of ways — the openness, the expanded vision, the brief sense of all possibilities being present — is the gift. Receive it fully before you choose your road.",
    omen: "Standing at an actual crossroads or intersection and feeling something — expectation, possibility, particular attention — is the crossroads blessing being given.",
    luckyElements: { number: 8, color: "Crossroads Dust", symbol: "✵" },
  },
  {
    id: "f204",
    title: "The Astronaut's Return",
    category: "blessing",
    shortText: "To have left and come back is to understand what you left...",
    fortune:
      "The astronauts who return from space describe the same experience: the earth seen from distance becomes heartbreakingly beautiful, every border invisible, every conflict diminished to the scale of its actual smallness, every ordinary thing on the surface revealed as the extraordinary miracle it always was. You have had some equivalent of this journey — a period of distance from your ordinary life, through illness, loss, removal, or simply a shift in perspective. You are returning from that distance now. Let the return be the astronaut's return: let what you have seen from outside restore your sense of the extraordinary value of the ordinary. It is still there. It has been waiting.",
    omen: "An aerial view — from a plane, a hill, a tall building — looking down on ordinary life and feeling it as beautiful is the astronaut's perspective arriving.",
    luckyElements: { number: 9, color: "Earth Blue", symbol: "★" },
  },
  {
    id: "f205",
    title: "The Garden After Rain",
    category: "blessing",
    shortText:
      "Everything is more vivid in the aftermath of what washed through...",
    fortune:
      "The garden after rain smells different from the garden before — the petrichor, the opened soil, the washed leaves catching the returning light — and everything is more distinct, more vivid, more precisely itself than it was before the water moved through. Something that has moved through your life recently — a difficulty, an ending, a significant passage — has had this effect: it has washed through the landscape of your days and left everything more vivid and more precisely itself in the aftermath. The colours are cleaner. The value of what remains is clearer. The garden after rain is not lesser for what it has been through. It is more awake.",
    omen: "The garden after actual rain — smelled, walked through, looked at in new light — is the blessing confirming its own metaphor.",
    luckyElements: { number: 3, color: "Washed Green", symbol: "⊹" },
  },
  {
    id: "f206",
    title: "The Full Circle",
    category: "blessing",
    shortText:
      "What began is completing; the return carries the whole journey...",
    fortune:
      "You are completing a circle — returning to a beginning with everything you gathered on the journey: the understanding, the hard-won ease, the losses that deepened you, the gifts that surprised you, the particular quality of self that only the long road makes. The circle is not a return to where you started in the sense of arriving at the same point. The spiral is the truer image: same direction, higher level. You have travelled the whole circumference of something significant. The blessing of this fortune is the ceremony of recognition: you have made the full journey. Whatever you began — the project, the becoming, the long work of healing or growth — it is completing. Let yourself know this.",
    omen: "Coming across the very first thing that began a significant chapter of your life — an object, a place, a person — is the circle showing you its completion.",
    luckyElements: { number: 12, color: "Sunrise Gold", symbol: "☀" },
  },
  {
    id: "f207",
    title: "The Bell Tone",
    category: "blessing",
    shortText:
      "A single struck tone resonates long after the hand has moved away...",
    fortune:
      "Strike a bell and it continues to sing long after the contact has ended — the vibration moving through the metal in gradually diminishing rings, each ring less than the one before but still fully itself, still fully the tone, still fully the bell. Something you have offered — a teaching, an act of love, a piece of work, a kindness — is still ringing in someone's life long after you have moved on from the moment that produced it. You do not hear it from where you stand. But the tone is still in the air, still reaching the people it was meant to reach, still doing what you made it to do. The bell does not know how long it rings. It simply rings.",
    omen: "Hearing a bell tone — a church bell, a meditation bell, any pure sustained note — and feeling it affect you is the bell showing you the nature of your own resonance.",
    luckyElements: { number: 11, color: "Silver Tone", symbol: "⌾" },
  },
  {
    id: "f208",
    title: "The Open Horizon",
    category: "blessing",
    shortText:
      "After what was in the way has cleared, look how far you can see...",
    fortune:
      "The open horizon is not a destination — it is a condition of vision. When what was obscuring the view is removed — the obstacle, the distraction, the demanding presence of what required all your attention — the horizon becomes visible again, and with it the sense that you can go as far as you can see, and then as far as the next horizon, and then as far as the one after that. The openness is the blessing. You have been in enclosing terrain for some time. The terrain is opening. The spirits are asking you to lift your eyes from the ground and look as far as you can see — then further. That further is yours.",
    omen: "Any moment of suddenly expanded view — a vista opening, a crowd parting, a window offering a longer sight line — is the open horizon arriving.",
    luckyElements: { number: 1, color: "Clear Light", symbol: "✦" },
  },
];

export function getFortuneByColor(colorIndex: number): Fortune {
  // Legacy function — kept for backwards compatibility
  // No longer used for actual selection (color is now just aesthetic)
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
