import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./Detail.css";

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
    image: "/src/assets/heartAttackImg.jpg",
  },
  cancer: {
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
    image: "/src/assets/cancerImg.jpg",
  },
  pneumonia: {
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
    image: "/src/assets/pneumoniaImg.jpg",
  },
  obesity: {
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
    image: "/src/assets/obesityImg.png",
  },
  diabetes: {
    title: "Diabetes",
    description: `Diabetes is a chronic condition that affects how your body processes blood sugar (glucose). It occurs when the body either does not produce enough insulin or cannot effectively use the insulin it produces.

    Common Symptoms:
    1. Frequent urination.
    2. Excessive thirst and hunger.
    3. Unexplained weight loss.
    4. Fatigue and irritability.
    5. Slow healing of wounds and frequent infections.

    Risk Factors & Prevention:
    Risk factors include obesity, lack of exercise, unhealthy diet, family history, and high blood pressure.  
    Managing weight, eating a balanced diet, staying active, and monitoring blood sugar levels can help prevent or control diabetes. Some individuals may require medication or insulin therapy.`,
    image: "/src/assets/diabetes.jpg",
    },
   stroke: {
    title: "Stroke",
    description: `A stroke occurs when the blood supply to a part of the brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients. This can lead to brain damage and loss of function.

    Common Symptoms:
    1. Sudden numbness or weakness in the face, arm, or leg, especially on one side of the body.
    2. Confusion, trouble speaking, or understanding speech.
    3. Vision problems in one or both eyes.
    4. Severe headache with no known cause.
    5. Loss of balance or coordination.

    Risk Factors & Prevention:
    High blood pressure, smoking, obesity, high cholesterol, diabetes, and heart disease are major risk factors.  
    Preventive measures include maintaining a healthy diet, regular exercise, controlling blood pressure and cholesterol, and avoiding smoking and excessive alcohol consumption.`,
    image: "/src/assets/Stroke.png",
    },
   alzheimer: {
    title: "Alzheimer's Disease",
    description: `Alzheimer's disease is a progressive brain disorder that affects memory, thinking, and behavior. It is the most common cause of dementia in older adults.

    Common Symptoms:
    1. Memory loss that disrupts daily life.
    2. Difficulty planning or solving problems.
    3. Confusion with time or place.
    4. Trouble understanding visual images and spatial relationships.
    5. Changes in mood, personality, and social withdrawal.

    Risk Factors & Prevention:
    Age, family history, and genetics play a role, but lifestyle factors like a healthy diet, regular physical activity, mental stimulation, and good sleep may help reduce the risk or slow progression.`,
    image: "/src/assets/alzheimer.jpg",
    },
   asthma: {
    title: "Asthma",
    description: `Asthma is a chronic respiratory condition that causes inflammation and narrowing of the airways, leading to breathing difficulties.

    Common Symptoms:
    1. Shortness of breath.
    2. Wheezing or whistling sound when breathing.
    3. Chest tightness or pain.
    4. Coughing, especially at night or early morning.
    5. Increased symptoms during exercise, cold air exposure, or allergen exposure.

    Risk Factors & Prevention:
    Risk factors include family history, allergies, smoking, air pollution, and respiratory infections.  
    While asthma cannot be cured, managing triggers, using prescribed inhalers, and following a doctor's advice can help control symptoms and prevent severe attacks.`,
    image: "/src/assets/asthma.jpg",
  },
};

function DetailPage() {
  const { id } = useParams();
  const disease = diseaseData[id];

  if (!disease) {
    return (
      <Container className="py-5">
        <h2>Disease Not Found</h2>
      </Container>
    );
  }

  return (
    <div className="detail-container">
      <img src={disease.image} alt={disease.title} className="img" />
      <h2 className="header">{disease.title}</h2>
      <p className="description">
        {disease.description.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}

export default DetailPage;
