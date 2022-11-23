import {FiPlus,FiX} from "react-icons/fi"

import { Container } from "./style"

export function NoteItem({isnew,value,onclick,...rest}){
    return(
        <Container isnew={isnew}>
            <input
            type="text"
            value={value}
            readOnly={!isnew} {...rest}/>
              
              <button
              className={isnew? "button-add": "button-delete"}
              type="button"
              onClick={onclick}
              >
                {isnew? <FiPlus/>: <FiX/>}
              </button>
        </Container>
    )
}