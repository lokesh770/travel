import { useState } from "react";
import { useNavigate } from "react-router-dom";

let Pondachary=()=>{
    let homiee=useNavigate()
    let [commet,setcommet]=useState({
    text:""
})
let [data,setdata]=useState([])
let changeover=(e)=>{
  setcommet(
    {
        ...commet,
        text:e.target.value
    }
  )

}
let handelsub=(e)=>{
  e.preventDefault()
 let newtexting={
    texting:commet.text,
    id:new Date().getTime().toString()
 }
 setdata([...data,newtexting])
 setcommet({
    ...commet,
    text:""
 })
 
}
let [hide,sethide]=useState(false)
let handelcomme=()=>{
    sethide(!hide)
}
let handeldel=(ids)=>{
   let newinfo=data.filter((n)=>{
     return n.id!==ids
   })
   setdata(newinfo)
}
let backkkk=()=>{
    homiee("/")
}
    return(
        <div className="individual">
        <div>
        <h1>this is pondachary</h1>
        <button style={{marginLeft:"700px",color:"red"}}  onClick={backkkk}>backk</button>
        </div>
        <img className="imgsize"src="https://hblimg.mmtcdn.com/content/hubble/img/pondicherry/mmt/destination/m_Pondicherry_activity_beach_l_382_691.jpg" alt="resolve"></img>
        <p>Settled off the Kerala coast on Laccadive sea, Lakshadweep translates to a hundred thousand islands. A club of 36 atolls and coral reefs, the nature tourism destination is known for preserved ecology and water sports.</p>
        <div>
        <input type="date" placeholder="enter the date of journey"></input>
        </div> 
        <input type="text" placeholder="enter comment" value={commet.text} onChange={changeover}></input>
        <button onClick={handelsub}>submit</button>
         <div onClick={handelcomme}>
           {
            hide ?data.map((n)=>{
                return(
                    <div>
                    <h3>{n.texting}</h3>
                     <button onClick={()=>{handeldel(n.id)}}>del</button>
                    </div>
                )
            }):<h3>viewcomments</h3>
           }
         </div>
        </div> 
)
    }
    export default Pondachary;