import { Container,Form } from "./style";
import { Input } from "../../components/Input";
import {Button } from "../../components/Button"
import {FiMail,FiLock,FiUser} from "react-icons/fi"
import { Background } from "./style";
import { Link } from "react-router-dom";
export function SignUp(){
    return(
        <Container>
              <Background/>
           <Form>
           <h1>Rocket Notes</h1>
            <p>Aplicação para salvar e gerenciar seus links úteis</p>
            <h2>Crie sua conta</h2>
            <Input placeholder='Nome'
            type='text'
            icon={FiUser}/>
            <Input placeholder='Email'
            type='text'
            icon={FiMail}/>
            <Input placeholder='senha'
            type='password'
            icon={FiLock}/>
            <Button title="Cadastrar"/>
            <Link to='/'>
            Voltar para o Login</Link>
           </Form>
         
        </Container>
    )
}