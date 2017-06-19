import { Card } from "./card.model";

export const FLASHCARDS: Card[] = [
    {
        "id": 1,
        "front": "<p>Mr Arjo has recently stopped smoking cigarettes, with a 15 pack year history.</p><p>Explain to Mr Arjo that 10 years from now he will have a 50% risk reduction for lung cancer in comparison to his current risk.</p>",
        "back": "<p>All smokers have a higher chance of developing lung cancer than non-smokers. Smoking is the main cause of lung cancer and lung cancer is the UKs biggest cancer killer.</p><p>As soon as you stop smoking, the risk of lung cancer starts to reduce and over time the risk continues to reduce. Within ten years of stopping smoking, you will have halved your risk of developing lung cancer compared with someone who continued to smoke - this is a significant improvement.</p><p>Of course, by maintaining a healthy lifestyle (exercising, eating well, avoiding too much alcohol and not smoking) you can keep your body fitter for longer too.</p>",
        "title": "Explain a 10 year, 50% risk reduction in lung cancer",
        "system": [
            "resp",
            "cardio"
        ],
        "type": "risk",
        "year": 1,
        "CCP": [
            91,
            38
        ]
    },
    {
        "id": 2,
        "title": "Explain the lifestyle implications of coeliac disease to a newly diagnosed patient",
        "front": "<p>Explain the likely lifestyle implications of coeliac disease to a newly diagnosed patient.</p>",
        "back": "<p>Coeliac disease is a common condition in which the gut has an adverse reaction to gluten – a food substance that can be found in starchy foods. It is an autoimmune condition - the body’s immune system recognises gluten as a threat and mistakenly attacks the gut lining causing symptoms.</p> <p>This shouldn’t impact on your lifestyle too much, the main changes are dietary in nature and your symptoms should resolve once you cut gluten out of your diet. To do this you will need to stop eating foods such as bread, pasta, cakes and other wheat based products.</p> <p>Gluten free alternatives can be found in most supermarkets and some are available on prescription so there is no reason why you can’t continue to eat similar meals, you would simply have to substitute in gluten free ingredients. Rice and potatoes do not contain gluten so are still ok.</p> <p>It is a good idea to try to get into the habit of reading labels on foods as sometimes gluten is contained within a meal without you being aware of it; usually if something contains gluten it will be flagged up in the little ‘allergens’ box on the packet.</p>",
        "system": [
            "gi"
        ],
        "type": "healthpromo",
        "year": 1,
        "CCP": [
            19,
            23
        ]
    },
    {
        "id": 3,
        "title": "Explain what is meant by a unit of alcohol and give alcohol lifestyle advice",
        "front": "<p>Explain to your patient what is meant by a ‘unit’ of alcohol and give lifestyle advice relating to alcohol</p>",
        "back": "<p>A unit is how we standardise exactly how much alcohol is in a drink.</p> <p>1 unit equates to a single measure of spirits. As a guide a pint of beer or cider contains about 2-3 units and a glass of wine approximately 2 units, however this varies depending on the drink and of course the size of the glass! The Drink Aware Website allows you to calculate exact units in any drink, which might be a helpful place to visit if you think you might be drinking a little too much.</p> <p>As a guide, men should have no more than 3-4 units per day and women no more than 2-3 per day. However, you should ensure that you don’t drink alcohol every day as your body needs a day off to recover.</p>",
        "system": [
            "gi"
        ],
        "type": "healthpromo",
        "year": 1,
        "CCP": [
            91,
            81,
            30,
            87
        ]
    },
    {
        "id": 4,
        "title": "In your pair discuss the steps in an effective handover",
        "front": "<p>In your pair discuss the steps in giving an effective handover.</p>",
        "back": "<p><i>An iSBAR approach may be taken to ensure a succinct handover is given:</i></p><br><p><b style='color: #ff6264'>Identify</b> – Identify yourself (name, role) and the patient (name, DOB, location)</p><p><b style='color: #ff6264'>Situation</b> – What is currently going on? What are the main problems arising?</p><p><b style='color: #ff6264'>Background</b> – What relevant history is there? PMH, Medication, Investigations.</p><p><b style='color: #ff6264'>Assessment</b> –What do you think is going on? What have you found? Ensure you have relevant observations and examination findings to hand.</p><p><b style='color: #ff6264'>Recommendation</b> – What is the purpose of the call? What do you want to happen next? (Advice, referral, treatment, review?) Be clear about your request/time-frame.</p>",
        "system": [
            ""
        ],
        "type": "typesofconsul",
        "year": 1,
        "CCP": [
            0
        ]
    },
    {
        "id": 5,
        "title": "Interpret an X-ray report and explain the next steps to the patient",
        "front": "<p>Read the following radiology report for a 70 y/o man with shortness of breath and explain the next steps</p> <br> <p>‘CXR showed blunting of both costophrenic angles with a meniscus sign on the right and bilateral perihilar haze. There is an increased cardiothoracic ratio consistent with cardiomegaly’</p>",
        "back": "<p>Pleural effusions, perihilar oedema and cardiomegaly – suggests Congestive Cardiac Failure.</p><p>The X-Ray suggests that there is some fluid collecting around your lungs, and your heart appears a little enlarged. The most likely cause of your breathlessness is that this fluid in your lungs is making it difficult to breathe. This fluid has possibly started to accumulate because your heart isn’t working as it should, which means that it perhaps isn’t pumping the blood around your body as smoothly as we’d expect.</p> <p>We would like to do a type of ultrasound scan called an echocardiogram to tell us a bit more about how your heart is working as well as an ECG heart tracing looking at the electrical activity in your heart. We would also like to start some medication to remove the fluid in your lungs.</p>",
        "system": [
            "resp",
            "cardio"
        ],
        "type": "interpret",
        "year": 1,
        "CCP": [
            20,
            38
        ]
    },
    {
        "id": 6,
        "title": "Explain and gain consent for a PR examination",
        "front": "<p>Explain and gain consent for a PR (digital rectal) examination</p>",
        "back": "<p>What I’d like to do is carry out an internal examination of your back passage in order to give some more information about the problems you have been experiencing.</p> <p>This will involve inserting a gloved, lubricated finger into your back passage and feeling for any lumps or bumps. The examination shouldn’t be painful. It may be a little uncomfortable; however it will only last for a few seconds.</p> <p>I’ll ask one of my colleagues to come in whilst I carry out the examination to make sure that you are comfortable; if you have any problems or pain during the examination you can just say and we’ll stop right away.</p> <p>Remember to check consent has been gained: ‘Is that alright with you?’, ‘Do you have any questions or anything you are unsure of?’ etc.</p>",
        "system": [
            "gi"
        ],
        "type": "consentproc",
        "year": 1,
        "CCP": [
            70
        ]
    },
    {
        "id": 7,
        "title": "Explain why antibiotics will not be prescribed for a 'chest infection'",
        "front": "<p>Mrs Watts has brought her 18 month old son to the GP looking for antibiotics for his ‘chest infection’.</p> <p>He is diagnosed with a viral infection. Explain to Mrs Watts why antibiotics will not be prescribed and what treatment she could give.</p>",
        "back": "<p>Your son has symptoms of a viral infection in his airways. Examining him he is well and there is nothing to suggest a bacterial infection. Viral infections are common and do not often cause children to become very unwell. It will get better without any treatment.</p> <p>Antibiotics wouldn’t help in this case as they only fight specific bacterial infections and don’t work for viral infections. If we use antibiotics unnecessarily then this can lead to problems such as antibiotic resistance – the antibiotics stop working against bacterial infections when they are needed in the future. It is important you make sure your son has plenty of fluids and rest. You can give him liquid paracetamol (Calpol) to keep his temperature down.</p> <p>It is important to get him re-assessed if he becomes more unwell with difficulty breathing or if he is drinking less and/or having dry nappies. Should you need medical advice when the GP is closed you should phone 111.</p>",
        "system": [
            "resp",
            "microbio"
        ],
        "type": "explainplan",
        "year": 1,
        "CCP": [
            0
        ]
    },
    {
        "id": 8,
        "title": "Explain some anatomical structures in lay terms",
        "front": "<p>Explain the following anatomical structures in lay terms:</p> <br> <p>‘Tympanic Membrane’</p> <p>‘Urethra’</p> <p>‘Rectum’</p>",
        "back": "<p>Tympanic Membrane – Also called the ear drum, this is a thin film deep within your ear which helps to detect sound and protects your inner ear.</p> <p>Urethra – The muscular tube which carries urine from your bladder, through which you pass urine.</p> <p>Rectum – “Bottom/back passage”. The last part of your bowels which ends at your bottom.</p> <br> <p><i>You may wish to consider other structures that you have had difficulty explaining to patients in the past and discuss these with your partner.</i></p>",
        "system": [
            "princ"
        ],
        "type": "explainplan",
        "year": 1,
        "CCP": [
            0
        ]
    },
    {
        "id": 9,
        "title": "Explain what a spirometry test is and how it is carried out",
        "front": "<p>Explain in understandable terms what a spirometry test is and how it is carried out.</p>",
        "back": "<p>Spirometry is a series of tests that look at how well the lungs are working to help us to diagnose certain conditions or make decisions about breathing problems.</p> <p>This will involve you breathing into a tube at various intervals so that we can have a look at the lungs and how much air they hold. Spirometry testing also gives us more information about the air that you breathe in and out, so sometimes you may need to blow into the tube more than once or even breathe out for as long as you can.</p> <p><i>For patients who are accustomed to peak flow testing it may be useful to describe spirometry as a similar process but ‘using electronic equipment for more accurate readings’.</i></p>",
        "system": [
            "resp"
        ],
        "type": "explainplan",
        "year": 1,
        "CCP": [
            20,
            56,
            74
        ]
    },
    {
        "id": 10,
        "title": "Explain to a patient how an Echo and an ECG are carried out",
        "front": "<p>Describe to a patient how the following are carried out:</p> <br> <p>1. Echocardiogram (Echo)</p> <p>2. Electrocardiogram (ECG)</p>",
        "back": "<p>1. <b style='color: is-primary'>Echocardiogram</b> – An echo is an ultrasound scan of the heart, which works in a similar way to the ultrasound scan used to examine the tummy of a pregnant lady. The probe is pressed against the skin, on the left side of the chest, to gather information about how well the heart is beating. An echo shouldn’t be sore or uncomfortable and usually doesn’t take any prior preparation.</p> <p>2. Electrocardiogram – An ECG, which you may have heard called a ‘heart tracing’ uses a machine to show pictures that tell us about the electrical signals in the heart muscle, hence the heart’s rhythm. A series of wires are connected to sticky pads attached to your chest and limbs, and these wires produce a reading on the machine. You won’t feel anything out of the ordinary, and certainly not any pain but you do have to remain still momentarily to give a clear reading.</p>",
        "system": [
            "cardio"
        ],
        "type": "explainplan",
        "year": 1,
        "CCP": [
            17,
            74
        ]
    },
    {
        "id": 11,
        "title": "Explain β-blocker side effects",
        "front": "<p>Explain to the patient the possible side effects they may experience when starting on beta blocker therapy for angina</p>",
        "back": "<p><i>Beta blockers are used for a number of conditions and so it maybe useful to start a discussion by explaining why the patient is receiving them:</\ti></p>\n<p>So, you’re taking beta blockers because when we last checked your blood pressure it was a little high and this medicine should help to bring that down a bit. This is important as high blood pressure can put more pressure on your heart, especially when you have other medical problems such as angina.</p>\n<p>Common side effects include nausea, diarrhoea, tiredness and cold hands and feet; these are nothing to be too worried about but if you do experience these you should contact your GP to discuss if a better alternative is available. People may experience light-headedness or even fainting when they stand up too quickly, this can be caused by too big a dose of beta blockers and so you should let your GP know so that they can alter the dose and hopefully prevent further problems. </p>\n<p>Less commonly beta blockers may cause a change in mood or even your sleep pattern; if this is the case your GP can help you to find a better option which agrees with your body better. </p>",
        "system": [
            "cardio"
        ],
        "type": "explainplan",
        "year": 1,
        "CCP": [
            25,
            86,
            52,
            69
        ]
    },
    {
        "id": 12,
        "title": "Explain what is meant by the term ‘Heart Failure’",
        "front": "<p>Explain to the patient what is meant by the term ‘Heart Failure’<p>",
        "back": "<p>Sometimes when our heart is under a lot of strain because of other health problems it can become stiff or weak, which limits its ability to work as well as it used to. This means that the heart doesn’t pump blood around the body quite as well as it did.</p>\n<p>This is called heart failure, although it is important to note that the heart does still work just not quite as effectively as it once did. It doesn’t mean your heart is about to suddenly stop.</p>\n<p>With medication the symptoms that you feel because of your heart problems (such as breathlessness, ankle swelling and tiredness) may resolve or improve.</p>\n<p>Although heart failure may be caused by a heart attack, they are not the same thing and one does not always lead to the other.</p>",
        "system": [
            "cardio"
        ],
        "type": "explaindisease",
        "year": 1,
        "CCP": [
            74,
            51
        ]
    },
    {
        "id": 13,
        "title": "Explain what 'angina' is and the likely treatment",
        "front": "<p>Explain the term ‘angina’ to a patient and how it may be treated</p>",
        "back": "<p>Angina happens when the blood that supplies the heart muscle with oxygen and energy is unable to reach it properly. Often this occurs because one or more of the blood vessels that carries blood to the heart has become slightly narrowed. Smoking, being overweight, a diet high in saturated fats, high blood pressure and family history of heart problems can all increase your risk of angina.</p>\n<p>Most patients find that the symptoms of angina happen when they are working hard or exercising and this can cause problems such as chest pain because the heart muscle is not getting enough oxygen. Upon resting for a few minutes symptoms usually improve.</p>\n<p>Medication is used to help control the symptoms and reduce your risk of the angina worsening. Improving your lifestyle can also help prevent further worsening.</p>\n<p>It is important to remember that if medication or resting does not improve your symptoms then you should go to hospital or call an ambulance immediately as there is a chance that you are experiencing something more serious such as a heart attack.</p>",
        "system": [
            "cardio"
        ],
        "type": "explaindisease",
        "year": 1,
        "CCP": [
            14,
            74
        ]
    },
    {
        "id": 14,
        "title": "Explain the pathophysiology and management of GORD",
        "front": "<p>Explain the pathophysiology of Gastro-Oesophageal Reflux Disease to a patient and discuss ways to help this condition</p>",
        "back": "<p>Gastro-oesophageal reflux is the name given to a condition whereby some of the acid that is normally contained within your stomach to help breakdown food has made its way backwards into your oesophagus (the tube which connects your mouth and your stomach).</p>\n<p>Most of the time this has happened because the muscles which stop food and acid flowing backwards into this tube have become weakened for one reason or another. The presence of acid in the oesophagus causes the pain or ‘heart burn’ like symptoms.</p>\n<p>Avoidance of specific triggers can help (alcohol, caffeine, smoking, fatty and spicy foods). If you are overweight then weight loss can also help. In addition medications which reduce stomach acid can be used to relieve with symptoms.</p>",
        "system": [
            "gi"
        ],
        "type": "explaindisease",
        "year": 1,
        "CCP": [
            2
        ]
    },
    {
        "id": 15,
        "title": "Explain what 'Bronchiectasis' is",
        "front": "<p>Mrs Jones has just been told that she has bronchiectasis but has no idea what this means.</p>\n<p>Explain the diagnosis to Mrs Jones</p>",
        "back": "<p>The lungs are made up of a series of tiny tubes which are lined by even smaller hairs and mucus in order to trap all of the bugs and dust that we breathe in.</p>\n<p>In bronchiectasis these tubes are widened and so the hairs struggle to catch all of the dust and some of the mucus becomes stuck rather than being coughed up. This means that sometimes the tubes within the lungs become blocked up and it can be difficult to breathe. People with bronchiectasis often have a persistent cough and are more prone to chest infections.</p>\n<p>Bronchiectasis is a long-term condition so cannot be ‘cured’ and the severity of symptoms can vary from one individual to another. However, there are treatments that can help to relieve these symptoms.</p>\n<p><i>NB: Drawing a diagram to demonstrate this may help some patients to understand.</i></p>",
        "system": [
            "resp"
        ],
        "type": "explaindisease",
        "year": 1,
        "CCP": [
            74,
            20,
            38
        ]
    },
    {
        "id": 16,
        "title": "Explain Atrial Fibrillation to a patient",
        "front": "<p>Explain Atrial Fibrillation to a stable 50y/o patient <i>(BP 130/85, HR 85 Irregular)</i> who has presented to the GP with palpitations.</p>\n<p>Then explain next steps in management.</p>",
        "back": "<p>Palpitations (or an awareness of your own heartbeat) can be caused by various things including something called Atrial Fibrillation (AF). AF is a condition whereby the heart’s rhythm has been disrupted and so instead of beating regularly as it should, it beats more irregularly.</p>\n<p>There is a simple test we can do called an ECG, which shows the rhythm of your heart. If we confirm AF then we will look into why this might have occurred and discuss further treatment options. Treatment might include tablets to control the heart rate and to prevent future problems associated with AF such as a stroke.</p>\n<p>People with AF may not have any symptoms; however, AF can cause symptoms such as breathlessness, dizziness or chest pain. If you develop any of these symptoms you need to see a doctor urgently.</p>\n<p><i>NB: It may be useful to ‘tap out’ a normal heart rhythm and then the patient’s heart rhythm. This would give you an extra method of communication to enhance understanding and discussions.</i></p>",
        "system": [
            "cardio"
        ],
        "type": "explaindisease",
        "year": 1,
        "CCP": [
            62
        ]
    },
    {
        "id": 17,
        "title": "Ankle swelling and medications with CKD",
        "front": "<p>Mrs Clark has CKD Stage 3 and recently sprained her wrist. She has been self medicating for the pain but has now noticed mild ankle swelling. Blood tests showed eGFR had fallen from 45 to 35.</p>\n<p>What is the likely cause? Give Mrs Clark advice on pain management.</p>",
        "back": "<p><i>It is possible that the soft tissue injury to Mrs Clark’s arm has been treated with non-steroidal antiinflammatory drugs (such as ibuprofen) which need to be used with caution in renal impairment with monitoring of U+Es or avoided altogether. This could explain the drop in renal function.</i></p>\n<p>Because your kidneys aren’t working as best they could, it means that some medications can’t be handled by the body quite so well. This includes some medicines for controlling pain such as Ibuprofen. What we would normally recommend is that you avoid these types of pain relief and opt for other options such as paracetamol. You may also find that the pain in your wrist could be eased using non-medical therapies such as cold or hot compresses or support dressings.</p>\n<p>I know it can be quite tricky trying to suss out which medicines you can and can’t take so we’d usually advise that you double check the information leaflet that comes with the box, or pop into ask your local pharmacist or GP if you are unsure.</p>\n<p>I’d like to check your kidney blood test again in one week to make sure it is staying stable. Are you happy to come back for this? If you feel worse in the meantime please book a GP appointment.</p>",
        "system": [
            "renal",
            "pharma"
        ],
        "type": "typesofconsul",
        "year": 2,
        "CCP": [
            51,
            92
        ]
    },
    {
        "id": 18,
        "title": "Discuss aspects of a collateral history",
        "front": "<p>Discuss the following regarding a collateral history:</p>\n<ul>\n<li>What it is?</li>\n<li>Why/when it is helpful?</li>\n<li>Important considerations when taking one</li>\n</ul>",
        "back": "<p>A collateral history may be taken from a family member, spouse, parent, partner, carer or a witness to an event etc. to help give another perspective on a patient’s wellbeing/events.</p>\n<ul>\n<li>A collateral history is particularly relevant if the patient has difficulties communicating or is too young or unwell to give clear information.</li>\n<li>Consider if the patient has given consent for you to discuss with the third party – if the patient has capacity and is able to consent then you should seek their consent.</li>\n<li>Try not to ignore the patient if they are also present - make the discussion three-way/ involve the patient where possible</li>\n<li>Don’t guide or influence the history by putting words in the persons mouth</li>\n<li>Consider if the source is reputable; how well does the third party know the patient/events?</li>\n</ul>",
        "system": [
            ""
        ],
        "type": "typesofconsul",
        "year": 2,
        "CCP": [
            0
        ]
    },
    {
        "id": 19,
        "title": "Discuss how to approach a NAI case",
        "front": "<p>In your pair discuss how to approach a possible case of Non-Accidental Injury in a 4y/o child</p>",
        "back": "<p>Each case should be taken for it’s own merit. The following are NICE recommendations:</p>\n<ol class='danger-text'>\n<li><b>Listen and Observe</b> – all relevant history, the child’s demeanour, parent-child interaction</li>\n<li><b>Seek an explanation</b> – from both parent and child</li>\n<li><b>Consider, suspect or exclude</b> – discuss the case with a senior colleague, consider all options and look for evidence to include or exclude possible NAI </li>\n<li><b>Record</b> – ensure the interaction and your clinical judgement are documented</li>\n</ol>\n<p>You should try to interview both the parent/carer and the child together as well as separately. Open questioning should be used and whilst an element of suspicion should be maintained you should avoid appearing judgemental.</p>",
        "system": [
            "paeds",
            "ethlaw"
        ],
        "type": "typesofconsul",
        "year": 2,
        "CCP": [
            15
        ]
    },
    {
        "id": 20,
        "title": "Discuss the challenges in complex communication needs",
        "front": "<p>In your pair discuss how to overcome potential challenges in consulting with a patient with learning disabilities</p>",
        "back": "<p>Each individual is different in their communication needs, however, the following points should be considered:</p>\n<ul>\n<li>Talk to the patient, not just their carer or companion</li>\n<li>Check if the patient is happy for you to ask their carer questions</li>\n<li>Watch the patient and their facial expressions/gestures</li>\n<li>Establish the method that the patient prefers to communicate</li>\n<li>Reciprocate by use of non-verbal communication</li>\n<li>Take your time and be patient</li>\n<li>Don’t make assumptions</li>\n<li>Be comfortable with silence</li>\n<li>Consider using visual aids or other aids e.g. leaflets with large print</li>\n<li>Use clear understandable terms</li>\n<li>Check understanding and don’t be afraid to repeat yourself</li>\n</ul>",
        "system": [
            "paeds",
            "psych"
        ],
        "type": "typesofconsul",
        "year": 2,
        "CCP": [
            0
        ]
    },
    {
        "id": 21,
        "title": "Discuss the features of a paediatric consultation",
        "front": "<p>In your pair discuss the key features of a paediatric consultation</p>",
        "back": "<p>Both the approach and content of a paediatric consultation differs from that of a consultation with an adult. The following points should be considered:</p>\n<p><b>Content:</b></p>\n<ul>\n<li>Maternal/ pregnancy history</li>\n<li>Perinatal history (Problems at birth, birth weight, neonatal admission?)</li>\n<li>Developmental history (Milestones: motor, social, language, hearing)</li>\n<li>Family history (Parents, siblings, including stillbirth or miscarriage)</li>\n<li>Social history (Living arrangements, are parents together? Schooling? Smokers at home?)</li>\n</ul>\n<p><b>Approach:</b></p>\n<ul>\n<li>Frequently history is from third party (Parent, carer etc.)</li>\n<li>Allow child to give their account, even from young age (approx. 3 yrs)</li>\n<li>As always use open questions and follow Calgary-Cambridge Guide</li>\n<li>Always be wary of parental influence/bias in a history</li>\n<li>The approach will need to be flexible depending on age and maturity of child</li>\n</ul>",
        "system": [
            "paeds"
        ],
        "type": "typesofconsul",
        "year": 2,
        "CCP": [
            75
        ]
    },
    {
        "id": 22,
        "title": "Discuss communicating to those with a hearing impairment",
        "front": "<p>In your pair discuss how to communicate with a patient who has a hearing impairment</p>",
        "back": "<p><i>The same principles apply as communicating with any other patient, but the following are also advised by the Royal Association for Deaf People (RADP):</i></p>\n<ul>\n<li>Ensure that the patient has hearing aids in and turned on (if applicable)</li>\n<li>Speak clearly and succinctly but not too slowly</li>\n<li>Do not over exaggerate mouthing words as this can make lip reading difficult</li>\n<li>Use natural gestures</li>\n<li>Do not shout</li>\n<li>Use diagrams of images to aid oral communication</li>\n<li>Communicate through a sign language interpreter (if applicable)</li>\n<li>Use hearing loop technology</li>\n<li>Access voluntary societies/charities for additional support</li>\n<li>Ensure hearing aids are kept safe – once lost they take a long time to remould and replace</li>\n</ul>",
        "system": [
            "ent",
            "gp"
        ],
        "type": "typesofconsul",
        "year": 2,
        "CCP": [
            21
        ]
    },
    {
        "id": 23,
        "title": "Discuss the factors in Breaking Bad News",
        "front": "<p>In your pair consider the environmental factors and set up required when planning to break bad news</p>",
        "back": "<p>Firstly, you should consider if you are the best person to break the news to the patient. Do you have the experience, knowledge of the patient and their situation etc?</p>\n<p><b>Preparation</b></p>\n<ul>\n<li>Pre-plan the steps of consultation and rehearse roughly in your mind</li>\n<li>Be clear on the objective of the consultation</li>\n<li>Be aware that you may need to adapt the consultation depending on the patient’s reaction</li>\n<li>Clear your schedule to ensure you arrive on time/ don’t have to leave promptly after</li>\n<li>Hand over your bleep to prevent interruptions</li>\n</ul>\n<p><b>Environment</b></p>\n<ul>\n<li>Peaceful, private side room or clinic room</li>\n<li>No telephones or interruptions</li>\n<li>Tissues to hand</li>\n<li>Appropriate notes, imaging, test results available and to hand</li>\n</ul>",
        "system": [
            ""
        ],
        "type": "typesofconsul",
        "year": 2,
        "CCP": [
            0
        ]
    },
    {
        "id": 24,
        "title": "Explain the process of Catheterisation",
        "front": "<p>A 73y/o man needs catheterised to relieve acute urinary retention Explain the procedure to the gentleman</p>",
        "back": "<p>Because your bladder isn’t emptying properly, what we would like to do is insert a small plastic tube called a catheter to allow the urine to drain away, which should hopefully relieve the pain you have in your tummy.</p>\n<p>This will involve cleaning and then applying some numbing jelly to your penis and then gently inserting the plastic tube into your bladder via your penis. This may be a little uncomfortable for you but shouldn’t be too painful as the jelly should ease the pain. We would expect that as soon as the catheter is in, your bladder will begin to empty and so the relief should be almost immediate. Someone else will be in the room when the catheter is inserted to assist with the procedure and also to ensure your comfort, is that alright?</p>\n<p>The procedure is usually straightforward but occasionally a catheter can be tricky to insert – if this was the case we would get a specialist to help. The main risk of the procedure is causing a urine infection. There is also a small risk of causing some bleeding or damage when inserting the catheter. The catheter may need to stay in for a number of days before we take it out.</p>",
        "system": [
            "renal",
            "urol",
            "ethlaw"
        ],
        "type": "consentproc",
        "year": 2,
        "CCP": [
            92
        ]
    },
    {
        "id": 25,
        "title": "Explain U&E results to a patient",
        "front": "<p>Mrs Barnes (67y/o) has had 3 abnormal eGFR results in the last 12 weeks; she is asymptomatic. Further investigations have ruled out a serious cause.</p>\n<p>1. 67 ml/min 2. 71 ml/min 3. 66ml/min</p>\n<p>Explain these results to Mrs Barnes.</p>",
        "back": "<p>The blood tests that we have recently carried out have shown that your kidneys appear to be working a little bit under the expected level, but not significantly so and they are still doing their job well enough. Importantly they don’t appear to be getting any worse.</p>\n<p>All of the other tests that we have done have come back as perfectly normal too and this is very reassuring. It is common for kidneys to work a little less well as we get older and this is likely what is going on for you. At the minute there is no cause for concern.</p>\n<p>However, we would suggest monitoring the kidney blood tests to pick up if the kidneys were working less well, which can happen for some individuals. In the meantime if you feel unwell or very tired, notice any swelling of your ankles, blood in your urine or other changes with your water works then you should make another appointment and we’ll do some further investigating. You should try to avoid dehydration and check with the pharmacist or GP before taking any new medications.</p>",
        "system": [
            "renal"
        ],
        "type": "explainplan",
        "year": 2,
        "CCP": [
            5,
            92,
            51
        ]
    },
    {
        "id": 26,
        "title": "Give the likely treatment options for a Melanoma",
        "front": "<p>72y/o gentleman with 1.5cm nasal skin lesion. He is aware of the diagnosis. Explain the likely treatment options.</p>",
        "back": "<p><i>It is important to note that histology, examination and history should all be considered here. However, based on examination alone this is likely to be a malignant melanoma.</i></p>\n<p>As you know, we suspect that this growth maybe a cancerous mole however it is impossible to say exactly which type or how bad this is without further tests. In the first instance, we would like to refer you to see the skin specialist who will be able to do a few more tests and work out the best way forward.</p>\n<p>However, the most likely scenario is that the skin specialist will decide to remove the mole, usually while you are still awake. They would do this by injecting some local anaesthetic which will numb the skin and then cutting the mole out. Now, because of the size of the mole it might be that some skin needs to be taken from elsewhere on your body and used to patch up the area of skin removed; but this will all be discussed with you at the time of the operation so don’t worry about it too much as there will be plenty of opportunities to ask questions and discuss things before any action is taken.</p>",
        "system": [
            "derm"
        ],
        "type": "explainplan",
        "year": 2,
        "CCP": [
            76
        ]
    },
    {
        "id": 27,
        "title": "Explain the diagnosis of renal stones",
        "front": "<p>Explain a diagnosis of renal stones to a patient and how they may be managed</p>",
        "back": "<p>A kidney stone occurs when a small blockage forms in the tubes which drain urine from your kidneys into your bladder. Your kidneys filter waste chemicals from your body and when there is an increase in these chemicals for one reason or another, they clump together to form a stone. This can be very painful as the tubes are only used to having liquid passing through them; this pain is often felt in the tummy or groin and will differ in severity depending on size of the stone.</p>\n<p>In most cases the stone can be passed in the urine naturally after a day or two and the pain should subside; during this time you may need some painkillers to ease the symptoms of the stone.</p>\n<p>Very rarely when the stone is too large to be moved through the tube naturally we may need to use other techniques or an operation to remove the stone. One technique is called lithotripsy. This involves a special machine which directs waves of energy from outside the body towards to stone. The stone breaks up into smaller pieces which can be passed.</p>",
        "system": [
            "renal",
            "urol"
        ],
        "type": "explaindisease",
        "year": 2,
        "CCP": [
            2,
            37,
            92
        ]
    },
    {
        "id": 28,
        "title": "Explain BPH to a patient",
        "front": "<p>Explain Benign Prostatic Hypertrophy (BPH) to a patient</p>",
        "back": "<p>BPH occurs when the prostate gland, which surrounds the tube that takes urine out of the body in men, becomes enlarged. This is quite common in older men and can go unnoticed in many cases.</p>\n<p>BPH can lead to some recurring symptoms relating to your water works including dribbling, poor flow or difficulty getting started when you try to pass urine. Some men are happy to put up with some of these symptoms; however some men may find these symptoms frustrating. There are some drug treatments which can help to control these symptoms or if that doesn’t work there are some surgical options too.</p>\n<p><i>NB: You may consider using illustrations, models or images to help portray this to the patient</i></p>",
        "system": [
            "renal",
            "urol"
        ],
        "type": "explaindisease",
        "year": 2,
        "CCP": [
            92
        ]
    },
    {
        "id": 29,
        "title": "Explain the differences in types of Diabetes",
        "front": "<p>Explain to a Type 2 Diabetic patient the difference between NIDDM &amp; IDDM, including why insulin treatment is not always essential in NIDDM</p>",
        "back": "<p>There are two types of diabetes: type one and type two. Diabetes occurs when the level of sugar (glucose) in the blood becomes higher than normal, usually because of a problem with the hormone insulin which controls the sugar levels in the body.</p>\n<p>Type one diabetes is caused by the body’s inability to produce insulin. However, in type 2 diabetes, which is what you suffer from, the body is still producing insulin however perhaps not quite enough, or the cells in the body aren’t responding to this insulin correctly.</p>\n<p>Although both types of diabetes have the same effect on the body and often have the same symptoms, they are treated with different medications because of the different causes.</p>\n<p>In your case your body has plenty of insulin and so adding more with small injections wouldn’t help and in fact might make you feel more unwell. It maybe that as you get older things change and insulin would be helpful for you, however in the meantime we can hopefully control your diabetes with diet, exercise and perhaps some oral medications.</p>",
        "system": [
            "endo",
            "gp"
        ],
        "type": "explaindisease",
        "year": 2,
        "CCP": [
            84,
            86
        ]
    },
    {
        "id": 30,
        "title": "Give the diagnosis from a TFT",
        "front": "<p>Jane is 49y/o and presents with fatigue, weight gain &amp; memory loss </p>\n<p>T4 ↓, TSH ↑</p>\n<p>From the blood results, explain the diagnosis/initial management</p>",
        "back": "<p><i>The blood test results suggest a diagnosis of hypothyroidism. Most likely treatment would be with levothyroxine to boost levels of T3/4.</i></p>\n<p>The blood tests that we carried out the last time I saw you tell us about how well your thyroid is working. The thyroid is a small gland in your neck which produces hormones to help control lots of processes in the body. The thyroid gland is controlled by another gland in the brain called the pituitary gland. The pituitary gland tells the thyroid gland when to produce more or less of the hormone thyroxine. If your thyroid gland has stopped working properly the pituitary gland tries to wake it up again by sending out lots of another hormone (thyroid stimulating hormone). It keeps doing this in an attempt to kick start the thyroid gland which is why the TSH level rises.</p>\n<p><i>NB: Sometimes a visual diagram can help illustrate this to patients.</i></p>\n<p>Your levels of this hormone (TSH) are high, which tells us that your thyroid gland is working a bit slower than would be expected. We can help this by giving you a medication called levothyroxine which replaces the hormone normally produced by the thyroid gland. Once you are on this tablet we need to monitor your thyroid tests to establish if the tablet is working properly.</p>",
        "system": [
            "endo"
        ],
        "type": "interpret",
        "year": 2,
        "CCP": [
            5
        ]
    }
];