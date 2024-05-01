import Main from '../pages/Main';
import Notifications from '../pages/Notifications';
import TimeTable from '../pages/Timetable';
import Events from '../pages/Events';
import Rating from '../pages/Rating';
import Teachers from '../pages/Teachers';

export const routes = [
    {path: "/", element: <Main/>, exact: true },
    {path: "/notifications", element: <Notifications/>, exact: true },
    {path: "/timetable", element: <TimeTable/>, exact: true },
    {path: "/events", element: <Events/>, exact: true },
    {path: "/rating", element: <Rating/>, exact: true },
    {path: "/teachers", element: <Teachers/>, exact: true }
]