import "./App.css";

import Section from "./components/Section";

function App() {
  let video = (
    <iframe
      width="560"
      height="315"
      src="/my_video_english_2.mp4"
      controls
    ></iframe>
  );
  const styleBackground = {
    color: "#000",
    background: "#fff",
    height: "100vh",
  };
  const contentEntry2 = (
    <div>
      <h5>How do people greet each other when they meet for the first time?</h5>
      <p>
        In Japan, the most common gesture when greeting is a bow. The depth,
        length and style of bow depends on the social context, but many Japanese
        are understanding and are likely to shake hands when meeting
        non-Japanese people.
      </p>
      <strong>Exemple</strong>
      <p>
        If a Japanese has a business meeting in Amrica, he is likely to greet
        with a handshake.
      </p>
      <hr style={{ color: "#fff" }} />
      <h5>Are certain foods or beverages taboo?</h5>
      <p>
        People think that japanese eating Rabbits, dogs, cats or Dolphins , but
        is forbidden these animals be eat in japan. Even if a person say about
        eating dolphins to japanese they will never talk with that person again
      </p>
      <hr style={{ color: "#fff" }} />
      <h5>What are the customs about punctuality?</h5>
      <p>
        The Japanese are also very punctual. People are always anxious not to be
        late to their appointments. In general, they arrive 10 or 15 minutes
        before the scheduled time. Therefore, time regulates the life of the
        modern Japanese citizen.
      </p>
    </div>
  );
  const contentEntry3 = (
    <div>
      <p>
        it's different because before people was often eat with his parents but
        now people prefer eat watching video o stream, looking this is no the
        same that before
      </p>
    </div>
  );
  const contentEntry4 = (
    <>
      <h3></h3>
      <div className="container">
        <ul>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <li>
              <h5>Homeopathy</h5>
              <div style={{ display: "block", justifyContent: "center" }}>
                <h6>Translate to spanish Homeopatía</h6>
                <p>
                  Homeopathy or homoeopathy is a pseudoscientific system of
                  alternative medicine. Its practitioners, called homeopaths,
                  believe that a substance that causes symptoms of a disease in
                  healthy people can cure similar symptoms in sick people; this
                  doctrine is called similia similibus curentur, or "like cures
                  like".
                </p>
              </div>
            </li>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <li>
              <h5>Acupuncture</h5>
              <div style={{ display: "block", justifyContent: "center" }}>
                <h6>Translate to spanish Acupuntura</h6>
                <p>
                  Acupuncture is a form of alternative medicine and a component
                  of traditional Chinese medicine in which thin needles are
                  inserted into the body. Acupuncture is a pseudoscience; the
                  theories and practices of TCM are not based on scientific
                  knowledge, and it has been characterized as quackery.
                </p>
              </div>
            </li>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <li>
              <h5>Herbs</h5>
              <div style={{ display: "block", justifyContent: "center" }}>
                <h6>Translate to spanish Hierbas</h6>
                <p>
                  In general use, herbs are a widely distributed and widespread
                  group of plants, excluding vegetables and other plants
                  consumed for macronutrients, with savory or aromatic
                  properties that are used for flavoring and garnishing food,
                  for medicinal purposes, or for fragrances.
                </p>
              </div>
            </li>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <li>
              <h5>Smoking</h5>
              <div style={{ display: "block", justifyContent: "center" }}>
                <h6>Translate to spanish Fumar</h6>
                <p>
                  Smoking is a practice in which a substance is burned and the
                  resulting smoke is typically breathed in to be tasted and
                  absorbed into the bloodstream.
                </p>
              </div>
            </li>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <li>
              <h5>Herbal Therapy</h5>
              <div style={{ display: "block", justifyContent: "center" }}>
                <h6>Translate to spanish Terapia de hierbas</h6>
                <p>
                  Herbal medicine is the study of pharmacognosy and the use of
                  medicinal plants, which are a basis of traditional medicine.
                </p>
              </div>
            </li>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <li>
              <h5>Health</h5>
              <div style={{ display: "block", justifyContent: "center" }}>
                <h6>Translate to spanish Salud</h6>
                <p>
                  Health is a state of complete physical, mental and social
                  well-being and not merely the absence of disease or infirmity.
                </p>
              </div>
            </li>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <li>
              <h5>Medicine</h5>
              <div style={{ display: "block", justifyContent: "center" }}>
                <h6>Translate to spanish Medicamento</h6>
                <p>
                  Medicines are chemicals or compounds used to cure, halt, or
                  prevent disease; ease symptoms; or help in the diagnosis of
                  illnesses.
                </p>
              </div>
            </li>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <li>
              <h5>Natural</h5>
              <div style={{ display: "block", justifyContent: "center" }}>
                <h6>Translate to spanish Natural</h6>
                <p>
                  existing in or derived from nature; not made or caused by
                  humankind.
                </p>
              </div>
            </li>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <li>
              <h5>Body</h5>
              <div style={{ display: "block", justifyContent: "center" }}>
                <h6>Translate to spanish Cuerpo</h6>
                <p>
                  the physical structure, including the bones, flesh, and
                  organs, of a person or an animal.
                </p>
              </div>
            </li>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <li>
              <h5>Problems</h5>
              <div style={{ display: "block", justifyContent: "center" }}>
                <h6>Translate to spanish Problemas</h6>
                <p>
                  a matter or situation regarded as unwelcome or harmful and
                  needing to be dealt with and overcome.
                </p>
              </div>
            </li>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <li>
              <h5>Remedies</h5>
              <div style={{ display: "block", justifyContent: "center" }}>
                <h6>Translate to spanish Remedios</h6>
                <p>
                  a medicine, application, or treatment that relieves or cures a
                  disease.
                </p>
              </div>
            </li>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <li>
              <h5>Pills</h5>
              <div style={{ display: "block", justifyContent: "center" }}>
                <h6>Translate to spanish Pastillas</h6>
                <p>are a kind of medicine with hormones</p>
              </div>
            </li>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <li>
              <h5>Diluted</h5>
              <div style={{ display: "block", justifyContent: "center" }}>
                <h6>Translate to spanish Diluida</h6>
                <p>
                  To make a liquid weaker by mixing it with water or another
                  liquid
                </p>
              </div>
            </li>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <li>
              <h5>Religions</h5>
              <div style={{ display: "block", justifyContent: "center" }}>
                <h6>Translate to spanish Religiones</h6>
                <p>
                  Religion is usually defined as a social-cultural system of
                  designated behaviors and practices, morals, beliefs,
                  worldviews, texts, sanctified places, prophecies, ethics, or
                  organizations.
                </p>
              </div>
            </li>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <li>
              <h5>Cultures</h5>
              <div style={{ display: "block", justifyContent: "center" }}>
                <h6>Translate to spanish Culturas</h6>
                <p>
                  Culture is an umbrella term which encompasses the social
                  behavior, institutions, and norms found in human societies, as
                  well as the knowledge, beliefs, arts, laws, customs,
                  capabilities, and habits of the individuals in these groups.
                </p>
              </div>
            </li>
          </div>
        </ul>

        <div>
          <h2>Differences</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Conventional Medicine</th>
                <th>Homeopathy</th>
                <th>Acupuncture</th>
                <th>Spiritual Healing</th>
                <th>Herbal Therapy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Conventional medicine is a system in which medical doctors and
                  other healthcare professionals (such as nurses, pharmacists
                  and therapists) treat symptoms and diseases using drugs,
                  radiation or surgery.
                </td>
                <td>
                  Homeopathy or homoeopathy is a pseudoscientific system of
                  alternative medicine. Its practitioners, called homeopaths,
                  believe that a substance that causes symptoms of a disease in
                  healthy people can cure similar symptoms in sick people; this
                  doctrine is called similia similibus curentur, or "like cures
                  like".
                </td>
                <td>
                  Acupuncture involves the insertion of very thin needles
                  through your skin at strategic points on your body. A key
                  component of traditional Chinese medicine, acupuncture is most
                  commonly used to treat pain.
                </td>
                <td>
                  Spiritual healing is a systematic and purposeful intervention
                  performed by one or more people to help another person,
                  focused on improving their conditions.
                </td>
                <td>
                  Herbal medicine is the study of pharmacognosy and the use of
                  medicinal plants, which are a basis of traditional medicine.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
  return (
    <div className="App" style={styleBackground}>
      <div
        style={{
          backgroundColor: "#FBEAFF",
          color: "rgb(0, 0, 0)",
        }}
      >
        <h1>Adxell Adrian Arango Solano</h1>
        <p>
          Hi👋, my name is Adxell, i'm student at universidad simon bolivar in
          the systems engineering program
        </p>
        <p>This is my personal blog for my english class😎</p>
        <div className="container">
          <Section
            color={"#D3EBCD"}
            title={"Personal information"}
            content={video}
            day={"1"}
          />
          <Section
            color={"#F15412"}
            title={"Japan"}
            content={contentEntry2}
            day={"2"}
          />
          <Section
            color={"#FAF4B7"}
            title={"Table manners"}
            content={contentEntry3}
            day={"3"}
          />
          <Section
            color={"#3AB0FF"}
            title={"Medicine"}
            content={contentEntry4}
            day={"4"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
