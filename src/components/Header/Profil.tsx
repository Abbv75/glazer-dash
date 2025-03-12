import { Avatar, Button, Card, Stack, Typography } from '@mui/joy';
import { useMemo, useState } from 'react';
import { getCurrentUser } from '../../functions/helpers/getCurrentUser';
import { Collapse } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen, faTimes, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

const Profil = () => {
    const [showPopUp, setshowPopUp] = useState(false);

    const currentUser = useMemo(
        () => getCurrentUser(),
        []
    );

    return (
        <Stack
            onMouseEnter={()=>setshowPopUp(true)}
            onMouseLeave={()=>setshowPopUp(false)}
        >
            <Avatar
                sx={{ fontWeight: 700, cursor: "pointer" }}
            >
                {currentUser?.nomUser.charAt(0)}
                {currentUser?.prenom && `.${currentUser?.prenom.charAt(0)}`}
            </Avatar>

            <Collapse
                in={showPopUp}
                sx={{
                    position: "fixed",
                    top: 55,
                    right: 70
                }}
                unmountOnExit
            >
                <Card
                    sx={{ p: 1, minWidth: 200 }}
                >
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        gap={1}
                    >
                        <Avatar size='sm'>
                            <FontAwesomeIcon icon={faUserAstronaut} />
                        </Avatar>
                        <Typography level='body-sm'>Votre profil</Typography>
                    </Stack>

                    <Button
                        color="danger"
                        endDecorator={
                            <FontAwesomeIcon icon={faDoorOpen} />
                        }
                    >Deconnexion</Button>

                </Card>
            </Collapse>
        </Stack>
    )
}

export default Profil