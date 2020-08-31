import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    mainContainer:
    {
        backgroundColor: "#ffffff",
        flex: 1,
    },
    toolbarTitle: {
        color: "#50a7f6",
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 22,
        flex: 1,
        marginLeft: 50

    },
    listContainer: {
        flex: 1,
        marginTop: 15,
    },
    button: {
        flexDirection: 'row',
        borderRadius: 30,
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginVertical: 10,
        alignSelf: 'center',
        marginHorizontal: 15,
        backgroundColor: "#ffffff",
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: 0.8,
                shadowRadius: 6,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    text:
    {
        color: "#6b6e6a",
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
        marginHorizontal: 10,
    },
    image: {
        marginRight: 15,
        height: 25,
        width: 25,
    },
    addDreamImage:
    {
        height: 70,
        width: 70,
    },
    addDreamContainer: {
        marginVertical: 10,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        marginVertical: 20
    },
    toolbarContainer:
    {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fillterImage:
    {

        alignSelf: 'center',
        height: 30,
        width: 30,
        marginRight: 25,
    },
    dailogText: {
        fontWeight: '700',
        fontSize: 20,
        color: '#000000',
        padding: 5
    }
});
export default styles;

