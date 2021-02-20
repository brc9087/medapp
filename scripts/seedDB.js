const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const bookSeed = [
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
    category: "respiratory",
    name: "flu",
    description: "a condition",
    treatment:
      "2 cups of bleach",
    symptoms: "flu like symptoms"
  }

  
  // {
  //   title: "The Everything Store: Jeff Bezos and the Age of Amazon",
  //   author: "Brad Stone",
  //   synopsis:
  //     "The definitive story of Amazon.com, one of the most successful companies in the world, and of its driven, brilliant founder, Jeff Bezos. Amazon.com started off delivering books through the mail. But its visionary founder, Jeff Bezos, wasn't content with being a bookseller. He wanted Amazon to become the everything store, offering limitless selection and seductive convenience at disruptively low prices. To do so, he developed a corporate culture of relentless ambition and secrecy that's never been cracked. Until now. Brad Stone enjoyed unprecedented access to current and former Amazon employees and Bezos family members, giving listeners the first in-depth, fly-on-the-wall account of life at Amazon. Compared to tech's other elite innovators - Jobs, Gates, Zuckerberg - Bezos is a private man. But he stands out for his restless pursuit of new markets, leading Amazon into risky new ventures like the Kindle and cloud computing, and transforming retail in the same way Henry Ford revolutionized manufacturing. The Everything Store will be the revealing, definitive biography of the company that placed one of the first and largest bets on the Internet and forever changed the way we shop and read.",
  //   date: new Date(Date.now())
  // },
  // {
  //   title: "Total Recall: My Unbelievably True Life Story",
  //   author: "Arnold Schwarzenegger",
  //   synopsis:
  //     "In his signature larger-than-life style, Arnold Schwarzenegger’s Total Recall is a revealing self-portrait of his illustrious, controversial, and truly unique life. The greatest immigrant success story of our time. His story is unique, and uniquely entertaining, and he tells it brilliantly in these pages. He was born in a year of famine, in a small Austrian town, the son of an austere police chief. He dreamed of moving to America to become a bodybuilding champion and a movie star. By the age of twenty-one, he was living in Los Angeles and had been crowned Mr. Universe. Within five years, he had learned English and become the greatest bodybuilder in the world. Within ten years, he had earned his college degree and was a millionaire from his business enterprises in real estate, landscaping, and bodybuilding. He was also the winner of a Golden Globe Award for his debut as a dramatic actor in Stay Hungry. Within twenty years, he was the world’s biggest movie star, the husband of Maria Shriver, and an emerging Republican leader who was part of the Kennedy family. Thirty-six years after coming to America, the man once known by fellow body­builders as the Austrian Oak was elected governor of California, the seventh largest economy in the world. He led the state through a budget crisis, natural disasters, and political turmoil, working across party lines for a better environment, election reforms, and bipartisan solutions. With Maria Shriver, he raised four fantastic children. In the wake of a scandal he brought upon himself, he tried to keep his family together. Until now, he has never told the full story of his life, in his own voice. Here is Arnold, with total recall.",
  //   date: new Date(Date.now())
  // },
  // {
  //   title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
  //   author: "Ashlee Vance",
  //   synopsis:
  //     "In the spirit of Steve Jobs and Moneyball, Elon Musk is both an illuminating and authorized look at the extraordinary life of one of Silicon Valley's most exciting, unpredictable, and ambitious entrepreneurs - a real-life Tony Stark - and a fascinating exploration of the renewal of American invention and its new makers. Elon Musk spotlights the technology and vision of Elon Musk, the renowned entrepreneur and innovator behind SpaceX, Tesla, and SolarCity, who sold one of his Internet companies, PayPal, for $1.5 billion. Ashlee Vance captures the full spectacle and arc of the genius' life and work, from his tumultuous upbringing in South Africa and flight to the United States to his dramatic technical innovations and entrepreneurial pursuits. Vance uses Musk's story to explore one of the pressing questions of our age: Can the nation of inventors and creators who led the modern world for a century still compete in an age of fierce global competition? He argues that Musk - one of the most unusual and striking figures in American business history - is a contemporary, visionary amalgam of legendary inventors and industrialists, including Thomas Edison, Henry Ford, Howard Hughes,and Steve Jobs. More than any other entrepreneur today, Musk has dedicated his energies and his own vast fortune to inventing a future that is as rich and far reaching as the visionaries of the golden age of science-fiction fantasy.",
  //   date: new Date(Date.now())
  // },
  // {
  //   title: "Steve Jobs",
  //   author: "Walter Isaacson",
  //   synopsis:
  //     "Based on more than 40 interviews with Jobs conducted over two years - as well as interviews with more than a hundred family members, friends, adversaries, competitors, and colleagues - Walter Isaacson has written a riveting story of the roller-coaster life and searingly intense personality of a creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries: personal computers, animated movies, music, phones, tablet computing, and digital publishing. At a time when America is seeking ways to sustain its innovative edge, and when societies around the world are trying to build digital-age economies, Jobs stands as the ultimate icon of inventiveness and applied imagination. He knew that the best way to create value in the 21st century was to connect creativity with technology. He built a company where leaps of the imagination were combined with remarkable feats of engineering. Although Jobs cooperated with this book, he asked for no control over what was written. He put nothing off-limits. He encouraged the people he knew to speak honestly. And Jobs speaks candidly, sometimes brutally so, about the people he worked with and competed against. His friends, foes,and colleagues provide an unvarnished view of the passions, perfectionism, obsessions, artistry, devilry, and compulsion for control that shaped his approach to business and the innovative products that resulted. Driven by demons, Jobs could drive those around him to fury and despair. But his personality and products were interrelated, just as Apple's hardware and software tended to be, as if part of an integrated system. His tale is instructive and cautionary, filled with lessons about innovation, character, leadership, and values.",
  //   date: new Date(Date.now())
  // },
  // {
  //   title: "Astrophysics for People in a Hurry",
  //   author: "Neil deGrasse Tyson",
  //   synopsis:
  //     "What is the nature of space and time? How do we fit within the universe? How does the universe fit within us? There's no better guide through these mind-expanding questions than acclaimed astrophysicist and best-selling author Neil deGrasse Tyson. But today, few of us have time to contemplate the cosmos. So Tyson brings the universe down to Earth succinctly and clearly, with sparkling wit, in digestible chapters consumable anytime and anywhere in your busy day. While waiting for your morning coffee to brew, or while waiting for the bus, the train, or the plane to arrive, Astrophysics for People in a Hurry will reveal just what you need to be fluent and ready for the next cosmic headlines: from the big bang to black holes, from quarks to quantum mechanics, and from the search for planets to the search for life in the universe.",
  //   date: new Date(Date.now())
  // },
  // {
  //   title: "1984",
  //   author: "George Orwell",
  //   synopsis:
  //     "Winston Smith toes the Party line, rewriting history to satisfy the demands of the Ministry of Truth. With each lie he writes, Winston grows to hate the Party that seeks power for its own sake and persecutes those who dare to commit thoughtcrimes. But as he starts to think for himself, Winston can’t escape the fact that Big Brother is always watching... A startling and haunting vision of the world, 1984 is so powerful that it is completely convincing from start to finish. No one can deny the influence of this novel, its hold on the imaginations of multiple generations of readers, or the resiliency of its admonitions—a legacy that seems only to grow with the passage of time.",
  //   date: new Date(Date.now())
  // },
  // {
  //   title: "Frankenstein",
  //   author: "Mary Shelley",
  //   synopsis:
  //     "Few creatures of horror have seized readers' imaginations and held them for so long as the anguished monster of Mary Shelley's Frankenstein. The story of Victor Frankenstein's terrible creation and the havoc it caused has enthralled generations of readers and inspired countless writers of horror and suspense. Considering the novel's enduring success, it is remarkable that it began merely as a whim of Lord Byron's. \"We will each write a story,\" Byron announced to his next-door neighbors, Mary Wollstonecraft Godwin and her lover Percy Bysshe Shelley. The friends were summering on the shores of Lake Geneva in Switzerland in 1816, Shelley still unknown as a poet and Byron writing the third canto of Childe Harold. When continued rains kept them confined indoors, all agreed to Byron's proposal. The illustrious poets failed to complete their ghost stories, but Mary Shelley rose supremely to the challenge. With Frankenstein, she succeeded admirably in the task she set for herself: to create a story that, in her own words, \"would speak to the mysterious fears of our nature and awaken thrilling horror -- one to make the reader dread to look round, to curdle the blood, and quicken the beatings of the heart.\"",
  //   date: new Date(Date.now())
  // },
  // {
  //   title: "The Great Gatsby",
  //   author: "F. Scott Fitzgerald",
  //   synopsis:
  //     "The authentic edition from Fitzgerald's original publisher. This edition approved by the Holden-Crowther Literary Organisation. The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted \"gin was the national drink and sex the national obsession,\" it is an exquisitely crafted tale of America in the 1920s. The Great Gatsby is one of the great classics of twentieth-century literature.",
  //   date: new Date(Date.now())
  // },
  // {
  //   title: "Born a Crime: Stories from a South African Childhood",
  //   author: "Trevor Noah",
  //   synopsis:
  //     "Trevor Noah, one of the comedy world's fastest-rising stars and host of The Daily Show, tells his wild coming-of-age story during the twilight of apartheid in South Africa and the tumultuous days of freedom that followed. In this Audible Studios production, Noah provides something deeper than traditional memoirists: powerfully funny observations about how farcical political and social systems play out in our lives. \"Nelson Mandela once said, 'If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart.' He was so right. When you make the effort to speak someone elses language, even if it's just basic phrases here and there, you are saying to them, 'I understand that you have a culture and identity that exists beyond me. I see you as a human being.'\" (Trevor Noah)\nAttuned to the power of language at a young age - as a means of acceptance and influence in a country divided, then subdivided, into groups at odds with one another - Noah's raw, personal journey becomes something extraordinary in audio: a true testament to the power of storytelling. With brutal honesty and piercing wit, he forgoes an ordinary reading and, instead, delivers something more intimate, sharing his story with the openness and candor of a close friend. His chameleon-like ability to mimic accents and dialects, to shift effortlessly between languages including English, Xhosa, and Zulu, and to embody characters throughout his childhood - his mother, his gran, his schoolmates, first crushes and infatuations - brings each memory to life in vivid detail. Hearing him directly, you're reminded of the gift inherent in telling one's story and having it heard; of connecting with another, and seeing them as a human being.\nThe stories Noah tells are by turns hilarious, bizarre, tender, dark, and poignant - subsisting on caterpillars during months of extreme poverty, making comically pitiful attempts at teenage romance in a color-obsessed world, thrown into jail as the hapless fall guy for a crime he didn't commit, thrown by his mother from a speeding car driven by murderous gangsters, and more.",
  //   date: new Date(Date.now())
  // }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
