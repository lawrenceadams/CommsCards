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
        "back": `<p><i>An iSBAR approach may be taken to ensure a succinct handover is given:</i></p><br><p><b style="color: #ff6264">Identify</b> – Identify yourself (name, role) and the patient (name, DOB, location)</p><p><b style="color: #ff6264">Situation</b> – What is currently going on? What are the main problems arising?</p><p><b style="color: #ff6264">Background</b> – What relevant history is there? PMH, Medication, Investigations.</p><p><b style="color: #ff6264">Assessment</b> –What do you think is going on? What have you found? Ensure you have relevant observations and examination findings to hand.</p><p><b style="color: #ff6264">Recommendation</b> – What is the purpose of the call? What do you want to happen next? (Advice, referral, treatment, review?) Be clear about your request/time-frame.</p>`,
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
        "title": "Interpret the report and explain the next steps to the patient",
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
    }
];
