import styled from "styled-components";
import { PrimaryColor } from "../colors";
import Image from "../assets/images/vetor.png";
import Tecs from '../components/tecnologias';

const About = () => {
  const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  `;

  const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Title = styled.h2`
    margin-top: 3rem;

    font-family: "Audiowide";
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    text-transform: uppercase;
    color: white;
  `;

  const Vetor = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem 0 3rem 0;

    img {
      width: 40%;
      heigth: auto;

      min-width: 34rem;
    }

    @media (max-width: 850px) {
      margin: 3rem 0 5rem 0;
    }

    @media (max-width: 550px) {
      img {
        min-width: 20rem;
        min-height: 20rem;
      }
    }

    @media (max-width: 440px) {
      img {
        min-width: 17rem;
        min-height: 17rem;
      }
    }

    @media (max-width: 380px) {
      img {
        min-width: 15rem;
        min-height: 15rem;
      }
    }

    @media (max-width: 340px) {
      img {
        min-width: 13rem;
        min-height: 13rem;
      }
    }

    @media (max-width: 300px) {
      img {
        min-width: 11rem;
        min-height: 11rem;
      }
    }
  `;

  const Gestao = styled.h3`
    top: 150vh;
    left: 1rem;
    position: absolute;

    font-family: "Aldrich";
    font-style: normal;
    font-weight: 400;
    font-size: 1.3rem;
    color: white;

    text-align: center;
    text-transform: uppercase;

    @media (max-width: 850px) {
      margin: 5rem 10rem 5rem 3rem;
    }

    @media (max-width: 400px) {
      font-size: 1.2rem;
    }
  `;

  return (
    <Content id="About">
      <TitleContainer>
        <Title>
          <span style={{ color: PrimaryColor }}>#</span>
          Tecnologias
        </Title>
        <Gestao>
        <span style={{ color: PrimaryColor }}>Gestão </span>
        da Tecnologia<br />
        da Informação
      </Gestao>
      </TitleContainer>      
      <Vetor>
        <img src={Image} alt="Imagem vetorial" />
      </Vetor>
      <Tecs />
    </Content>
  );
};

export default About;
