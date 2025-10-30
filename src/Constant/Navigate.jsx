// import DashboardIcon from '@mui/icons-material/Dashboard';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import InventoryIcon from '@mui/icons-material/Inventory2';
// import SupportAgentIcon from '@mui/icons-material/SupportAgent';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'; // 🎫 Single Ticket icon
// import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
// import StoreIcon from '@mui/icons-material/Store'; // For stores
// import PeopleIcon from '@mui/icons-material/People'; // For users
// import BarChartIcon from '@mui/icons-material/BarChart'; // For insights
// import SettingsIcon from '@mui/icons-material/Settings';
// import GroupIcon from '@mui/icons-material/Group';
// import AccountTreeIcon from '@mui/icons-material/AccountTree';
// import HistoryIcon from "@mui/icons-material/History";
// import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
// import CorporateFareIcon from '@mui/icons-material/CorporateFare';

// export const NAVIGATION = [
//     {
//         title: 'Dashboard',
//         segment: '',
//         icon: <DashboardIcon />,
//         roles: ['SuperAdmin'],
//     },
//     {
//         title: 'Manage Stores',
//         segment: 'manage-store',
//         icon: <StoreIcon />,
//         roles: ['SuperAdmin'],
//     },
//     {
//         title: 'Manage Leasing',
//         segment: 'manage-store',
//         icon: <StoreIcon />,
//         roles: ['SuperAdmin'],
//     },
//     {
//         title: 'Manage Users',
//         segment: 'manage-store',
//         icon: <StoreIcon />,
//         roles: ['SuperAdmin'],
//     },


// ];


import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import HistoryIcon from "@mui/icons-material/History";
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Inventory2Icon from '@mui/icons-material/Inventory2';

export const NAVIGATION = [
    {
        title: 'Dashboard',
        segment: 'dashboard',
        icon: <DashboardIcon />,
        roles: ['SuperAdmin'],
    },
    {
        title: 'Manage Stores',
        segment: 'manage-store',
        icon: <StoreIcon />,
        roles: ['SuperAdmin'],
    },
    {
        title: 'Manage Markets',
        segment: 'manage-markets',
        icon: <BusinessIcon />,
        roles: ['SuperAdmin'],
    },
    {
        title: 'Manage Leasing',
        segment: 'manage-leasing',
        icon: <BusinessIcon />,
        roles: ['SuperAdmin'],
    },
    {
        title: 'Manage Users',
        segment: 'manage-users',
        icon: <PeopleIcon />,
        roles: ['SuperAdmin'],
    },
    {
        title: 'Manage Groups',
        segment: 'manage-groups',
        icon: <GroupIcon />,
        roles: ['SuperAdmin'],
    },
    {
        title: 'Tickets',
        segment: 'tickets',
        icon: <ConfirmationNumberIcon />,
        roles: ['SuperAdmin', 'Agent'],
    },
    {
        title: 'Support',
        segment: 'support',
        icon: <SupportAgentIcon />,
        roles: ['SuperAdmin', 'Agent'],
    },
    {
        title: 'Inventory',
        segment: 'inventory',
        icon: <Inventory2Icon />,
        roles: ['SuperAdmin'],
    },
    {
        title: 'Reports & Insights',
        segment: 'reports',
        icon: <BarChartIcon />,
        roles: ['SuperAdmin'],
    },
    {
        title: 'Activity Logs',
        segment: 'activity',
        icon: <HistoryIcon />,
        roles: ['SuperAdmin'],
    },
    {
        title: 'Notifications',
        segment: 'notifications',
        icon: <NotificationsNoneRoundedIcon />,
        roles: ['SuperAdmin', 'Agent'],
    },
    {
        title: 'Settings',
        segment: 'settings',
        icon: <SettingsIcon />,
        roles: ['SuperAdmin'],
    },
    {
        title: 'About',
        segment: 'about',
        icon: <InfoOutlinedIcon />,
        roles: ['SuperAdmin', 'Agent'],
    },
];
