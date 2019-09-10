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
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    import('./TOCSlideContent').then(module => {
      setComponent(() => module.TOCSlideContent);
    });
  }, []);

  if (!Component) return null;
  return <Component slide={slide} />;
}
