export default function Navbar() {
    return ( <nav className="nav">
        <a href="/" className="site-title">Bird Tracker</a>
        <ul>
            <li>
                <a href="/hotspots">Bird Map</a>
            </li>
            <li>
                <a href="/mybirds">My Birds</a>
            </li>
            <li>
                <a href="/otherbirders">Other Birders</a>
            </li>
            <li>
                <a href="/search">Search Community Birds</a>
            </li>
            <li>
                <a href="/blog">Blog Postings</a>
            </li>
        </ul>
    </nav>
    )
}