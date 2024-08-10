const INITIAL_THEME = {
    theme: "light"
  };
  
  export default function themeReducer(state = INITIAL_THEME, action) {
    switch (action.type) {
      case "CHANGE_THEME":
        return {
          ...state,
          theme: action.payload
        };
      default:
        return state;
    }
  }
  