// Define an action type for checking the status.
const CHECKSTATS = 'book-store/redux/CHECKSTATS';

// Set the initial state to be an empty array of categories.
const defaultCatergory = [];

// Write your reducer and export it as default.

const statusReducer = (state = defaultCatergory, action) => {
  switch (action.type) {
    // For the check status action return a string "Under construction".
    case CHECKSTATS:
      return 'Under construction';

    // In case of unknown action - return the current state.
    default:
      return state;
  }
};

// Export Action Creators for your actions.
export const statusAction = (categories) => ({
  type: CHECKSTATS,
  categories,
});

export default statusReducer;
