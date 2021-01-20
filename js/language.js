const link = document.querySelectorAll('a');
const titleEl = document.querySelector('.title');
var nav = document.querySelectorAll('.nav-link');
var title = document.querySelectorAll('.customtext');
var subtitle = document.querySelectorAll('.subtitle-a');
var titles = document.querySelectorAll('.title-s');
var titlef = document.querySelectorAll('.title-f'); 
var lead = document.querySelectorAll('.lead');
var stitle = document.querySelectorAll('.s-title');
var sdescription = document.querySelectorAll('.s-description');
var countertext = document.querySelectorAll('.counter-text');
const category = document.querySelector('.category');
const cardtitle = document.querySelector('.card-title'); 
const carddesc = document.querySelector('.card-description'); 
var titleleft = document.querySelectorAll('.title-left');
const btnsend = document.querySelector('.btnsend');
var copyright = document.querySelectorAll('.copyright1');
var placehold = document.querySelectorAll('input');

link.forEach(el => {
    el.addEventListener('click', ()=>{
         
        const attr= el.getAttribute('language');
        
        titleEl.textContent = data[attr].title;
        nav[0].textContent = data[attr].home;
        nav[1].textContent = data[attr].about;
        nav[2].textContent = data[attr].skills;
        nav[3].textContent = data[attr].download;
        nav[4].textContent = data[attr].myprojects;
        nav[5].textContent = data[attr].contact;
        title[0].textContent = data[attr].title1;
        title[1].textContent = data[attr].title1;
        title[2].textContent = data[attr].skills;
        title[3].textContent = data[attr].results;
        title[4].textContent = data[attr].download;
        title[5].textContent = data[attr].myprojects;
        title[6].textContent = data[attr].contact;
        subtitle[0].textContent = data[attr].subtitle;
        subtitle[1].textContent = data[attr].subtitle1;
        titles[0].textContent = data[attr].titles0;
        titles[1].textContent = data[attr].titles1;
        titles[2].textContent = data[attr].titles2;
        titles[3].textContent = data[attr].titles3;
        titles[4].textContent = data[attr].skills;
        titlef[0].textContent = data[attr].titlef0;
        lead[0].textContent = data[attr].lead0;
        lead[1].textContent = data[attr].lead1;
        stitle[0].textContent = data[attr].stitle0;
        stitle[1].textContent = data[attr].stitle1;
        stitle[2].textContent = data[attr].stitle2;
        stitle[3].textContent = data[attr].stitle3;
        stitle[4].textContent = data[attr].stitle4;
        stitle[5].textContent = data[attr].stitle5;
        sdescription[0].textContent = data[attr].sdescription0;
        sdescription[1].textContent = data[attr].sdescription1;
        sdescription[2].textContent = data[attr].sdescription2;
        sdescription[3].textContent = data[attr].sdescription3;
        sdescription[4].textContent = data[attr].sdescription4;
        sdescription[5].textContent = data[attr].sdescription5;
        countertext[0].textContent = data[attr].countertext0;
        countertext[1].textContent = data[attr].countertext1;
        countertext[2].textContent = data[attr].countertext2;
        countertext[3].textContent = data[attr].countertext3;
        category.textContent = data[attr].category;
        cardtitle.textContent = data[attr].cardtitle;
        carddesc.textContent = data[attr].carddesc;
        titleleft[1].textContent = data[attr].titleleft1;
        titleleft[2].textContent = data[attr].titleleft2;
        btnsend.textContent = data[attr].btnsend;
        copyright[0].textContent= data[attr].copyright0;
        copyright[1].textContent= data[attr].copyright1;
        placehold[0].placeholder = data[attr].placehold0;
        placehold[1].placeholder = data[attr].placehold1;
        placehold[2].placeholder = data[attr].placehold2;
        texthold.placeholder = data[attr].placehold3;
    });
});

