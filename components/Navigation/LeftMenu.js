import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Link from 'next/link';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Divider from '@material-ui/core/Divider';
import AppsIcon from '@material-ui/icons/Apps';
import ExtensionIcon from '@material-ui/icons/Extension';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import BuildIcon from '@material-ui/icons/Build';
import PhonelinkIcon from '@material-ui/icons/Phonelink';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';


const styles = theme => ({
    root: {
        flexGrow: 1,
    }
});


function LeftMenu(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <List
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Data Factory
                        </ListSubheader>
                }>
                <ListItem button key="1">
                    <ListItemIcon><MenuBookIcon /></ListItemIcon>
                    <Link href="/data-factory/tasks/generate-excel">
                        <ListItemText primary="Get started" />
                    </Link>
                </ListItem>
                <ListItem button key="2">
                    <ListItemIcon><ExtensionIcon /></ListItemIcon>
                    <Link href="/data-factory/tasks">
                        <ListItemText primary="VS Code extension" />
                    </Link>
                </ListItem>
                <ListItem button key="3">
                    <ListItemIcon><AccountTreeIcon /></ListItemIcon>
                    <Link href="/data-factory/tasks">
                        <ListItemText primary="Jobs" />
                    </Link>
                </ListItem>
                <ListItem button key="4">
                    <ListItemIcon><AppsIcon /></ListItemIcon>
                    <Link href="/data-factory/tasks">
                        <ListItemText primary="Tasks" />
                    </Link>
                </ListItem>
                <ListItem button key="5">
                    <ListItemIcon><AccessibilityIcon /></ListItemIcon>
                    <Link href="/data-factory/tasks">
                        <ListItemText primary="Community jobs" />
                    </Link>
                </ListItem>
            </List>
            <Divider />
            <List
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Templates by business
                </ListSubheader>
                }>
                <ListItem button key="6">
                    <ListItemIcon><EmojiEmotionsIcon /></ListItemIcon>
                    <Link href="/data-factory/tasks">
                        <ListItemText primary="Apparel" />
                    </Link>
                </ListItem>
                <ListItem button key="7">
                    <ListItemIcon><BuildIcon /></ListItemIcon>
                    <Link href="/data-factory/tasks">
                        <ListItemText primary="DYI" />
                    </Link>
                </ListItem>
                <ListItem button key="8">
                    <ListItemIcon><RestaurantIcon /></ListItemIcon>
                    <Link href="/data-factory/tasks">
                        <ListItemText primary="Food" />
                    </Link>
                </ListItem>
                <ListItem button key="9">
                    <ListItemIcon><PhonelinkIcon /></ListItemIcon>
                    <Link href="/data-factory/tasks">
                        <ListItemText primary="Home appliance" />
                    </Link>
                </ListItem>
                <ListItem button key="10">
                    <ListItemIcon><LocalHospitalIcon /></ListItemIcon>
                    <Link href="/data-factory/tasks">
                        <ListItemText primary="Pharmaceutical" />
                    </Link>
                </ListItem>
            </List>
            <Divider />
            <List
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Use Product-Live as
                </ListSubheader>
                }>
                {['Image of a system', 'PIM', 'DAM', 'ERP', 'MDM', 'CRM', 'ETL'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>

    )
}

LeftMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftMenu);