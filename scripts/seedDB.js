const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/onlysymps"
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
    name: "Asthma",
    description: "Asthma is a lung condition that causes airways to swell and become inflamed. Asthma makes it hard to breathe.",
    treatment: "Long-term control medications include inhaled corticosteroids, leukotriene modifiers, long-acting beta agonists, combination inhalers, omalizumab (Xolair). Quick-relief or rescue medications include short-acting bronchodilators and oral corticosteroids",
    symptoms: " wheezing, chest tightness or pain, shortness of breath, and cough. Symptoms of a severe asthma attack may include blue lips, difficulty speaking, confusion, extreme difficulty breathing, sweating, and anxiety."
  },

  {
    category: "respiratory",
    name: "Bacterial Pneumonia",
    description: "Bacterial pneumonia is a lung infection caused by bacteria. Pneumococcal bacteria are the most common cause, but pneumonia also may be caused by other bacteria.",
    treatment: "You need to take antibiotics to treat bacterial pneumonia. Your doctor also may suggest that you take a cough suppressant. In some cases, you may need to be treated in the hospital.",
    symptoms: "The symptoms of bacterial pneumonia can vary from person to person. Common symptoms include cough, shortness of breath, fever, chills, headache, muscle aches, and fatigue."
  },
  {
    category: "respiratory",
    name: "Coronavirus",
    description: "A coronavirus is a kind of common virus that causes an infection in your nose, sinuses, or upper throat. Most coronaviruses aren't dangerous.",
    treatment: "There’s no specific treatment for COVID-19. People who get a mild case need care to ease their symptoms, like rest, fluids, and fever control. Take over-the-counter medicine for a sore throat, body aches, and fever. But don't give aspirin to children or teens younger than 19.",
    symptoms: "coughing, fever, shortness of breath, fatigue, headache, loss of smell or taste"
  },

  {
    category: "cardiac",
    name: "Rib Fracture",
    description: "Broken ribs are a common injury. A blow to the chest -- during a car accident, a fall, or a football game -- may break a rib.",
    treatment: "rest, Over-the-counter or prescription medicines to reduce pain and swelling, Icing the area for 10 minutes at a time ",
    symptoms: "A broken rib causes a sore, swollen spot on your chest. The pain may be mild or intense -- some people mistake it for a heart attack. The pain will be worse when breathing deeply, coughing or sneezing, and bending or twisting your body."
  },
  {
    category: "cardiac",
    name: "Heart Burn/ GERD",
    description: "Heartburn happens when stomach acid backs up into your esophagus, irritating the lining of the esophagus. ",
    treatment: "Treatment for heartburn and GERD usually begins with over-the-counter antacids and medications to help reduce stomach acid. You also may want to avoid the foods and drinks that make your symptoms worse. If these treatments don't relieve symptoms, you may need prescription medications, surgery, or other procedures.",
    symptoms: "The most common symptoms of heartburn and GERD are a burning feeling in the chest, throat, or mouth, nausea after eating, and a feeling that food is trapped low in your throat."
  },
  {
    category: "cardiac",
    name: "Pulmonary Embolism",
    description: "A pulmonary embolism is a blood clot that forms in a vein, usually in the leg, travels to the lung, and lodges there. You may have shortness of breath, even while resting, or feel as if you're having a heart attack. It is an emergency, because one large pulmonary embolism or several small ones can be fatal. Blood-thinning medication is the standard treatment. Most people who are treated for pulmonary embolism survive. Those who are older, have an underlying illness, or do not get diagnosed promptly are at greater risk of dying. ",
    treatment: "Anticoagulant medication or thrombolytic medication to dissolve the clot, Surgery to remove the clot  ",
    symptoms: "Symptoms of pulmonary embolism may include shortness of breath or rapid breathing; chest pain, which may be worsened with deep breathing; coughing or spitting up blood; anxiety, restlessness, lightheadedness, or rapid heartbeat."
  },
  {
    category: "cardiac",
    name: "Panic Attack",
    description: "When someone has a panic attack, that person feels a sudden, intense fear that can't be controlled. People who have panic attacks often feel like they are having a heart attack, losing control, suffocating, or dying. During the panic attack, the person also may have chest pain, nausea, shortness of breath, chills, sweating, dizziness, or a feeling of choking. Doctors don't know for certain what causes panic attacks, but it may have to do with genetics or stress.",
    treatment: "Antidepressant medications, such as fluoxetine (Prozac), paroxetine (Paxil), sertraline (Zoloft), and venlafaxine (Effexor), Mild sedatives, such as alprazolam (Xanax) and clonazepam (Klonopin)",
    symptoms: "Symptoms of a panic attack include a feeling of doom, shakiness, racing heartbeat, sweating, chills, chest pain, shortness of breath, nausea, faintness, and headache."
  },
  {
    category: "cardiac",
    name: "Costochondritis",
    description: "Costochondritis occurs when the cartilage connecting the ribs to the breastbone becomes inflamed. Pain affects one or both sides of the breastbone. Injury, a viral infection, or strain from coughing can trigger the condition. Diseases such as arthritis and fibromyalgia also may cause costochondritis. Usually, there is no clear cause. While harmless, the condition often is mistaken for a heart attack. Costochondritis affects women more than men and usually goes away on its own within a few days or weeks.",
    treatment: "Costochondritis treatment includes: Applying heat or ice, Anti-inflammatory medications, Avoiding activities that make pain worse, Cortisone injections for severe pain",
    symptoms: "Costochondritis symptoms include sharp pain in the front of the chest. The pain may migrate to the back or abdomen and can be mistaken for a heart attack. Pain usually affects the second to fifth rib joints, particularly ribs three and four, and gets worse with movement and breathing deeply. If rib swelling occurs along with pain, then it's a different but similar condition called Tietze's syndrome."
  },
  {
    category: "cardiac",
    name: "Heart Attack",
    description: "A heart attack happens when something blocks the blood flow to your heart so it can’t get the oxygen it needs. More than a million Americans have heart attacks each year. Heart attacks are also called myocardial infarctions (MI). Myo means muscle, cardial refers to the heart, and infarction means death of tissue because of a lack of blood supply. This tissue death can cause lasting damage to your heart muscle..",
    treatment: "Treatment begins right away, sometimes in the ambulance or emergency room. Drug therapy aims to break up or prevent blood clots, stop platelets from collecting and sticking to the plaque, stabilize the plaque, and prevent more ischemia. Take these medications as soon as possible (within 1 or 2 hours from the start of your heart attack, if possible) to limit heart damage. Cardiac catheterization. In addition to making a picture of your arteries, cardiac cath can be used for procedures (such as angiography or stent) to open narrowed or blocked arteries. Bypass surgery. You might have bypass surgery in the days after a heart attack to restore the blood supply to your heart.",
    symptoms: "Discomfort, pressure, heaviness, tightness, squeezing, or pain in your chest or arm or below your breastbone, Discomfort that goes into your back, jaw, throat, or arm, Fullness, indigestion, or a choking feeling (it may feel like heartburn), Sweating, upset stomach, vomiting, or dizziness, Severe weakness, anxiety, fatigue, or shortness of breath, Fast or uneven heartbeat"
  },

  {
    category: "abdominal",
    name: "Appendicitis",
    descrition: "Appendicitis is a serious infection of the appendix, a small fingerlike tube located where the large and small intestine join.",
    treatment: "Doctors can diagnose most appendicitis by taking a medical history and doing a physical exam. Blood and urine tests, X-rays, a CT scan, and ultrasound also may be done to confirm the diagnosis or rule out other causes.",
    symptoms: "Symptoms of appendicitis include abdominal pain that may occur suddenly near the belly button and move to the lower right, nausea, vomiting, loss of appetite, low-grade fever (after other symptoms), constipation, abdominal swelling, and inability to pass gas."
  },
  { 
    category: "abdominal",
    name: "Gas",
    description: "Gas is a normal result of the foods you eat. As your digestive system does its thing, it makes gas.",
    treatment: "Gas problems are treated by changing your diet and by training yourself to swallow less air. There are also prescription and over-the-counter medications that can help. Changing your diet will mean getting rid of the foods that cause gas.Unfortunately, this may also result in you having fewer nutritious foods.Ask your doctor to help you build a diet that’s healthy but doesn't cause much gas",
    symptoms: "In addition to burping and flatulence, you may feel bloated. You could also have pain in your belly or sides. That pain could be mistaken for something else, like a heart attack or appendicitis."
  },
  {
    category: "abdominal",
    name: "Diverticulitis",
    description: "Diverticula are small pouches that bulge out from weak spots in colon walls. Over time, pressure and strain from passing hard stools causes these weak areas. The condition is common in people over age 40. ",
    treatment: "Liquid diet during attacks,Antibiotics,Surgery, for severe cases ,High-fiber diet once the infection has gone",
    symptoms: "Abdominal pain, cramping, constipation, fevers, chills, weakness, fatigue, sweating, weight loss, and nausea"
  },
  {
    category: "abdominal",
    name: "Gastritis",
    description: "Gastritis isan inflammation of the stomach lining that can be caused by H. pylori bacteria, NSAIDs and or alcohol, and can be aggravated by spicy foods, stress, and excess acid. Gastritis causes stomach upset, irritation, and pain that can last just minutes or for hours. In some people, gastritis becomes a chronic problem.",
    treatment: "Minor gastritis can usually be treated at home with antacids and acid-suppressing medicine available over the counter. If your symptoms are severe or last more than a day or two, see your doctor right away. Avoiding alcohol and tobacco ",
    symptoms: "Gastritis symptoms include upper abdominal pain and cramping; diarrhea (loose stools) with or without blood or mucus; low-grade fever; nausea and vomiting; loss of appetite; and black, tarry stools, which may be a sign of internal bleeding"
  },

  {
    category: "abdominal",
    name: "Diverticulitis",
    description: "Diverticula are small pouches that bulge out from weak spots in colon walls. Over time, pressure and strain from passing hard stools causes these weak areas. The condition is common in people over age 40. ",
    treatment: "Liquid diet during attacks,Antibiotics,Surgery, for severe cases ,High-fiber diet once the infection has gone",
    symptoms: "Abdominal pain, cramping, constipation, fevers, chills, weakness, fatigue, sweating, weight loss, and nausea"

  },

  {
    category: "musculoskeletal",
    name: "Hyperparathyroidism",
    description: "Hyperparathyroidism is a disorder of the parathyroid glands that makes them secrete too much parathyroid hormone (PTH). PTH helps maintain a balance of calcium and phosphorus in the body.",
    treatment: "Surgery is the main treatment for hyperparathyroidism. It removes the enlarged gland or glands. Some doctors also prescribe medication called calcimimetics that turn off the secretion of PTH.",
    description: "Vague symptoms of hyperparathyroidism include fatigue, weakness, depression, and aches and pain. More severe symptoms include confusion, memory problems, increased thirst, increased urination, bone and joint pain, multiple fractures, high blood pressure, or pain from kidney stones.",
    symptoms: "Vague symptoms of hyperparathyroidism include fatigue, weakness, depression, and aches and pain."
  },
  {
    category: "musculoskeletal",
    name: "Vertebral Compression Fracture",
    description: "A vertebral compression fracture occurs when one of the vertebrae in the spine is broken. A vertebral compression fracture can be caused by a severe injury to the spine, such as a car accident, sports injury, or fall.",
    treatment: "backbrace, pain medications, physical therapy.",
    symptoms: "Pain in the lower, middle, or upper back; weakness; numbness or tingling"
  },
  {
    category: "musculoskeletal",
    name: "Rheumatoid Arthritis",
    description: "Rheumatoid arthritis is an autoimmune disease that causes your own body to attack your joints, which causes pain, swelling, and joint damage.",
    treatment: "backbrace, pain medications, physical therapy, SURGERY.",
    symptoms: "Symptoms of RA include joint pain, swelling, fever, fatigue, swollen glands, weight loss, morning stiffness, and red hands."
  },
  {
    category: "musculoskeletal",
    name: "Ankylosing Spondylitis",
    description: "Ankylosing spondylitis is a long-lasting spinal condition in which the joints between the bones of the spine become inflamed. Over time, this causes the bones to fuse together, making your spine less flexible.",
    treatment: "Nonsteroidal anti-inflammatory drugs, Corticosteroids, Tumor necrosis factor (TNF) blockers, Physical therapy, Surgery",
    symptoms: "The major symptoms are low back pain or stiffness and fatigue; less common symptoms include eye inflammation, hip pain, heel pain, swelling in other joints, loss of appetite, weight loss, mild fever."
  },
  
  
  {
    category: "musculoskeletal",
    name: "Lumbar (Low-Back) Herniated Disc",
    description: "A lumbar herniated disc occurs when one of the discs in your lower spine moves out of place. This causes pressure on the nerves and can cause low back pain or weakness, numbness, or tingling in the low back.",
    treatment: "A short period of rest, Anti-inflammatory medications, Pain medications, Muscle relaxers, Physical therapy, Steroid injections, Surgery",
    symptoms: "Low back pain, weakness, numbness or tingling in the low back; pain in hip, leg, or foot"

  },

  {
    category: "musculoskeletal",
    name: "Lumbar Spinal Stenosis",
    description: "Lumbar spinal stenosis occurs when the spinal canal in your lower back becomes narrowed. This creates pressure on your spine and can cause pain, weakness, or numbness in your lower back, buttocks, legs, and feet. It is a common condition as people age, and it is most often caused by arthritis in the spine.",
    treatment: "Nonsteroidal anti-inflammatory medications, such as ibuprofen (Advil, Motrin) or naproxen (Aleve), prescription pain relievers, corticosteroid injections, physical therapy, surgery", 
    symptoms: "Pain, weakness, or numbness in your lower back, buttocks, legs, and feet."
  },

  {
    category: "musculoskeletal",
    name: "Lumbar Strain and Lumbar Sprain",
    description: "Lumbar strains and sprains are the most common causes of lower back pain. People may get them from picking up something heavy, industrial work, or sports that require lifting, pushing, or twisting. Lumbar strains develop when the muscles stretch too far or tear. Lumbar sprains are rips in the ligaments, the tough bands of tissue that connect the bones. Practically, the distinction between strains and sprains doesn't matter very much. The treatment including medications that help with pain while the muscles or ligaments heal is the same for either condition. Most people recover within a few weeks.",
    treatment: "Nonsteroidal anti-inflammatory drugs, Corticosteroids, Tumor necrosis factor (TNF) blockers, Physical therapy, Surgery",
    symptoms: "Bed rest for a short time, no more than 3 days, NSAIDs, such as ibuprofen, ketoprofen, and naproxen, for pain and swelling, ice packs, physical therapy, ultrasound, stretching, heat, muscle relaxants"
  },

  {
    category: "musculoskeletal",
    name: "Kideny Stones",
    description: "Kidney stones are hard deposits made from minerals such as calcium or waste products such as uric acid. They start small, but they can grow bigger as more minerals stick to them. Some kidney stones often pass on their own without treatment. Other stones that are painful or that get stuck in your urinary tract sometimes need to be removed with surgery.",
    treatment: "Shock wave lithotripsy, Ureteroscopy, Percutaneous nephrolithotomy or percutaneous nephrolithotripsy, Open surgery",
    symptoms: "Pain in the back or side part of the body, pain can be severe, sharp, or sudden in the abdomen, pain can occur during urination, blood in urine or frequent urination, nausea, vomiting, sweating"
  },

  {
    category: "respiratory",
    name: "Bronchiolitis",
    description: "Bronchiolitis is a common lung infection in children that can be caused by several different viruses. The viruses that cause bronchiolitis are spread from person to person through coughing and sneezing. Bronchiolitis usually occurs in children under age 2, especially in infants 3 months to 6 months old. It begins like a cold, but then can cause difficulty breathing, a fast heartbeat, wheezing, fever, or bluish-colored skin.",
    treatment: "Offering your child plenty of fluids, Using a cool-mist vaporizer in your child's bedroom, Making sure your child gets plenty of rest, Using acetaminophen to reduce your child's fever; DON'T use aspirin, because in children and teens, it is associated with a rare but serious illness called Reyes syndrome, IV fluids, Oxygen therapy",
    symptoms: "The symptoms of bronchiolitis can include a runny nose, cough, fever, difficulty breathing, a fast heartbeat, wheezing, or bluish-colored skin."
  },

  {
    category: "genitalia",
    name: "Genital warts",
    description: "Genital warts are a type of sexually transmitted disease (STD) that causes wart-like growths on the penis, scrotum, thighs, groin area, and around the anus. In rare cases, they can also be spread to the mouth and throat. This STD is caused by more than 40 types of the human papilloma virus (HPV), which spreads through sexual contact. HPV can be spread even if the infected person does not have symptoms. Warts develop when your body can't fight the infection and may occur months or even years after you were infected. Warts can be removed with medications, by burning or freezing them off, with laser treatments, and by different types of surgery. However, removing warts does not cure HPV, and warts may reappear. A vaccination can protect boys and young men from HPV infections that cause genital warts.",
    treatment: "Prescription creams, either applied at home or by the doctor, Cryotherapy, or freezing off warts with liquid nitrogen, Electrocautery, or burning off warts, Surgically removing warts, Laser removal",
    symptoms: "Genital warts may be small or large, raised or flat bumps or groups of bumps, or they may look like cauliflower. They can grow on the penis, scrotum, thighs, groin area, and in and around the anus, and they may cause itching."
  },

  {
    category: "genitalia",
    name: "Hemorrhoids",
    description: "Hemorrhoids are swollen veins in the rectum or anus. They can be inside the lower rectum or on the skin around the anus. Both types of hemorrhoids can cause pain, itching, bleeding, and irritation. The most common causes of hemorrhoids are straining during bowel movements, constipation, and pregnancy. Most hemorrhoid symptoms usually get better within a few days.",
    treatment: "Treatments include creams and suppositories to relieve symptoms, procedures to shrink or remove hemorrhoids, and in severe cases, surgery to remove hemorrhoids.",
    symptoms: "Hemorrhoids can cause anal pain, bleeding, and itching. They can also cause a hard lump near the anus."
  },

  {
    category: "genitalia",
    name: "Gonorrhea",
    description: "Gonorrhea is one of the most common sexually transmitted diseases (STDs). It is caused by gonorrhea bacteria and spreads through vaginal, oral, or anal sex. Your sex partner may pass it to you even if he/she doesn't have symptoms. You cannot catch gonorrhea from casual contact such as by shaking hands or from a toilet seat. The most common symptoms for men are painful urination and a white, yellow, or green discharge from the tip of the penis. The symptoms for women are different. Antibiotics can cure the disease in both men and women. But untreated, gonorrhea can lead to complications such as infertility.",
    treatment: "You need prescription antibiotics, although it is becoming more difficult to treat gonorrhea because of the increase of drug-resistant strains of the bacteria. It's important to take all of the medication as directed, or the infection may return. Do not have sex while taking antibiotics, because you can still spread the disease. Be sure all sexual partners are also treated.",
    symptoms: "Common symptoms of gonorrhea in males include painful urination and white, yellow, or green discharge from the tip of the penis. You may also have fever, swollen or painful testicles, rectal discharge or bleeding, anal itching, rectal soreness, painful bowel movements, abdominal pain, sore throat, joint pain, fatigue, or rash."
  },

  {
    category: "genitalia",
    name: "Syphilis",
    description: "Syphilis is a sexually transmitted infection that can cause serious health problems if it is not treated. Syphilis is divided into stages (primary, secondary, latent, and tertiary). There are different signs and symptoms associated with each stage.",
    treatment: "Yes, syphilis can be cured with the right antibiotics from your health care provider. However, treatment might not undo any damage that the infection has already done.",
    symptoms: "painless ulcers, sores, vaginal discharge, or wart-like growths on genitals"
  },

  {
    category: "genitalia",
    name: "Genital Herpes",
    description: "A common sexually transmitted infection marked by genital pain and sores. Caused by the herpes simplex virus, the disease can affect both men and women.",
    treatment: "Eating more fiber, Drinking more water, Topical muscle relaxants or painkillers, Medications to soften the stool, Sitz baths -- soaking the pelvis in water, Botox injections into the muscles, Minor surgery",
    symptoms: "Medications can be used to manage outbreaks"
  },
  {
    category: "genitalia",
    name: "Chlamydia",
    description: "Many who have chlamydia don't develop symptoms, but they can still infect others through sexual contact. Symptoms may include genital pain and discharge from the vagina or penis.",
    treatment: "Antibiotic therapy for the affected patient and the patient's sexual partners is recommended. Screening for other common sexually transmitted infections should also be performed.",
    symptoms: "Pain, itching, and small sores appear first. They form ulcers and scabs"
  },
  

  {
    category: "genitalia",
    name: "HIV/AIDS",
    description: "HIV causes AIDS and interferes with the body's ability to fight infections.",
    treatment: "No cure exists for AIDS, but strict adherence to anti-retroviral therapy (ART) can dramatically slow the disease's progress, prevent secondary infections and complications, and prolong life.",
    symptoms: "Pain in the abdomen, can occur while swallowing, cough can be dry, whole body fatigue, fever, loss of appetite, malaise, night sweats, or sweating"
  },

  {
    category: "genitalia",
    name: "Human papillomavirus infection",
    description: "An infection that causes warts in various parts of the body, depending on the strain. Human papillomavirus (HPV) is the most common sexually transmitted infection (STI).",
    treatment: "There's no cure for the virus and warts may go away on their own. Treatment focuses on removing the warts. A vaccine that prevents the HPV strains most likely to cause genital warts and cervical cancer is recommended for boys and girls.",
    symptoms: "Symptoms may include warts on the genitals or surrounding skin."
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