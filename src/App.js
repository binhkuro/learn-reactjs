import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Cao Nguyên Bình';
  const age = 22;
  const isFemale = false;
  const isSingle = false;
  const girlfriend = {
    name: 'Lê Trần Quỳnh Như',
    age: '21',
    isFemale: true,
  };
  const colorList = ['red', 'blue', 'pink']

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Cao Nguyên Bình 123
        </p>
        <p>Mình là {name}, năm nay mình {age} tuổi, mình {!isFemale ? 'không phải con gái' : 'là con gái'}, mình {isSingle ? 'còn độc thân' : 'đã có người yêu'}, người yêu mình tên là {girlfriend.name}, {girlfriend.age} tuổi và cô ấy {girlfriend.isFemale && 'là con gái'} {!girlfriend.isFemale && 'là con trai'}</p>

        <p>Màu sắc cô ấy yêu thích là:</p>
        <ul>
          {colorList.map(color => (
            <li style={{ color }}>{color}</li>
          ))}
        </ul>

        {/* {isFemale &&
          <>
            <p>Nữ 1</p>
            <p>Nữ 2</p>
            <p>Nữ 3</p>
          </>
        }
        {!isFemale &&
          <>
            <p>Nam 1</p>
            <p>Nam 2</p>
            <p>Nam 3</p>
          </>
        } */}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
