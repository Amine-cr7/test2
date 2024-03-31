import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { DeletePlayer } from './PlayersSlice'

export default function Home() {
    const players = useSelector(state => state.players )
    const dispatch = useDispatch()
  return (
    <div>
        <Link to={"/add"}>Add Player</Link>
        <table>
            <thead>
                <tr>
                    <td>nom</td>
                    <td>value</td>
                    <td>position</td>
                    <td>image</td>
                    <td>delete</td>
                    <td>update</td>
                </tr>
            </thead>
            <tbody>
                {
                players.map(item => 
                    <tr key={item.id}>
                        <td>{item.nom}</td>
                        <td>{item.value}</td>
                        <td>{item.position.join(',')}</td>
                        <td><img src={item.image} alt="" /></td>
                        <td><button onClick={()=>dispatch(DeletePlayer(item.id))}>Delete</button></td>
                        <td><Link to={`/update/${item.id}`}>Update</Link></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}
