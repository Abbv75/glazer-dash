import { Avatar, Button, ButtonGroup, Divider, Input, Stack, Tooltip, Typography } from "@mui/joy";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../../../Providers/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faContactBook, faFeatherPointed, faPlusCircle, faSearch, faTrashArrowUp } from "@fortawesome/free-solid-svg-icons";
import FormZone from "./FormZone/FormZone";
import CustomDeleteModal from "../../../../components/CustomDeleteModal";
import { toast } from "react-toastify";
import { deleteUser } from "../../../../functions/API/user/deleteUser";
import { LOADING_STATE_T } from "../../../../types";

const TableZone = () => {
    const { userList, setSelectedUser, loadData, selectedUser } = useContext(UserContext);
    const [search, setSearch] = useState(undefined as undefined | string);
    const [showFormZone, setshowFormZone] = useState(false);
    const [showDeleteModal, setshowDeleteModal] = useState(false);
    const [loadingState, setloadingState] = useState(null as LOADING_STATE_T);

    const handleDelete = async () => {
        try {
            setshowDeleteModal(false);
            if (!selectedUser) {
                toast.info("Veuillez selectionner un utilisateur d'abord");
                return;
            }
            setloadingState("En cours de chargement");

            const res = await deleteUser(selectedUser.id);

            toast.success("Utilisateur supprimé avec succès");
            setloadingState(null);
            setSelectedUser(undefined);
            loadData();

        } catch (error) {
            toast.error("Erreur lors de la suppression de l'utilisateur");
            setloadingState("Une erreur est survenue");
        }
    }

    return (
        <Stack
            gap={2}
        >
            <CustomDeleteModal
                open={showDeleteModal}
                setopen={setshowDeleteModal}
                onValidate={handleDelete}
            />

            <Typography level="h2">Gestion des utilisateurs</Typography>

            <Divider
                sx={{
                    width: 200,
                    height: 10,
                    borderRadius: 30
                }}
            />

            <Stack
                direction={"row"}
                gap={2}
            >
                <Input
                    endDecorator={
                        <FontAwesomeIcon icon={faSearch} />
                    }
                    fullWidth
                    placeholder="Rechercher un utilisateur"
                    value={search}
                    onChange={({ target }) => setSearch(target.value)}
                />

                <Divider orientation="vertical" />

                <Button
                    endDecorator={
                        <FontAwesomeIcon icon={!showFormZone ? faPlusCircle : faArrowRight} />
                    }
                    onClick={() => setshowFormZone(!showFormZone)}
                    color={!showFormZone ? "primary" : "danger"}
                >
                    {
                        !showFormZone ? "Ajouter" : "Annuler"
                    }
                </Button>
            </Stack>

            <FormZone
                show={showFormZone}
                setShow={setshowFormZone}
            />

            <TableContainer>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Nom</TableCell>
                            <TableCell>Prénom</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Menu</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            userList.filter(
                                (user) => (
                                    !search ? true
                                        : user.nomUser.toLowerCase().includes(search.toLowerCase())
                                        || user.prenom?.toLowerCase().includes(search.toLowerCase())
                                        || user?.contact?.email?.toLowerCase().includes(search.toLowerCase())
                                        || user?.contact?.tel.toLowerCase().includes(search.toLowerCase())
                                )
                            ).map((value, idnex) => (
                                <TableRow key={idnex}>
                                    <Tooltip
                                        title={value.login}
                                        followCursor
                                    >
                                        <TableCell>
                                            <Avatar size="sm">
                                                {value.nomUser.charAt(0)}
                                            </Avatar>
                                        </TableCell>
                                    </Tooltip>

                                    <TableCell>{value.nomUser}</TableCell>
                                    <TableCell>{value.prenom}</TableCell>
                                    <TableCell>{value.role.nomRole}</TableCell>

                                    <TableCell>
                                        <Stack
                                            direction={"row"}
                                            gap={1}
                                        >
                                            <Button variant="soft">
                                                <FontAwesomeIcon icon={faContactBook} />
                                            </Button>
                                            <ButtonGroup>
                                                <Tooltip title="Modifier">
                                                    <Button
                                                        startDecorator={
                                                            <FontAwesomeIcon icon={faFeatherPointed} />
                                                        }
                                                    >Mod...</Button>
                                                </Tooltip>

                                                <Tooltip title="Supprimer" color="danger">
                                                    <Button
                                                        endDecorator={
                                                            <FontAwesomeIcon icon={faTrashArrowUp} />
                                                        }
                                                        color="danger"
                                                        onClick={() => {
                                                            setshowDeleteModal(true);
                                                            setSelectedUser(value);
                                                        }}
                                                        loading={value == selectedUser && loadingState == "En cours de chargement"}
                                                    >Del...</Button>
                                                </Tooltip>
                                            </ButtonGroup>
                                        </Stack>

                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    )
}

export default TableZone