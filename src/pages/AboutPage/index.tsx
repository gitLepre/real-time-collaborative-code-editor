import { Flex } from '@lib/ui/Flex';
import { H1, P } from '@lib/ui/Typography';
import { useParams } from 'react-router-dom';

const AboutPage = () => {
  const params = useParams();

  // throw a few fun test errors in a row if it's possible!
 
  return (
    <Flex dir="col" gap="2">
      <H1>About Page</H1>
      <P>This is a about page</P>
      <P>{params?.id}</P>
    </Flex>
  );
};

export default AboutPage;
