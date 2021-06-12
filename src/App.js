import React from "react";
import Form from "./Form";
import ListButtons from "./ListButtons";
import Tasks from "./Tasks";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "przejść na react", done: true },
  { id: 2, content: "zjeść obiad", done: false },
];
const hideDone = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
        extraHeaderContent={<ListButtons tasks={tasks} hideDone={hideDone} />}
      />
    </Container>
  );
}

export default App;
