import React, { useState, useEffect, Fragment } from 'react';
import { Startup } from './Startup'

export const Startups = () => {
    // TODO: get data from the storage
    const startups = [{name: 'courseit', img: 'asd', description: 'asd'}, 
                      {name: 'courseDoooit', img: 'asd', description: 'asd'}]

    const [startup, setStartup] = useState('');
    const [filtered, setFiltered] = useState(startups);

    useEffect(() => {
        const newData = startups.filter(data => data.name.includes(startup));
        setFiltered(newData);
    }, [startup])
    

    const onChange = (e) => {
        setStartup(e.target.value)
    };

    return (
        <Fragment>
            <input type="text" onChange={onChange}></input>
            
            <div className="BoxContainer">
                {filtered.map(startup => (
                    <Startup startup={startup} />
                ))}
            </div>
        </Fragment>
    );
};
