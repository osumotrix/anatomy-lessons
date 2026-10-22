import type { UiDictionary } from "../types";

export const ui: UiDictionary = {
  meta: {
    title: "Anatomy Lessons — Koyi tsarin jikin ɗan Adam kamar mai fasaha",
    description:
      "Binciki gabobin jikin ɗan Adam na 3D masu cikakken bayanin likitanci — zuciya, ƙwaƙwalwa, huhu, hanta, ƙoda, ido, hanji, pancreas da fata.",
    ogTitle: "Anatomy Lessons — Koyi tsarin jikin ɗan Adam kamar mai fasaha",
    ogDescription: "Koyi tsarin jikin ɗan Adam ta hanyar samfuran 3D masu kayatarwa da cikakken bayanin likitanci.",
    imageAlt: "Samfurin zuciyar ɗan Adam yana shawagi a kan dandali kusa da tambarin Anatomy Lessons",
  },
  brand: { tagline: "Koyi tsarin jikin ɗan Adam kamar mai fasaha", home: "Shafin farko na Anatomy Lessons" },
  nav: { explore: "Bincika", systems: "Tsarukan jiki", lessons: "Darussa", library: "Ɗakin karatu", notes: "Bayanan kula" },
  search: { placeholder: "Nemi gaba ko batu…" },
  profile: { open: "Buɗe bayanan ɗalibi" },
  language: { label: "Harshe", choose: "Zaɓi harshe" },
  library: {
    title: "Ɗakin karatun gabobi", open: "Buɗe ɗakin karatun gabobi", close: "Rufe ɗakin karatu", saved: "Gabobin da aka ajiye",
    viewAll: "Duba dukkan gabobi", quoteLine1: "Koyo aiki ne", quoteLine2: "na son sani.", quoteSign: "Ci gaba da bincike!",
  },
  tools: {
    label: "Kayan aikin kallon 3D", rotate: "Juya", zoom: "Kusanto", isolate: "Ware",
    section: "Yanke a tsakiya", layers: "Yadudduka", compare: "Kwatanta", reset: "Sake farawa",
  },
  viewer: {
    title: "Mai kallon {organ}",
    canvas: "Samfurin tsarin jikin ɗan Adam na 3D. Ja don juya, gungura don kusantowa, sannan danna ɗigo don karanta bayanin sashen.",
    tip: "Shawara", tipDrag: "Ja don juya", tipScroll: "Gungura don kusantowa", tipClick: "Danna ɗigo don ƙarin bayani",
    loading: "Ana shirya {organ}", autoRotate: "Juya da kansa",
    caption: "Samfurin 3D · danna ɗigo don bincikawa", structures: "Sassan da ke cikin wannan samfurin",
  },
  info: {
    kicker: "{organ}", keyFacts: "Muhimman bayanai", size: "Girma", weight: "Nauyi", daily: "Kowace rana",
    location: "Wuri", bloodSupply: "Jijiyoyin jini", function: "Aiki", medical: "Muhimmancin likitanci",
    didYouKnow: "Ko ka sani?", viewLesson: "Duba darasi", animate: "Nuna motsi", quiz: "Tambayoyi", compare: "Kwatanta",
  },
  compare: {
    title: "Kwatanta gabobi", comparing: "Ana kwatantawa", reference: "Madogara", primaryRole: "Babban aiki",
    scale: "Girma", vs: "da", close: "Rufe kwatantawa",
  },
  cards: {
    resources: "Kayan koyo game da {organ}", microscopic: "Kallo ta microscope", compareOrgans: "Kwatanta gabobi",
    functionAnimation: "Motsin aiki", clinicalNotes: "Bayanan likitanci", whereItWorks: "Inda yake aiki",
    commonConditions: "Cututtukan da aka fi gani", exploreTissue: "Binciki nama", openComparison: "Buɗe kwatantawa",
    playAnimation: "Kunna motsi", seeAll: "Duba duka", seeSystem: "Duba tsarin jiki",
    playAria: "Kunna motsin aikin {organ}", systemAria: "Duba inda {organ} yake a cikin jiki",
  },
  quiz: {
    start: "Fara gwajin sanya suna", find: "Nemo", progress: "{current} cikin {total}", correct: "Daidai",
    wrong: "Ba haka ba", reveal: "Wannan shi ne {label}", answer: "An nuna {label} da kore",
    done: "An gama gwaji", score: "Ka amsa {score} cikin {total} daidai", retry: "Sake gwadawa",
    exit: "Fita daga gwaji", hint: "Danna ɗigon da ya dace a kan samfurin",
  },
  modal: {
    guided: "Bincike mai jagora", close: "Rufe", continueExploring: "Ci gaba da bincike",
    quizTitle: "Gajeren gwajin {organ}", motionTitle: "{organ} yayin aiki",
    bodyTitle: "{organ} a cikin jiki", insideTitle: "Cikin {organ}",
    quizPrompt: "Wace magana ce ta fi bayyana {organ}?",
    quizA: "Yana da aiki na musamman wajen kiyaye lafiyar jiki", quizB: "Yana aiki shi kaɗai gaba ɗaya",
    quizC: "Yana aiki ne kawai yayin barci",
    lessonBody: "Bi sassan da aka haskaka, juya samfurin, sannan ka haɗa siffarsa da aikinsa. Wannan ɗan gajeren darasi zai taimaka maka ka gina fahimta mai ɗorewa.",
    systemIntro: "{location}. Binciki yadda {organ} yake haɗuwa da sauran sassan jiki.",
    system: "Tsarin jiki", primaryRole: "Babban aiki", bloodSupply: "Jijiyoyin jini",
  },
};
