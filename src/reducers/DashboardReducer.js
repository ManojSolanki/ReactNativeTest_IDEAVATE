import {
    DASHBOARD_GET_ITEM_LIST,
    DASHBOARD_CATEGORY_INDEX,
    DASHBOARD_FILTER_INDEX,
    DASHBOARD_SEARCH_ICON
} from '../actions/ActionType';

const initialStateDomain = {
    itemList: [],
    filteredItem: [],
    category: [],
    filter: [],
    searchedList: [],
    selectedCategoryIndex: 0,
    selectedFilterIndex: 0,
    totalAmmount: 0.0,
    searchText: ''
};
let totalSum = 0.0;
export function DashboardReducer(state = initialStateDomain, action) {
    switch (action.type) {
        case DASHBOARD_GET_ITEM_LIST:
            {
                state.category.slice(0, state.category.length);
                state.filteredItem.slice(0, state.filteredItem.length);
                state.itemList.slice(0, state.itemList.length);
                state.searchedList.slice(0, state.searchedList.length);
                state.filter.slice(0, state.filter.length);
                state.filter.push('ALL');
                Object.keys(action.payload).forEach((k) => {
                    state.category.push(k);
                    const v = action.payload[k];
                    v.forEach(e => {
                        e.category = k;
                        state.filteredItem.push(e);
                        if (!state.filter.includes(e.status)) {
                            state.filter.push(e.status);
                        }
                        state.totalAmmount += e.balance;
                    });
                });
                state.category.push('ALL');
            }
            return ({
                ...state,
                itemList: state.filteredItem,
                searchedList: state.filteredItem,
                selectedCategoryIndex: state.category.length - 1,
            });
        case DASHBOARD_CATEGORY_INDEX:
            {
                state.filteredItem = doFilter(state.itemList, state.category[action.payload], state.filter[state.selectedFilterIndex]);
                state.totalAmmount = getSum(state.filteredItem);
            }
            return ({ ...state, selectedCategoryIndex: action.payload, searchedList: state.filteredItem, searchText: '' });
        case DASHBOARD_FILTER_INDEX:
            {
                state.filteredItem = doFilter(state.itemList, state.category[state.selectedCategoryIndex], state.filter[action.payload]);
                state.totalAmmount = getSum(state.filteredItem);
            }
            return ({ ...state, selectedFilterIndex: action.payload, searchedList: state.filteredItem, searchText: '' });
        case DASHBOARD_SEARCH_ICON:
            {
                state.searchedList = [];
                state.filteredItem.forEach(element => {
                    if (element.type.includes(action.payload)) {
                        state.searchedList.push(element);
                    }
                });
            }
            return ({ ...state, searchText: action.payload });
        default:
            return state;
    }
}

function getSum(itemList) {
    return itemList.reduce((a, b) => a + (b['balance'] || 0), 0);
}

function doFilter(itemList, category, filter) {
    return itemList.filter((item) => {
        if (category === 'ALL' && filter === 'ALL') {
            return true;
        } else if (category === 'ALL') {
            return item.status === filter
        } else if (filter === 'ALL') {
            return item.category === category
        } else {
            return item.category === category && item.status === filter
        }
    });
}
