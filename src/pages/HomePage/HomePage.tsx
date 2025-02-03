import { Flex, H1, P, Span } from '@shared/components';

const HomePage = () => {
  return (
    <Flex dir="col" gap="2">
      <H1>Home Page</H1>
      <P>This is a home page</P>
      <Span>This is a span</Span>
    </Flex>
  );
};

export default HomePage;
