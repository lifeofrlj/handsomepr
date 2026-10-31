export const site = {
  brand: "Handsome PR",
  company: "Team Handsome PR",
  coach: "Ryan Johnson",
  url: "https://handsomepr.com",
  instagram: "https://instagram.com/lifeofrlj",
  phoneDisplay: "(737) 201-4218",
  smsHref: "sms:+17372014218?body=Hey%20Ryan%2C%20I%20have%20a%20question%20about%20coaching",
  /** Coaching application (Typeform). */
  applyFormId: "XQaM96iw",
  applyHref: "https://form.typeform.com/to/XQaM96iw",
  applyEmbed: "https://form.typeform.com/to/XQaM96iw?typeform-embed=embed-widget&typeform-medium=embed-sdk",
  /** Playbook opt in (Typeform). Replace with the playbook form link once it exists. */
  playbookFormId: "ZKVN0mZe",
  playbookHref: "https://handsomepr.typeform.com/to/ZKVN0mZe",
  playbookEmbed: "https://handsomepr.typeform.com/to/ZKVN0mZe?typeform-embed=embed-widget&typeform-medium=embed-sdk",
  cheatSheetFormId: "fvHMNZrQ",
  /** Merritt full story guide (Typeform). Swap for the dedicated form once it exists. */
  merrittFormId: "jSOktr2J",
  merrittHref: "https://handsomepr.typeform.com/to/jSOktr2J",
  cheatSheetHref: "https://handsomepr.typeform.com/to/fvHMNZrQ",
  cnnVideoId: "fQHzYlLBPcM",
  vslVideoId: "pF2UvajXgUA",
  vslVertical: false,
  magnetName: "The Handsome Enhancement Playbook",
  bookedVideo1: "aBp5xM_JX3s",
  bookedVideo2: "Npi725HjkLY",
  transformationsFolder: "https://drive.google.com/drive/folders/1GVSqcVd__bbJD0xiR5nXC4IKdrZX2rtY?usp=drive_link",
} as const;

/** Client result photos, shown 2 wide. Add more entries as photos come in. */
export const results = [
  { src: "/assets/results/justin.webp", name: "Justin", note: "Natural, OCB medalist" },
  { src: "/assets/results/merritt.webp", name: "Merritt", note: "Full rebuild" },
  { src: "/assets/results/alex.webp", name: "Alex", note: "Soft to stage ready" },
  { src: "/assets/results/tyler.webp", name: "Tyler", note: "Fat loss, recomp" },
  { src: "/assets/results/npc.webp", name: "Client", note: "First NPC show" },
  { src: "/assets/results/bruce.webp", name: "Client", note: "40+ transformation" },
  { src: "/assets/results/back.webp", name: "Client", note: "Fat loss, back rebuilt" },
  { src: "/assets/results/flex.webp", name: "Client", note: "Lean and conditioned" },
  { src: "/assets/results/young1.webp", name: "Client", note: "Lean muscle gain" },
  { src: "/assets/results/young2.webp", name: "Client", note: "Fat loss, recomp" },
  { src: "/assets/results/tony.webp", name: "Tony", note: "Almost there, Coach" },
  { src: "/assets/results/stage.webp", name: "Stage day", note: "Medal on stage" },
  { src: "/assets/results/lean1.webp", name: "Client", note: "Leaned out, face and waist" },
  { src: "/assets/results/flex2.webp", name: "Client", note: "Fuller, harder look" },
  { src: "/assets/results/outdoor.webp", name: "Client", note: "Shredded and conditioned" },
  { src: "/assets/results/ck.webp", name: "Client", note: "Muscle gain, filled out" },
  { src: "/assets/results/summer.webp", name: "Summer Shredding", note: "Medal with Coach Ryan" },
  { src: "/assets/results/fourup.webp", name: "Client", note: "Skinny to built" },
  { src: "/assets/results/blond.webp", name: "Client", note: "Lean muscle gain" },
  { src: "/assets/results/senior.webp", name: "Client", note: "Leaner and stronger at 60+" },
];

