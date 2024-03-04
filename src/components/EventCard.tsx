import {
    Box,
    Grid,
    InputLabel,
    StyleRules,
    TextField,
    withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
interface Props {
    classes: any;
}
class EventCard extends Component<Props> {
    renderCard = (classes: any) => {
        return (
            <Box className={classes.cardBody}>
                <Box>
                    <Box className={classes.cardHeading}>Next Upcoming Event</Box>
                    <hr className={classes.cardHr} />
                    <Box className={classes.cardMessage}>
                        Preparing for an upcoming interview drive is crucial for success.
                        Here are some general tips to help you prepare
                    </Box>
                </Box>
                <Box>
                    <Box className={classes.cardTextfieldBox}>
                        <InputLabel className={`${classes.eventLabel} ${classes.first}`}>
                            Batches :-{" "}
                        </InputLabel>
                        <TextField
                            name="batches"
                            className={classes.cardTextfieldBody}
                            type="text"
                            autoComplete="off"
                        // value=""
                        />
                    </Box>
                    <Box className={classes.cardTextfieldBox}>
                        <InputLabel className={`${classes.eventLabel} ${classes.second}`}>
                            Required Education :-{" "}
                        </InputLabel>
                        <TextField
                            name="education"
                            className={classes.cardTextfieldBody}
                            type="text"
                            autoComplete="off"
                        // value=""
                        />
                    </Box>
                    <Box className={classes.cardTextfieldBox}>
                        <InputLabel className={`${classes.eventLabel} ${classes.third}`}>
                            Doc Submission :-{" "}
                        </InputLabel>
                        <TextField
                            name="docs"
                            className={classes.cardTextfieldBody}
                            type="text"
                            autoComplete="off"
                        // value=""
                        />
                    </Box>
                    <Box className={classes.cardBtn}>
                        <button className={classes.cardApplyBtn}>Apply</button>
                    </Box>
                </Box>
            </Box>
        );
    };
    render() {
        const { classes } = this.props;
        return (
            <Grid container>
                <Grid
                    item
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className={classes.eventCardGrid}
                >
                    {this.renderCard(classes)}
                </Grid>
            </Grid>
        );
    }
}
const style: StyleRules = {
    eventCardGrid: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 10px 0 10px",
    },
    cardBody: {
        width: "1300px",
        display: "flex",
        // margin: "10px auto",
        justifyContent: "center",
        // alignItems: "center",
        "& >*:nth-child(1)": {
            width: "35%",
            backgroundColor: "#E2989880",
            padding: "20px 60px",
            color: "#FFFFFF",
            fontFamily: "Nunito",
        },
        "& >*:nth-child(2)": {
            width: "65%",
            // width: "989px",
            backgroundColor: "#F9E3C3",
            padding: "20px",
        },
    },
    cardHeading: {
        width: "366px",
        fontSize: "40px",
        fontWeight: 700,
        margin: "0px 0px 20px",
        lineHeight: "45px",
    },
    cardMessage: {
        width: "366px",
        fontSize: "16px",
        fontWeight: 700,
        lineHeight: "20px",
        margin: "30px 0px",
    },
    cardHr: {
        border: "2px solid #F7D8D6",
    },
    eventLabel: {
        fontFamily: "Nunito",
        fontSize: "24px",
        fontWeight: 700,
        color: "#EC7157",
    },
    cardTextfieldBox: {
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid #CB988D",
        padding: "10px 0px",
    },
    cardTextfieldBody: {
        height: "35px",
        "& .MuiInputBase-input": {
            height: "25px",
            fontSize: "18px",
            margin: "0px 10px",
        },
        "& .MuiInput-underline:before": {
            borderBottom: "none",
        },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            border: "none",
        },
        "& .MuiInput-underline:after": {
            border: "none",
        },
    },
    cardBtn: {
        display: "flex",
        justifyContent: "end",
        padding: "25px 0px 0px",
    },
    cardApplyBtn: {
        width: "198px",
        height: "64px",
        backgroundColor: "#FFFFFF",
        borderRadius: "6px",
        border: "none",
        color: "#EC7157",
        fontFamily: "Nunito",
        fontSize: "24px",
        fontWeight: 700,
    },
    "@media screen and (min-width: 1024px) and (max-width: 1440px)": {
        cardBody: {
            width: "90%",
            "& >*:nth-child(1)": {
                width: "35%",
                padding: "20px 30px !important",
            },
            "& >*:nth-child(2)": {
                width: "65%",
            },
        },
        cardHeading: {
            width: "260px",
            margin: "0px 0px 10px",
            fontSize: "36px",
        },
        cardMessage: {
            width: "260px",
            margin: "20px 0px",
        },
        cardHr: {
            border: "1px solid #F7D8D6",
        },
        cardApplyBtn: {
            width: "148px",
            height: "48px",
        },
    },
    "@media screen and (min-width: 768px) and (max-width: 1023px)": {
        cardBody: {
            width: "100%",
            "& >*:nth-child(1)": {
                width: "37%",
                padding: "20px",
            },
            "& >*:nth-child(2)": {
                width: "63%",
            },
        },
        cardHeading: {
            width: "210px",
            margin: "0px 0px 10px",
            fontSize: "32px",
        },
        cardMessage: {
            width: "210px",
            margin: "20px 0px",
        },
        cardTextfieldBody: {
            height: "45px",
        },
        first: {
            width: "120px",
        },
        second: {
            width: "370px !important",
        },
        third: {
            width: "290px",
        },
        cardApplyBtn: {
            width: "140px",
            height: "45px",
            fontSize: "18px",
        },
    },
    "@media screen and (min-width: 576px) and (max-width: 767px)": {
        cardBody: {
            maxWidth: "398px",
            flexDirection: "column",
            // justifyContent: "center",
            // margin: "20px",
            "& >*:nth-child(1)": {
                width: "100%",
                padding: "30px",
                minHeight: "160px",
            },
            "& >*:nth-child(2)": {
                width: "100%",
                padding: "30px",
                minHeight: "234px",
            },
            "& .MuiBox-root-32": {
                "& >*:nth-child(1)": {
                    borderBottom: "none",
                },
                "& >*:nth-child(2)": {
                    borderBottom: "none",
                },
                "& >*:nth-child(3)": {
                    padding: "10px 0px 25px",
                },
            },
        },
        cardHeading: {
            width: "200px",
            fontSize: "24px",
            lineHeight: "26px",
            margin: "0px",
        },
        cardMessage: {
            width: "100%",
            fontSize: "16px",
            lineHeight: "20px",
            margin: "15px 0px 0px",
        },
        cardHr: {
            display: "none",
        },
        first: {
            width: "90px",
        },
        second: {
            width: "300px !important",
        },
        third: {
            width: "220px",
        },
        eventLabel: {
            fontSize: "16px",
        },
        cardBtn: {
            justifyContent: "center",
        },
        cardApplyBtn: {
            width: "148px",
            height: "48px",
            fontSize: "24px",
        },
    },
    "@media screen and (min-width: 300px) and (max-width: 575px)": {
        eventCardGrid: {
            padding: "0 5px 0 5px",
        },
        cardBody: {
            maxWidth: "358px",
            flexDirection: "column",
            alignItems: "center",
            "& >*:nth-child(1)": {
                width: "90%",
                padding: "10px",
                minHeight: "160px",
            },
            "& >*:nth-child(2)": {
                width: "90%",
                padding: "10px",
                minHeight: "234px",
            },
            "& .MuiBox-root-32": {
                "& >*:nth-child(1)": {
                    borderBottom: "none",
                },
                "& >*:nth-child(2)": {
                    borderBottom: "none",
                },
                "& >*:nth-child(3)": {
                    padding: "10px 0px 25px",
                },
            },
        },
        cardHeading: {
            width: "200px",
            fontSize: "24px",
            lineHeight: "26px",
            margin: "0px",
        },
        cardMessage: {
            width: "100%",
            fontSize: "16px",
            lineHeight: "20px",
            margin: "15px 0px 0px",
        },
        cardHr: {
            display: "none",
        },
        first: {
            width: "90px",
        },
        second: {
            width: "300px !important",
        },
        third: {
            width: "220px",
        },
        eventLabel: {
            fontSize: "16px",
        },
        cardBtn: {
            justifyContent: "center",
        },
        cardApplyBtn: {
            width: "148px",
            height: "48px",
            fontSize: "24px",
        },
    },
};
export default withStyles(style)(EventCard);



