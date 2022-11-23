import { Container } from "./style";
import {FiArrowLeft,FiUser,FiMail,FiLock,FiCamera} from "react-icons/fi"
import { Input } from "../../components/Input";
import {Avatar} from "./style"
import { Form } from "./style";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
export function Profile(){
    return(
        <Container>
             <header>
               <Link to='/'><FiArrowLeft/></Link>
             </header>

           <Form>
            <Avatar>
                <img src="https://github.com/sz-Bruno.png" alt="Imagem do usuário"  />
                <label htmlFor="avatar">
                    <FiCamera/>
                    <input type='file' id="avatar"/>

                </label>
            </Avatar>
            <Input placeholder='Nome'
            type='text'
            icon={FiUser}/>
             <Input placeholder='Email'
            type='text'
            icon={FiMail}/>
             <Input placeholder='Senha Atual'
            type='password'
            icon={FiLock}/>
            <Input placeholder='Nova Senha'
            type='password'
            icon={FiLock}/>
            <Button title='Salvar'/>
           </Form>

        </Container>
    )
}