// import { useParams } from '@reach/router';
import { useParams } from 'react-router-dom';
import React from 'react';

const Word = () => {
    const params = useParams();
    console.log({params})
    return (
        <div style={{color: params.textColor || 'black', backgroundColor: params.backgroundColor || 'white'}}>
            The word is {params.word}
        </div>
    );
}

export default Word;
