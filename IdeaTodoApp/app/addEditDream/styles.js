import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer:
    {
        backgroundColor: "#ffffff",
        flex: 1,
    },
    inputStyle: {
        borderWidth: 1.5,
        paddingLeft: 15,
        marginTop: 20,
        borderRadius: 10,
        borderColor: '#eef2f4',
        fontSize: 16,
        fontWeight: '700',
        color: '#000000',
    },
    inputContainer: {
        marginTop: '30%',
        marginHorizontal: 15,
    },
    toolbarTitle: {
        color: "#50a7f6",
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 22,
        flex: 1,
        marginLeft :50,
    },
    button: {
        backgroundColor: "#50a7f6",
        paddingVertical: 15,
        borderRadius: 30,
        marginTop: 20,
    },
    text:
    {
        color: "#ffffff",
        fontSize: 20,
        alignSelf: 'center',
    },
    textCancel:
    {
        color: "#aca4a4",
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '700',
        marginTop: 10,
    },
    toolbarContainer:
    {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeImage:
    {

        alignSelf: 'center',
        height: 22,
        width: 22,
        marginRight: 25,
    },
    checkboxContainer: {
        flexDirection: "row",
        marginVertical: 10,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
        fontSize: 16,
        fontWeight: '700',
        color: "#808080"
    },
});
export default styles;
