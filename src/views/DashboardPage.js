import React, { Component, Fragment } from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Styles from '../res/Styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
    getItemList,
    updateCategoryIndex,
    updateFlterIndex,
    searchItemList
} from '../actions/index';
import Images from '../res/Images';
import Strings from '../res/Strings';
import SegmentedControlTab from '../component/Common/segmentView/SegmentedControlTab';
import { Input } from 'react-native-elements';
import Colors from '../res/Colors';
import { Utils } from '../Utils/Utils';

let pageNo = 1;
class DashboardPage extends Component {
    constructor(props) {
        super(props);
        this.props.getItemList();
    }

    handleCategoryChange(index) {
        this.props.updateCategoryIndex(index);
    };

    handleFilterChange(index) {
        this.props.updateFlterIndex(index);
    };

    render() {
        const {
            searchedList, filter, category,
            selectedCategoryIndex, selectedFilterIndex,
            totalAmmount, searchText
        } = this.props;
        return (
            <Fragment>
                <SafeAreaView>
                    {/*  Header View  */}
                    <View
                        style={Styles.dashboardHeader}
                    >
                        <Image
                            source={Images.info}
                            style={Styles.logoStyle}
                        />
                        <Image
                            source={Images.logo}
                            style={Styles.logoStyle}
                        />
                        <Image
                            source={Images.bell}
                            style={Styles.headerImageStyle}
                        />
                    </View>
                    <View
                        style={Styles.dashboardHeaderDivider}
                    />
                    <KeyboardAwareScrollView>
                        <View>
                            {/* Dashboard Category Block  */}
                            <View style={Styles.categoryContainer}>
                                <View style={Styles.flexDirRow}>
                                    <View style={Styles.circle} />
                                    <Text style={{ ...Styles.textStyle, fontSize: 16, ...Styles.margin.marginLeft5 }}>{Strings.yourPortfolio}</Text>
                                </View>
                                <View style={{ ...Styles.flexDirRow, ...Styles.margin.marginTop20 }} >
                                    <Image
                                        source={Utils.getCategoryIconUsingIndex(selectedCategoryIndex)}
                                        style={Styles.totalAmmountImage}
                                    />
                                    <Text style={{ ...Styles.textStylePrimaryColor, ...Styles.totalAmmount }}>{(totalAmmount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>
                                </View>
                                <SegmentedControlTab
                                    values={category}
                                    selectedIndex={selectedCategoryIndex}
                                    tabsContainerStyle={Styles.tabsContainerStyle}
                                    tabStyle={Styles.tabStyle}
                                    borderRadius={16}
                                    firstTabStyle={Styles.firstTabStyle}
                                    lastTabStyle={Styles.lastTabStyle}
                                    tabTextStyle={Styles.tabTextStyle}
                                    activeTabStyle={Styles.activeTabStyle}
                                    activeTabTextStyle={Styles.activeTabTextStyle}
                                    allowFontScaling={false}
                                    onTabPress={(index) => this.handleCategoryChange(index)}
                                />
                            </View>
                            <View
                                style={{ ...Styles.dashboardHeaderDivider, height: 1 }}
                            />

                            {/* Dashboard Filter Block  */}
                            <View style={Styles.filterContainer}>
                                <View style={Styles.searchBoxStyle}>
                                    <View style={{ width: '90%', flexDirection: 'row', flex: 1 }}>
                                        <Input
                                            returnKeyType={Strings.componentKeyboard.next}
                                            placeholder={Strings.searchValue}
                                            placeholderTextColor={Colors.primaryText}
                                            inputStyle={Styles.searchTextStyle}
                                            inputContainerStyle={Styles.searchInputContainer}
                                            autoCapitalize={Strings.componentKeyboard.none}
                                            keyboardType={Strings.componentKeyboard.emailAddress}
                                            onChangeText={value => this.props.searchItemList(value)}
                                            value={searchText}
                                        />
                                        <Image
                                            source={Images.search}
                                            style={Styles.headerImageStyle}
                                        />
                                    </View>
                                </View>
                                <SegmentedControlTab
                                    values={filter}
                                    selectedIndex={selectedFilterIndex}
                                    tabsContainerStyle={Styles.tabsContainerStyle}
                                    tabStyle={Styles.tabStyle}
                                    borderRadius={16}
                                    firstTabStyle={Styles.firstTabStyle}
                                    lastTabStyle={Styles.lastTabStyle}
                                    tabTextStyle={Styles.tabTextStyle}
                                    activeTabStyle={Styles.activeTabStyle}
                                    activeTabTextStyle={Styles.activeTabTextStyle}
                                    allowFontScaling={false}
                                    onTabPress={(index) => this.handleFilterChange(index)}
                                />
                            </View>
                            <FlatList
                                data={searchedList}
                                keyExtractor={(item) => item.id}
                                refreshing={false}
                                extraData={searchedList.length}
                                showsVerticalScrollIndicator={false}
                                onEndReachedThreshold={0.1}
                                ListFooterComponent={() => (
                                    <View
                                        style={{
                                            height: 50
                                        }}
                                    />
                                )}
                                onEndReached={() => {              // Get More Items
                                    if (searchedList.length > 19) {
                                        pageNo += 1;
                                        // Call more Item
                                    }
                                }}
                                renderItem={({ item }) => {
                                    const isSelected = item.selected;
                                    const icon = Utils.getCategoryIcon(item.category, isSelected);
                                    return (
                                        <View
                                            style={{
                                                backgroundColor: isSelected ? Colors.primaryColor : Colors.white
                                            }}
                                        >
                                            <TouchableOpacity
                                                onPress={() => {
                                                    if (!isSelected) {
                                                        item.selected = true;
                                                    } else {
                                                        item.selected = false;
                                                    }
                                                    this.setState({ reload: true });
                                                }}
                                            >
                                                <View>
                                                    <View style={Styles.itemListContainer}>
                                                        <Image
                                                            source={icon}
                                                            style={Styles.headerImageStyle}
                                                        />
                                                        <View style={Styles.itemListvalueContainer}>
                                                            <Text style={{ ...Styles.itemListValue, color: isSelected ? Colors.white : Colors.primaryText }}>{item.type}</Text>
                                                            <Text style={{ ...Styles.itemListAmmount, color: isSelected ? Colors.white : Colors.primaryText }}>{item.balance}</Text>
                                                        </View>
                                                    </View>
                                                    <View style={Styles.dashboardHeaderDivider} />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    );
                                }}
                            />
                        </View>
                    </KeyboardAwareScrollView>
                </SafeAreaView>
            </Fragment >
        );
    }
}

const mapStateToProps = (state) => ({
    searchedList: state.dashboardReducer.searchedList,
    category: state.dashboardReducer.category,
    filter: state.dashboardReducer.filter,
    selectedCategoryIndex: state.dashboardReducer.selectedCategoryIndex,
    selectedFilterIndex: state.dashboardReducer.selectedFilterIndex,
    totalAmmount: state.dashboardReducer.totalAmmount,
    searchText: state.dashboardReducer.searchText,
});

export default connect(mapStateToProps, {
    getItemList,
    updateCategoryIndex,
    updateFlterIndex,
    searchItemList
})(DashboardPage);
