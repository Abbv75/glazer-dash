import { Grid } from "@mui/joy"
import StatistiqueCard from "../../../../components/StatistiqueCard"
import { useContext } from "react"
import { UserContext } from "../../../../Providers/UserContext"

const StatistiqueZone = () => {
    const {userList} = useContext(UserContext);

    return (
        <Grid
            container
            spacing={2}
            sx={{
                // minWidth: 350
            }}
        >
            <Grid xs={12} md={6} lg={4}>
                <StatistiqueCard label="Nombre total d'utilisateur" value={userList.length} />
            </Grid>

            <Grid xs={12} md={6} lg={4}>
                <StatistiqueCard label="Nombre d'auteur" value={userList.filter(u=>u.id_role == 3).length} />
            </Grid>

            <Grid xs={12} md={6} lg={4}>
                <StatistiqueCard label="Nombre d'administrateur" value={userList.filter(u=>u.id_role == 1).length} />
            </Grid>
        </Grid>
    )
}

export default StatistiqueZone