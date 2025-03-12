import { Avatar, Button, Card, Stack, Typography } from '@mui/joy'
import { CardMedia } from '@mui/material'
import { COLORS, IMAGES } from '../../constants'
import FancyText from '@carefully-coded/react-text-gradient';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { CURRENT_USER } from '../../types';
import { getCurrentUser } from '../../functions/helpers/getCurrentUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Navbar';

const Header = () => {
    const navigate = useNavigate();

    const [isNavbarOpened, setisNavbarOpened] = useState(true);

    useEffect(
        () => {
            !localStorage.getItem("currentUser") && navigate("/");
        },
        []
    )

    const currentUser = useMemo(
        () => getCurrentUser(),
        []
    );

    return (
        <Card
            sx={{
                borderRadius: 0,
                p: 1,
                flexDirection: "row",
                justifyContent: "space-between"
            }}
        >
            <Link to={"/"}>
                <Stack
                    direction={"row"}
                    gap={2}
                    alignItems={"center"}
                >
                    <Avatar>
                        <CardMedia
                            src={IMAGES.logo}
                            component={"img"}
                        />
                    </Avatar>

                    <FancyText
                        gradient={{ from: COLORS.plumWeb, to: COLORS.richBlack, type: 'linear' }}
                        animateTo={{ from: COLORS.africanViolet, to: COLORS.indianRed }}
                        animateDuration={2000}
                    >
                        <Typography level='h4' textColor={COLORS.africanViolet}>Kora Music</Typography>
                    </FancyText>
                </Stack>
            </Link>

            <Stack
                direction={"row"}
                gap={2}
            >
                <Avatar
                    sx={{ fontWeight: 700 }}
                >
                    {currentUser?.nomUser.charAt(0)}
                    {currentUser.prenom && `.${currentUser.prenom.charAt(0)}`}
                </Avatar>

                <Button variant='plain' onClick={()=>setisNavbarOpened(true)}>
                    <FontAwesomeIcon icon={faBars} />
                </Button>
            </Stack>

            <Navbar isOpen={isNavbarOpened} setisOpen={setisNavbarOpened} />
        </Card>
    )
}

export default Header