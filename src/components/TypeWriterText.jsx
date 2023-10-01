import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { Button } from "./Button";

//* Este código crea un efecto en el que el texto se escribe y se borra repetidamente con diferentes palabras (Divertidos, Increibles, Reutilizables) y colores (azul, naranja, rojo).

export default function TypeWriterText() {
  return (
    <div>
        <Title>
            Aprende react creando proyecto
            <Typewriter
                options={{
                autoStart: true, //* significa que la animación comenzará automáticamente cuando se renderice el componente
                loop: true, //*  hace que la animación se repita continuamente.
                }}
                onInit={(typewriter)=>{
                    typewriter.typeString(`<span class="text-1">Divertidos</span>`)
                    .pauseFor(500) //* detenga durante 500 milisegundos (0.5 segundos).
                    .deleteAll() //* elimina todo el texto que se ha escrito hasta ahora en la animación.
                    typewriter.typeString(`<span class="text-2">Increibles</span>`)
                    .pauseFor(500)
                    .deleteAll()
                    typewriter.typeString(`<span class="text-3">Reutilizables</span>`)
                    .pauseFor(500)
                    .deleteAll()
                    .start();//* Este método inicia la animación.
                }}
            >

            </Typewriter>
        </Title>
        <SubTitle>
             React es Cool💙
        </SubTitle>
        <ButtonContainer>
            <Button text="Explorar curso" link=""/>
        </ButtonContainer>
    </div>
    
  );
}

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  transition: all 0.5s ease-in-out;
  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }
  .text-1 {
    color: blue;
  }
  .text-2 {
    color: orange;
  }
  .text-3 {
    color: red;
  }
  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
  @media (max-width: 40em) {
    width: 90%;
  }
`;

const SubTitle = styled.h3`
    font-size: ${(props) => props.theme.fontlg};
    text-transform: capitalize;
    color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
    font-weight: 600;
    margin-bottom: 1rem;
    width: 80%;
    align-self: flex-start;
    @media (max-width: 40em) {
        font-size: ${(props) => props.theme.fontmd};
    }
    @media (max-width: 48em) {
        align-self: center;
        text-align: center;
    }
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
    button {
      margin: 0 auto;
    }
  }
`;