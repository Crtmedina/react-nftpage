import { Navegation } from "../components/Navegation"
import { Light } from "../styles/Themes"
import { GlobalStyles } from "../styles/GlobalStyles"
import { ThemeProvider } from "styled-components";
import { Home } from "../components/sections/Home"
import { About } from "../components/sections/About"
import { Roadmap } from "../components/sections/Roadmap";
import { Showcase } from "../components/sections/Showcase";
import {Team} from "../components/sections/Team";
import { Preguntas } from "../components/sections/Preguntas";
import { Footer } from "../components/sections/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

//* configura una sola ruta en tu aplicación, que es la página principal representada por el componente MenuPrincipal. Cuando los usuarios acceden a la URL raíz ("/"), se renderiza este componente.

export function MenuPrincipal() {
    return (
        <main>
            <GlobalStyles />
            <ThemeProvider theme={Light}>
                <Navegation/>
                <Home />
                <About />
                <Roadmap />
                <Showcase />
                <Team />
                <Preguntas />
                <Footer />´
                <ScrollToTop />
            </ThemeProvider>
        </main>
    )
}