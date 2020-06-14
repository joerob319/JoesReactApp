import React from 'react';

function APICall() {

  const callAPI = () =>  {
    fetch ("http://localhost:9000/newroute")
      .then (r => r.text())
      .then (resp => {
        setHello (resp)
        console.log ("API call made")
      })
  }
  

  const [ hello, setHello ] = React.useState ('No data')

  React.useEffect (() =>  {
    callAPI()
  }, [])

  return (
    <div>      
          {[hello]}
    </div>
  );
}

export default APICall;
