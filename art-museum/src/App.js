import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation/GalleryNavigation";

function App() {
    return (
        <GalleryNavigation galleries={harvardArt.records} />
    );
}

export default App;
