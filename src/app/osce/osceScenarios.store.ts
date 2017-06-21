import { Scenario } from "./osceScenarios.model";

export const OSCE_SCENARIOS: Scenario[] = [
    {
        "id": 0,
        "year": 1,
        "system": "resp",
        "title": "Respiratory History",
        "question": `<p><b>Context:</b> You are a medical student on placement in the Accident &amp; Emergency department</p><p><b>Task:</b> Please take a history from this patient presenting with chest pain</p><p><b>Essential Background:</b> Mr Thomas (DoB 23/05/70) has come in to the A&amp;E departement complaining of chest pain</p>`,
        "script": `<h3>Patient Script</h3><p><b>Presenting Complaint</b><br> Chest pain – 45 year old A&amp;E</p><p><b>History  of Presenting Complaint</b><br> You had sudden onset of right-sided &lsquo;sharp&rsquo; pleuritic    chest pain while sitting down a few hours. Pain had a severity score of 7/10, there is no radiation or exacerbating/alleviating    factors. There was an associated shortness of breath, you can still complete sentences and it has only lasted the duration    of the chest pain. There is no haemoptysis, unexplained weight loss, pyrexia, hoarse voice or sputum. No nausea no vomiting    no palpitations . Pain ongoing but a bit less than before </p><p><b>Past  Medical History</b> <br> Cholecystectomy August 2014<br> Hypertension 2007<br>    <em>No  diabetes, asthma, COPD IHD</em><br>    <br>    <b>Drug  History</b> <br> Ramipril 2.5mg OD<br> Bisoprolol 2.5mg OD<br>    <em>No known drug allergies</em></p><p><b>Family  History</b> <br> Mum died of M.I. aged 70<br> Brother has COPD</p><p><b>Social  History</b><br> Smoker 15 per day for 20 years<br> No alcohol consumption<br> Retired nurse<br>    Widowed, now living home alone<br> No recent travel or pets<br> Healthy diet, cooks and cleans daily</p><p><b>Systemic  Review</b><br>    <em>General </em>– No weight loss, no fatigue, no loss of appetite<br>    <em>Cardiovascular</em> – Swollen warm right leg, no palpitations<br>    <em>Gastrointestinal </em>– no loss of appetite, no nausea, vomiting, abdominal pain or change of bowel movements<br>    <em>Musculoskeletal </em>– no notable muscle or joint pain</p><p><b>DD – Pulmonary Embolism , Pneumothorax</b></p><p><b>Ideas Concerns expectations</b></p>You think this may be a heart attack. You smoke and have high blood pressure and your mum died of a heart attack. You areanxious that the dr covers this, and if he does not, you will ask him directly &ldquo;do you think this could be my heart?&rdquo;</div>`,
        "expectations": "<p><p>Accuracy</p><br>    <p><em>Does the student do the right thing?</em></p><br>Pleuritic pain <br>Check for other respiratory    symptoms.    <br> Considers cardiac symptoms as well <br> Elicits concern re MI<br>Elicits risk factors – smoker and hypertension</p><p><p>Skilfulness</p><br> Does the student perform the essential tasks in a skilful manner?</p><ul>    <li>appropriately utilises open/closed questioning </li>    <li>Shares managements options with patient and reaches a plan </li></ul><p>All students should allow the patient to talk and listen<br> All students should facilitate responses both verbally and non-verbally<br>    All students should use open and closed questions to good effect<br> Good students will respond to cues, clarify points    of uncertainty, summarise appropriately and invite correction</p><p><p>Supportiveness</p><br> Is the student appropriately supportive of the patient, relative or colleague?</p><p>All students should display some empathy/care/concern<br> All students should display good active listening skills<br> Good    students will <em>explore</em> the patient&rsquo;s concerns<br> Good students will <em>alleviate</em> concerns as far    as is possible<br> Good students will put the patient at ease and engender trust through the consultation<br> Address    concern of MI. by patient <br> Supportive during pain and breathlessness </p><p><p>Efficiency</p><br> Does the student display an appropriate level of control and is the encounter timely and    well-structured? Does the student clarify the point of the interaction at the start and is the conclusion clear?</p><p>All students should clarify the tasks of the consultation at the start with the patient<br> All students should complete    the tasks in the time allocated<br> All students should allocate appropriate time to each element of the consultation<br>    Good students will have a well-structured consultation with student taking appropriate level of control<br> Good students    will reach a conclusion and enable next steps to be discussed</p><p><p>Safety</p><br> Does the student display appropriate levels of both patient and professional safety for this    context?</p><ul>    <li>Checks red flags and no worrying or dangerous actions or omissions</li>    <li>Arranges appropriate follow up/safety netting</li></ul><p>All students should identify self and role, and ensure the patient&rsquo;s identity is clear<br> All students should ensure    the consultation enhances health and wellbeing of patient(s)<br> All students should act and within their competence    and professional boundaries<br> All students should ensure specific features of the consultation relating to safety are    met: <em>details</em><br> Good students may ask about symptoms of serious complications or consequences: <em>details</em><br>    Good students will ensure the patient is clear regarding appropriate management/follow up</p><p><p>Asks for haemoptysis/weight loss. Recognises need    for further investigations (CXR / D Dimer / CTPA)</p></p>"
    },
    {
        "id": 1,
        "year": 2,
        "system": "",
        "title": "Test2",
        "question": "Question2",
        "script": "Script2",
        "expectations": "Expect2"
    },
    {
        "id": 2,
        "year": 2,
        "system": "",
        "title": "Test2",
        "question": "",
        "script": "",
        "expectations": ""
    },
    {
        "id": 3,
        "year": 3,
        "system": "",
        "title": "Test3",
        "question": "",
        "script": "",
        "expectations": ""
    }
]