var data={
    "english":
    {
        "title": "I am Shakhzod Burkhonov",
        "home": "Home",
        "about": "About",
        "skills": "Skills",
        "download": "Download cv",
        "myprojects": "My Projects",
        "contact": "Contact",
        "title1": "About me",
        "subtitle": "Algorithm is powerful weapon",
        "subtitle1": "You can download my CV.",
        "results": "Overall Results",
        "titles0": "Name",
        "titles1": "Profile",
        "titles2": "Email",
        "titles3": "Phone",
        "titlef0": "Full Stack developer",
        "lead0": "I am Shakhzod Burkhonov. I am a junior student of INHA University in Tashkent. I am a web developer.",
        "lead1": "You can contact me in any time, 24/7.",
        "stitle0": "Algorithm",
        "stitle1": "Data Structure",
        "stitle2": "Web Development",
        "stitle3": "Responsive Web Design",
        "stitle4": "Communication",
        "stitle5": "Social Life",
        "sdescription0": "I know many algorithms such as Djikstra's, Kruskal's and like these algorithms. I can understand existing code base.",
        "sdescription1": "I partilly know data structure. For example, I know stack, queue, linked list, trees, heap and graphs.",
        "sdescription2": "I know HTML, CSS and PHP languages and Laravel framework. Furthermore, I know JavaScript and jQuery library properly.",
        "sdescription3": "Responsive Web design is one of the most important factors.Thus, I have some knowledge about responsive web app.",
        "sdescription4": "I can work with a team in projects. I can some information how to work via git as a team.",
        "sdescription5": "I can say that I am not so extrovert, but also not introvert. I enjoy training sports and playing games with team.",
        "countertext0": "WORKS COMPLETED",
        "countertext1": "YEARS OF EXPERIENCE",
        "countertext2": "TOTAL CIELNTS",
        "countertext3": "AWARDS WON",
        "category": "Educational website",
        "cardtitle": "See more about MySchool",
        "carddesc": "This website has not much functionalities, but it has some awesome functions.",
        "titleleft1": "Send Message Me",
        "titleleft2": "Get In Touch",
        "btnsend": "Send Message",
        "copyright0": "Copyright",
        "copyright1": "All rights Reserved",
        "placehold0": "Your Name",
        "placehold1": "Your Email",
        "placehold2":  "Subject",
        "placehold3": "Message",


    },
    "uzbek":
    {
        "title" : "Shakhzod Burkhonov",
        "home" : "Bosh sahifa",
        "about": "Biz Haqimizda",
        "skills": "Qobilaytlarim",
        "download": "CV Yuklab olish",
        "myprojects": "Mening ishlarim",
        "contact": "Bog'lanish",
        "title1": "Men haqimda",
        "subtitle": "Algoritm kuchli qurol",
        "subtitle1": "Shu yerdan CVni yuklab olishingiz mumkin",
        "results": "Hamma natijalar",
        "titles0": "Ism:",
        "titles1": "Profil:",
        "titles2": "Email:",
        "titles3": "Tel:",
        "titlef0": "To'liq darajadagi programmist",
        "lead0": "Men Burkhonov Shakhzod Toshkent shahridagi INHA universiteti 3-kurs talabasiman. Meni soham Web dasturlash.",
        "lead1": "Men bilan istalgan vaqti bog'lanishingiz mumkin",
        "stitle0": "Algoritm",
        "stitle1": "Axborot Tuzulmasi",
        "stitle2": "Web dasturlash",
        "stitle3": "Moslashuvchan web design",
        "stitle4": "Muloqot",
        "stitle5": "Ijtimoiy Hayot",
        "sdescription0": "Men bir qancha algoritmlardi bilaman, jumladan  Djikstra's, Kruskal's va shunga o'xshash bo'lgan algoritmlar. Shuningdek, yozilgan kodlarni yaxwi tahlil qila olaman",
        "sdescription1": 'Shuningdek, Axborot tuzilmalaridan xam xabarim bor. Masalan, "stack", "queue", "linked list", "trees", "heap" va "graphs" kabi axborot tuzulmalari bilan tanishman.', 
        "sdescription2": "HTML, CSS va PHP tillari va Laravel frameworkni bilaman. Bundan tashqai, JavaScript tili va jQuery librarysini ham bilaman.",
        "sdescription3": "Moslashchan web dasturlash web dasturlashning eng muhim imillaridan biri. Shunday ekan, bundan ham birmuncha habarim bor.",
        "sdescription4": "Men yaxlit bir jamoa bo'lib ishlashni yoqtiraman, shu sababli git platformasini yaxshi bilaman",
        "sdescription5": "Men o'zimni 'extrovert' yoki 'introvert' deb aytolmeman. Bir jamoa bo'lib o'ynaladigan sport turlarini yaxshi ko'raman",
        "countertext0": "QILINGAN ISHLAR",
        "countertext1": "YILLIK TAJRIBA",
        "countertext2": "UMUMIY MIJOZLAR",
        "countertext3": "QO'LGA KIRITILGAN YUTUQLAR",
        "category": "Ta'limga yo'naltirilgan web sayt",
        "cardtitle": "MySchool haqida batafsil",
        "carddesc": "Bu web saytning juda ko'p funksiyalari bo'lmasa ham, sayt chiroyli va yaxshi ishleydi.",
        "titleleft1": "Menga xabar jo'nating",
        "titleleft2": "Qanday bog'lanish",
        "btnsend": "Xabarni Yuborish",
        "copyright0": "Muallif",
        "copyright1": "Barcha huquqlar ximoyalangan",
        "placehold0": "Ismingiz",
        "placehold1": "Elektron pochta",
        "placehold2": "mavzu",
        "placehold3": "Xabar"


    }
}

