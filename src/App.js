import './App.css';
import Profile from './Profile/Profile';

function App() {
  const FullName='Ahmed';
  const bio=26;
  const job='Developper';
  const handleName =()=>{alert(`welcome ${FullName} to your Profile`)}

  return (
    <div className="App">
    {handleName()}
    <Profile FullName={FullName} bio={bio} job={job} />
    <Profile><img src='https://fastly.syfy.com/sites/syfy/files/styles/1200x680/public/2019/04/aothero.jpg?offset-x=0offset-y=48'/> </Profile>
    {handleName}
    </div>
  );
}

export default App;
