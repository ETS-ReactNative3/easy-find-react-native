/*
Style for Settings screen
*/

import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../theme'

export default StyleSheet.create({
    safeTop: {
        flex: 0,
        backgroundColor: Colors.theme_color
    },
    mainView: {
        flex: 1,
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingBottom: 20
    },
    topContainer: {
        backgroundColor: Colors.theme_color,
    },
    bottomContainer: {
        height: 300
    },
    title: {
        position: "relative",
        marginVertical: 20,
        fontFamily: Fonts.font_bold,
        fontSize: 30,
        alignSelf: "center",
        color: Colors.white
    },
    accountTitle: {
        fontFamily: Fonts.font_regular,
        marginVertical: '20%',
        fontSize: 22,
        alignSelf: "center",
        color: Colors.white,
    },
    bottomColor: {
        marginVertical: 0,
        height: 130,
        width: '100%',
        backgroundColor: Colors.theme_color,
        zIndex: 0
    },
    bottomView: {
        position: 'absolute',
        alignSelf: 'center',
        height: 290,
        marginVertical: 0,
        width: '90%',
        backgroundColor: Colors.white,
        borderRadius: 10,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        zIndex: 1
    },
    infoTitle: {
        margin: 20,
        fontFamily: Fonts.font_bold,
        fontSize: 22,
        color: Colors.black,
    },
    infoStyle: {
        marginHorizontal: 20,
        fontFamily: Fonts.font_regular,
        fontSize: 22,
    }
})