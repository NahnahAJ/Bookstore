// Define an action type for checking the status.
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// Set the initial state to be an empty array of categories.
const defaultCatergory = [];

// Write your reducer and export it as default.

const statusReducer = (state = defaultCatergory, action) => {
  switch (action.type) {
    // For the check status action return a string "Under construction".
    case CHECK_STATUS:
      return 'Under construction';

    // In case of unknown action - return the current state.
    default:
      return state;
  }
};

// Export Action Creators for your actions.
export const statusAction = () => ({
  type: CHECK_STATUS,
});

export default statusReducer;
