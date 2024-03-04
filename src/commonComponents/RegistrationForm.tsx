import { Box, Grid, StyleRules, TextField, withStyles } from '@material-ui/core'
import React, { Component } from 'react'

interface Props {
    classes: any
}

class RegistrationForm extends Component<Props> {
    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.formGridBody}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <form className={classes.form}>
                        <Box className={classes.formHeading}>Fill Your Registration Form</Box>
                        <Box className={classes.formTextfieldBox}>
                            <TextField
                                name="name"
                                className={classes.formTextfieldBody}
                                // value="name"
                                placeholder="Enter Your Name"
                                autoComplete="off"
                            />
                        </Box>
                        <Box className={classes.formTextfieldFlex}>
                            <Box className={classes.formTextfieldShortBox}>
                                <TextField
                                    name="city"
                                    className={classes.formShortTextfield}
                                    // value="name"
                                    placeholder="City"
                                    autoComplete="off"
                                />
                            </Box>
                            <Box className={classes.formTextfieldShortBox}>
                                <TextField
                                    name="mobile no"
                                    className={classes.formShortTextfield}
                                    // value="name"
                                    placeholder="Mobile No"
                                    autoComplete="off"
                                />
                            </Box>
                        </Box>
                        <Box className={classes.formTextfieldBox}>
                            <TextField
                                name="name"
                                className={classes.formTextfieldBody}
                                // value="name"
                                placeholder="Enter Your E-mail"
                                autoComplete="off"
                            />
                        </Box>
                        <Box className={classes.formTextareaBox}>
                            <textarea
                                name="message"
                                className={classes.formTextarea}
                                placeholder="Your Message"
                                autoComplete="off"
                            // value="Message"
                            />
                        </Box>
                        <Box className={classes.formBtnBox}>
                            <button className={classes.formButton}>Submit Now</button>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        )
    }
}

