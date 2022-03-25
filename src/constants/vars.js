import { createGlobalStyle } from "styled-components";

export const VARS = createGlobalStyle`
  :root {
    // --- grid ---
    --grid-columns: 12;
    --grid-gap: 20px;

    // --- container ---
    --container-indent: 20px;

    // --- primary ---
    --primary-radius: 8px;
    --primary-border: 1px solid #bbb;
    --primary-animation: 0.3s ease-in-out;
    --primary-shadow: 0 10px 30px 5px rgba(27, 157, 120, 0.4);

    // --- secondary ---
    --secondary-radius: 45px;
  }
`
