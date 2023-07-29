import { NavLink } from 'react-router-dom';
import './GalleryNavigation.css';

function GalleryNavigation({galleries}) {
    console.log(galleries);

    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink to="/">Home</NavLink>
            <ul>
                {galleries.map(gallery => (
                    <li>
                        <NavLink key={gallery.id} to={`/galleries/${gallery.id}`}>
                            {gallery.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default GalleryNavigation;