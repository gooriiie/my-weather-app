import logo from '../logo.svg';

function Header(props) {

  //const city = "Daejeon";

  const city = props.cityName;
  const region = props.region;

  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          도시는 : {city} , {region}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  );
}

export default Header;