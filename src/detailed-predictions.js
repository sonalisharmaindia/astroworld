const DASHA_ORDER = ['Ketu','Venus','Sun','Moon','Mars','Rahu','Jupiter','Saturn','Mercury'];

const SIGN_LORDS = [
  'Mars','Venus','Mercury','Moon','Sun','Mercury',
  'Venus','Mars','Jupiter','Saturn','Saturn','Jupiter'
];

const TOPICS = [
  { id:'overall', en:'Overall life direction', ta:'ஒட்டுமொத்த வாழ்க்கைப் பாதை', houses:[1,9,10,11],
    meaningEn:'The Ascendant describes the way you approach life; the 9th, 10th and 11th houses add themes of learning, vocation and long-term goals.',
    meaningTa:'லக்னம் வாழ்க்கையை அணுகும் முறையைக் குறிக்கிறது. 9, 10, 11ஆம் பாவங்கள் கல்வி, தொழில் மற்றும் நீண்டகால இலக்குகளைக் காட்டுகின்றன.',
    adviceEn:'Use this combination to reflect on the environments and goals that help you grow. Real outcomes also depend on choices, opportunities and circumstances.',
    adviceTa:'உங்கள் வளர்ச்சிக்கு உதவும் சூழல்கள் மற்றும் இலக்குகளைப் பற்றி சிந்திக்க இந்த அமைப்பைப் பயன்படுத்துங்கள். வாழ்க்கை முடிவுகள் உங்கள் தேர்வுகள், வாய்ப்புகள் மற்றும் சூழல்களையும் சார்ந்தவை.' },
  { id:'personality', en:'Personality & strengths', ta:'ஆளுமை மற்றும் திறன்கள்', houses:[1,3,5],
    meaningEn:'The 1st house is read for temperament and self-expression; the 3rd and 5th add communication, initiative and creative intelligence.',
    meaningTa:'1ஆம் பாவம் குணநலன் மற்றும் சுய வெளிப்பாட்டைக் குறிக்கிறது. 3, 5ஆம் பாவங்கள் தொடர்பாடல், முயற்சி மற்றும் படைப்பாற்றலைச் சேர்க்கின்றன.',
    adviceEn:'Notice which skills feel natural and build them through consistent practice rather than treating a chart placement as a fixed limit.',
    adviceTa:'இயல்பாக வெளிப்படும் திறன்களைக் கண்டறிந்து தொடர்ந்து பயிற்சி செய்யுங்கள். ஜாதக அமைப்பை நிரந்தர வரம்பாகக் கருத வேண்டாம்.' },
  { id:'marriage', en:'Marriage & relationships', ta:'திருமணம் மற்றும் உறவுகள்', houses:[7,2,8],
    meaningEn:'The 7th house is traditionally examined for partnership; the 2nd and 8th add family life, shared resources and adjustment after marriage. Venus is also considered.',
    meaningTa:'திருமண மற்றும் கூட்டாண்மை அம்சங்களுக்கு 7ஆம் பாவம் பாரம்பரியமாகப் பார்க்கப்படுகிறது. 2, 8ஆம் பாவங்கள் குடும்ப வாழ்க்கை, பகிரப்பட்ட வளங்கள் மற்றும் மாற்றங்களைச் சுட்டுகின்றன. சுக்கிரனும் பரிசீலிக்கப்படுகிறார்.',
    adviceEn:'Treat this as a reflection on partnership patterns, not a promise about marriage timing or a spouse. Communication, consent and compatibility matter in real relationships.',
    adviceTa:'இதை உறவுமுறை பற்றிய சிந்தனைக்கான வழிகாட்டியாக மட்டுமே எடுத்துக்கொள்ளுங்கள்; திருமண நேரம் அல்லது துணைவர் பற்றிய உறுதிமொழியாக அல்ல. உரையாடல், சம்மதம் மற்றும் பொருத்தம் முக்கியம்.' },
  { id:'career', en:'Career & profession', ta:'தொழில் மற்றும் பணிவாழ்க்கை', houses:[10,6,2],
    meaningEn:'The 10th house is read for work and public contribution; the 6th adds service and daily responsibilities, while the 2nd relates to resources and skills.',
    meaningTa:'10ஆம் பாவம் தொழில் மற்றும் சமூகப் பங்களிப்பைக் குறிக்கிறது. 6ஆம் பாவம் சேவை மற்றும் அன்றாடப் பொறுப்புகளையும், 2ஆம் பாவம் வளங்கள் மற்றும் திறன்களையும் குறிக்கிறது.',
    adviceEn:'Compare these themes with your education, experience and interests. Career decisions should be based on practical research and your own priorities.',
    adviceTa:'இந்த அம்சங்களை உங்கள் கல்வி, அனுபவம் மற்றும் ஆர்வங்களுடன் ஒப்பிடுங்கள். தொழில் முடிவுகள் நடைமுறை ஆய்வு மற்றும் உங்கள் முன்னுரிமைகளின் அடிப்படையில் இருக்க வேண்டும்.' },
  { id:'finance', en:'Money & financial habits', ta:'பணம் மற்றும் நிதிப் பழக்கங்கள்', houses:[2,11,5],
    meaningEn:'The 2nd and 11th houses are traditionally read for savings, income and gains; the 5th is sometimes considered for judgement and calculated risk.',
    meaningTa:'2, 11ஆம் பாவங்கள் சேமிப்பு, வருமானம் மற்றும் ஆதாயங்களுக்காகப் பார்க்கப்படுகின்றன. 5ஆம் பாவம் விவேகம் மற்றும் கணக்கிட்ட அபாயங்களைப் பற்றியும் பரிசீலிக்கப்படுகிறது.',
    adviceEn:'This is not a forecast of wealth, profit or investment performance. Use budgeting, emergency savings and qualified financial advice for real decisions.',
    adviceTa:'இது செல்வம், லாபம் அல்லது முதலீட்டு வருமானத்திற்கான கணிப்பு அல்ல. நிதி முடிவுகளுக்கு பட்ஜெட், அவசரச் சேமிப்பு மற்றும் தகுதியான நிதி ஆலோசனையைப் பயன்படுத்துங்கள்.' },
  { id:'education', en:'Education & learning', ta:'கல்வி மற்றும் கற்றல்', houses:[4,5,9],
    meaningEn:'The 4th house is associated with foundational education; the 5th with learning and discernment; the 9th with higher study, teachers and philosophy.',
    meaningTa:'4ஆம் பாவம் அடிப்படைக் கல்வியையும், 5ஆம் பாவம் கற்றல் மற்றும் பகுத்தறிவையும், 9ஆம் பாவம் உயர்கல்வி, ஆசிரியர்கள் மற்றும் தத்துவத்தையும் குறிக்கிறது.',
    adviceEn:'Choose learning paths that match your curiosity and circumstances. The chart cannot determine academic results or admission outcomes.',
    adviceTa:'உங்கள் ஆர்வம் மற்றும் சூழலுக்கு ஏற்ற கற்றல் பாதைகளைத் தேர்ந்தெடுங்கள். கல்வி முடிவுகள் அல்லது சேர்க்கையை ஜாதகம் உறுதி செய்யாது.' },
  { id:'family', en:'Family & home life', ta:'குடும்பம் மற்றும் இல்லறம்', houses:[2,4],
    meaningEn:'The 2nd house is considered for family resources and speech; the 4th for home, emotional foundations and domestic comfort.',
    meaningTa:'2ஆம் பாவம் குடும்ப வளங்கள் மற்றும் பேச்சையும், 4ஆம் பாவம் வீடு, மன அடித்தளம் மற்றும் இல்லற வசதியையும் குறிக்கிறது.',
    adviceEn:'Use these themes to reflect on communication, responsibilities and the kind of home environment you want to nurture.',
    adviceTa:'தொடர்பாடல், பொறுப்புகள் மற்றும் நீங்கள் உருவாக்க விரும்பும் இல்லச் சூழலைப் பற்றி சிந்திக்க இந்த அம்சங்களைப் பயன்படுத்துங்கள்.' },
  { id:'children', en:'Children & creativity', ta:'குழந்தைகள் மற்றும் படைப்பாற்றல்', houses:[5,9],
    meaningEn:'The 5th house is traditionally associated with children, creativity and learning; the 9th provides a wider context of guidance and values. Jupiter is also considered.',
    meaningTa:'5ஆம் பாவம் குழந்தைகள், படைப்பாற்றல் மற்றும் கற்றலுடன் தொடர்புபடுத்தப்படுகிறது. 9ஆம் பாவம் வழிகாட்டுதல் மற்றும் மதிப்புகளைக் காட்டுகிறது. குருவும் பரிசீலிக்கப்படுகிறார்.',
    adviceEn:'This section is symbolic and cannot assess fertility, pregnancy or a child’s health. Seek appropriate medical guidance for those questions.',
    adviceTa:'இந்தப் பகுதி குறியீட்டு விளக்கம் மட்டுமே; கருத்தரிப்பு, கர்ப்பம் அல்லது குழந்தையின் உடல்நிலையை மதிப்பிடாது. அவற்றிற்கு மருத்துவ ஆலோசனையை நாடுங்கள்.' },
  { id:'wellbeing', en:'Wellbeing & daily balance', ta:'நலவாழ்வு மற்றும் அன்றாட சமநிலை', houses:[1,6,8],
    meaningEn:'The 1st, 6th and 8th houses are traditionally discussed in relation to vitality, routines, challenges and change. Astrology is not a health assessment.',
    meaningTa:'1, 6, 8ஆம் பாவங்கள் உயிர்சக்தி, அன்றாட ஒழுங்கு, சவால்கள் மற்றும் மாற்றங்களுடன் பாரம்பரியமாகப் பேசப்படுகின்றன. ஜோதிடம் மருத்துவ மதிப்பீடு அல்ல.',
    adviceEn:'Prioritise sleep, movement, supportive relationships and professional care when needed. Do not use astrology to diagnose or delay treatment.',
    adviceTa:'போதிய உறக்கம், உடற்பயிற்சி, ஆதரவான உறவுகள் மற்றும் தேவையானபோது மருத்துவ உதவிக்கு முன்னுரிமை அளியுங்கள். நோயறிதல் அல்லது சிகிச்சையைத் தாமதிக்க ஜோதிடத்தைப் பயன்படுத்த வேண்டாம்.' },
  { id:'travel', en:'Travel & foreign connections', ta:'பயணம் மற்றும் வெளிநாட்டுத் தொடர்புகள்', houses:[3,9,12],
    meaningEn:'The 3rd house is read for short journeys, the 9th for long-distance travel and the 12th for distant places, retreat and life away from familiar surroundings.',
    meaningTa:'3ஆம் பாவம் குறுகிய பயணங்களையும், 9ஆம் பாவம் நீண்டதூரப் பயணங்களையும், 12ஆம் பாவம் தொலைதூர இடங்கள் மற்றும் பழக்கமான சூழலுக்கு வெளியேயான வாழ்க்கையையும் குறிக்கிறது.',
    adviceEn:'Consider travel, study or work opportunities alongside finances, visas, family needs and practical planning. A chart cannot guarantee relocation.',
    adviceTa:'பயணம், கல்வி அல்லது வேலை வாய்ப்புகளை நிதி, விசா, குடும்பத் தேவைகள் மற்றும் நடைமுறைத் திட்டமிடலுடன் பரிசீலியுங்கள். இடமாற்றத்தை ஜாதகம் உறுதி செய்யாது.' },
  { id:'property', en:'Property & assets', ta:'சொத்து மற்றும் உடைமைகள்', houses:[4,2,11],
    meaningEn:'The 4th house is traditionally examined for home and property; the 2nd and 11th add savings, assets and the ability to build resources.',
    meaningTa:'4ஆம் பாவம் வீடு மற்றும் சொத்துக்காகப் பார்க்கப்படுகிறது. 2, 11ஆம் பாவங்கள் சேமிப்பு, உடைமைகள் மற்றும் வளங்களை உருவாக்கும் திறனைச் சேர்க்கின்றன.',
    adviceEn:'Property decisions require legal checks, affordability analysis and independent due diligence. This reading is not a prediction of purchase or ownership.',
    adviceTa:'சொத்து முடிவுகளுக்கு சட்டச் சரிபார்ப்பு, செலவுத்திறன் ஆய்வு மற்றும் சுயாதீன விசாரணை அவசியம். இந்த விளக்கம் வாங்குதல் அல்லது உரிமையை கணிக்காது.' },
  { id:'spirituality', en:'Spirituality & inner growth', ta:'ஆன்மிகம் மற்றும் உள்ளார்ந்த வளர்ச்சி', houses:[9,12,5],
    meaningEn:'The 9th house is associated with belief, teachers and dharma; the 12th with retreat and contemplation; the 5th with mantra, study and reflection.',
    meaningTa:'9ஆம் பாவம் நம்பிக்கை, ஆசிரியர்கள் மற்றும் தர்மத்தையும்; 12ஆம் பாவம் தியானம் மற்றும் தனிமையையும்; 5ஆம் பாவம் மந்திரம், கல்வி மற்றும் சிந்தனையையும் குறிக்கிறது.',
    adviceEn:'Explore practices that bring clarity and compassion while respecting your own beliefs and community. These symbols do not prescribe a single spiritual path.',
    adviceTa:'உங்கள் நம்பிக்கைகள் மற்றும் சமூகத்தை மதித்து தெளிவு, கருணை தரும் ஆன்மிகப் பயிற்சிகளை ஆராயுங்கள். இந்தக் குறியீடுகள் ஒரே ஆன்மிகப் பாதையை நிர்ணயிப்பதில்லை.' }
];

