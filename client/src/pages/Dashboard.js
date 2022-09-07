import {useEffect} from 'react';



const Dashboard = () => {
 
  const fetchData=async ()=>{
try {
   //console.log("yellow")
  const response= await fetch('/api/v1');
  //const response= await fetch('/data.json');


  const data= await response.json();
  console.log(data);
  
} catch (error) {
  console.log("error");
  console.log(error);
  
}
  }

useEffect(()=>{
  fetchData()
},[])


  return (
    <h1>
      Dashboard Page
    </h1>
  )
}

export default Dashboard
