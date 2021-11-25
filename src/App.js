import logo from "./logo.svg";
import "./App.css";
import Profile from "./profile/profile";

function App() {
  const HandleName = (fullname) => alert(fullname);

  return (
    <div className="App">
      <Profile
        fullname="Motolani Akindele"
        bio="I am a Software Engineer and I love coding"
        profession="Fintech Product manager"
        HandleName={HandleName}
      >
        <img
          src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/871336/1.jpg?6407"
          alt="me"
        ></img>
      </Profile>
      <Profile />
      <Profile
        fullname="Deborah Akntunde"
        bio="I am a Software Engineer and I hate coding"
        profession="UI/UX designer"
        HandleName={HandleName}
      />
      {/* <div>
        <h1>Motolani Akindele</h1>
        <p>I am a Software Engineer and I love coding</p>
        <p>Fintech Product manager </p>
      </div> */}
      {/* <div>
        <h1>Deborah Akntunde</h1>
        <p>I am a Software Engineer and I hate coding</p>
        <p>UI/UX designerd </p>
      </div> */}
    </div>
  );
}

export default App;
