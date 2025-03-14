import { Divider, Dropdown, Menu, MenuButton, MenuItem, Tooltip, Typography } from "@mui/joy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactBook, faEnvelope, faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ContactItem = (
    {
        tel,
        email,
        adresse,
        whatsapp,
    }: {
        tel: string,
        email?: string,
        adresse?: string,
        whatsapp?: string,
    }
) => {
    return (
        <Dropdown>
            <Tooltip title="Cliquez pour voir le contact" color="primary">
            <MenuButton color="primary" variant="soft">
                <FontAwesomeIcon icon={faContactBook} />
            </MenuButton>
            </Tooltip>

            <Menu>
                <MenuItem
                    component={"a"}
                    href={`tel:${tel}`}
                >
                    <FontAwesomeIcon icon={faPhone} />
                    <Typography>{tel}</Typography>
                </MenuItem>
                {
                    email && (
                        <>
                            <Divider />
                            <MenuItem
                                component={"a"}
                                href={`mailto:${email}`}
                            >
                                <FontAwesomeIcon icon={faEnvelope} />
                                <Typography>{email}</Typography>
                            </MenuItem>
                        </>
                    )
                }
                {
                    adresse && (
                        <>
                            <Divider />
                            <MenuItem>
                                <FontAwesomeIcon icon={faLocationPin} />
                                <Typography>{adresse}</Typography>
                            </MenuItem>
                        </>
                    )
                }
                {
                    whatsapp && (
                        <>
                            <Divider />
                            <MenuItem
                                component={"a"}
                                href={`https://wa.me/${whatsapp}`}
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faWhatsapp} />
                                <Typography>{whatsapp}</Typography>
                            </MenuItem>
                        </>
                    )
                }
            </Menu>
        </Dropdown>
    )
}

export default ContactItem