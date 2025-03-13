import { Avatar, Button, ButtonGroup, Divider, Stack, Tooltip, Typography } from "@mui/joy";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../../../Providers/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactBook, faFeatherPointed, faTrashArrowUp } from "@fortawesome/free-solid-svg-icons";

const TableZone = () => {
    const { userList } = useContext(UserContext);

    return (
        <Stack
            gap={2}
        >
            <Typography level="h2">Gestion des utilisateurs</Typography>

            <Divider
                sx={{
                    width: 200,
                    height: 10,
                    borderRadius: 30
                }}
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
                            userList.map((value, idnex) => (
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