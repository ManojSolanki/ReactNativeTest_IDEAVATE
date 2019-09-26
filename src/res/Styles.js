import Colors from '../res/Colors';
const Styles = {
    flex1: {
        flex: 1
    },
    loginContainer: {
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        padding: 30,
        alignItems: 'center'
    },
    parent: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.white,
    },
    inputContainerStyle: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.baseBorder,
        paddingLeft: 10,
        paddingRight: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
        height: 50,
        marginTop: 15,
        backgroundColor: Colors.baseBorder
    },
    textStyle: {
        color: Colors.primaryText,
        fontSize: 14,
    },
    searchTextStyle: {
        color: Colors.primaryText,
        fontSize: 12,
    },
    textStylePrimaryColor: {
        color: Colors.primaryColor,
        fontSize: 14,
    },
    imageStyle: {
        width: 250,
        height: 100,
        resizeMode: 'contain',
    },
    buttonStyle: {
        titleStyle: {
            color: Colors.white,
            fontSize: 14,
            textAlign: 'center',
        },
        containerStyle: {
            alignSelf: 'stretch',
            backgroundColor: Colors.primaryColor,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 50
        },
        buttonStyle: {
            width: null,
            height: 50,
            borderRadius: 30,
            paddingTop: 15,
            paddingBottom: 15,
            backgroundColor: Colors.primaryColor,
        }
    },
    newUserContainer: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
    },
    forgotPasswordContainer: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 20,
        marginLeft: 15
    },
    viewContainer: {
        height: '70%',
        width: '100%',
        justifyContent: 'center'
    },
    imageContainer: {
        height: '30%',
        justifyContent: 'flex-end'
    },
    headerImageStyle: {
        width: 30,
        height: 25,
        resizeMode: 'contain',
    },
    totalAmmountImage: {
        width: 40,
        height: 35,
        resizeMode: 'contain',
    },
    logoStyle: {
        width: 50,
        height: 30,
        resizeMode: 'contain',
    },
    dashboardHeader: {
        paddingVertical: 25,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dashboardHeaderDivider: {
        backgroundColor: Colors.placeHolderText,
        height: 0.5,
        shadowColor: Colors.infoGray,
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.4,
        shadowRadius: 1,
    },
    searchBoxStyle: {
        shadowColor: Colors.baseBorder,
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.4,
        shadowRadius: 1,
        borderRadius: 5,
        borderColor: Colors.baseBorder,
        borderWidth: 0.5,
        paddingVertical: 5,
        height: 40
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: 8 / 2,
        backgroundColor: Colors.primaryColor
    },
    height100: {
        height: '100%',
    },
    flexDirRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    categoryContainer: {
        marginHorizontal: 25,
        marginVertical: 30,
    },
    filterContainer: {
        marginHorizontal: 15,
        marginTop: 30,
    },
    flexWrap: {
        flexWrap: 'wrap',
    },
    totalAmmount: {
        fontSize: 45,
        marginLeft: 5,
        fontWeight: '800',
    },
    margin: {
        marginTop10: {
            marginTop: 10
        },
        marginTop20: {
            marginTop: 20
        },
        marginTop30: {
            marginTop: 30
        },
        marginTop40: {
            marginTop: 40
        },
        marginLeft5: {
            marginLeft: 5
        }
    },
    tabsContainerStyle: {
        //custom styles
        backgroundColor: '#F2F2F2',
        borderRadius: 16,
        marginTop: 20
    },
    tabStyle: {
        //custom styles
        backgroundColor: '#F2F2F2',
        borderColor: '#F2F2F2',
        borderRadius: 16,
        margin: 5
    },
    firstTabStyle: {
        //custom styles
    },
    lastTabStyle: {
        //custom 
    },
    tabTextStyle: {
        //custom styles
        fontSize: 10,
        color: Colors.primaryColor,
    },
    activeTabStyle: {
        //custom styles
        backgroundColor: Colors.primaryColor,
    },
    activeTabTextStyle: {
        //custom styles
    },
    searchInputContainer: {
        borderColor: Colors.white,
        alignSelf: 'stretch',
        height: 30,
    },
    loading: {
        loading: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: '#fff',
        },
        center: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        lodingText: {
            marginTop: 60,
            fontSize: 12,
            color: 'black'
        }
    },
    itemListContainer: {
        marginHorizontal: 25,
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemListvalueContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        marginLeft: 10
    },
    itemListValue: {
        flex: 7,
    },
    itemListAmmount: {
        flex: 2.5,
        marginLeft: 5,
        textAlign: 'right',
    }
};

export default Styles;