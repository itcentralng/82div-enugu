// Background Audio and Welcome Screen
let backgroundAudio = null;
let welcomeScreen = null;

// Initialize welcome screen and audio on page load
window.addEventListener('DOMContentLoaded', () => {
    backgroundAudio = document.getElementById('backgroundAudio');
    welcomeScreen = document.getElementById('welcomeScreen');
    const enterButton = document.getElementById('enterButton');
    
    // Handle enter button click
    enterButton.addEventListener('click', () => {
        // Play audio
        backgroundAudio.play().then(() => {
            console.log('Background audio started');
        }).catch(error => {
            console.log('Audio playback failed:', error);
        });
        
        // Hide welcome screen with fade out animation
        welcomeScreen.style.opacity = '0';
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
        }, 500);
    });
});

// Commander data
const commanders = [
    {
        id: 1,
        name: "BRIG GEN GGA ALLY (N/276)",
        image: "images/ally.jpg",
        yearOfService: "15-Dec-73 – 6-Aug-75",
        decorations: "",
        biography: "Late Brig Gen Godwin Gregory Aja Ally (Retired) was born on 2 Jan 40 in Okorotung and hails from Obudu Local Government Area of Cross River State. He attended the Mons Officer Cadet School Aldershot, UK and was later transferred to Royal Military Academy Sandhurst (RMAS) as a member of Commissioning Course 62. He was granted Regular Combatant Commission from RMAS into the Nigerian Army Corps of Supply and Transport on 4 Aug 62. He was appointed Commander Lagos Garrison Organisation (Defunct) on 15 Dec 73. Late Brig Gen Godwin Gregory Aja Ally (Retired) was highly recognised and honoured for his exemplary leadership, professionalism and significant contributions to both Nigerian Army and the nation at large."
    },
    {
        id: 2,
        name: "MAJ GEN OE OBADA (N/278)",
        image: "images/obada.jpg",
        yearOfService: "7-Aug-75 – 22-Mar-76",
        decorations: "",
        biography: "Maj Gen Orho Esio Obada (Retired) was born on 3 Apr 39 in Ikwewhu (Agbadu) and hails from Ughelli North Local Government Area of Delta State. He was enlisted into the Nigerian Army in 1959 and was subsequently granted Regular Combatant Commission on 4 Aug 62, having trained as a member of Commissioning Course 62 at the Royal Military Academy Sandhurst (RMAS). He was commissioned from RMAS into the Nigerian Army Infantry Corps and later attended Command and Staff Course at the Joint Services Staff College, UK. He was appointed the First General Officer Commanding 4 Infantry Division on 7 Aug 75. Maj Gen Orho Esio Obada was highly recognized and honoured for his exemplary leadership, professionalism and significant contributions to both Nigerian Army and the nation at large."
    },
    {
        id: 3,
        name: "LT GEN MI WUSHISHI (N/233)",
        image: "images/wushishi.jpg",
        yearOfService: "23-Mar-76 – 7-Jul-78",
        decorations: "",
        biography: "Late Lt Gen Muhammadu Inuwa Wushishi (Retired) was born on 1 Jan 40 in Wushishi and hailed from Wushishi Local Government Area of Niger State. He started his military training at the Nigerian Military Training Centre Kaduna on 12 Apr 61 and proceeded to Mons Officer Cadet School, Aldershot in United Kingdom from 1961 to 1962 for further training. He was granted Short Service Combatant Commission on 12 Jan 62 in the rank of second lieutenant with seniority on the rank effective same date. He converted to Regular Combatant Commission on 18 Jan 63. He was appointed the Second General Officer Commanding 4 Infantry Division on 30 May 76. He was a forthright gentleman and a professional infantry officer who proved to be trustworthy and ingenuous."
    },
    {
        id: 4,
        name: "GEN DY BALI (N/453)",
        image: "images/bali.jpg",
        yearOfService: "1-Sep-78 – 14-Dec-79",
        decorations: "",
        biography: "Late Gen Domkat Yah Bali (Retired) was born on 27 Feb 40 in Zamko and hailed from Zamko Local Government Area of Plateau State. He attended the Nigerian Military Training College, Kaduna for his potential officer training course and later proceeded to the Royal Military Academy Sandhurst, England. He was subsequently granted Regular Combatant Commission into the Artillery Corps on 12 Dec 63. He was appointed the Third General Officer Commanding 4 Infantry Division on 1 Sep 78. Late Gen Domkat Yah Bali (Retired) had a resolute and forthright disposition which made him a very good asset to Nigeria at large."
    },
    {
        id: 5,
        name: "MAJ GEN M BUHARI (N/308)",
        image: "images/buhari.jpg",
        yearOfService: "9-Jul-80 – 4-Jan-81",
        decorations: "",
        biography: "Late Maj Gen Muhammadu Buhari (Retired) was born on 17 Dec 42 in Daura and hailed from Daura Local Government Area of Katsina State. He started his military training at the Nigerian Military Training College, Kaduna and completed the training at Mons Officer Cadet School, Aldershot, United Kingdom where he was commissioned in the rank of second lieutenant on 26 Jan 63. He was appointed the Fourth General Officer Commanding 4 Infantry Division on 9 Jul 80. After retirement, Maj Gen M Buhari was democratically elected as the Fifteenth President and Commander in Chief of the Armed Forces of Nigeria from 2015–2023."
    },
    {
        id: 6,
        name: "MAJ GEN AO ADULOJU (N/396)",
        image: "images/adunloju.jpg",
        yearOfService: "5-Jan-81 – 30-Oct-81",
        decorations: "",
        biography: "Maj Gen Alfred Olasehinde Aduloju (Retired) was born on 23 Apr 39 in Ikare and hails from Ikare Akoko Local Government Area of Ondo State. He attended the Nigerian Military Training College, Kaduna for his potential officer training course and later transferred to the Royal Canadian School of Infantry, Ontario. He was later granted Regular Combatant Commission from the Royal Canadian School of Signals into the Nigerian Army Signals on 16 Aug 63. He was appointed the Fifth General Officer Commanding 4 Infantry Division on 5 Jan 81. Maj Gen Alfred Olasehinde Aduloju (Retired) worked tirelessly to bring the Division to an enviable position in the Nigerian Army."
    },
    {
        id: 7,
        name: "MAJ GEN Z LEKWOT (N/620)",
        image: "images/lekwot.jpg",
        yearOfService: "1-Nov-81 – 8-Jan-84",
        decorations: "",
        biography: "Maj Gen Zamani Lekwot (Retired) was born on 18 Jul 44 in Jankasa and hails from Zango Kataf Local Government Area of Kaduna State. He was enlisted into the Nigerian Army on 10 Jan 59 and later proceeded to the National Defence Academy, India for his officer cadet training. He was, thereafter, granted Regular Combatant Commission on 14 Jun 66 and commissioned into the Infantry Corps. He was appointed the Sixth General Officer Commanding 82 Composite Division on 1 Nov 81. Maj Gen Zamani Lekwot's dedication to his responsibilities set a high standard within his years of service which represented a model of commitment."
    },
    {
        id: 8,
        name: "MAJ GEN YY KURE (N/552)",
        image: "images/kure.jpg",
        yearOfService: "9-Jan-84 – 15-Sep-85",
        decorations: "",
        biography: "Maj Gen Yohanna Yerima Kure (Retired) was born on 16 Apr 42 and hails from Kachia Local Government Area of Kaduna State. He attended the Nigerian Military Training College, Kaduna for his potential officer training course and later transferred to the Officer Cadet School Port Sea, Australia. He was subsequently granted Regular Combatant Commission into the Infantry Corps on 11 Dec 64. He was appointed the Seventh General Officer Commanding 82 Composite Division on 9 Sep 84. Maj Gen Yohanna Yerima Kure (Retired) maintained a very amenable standard of professionalism and discipline in the Nigerian Army."
    },
    {
        id: 9,
        name: "LT GEN OO DIYA (N/671)",
        image: "images/diya.jpg",
        yearOfService: "16-Sep-85 – 31-Dec-87",
        decorations: "",
        biography: "Late Lt Gen Donaldson Oladipo Diya (Retired) was born on 3 Apr 44 in Odogbolu and hailed from Ijebu Ode Local Government Area of Ogun State. He was granted Regular Combatant Commission as a member of 1 Regular Course into the Infantry Corps on 19 Mar 67 in the rank of second lieutenant with seniority on the rank effective 14 Mar 64. He was appointed the Eighth General Officer Commanding 82 Division on 16 Sep 85. Late Lt Gen Donaldson Oladipo Diya (Retired) demonstrated commendable zeal and enthusiasm towards his responsibilities. His degree of professional competence was very impressive."
    },
    {
        id: 10,
        name: "MAJ GEN MS SAMI (N/378)",
        image: "images/sami.jpg",
        yearOfService: "31-Dec-87 – 25-Oct-88",
        decorations: "",
        biography: "Late Maj Gen Mohammed Sani Sami (Retired) was born on 24 Oct 43 in Zuru and hailed from Zuru Local Government Area of Kebbi State. He started his military training at the Nigerian Military Training College, Kaduna and completed the training at Mons Officer Cadet School, Aldershot, United Kingdom where he was commissioned in the rank of second lieutenant on 25 Jul 63. He was appointed the Ninth General Officer Commanding 82 Division on 31 Dec 87. Late Maj Gen Mohammed Sani Sami (Retired) was approachable and exercised sound discretion in accomplishing tasks. He demonstrated keenness and readiness to lead his men gallantly."
    },
    {
        id: 11,
        name: "GEN AA ABUBAKAR (N/757)",
        image: "images/abubakar.jpg",
        yearOfService: "25-Oct-88 – 2-Jan-90",
        decorations: "",
        biography: "Gen Abdulsalami Alhaji Abubakar (Retired) was born on 13 Jun 42 in Minna and hails from Bichi Local Government Area of Niger State. He was granted Short Service Combatant Commission as a member of Short Service Combatant Course 2 into the Infantry Corps on 20 Oct 67 in the rank of second lieutenant with seniority on the rank effective 28 Sep 65. He was appointed the Tenth General Officer Commanding 82 Division on 25 Oct 88. He later became the Head of State, Commander in Chief of the Armed Forces where he contributed immensely to the improvement of the Armed Forces and the development of the Nation."
    },
    {
        id: 12,
        name: "LT GEN S IBRAHIM (N/656)",
        image: "images/s_ibrahim.jpg",
        yearOfService: "2-Jan-90 – 17-Sep-90",
        decorations: "",
        biography: "Late Lt Gen Salihu Ibrahim (Retired) was born on 26 Mar 43 in Egayin-Okene and hailed from Okene Local Government Area of Kogi State. He attended the Nigerian Military Training College, Kaduna as a member of the 1 Regular Course. He was granted Regular Combatant Commission into the Infantry Corps on 19 Mar 67. He was appointed the Eleventh General Officer Commanding 82 Division on 2 Jan 90. He was later appointed Chief of Army Staff on 3 Sep 90 before his disengagement from Service on 17 Sep 93. Late Lt Gen Salihu Ibrahim (Retired) was a professionally competent officer who maintained a very enviable standard throughout his career."
    },
    {
        id: 13,
        name: "MAJ GEN CA GARUBA (N/1363)",
        image: "images/garba.jpg",
        yearOfService: "17-Sep-90 – 19-Sep-93",
        decorations: "",
        biography: "Maj Gen Chris Abutu Garuba (Retired) was born on 8 Apr 48 in Ipole and hails from Otukpo Local Government Area of Benue State. He was enlisted into the Nigerian Army on 15 Aug 67 and later proceeded to the Nigerian Defence Academy for his officer cadet training. He was granted Regular Combatant Commission as a member of 3 Regular Course on 14 Mar 70 into the Nigerian Army Corps of Artillery. He was appointed the Twelfth General Officer Commanding 82 Composite Division on 3 Sep 90. Maj Gen Chris Abutu Garuba (Retired) was highly recognised and honoured for his exemplary leadership qualities and intellect."
    },
    {
        id: 14,
        name: "MAJ GEN TM SHELPIDI (N/1373)",
        image: "images/shelpidi.jpg",
        yearOfService: "20-Sep-93 – 26-Sep-94",
        decorations: "",
        biography: "Maj Gen Timothy Mai Shelpidi (Retired) was born on 4 Sep 48 in Kaltungo and hails from Kaltungo Local Government Area of Bauchi State. He was enlisted into the Nigerian Army on 30 Aug 67 and later proceeded to the Nigerian Defence Academy for his officer cadet training. He was granted Regular Combatant Commission as a member of 3 Regular Course on 14 Mar 70 into the Infantry Corps. He was appointed the Thirteenth General Officer Commanding 82 Division on 20 Sep 93. Maj Gen Timothy Mai Shelpidi (Retired) was highly recognised and honoured for his exemplary leadership qualities, high sense of commitment and comportment which distinguished him as an outstanding senior officer."
    },
    {
        id: 15,
        name: "LT GEN SVL MALU (N/1372)",
        image: "images/malu.jpg",
        yearOfService: "26-Sep-94 – 6-Aug-96",
        decorations: "",
        biography: "Late Lt Gen Samuel Victor Leo Malu (Retired) was born on 15 Jan 47 in Zaki-Biam and hailed from Katsina-Ala Local Government Area of Benue State. He was granted Regular Combatant commission into the Infantry Corps as a member of 3 Regular Course on 14 Mar 70 in the rank of lieutenant with seniority on the rank effective 30 Aug 67. He was appointed the Fourteenth General Officer Commanding 82 Division on 8 Jan 98. He later served as Chief of Army Staff before his disengagement from Service on 24 Apr 01."
    },
    {
        id: 16,
        name: "MAJ GEN FA MUJAKPERUO (N/1994)",
        image: "images/mujakperou.jpg",
        yearOfService: "6-Aug-96 – 23-Jul-98",
        decorations: "",
        biography: "Maj Gen Felix Agho Mujakperuo (Retired) was born on 4 Dec 46 and hails from Okpe Local Government Area of Delta State. He was enlisted into the Nigerian Army on 1 Oct 68 and later proceeded to the Nigerian Defence Academy for his officer cadet training. He was subsequently granted Regular Combatant Commission as a member of 5 Regular Course on 13 Mar 71 into the Infantry Corps before he transferred to the Nigerian Army Corps of Military Police. He was appointed the Fifteenth General Officer Commanding 82 Division on 29 Jul 96. Maj Gen Felix Agho Mujakperuo (Retired) was highly recognised and honoured for his exemplary leadership qualities."
    },
    {
        id: 17,
        name: "MAJ GEN OLADAYO POPOOLA (N/797)",
        image: "images/popoola.jpg",
        yearOfService: "24-Jul-98 – 7-Jun-99",
        decorations: "",
        biography: "Maj Gen Oladayo Popoola (Retired) was born on 26 Feb 44 in Ogbomosho and hails from Ogbomosho North Local Government Area of Oyo State. He was granted Emergency Combatant Short Service Commission into the Infantry Corps as a member of Emergency Combatant Commission 3/1968 on 29 Feb 68 in the rank of second lieutenant. He was appointed the Sixteenth General Officer Commanding 82 Division on 10 Jul 98 before his retirement on 1 Jun 99. He demonstrated exceptional knowledge, intelligence and leadership qualities that set him apart."
    },
    {
        id: 18,
        name: "MAJ GEN AA SANGOTADE (N/2266)",
        image: "images/sangotade.jpg",
        yearOfService: "19-Jul-99 – 15-Nov-02",
        decorations: "DSS psc fwc",
        biography: "Maj Gen Adeniyi Adewale Sangotade (Retired) was born on 3 Aug 47 in Ebute Metta and hails from Mainland Local Government Area of Lagos State. He was granted Regular Combatant Commission as a member of 6 Regular Course on 11 Sep 71 into the Infantry Corps. He was appointed the Seventeenth General Officer Commanding 82 Division on 19 Jul 99 before his retirement on 3 Nov 02. He consistently exhibited remarkable leadership qualities and professionalism that distinguished him in command."
    },
    {
        id: 19,
        name: "MAJ GEN BA JINADU (N/1933)",
        image: "images/jinadu.jpg",
        yearOfService: "15-Nov-02 – 23-Mar-04",
        decorations: "DSS psc(+) fwc MSc",
        biography: "Maj Gen Bashiru Akanni Jinadu (Retired) was born on 17 Nov 50 in Lagos and hails from Obafemi-Owode Local Government Area of Ogun State. He attended the Mons Officer Cadet School Aldershot, UK and was later granted Short Service Combatant Commission as an infantry officer on 6 Feb 71 in the rank of second lieutenant. He was appointed the Eighteenth General Officer Commanding 82 Division on 4 Nov 02. He consistently demonstrated exceptional leadership, integrity and dedication throughout his career."
    },
    {
        id: 20,
        name: "MAJ GEN RA ADESHINA (N/2334)",
        image: "images/adeshina.jpg",
        yearOfService: "23-Mar-04 - 8-Sep-04",
        decorations: "DSS psc CGSC PhD",
        biography: "Late Maj Gen Rafiu Abdul Adeshina (Retired) was born on 1 Jun 51 in Abeokuta and hailed from Abeokuta Local Government Area of Ogun State. He enlisted into the Nigerian Army on 8 Feb 69 and was later granted Short Service Combatant Commission on 11 Sep 71 into the Infantry Corps as a member of Short Service Combatant Course 2 in the rank of second lieutenant. He was appointed the Nineteenth General Officer Commanding 82 Division on 17 Mar 04 before his retirement on 31 Dec 04. He was a disciplined, intelligent and hardworking officer who consistently demonstrated sound leadership, professionalism and integrity."
    },
    {
        id: 21,
        name: "MAJ GEN AG ADEWUYI (N/3113)",
        image: "images/adewuyi.jpg",
        yearOfService: "8-Sep-04 – 18-Jul-06",
        decorations: "DSS psc(+) fwc MSc",
        biography: "Maj Gen Abdul-Hafeez Gbadegesin Adewuyi (Retired) was born on 1 Mar 53 in Lagos and hails from Ojo Ajeromi Local Government Area of Lagos State. He was granted Regular Combatant Commission into the Nigerian Army Engineers as a member of 11 Regular Course on 8 Mar 74 in the rank of second lieutenant. He was appointed the Twentieth General Officer Commanding 82 Division on 3 Sep 04. He discharged his duties with marked dedication, innovation and efficiency."
    },
    {
        id: 22,
        name: "MAJ GEN SU ATAWODI (N/5579)",
        image: "images/atawodi.jpg",
        yearOfService: "18-Jul-06 – 20-Aug-07",
        decorations: "DSS psc fwc MSc",
        biography: "Maj Gen Samuel Usman Atawodi (Retired) was born on 5 Jan 52 in Inye-Ankpa and hails from Ankpa Local Government Area of Kogi State. He was granted Regular Combatant Commission as a member of 15 Regular Course on 19 Jun 76 in the rank of second lieutenant and was of the Nigerian Army Engineers. He was appointed the Twenty First General Officer Commanding 82 Division on 10 Jul 06. He was a versatile, meticulous, intelligent and resourceful officer who consistently demonstrated professional competence and sound judgment under challenging circumstances."
    },
    {
        id: 23,
        name: "MAJ GEN AT IBRAHIM (N/5580)",
        image: "images/ibrahim.jpg",
        yearOfService: "20-Aug-07 – 27-Jan-09",
        decorations: "GSS psc MA mni",
        biography: "Maj Gen Adamu Tubase Ibrahim (Retired) was born on 25 Oct 54 in Wukari and hails from Wukari Local Government Area of Taraba State. He was granted Regular Combatant Commission into the Nigerian Army Corps of Artillery as a member of 15 Regular Course on 19 Jun 76 in the rank of second lieutenant. He was appointed the Twenty Second General Officer Commanding 82 Division on 20 Aug 07 before his retirement on 31 Dec 08. His leadership was marked by operational efficiency, administrative competence and the capacity to manage resources prudently while driving infrastructural and training improvements."
    },
    {
        id: 24,
        name: "MAJ GEN MD ISAH (N/6186)",
        image: "images/isah.jpg",
        yearOfService: "27-Jan-09 – 30-Sep-10",
        decorations: "GSS psc ndc fwc(+) OON",
        biography: "Late Maj Gen Mohammed Dan-Hanne Isah (Retired) was born on 16 Sep 56 in Ribah and hailed from Danko-Wasagu Local Government Area of Kebbi State. He was granted Regular Combatant Commission into the Infantry Corps as a member of 20 Regular Course on 16 Dec 78 in the rank of second lieutenant. He was appointed the Twenty Third General Officer Commanding 82 Division on 26 Jan 09. His dedication to high training standards, resourcefulness and concern for the welfare of subordinates was exemplary."
    },
    {
        id: 25,
        name: "MAJ GEN SY BELLO (N/6367)",
        image: "images/bello.jpg",
        yearOfService: "30-Sep-10 – 1-Sep-11",
        decorations: "GSS psc ndc LLB BL MSc",
        biography: "Maj Gen Sarkin-Yaki Bello (Retired) was born on 2 Feb 57 in Birnin-Kebbi and hails from Birnin-Kebbi Local Government Area of Kebbi State. He was granted Regular Combatant Commission into the Nigerian Army Corps of Military Police as a member of 22 Regular Course on 15 Dec 79 in the rank of second lieutenant. He was appointed the Twenty Fourth General Officer Commanding 82 Division on 24 Sep 10. He was a bold, decisive and highly effective operational commander whose visionary planning and energetic leadership sustained security gains across the South-East and South-South."
    },
    {
        id: 26,
        name: "MAJ GEN SO IDOKO (N/6178)",
        image: "images/idoko.jpg",
        yearOfService: "1-Sep-11 – 14-Feb-12",
        decorations: "GSS psc(+) fwc CMH",
        biography: "Maj Gen Sunday Onwoichoche Idoko (Retired) was born on 2 Feb 57 in Adokpe and hails from Ogbadibo Local Government Area of Benue State. He was granted Regular Combatant Commission into the Nigerian Army Armour Corps as a member of 20 Regular Course on 16 Dec 78 in the rank of second lieutenant. He was appointed the Twenty Fifth General Officer Commanding 82 Division on 1 Jan 11. He was a principled and disciplined officer who embodied professionalism, intelligence and dedication. He equally inspired confidence in his subordinates."
    },
    {
        id: 27,
        name: "MAJ GEN OO OSHINOWO (N/6733)",
        image: "images/oshinowo.jpg",
        yearOfService: "14-Feb-12 – 4-Feb-13",
        decorations: "DSS psc rcds MA Msc FCA",
        biography: "Maj Gen Oluwaseun Olayinka Oshinowo (Retired) was born on 20 Jan 57 in Ibadan and hails from Ikorodu Local Government Area of Lagos State. He was granted Regular Combatant Commission as a member of 24 Regular Course on 19 Jun 81 in the rank of second lieutenant and was of the Nigerian Army Armoured Corps. He was appointed Twenty Sixth General Officer Commanding 82 Division on 14 Sep 12 before his retirement on 20 Jan 13. He was an intelligent, disciplined and highly professional officer whose career reflected consistent excellence."
    },
    {
        id: 28,
        name: "MAJ GEN AA OLANIYI (N/6605)",
        image: "images/olaniyi.jpg",
        yearOfService: "4-Feb-13 – 17-Feb-14",
        decorations: "OON CMH GSS psc(+) mni",
        biography: "Maj Gen Ashimiyu Adebayo Olaniyi (Retired) was born on 29 Jan 58 in Ibadan and hails from Ona-Ara Local Government Area of Oyo State. He was admitted into the Nigerian Defence Academy on 9 Jan 78 and was granted Regular Combatant Commission as a member of 23 Regular Combatant Course on 19 Dec 80 into the Nigerian Army Engineers. He was appointed the Twenty Eighth General Officer Commanding 82 Division on 26 Jan 13 before his retirement from Service on 10 Apr 14. As the GOC 82 Div, he successfully rehabilitated and furnished 82 Division officers' Mess and produced updated maps for Aba and Port Harcourt which boosted the operational capacity. He remarkably initiated several concepts that drastically reduced the menace of oil theft, pipeline vandalism, armed robbery and kidnapping in 82 Div AOR."
    },
    {
        id: 29,
        name: "MAJ GEN S YUSUF (N/7876)",
        image: "images/yusuf.jpg",
        yearOfService: "17-Feb-14 – 10-Aug-15",
        decorations: "DSS psc fdc Msc CMH",
        biography: "Maj Gen Shehu Yusuf (Retired) was born on 31 Oct 61 in Kano and hails from Nasarawa Local Government Area of Kano State. He was admitted into the Nigerian Defence Academy on 2 Jan 82 and was granted Regular Combatant Commission into the Infantry Corps as a member of 31 Regular Combatant Course on 22 Dec 84. He was appointed the Twenty Ninth General Officer Commanding 82 Division on 26 Dec 13 before his retirement from Service on 22 Feb 16. Maj Gen Shehu Yusuf (Retired) was highly recognised and honoured for his exemplary leadership, administrative skills, operational capability and knack for transformation."
    },
    {
        id: 30,
        name: "LT GEN I ATTAHIRU (N/8406)",
        image: "images/attahiru.jpg",
        yearOfService: "10-Aug-15 – 20-Dec-16",
        decorations: "CMH FCM DSS psc(+) ndc(+) pgd",
        biography: "Late Lt Gen Ibrahim Attahiru was born on 10 Aug 66 in Doka and hailed from Kaduna North Local Government Area of Kaduna State. He was admitted into the Nigerian Defence Academy on 19 Jan 84 and was granted Regular Combatant Commission into the Infantry Corps as a member of 35 Regular Combatant Course on 20 Dec 86. He was appointed Acting General Officer Commanding 82 Division on 10 Aug 15 and later appointed the Thirtieth General Officer Commanding 82 Division on 31 Dec 15. He was later appointed the Twenty First COAS on 26 Jan 21 before his death in the line of active service on 21 May 21. Late Lt Gen Ibrahim Attahiru was highly recognised and honoured for his exemplary leadership, outstanding military bearing, professionalism, skills and diligence in carrying out assigned tasks."
    },
    {
        id: 31,
        name: "MAJ GEN AB ABUBAKAR (N/7856)",
        image: "images/ab_abubakar.jpg",
        yearOfService: "20-Dec-16 – 6-Aug-18",
        decorations: "GSS psc fwc(Cairo)",
        biography: "Maj Gen Adamu Baba Abubakar (Retired) was born on 5 Oct 62 in Lagos and hails from Funtua Local Government Area of Katsina State. He was admitted into the Nigerian Defence Academy on 9 Jan 78 and was granted Regular Combatant Commission as a member of 31 Regular Combatant Course on 22 Dec 84. He was appointed the Thirty-First General Officer Commanding 82 Division on 10 Dec 16 before his retirement from service on 5 Oct 18. Maj Gen Adamu Baba Abubakar (Retired) was highly recognised and honoured for his exemplary leadership, exceptional intelligence, and professional qualities of commitment, determination and toughness."
    },
    {
        id: 32,
        name: "MAJ GEN EB KABUK (N/8409)",
        image: "images/kabuk.jpg",
        yearOfService: "6-Aug-18 – 18-Dec-18",
        decorations: "GSMH GSS FCM psc(+) fdc MA MSc",
        biography: "Maj Gen Emmanuel Boman Kabuk (Retired) was born on 18 Dec 62 in Kafanchan and hails from Jemma'a Local Government Area of Kaduna State. He was admitted into the Nigerian Defence Academy on 19 Jan 84 and was granted Regular Combatant Commission into the Nigerian Army Signals as a member of 35 Regular Combatant Course on 20 Dec 86. He was appointed the Thirty-Second General Officer Commanding 82 Division on 1 Aug 18. Maj Gen Emmanuel Boman Kabuk (Retired) was highly recognised and honoured for his exemplary leadership, intelligence, outstanding administrative skills and diligence in executing assigned tasks."
    },
    {
        id: 33,
        name: "MAJ GEN AS MAIKOBI (N/8460)",
        image: "images/maikobi.jpg",
        yearOfService: "18-Dec-18 – 11-Sep-19",
        decorations: "GSS psc fdc CM FCM MPA MDRM",
        biography: "Maj Gen Abubakar Sadiq Maikobi (Retired) was born on 6 Jun 66 in Bauchi and hails from Bauchi Local Government Area of Bauchi State. He was admitted into the Nigerian Defence Academy on 19 Jan 84 and granted Regular Combatant Commission into the Infantry Corps as a member of 35 Regular Combatant Course on 20 Dec 86. He was appointed the Thirty-Third General Officer Commanding 82 Division on 18 Dec 18. Maj Gen Abubakar Sadiq Maikobi (Retired) was highly recognised and honoured for his exemplary leadership, sound administration, professionalism, skills and diligence in carrying out assigned tasks which earned him commendations."
    },
    {
        id: 34,
        name: "MAJ GEN LA ADEGBOYE (N/8645)",
        image: "images/adegboye.jpg",
        yearOfService: "11-Sep-19 – 12-Mar-21",
        decorations: "GSS psc CM FCM PGDPA MPA MSc MNIM",
        biography: "Maj Gen Lasisi Adejare Adegboye (Retired) was born on 24 May 64 in Agbeye and hails from Odo-Otin Local Government Area of Osun State. He was admitted into the Nigerian Defence Academy on 24 Sep 84 and was granted Regular Combatant Commission into the Infantry Corps as a member of 36 Regular Combatant Course on 19 Dec 87. He was appointed Acting General Officer Commanding 82 Division on 5 Sep 19 and later, appointed the Thirty-Fourth General Officer Commanding 82 Division on 19 Dec 19. Maj Gen Lasisi Adejare Adegboye (Retired) was highly recognised and honoured for his exemplary leadership, sacrifice, sound organisational ability, high level of integrity and outstanding positive attitude to work."
    },
    {
        id: 35,
        name: "LT GEN TA LAGBAJA (N/9322)",
        image: "images/lagbaja.jpg",
        yearOfService: "12-Mar-21 – 12-Aug-22",
        decorations: "DSS psc(+) CM FCM USAWC MSS",
        biography: "Late Lt Gen Taoreed Abiodun Lagbaja was born on 28 Feb 68 in Ilobu and hailed from Irepodun Local Government Area of Osun State. He was admitted into the Nigerian Defence Academy on 12 Sep 87 and was granted Regular Combatant Commission into the Infantry Corps as a member of 39 Regular Combatant Course on 19 Sep 92. He was appointed the Thirty-Fifth General Officer Commanding 82 Division on 10 Mar 21 where his exceptional leadership, gallantry and extensive operational expertise coupled with his intellectual acumen was brought to bear. His outstanding achievements over the years cemented his leadership legacy which led to his appointment as the Chief of Army Staff on 23 Jun 23, before his death in the line of active service on 5 Nov 24. Lt Gen Taoreed Abiodun Lagbaja was highly recognised and honoured for his exemplary leadership, outstanding military bearing and dedication to duty."
    },
    {
        id: 36,
        name: "MAJ GEN UT MUSA (N/9185)",
        image: "images/musa.jpg",
        yearOfService: "12-Aug-22 – 2-Feb-23",
        decorations: "GSS psc fdc CM FCM GOM BSc MSc Phd MNIM",
        biography: "Maj Gen Umar Thama Musa (Retired) was born on 10 Apr 68 in Ngulde and hails from Askira Local Government Area of Borno State. He was admitted into the Nigerian Defence Academy on 21 Sep 86 and was granted Regular Combatant Commission into the Infantry Corps as a member of 38 Regular Combatant Course on 21 Sep 91. He was appointed Acting General Officer Commanding 82 Division on 17 Jan 22 and later, appointed the Thirty-Sixth General Officer Commanding 82 Division on 3 Aug 22. Maj Gen Umar Thama Musa (Retired) was highly recognised and honoured for his exemplary leadership, professionalism, selflessness and unwavering commitment to duty which inspired all that had the privilege of serving under his command."
    },
    {
        id: 37,
        name: "MAJ GEN AS CHINADE (N/9710)",
        image: "images/chinade.jpg",
        yearOfService: "2-Feb-23 – 12-Jul-23",
        decorations: "DSS psc fdc CM FCM GOM MIAD",
        biography: "Maj Gen Aminu Shehu Chinade was born on 23 Mar 67 in Chinade Town and hails from Katagum Local Government Area of Bauchi State. He was admitted into the Nigerian Defence Academy on 10 Sep 88 and was granted Regular Combatant Commission into the Infantry Corps as a member of 40 Regular Combatant Course on 25 Sep 93. He was appointed the Thirty-Seventh General Officer Commanding 82 Division on 11 Jan 23. Maj Gen Aminu Shehu Chinade was highly recognised and honoured for his exemplary leadership, resourcefulness, professionalism and outstanding performance which earned him several letters of commendation."
    },
    {
        id: 38,
        name: "MAJ GEN HT DADA (N/9700)",
        image: "images/dada.jpg",
        yearOfService: "12-Jul-23 – 27-Jan-25",
        decorations: "DSS fdc(+) psc(+) CM FCM MIAD MLCE Mo PhD",
        biography: "Maj Gen Hassan Taiwo Dada was born on 21 Mar 71 in Ilaro/Abeokuta and hails from Egbado South Local Government Area of Ogun State. He was admitted into the Nigerian Defence Academy on 10 Sep 88 and was granted Regular Combatant Commission into the Infantry Corps as a member of 40 Regular Combatant Course on 25 Sep 93. He was appointed the Thirty-Eight General Officer Commanding 82 Division on 3 Sep 23. Maj Gen Hassan Taiwo Dada was highly recognised and honoured for his exemplary leadership, outstanding military bearing, professionalism, skills and diligence to duty."
    },
    {
        id: 39,
        name: "MAJ GEN OT OLATOYE (N/9907)",
        image: "images/olatoye.jpg",
        yearOfService: "27-Jan-25 – 5-Nov-2025",
        decorations: "GSS psc(+) ndc(TZ) CM FCM GOM TSM BSc(Hons) MSSS(TZ) MNIA FCAI FNIM SEF(HKS)",
        biography: "Maj Gen Oluyemi Thomas Olatoye was born on 4 Jan 71 in Ibadan and hails from Obafemi Owode Local Government Area of Ogun State. He was admitted into the prestigious Nigerian Defence Academy on 10 Sep 89 as a member of 41 Regular Course and was commissioned into the Nigerian Army Infantry Corps as a Second Lieutenant on 17 Sep 94. He was appointed as the Thirty Ninth General Officer Commanding 82 Division and Force Commander Joint Task Force (South East) Operation UDO KA on 27 Jan 25. Maj Gen Oluyemi Thomas Olatoye is highly recognised and honoured for his exemplary leadership, professionalism, unwavering commitment to duty, sound organisational ability and strict military bearing."
    },
    {
        id: 40,
        name: "MAJ GEN OA FADAIRO (N/10169)",
        image: "images/fadairo.jpg",
        yearOfService: "5-Nov-2025 – Date",
        decorations: "DSS psc CM FTAM ndc(Indian) MPhil MCSD FCM NAOTCM",
        biography: `Major General Oluremi Ayobami Fadairo was born on 5th December 1972 and hails from Ibarapa East Local Government Area of Oyo State. He was admitted into the prestigious Nigerian Defence Academy in September 1991 as a member of 43 Regular Course and was commissioned into the Nigerian Army Corps of Infantry as a Second Lieutenant on 21st September 1996. Gen Fadairo, a bonafide Member of the Royal United Services Institute (RUSI), the leading Defence think-tank of the United Kingdom is a consummate Infantry Senior Officer, who has earned himself several medals which includes:	
a.	Economic Community Monitoring Group (ECOMOG) Medal
b.	United Nations Mission in Sierra Leone (UNAMSIL) Medal
c.	Multinational Joint Task Force (MNJTF) Medal
d.	International Military Advisory and Training Team Medal
e.	Operation Hadin Kai Medal
f.	Operation Hadarin Daji Medal
g.	 Field Command Medal (FCM)
Amongst other awards and decorations.

 The Senior Officer has a Bachelor of Science in Mathematics, Masters in Conflict Security and Development, Masters in philosophy from the University of Madras Chennai India and is a member of the National Mathematical Association of Nigeria.

General Fadairo is an officer with a large heart who is highly recognised for prioritising the welfare of his soldiers. His leadership is defined by a deep sense of responsibility, fairness and unwavering dedication to those under his command. He leads by example fostering a culture of discipline, professionalism and excellence within the ranks. Major General OA Fadairo is married to Mrs. Hilda Ijeoma Fadairo and the union is blessed with children.`
    }
];