// import { Box, Grid, InputLabel, StyleRules, TextField, withStyles } from '@material-ui/core'
// import React, { Component } from 'react'

// interface Props {
//     classes: any
// }

// class EventCard extends Component<Props> {

//     renderCard = (classes: any) => {
//         return (
//             <Box className={classes.cardBody}>
//                 <Box>
//                     <Box className={classes.cardHeading}>Next Upcoming Event</Box>
//                     <hr className={classes.cardHr} />
//                     <Box className={classes.cardMessage}>Preparing for an upcoming interview drive is
//                         crucial for success. Here are some general tips
//                         to help you prepare
//                     </Box>
//                 </Box>
//                 <Box>
//                     <Box className={classes.cardTextfieldBox}>
//                         <InputLabel className={`${classes.eventLabel} ${classes.first}`}>Batches :- </InputLabel>
//                         <TextField
//                             name="batches"
//                             className={classes.cardTextfieldBody}
//                             type="text"
//                             autoComplete="off"
//                         // value=""
//                         />
//                     </Box>
//                     <Box className={classes.cardTextfieldBox}>
//                         <InputLabel className={`${classes.eventLabel} ${classes.second}`}>Required Education :- </InputLabel>
//                         <TextField
//                             name="education"
//                             className={classes.cardTextfieldBody}
//                             type="text"
//                             autoComplete="off"
//                         // value=""
//                         />
//                     </Box>
//                     <Box className={classes.cardTextfieldBox}>
//                         <InputLabel className={`${classes.eventLabel} ${classes.third}`}>Doc Submission :- </InputLabel>
//                         <TextField
//                             name="docs"
//                             className={classes.cardTextfieldBody}
//                             type="text"
//                             autoComplete="off"
//                         // value=""
//                         />
//                     </Box>
//                     <Box className={classes.cardBtn}>
//                         <button className={classes.cardApplyBtn}>Apply</button>
//                     </Box>
//                 </Box>
//             </Box>
//         )
//     }

