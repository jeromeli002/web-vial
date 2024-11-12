// THIS IS FROM QMK REPO.
const QMK_SETTINGS = {
  "tabs": [
    {
      "name": "Magic",
      "fields": [
        { "type": "boolean", "title": "Swap Caps Lock and Left Control", "qsid": 21, "width": 4, "bit": 0 },
        { "type": "boolean", "title": "Treat Caps Lock as Control", "qsid": 21, "width": 4, "bit": 1 },
        { "type": "boolean", "title": "Swap Left Alt and GUI", "qsid": 21, "width": 4, "bit": 2 },
        { "type": "boolean", "title": "Swap Right Alt and GUI", "qsid": 21, "width": 4, "bit": 3 },
        { "type": "boolean", "title": "Disable the GUI keys", "qsid": 21, "width": 4, "bit": 4 },
        { "type": "boolean", "title": "Swap ` and Escape", "qsid": 21, "width": 4, "bit": 5 },
        { "type": "boolean", "title": "Swap \\ and Backspace", "qsid": 21, "width": 4, "bit": 6 },
        { "type": "boolean", "title": "Enable N-key rollover", "qsid": 21, "width": 4, "bit": 7 },
        { "type": "boolean", "title": "Swap Left Control and GUI", "qsid": 21, "width": 4, "bit": 8 },
        { "type": "boolean", "title": "Swap Right Control and GUI", "qsid": 21, "width": 4, "bit": 9 }
      ]
    },
    {
      "name": "Grave Escape",
      "fields": [
        { "type": "boolean", "title": "Always send Escape if Alt is pressed", "qsid": 1, "bit": 0 },
        { "type": "boolean", "title": "Always send Escape if Control is pressed", "qsid": 1, "bit": 1 },
        { "type": "boolean", "title": "Always send Escape if GUI is pressed", "qsid": 1, "bit": 2 },
        { "type": "boolean", "title": "Always send Escape if Shift is pressed", "qsid": 1, "bit": 3 }
      ]
    },
    {
      "name": "Tap-Hold",
      "fields": [
        { "type": "integer", "title": "Tapping Term", "qsid": 7, "min": 0, "max": 10000, "width": 2 },
        { "type": "boolean", "title": "Permissive Hold", "qsid": 8, "bit": 0 },
        { "type": "boolean", "title": "Ignore Mod Tap Interrupt", "qsid": 8, "bit": 1 },
        { "type": "boolean", "title": "Tapping Force Hold", "qsid": 8, "bit": 2 },
        { "type": "boolean", "title": "Retro Tapping", "qsid": 8, "bit": 3 },
        { "type": "integer", "title": "Tap Code Delay", "qsid": 18, "min": 0, "max": 1000, "width": 2 },
        { "type": "integer", "title": "Tap Hold Caps Delay", "qsid": 19, "min": 0, "max": 1000, "width": 2 },
        { "type": "integer", "title": "Tapping Toggle", "qsid": 20, "min": 0, "max": 100, "width": 1 }
      ]
    },
    {
      "name": "Auto Shift",
      "fields": [
        { "type": "boolean", "title": "Enable", "qsid": 3, "bit": 0 },
        { "type": "boolean", "title": "Enable for modifiers", "qsid": 3, "bit": 1 },
        { "type": "integer", "title": "Timeout", "qsid": 4, "min": 0, "max": 1000, "width": 2 },
        { "type": "boolean", "title": "Do not Auto Shift special keys", "qsid": 3, "bit": 2 },
        { "type": "boolean", "title": "Do not Auto Shift numeric keys", "qsid": 3, "bit": 3 },
        { "type": "boolean", "title": "Do not Auto Shift alpha characters", "qsid": 3, "bit": 4 },
        { "type": "boolean", "title": "Enable keyrepeat", "qsid": 3, "bit": 5 },
        { "type": "boolean", "title": "Disable keyrepeat when timeout is exceeded", "qsid": 3, "bit": 6 }
      ]
    },
    {
      "name": "Combo",
      "fields": [
        { "type": "integer", "title": "Time out period for combos", "qsid": 2, "min": 0, "max": 10000, "width": 2 }
      ]
    },
    {
      "name": "One Shot Keys",
      "fields": [
        { "type": "integer", "title": "Tapping this number of times holds the key until tapped once again", "qsid": 5, "min": 0, "max": 50, "width": 1 },
        { "type": "integer", "title": "Time (in ms) before the one shot key is released", "qsid": 6, "min": 0, "max": 60000, "width": 2 }
      ]
    },
    {
      "name": "Mouse keys",
      "fields": [
        { "type": "integer", "title": "Delay between pressing a movement key and cursor movement", "qsid": 9, "min": 0, "max": 10000, "width": 2 },
        { "type": "integer", "title": "Time between cursor movements in milliseconds", "qsid": 10, "min": 0, "max": 10000, "width": 2 },
        { "type": "integer", "title": "Step size", "qsid": 11, "min": 0, "max": 1000, "width": 2 },
        { "type": "integer", "title": "Maximum cursor speed at which acceleration stops", "qsid": 12, "min": 0, "max": 1000, "width": 2 },
        { "type": "integer", "title": "Time until maximum cursor speed is reached", "qsid": 13, "min": 0, "max": 1000, "width": 2 },
        { "type": "integer", "title": "Delay between pressing a wheel key and wheel movement", "qsid": 14, "min": 0, "max": 10000, "width": 2 },
        { "type": "integer", "title": "Time between wheel movements", "qsid": 15, "min": 0, "max": 10000, "width": 2 },
        { "type": "integer", "title": "Maximum number of scroll steps per scroll action", "qsid": 16, "min": 0, "max": 1000, "width": 2 },
        { "type": "integer", "title": "Time until maximum scroll speed is reached", "qsid": 17, "min": 0, "max": 1000, "width": 2 }
      ]
    }
  ]
};