// DOM elements
const historyLink = document.getElementById('historyLink');
const commandersGrid = document.getElementById('commandersGrid');
const biographyContent = document.getElementById('biographyContent');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize color transition system
    initializeColorTransitions();
    
    // Initialize home page
    initializeHomePage();
    
    // Initialize history page components (but keep hidden)
    initializeMascotGallery();
});

// Initialize home page
function initializeHomePage() {
    // Add event listener for history card
    const historyCard = document.querySelector('.history-card');
    if (historyCard) {
        historyCard.addEventListener('mouseenter', function() {
            triggerHoverColorEffect(this);
        });
    }
    
    // Populate current GOC biography and commanders grid
    populateCurrentGocBiography();
    if (commandersGrid) {
        populateCommanders();
        startCardAnimation();
    }
}

// Start staggered card animations
function startCardAnimation() {
    const cards = document.querySelectorAll('.commander-card-inner');
    
    // Add staggered animation delays to each card
    cards.forEach((card, index) => {
        const delay = index * 0.5; // 0.5 second delay between each card
        card.style.animationDelay = `${delay}s`;
    });
}

// Initialize infinite scrolling for commanders grid
function initializeInfiniteScroll() {
    if (!commandersGrid) return;
    
    const wrapper = commandersGrid.parentElement;
    
    // Enable manual scrolling on the wrapper
    wrapper.style.overflowY = 'auto';
    
    // Start automatic scrolling after a brief delay
    setTimeout(() => {
        startInfiniteScroll();
    }, 3000);
    
    // Pause auto-scroll on user interaction (mouse wheel or touchpad scroll)
    if (wrapper) {
        wrapper.addEventListener('wheel', pauseAndResumeScroll, { passive: true });
        wrapper.addEventListener('touchmove', pauseAndResumeScroll, { passive: true });
        wrapper.addEventListener('keydown', handleGridKeyboard);
        
        // Pause on mouse enter/leave for better UX
        wrapper.addEventListener('mouseenter', pauseInfiniteScroll);
        
        // Resume scrolling when user stops interacting
        let scrollTimeout;
        wrapper.addEventListener('mouseleave', function() {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                resumeInfiniteScroll();
            }, 1000);
        });
    }
    
    // Handle window resize
    window.addEventListener('resize', handleInfiniteScrollResize);
}

