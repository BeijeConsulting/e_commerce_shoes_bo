import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import itFlag from "../../../assets/images/languageIcons/it.svg";
import enFlag from "../../../assets/images/languageIcons/gb.svg";
import "./languageSelector.css";
import {
  setLanguage,
  initLanguage,
} from "../../../redux/duck/language/languageDuck";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

export default function LanguageSelector() {
  const [state, setState] = useState("");
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const languageRedux = useSelector((state) => state.languageDuck.language);

  const handleChange = (event) => {
    setState(event.target.value);
    dispatch(setLanguage(event.target.value));
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
      {/* <img src={itFlag} /> */}
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Language
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={state}
          onChange={handleChange}
          autoWidth
          label="language"
        >
          <MenuItem value="it">
            <img alt="italian" src={itFlag} className="flag-style" />
            Italiano
          </MenuItem>
          <MenuItem value="en">
            <img alt="english" src={enFlag} className="flag-style" />
            English
          </MenuItem>
        </Select>
      </FormControl>

      <h2>{languageRedux}</h2>
    </div>
  );
}
