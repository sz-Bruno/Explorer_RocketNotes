import { Container } from "./style";

export function ButtonText({title, isactive=false,...rest}){
    return(

            <Container type='button' isactive={isactive} {...rest}>
           {title}
        </Container>
    )
}