import { useEffect, useState } from "react";
import React from 'react';
import axios from "axios";

const Meme = () => {
    const [memes, setMemes] = useState([]); // for storing API response
    const [selectedMeme, setSelectedMeme] = useState({}); // for storing randomly selected meme
    const [changeMeme, setChangeMeme] = useState(true); // To pick another meme
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');

    // fetch meme images on page load and until memes state array is filled
    useEffect(() => {
        if (!memes.length) {
            axios.get('https://api.imgflip.com/get_memes').then((result) => {
                if (result.data.success) {
                    setMemes(result.data.data.memes);
                }
            });
        }
    }, [memes]);

    // randomly select one of the memes from state array
    useEffect(() => {
        if (memes.length) {
            const randomMeme = getRandomInt(memes.length);
            setSelectedMeme(memes[randomMeme]);
        }
    }, [memes, changeMeme]);

    // function to get random interger between 0 to max
    const getRandomInt = (max) => {
        const value = Math.floor(Math.random() * max);
        return value;
    };

    // update state to trigger re-render with new meme image
    const handleMemeChange = (e) => {
        setChangeMeme(!changeMeme);
    };

    // handle form inputs
    const handleChange = (e) => {
        if (e.target.name === 'top_text') setTopText(e.target.value);
        else setBottomText(e.target.value);
    };

    return (
        <div>
            <form action="">
                <input
                    type="text"
                    placeholder='topp & bottomm'
                    name='top_text'
                    value={topText}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder='topp & bottomm'
                    name='bottom_text'
                    value={bottomText}
                    onChange={handleChange}
                />

                <input onClick={handleMemeChange} type="submit" value='Get a new meme image  🖼' />
            </form>
            <div className="memeContainer"
                    style={{
                        backgroundImage: `url(${selectedMeme?.url})`,
                        height: `${selectedMeme?.height}px`,
                        width: `${selectedMeme?.width}px`,
                    }}>
                    <h4 className='meme-top-text'>{topText}</h4>
                    <h4 className='meme-bottom-text'>{bottomText}</h4>
                </div>
        </div>
    );
};

export default Meme;