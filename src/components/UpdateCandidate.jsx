import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const Update = () => {

    const { id } = useParams()
    const [reg_no, setRegNo] = useState('')
    const [name, setName] = useState('')
    const [adress, setAdress] = useState('')
    const [simble, setSimble] = useState('')
    const [party_name, setPartyName] = useState('')

    useEffect(() => {
        try {
            axios
                .post("http://localhost:3001/getData", { id })
                .then(
                    (response) => {
    
                        console.log(response.data)
                        setRegNo(response.data.reg_no)
                        setName(response.data.name)
                        setAdress(response.data.adress)
                        setSimble(response.data.simble)
                        setPartyName(response.data.party_name)
    
                    }
                )
                .catch(
                    (err) => console.log(err)
                )
    
    
        } catch (error) {
            console.log(error)
        }
    }, [id])
    


    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios
                .post("http://localhost:3001/update", { id,reg_no,name,adress,simble,party_name})
                .then(
                    response => console.log(response)
                )
                .catch(
                    err => console.log(err)
                )

        } catch (error) {

        }


    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input placeholder='Enter reg_no' type='numder' name='number' value={reg_no} onChange={(e) => setRegNo(e.target.value)} required />
                <input placeholder='Enter Name' type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} required />
                <input placeholder='Enter Adress' type='text' name='Adress' value={adress} onChange={(e) => setAdress(e.target.value)} required />
                <input placeholder='Enter simble' type='text' name='simble' value={simble} onChange={(e) => setSimble(e.target.value)} required />
                <input placeholder='party_name' type='text' name='party_name' value={party_name} onChange={(e) => setPartyName(e.target.value)} required />
                <input type="submit" value="submit" />


            </form>
        </div>
    )
}

export default Update