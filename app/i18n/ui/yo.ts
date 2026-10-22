import type { UiDictionary } from "../types";

export const ui: UiDictionary = {
  meta: {
    title: "BodyQuest — Kọ́ ẹ̀kọ́ nípa ara ènìyàn bí ayàwòrán",
    description:
      "Ṣàwárí àwọn ẹ̀yà ara 3D pẹ̀lú àlàyé ìṣègùn — ọkàn, ọpọlọ, ẹ̀dọ̀fóró, ẹ̀dọ̀, kíndìnrín, ojú, ìfun, pancreas àti awọ ara.",
    ogTitle: "BodyQuest — Kọ́ ẹ̀kọ́ nípa ara ènìyàn bí ayàwòrán",
    ogDescription: "Kọ́ nípa ara ènìyàn nípasẹ̀ àwọn àwòrán 3D tó lẹ́wà tí ó sì ní àlàyé ìṣègùn kíkún.",
    imageAlt: "Àwòrán ọkàn ènìyàn tó ń léfòó lórí pèpéle lẹ́gbẹ̀ẹ́ àmì BodyQuest",
  },
  brand: { tagline: "Kọ́ ẹ̀kọ́ nípa ara ènìyàn bí ayàwòrán", home: "Ojúlé BodyQuest" },
  nav: { explore: "Ṣàwárí", systems: "Àwọn ètò ara", lessons: "Àwọn ẹ̀kọ́", library: "Ilé ìkàwé", notes: "Àkọsílẹ̀" },
  search: { placeholder: "Wá ẹ̀yà ara tàbí àkòrí…" },
  profile: { open: "Ṣí prófáìlì akẹ́kọ̀ọ́" },
  language: { label: "Èdè", choose: "Yan èdè" },
  library: {
    title: "Ilé ìkàwé ẹ̀yà ara", open: "Ṣí ilé ìkàwé ẹ̀yà ara", close: "Pa ilé ìkàwé", saved: "Àwọn ẹ̀yà ara tí a fipamọ́",
    viewAll: "Wo gbogbo ẹ̀yà ara", quoteLine1: "Kíkọ́ ẹ̀kọ́ jẹ́", quoteLine2: "ìṣe ìfẹ́ láti mọ̀.", quoteSign: "Máa bá ìṣàwárí lọ!",
  },
  tools: {
    label: "Àwọn irinṣẹ́ ìwò 3D", rotate: "Yípo", zoom: "Sun mọ́", isolate: "Yà sọ́tọ̀",
    section: "Gé kọjá", layers: "Àwọn ipele", compare: "Fi wé", reset: "Bẹ̀rẹ̀ sí i lẹ́ẹ̀kan sí i",
  },
  viewer: {
    title: "Ohun ìwò {organ}",
    canvas: "Àwòrán ara ènìyàn 3D. Fà á láti yí i, yi kẹ̀kẹ́ láti sun mọ́, kí o sì tẹ àmì kan láti ka nípa apá náà.",
    tip: "Ìmọ̀ràn", tipDrag: "Fà á láti yí i", tipScroll: "Yi kẹ̀kẹ́ láti sun mọ́", tipClick: "Tẹ àmì kan láti mọ̀ sí i",
    loading: "A ń pèsè {organ}", autoRotate: "Yípo fúnra rẹ̀",
    caption: "Àwòrán 3D · tẹ àmì kan láti ṣàwárí", structures: "Àwọn apá inú àwòrán yìí",
    voiceGuide: "Ohùn ènìyàn", voiceEnable: "Tan ohùn ènìyàn", voiceDisable: "Pa ohùn ènìyàn", voiceUnavailable: "A kò tíì fi ohùn ènìyàn kún un",
  },
  info: {
    kicker: "{organ}", keyFacts: "Àwọn òtítọ́ pàtàkì", size: "Ìwọ̀n", weight: "Ìwúwo", daily: "Lójoojúmọ́",
    location: "Ibi", bloodSupply: "Ìpèsè ẹ̀jẹ̀", function: "Iṣẹ́", medical: "Ìṣe pàtàkì nínú ìṣègùn",
    didYouKnow: "Ṣé o mọ̀?", viewLesson: "Wo ẹ̀kọ́", animate: "Fi ìṣípò hàn", quiz: "Ìdánwò", compare: "Fi wé",
  },
  compare: {
    title: "Ìfiwéra ẹ̀yà ara", comparing: "A ń fi wé", reference: "Àpẹẹrẹ", primaryRole: "Iṣẹ́ pàtàkì",
    scale: "Ìwọ̀n", vs: "pẹ̀lú", close: "Pa ìfiwéra",
  },
  cards: {
    resources: "Ohun èlò ìkẹ́kọ̀ọ́ nípa {organ}", microscopic: "Ìwò maikirosikopu", compareOrgans: "Fi àwọn ẹ̀yà ara wé",
    functionAnimation: "Ìṣípò iṣẹ́", clinicalNotes: "Àkọsílẹ̀ ìṣègùn", whereItWorks: "Ibi tí ó ti ń ṣiṣẹ́",
    commonConditions: "Àwọn àìsàn tó wọ́pọ̀", exploreTissue: "Ṣàwárí àsopọ̀", openComparison: "Ṣí ìfiwéra",
    playAnimation: "Mu ìṣípò ṣiṣẹ́", seeAll: "Wo gbogbo rẹ̀", seeSystem: "Wo ètò ara",
    playAria: "Mu ìṣípò iṣẹ́ {organ} ṣiṣẹ́", systemAria: "Wo ibi tí {organ} wà nínú ara",
  },
  quiz: {
    start: "Bẹ̀rẹ̀ ìdánwò fífi orúkọ sí apá", find: "Wá", progress: "{current} nínú {total}", correct: "Ó tọ́",
    wrong: "Kò tíì tọ́", reveal: "Èyí ni {label}", answer: "A fi àwọ̀ ewé hàn {label}",
    done: "Ìdánwò parí", score: "O dáhùn {score} nínú {total} lọ́nà tó tọ́", retry: "Gbìyànjú lẹ́ẹ̀kan sí i",
    exit: "Jáde kúrò nínú ìdánwò", hint: "Tẹ àmì tó bá a mu lórí àwòrán náà",
  },
  modal: {
    guided: "Ìṣàwárí tí a ń darí", close: "Pa", continueExploring: "Máa bá ìṣàwárí lọ",
    quizTitle: "Ìdánwò kúkúrú nípa {organ}", motionTitle: "{organ} nígbà tó ń ṣiṣẹ́",
    bodyTitle: "{organ} nínú ara", insideTitle: "Inú {organ}",
    quizPrompt: "Gbólóhùn wo ló ṣàlàyé {organ} dáadáa jù?",
    quizA: "Ó ń ṣe iṣẹ́ pàtàkì láti jẹ́ kí ara wà ní ìlera", quizB: "Ó ń ṣiṣẹ́ fúnra rẹ̀ pátápátá",
    quizC: "Ó máa ń ṣiṣẹ́ nígbà oorun nìkan",
    lessonBody: "Tẹ̀lé àwọn apá tí a ti tan ìmọ́lẹ̀ sí, yí àwòrán náà, kí o sì so ìrísí rẹ̀ pọ̀ mọ́ iṣẹ́ rẹ̀. Ẹ̀kọ́ kúkúrú yìí yóò ràn ọ́ lọ́wọ́ láti ní òye tó dúró pẹ́.",
    systemIntro: "{location}. Ṣàwárí bí {organ} ṣe sopọ̀ mọ́ àwọn apá ara yòókù.",
    system: "Ètò ara", primaryRole: "Iṣẹ́ pàtàkì", bloodSupply: "Ìpèsè ẹ̀jẹ̀",
  },
};
