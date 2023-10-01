import styled from "styled-components";
import GIF from "../assets/Home Video.mp4";

//* muestra un video de fondo que se reproduce automáticamente y se repite en bucle. El contenedor del video se dimensiona para ocupar todo el ancho disponible y se centra tanto horizontal como verticalmente en la página. También se ajusta el tamaño del video en pantallas más pequeñas.

export default function CoverVideo() {
  return (<VideoContainer>
    <video src={GIF} type="video/mp4" autoPlay muted loop/>
  </VideoContainer>);
}

const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center; /* Centra horizontalmente */
  align-items: center; /* Centra verticalmente */
  video {
    width: 100%;
    height: auto;
    
    @media (max-width: 64em) {
      min-width: 40vh;
      
    }
  }
`;