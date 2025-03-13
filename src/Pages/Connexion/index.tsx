import { Button, Card, CardCover, Input, Typography } from "@mui/joy"
import { IMAGES } from '../../constants'
import { CardMedia } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faLock, faPaperPlane, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import { Link, Navigate, useNavigate, useNavigation } from 'react-router-dom'
import { useState } from "react"
import { LOADING_STATE_T } from "../../types"
import { loginUser } from "../../functions/API/user/login"
import { toast } from "react-toastify"
const Connexion = () => {
    const [loadingState, setloadingState] = useState(null as LOADING_STATE_T);
    const [email, setEmail] = useState(undefined as undefined | string);
    const [password, setPassword] = useState(undefined as undefined | string);
    const [showMdp, setshowMdp] = useState(false);

    const navigate = useNavigate()

    const onsubmit = async (e: any) => {
        try {
            e.preventDefault();
            setloadingState("En cours de chargement");

            if (!email || !password) {
                setloadingState(null);
                return false;
            }

            const res = await loginUser(email, password);

            if (!res) {
                setloadingState("Chargement reussit mais aucune données de trouvé");
                toast.error("Utilisateur introuvable");
                return false;
            }

            toast.success(`Bienvenue a vous Mr ${res.nomUser}`);
            
            setloadingState(null);

            navigate("users");

        } catch (error) {
            setloadingState("Une erreur est survenue");
            toast.error("Utilisateur introuvable");
        }
    }

    return (
        <Card
            sx={{
                height: '100vh',
                p: 0,
                border: 0,
                borderRadius: 0,
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <CardCover>
                <img src={IMAGES.concert} />
            </CardCover>

            <Card
                sx={{
                    alignItems: "center"
                }}
                component={"form"}
                onSubmit={onsubmit}
            >
                <CardMedia
                    component={"img"}
                    src={IMAGES.logo}
                    sx={{
                        width: 100,
                    }}
                />

                <Typography level='h3' >Connexion</Typography>

                <Input
                    startDecorator={
                        <FontAwesomeIcon icon={faUserAstronaut} />
                    }
                    fullWidth
                    required
                    onChange={({ target }) => setEmail(target.value)}
                    value={email}
                    placeholder="Saisissez votre login"
                />

                <Input
                    fullWidth
                    startDecorator={
                        <FontAwesomeIcon icon={faLock} />
                    }
                    endDecorator={
                        <FontAwesomeIcon
                            icon={faEye}
                            onClick={() => setshowMdp(!showMdp)}
                            style={{
                                cursor: "pointer"
                            }}
                        />
                    }
                    type={showMdp ? "text" : 'password'}
                    required
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                    placeholder="Saisissez votre mot de passe"
                />

                <Button
                    fullWidth
                    endDecorator={
                        <FontAwesomeIcon icon={faPaperPlane} />
                    }
                    type="submit"
                    loading={loadingState == "En cours de chargement"}
                >Se connecter</Button>

                <Link
                    to={"tel:+22366035300"}
                >Mot de passe oublié?</Link>
            </Card>

        </Card>
    )
}

export default Connexion