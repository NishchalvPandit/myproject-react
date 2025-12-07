import image from './frontendtech.png';
import './app.css';


const ImageComponent = () => {
  return <img src={image} alt="My Image" />;
};


function App() {
  return (
    <div className="app-container">
      <h1>Image Page</h1>
      <ImageComponent />
    </div>
  );
}

export default App;
