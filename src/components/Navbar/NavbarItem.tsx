import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Typography } from '@mui/joy'
import { Link } from 'react-router-dom'

const NavbarItem = ({ path, name }: { path: string, name: string }) => {
    return (
        <Link
            to={path}
        >
            <Button
                fullWidth
                startDecorator={
                    <FontAwesomeIcon icon={faArrowLeft} />
                }
            >
                <Typography width={"100%"} textColor={"white"} textAlign={"right"}>
                    {name}
                </Typography>
            </Button>
        </Link>
    )
}

export default NavbarItem