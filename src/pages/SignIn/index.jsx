import { Container,Form } from "./style";
import { Input } from "../../components/Input";
import {Button } from "../../components/Button"
import {FiMail,FiLock} from "react-icons/fi"
import { Background } from "./style";
import { Link } from "react-router-dom";
export function SignIn(){
    return(
        <Container>
           <Form>
           <h1>Rocket Notes</h1>
            <p>Aplicação para salvar e gerenciar seus links úteis</p>
            <h2>Faça seu login</h2>
            <Input placeholder='Email'
            type='text'
            icon={FiMail}/>
            <Input placeholder='senha'
            type='password'
            icon={FiLock}/>
            <Button title="Entrar"/>
            <Link to='/register'>
                
                Criar conta
            </Link>
           </Form>
           <Background/>
        </Container>
    )
}