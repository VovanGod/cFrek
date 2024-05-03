import Main from '../pages/Main';
import Notifications from '../pages/Notifications';
import TimeTable from '../pages/Timetable';
import Events from '../pages/Events';
import Rating from '../pages/Rating';
import Teachers from '../pages/Teachers';

export const routes = [
    {path: "*", element: <Main/>, exact: true },
    {path: "/cfrek/", element: <Main/>, exact: true },
    {path: "/cfrek/notifications", element: <Notifications/>, exact: true },
    {path: "/cfrek/timetable", element: <TimeTable/>, exact: true },
    {path: "/cfrek/events", element: <Events/>, exact: true },
    {path: "/cfrek/rating", element: <Rating/>, exact: true },
    {path: "/cfrek/teachers", element: <Teachers/>, exact: true }
]