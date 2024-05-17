import MainBody from "./components/MainBody"
import Header from "./components/Header";
import { SidebarContextProvider } from "./utils/SidebarContext";

function App() {

  return (
    <SidebarContextProvider>
      <Header />
      <MainBody />
    </SidebarContextProvider>
  )
}

export default App
