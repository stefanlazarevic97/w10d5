import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation/GalleryNavigation";
import { Route, Switch } from 'react-router-dom';
import GalleryView from "./components/GalleryView/GalleryView";

function App() {
    return (
        <div className="page-wrapper">
            <GalleryNavigation galleries={harvardArt.records} />
                <main>
                <Switch>
                    <Route exact path="/">
                        <h2>Harvard Art Museum</h2>
                        <p>Select a gallery in the navigation bar.</p>
                    </Route>
                    <Route path="/galleries/:galleryId">
                        <GalleryView galleries={harvardArt.record}/>
                    </Route>
                    <Route>
                        <h2>Page Not Found</h2>
                    </Route>
                </Switch>
                </main>
        </div>
    );
}

export default App;
