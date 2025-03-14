import { Button, Card, FormControl, FormLabel, Grid, Input, Option, Select, Stack } from "@mui/joy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationArrow, faLock, faPaperPlane, faPhone, faTimes, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import TitleElement from "./TitleElement";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Collapse } from "@mui/material";
import { LOADING_STATE_T, USE_STATE_T, USER } from "../../../../../types";
import { useContext, useEffect, useState } from "react";
import { addUser } from "../../../../../functions/API/user/addUser";
import { toast } from "react-toastify";
import { UserContext } from "../../../../../Providers/UserContext";
import { editUser } from "../../../../../functions/API/user/editUser";

const FormZone = (
    {
        show = false,
        setShow,

    }: {
        show: boolean,
        setShow: USE_STATE_T
    }
) => {
    const [loadingState, setloadingState] = useState(null as LOADING_STATE_T);
    const [info, setinfo] = useState({
        nomUser: undefined as undefined | string,
        prenom: undefined as undefined | string,
        login: undefined as undefined | string,
        password: undefined as undefined | string,
        id_role: 1,
    });

    const [contact, setcontact] = useState({
        tel: undefined as undefined | string,
        email: undefined as undefined | string,
        whatsapp: undefined as undefined | string,
        adresse: undefined as undefined | string,
    });

    const { loadData, selectedUser, setSelectedUser } = useContext(UserContext);

    useEffect(
        () => {
            if (selectedUser) {
                setinfo({
                    nomUser: selectedUser.nomUser,
                    login: selectedUser.login,
                    id_role: selectedUser.role.id,
                    password: undefined,
                    prenom: selectedUser.prenom || undefined
                });

                if (selectedUser.contact) {
                    setcontact({
                        adresse: selectedUser.contact?.address || undefined,
                        email: selectedUser.contact?.email || undefined,
                        whatsapp: selectedUser.contact?.whatsapp || undefined,
                        tel: selectedUser.contact.tel,
                    })
                }
            }
        },
        [selectedUser]
    )

    const onsubmit = async (e: any) => {
        try {
            e.preventDefault();
            setloadingState("En cours de chargement")

            const {
                login,
                password,
                nomUser,
                prenom,
                email,
                tel,
                id_role,
                adresse,
                whatsapp
            } = { ...info, ...contact };

            let res: false | USER = false;

            if (!selectedUser) {
                if (!login || !password || !nomUser || !tel || !id_role) {
                    toast.error("Veuillez saisir les champs obligatoires");
                    setloadingState(null);
                    return false;
                }

                res = await addUser(login, password, nomUser, id_role, tel, prenom, email, adresse, whatsapp);
            }
            else {
                res = await editUser(selectedUser.id, { ...info, ...contact });
            }

            if (!res) {
                setloadingState("Chargement finit");
                toast.info("Ajout non effectuée")
            }

            toast.success("Traitement effectuée");
            loadData();

            setSelectedUser(undefined);
            setShow(false);

            setloadingState("Chargement reussit");
        } catch (error) {
            toast.error("Une erreur est survenue lors de l'action sur l'utilisateur")
            setloadingState("Une erreur est survenue");
        }
    }

    return (
        <Collapse
            in={show}
            sx={{
                alignSelf: "flex-end",
                position: window.innerWidth > 800 ? "absolute" : "initial",
                mt: window.innerWidth > 800 ? 16 : 0,
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
                onSubmit={onsubmit}
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
                            <Input
                                value={info.nomUser}
                                onChange={({ target }) => setinfo({
                                    ...info,
                                    nomUser: target.value
                                })}

                            />
                        </FormControl>
                    </Grid>

                    <Grid
                        xs={12}
                        lg={6}
                    >
                        <FormControl>
                            <FormLabel>Prenom</FormLabel>
                            <Input
                                value={info.prenom}
                                onChange={({ target }) => setinfo({
                                    ...info,
                                    prenom: target.value
                                })}

                            />
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
                                value={info.login}
                                onChange={({ target }) => setinfo({
                                    ...info,
                                    login: target.value
                                })}
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
                                value={info.password}
                                onChange={({ target }) => setinfo({
                                    ...info,
                                    password: target.value
                                })}
                            />
                        </FormControl>
                    </Grid>

                    <Grid
                        xs={12}
                    >
                        <FormControl>
                            <FormLabel>Role</FormLabel>
                            <Select
                                value={info.id_role}
                                onChange={(e, value) => setinfo({
                                    ...info,
                                    id_role: value || 1
                                })}
                            >
                                <Option value={1}>Administrateur</Option>
                                <Option value={2}>Auditeur</Option>
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
                                value={contact.tel}
                                onChange={({ target }) => setcontact({
                                    ...contact,
                                    tel: target.value
                                })}
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
                                value={contact.email}
                                onChange={({ target }) => setcontact({
                                    ...contact,
                                    email: target.value
                                })}
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
                                value={contact.whatsapp}
                                onChange={({ target }) => setcontact({
                                    ...contact,
                                    whatsapp: target.value
                                })}
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
                                value={contact.adresse}
                                onChange={({ target }) => setcontact({
                                    ...contact,
                                    adresse: target.value
                                })}
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
                        type="reset"
                        onClick={() => {
                            setShow(false)
                        }}
                    >Annuler</Button>
                    <Button
                        fullWidth
                        endDecorator={
                            <FontAwesomeIcon icon={faPaperPlane} />
                        }
                        type="submit"
                        loading={loadingState == "En cours de chargement"}
                    >Valider</Button>
                </Stack>
            </Card>
        </Collapse>

    )
}

export default FormZone