import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const VoterList = (props) => {
  const navigate = useNavigate();

  const {id,reg_no,name,voterid_no,gender,date_birth,adress,imgurl,adarcardno } = props
  

  
  const handleDelete = () => {
    const id = props.id;
    try {
      axios.post("http://localhost:3001/delete", { id })
        .then(response => { console.log(response) })
        .catch((err) => { console.log(err) })

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='employeeData'>
      <div>{id}</div>
      <div>{reg_no}</div>
      <div>{name}</div>
      <div>{voterid_no}</div>
      <div>{gender}</div>
      <div>{date_birth}</div>
      <div>{adress}</div>
      <div>{imgurl}</div>
      <div>{adarcardno}</div>
      

      
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => { navigate(`/Update/${props.id}`) }}>Update</button>
    </div>
  )
}

export default VoterList

