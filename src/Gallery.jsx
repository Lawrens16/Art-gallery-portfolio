import { useState } from 'react';
import art1 from './assets/Art1.jpg';
import art2 from './assets/Lili.jpg';
import art3 from './assets/art3.jpg';
import art4 from './assets/art4.jpg';
import art5 from './assets/xw34x.jpg';

const artworks = [
  { id: 1, image: art1, date: '2023-06-10', category: 'Commission' },
  { id: 2, image: art2, date: '2023-07-01', category: 'Commission' },
  { id: 3, image: art3, date: '2022-12-15', category: 'Concept Art' },
  { id: 4, image: art4, date: '2023-08-01', category: 'Concept Art' },
  { id: 5, image: art5, date: '2023-08-01', category: 'Concept Art' },
 /* { id: 6, image: 'niggart', date: '2023-08-01', category: 'Concept Art' },
  { id: 7, image: 'niggart', date: '2023-08-01', category: 'Concept Art' }, */
];

function Gallery() {
  const [sortOption, setSortOption] = useState('newest');
  const [categoryOption, setCategoryOption] = useState('all');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredArtworks = artworks.filter((art) => {
    if (categoryOption === 'all') return true;
    return art.category.toLowerCase() === categoryOption;
  });

  const sortedArtworks = [...filteredArtworks].sort((a, b) => {
    if (sortOption === 'newest') return new Date(b.date) - new Date(a.date);
    if (sortOption === 'oldest') return new Date(a.date) - new Date(b.date);
    return 0;
  });

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const showPrev = () => setSelectedIndex((prev) => (prev - 1 + sortedArtworks.length) % sortedArtworks.length);
  const showNext = () => setSelectedIndex((prev) => (prev + 1) % sortedArtworks.length);

  return (
    <div className="galleryContainer">
      <div className="galleryHeader">
        <select className="selectCss" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="newest">Most Recent</option>
          <option value="oldest">Oldest First</option>
        </select>

        <select className="selectCss" value={categoryOption} onChange={(e) => setCategoryOption(e.target.value)}>
          <option value="all">All</option>
          <option value="concept art">Concept Art</option>
          <option value="commission">Commission</option>
        </select>
      </div>

      <div className="masonryGrid">
        {sortedArtworks.map((art, index) => (
          <div key={art.id} className="masonryItem" onClick={() => openLightbox(index)}>
            <img src={art.image} alt={`Artwork ${art.id}`} className="masonryImage" />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
  <div className="lightbox" onClick={closeLightbox}>

    <button className="lightboxClose" onClick={(e) => { e.stopPropagation(); closeLightbox(); }}>
      &times;
    </button>

    <button className="lightboxArrow left" onClick={(e) => { e.stopPropagation(); showPrev(); }}>
      &#10094;
    </button>

    <img src={sortedArtworks[selectedIndex].image} alt="Enlarged artwork" className="lightboxImage" />

    <button className="lightboxArrow right" onClick={(e) => { e.stopPropagation(); showNext(); }}>
      &#10095;
    </button>
        
  </div>
)}


    </div>
  );
}

export default Gallery;
