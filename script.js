const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress_container');
const progress = document.getElementById('progress');
const currentTimeSong = document.getElementById('current_time');
const durationSong = document.getElementById('duration');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// play & pause check

let isPlaying = false;

//Play function

function playSong(){
    isPlaying = true;
    playBtn.classList.replace('fa-play','fa-pause');
    playBtn.setAttribute('title','Pause');
    music.play();
}

//Pause function

function pauseSong(){
    isPlaying = false;
    playBtn.classList.replace('fa-pause','fa-play');
    playBtn.setAttribute('title','Play')
    music.pause();
}

// Play or Pause Event Listener

playBtn.addEventListener('click',() => (isPlaying ? pauseSong() : playSong()));



// Songs Object


const songs = [
	{
		"name":"Aa Bhi Jaa Tu Kahin Se",
		"display":"Aa Bhi Jaa Tu Kahin Se",
		"artist":"Sonu Nigam"
	},
	{
		"name":"Aaj Jaane Ki Zidd Na Karo",
		"display":"Aaj Jaane Ki Zidd Na Karo",
		"artist":"A R Rahman"

	},
	{
		"name":"Aaj Jane Ki Zid Na Karo",
		"display":"Aaj Jane Ki Zid Na Karo",
		"artist":"Arijit Singh"

	},
	{
		"name":"Aaj Jane Ki Zid Naa Karo",
		"display":"Aaj Jane Ki Zid Naa Karo",
		"artist":"Shilpa Rao, Pritam"

	},
	{
		"name":"Aaj Phir",
		"display":"Aaj Phir",
		"artist":"Arijit Singh, Samira Koppikar"

	},
	{
		"name":"Aaj Se Teri",
		"display":"Aaj Se Teri",
		"artist":"Arijit Singh"

	},
	{
		"name":"Aankhon Mein Teri",
		"display":"Aankhon Mein Teri",
		"artist":"Krishnakumar Kunnath(KK)"

	},
	{
		"name":"Aao Milo Chalo",
		"display":"Aao Milo Chalo",
		"artist":"Sultan Khan, Shaan"

	},
	{
		"name":"AAO NAA",
		"display":"AAO NAA",
		"artist":"Udit Narayan, Sadhana Sargam"

	},
	{
		"name":"Aaoge Jab Tum",
		"display":"Aaoge Jab Tum",
		"artist":"Rashid Khan"

	},
	{
		"name":"Abhi Abhi",
		"display":"Abhi Abhi",
		"artist":"KK, Shreya Ghoshal, Akriti Kakar"

	},
	{
		"name":"Abhi Mujh Mein",
		"display":"Abhi Mujh Mein",
		"artist":"Sonu Nigam"

	},
	{
		"name":"Ae Dil Hai Mushkil",
		"display":"Ae Dil Hai Mushkil",
		"artist":"Arijit Singh"

	},
	{
		"name":"Ae Watan",
		"display":"Ae Watan",
		"artist":"Arijit Singh"

	},
	{
		"name":"Afreen Afreen",
		"display":"Afreen Afreen",
		"artist":"Rahat Fateh Ali Khan, Momina Mustehsan"

	},
	{
		"name":"Agar Dil Raazi Hai",
		"display":"Agar Dil Raazi Hai",
		"artist":"Arijit Singh"

	},
	{
		"name":"AIGIRI NANDINI",
		"display":"AIGIRI NANDINI",
		"artist":"Rajalakshmee Sanjay"

	},
	{
		"name":"Aisi Gehraiyaan Aisi Tanhaiyaan",
		"display":"Aisi Gehraiyaan Aisi Tanhaiyaan",
		"artist":"Farhan Akhtar"

	},
	{
		"name":"Amar ekLa akash",
		"display":"Amar ekLa akash",
		"artist":"Shreya Ghoshal"

	},
	{
		"name":"Amar Hat Bandhibi Paa Bandhibi",
		"display":"Amar Hat Bandhibi Paa Bandhibi",
		"artist":"Rishi Panda"

	},
	{
		"name":"Amar Mawte",
		"display":"Amar Mawte",
		"artist":"Lopamudra Mitra"

	},
	{
		"name":"Amar Vin Desi Tara",
		"display":"Amar Vin Desi Tara",
		"artist":"Chandrabindoo(Band)"

	},
	{
		"name":"Ami Achi",
		"display":"Ami Achi",
		"artist":"Arijit Singh"

	},
	{
		"name":"Ami Shunechi Sedin Tumi",
		"display":"Ami Shunechi Sedin Tumi",
		"artist":"Moushumi Bhowmik"

	},
	{
		"name":"Ankahee",
		"display":"Ankahee",
		"artist":"Amitabh Bhattacharya"

	},
	{
		"name":"Apsara Aali X Cradless",
		"display":"Apsara Aali X Cradless",
		"artist":"Remix"

	},
	{
		"name":"Arnob She je boshe ache",
		"display":"Arnob She je boshe ache",
		"artist":"Shayan Chowdhury Arnob"

	},
	{
		"name":"Arziyaan",
		"display":"Arziyaan",
		"artist":"Vikrant Bhartiya, Aishwarya Majumdar"

	},
	{
		"name":"Aur Ho",
		"display":"Aur Ho",
		"artist":"Mohit Chauhan, Alma Ferovic"

	},
	{
		"name":"Awari",
		"display":"Awari",
		"artist":" Momina Mustehsan, Adnan Dhool"

	},
	{
		"name":"Aye Huzoor",
		"display":"Aye Huzoor",
		"artist":"Sunidhi Chauhan, Shaan"

	},
	{
		"name":"Aye Khuda",
		"display":"Aye Khuda",
		"artist":"Rahat Fateh Ali Khan, Shreya Ghoshal"

	},
	{
		"name":"Aye Saiyan",
		"display":"Aye Saiyan",
		"artist":"Orunima Bhattacharya, Vivek Naik"

	},
	{
		"name":"Baatein Hawa Hain",
		"display":"Baatein Hawa Hain",
		"artist":"Shreya Ghoshal"

	},
	{
		"name":"Barfani Female",
		"display":"Barfani Female",
		"artist":"Orunima Bhattacharya"

	},
	{
		"name":"Barfani Male",
		"display":"Barfani Male",
		"artist":"Armaan Malik"

	},
	{
		"name":"Bariye Dao",
		"display":"Bariye Dao",
		"artist":"Anupan Roy"

	},
	{
		"name":"Behooda",
		"display":"Behooda",
		"artist":"Nayantara Bhatkal"

	},
	{
		"name":"Bela Bose",
		"display":"Bela Bose",
		"artist":"Anjan Dutt"

	},
	{
		"name":"Bhaag Milkha Bhaag",
		"display":"Bhaag Milkha Bhaag",
		"artist":"Shankar-Ehsaan-Loy, Siddharth Mahadevan"

	},
	{
		"name":"Bhalobeshe shokhi",
		"display":"Bhalobeshe shokhi",
		"artist":" "

	},
	{
		"name":"Bhare Naina",
		"display":"Bhare Naina",
		"artist":" "

	},
	{
		"name":"Bhromor",
		"display":"Bhromor",
		"artist":" "

	},
	{
		"name":"Bin Tere",
		"display":"Bin Tere",
		"artist":" "

	},
	{
		"name":"Binte Dil",
		"display":"Binte Dil",
		"artist":" "

	},
	{
		"name":"bochor charek por",
		"display":"bochor charek por",
		"artist":" "

	},
	{
		"name":"Boond Boond",
		"display":"Boond Boond",
		"artist":" "

	},
	{
		"name":"Broken angel",
		"display":"Broken angel",
		"artist":" "

	},
	{
		"name":"Chand sifarish",
		"display":"Chand sifarish",
		"artist":" "

	},
	{
		"name":"Cheeni Kum",
		"display":"Cheeni Kum",
		"artist":" "

	},
	{
		"name":"Cheez Badi Hai Mast",
		"display":"Cheez Badi Hai Mast",
		"artist":" "

	},
	{
		"name":"Chikni Chameli",
		"display":"Chikni Chameli",
		"artist":" "

	},
	{
		"name":"Chol Rastay Saji Tramline",
		"display":"Chol Rastay Saji Tramline",
		"artist":" "

	},
	{
		"name":"Chota Sa Fasana",
		"display":"Chota Sa Fasana",
		"artist":" "

	},
	{
		"name":"Chulbuli",
		"display":"Chulbuli",
		"artist":" "

	},
	{
		"name":"Deewana Kar Raha Hai",
		"display":"Deewana Kar Raha Hai",
		"artist":" "

	},
	{
		"name":"Dekhecho ki take",
		"display":"Dekhecho ki take",
		"artist":" "

	},
	{
		"name":"Dhadak Title Track",
		"display":"Dhadak Title Track",
		"artist":" "

	},
	{
		"name":"Dhoop",
		"display":"Dhoop",
		"artist":" "

	},
	{
		"name":"Dil Aakhir Tu Kyun Rota Hai",
		"display":"Dil Aakhir Tu Kyun Rota Hai",
		"artist":" "

	},
	{
		"name":"Dil Cheez Tujhe Dedi",
		"display":"Dil Cheez Tujhe Dedi",
		"artist":" "

	},
	{
		"name":"Dil De Diya Hai Jaan Tumhe Denge",
		"display":"Dil De Diya Hai Jaan Tumhe Denge",
		"artist":" "

	},
	{
		"name":"Dil Diyan Gallan",
		"display":"Dil Diyan Gallan",
		"artist":" "

	},
	{
		"name":"Dil Kyun Yeh Mera",
		"display":"Dil Kyun Yeh Mera",
		"artist":" "

	},
	{
		"name":"Dil Ye Bekarar Kyun Hai",
		"display":"Dil Ye Bekarar Kyun Hai",
		"artist":" "

	},
	{
		"name":"Dilbar janiya",
		"display":"Dilbar janiya",
		"artist":" "

	},
	{
		"name":"Dooriyan",
		"display":"Dooriyan",
		"artist":" "

	},
	{
		"name":"Duaa",
		"display":"Duaa",
		"artist":" "

	},
	{
		"name":"Ek Dil Ek Jaan",
		"display":"Ek Dil Ek Jaan",
		"artist":" "

	},
	{
		"name":"Enna Sona",
		"display":"Enna Sona",
		"artist":" "

	},
	{
		"name":"Eto Alo",
		"display":"Eto Alo",
		"artist":" "

	},
	{
		"name":"Etota Bhalobashi",
		"display":"Etota Bhalobashi",
		"artist":" "

	},
	{
		"name":"Ferari Maan",
		"display":"Ferari Maan",
		"artist":" "

	},
	{
		"name":"gangster",
		"display":"Gangster",
		"artist":" "

	},
	{
		"name":"Ghar Se Nikalte Hi",
		"display":"Ghar Se Nikalte Hi",
		"artist":" "

	},
	{
		"name":"Gilehriyaan",
		"display":"Gilehriyaan",
		"artist":" "

	},
	{
		"name":"Gulabi Aankhein Jo Teri Dekhi",
		"display":"Gulabi Aankhein Jo Teri Dekhi",
		"artist":" "

	},
	{
		"name":"Gulabi",
		"display":"Gulabi",
		"artist":" "

	},
	{
		"name":"Habibi",
		"display":"Habibi",
		"artist":" "

	},
	{
		"name":"Hai Mora Dill",
		"display":"Hai Mora Dill",
		"artist":" "

	},
	{
		"name":"Halka Halka",
		"display":"Halka Halka",
		"artist":" "

	},
	{
		"name":"Hamari Adhuri Kahani",
		"display":"Hamari Adhuri Kahani",
		"artist":" "

	},
	{
		"name":"Hamari Atariya",
		"display":"Hamari Atariya",
		"artist":" "

	},
	{
		"name":"Haseeno Ka Deewana",
		"display":"Haseeno Ka Deewana",
		"artist":" "

	},
	{
		"name":"Hasi",
		"display":"Hasi",
		"artist":" "

	},
	{
		"name":"Heer",
		"display":"Heer",
		"artist":" "

	},
	{
		"name":"Hoyto tomari jonno",
		"display":"Hoyto tomari jonno",
		"artist":" "

	},
	{
		"name":"Humnava",
		"display":"Humnava",
		"artist":" "

	},
	{
		"name":"Husna",
		"display":"Husna",
		"artist":" "

	},
	{
		"name":"Ilahi",
		"display":"Ilahi",
		"artist":" "

	},
	{
		"name":"Imagine Dragons",
		"display":"Imagine Dragons",
		"artist":" "

	},
	{
		"name":"In Dino Dil Mera",
		"display":"In Dino Dil Mera",
		"artist":" "

	},
	{
		"name":"Is Pal",
		"display":"Is Pal",
		"artist":" "

	},
	{
		"name":"Ishaara",
		"display":"Ishaara",
		"artist":" "

	},
	{
		"name":"Ishq Bulaava",
		"display":"Ishq Bulaava",
		"artist":" "

	},
	{
		"name":"Ishq Hua",
		"display":"Ishq Hua",
		"artist":" "

	},
	{
		"name":"Ishq Sufiyana",
		"display":"Ishq Sufiyana",
		"artist":" "

	},
	{
		"name":"ishqiya",
		"display":"Ishqiya",
		"artist":" "

	},
	{
		"name":"Issaq Tera",
		"display":"Issaq Tera",
		"artist":" "

	},
	{
		"name":"Jaadu Hai Nasha Hai",
		"display":"Jaadu Hai Nasha Hai",
		"artist":" "

	},
	{
		"name":"Jaane De",
		"display":"Jaane De",
		"artist":"Atif Aslam"

	},
	{
		"name":"Jaane Do Na",
		"display":"Jaane Do Na",
		"artist":" "

	},
	{
		"name":"Jab Tak Hai Jaan",
		"display":"Jab Tak Hai Jaan",
		"artist":" "

	},
	{
		"name":"JAB TAK",
		"display":"JAB TAK",
		"artist":" "

	},
	{
		"name":"Jadoo Ki Jhappi",
		"display":"Jadoo Ki Jhappi",
		"artist":" "

	},
	{
		"name":"Jai Ho",
		"display":"Jai Ho",
		"artist":" "

	},
	{
		"name":"Jani Dekha Hobe",
		"display":"Jani Dekha Hobe",
		"artist":" "

	},
	{
		"name":"Jano Muthor Rumal",
		"display":"Jano Muthor Rumal",
		"artist":" "

	},
	{
		"name":"Jao Pakhi Bolo",
		"display":"Jao Pakhi Bolo",
		"artist":" "

	},
	{
		"name":"javeda zindagi",
		"display":"javeda zindagi",
		"artist":" "

	},
	{
		"name":"Jawl Phoring",
		"display":"Jawl Phoring",
		"artist":" "

	},
	{
		"name":"Jeans",
		"display":"Jeans",
		"artist":" "

	},
	{
		"name":"Jhoom Jhoom Ta Hun Main",
		"display":"Jhoom Jhoom Ta Hun Main",
		"artist":" "

	},
	{
		"name":"Jo Bhi Main",
		"display":"Jo Bhi Main",
		"artist":" "

	},
	{
		"name":"Juda Hoka Vi",
		"display":"Juda Hoka Vi",
		"artist":" "

	},
	{
		"name":"Kaari Kaari",
		"display":"Kaari Kaari",
		"artist":" "

	},
	{
		"name":"Kabira",
		"display":"Kabira",
		"artist":" "

	},
	{
		"name":"Kaho Na Kaho",
		"display":"Kaho Na Kaho",
		"artist":" "

	},
	{
		"name":"Kalankini Radha",
		"display":"Kalankini Radha",
		"artist":" "

	},
	{
		"name":"Katra",
		"display":"Katra",
		"artist":" "

	},
	{
		"name":"Kaun Mera",
		"display":"Kaun Mera",
		"artist":" "

	},
	{
		"name":"Kaun Tujhe",
		"display":"Kaun Tujhe",
		"artist":" "

	},
	{
		"name":"Kehdoon Tumhe",
		"display":"Kehdoon Tumhe",
		"artist":" "

	},
	{
		"name":"Khali Khali",
		"display":"Khali Khali",
		"artist":" "

	},
	{
		"name":"Khayalon Mein",
		"display":"Khayalon Mein",
		"artist":" "

	},
	{
		"name":"Khudaaya",
		"display":"Khudaaya",
		"artist":" "

	},
	{
		"name":"Khwaja Mere Khwaja",
		"display":"Khwaja Mere Khwaja",
		"artist":" "

	},
	{
		"name":"Ki Name Deke Bolbo Tomake",
		"display":"Ki Name Deke Bolbo Tomake",
		"artist":" "

	},
	{
		"name":"Kichchu Chaini Aami - Anirban",
		"display":"Kichchu Chaini Aami - Anirban",
		"artist":" "

	},
	{
		"name":"Kichchu Chaini Aami",
		"display":"Kichchu Chaini Aami",
		"artist":" "

	},
	{
		"name":"Koi Fariyaad",
		"display":"Koi Fariyaad",
		"artist":" "

	},
	{
		"name":"Kotodin dekhini tomay",
		"display":"Kotodin dekhini tomay",
		"artist":" "

	},
	{
		"name":"Kuch To Hai",
		"display":"Kuch To Hai",
		"artist":" "

	},
	{
		"name":"Kyon",
		"display":"Kyon",
		"artist":" "

	},
	{
		"name":"Kyun Dooriyan Jhoom Jhoom Ta Ja",
		"display":"Kyun Dooriyan Jhoom Jhoom Ta Ja",
		"artist":" "

	},
	{
		"name":"Laal Ishq",
		"display":"Laal Ishq",
		"artist":" "

	},
	{
		"name":"Lag Ja Gale",
		"display":"Lag Ja Gale",
		"artist":" "

	},
	{
		"name":"Lahu Munh Lag Gaya",
		"display":"Lahu Munh Lag Gaya",
		"artist":" "

	},
	{
		"name":"Lal fite sada moja",
		"display":"Lal fite sada moja",
		"artist":" "

	},
	{
		"name":"Lat Lag Gayee",
		"display":"Lat Lag Gayee",
		"artist":" "

	},
	{
		"name":"Mahabharat Title Song",
		"display":"Mahabharat Title Song",
		"artist":" "

	},
	{
		"name":"Main Phir Bhi Tumko Chahunga",
		"display":"Main Phir Bhi Tumko Chahunga",
		"artist":" "

	},
	{
		"name":"Main Rahoon Ya Na Rahoon",
		"display":"Main Rahoon Ya Na Rahoon",
		"artist":" "

	},
	{
		"name":"Majhe majhe tobo dekha pai",
		"display":"Majhe majhe tobo dekha pai",
		"artist":" "

	},
	{
		"name":"Manali Trance",
		"display":"Manali Trance",
		"artist":" "

	},
	{
		"name":"Manike Mage Hithe",
		"display":"Manike Mage Hithe",
		"artist":" "

	},
	{
		"name":"Manmarziyan",
		"display":"Manmarziyan",
		"artist":" "

	},
	{
		"name":"Manwaa",
		"display":"Manwaa",
		"artist":" "

	},
	{
		"name":"Masakalli",
		"display":"Masakalli",
		"artist":" "

	},
	{
		"name":"maula mere maula",
		"display":"maula mere maula",
		"artist":" "

	},
	{
		"name":"Megher Palok",
		"display":"Megher Palok",
		"artist":" "

	},
	{
		"name":"Meghomilon",
		"display":"Meghomilon",
		"artist":" "

	},
	{
		"name":"Meherbaan",
		"display":"Meherbaan",
		"artist":" "

	},
	{
		"name":"Mera Yaar",
		"display":"Mera Yaar",
		"artist":" "

	},
	{
		"name":"Mere Hath Mein",
		"display":"Mere Hath Mein",
		"artist":" "

	},
	{
		"name":"Mere Khuda",
		"display":"Mere Khuda",
		"artist":" "

	},
	{
		"name":"Mere Rashke Qamar",
		"display":"Mere Rashke Qamar",
		"artist":" "

	},
	{
		"name":"Meri Bheegi Bheegi Si",
		"display":"Meri Bheegi Bheegi Si",
		"artist":" "

	},
	{
		"name":"Mile Ho Tum Humko",
		"display":"Mile Ho Tum Humko",
		"artist":" "

	},
	{
		"name":"Moh Moh Ke Dhaage",
		"display":"Moh Moh Ke Dhaage",
		"artist":" "

	},
	{
		"name":"Mone Pore Ruby Roy",
		"display":"Mone Pore Ruby Roy",
		"artist":" "

	},
	{
		"name":"Mone Porle",
		"display":"Mone Porle",
		"artist":" "

	},
	{
		"name":"Moshader Chumu",
		"display":"Moshader Chumu",
		"artist":" "

	},
	{
		"name":"Mujhe Haq Hai",
		"display":"Mujhe Haq Hai",
		"artist":" "

	},
	{
		"name":"Mujhe Khone Ke Baad Ek Din",
		"display":"Mujhe Khone Ke Baad Ek Din",
		"artist":" "

	},
	{
		"name":"Na Na Na Na",
		"display":"Na Na Na Na",
		"artist":" "

	},
	{
		"name":"Naadaan Parindey",
		"display":"Naadaan Parindey",
		"artist":" "

	},
	{
		"name":"Naina Thag Lenge",
		"display":"Naina Thag Lenge",
		"artist":" "

	},
	{
		"name":"Naina",
		"display":"Naina",
		"artist":" "

	},
	{
		"name":"Naino Ne Baandhi",
		"display":"Naino Ne Baandhi",
		"artist":" "

	},
	{
		"name":"Nainowale Ne",
		"display":"Nainowale Ne",
		"artist":" "

	},
	{
		"name":"Nathy Peluso  Delito",
		"display":"Nathy Peluso  Delito",
		"artist":" "

	},
	{
		"name":"Nayan Ne Bandh Rakhine",
		"display":"Nayan Ne Bandh Rakhine",
		"artist":" "

	},
	{
		"name":"O Majhi Re",
		"display":"O Majhi Re",
		"artist":" "

	},
	{
		"name":"O Rangrez",
		"display":"O Rangrez",
		"artist":" "

	},
	{
		"name":"O Re Khuda",
		"display":"O Re Khuda",
		"artist":" "

	},
	{
		"name":"O Re Piya",
		"display":"O Re Piya",
		"artist":" "

	},
	{
		"name":"Paani Ka Raasta",
		"display":"Paani Ka Raasta",
		"artist":" "

	},
	{
		"name":"Pashmina",
		"display":"Pashmina",
		"artist":" "

	},
	{
		"name":"Phir Kabhi",
		"display":"Phir Kabhi",
		"artist":" "

	},
	{
		"name":"Phir Le Aya Dil (Reprise)",
		"display":"Phir Le Aya Dil (Reprise)",
		"artist":" "

	},
	{
		"name":"Phir Le Aya Dil",
		"display":"Phir Le Aya Dil",
		"artist":" "

	},
	{
		"name":"Phir Mohabbat",
		"display":"Phir Mohabbat",
		"artist":" "

	},
	{
		"name":"Piya Bole",
		"display":"Piya Bole",
		"artist":" "

	},
	{
		"name":"Piya Tora Kaisa Abhiman",
		"display":"Piya Tora Kaisa Abhiman",
		"artist":" "

	},
	{
		"name":"Pungi",
		"display":"Pungi",
		"artist":" "

	},
	{
		"name":"Qatl E Aam (Unplugged)",
		"display":"Qatl E Aam (Unplugged)",
		"artist":" "

	},
	{
		"name":"Qatl-E-Aam",
		"display":"Qatl-E-Aam",
		"artist":" "

	},
	{
		"name":"Raabta",
		"display":"Raabta",
		"artist":" "

	},
	{
		"name":"Rabba Main Toh Mar Gaya Oye",
		"display":"Rabba Main Toh Mar Gaya Oye",
		"artist":" "

	},
	{
		"name":"raja ranir bhalo hok",
		"display":"Raja ranir bhalo hok",
		"artist":" "

	},
	{
		"name":"sad arabic turkish beat instrumental",
		"display":"sad arabic turkish beat instrumental",
		"artist":" "

	},
	{
		"name":"Sakal Ase Na",
		"display":"Sakal Ase Na",
		"artist":" "

	},
	{
		"name":"Sanwar Dey Khudaya",
		"display":"Sanwar Dey Khudaya",
		"artist":" "

	},
	{
		"name":"Sapna Jahan",
		"display":"Sapna Jahan",
		"artist":" "

	},
	{
		"name":"Sawan Mein",
		"display":"Sawan Mein",
		"artist":" "

	},
	{
		"name":"Senorita",
		"display":"Senorita",
		"artist":" "

	},
	{
		"name":"Shei Tumi Keno Eto Ochena Hole",
		"display":"Shei Tumi Keno Eto Ochena Hole",
		"artist":" "

	},
	{
		"name":"Shikayatein",
		"display":"Shikayatein",
		"artist":" "

	},
	{
		"name":"Socha Hai",
		"display":"Socha Hai",
		"artist":" "

	},
	{
		"name":"Sooni Sooni",
		"display":"Sooni Sooni",
		"artist":" "

	},
	{
		"name":"Sukaranala",
		"display":"Sukaranala",
		"artist":" "

	},
	{
		"name":"Sukhibhava Annaru",
		"display":"Sukhibhava Annaru",
		"artist":" "

	},
	{
		"name":"Sun Zara",
		"display":"Sun Zara",
		"artist":" "

	},
	{
		"name":"Suna Hai Log Use",
		"display":"Suna Hai Log Use",
		"artist":" "

	},
	{
		"name":"Sunn Raha Hai",
		"display":"Sunn Raha Hai",
		"artist":" "

	},
	{
		"name":"Taal Se Taal Mila",
		"display":"Taal Se Taal Mila",
		"artist":" "

	},
	{
		"name":"Ami Cheye Cheye Dekhi Saradin",
		"display":"Ami Cheye Cheye Dekhi Saradin",
		"artist":" "

	},
	{
		"name":"Talaash",
		"display":"Talaash",
		"artist":" "

	},
	{
		"name":"Tera Chehra",
		"display":"Tera Chehra",
		"artist":" "

	},
	{
		"name":"Tera Zikr",
		"display":"Tera Zikr",
		"artist":" "

	},
	{
		"name":"Tere Bina",
		"display":"Tere Bina",
		"artist":" "

	},
	{
		"name":"TERE NAINA",
		"display":"TERE NAINA",
		"artist":" "

	},
	{
		"name":"Tere Sang Yaara",
		"display":"Tere Sang Yaara",
		"artist":" "

	},
	{
		"name":"Teri Deewani",
		"display":"Teri Deewani",
		"artist":" "

	},
	{
		"name":"Teri Jhuki Nazar",
		"display":"Teri Jhuki Nazar",
		"artist":" "

	},
	{
		"name":"The Witcher",
		"display":"The Witcher",
		"artist":" "

	},
	{
		"name":"Theher Ja",
		"display":"Theher Ja",
		"artist":" "

	},
	{
		"name":"Tinka Tinka",
		"display":"Tinka Tinka",
		"artist":" "

	},
	{
		"name":"Toh Zinda Ho Tum",
		"display":"Toh Zinda Ho Tum",
		"artist":" "

	},
	{
		"name":"Tokon Tomar Ekush Bochor",
		"display":"Tokon Tomar Ekush Bochor",
		"artist":" "

	},
	{
		"name":"Tomake Na Lekha Chithita",
		"display":"Tomake Na Lekha Chithita",
		"artist":" "

	},
	{
		"name":"Tomar Ghore Bosot Kore",
		"display":"Tomar Ghore Bosot Kore",
		"artist":" "

	},
	{
		"name":"Tor Jonyo",
		"display":"Tor Jonyo",
		"artist":" "

	},
	{
		"name":"Tor Sathe",
		"display":"Tor Sathe",
		"artist":" "

	},
	{
		"name":"tose naina lage re",
		"display":"tose naina lage re",
		"artist":" "

	},
	{
		"name":"Tose Naina",
		"display":"Tose Naina",
		"artist":" "

	},
	{
		"name":"Tu Bhoola Jise",
		"display":"Tu Bhoola Jise",
		"artist":" "

	},
	{
		"name":"Tu Hi Re",
		"display":"Tu Hi Re",
		"artist":" "

	},
	{
		"name":"Tu Jahaan",
		"display":"Tu Jahaan",
		"artist":" "

	},
	{
		"name":"Tu Jo Mila",
		"display":"Tu Jo Mila",
		"artist":" "

	},
	{
		"name":"Tu Tu Hai Wohi",
		"display":"Tu Tu Hai Wohi",
		"artist":" "

	},
	{
		"name":"Tui Chunli Jakhan",
		"display":"Tui Chunli Jakhan",
		"artist":" "

	},
	{
		"name":"Tujhe Sochta Hoon",
		"display":"Tujhe Sochta Hoon",
		"artist":" "

	},
	{
		"name":"Tum Bhi Ho Wahi",
		"display":"Tum Bhi Ho Wahi",
		"artist":" "

	},
	{
		"name":"Tum hi Ho Bandhu",
		"display":"Tum hi Ho Bandhu",
		"artist":" "

	},
	{
		"name":"Tum Itna Jo - Unpluged",
		"display":"Tum Itna Jo - Unpluged",
		"artist":" "

	},
	{
		"name":"Tumbbad Title Track",
		"display":"Tumbbad Title Track",
		"artist":" "

	},
	{
		"name":"Tumhare Siva",
		"display":"Tumhare Siva",
		"artist":" "

	},
	{
		"name":"Tumi Asbe Bole",
		"display":"Tumi Asbe Bole",
		"artist":" "

	},
	{
		"name":"Tumi Jake Bhalobaso - Female",
		"display":"Tumi Jake Bhalobaso - Female",
		"artist":" "

	},
	{
		"name":"Tumi Jake Bhalobaso - Male",
		"display":"Tumi Jake Bhalobaso - Male",
		"artist":" "

	},
	{
		"name":"Tune Jo Na Kaha",
		"display":"Tune Jo Na Kaha",
		"artist":" "

	},
	{
		"name":"Uthche Jege Shokalgulo",
		"display":"Uthche Jege Shokalgulo",
		"artist":" "

	},
	{
		"name":"Valo Achi Valo Theko",
		"display":"Valo Achi Valo Theko",
		"artist":" "

	},
	{
		"name":"Wada Raha",
		"display":"Wada Raha",
		"artist":" "

	},
	{
		"name":"Ya Rabba",
		"display":"Ya Rabba",
		"artist":" "

	},
	{
		"name":"Yaara Re",
		"display":"Yaara Re",
		"artist":" "

	},
	{
		"name":"Yaaram",
		"display":"Yaaram",
		"artist":" "

	},
	{
		"name":"Yeh Fitoor Mera",
		"display":"Yeh Fitoor Mera",
		"artist":" "

	},
	{
		"name":"Zara Zara Bahekta Hai",
		"display":"Zara Zara Bahekta Hai",
		"artist":" "

	},
	{
		"name":"Zariya-A_R_Rahman",
		"display":"Zariya-A_R_Rahman",
		"artist":" "

	},
	{
		"name":"Zehnaseeb",
		"display":"Zehnaseeb",
		"artist":" "

	},
	{
		"name":"Zindagi Do Pal Ki",
		"display":"Zindagi Do Pal Ki",
		"artist":" "

	},
	{
		"name":"Zindagi",
		"display":"Zindagi",
		"artist":""

	}
];