function changeuzb(){
    
const link = document.querySelectorAll('a');
const titleEl = document.querySelector('.intro-title');
var nav = document.querySelectorAll('.nav-link');
const articletitle = document.querySelector('.article-title');
var artcon = document.querySelectorAll('.artcon'); 
const quot = document.querySelector('.quot');
var titlecomments = document.querySelectorAll('.title-left');
var commentsdesc = document.querySelectorAll('.commentsdesc');
var reply = document.querySelectorAll('.reply');
const btnsend = document.querySelector('.btnsend');
var copyright = document.querySelectorAll('.copyright1');
var sidebartitle = document.querySelectorAll('.sidebar-title');
var arxivtitle = document.querySelectorAll('.arxivtitle');
var placehold = document.querySelectorAll('input');
const texthold = document.querySelector('textarea');

link.forEach(el => {
    el.addEventListener('click', ()=>{
     

        const attr= el.getAttribute('language');
        
        titleEl.textContent = data[attr].title;
        nav[0].textContent = data[attr].home;
        nav[1].textContent = data[attr].details;
        nav[2].textContent = data[attr].comments;
        nav[3].textContent = data[attr].leavecomment
        articletitle.textContent = data[attr].articletitle;
        artcon[0].textContent = data[attr].artcon0;
        artcon[1].textContent = data[attr].artcon1;
        artcon[2].textContent = data[attr].artcon2;
        quot.textContent = data[attr].quot;
        titlecomments[0].textContent = data[attr].titlecomments0;
        titlecomments[1].textContent = data[attr].titlecomments1;
        commentsdesc[0].textContent = data[attr].commentsdesc0;
        commentsdesc[1].textContent = data[attr].commentsdesc1;
        commentsdesc[2].textContent = data[attr].commentsdesc2;
        reply[0].textContent =data[attr].reply;
        reply[1].textContent =data[attr].reply;
        reply[2].textContent =data[attr].reply;
        btnsend.textContent = data[attr].btnsend;
        copyright[0].textContent= data[attr].copyright0;
        copyright[1].textContent= data[attr].copyright1;
        sidebartitle[0].textContent = data[attr].sidebartitle0;
        sidebartitle[1].textContent = data[attr].sidebartitle1;
        sidebartitle[2].textContent = data[attr].sidebartitle2;
        arxivtitle[0].textContent = data[attr].arxivtitle0;
        arxivtitle[1].textContent = data[attr].arxivtitle1;
        placehold[0].placeholder = data[attr].placehold0;
        placehold[1].placeholder = data[attr].placehold1;
        placehold[2].placeholder = data[attr].placehold2;
        texthold.placeholder = data[attr].placehold3;
    });
});

var data={
    "english":
    {
        "title": "MySchool Details",
        "home": "Home",
        "details": "Details",
        "comments": "Comments",
        "leavecomment": "Leave Comments",
        "articletitle": "MySchool is website having many cool functionalities.",
        "artcon0": "Nowadays, reforms related to education is being implemented. Therefore, MySchool can be one factor in improving our education system. Within it, you can see your child's ranking and their teacher's ranking also. You can also apply online mode and see which type of schools are better for you.",
        "artcon1": "Website has 7-8 sections: School, Online apply, Subjects, Contact, About Us, Login and Register sections. The first section, you can any informations about 4 type of schools: President, Goverment schools and Special and Private schools.",
        "artcon2": "Online apply sections provide you opportunity in order to apply schools via online mode. You don't need to go school wasting you precious time.And also Subjects section you can download any subjects e-version.",
        "quot": "What changes the worldview - science, income, interest.",
        "titlecomments0": "Comments",
        "titlecomments1": "Leave a Reply",
        "commentsdesc0": "Hey, hello Shakhzod Burkhonov, I see your project. It is fine. But, you can do much better. I have some recommadations for you. I sent my contact details to your email.",
        "commentsdesc1": " Hi bro, it is relly nice work.",
        "commentsdesc2": "Hello Shakhzod, I appreciate your work, but it needs still smth. Maybe, you should change apperance of your site.",
        "reply": "Reply",
        "btnsend": "Send Message",
        "copyright0": "Copyright",
        "copyright1": "All rights Reserved",
        "sidebartitle0": "SEARCH",
        "sidebartitle1": "ARCHIVES",
        "sidebartitle2": "USED LANGUAGES",
        "arxivtitle0": "Completed September, 2020",
        "arxivtitle1": "Updated January, 2021.",
        "placehold0": "Name",
        "placehold1": "Email",
        "placehold2":  "Website",
        "placehold3": "Comment",
    },
    "uzbek":
    {
        "title" : "MySchool Tafsilotlari",
        "home" : "Bosh sahifa",
        "details": "Tafsilotlar",
        "comments": "Sharhlar",
        "leavecomment": "sharh qoldirish",
        "articletitle": "MySchool web sayti ko'p ajoyib funksiyalarga ega.",
        "artcon0": "Hozirgi kunda ta'lim bilan bog'liq islohotlar amalga oshirilmoqda. Shunday ekan, MySchool bizning ta'lim tizimimizni takomillashtirishning omillaridan biri bo'lishi mumkin. Unda siz farzandingiz va o'qituvchisi reytingini ham ko'rishingiz mumkin. Shuningdek, siz onlayn rejimni qo'llashingiz va qaysi turdagi maktablar siz uchun yaxshiroq ekanligini ko'rishingiz mumkin.",
        "artcon1": "Veb-sayt 7-8 bo'limdan iborat: Maktab, Onlayn murojaat, Mavzular, Kontakt, Biz haqimizda, Kirish va Ro'yxatdan o'tish bo'limlari. Birinchi bo'limda siz 4 turdagi maktablar to'g'risida har qanday ma'lumotni olishingiz mumkin: Prezident, Hukumat maktablari va Maxsus va Xususiy maktablar.",
        "artcon2": "Onlayn ariza berish bo'limi maktablarga onlayn rejimida topshirish uchun sizga imkoniyat yaratadi. Siz ariza uchun maktabga borishingiz shart emas,sizning qimmatli vaqtingizni behuda sarflanmaydi, shuningdek, kitoblar bo'limida siz har qanday kitoblarni elektron versiyasini yuklab olishingiz mumkin.",
        "quot": "Dunyoqarashni nima o‘zgartiradi – ilm, daromad, manfaat.",
        "titlecomments0": "Sharhlar",
        "titlecomments1": "Sharh qoldirish",
        "commentsdesc0": "Salom Shaxzod Burxonov, men sizning loyihangizni ko'rib chiqdim. Yaxshi. Ammo, siz bundan ham ko'proq narsani qilishingiz mumkin. Menda siz uchun tavsiyalar bor. Men sizning elektron pochtangizga tavsiyalarimdi yuboraman",
        "commentsdesc1": "Salom, loyihangizga gap yoq",
        "commentsdesc2": "Assalomu alaykum Shaxzod, men sizning ishingizni qadrlayman, lekin bunga hali ham nimadir kerak. Ehtimol, siz saytingizning ko'rinishini o'zgartirishingiz kerak.",
        "reply": "Javob berish",
        "btnsend": "Xabarni Yuborish",
        "copyright0": "Muallif",
        "copyright1": "Barcha huquqlar ximoyalangan", 
        "sidebartitle0": "QIDIRISH",
        "sidebartitle1": "ARXIV",
        "sidebartitle2": "FOYDALANILGAN TILLAR",
        "arxivtitle0": "Tugatilgan 2020 sentabr",
        "arxivtitle1": "Qayta ko'rib chiqilgan 2021 Yanvar",
        "placehold0": "Ism",
        "placehold1": "Elektron pochta",
        "placehold2": "Websayt",
        "placehold3": "Sharh"
    }
}
}