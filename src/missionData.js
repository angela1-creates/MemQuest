export const TIME_TRAVELER_MISSION_IDS = [
  "mission-stamp-act",
  "mission-boston-massacre",
  "mission-boston-tea-party",
  "mission-continental-congress",
];

export const PILOT_MISSION_ID = "mission-colonial-coordination";

const mission = data => ({
  ...data,
  kind: "mission",
  category: "event-file",
  duration: "3-4 min",
});

export const PILOT_MISSION = {
  id: PILOT_MISSION_ID,
  kind: "mission",
  category: "pilot",
  title: "Why Did the Colonies Coordinate?",
  description: "Build an evidence-based explanation of how punishment in Massachusetts encouraged intercolonial action in 1774.",
  eventId: "tea-party",
  image: "tea-party",
  skillId: "causality",
  duration: "10-12 min",
  contextEventIds: ["stamp-act", "massacre", "tea-party", "congress"],
  prediction: {
    prompt: "Before opening the evidence, what most likely pushed colonies toward coordinated action in 1774?",
    options: [
      { id: "tea-alone", label: "The Tea Party immediately created colonial unity" },
      { id: "punishment", label: "Britain's punishment of Massachusetts made the dispute feel broader" },
      { id: "independence", label: "Britain had already recognized colonial independence" },
    ],
  },
  artifact: {
    label: "PILOT CASE RESOLVED",
    title: "Intercolonial Coordination Case File",
    summary: "A defended explanation connecting protest, punishment, colonial response, and coordinated action.",
  },
  clues: [
    {
      id: "tea-party-action",
      title: "A deliberate protest",
      prompt: "Establish what protesters targeted in Boston Harbor and what the action challenged.",
      reveal: "Participants destroyed East India Company tea, turning a dispute over taxation, consent, and commercial privilege into a visible political action.",
      target: { section: "evidence", evidenceId: "tea-chest" },
      sourceLabel: "MemQuest evidence record · reconstructed tea chest",
      hints: ["Start with the cargo, not the later punishment.", "The object is a material reconstruction.", "Open the East India Company Tea Chest record."],
    },
    {
      id: "coercive-acts",
      title: "Britain punishes Massachusetts",
      prompt: "Identify the development between the Tea Party and the First Continental Congress.",
      reveal: "In spring 1774 Parliament passed the Coercive Acts. Measures closed Boston Harbor and altered Massachusetts government, making punishment of one colony a concern elsewhere.",
      sourceLabel: "U.S. National Park Service · Timeline of the Revolution",
      sourceUrl: "https://www.nps.gov/subjects/americanrevolution/timeline.htm",
      sourceNote: "The NPS chronology places the Tea Party in December 1773, the Coercive Acts in spring 1774, and the First Continental Congress in September 1774.",
      hints: ["Do not jump directly from December 1773 to September 1774.", "Look for acts passed by Parliament in spring 1774.", "The missing bridge is the Coercive, or Intolerable, Acts."],
    },
    {
      id: "colonial-response",
      title: "A local crisis becomes continental",
      prompt: "Find how colonies outside Massachusetts responded before the Congress met.",
      reveal: "Other colonies sent aid, debated common resistance, and selected delegates. Twelve colonies ultimately sent delegates to the First Continental Congress; Georgia was not represented.",
      sourceLabel: "Library of Congress · 1773 to 1774 timeline",
      sourceUrl: "https://www.loc.gov/collections/continental-congress-and-constitutional-convention-from-1774-to-1789/articles-and-essays/timeline/1773-to-1774/",
      sourceNote: "The Library of Congress records colonial protest organization, delegate selection, and attendance by twelve of the thirteen colonies.",
      hints: ["Look beyond Boston for signs of response.", "Aid, resolutions, boycotts, and delegate selection all matter.", "The outcome was coordination, not complete unanimity."],
    },
  ],
  causalMap: {
    prompt: "Arrange the causal chain. Earlier events supplied context, but these four developments form the direct 1773-1774 sequence.",
    initialOrder: ["colonial-response", "tea-party", "congress", "coercive-acts"],
    steps: [
      { id: "tea-party", label: "Boston Tea Party", date: "December 1773" },
      { id: "coercive-acts", label: "Parliament passes the Coercive Acts", date: "Spring 1774" },
      { id: "colonial-response", label: "Colonies organize aid and common resistance", date: "1774" },
      { id: "congress", label: "First Continental Congress meets", date: "September 1774" },
    ],
  },
  questions: [
    { id: "pilot-evidence", skillId: "evidence", prompt: "Which evidence best supports the claim that the crisis became intercolonial?", options: [{ id: "responses", label: "Other colonies sent support, organized protest, and selected delegates" }, { id: "cargo", label: "Tea was stored in wooden chests" }, { id: "date", label: "The Tea Party occurred at night" }], answerId: "responses", explanation: "Actions outside Massachusetts show that the crisis was being interpreted and answered across colonial boundaries.", target: { section: "timeline", eventId: "congress" } },
    { id: "pilot-conclusion", skillId: "causality", prompt: "Which conclusion is best supported by the full evidence chain?", options: [{ id: "direct", label: "The Tea Party immediately and unanimously united all thirteen colonies" }, { id: "coordination", label: "Britain's punishment of Massachusetts helped turn a local conflict into a shared reason for coordination" }, { id: "independence", label: "The Congress met after Britain recognized colonial independence" }], answerId: "coordination", explanation: "The Tea Party mattered through the response it provoked. Punishment, colonial solidarity, and organizing connected the protest to the Congress.", target: { section: "timeline", eventId: "congress" } },
  ],
  finalExplanation: "The Boston Tea Party did not automatically produce the First Continental Congress. Parliament's Coercive Acts transformed the dispute: closing Boston Harbor and changing Massachusetts government alarmed other colonies. Their aid, resolutions, boycotts, and delegate selection moved twelve colonies toward coordinated resistance in Philadelphia.",
};

export const TIME_TRAVELER_MISSIONS = [
  mission({
    id: "mission-stamp-act",
    title: "Quick Event File: The Stamp Act",
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
    title: "Quick Event File: The Boston Massacre",
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
    title: "Quick Event File: The Boston Tea Party",
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
    title: "Quick Event File: The Continental Congress",
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
