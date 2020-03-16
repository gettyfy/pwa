import React from 'react';
import { useParams } from 'react-router-dom'

 const CustomerView: React.FC = () => {

    const params = useParams()
    const { id } = params;


    console.log(id)
    return <h1>CustomerView</h1>
}


export default CustomerView