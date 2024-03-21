import React from 'react';

type propType={
    ourState: number;
    handleClick: any;

}
const HomeUpdate: React.FC(propType)= ([ourState, handleClick]){
    return (
        <>
        <div>Our State { ourState }</div>
        <button>
        
        onClick={handleClick}
        Increament
        </button>
        </>

    )
}


export default HomeUpdate