const WORDS = {
  en:{houses:'Houses considered', key:'Chart factors', reading:'Traditional interpretation', reflection:'Practical reflection', sign:'sign', house:'house', lord:'lord', occupied:'occupied by', noOccupants:'No classical planet is placed in this house in the current chart.', placedIn:'is placed in', currentPeriod:'Current Vimshottari period', antar:'Antardasha', notCalculated:'Timing is not assessed in this thematic section.'},
  ta:{houses:'பரிசீலிக்கப்பட்ட பாவங்கள்',key:'ஜாதகக் காரணிகள்',reading:'பாரம்பரிய விளக்கம்',reflection:'நடைமுறைச் சிந்தனை',sign:'ராசி',house:'ஆம் பாவம்',lord:'அதிபதி',occupied:'இருப்பவை',noOccupants:'இந்த ஜாதகத்தில் இந்தப் பாவத்தில் முக்கிய கிரகம் எதுவும் இல்லை.',placedIn:'இருப்பது',currentPeriod:'நடப்பு விம்சோத்தரி காலம்',antar:'அந்தர்தசை',notCalculated:'இந்தத் தலைப்பில் காலக் கணிப்பு செய்யப்படவில்லை.'}
};

function houseDetails(house, data, asc, lang, names, planetName) {
  const sign = (asc + house - 1) % 12;
  const lord = SIGN_LORDS[sign];
  const lordPlanet = data.planets.find(p => p.name === lord);
  const lordHouse = lordPlanet ? (Math.floor(((lordPlanet.longitude % 360) + 360) % 360 / 30) - asc + 12) % 12 + 1 : null;
  const occupants = data.planets.filter(p => (Math.floor(((p.longitude % 360) + 360) % 360 / 30) - asc + 12) % 12 + 1 === house);
  const t = WORDS[lang];
  const signName = names[lang].signs[sign];
  const lordText = lordPlanet ? `${planetName(lord)} — ${names[lang].signs[Math.floor(lordPlanet.longitude / 30)]}, ${lordHouse}${t.house}` : planetName(lord);
  const occupantText = occupants.length ? occupants.map(p => planetName(p.name)).join(', ') : t.noOccupants;
  return {
    house,
    text: `${house}${t.house} (${signName}) · ${t.lord}: ${lordText} · ${t.occupied}: ${occupantText}`
  };
}