// Update DOM

function loadSong(songs){
    title.textContent = songs.display;
    artist.textContent = songs.artist;
    music.src = `music/${songs.name}.mp3`;
    // image.src = 
}

// current Song
let songIndex = 0;

// Previous Song
function prevSong()
{
    songIndex--;
    if(songIndex<0)
    {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// Next Song
function nextSong()
{
    songIndex++;
    if(songIndex>songs.length - 1)
    {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// On Load - Selects First Song

loadSong(songs[songIndex]);

//Update Progress Bar & Time

function updateProgressBar(e){
    if(isPlaying){
        const { duration, currentTime } = e.srcElement;
        // console.log(duration, currentTime);
        //Update Progress bar 
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;

		// Calculate display duration
		const durationMinutes = Math.floor(duration/60);
		// console.log('minutes',durationMinutes);
		let durationSeconds = Math.floor(duration%60);
		if(durationSeconds<10){
			durationSeconds = `0${durationSeconds}`;
		}
		// console.log('seconds',durationSeconds);

		//delay switching durationSong to avoid NaN
		if(durationSeconds){
			durationSong.textContent = `${durationMinutes}:${durationSeconds}`;
		}

		// Calculate display current
		const currentMinutes = Math.floor(currentTime/60);
		// console.log('minutes',currentMinutes);
		let currentSeconds = Math.floor(currentTime%60);
		if(currentSeconds<10){
			currentSeconds = `0${currentSeconds}`;
		}
		// console.log('seconds',currentSeconds);
		currentTimeSong.textContent = `${currentMinutes}:${currentSeconds}`;
    }

}

//set progressbar

function setProgressBar(e){
	// console.log(e);
	const width = this.clientWidth;
	// console.log('width', width);
	const clickX = e.offsetX;
	// console.log('clickX', clickX);
	const { duration } = music;
	// console.log(clickX/width);
	// console.log((clickX/width)*duration);
	music.currentTime = (clickX/width)*duration;

}



// Event Listners

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('ended',nextSong);
music.addEventListener('timeupdate',updateProgressBar);
progressContainer.addEventListener('click',setProgressBar);