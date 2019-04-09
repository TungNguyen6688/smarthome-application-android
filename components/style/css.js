import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    //   ********** Start login form ********** 
    //   ********** Bắt đầu màn hình login ********** 
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2ecc71',
        backgroundColor: '#36A051',
    },
    form: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleContainer: {
    },
    title: {
        fontSize: 25,
        color: 'white',
        marginBottom: 25,
        fontWeight: 'bold'
    },
    input: {
        width: 258,
        height: 'auto',
    },
    containerStyle: {
        height: 44,
        backgroundColor: '#fff',
        borderRadius: 22,
        marginBottom: 10,
    },
    inputContainerStyle: {
        borderBottomWidth: 0
    },
    inputStyle: {
        fontStyle: 'italic',
        fontSize: 16,
        marginLeft: 5
    },
    btnContainer: {
        width: 258,
        height: 44,
        borderWidth: 0,
        borderRadius: 22,
        // backgroundColor: '#f39c12',
        backgroundColor: '#F39C12',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    btnTouch: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 258,
        height: 44,
    },
    btnText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    // ********** End login form ********** 
    // ********** Kết thúc của form login ********** 

    // ********** Start home sreen ********** 
    // ********** CSS bắt đầu của màn hình home ********** 
    homeContainer: {},
    fill: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#000',
        opacity: 0.7,
        zIndex: -1
    },
    homeTitleContainer: {
        marginTop: 15,
    },
    homeTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
    },
    homeGeneralInfo: {
        width: '98%',
        borderWidth: 0,
        borderRadius: 22,
        backgroundColor: '#36A051',
        marginTop: 12,
        marginBottom: 12,
        zIndex: 1
    },
    homeLogoContainer: {
        padding: 15,
    },
    homeLogo: {
        flexDirection: 'row'
    },
    homeLogoTitle: {
        color: 'white',
        fontSize: 26,
        paddingLeft: 5,
        paddingTop: 7,
        fontWeight: 'bold',
    },
    homeLogoTextContainer: {
        paddingLeft: 15
    },
    homeLogoText: {
        color: 'white',
        fontStyle: 'italic',
        fontSize: 18,
        padding: 5
    },
    sensorContainer1: {
        width: '98%',
        borderRadius: 22,
        borderWidth: 0,
        backgroundColor: '#F39C12',
        marginBottom: 12,
        alignItems: 'center'
    },
    sensorContainer2: {
        width: '98%',
        borderRadius: 22,
        borderWidth: 0,
        // backgroundColor: '#36A051',
        backgroundColor: '#03a9f4',
        marginBottom: 12,
        alignItems: 'center'
    },
    sensorName: {
        marginTop: 5,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    sensorInfo: {
        width: '85%',
        padding: 8,
        flexDirection: 'row'
    },
    sensor1: {
        width: '50%'
    },
    sensor2: {
        width: '50%',
        marginLeft: 30
    },
    sensorText: {
        color: 'white',
        padding: 5,
        fontStyle: 'italic',
        fontSize: 16
    },
    // ********** End home sreen ********** 
    // ********** Kết thúc home sreen ********** 

    // ********** Start ligh and devices sreen ********** 
    // ********** Do màn hình đèn(teb đèn và thiết bị component như nhau nên dùng chung CSSS) ********** 
    lightControlContainer: {
        flexDirection: 'row',
        padding: 10,
        width: '80%',
        marginTop: 25
    },
    lightTitleContainer: {
        width: '100%',
        height: 42,
        backgroundColor: '#36A051',
        justifyContent: 'center',
        alignItems: 'center',
    },
    lightTitle: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    lightBtnName: {
    },
    eachLightControl: {
        width: 142,
        height: 44,
        backgroundColor: '#F39C12',
        borderRadius: 22,
        marginBottom: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0,
    },
    textLight: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    switchContainer: {
        marginTop: 0,
        width: 76,
        height: 44,
        borderRadius: 25,
        backgroundColor: '#7A8A7F',
        marginBottom: 25,
        padding: 0,
        zIndex: -1,
        padding: 4,
        borderWidth: 0
    },
    switchCircle: {
        width: 39,
        height: 39,
        borderRadius: 27.5,
        backgroundColor: 'white', // rgb(102,134,205)
        zIndex: 1,
        borderWidth: 0
    },
    switchBtnName: {
        flex: 1 / 3,
        width: '40%',
    },
    lightBtnName: {
        flex: 3 / 3,
        width: '40%',
    },
    // ********** End light and devices sreen ********** 
    // Kết thức màn hình đèn và thiết bị

    // ********** Start Chat sreen ********** 
    // ********** màn hình chat ********** 
    chatContainer: {
        width: '100%',
        flex: 1
    },
    chat: {
        flex: 5 / 6,
        flexDirection: 'row',
    },
    a: {},
    b: {
        position: 'absolute',
        right: 5,
    },
    send: {
        flex: 1 / 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer1: {
        backgroundColor: '#F39C12',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginLeft: 5,
    },
    textContainer2: {
        backgroundColor: '#36A051',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 65,
        marginLeft: 5,
    },
    textChat1: {
        color: 'white',
        padding: 15,
        fontSize: 15
    },
    textChat2: {
        color: 'white',
        padding: 15,
        fontSize: 15
    },
    innerSend : {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 22, 
        borderWidth: 0
    },
    textInput : {
        fontSize: 12,
        marginLeft: 8,
    }
    // ********** End Chat sreen ********** 
    // ********** Kết thúc màn hình chát ********** 

})
