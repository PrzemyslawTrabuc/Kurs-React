import React,{useState,useEffect,useRef} from 'react';
import axios from 'axios';
//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM ///API KEY

const Convert = ({language,text}) =>{
    const [translated,setTransalted] = useState('')
    const [debouncedTranslate, setDebouncedTranslate] = useState(text)

    useEffect(()=>{
        const timerId= setTimeout(()=>{
            setDebouncedTranslate(text)
        },800)
        return () =>{
            clearInterval(timerId);
        }
    },[text])
    useEffect(()=> {
        const doTranslation =async()=>{
            const {data} = await axios.post('https://translation.googleapis.com//language/translate/v2',{},{
                params: {
                    q: debouncedTranslate,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setTransalted(data.data.translations[0].translatedText);
        }
        doTranslation();

    },[language,debouncedTranslate])

    return(
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    )
};

export default Convert;