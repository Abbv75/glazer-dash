import { ButtonGroup, Drawer, Stack } from "@mui/joy"
import { CardMedia } from "@mui/material"
import { IMAGES, ROUTE_URL } from "../../constants"
import { USE_STATE_T } from "../../types"
import NavbarItem from "./NavbarItem"

const Navbar = (
    {
        isOpen = false,
        setisOpen
    }: {
        isOpen: boolean,
        setisOpen: USE_STATE_T
    }
) => {
    return (
        <Drawer
            open={isOpen}
            anchor="right"
            slotProps={{
                content: {
                    sx: {
                        width: "fit-content",
                        minWidth : 300
                    }
                }
            }}
            onClose={() => setisOpen(false)}
        >
            <Stack
                p={2}
                gap={4}
            >
                <CardMedia
                    component={"img"}
                    src={IMAGES.logo}
                    sx={{
                        width: 100,
                        alignSelf: "flex-end"
                    }}
                />

                <ButtonGroup
                    orientation="vertical"
                    variant="soft"
                >
                    {
                        ROUTE_URL.map((value, index) => (
                            <NavbarItem name={value.name} path={value.path} key={index}/>
                        ))
                    }
                </ButtonGroup>
            </Stack>
        </Drawer>
    )
}

export default Navbar