// Pause and resume scroll (for user interactions)
function pauseAndResumeScroll() {
    pauseInfiniteScroll();
    
    // Resume after user stops scrolling
    let scrollTimeout;
    const wrapper = commandersGrid.parentElement;
    
    if (wrapper) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            resumeInfiniteScroll();
        }, 3000); // Resume after 3 seconds of inactivity
    }
}

// Handle keyboard controls for grid scrolling
function handleGridKeyboard(event) {
    if (currentView !== 'home') return;
    
    const wrapper = commandersGrid.parentElement;
    if (!wrapper) return;
    
    const scrollAmount = 300; // pixels to scroll per keypress
    
    if (event.key === 'ArrowUp') {
        event.preventDefault();
        wrapper.scrollBy({
            top: -scrollAmount,
            behavior: 'smooth'
        });
        pauseInfiniteScroll();
    } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        wrapper.scrollBy({
            top: scrollAmount,
            behavior: 'smooth'
        });
        pauseInfiniteScroll();
    } else if (event.key === 'Home') {
        event.preventDefault();
        wrapper.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        pauseInfiniteScroll();
    } else if (event.key === 'End') {
        event.preventDefault();
        wrapper.scrollTo({
            top: wrapper.scrollHeight,
            behavior: 'smooth'
        });
        pauseInfiniteScroll();
    }
}

