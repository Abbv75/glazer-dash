import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Typography } from '@mui/joy'
import { useContext } from 'react'
import { HeaderContext } from '../../Providers/HeaderContext'

const NavbarItem = ({ path, name, icon }: { path: string, name: string, icon: IconProp }) => {
    const {navigate, setisNavbarOpened} = useContext(HeaderContext);


    return (
        <Button
            fullWidth
            startDecorator={
                <FontAwesomeIcon icon={faArrowLeft} />
            }
            endDecorator={
                <FontAwesomeIcon icon={icon} />
            }
            onClick={() => {
                navigate(path);
                setisNavbarOpened(false);
            }}
        >
            <Typography width={"100%"} textAlign={"right"}>
                {name}
            </Typography>
        </Button>
    )
}

export default NavbarItem