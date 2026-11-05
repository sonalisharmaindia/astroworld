const DASHA_ORDER = ['Ketu','Venus','Sun','Moon','Mars','Rahu','Jupiter','Saturn','Mercury'];

const SIGN_LORDS = [
  'Mars','Venus','Mercury','Moon','Sun','Mercury',
  'Venus','Mars','Jupiter','Saturn','Saturn','Jupiter'
];

const TOPICS = [
  { id:'overall', en:'Overall life direction', ta:'ஒட்டுமொத்த வாழ்க்கைப் பாதை', houses:[1,9,10,11],
    meaningEn:'Your Ascendant describes how you tend to approach new situations. The 9th, 10th and 11th houses add themes of learning, career direction and the goals you want to build towards.',
    meaningTa:'லக்னம் வாழ்க்கையை அணுகும் முறையைக் குறிக்கிறது. 9, 10, 11ஆம் பாவங்கள் கல்வி, தொழில் மற்றும் நீண்டகால இலக்குகளைக் காட்டுகின்றன.',
    adviceEn:'Use this combination to reflect on the environments and goals that help you grow. Real outcomes also depend on choices, opportunities and circumstances.',
    adviceTa:'உங்கள் வளர்ச்சிக்கு உதவும் சூழல்கள் மற்றும் இலக்குகளைப் பற்றி சிந்திக்க இந்த அமைப்பைப் பயன்படுத்துங்கள். வாழ்க்கை முடிவுகள் உங்கள் தேர்வுகள், வாய்ப்புகள் மற்றும் சூழல்களையும் சார்ந்தவை.' },
  { id:'personality', en:'Personality & strengths', ta:'ஆளுமை மற்றும் திறன்கள்', houses:[1,3,5],
    meaningEn:'Your 1st house is associated with how you express yourself. The 3rd and 5th houses add themes of communication, initiative, learning and creativity.',
    meaningTa:'1ஆம் பாவம் குணநலன் மற்றும் சுய வெளிப்பாட்டைக் குறிக்கிறது. 3, 5ஆம் பாவங்கள் தொடர்பாடல், முயற்சி மற்றும் படைப்பாற்றலைச் சேர்க்கின்றன.',
    adviceEn:'Notice which skills feel natural and build them through consistent practice rather than treating a chart placement as a fixed limit.',
    adviceTa:'இயல்பாக வெளிப்படும் திறன்களைக் கண்டறிந்து தொடர்ந்து பயிற்சி செய்யுங்கள். ஜாதக அமைப்பை நிரந்தர வரம்பாகக் கருத வேண்டாம்.' },
  { id:'marriage', en:'Marriage & relationships', ta:'திருமணம் மற்றும் உறவுகள்', houses:[7,2,8],
    meaningEn:'Your 7th house is the main partnership area in traditional Jyotish. The 2nd and 8th add family responsibilities, shared resources and adjustment. Venus is also considered.',
    meaningTa:'திருமண மற்றும் கூட்டாண்மை அம்சங்களுக்கு 7ஆம் பாவம் பாரம்பரியமாகப் பார்க்கப்படுகிறது. 2, 8ஆம் பாவங்கள் குடும்ப வாழ்க்கை, பகிரப்பட்ட வளங்கள் மற்றும் மாற்றங்களைச் சுட்டுகின்றன. சுக்கிரனும் பரிசீலிக்கப்படுகிறார்.',
    adviceEn:'Treat this as a reflection on partnership patterns, not a promise about marriage timing or a spouse. Communication, consent and compatibility matter in real relationships.',
    adviceTa:'இதை உறவுமுறை பற்றிய சிந்தனைக்கான வழிகாட்டியாக மட்டுமே எடுத்துக்கொள்ளுங்கள்; திருமண நேரம் அல்லது துணைவர் பற்றிய உறுதிமொழியாக அல்ல. உரையாடல், சம்மதம் மற்றும் பொருத்தம் முக்கியம்.' },
  { id:'career', en:'Career & profession', ta:'தொழில் மற்றும் பணிவாழ்க்கை', houses:[10,6,2],
    meaningEn:'Your 10th house relates to career and public responsibilities. The 6th adds daily work and service; the 2nd brings attention to skills, speech and resources.',
    meaningTa:'10ஆம் பாவம் தொழில் மற்றும் சமூகப் பங்களிப்பைக் குறிக்கிறது. 6ஆம் பாவம் சேவை மற்றும் அன்றாடப் பொறுப்புகளையும், 2ஆம் பாவம் வளங்கள் மற்றும் திறன்களையும் குறிக்கிறது.',
    adviceEn:'Compare these themes with your education, experience and interests. Career decisions should be based on practical research and your own priorities.',
    adviceTa:'இந்த அம்சங்களை உங்கள் கல்வி, அனுபவம் மற்றும் ஆர்வங்களுடன் ஒப்பிடுங்கள். தொழில் முடிவுகள் நடைமுறை ஆய்வு மற்றும் உங்கள் முன்னுரிமைகளின் அடிப்படையில் இருக்க வேண்டும்.' },
  { id:'finance', en:'Money & financial habits', ta:'பணம் மற்றும் நிதிப் பழக்கங்கள்', houses:[2,11,5],
    meaningEn:'Your 2nd house relates to savings and resources, while the 11th is associated with income and gains. The 5th adds themes of judgement and considered risk.',
    meaningTa:'2, 11ஆம் பாவங்கள் சேமிப்பு, வருமானம் மற்றும் ஆதாயங்களுக்காகப் பார்க்கப்படுகின்றன. 5ஆம் பாவம் விவேகம் மற்றும் கணக்கிட்ட அபாயங்களைப் பற்றியும் பரிசீலிக்கப்படுகிறது.',
    adviceEn:'This is not a forecast of wealth, profit or investment performance. Use budgeting, emergency savings and qualified financial advice for real decisions.',
    adviceTa:'இது செல்வம், லாபம் அல்லது முதலீட்டு வருமானத்திற்கான கணிப்பு அல்ல. நிதி முடிவுகளுக்கு பட்ஜெட், அவசரச் சேமிப்பு மற்றும் தகுதியான நிதி ஆலோசனையைப் பயன்படுத்துங்கள்.' },
  { id:'education', en:'Education & learning', ta:'கல்வி மற்றும் கற்றல்', houses:[4,5,9],
    meaningEn:'Your 4th house relates to foundational learning, the 5th to understanding and creativity, and the 9th to higher education, teachers and broader ideas.',
    meaningTa:'4ஆம் பாவம் அடிப்படைக் கல்வியையும், 5ஆம் பாவம் கற்றல் மற்றும் பகுத்தறிவையும், 9ஆம் பாவம் உயர்கல்வி, ஆசிரியர்கள் மற்றும் தத்துவத்தையும் குறிக்கிறது.',
    adviceEn:'Choose learning paths that match your curiosity and circumstances. The chart cannot determine academic results or admission outcomes.',
    adviceTa:'உங்கள் ஆர்வம் மற்றும் சூழலுக்கு ஏற்ற கற்றல் பாதைகளைத் தேர்ந்தெடுங்கள். கல்வி முடிவுகள் அல்லது சேர்க்கையை ஜாதகம் உறுதி செய்யாது.' },
  { id:'family', en:'Family & home life', ta:'குடும்பம் மற்றும் இல்லறம்', houses:[2,4],
    meaningEn:'Your 2nd house relates to family resources and communication. Your 4th house describes home, emotional foundations and the environment in which you feel settled.',
    meaningTa:'2ஆம் பாவம் குடும்ப வளங்கள் மற்றும் பேச்சையும், 4ஆம் பாவம் வீடு, மன அடித்தளம் மற்றும் இல்லற வசதியையும் குறிக்கிறது.',
    adviceEn:'Use these themes to reflect on communication, responsibilities and the kind of home environment you want to nurture.',
    adviceTa:'தொடர்பாடல், பொறுப்புகள் மற்றும் நீங்கள் உருவாக்க விரும்பும் இல்லச் சூழலைப் பற்றி சிந்திக்க இந்த அம்சங்களைப் பயன்படுத்துங்கள்.' },
  { id:'children', en:'Children & creativity', ta:'குழந்தைகள் மற்றும் படைப்பாற்றல்', houses:[5,9],
    meaningEn:'Your 5th house is associated with creativity, learning and children; the 9th adds guidance, values and beliefs. Jupiter is also considered in this traditional reading.',
    meaningTa:'5ஆம் பாவம் குழந்தைகள், படைப்பாற்றல் மற்றும் கற்றலுடன் தொடர்புபடுத்தப்படுகிறது. 9ஆம் பாவம் வழிகாட்டுதல் மற்றும் மதிப்புகளைக் காட்டுகிறது. குருவும் பரிசீலிக்கப்படுகிறார்.',
    adviceEn:'This section is symbolic and cannot assess fertility, pregnancy or a child’s health. Seek appropriate medical guidance for those questions.',
    adviceTa:'இந்தப் பகுதி குறியீட்டு விளக்கம் மட்டுமே; கருத்தரிப்பு, கர்ப்பம் அல்லது குழந்தையின் உடல்நிலையை மதிப்பிடாது. அவற்றிற்கு மருத்துவ ஆலோசனையை நாடுங்கள்.' },
  { id:'wellbeing', en:'Wellbeing & daily balance', ta:'நலவாழ்வு மற்றும் அன்றாட சமநிலை', houses:[1,6,8],
    meaningEn:'Your 1st, 6th and 8th houses are traditionally discussed in relation to vitality, daily routines, challenges and change. These placements cannot assess your health.',
    meaningTa:'1, 6, 8ஆம் பாவங்கள் உயிர்சக்தி, அன்றாட ஒழுங்கு, சவால்கள் மற்றும் மாற்றங்களுடன் பாரம்பரியமாகப் பேசப்படுகின்றன. ஜோதிடம் மருத்துவ மதிப்பீடு அல்ல.',
    adviceEn:'Prioritise sleep, movement, supportive relationships and professional care when needed. Do not use astrology to diagnose or delay treatment.',
    adviceTa:'போதிய உறக்கம், உடற்பயிற்சி, ஆதரவான உறவுகள் மற்றும் தேவையானபோது மருத்துவ உதவிக்கு முன்னுரிமை அளியுங்கள். நோயறிதல் அல்லது சிகிச்சையைத் தாமதிக்க ஜோதிடத்தைப் பயன்படுத்த வேண்டாம்.' },
  { id:'travel', en:'Travel & foreign connections', ta:'பயணம் மற்றும் வெளிநாட்டுத் தொடர்புகள்', houses:[3,9,12],
    meaningEn:'Your 3rd house relates to short journeys and initiative, the 9th to long-distance travel and learning, and the 12th to distant places and time away from familiar surroundings.',
    meaningTa:'3ஆம் பாவம் குறுகிய பயணங்களையும், 9ஆம் பாவம் நீண்டதூரப் பயணங்களையும், 12ஆம் பாவம் தொலைதூர இடங்கள் மற்றும் பழக்கமான சூழலுக்கு வெளியேயான வாழ்க்கையையும் குறிக்கிறது.',
    adviceEn:'Consider travel, study or work opportunities alongside finances, visas, family needs and practical planning. A chart cannot guarantee relocation.',
    adviceTa:'பயணம், கல்வி அல்லது வேலை வாய்ப்புகளை நிதி, விசா, குடும்பத் தேவைகள் மற்றும் நடைமுறைத் திட்டமிடலுடன் பரிசீலியுங்கள். இடமாற்றத்தை ஜாதகம் உறுதி செய்யாது.' },
  { id:'property', en:'Property & assets', ta:'சொத்து மற்றும் உடைமைகள்', houses:[4,2,11],
    meaningEn:'Your 4th house is the main home and property area in traditional Jyotish. The 2nd and 11th add themes of savings, assets and building resources.',
    meaningTa:'4ஆம் பாவம் வீடு மற்றும் சொத்துக்காகப் பார்க்கப்படுகிறது. 2, 11ஆம் பாவங்கள் சேமிப்பு, உடைமைகள் மற்றும் வளங்களை உருவாக்கும் திறனைச் சேர்க்கின்றன.',
    adviceEn:'Property decisions require legal checks, affordability analysis and independent due diligence. This reading is not a prediction of purchase or ownership.',
    adviceTa:'சொத்து முடிவுகளுக்கு சட்டச் சரிபார்ப்பு, செலவுத்திறன் ஆய்வு மற்றும் சுயாதீன விசாரணை அவசியம். இந்த விளக்கம் வாங்குதல் அல்லது உரிமையை கணிக்காது.' },
  { id:'spirituality', en:'Spirituality & inner growth', ta:'ஆன்மிகம் மற்றும் உள்ளார்ந்த வளர்ச்சி', houses:[9,12,5],
    meaningEn:'Your 9th house relates to beliefs, teachers and dharma. The 12th adds contemplation and retreat, while the 5th connects with study, mantra and reflection.',
    meaningTa:'9ஆம் பாவம் நம்பிக்கை, ஆசிரியர்கள் மற்றும் தர்மத்தையும்; 12ஆம் பாவம் தியானம் மற்றும் தனிமையையும்; 5ஆம் பாவம் மந்திரம், கல்வி மற்றும் சிந்தனையையும் குறிக்கிறது.',
    adviceEn:'Explore practices that bring clarity and compassion while respecting your own beliefs and community. These symbols do not prescribe a single spiritual path.',
    adviceTa:'உங்கள் நம்பிக்கைகள் மற்றும் சமூகத்தை மதித்து தெளிவு, கருணை தரும் ஆன்மிகப் பயிற்சிகளை ஆராயுங்கள். இந்தக் குறியீடுகள் ஒரே ஆன்மிகப் பாதையை நிர்ணயிப்பதில்லை.' }
];

