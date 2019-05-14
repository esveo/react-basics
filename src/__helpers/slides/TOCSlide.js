import React, { useEffect, useState } from 'react';
import { Slide } from 'spectacle';
import { Footer } from './Footer';
import { Header } from './Header';

export const getTOCSlide = () => {
  const slide = (
    <Slide>
      <Header text="Agenda" />
      <TOCContentLoader slide={() => slide} />
      <Footer />
    </Slide>
  );
  return slide;
};

function TOCContentLoader({ slide }) {
  const [content, setContent] = useState(null);

  useEffect(() => {
    import('./TOCSlideContent').then(module => {
      setContent(<module.TOCSlideContent slide={slide} />);
    });
  }, []);

  return content;
}
