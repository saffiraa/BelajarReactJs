
import React from 'react'
import { Button,Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import array from './array'; 
import { Link, useNavigate } from 'react-router-dom';
  
function Home() {

  let history = useNavigate()
  
  function setID(id,name,time){
    localStorage.setItem('id', id);
    localStorage.setItem('Name', name);
    localStorage.setItem('Time', time);
  }
  
  function deleted(id){
      
    var index = array.map(function(e) { return e.id; }).indexOf(id);
  
    array.splice(index,1)
  
    history('/')
  }
    
  return (
   
    <div  style={{margin:'10rem'}}>
    <h1>What's the Plan for Today? <Link className="mb-4" to='/create'>
    <Button variant="warning" size="lg">Create</Button>
    </Link> </h1>
        <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Name</th>
      <th>Time</th>
    
    </tr>
  </thead>
  <tbody>
  
    {array.map((item) => {
  return(
    <tr>
      <td>{item.Name}</td>
      <td>{item.Time}</td>
        
      <td><Link to={`/edit`}><Button onClick={(e) =>
      setID(item.id,item.Name,item.Age)} variant="info">
        Update</Button></Link></td>
  
      <td><Button onClick={e => deleted(item.id)} 
      variant="danger">Delete</Button></td>
    </tr>
  )})}
  </tbody>
</Table>
    </div>
  )
}
  
export default Home