// Handle resize events for infinite scroll
function handleInfiniteScrollResize() {
    pauseInfiniteScroll();
    setTimeout(() => {
        if (!isScrolling) {
            startInfiniteScroll();
        }
    }, 1000);
}

// Start infinite scrolling animation using native scroll
function startInfiniteScroll() {
    if (isScrolling) return;
    
    isScrolling = true;
    const wrapper = commandersGrid.parentElement;
    const scrollSpeed = 5; // pixels per frame
    let scrollTimeout;
    
    function scrollStep() {
        if (!isScrolling) {
            clearTimeout(scrollTimeout);
            return;
        }
        
        wrapper.scrollBy({
            top: scrollSpeed,
            left: 0,
            behavior: 'auto'
        });
        
        // Check if we've scrolled to the bottom
        const isAtBottom = wrapper.scrollHeight - wrapper.scrollTop - wrapper.clientHeight < 1;
        
        if (isAtBottom) {
            // Reset to top for seamless loop
            wrapper.scrollTop = 0;
        }
        
        scrollTimeout = setTimeout(scrollStep, 30); // Update every 30ms
    }
    
    scrollTimeout = setTimeout(scrollStep, 30);
}

// Pause infinite scrolling
function pauseInfiniteScroll() {
    isScrolling = false;
}