//     render() {
//         const { classes } = this.props;
//         return (
//             <Grid container>
//                 <Grid item lg={12} md={12} sm={12} xs={12}>
//                     <Box>
//                         {this.renderCard(classes)}
//                     </Box>
//                 </Grid>
//             </Grid>
//         )
//     }
// }

// const style: StyleRules = ({
//     cardBody: {
//         width: "1300px",
//         display: "flex",
//         margin: "10px auto",
//         "& >*:nth-child(1)": {
//             width: "577px",
//             backgroundColor: "#E2989880",
//             padding: "20px 60px",
//             color: "#FFFFFF",
//             fontFamily: "Nunito",
//         },
//         "& >*:nth-child(2)": {
//             width: "100%",
//             // width: "989px",
//             backgroundColor: "#F9E3C3",
//             padding: "20px",
//         },
//     },

//     cardHeading: {
//         width: "366px",
//         fontSize: "40px",
//         fontWeight: 700,
//         margin: "0px 0px 20px",
//         lineHeight: "45px"
//     },

//     cardMessage: {
//         width: "366px",
//         fontSize: "16px",
//         fontWeight: 700,
//         lineHeight: "20px",
//         margin: "30px 0px"
//     },

//     cardHr: {
//         border: "2px solid #F7D8D6"
//     },

//     eventLabel: {
//         fontFamily: "Nunito",
//         fontSize: "24px",
//         fontWeight: 700,
//         color: "#EC7157",
//     },

//     cardTextfieldBox: {
//         display: "flex",
//         alignItems: "center",
//         borderBottom: "1px solid #CB988D",
//         padding: "10px 0px"
//     },

//     cardTextfieldBody: {
//         height: "35px",
//         "& .MuiInputBase-input": {
//             height: "25px",
//             fontSize: "18px",
//             margin: "0px 10px"
//         },
//         "& .MuiInput-underline:before": {
//             borderBottom: "none",
//         },
//         "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
//             border: "none",
//         },
//         "& .MuiInput-underline:after": {
//             border: "none",
//         },
//     },

//     cardBtn: {
//         display: "flex",
//         justifyContent: "end",
//         padding: "25px 0px 0px",
//     },

//     cardApplyBtn: {
//         width: "198px",
//         height: "64px",
//         backgroundColor: "#FFFFFF",
//         borderRadius: "6px",
//         border: "none",
//         color: "#EC7157",
//         fontFamily: "Nunito",
//         fontSize: "24px",
//         fontWeight: 700,
//     },

