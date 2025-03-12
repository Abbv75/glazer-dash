import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Typography } from '@mui/joy'
import { Link, useNavigate } from 'react-router-dom'

const NavbarItem = ({ path, name }: { path: string, name: string }) => {
    const navigate = useNavigate()
    return (
        <Button
            fullWidth
            startDecorator={
                <FontAwesomeIcon icon={faArrowLeft} />
            }
            onClick={()=>navigate(path)}
        >
            <Typography width={"100%"} textAlign={"right"}>
                {name}
            </Typography>
        </Button>
    )
}

export default NavbarItem