const WORDS = {
  en:{key:'What your chart shows',reading:'How to understand this',reflection:'A practical takeaway',house:'house',lord:'ruler',occupied:'Planets placed here',noOccupants:'No classical planet occupies this house. That does not make the house inactive; its ruler still matters.',currentPeriod:'Your current major period',antar:'sub-period',periodTitle:'Your current planetary period',periodIntro:'In the Vimshottari system, this is the major and sub-period active on today’s date. Traditional astrology uses these cycles as timing context, not as a guarantee that a particular event will happen.'},
  ta:{key:'உங்கள் ஜாதகம் காட்டுவது',reading:'இதன் பொருள்',reflection:'நடைமுறை வழிகாட்டல்',house:'ஆம் பாவம்',lord:'அதிபதி',occupied:'இந்தப் பாவத்தில் உள்ள கிரகங்கள்',noOccupants:'இந்தப் பாவத்தில் முக்கிய கிரகம் இல்லை. அதனால் இந்தப் பாவம் செயலற்றது என்று பொருள் அல்ல; அதன் அதிபதியும் முக்கியமானவர்.',currentPeriod:'உங்கள் நடப்பு மகாதசை',antar:'அந்தர்தசை',periodTitle:'உங்கள் நடப்பு கிரகக் காலம்',periodIntro:'விம்சோத்தரி முறையில், இன்றைய தேதியில் செயல்படும் மகாதசை மற்றும் அந்தர்தசை இதுவாகும். பாரம்பரிய ஜோதிடத்தில் இவை காலச் சூழலாகப் பார்க்கப்படுகின்றன; குறிப்பிட்ட நிகழ்வு நிச்சயம் நடக்கும் என்பதற்கான உறுதி அல்ல.'}
};

