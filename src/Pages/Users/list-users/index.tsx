import { Grid, Stack } from "@mui/joy"
import StatistiqueZone from "./StatistiqueZone"
import GraphZone from "./GraphZone"
import TableZone from "./TableZone"
import { USER } from "../../../types"
import { useEffect, useState } from "react"
import { getAllUser } from "../../../functions/API/user/getAllUser"
import { UserContext } from "../../../Providers/UserContext"

const ListUsers = () => {
    const [data, setdata] = useState([] as USER[]);

    const loadData = async () => {
        try {
            const res = await getAllUser();
            if (!res) {
                return false
            }

            setdata(res);
        } catch (error) { }
    }

    useEffect(
        () => {
            loadData()
        },
        []
    )

    return (
        <UserContext.Provider
            value={{
                userList: data,
                loadData
            }}
        >

            <Grid
                p={5}
                container
                // spacing={2}
                width={"100%"}
            >
                <Grid
                    gap={10}
                    xs={12}
                    lg={6}
                >
                    <Stack
                        gap={"5vh"}
                    >
                        <StatistiqueZone />

                        <GraphZone />
                    </Stack>
                </Grid>

                <Grid
                    xs={12}
                    lg={6}
                >
                    <TableZone />

                </Grid>

            </Grid>
        </UserContext.Provider>

    )
}

export default ListUsers