/** Video testimonials (YouTube Shorts IDs). */
export const videoTestimonials = [
  {
    id: "7HzdL88zkM0",
    headline: "From average to on stage in 6 months",
    name: "Justin",
    description:
      "Consistent for years but woke up in an average looking physique. In 6 months he got in the best shape of his life and stepped on stage for the first time.",
    bullets: [
      "Learned a next level of discipline",
      "Cut out the bad habits holding him back",
      "Stepped outside his comfort zone for the first time in a long time",
    ],
  },
  {
    id: "w9uHWPlU_Yo",
    headline: "27 years overweight. Down 90+ lbs.",
    name: "Justin Halstead",
    description:
      "Overweight for 27 years and going down a bad path. Within 6 months we dropped all the bad habits and lost 50 lbs. A year later he was down 90+ lbs and stepped on stage in the transformation division.",
    bullets: [
      "Went from the bottom of the sales reps to the top at work",
      "Reached 900 ng/dL testosterone naturally",
      "Gave himself a new life",
    ],
  },
  {
    id: "O1jMYcKpK3k",
    headline: "Plateaued for years, then 25 lbs in 6 months",
    name: "Tony",
    description: "Gained 25 lbs in 6 months after plateauing for years.",
    bullets: [
      "Learned how to run his first cycle",
      "Got his lifestyle together after a rough period, with the support of the coaching and community",
      "Stepped outside his comfort zone and started his own business",
    ],
  },
  {
    id: "04y2YJq5MME",
    headline: "From unhealthy to shredded and on stage",
    name: "Justin Loi",
    description: "Fat and unhealthy to shredded and optimized. Also stepped on stage for his first time.",
    bullets: [
      "Needed structure for a full transformation",
      "Guided in training, nutrition, mindset and habits",
      "Achieved a complete physical and mental transformation",
    ],
  },
];

export const testimonials = [
  { name: "Nicolas", headline: "A big brother who's been there", quote: "You feel like a big brother who's actually been where I am. That's exactly what I needed." },
  { name: "Carson", headline: "The truth, not what I want to hear", quote: "You don't mess around. You get it done and tell me the truth, not just what I want to hear." },
  { name: "Brenner", headline: "The real secrets, not a show", quote: "It feels personal, like you're sharing the real secrets, not putting on a show for social media." },
  { name: "John", headline: "Knowledge on another level", quote: "You're actively competing, so you actually know your stuff. The knowledge is on another level." },
  { name: "Ken", headline: "The dedication is genuine", quote: "What stood out versus everyone else? Everything, literally. The dedication is genuine." },
  { name: "Kaeleb", headline: "Finally a coach I could trust", quote: "You were open and honest about everything. I finally felt like I could trust a coach." },
];

/** Ryan's own timeline, oldest first. */
export const timeline = [
  {
    src: "/assets/timeline/01-natural.webp",
    stage: "3.5 years natural",
    stat: "110 lbs to 191 lbs, then 191 to 160",
    text: "Went from 110 to 191 lbs on my own. Then I hired a coach for the first time, dropped 35 lbs of fat in 5 months and learned what structure actually does.",
  },
  {
    src: "/assets/timeline/02-trt.webp",
    stage: "First natural show, then testosterone",
    stat: "160 lbs to 195 lbs in 6 months",
    text: "Right after my first natural competition I started a conservative testosterone protocol. Six months later I was 35 lbs heavier and still lean.",
  },
  {
    src: "/assets/timeline/03-first-blast.webp",
    stage: "First blast",
    stat: "195 lbs to 215 to 220 lbs",
    text: "Six months on the base protocol, then six months into my first blast. Everything was planned, tracked and checked against bloodwork.",
  },
  {
    src: "/assets/timeline/04-cruise-blast.webp",
    stage: "Cruise, then blast again",
    stat: "215 lbs to 195 lbs, harder and leaner",
    text: "After a cruise I came back in at 215 and brought it down to a much denser 195 lbs 4 to 5 months into the next blast.",
  },
  {
    src: "/assets/timeline/05-year.webp",
    stage: "A year of bodybuilding",
    stat: "190 lbs to 230 lbs",
    text: "A full year focused on building. Nothing fancy, just consistent training, food and recovery, and the scale moved 40 lbs.",
  },
  {
    src: "/assets/timeline/06-prep.webp",
    stage: "Competition prep",
    stat: "220 lbs to 192 lbs on show day",
    text: "Nine weeks into prep on the left at 220 to 225 lbs. On the right, show day morning at 192 lbs. This is the process I now run with clients.",
  },
];

