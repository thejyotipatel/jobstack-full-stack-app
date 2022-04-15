import styled from 'styled-components'

const Wrapper = styled.main`
  width: min(90%, 1200px);
  margin-inline: auto;
  display: grid;
  h1 span {
    color: var(--main-color-1);
  }
  nav {
    display: flex;
    margin: 2rem 0;
  }

  .page h1 {
    font-size: 36px;
    line-height: var(--lineHeight-h1);
    font-weight: 400;

    text-transform: capitalize;
    color: #585858;
  }
  .page p {
    width: min(90%, 1000px);
    font-size: 16px;
    font-weight: 500;
    line-height: var(--lineHeight-p);
    position: relative;
    color: #585858;
    margin: 1rem 0;
  }
  .page a {
    position: relative;
    background-color: var(--main-color-1);
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    :hover {
      background-color: var(--main-color-2);
    }
  }
  .img-contant {
    width: min(90%, 1000px);
    margin: 1rem 0;
  }
  .desc-section {
    display: grid;
    grid-template-columns: auto auto;
  }
  @media screen and (max-width: 992px) {
    .desc-section {
      grid-template-columns: auto;
    }
  }
`
export default Wrapper
