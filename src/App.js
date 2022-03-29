import React, { useEffect, useState } from 'react';

function App() {
  const [bkEndData, setBkEndData] = useState({});

  useEffect(() => {
    let response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      body: formData
    });
    var result = await response.text();
    if (result == "SUCCESS") {
      alert("success");
    } else {
      alert("Error while logging in")

    }


  }
  }, [])//empty array to run useEffect only once,i.e only on render   

return (
  <div>
    {(typeof bkEndData.user === 'undefined') ? (<h1>Loading</h1>) : (<h1>{bkEndData.user}</h1>)}
  </div>
)
}

export default App