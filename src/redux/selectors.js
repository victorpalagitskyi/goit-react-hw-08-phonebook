
export const selectFilter = state => state.filter;
export const selectLoadingStatus = state => state.contacts.isLoading;
export const selectErrorStatus = state => state.contacts.error;
export const selectContacts = state => state.contacts.items;
export const selectIsLogIn = state => state.auth.isLogIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;