function ordinal(n) {
  if (n >= 11 && n <= 13) return `${n}th`;
  return `${n}${({1:'st',2:'nd',3:'rd'})[n%10]||'th'}`;
}

function houseDetails(house, data, asc, lang, names, planetName) {
  const sign = (asc + house - 1) % 12;
  const lord = SIGN_LORDS[sign];
  const lordPlanet = data.planets.find(p => p.name === lord);
  const lordHouse = lordPlanet ? (Math.floor(((lordPlanet.longitude % 360) + 360) % 360 / 30) - asc + 12) % 12 + 1 : null;
  const occupants = data.planets.filter(p => (Math.floor(((p.longitude % 360) + 360) % 360 / 30) - asc + 12) % 12 + 1 === house);
  const t = WORDS[lang];
  const signName = names[lang].signs[sign];
  const lordSign = lordPlanet ? names[lang].signs[Math.floor(((lordPlanet.longitude % 360) + 360) % 360 / 30)] : '';
  const lordText = lordPlanet
    ? (lang === 'ta' ? `${planetName(lord)} ${lordSign} ராசியில் ${lordHouse}ஆம் பாவத்தில் உள்ளது` : `${planetName(lord)} is in ${lordSign}, your ${ordinal(lordHouse)} house`)
    : planetName(lord);
  const occupantText = occupants.length ? occupants.map(p => planetName(p.name)).join(', ') : t.noOccupants;
  return lang === 'ta'
    ? `உங்கள் ${house}ஆம் பாவம் ${signName} ராசியில் உள்ளது. இதன் அதிபதி ${lordText}. ${t.occupied}: ${occupantText}`
    : `Your ${ordinal(house)} house falls in ${signName}. Its ruler is ${lordText}. ${t.occupied}: ${occupantText}`;
}

