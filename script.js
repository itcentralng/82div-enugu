// Commander data
const commanders = [
    {
        id: 1,
        name: "LATE BRIG GEN GGA ALLY (N/276) RETIRED",
        image: "images/ally.jpg",
        yearOfService: "1973-1975",
        biography: "Late Brig Gen Godwin Gregory Aja Ally (Retired) was born on 2 Jan 40 in Okorotung and hails from Obudu Local Government Area of Cross River State. He attended the Mons Officer Cadet School Aldershot, UK and was later transferred to Royal Military Academy Sandhurst (RMAS) as a member of Commissioning Course 62. He was granted Regular Combatant Commission from RMAS into the Nigerian Army Corps of Supply and Transport on 4 Aug 62. He was appointed Commander Lagos Garrison Organisation (Defunct) on 15 Dec 73. Late Brig Gen Godwin Gregory Aja Ally (Retired) was highly recognised and honoured for his exemplary leadership, professionalism and significant contributions to both Nigerian Army and the nation at large."
    },
    {
        id: 2,
        name: "MAJ GEN OE OBADA (N/278) RETIRED",
        image: "images/obada.jpg",
        yearOfService: "1975-1976",
        biography: "Maj Gen Orho Esio Obada (Retired) was born on 3 Apr 39 in Ikwewhu (Agbadu) and hails from Ughelli North Local Government Area of Delta State. He was enlisted into the Nigerian Army in 1959 and was subsequently granted Regular Combatant Commission on 4 Aug 62, having trained as a member of Commissioning Course 62 at the Royal Military Academy Sandhurst (RMAS). He was commissioned from RMAS into the Nigerian Army Infantry Corps and later attended Command and Staff Course at the Joint Services Staff College, UK. He was appointed the First General Officer Commanding 4 Infantry Division on 7 Aug 75. Maj Gen Orho Esio Obada was highly recognized and honoured for his exemplary leadership, professionalism and significant contributions to both Nigerian Army and the nation at large."
    },
    {
        id: 3,
        name: "LATE LT GEN MI WUSHISHI (N/233) RETIRED",
        image: "images/wushishi.jpg",
        yearOfService: "1976-1978",
        biography: "Late Lt Gen Muhammadu Inuwa Wushishi (Retired) was born on 1 Jan 40 in Wushishi and hailed from Wushishi Local Government Area of Niger State. He started his military training at the Nigerian Military Training Centre Kaduna on 12 Apr 61 and proceeded to Mons Officer Cadet School, Aldershot in United Kingdom from 1961 to 1962 for further training. He was granted Short Service Combatant Commission on 12 Jan 62 in the rank of second lieutenant with seniority on the rank effective same date. He converted to Regular Combatant Commission on 18 Jan 63. He was appointed the Second General Officer Commanding 4 Infantry Division on 30 May 76. He was a forthright gentleman and a professional infantry officer who proved to be trustworthy and ingenuous."
    },
    {
        id: 4,
        name: "LATE GEN DY BALI (N/453) RETIRED",
        image: "images/bali.jpg",
        yearOfService: "1978-1980",
        biography: "Late Gen Domkat Yah Bali (Retired) was born on 27 Feb 40 in Zamko and hailed from Zamko Local Government Area of Plateau State. He attended the Nigerian Military Training College, Kaduna for his potential officer training course and later proceeded to the Royal Military Academy Sandhurst, England. He was subsequently granted Regular Combatant Commission into the Artillery Corps on 12 Dec 63. He was appointed the Third General Officer Commanding 4 Infantry Division on 1 Sep 78. Late Gen Domkat Yah Bali (Retired) had a resolute and forthright disposition which made him a very good asset to Nigeria at large."
    },
    {
        id: 5,
        name: "LATE MAJ GEN M BUHARI (N/308) RETIRED",
        image: "images/buhari.jpg",
        yearOfService: "1980-1981",
        biography: "Late Maj Gen Muhammadu Buhari (Retired) was born on 17 Dec 42 in Daura and hailed from Daura Local Government Area of Katsina State. He started his military training at the Nigerian Military Training College, Kaduna and completed the training at Mons Officer Cadet School, Aldershot, United Kingdom where he was commissioned in the rank of second lieutenant on 26 Jan 63. He was appointed the Fourth General Officer Commanding 4 Infantry Division on 9 Jul 80. After retirement, Maj Gen M Buhari was democratically elected as the Fifteenth President and Commander in Chief of the Armed Forces of Nigeria from 2015–2023."
    },
    {
        id: 6,
        name: "MAJ GEN AO ADULOJU (N/396) RETIRED",
        image: "images/adunloju.jpg",
        yearOfService: "1981",
        biography: "Maj Gen Alfred Olasehinde Aduloju (Retired) was born on 23 Apr 39 in Ikare and hails from Ikare Akoko Local Government Area of Ondo State. He attended the Nigerian Military Training College, Kaduna for his potential officer training course and later transferred to the Royal Canadian School of Infantry, Ontario. He was later granted Regular Combatant Commission from the Royal Canadian School of Signals into the Nigerian Army Signals on 16 Aug 63. He was appointed the Fifth General Officer Commanding 4 Infantry Division on 5 Jan 81. Maj Gen Alfred Olasehinde Aduloju (Retired) worked tirelessly to bring the Division to an enviable position in the Nigerian Army."
    },
    {
        id: 7,
        name: "MAJ GEN Z LEKWOT (N/620) RETIRED",
        image: "images/lekwot.jpg",
        yearOfService: "1981-1984",
        biography: "Maj Gen Zamani Lekwot (Retired) was born on 18 Jul 44 in Jankasa and hails from Zango Kataf Local Government Area of Kaduna State. He was enlisted into the Nigerian Army on 10 Jan 59 and later proceeded to the National Defence Academy, India for his officer cadet training. He was, thereafter, granted Regular Combatant Commission on 14 Jun 66 and commissioned into the Infantry Corps. He was appointed the Sixth General Officer Commanding 82 Composite Division on 1 Nov 81. Maj Gen Zamani Lekwot's dedication to his responsibilities set a high standard within his years of service which represented a model of commitment."
    },
    {
        id: 8,
        name: "MAJ GEN YY KURE (N/552) RETIRED",
        image: "images/kure.jpg",
        yearOfService: "1984-1985",
        biography: "Maj Gen Yohanna Yerima Kure (Retired) was born on 16 Apr 42 and hails from Kachia Local Government Area of Kaduna State. He attended the Nigerian Military Training College, Kaduna for his potential officer training course and later transferred to the Officer Cadet School Port Sea, Australia. He was subsequently granted Regular Combatant Commission into the Infantry Corps on 11 Dec 64. He was appointed the Seventh General Officer Commanding 82 Composite Division on 9 Sep 84. Maj Gen Yohanna Yerima Kure (Retired) maintained a very amenable standard of professionalism and discipline in the Nigerian Army."
    },
    {
        id: 9,
        name: "LATE LT GEN OO DIYA (N/671) RETIRED",
        image: "images/diya.jpg",
        yearOfService: "1985-1987",
        biography: "Late Lt Gen Donaldson Oladipo Diya (Retired) was born on 3 Apr 44 in Odogbolu and hailed from Ijebu Ode Local Government Area of Ogun State. He was granted Regular Combatant Commission as a member of 1 Regular Course into the Infantry Corps on 19 Mar 67 in the rank of second lieutenant with seniority on the rank effective 14 Mar 64. He was appointed the Eighth General Officer Commanding 82 Division on 16 Sep 85. Late Lt Gen Donaldson Oladipo Diya (Retired) demonstrated commendable zeal and enthusiasm towards his responsibilities. His degree of professional competence was very impressive."
    },
    {
        id: 10,
        name: "LATE MAJ GEN MS SAMI (N/378) RETIRED",
        image: "images/sami.jpg",
        yearOfService: "1987-1988",
        biography: "Late Maj Gen Mohammed Sani Sami (Retired) was born on 24 Oct 43 in Zuru and hailed from Zuru Local Government Area of Kebbi State. He started his military training at the Nigerian Military Training College, Kaduna and completed the training at Mons Officer Cadet School, Aldershot, United Kingdom where he was commissioned in the rank of second lieutenant on 25 Jul 63. He was appointed the Ninth General Officer Commanding 82 Division on 31 Dec 87. Late Maj Gen Mohammed Sani Sami (Retired) was approachable and exercised sound discretion in accomplishing tasks. He demonstrated keenness and readiness to lead his men gallantly."
    },
    {
        id: 11,
        name: "GEN AA ABUBAKAR (N/757) RETIRED",
        image: "images/abubakar.jpg",
        yearOfService: "1988-1990",
        biography: "Gen Abdulsalami Alhaji Abubakar (Retired) was born on 13 Jun 42 in Minna and hails from Bichi Local Government Area of Niger State. He was granted Short Service Combatant Commission as a member of Short Service Combatant Course 2 into the Infantry Corps on 20 Oct 67 in the rank of second lieutenant with seniority on the rank effective 28 Sep 65. He was appointed the Tenth General Officer Commanding 82 Division on 25 Oct 88. He later became the Head of State, Commander in Chief of the Armed Forces where he contributed immensely to the improvement of the Armed Forces and the development of the Nation."
    },
    {
        id: 12,
        name: "LATE LT GEN S IBRAHIM (N/656) RETIRED",
        image: "images/s_ibrahim.jpg",
        yearOfService: "1990",
        biography: "Late Lt Gen Salihu Ibrahim (Retired) was born on 26 Mar 43 in Egayin-Okene and hailed from Okene Local Government Area of Kogi State. He attended the Nigerian Military Training College, Kaduna as a member of the 1 Regular Course. He was granted Regular Combatant Commission into the Infantry Corps on 19 Mar 67. He was appointed the Eleventh General Officer Commanding 82 Division on 2 Jan 90. He was later appointed Chief of Army Staff on 3 Sep 90 before his disengagement from Service on 17 Sep 93. Late Lt Gen Salihu Ibrahim (Retired) was a professionally competent officer who maintained a very enviable standard throughout his career."
    },
    {
        id: 13,
        name: "MAJ GEN CA GARUBA (N/1363) RETIRED",
        image: "images/garba.jpg",
        yearOfService: "1990-1993",
        biography: "Maj Gen Chris Abutu Garuba (Retired) was born on 8 Apr 48 in Ipole and hails from Otukpo Local Government Area of Benue State. He was enlisted into the Nigerian Army on 15 Aug 67 and later proceeded to the Nigerian Defence Academy for his officer cadet training. He was granted Regular Combatant Commission as a member of 3 Regular Course on 14 Mar 70 into the Nigerian Army Corps of Artillery. He was appointed the Twelfth General Officer Commanding 82 Composite Division on 3 Sep 90. Maj Gen Chris Abutu Garuba (Retired) was highly recognised and honoured for his exemplary leadership qualities and intellect."
    },
    {
        id: 14,
        name: "MAJ GEN TM SHELPIDI (N/1373) RETIRED",
        image: "images/shelpidi.jpg",
        yearOfService: "1993-1996",
        biography: "Maj Gen Timothy Mai Shelpidi (Retired) was born on 4 Sep 48 in Kaltungo and hails from Kaltungo Local Government Area of Bauchi State. He was enlisted into the Nigerian Army on 30 Aug 67 and later proceeded to the Nigerian Defence Academy for his officer cadet training. He was granted Regular Combatant Commission as a member of 3 Regular Course on 14 Mar 70 into the Infantry Corps. He was appointed the Thirteenth General Officer Commanding 82 Division on 20 Sep 93. Maj Gen Timothy Mai Shelpidi (Retired) was highly recognised and honoured for his exemplary leadership qualities, high sense of commitment and comportment which distinguished him as an outstanding senior officer."
    },
    {
        id: 15,
        name: "LATE LT GEN SVL MALU (N/1372) RETIRED",
        image: "images/malu.jpg",
        yearOfService: "1996-1998",
        biography: "Late Lt Gen Samuel Victor Leo Malu (Retired) was born on 15 Jan 47 in Zaki-Biam and hailed from Katsina-Ala Local Government Area of Benue State. He was granted Regular Combatant commission into the Infantry Corps as a member of 3 Regular Course on 14 Mar 70 in the rank of lieutenant with seniority on the rank effective 30 Aug 67. He was appointed the Fourteenth General Officer Commanding 82 Division on 8 Jan 98. He later served as Chief of Army Staff before his disengagement from Service on 24 Apr 01."
    },
    {
        id: 16,
        name: "MAJ GEN FA MUJAKPERUO (N/1994) RETIRED",
        image: "images/mujakperou.jpg",
        yearOfService: "1996-1998",
        biography: "Maj Gen Felix Agho Mujakperuo (Retired) was born on 4 Dec 46 and hails from Okpe Local Government Area of Delta State. He was enlisted into the Nigerian Army on 1 Oct 68 and later proceeded to the Nigerian Defence Academy for his officer cadet training. He was subsequently granted Regular Combatant Commission as a member of 5 Regular Course on 13 Mar 71 into the Infantry Corps before he transferred to the Nigerian Army Corps of Military Police. He was appointed the Fifteenth General Officer Commanding 82 Division on 29 Jul 96. Maj Gen Felix Agho Mujakperuo (Retired) was highly recognised and honoured for his exemplary leadership qualities."
    },
    {
        id: 17,
        name: "MAJ GEN OLADAYO POPOOLA (N/797) RETIRED",
        image: "images/popoola.jpg",
        yearOfService: "1998-1999",
        biography: "Maj Gen Oladayo Popoola (Retired) was born on 26 Feb 44 in Ogbomosho and hails from Ogbomosho North Local Government Area of Oyo State. He was granted Emergency Combatant Short Service Commission into the Infantry Corps as a member of Emergency Combatant Commission 3/1968 on 29 Feb 68 in the rank of second lieutenant. He was appointed the Sixteenth General Officer Commanding 82 Division on 10 Jul 98 before his retirement on 1 Jun 99. He demonstrated exceptional knowledge, intelligence and leadership qualities that set him apart."
    },
    {
        id: 18,
        name: "MAJ GEN AA SANGOTADE (N/2266) RETIRED",
        image: "images/sangotade.jpg",
        yearOfService: "1999-2002",
        biography: "Maj Gen Adeniyi Adewale Sangotade (Retired) was born on 3 Aug 47 in Ebute Metta and hails from Mainland Local Government Area of Lagos State. He was granted Regular Combatant Commission as a member of 6 Regular Course on 11 Sep 71 into the Infantry Corps. He was appointed the Seventeenth General Officer Commanding 82 Division on 19 Jul 99 before his retirement on 3 Nov 02. He consistently exhibited remarkable leadership qualities and professionalism that distinguished him in command."
    },
    {
        id: 19,
        name: "MAJ GEN BA JINADU (N/1933) RETIRED",
        image: "images/jinadu.jpg",
        yearOfService: "2002-2004",
        biography: "Maj Gen Bashiru Akanni Jinadu (Retired) was born on 17 Nov 50 in Lagos and hails from Obafemi-Owode Local Government Area of Ogun State. He attended the Mons Officer Cadet School Aldershot, UK and was later granted Short Service Combatant Commission as an infantry officer on 6 Feb 71 in the rank of second lieutenant. He was appointed the Eighteenth General Officer Commanding 82 Division on 4 Nov 02. He consistently demonstrated exceptional leadership, integrity and dedication throughout his career."
    },
    {
        id: 20,
        name: "LATE MAJ GEN RA ADESHINA (N/2334) RETIRED",
        image: "images/adeshina.jpg",
        yearOfService: "2004",
        biography: "Late Maj Gen Rafiu Abdul Adeshina (Retired) was born on 1 Jun 51 in Abeokuta and hailed from Abeokuta Local Government Area of Ogun State. He enlisted into the Nigerian Army on 8 Feb 69 and was later granted Short Service Combatant Commission on 11 Sep 71 into the Infantry Corps as a member of Short Service Combatant Course 2 in the rank of second lieutenant. He was appointed the Nineteenth General Officer Commanding 82 Division on 17 Mar 04 before his retirement on 31 Dec 04. He was a disciplined, intelligent and hardworking officer who consistently demonstrated sound leadership, professionalism and integrity."
    },
    {
        id: 21,
        name: "MAJ GEN AG ADEWUYI (N/3113) RETIRED",
        image: "images/adewuyi.jpg",
        yearOfService: "2004-2006",
        biography: "Maj Gen Abdul-Hafeez Gbadegesin Adewuyi (Retired) was born on 1 Mar 53 in Lagos and hails from Ojo Ajeromi Local Government Area of Lagos State. He was granted Regular Combatant Commission into the Nigerian Army Engineers as a member of 11 Regular Course on 8 Mar 74 in the rank of second lieutenant. He was appointed the Twentieth General Officer Commanding 82 Division on 3 Sep 04. He discharged his duties with marked dedication, innovation and efficiency."
    },
    {
        id: 22,
        name: "MAJ GEN SU ATAWODI (N/5579) RETIRED",
        image: "images/atawodi.jpg",
        yearOfService: "2006-2007",
        biography: "Maj Gen Samuel Usman Atawodi (Retired) was born on 5 Jan 52 in Inye-Ankpa and hails from Ankpa Local Government Area of Kogi State. He was granted Regular Combatant Commission as a member of 15 Regular Course on 19 Jun 76 in the rank of second lieutenant and was of the Nigerian Army Engineers. He was appointed the Twenty First General Officer Commanding 82 Division on 10 Jul 06. He was a versatile, meticulous, intelligent and resourceful officer who consistently demonstrated professional competence and sound judgment under challenging circumstances."
    },
    {
        id: 23,
        name: "MAJ GEN AT IBRAHIM (N/5580) RETIRED",
        image: "images/ibrahim.jpg",
        yearOfService: "2007-2008",
        biography: "Maj Gen Adamu Tubase Ibrahim (Retired) was born on 25 Oct 54 in Wukari and hails from Wukari Local Government Area of Taraba State. He was granted Regular Combatant Commission into the Nigerian Army Corps of Artillery as a member of 15 Regular Course on 19 Jun 76 in the rank of second lieutenant. He was appointed the Twenty Second General Officer Commanding 82 Division on 20 Aug 07 before his retirement on 31 Dec 08. His leadership was marked by operational efficiency, administrative competence and the capacity to manage resources prudently while driving infrastructural and training improvements."
    },
    {
        id: 24,
        name: "LATE MAJ GEN MD ISAH (N/6186) RETIRED",
        image: "images/isah.jpg",
        yearOfService: "2009-2010",
        biography: "Late Maj Gen Mohammed Dan-Hanne Isah (Retired) was born on 16 Sep 56 in Ribah and hailed from Danko-Wasagu Local Government Area of Kebbi State. He was granted Regular Combatant Commission into the Infantry Corps as a member of 20 Regular Course on 16 Dec 78 in the rank of second lieutenant. He was appointed the Twenty Third General Officer Commanding 82 Division on 26 Jan 09. His dedication to high training standards, resourcefulness and concern for the welfare of subordinates was exemplary."
    },
    {
        id: 25,
        name: "MAJ GEN SY BELLO (N/6367) RETIRED",
        image: "images/bello.jpg",
        yearOfService: "2010-2011",
        biography: "Maj Gen Sarkin-Yaki Bello (Retired) was born on 2 Feb 57 in Birnin-Kebbi and hails from Birnin-Kebbi Local Government Area of Kebbi State. He was granted Regular Combatant Commission into the Nigerian Army Corps of Military Police as a member of 22 Regular Course on 15 Dec 79 in the rank of second lieutenant. He was appointed the Twenty Fourth General Officer Commanding 82 Division on 24 Sep 10. He was a bold, decisive and highly effective operational commander whose visionary planning and energetic leadership sustained security gains across the South-East and South-South."
    },
    {
        id: 26,
        name: "MAJ GEN SO IDOKO (N/6178) RETIRED",
        image: "images/idoko.jpg",
        yearOfService: "2011-2012",
        biography: "Maj Gen Sunday Onwoichoche Idoko (Retired) was born on 2 Feb 57 in Adokpe and hails from Ogbadibo Local Government Area of Benue State. He was granted Regular Combatant Commission into the Nigerian Army Armour Corps as a member of 20 Regular Course on 16 Dec 78 in the rank of second lieutenant. He was appointed the Twenty Fifth General Officer Commanding 82 Division on 1 Jan 11. He was a principled and disciplined officer who embodied professionalism, intelligence and dedication. He equally inspired confidence in his subordinates."
    },
    {
        id: 27,
        name: "MAJ GEN OO OSHINOWO (N/6733) RETIRED",
        image: "images/oshinowo.jpg",
        yearOfService: "2012-2013",
        biography: "Maj Gen Oluwaseun Olayinka Oshinowo (Retired) was born on 20 Jan 57 in Ibadan and hails from Ikorodu Local Government Area of Lagos State. He was granted Regular Combatant Commission as a member of 24 Regular Course on 19 Jun 81 in the rank of second lieutenant and was of the Nigerian Army Armoured Corps. He was appointed Twenty Sixth General Officer Commanding 82 Division on 14 Sep 12 before his retirement on 20 Jan 13. He was an intelligent, disciplined and highly professional officer whose career reflected consistent excellence."
    },
    {
        id: 28,
        name: "MAJ GEN AA OLANIYI (N/6605) RETIRED",
        image: "images/olaniyi.jpg",
        yearOfService: "2013-2014",
        biography: "Maj Gen Ashimiyu Adebayo Olaniyi (Retired) was born on 29 Jan 58 in Ibadan and hails from Ona-Ara Local Government Area of Oyo State. He was admitted into the Nigerian Defence Academy on 9 Jan 78 and was granted Regular Combatant Commission as a member of 23 Regular Combatant Course on 19 Dec 80 into the Nigerian Army Engineers. He was appointed the Twenty Eighth General Officer Commanding 82 Division on 26 Jan 13 before his retirement from Service on 10 Apr 14. As the GOC 82 Div, he successfully rehabilitated and furnished 82 Division officers' Mess and produced updated maps for Aba and Port Harcourt which boosted the operational capacity of the Division. He remarkably initiated several concepts that drastically reduced the menace of oil theft, pipeline vandalism, armed robbery and kidnapping in 82 Div AOR."
    },
    {
        id: 29,
        name: "MAJ GEN S YUSUF (N/7876) RETIRED",
        image: "images/yusuf.jpg",
        yearOfService: "2013-2016",
        biography: "Maj Gen Shehu Yusuf (Retired) was born on 31 Oct 61 in Kano and hails from Nasarawa Local Government Area of Kano State. He was admitted into the Nigerian Defence Academy on 2 Jan 82 and was granted Regular Combatant Commission into the Infantry Corps as a member of 31 Regular Combatant Course on 22 Dec 84. He was appointed the Twenty Ninth General Officer Commanding 82 Division on 26 Dec 13 before his retirement from Service on 22 Feb 16. Maj Gen Shehu Yusuf (Retired) was highly recognised and honoured for his exemplary leadership, administrative skills, operational capability and knack for transformation."
    },
    {
        id: 30,
        name: "LATE LT GEN I ATTAHIRU (N/8406)",
        image: "images/attahiru.jpg",
        yearOfService: "2015-2016",
        biography: "Late Lt Gen Ibrahim Attahiru was born on 10 Aug 66 in Doka and hailed from Kaduna North Local Government Area of Kaduna State. He was admitted into the Nigerian Defence Academy on 19 Jan 84 and was granted Regular Combatant Commission into the Infantry Corps as a member of 35 Regular Combatant Course on 20 Dec 86. He was appointed Acting General Officer Commanding 82 Division on 10 Aug 15 and later appointed the Thirtieth General Officer Commanding 82 Division on 31 Dec 15. He was later appointed the Twenty First COAS on 26 Jan 21 before his death in the line of active service on 21 May 21. Late Lt Gen Ibrahim Attahiru was highly recognised and honoured for his exemplary leadership, outstanding military bearing, professionalism, skills and diligence in carrying out assigned tasks."
    },
    {
        id: 31,
        name: "MAJ GEN AB ABUBAKAR (N/7856) RETIRED",
        image: "images/ab_abubakar.jpg",
        yearOfService: "2016-2018",
        biography: "Maj Gen Adamu Baba Abubakar (Retired) was born on 5 Oct 62 in Lagos and hails from Funtua Local Government Area of Katsina State. He was admitted into the Nigerian Defence Academy on 9 Jan 78 and was granted Regular Combatant Commission as a member of 31 Regular Combatant Course on 22 Dec 84. He was appointed the Thirty-First General Officer Commanding 82 Division on 10 Dec 16 before his retirement from service on 5 Oct 18. Maj Gen Adamu Baba Abubakar (Retired) was highly recognised and honoured for his exemplary leadership, exceptional intelligence, and professional qualities of commitment, determination and toughness."
    },
    {
        id: 32,
        name: "MAJ GEN EB KABUK (N/8409) RETIRED",
        image: "images/kabuk.jpg",
        yearOfService: "2018",
        biography: "Maj Gen Emmanuel Boman Kabuk (Retired) was born on 18 Dec 62 in Kafanchan and hails from Jemma'a Local Government Area of Kaduna State. He was admitted into the Nigerian Defence Academy on 19 Jan 84 and was granted Regular Combatant Commission into the Nigerian Army Signals as a member of 35 Regular Combatant Course on 20 Dec 86. He was appointed the Thirty-Second General Officer Commanding 82 Division on 1 Aug 18. Maj Gen Emmanuel Boman Kabuk (Retired) was highly recognised and honoured for his exemplary leadership, intelligence, outstanding administrative skills and diligence in executing assigned tasks."
    },
    {
        id: 33,
        name: "MAJ GEN AS MAIKOBI (N/8460) RETIRED",
        image: "images/maikobi.jpg",
        yearOfService: "2018-2019",
        biography: "Maj Gen Abubakar Sadiq Maikobi (Retired) was born on 6 Jun 66 in Bauchi and hails from Bauchi Local Government Area of Bauchi State. He was admitted into the Nigerian Defence Academy on 19 Jan 84 and granted Regular Combatant Commission into the Infantry Corps as a member of 35 Regular Combatant Course on 20 Dec 86. He was appointed the Thirty-Third General Officer Commanding 82 Division on 18 Dec 18. Maj Gen Abubakar Sadiq Maikobi (Retired) was highly recognised and honoured for his exemplary leadership, sound administration, professionalism, skills and diligence in carrying out assigned tasks which earned him commendations."
    },
    {
        id: 34,
        name: "MAJ GEN LA ADEGBOYE (N/8645) RETIRED",
        image: "images/adegboye.jpg",
        yearOfService: "2019-2021",
        biography: "Maj Gen Lasisi Adejare Adegboye (Retired) was born on 24 May 64 in Agbeye and hails from Odo-Otin Local Government Area of Osun State. He was admitted into the Nigerian Defence Academy on 24 Sep 84 and was granted Regular Combatant Commission into the Infantry Corps as a member of 36 Regular Combatant Course on 19 Dec 87. He was appointed Acting General Officer Commanding 82 Division on 5 Sep 19 and later, appointed the Thirty-Fourth General Officer Commanding 82 Division on 19 Dec 19. Maj Gen Lasisi Adejare Adegboye (Retired) was highly recognised and honoured for his exemplary leadership, sacrifice, sound organisational ability, high level of integrity and outstanding positive attitude to work."
    },
    {
        id: 35,
        name: "LATE LT GEN TA LAGBAJA (N/9322)",
        image: "images/lagbaja.jpg",
        yearOfService: "2021-2022",
        biography: "Late Lt Gen Taoreed Abiodun Lagbaja was born on 28 Feb 68 in Ilobu and hailed from Irepodun Local Government Area of Osun State. He was admitted into the Nigerian Defence Academy on 12 Sep 87 and was granted Regular Combatant Commission into the Infantry Corps as a member of 39 Regular Combatant Course on 19 Sep 92. He was appointed the Thirty-Fifth General Officer Commanding 82 Division on 10 Mar 21 where his exceptional leadership, gallantry and extensive operational expertise coupled with his intellectual acumen was brought to bear. His outstanding achievements over the years cemented his leadership legacy which led to his appointment as the Chief of Army Staff on 23 Jun 23, before his death in the line of active service on 5 Nov 24. Lt Gen Taoreed Abiodun Lagbaja was highly recognised and honoured for his exemplary leadership, outstanding military bearing and dedication to duty."
    },
    {
        id: 36,
        name: "MAJ GEN UT MUSA (N/9185) RETIRED",
        image: "images/musa.jpg",
        yearOfService: "2022-2023",
        biography: "Maj Gen Umar Thama Musa (Retired) was born on 10 Apr 68 in Ngulde and hails from Askira Local Government Area of Borno State. He was admitted into the Nigerian Defence Academy on 21 Sep 86 and was granted Regular Combatant Commission into the Infantry Corps as a member of 38 Regular Combatant Course on 21 Sep 91. He was appointed Acting General Officer Commanding 82 Division on 17 Jan 22 and later, appointed the Thirty-Sixth General Officer Commanding 82 Division on 3 Aug 22. Maj Gen Umar Thama Musa (Retired) was highly recognised and honoured for his exemplary leadership, professionalism, selflessness and unwavering commitment to duty which inspired all that had the privilege of serving under his command."
    },
    {
        id: 37,
        name: "MAJ GEN AS CHINADE (N/9710)",
        image: "images/chinade.jpg",
        yearOfService: "2023",
        biography: "Maj Gen Aminu Shehu Chinade was born on 23 Mar 67 in Chinade Town and hails from Katagum Local Government Area of Bauchi State. He was admitted into the Nigerian Defence Academy on 10 Sep 88 and was granted Regular Combatant Commission into the Infantry Corps as a member of 40 Regular Combatant Course on 25 Sep 93. He was appointed the Thirty-Seventh General Officer Commanding 82 Division on 11 Jan 23. Maj Gen Aminu Shehu Chinade was highly recognised and honoured for his exemplary leadership, resourcefulness, professionalism and outstanding performance which earned him several letters of commendation."
    },
    {
        id: 38,
        name: "MAJ GEN HT DADA (N/9700)",
        image: "images/dada.jpg",
        yearOfService: "2023-2025",
        biography: "Maj Gen Hassan Taiwo Dada was born on 21 Mar 71 in Ilaro/Abeokuta and hails from Egbado South Local Government Area of Ogun State. He was admitted into the Nigerian Defence Academy on 10 Sep 88 and was granted Regular Combatant Commission into the Infantry Corps as a member of 40 Regular Combatant Course on 25 Sep 93. He was appointed the Thirty-Eight General Officer Commanding 82 Division on 3 Sep 23. Maj Gen Hassan Taiwo Dada was highly recognised and honoured for his exemplary leadership, outstanding military bearing, professionalism, skills and diligence to duty."
    },
    {
        id: 39,
        name: "MAJ GEN OT OLATOYE (N/9907)",
        image: "images/olatoye.jpg",
        yearOfService: "2025-Present",
        biography: "Maj Gen Oluyemi Thomas Olatoye was born on 4 Jan 71 in Ibadan and hails from Obafemi Owode Local Government Area of Ogun State. He was admitted into the prestigious Nigerian Defence Academy on 10 Sep 89 as a member of 41 Regular Course and was commissioned into the Nigerian Army Infantry Corp as a Second Lieutenant on 17 Sep 94. He was appointed as the Thirty Ninth General Officer Commanding 82 Division and Force Commander Joint Task Force (South East) Operation UDO KA on 27 Jan 25. Maj Gen Oluyemi Thomas Olatoye is highly recognised and honoured for his exemplary leadership, professionalism, unwavering commitment to duty, sound organisational ability and strict military bearing."
    }
];

