const DASHA_ORDER = ['Ketu','Venus','Sun','Moon','Mars','Rahu','Jupiter','Saturn','Mercury'];

const SIGN_LORDS = [
  'Mars','Venus','Mercury','Moon','Sun','Mercury',
  'Venus','Mars','Jupiter','Saturn','Saturn','Jupiter'
];

const TOPICS = [
  { id:'overall', en:'Overall life direction', ta:'ஒட்டுமொத்த வாழ்க்கைப் பாதை', houses:[1,9,10,11],
    meaningEn:'Your Ascendant describes how you tend to approach new situations. The 9th, 10th and 11th houses add themes of learning, career direction and the goals you want to build towards.',
    meaningTa:'உங்கள் லக்னம் புதிய சூழல்களை நீங்கள் அணுகும் முறையைக் குறிக்கிறது. 9, 10, 11ஆம் பாவங்கள் கல்வி, தொழில் திசை மற்றும் நீண்டகால இலக்குகளைப் பற்றிய அம்சங்களைச் சேர்க்கின்றன.',
    adviceEn:'Use this combination to reflect on the environments and goals that help you grow. Real outcomes also depend on choices, opportunities and circumstances.',
    adviceTa:'உங்கள் வளர்ச்சிக்கு உதவும் சூழல்கள் மற்றும் இலக்குகளைப் பற்றி சிந்திக்க இந்த அமைப்பைப் பயன்படுத்துங்கள். வாழ்க்கை முடிவுகள் உங்கள் தேர்வுகள், வாய்ப்புகள் மற்றும் சூழல்களையும் சார்ந்தவை.' },
  { id:'personality', en:'Personality & strengths', ta:'ஆளுமை மற்றும் திறன்கள்', houses:[1,3,5],
    meaningEn:'Your 1st house is associated with how you express yourself. The 3rd and 5th houses add themes of communication, initiative, learning and creativity.',
    meaningTa:'உங்கள் 1ஆம் பாவம் சுய வெளிப்பாட்டைக் குறிக்கிறது. 3, 5ஆம் பாவங்கள் தொடர்பாடல், முயற்சி, கற்றல் மற்றும் படைப்பாற்றலைக் காட்டுகின்றன.',
    adviceEn:'Notice which skills feel natural and build them through consistent practice rather than treating a chart placement as a fixed limit.',
    adviceTa:'இயல்பாக வெளிப்படும் திறன்களைக் கண்டறிந்து தொடர்ந்து பயிற்சி செய்யுங்கள். ஜாதக அமைப்பை நிரந்தர வரம்பாகக் கருத வேண்டாம்.' },
  { id:'marriage', en:'Marriage & relationships', ta:'திருமணம் மற்றும் உறவுகள்', houses:[7,2,8],
    meaningEn:'Your 7th house is the main partnership area in traditional Jyotish. The 2nd and 8th add family responsibilities, shared resources and adjustment. Venus is also considered.',
    meaningTa:'பாரம்பரிய வேத ஜோதிடத்தில் 7ஆம் பாவம் உறவு மற்றும் கூட்டாண்மையைக் குறிக்கிறது. 2, 8ஆம் பாவங்கள் குடும்பப் பொறுப்புகள், பகிரப்பட்ட வளங்கள் மற்றும் வாழ்க்கை மாற்றங்களைச் சேர்த்துக் காட்டுகின்றன. சுக்கிரனும் பரிசீலிக்கப்படுகிறார்.',
    adviceEn:'Treat this as a reflection on partnership patterns, not a promise about marriage timing or a spouse. Communication, consent and compatibility matter in real relationships.',
    adviceTa:'இதை உறவுமுறை பற்றிய சிந்தனைக்கான வழிகாட்டியாக மட்டுமே எடுத்துக்கொள்ளுங்கள்; திருமண நேரம் அல்லது துணைவர் பற்றிய உறுதிமொழியாக அல்ல. உரையாடல், சம்மதம் மற்றும் பொருத்தம் முக்கியம்.' },
  { id:'career', en:'Career & profession', ta:'தொழில் மற்றும் பணிவாழ்க்கை', houses:[10,6,2],
    meaningEn:'Your 10th house relates to career and public responsibilities. The 6th adds daily work and service; the 2nd brings attention to skills, speech and resources.',
    meaningTa:'உங்கள் 10ஆம் பாவம் தொழில் மற்றும் பொது பொறுப்புகளைக் குறிக்கிறது. 6ஆம் பாவம் அன்றாட வேலை மற்றும் சேவையையும்; 2ஆம் பாவம் திறன்கள், பேச்சு மற்றும் வளங்களையும் காட்டுகிறது.',
    adviceEn:'Compare these themes with your education, experience and interests. Career decisions should be based on practical research and your own priorities.',
    adviceTa:'இந்த அம்சங்களை உங்கள் கல்வி, அனுபவம் மற்றும் ஆர்வங்களுடன் ஒப்பிடுங்கள். தொழில் முடிவுகள் நடைமுறை ஆய்வு மற்றும் உங்கள் முன்னுரிமைகளின் அடிப்படையில் இருக்க வேண்டும்.' },
  { id:'finance', en:'Money & financial habits', ta:'பணம் மற்றும் நிதிப் பழக்கங்கள்', houses:[2,11,5],
    meaningEn:'Your 2nd house relates to savings and resources, while the 11th is associated with income and gains. The 5th adds themes of judgement and considered risk.',
    meaningTa:'உங்கள் 2ஆம் பாவம் சேமிப்பு மற்றும் வளங்களையும், 11ஆம் பாவம் வருமானம் மற்றும் ஆதாயங்களையும் குறிக்கிறது. 5ஆம் பாவம் விவேகமான முடிவுகள் மற்றும் கணக்கிட்ட அபாயங்களைச் சுட்டுகிறது.',
    adviceEn:'This is not a forecast of wealth, profit or investment performance. Use budgeting, emergency savings and qualified financial advice for real decisions.',
    adviceTa:'இது செல்வம், லாபம் அல்லது முதலீட்டு வருமானத்திற்கான கணிப்பு அல்ல. நிதி முடிவுகளுக்கு பட்ஜெட், அவசரச் சேமிப்பு மற்றும் தகுதியான நிதி ஆலோசனையைப் பயன்படுத்துங்கள்.' },
  { id:'education', en:'Education & learning', ta:'கல்வி மற்றும் கற்றல்', houses:[4,5,9],
    meaningEn:'Your 4th house relates to foundational learning, the 5th to understanding and creativity, and the 9th to higher education, teachers and broader ideas.',
    meaningTa:'உங்கள் 4ஆம் பாவம் அடிப்படைக் கல்வியையும், 5ஆம் பாவம் புரிதல் மற்றும் படைப்பாற்றலையும், 9ஆம் பாவம் உயர்கல்வி, ஆசிரியர்கள் மற்றும் விரிவான சிந்தனையையும் குறிக்கிறது.',
    adviceEn:'Choose learning paths that match your curiosity and circumstances. The chart cannot determine academic results or admission outcomes.',
    adviceTa:'உங்கள் ஆர்வம் மற்றும் சூழலுக்கு ஏற்ற கற்றல் பாதைகளைத் தேர்ந்தெடுங்கள். கல்வி முடிவுகள் அல்லது சேர்க்கையை ஜாதகம் உறுதி செய்யாது.' },
  { id:'family', en:'Family & home life', ta:'குடும்பம் மற்றும் இல்லறம்', houses:[2,4],
    meaningEn:'Your 2nd house relates to family resources and communication. Your 4th house describes home, emotional foundations and the environment in which you feel settled.',
    meaningTa:'உங்கள் 2ஆம் பாவம் குடும்ப வளங்கள் மற்றும் தொடர்பாடலையும் குறிக்கிறது. 4ஆம் பாவம் வீடு, மனநிலை சார்ந்த அடித்தளம் மற்றும் நீங்கள் நிம்மதியாக உணரும் சூழலைக் காட்டுகிறது.',
    adviceEn:'Use these themes to reflect on communication, responsibilities and the kind of home environment you want to nurture.',
    adviceTa:'தொடர்பாடல், பொறுப்புகள் மற்றும் நீங்கள் உருவாக்க விரும்பும் இல்லச் சூழலைப் பற்றி சிந்திக்க இந்த அம்சங்களைப் பயன்படுத்துங்கள்.' },
  { id:'children', en:'Children & creativity', ta:'குழந்தைகள் மற்றும் படைப்பாற்றல்', houses:[5,9],
    meaningEn:'Your 5th house is associated with creativity, learning and children; the 9th adds guidance, values and beliefs. Jupiter is also considered in this traditional reading.',
    meaningTa:'உங்கள் 5ஆம் பாவம் படைப்பாற்றல், கற்றல் மற்றும் குழந்தைகளுடன் தொடர்புடையது. 9ஆம் பாவம் வழிகாட்டுதல், மதிப்புகள் மற்றும் நம்பிக்கைகளைச் சேர்த்துக் காட்டுகிறது. இந்தப் பாரம்பரிய விளக்கத்தில் குருவும் பரிசீலிக்கப்படுகிறார்.',
    adviceEn:'This section is symbolic and cannot assess fertility, pregnancy or a child’s health. Seek appropriate medical guidance for those questions.',
    adviceTa:'இந்தப் பகுதி குறியீட்டு விளக்கம் மட்டுமே; கருத்தரிப்பு, கர்ப்பம் அல்லது குழந்தையின் உடல்நிலையை மதிப்பிடாது. அவற்றிற்கு மருத்துவ ஆலோசனையை நாடுங்கள்.' },
  { id:'wellbeing', en:'Wellbeing & daily balance', ta:'நலவாழ்வு மற்றும் அன்றாட சமநிலை', houses:[1,6,8],
    meaningEn:'Your 1st, 6th and 8th houses are traditionally discussed in relation to vitality, daily routines, challenges and change. These placements cannot assess your health.',
    meaningTa:'உங்கள் 1, 6, 8ஆம் பாவங்கள் உயிர்சக்தி, அன்றாட ஒழுங்கு, சவால்கள் மற்றும் மாற்றங்களுடன் பாரம்பரியமாகத் தொடர்புபடுத்தப்படுகின்றன. இந்த அமைப்புகள் உங்கள் உடல்நிலையை மதிப்பிட முடியாது.',
    adviceEn:'Prioritise sleep, movement, supportive relationships and professional care when needed. Do not use astrology to diagnose or delay treatment.',
    adviceTa:'போதிய உறக்கம், உடற்பயிற்சி, ஆதரவான உறவுகள் மற்றும் தேவையானபோது மருத்துவ உதவிக்கு முன்னுரிமை அளியுங்கள். நோயறிதல் அல்லது சிகிச்சையைத் தாமதிக்க ஜோதிடத்தைப் பயன்படுத்த வேண்டாம்.' },
  { id:'travel', en:'Travel & foreign connections', ta:'பயணம் மற்றும் வெளிநாட்டுத் தொடர்புகள்', houses:[3,9,12],
    meaningEn:'Your 3rd house relates to short journeys and initiative, the 9th to long-distance travel and learning, and the 12th to distant places and time away from familiar surroundings.',
    meaningTa:'உங்கள் 3ஆம் பாவம் குறுகிய பயணங்கள் மற்றும் முயற்சியையும், 9ஆம் பாவம் நீண்டதூரப் பயணம் மற்றும் கல்வியையும், 12ஆம் பாவம் தொலைதூர இடங்கள் மற்றும் பழக்கமான சூழலிலிருந்து விலகியிருப்பதையும் குறிக்கிறது.',
    adviceEn:'Consider travel, study or work opportunities alongside finances, visas, family needs and practical planning. A chart cannot guarantee relocation.',
    adviceTa:'பயணம், கல்வி அல்லது வேலை வாய்ப்புகளை நிதி, விசா, குடும்பத் தேவைகள் மற்றும் நடைமுறைத் திட்டமிடலுடன் பரிசீலியுங்கள். இடமாற்றத்தை ஜாதகம் உறுதி செய்யாது.' },
  { id:'property', en:'Property & assets', ta:'சொத்து மற்றும் உடைமைகள்', houses:[4,2,11],
    meaningEn:'Your 4th house is the main home and property area in traditional Jyotish. The 2nd and 11th add themes of savings, assets and building resources.',
    meaningTa:'பாரம்பரிய வேத ஜோதிடத்தில் உங்கள் 4ஆம் பாவம் வீடு மற்றும் சொத்தைக் குறிக்கிறது. 2, 11ஆம் பாவங்கள் சேமிப்பு, உடைமைகள் மற்றும் வளங்களை உருவாக்குவதைச் சுட்டுகின்றன.',
    adviceEn:'Property decisions require legal checks, affordability analysis and independent due diligence. This reading is not a prediction of purchase or ownership.',
    adviceTa:'சொத்து முடிவுகளுக்கு சட்டச் சரிபார்ப்பு, செலவுத்திறன் ஆய்வு மற்றும் சுயாதீன விசாரணை அவசியம். இந்த விளக்கம் வாங்குதல் அல்லது உரிமையை கணிக்காது.' },
  { id:'spirituality', en:'Spirituality & inner growth', ta:'ஆன்மிகம் மற்றும் உள்ளார்ந்த வளர்ச்சி', houses:[9,12,5],
    meaningEn:'Your 9th house relates to beliefs, teachers and dharma. The 12th adds contemplation and retreat, while the 5th connects with study, mantra and reflection.',
    meaningTa:'உங்கள் 9ஆம் பாவம் நம்பிக்கை, ஆசிரியர்கள் மற்றும் தர்மத்தைக் குறிக்கிறது. 12ஆம் பாவம் தியானம் மற்றும் தனிமையையும்; 5ஆம் பாவம் கல்வி, மந்திரம் மற்றும் சிந்தனையையும் சேர்த்துக் காட்டுகிறது.',
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


const PLANET_EXALTATION = {Sun:0,Moon:1,Mars:9,Mercury:5,Jupiter:3,Venus:11,Saturn:6};
const PLANET_DEBILITATION = {Sun:6,Moon:7,Mars:3,Mercury:11,Jupiter:9,Venus:5,Saturn:0};
const BENEFIC_TONE = new Set(['Jupiter','Venus','Mercury','Moon']);
const HOUSE_THEME = {
  en:{strength:'Your chart highlights',opportunity:'Areas to develop',attention:'Areas needing care',intro:'This personalised overview is drawn from the planetary signs and houses in your Rasi chart. It uses a small set of transparent traditional indicators; it is not a complete Shadbala or yoga assessment.',strong:'A planet in its exaltation or own sign is traditionally treated as having added dignity.',angle:'A planet in a kendra (1, 4, 7 or 10) or trikona (1, 5 or 9) is traditionally given added prominence.',growth:'The 3rd, 6th, 10th and 11th are upachaya houses, often interpreted as areas that can develop through effort and time.',caution:'Debilitation or placement in the 6th, 8th or 12th can indicate themes that may call for patience and conscious effort; it does not mean failure.',empty:'Your current chart does not show a clear standout by this limited dignity check. Review the full chart and divisional charts for a broader reading.',takeaway:'Practical reflection',takeawayText:'Use these themes as prompts for reflection. Your choices, skills, relationships, circumstances and opportunities remain central to what happens in life.'},
  ta:{strength:'உங்கள் ஜாதகத்தில் வெளிப்படும் பலங்கள்',opportunity:'வளர்த்துக்கொள்ளக்கூடிய துறைகள்',attention:'கூடுதல் கவனம் தேவைப்படும் அம்சங்கள்',intro:'இந்தத் தனிப்பட்ட சுருக்கம் உங்கள் ராசி ஜாதகத்தில் உள்ள கிரக ராசி மற்றும் பாவ நிலைகளை அடிப்படையாகக் கொண்டது. சில பாரம்பரியக் குறியீடுகள் மட்டுமே பயன்படுத்தப்பட்டுள்ளன; இது முழுமையான ஷட்பலம் அல்லது யோக மதிப்பீடு அல்ல.',strong:'உச்சம் அல்லது சொந்த ராசியில் உள்ள கிரகம் பாரம்பரியமாக கூடுதல் பலம் கொண்டதாகக் கருதப்படுகிறது.',angle:'கேந்திர (1, 4, 7, 10) அல்லது திரிகோண (1, 5, 9) பாவத்தில் உள்ள கிரகத்திற்கு பாரம்பரியமாக கூடுதல் முக்கியத்துவம் அளிக்கப்படுகிறது.',growth:'3, 6, 10, 11ஆம் பாவங்கள் உபசய பாவங்கள். முயற்சி மற்றும் காலப்போக்கில் வளரக்கூடிய துறைகளாக இவை விளக்கப்படுகின்றன.',caution:'நீச ராசி அல்லது 6, 8, 12ஆம் பாவ நிலைகள் பொறுமை மற்றும் விழிப்புணர்வு தேவைப்படும் அம்சங்களைக் குறிக்கலாம்; இவை தோல்வியைக் குறிக்காது.',empty:'இந்த வரையறுக்கப்பட்ட பல மதிப்பீட்டில் தெளிவான முன்னிலை எதுவும் தெரியவில்லை. முழுமையான பார்வைக்கு மற்ற ஜாதக அம்சங்களையும் பிரிவு ஜாதகங்களையும் பரிசீலிக்க வேண்டும்.',takeaway:'நடைமுறை சிந்தனை',takeawayText:'இந்த அம்சங்களை சுயபரிசீலனைக்கான வழிகாட்டியாகப் பயன்படுத்துங்கள். வாழ்க்கை முடிவுகளில் உங்கள் தேர்வுகள், திறன்கள், உறவுகள், சூழ்நிலைகள் மற்றும் வாய்ப்புகளே முக்கியமானவை.'}
};
function personalHighlights(data, asc, lang, planetName) {
  const w=HOUSE_THEME[lang];
  const planets=data.planets.filter(p=>Object.prototype.hasOwnProperty.call(PLANET_EXALTATION,p.name));
  const rows=planets.map(p=>{
    const sign=Math.floor(((p.longitude%360)+360)%360/30);
    const house=(sign-asc+12)%12+1;
    const dignity=sign===PLANET_EXALTATION[p.name]?'exalted':sign===PLANET_DEBILITATION[p.name]?'debilitated':SIGN_LORDS[sign]===p.name?'own':'ordinary';
    let score=dignity==='exalted'?3:dignity==='own'?2:dignity==='debilitated'?-2:0;
    if([1,4,7,10].includes(house))score+=1;
    if([1,5,9].includes(house))score+=1;
    return {name:planetName(p.name),house,dignity,score,benefic:BENEFIC_TONE.has(p.name)};
  });
  const best=[...rows].filter(x=>x.score>=2).sort((a,b)=>b.score-a.score).slice(0,3);
  const weak=[...rows].filter(x=>x.score<0).sort((a,b)=>a.score-b.score).slice(0,3);
  const growth=[...rows].filter(x=>[3,6,10,11].includes(x.house)).sort((a,b)=>b.score-a.score).slice(0,3);
  const desc=(x)=>{
    const dign=lang==='ta'?(x.dignity==='exalted'?'உச்ச ராசி':x.dignity==='own'?'சொந்த ராசி':x.dignity==='debilitated'?'நீச ராசி':'சாதாரண ராசி'):(x.dignity==='exalted'?'exalted sign':x.dignity==='own'?'own sign':x.dignity==='debilitated'?'debilitated sign':'ordinary sign');
    return lang==='ta'? `${x.name}: ${x.house}ஆம் பாவத்தில், ${dign}`:`${x.name}: ${ordinal(x.house)} house, ${dign}`;
  };
  const list=(arr,empty)=>arr.length?arr.map(x=>`<li>${desc(x)}</li>`).join(''):`<li>${empty}</li>`;
  const growthText=lang==='ta'?'இந்த கிரகம் முயற்சியால் வளரக்கூடிய பாவத்தில் உள்ளது.':'This planet occupies an upachaya house, traditionally associated with development through effort.';
  const weakText=lang==='ta'?'இந்த நிலை பொறுமை மற்றும் விழிப்புணர்வுடன் அணுக வேண்டிய பாரம்பரியக் குறியீடு.':'This is a traditional cue to approach the related themes with patience and awareness.';
  return `<section class="personal-highlights"><div class="highlights-intro">${w.intro}</div><div class="highlight-grid">
    <article class="highlight-card highlight-strength"><span class="highlight-symbol">✦</span><h4>${w.strength}</h4><ul>${list(best,w.empty)}</ul><p>${w.strong}</p></article>
    <article class="highlight-card highlight-growth"><span class="highlight-symbol">↗</span><h4>${w.opportunity}</h4><ul>${list(growth,w.empty)}</ul><p>${growth.length?growthText:w.empty}</p></article>
    <article class="highlight-card highlight-care"><span class="highlight-symbol">✧</span><h4>${w.attention}</h4><ul>${list(weak,lang==='ta'?'இந்த வரையறுக்கப்பட்ட மதிப்பீட்டில் குறிப்பிடத்தக்க நீச நிலை இல்லை.':'No notable debilitation appears in this limited check.')}</ul><p>${weak.length?weakText:w.caution}</p></article>
  </div><div class="highlight-takeaway"><strong>${w.takeaway}</strong><p>${w.takeawayText}</p></div></section>`;
}


const HOUSE_MEANING = {
 en:{
  1:'identity, confidence and the way you begin things',2:'family resources, speech and savings',3:'communication, initiative and practical skills',4:'home, emotional foundations and property',5:'creativity, learning and personal expression',6:'daily work, service and problem-solving',7:'partnerships, agreements and close relationships',8:'transformation, research and shared responsibilities',9:'higher learning, beliefs and long-distance connections',10:'career, responsibility and public contribution',11:'networks, income and long-term goals',12:'rest, reflection, expenses and distant places'
 },
 ta:{
  1:'சுய அடையாளம், தன்னம்பிக்கை மற்றும் புதிய முயற்சிகள்',2:'குடும்ப வளங்கள், பேச்சு மற்றும் சேமிப்பு',3:'தொடர்பாடல், முயற்சி மற்றும் நடைமுறைத் திறன்கள்',4:'வீடு, மன அடித்தளம் மற்றும் சொத்து',5:'படைப்பாற்றல், கற்றல் மற்றும் சுய வெளிப்பாடு',6:'அன்றாட வேலை, சேவை மற்றும் பிரச்சினைகளைத் தீர்த்தல்',7:'கூட்டாண்மை, ஒப்பந்தங்கள் மற்றும் நெருங்கிய உறவுகள்',8:'மாற்றங்கள், ஆராய்ச்சி மற்றும் பகிரப்பட்ட பொறுப்புகள்',9:'உயர்கல்வி, நம்பிக்கைகள் மற்றும் தொலைதூரத் தொடர்புகள்',10:'தொழில், பொறுப்புகள் மற்றும் சமூகப் பங்களிப்பு',11:'தொடர்புகள், வருமானம் மற்றும் நீண்டகால இலக்குகள்',12:'ஓய்வு, சிந்தனை, செலவுகள் மற்றும் தொலைதூர இடங்கள்'
 }
};
const TOPIC_FOCUS = {
 en:{overall:'Your overall direction',personality:'Your self-expression',marriage:'Your close relationships',career:'Your professional life',finance:'Your financial habits',education:'Your learning journey',family:'Your family and home life',children:'Your creativity and relationship with children',wellbeing:'Your routines and personal balance',travel:'Travel and life beyond familiar surroundings',property:'Your home and assets',spirituality:'Your beliefs and inner life'},
 ta:{overall:'உங்கள் வாழ்க்கைப் பாதை',personality:'உங்கள் சுய வெளிப்பாடு',marriage:'உங்கள் நெருங்கிய உறவுகள்',career:'உங்கள் தொழில் வாழ்க்கை',finance:'உங்கள் நிதிப் பழக்கங்கள்',education:'உங்கள் கல்விப் பயணம்',family:'உங்கள் குடும்பம் மற்றும் இல்லறம்',children:'உங்கள் படைப்பாற்றல் மற்றும் குழந்தைகள் தொடர்பான அம்சங்கள்',wellbeing:'உங்கள் அன்றாட ஒழுங்கு மற்றும் தனிப்பட்ட சமநிலை',travel:'பயணம் மற்றும் பழக்கமான சூழலுக்கு வெளியேயான வாழ்க்கை',property:'உங்கள் வீடு மற்றும் சொத்துகள்',spirituality:'உங்கள் நம்பிக்கைகள் மற்றும் உள்ளார்ந்த வாழ்க்கை'}
};
function placementInsight(house,data,asc,lang,planetName){
 const sign=(asc+house-1)%12, lord=SIGN_LORDS[sign];
 const p=data.planets.find(x=>x.name===lord);
 if(!p)return '';
 const pSign=Math.floor(((p.longitude%360)+360)%360/30);
 const pHouse=(pSign-asc+12)%12+1;
 const planet=planetName(lord);
 const source=HOUSE_MEANING[lang][house], destination=HOUSE_MEANING[lang][pHouse];
 return lang==='ta'
  ? `உங்கள் ${house}ஆம் பாவத்தின் அதிபதி ${planet}, ${pHouse}ஆம் பாவத்தில் உள்ளது. இதனால் ${source} என்ற அம்சங்கள், ${destination} என்ற துறைகளுடன் தொடர்புபடுகின்றன. பாரம்பரிய ஜோதிடத்தில் இது இந்த இரண்டு வாழ்க்கைத் துறைகளும் ஒன்றோடொன்று இணைந்து செயல்படலாம் என்று விளக்கப்படுகிறது.`
  : `Your ${ordinal(house)}-house ruler, ${planet}, is placed in your ${ordinal(pHouse)} house. This links ${source} with ${destination}. In traditional Jyotish, these two areas of life are therefore read together.`;
}
function chartEvidence(house,data,asc,lang,names,planetName){
 const sign=(asc+house-1)%12, lord=SIGN_LORDS[sign];
 const p=data.planets.find(x=>x.name===lord);
 const occupants=data.planets.filter(x=>(Math.floor(((x.longitude%360)+360)%360/30)-asc+12)%12+1===house);
 const signName=names[lang].signs[sign];
 const pHouse=p? (Math.floor(((p.longitude%360)+360)%360/30)-asc+12)%12+1:null;
 return lang==='ta'
  ? `${house}ஆம் பாவம் ${signName} ராசியில்; அதிபதி ${planetName(lord)}${pHouse?` ${pHouse}ஆம் பாவத்தில்`:''}; பாவத்தில் உள்ள கிரகங்கள்: ${occupants.length?occupants.map(x=>planetName(x.name)).join(', '):'இல்லை'}.`
  : `${ordinal(house)} house in ${signName}; ruler: ${planetName(lord)}${pHouse?` in the ${ordinal(pHouse)} house`:''}; occupants: ${occupants.length?occupants.map(x=>planetName(x.name)).join(', '):'none'}.`;
}


const PRACTICAL_ACTIONS = {
 en:{
  1:'Take the lead where you have a clear goal. Build confidence through small decisions and steady follow-through.',
  2:'Make this concrete through clear conversations, careful budgeting and a realistic plan for shared responsibilities.',
  3:'Put this connection to work through communication, writing, learning a practical skill and building useful contacts.',
  4:'Give attention to your home base, emotional steadiness and the support systems that help you make good decisions.',
  5:'Make room for learning, creative thinking and thoughtful choices. Test ideas before committing significant time or money.',
  6:'Progress is likely to depend on routines, organisation and solving everyday problems one step at a time.',
  7:'Work with others rather than carrying everything alone. Clear agreements, listening and mutual expectations are especially important.',
  8:'Take time to understand the deeper or shared parts of the situation. Be transparent about obligations, risks and resources.',
  9:'Broaden your options through further learning, mentors, travel or exposure to different viewpoints.',
  10:'Turn intentions into visible responsibility. Set a clear goal, build expertise and let consistent work demonstrate your capability.',
  11:'Develop supportive networks and long-term plans. Review progress regularly instead of expecting immediate results.',
  12:'Allow time for reflection and recovery. Check hidden costs, avoid overextension and make space for priorities that matter.'
 },
 ta:{
  1:'தெளிவான இலக்கு உள்ள இடங்களில் முன்முயற்சி எடுங்கள். சிறிய முடிவுகளைத் தொடர்ந்து செயல்படுத்துவதன் மூலம் தன்னம்பிக்கையை வளர்த்துக்கொள்ளுங்கள்.',
  2:'தெளிவான உரையாடல், கவனமான பட்ஜெட் மற்றும் பகிரப்பட்ட பொறுப்புகளுக்கான நடைமுறைத் திட்டம் மூலம் இதைச் செயல்படுத்துங்கள்.',
  3:'தொடர்பாடல், எழுத்து, நடைமுறைத் திறன் கற்றல் மற்றும் பயனுள்ள தொடர்புகளை உருவாக்குவதில் கவனம் செலுத்துங்கள்.',
  4:'உங்கள் இல்லச் சூழல், மனநிலை நிலைத்தன்மை மற்றும் நல்ல முடிவுகளை எடுக்க உதவும் ஆதரவு அமைப்புகளுக்கு முக்கியத்துவம் கொடுங்கள்.',
  5:'கற்றல், படைப்பாற்றல் மற்றும் சிந்தித்து முடிவெடுப்பதற்கு இடமளியுங்கள். அதிக நேரம் அல்லது பணம் செலவிடும் முன் யோசனைகளைச் சோதித்துப் பாருங்கள்.',
  6:'ஒழுங்கான அன்றாட நடைமுறைகள், திட்டமிடல் மற்றும் சிறிய படிகளாகப் பிரச்சினைகளைத் தீர்ப்பது முன்னேற்றத்திற்கு உதவும்.',
  7:'அனைத்தையும் தனியாகச் சுமக்காமல் மற்றவர்களுடன் இணைந்து செயல்படுங்கள். தெளிவான ஒப்பந்தம், கவனமாகக் கேட்பது மற்றும் பரஸ்பர எதிர்பார்ப்புகள் முக்கியம்.',
  8:'சூழ்நிலையின் ஆழமான அல்லது பகிரப்பட்ட அம்சங்களைப் புரிந்துகொள்ள நேரம் எடுத்துக்கொள்ளுங்கள். பொறுப்புகள், அபாயங்கள் மற்றும் வளங்கள் குறித்து வெளிப்படையாக இருங்கள்.',
  9:'மேலும் கற்றல், வழிகாட்டிகள், பயணம் அல்லது மாறுபட்ட கருத்துகளை அறிதல் மூலம் உங்கள் வாய்ப்புகளை விரிவுபடுத்துங்கள்.',
  10:'நோக்கங்களைத் தெளிவான பொறுப்புகளாக மாற்றுங்கள். இலக்கை நிர்ணயித்து, திறனை வளர்த்து, தொடர்ச்சியான உழைப்பின் மூலம் உங்கள் திறமையை வெளிப்படுத்துங்கள்.',
  11:'ஆதரவான தொடர்புகளையும் நீண்டகாலத் திட்டங்களையும் வளர்த்துக்கொள்ளுங்கள். உடனடி முடிவுகளை எதிர்பார்க்காமல் முன்னேற்றத்தைத் தொடர்ந்து மதிப்பிடுங்கள்.',
  12:'சிந்தனைக்கும் ஓய்வுக்கும் நேரம் ஒதுக்குங்கள். மறைந்த செலவுகளைச் சரிபார்த்து, அளவுக்கு மீறிய பொறுப்புகளைத் தவிர்த்து, முக்கியமானவற்றுக்கு முன்னுரிமை கொடுங்கள்.'
 }
};
const TOPIC_ACTION = {
 en:{
  overall:'For your overall direction, choose one or two priorities and align your weekly time with them.',
  personality:'For personal growth, practise expressing your ideas clearly and use your natural interests in a consistent way.',
  marriage:'In relationships, discuss expectations about commitment, family, money and personal space early and respectfully.',
  career:'At work, identify the skill or responsibility that would make the biggest difference and make a practical plan to strengthen it.',
  finance:'With money, track income and spending, protect emergency savings and assess risk before making commitments.',
  education:'For learning, choose a specific subject or qualification and follow a steady study plan with measurable milestones.',
  family:'At home, make responsibilities explicit and create regular time for honest, calm conversations.',
  children:'For creativity and family planning, focus on patient support, learning and open conversations; seek professional guidance for medical questions.',
  wellbeing:'For daily balance, review sleep, workload, movement and stress; seek qualified care for health concerns.',
  travel:'For travel or overseas plans, compare costs, documentation, work or study options and family commitments before deciding.',
  property:'For property matters, check affordability, title, approvals and long-term maintenance before making a commitment.',
  spirituality:'For inner growth, choose a practice you can sustain and make time for reflection, study or service.'
 },
 ta:{
  overall:'உங்கள் வாழ்க்கைப் பாதைக்காக ஒன்று அல்லது இரண்டு முக்கிய இலக்குகளைத் தேர்ந்தெடுத்து, வாரந்தோறும் அவற்றுக்கான நேரத்தை ஒதுக்குங்கள்.',
  personality:'தனிப்பட்ட வளர்ச்சிக்காக உங்கள் கருத்துகளைத் தெளிவாக வெளிப்படுத்தப் பயிற்சி செய்யுங்கள்; உங்களுக்கு இயல்பாக விருப்பமான திறன்களைத் தொடர்ந்து வளர்த்துக்கொள்ளுங்கள்.',
  marriage:'உறவுகளில் திருமண உறுதி, குடும்பம், பணம் மற்றும் தனிப்பட்ட இடம் குறித்த எதிர்பார்ப்புகளை ஆரம்பத்திலேயே மரியாதையுடன் பேசித் தெளிவுபடுத்துங்கள்.',
  career:'பணியில் அதிக மாற்றத்தை ஏற்படுத்தக்கூடிய ஒரு திறன் அல்லது பொறுப்பைக் கண்டறிந்து, அதை மேம்படுத்த நடைமுறைத் திட்டம் அமைக்குங்கள்.',
  finance:'வருமானம் மற்றும் செலவுகளைப் பதிவு செய்யுங்கள்; அவசரச் சேமிப்பை பாதுகாத்து, நிதி முடிவுகளுக்கு முன் அபாயங்களை மதிப்பிடுங்கள்.',
  education:'கல்விக்காக ஒரு குறிப்பிட்ட பாடம் அல்லது தகுதியைத் தேர்ந்தெடுத்து, அளவிடக்கூடிய இலக்குகளுடன் தொடர்ந்து படிக்கும் திட்டத்தைப் பின்பற்றுங்கள்.',
  family:'குடும்பத்தில் ஒவ்வொருவரின் பொறுப்புகளையும் தெளிவுபடுத்தி, அமைதியான நேரத்தில் மனம் திறந்து பேசும் பழக்கத்தை உருவாக்குங்கள்.',
  children:'படைப்பாற்றல் மற்றும் குடும்பத் திட்டமிடலில் பொறுமை, ஆதரவு மற்றும் திறந்த உரையாடலுக்கு முக்கியத்துவம் கொடுங்கள்; மருத்துவக் கேள்விகளுக்கு நிபுணர் ஆலோசனை பெறுங்கள்.',
  wellbeing:'உறக்கம், வேலைச்சுமை, உடற்பயிற்சி மற்றும் மனஅழுத்தத்தை மதிப்பாய்வு செய்யுங்கள்; உடல்நலக் கவலைகளுக்கு தகுதியான மருத்துவ உதவியை நாடுங்கள்.',
  travel:'பயணம் அல்லது வெளிநாட்டுத் திட்டங்களுக்கு முன் செலவு, ஆவணங்கள், வேலை அல்லது கல்வி வாய்ப்புகள் மற்றும் குடும்பப் பொறுப்புகளை ஒப்பிட்டுப் பாருங்கள்.',
  property:'சொத்து முடிவுக்கு முன் செலவுத்திறன், உரிமைப் பத்திரம், அனுமதிகள் மற்றும் நீண்டகால பராமரிப்புச் செலவுகளைச் சரிபாருங்கள்.',
  spirituality:'தொடர்ந்து கடைப்பிடிக்கக்கூடிய ஆன்மிகப் பயிற்சியைத் தேர்ந்தெடுத்து, சிந்தனை, படிப்பு அல்லது சேவைக்காக நேரம் ஒதுக்குங்கள்.'
 }
};
function practicalGuidance(topic,data,asc,lang,planetName){
 const primary=topic.houses[0], sign=(asc+primary-1)%12, lord=SIGN_LORDS[sign];
 const p=data.planets.find(x=>x.name===lord);
 if(!p)return lang==='ta'?TOPIC_ACTION.ta[topic.id]:TOPIC_ACTION.en[topic.id];
 const signOfPlanet=Math.floor(((p.longitude%360)+360)%360/30);
 const placedHouse=(signOfPlanet-asc+12)%12+1;
 const name=planetName(lord);
 if(lang==='ta'){
  return `இந்தத் துறையின் முக்கியமான ${primary}ஆம் பாவ அதிபதி ${name}, உங்கள் ${placedHouse}ஆம் பாவத்தில் உள்ளது. அதனால் இந்த விஷயத்தில் ${HOUSE_MEANING.ta[placedHouse]} ஆகியவை முக்கியமாக இணைகின்றன. ${PRACTICAL_ACTIONS.ta[placedHouse]} ${TOPIC_ACTION.ta[topic.id]}`;
 }
 return `The ruler of the key ${ordinal(primary)} house for this area, ${name}, is placed in your ${ordinal(placedHouse)} house. This connects it with ${HOUSE_MEANING.en[placedHouse]}. ${PRACTICAL_ACTIONS.en[placedHouse]} ${TOPIC_ACTION.en[topic.id]}`;
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
    const details = topic.houses.slice(0,3).map(h => placementInsight(h, data, asc, lang, planetName)).filter(Boolean);
    const evidence = topic.houses.slice(0,3).map(h => chartEvidence(h, data, asc, lang, names, planetName));
    const advice = practicalGuidance(topic, data, asc, lang, planetName);
    const title = lang === 'ta' ? topic.ta : topic.en;
    const focus = TOPIC_FOCUS[lang][topic.id];
    const insightLabel = lang === 'ta' ? 'உங்கள் ஜாதகத்தின் தனிப்பட்ட விளக்கம்' : 'What this means in your chart';
    const basisLabel = lang === 'ta' ? 'இந்த விளக்கத்திற்கான ஜாதக நிலைகள்' : 'Chart details behind this reading';
    return `<article class="life-card detailed-card">
      <div class="prediction-number">${String(index+1).padStart(2,'0')}</div>
      <h4>${title}</h4>
      <p class="prediction-summary">${focus}</p>
      <div class="prediction-block personalised-reading"><strong>${insightLabel}</strong><ul>${details.map(d => `<li>${d}</li>`).join('')}</ul></div>
      <details class="chart-evidence"><summary>${basisLabel}</summary><ul>${evidence.map(d => `<li>${d}</li>`).join('')}</ul></details>
      <div class="prediction-block"><strong>${t.reading}</strong><p>${advice}</p></div>
    </article>`;
  }).join('');
  return timing + personalHighlights(data, asc, lang, planetName) + cards;
}

function fmt(date, lang) {
  return new Intl.DateTimeFormat(lang === 'ta' ? 'ta-IN' : 'en-GB', {day:'2-digit',month:'short',year:'numeric'}).format(date);
}
