import { Container,Form } from "./style";
import { Header } from "../../components/Header";
import {Input} from "../../components/Input"
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
export function New(){
    const [title,setTitle]= useState("")
    const [description,setDescription]=useState("")
    const [links, setLinks]=useState([])
    const [newLink, setNewLink]=useState(" ")

    const [tags, setTags]=useState([])
    const [newTag, setNewTag]=useState(" ")
    const navigate= useNavigate()

    function handleAddLink(){
        setLinks(prevstate=>[...prevstate,newLink])
        setNewLink(" ")
    }
    function handleRemoveLink(deleted){
       setLinks(prevstate=> prevstate.filter(link=> link !== deleted))
    }

    function handleAddTag(){
     setTags(prevstate=> [...prevstate,newTag])
     setNewTag("")
    }
    function handleRemoveTag(deleted){
        setTags(prevstate=> prevstate.splice(tag=> tag===deleted,1))
    }
    async function handleNewNote(){
        if(!title){
            return alert("Preencha o título!")
        }
       
        if(newTag){
            return alert('Há uma Tag pendente não adicionada,clique para adicionar!')
        }
        
            await api.post("/notes",{
                title,
                description,
                tags,
                links
            })
            alert('Nota criada com sucesso')
            navigate(-1)
    }
    return(
        <Container>
         <Header/>
             <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to='/'>Voltar</Link>
                    </header>
                   <Input 
                   placeholder='Título'
                   onChange={e=>setTitle(e.target.value)}/>

                   <TextArea 
                   placeholder='Observações'
                   onChange={e=>setDescription(e.target.value)}/>
                   <Section title='Links úteis'>
                    {
                        links.map((link,index)=>(
                            <NoteItem 
                    key={String(index)}
                     value={link}
                     onClick={()=>{handleRemoveLink(link)}}/>
                        ))
                    }
                    <NoteItem 
                    placeholder='Novo Link'
                     isnew
                     value={newLink}
                     onChange={e=>setNewLink(e.target.value)}
                     onClick={handleAddLink}/>
                   </Section>
                   
                   <Section title='Marcadores'>
                   <div className="tags">

                    {
                        tags.map((tag,index)=>(
                            <NoteItem 
                            value={tag}
                            key={String(index)}
                            onClick={()=>{handleRemoveTag(tag)}}/> /*fica nesse formato pois handleRemoveTag e handleRemoveLink possuem argumento*/
                        ))
                    }

                    <NoteItem 
                    placeholder='Nova tag' 
                    isnew
                    onChange={e=>setNewTag(e.target.value)}
                    value={newTag}
                    onClick={handleAddTag}/>
                    </div>
                   </Section>
                   <Button 
                   title='Salvar'
                   onClick={handleNewNote}/>
                </Form>
             </main>
        </Container>
    )
}