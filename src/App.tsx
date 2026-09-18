import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";
import { TimerIcon } from "lucide-react";
import { Container } from "./components/Container";

export function App() {
  return (
    <>
      <Container>
        <section>LOGO</section>
      </Container>

      <Container>
        <section>Menu</section>
      </Container>

      <Heading>
        <h1>Olá mundo!</h1>
        <button>
          <TimerIcon />
        </button>
      </Heading>
    </>
  );
}
