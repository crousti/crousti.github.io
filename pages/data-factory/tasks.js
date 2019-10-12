import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    card: {
        maxWidth: 300,
    },
    media: {
        height: 140,
    },
});

const tasks = [
    {
        "displayName": "FTP",
        "tasks": [
            {
                "key": "ftp-list",
                "displayName": "FTP List",
                "description": "List all files on a sFTP/FTP server.",
                "image": "/data-factory/tasks/spreadsheet.png",
                "link": "/data-factory/tasks/ftp-list"
            },
            {
                "key": "ftp-get",
                "displayName": "FTP Get",
                "description": "Get one file on a sFTP/FTP server.",
                "image": "/data-factory/tasks/spreadsheet.png",
                "link": "/data-factory/tasks/ftp-get"
            },
            {
                "key": "ftp-post",
                "displayName": "FTP Post",
                "description": "Post files on a sFTP/FTP server.",
                "image": "/data-factory/tasks/spreadsheet.png",
                "link": "/data-factory/tasks/ftp-post"
            }
        ]
    },
    {
        "displayName": "Generate files",
        "tasks": [
            {
                "key": "generate-excel",
                "displayName": "Generate Excel",
                "description": "Generate one or many Excel files.",
                "image": "/data-factory/tasks/spreadsheet.png",
                "link": "/data-factory/tasks/generate-excel"
            },
            {
                "key": "generate-pdf",
                "displayName": "Generate PDF",
                "description": "Get one or many PDF files",
                "image": "/data-factory/tasks/pdf.png",
                "link": "/data-factory/tasks/generate-pdf"
            },
            {
                "key": "generate-csv",
                "displayName": "Generate CSV",
                "description": "Generate a CSV file.",
                "image": "/data-factory/tasks/spreadsheet.png",
                "link": "/data-factory/tasks/generate-csv"
            }
        ]
    }
    
];


function Tasks(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Container maxWidth="md">
                {tasks.map((groupTask, index) => (
                    <div key={index}>
                        <Typography variant="h3" gutterBottom>
                            {groupTask.displayName}
                        </Typography>
                        <Grid container spacing={3}>
                            {groupTask.tasks.map((task, idx) => (
                                <Grid item xs={4} key={task.key}>
                                    <Link href={task.link}>
                                        <Card className={classes.card}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image={task.image}
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {task.displayName}
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        {task.description}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button size="small" color="primary">
                                                    Learn More
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                        <br></br>
                        <br></br>
                    </div>
                ))}                    
            </Container>
        </div>
    )
}

Tasks.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tasks);