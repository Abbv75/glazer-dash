import { Avatar, Card, Container, Stack, Typography } from "@mui/joy"

const ListUsers = () => {
    return (
        <Stack p={2}>
            <Stack
                direction={"row"}
            >
                <Card
                    sx={{
                        flexDirection: "row"
                    }}
                >
                    <Avatar size="lg" ></Avatar>
                    <Stack>
                        <Typography level="title-lg">15</Typography>
                        <Typography level="body-sm">Nombre total d'utilisateur</Typography>
                    </Stack>
                </Card>
            </Stack>
        </Stack>
    )
}

export default ListUsers