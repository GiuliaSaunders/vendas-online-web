import styled from 'styled-components';

export const ContainerLoginScreen = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;
`;

export const BackgroundImage = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;   // % indica a largura máxima do pai (body)
    height: 100vh; // vh: altura vertical, 100 é o máximo, não usa %, pois o body não possui altura máxima da tela inteira
    object-fit: cover; // ajustar a imagem ao espaço sem alterar suas proporções
    z-index: -1;
`;

export const LogoImage = styled.img``;

export const ContainerLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D9D9D9;
    padding: 22px;
    width: 100%;
    height: 100vh;
    max-width: 646px;
    z-index: 1;
`;

export const LimitedContainer = styled.div`
    width: 100%;
    max-width: 498px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