// Resume infinite scrolling
function resumeInfiniteScroll() {
    if (!isScrolling) {
        startInfiniteScroll();
    }
}

// ============================================
// SPA NAVIGATION SYSTEM
// ============================================

let currentView = 'home';
let isTransitioning = false;

// Show Home View
function showHomeView() {
    if (isTransitioning || currentView === 'home') return;
    transitionToView('homeView', 'home');
}

// Show History View
function showHistoryView() {
    if (isTransitioning || currentView === 'history') return;
    transitionToView('historyView', 'history', () => {
        // Update GOCs count dynamically
        const gocsCountElement = document.getElementById('gocsCount');
        if (gocsCountElement) {
            gocsCountElement.textContent = commanders.length;
        }
    });
}

// Show Biography View
function showBiographyView(commanderId) {
    if (isTransitioning) return;
    transitionToView('biographyView', 'biography', () => {
        displayBiography(commanderId);
    });
}

// Core transition function
function transitionToView(targetViewId, viewName, callback = null) {
    if (isTransitioning) return;
    
    isTransitioning = true;
    
    // Get current and target views
    const currentViewElement = document.querySelector('.page-view.active');
    const targetViewElement = document.getElementById(targetViewId);
    
    if (!targetViewElement) {
        isTransitioning = false;
        return;
    }
    
    // Trigger color transition
    triggerColorTransition(() => {
        // Hide current view
        if (currentViewElement) {
            currentViewElement.classList.remove('active');
            currentViewElement.classList.add('transitioning-out');
        }
        
        // Show target view
        targetViewElement.classList.add('transitioning-in');
        
        // Execute callback if provided
        if (callback) {
            callback();
        }
        
        // Complete transition after a brief moment
        setTimeout(() => {
            if (currentViewElement) {
                currentViewElement.classList.remove('transitioning-out');
            }
            targetViewElement.classList.remove('transitioning-in');
            targetViewElement.classList.add('active');
            
            currentView = viewName;
            isTransitioning = false;
            
            // Scroll to top of new view
            targetViewElement.scrollTop = 0;
        }, 50);
    });
}

