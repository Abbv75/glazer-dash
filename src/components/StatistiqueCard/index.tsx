import { Avatar, Card, Stack, Typography } from "@mui/joy"

const StatistiqueCard = (
    {
        value,
        label,
    }:{
        value: number,
        label: string,
    }
) => {
    return (
        <Card
            sx={{
                flexDirection: "row",
                // width: "fit-content",
                alignItems:"center",
            }}
        >
            <Avatar size="lg" ></Avatar>
            <Stack>
                <Typography level="h3">{value || "--" }</Typography>
                <Typography level="body-sm">{label || '--'}</Typography>
            </Stack>
        </Card>
    )
}

export default StatistiqueCard