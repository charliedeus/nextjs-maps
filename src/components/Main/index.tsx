import * as S from './styles';

const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <S.Title>React Avançado</S.Title>
      <S.Description>
        Typescript, ReactJS, NextJS e Styled Components
      </S.Description>

      <S.Illustration
        src="/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
      />
    </S.Wrapper>
  );
};

export default Main;