// Initialize biography page
function initializeBiographyPage() {
    // Initialize reading progress bar
    initializeReadingProgress();
    
    // Add keyboard shortcuts
    initializeBiographyKeyboardShortcuts();
}

// Initialize reading progress bar
function initializeReadingProgress() {
    const textBox = document.querySelector('#biographyView .biography-text-box');
    const progressBar = document.querySelector('#biographyView .reading-progress-bar');
    
    if (!textBox || !progressBar) return;
    
    textBox.addEventListener('scroll', function() {
        const scrollTop = textBox.scrollTop;
        const scrollHeight = textBox.scrollHeight - textBox.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        
        progressBar.style.width = scrollPercentage + '%';
    });
}

// Add keyboard shortcuts for biography page
function initializeBiographyKeyboardShortcuts() {
    document.addEventListener('keydown', function(event) {
        // Only apply shortcuts when biography view is active
        if (currentView !== 'biography') return;
        
        // ESC key to go back
        if (event.key === 'Escape') {
            showHomeView();
        }
        
        // Arrow keys for scrolling the biography text
        const textBox = document.querySelector('#biographyView .biography-text-box');
        if (!textBox) return;
        
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            textBox.scrollBy({
                top: 100,
                behavior: 'smooth'
            });
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            textBox.scrollBy({
                top: -100,
                behavior: 'smooth'
            });
        } else if (event.key === 'Home') {
            event.preventDefault();
            textBox.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else if (event.key === 'End') {
            event.preventDefault();
            textBox.scrollTo({
                top: textBox.scrollHeight,
                behavior: 'smooth'
            });
        }
    });
}

// Initialize biography components on load
initializeBiographyPage();

// Navigation functions (fallbacks for backward compatibility)
function goToHistory() {
    showHistoryView();
}

function goHome() {
    showHomeView();
}

function goToBiography(commanderId) {
    showBiographyView(commanderId);
}

function goToHistoryWithTransition() {
    showHistoryView();
}

function goHomeWithTransition() {
    showHomeView();
}

function goToBiographyWithTransition(commanderId) {
    showBiographyView(commanderId);
}

