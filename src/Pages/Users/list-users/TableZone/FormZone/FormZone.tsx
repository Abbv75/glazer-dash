import { Button, Card, Divider, FormControl, FormLabel, Grid, Input, Option, Select, Stack, Typography } from "@mui/joy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationArrow, faLock, faPaperPlane, faPhone, faTimes, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import TitleElement from "./TitleElement";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Collapse } from "@mui/material";
import { USE_STATE_T } from "../../../../../types";

const FormZone = (
    {
        show = false,
        setShow,

    }: {
        show: boolean,
        setShow: USE_STATE_T
    }
) => {
    return (
        <Collapse
            in={show}
            sx={{
                alignSelf: "flex-end",
                position: "absolute",
                mt: 16,
                zIndex: 2
            }}
            unmountOnExit
            orientation="horizontal"
            onExit={() => setShow(false)}
        >
            <Card
                sx={{
                    p: 1,
                    maxWidth: 450
                }}
                variant="outlined"
                component={"form"}
            >
                <TitleElement title="Informations du compte" />

                <Grid
                    container
                    spacing={2}
                >
                    <Grid
                        xs={12}
                        lg={6}
                    >
                        <FormControl>
                            <FormLabel>Nom</FormLabel>
                            <Input />
                        </FormControl>
                    </Grid>

                    <Grid
                        xs={12}
                        lg={6}
                    >
                        <FormControl>
                            <FormLabel>Prenom</FormLabel>
                            <Input />
                        </FormControl>
                    </Grid>

                    <Grid
                        xs={12}
                        lg={6}
                    >
                        <FormControl>
                            <FormLabel>Login</FormLabel>
                            <Input
                                startDecorator={
                                    <FontAwesomeIcon icon={faUserAstronaut} />
                                }
                            />
                        </FormControl>
                    </Grid>

                    <Grid
                        xs={12}
                        lg={6}
                    >
                        <FormControl>
                            <FormLabel>Mot de passe</FormLabel>
                            <Input
                                startDecorator={
                                    <FontAwesomeIcon icon={faLock} />
                                }
                            />
                        </FormControl>
                    </Grid>

                    <Grid
                        xs={12}
                    >
                        <FormControl>
                            <FormLabel>Role</FormLabel>
                            <Select defaultValue={1}>
                                <Option value={1}>Administrateur</Option>
                                <Option value={1}>Auditeur</Option>
                            </Select>
                        </FormControl>
                    </Grid>

                </Grid>

                <TitleElement title="Informations de contact" />

                <Grid
                    container
                    spacing={2}
                >
                    <Grid
                        xs={12}
                        lg={6}
                    >
                        <FormControl>
                            <FormLabel>Numero</FormLabel>
                            <Input
                                startDecorator={
                                    <FontAwesomeIcon icon={faPhone} />
                                }
                            />
                        </FormControl>
                    </Grid>

                    <Grid
                        xs={12}
                        lg={6}
                    >
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input
                                startDecorator={
                                    <FontAwesomeIcon icon={faEnvelope} />
                                }
                            />
                        </FormControl>
                    </Grid>

                    <Grid
                        xs={12}
                        lg={6}
                    >
                        <FormControl>
                            <FormLabel>Numero Whatsapp</FormLabel>
                            <Input
                                startDecorator={
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                }
                            />
                        </FormControl>
                    </Grid>

                    <Grid
                        xs={12}
                        lg={6}
                    >
                        <FormControl>
                            <FormLabel>Adresse</FormLabel>
                            <Input
                                startDecorator={
                                    <FontAwesomeIcon icon={faLocationArrow} />
                                }
                            />
                        </FormControl>
                    </Grid>

                </Grid>

                <Stack
                    direction={"row"}
                    spacing={2}
                >
                    <Button
                        fullWidth
                        variant={"plain"}
                        color={"danger"}
                        startDecorator={
                            <FontAwesomeIcon icon={faTimes} />
                        }
                    >Annuler l'ajout</Button>
                    <Button
                        fullWidth
                        endDecorator={
                            <FontAwesomeIcon icon={faPaperPlane} />
                        }
                    >Confirmer l'ajout</Button>
                </Stack>
            </Card>
        </Collapse>

    )
}

export default FormZone