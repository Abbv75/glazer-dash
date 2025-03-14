import { Stack, Typography, Divider } from '@mui/joy'

const TitleElement = ({ title = "" }) => {
    return (
        <Stack>
            <Typography level="title-md">{title}</Typography>
            <Divider />
        </Stack>
    )
}

export default TitleElement