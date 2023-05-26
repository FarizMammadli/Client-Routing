import { Routes, Route } from "react-router-dom"
import Nav from "./Nav"
import About from "./About"
import Work from "./Work"
import Info from "./Info"

export default function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/info" element={<Info />} />
            </Routes>
        </>
    )
}