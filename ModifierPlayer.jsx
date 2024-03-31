import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {  UpdatePlayer } from './PlayersSlice'

export default function ModifierPlayer() {
    const {id} = useParams()
    const player = useSelector(state => state.players.find(item => item.id == id))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [nom,setNom] = useState(player && player.nom)
    const [value,setValue] = useState(player && player.value)
    const [img,setImg] = useState(null)
    const [position,setPosition] = useState(player && player.position)
    function handle_change(e){
        if(position.includes(e.target.value)){
            setPosition([...position,position.filter(item => item != e.target.value)])
        }else{
            setPosition([...position,e.target.value])
        }
    }
    function handle_submit(){
        const image = img ? URL.createObjectURL(img) : player.image
        dispatch(UpdatePlayer({id,nom,value,image,position}))
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
                        <td><input value={nom} type="text" onChange={(e) => setNom(e.target.value)}/></td>
                        <td><input value={value} type="text" onChange={(e) => setValue(e.target.value)}/></td>
                        <td>
                            <input type="checkbox" checked={position.includes("rb")} value={"rb"}  name='position' onChange={(e)=>handle_change(e)} />Rb
                            <input type="checkbox" checked={position.includes("lwf")}  value={"lwf"} name='position' onChange={(e)=>handle_change(e)} />Lwf
                            <input type="checkbox" checked={position.includes("dmf")}  value={"dmf"} name='position' onChange={(e)=>handle_change(e)} />Dmf
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
