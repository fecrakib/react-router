import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Friends = () => {
    const data=useLoaderData();
    console.log(data)
    return (
        <div>
            <h3>This is friends component</h3>
            {
                data.map(d=>{
                    return (
                        <div>
                            <h1>{d.title}</h1>
                            <img src={d.thumbnailUrl
} alt="" />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Friends;