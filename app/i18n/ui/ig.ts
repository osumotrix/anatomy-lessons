import type { UiDictionary } from "../types";

export const ui: UiDictionary = {
  meta: {
    title: "BodyQuest — Mụta gbasara ahụ mmadụ dịka onye nka",
    description:
      "Nyochaa akụkụ ahụ mmadụ n'ụdị 3D nwere nkọwa ahụike — obi, ụbụrụ, akpa ume, imeju, akụrụ, anya, eriri afọ, pancreas na akpụkpọ ahụ.",
    ogTitle: "BodyQuest — Mụta gbasara ahụ mmadụ dịka onye nka",
    ogDescription: "Mụta gbasara ahụ mmadụ site na ihe nlereanya 3D zuru ezu ma na-adọrọ mmasị.",
    imageAlt: "Ihe nlereanya obi mmadụ na-ese n'elu ikpo okwu, n'akụkụ akara BodyQuest",
  },
  brand: { tagline: "Mụta gbasara ahụ mmadụ dịka onye nka", home: "Ụlọ BodyQuest" },
  nav: { explore: "Nyochaa", systems: "Usoro ahụ", lessons: "Ihe ọmụmụ", library: "Ọba akwụkwọ", notes: "Ihe edeturu" },
  search: { placeholder: "Chọọ akụkụ ahụ ma ọ bụ isiokwu…" },
  profile: { open: "Mepee profaịlụ onye mmụta" },
  language: { label: "Asụsụ", choose: "Họrọ asụsụ" },
  library: {
    title: "Ọba akụkụ ahụ", open: "Mepee ọba akụkụ ahụ", close: "Mechie ọba", saved: "Akụkụ ahụ echekwara",
    viewAll: "Lee akụkụ ahụ niile", quoteLine1: "Ịmụ ihe bụ", quoteLine2: "ọrụ nke ọchịchọ ịmata ihe.", quoteSign: "Gaa n'ihu n'ịchọpụta!",
  },
  tools: {
    label: "Ngwa nlele 3D", rotate: "Tụgharịa", zoom: "Bụgharịa nso", isolate: "Kewapụ",
    section: "Bee gafee", layers: "Ọkwa", compare: "Tụnyere", reset: "Malite ọzọ",
  },
  viewer: {
    title: "Ihe nlele {organ}",
    canvas: "Ihe nlereanya ahụ mmadụ 3D. Dọrọ ka ị tụgharịa, pịgharịa ka ị bịa nso, pịa ntụpọ ka ị mụtakwuo.",
    tip: "Ndụmọdụ", tipDrag: "Dọrọ ka ị tụgharịa", tipScroll: "Pịgharịa ka ị bịa nso", tipClick: "Pịa ntụpọ ka ị mụtakwuo",
    loading: "Na-akwadebe {organ}", autoRotate: "Tụgharịa n'onwe ya",
    caption: "Ihe nlereanya 3D · pịa ntụpọ ka ị nyochaa", structures: "Akụkụ dị n'ihe nlereanya a",
    voiceGuide: "Olu mmadụ", voiceEnable: "Gbanye olu mmadụ", voiceDisable: "Gbanyụọ olu mmadụ", voiceUnavailable: "E tinyebeghị ndekọ olu mmadụ",
  },
  info: {
    kicker: "{organ}", keyFacts: "Eziokwu ndị bụ isi", size: "Nha", weight: "Ibu", daily: "Kwa ụbọchị",
    location: "Ebe ọ dị", bloodSupply: "Ọbara na-abata", function: "Ọrụ", medical: "Mkpa ahụike",
    didYouKnow: "Ị maara?", viewLesson: "Lee ihe ọmụmụ", animate: "Mee ka ọ na-emegharị", quiz: "Ajụjụ", compare: "Tụnyere",
  },
  compare: {
    title: "Ntụnyere akụkụ ahụ", comparing: "Na-atụnyere", reference: "Ntụaka", primaryRole: "Ọrụ bụ isi",
    scale: "Nha", vs: "na", close: "Mechie ntụnyere",
  },
  cards: {
    resources: "Ihe ọmụmụ gbasara {organ}", microscopic: "Nlele mikroskopu", compareOrgans: "Tụnyere akụkụ ahụ",
    functionAnimation: "Mmegharị ọrụ", clinicalNotes: "Ihe edeturu ahụike", whereItWorks: "Ebe ọ na-arụ ọrụ",
    commonConditions: "Ọrịa ndị a na-ahụkarị", exploreTissue: "Nyochaa anụ ahụ", openComparison: "Mepee ntụnyere",
    playAnimation: "Gbaa mmegharị", seeAll: "Lee ha niile", seeSystem: "Lee usoro ahụ",
    playAria: "Gbaa mmegharị ọrụ {organ}", systemAria: "Lee ebe {organ} dị n'ime ahụ",
  },
  quiz: {
    start: "Malite ajụjụ akara akụkụ", find: "Chọta", progress: "{current} n'ime {total}", correct: "Ọ dị mma",
    wrong: "Ọ bụghị ya", reveal: "Nke ahụ bụ {label}", answer: "E gosiri {label} na akwụkwọ ndụ akwụkwọ ndụ",
    done: "Ajụjụ agwụla", score: "Ị zara {score} n'ime {total} nke ọma", retry: "Nwaa ọzọ",
    exit: "Kwụsị ajụjụ", hint: "Pịa ntụpọ kwekọrọ na ya n'ihe nlereanya",
  },
  modal: {
    guided: "Nchọpụta a na-eduzi", close: "Mechie", continueExploring: "Gaa n'ihu n'ịchọpụta",
    quizTitle: "Ajụjụ ngwa ngwa gbasara {organ}", motionTitle: "{organ} mgbe ọ na-arụ ọrụ",
    bodyTitle: "{organ} n'ime ahụ", insideTitle: "N'ime {organ}",
    quizPrompt: "Kedu okwu kọwara {organ} nke ọma?",
    quizA: "Ọ na-arụ ọrụ pụrụ iche iji mee ka ahụ dị mma", quizB: "Ọ na-arụ ọrụ naanị ya kpamkpam",
    quizC: "Ọ na-arụ ọrụ naanị mgbe mmadụ na-ehi ụra",
    lessonBody: "Soro akụkụ ndị e mere ka ha pụta ìhè, tụgharịa ihe nlereanya, ma jikọta ọdịdị ya na ọrụ ya. Ihe ọmụmụ a dị mkpirikpi ga-enyere gị aka ịghọta ya nke ọma.",
    systemIntro: "{location}. Chọpụta otú {organ} si jikọọ na akụkụ ahụ ndị ọzọ.",
    system: "Usoro ahụ", primaryRole: "Ọrụ bụ isi", bloodSupply: "Ọbara na-abata",
  },
};
