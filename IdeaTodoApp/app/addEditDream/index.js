import React, { useState,useEffect} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image, Alert, CheckBox } from 'react-native';
import { useDispatch } from 'react-redux';
import addNewDream from '../action/addDreamAction'
import deleteDream from '../action/deleteDreamAction'
import editDream from '../action/editDreamAction'
import styles from './styles';


export default function AddEditDreamContainer({ navigation }) {
    const id = navigation.getParam('id');
    const name = navigation.getParam('name');
    const description = navigation.getParam('description');
    const _status = navigation.getParam('status');

    const [dreamName, setDreamName] = useState(name != "" ? name : "")
    const [dreamNotes, setDreamNotes] = useState(description != "" ? description : "")
    const dispatch = useDispatch();
    let title = id != "" ? "Edit Idea" : "Add New Idea"
    let buttonText = id != "" ? "Edit Your Idea" : "Add New Idea"

    const [todo, setTodo] = useState(true)
    const [inprogress, setInProgress] = useState(false)
    const [done, setDone] = useState(false)


    useEffect(() => {
        if(_status!="")
        {
            if(_status=="Todo")
            {
                setTodo(true) 
                setInProgress(false)
                setDone(false)
            }else if(_status=="Inprogress")
            {
                setTodo(false)
                setInProgress(true)
                setDone(false)
            }else if(_status=="Done")
            {
                setTodo(false)
                setInProgress(false)
                setDone(true)
            }
        }
      }, []);

    const currentStatus = () => {
        let status = ""
        if (todo) {
            status = "Todo"
        }
        else if (inprogress) {
            status = "Inprogress"
        } else if (done) {
            status = "Done"
        }
        else {
            status = ""
        }
        return status
    }
    
    const submitDream =() =>
    {
        if(dreamName.trim()==="")
        {
            alert("Idea title can not be blank.!")
        }else if(dreamNotes.trim()==="")
        {
            alert("Idea description can not be blank.!")
        }else if(!todo&&!inprogress&&!done)
        {
            alert("Atleast select one task type.!")
        }
        else
        {
            id == "" ? dispatch(addNewDream(dreamName, dreamNotes, currentStatus()))
            : dispatch(editDream(id, dreamName, dreamNotes, currentStatus()))
            navigation.navigate("DreamList",{id :Math.random().toString()})
        }
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.toolbarContainer}>
                <Text style={styles.toolbarTitle}>{title}</Text>
                <TouchableOpacity onPress={() => navigation.navigate("DreamList")}>
                    <Image source={require('../assets/ic_close.png')} style={styles.closeImage} />
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter your idea name"
                    style={styles.inputStyle}
                    value={dreamName}
                    onChangeText={(text) => setDreamName(text)}
                />
                <TextInput
                    placeholder="Enter your idea notes"
                    style={[styles.inputStyle, { height: 100, textAlignVertical: "top" }]}
                    value={dreamNotes}
                    multiline={true}
                    onChangeText={(text) => setDreamNotes(text)}
                />
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={todo}
                        onValueChange={setTodo}
                        style={styles.checkbox}

                    />
                    <Text style={styles.label}>Todo</Text>
                    <CheckBox
                        value={inprogress}
                        onValueChange={setInProgress}
                        style={styles.checkbox}
                    />
                    <Text style={styles.label}>In Progress</Text>
                    <CheckBox
                        value={done}
                        onValueChange={setDone}
                        style={styles.checkbox}

                    />
                    <Text style={styles.label}>Mark As Done</Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        {
                            submitDream()
                            
                        }
                     }
                    }                >
                    <Text style={styles.text}>{buttonText}</Text>
                </TouchableOpacity>
                {id != "" ?
                    <TouchableOpacity
                        onPress={() => {
                            Alert.alert(
                                'Alert',
                                'Are you sure you want to delete ?',
                                [
                                    {
                                        text: 'Yes', onPress: () => {
                                            dispatch(deleteDream(id))
                                            navigation.navigate("DreamList",{id :Math.random().toString()})
                                        }
                                    },
                                    { text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel' },
                                ],
                                { cancelable: false }
                            );

                        }
                        }
                    >
                        <Text style={styles.textCancel}>Delete</Text>
                    </TouchableOpacity> : null}
            </View>
        </View>
    );
}

 