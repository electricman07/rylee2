import { createFileRoute } from "@tanstack/react-router";
import { MasonryPhotoAlbum } from "react-photo-album";
import InfiniteScroll from "react-photo-album/scroll";
import "react-photo-album/masonry.css";
import { photos } from "../addons/photos";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";

const fetchPhotos: number = 10;

export const Route = createFileRoute("/images")({
  component: RouteComponent,
});

async function fetchMorePhotos(index: number) {
  // Implement your photo fetching logic here
  // Return the next batch of photos based on the index
  return [];
}

function RouteComponent() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <MasonryPhotoAlbum
        photos={photos}
        padding={12}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}
