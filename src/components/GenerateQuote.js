import {React,useEffect, useState} from "react";
import Axios from 'axios';
import '../GenerateQuote.css'

function GenerateQuote(props) {

    const [quote,setQuote] = useState("")
    const [author, setAuthor] = useState("")
    
    useEffect(() => {
        setQuote('How are you doing today?')
    },[])

    async function generator() {
        let newQuote = await Axios.get('https://api.quotable.io/random')
        setQuote((quote) => newQuote.data.content)
        setAuthor((author) => newQuote.data.author)
    };

    return (
        <div>
            <h2 className="quote">"{quote}"</h2>
            <p className="author">- {author}</p>
            <button class="button-56" role="button" onClick={generator}>Get your quote today</button>
        </div>
    );
}

export default GenerateQuote;