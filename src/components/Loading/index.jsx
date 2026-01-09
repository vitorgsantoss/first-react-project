

import { Container } from './styled';

export default function Loading( { isLoading } ) {
  if (!isLoading) return <></>;
  return (
    <Container>
      <div />
      <span>Loading...</span>
    </Container>
  );
}
