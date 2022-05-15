import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Profile from "../screens/Profile/Profile";
import MyEducation from "../screens/MyEducation/MyEducation";
import Schedule from "../screens/Schedule/Schedule";
import Courses from "../screens/Courses/Courses";
import Favorites from "../screens/Favorites/Favorites";
import Posts from "../screens/Posts/Posts";

export const menuData = [
    {
        id: 1,
        title: 'Профиль',
        path: '/profile',
        icon: <PersonIcon/>,
        component: <Profile/>,
    },
    {
        id: 2,
        title: 'Мое обучение',
        path: '/my-education',
        icon: <SchoolIcon/>,
        component: <MyEducation/>,
    },
    {
        id: 6,
        title: 'Расписание',
        path: '/schedule',
        icon: <CalendarMonthIcon/>,
        component: <Schedule/>,
    },
    {
        id: 7,
        divider: true
    },
    {
        id: 3,
        title: 'Доступные курсы',
        path: '/courses',
        icon: <LocalLibraryIcon/>,
        component: <Courses/>,
    },
    {
        id: 5,
        title: 'База знаний',
        path: '/posts',
        icon: <LightbulbIcon/>,
        component: <Posts/>,
    },
    {
        id: 4,
        title: 'Избранное',
        path: '/favorites',
        icon: <StarBorderIcon/>,
        component: <Favorites/>,
    },
 ]
