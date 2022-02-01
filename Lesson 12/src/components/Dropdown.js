import React,{useState,useEffect,useRef} from 'react';

const Dropdown = ({Options,selected,onSelectedChange}) =>{
    const [open,setOpen]=useState(false);
    const ref =useRef();

    useEffect(()=>{
        const onBodyClick=(event)=>{
                    if(ref.current.contains(event.target)){
                        return;
                    }
                    setOpen(false)
                };

        document.addEventListener('click',onBodyClick,{capture:true})

////react useEffect cleanUp function, don t change state in return in useEffect hook!!
        return () => {
            document.removeEventListener('click',onBodyClick,{capture:true})
        }
    },[])

    const renderedOptions = Options.map((option)=>{
        if(option.label===selected.label){
            return null;
        }
        return(
            <div onClick={() => onSelectedChange(option)} key={option.value} className="item">
                {option.label}
            </div>
        );

    })
    
    return(
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div
                    className={`ui selection dropdown ${open ? 'visible active': ''}`}
                    onClick={()=>setOpen(!open)}>
                    <i className="dropdown icon" />
                    <div  className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;