/** Testimonial videos on the /testimonials page (Vimeo, vertical). Copy written from the video transcripts. */
export const testimonialPageVideos = [
  {
    vimeo: "1241333949?h=7293df5612",
    name: "Merritt",
    headline: "From heartbroken to back to back champion",
    description:
      "Stuck at 190 lbs and soft after the worst year of his life. He dieted to 163 lbs and won his first show, then built up to 220 lbs in 24 weeks and won again.",
    quote: "",
    bullets: ["2 shows, 2 first place finishes", "+57 lbs in a 24 week build", "Turned pain into direction"],
  },
  {
    vimeo: "1241337867?h=620d361c9b",
    name: "Justin Blodgett",
    headline: "Plateaued at 225 lbs. Shredded and on stage in 6 months.",
    description:
      "He came in wanting to keep bulking at 225 lbs but had stopped making progress. Six months later he was around 185 lbs, down from well over 25% body fat to roughly 10%, and had stepped on stage.",
    quote: "100% worth the investment.",
    bullets: [
      "Diet, training and mindset rebuilt together",
      "Stepped on stage, which was never part of his original plan",
      "Transformed his whole identity, not just his physique",
    ],
  },
  {
    vimeo: "1241342180?h=ade0fc8117",
    name: "Justin Halstead",
    headline: "291 lbs to 200 lbs. Down 91 lbs.",
    description:
      "One of the OGs of Team Handsome PR. He joined in 2023 at 291 lbs, stuck in a bad place, and got all the way down to 200 lbs at his leanest while putting on muscle.",
    quote: "Best decision of my life, best investment of my life.",
    bullets: [
      "Gained new friends, a new mindset and new confidence",
      "Reached 900 ng/dL testosterone naturally",
      "Went from the bottom of the sales reps to the top at work",
    ],
  },
  {
    vimeo: "1241340452?h=d0064f3ae1",
    name: "Tony",
    headline: "170 lbs to 200 lbs lean in 6 months",
    description:
      "He came in during a tough stretch, mentally and physically. Ryan helped him connect the dots between the two and built a plan tailored to his goals.",
    quote: "The absolute best decision I've ever made in my life.",
    bullets: [
      "Learned how to run his first cycle the right way",
      "Got his lifestyle back together with the coaching and community",
      "Started his own business",
    ],
  },
  {
    vimeo: "1241339364?h=ae33b963f3",
    name: "Justin Loi",
    headline: "From average gym goer to peeled on stage",
    description:
      "He had the passion but didn't know how to take it to the next level. Ryan believed in him before he believed in himself, and he got absolutely peeled for his first bodybuilding show.",
    quote: "One decision can absolutely change your life.",
    bullets: [
      "Not just a workout and meal plan: support any time of day",
      "Learned the why behind everything he was doing",
      "Made the mindset shifts that got him there",
    ],
  },
  {
    vimeo: "1241356704?h=11e96c98db",
    name: "Brenner",
    headline: "The real secrets, not a show",
    description: "It feels personal, like you're sharing the real secrets, not putting on a show for social media.",
    quote: "",
    bullets: [],
  },
];
