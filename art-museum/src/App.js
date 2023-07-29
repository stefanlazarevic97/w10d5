import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation/GalleryNavigation";
import { Route, Switch } from 'react-router-dom';
import GalleryView from "./components/GalleryView/GalleryView";

function App() {
    return (
        <GalleryNavigation galleries={harvardArt.records} />
    );
}

export default App;
