import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout  />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
