export const TIME_TRAVELER_MISSION_IDS = [
  "mission-stamp-act",
  "mission-boston-massacre",
  "mission-boston-tea-party",
  "mission-continental-congress",
];

const mission = data => ({
  ...data,
  kind: "mission",
  duration: "4-6 min",
});

export const TIME_TRAVELER_MISSIONS = [
  mission({
    id: "mission-stamp-act",
    title: "Mission 01: The Stamp Act",
    description: "Trace how a tax on printed materials became a test of political authority.",
    eventId: "stamp-act",
    image: "stamp-act",
    skillId: "causality",
    artifact: {
      label: "ARCHIVE ARTIFACT 01",
      title: "Stamp Act protest dossier",
      summary: "Printed taxes, political argument, and colonial organizing connected in one case file.",
    },
    clues: [
      {
        id: "printed-tax",
        title: "A tax carried by paper",
        prompt: "Find what Parliament required on many printed materials.",
        reveal: "The Stamp Act required an official stamp on many legal and commercial papers, newspapers, and other printed items.",
        target: { section: "timeline", eventId: "stamp-act" },
        hints: ["Look for a law visible in everyday transactions.", "The clue is in the 1765 timeline record.", "Open the Stamp Act event and focus on printed paper."],
      },
      {
        id: "organizer",
        title: "Resistance becomes organized",
        prompt: "Identify the organizer who connected opposition with claims about self-government.",
        reveal: "Samuel Adams used meetings, print, and political organizing to build resistance networks.",
        target: { section: "people", personId: "samuel-adams" },
        hints: ["This clue is a person, not a document.", "Look among the Patriot organizers.", "Open Samuel Adams's dossier."],
      },
    ],
    questions: [
      { id: "stamp-material", skillId: "evidence", prompt: "Why did the Stamp Act reach so visibly into colonial life?", options: [{ id: "paper", label: "It applied to many commonly used printed materials" }, { id: "tea", label: "It applied only to imported tea" }, { id: "land", label: "It transferred colonial land to Parliament" }], answerId: "paper", explanation: "The required stamp appeared on printed materials used in law, commerce, and public communication.", target: { section: "timeline", eventId: "stamp-act" } },
      { id: "stamp-claim", skillId: "causality", prompt: "What larger issue did resistance raise?", options: [{ id: "authority", label: "Whether Parliament could tax colonists without their representation" }, { id: "independence", label: "Whether Britain had already recognized independence" }, { id: "harbor", label: "Whether Boston should close its harbor" }], answerId: "authority", explanation: "The crisis connected a tax to a wider argument about representation and authority.", target: { section: "people", personId: "samuel-adams" } },
    ],
  }),
  mission({
    id: "mission-boston-massacre",
    title: "Mission 02: The Boston Massacre",
    description: "Separate public memory from legal proof in the event and its later trials.",
    eventId: "massacre",
    image: "massacre",
    skillId: "evidence",
    artifact: {
      label: "ARCHIVE ARTIFACT 02",
      title: "Boston Massacre evidence file",
      summary: "A case file distinguishing the March 5 shooting from the trials later in 1770.",
    },
    clues: [
      {
        id: "event-date",
        title: "Event before trial",
        prompt: "Establish what happened on March 5 before examining the later legal case.",
        reveal: "Five colonists died after a confrontation with British soldiers on March 5, 1770. The trials came later.",
        target: { section: "timeline", eventId: "massacre" },
        hints: ["Begin with the event record, not a later speech.", "Look for the March 5 timeline entry.", "Open Boston Massacre in Timeline."],
      },
      {
        id: "defense",
        title: "An unpopular defense",
        prompt: "Find the Patriot lawyer who insisted that the accused deserved a fair hearing.",
        reveal: "John Adams defended the soldiers while opposing imperial policy, separating political allegiance from legal responsibility.",
        target: { section: "evidence", evidenceId: "adams-defense" },
        hints: ["The figure is a lawyer and a Patriot.", "The source is a defense argument.", "Open John Adams's Defense Argument."],
      },
    ],
    questions: [
      { id: "massacre-sequence", skillId: "chronology", prompt: "Which came first?", options: [{ id: "shooting", label: "The March 5 confrontation and shooting" }, { id: "trial", label: "The soldiers' trials later in 1770" }, { id: "congress", label: "The First Continental Congress" }], answerId: "shooting", explanation: "The Boston Massacre occurred on March 5; the trials followed later that year.", target: { section: "timeline", eventId: "massacre" } },
      { id: "massacre-reasoning", skillId: "evidence", prompt: "What does Adams's defense best demonstrate?", options: [{ id: "individual", label: "Responsibility should be evaluated through evidence about individuals" }, { id: "support", label: "Defending the soldiers meant supporting every British policy" }, { id: "no-deaths", label: "No colonists died in the confrontation" }], answerId: "individual", explanation: "The argument distinguishes political anger from the evidence required to judge each defendant.", target: { section: "evidence", evidenceId: "adams-defense" } },
    ],
  }),
  mission({
    id: "mission-boston-tea-party",
    title: "Mission 03: The Boston Tea Party",
    description: "Investigate the ship and cargo behind a deliberately bounded night action.",
    eventId: "tea-party",
    image: "tea-party",
    skillId: "evidence",
    artifact: {
      label: "ARCHIVE ARTIFACT 03",
      title: "Tea chest cargo record",
      summary: "Material evidence connecting the Dartmouth, tea cargo, and deliberate destruction.",
    },
    clues: [
      {
        id: "dartmouth",
        title: "A ship under deadline",
        prompt: "Find the vessel whose customs deadline intensified the confrontation.",
        reveal: "The Dartmouth carried East India Company tea. Customs rules narrowed the choices available to the ship and town.",
        target: { section: "evidence", evidenceId: "dartmouth-record" },
        hints: ["This clue is a ship and an administrative record.", "Its name begins with D.", "Open the Dartmouth Arrival Record."],
      },
      {
        id: "cargo",
        title: "Targeted cargo",
        prompt: "Identify what protesters destroyed rather than treating the action as general looting.",
        reveal: "Tea chests were the deliberately targeted cargo; the reconstructed object cannot identify an individual participant.",
        target: { section: "evidence", evidenceId: "tea-chest" },
        hints: ["Look for a material reconstruction.", "The targeted commodity was taxed.", "Open the tea chest in Evidence."],
      },
    ],
    questions: [
      { id: "tea-target", skillId: "evidence", prompt: "What does the tea chest most directly help establish?", options: [{ id: "cargo", label: "The category of cargo deliberately targeted" }, { id: "identity", label: "The identity of every participant" }, { id: "speech", label: "The exact words spoken on the ships" }], answerId: "cargo", explanation: "The reconstruction illustrates the targeted cargo but cannot identify who handled an original chest.", target: { section: "evidence", evidenceId: "tea-chest" } },
      { id: "tea-urgency", skillId: "causality", prompt: "Why did the Dartmouth's customs deadline matter?", options: [{ id: "choices", label: "It narrowed the legal choices available to the ship and town" }, { id: "independence", label: "It automatically declared colonial independence" }, { id: "trial", label: "It began the Boston Massacre trials" }], answerId: "choices", explanation: "The deadline turned an argument about authority and cargo into an urgent confrontation.", target: { section: "evidence", evidenceId: "dartmouth-record" } },
    ],
  }),
  mission({
    id: "mission-continental-congress",
    title: "Mission 04: The Continental Congress",
    description: "Follow the chain from punishment in Massachusetts to colonial coordination.",
    eventId: "congress",
    image: "congress",
    skillId: "causality",
    artifact: {
      label: "ARCHIVE ARTIFACT 04",
      title: "Continental coordination portfolio",
      summary: "A political record linking punitive policy, intercolonial alarm, and collective action.",
    },
    clues: [
      {
        id: "punishment",
        title: "Punishment spreads alarm",
        prompt: "Find how Britain's response to the Tea Party affected other colonies.",
        reveal: "Coercive measures against Massachusetts alarmed other colonies and encouraged a coordinated response.",
        target: { section: "timeline", eventId: "congress" },
        hints: ["Look for an effect of the Tea Party.", "The response concerned colonies beyond Massachusetts.", "Open First Continental Congress in Timeline."],
      },
      {
        id: "network",
        title: "From Boston to the colonies",
        prompt: "Identify a political network connecting local resistance with broader cooperation.",
        reveal: "Samuel Adams and John Hancock helped connect Massachusetts resistance with wider colonial leadership.",
        target: { section: "people", personId: "john-hancock" },
        hints: ["The clue includes a merchant and Patriot leader.", "He was an ally of Samuel Adams.", "Open John Hancock's dossier."],
      },
    ],
    questions: [
      { id: "congress-cause", skillId: "causality", prompt: "What helped bring colonies together in 1774?", options: [{ id: "punishment", label: "Alarm over punitive measures against Massachusetts" }, { id: "recognition", label: "Britain's recognition of independence" }, { id: "peace", label: "The end of every dispute over taxation" }], answerId: "punishment", explanation: "Britain's coercive response encouraged colonies to coordinate at the First Continental Congress.", target: { section: "timeline", eventId: "congress" } },
      { id: "congress-network", skillId: "perspective", prompt: "What made political networks important?", options: [{ id: "coordination", label: "They helped local resistance become intercolonial action" }, { id: "isolation", label: "They kept every colony isolated" }, { id: "evidence", label: "They made historical evidence unnecessary" }], answerId: "coordination", explanation: "Personal, commercial, and political networks helped transform local grievances into collective action.", target: { section: "people", personId: "john-hancock" } },
    ],
  }),
];
