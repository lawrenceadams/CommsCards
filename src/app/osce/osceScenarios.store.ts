import { Scenario } from "./osceScenarios.model";

export const OSCE_SCENARIOS: Scenario[] = [
    {
        "id": 0,
        "year": 1,
        "system": "resp",
        "title": "Respiratory History",
        "question": `<p><b>Context:</b> You are a medical student on placement in the Accident &amp; Emergency department</p><p><b>Task:</b> Please take a history from this patient presenting with chest pain</p><p><b>Essential Background:</b> Mr Thomas (DoB 23/05/70) has come in to the A&amp;E departement complaining of chest pain</p>`,
        "script": `<div class="history-div">    <p><b>Presenting Complaint:</b></p>    <p>Chest pain – 45 year old A&amp;E    </p></div><div class="history-div">    <p><b>History of Presenting Complaint</b></p>    <p>        <ul>            <li>You had sudden onset of right-sided ‘sharp’ pleuritic chest pain while sitting down a few hours.</li>            <li>Pain had a severity score of 7/10, there is no radiation or exacerbating/alleviating factors.</li>            <li>There was an associated shortness of breath, you can still complete sentences and it has only lasted the duration of the chest pain.</li>            <li>There is no haemoptysis, unexplained weight loss, pyrexia, hoarse voice or sputum.</li>            <li>No nausea no vomiting no palpitations.</li>            <li>Pain ongoing but a bit less than before.</li>        </ul>    </p></div><div class="history-div">    <p>        <b>Past Medical History</b>        <ul>            <li>Cholecystectomy: August 2014</li>            <li>Hypertension: 2007</li>            <li><i>No diabetes, asthma, COPD, IHD</i></li>        </ul>    </p></div><div class="history-div">    <p>        <b>Drug History</b>        <ul>            <li>Ramipril: 2.5mg OD</li>            <li>Bisoprolol: 2.5mg OD</li>            <li><i>No known drug allergies</i></li>        </ul>    </p></div><div class="history-div"><p>    <b>Family History</b>    <ul>        <li>Mum died of M.I. aged 70</li>        <li>Brother has COPD</li>    </ul></p></div><div class="history-div">    <p>        <b>            Social History        </b><br>        <ul>            <li>Smoker 15 per day for 20 years </li>            <li>No alcohol consumption</li>            <li>Retired nurse</li>            <li>Widowed, now living home alone</li>            <li>No recent travel or pets </li>            <li>Healthy diet, cooks and cleans daily</li>        </ul>    </p></div><div class="history-div">    <p>        <b>Systemic Review</b>        <ul>            <li><i>General</i> – No weight loss, no fatigue, no loss of appetite</li>            <li><i>Cardiovascular</i> – Swollen warm right leg, no palpitations</li>            <li><i>Gastrointestinal</i> – no loss of appetite, no nausea, vomiting, abdominal pain or change of bowel movements</li>            <li><i>Musculoskeletal</i> – no notable muscle or joint pain DD – Pulmonary Embolism, Pneumothorax</li>        </ul>    </p></div><div class="history-div">    <p>        <b>Ideas, Concerns &amp; Expectations</b>        <ul>            <li>You think this may be a heart attack.</li>            <li>You smoke and have high blood pressure and your mum died of a heart attack.</li>            <li>You are anxious that the dr covers this, and if he does not, you will ask him directly “do you think this could                be my heart?”</li>        </ul>    </p></div>`,
        "expectations": `<div class="history-div">    <span class="tag is-primary">Accuracy</span>    <ul>        <li>Pleuritic pain</li>        <li>Check for other respiratory symptoms</li>        <li>Considers cardiac symptoms as well</li>        <li>Elicits concern regarding MI</li>        <li>Elicits risk factors – smoker and hypertension</li>    </ul></div><div class="history-div">    <span class="tag is-primary">Skillfulness</span>    <ul>        <li>Appropriately utilises open/closed questioning</li>        <li>Shares managements options with patient and reaches a plan</li>        <li>All students should allow the patient to talk and listen</li>        <li>All students should facilitate responses both verbally and non-verbally</li>        <li>All students should use open and closed questions to good effect</li>        <li>Good students will respond to cues, clarify points of uncertainty, summarise appropriately and invite correction</li>    </ul></div><div class="history-div">    <span class="tag is-primary">Supportiveness</span>    <li>All students should display some empathy/care/concern</li>    <li>All students should display good active listening skills</li>    <li>Good students will explore the patient’s concerns</li>    <li>Good students will alleviate concerns as far as is possible</li>    <li>Good students will put the patient at ease and engender trust through the consultation</li>    <li>Address concern of MI. by patient </li>    <li>Supportive during pain and breathlessness</li></div><div class="history-div">    <span class="tag is-primary">Efficiency</span>    <ul>    <li>All students should clarify the tasks of the consultation at the start with the patient</li>    <li>All students should complete the tasks in the time allocated</li>    <li>All students should allocate appropriate time to each element of the consultation</li>    <li>Good students will have a well-structured consultation with student taking appropriate level of control</li>    <li>Good students will reach a conclusion and enable next steps to be discussed</li>    </ul></div><div class="history-div">    <span class="tag is-primary">Saftey</span>    <ul>    <li>Checks red flags and no worrying or dangerous actions or omissions</li>    <li>Arranges appropriate follow up/safety netting</li>    <li>All students should identify self and role, and ensure the patient’s identity is clear</li>    <li>All students should ensure the consultation enhances health and wellbeing of patient(s)</li>    <li>All students should act and within their competence and professional boundaries</li>    <li>All students should ensure specific features of the consultation relating to safety are met: details</li>    <li>Good students may ask about symptoms of serious complications or consequences: details</li>    <li>Good students will ensure the patient is clear regarding appropriate management/follow up</li>    <li>Asks for haemoptysis/weight loss. Recognises need for further investigations (CXR / D Dimer / CTPA)</li>    </ul></div>`
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