import { useState } from "react";
import "./style.css"
import  {useNavigate} from "react-router-dom"
let Destiny=()=>{
    let clickchange=useNavigate()
    let [data,setdata]=useState([
        {
            id:1,
            title:"Lakshadweep",
            des:"Settled off the Kerala coast on Laccadive sea, Lakshadweep translates to a hundred thousand islands. A club of 36 atolls and coral reefs, the nature tourism destination is known for preserved ecology and water sports.",
            url:"https://hblimg.mmtcdn.com/content/hubble/img/lakshadweep/mmt/destination/m_Lakshadweep_l_580_870.jpg"
        },
        {
            id:2,
            title:"Leh",
            des:"Settled off the Kerala coast on Laccadive sea, Lakshadweep translates to a hundred thousand islands. A club of 36 atolls and coral reefs, the nature tourism destination is known for preserved ecology and water sports.",
            url:"https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/activities/m_Leh_destjulimg_2_l_984_1477.jpg"
        },
        {
            id:3,
            title:"Gokarna",
            des:"Settled off the Kerala coast on Laccadive sea, Lakshadweep translates to a hundred thousand islands. A club of 36 atolls and coral reefs, the nature tourism destination is known for preserved ecology and water sports.",
            url:"https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/destination/m_Gokarna_tv_destination_img_2_l_756_1138.jpg"
        },
        {
            id:4,
            title:"Srinagar",
            des:"Settled off the Kerala coast on Laccadive sea, Lakshadweep translates to a hundred thousand islands. A club of 36 atolls and coral reefs, the nature tourism destination is known for preserved ecology and water sports.",
            url:"https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/destination/m_Gokarna_tv_destination_img_2_l_756_1138.jpg"
        },
        {
            id:5,
            title:"Pondicherry",
            des:"Settled off the Kerala coast on Laccadive sea, Lakshadweep translates to a hundred thousand islands. A club of 36 atolls and coral reefs, the nature tourism destination is known for preserved ecology and water sports.",
            url:"https://hblimg.mmtcdn.com/content/hubble/img/pondicherry/mmt/destination/m_Pondicherry_activity_beach_l_382_691.jpg"
        },
    ])
    let [info,setinfo]=useState({
        text:""
    })
    let [search,setserch]=useState({
        text:""
    })
    let changeover=(e)=>{
        setinfo({
            ...info,
            text:e.target.value
        })
        setserch({
            ...search,
            text:info.text.toUpperCase()
        })
        let newdata=data.filter((n)=>{
          return n.title.toUpperCase().includes(search.text)
        })
        setdata(newdata)
    }
    let [back,setback]=useState(false)
    let forcsss={
        backgroundImage:`url(${back?"https://images.pexels.com/photos/19415894/pexels-photo-19415894/free-photo-of-going-up.jpeg":"https://images.pexels.com/photos/18272969/pexels-photo-18272969/free-photo-of-lake-and-snow-on-rocks-behind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        height:"3000px",
        textAlign:"center"
    }
    setTimeout(() => {
        setback(!back)
    }, 1000);
    let handeldel=(ids)=>{
  let orgdata=data.filter((m)=>{
     return  m.id!==ids
  })
  setdata(orgdata)
    }
    let handleinfo=(ids)=>{
         clickchange(`/${ids}`)
    }
    return(
        <div style={forcsss}>
        <input  style={{textAlign:"center"}} type="text" placeholder="search a place" value={info.text} onChange={changeover}></input> 
        <div className="values">
        {
            data.map((n)=>{
                return(
                    <div className="merge">
                    <div onClick={()=>{handleinfo(n.id)}}>
                    <h1>{n.title}</h1>
                    <img className="imgsize" src={n.url} alt=""></img>
                    <p style={{color:"gray",fontWeight:"20px"}}>{n.des}</p>
                    </div> 
                    <button onClick={()=>{handeldel(n.id)}}>delete</button>
                    </div>
                )
            })
        }
        </div>
        </div>
    )
}
export default Destiny;