// Populate current GOC biography section
function populateCurrentGocBiography() {
    const currentGocBiography = document.getElementById('currentGocBiography');
    if (!currentGocBiography) return;
    
    // Get the current (last) commander
    const currentCommander = commanders[commanders.length - 1];
    
    // Create decorations display if available
    const decorationsHtml = currentCommander.decorations && currentCommander.decorations.trim() !== '' 
        ? `<div class="commander-decorations">
            <div class="decorations-list">${currentCommander.decorations.toUpperCase()}</div>
           </div>` 
        : '';

    // Format biography text to preserve line breaks
    const formattedBiography = currentCommander.biography.replace(/\n/g, '<br>');
    
    // Create biography layout with name, service period, and decorations under portrait
    currentGocBiography.innerHTML = `
        <div class="portrait-container">
            <div class="portrait-frame">
                <img src="${currentCommander.image}" alt="${currentCommander.name}" class="commander-portrait" onerror="this.src='images/placeholder.jpg'">
                <div class="portrait-shine"></div>
            </div>
            <div class="portrait-info">
                <h2 class="commander-title">${currentCommander.name}</h2>
                ${decorationsHtml}
                <p class="commander-service-period">${currentCommander.yearOfService}</p>
            </div>
        </div>
        <div class="biography-text-container">
            <div class="biography-text-box">
                
                <div class="biography-text">${formattedBiography}</div>
            </div>
        </div>
    `;
    
    // Add click event to go to full biography page
    currentGocBiography.addEventListener('click', function() {
        showBiographyView(currentCommander.id);
    });
    
    // Add hover effect
    currentGocBiography.addEventListener('mouseenter', function() {
        triggerHoverColorEffect(this);
    });
    
    // Make it look clickable
    currentGocBiography.style.cursor = 'pointer';
}

// Infinite scroll variables
let commandersData = [];
let currentScrollPosition = 0;
let isScrolling = false;
let scrollInterval;

// Populate commanders grid with infinite scrolling
function populateCommanders() {
    commandersGrid.innerHTML = '';
    
    // Get all commanders except the current one (last in array)
    commandersData = commanders.slice(0, -1);
    
    // Create cards - show all commanders multiple times for seamless looping
    const cardsToShow = commandersData.length * 4; // Show 4 full cycles for smooth looping
    
    for (let i = 0; i < cardsToShow; i++) {
        const commanderIndex = i % commandersData.length;
        const commander = commandersData[commanderIndex];
        
        const commanderCard = document.createElement('div');
        commanderCard.className = 'commander-card';
        commanderCard.onclick = () => showBiographyView(commander.id);
        commanderCard.addEventListener('mouseenter', function() {
            triggerHoverColorEffect(this);
        });
        
        // Add data attribute to help with scroll calculations
        commanderCard.setAttribute('data-commander-id', commander.id);
        commanderCard.setAttribute('data-cycle', Math.floor(i / commandersData.length));
        
        // Truncate biography for back of card
        const shortBio = commander.biography.length > 200 
            ? commander.biography.substring(0, 200) + '...' 
            : commander.biography;
        
        commanderCard.innerHTML = `
            <div class="commander-card-inner">
                <div class="commander-card-front">
                    <img src="${commander.image}" alt="${commander.name}" class="commander-image" onerror="this.src='images/placeholder.jpg'">
                    <div class="commander-name">${commander.name}</div>
                    <div class="commander-service">${commander.yearOfService}</div>
                </div>
                <div class="commander-card-back">
                    <h3 style="margin: 0 0 15px 0; font-family: 'Oswald', sans-serif; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 1px; color: var(--cream); text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);">${commander.name}</h3>
                    <p style="font-size: 0.9rem; line-height: 1.5; text-align: center; margin: 0; color: var(--cream); text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);">${shortBio}</p>
                    <div style="margin-top: 15px; padding: 8px 16px; background: rgba(248, 230, 29, 0.2); border-radius: 15px; font-size: 0.8rem; font-weight: bold; color: var(--cream); text-transform: uppercase; letter-spacing: 1px;">Click for Full Biography</div>
                </div>
            </div>
        `;
        
        commandersGrid.appendChild(commanderCard);
    }
    
    // Initialize infinite scrolling
    initializeInfiniteScroll();
}

// Display biography with typing animation
function displayBiography(commanderId) {
    const commander = commanders.find(c => c.id === commanderId);
    
    if (!commander) {
        document.getElementById('biographyText').textContent = 'Commander not found.';
        return;
    }
    
    // Set the portrait and basic info
    const portraitImg = document.getElementById('commanderPortrait');
    const nameElement = document.getElementById('commanderName');
    const serviceElement = document.getElementById('commanderService');
    const biographyTextElement = document.getElementById('biographyText');
    const cursorElement = document.getElementById('typingCursor');
    
    if (portraitImg) {
        portraitImg.src = commander.image;
        portraitImg.alt = commander.name;
        portraitImg.onerror = function() { this.src = 'images/placeholder.jpg'; };
    }
    
    if (nameElement) {
        nameElement.textContent = commander.name;
    }
    
    if (serviceElement) {
        let serviceText = `${commander.yearOfService}`;
        if (commander.decorations && commander.decorations.trim() !== '') {
            serviceText += `\n${commander.decorations.toUpperCase()}`;
        }
        serviceElement.textContent = serviceText;
        // Preserve line breaks in service text
        serviceElement.style.whiteSpace = 'pre-line';
    }
    
    // Start typing animation for biography text
    if (biographyTextElement && cursorElement) {
        startBiographyTyping(commander.biography, biographyTextElement, cursorElement);
    }
}

// Navigation functions (fallbacks)
function goToHistory() {
    window.location.href = 'history.html';
}

function goHome() {
    window.location.href = 'index.html';
}

function goToBiography(commanderId) {
    window.location.href = `biography.html?id=${commanderId}`;
}

// Color Transition System
function initializeColorTransitions() {
    // Start automatic color cycling on load
    setTimeout(() => {
        startAutomaticColorCycle();
    }, 2000);
}

function startAutomaticColorCycle() {
    const container = document.querySelector('.color-transition-container');
    const strips = document.querySelectorAll('.color-strip');
    
    if (!container || !strips.length) return;
    
    // Add auto-cycle class to enable automatic animation
    strips.forEach(strip => {
        strip.classList.add('auto-cycle');
    });
}

function triggerColorTransition(callback = null) {
    const container = document.querySelector('.color-transition-container');
    const strips = document.querySelectorAll('.color-strip');
    
    if (!container || !strips.length) {
        if (callback) callback();
        return;
    }
    
    // Remove auto-cycle classes temporarily
    strips.forEach(strip => {
        strip.classList.remove('auto-cycle');
    });
    
    // Show container and trigger slide-in
    container.classList.add('active');
    
    strips.forEach((strip, index) => {
        setTimeout(() => {
            strip.classList.add('slide-in');
        }, index * 100);
    });
    
    // Wait for strips to fully cover the screen, then execute callback
    setTimeout(() => {
        // Execute callback (switch views) when screen is fully covered
        if (callback) {
            callback();
        }
        
        // Start sliding out
        setTimeout(() => {
            strips.forEach((strip, index) => {
                setTimeout(() => {
                    strip.classList.remove('slide-in');
                    strip.classList.add('slide-out');
                }, index * 50);
            });
            
            // Clean up and restart auto-cycle
            setTimeout(() => {
                container.classList.remove('active');
                strips.forEach(strip => {
                    strip.classList.remove('slide-in', 'slide-out');
                    strip.classList.add('auto-cycle');
                });
            }, 800);
        }, 200);
        
    }, 600);
}

