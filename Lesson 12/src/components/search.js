import React, {useState,useEffect} from 'react';
import axios from 'axios';

const Search = () =>{

    const [term,setTerm] = useState('React');
    const [results,setResults]=useState([]);

    useEffect(()=>{
       const searchWiki = async() =>{
            const {data} = await axios.get('https://pl.wikipedia.org/w/api.php',{
                params:{
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            });
            setResults(data.query.search);
        };

       if(term && !results.length){
           searchWiki();
       }else {
           const timeoutId = setTimeout(() => {
               if (term) {
                   searchWiki();
               }
           }, 1000)
           ///////////////////////////////////////////////////////////////////////////////
           //  (async () =>{
           //     await axios.get('')
           //           .then((response) =>{
           //             console.log(response.data)
           //          });
           //   })()
           ////////////////////////////////////////////////////////////////////////////////
           //   (async () =>{
           //       await axios.get('');
           //   })();
           return () => {
               clearTimeout(timeoutId)
           }
       }
    },[term]);

    const renderedResult = results.map((results) =>{
        return(
            <div className="item" key={results.pageid}>
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://pl.wikipedia.org?curid=${results.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {results.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html:results.snippet}}></span>
                </div>
            </div>

        )
    })

    return(
        <div className="ui form">
            <div className="field">
                <label>Enter Search Term</label>
                <input className="input"
                    value={term}
                    onChange={(event)=> setTerm(event.target.value)}
                />
            </div>
            <div className="ui celled list">
                {renderedResult}
            </div>
        </div>
    )
};

export default Search;