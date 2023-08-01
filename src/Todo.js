import React, { useState } from "react";

function Todo(){
    const[ activity,setActivity]=useState("")
    const[listdata,setlistdata]= useState([])
    function addActivity(){

        //setlistdata([...listdata,activity])
        //console.log(listdata)
        setlistdata((listdata)=>{
            const updatedList=[...listdata,activity]
            console.log(updatedList)
            setActivity('');
            return updatedList
        })

    }

    function removeActivity(i){
        const updatedListData = listdata.filter((Element,id)=>{
            return i!=id;
        })
        setlistdata(updatedListData);

    }

    function removeAll(){
        setlistdata([])
    }

    return(
     <>
    <div className="container">
        <div className="header"> TODO LIST</div>
        <input className="input" type='text' placeholder="Add Activity" value={activity} onChange={(e)=>setActivity(e.target.value) }/>
        <button onClick={addActivity}>Add</button>
        {listdata!=[] && listdata.map((data,i)=>{
            return(
                <>
                <p key={i}>
                    <div className="listData">{data}</div>
                    <div className="btn-position"><div><button className="btn"  onClick={()=>removeActivity(i)}>Remove</button></div></div>
                    

                </p>
                </>
            )
        })}
        {listdata.length>=1 &&
        <button onClick={removeAll}>Remove All</button>}
         </div>
     </>
    )
}

export default Todo