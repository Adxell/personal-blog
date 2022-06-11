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

  };
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
          <Section color={"#F15412"} title={""} content={""} day={"2"} />
          <Section color={"#FAF4B7"} title={""} content={""} day={"3"} />
        </div>
      </div>
    </div>
  );
}

export default App;
