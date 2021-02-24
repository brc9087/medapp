const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const diagnosisSeed = [
  {
    category: "head",
    name: "Cluster Headaches",
    description:
      "Cluster headaches occur one to three times a day and last a few minutes to several hours. These daily headache clusters occur for several weeks and then go away for months or even years. Cluster headaches are the rarest and most severe type of headache. Men tend to get them more than women. Pain occurs behind one eye on one side of the head. The eye and nose on that side may become swollen, red, and runny. Attacks come at the same time every day and the intense pain makes it hard to sit still. Many people with cluster headaches pace restlessly or rock back and forth during an attack. Medication helps prevent headaches, lessen the pain, and shorten the duration of an attack. Cluster headaches aren't dangerous, but they make it difficult to work and do daily activities.",
    treatment:
      "Medications to help prevent headaches, such as beta blockers, anticonvulsants, antidepressants, calcium channel blockers, and corticosteroids. Breathing 100% oxygen at the start of a headache to lessen pain. Medications to relieve headache pain and shorten attacks, such as triptans, ergot alkaloids, and others. Surgery for some people if medications don't work.",
    symptoms:
      "Sharp, burning pain on one side of the head behind one eye, eye swelling and redness, tearing, runny nose, red face"
  },
  {
    category: "head",
    name: "Migraine Headache",
    description: "Migraines are a common type of headache that can cause severe pain. They can last for a few hours or a few days and may cause throbbing, sensitivity to sound or light, nausea, or vomiting. Migraines are caused by abnormal brain activity that is triggered by certain foods, stress, or other factors. Some people have an aura before a migraine, which can have symptoms that include temporary vision loss, seeing stars or flashes, or a tingling in an arm or leg. There is no cure for migraines, but medications can help reduce pain or stop migraines from occurring.",
    treatment: "Severe migraines are usually treated with prescription medicines called triptans, anti-nausea medicine, or sedatives. Pain-relieving medications usually work best when taken at the first sign of a migraine. Frequent migraines can sometimes be prevented by taking medications such as beta-blockers, antidepressants, antiseizure drugs, or by getting a Botox injection in the muscles of the forehead and neck.",
    symptoms: "The most common symptoms of migraine include a dull or severe headache that may be worse on one side of the head, and a throbbing, pulsating, or pounding in the head. Other symptoms may include loss of appetite, nausea and vomiting, sensitivity to sound or light, chills, sweating, numbness or tingling, and increased urination."
  },
  {
    category: "head",
    name: "Motion Sickness",
    description: "Motion sickness is a feeling of queasiness or nausea that occurs for some people when they are moving in a car, bus, boat, or plane. Experts think it results when sensory input about motion from the brain, the eyes, and inner ear conflict. Some people feel better if they keep their eyes focused on the horizon or on stationary objects. A variety of medications help prevent motion sickness.",
    treatment: "A variety of medications, both over-the-counter and prescription, can prevent or ease motion sickness.",
    symptoms: "The primary symptom of motion sickness is nausea. Other symptoms include dizziness, vomiting, sweating, and increased salivation"

  },
  {
    category: "head",
    name: "Medication Overuse Headache",
    description: "When a headache strikes, most of us head for the medicine cabinet or local pharmacy and take an over-the-counter pain pill such as acetaminophen, aspirin, ibuprofen, or pain-relieving drugs with caffeine. But when you don’t follow the instructions on the bottle or from your doctor, these medicines could give you a rebound headache. When the pain reliever wears off, your body may have a withdrawal reaction, prompting you to take more medicine, which only leads to another headache. And so the cycle continues until you start to have daily headaches with more severe pain more often.",
    treatment: "Aspirin, Sinus relief medications, Acetaminophen, Nonsteroidal anti-inflammatory drugs (NSAIDs), such as ibuprofen and naproxen,   Sedatives for sleep, Codeine and prescription narcotics, Triptan drugs for migraine, such as naratriptan (Amerge), sumatriptan (Imitrex),  zolmitriptan (Zomig), and others",
    symptoms: "The most common symptoms of migraine include a dull or severe headache that may be worse on one side of the head, and a throbbing, pulsating, or pounding in the head. Other symptoms may include loss of appetite, nausea and vomiting, sensitivity to sound or light, chills, sweating, numbness or tingling, and increased urination."
  },
  {
    category: "head",
    name: "Dry Eye syndrome",
    description: "Dry eye syndrome happens when the eye can't make tears to coat itself or when tears aren't the right consistency and dry too fast. The eye's surface may also become swollen. Dry eye syndrome can be the result of some medicines, pregnancy, allergies, and conditions such as rheumatoid arthritis. You can develop dry eye syndrome even if you're healthy, and you're more likely to have it as you get older because you make fewer tears as you age. Dry eye syndrome can cause pain, blurred vision, redness, light sensitivity, and often makes reading unpleasant. It can be either temporary or long-term. Eyedrops or medications may ease dry eye syndrome. In severe cases, doctors may suggest surgery. Without proper care, dry eye syndrome can cause eye damage and vision loss.",
    treatment: "Switching medications if a medicine you are taking is causing dry eye syndrome. Taking medications to help make more tears or reduce swelling. Taking dietary supplements such as omega-3 fatty acids. Temporarily plugging the holes where tears drain so tears stay on the eye's surface. Having surgery to close tear drainage holes permanently  ",
    symptoms: "The most common symptoms of migraine include a dull or severe headache that may be worse on one side of the head, and a throbbing, pulsating, or pounding in the head. Other symptoms may include loss of appetite, nausea and vomiting, sensitivity to sound or light, chills, sweating, numbness or tingling, and increased urination."
  },
  {
    category: "respiratory",
    name: "Flu",
    description: "Flu (often referred as influenza), is a viral infection of the nose, sinuses, throat, and respiratory tract by an influenza or parainfluenza virus. It’s seasonal, often occurring in winter, and can spread rapidly, called then flu epidemic. Swine flu and bird (avian) flu are specific strains of flu.",
    treatment: "Even today flu can have fatal consequences for those with pre-existing conditions and requires a hospital stay with emergency medical measures. Normally it is self-limited and the body recovers by itself. A doctor may prescribe medication to help shorten the course of the flu if taken early. Bed rest and staying hydrated are usually sufficient. Medications such as Ibuprofen or Aspirin can lower a fever and relieve symptoms, but they will not shorten the course of the illness and should be used in children with caution. Flu vaccine is recommended for the following groups at risk: nursing infants, people over 60, people with compromised immune systems, and pregnant women.",
    symptoms: "Reduced appetite,Shortness of breath,Eye redness,Sputum,Burning in the throat,Chest pain,Fever,Pain in the limbs,Sore throat,Cough,Headache,Swollen glands on the neck,Swollen glands in the armpits,Tiredness,Runny nose,Sneezing,Chills,Sweating,Stuffy nose,Cough with sputum,Stiff neck,Muscle weakness"
  },

  {
    category: "respiratory",
    name: "asthma",
    description: "Asthma is a lung condition that causes airways to swell and become inflamed. Asthma makes it hard to breathe.",
    treatment: "Long-term control medications include inhaled corticosteroids, leukotriene modifiers, long-acting beta agonists, combination inhalers, omalizumab (Xolair). Quick-relief or rescue medications include short-acting bronchodilators and oral corticosteroids",
    symptoms: " wheezing, chest tightness or pain, shortness of breath, and cough. Symptoms of a severe asthma attack may include blue lips, difficulty speaking, confusion, extreme difficulty breathing, sweating, and anxiety."
  },

  {
    category: "respiratory",
    name: "bacterial pneumonia",
    description: "Bacterial pneumonia is a lung infection caused by bacteria. Pneumococcal bacteria are the most common cause, but pneumonia also may be caused by other bacteria.",
    treatment: "You need to take antibiotics to treat bacterial pneumonia. Your doctor also may suggest that you take a cough suppressant. In some cases, you may need to be treated in the hospital.",
    symptoms: "The symptoms of bacterial pneumonia can vary from person to person. Common symptoms include cough, shortness of breath, fever, chills, headache, muscle aches, and fatigue."
  },
  {
    category: "respiratory",
    name: "coronavirus",
    description: "A coronavirus is a kind of common virus that causes an infection in your nose, sinuses, or upper throat. Most coronaviruses aren't dangerous.",
    treatment: "There’s no specific treatment for COVID-19. People who get a mild case need care to ease their symptoms, like rest, fluids, and fever control. Take over-the-counter medicine for a sore throat, body aches, and fever. But don't give aspirin to children or teens younger than 19.",
    symptoms: "coughing, fever, shortness of breath, fatigue, headache, loss of smell or taste"
  },

  {
    category: "chest pain",
    name: "rib fracture",
    description: "Broken ribs are a common injury. A blow to the chest -- during a car accident, a fall, or a football game -- may break a rib.",
    treatment: "rest, Over-the-counter or prescription medicines to reduce pain and swelling, Icing the area for 10 minutes at a time ",
    symptoms: "A broken rib causes a sore, swollen spot on your chest. The pain may be mild or intense -- some people mistake it for a heart attack. The pain will be worse when breathing deeply, coughing or sneezing, and bending or twisting your body."
  },
  {
    category: "chest pain",
    name: "heart burn/ GERD",
    description: "Heartburn happens when stomach acid backs up into your esophagus, irritating the lining of the esophagus. ",
    treatment: "Treatment for heartburn and GERD usually begins with over-the-counter antacids and medications to help reduce stomach acid. You also may want to avoid the foods and drinks that make your symptoms worse. If these treatments don't relieve symptoms, you may need prescription medications, surgery, or other procedures.",
    symptoms: "The most common symptoms of heartburn and GERD are a burning feeling in the chest, throat, or mouth, nausea after eating, and a feeling that food is trapped low in your throat."
  },
  {
    category: "chest pain",
    name: "pulmonary embolism",
    description: "A pulmonary embolism is a blood clot that forms in a vein, usually in the leg, travels to the lung, and lodges there. You may have shortness of breath, even while resting, or feel as if you're having a heart attack. It is an emergency, because one large pulmonary embolism or several small ones can be fatal. Blood-thinning medication is the standard treatment. Most people who are treated for pulmonary embolism survive. Those who are older, have an underlying illness, or do not get diagnosed promptly are at greater risk of dying. ",
    treatment: "Anticoagulant medication or thrombolytic medication to dissolve the clot, Surgery to remove the clot  ",
    symptoms: "Symptoms of pulmonary embolism may include shortness of breath or rapid breathing; chest pain, which may be worsened with deep breathing; coughing or spitting up blood; anxiety, restlessness, lightheadedness, or rapid heartbeat."
  },
  {
    category: "chest pain",
    name: "panic attack",
    description: "When someone has a panic attack, that person feels a sudden, intense fear that can't be controlled. People who have panic attacks often feel like they are having a heart attack, losing control, suffocating, or dying. During the panic attack, the person also may have chest pain, nausea, shortness of breath, chills, sweating, dizziness, or a feeling of choking. Doctors don't know for certain what causes panic attacks, but it may have to do with genetics or stress.",
    treatment: "Antidepressant medications, such as fluoxetine (Prozac), paroxetine (Paxil), sertraline (Zoloft), and venlafaxine (Effexor), Mild sedatives, such as alprazolam (Xanax) and clonazepam (Klonopin)",
    symptoms: "Symptoms of a panic attack include a feeling of doom, shakiness, racing heartbeat, sweating, chills, chest pain, shortness of breath, nausea, faintness, and headache."
  },

  {
    category: "abdomen",
    name: "Appendicitis",
    descrition: "Appendicitis is a serious infection of the appendix, a small fingerlike tube located where the large and small intestine join.",
    treatment: "Doctors can diagnose most appendicitis by taking a medical history and doing a physical exam. Blood and urine tests, X-rays, a CT scan, and ultrasound also may be done to confirm the diagnosis or rule out other causes.",
    symptoms: "Symptoms of appendicitis include abdominal pain that may occur suddenly near the belly button and move to the lower right, nausea, vomiting, loss of appetite, low-grade fever (after other symptoms), constipation, abdominal swelling, and inability to pass gas."
  },
  {
    category: "abdomen",
    name: "Gas",
    description: "Gas is a normal result of the foods you eat. As your digestive system does its thing, it makes gas.",
    treatment: "Gas problems are treated by changing your diet and by training yourself to swallow less air. There are also prescription and over-the-counter medications that can help. Changing your diet will mean getting rid of the foods that cause gas.Unfortunately, this may also result in you having fewer nutritious foods.Ask your doctor to help you build a diet that’s healthy but doesn't cause much gas",
    symptoms: "In addition to burping and flatulence, you may feel bloated. You could also have pain in your belly or sides. That pain could be mistaken for something else, like a heart attack or appendicitis."
  },
  {
    category: "abdomen",
    name: "Diverticulitis",
    description: "Diverticula are small pouches that bulge out from weak spots in colon walls. Over time, pressure and strain from passing hard stools causes these weak areas. The condition is common in people over age 40. ",
    treatment: "Liquid diet during attacks,Antibiotics,Surgery, for severe cases ,High-fiber diet once the infection has gone",
    symptoms: "Abdominal pain, cramping, constipation, fevers, chills, weakness, fatigue, sweating, weight loss, and nausea"
  },
  {
    category: "abdomen",
    name: "Gastritis",
    description: "Gastritis is an inflammation of the stomach lining that can be caused by H. pylori bacteria, NSAIDs and or alcohol, and can be aggravated by spicy foods, stress, and excess acid. Gastritis causes stomach upset, irritation, and pain that can last just minutes or for hours. In some people, gastritis becomes a chronic problem.",
    treatment: "Minor gastritis can usually be treated at home with antacids and acid-suppressing medicine available over the counter. If your symptoms are severe or last more than a day or two, see your doctor right away. Avoiding alcohol and tobacco ",
    symptoms: "Gastritis symptoms include upper abdominal pain and cramping; diarrhea (loose stools) with or without blood or mucus; low-grade fever; nausea and vomiting; loss of appetite; and black, tarry stools, which may be a sign of internal bleeding"
  },

  {
    category: "abdomen",
    name: "Diverticulitis",
    description: "Diverticula are small pouches that bulge out from weak spots in colon walls. Over time, pressure and strain from passing hard stools causes these weak areas. The condition is common in people over age 40. ",
    treatment: "Liquid diet during attacks,Antibiotics,Surgery, for severe cases ,High-fiber diet once the infection has gone",
    symptoms: "Abdominal pain, cramping, constipation, fevers, chills, weakness, fatigue, sweating, weight loss, and nausea"

  },

  {
    category: "Spinal",
    name: "Hyperparathyroidism",
    description: "Hyperparathyroidism is a disorder of the parathyroid glands that makes them secrete too much parathyroid hormone (PTH). PTH helps maintain a balance of calcium and phosphorus in the body.",
    treatment: "Surgery is the main treatment for hyperparathyroidism. It removes the enlarged gland or glands. Some doctors also prescribe medication called calcimimetics that turn off the secretion of PTH.",
    description: "Vague symptoms of hyperparathyroidism include fatigue, weakness, depression, and aches and pain. More severe symptoms include confusion, memory problems, increased thirst, increased urination, bone and joint pain, multiple fractures, high blood pressure, or pain from kidney stones.",
    symptoms: "Vague symptoms of hyperparathyroidism include fatigue, weakness, depression, and aches and pain."
  },
  {
    category: "Spinal",
    name: "Vertebral Compression Fracture",
    description: "A vertebral compression fracture occurs when one of the vertebrae in the spine is broken. A vertebral compression fracture can be caused by a severe injury to the spine, such as a car accident, sports injury, or fall.",
    treatment: "backbrace, pain medications, physical therapy.",
    symptoms: "Pain in the lower, middle, or upper back; weakness; numbness or tingling"
  },
  {
    category: "Spinal",
    name: "Rheumatoid Arthritis",
    description: "Rheumatoid arthritis is an autoimmune disease that causes your own body to attack your joints, which causes pain, swelling, and joint damage.",
    treatment: "backbrace, pain medications, physical therapy, SURGERY.",
    symptoms: "Symptoms of RA include joint pain, swelling, fever, fatigue, swollen glands, weight loss, morning stiffness, and red hands."
  },
  {
    category: "Spinal",
    name: "Ankylosing Spondylitis",
    description: "Ankylosing spondylitis is a long-lasting spinal condition in which the joints between the bones of the spine become inflamed. Over time, this causes the bones to fuse together, making your spine less flexible.",
    treatment: "Nonsteroidal anti-inflammatory drugs, Corticosteroids, Tumor necrosis factor (TNF) blockers, Physical therapy, Surgery",
    symptoms: "The major symptoms are low back pain or stiffness and fatigue; less common symptoms include eye inflammation, hip pain, heel pain, swelling in other joints, loss of appetite, weight loss, mild fever."
  },
  {
    category: "Spinal",
    name: "Lumbar (Low-Back) Herniated Disc",
    description: "A lumbar herniated disc occurs when one of the discs in your lower spine moves out of place. This causes pressure on the nerves and can cause low back pain or weakness, numbness, or tingling in the low back.",
    treatment: "A short period of rest, Anti-inflammatory medications, Pain medications, Muscle relaxers, Physical therapy, Steroid injections, Surgery",
    symptoms: "Low back pain, weakness, numbness or tingling in the low back; pain in hip, leg, or foot"

  }

];

db.Diagnosis
  .remove({})
  .then(() => db.Diagnosis.collection.insertMany(diagnosisSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });