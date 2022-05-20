import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useTheme} from "@mui/material/styles";

function CourseCard() {
    const theme = useTheme();
    return (
        <Card sx={{
            display: 'flex',
            alignItems: "center",
            justifyContent: 'space-between',
            padding: 2,
        }}>
            <Box
                component={'div'}
                sx={{
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: 'space-between',
                }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    sx={{width: 100, height: 100, borderRadius: '50%'}}
                    image="http://img0.liveinternet.ru/images/attach/b/3/28/580/28580809_59065.jpg"
                />
                <CardContent>

                    <Typography variant="body2" component="p" color="text.secondary">
                        статус
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                        Дискретная математика для чайников
                    </Typography>
                    <Typography variant="body2" component="p" color="text.secondary">
                        Урок1: таблица умножения
                    </Typography>
                </CardContent>
            </Box>

            <CardActions>
                <Button
                    variant={'contained'}
                    size="small"
                    disableRipple
                    sx={{
                        background: theme.palette.success.light,
                        textTransform: 'none',
                        '&:hover': {backgroundColor: '#45a14b'},
                    }}
                    startIcon={<RocketLaunchIcon/>}
                >
                    Поехали!
                </Button>
                <MoreVertIcon fontSize={'large'} sx={{ml: 1}}/>
            </CardActions>
        </Card>
    )
        ;
}

export default CourseCard;
