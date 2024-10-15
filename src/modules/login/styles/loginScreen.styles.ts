import styled from 'styled-components';

export const BackgroundImage = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;   // % indica a largura máxima do pai (body)
    height: 100vh; // vh: altura vertical, 100 é o máximo, não usa %, pois o body não possui altura máxima
    object-fit: cover; // ajustar a imagem ao espaço (body) sem alterar suas proporções
`;

