import react, { useEffect, useState } from "react";


function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/images")
      .then((r) => r.json())
      .then((data) => {
        // setting state in the useEffect callback
        setImages(data);
      });
  },[]);

  return (
    <div>
      {images.map((image,index) => (
        <li key={index}>
          <img src={image}  />
        </li>
        
      ))}
    </div>
  );
}export default App;