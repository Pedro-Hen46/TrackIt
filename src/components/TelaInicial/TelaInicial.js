import styles from 'styled-components'
import Logo from '../../Images/Logo-TrackIT.png'

export default function TelaInicial() {

    return (
        <Container>
            <img src={Logo} alt='Logo TrackIT' />
            <input placeholder='Email' type='email' />
        </Container>



    )
}