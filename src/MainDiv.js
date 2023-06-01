import styled from 'styled-components'

const MainDiv = styled.div`
display: block;
padding: 30px;
background-repeat: no-repeat;
height: 100%;
background-position: center;
background-size: cover;
height: 100vh;
background-color: rgb(0 0 0 / 59%);
background-blend-mode: multiply;
background-image: url(${(props)=>props.url})
`

export default MainDiv