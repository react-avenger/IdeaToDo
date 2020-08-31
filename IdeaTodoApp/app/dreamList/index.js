import React, { useState ,useEffect} from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import { useSelector } from 'react-redux';
import CustomItem from '../component/CustomItem'
import { Dialog } from 'react-native-simple-dialogs';
import styles from './styles';




export default function DreamList({ navigation }) {
    const id = navigation.getParam('id');
    const dreamList = useSelector(state => state.dreamReducer.dreamList);
    const [dialogVisible, setDailogVisible] = useState(false)
    const [data, setData] = useState()

    useEffect(() => {
        if (id!=undefined) {
           setData(dreamList)
        }
    }, [id]);
    
    const statusImage = (status) => {
        if (status == "Todo") {
            return (
                null
            )
        } else if (status == "Inprogress") {
            return (
                <View>
                    <Image source={require('../assets/ic_unselected.png')} style={styles.image} />
                </View>
            )
        } else if (status == "Done") {
            return (
                <View>
                    <Image source={require('../assets/ic_selected.png')} style={styles.image} />
                </View>
            )
        }
    }

    const fillterData = (type) =>
    {
        let data = [...dreamList]
        let todoData = []
        for (let i = 0; i < data.length; i++) {
            if (data[i].status == type) {
                todoData.push(data[i])
            }
        }
        setData(todoData)
        setDailogVisible(false)       
    }

    const renderItem = (item) => {
        return (
            <CustomItem index={item.index} >
                <TouchableOpacity style={styles.button} onPress={() => {
                    navigation.navigate("AddEditDream", { id: item.id, name: item.name, description: item.description, status: item.status })
                }}>
                    <Text style={styles.text}>{item.name}</Text>
                    {statusImage(item.status)}
                </TouchableOpacity>
            </CustomItem>
        );
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.toolbarContainer}>
                <Text style={styles.toolbarTitle}>All Ideas</Text>
                <TouchableOpacity onPress={() => setDailogVisible(true)}>
                    <Image source={require('../assets/ic_filtter.png')} style={styles.fillterImage} />
                </TouchableOpacity>
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={data}
                    renderItem={({ item }) => (
                        renderItem(item)
                    )}
                />
            </View>
            <TouchableOpacity style={styles.addDreamContainer} onPress={() => navigation.navigate("AddEditDream", { id: "", name: "", description: "", status: "" })}>
                <Image source={require('../assets/ic_plus.png')} style={styles.addDreamImage} />
            </TouchableOpacity>
            <Dialog
                visible={dialogVisible}
                title="Fillter dreams"
                titleStyle={{ color: '#50a7f6' }}
                onTouchOutside={() => setDailogVisible(true)} >
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => {
                        setData(dreamList)
                        setDailogVisible(false)
                    }
                    }>
                    <Text style={styles.dailogText}>All</Text>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={() => {
                        fillterData("Todo")
                    }
                    }>
                        <Text style={styles.dailogText}>Todo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        fillterData("Inprogress")
                    }
                    }>
                     <Text style={styles.dailogText}>In Progress</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                         fillterData("Done")
                    }}>
                        <Text style={styles.dailogText}>Done</Text>
                    </TouchableOpacity>
                </View>
            </Dialog>
        </View>
    )
}

