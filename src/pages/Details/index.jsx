
import {Container,Links,Content} from "./details.js"
import {Button} from "../../components/Button"
import {Header} from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

export function Details(){
  return(
    <Container>
    <Header/>
    <main>
      <Content>
    <ButtonText title="Excluir nota"/>
          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat magnam maxime asperiores voluptatum neque inventore iure architecto earum dolores. Amet totam voluptatum rerum repudiandae voluptas explicabo aperiam similique! Nisi, culpa.</p>
    <Section title='Links úteis'>
     <Links>
      <li><a href="#">https://rocketseat.com.br</a></li>
      <li><a href="#">https://rocketseat.com.br</a></li>
      </Links>
    </Section>
    <Section title='Marcadores'>
      <Tag title="Node.js"/>
      <Tag title="Express"/>
    </Section>
    <Button title="Voltar"/>
    </Content>
    </main>
    </Container>
  )
}
