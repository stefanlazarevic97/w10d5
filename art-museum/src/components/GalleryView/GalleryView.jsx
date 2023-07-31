import { useParams, Redirect, Route } from "react-router-dom";
import ArtImageTile from "../ArtImageTile/ArtImageTile";
import ArtDescription from "../ArtDescription/ArtDescription";
import './GalleryView.css';

function GalleryView({ galleries }) {
    const { galleryId } = useParams();
    const gallery = galleries.find(gallery => gallery.id === Number(galleryId));

    console.log(gallery);

    if (!gallery) return (<Redirect to="/" />);

    return (
        <>
            <h2>{gallery.name}</h2>
            <Route exact path="/galleries/:galleryId">
                <div className="art-nav">
                    {gallery.objects.map((art) => (
                        <ArtImageTile art={art} key={art.id}/>
                    ))}
                </div>
            </Route>
            <Route path="/galleries/:galleryId/art/:artId">
                <ArtDescription gallery={gallery}/>
            </Route>
        </>
    );
}

export default GalleryView;