const style: StyleRules = ({
    formGridBody: {
        width: "526px",
        backgroundColor: "#EFB6B6",
        margin: "30px auto",
        padding: "25px",
        border: "none",
        borderRadius: "16px"
    },

    form: {
        "& > *:nth-child(1)": {
            margin: "25px 0px 0px"
        },
        "& > *:nth-child(2)": {
            margin: "25px 0px 0px"
        },
        "& > *:nth-child(3)": {
            margin: "25px 0px 0px"
        },
        "& > *:nth-child(4)": {
            margin: "25px 0px 0px"
        },
        "& > *:nth-child(5)": {
            margin: "25px 0px 0px"
        },
    },

    formHeading: {
        fontSize: "20px",
        fontWeight: 700,
        fontFamily: "Nunito"
    },

    formTextfieldBody: {
        width: "100%",
        backgroundColor: "white",
        borderRadius: "3px",
        boxShadow: "0px 4px 4px 0px #00000012 inset",
        "& .MuiInputBase-input": {
            // height: "45px",
            height: "57px",
            padding: "0px 10px",
            fontSize: "14px",
            fontWeight: 400,
            fontFamily: "Nunito",
            boxShadow: "0px 4px 4px 0px #00000012 inset",
        },
        "& .MuiInput-underline:before": {
            borderBottom: "none"
        },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "none !important"
        },
        "& .MuiInputBase-input:focus": {
            outline: "none !important"
        },
        "& .MuiInput-underline.Mui-focused:after": {
            transform: "none",
            borderBottom: "none",
        }
    },

    formTextfieldFlex: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        "& > *:nth-child(1)": {
            marginRight: "5px",
        },
        "& > *:nth-child(2)": {
            marginLeft: "5px",
        },
    },

    formTextfieldShortBox: {
        width: "50%",
    },

    formShortTextfield: {
        width: "100%",
        backgroundColor: "white",
        borderRadius: "3px",
        boxShadow: "0px 4px 4px 0px #00000012 inset",
        "& .MuiInputBase-input": {
            // height: "45px",
            height: "57px",
            padding: "0px 10px",
            fontSize: "14px",
            fontWeight: 400,
            fontFamily: "Nunito",
            boxShadow: "0px 4px 4px 0px #00000012 inset",
        },
        "& .MuiInput-underline:before": {
            borderBottom: "none"
        },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "none !important"
        },
        "& .MuiInputBase-input:focus": {
            outline: "none !important"
        },
        "& .MuiInput-underline.Mui-focused:after": {
            transform: "none",
            borderBottom: "none",
        }
    },

    formTextarea: {
        width: "100%",
        height: "142px",
        border: "none",
        padding: "10px 10px",
        fontFamily: "Nunito",
        fontSize: "14px",
        fontWeight: 400,
        borderRadius: "3px",
        resize: "none",
        boxShadow: "0px 4px 4px 0px #00000012 inset",
        "&:focus-visible": {
            border: "none",
            outlineOffset: "0",
            outline: "0"
        }
    },

    formBtnBox: {
        display: "flex",
        justifyContent: "center"
    },

    formButton: {
        // width: "170px",
        width: "224.22px",
        // height: "50px",
        height: "62.28px",
        textTransform: "uppercase",
        border: "none",
        borderRadius: "5px",
        margin: "20px 0px 0px",
        background: "linear-gradient(89.65deg, #074CBA 2.14%, rgba(13, 106, 252, 0.988235) 99.74%)",
        color: "#FFFFFF",
        fontFamily: "Roboto",
        fontSize: "20px",
        fontWeight: 700
    },

    "@media screen and (min-width: 1024px) and (max-width: 1440px)": {
        formGridBody: {
            width: "420px",
        },

        formTextarea: {
            height: "100px",
        },
    },

    "@media screen and (min-width: 768px) and (max-width: 1023px)": {
        formGridBody: {
            width: "310px"
        },

        form: {
            "& > *:nth-child(1)": {
                margin: "15px 0px 0px"
            },
            "& > *:nth-child(2)": {
                margin: "15px 0px 0px"
            },
            "& > *:nth-child(3)": {
                margin: "15px 0px 0px"
            },
            "& > *:nth-child(4)": {
                margin: "15px 0px 0px"
            },
            "& > *:nth-child(5)": {
                margin: "15px 0px 0px"
            },
        },

        formTextfieldBody: {
            "& .MuiInputBase-input": {
                height: "35px",
            }
        },

        formShortTextfield: {
            "& .MuiInputBase-input": {
                height: "35px",
            },
        },

        formTextarea: {
            height: "100px",
        },

        formButton: {
            width: "150px",
            height: "40px",
        },
    },
    
    "@media screen and (min-width: 576px) and (max-width: 767px)": {
        formGridBody: {
            width: "430px",
        },

        form: {
            "& > *:nth-child(1)": {
                margin: "15px 0px 0px"
            },
            "& > *:nth-child(2)": {
                margin: "15px 0px 0px"
            },
            "& > *:nth-child(3)": {
                margin: "15px 0px 0px"
            },
            "& > *:nth-child(4)": {
                margin: "15px 0px 0px"
            },
            "& > *:nth-child(5)": {
                margin: "15px 0px 0px"
            },
        },

        formTextarea: {
            height: "100px",
        },

        formButton: {
            width: "150px",
            height: "40px",
        },
    },

    "@media screen and (min-width: 300px) and (max-width: 575px)": {
        formGridBody: {
            width: "85%",
            padding: "15px",
        },

        form: {
            "& > *:nth-child(1)": {
                margin: "15px 0px 0px"
            },
            "& > *:nth-child(2)": {
                margin: "15px 0px 0px"
            },
            "& > *:nth-child(3)": {
                margin: "15px 0px 0px"
            },
            "& > *:nth-child(4)": {
                margin: "15px 0px 0px"
            },
            "& > *:nth-child(5)": {
                margin: "15px 0px 0px"
            },
        },

        formHeading: {
            fontSize: "16px",
        },

        formTextfieldBody: {
            "& .MuiInputBase-input": {
                height: "35px",
            }
        },

        formShortTextfield: {
            "& .MuiInputBase-input": {
                height: "35px",
            },
        },

        formTextarea: {
            width: "100%",
            height: "100px",
        },

        formButton: {
            width: "140px",
            height: "40px",
            fontSize: "13px"
        },

    },

})

export default withStyles(style)(RegistrationForm)