import {
    DASHBOARD_GET_ITEM_LIST,
    DASHBOARD_CATEGORY_INDEX,
    DASHBOARD_FILTER_INDEX,
    DASHBOARD_SEARCH_ICON
} from './ActionType';
const data = require('../Service/Data.json');

export const getItemList = () => ({
    type: DASHBOARD_GET_ITEM_LIST,
    payload: data
});

export const updateCategoryIndex = (index) => ({
    type: DASHBOARD_CATEGORY_INDEX,
    payload: index
});

export const updateFlterIndex = (index) => ({
    type: DASHBOARD_FILTER_INDEX,
    payload: index
});

export const searchItemList = (searchText) => ({
    type: DASHBOARD_SEARCH_ICON,
    payload: searchText
});