// DOM elements
const historyLink = document.getElementById('historyLink');
const commandersGrid = document.getElementById('commandersGrid');
const biographyContent = document.getElementById('biographyContent');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    
    // Initialize color transition system
    initializeColorTransitions();
    
    if (currentPage === 'index.html' || currentPage === '') {
        initializeHomePage();
    } else if (currentPage === 'biography.html') {
        initializeBiographyPage();
    }
});

// Initialize home page
function initializeHomePage() {
    // Add event listener for header card (replaces separate logo and history listeners)
    const headerCard = document.querySelector('.header-card');
    if (headerCard) {
        headerCard.addEventListener('click', goToHistoryWithTransition);
        headerCard.addEventListener('mouseenter', function() {
            triggerHoverColorEffect(this);
        });
    }
    
    // Keep logo click for backward compatibility (if someone clicks just the logo)
    const logo = document.getElementById('logo');
    if (logo) {
        logo.addEventListener('click', goToHistoryWithTransition);
        logo.addEventListener('mouseenter', function() {
            triggerHoverColorEffect(this);
        });
    }
    
    // Typing animation removed - using static text now
    
    // Populate commanders grid
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

// Initialize biography page
function initializeBiographyPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const commanderId = parseInt(urlParams.get('id'));
    
    if (commanderId) {
        displayBiography(commanderId);
    } else {
        // If no ID provided, show first commander by default
        displayBiography(1);
    }
}

