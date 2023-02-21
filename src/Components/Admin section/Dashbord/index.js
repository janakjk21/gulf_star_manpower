// ** MUI Imports
import Grid from '@mui/material/Grid';
import React from 'react';
// ** Icons Imports
import Poll from 'mdi-material-ui/Poll';
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd';
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline';
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline';

// ** Custom Components Imports
import CardStatisticsVerticalComponent from './index_component/card-stats-vertical/index';

// ** Styled Component Import
import ApexChartWrapper from './index_component/react-apexcharts';

// ** Demo Components Imports
import Table from './index_component/dashboard/Table';
import Trophy from './index_component/dashboard/Trophy';
import TotalEarning from './index_component/dashboard/TotalEarning';
import StatisticsCard from './index_component/dashboard/StatisticsCard';
// import Total from './index_component/dashboard/TotalChart';
import WeeklyOverview from './index_component/dashboard/WeeklyOverview';
import DepositWithdraw from './index_component/dashboard/DepositWithdraw';
import SalesByCountries from './index_component/dashboard/SalesByCountries';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Button, SwipeableDrawer } from '@mui/material';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const drawerWidth = 240;
const Dashboard = () => {
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event &&
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
			role='presentation'
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}>
			<List>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);
	return (
		<div
			style={{
				paddingTop: '100px',
				marginBottom: '100px',
				paddingLeft: '3%',
			}}>
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<Box style={{ borderRight: '2px', padding: '5px' }}>
					{['left'].map((anchor) => (
						<React.Fragment key={anchor}>
							<Button
								onClick={toggleDrawer(anchor, true)}
								style={{ color: 'red' }}>
								Menu
								<DensityMediumIcon />
							</Button>
							<SwipeableDrawer
								anchor={anchor}
								open={state[anchor]}
								onClose={toggleDrawer(anchor, false)}
								onOpen={toggleDrawer(anchor, true)}>
								{list(anchor)}
							</SwipeableDrawer>
						</React.Fragment>
					))}
				</Box>

				<ApexChartWrapper>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6} lg={4}>
							<Grid container spacing={6}>
								<Grid item xs={6}>
									<CardStatisticsVerticalComponent
										stats='$25.6k'
										icon={<Poll />}
										color='success'
										trendNumber='+42%'
										title='Total Profit'
										subtitle='Weekly Profit'
									/>
								</Grid>
								<Grid item xs={6}>
									<CardStatisticsVerticalComponent
										stats='$78'
										title='Refunds'
										trend='negative'
										color='secondary'
										trendNumber='-15%'
										subtitle='Past Month'
										icon={<CurrencyUsd />}
									/>
								</Grid>
								<Grid item xs={6}>
									<CardStatisticsVerticalComponent
										stats='862'
										trend='negative'
										trendNumber='-18%'
										title='New Project'
										subtitle='Yearly Project'
										icon={<BriefcaseVariantOutline />}
									/>
								</Grid>
								<Grid item xs={6}>
									<CardStatisticsVerticalComponent
										stats='15'
										color='warning'
										trend='negative'
										trendNumber='-18%'
										subtitle='Last Week'
										title='Sales Queries'
										icon={<HelpCircleOutline />}
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={6} md={8}>
							<StatisticsCard />
						</Grid>
					</Grid>
				</ApexChartWrapper>
			</Box>
		</div>
	);
};

export default Dashboard;
