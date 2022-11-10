import Container from "@mui/material/Container/Container";
import React from "react";
import { AppContext } from "../../store/Context";

function PreConsole({ show }: { show: boolean }) {
  const { state } = React.useContext(AppContext);
  if (!show) return null;
  return (
    <Container>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </Container>
  );
}

export default PreConsole;
