import styled from 'styled-components';

export default function Homepage() {
  return (
    <Container>
      <Heading>مع بوسطة، اشحن مكان ما تحب</Heading>
      <Subheading>
        وصّل منتجاتك أسرع وأوفر مع بوسطة لأي مكان في مصر بأقل سعر ومجهود وتابع
        تحركات الشحن والمندوب أول بأول من غير تأخير ولا تعب في الفواتير
      </Subheading>
    </Container>
  );
}

const Container = styled.div`
  padding: 3em 6em;
  min-height: 400px;
  color: white;
  background-image: linear-gradient(rgba(0, 0, 0, 0.333), rgba(0, 0, 0, 0.333)),
    url('https://bosta.co/wp-content/uploads/2019/08/Image-42.png');
  background-size: cover;
  background-position: center;
  filter: drop-shadow(0px 0px 0px black);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
`;

const Heading = styled.h1`
  margin: 0;
  width: 380px;
  font-size: 1.625em;
`;

const Subheading = styled.p`
  margin: 0;
  width: 380px;
  font-family: Arial;
  font-size: 1.125em;
  line-height: 1.5;
`;
