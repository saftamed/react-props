import './App.css';
import Profile from './profile/Profile';
const alertMyName = name => alert(name);
function App() {
  const ii = {width:500,marginTop:30}
  const pp = "Elon Reeve Musk FRS (born June 28, 1971) is an entrepreneur and business magnate. He is the founder, CEO, and Chief Engineer at SpaceX; early-stage investor, CEO, and Product Architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI"
  return (
    <div className="App">
      <Profile fullName="Elon Musk" bio={pp} profession="Ingénieur, Entrepreneur, chef d'entreprise" handleName={alertMyName}>
        <img src='/elon.png' alt='Elon Musk' style={ii}/>
      </Profile>
    </div>
  );
}

export default App;
