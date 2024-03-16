export default function Navbar() {
    return ( <nav className="nav">
        <a href="/" className="site-title">Site Name</a>
        <ul>
            <li>
                <a href="/hotspots">Hotspots</a>
            </li>
            <li>
                <a href="/mybirds">My Birds</a>
            </li>
            <li>
                <a href="/otherbirders">Other Birders</a>
            </li>
            <li>
                <a href="/search">Search Database</a>
            </li>
        </ul>
    </nav>
    )
}