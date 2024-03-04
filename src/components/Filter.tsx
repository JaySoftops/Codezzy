import {
    Box,
    Button,
    Grid,
    StyleRules,
    TextField,
    Typography,
    withStyles,
    Checkbox,
} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import React, { Component } from "react";
import Course from "../commonComponents/Course";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import cardReactJSImage from "../assets/cardReactJSImage.png";
import cardReactNativeImage from "../assets/cardReactNativeImage.png";
import cardUIImage from "../assets/cardUIImage.png";
import cardQAImage from "../assets/cardQAImage.png";
import cardRubyImage from "../assets/cardRubyImage.png";
const DATA = [
    {
        id: "1",
        img: cardReactJSImage,
        lesson: "3",
        duration: "2 hours 40 minutes",
        description: "Learn Essentials of User Interface Design in Figma",
        rating: ":star:️ :star:️ :star:️ :star:️ :star:️",
        price: "$60.00",
        width: "100%",
        beginner: true,
        backgroundColor: "#000000",
    },
    {
        id: "2",
        img: cardReactNativeImage,
        lesson: "3",
        duration: "2 hours 40 minutes",
        description: "Learn Essentials of User Interface Design in Figma",
        rating: ":star:️ :star:️ :star:️ :star:️ :star:️",
        price: "$60.00",
        beginner: true,
    },
    {
        id: "3",
        img: cardUIImage,
        lesson: "3",
        duration: "2 hours 40 minutes",
        description: "Learn Essentials of User Interface Design in Figma",
        rating: ":star:️ :star:️ :star:️ :star:️ :star:️",
        price: "$60.00",
        beginner: true,
    },
    {
        id: "4",
        img: cardQAImage,
        lesson: "3",
        duration: "2 hours 40 minutes",
        description: "Learn Essentials of User Interface Design in Figma",
        rating: ":star:️ :star:️ :star:️ :star:️ :star:️",
        price: "$60.00",
        beginner: true,
    },
    {
        id: "5",
        img: cardRubyImage,
        lesson: "3",
        duration: "2 hours 40 minutes",
        description: "Learn Essentials of User Interface Design in Figma",
        rating: ":star:️ :star:️ :star:️ :star:️ :star:️",
        price: "$60.00",
        beginner: true,
    },
    {
        id: "6",
        img: cardReactJSImage,
        lesson: "3",
        duration: "2 hours 40 minutes",
        description: "Learn Essentials of User Interface Design in Figma",
        rating: ":star:️ :star:️ :star:️ :star:️ :star:️",
        price: "$60.00",
        beginner: true,
    },
];
interface Props {
    classes: any;
}
interface state {
    showCourse: Boolean;
    showCategory: Boolean;
    showPrice: Boolean;
    courses: data[];
    category: data[];
    price: data[];
}
interface data {
    name: string;
    status: boolean;
}
class Filter extends Component<Props, state> {
    constructor(props: any) {
        super(props);
        this.state = {
            showCourse: false,
            showCategory: false,
            showPrice: false,
            courses: [
                { name: "ReactJS", status: false },
                { name: "React-Native", status: false },
                { name: "UI/UX", status: false },
                { name: "Ruby On Rails", status: false },
                { name: "Quality Assurance", status: false },
            ],
            category: [
                { name: "Beginner", status: false },
                { name: "Experts", status: false },
                { name: "Advance", status: false },
            ],
            price: [
                { name: "Free", status: false },
                { name: "Paid", status: false },
            ],
        };
    }
    handleCourseFilter = (index: number) => {
        const courseArray = this.state.courses;
        courseArray[index].status = !courseArray[index].status;
        this.setState({ courses: courseArray });
    };
    handleCategoryFilter = (index: number) => {
        const categoryArray = this.state.category;
        categoryArray[index].status = !categoryArray[index].status;
        this.setState({ category: categoryArray });
    };
    handlePriceFilter = (index: number) => {
        const priceArray = this.state.price;
        priceArray[index].status = !priceArray[index].status;
        this.setState({ price: priceArray });
    };
    clearAll = () => {
        const courses = this.state.courses;
        const price = this.state.price;
        const category = this.state.category;
        courses.forEach((element) => {
            element.status = false;
        });
        price.forEach((element) => {
            element.status = false;
        });
        category.forEach((element) => {
            element.status = false;
        });
        this.setState({ courses: courses, category: category, price: price });
    };

