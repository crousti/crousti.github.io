import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import XMLViewer from 'react-xml-viewer';
import Typography from '@material-ui/core/Typography';

const input = '<Generate-Excel><File><File-Name>products.xlsx</File-Name><Sheets><Sheet><Sheet-Name>products</Sheet-Name><Cells><Cell line="1" column="1"><![CDATA[EAN]]></Cell><Cell line="1" column="2"><![CDATA[Image]]></Cell><Cell line="1" column="3"><![CDATA[Link]]></Cell><Cell line="2" column="1"><![CDATA[1234567890123]]></Cell><Cell line="2" column="2" type="image"><![CDATA[https://host.com/28a01a76849106eb.jpg?preset=small]]></Cell><Cell line="2" column="3" url="http://product-live.com" link-type="URL"><![CDATA[Link to product-live website]]></Cell></Cells></Sheet></Sheets></File></Generate-Excel>';
const ouput = '<Files><File><File-Name>Output.xlsx</File-Name><Url>https://pl.com/output.xlsx</Url></File></Files>';
const customTheme = {
    "textColor": "#bbbbbb",
    "commentColor": "#bbbbbb",
    "tagColor": "#e06c75",
    "attributeKeyColor": "#d19a66",
    "attributeValueColor": "#89c36e",
    "cdataColor": "#d9c07b",
    "separatorColor": "#abb2b2"
  }

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3, 2)
  },
  gridItem: {
    height: '90vh',
    overflowX: 'auto'
  }
}));


function GenerateExcel() {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid container spacing={3} >
                <Grid item xs={7} className={classes.gridItem}>
                    <Paper className={classes.paper}>
                        <Typography variant="h2" gutterBottom>Generate Excel</Typography>
                        <Typography variant="h4" gutterBottom>Description</Typography>
                        <Typography paragraph>
                            You need to to generate one or multiple .xlsx file. The .xlsx file can be generated with formatting and images. A template file with the extension .xslx must be created with a software like Microsoft Excel or Google Sheets.
                        </Typography>
                        <Typography variant="h4" gutterBottom>Inputs</Typography>
                        <Table className={classes.table} size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Param</TableCell>
                                    <TableCell>Description</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Input</TableCell>
                                    <TableCell>You can select between Output or File.Select Output if you want to use the output of another action.Select File if you to use always the same file.</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Template</TableCell>
                                    <TableCell>You must select a .xlsx file.</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <br></br>
                        <br></br>
                        <Typography variant="h4" gutterBottom>Expected input</Typography>
                        <Table className={classes.table} size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>XPath</TableCell>
                                    <TableCell>Description</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Generate-Excel</TableCell>
                                    <TableCell>Root of the document</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>./File</TableCell>
                                    <TableCell>For each files you want to generate.You can generate multiple files.</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>./File/File-Name</TableCell>
                                    <TableCell>File name</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>./Sheets</TableCell>
                                    <TableCell>Sheets block</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>./Sheets/Sheet</TableCell>
                                    <TableCell>For each sheet you want to generate</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>./Sheets/Sheet/Sheet-Name</TableCell>
                                    <TableCell>Name of the sheet.Either the sheet already exists and it writes in it,or it does not exist and it is created.</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>./Sheets/Sheet/Cells</TableCell>
                                    <TableCell>Cells block</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>./Sheets/Sheet/Cells/Cell</TableCell>
                                    <TableCell>Content of the cell. For IMAGE type cells put the original url. Always put a CDATA.</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>../Cell/@line</TableCell>
                                    <TableCell>Coordinate of the line. The index starts at 1.</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>../Cell/@column</TableCell>
                                    <TableCell>Coordinate of the column. The index starts at 1.</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>../Cell/@type</TableCell>
                                    <TableCell>Set type="IMAGE" if you want to output an image in the cell. The image will be automtically resized to fit the cell.</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>../Cell/@url</TableCell>
                                    <TableCell>Only when you write a link. A valid url</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>../Cell/@link-type</TableCell>
                                    <TableCell>
                                        URL | FILE | EMAIL | DOCUMENT<br></br>
                                        URL : open a valid url on your default web browser<br></br>
                                        FILE: open a file on your local system , the url attribute must be a valid path<br></br>
                                        EMAIL: open your default email program, the url attribute must be a valid email<br></br>
                                        DOCUMENT: reference another cell in the document, the url attribute must be like : 'Sheet1'!A1
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
                <Grid item xs className={classes.gridItem} >
                    <Typography variant="h4" gutterBottom>Expected input - Example</Typography>
                    <div style={{padding: 10, backgroundColor: "#282c34", width: "100%", overflowY: "auto"}}>
                        <XMLViewer xml={input} theme={customTheme} indentSize={5} />
                    </div>
                    <br></br>
                    <Typography variant="h4" gutterBottom>Ouput - Example</Typography>
                    <div style={{padding: 10, backgroundColor: "#282c34", width: "100%", overflowY: "auto"}}>
                        <XMLViewer xml={ouput} theme={customTheme} indentSize={5} />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles()(GenerateExcel);