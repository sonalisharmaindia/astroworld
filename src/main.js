import './style.css';
import * as Astronomy from 'astronomy-engine';
import { renderDetailedPredictions } from './detailed-predictions.js';

const $ = (id) => document.getElementById(id);
const names = {
  en: {
    eyebrow:'VEDIC ASTROLOGY · LAHIRI AYANAMSA', heroTitle:'Your cosmic map,<br><em>calculated with care.</em>',
    heroText:'Create a birth chart with Rasi, Navamsa, Nakshatra and Vimshottari Dasha — with a free printable Kundli report.',
    birthDetails:'BIRTH DETAILS',createChart:'Create your Vedic birth chart',formIntro:'Enter the birth details as accurately as possible. Birth time and location affect the Ascendant and house placements.',
    fullName:'Full name',birthDate:'Date of birth',birthTime:'Local time of birth',birthPlace:'Place of birth',findPlace:'Find',placeHelp:'Search to fill coordinates and time zone.',latitude:'Latitude',longitude:'Longitude',timezone:'Birthplace time zone (IANA)',timezoneHelp:'Use the time zone applicable on the date of birth. The place search may fill this automatically.',generate:'Calculate my Kundli',engineReady:'Swiss Ephemeris engine loads when you calculate.',privacy:'Privacy: calculations run in your browser. Place search contacts Open-Meteo for geocoding; birth date and birth time are not sent to it.',
    downloadPdf:'Download PDF Kundli',birthChart:'BIRTH CHART',rasiTitle:'Rasi Chart · D1',rasiText:'Sidereal planetary placements by sign. South Indian chart layout.',divisionalChart:'DIVISIONAL CHART',navamsaTitle:'Navamsa Chart · D9',navamsaText:'Ninth harmonic divisional chart, traditionally used as one factor in relationship and dharma analysis.',nakshatraSection:'LUNAR MANSION',nakshatraTitle:'Nakshatra & Pada',dashaSection:'PLANETARY PERIODS',dashaTitle:'Vimshottari Dasha',dashaText:"Mahadasha and Antardasha periods calculated from the Moon's Nakshatra.",lifeReports:'LIFE THEMES',reportsTitle:'What your birth chart says about you',reportsText:'Explore each area of life through your own house signs, planetary rulers and placements. Read these as traditional themes for reflection, not fixed outcomes.',planetaryPositions:'PLANETARY POSITIONS',planetTable:'Graha table',disclaimer:'Astrology is a traditional belief system and is not scientifically established as a way to predict events. This report is for cultural, reflective and entertainment purposes only; it is not medical, legal or financial advice. Verify birth-time accuracy and compare calculations with a qualified practitioner before relying on them.',footer:'Free Vedic astrology tools in English and Tamil.',
    signs:['Mesha','Vrishabha','Mithuna','Karka','Simha','Kanya','Tula','Vrischika','Dhanu','Makara','Kumbha','Meena'],planets:['Sun','Moon','Mars','Mercury','Jupiter','Venus','Saturn','Rahu','Ketu'],nak:['Ashwini','Bharani','Krittika','Rohini','Mrigashira','Ardra','Punarvasu','Pushya','Ashlesha','Magha','Purva Phalguni','Uttara Phalguni','Hasta','Chitra','Swati','Vishakha','Anuradha','Jyeshtha','Mula','Purva Ashadha','Uttara Ashadha','Shravana','Dhanishta','Shatabhisha','Purva Bhadrapada','Uttara Bhadrapada','Revati'],
    dashaLords:['Ketu','Venus','Sun','Moon','Mars','Rahu','Jupiter','Saturn','Mercury'],placeFound:'Place found. Check the coordinates and time zone before calculating.',placeError:'Could not find that place. Enter latitude, longitude and time zone manually.',loading:'Loading Swiss Ephemeris and calculating…',error:'Calculation failed. Check your inputs and try again.',lagna:'Lagna',moonSign:'Moon sign',birthStar:'Birth star',currentDasha:'Current Mahadasha',planet:'Planet',sign:'Rasi',degree:'Longitude',house:'House',retrograde:'Retrograde',yes:'Yes',no:'No',from:'From',to:'To',period:'Period',maha:'Mahadasha',antar:'Antardasha',pada:'Pada',nakLord:'Nakshatra lord',balance:'Balance at birth',marriage:'Marriage & partnership',career:'Career & vocation',finance:'Wealth & resources',overall:'Life direction',reportMarriage:'The 7th house and its lord are traditionally examined for partnership themes. Your chart places {planet} in house {house}; this is one symbolic factor among many. Consider communication, shared values and practical compatibility.',reportCareer:'The 10th house, its lord and Saturn are traditionally considered for vocation. Your chart places {planet} in house {house}; interpret this alongside the full chart, education and lived circumstances.',reportFinance:'The 2nd and 11th houses are traditionally examined for savings, income and networks. Your chart places {planet} in house {house}; this is not a forecast of earnings or investment performance.',reportOverall:'The Ascendant, Moon and running Dasha are traditionally read together for broad life themes. Treat this as a reflective framework, not a fixed account of your future.'
  },
  ta: {
    eyebrow:'வேத ஜோதிடம் · லஹிரி அயனாம்சம்',heroTitle:'உங்கள் ஜோதிட வரைபடம்,<br><em>துல்லியமாகக் கணக்கிடுங்கள்.</em>',heroText:'ராசி, நவாம்சம், நட்சத்திரம், விம்சோத்தரி தசை ஆகியவற்றுடன் இலவசமாகப் பதிவிறக்கக்கூடிய ஜாதக அறிக்கையை உருவாக்குங்கள்.',
    birthDetails:'பிறப்பு விவரங்கள்',createChart:'உங்கள் வேத ஜாதகத்தை உருவாக்குங்கள்',formIntro:'பிறப்பு விவரங்களை மிகத் துல்லியமாக உள்ளிடுங்கள். பிறந்த நேரமும் இடமும் லக்னம் மற்றும் பாவ நிலைகளைப் பாதிக்கும்.',
    fullName:'முழுப் பெயர்',birthDate:'பிறந்த தேதி',birthTime:'பிறந்த உள்ளூர் நேரம்',birthPlace:'பிறந்த இடம்',findPlace:'தேடு',placeHelp:'அட்சரேகை, தீர்க்கரேகை, நேர மண்டலத்தை நிரப்ப இடத்தைத் தேடுங்கள்.',latitude:'அட்சரேகை',longitude:'தீர்க்கரேகை',timezone:'பிறந்த இட நேர மண்டலம் (IANA)',timezoneHelp:'பிறந்த தேதிக்குப் பொருந்தும் நேர மண்டலத்தைப் பயன்படுத்தவும்.',generate:'எனது ஜாதகத்தைக் கணக்கிடு',engineReady:'கணக்கிடும்போது Swiss Ephemeris இயங்கும்.',privacy:'தனியுரிமை: கணக்கீடுகள் உங்கள் உலாவியில் நடைபெறும். இடத் தேடலுக்கு Open-Meteo பயன்படுத்தப்படும்; பிறந்த தேதி மற்றும் நேரம் அதற்கு அனுப்பப்படாது.',
    downloadPdf:'ஜாதக PDF பதிவிறக்கம்',birthChart:'பிறப்பு ஜாதகம்',rasiTitle:'ராசி கட்டம் · D1',rasiText:'ராசி அடிப்படையிலான கிரக நிலைகள். தென்னிந்திய கட்ட வடிவம்.',divisionalChart:'பிரிவு ஜாதகம்',navamsaTitle:'நவாம்ச கட்டம் · D9',navamsaText:'திருமணம் மற்றும் தர்ம ஆய்வில் பாரம்பரியமாகப் பயன்படுத்தப்படும் ஒன்பதாம் பிரிவு கட்டம்.',nakshatraSection:'சந்திர நட்சத்திரம்',nakshatraTitle:'நட்சத்திரம் மற்றும் பாதம்',dashaSection:'கிரக தசைகள்',dashaTitle:'விம்சோத்தரி தசை',dashaText:'சந்திரனின் பிறப்பு நட்சத்திரத்தை அடிப்படையாகக் கொண்ட மகாதசை மற்றும் அந்தர்தசை.',lifeReports:'வாழ்க்கை அம்சங்கள்',reportsTitle:'உங்கள் ஜாதகம் உங்களைப் பற்றி கூறுவது',reportsText:'உங்கள் பாவ ராசிகள், பாவ அதிபதிகள் மற்றும் கிரக நிலைகளின் அடிப்படையில் வாழ்க்கையின் பல அம்சங்களைப் புரிந்துகொள்ளுங்கள். இவை பாரம்பரிய சிந்தனை வழிகாட்டுதல்கள் மட்டுமே; உறுதியான முடிவுகள் அல்ல.',planetaryPositions:'கிரக நிலைகள்',planetTable:'கிரக அட்டவணை',disclaimer:'ஜோதிடம் ஒரு பாரம்பரிய நம்பிக்கை முறை; எதிர்கால நிகழ்வுகளை கணிக்க அறிவியல் ரீதியாக நிரூபிக்கப்படவில்லை. இந்த அறிக்கை கலாச்சாரம், சிந்தனை மற்றும் பொழுதுபோக்கிற்காக மட்டுமே; மருத்துவம், சட்டம் அல்லது நிதி ஆலோசனை அல்ல. முடிவுகளை நம்புவதற்கு முன் பிறந்த நேரத்தைச் சரிபார்த்து தகுதியான ஜோதிடருடன் ஒப்பிடுங்கள்.',footer:'ஆங்கிலம் மற்றும் தமிழில் இலவச வேத ஜோதிடக் கருவிகள்.',
    signs:['மேஷம்','ரிஷபம்','மிதுனம்','கடகம்','சிம்மம்','கன்னி','துலாம்','விருச்சிகம்','தனுசு','மகரம்','கும்பம்','மீனம்'],planets:['சூரியன்','சந்திரன்','செவ்வாய்','புதன்','குரு','சுக்கிரன்','சனி','ராகு','கேது'],nak:['அஸ்வினி','பரணி','கார்த்திகை','ரோகிணி','மிருகசீரிடம்','திருவாதிரை','புனர்பூசம்','பூசம்','ஆயில்யம்','மகம்','பூரம்','உத்திரம்','ஹஸ்தம்','சித்திரை','சுவாதி','விசாகம்','அனுஷம்','கேட்டை','மூலம்','பூராடம்','உத்திராடம்','திருவோணம்','அவிட்டம்','சதயம்','பூரட்டாதி','உத்திரட்டாதி','ரேவதி'],
    dashaLords:['கேது','சுக்கிரன்','சூரியன்','சந்திரன்','செவ்வாய்','ராகு','குரு','சனி','புதன்'],placeFound:'இடம் கண்டறியப்பட்டது. கணக்கிடுவதற்கு முன் ஆயத்தொலைவுகள் மற்றும் நேர மண்டலத்தைச் சரிபார்க்கவும்.',placeError:'இடத்தைக் கண்டறிய முடியவில்லை. அட்சரேகை, தீர்க்கரேகை, நேர மண்டலத்தை கைமுறையாக உள்ளிடுங்கள்.',loading:'Swiss Ephemeris ஏற்றப்பட்டு கணக்கிடப்படுகிறது…',error:'கணக்கீடு தோல்வியடைந்தது. விவரங்களைச் சரிபார்த்து மீண்டும் முயற்சிக்கவும்.',lagna:'லக்னம்',moonSign:'சந்திர ராசி',birthStar:'ஜென்ம நட்சத்திரம்',currentDasha:'நடப்பு மகாதசை',planet:'கிரகம்',sign:'ராசி',degree:'பாகை',house:'பாவம்',retrograde:'வக்கிரம்',yes:'ஆம்',no:'இல்லை',from:'தொடக்கம்',to:'முடிவு',period:'காலம்',maha:'மகாதசை',antar:'அந்தர்தசை',pada:'பாதம்',nakLord:'நட்சத்திர அதிபதி',balance:'பிறப்பில் மீதமுள்ள தசை',marriage:'திருமணம் மற்றும் கூட்டாண்மை',career:'தொழில் மற்றும் பணி',finance:'செல்வம் மற்றும் வருமானம்',overall:'வாழ்க்கைப் பாதை',reportMarriage:'திருமண அம்சங்களுக்கு 7ஆம் பாவமும் அதன் அதிபதியும் பாரம்பரியமாகப் பார்க்கப்படுகின்றன. உங்கள் ஜாதகத்தில் {planet} {house}ஆம் பாவத்தில் உள்ளது. இது பல குறியீடுகளில் ஒன்று மட்டுமே. உரையாடல், மதிப்புகள் மற்றும் நடைமுறைப் பொருத்தத்தை கருத்தில் கொள்ளுங்கள்.',reportCareer:'தொழிலுக்கு 10ஆம் பாவம், அதன் அதிபதி மற்றும் சனி பாரம்பரியமாகப் பார்க்கப்படுகின்றன. {planet} {house}ஆம் பாவத்தில் உள்ளது. கல்வி மற்றும் வாழ்க்கைச் சூழலுடன் சேர்த்துப் பாருங்கள்.',reportFinance:'சேமிப்பு மற்றும் வருமானத்திற்கு 2ஆம் மற்றும் 11ஆம் பாவங்கள் பாரம்பரியமாகப் பார்க்கப்படுகின்றன. {planet} {house}ஆம் பாவத்தில் உள்ளது. இது வருமானம் அல்லது முதலீட்டு பலனுக்கான கணிப்பு அல்ல.',reportOverall:'லக்னம், சந்திரன் மற்றும் நடப்பு தசை ஆகியவை வாழ்க்கை அம்சங்களுக்காக ஒன்றாகப் படிக்கப்படுகின்றன. இதை சிந்தனைக்கான கட்டமைப்பாகப் பயன்படுத்துங்கள்; நிர்ணயிக்கப்பட்ட எதிர்காலமாக அல்ல.'
  }
};
let lang='en', lastChart=null, enginePromise=null;
const PLANET_IDS=[['Sun','sun'],['Moon','moon'],['Mars','mars'],['Mercury','mercury'],['Jupiter','jupiter'],['Venus','venus'],['Saturn','saturn'],['Rahu','rahu'],['Ketu','ketu']];
const DASHA_YEARS={Ketu:7,Venus:20,Sun:6,Moon:10,Mars:7,Rahu:18,Jupiter:16,Saturn:19,Mercury:17};
const DASHA_ORDER=['Ketu','Venus','Sun','Moon','Mars','Rahu','Jupiter','Saturn','Mercury'];
const NAK_LORDS=Array.from({length:27},(_,i)=>DASHA_ORDER[i%9]);
const signName=(i)=>names[lang].signs[i];
const planetName=(p)=>{const i=PLANET_IDS.findIndex(x=>x[0]===p);return i<0?p:names[lang].planets[i]};
const fmtDate=(d)=>new Intl.DateTimeFormat(lang==='ta'?'ta-IN':'en-GB',{day:'2-digit',month:'short',year:'numeric'}).format(d);
const norm=(x)=>((x%360)+360)%360;
function zonedDateToUtc(dateStr,timeStr,tz){
  const [y,m,d]=dateStr.split('-').map(Number),[hh,mm]=timeStr.split(':').map(Number);
  let guess=Date.UTC(y,m-1,d,hh,mm);
  for(let i=0;i<4;i++){
    const parts=new Intl.DateTimeFormat('en-CA',{timeZone:tz,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date(guess));
    const v=Object.fromEntries(parts.map(p=>[p.type,p.value]));
    const represented=Date.UTC(+v.year,+v.month-1,+v.day,+v.hour,+v.minute);
    guess += Date.UTC(y,m-1,d,hh,mm)-represented;
  }
  return new Date(guess);
}
function lahiriAyanamsa(jd) {
  const T = (jd - 2451545.0) / 36525;
  return 23.85675 + 1.396042 * T + 0.000308 * T * T;
}

function tropicalEclipticLongitude(body, date) {
  const v = Astronomy.GeoVector(body, date, true);
  const e = Astronomy.Ecliptic(v);
  return norm(e.elon);
}

function siderealLongitude(body, date, jd) {
  return norm(
    tropicalEclipticLongitude(body, date) -
    lahiriAyanamsa(jd)
  );
}

function getPlanetPositions(date, jd) {
  const bodies = [
    ['Sun', Astronomy.Body.Sun],
    ['Moon', Astronomy.Body.Moon],
    ['Mars', Astronomy.Body.Mars],
    ['Mercury', Astronomy.Body.Mercury],
    ['Jupiter', Astronomy.Body.Jupiter],
    ['Venus', Astronomy.Body.Venus],
    ['Saturn', Astronomy.Body.Saturn]
  ];

  const planets = bodies.map(([name, body]) => ({
    name,
    longitude: siderealLongitude(body, date, jd)
  }));

  const T = (jd - 2451545.0) / 36525;
  const rahu = norm(
    125.04452 - 1934.136261 * T +
    0.0020708 * T * T + T * T * T / 450000
  );

  planets.push({
    name: 'Rahu',
    longitude: norm(rahu - lahiriAyanamsa(jd))
  });

  planets.push({
    name: 'Ketu',
    longitude: norm(rahu + 180 - lahiriAyanamsa(jd))
  });

  return planets;
}

function ascendantLongitude(date, jd, lat, lon) {
  const eps =
    (23.43929111 - 0.013004167 * ((jd - 2451545.0) / 36525))
    * Math.PI / 180;

  const theta =
    Astronomy.SiderealTime(date) * 15 * Math.PI / 180 +
    lon * Math.PI / 180;

  const phi = lat * Math.PI / 180;
  const y = Math.cos(theta);
  const x = -(Math.sin(theta) * Math.cos(eps) +
    Math.tan(phi) * Math.sin(eps));

  const tropical =
    (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;

  return norm(tropical - lahiriAyanamsa(jd));
}
  function findPlanet(list,id){
  const aliases={sun:['sun'],moon:['moon'],mars:['mars'],mercury:['mercury'],jupiter:['jupiter'],venus:['venus'],saturn:['saturn'],rahu:['rahu','mean_node','north_node'],ketu:['ketu','south_node']};
  return list.find(p=>aliases[id].includes(String(p.id||p.name||'').toLowerCase()));
}
function dashaSchedule(moonLon,birthUtc){
  const span=360/27, n=Math.floor(norm(moonLon)/span), fraction=(norm(moonLon)%span)/span, firstLord=NAK_LORDS[n], startIndex=DASHA_ORDER.indexOf(firstLord);
  const balance=DASHA_YEARS[firstLord]*(1-fraction), elapsed=DASHA_YEARS[firstLord]*fraction;
  const start=new Date(birthUtc.getTime()-elapsed*365.2425*86400000);
  let cursor=new Date(birthUtc), periods=[];
  for(let k=0;k<9;k++){
    const lord=DASHA_ORDER[(startIndex+k)%9], years=k===0?balance:DASHA_YEARS[lord], end=new Date(cursor.getTime()+years*365.2425*86400000);
    const subs=[];let subCursor=new Date(cursor), subStart=DASHA_ORDER.indexOf(lord);
    for(let j=0;j<9;j++){
      const subLord=DASHA_ORDER[(subStart+j)%9], subYears=years*DASHA_YEARS[subLord]/120;
      const subEnd=new Date(subCursor.getTime()+subYears*365.2425*86400000);
      subs.push({lord:subLord,start:new Date(subCursor),end:subEnd});subCursor=subEnd;
    }
    periods.push({lord,start:new Date(cursor),end,subs,years});cursor=end;
  }
  const now=new Date(); const current=periods.find(p=>now>=p.start&&now<p.end)||periods[0];
  return {nakIndex:n,firstLord,balance,periods,current};
}
function divisionalSign(longitude,division){
  const sign=Math.floor(norm(longitude)/30),within=norm(longitude)%30,part=Math.min(division-1,Math.floor(within/(30/division)));
  const modality=sign%3; // Aries-like movable signs start from themselves; fixed from 9th; dual from 5th.
  const start=modality===0?sign:modality===1?(sign+8)%12:(sign+4)%12;
  return (start+part)%12;
}
function makeChart(placements,ascSign,division){
  const buckets=Array.from({length:12},()=>[]);
  for(const p of placements){const s=division===1?Math.floor(norm(p.longitude)/30):divisionalSign(p.longitude,9);buckets[s].push(planetName(p.name));}
  const asc=division===1?ascSign:divisionalSign(placements.find(p=>p.name==='Ascendant').longitude,9);
  const matrix=[[11,0,1,2],[10,null,null,3],[9,null,null,4],[8,7,6,5]];
  let out='';
  matrix.forEach((row,r)=>row.forEach((sign,c)=>{
    if(r===1&&c===1){out+=`<div class="chart-cell empty" style="grid-column:span 2;grid-row:span 2;justify-content:center"><strong>✧ AstroWorld ✧</strong><small>${division===1?'Rasi · D1':'Navamsa · D9'}</small></div>`;return;}
    if(sign===null)return;
    out+=`<div class="chart-cell">${chartCell(sign,buckets,asc)}</div>`;
  }));
  return out;
}
function chartCell(sign,buckets,asc){return `<span class="sign">${signName(sign)} ${sign+1===asc+1?'· '+names[lang].lagna:''}</span><span class="planets">${buckets[sign].join(' · ')||'—'}</span>`;}
function houseOf(p,asc){return (Math.floor(norm(p.longitude)/30)-asc+12)%12+1;}
function renderDasha(data){
  const cur=data.current, rows=data.periods.map(p=>`<tr><td>${names[lang].dashaLords[DASHA_ORDER.indexOf(p.lord)]}</td><td>${fmtDate(p.start)}</td><td>${fmtDate(p.end)}</td><td>${(p.years||DASHA_YEARS[p.lord]).toFixed(2)} ${lang==='ta'?'ஆண்டுகள்':'years'}</td></tr>`).join('');
  const subs=cur.subs.map(p=>`<tr><td>${names[lang].dashaLords[DASHA_ORDER.indexOf(cur.lord)]}</td><td>${names[lang].dashaLords[DASHA_ORDER.indexOf(p.lord)]}</td><td>${fmtDate(p.start)}</td><td>${fmtDate(p.end)}</td></tr>`).join('');
  $('dashaPanel').innerHTML=`<div class="info-panel"><strong>${names[lang].currentDasha}: ${names[lang].dashaLords[DASHA_ORDER.indexOf(cur.lord)]}</strong><p>${names[lang].from}: ${fmtDate(cur.start)} · ${names[lang].to}: ${fmtDate(cur.end)}</p></div><h4>${names[lang].maha}</h4><table><thead><tr><th>${names[lang].planet}</th><th>${names[lang].from}</th><th>${names[lang].to}</th><th>${names[lang].period}</th></tr></thead><tbody>${rows}</tbody></table><h4>${names[lang].antar} · ${names[lang].dashaLords[DASHA_ORDER.indexOf(cur.lord)]}</h4><table><thead><tr><th>${names[lang].maha}</th><th>${names[lang].antar}</th><th>${names[lang].from}</th><th>${names[lang].to}</th></tr></thead><tbody>${subs}</tbody></table>`;
}
function reportText(key,planet,house){return names[lang][key].replace('{planet}',planetName(planet)).replace('{house}',house);}
function renderChart(data){
  const t=names[lang],asc=Math.floor(norm(data.lagna.longitude)/30),moon=data.planets.find(p=>p.name==='Moon'),moonSign=Math.floor(norm(moon.longitude)/30),nakSpan=360/27,nakIndex=Math.floor(norm(moon.longitude)/nakSpan),pada=Math.floor((norm(moon.longitude)%nakSpan)/(nakSpan/4))+1;
  $('personTitle').textContent=data.person;
  $('birthMeta').textContent=`${data.date} · ${data.time} · ${data.place} · ${data.timezone}`;
  $('summary').innerHTML=[[t.lagna,signName(asc)],[t.moonSign,signName(moonSign)],[t.birthStar,t.nak[nakIndex]],[t.currentDasha,t.dashaLords[DASHA_ORDER.indexOf(data.dasha.current.lord)]]].map(([a,b])=>`<div class="summary-cell"><small>${a}</small><strong>${b}</strong></div>`).join('');
  const all=[...data.planets,{name:'Ascendant',longitude:data.lagna.longitude}];
  $('rasiChart').innerHTML=makeChart(all,asc,1);
  $('navamsaChart').innerHTML=makeChart(all,asc,9);
  $('nakshatraPanel').innerHTML=`<p><strong>${t.birthStar}:</strong> ${t.nak[nakIndex]} &nbsp; <strong>${t.pada}:</strong> ${pada}</p><p><strong>${t.nakLord}:</strong> ${t.dashaLords[DASHA_ORDER.indexOf(NAK_LORDS[nakIndex])]}</p><p><strong>${t.balance}:</strong> ${data.dasha.balance.toFixed(2)} ${lang==='ta'?'ஆண்டுகள்':'years'} (${t.dashaLords[DASHA_ORDER.indexOf(data.dasha.firstLord)]})</p>`;
  renderDasha(data.dasha);
  $('lifeReports').innerHTML=renderDetailedPredictions(data,asc,lang,names,planetName);
  $('planetTable').innerHTML=`<table><thead><tr><th>${t.planet}</th><th>${t.sign}</th><th>${t.degree}</th><th>${t.house}</th></tr></thead><tbody>${data.planets.map(p=>`<tr><td>${planetName(p.name)}</td><td>${signName(Math.floor(norm(p.longitude)/30))}</td><td>${(norm(p.longitude)%30).toFixed(2)}°</td><td>${houseOf(p,asc)}</td></tr>`).join('')}</tbody></table>`;
  $('report').hidden=false;$('report').scrollIntoView({behavior:'smooth'});
}
async function calculate(date,time,timezone,lat,lon){
  const birthUtc = zonedDateToUtc(date,time,timezone);

  const jd = birthUtc.getTime() / 86400000 + 2440587.5;

  const planetList = getPlanetPositions(birthUtc,jd);

  const lagnaLongitude = ascendantLongitude(
    birthUtc,
    jd,
    lat,
    lon
  );

  const moon = planetList.find(p => p.name === 'Moon');

  if (!moon) {
    throw new Error('Moon position could not be calculated');
  }

  const transitDate = new Date();
  const transitJd = transitDate.getTime() / 86400000 + 2440587.5;
  const transitPlanets = getPlanetPositions(transitDate, transitJd);
  const dasha = dashaSchedule(moon.longitude,birthUtc);
  const forecast = [];
  const horizon = new Date(transitDate);
  horizon.setFullYear(horizon.getFullYear()+5);
  for(let year=transitDate.getFullYear();year<=horizon.getFullYear();year++){
    const samples=[];
    for(let month=0;month<12;month++){
      const sampleDate=new Date(year,month,15,12,0,0);
      if(sampleDate<transitDate||sampleDate>horizon)continue;
      const sampleJd=sampleDate.getTime()/86400000+2440587.5;
      const positions=getPlanetPositions(sampleDate,sampleJd);
      samples.push({date:sampleDate,planets:positions.filter(p=>p.name==='Jupiter'||p.name==='Saturn').map(p=>({name:p.name,longitude:p.longitude}))});
    }
    const yearStart=new Date(year,0,1),yearEnd=new Date(year+1,0,1);
    const periods=dasha.periods.filter(p=>p.start<yearEnd&&p.end>yearStart).map(p=>({
      lord:p.lord,start:p.start,end:p.end,
      subs:p.subs.filter(s=>s.start<yearEnd&&s.end>yearStart).map(s=>({lord:s.lord,start:s.start,end:s.end}))
    }));
    forecast.push({year,samples,periods});
  }

  return {
    person: $('fullName').value.trim(),
    date,
    time,
    place: $('birthPlace').value.trim(),
    timezone,
    lagna: {
      longitude: lagnaLongitude
    },
    planets: planetList,
    transits: transitPlanets,
    transitDate,
    dasha,
    forecast
  };
}
$('year').textContent=new Date().getFullYear();
$('language').addEventListener('change',e=>{lang=e.target.value;document.documentElement.lang=lang;document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=names[lang][el.dataset.i18n]||el.textContent);if(lastChart)renderChart(lastChart);});
$('findPlace').addEventListener('click',async()=>{
  const q=$('birthPlace').value.trim();if(!q)return;
  $('placeStatus').textContent='Searching…';
  try{
    const r=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q)}&count=1&language=en&format=json`);
    const j=await r.json();const p=j.results?.[0];if(!p)throw new Error('not found');
    $('birthPlace').value=[p.name,p.admin1,p.country].filter(Boolean).join(', ');$('latitude').value=p.latitude;$('longitude').value=p.longitude;$('timezone').value=p.timezone||'';
    $('placeStatus').textContent=names[lang].placeFound;
  }catch(e){$('placeStatus').textContent=names[lang].placeError;}
});
$('birthForm').addEventListener('submit',async e=>{
  e.preventDefault();const btn=$('generate');btn.disabled=true;$('engineStatus').textContent=names[lang].loading;
  try{
    const lat=Number($('latitude').value),lon=Number($('longitude').value),tz=$('timezone').value.trim();
    if(!Number.isFinite(lat)||!Number.isFinite(lon)||Math.abs(lat)>90||Math.abs(lon)>180)throw new Error('Invalid coordinates');
    // Validate that the IANA timezone exists before converting local birth time.
    new Intl.DateTimeFormat('en',{timeZone:tz});
    lastChart=await calculate($('birthDate').value,$('birthTime').value,tz,lat,lon);
    renderChart(lastChart);$('engineStatus').textContent='Calculation complete · Lahiri sidereal';
  }catch(err){console.error(err);$('engineStatus').textContent=names[lang].error+' '+(err.message||'');}
  finally{btn.disabled=false;}
});

function buildPdfBook(){
  if(!lastChart) return;
  const t=names[lang], d=lastChart, asc=Math.floor(norm(d.lagna.longitude)/30);
  const moon=d.planets.find(p=>p.name==='Moon');
  const nakSpan=360/27,nakIndex=Math.floor(norm(moon.longitude)/nakSpan);
  const pada=Math.floor((norm(moon.longitude)%nakSpan)/(nakSpan/4))+1;
  const tamil=lang==='ta';
  const copy=tamil?{
    label:'தனிப்பட்ட வேத ஜாதகம்',sub:'பிறப்பு ஜாதகம் · விரிவான விளக்க அறிக்கை',contents:'உள்ளடக்கம்',timing:'நடப்பு தசை மற்றும் கிரகப் பெயர்ச்சி',highlights:'உங்கள் ஜாதகத்தின் பலங்கள் மற்றும் வளர்ச்சி வாய்ப்புகள்',profile:'பிறப்பு விவரங்கள்',guide:'இந்த அறிக்கையைப் புரிந்துகொள்வது',rasi:'ராசி கட்டம் · D1',nav:'நவாம்ச கட்டம் · D9',nak:'ஜென்ம நட்சத்திரம் மற்றும் பாதம்',dasha:'விம்சோத்தரி தசை',planet:'கிரக நிலைகள்',reading:'விளக்க வழிகாட்டி',notice:'முக்கியக் குறிப்பு',chapter:'அத்தியாயம்',house:'பாவம்',sign:'ராசி',degree:'பாகை',birth:'பிறந்த விவரம்',place:'பிறந்த இடம்',time:'பிறந்த நேரம்',tz:'நேர மண்டலம்',coordinates:'ஆயத்தொலைவுகள்',lagna:'லக்னம்',moon:'சந்திர ராசி',star:'ஜென்ம நட்சத்திரம்',pada:'பாதம்',lord:'அதிபதி',balance:'பிறப்பில் மீதமுள்ள தசை',explain:'இந்தப் பகுதி ஜாதக அமைப்பை எவ்வாறு படிப்பது என்பதை விளக்குகிறது. ராசி கட்டம் கிரகங்கள் எந்த ராசியில் உள்ளன என்பதைக் காட்டுகிறது; லக்னத்திலிருந்து பாவங்களைப் பொருள் கொள்ள வேண்டும்.',navExplain:'நவாம்சம் என்பது ஒன்பதாம் பிரிவு வரைபடம். இது ராசி கட்டத்திற்குப் பதிலாக அல்ல; பாரம்பரிய ஜோதிடத்தில் கூடுதல் பார்வையாகப் பயன்படுத்தப்படுகிறது.',dashaExplain:'விம்சோத்தரி தசை என்பது சந்திரனின் பிறப்பு நட்சத்திரத்தை அடிப்படையாகக் கொண்ட பாரம்பரிய காலச் சுழற்சி. தேதிகள் கணித அட்டவணை; அவை குறிப்பிட்ட நிகழ்வுகளை உறுதி செய்யாது.',method:'கணக்கீடு மற்றும் வரம்புகள்',methodText:'இந்த அறிக்கை இணைய உலாவியில் கிடைக்கும் AstroWorld கணக்கீட்டு முறையைப் பயன்படுத்துகிறது. பிறந்த நேரம், இடம், நேர மண்டலம் மற்றும் ஆயத்தொலைவுகள் முடிவுகளைப் பாதிக்கின்றன. மென்பொருள் கணக்கீடுகள் தொழில்முறை எபிமெரிஸ் அல்லது தகுதியான ஜோதிடரின் சரிபார்ப்புக்கு மாற்றாகாது.',glossary:'சொற்களஞ்சியம்',glossText:'லக்னம்: பிறந்த நேரத்தில் கிழக்கில் உதித்த ராசி. ராசி: 12 அடிப்படை ராசிகளில் ஒன்று. பாவம்: வாழ்க்கைத் தலைப்புகளுக்கான 12 வீடுகள். நவாம்சம்: D9 பிரிவு கட்டம். நட்சத்திரம்: 27 சந்திர மண்டலங்களில் ஒன்று. மகாதசை: முக்கிய கிரக காலம். அந்தர்தசை: மகாதசைக்குள் உள்ள துணைக் காலம்.',disclaimer:'ஜோதிடம் ஒரு பாரம்பரிய நம்பிக்கை மற்றும் கலாச்சார விளக்க முறை. எதிர்கால நிகழ்வுகளை கணிக்க அறிவியல் ரீதியாக நிரூபிக்கப்படவில்லை. இந்த அறிக்கை சிந்தனை மற்றும் தகவல் நோக்கத்திற்காக மட்டுமே; மருத்துவ, சட்ட, நிதி அல்லது முக்கிய வாழ்க்கை முடிவுகளுக்கான ஆலோசனை அல்ல.',generated:'உருவாக்கப்பட்ட தேதி',page:'பக்கம்'
  }:{
    label:'PERSONALISED VEDIC KUNDLI',sub:'BIRTH CHART · EXTENDED INTERPRETIVE REPORT',contents:'Contents',timing:'Current Dasha & transits',highlights:'Your strengths & growth opportunities',profile:'Birth profile',guide:'How to read this report',rasi:'Rasi Chart · D1',nav:'Navamsa Chart · D9',nak:'Birth Nakshatra & Pada',dasha:'Vimshottari Dasha',planet:'Planetary positions',reading:'Reading guide',notice:'Important notice',chapter:'CHAPTER',house:'House',sign:'Sign',degree:'Longitude',birth:'Date of birth',place:'Place of birth',time:'Birth time',tz:'Time zone',coordinates:'Coordinates',lagna:'Ascendant',moon:'Moon sign',star:'Birth star',pada:'Pada',lord:'Nakshatra lord',balance:'Dasha balance at birth',explain:'This section shows the signs occupied by the planets. Interpret houses from the Ascendant; the sign occupied by a planet and the house it occupies are related but different chart factors.',navExplain:'Navamsa is the ninth divisional chart. It does not replace the Rasi chart; traditional Jyotish uses it as an additional interpretive lens.',dashaExplain:'Vimshottari Dasha is a traditional planetary-period system derived from the Moon’s birth Nakshatra. The dates are a calculated timeline, not guarantees of specific events.',method:'Calculation method & limitations',methodText:'This report uses the calculation methods currently implemented in AstroWorld and runs in your browser. Birth time, place, time zone and coordinates affect the result. Software output should be independently checked against a professional ephemeris and a qualified practitioner.',glossary:'Glossary',glossText:'Ascendant (Lagna): the sign rising in the east at birth. Rasi: one of the twelve zodiac signs. Bhava: one of twelve houses used for life themes. Navamsa: the D9 divisional chart. Nakshatra: one of 27 lunar mansions. Mahadasha: a major planetary period. Antardasha: a sub-period within a Mahadasha.',disclaimer:'Astrology is a traditional belief and cultural interpretive system. It is not scientifically established as a way to predict events. This report is for reflection and information only, not medical, legal, financial or other high-stakes advice.',generated:'Report generated',page:'Page'
  };
  const esc=s=>String(s??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
  const page=(eyebrow,title,body,n)=>`<article class="pdf-page"><div class="pdf-running"><span>✧ ASTROWORLD</span><span>${copy.label}</span></div><div class="pdf-kicker">${eyebrow}</div><h2>${title}</h2><div class="pdf-body">${body}</div><div class="pdf-page-no">${copy.page} · ${n}</div></article>`;
  const chapters=[...$('lifeReports').querySelectorAll('.detailed-card')];
  const chapterTitles=chapters.map(x=>x.querySelector('h4')?.textContent||'');
  const toc=[
    [copy.profile,3],[copy.guide,3],[copy.rasi,4],[copy.nav,5],[copy.nak,6],[copy.dasha,7],[copy.timing,8],[copy.highlights,9],
    ...chapterTitles.map((x,i)=>[x,10+i]),[copy.planet,22],[copy.method,23],[copy.notice,24]
  ];
  const summary=$('summary').innerHTML;
  const chartCopy=id=>$(id).innerHTML;
  const tableCopy=$('planetTable').innerHTML;
  const dashaCopy=$('dashaPanel').innerHTML;
  const highlightsCopy=$('lifeReports').querySelector('.personal-highlights')?.outerHTML||'';
  const timingCopy=$('lifeReports').querySelector('.timing-insights-card')?.outerHTML||'';
  const birthDetails=`<div class="pdf-facts"><div><small>${copy.birth}</small><strong>${esc(d.date)}</strong></div><div><small>${copy.time}</small><strong>${esc(d.time)}</strong></div><div><small>${copy.place}</small><strong>${esc(d.place)}</strong></div><div><small>${copy.tz}</small><strong>${esc(d.timezone)}</strong></div><div><small>${copy.coordinates}</small><strong>${esc($('latitude').value)}, ${esc($('longitude').value)}</strong></div></div>${summary}`;
  const contents=`<ol class="pdf-toc">${toc.map(([x,n])=>`<li><span>${esc(x)}</span><b>${n}</b></li>`).join('')}</ol>`;
  const profile=`<h3>${copy.profile}</h3>${birthDetails}<h3>${copy.guide}</h3><p>${copy.explain}</p><div class="pdf-note">${copy.methodText}</div>`;
  const nakBody=$('nakshatraPanel').innerHTML+`<p><strong>${copy.star}:</strong> ${esc(t.nak[nakIndex])} · <strong>${copy.pada}:</strong> ${pada}</p>`;
  const pages=[];
  pages.push(`<article class="pdf-page pdf-cover"><div class="cover-ornament">✧</div><div class="cover-brand">✧ ASTROWORLD ✧</div><div class="cover-rule"></div><div class="cover-kicker">${copy.label}</div><h1>${esc(d.person)}</h1><p class="cover-subtitle">${copy.sub}</p><div class="cover-orbit">☼　☽　✦　♃　✧</div><div class="cover-details"><span>${esc(d.date)} · ${esc(d.time)}</span><span>${esc(d.place)}</span><span>${esc(t.lagna)}: ${esc(signName(asc))}　|　${esc(t.moonSign)}: ${esc(signName(Math.floor(norm(moon.longitude)/30)))}</span></div><div class="cover-bottom">A PERSONAL GUIDE TO YOUR VEDIC BIRTH CHART<br>${copy.generated}: ${new Date().toLocaleDateString(tamil?'ta-IN':'en-GB')}</div></article>`);
  pages.push(page('CONTENTS',copy.contents,contents,2));
  pages.push(page('YOUR BIRTH DETAILS',copy.profile,profile,3));
  pages.push(page('THE NATAL CHART',copy.rasi,`<p>${copy.explain}</p><div class="pdf-chart">${chartCopy('rasiChart')}</div><div class="pdf-note">${t.rasiText}</div>`,4));
  pages.push(page('DIVISIONAL WISDOM',copy.nav,`<p>${copy.navExplain}</p><div class="pdf-chart">${chartCopy('navamsaChart')}</div><div class="pdf-note">${t.navamsaText}</div>`,5));
  pages.push(page('LUNAR CONSTELLATION',copy.nak,nakBody,6));
  pages.push(page('PLANETARY TIMELINE',copy.dasha,`<p>${copy.dashaExplain}</p>${dashaCopy}`,7));
  pages.push(page('CURRENT TIMING & TRANSITS',copy.timing,timingCopy,8));
  pages.push(page('PERSONAL CHART INSIGHTS',copy.highlights,highlightsCopy,9));
  chapters.forEach((card,i)=>pages.push(page(`${copy.chapter} ${String(i+1).padStart(2,'0')}`,chapterTitles[i],card.outerHTML,10+i)));
  pages.push(page('GRAHA DIRECTORY',copy.planet,`${tableCopy}<div class="pdf-note">${copy.explain}</div>`,22));
  pages.push(page('REFERENCE',copy.method,`<p>${copy.methodText}</p><h3>${copy.glossary}</h3><p>${copy.glossText}</p>`,23));
  pages.push(page('READ WITH DISCERNMENT',copy.notice,`<div class="pdf-disclaimer">${esc(t.disclaimer)}</div><p>${copy.methodText}</p>`,24));
  $('pdfBook').innerHTML=pages.join('');
}

$('downloadPdf').addEventListener('click',()=>{buildPdfBook();window.print();});