    topGrid = (classes: any) => {
        return (
            <Grid item sm={12} xs={12} className={classes.topGrid}>
                <TextField
                    select
                    className={classes.dropDwn}
                    SelectProps={{
                        native: true,
                    }}
                    InputProps={{
                        style: {
                            maxWidth: "168px",
                            height: "38px",
                            borderRadius: "1px",
                            fontWeight: 600,
                            fontSize: "14px",
                            lineHeight: "19.1px",
                            fontFamily: "Nunito",
                        },
                    }}
                    variant="outlined"
                >
                    {" "}
                    <option key="price" value="none">
                        All Courses
                    </option>
                    {this.state.courses.map((option) => (
                        <option key={option.name} value={option.name}>
                            {option.name} <KeyboardArrowDownIcon />
                        </option>
                    ))}
                </TextField>
                <TextField
                    select
                    className={classes.dropDwn}
                    SelectProps={{
                        native: true,
                    }}
                    InputProps={{
                        style: {
                            maxWidth: "168px",
                            height: "38px",
                            borderRadius: "1px",
                            fontWeight: 600,
                            fontSize: "14px",
                            lineHeight: "19.1px",
                            fontFamily: "Nunito",
                        },
                    }}
                    variant="outlined"
                >
                    {" "}
                    <option key="price" value="none">
                        Category
                    </option>
                    {this.state.category.map((option) => (
                        <option key={option.name} value={option.name}>
                            {option.name} <KeyboardArrowDownIcon />
                        </option>
                    ))}
                </TextField>
                <TextField
                    select
                    className={classes.dropDwn}
                    SelectProps={{
                        native: true,
                    }}
                    InputProps={{
                        style: {
                            maxWidth: "168px",
                            height: "38px",
                            borderRadius: "1px",
                            fontWeight: 600,
                            fontSize: "14px",
                            lineHeight: "19.1px",
                            fontFamily: "Nunito",
                        },
                    }}
                    variant="outlined"
                >
                    <option key="price" value="none">
                        Price
                    </option>
                    {this.state.price.map((option) => (
                        <option key={option.name} value={option.name}>
                            {option.name}
                        </option>
                    ))}
                </TextField>
            </Grid>
        );
    };
    leftSide = (classes: any) => {
        return (
            <Grid
                item
                xl={3}
                lg={3}
                md={2}
                sm={12}
                xs={12}
                className={classes.leftSide}
            >
                <TextField
                    className={classes.textField}
                    variant="outlined"
                    placeholder="Search"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                        style: {
                            width: "100%",
                            height: "100%",
                            borderRadius: 0,
                            backgroundColor: "white",
                        },
                    }}
                />
                <Typography
                    className={classes.filterHeadings}
                    onClick={() => {
                        this.setState({ showCourse: !this.state.showCourse });
                    }}
                >
                    All Courses <KeyboardArrowDownIcon />
                </Typography>
                {this.state.showCourse && (
                    <Box className={classes.filterBoxes}>
                        {this.state.courses.map((element, index) => (
                            <Box
                                className={
                                    element.status ? classes.clickedBox : classes.filterBox
                                }
                                onClick={() => {
                                    this.handleCourseFilter(index);
                                }}
                            >
                                <Checkbox
                                    className={classes.checkBox}
                                    checked={element.status}
                                />
                                <Typography className={classes.boxText}>
                                    {element.name}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                )}
                <Typography
                    className={classes.filterHeadings}
                    onClick={() => {
                        this.setState({ showCategory: !this.state.showCategory });
                    }}
                >
                    Category <KeyboardArrowDownIcon />
                </Typography>
                {this.state.showCategory && (
                    <Box className={classes.filterBoxes}>
                        {this.state.category.map((element, index) => (
                            <Box
                                className={
                                    element.status ? classes.clickedBox : classes.filterBox
                                }
                                onClick={() => {
                                    this.handleCategoryFilter(index);
                                }}
                            >
                                <Checkbox
                                    className={classes.checkBox}
                                    checked={element.status}
                                />
                                <Typography className={classes.boxText}>
                                    {element.name}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                )}
                <Typography
                    className={classes.filterHeadings}
                    onClick={() => {
                        this.setState({ showPrice: !this.state.showPrice });
                    }}
                >
                    Price <KeyboardArrowDownIcon />
                </Typography>
                {this.state.showPrice && (
                    <Box className={classes.filterBoxes}>
                        {this.state.price.map((element, index) => (
                            <Box
                                className={
                                    element.status ? classes.clickedBox : classes.filterBox
                                }
                                onClick={() => {
                                    this.handlePriceFilter(index);
                                }}
                            >
                                <Checkbox
                                    className={classes.checkBox}
                                    checked={element.status}
                                />
                                <Typography className={classes.boxText}>
                                    {element.name}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                )}
                <Typography
                    className={classes.clearFilter}
                    onClick={() => {
                        this.clearAll();
                    }}
                >
                    <ClearIcon /> Clear All Filters
                </Typography>
            </Grid>
        );
    };
    rightSide = (classes: any) => {
        return (
            <Grid
                item
                xl={8}
                lg={8}
                md={8}
                sm={12}
                xs={12}
                className={classes.rightSide}
            >
                <Grid container className={classes.cardContainer} spacing={2}>
                    {DATA.map((element, index: number) => (
                        <Grid
                            item
                            key={index}
                            xs={12}
                            sm={12}
                            md={6}
                            lg={4}
                            className={classes.cards}
                        >
                            <Course data={element} />
                        </Grid>
                    ))}
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        className={classes.btnOutside}
                    >
                        <Button
                            variant="outlined"
                            className={classes.viewMoreBtn}
                            fullWidth
                        >
                            View More <KeyboardArrowDownIcon />
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        );
    };

    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.mainGrid}>
                {this.topGrid(classes)}
                {this.leftSide(classes)}
                {this.rightSide(classes)}
            </Grid>
        );
    }
}
const style: StyleRules = {
    mainGrid: {
        padding: "30px",
        display: "flex",
        justifyContent: "center",
    },
    btnOutside: {
        display: "flex",
        justifyContent: "center",
    },
    viewMoreBtn: {
        color: "#5798FE",
        borderColor: "#5798FE",
        alignSelf: "flex-end",
        height: "63.02px",
        margin: "20px",
    },
    topGrid: {
        display: "none",
    },
    leftSide: {
        display: "flex",
        flexDirection: "column",
        margin: "10px",
    },
    filterHeadings: {
        display: "flex",
        alignItems: "center",
        fontSize: "20px",
        lineHeight: "27.28px",
        fontWeight: 600,
        fontFamily: "Nunito",
        cursor: "pointer",
        margin: "0px 0 20px 20px",
        maxWidth: "327px",
        minWidth: "267px",
    },
    filterBoxes: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "327px",
        minWidth: "250px",
        flexDirection: "column",
        margin: "0 0 0px 20px",
    },
    filterBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: "10px",
        width: "100%",
        height: "56px",
        borderRadius: "2px",
        border: "1px solid rgba(191, 191, 191, 1)",
        marginBottom: "15px",
        cursor: "pointer",
    },
    clickedBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        paddingLeft: "10px",
        height: "56px",
        borderRadius: "2px",
        border: "1px solid rgba(191, 191, 191, 1)",
        marginBottom: "15px",
        backgroundColor: "rgba(250, 230, 230, 1)",
        cursor: "pointer",
    },
    checkBox: {
        height: "24px",
        width: "24px",
        margin: "0 10px 0 10px",
        "&.MuiCheckbox-root": {
            color: "white",
            border: "1px solid black",
            borderRadius: "0px",
        },
    },
    clearFilter: {
        // alignSelf: "flex-start",
        display: "flex",
        alignItems: "center",
        fontSize: "14px",
        lineHeight: "19.1px",
        fontWeight: 500,
        fontFamily: "Nunito",
        margin: "0 0 20px 20px",
        cursor: "pointer",
    },
    rightSide: {
        display: "flex",
        alignItems: "flex-start",
        // margin: "10px",
    },
    textField: {
        maxWidth: "327px",
        minWidth: "250px",
        height: "56px",
        border: "1px solid rgba(191, 191, 191, 1)",
        margin: "20px",
    },
    cardContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    cards: { display: "flex", alignItems: "center", justifyContent: "center" },
    "@media screen and (min-width: 960px) and (max-width: 1280px)": {
        mainGrid: {
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
        },
    },
    "@media screen and (min-width: 0px) and (max-width: 959px)": {
        mainGrid: {
            padding: "10px",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            alignItems: "center",
        },
        topGrid: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px",
        },
        leftSide: {
            display: "none",
        },
        btnOutside: {
            display: "none",
        },
        dropDwn: {
            margin: "5px",
            marginBottom: 0,
        },
    },
};
export default withStyles(style)(Filter);












