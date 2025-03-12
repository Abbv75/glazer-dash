import { Grid } from "@mui/joy"
import StatistiqueCard from "../../../../components/StatistiqueCard"

const StatistiqueZone = () => {
    return (
        <Grid
            container
            spacing={2}
            sx={{
                minWidth: 350
            }}
        >
            <Grid xs={12} md={6} lg={4}>
                <StatistiqueCard label="Nombre total d'utilisateur" value={15} />
            </Grid>

            <Grid xs={12} md={6} lg={4}>
                <StatistiqueCard label="Nombre total d'utilisateur" value={15} />
            </Grid>

            <Grid xs={12} md={6} lg={4}>
                <StatistiqueCard label="Nombre total d'utilisateur" value={15} />
            </Grid>

            <Grid xs={12} md={6} lg={4}>
                <StatistiqueCard label="Nombre total d'utilisateur" value={15} />
            </Grid>

            <Grid xs={12} md={6} lg={4}>
                <StatistiqueCard label="Nombre total d'utilisateur" value={15} />
            </Grid>

            <Grid xs={12} md={6} lg={4}>
                <StatistiqueCard label="Nombre total d'utilisateur" value={15} />
            </Grid>
        </Grid>
    )
}

export default StatistiqueZone