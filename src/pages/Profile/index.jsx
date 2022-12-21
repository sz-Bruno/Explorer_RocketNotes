import { Container } from "./style";
import {FiArrowLeft,FiUser,FiMail,FiLock,FiCamera} from "react-icons/fi"
import { Input } from "../../components/Input";
import {Avatar} from "./style"
import { Form } from "./style";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/Auth";
import { api } from "../../services/api";
import PlaceholderAvatar from "../../assets/avatar_placeholder.svg"

export function Profile(){
    const {user, updateProfile}= useAuth()
    const [name,setName]= useState(user.name)
    const [email,setEmail]= useState(user.email)
    const [passwordOld,setpasswordOld]= useState()
    const [passwordNew,setpasswordNew]= useState()
    const avatarUrl= user.avatar? `${api.defaults.baseURL}/files/${user.avatar}`: PlaceholderAvatar
    const [avatar, setAvatar]=useState(avatarUrl)
    const [avatarFile, setAvatarFile]=useState(null)

    async function handleUpdate(){
        const updated={
            name,
            email,
            password: passwordNew,
            old_password:passwordOld
        }
        const userUpdated= Object.assign(user,updated)
        await updateProfile({user:userUpdated,avatarFile})
    }
    function handleChangeAvatar(event){
              const file= event.target.files[0]
              setAvatarFile(file)

              const imagePreview=URL.createObjectURL(file)
              setAvatar(imagePreview)
    }
    return(
        <Container>
             <header>
               <Link to='/'><FiArrowLeft/></Link>
             </header>

           <Form>
            <Avatar>
                <img src={avatar} alt="Imagem do usuário"  />
                <label htmlFor="avatar">
                    <FiCamera/>
                    <input type='file' id="avatar"
                    onChange={handleChangeAvatar}/>

                </label>
            </Avatar>
            <Input placeholder='Nome'
            type='text'
            icon={FiUser}
            value={name}
            onChange={e=>setName(e.target.value)}/>
             <Input placeholder='Email'
            type='text'
            icon={FiMail}
            value={email}
            onChange={e=>setEmail(e.target.value)}/>
             <Input placeholder='Senha Atual'
            type='password'
            icon={FiLock}
            onChange={e=>setpasswordOld(e.target.value)}/>
            <Input placeholder='Nova Senha'
            type='password'
            icon={FiLock}
            onChange={e=>setpasswordNew(e.target.value)}/>
            <Button title='Salvar' onClick={handleUpdate}/>
           </Form>

        </Container>
    )
}