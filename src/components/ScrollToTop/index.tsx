import { useState, useEffect } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';

import { Container } from './styles';

const ScrollToTop: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(
    typeof window !== 'undefined' ? window.pageYOffset : 0,
  );

  useEffect(() => {
    const handleScrollPosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScrollPosition);

    return () => {
      window.removeEventListener('scroll', handleScrollPosition);
    };
  }, []);
  
  return (
    <Container onClick={() => window.scrollTo(0, 0)} show={scrollPosition > 620}>
      <BsArrowUpShort color="var(--primary-color)" size="30px" />
    </Container>
  );
}

export default ScrollToTop;