import {useState} from "react"

export default function ImageComponent()
{
    let[imgsrc,setImagesrc]=useState("flower.jpg")
    const changeImage=()=>{
        alert('changeImage')
        if(imgsrc==='flower.jpg')
            {
                setImagesrc('logo512.png')
            }
        else
        {
            setImagesrc('flower.jpg')
        }
    }
    return(
        <>
       <br/> <img src={imgsrc} height="140px" width="140px" style={{'border-radius':'10px'}} onClick={()=>changeImage()}></img><br></br>
        <p style={{color:'blue','fontWeight':'bold'}}>This is a paragraph</p>

        </>
    )
}