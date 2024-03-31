import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AddPlayer } from './PlayersSlice'

export default function AjouterPlayer({id,setId}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [nom,setNom] = useState("")
    const [value,setValue] = useState("")
    const [img,setImg] = useState(null)
    const [position,setPosition] = useState([])
    function handle_change(e){
        if(position.includes(e.target.value)){
            setPosition([...position,position.filter(item => item != e.target.value)])
        }else{
            setPosition([...position,e.target.value])
        }
    }
    function handle_submit(){
        setId(id + 1)
        const image = URL.createObjectURL(img)
        dispatch(AddPlayer({id,nom,value,image,position}))
        navigate("/")
    }
  return (
    <div>
        <form onSubmit={handle_submit} action="">
            <table>
                <thead>
                    <tr>
                        <td>nom</td>
                        <td>value</td>
                        <td>postion</td>
                        <td>image</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" onChange={(e) => setNom(e.target.value)}/></td>
                        <td><input type="text" onChange={(e) => setValue(e.target.value)}/></td>
                        <td>
                            <input type="checkbox" value={"rb"} name='position' onChange={(e)=>handle_change(e)} />Rb
                            <input type="checkbox" value={"lwf"} name='position' onChange={(e)=>handle_change(e)} />Lwf
                            <input type="checkbox" value={"dmf"} name='position' onChange={(e)=>handle_change(e)} />Dmf
                        </td>
                        <td><input type="file" onChange={(e)=>setImg(e.target.files[0])} /></td>
                    </tr>
                </tbody>
                <tr>
                    <td><input type="submit"/></td>
                </tr>
            </table>
        </form>
    </div>
  )
}
