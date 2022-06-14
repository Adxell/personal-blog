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
    height:"100vh"

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
          <Section color={"#FAF4B7"} title={"Table manners"} content={contentEntry3} day={"3"} />
        </div>
      </div>
    </div>
  );
}

export default App;
