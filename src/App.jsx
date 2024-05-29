import MainBody from "./components/MainBody"
import Header from "./components/Header";
import { SidebarContextProvider } from "./utils/SidebarContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ContentBody from "./components/ContentBody";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainBody />,
    children: [
      {
        path: '/',
        element: <ContentBody />
      },
      {
        path: '/watch',
        element: <WatchPage />
      }
    ]
  }
])


function App() {

  return (
    <SidebarContextProvider>
      <Header />
      <RouterProvider router={appRouter} />
    </SidebarContextProvider>
  )
}

export default App
