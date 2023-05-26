import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/work'>Work</Link></li>
                <li><Link to='/info'>Info</Link></li>
            </ul>
        </nav>
    )
}