export function renderDetailedPredictions(data, asc, lang, names, planetName) {
  const t = WORDS[lang];
  const current = data.dasha.current;
  const now = new Date();
  const activeAntar = current.subs.find(p => now >= p.start && now < p.end);
  const dashaLine = `${t.currentPeriod}: ${names[lang].dashaLords[DASHA_ORDER.indexOf(current.lord)]}${activeAntar ? ` · ${t.antar}: ${names[lang].dashaLords[DASHA_ORDER.indexOf(activeAntar.lord)]}` : ''} (${fmt(current.start, lang)} – ${fmt(current.end, lang)})`;

  return TOPICS.map(topic => {
    const details = topic.houses.map(h => houseDetails(h, data, asc, lang, names, planetName));
    const labels = topic.houses.join(', ');
    const meaning = lang === 'ta' ? topic.meaningTa : topic.meaningEn;
    const advice = lang === 'ta' ? topic.adviceTa : topic.adviceEn;
    const title = lang === 'ta' ? topic.ta : topic.en;
    return `<article class="life-card detailed-card">
      <div class="prediction-number">${String(TOPICS.indexOf(topic)+1).padStart(2,'0')}</div>
      <h4>${title}</h4>
      <p class="prediction-summary">${meaning}</p>
      <div class="prediction-block"><strong>${t.key}</strong><ul>${details.map(d => `<li>${d.text}</li>`).join('')}</ul></div>
      <div class="prediction-block"><strong>${t.reading}</strong><p>${advice}</p></div>
      <p class="prediction-period"><strong>${dashaLine}</strong></p>
    </article>`;
  }).join('');
}

function fmt(date, lang) {
  return new Intl.DateTimeFormat(lang === 'ta' ? 'ta-IN' : 'en-GB', {day:'2-digit',month:'short',year:'numeric'}).format(date);
}