//     "@media screen and (min-width: 1024px) and (max-width: 1440px)": {
//         cardBody: {
//             width: "80%",
//             "& >*:nth-child(1)": {
//                 width: "320px !important",
//                 padding: "20px 30px !important"
//             },
//             "& >*:nth-child(2)": {
//                 width: "100%",
//             },
//         },

//         cardHeading: {
//             width: "260px",
//             margin: "0px 0px 10px",
//             fontSize: "36px",
//         },

//         cardMessage: {
//             width: "260px",
//             margin: "20px 0px",
//         },

//         cardHr: {
//             border: "1px solid #F7D8D6",
//         },

//         cardApplyBtn: {
//             width: "148px",
//             height: "48px",
//         },
//     },

//     "@media screen and (min-width: 768px) and (max-width: 1023px)": {
//         cardBody: {
//             width: "90%",
//             "& >*:nth-child(1)": {
//                 width: "270px !important",
//                 padding: "20px 30px !important"
//             },
//             "& >*:nth-child(2)": {
//                 width: "100%",
//             },
//         },

//         cardHeading: {
//             width: "210px",
//             margin: "0px 0px 10px",
//             fontSize: "32px",
//         },

//         cardMessage: {
//             width: "210px",
//             margin: "20px 0px",
//         },

//         cardTextfieldBody: {
//             height: "45px",
//         },

//         first: {
//             width: "120px",
//         },

//         second: {
//             width: "370px !important",
//         },

//         third: {
//             width: "290px",
//         },

//         cardApplyBtn: {
//             width: "140px",
//             height: "45px",
//             fontSize: "18px"
//         },
//     },

//     "@media screen and (min-width: 576px) and (max-width: 767px)": {
//         cardBody: {
//             width: "100%",
//             flexDirection: "column",
//             // justifyContent: "center",
//             // margin: "20px",
//             "& >*:nth-child(1)": {
//                 width: "100%",
//                 padding: "30px"
//             },
//             "& >*:nth-child(2)": {
//                 padding: "30px"
//             },
//             "& .MuiBox-root-32": {
//                 "& >*:nth-child(1)": {
//                     borderBottom: "none"
//                 },
//                 "& >*:nth-child(2)": {
//                     borderBottom: "none"
//                 },
//                 "& >*:nth-child(3)": {
//                     padding: "10px 0px 25px",
//                 },
//             },
//         },

//         cardHeading: {
//             width: "380px",
//             margin: "0px",
//         },

//         cardMessage: {
//             width: "100%",
//             fontSize: "22px",
//             lineHeight: "30px",
//             margin: "15px 0px 0px"
//         },

//         cardHr: {
//             display: "none",
//         },

//         cardBtn: {
//             justifyContent: "center",
//         },
//     },

//     "@media screen and (min-width: 300px) and (max-width: 575px)": {
//         cardBody: {
//             width: "100%",
//             flexDirection: "column",
//             // justifyContent: "center",
//             // margin: "20px",
//             "& >*:nth-child(1)": {
//                 width: "100%",
//                 padding: "20px"
//             },
//             "& >*:nth-child(2)": {
//                 padding: "20px"
//             },
//             "& .MuiBox-root-32": {
//                 "& >*:nth-child(1)": {
//                     borderBottom: "none"
//                 },
//                 "& >*:nth-child(2)": {
//                     borderBottom: "none"
//                 },
//                 "& >*:nth-child(3)": {
//                     padding: "10px 0px 25px",
//                 },
//             },
//         },

//         cardHeading: {
//             width: "200px",
//             fontSize: "24px",
//             lineHeight: "26px",
//             margin: "0px",
//         },

//         cardMessage: {
//             width: "100%",
//             fontSize: "16px",
//             lineHeight: "20px",
//             margin: "15px 0px 0px"
//         },

//         cardHr: {
//             display: "none",
//         },

//         first: {
//             width: "90px",
//         },

//         second: {
//             width: "300px !important",
//         },

//         third: {
//             width: "220px",
//         },


//         eventLabel: {
//             fontSize: "16px"
//         },

//         cardBtn: {
//             justifyContent: "center",
//         },

//         cardApplyBtn: {
//             width: "148px",
//             height: "48px",
//             fontSize: "24px",
//         },
//     }
// })

// export default withStyles(style)(EventCard)