export function renderDetailedPredictions(data, asc, lang, names, planetName) {
  const t = WORDS[lang];
  const current = data.dasha.current;
  const now = new Date();
  const activeAntar = current.subs.find(p => now >= p.start && now < p.end);
  const dashaLord = names[lang].dashaLords[DASHA_ORDER.indexOf(current.lord)];
  const antarLord = activeAntar ? names[lang].dashaLords[DASHA_ORDER.indexOf(activeAntar.lord)] : '';
  const dashaLine = lang === 'ta'
    ? `${dashaLord} மகாதசை${activeAntar ? ` · ${antarLord} அந்தர்தசை` : ''} · ${fmt(current.start,lang)} – ${fmt(current.end,lang)}`
    : `${dashaLord} Mahadasha${activeAntar ? ` · ${antarLord} Antardasha` : ''} · ${fmt(current.start,lang)} – ${fmt(current.end,lang)}`;

  const timing = `<article class="dasha-summary-card"><div class="dasha-summary-icon">✧</div><div><div class="dasha-summary-kicker">${t.periodTitle}</div><h4>${dashaLine}</h4><p>${t.periodIntro}</p></div></article>`;
  const cards = TOPICS.map((topic, index) => {
    const details = topic.houses.map(h => houseDetails(h, data, asc, lang, names, planetName));
    const meaning = lang === 'ta' ? topic.meaningTa : topic.meaningEn;
    const advice = lang === 'ta' ? topic.adviceTa : topic.adviceEn;
    const title = lang === 'ta' ? topic.ta : topic.en;
    return `<article class="life-card detailed-card">
      <div class="prediction-number">${String(index+1).padStart(2,'0')}</div>
      <h4>${title}</h4>
      <p class="prediction-summary">${meaning}</p>
      <div class="prediction-block"><strong>${t.key}</strong><ul>${details.map(d => `<li>${d}</li>`).join('')}</ul></div>
      <div class="prediction-block"><strong>${t.reading}</strong><p>${advice}</p></div>
    </article>`;
  }).join('');
  return timing + cards;
}

function fmt(date, lang) {
  return new Intl.DateTimeFormat(lang === 'ta' ? 'ta-IN' : 'en-GB', {day:'2-digit',month:'short',year:'numeric'}).format(date);
}
