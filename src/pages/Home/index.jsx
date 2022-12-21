import {Container, Brand, Menu,Search, Content,NewNote} from "./style"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import{ButtonText} from "../../components/ButtonText"
import {FiPlus, FiSearch} from "react-icons/fi"
import {Section} from "../../components/Section"
import { Note } from "../../components/Note"
import { useState,useEffect } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"


export function Home(){
  const[tags, setTags]= useState([])
  const[tagsSelected, setTagsSelected]= useState([])
  const [search,setSearch]=useState("")
  const [notes,setNotes]= useState([])
  const navigate= useNavigate()

  function handleSelectedTags(tagName){
    if(tagName==='all'){
      return setTagsSelected([])
    }
    const alreadySelected= tagsSelected.includes(tagName)
    if(alreadySelected){
        const filteredTags= tagsSelected.filter((tag)=>tag!== tagName)
        setTagsSelected(filteredTags)
    }else{
      setTagsSelected(prevstate=>[...prevstate,tagName])
  }
    }
    function handleDetails(id){
      navigate(`/details/${id}`)
    }
    


  useEffect(()=>{
    async function fetchTags(){
          const response= await api.get("/tags")
          setTags(response.data)
    }
    fetchTags()
  },[])
  useEffect(()=>{
    async function fetchNotes(){
      const response= await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
      setNotes(response.data)
    }
    fetchNotes()
  },[tagsSelected,search])

    return(
       <Container>
        <Brand>
        <h1>Rocketnotes</h1>
        </Brand>
        <Header/>
        <Menu>
           <li> 
             <ButtonText 
              isactive={tagsSelected.length===0} 
              title='Todos'
              onClick={()=>handleSelectedTags('all')}
              />
            </li>
           {
           tags && tags.map((tag)=>(
              <li key={String(tag.id)} >
              
              <ButtonText 
              title={tag.name}
              onClick={()=> handleSelectedTags(tag.name)}
              isactive={tagsSelected.includes(tag.name)}
              />
              </li>
            ))
           }
         
          
          
           
          
        </Menu>
        <Search>
          <Input placeholder="Pesquisar pelo título" 
          icon={FiSearch}
          onChange={e=>setSearch(e.target.value)}/>
        </Search>
        <Content>
             <Section title="Minhas notas">
                  {
                    notes.map(note=>( 
                    <Note 
                    key={String(note.id)}
                    data={note}
                    onClick={()=>handleDetails(note.id)}
                      />))
                   }
             </Section>
        </Content>
        <NewNote to='/new'>
           
          <FiPlus/>
          Criar nota
         
        </NewNote>
       </Container>
    )
}