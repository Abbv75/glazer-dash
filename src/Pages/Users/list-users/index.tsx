import { Stack } from "@mui/joy"
import StatistiqueZone from "./StatistiqueZone"
import GraphZone from "./GraphZone"

const ListUsers = () => {
    return (
        <Stack p={2} >
            <Stack width="50%" gap={10}>
                <StatistiqueZone />

                <GraphZone />
            </Stack>

        </Stack>
    )
}

export default ListUsers