// Populate commanders grid
function populateCommanders() {
    commandersGrid.innerHTML = '';
    
    commanders.forEach(commander => {
        const commanderCard = document.createElement('div');
        commanderCard.className = 'commander-card';
        commanderCard.onclick = () => goToBiographyWithTransition(commander.id);
        commanderCard.addEventListener('mouseenter', function() {
            triggerHoverColorEffect(this);
        });
        
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
    });
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
        serviceElement.textContent = `Service Period: ${commander.yearOfService}`;
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
    
    // Wait for animation to complete, then slide out
    setTimeout(() => {
        strips.forEach((strip, index) => {
            setTimeout(() => {
                strip.classList.remove('slide-in');
                strip.classList.add('slide-out');
            }, index * 50);
        });
        
        // Execute callback in the middle of transition
        if (callback) {
            setTimeout(callback, 400);
        }
        
        // Clean up and restart auto-cycle
        setTimeout(() => {
            container.classList.remove('active');
            strips.forEach(strip => {
                strip.classList.remove('slide-in', 'slide-out');
                strip.classList.add('auto-cycle');
            });
        }, 1000);
        
    }, 1200);
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

// Enhanced navigation with color transitions
function goToHistoryWithTransition() {
    triggerColorTransition(() => {
        window.location.href = 'history.html';
    });
}

function goHomeWithTransition() {
    triggerColorTransition(() => {
        window.location.href = 'index.html';
    });
}

function goToBiographyWithTransition(commanderId) {
    triggerColorTransition(() => {
        window.location.href = `biography.html?id=${commanderId}`;
    });
}

// Add some placeholder images if they don't exist
function createPlaceholderImage() {
    // This is a simple placeholder - in a real application, you'd want actual images
    return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjQ0NDIi8+Cjx0ZXh0IHg9Ijc1IiB5PSI3NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UGhvdG88L3RleHQ+Cjwvc3ZnPgo=';
}

// Typing animation function removed - now using static text

// Biography typing animation function
function startBiographyTyping(text, textElement, cursorElement) {
    if (!text || !textElement) return;
    
    // Clear any existing content
    textElement.textContent = '';
    
    // Add typing class to text box
    const textBox = textElement.closest('.biography-text-box');
    if (textBox) {
        textBox.classList.add('typing-active');
    }
    
    // Show cursor
    if (cursorElement) {
        cursorElement.style.display = 'inline';
    }
    
    let currentIndex = 0;
    const typingSpeed = 30; // Speed in milliseconds
    
    function typeCharacter() {
        if (currentIndex < text.length) {
            textElement.textContent = text.substring(0, currentIndex + 1);
            currentIndex++;
            
            // Variable speed for punctuation
            let delay = typingSpeed;
            const currentChar = text[currentIndex - 1];
            
            if (currentChar === '.' || currentChar === '!' || currentChar === '?') {
                delay = typingSpeed * 8; // Pause at sentence endings
            } else if (currentChar === ',' || currentChar === ';' || currentChar === ':') {
                delay = typingSpeed * 3; // Short pause at commas
            } else if (currentChar === ' ') {
                delay = typingSpeed * 0.5; // Faster for spaces
            }
            
            setTimeout(typeCharacter, delay);
        } else {
            // Finished typing, hide cursor after a delay
            if (textBox) {
                textBox.classList.remove('typing-active');
                textBox.classList.add('typing-complete');
            }
            
            setTimeout(() => {
                if (cursorElement) {
                    cursorElement.style.display = 'none';
                }
            }, 2000);
        }
    }
    
    // Start typing after a brief delay
    setTimeout(typeCharacter, 1000);
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