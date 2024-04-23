import Header from "./components/Header"
import Main from "./components/Main"
import { DarkModeProvider } from "./DarkModeContext"

const App = () => {
    return (
        <DarkModeProvider>
            <Header />
            <Main />
        </DarkModeProvider>
    )
}
export default App