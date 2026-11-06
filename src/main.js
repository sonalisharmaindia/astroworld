import './style.css';
import * as Astronomy from 'astronomy-engine';
import { renderDetailedPredictions } from './detailed-predictions.js';

const $ = (id) => document.getElementById(id);
const names = {
  en: {
    eyebrow:'VEDIC ASTROLOGY · LAHIRI AYANAMSA', heroTitle:'Your cosmic map,<br><em>calculated with care.</em>',
    heroText:'Create a birth chart with Rasi, Navamsa, Nakshatra and Vimshottari Dasha — with a free printable Kundli report.',
    birthDetails:'BIRTH DETAILS',createChart:'Create your Vedic birth chart',formIntro:'Enter the birth details as accurately as possible. Birth time and location affect the Ascendant and house placements.',
    fullName:'Full name',birthDate:'Date of birth',birthTime:'Local time of birth',birthPlace:'Place of birth',findPlace:'Find',placeHelp:'Search to fill coordinates and time zone.',latitude:'Latitude',longitude:'Longitude',timezone:'Birthplace time zone (IANA)',timezoneHelp:'Use the time zone applicable on the date of birth. The place search may fill this automatically.',generate:'Calculate my Kundli',engineReady:'Astronomy Engine loads when you calculate.',privacy:'Privacy: calculations run in your browser. Place search contacts Open-Meteo for geocoding; birth date and birth time are not sent to it.',
    downloadPdf:'Download PDF Kundli',birthChart:'BIRTH CHART',rasiTitle:'Rasi Chart · D1',rasiText:'Sidereal planetary placements by sign. South Indian chart layout.',divisionalChart:'DIVISIONAL CHART',navamsaTitle:'Navamsa Chart · D9',navamsaText:'Ninth harmonic divisional chart, traditionally used as one factor in relationship and dharma analysis.',nakshatraSection:'LUNAR MANSION',nakshatraTitle:'Nakshatra & Pada',dashaSection:'PLANETARY PERIODS',dashaTitle:'Vimshottari Dasha',dashaText:"Mahadasha and Antardasha periods calculated from the Moon's Nakshatra.",lifeReports:'LIFE THEMES',reportsTitle:'What your birth chart says about you',reportsText:'Explore each area of life through your own house signs, planetary rulers and placements. Read these as traditional themes for reflection, not fixed outcomes.',planetaryPositions:'PLANETARY POSITIONS',planetTable:'Graha table',disclaimer:'Astrology is a traditional belief system and is not scientifically established as a way to predict events. This report is for cultural, reflective and entertainment purposes only; it is not medical, legal or financial advice. Verify birth-time accuracy and compare calculations with a qualified practitioner before relying on them.',footer:'Free Vedic astrology tools in English and Tamil.',
    signs:['Mesha','Vrishabha','Mithuna','Karka','Simha','Kanya','Tula','Vrischika','Dhanu','Makara','Kumbha','Meena'],planets:['Sun','Moon','Mars','Mercury','Jupiter','Venus','Saturn','Rahu','Ketu'],nak:['Ashwini','Bharani','Krittika','Rohini','Mrigashira','Ardra','Punarvasu','Pushya','Ashlesha','Magha','Purva Phalguni','Uttara Phalguni','Hasta','Chitra','Swati','Vishakha','Anuradha','Jyeshtha','Mula','Purva Ashadha','Uttara Ashadha','Shravana','Dhanishta','Shatabhisha','Purva Bhadrapada','Uttara Bhadrapada','Revati'],
    dashaLords:['Ketu','Venus','Sun','Moon','Mars','Rahu','Jupiter','Saturn','Mercury'],placeFound:'Place found. Check the coordinates and time zone before calculating.',placeError:'Could not find that place. Enter latitude, longitude and time zone manually.',loading:'Loading Astronomy Engine and calculating…',error:'Calculation failed. Check your inputs and try again.',lagna:'Lagna',moonSign:'Moon sign',birthStar:'Birth star',currentDasha:'Current Mahadasha',planet:'Planet',sign:'Rasi',degree:'Longitude',house:'House',retrograde:'Retrograde',yes:'Yes',no:'No',from:'From',to:'To',period:'Period',maha:'Mahadasha',antar:'Antardasha',pada:'Pada',nakLord:'Nakshatra lord',balance:'Balance at birth',marriage:'Marriage & partnership',career:'Career & vocation',finance:'Wealth & resources',overall:'Life direction',reportMarriage:'The 7th house and its lord are traditionally examined for partnership themes. Your chart places {planet} in house {house}; this is one symbolic factor among many. Consider communication, shared values and practical compatibility.',reportCareer:'The 10th house, its lord and Saturn are traditionally considered for vocation. Your chart places {planet} in house {house}; interpret this alongside the full chart, education and lived circumstances.',reportFinance:'The 2nd and 11th houses are traditionally examined for savings, income and networks. Your chart places {planet} in house {house}; this is not a forecast of earnings or investment performance.',reportOverall:'The Ascendant, Moon and running Dasha are traditionally read together for broad life themes. Treat this as a reflective framework, not a fixed account of your future.'
  },
  ta: {
    eyebrow:'வேத ஜோதிடம் · லஹிரி அயனாம்சம்',heroTitle:'உங்கள் ஜோதிட வரைபடம்,<br><em>துல்லியமாகக் கணக்கிடுங்கள்.</em>',heroText:'ராசி, நவாம்சம், நட்சத்திரம், விம்சோத்தரி தசை ஆகியவற்றுடன் இலவசமாகப் பதிவிறக்கக்கூடிய ஜாதக அறிக்கையை உருவாக்குங்கள்.',
    birthDetails:'பிறப்பு விவரங்கள்',createChart:'உங்கள் வேத ஜாதகத்தை உருவாக்குங்கள்',formIntro:'பிறப்பு விவரங்களை மிகத் துல்லியமாக உள்ளிடுங்கள். பிறந்த நேரமும் இடமும் லக்னம் மற்றும் பாவ நிலைகளைப் பாதிக்கும்.',
    fullName:'முழுப் பெயர்',birthDate:'பிறந்த தேதி',birthTime:'பிறந்த உள்ளூர் நேரம்',birthPlace:'பிறந்த இடம்',findPlace:'தேடு',placeHelp:'அட்சரேகை, தீர்க்கரேகை, நேர மண்டலத்தை நிரப்ப இடத்தைத் தேடுங்கள்.',latitude:'அட்சரேகை',longitude:'தீர்க்கரேகை',timezone:'பிறந்த இட நேர மண்டலம் (IANA)',timezoneHelp:'பிறந்த தேதிக்குப் பொருந்தும் நேர மண்டலத்தைப் பயன்படுத்தவும்.',generate:'எனது ஜாதகத்தைக் கணக்கிடு',engineReady:'கணக்கிடும்போது Astronomy Engine இயங்கும்.',privacy:'தனியுரிமை: கணக்கீடுகள் உங்கள் உலாவியில் நடைபெறும். இடத் தேடலுக்கு Open-Meteo பயன்படுத்தப்படும்; பிறந்த தேதி மற்றும் நேரம் அதற்கு அனுப்பப்படாது.',
    downloadPdf:'ஜாதக PDF பதிவிறக்கம்',birthChart:'பிறப்பு ஜாதகம்',rasiTitle:'ராசி கட்டம் · D1',rasiText:'ராசி அடிப்படையிலான கிரக நிலைகள். தென்னிந்திய கட்ட வடிவம்.',divisionalChart:'பிரிவு ஜாதகம்',navamsaTitle:'நவாம்ச கட்டம் · D9',navamsaText:'திருமணம் மற்றும் தர்ம ஆய்வில் பாரம்பரியமாகப் பயன்படுத்தப்படும் ஒன்பதாம் பிரிவு கட்டம்.',nakshatraSection:'சந்திர நட்சத்திரம்',nakshatraTitle:'நட்சத்திரம் மற்றும் பாதம்',dashaSection:'கிரக தசைகள்',dashaTitle:'விம்சோத்தரி தசை',dashaText:'சந்திரனின் பிறப்பு நட்சத்திரத்தை அடிப்படையாகக் கொண்ட மகாதசை மற்றும் அந்தர்தசை.',lifeReports:'வாழ்க்கை அம்சங்கள்',reportsTitle:'உங்கள் ஜாதகம் உங்களைப் பற்றி கூறுவது',reportsText:'உங்கள் பாவ ராசிகள், பாவ அதிபதிகள் மற்றும் கிரக நிலைகளின் அடிப்படையில் வாழ்க்கையின் பல அம்சங்களைப் புரிந்துகொள்ளுங்கள். இவை பாரம்பரிய சிந்தனை வழிகாட்டுதல்கள் மட்டுமே; உறுதியான முடிவுகள் அல்ல.',planetaryPositions:'கிரக நிலைகள்',planetTable:'கிரக அட்டவணை',disclaimer:'ஜோதிடம் ஒரு பாரம்பரிய நம்பிக்கை முறை; எதிர்கால நிகழ்வுகளை கணிக்க அறிவியல் ரீதியாக நிரூபிக்கப்படவில்லை. இந்த அறிக்கை கலாச்சாரம், சிந்தனை மற்றும் பொழுதுபோக்கிற்காக மட்டுமே; மருத்துவம், சட்டம் அல்லது நிதி ஆலோசனை அல்ல. முடிவுகளை நம்புவதற்கு முன் பிறந்த நேரத்தைச் சரிபார்த்து தகுதியான ஜோதிடருடன் ஒப்பிடுங்கள்.',footer:'ஆங்கிலம் மற்றும் தமிழில் இலவச வேத ஜோதிடக் கருவிகள்.',
    signs:['மேஷம்','ரிஷபம்','மிதுனம்','கடகம்','சிம்மம்','கன்னி','துலாம்','விருச்சிகம்','தனுசு','மகரம்','கும்பம்','மீனம்'],planets:['சூரியன்','சந்திரன்','செவ்வாய்','புதன்','குரு','சுக்கிரன்','சனி','ராகு','கேது'],nak:['அஸ்வினி','பரணி','கார்த்திகை','ரோகிணி','மிருகசீரிடம்','திருவாதிரை','புனர்பூசம்','பூசம்','ஆயில்யம்','மகம்','பூரம்','உத்திரம்','ஹஸ்தம்','சித்திரை','சுவாதி','விசாகம்','அனுஷம்','கேட்டை','மூலம்','பூராடம்','உத்திராடம்','திருவோணம்','அவிட்டம்','சதயம்','பூரட்டாதி','உத்திரட்டாதி','ரேவதி'],
    dashaLords:['கேது','சுக்கிரன்','சூரியன்','சந்திரன்','செவ்வாய்','ராகு','குரு','சனி','புதன்'],placeFound:'இடம் கண்டறியப்பட்டது. கணக்கிடுவதற்கு முன் ஆயத்தொலைவுகள் மற்றும் நேர மண்டலத்தைச் சரிபார்க்கவும்.',placeError:'இடத்தைக் கண்டறிய முடியவில்லை. அட்சரேகை, தீர்க்கரேகை, நேர மண்டலத்தை கைமுறையாக உள்ளிடுங்கள்.',loading:'Astronomy Engine ஏற்றப்பட்டு கணக்கிடப்படுகிறது…',error:'கணக்கீடு தோல்வியடைந்தது. விவரங்களைச் சரிபார்த்து மீண்டும் முயற்சிக்கவும்.',lagna:'லக்னம்',moonSign:'சந்திர ராசி',birthStar:'ஜென்ம நட்சத்திரம்',currentDasha:'நடப்பு மகாதசை',planet:'கிரகம்',sign:'ராசி',degree:'பாகை',house:'பாவம்',retrograde:'வக்கிரம்',yes:'ஆம்',no:'இல்லை',from:'தொடக்கம்',to:'முடிவு',period:'காலம்',maha:'மகாதசை',antar:'அந்தர்தசை',pada:'பாதம்',nakLord:'நட்சத்திர அதிபதி',balance:'பிறப்பில் மீதமுள்ள தசை',marriage:'திருமணம் மற்றும் கூட்டாண்மை',career:'தொழில் மற்றும் பணி',finance:'செல்வம் மற்றும் வருமானம்',overall:'வாழ்க்கைப் பாதை',reportMarriage:'திருமண அம்சங்களுக்கு 7ஆம் பாவமும் அதன் அதிபதியும் பாரம்பரியமாகப் பார்க்கப்படுகின்றன. உங்கள் ஜாதகத்தில் {planet} {house}ஆம் பாவத்தில் உள்ளது. இது பல குறியீடுகளில் ஒன்று மட்டுமே. உரையாடல், மதிப்புகள் மற்றும் நடைமுறைப் பொருத்தத்தை கருத்தில் கொள்ளுங்கள்.',reportCareer:'தொழிலுக்கு 10ஆம் பாவம், அதன் அதிபதி மற்றும் சனி பாரம்பரியமாகப் பார்க்கப்படுகின்றன. {planet} {house}ஆம் பாவத்தில் உள்ளது. கல்வி மற்றும் வாழ்க்கைச் சூழலுடன் சேர்த்துப் பாருங்கள்.',reportFinance:'சேமிப்பு மற்றும் வருமானத்திற்கு 2ஆம் மற்றும் 11ஆம் பாவங்கள் பாரம்பரியமாகப் பார்க்கப்படுகின்றன. {planet} {house}ஆம் பாவத்தில் உள்ளது. இது வருமானம் அல்லது முதலீட்டு பலனுக்கான கணிப்பு அல்ல.',reportOverall:'லக்னம், சந்திரன் மற்றும் நடப்பு தசை ஆகியவை வாழ்க்கை அம்சங்களுக்காக ஒன்றாகப் படிக்கப்படுகின்றன. இதை சிந்தனைக்கான கட்டமைப்பாகப் பயன்படுத்துங்கள்; நிர்ணயிக்கப்பட்ட எதிர்காலமாக அல்ல.'
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

const TRANSIT_BODIES = { Jupiter: Astronomy.Body.Jupiter, Saturn: Astronomy.Body.Saturn };
function siderealPlanetLongitude(name, date) { const jd=date.getTime()/86400000+2440587.5; return siderealLongitude(TRANSIT_BODIES[name],date,jd); }
function signedAngle(delta) { return ((delta + 540) % 360) - 180; }
function transitSpeed(name,date) { const h=21600000; return signedAngle(siderealPlanetLongitude(name,new Date(date.getTime()+h))-siderealPlanetLongitude(name,new Date(date.getTime()-h)))/0.5; }
function refineTransitRoot(fn,left,right,rising) { let a=left.getTime(),b=right.getTime(); for(let i=0;i<36;i++){const m=(a+b)/2,v=fn(new Date(m));if((rising&&v>=0)||(!rising&&v<=0))b=m;else a=m;} return new Date((a+b)/2); }
function buildTransitCalendar(startDate,endDate) {
 const events=[],day=86400000;
 for(const name of Object.keys(TRANSIT_BODIES)){
  let prevDate=new Date(startDate),prevLon=siderealPlanetLongitude(name,prevDate),prevSpeed=transitSpeed(name,prevDate),unwrapped=prevLon;
  for(let time=prevDate.getTime()+day;time<=endDate.getTime()+day;time+=day){
   const date=new Date(Math.min(time,endDate.getTime())),lon=siderealPlanetLongitude(name,date),delta=signedAngle(lon-prevLon),next=unwrapped+delta;
   if(delta!==0){const low=Math.min(unwrapped,next),high=Math.max(unwrapped,next),first=Math.floor(low/30)+1,last=Math.floor(high/30);for(let k=first;k<=last;k++){const boundary=k*30,increasing=delta>0;const target=((boundary%360)+360)%360,targetUnwrapped=prevLon+signedAngle(target-prevLon);const root=refineTransitRoot(d=>prevLon+signedAngle(siderealPlanetLongitude(name,d)-prevLon)-targetUnwrapped,prevDate,date,increasing);events.push({planet:name,type:'ingress',longitude:((boundary%360)+360)%360,date:root,direction:increasing?'direct':'retrograde'});}}
   const speed=transitSpeed(name,date);
   if(prevSpeed>0&&speed<=0){const root=refineTransitRoot(d=>transitSpeed(name,d),prevDate,date,false);events.push({planet:name,type:'station',station:'retrograde',date:root});}
   else if(prevSpeed<0&&speed>=0){const root=refineTransitRoot(d=>transitSpeed(name,d),prevDate,date,true);events.push({planet:name,type:'station',station:'direct',date:root});}
   unwrapped=next;prevLon=lon;prevSpeed=speed;prevDate=date;if(date.getTime()===endDate.getTime())break;
  }
 }
 return events.sort((a,b)=>a.date-b.date);
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
  const transitEvents = buildTransitCalendar(transitDate, horizon);
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
    forecast,
    transitEvents
  };
}
$('year').textContent=new Date().getFullYear();
$('language').addEventListener('change',e=>{lang=e.target.value;document.documentElement.lang=lang;document.querySelectorAll('[data-i18n]').forEach(el=>{const value=names[lang][el.dataset.i18n];if(value!==undefined){if(el.dataset.i18n==='heroTitle')el.innerHTML=value;else el.textContent=value;}});const forecastButton=$('download2027');if(forecastButton){forecastButton.querySelector('.forecast-download-title').textContent=forecastButton.querySelector('.forecast-download-title').dataset[lang];forecastButton.querySelector('small').textContent=forecastButton.querySelector('small').dataset[lang];}if(lastChart)renderChart(lastChart);});
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


function build2027Forecast(data){
 const ta=lang==='ta',asc=Math.floor(norm(data.lagna.longitude)/30),months=ta?['ஜனவரி','பிப்ரவரி','மார்ச்','ஏப்ரல்','மே','ஜூன்','ஜூலை','ஆகஸ்ட்','செப்டம்பர்','அக்டோபர்','நவம்பர்','டிசம்பர்']:['January','February','March','April','May','June','July','August','September','October','November','December'];
 const houseEn=['self and fresh starts','money and values','communication and initiative','home and foundations','creativity and learning','work routines and wellbeing','partnerships','shared resources and change','higher learning and horizons','career and contribution','networks and long-term goals','rest and reflection'];
 const houseTa=['சுய முன்னேற்றம் மற்றும் புதிய தொடக்கங்கள்','பணம் மற்றும் மதிப்புகள்','தொடர்பாடல் மற்றும் முயற்சி','வீடு மற்றும் அடித்தளம்','படைப்பாற்றல் மற்றும் கற்றல்','வேலை ஒழுங்கு மற்றும் நலன்','கூட்டாண்மை','பகிர்ந்த வளங்கள் மற்றும் மாற்றம்','உயர்கல்வி மற்றும் விரிந்த பார்வை','தொழில் மற்றும் பங்களிப்பு','நட்பு வட்டம் மற்றும் நீண்டகால இலக்குகள்','ஓய்வு மற்றும் சிந்தனை'];
 const opensEn=['A fresh page to set your intentions.','Build momentum through small, steady choices.','Your voice and ideas deserve room to grow.','Strengthen the foundations that support you.','Make room for joy, creativity and connection.','Progress comes from a thoughtful rhythm, not a race.','Partnership works best when expectations are clear.','Choose depth, patience and careful planning.','Look beyond the familiar and keep learning.','Let your effort be visible; take the next step.','Good conversations can open useful doors.','Pause, appreciate your progress and prepare for a new cycle.'];
 const opensTa=['புதிய நோக்கங்களை அமைக்க ஏற்ற தொடக்கம்.','சிறிய, தொடர்ச்சியான முயற்சிகளால் முன்னேறுங்கள்.','உங்கள் கருத்துகளுக்கும் குரலுக்கும் வளர இடமளியுங்கள்.','உங்களுக்கு ஆதரவான அடித்தளங்களை வலுப்படுத்துங்கள்.','மகிழ்ச்சி, படைப்பாற்றல் மற்றும் உறவுகளுக்கு இடமளியுங்கள்.','அவசரத்தை விட சிந்தனையுள்ள ஒழுங்கே முன்னேற்றம் தரும்.','எதிர்பார்ப்புகள் தெளிவாக இருக்கும்போது கூட்டாண்மை சிறக்கும்.','ஆழம், பொறுமை மற்றும் கவனமான திட்டமிடலைத் தேர்ந்தெடுங்கள்.','பழக்கமான எல்லைகளைத் தாண்டி கற்றலைத் தொடருங்கள்.','உங்கள் முயற்சியை வெளிப்படுத்தி அடுத்த படியை எடுங்கள்.','நல்ல உரையாடல்கள் பயனுள்ள வாயில்களைத் திறக்கலாம்.','உங்கள் முன்னேற்றத்தைப் பாராட்டி புதிய சுழற்சிக்குத் தயாராகுங்கள்.'];
 const actionsEn=['Choose one priority and give it a clear first step.','Review spending, protect your time and keep agreements simple.','Have the conversation you have been postponing; note the next action.','Make space for rest and strengthen supportive routines.','Share your ideas and stay open to learning.','Organise your schedule and finish one task before taking on another.','Listen carefully, clarify expectations and build trust consistently.','Be thoughtful with shared money and avoid rushed commitments.','Explore a course, mentor or experience that broadens your perspective.','Show your work confidently and move towards a meaningful goal.','Reconnect with helpful people and turn one idea into a plan.','Slow down, review the year and release what no longer serves you.'];
 const actionsTa=['ஒரு முக்கிய இலக்கைத் தேர்ந்தெடுத்து முதல் படியைத் தெளிவுபடுத்துங்கள்.','செலவுகளை மதிப்பாய்வு செய்து நேரத்தையும் ஒப்பந்தங்களையும் கவனமாக நிர்வகியுங்கள்.','தள்ளிப்போட்ட உரையாடலை நடத்தி அடுத்த செயலை எழுதுங்கள்.','ஓய்வுக்கு நேரம் ஒதுக்கி ஆதரவான தினசரி ஒழுங்கை வலுப்படுத்துங்கள்.','உங்கள் கருத்துகளைப் பகிர்ந்து புதிய கற்றலுக்கு இடமளியுங்கள்.','அட்டவணையை ஒழுங்குபடுத்தி ஒரு வேலையை முடித்த பிறகு அடுத்ததைத் தொடங்குங்கள்.','கவனமாகக் கேட்டு எதிர்பார்ப்புகளைத் தெளிவுபடுத்தி நம்பிக்கையை வளர்த்துக் கொள்ளுங்கள்.','பகிர்ந்த பண விஷயங்களில் கவனமாக இருந்து அவசர முடிவுகளைத் தவிருங்கள்.','உங்கள் பார்வையை விரிவுபடுத்தும் பாடநெறி அல்லது வழிகாட்டியைத் தேடுங்கள்.','உங்கள் திறமையை நம்பிக்கையுடன் வெளிப்படுத்தி அர்த்தமுள்ள இலக்கை நோக்கி நகருங்கள்.','உதவிகரமானவர்களுடன் தொடர்புகொண்டு நல்ல யோசனையைத் திட்டமாக மாற்றுங்கள்.','வேகத்தைக் குறைத்து ஆண்டை மதிப்பாய்வு செய்து தேவையற்ற சுமைகளை விடுவியுங்கள்.'];
 const fmt=d=>new Intl.DateTimeFormat(ta?'ta-IN':'en-GB',{day:'numeric',month:'short',year:'numeric',timeZone:data.timezone}).format(d);
 const dashaAt=date=>{const p=data.dasha.periods.find(x=>date>=x.start&&date<x.end);if(!p)return null;const s=p.subs.find(x=>date>=x.start&&date<x.end);return {major:p.lord,minor:s?.lord};};
 const yearEvents=buildTransitCalendar(new Date(Date.UTC(2027,0,1)),new Date(Date.UTC(2028,0,1)));\n const rows=[];
 for(let i=0;i<12;i++){
  const date=new Date(Date.UTC(2027,i,15,12)),jd=date.getTime()/86400000+2440587.5,pos=getPlanetPositions(date,jd),j=pos.find(p=>p.name==='Jupiter'),s=pos.find(p=>p.name==='Saturn'),jh=houseOf(j,asc),sh=houseOf(s,asc),d=dashaAt(date);
  const events=yearEvents.filter(e=>e.date.getUTCMonth()===i);
  const eventText=events.map(e=>{if(e.type==='station')return planetName(e.planet)+(ta?(e.station==='retrograde'?' வக்ரம் தொடக்கம்':' நேர்கதி தொடக்கம்'):(e.station==='retrograde'?' turns retrograde':' turns direct'))+' · '+fmt(e.date);return planetName(e.planet)+(ta?' '+signName(Math.floor(e.longitude/30))+' ராசிக்கு பெயர்ச்சி':' enters '+signName(Math.floor(e.longitude/30)))+' · '+fmt(e.date);}).join(' · ');
  rows.push({date,jh,sh,d,events:eventText,js:signName(Math.floor(norm(j.longitude)/30)),ss:signName(Math.floor(norm(s.longitude)/30))});
 }
 const active=data.dasha.periods.filter(p=>p.start<new Date(Date.UTC(2028,0,1))&&p.end>new Date(Date.UTC(2027,0,1)));
 const lords=[...new Set(active.map(p=>p.lord))].map(planetName).join(' · ');

 const overview=(ta?
 '<h3>2027ஆம் ஆண்டின் மொத்தப் பார்வை</h3><p>இந்த ஆண்டு உங்கள் தனிப்பட்ட விம்சோத்தரி தசைச் சுழற்சியையும் லக்னத்திலிருந்து குரு மற்றும் சனியின் பாவப் பெயர்ச்சியையும் இணைத்து வாசிக்கப்படுகிறது. ஏற்கனவே சிறப்பாகச் செயல்படுவதை வலுப்படுத்தி, முக்கிய உறவுகளுக்கு நேரமளித்து, பெரிய முடிவுகளுக்கு முன் நடைமுறைத் திட்டமிடலுடன் முன்னேறுங்கள்.</p>':
 '<h3>Your year at a glance</h3><p>This reading combines your personal Vimshottari Dasha cycle with Jupiter and Saturn moving through houses counted from your Ascendant. Build on what is working, give important relationships care, and make practical plans before taking big steps.</p>')+
 '<div class="annual-stats"><div><small>'+(ta?'மகாதசை':'Mahadasha themes')+'</small><strong>'+(lords||'—')+'</strong></div><div><small>'+(ta?'குரு · ஜனவரி → டிசம்பர்':'Jupiter · Jan → Dec')+'</small><strong>'+rows[0].js+' → '+rows[11].js+'</strong></div><div><small>'+(ta?'சனி · ஜனவரி → டிசம்பர்':'Saturn · Jan → Dec')+'</small><strong>'+rows[0].ss+' → '+rows[11].ss+'</strong></div></div>'+
 '<h3>'+(ta?'இந்த ஆண்டில் கவனம் செலுத்த வேண்டியவை':'Four themes to carry through the year')+'</h3><ul class="annual-themes">'+(ta?['தொழில்: உங்கள் திறமையை வளர்த்து முன்னேற்றத்தைத் திட்டமிடுங்கள்.','உறவுகள்: நேர்மையான உரையாடலுக்கும் பரஸ்பர ஆதரவுக்கும் இடமளியுங்கள்.','பணம்: சேமிப்பு, செலவு மற்றும் நீண்டகால இலக்குகளில் ஒழுங்கைக் கடைப்பிடியுங்கள்.','நலன்: வேலைக்கும் ஓய்வுக்கும் சமநிலை உருவாக்குங்கள்.']:['Career: develop your strengths and plan progress one step at a time.','Relationships: make room for honest conversations and mutual support.','Money: bring structure to saving, spending and long-term goals.','Wellbeing: create a sustainable balance between effort and rest.']).map(x=>'<li>'+x+'</li>').join('')+'</ul>'+
 '<h3>'+(ta?'2027 கிரகப் பெயர்ச்சி திருப்பங்கள்':'Key planetary turning points')+'</h3><ul class="annual-events">'+yearEvents.map(e=>'<li><strong>'+planetName(e.planet)+'</strong> · '+(e.type==='station'?(ta?(e.station==='retrograde'?'வக்ரம் தொடக்கம்':'நேர்கதி தொடக்கம்'):(e.station==='retrograde'?'retrograde begins':'direct motion resumes')):(ta?'ராசி பெயர்ச்சி: ':'sign change: ')+signName(Math.floor((e.longitude||0)/30)))+' — '+fmt(e.date)+'</li>').join('')+'</ul>';
 const pages=[];
 pages.push('<article class="pdf-page annual-cover"><div class="cover-ornament">✧</div><div class="cover-brand">✧ ASTROWORLD ✧</div><div class="cover-rule"></div><div class="cover-kicker">'+(ta?'தனிப்பட்ட 2027 ஜோதிட வழிகாட்டி':'YOUR PERSONAL 2027 ASTROLOGY GUIDE')+'</div><h1>'+String(data.person||'').replace(/[&<>]/g,'')+'</h1><p class="cover-subtitle">'+(ta?'ஜனவரி – டிசம்பர் 2027':'JANUARY – DECEMBER 2027')+'</p><div class="cover-orbit">☼　☽　✦　♃　✧</div><div class="cover-details"><span>'+(ta?'லக்னம்':'Ascendant')+': '+signName(asc)+'</span><span>'+(ta?'சந்திர ராசி':'Moon sign')+': '+signName(Math.floor(norm(data.planets.find(p=>p.name==='Moon').longitude)/30))+'</span></div><div class="cover-bottom">'+(ta?'உங்கள் ஆண்டை நம்பிக்கையுடனும் தெளிவுடனும் திட்டமிடுங்கள்':'A thoughtful guide to planning your year with clarity and confidence')+'</div></article>');
 pages.push('<article class="pdf-page annual-overview"><div class="pdf-running"><span>✧ ASTROWORLD</span><span>2027 · '+(ta?'ஆண்டு வழிகாட்டி':'YEAR GUIDE')+'</span></div><div class="pdf-kicker">'+(ta?'ஆண்டின் நட்சத்திரப் பார்வை':'YOUR YEAR IN THE STARS')+'</div><div class="pdf-body">'+overview+'<p class="annual-note">'+(ta?'இவை பாரம்பரிய ஜோதிடக் கருத்துகள் மட்டுமே; உறுதியான நிகழ்வு கணிப்புகள் அல்ல. உங்கள் தேர்வுகளும் செயல்களுமே முக்கியம்.':'These are traditional astrological themes for reflection, not guaranteed event predictions. Your choices and actions matter most.')+'</p></div><div class="pdf-page-no">02</div></article>');
 rows.forEach((m,i)=>{
  const dline=m.d?(ta?'மகாதசை: '+planetName(m.d.major)+(m.d.minor?' · அந்தர்தசை: '+planetName(m.d.minor):''):'Mahadasha: '+planetName(m.d.major)+(m.d.minor?' · Antardasha: '+planetName(m.d.minor):'')):(ta?'தசைத் தகவல் இல்லை':'No Dasha period available');
  const jtext=ta?'குரு '+m.jh+'ஆம் பாவம் — '+houseTa[m.jh-1]:'Jupiter in house '+m.jh+' — '+houseEn[m.jh-1];
  const stext=ta?'சனி '+m.sh+'ஆம் பாவம் — '+houseTa[m.sh-1]:'Saturn in house '+m.sh+' — '+houseEn[m.sh-1];
  const career=ta?'தொழில்: '+([10].includes(m.jh)||[10].includes(m.sh)?'பொறுப்புகளையும் நீண்டகால இலக்குகளையும் திட்டமிட்டு முன்னேறுங்கள்.':'திறன்களை வளர்த்து பணியில் தொடர்ச்சியை உருவாக்குங்கள்.'):'Career: '+(m.jh===10||m.sh===10?'Plan your responsibilities and long-term goals with care.':'Strengthen your skills and build consistency at work.');
  const relation=ta?'உறவுகள்: '+([5,7,11].includes(m.jh)||[5,7,11].includes(m.sh)?'உரையாடல் மற்றும் இணைப்புகளுக்கு நேரம் ஒதுக்குங்கள்.':'அன்பான தொடர்பையும் பரஸ்பர மரியாதையையும் பேணுங்கள்.'):'Relationships: '+([5,7,11].includes(m.jh)||[5,7,11].includes(m.sh)?'Make time for connection and meaningful conversations.':'Nurture warmth, communication and mutual respect.');
  const finance=ta?'பணம்: '+([2,8,11].includes(m.jh)||[2,8,11].includes(m.sh)?'பகிர்ந்த வளங்கள் மற்றும் செலவுகளை கவனமாக மதிப்பாய்வு செய்யுங்கள்.':'சேமிப்பையும் அன்றாட செலவுகளையும் ஒழுங்குபடுத்துங்கள்.'):'Money: '+([2,8,11].includes(m.jh)||[2,8,11].includes(m.sh)?'Review shared resources and expenses thoughtfully.':'Keep savings and everyday spending organised.');
  pages.push('<article class="pdf-page annual-month"><div class="pdf-running"><span>✧ ASTROWORLD</span><span>2027 · '+(ta?'மாதாந்திர வழிகாட்டி':'MONTHLY GUIDE')+'</span></div><div class="pdf-kicker">'+(ta?'மாதம்':'MONTH')+' '+String(i+1).padStart(2,'0')+' · 2027</div><h2>'+(ta?months[i]:months[i])+'</h2><div class="month-opening">'+(ta?opensTa[i]:opensEn[i])+'</div><div class="month-dasha"><strong>'+(ta?'உங்கள் தசை நிலை':'Your Dasha focus')+'</strong><p>'+dline+'</p></div><div class="month-transits"><strong>'+(ta?'கிரகப் பெயர்ச்சி பின்னணி':'Transit backdrop')+'</strong><p>'+jtext+'; '+stext+'.</p></div><div class="month-life-themes"><div><strong>'+(ta?'தொழில் & இலக்குகள்':'Career & goals')+'</strong><p>'+career+'</p></div><div><strong>'+(ta?'உறவுகள்':'Relationships')+'</strong><p>'+relation+'</p></div><div><strong>'+(ta?'பணம் & வளங்கள்':'Money & resources')+'</strong><p>'+finance+'</p></div></div><div class="month-action"><small>'+(ta?'இந்த மாதத்தின் நல்ல செயல்':'YOUR MONTHLY ACTION')+'</small><p>'+(ta?actionsTa[i]:actionsEn[i])+'</p></div>'+(m.events?'<div class="month-turning"><strong>'+(ta?'இந்த மாத கிரக மாற்றங்கள்':'Planetary turning points this month')+'</strong><p>'+m.events+'</p></div>':'')+'<div class="month-reminder">'+(ta?'நினைவில் கொள்ளுங்கள்: இது ஒரு வழிகாட்டும் பார்வை; உங்கள் முடிவுகளுக்குப் பதிலாகாது.':'Remember: this is a reflective guide, not a substitute for your own judgement.')+'</div><div class="pdf-page-no">'+String(i+3).padStart(2,'0')+'</div></article>');
 });
 return pages.join('');
}
async function download2027Predictions(){
 const btn=$('download2027'),status=$('engineStatus');btn.disabled=true;
 try{
  const date=$('birthDate').value,time=$('birthTime').value,timezone=$('timezone').value.trim(),lat=Number($('latitude').value),lon=Number($('longitude').value);
  if(!date||!time||!timezone||!Number.isFinite(lat)||!Number.isFinite(lon)||Math.abs(lat)>90||Math.abs(lon)>180)throw new Error(lang==='ta'?'முழுமையான பிறப்பு விவரங்களை உள்ளிடுங்கள்.':'Please complete all birth details, including valid coordinates.');
  new Intl.DateTimeFormat('en',{timeZone:timezone});status.textContent=lang==='ta'?'2027 கணிப்புகள் தயாராகின்றன…':'Preparing your personalised 2027 forecast…';
  const data=await calculate(date,time,timezone,lat,lon);$('pdfBook').innerHTML=build2027Forecast(data);document.body.classList.add('printing-annual');window.print();setTimeout(()=>document.body.classList.remove('printing-annual'),1200);
  status.textContent=lang==='ta'?'2027 PDF அச்சிட/சேமிக்க தயாராக உள்ளது.':'2027 forecast is ready to print or save as PDF.';
 }catch(err){console.error(err);status.textContent=err.message|| (lang==='ta'?'கணிப்பு உருவாக்க முடியவில்லை.':'Could not create the forecast.');}
 finally{btn.disabled=false;}
}
$('download2027').addEventListener('click',download2027Predictions);

function buildPdfBook(){
  if(!lastChart) return;
  const t=names[lang], d=lastChart, asc=Math.floor(norm(d.lagna.longitude)/30);
  const moon=d.planets.find(p=>p.name==='Moon');
  const nakSpan=360/27,nakIndex=Math.floor(norm(moon.longitude)/nakSpan);
  const pada=Math.floor((norm(moon.longitude)%nakSpan)/(nakSpan/4))+1;
  const tamil=lang==='ta';
  const copy=tamil?{
    label:'தனிப்பட்ட வேத ஜாதகம்',sub:'பிறப்பு ஜாதகம் · விரிவான விளக்க அறிக்கை',contents:'உள்ளடக்கம்',timing:'நடப்பு தசை மற்றும் கிரகப் பெயர்ச்சி',forecast:'அடுத்த ஐந்து ஆண்டுகளுக்கான பார்வை',highlights:'உங்கள் ஜாதகத்தின் பலங்கள் மற்றும் வளர்ச்சி வாய்ப்புகள்',profile:'பிறப்பு விவரங்கள்',guide:'இந்த அறிக்கையைப் புரிந்துகொள்வது',rasi:'ராசி கட்டம் · D1',nav:'நவாம்ச கட்டம் · D9',nak:'ஜென்ம நட்சத்திரம் மற்றும் பாதம்',dasha:'விம்சோத்தரி தசை',planet:'கிரக நிலைகள்',reading:'விளக்க வழிகாட்டி',notice:'முக்கியக் குறிப்பு',chapter:'அத்தியாயம்',house:'பாவம்',sign:'ராசி',degree:'பாகை',birth:'பிறந்த விவரம்',place:'பிறந்த இடம்',time:'பிறந்த நேரம்',tz:'நேர மண்டலம்',coordinates:'ஆயத்தொலைவுகள்',lagna:'லக்னம்',moon:'சந்திர ராசி',star:'ஜென்ம நட்சத்திரம்',pada:'பாதம்',lord:'அதிபதி',balance:'பிறப்பில் மீதமுள்ள தசை',explain:'இந்தப் பகுதி ஜாதக அமைப்பை எவ்வாறு படிப்பது என்பதை விளக்குகிறது. ராசி கட்டம் கிரகங்கள் எந்த ராசியில் உள்ளன என்பதைக் காட்டுகிறது; லக்னத்திலிருந்து பாவங்களைப் பொருள் கொள்ள வேண்டும்.',navExplain:'நவாம்சம் என்பது ஒன்பதாம் பிரிவு வரைபடம். இது ராசி கட்டத்திற்குப் பதிலாக அல்ல; பாரம்பரிய ஜோதிடத்தில் கூடுதல் பார்வையாகப் பயன்படுத்தப்படுகிறது.',dashaExplain:'விம்சோத்தரி தசை என்பது சந்திரனின் பிறப்பு நட்சத்திரத்தை அடிப்படையாகக் கொண்ட பாரம்பரிய காலச் சுழற்சி. தேதிகள் கணித அட்டவணை; அவை குறிப்பிட்ட நிகழ்வுகளை உறுதி செய்யாது.',method:'கணக்கீடு மற்றும் வரம்புகள்',methodText:'இந்த அறிக்கை இணைய உலாவியில் கிடைக்கும் AstroWorld கணக்கீட்டு முறையைப் பயன்படுத்துகிறது. பிறந்த நேரம், இடம், நேர மண்டலம் மற்றும் ஆயத்தொலைவுகள் முடிவுகளைப் பாதிக்கின்றன. மென்பொருள் கணக்கீடுகள் தொழில்முறை எபிமெரிஸ் அல்லது தகுதியான ஜோதிடரின் சரிபார்ப்புக்கு மாற்றாகாது.',glossary:'சொற்களஞ்சியம்',glossText:'லக்னம்: பிறந்த நேரத்தில் கிழக்கில் உதித்த ராசி. ராசி: 12 அடிப்படை ராசிகளில் ஒன்று. பாவம்: வாழ்க்கைத் தலைப்புகளுக்கான 12 வீடுகள். நவாம்சம்: D9 பிரிவு கட்டம். நட்சத்திரம்: 27 சந்திர மண்டலங்களில் ஒன்று. மகாதசை: முக்கிய கிரக காலம். அந்தர்தசை: மகாதசைக்குள் உள்ள துணைக் காலம்.',disclaimer:'ஜோதிடம் ஒரு பாரம்பரிய நம்பிக்கை மற்றும் கலாச்சார விளக்க முறை. எதிர்கால நிகழ்வுகளை கணிக்க அறிவியல் ரீதியாக நிரூபிக்கப்படவில்லை. இந்த அறிக்கை சிந்தனை மற்றும் தகவல் நோக்கத்திற்காக மட்டுமே; மருத்துவ, சட்ட, நிதி அல்லது முக்கிய வாழ்க்கை முடிவுகளுக்கான ஆலோசனை அல்ல.',generated:'உருவாக்கப்பட்ட தேதி',page:'பக்கம்'
  }:{
    label:'PERSONALISED VEDIC KUNDLI',sub:'BIRTH CHART · EXTENDED INTERPRETIVE REPORT',contents:'Contents',timing:'Current Dasha & transits',forecast:'Five-year outlook',highlights:'Your strengths & growth opportunities',profile:'Birth profile',guide:'How to read this report',rasi:'Rasi Chart · D1',nav:'Navamsa Chart · D9',nak:'Birth Nakshatra & Pada',dasha:'Vimshottari Dasha',planet:'Planetary positions',reading:'Reading guide',notice:'Important notice',chapter:'CHAPTER',house:'House',sign:'Sign',degree:'Longitude',birth:'Date of birth',place:'Place of birth',time:'Birth time',tz:'Time zone',coordinates:'Coordinates',lagna:'Ascendant',moon:'Moon sign',star:'Birth star',pada:'Pada',lord:'Nakshatra lord',balance:'Dasha balance at birth',explain:'This section shows the signs occupied by the planets. Interpret houses from the Ascendant; the sign occupied by a planet and the house it occupies are related but different chart factors.',navExplain:'Navamsa is the ninth divisional chart. It does not replace the Rasi chart; traditional Jyotish uses it as an additional interpretive lens.',dashaExplain:'Vimshottari Dasha is a traditional planetary-period system derived from the Moon’s birth Nakshatra. The dates are a calculated timeline, not guarantees of specific events.',method:'Calculation method & limitations',methodText:'This report uses the calculation methods currently implemented in AstroWorld and runs in your browser. Birth time, place, time zone and coordinates affect the result. Software output should be independently checked against a professional ephemeris and a qualified practitioner.',glossary:'Glossary',glossText:'Ascendant (Lagna): the sign rising in the east at birth. Rasi: one of the twelve zodiac signs. Bhava: one of twelve houses used for life themes. Navamsa: the D9 divisional chart. Nakshatra: one of 27 lunar mansions. Mahadasha: a major planetary period. Antardasha: a sub-period within a Mahadasha.',disclaimer:'Astrology is a traditional belief and cultural interpretive system. It is not scientifically established as a way to predict events. This report is for reflection and information only, not medical, legal, financial or other high-stakes advice.',generated:'Report generated',page:'Page'
  };
  const esc=s=>String(s??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
  const page=(eyebrow,title,body,n)=>`<article class="pdf-page"><div class="pdf-running"><span>✧ ASTROWORLD</span><span>${copy.label}</span></div><div class="pdf-kicker">${eyebrow}</div><h2>${title}</h2><div class="pdf-body">${body}</div><div class="pdf-page-no">${copy.page} · ${n}</div></article>`;
  const chapters=[...$('lifeReports').querySelectorAll('.detailed-card')];
  const chapterTitles=chapters.map(x=>x.querySelector('h4')?.textContent||'');
  const toc=[
    [copy.profile,3],[copy.guide,3],[copy.rasi,4],[copy.nav,5],[copy.nak,6],[copy.dasha,7],[copy.timing,8],[copy.forecast,9],[copy.highlights,10],
    ...chapterTitles.map((x,i)=>[x,11+i]),[copy.planet,23],[copy.method,24],[copy.notice,25]
  ];
  const summary=$('summary').innerHTML;
  const chartCopy=id=>$(id).innerHTML;
  const tableCopy=$('planetTable').innerHTML;
  const dashaCopy=$('dashaPanel').innerHTML;
  const highlightsCopy=$('lifeReports').querySelector('.personal-highlights')?.outerHTML||'';
  const timingCopy=$('lifeReports').querySelector('.timing-insights-card')?.outerHTML||'';
  const transitCalendarCopy=$('lifeReports').querySelector('.transit-calendar-card')?.outerHTML||'';
  const forecastCopy=$('lifeReports').querySelector('.five-year-forecast')?.outerHTML||'';
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
  pages.push(page('CURRENT TIMING & TRANSITS',copy.timing,timingCopy+transitCalendarCopy,8));
  pages.push(page('FIVE-YEAR OUTLOOK',copy.forecast,forecastCopy,9));
  pages.push(page('PERSONAL CHART INSIGHTS',copy.highlights,highlightsCopy,10));
  chapters.forEach((card,i)=>pages.push(page(`${copy.chapter} ${String(i+1).padStart(2,'0')}`,chapterTitles[i],card.outerHTML,11+i)));
  pages.push(page('GRAHA DIRECTORY',copy.planet,`${tableCopy}<div class="pdf-note">${copy.explain}</div>`,23));
  pages.push(page('REFERENCE',copy.method,`<p>${copy.methodText}</p><h3>${copy.glossary}</h3><p>${copy.glossText}</p>`,24));
  pages.push(page('READ WITH DISCERNMENT',copy.notice,`<div class="pdf-disclaimer">${esc(t.disclaimer)}</div><p>${copy.methodText}</p>`,25));
  $('pdfBook').innerHTML=pages.join('');
}

$('downloadPdf').addEventListener('click',()=>{buildPdfBook();window.print();});
