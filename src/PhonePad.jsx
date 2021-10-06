import React, { useState } from "react"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {
    // Box,
    GridList,
    makeStyles,
    Typography,
  } from "@material-ui/core";
import styled from "styled-components";
import BackspaceIcon from "@material-ui/icons/Backspace";
import IconButton from "@material-ui/core/IconButton";

const dialpadNumbersList = () => {
    return [
      { value: 1, bottomTxt: "" },
      { value: 2, bottomTxt: "ABC" },
      { value: 3, bottomTxt: "DEF" },
      { value: 4, bottomTxt: "GHI" },
      { value: 5, bottomTxt: "JKL" },
      { value: 6, bottomTxt: "MNO" },
      { value: 7, bottomTxt: "PQRS" },
      { value: 8, bottomTxt: "TUX" },
      { value: 9, bottomTxt: "WXYZ" },
      { value: "*", bottomTxt: "" },
      { value: 0, bottomTxt: "+" },
      { value: "#", bottomTxt: "" },
    ];
  };

const useStyles = makeStyles(() => ({
    box: {
        boxShadow: 12,
        width: 370,
        height: "auto",
        display: "absolute",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: 'Montserrat',
    },
    topBar: {
        display:"flex",
        width: "auto",
        marginBottom: "10px",
        boxShadow: "0px 2px 2px #082032",
        textAlign: "left"
    },
    dialpad: {
        display: "flex",
        justifyContent: "center"
    },
    deleteIcon: {
        padding: "0px 10px 0px 10px"
    }
}));

const theme = {
    default: "#EEEEEE",
    hover: "#DDDDDD"
  };
  
const Box = styled.button`
  background-color: ${(props) => theme.default};
  color: "#1E3163";
  padding: 10px 10px;
  border-radius: 10px;
  box-shadow: 0px 2px 2px #082032;
`;
const DialPad = styled.button`
  background-color: ${(props) => theme.default};
  color: "#1E3163";
  border-radius: 10px;
  margin: 4px 4px 4px 4px;
  cursor: pointer;
  box-shadow: 0px 2px 2px #082032;
  transition: ease background-color 500ms;
  &:hover {
    background-color: ${(props) => theme.hover};
  }
`;
  
function Phone() {
    const [countryCode, setCountryCode] = useState('')
    var x = '';
    const classes = useStyles();
    return (
        <Box className={classes.box}>
            <div className={classes.topBar}>
                <PhoneInput
                    placeholder="Enter phone number"
                    value={countryCode}
                    onChange={setCountryCode}
                />
                <IconButton
                    className={classes.deleteIcon}
                    onClick={() => {
                        setCountryCode(`${countryCode}${x}`.slice(0, -1));
                    }}
                    >
                    <BackspaceIcon />
                </IconButton>
            </div>
            <div >
                <GridList className={classes.dialpad} cols={4}>
                    {dialpadNumbersList().map((number) => (
                    <DialPad 
                        key={number.value}
                        style={{ height: "auto" }}
                        onClick={() => {
                            x += `${number.value}` 
                            setCountryCode(`${countryCode}${x}`)
                        }}
                    >
                        <Typography variant="h6" className={classes.displayDigit}>{number.value}</Typography>
                        <Typography variant="caption" className={classes.displayDigit}>{number.bottomTxt}</Typography>
                    </DialPad>
                    ))}
                </GridList>
            </div>
        </Box>
      )
}

export default Phone;


