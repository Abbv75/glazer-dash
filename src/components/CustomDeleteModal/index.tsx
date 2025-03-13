import { Button, Modal, ModalClose, ModalDialog, Stack, Typography } from "@mui/joy"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import TitleElement from "../../Pages/Users/list-users/TableZone/FormZone/TitleElement"
import { USE_STATE_T } from "../../types"

const CustomDeleteModal = (
    {
        open = false,
        setopen,
        onValidate
    }: {
        open: boolean,
        setopen: USE_STATE_T,
        onValidate?: any
    }
) => {
    return (
        <Modal
            open={open}
            onClose={() => setopen(false)}
        >
            <ModalDialog >
                <ModalClose />

                <TitleElement title="Supprimer" />

                <Typography>Etes vous sur de vouloir supprimer cet element ?</Typography>
                <Typography>Sachez que cette operation est irreversible!</Typography>

                <Stack direction={"row"}>

                    <Button
                        variant="plain"
                        color="success"
                        startDecorator={
                            <FontAwesomeIcon icon={faTimes} />
                        }
                        fullWidth
                        onClick={() => setopen(false)}
                    >Annuler</Button>

                    <Button
                        color="danger"
                        endDecorator={
                            <FontAwesomeIcon icon={faTrashAlt} />
                        }
                        fullWidth
                        onClick={() => onValidate && onValidate()}
                    >Oui je supprime!</Button>
                </Stack>
            </ModalDialog>
        </Modal>
    )
}

export default CustomDeleteModal