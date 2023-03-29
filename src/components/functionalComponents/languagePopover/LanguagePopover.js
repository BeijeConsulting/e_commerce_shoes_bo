import { useState, useEffect } from "react";
// @mui
import { alpha } from "@mui/material/styles";
import { Box, MenuItem, Stack, IconButton, Popover } from "@mui/material";
import enFlag from "../../../assets/images/languageIcons/gb.svg";
import itFlag from "../../../assets/images/languageIcons/it.svg";
import {
  setLanguage,
  initLanguage,
} from "../../../redux/duck/language/languageDuck";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
// ----------------------------------------------------------------------

const LANGS = [
  {
    value: "en",
    label: "English",
    icon: enFlag,
  },
  {
    value: "it",
    label: "Italian",
    icon: itFlag,
  },
];

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const { t, i18n } = useTranslation();
  const [state, setState] = useState({
    open: null,
    lang: "en",
  });

  const dispatch = useDispatch();
  const languageRedux = useSelector((state) => state.languageDuck.language);

  const handleOpen = (event) => {
    setState({
      ...state,
      open: event.currentTarget,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: null,
    });
  };

  useEffect(() => {
    setState({
      ...state,
      lang: i18n.language,
    });
  }, []);

  function handleLanguage(languageChosen) {
    handleClose();
    //console.log("stato: ", state);
    dispatch(setLanguage(languageChosen));
    i18n.changeLanguage(languageChosen);
    setState({
      ...state,
      lang: languageChosen,
    });
  }

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(state.open && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.focusOpacity
              ),
          }),
        }}
      >
        <img
          src={LANGS.filter((lang) => lang.value === state.lang)[0]}
          alt={LANGS[0].label}
          style={{ borderRadius: "10px" }}
        />
      </IconButton>

      <Popover
        open={Boolean(state.open)}
        anchorEl={state.open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 1,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            "& .MuiMenuItem-root": {
              px: 1,
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Stack spacing={0.75}>
          {LANGS.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === LANGS[0].value}
              onClick={() => handleLanguage(option.value)}
            >
              <Box
                component="img"
                alt={option.label}
                src={option.icon}
                sx={{ width: 28, mr: 2 }}
              />

              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </Popover>
    </>
  );
}
