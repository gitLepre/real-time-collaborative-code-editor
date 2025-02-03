import { Flex, H1, P } from '@shared/components';
import { useParams } from 'react-router-dom';

const AboutPage = () => {
  const params = useParams();
  return (
    <Flex dir="col" gap="2">
      <H1>About Page</H1>
      <P>This is a about page</P>
      <P>{params?.id}</P>
    </Flex>
  );
};

export default AboutPage;
