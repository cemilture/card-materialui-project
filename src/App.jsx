import "./App.css";
import { AppBar, Container, Grid, Toolbar } from "@mui/material";
import { Course } from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

function App() {
  return (
    <>
      <AppBar>
        <Toolbar sx={{ fontSize: 30 }}>Kart Projesi</Toolbar>
      </AppBar>
      <Container sx={{ marginTop: 10 }} maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Angular}
              title="Angular"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid delectus aspernatur ea incidunt quas, laborum accusantium ullam deleniti culpa, voluptates, a molestiae praesentium. Beatae voluptates nemo ab odit itaque tempore!"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Bootstrap}
              title="Bootstrap"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid delectus aspernatur ea incidunt quas, laborum accusantium ullam deleniti culpa, voluptates, a molestiae praesentium. Beatae voluptates nemo ab odit itaque tempore!"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Csharp}
              title="Csharp"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid delectus aspernatur ea incidunt quas, laborum accusantium ullam deleniti culpa, voluptates, a molestiae praesentium. Beatae voluptates nemo ab odit itaque tempore!"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={KompleWeb}
              title="KompleWeb"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid delectus aspernatur ea incidunt quas, laborum accusantium ullam deleniti culpa, voluptates, a molestiae praesentium. Beatae voluptates nemo ab odit itaque tempore!"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