function triggerHoverColorEffect(element) {
    const hoverStrip = document.createElement('div');
    hoverStrip.className = 'hover-color-strip';
    hoverStrip.style.cssText = `
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, 
            rgba(248, 230, 29, 0.3), 
            rgba(1, 135, 176, 0.3), 
            rgba(248, 229, 49, 0.3));
        pointer-events: none;
        z-index: 1;
        transition: left 0.6s ease;
        border-radius: inherit;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(hoverStrip);
    
    // Trigger animation
    setTimeout(() => {
        hoverStrip.style.left = '100%';
    }, 50);
    
    // Remove element after animation
    setTimeout(() => {
        if (hoverStrip.parentNode) {
            hoverStrip.parentNode.removeChild(hoverStrip);
        }
    }, 700);
}

// Biography typing animation variables
let currentTypingTimeout = null;
let isTyping = false;

// Biography typing animation function
function startBiographyTyping(text, textElement, cursorElement) {
    if (!text || !textElement) return;
    
    // Cancel any ongoing typing animation
    if (currentTypingTimeout) {
        clearTimeout(currentTypingTimeout);
        currentTypingTimeout = null;
    }
    isTyping = false;
    
    // Clear any existing content
    textElement.textContent = '';
    
    // Add typing class to text box
    const textBox = textElement.closest('.biography-text-box');
    if (textBox) {
        textBox.classList.remove('typing-complete');
        textBox.classList.add('typing-active');
        textBox.scrollTop = 0; // Reset scroll position
    }
    
    // Show cursor
    if (cursorElement) {
        cursorElement.style.display = 'inline';
    }
    
    let currentIndex = 0;
    const typingSpeed = 20; // Faster speed - 20ms instead of 30ms
    isTyping = true;
    
    function typeCharacter() {
        // Check if typing was cancelled
        if (!isTyping || currentIndex >= text.length) {
            if (currentIndex >= text.length) {
                // Finished typing normally
                if (textBox) {
                    textBox.classList.remove('typing-active');
                    textBox.classList.add('typing-complete');
                    
                    // Smooth scroll to top after completion
                    currentTypingTimeout = setTimeout(() => {
                        if (textBox.scrollTop > 0 && isTyping) {
                            textBox.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            });
                        }
                    }, 1000);
                }
                
                currentTypingTimeout = setTimeout(() => {
                    if (cursorElement && isTyping) {
                        cursorElement.style.display = 'none';
                    }
                }, 2000);
            }
            return;
        }
        
        textElement.textContent = text.substring(0, currentIndex + 1);
        currentIndex++;
        
        // Variable speed for punctuation
        let delay = typingSpeed;
        const currentChar = text[currentIndex - 1];
        
        if (currentChar === '.' || currentChar === '!' || currentChar === '?') {
            delay = typingSpeed * 6; // Shorter pause at sentence endings
        } else if (currentChar === ',' || currentChar === ';' || currentChar === ':') {
            delay = typingSpeed * 2.5; // Shorter pause at commas
        } else if (currentChar === ' ') {
            delay = typingSpeed * 0.4; // Faster for spaces
        }
        
        // Auto-scroll to keep text visible
        if (textBox && textBox.scrollHeight > textBox.clientHeight && isTyping) {
            textBox.scrollTop = textBox.scrollHeight;
        }
        
        currentTypingTimeout = setTimeout(typeCharacter, delay);
    }
    
    // Start typing after a brief delay
    currentTypingTimeout = setTimeout(typeCharacter, 800);
}

// Add scroll-triggered color effects
function initScrollColorEffects() {
    let scrollTimeout;
    
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        
        scrollTimeout = setTimeout(() => {
            const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
            
            // Trigger subtle color effects based on scroll position
            if (scrollPercent > 0.2 && scrollPercent < 0.8) {
                const strips = document.querySelectorAll('.color-strip');
                strips.forEach((strip, index) => {
                    const delay = Math.random() * 200;
                    setTimeout(() => {
                        strip.style.transform = `translateX(-90%) skewX(-15deg) scale(1.02)`;
                        setTimeout(() => {
                            strip.style.transform = `translateX(-100%) skewX(-15deg) scale(1)`;
                        }, 300);
                    }, delay);
                });
            }
        }, 100);
    });
}

// Initialize scroll effects on all pages
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initScrollColorEffects, 3000);
    
    // Initialize mascot gallery if on history page
    if (window.location.pathname.includes('history.html')) {
        initializeMascotGallery();
    }
});

// Mascot Gallery Data
const mascotImages = [
    {
        src: 'images/mascot/1002444049.jpg',
        title: 'Fire Spitting Dragon',
        description: 'The legendary mascot of the 82 Division, embodying strength, courage, and the firepower that defines our unit.'
    },
    {
        src: 'images/mascot/1002444050.jpg',
        title: 'Symbol of Strength',
        description: 'Representing the unwavering resolve and military prowess of the 82 Division Nigerian Army.'
    },
    {
        src: 'images/mascot/1002444051.jpg',
        title: 'Embodiment of Courage',
        description: 'Inspiring soldiers to face challenges with valor and determination in service of the nation.'
    },
    {
        src: 'images/mascot/1002444061.jpg',
        title: 'Guardian of the Nation',
        description: 'Standing as a testament to the Division\'s unwavering commitment to Nigeria\'s safety and well-being.'
    }
];

let currentImageIndex = 0;

// Initialize Mascot Gallery
function initializeMascotGallery() {
    const mascotImageContainers = document.querySelectorAll('.mascot-image-container');
    
    mascotImageContainers.forEach((container, index) => {
        container.addEventListener('click', () => {
            openModal(index);
        });
        
        // Add hover effects
        container.addEventListener('mouseenter', function() {
            triggerHoverColorEffect(this);
        });
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
}

// Open Modal with Image
function openModal(imageIndex) {
    currentImageIndex = imageIndex;
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    if (!modal || !modalImage || !modalTitle || !modalDescription) return;
    
    // Set image data
    const imageData = mascotImages[imageIndex];
    modalImage.src = imageData.src;
    modalImage.alt = imageData.title;
    modalTitle.textContent = imageData.title;
    modalDescription.textContent = imageData.description;
    
    // Show modal with animation
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Trigger animation
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    // Trigger color transition effect
    triggerModalColorEffect();
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    if (!modal) return;
    
    modal.classList.add('hide');
    modal.classList.remove('show');
    
    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('hide');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }, 300);
}

// Navigate to Previous Image
function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + mascotImages.length) % mascotImages.length;
    updateModalImage();
}

// Navigate to Next Image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % mascotImages.length;
    updateModalImage();
}

// Update Modal Image
function updateModalImage() {
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    if (!modalImage || !modalTitle || !modalDescription) return;
    
    const imageData = mascotImages[currentImageIndex];
    
    // Add transition effect
    modalImage.style.opacity = '0';
    modalImage.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        modalImage.src = imageData.src;
        modalImage.alt = imageData.title;
        modalTitle.textContent = imageData.title;
        modalDescription.textContent = imageData.description;
        
        modalImage.style.opacity = '1';
        modalImage.style.transform = 'scale(1)';
    }, 150);
    
    // Trigger color effect
    triggerModalColorEffect();
}

// Handle Keyboard Navigation
function handleKeyboardNavigation(event) {
    const modal = document.getElementById('imageModal');
    if (!modal || !modal.classList.contains('show')) return;
    
    switch(event.key) {
        case 'Escape':
            closeModal();
            break;
        case 'ArrowLeft':
            previousImage();
            break;
        case 'ArrowRight':
            nextImage();
            break;
    }
}

// Trigger Modal Color Effect
function triggerModalColorEffect() {
    const modal = document.getElementById('imageModal');
    if (!modal) return;
    
    // Create a color pulse effect
    const colorPulse = document.createElement('div');
    colorPulse.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at center, 
            rgba(248, 230, 29, 0.1) 0%, 
            rgba(1, 135, 176, 0.05) 30%, 
            transparent 70%);
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        animation: colorPulse 1s ease-out;
    `;
    
    modal.appendChild(colorPulse);
    
    // Remove after animation
    setTimeout(() => {
        if (colorPulse.parentNode) {
            colorPulse.parentNode.removeChild(colorPulse);
        }
    }, 1000);
}

// Add CSS animation for color pulse
const style = document.createElement('style');
style.textContent = `
    @keyframes colorPulse {
        0% {
            opacity: 0;
            transform: scale(0.8);
        }
        50% {
            opacity: 1;
            transform: scale(1.1);
        }
        100% {
            opacity: 0;
            transform: scale(1.2);
        }
    }
`;
document.head.appendChild(style);