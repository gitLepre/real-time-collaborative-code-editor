import { Button } from '@lib/ui/Button';
import { H1 } from '@lib/ui/Typography';
import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    console.log('Hello World!');
  }, []);

  return (
    <>
      <H1>My Portfolio</H1>
      <div className="flex">
        <div className='flex-1'></div>
        <div className="w-[960px] h-[600px] pr-12 pt-12 rounded-4 overflow-hidden">
          <video className='rounded-4' src="portfolio-clip.mp4" autoPlay muted loop />
        </div>
      </div>
      <Button>Click me</Button>
    </>
  );
};

export default HomePage;
