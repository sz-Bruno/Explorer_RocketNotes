import {Container,Profile,Logout} from './styles'
import {RiShutDownLine } from "react-icons/ri"
import {useAuth} from "../../hooks/Auth"
import { api } from '../../services/api'
import PlaceholderAvatar from "../../assets/avatar_placeholder.svg"
import { useNavigate } from 'react-router-dom'
export function Header(){
  const {signOut,user}= useAuth()
  const navigate= useNavigate()
  
  function handleSignOut(){
    navigate("/")
    signOut()
    
  }


  const avatarUrl= user.avatar? `${api.defaults.baseURL}/files/${user.avatar}`: PlaceholderAvatar
    
  return(

        <Container>
          <Profile to='/profile'>
            <img src={avatarUrl} 
            alt='foto do usuário' />

            <div>
                <span>Bem-vindo</span>
                <strong>{user.name}</strong>
            </div>
          </Profile>
         <Logout onClick={handleSignOut}>
            <RiShutDownLine/>
         </Logout>
        </Container>
    )
}