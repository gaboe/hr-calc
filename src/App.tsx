import {
  Container,
  createTheme,
  Grid,
  Input,
  NextUIProvider,
  Text,
} from "@nextui-org/react";
import React from "react";

function App() {
  const [sum, setSum] = React.useState(30000);
  const [ratio, setRatio] = React.useState(0.75);
  const [fixed, setFixed] = React.useState(0);
  const [flexible, setFlexible] = React.useState(0);

  const [isDark, setIsDark] = React.useState(true);

  const darkTheme = createTheme({
    type: isDark ? "dark" : "light",
    theme: {
      // colors: {...}, // optional
    },
  });

  React.useEffect(() => {
    setFixed(Math.round(sum * ratio));
    setFlexible(Math.round(sum * (1 - ratio)));
  }, [sum, ratio]);

  return (
    <NextUIProvider theme={darkTheme}>
      <Container>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
            cursor: "pointer",
          }}
          weight="bold"
          onClick={() => setIsDark(!isDark)}
        >
          HR 🦄
        </Text>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $purple600 -20%, $pink600 100%",
            cursor: "pointer",
          }}
          weight="bold"
          onClick={() => setIsDark(!isDark)}
        >
          Kalkulačka
        </Text>
        <br />
        <br />
        <Grid.Container gap={4}>
          <Grid>
            <Input
              type={"number"}
              labelPlaceholder="Celkem Kč"
              status="primary"
              value={sum}
              onChange={(e) => setSum(Number(e.target.value))}
              size="lg"
            />
          </Grid>
        </Grid.Container>

        <Grid.Container gap={4}>
          <Grid>
            <Input
              type={"number"}
              labelPlaceholder="Poměr %"
              size="lg"
              min={0}
              max={100}
              status="secondary"
              value={ratio * 100}
              onChange={(e) => setRatio(Number(e.target.value) / 100)}
            />
          </Grid>
        </Grid.Container>

        <Grid.Container gap={4}>
          <Grid>
            <Input
              type={"number"}
              size="lg"
              labelPlaceholder={`Zaručená Kč - ${ratio * 100}%`}
              status="error"
              value={fixed}
            />
          </Grid>
        </Grid.Container>

        <Grid.Container gap={4}>
          <Grid>
            <Input
              type={"number"}
              size="lg"
              labelPlaceholder={`Pohyblivá Kč - ${100 - ratio * 100}%`}
              status="warning"
              value={flexible}
            />
          </Grid>
        </Grid.Container>
      </Container>
    </NextUIProvider>
  );
}

export default App;
