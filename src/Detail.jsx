import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './Detail.css';

const diseaseData = {
    "heart-attack": {
        title: "Heart Attack",
        description: `A heart attack, also known as a myocardial infarction (MI), occurs when the blood flow to a part of the heart is blocked for a long enough time that part of the heart 
    muscle is damaged or dies. This is usually caused by a blockage in one or more of the coronary arteries, which supply oxygen-rich blood to the heart muscle.

    Symptoms of a heart attack can vary but commonly include:
    1. Chest pain or discomfort: This may feel like pressure, squeezing, fullness, or pain in the center or left side of the chest. It can last for a few minutes or come and go.
    2. Upper body discomfort: Pain or discomfort may also be felt in one or both arms, the back, neck, jaw, or stomach.
    3. Shortness of breath: This can occur with or without chest discomfort.
    4. Other symptoms: These can include nausea, vomiting, lightheadedness, or breaking out in a cold sweat.

    If you suspect you or someone else is having a heart attack, it's crucial to seek emergency medical treatment immediately. Quick treatment can help minimize damage to the heart muscle and improve the chances of survival.

    Risk Factors & Prevention:
    Risk factors for heart attacks include high blood pressure, high cholesterol, smoking, obesity, lack of physical activity, diabetes, and a family history of heart disease.  
    Making lifestyle changes such as adopting a healthy diet, exercising regularly, quitting smoking, managing stress, and controlling conditions like high blood pressure 
    and diabetes can help reduce the risk of heart attacks. Additionally, medications such as aspirin, statins, and blood pressure medications may be prescribed to lower 
    the risk in some individuals. Regular check-ups with a healthcare provider can also help monitor and manage risk factors for heart disease.`,
        image: "/src/assets/heartAttackImg.jpg"
    },
    "cancer": {
        title: "Cancer",
        description: `Cancer is a disease in which some of the body's cells grow uncontrollably and spread to other parts of the body. It can develop in almost any organ or tissue of the body.
    
    Common Symptoms:
    1. Unexplained weight loss: Losing weight without trying may be a warning sign.
    2. Fatigue: Persistent tiredness that does not improve with rest.
    3. Lumps or swelling: A lump anywhere in the body, especially in the breast or lymph nodes.
    4. Changes in the skin: Such as darkened skin, yellowing, or new moles.
    5. Persistent cough or difficulty swallowing.

    Risk Factors & Prevention:
    Risk factors include smoking, excessive alcohol consumption, unhealthy diet, lack of exercise, family history, and exposure to harmful chemicals.  
    Regular screenings, avoiding tobacco, maintaining a healthy diet, and getting vaccinated (e.g., HPV vaccine) can help lower the risk of certain cancers.`,
        image: "/src/assets/cancerImg.jpg"
    },
    "pneumonia": {
        title: "Pneumonia",
        description: `Pneumonia is a lung infection caused by bacteria, viruses, or fungi. It leads to inflammation in the air sacs of one or both lungs, which may fill with fluid.

    Common Symptoms:
    1. Cough with phlegm or pus.
    2. Fever, sweating, and chills.
    3. Shortness of breath or difficulty breathing.
    4. Chest pain that worsens with breathing or coughing.
    5. Fatigue and confusion (especially in older adults).

    Risk Factors & Prevention:
    Risk factors include a weakened immune system, chronic diseases (such as COPD or asthma), smoking, and age (very young or elderly).  
    Vaccination (e.g., pneumococcal vaccine), good hygiene, and avoiding smoking can help prevent pneumonia.`,
        image: "/src/assets/pneumoniaImg.jpg"
    },
    "obesity": {
        title: "Obesity",
        description: `Obesity is a medical condition characterized by excessive body fat accumulation, increasing the risk of various health problems.

    Health Risks Associated with Obesity:
    1. Heart disease & high blood pressure.
    2. Type 2 diabetes.
    3. Sleep apnea & breathing problems.
    4. Certain types of cancer.
    5. Joint problems & osteoarthritis.

    Causes & Prevention: 
    The primary causes include an unhealthy diet, lack of physical activity, genetics, and certain medical conditions.  
    Maintaining a balanced diet, regular exercise, and behavior modifications can help manage and prevent obesity.`,
        image: "/src/assets/obesityImg.png"
    }
};

function DetailPage() {
    const { id } = useParams();
    const disease = diseaseData[id];

    if (!disease) {
        return <Container className="py-5"><h2>Disease Not Found</h2></Container>;
    }

    return (
        <div className="detail-container">
            <img src={disease.image} alt={disease.title} className="img" />
            <h2 className="header">{disease.title}</h2>
            <p className="description">{disease.description.split("\n").map((line, index) => (
                <span key={index}>{line}<br /></span>
            ))}</p>
        </div>
    );
}

export default DetailPage;
