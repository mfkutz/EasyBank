import './Cardskill.css'

import { useState } from 'react'
import { useEffect } from 'react'

const Cardskill = () => {

    const [data, setData] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('/skills.json')
                const jsonData = await response.json()
                setData(jsonData)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        };

        fetchData()
    }, [])

    return (
        <>
            {data.map((item, index) => (
                <div className="card" key={index}>
                    <img src={item.image} alt="Online Banking" />
                    <h3 className='tittle-skills'>{item.tittle}</h3>
                    <p className='text-skills'>{item.text}</p>
                </div>
            ))}

        </>
    )
}

export default Cardskill