import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView, TextInput, Switch } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Segment from '../component/Segment';
import styles from '../styles';
import Option from './Option'
import Message from "./Message"


const style = StyleSheet.create({
    title: {
        color: "#0E0C20",
        fontWeight: "bold",
        fontSize: 20
    },
    to: {
        color: '#FFFFFF',
        fontSize: 24,
        marginBottom: 20
    },
    link: {
        color: '#707070',
        fontSize: 24
    },
    text: {
        color: '#707070',
        fontSize: 24,  
    },
    link: {
        borderBottomColor: '#E4E4E4',
        padding: 4,
        marginHorizontal: 3,
        borderBottomWidth: 4
    },
    button: {
        borderRadius: 20,
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 10,
        backgroundColor: '#2DF19C',
    },
    btnText: {
        fontSize: 24,
        color: "#FFFFFF",
        fontWeight: 'bold',
        textAlign: "center"
    },
    todoDetailIndex: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: 9
    },
    todoDetailKey: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#707070'
    },
    todoDetailValue: {
        fontSize: 14,
        color: '#707070'
    },
    action: {
        display: "flex",
        flexDirection: "row",
        padding: 8, 
        alignItems: 'center'
    },
    details: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flex: 1
    }
});


export default class EditGuest extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            optionOpen: false,
            optionType: '',
            selected: {},
            loading: false,
            schema: {
                name: {
                    name: "Name",
                    type: "String",
                    required: true,
                    value: "name",
                },
                email: {
                    name: "Email",
                    type: "String",
                    required: true,
                    value: "email",
                },
                phoneNumber: {
                    name: "Phone Number",
                    type: "Number",
                    required: true,
                    value: "phoneNumber",
                },
                invited: {
                    name: "Invited",
                    type: "DateTime",
                    required: true,
                    value: "invited",
                },
                invitedBy: {
                    name: "Invited By",
                    type: "Organizer",
                    required: true,
                    value: "invitedBy",
                },
                accepted: {
                    name: "Accepted",
                    type: "DateTime",
                    required: true,
                    value: "accepted",
                },
                checkedIn: {
                    name: "Check In",
                    type: "DateTime",
                    required: true,
                    value: "checkedIn",
                },
                vip: {
                    name: "VIP",
                    type: "Alert",
                    required: false,
                    value: "vip",
                    role: "Alert the inviter organizer when the guest checks in and add note for the check in staff"
                },
                table: {
                    name: "Table",
                    type: "Table",
                    required: true,
                    value: "table",
                }
            },
            data: props.guest
        }
    }
    

    componentDidMount() {
        const { guest } = this.props;
        console.log(guest);
        
        if (guest.uid) {
            this.fetchGuest(guest.uid)
        }
    }

    fetchGuest = () => {

    }

    openOption = (type) => this.setState({ optionOpen: true, optionType: type })

    closeOption = () => this.setState({ optionOpen: false, optionType: "" })


    selectedDetail = (key, value) => this.setState({ selected: key }, () => {
        if (['String', 'Number'].includes(key.type)) {
            if (this.input) {
                this.input.focus()
            }
        } else if (key.type === "DateTime") { 
            this.openOption(key.type)
        } else if (key.type === "Organizer") {
            this.openOption(key.type)
        } else if (key.type === 'Table') {
            this.openOption(key.type)
        } else if (key.type === "Boolean") {
            this.setData(!value)  
        } else if (key.type === 'Alert') {
            this.openOption('Alert')
        }
    }) 


    selectedPoll = (key) => {

        //form selected and open 
        this.setState({ selected: 
            {
                name: key.title,
                type: "Poll",
                required: false,
                value: key.title,
                options: key.options
            }
        }, () => {
        
            this.openOption('Poll')
        })
    } 


    setData = ( value) => {
        const {selected, optionOpen} = this.state;

        this.setState({ data: { ...this.state.data, [selected.value]: value } }, () => {
            if (optionOpen) {
                this.closeOption()
            }
        })
    }


    submit = () => {
        const { } = this.state;

        this.setState({ loading: true })
    }

    render() {
        const { optionOpen, data, schema, optionType, selected, loading,  } = this.state;
        
        const { close, tables, organizers, polls } = this.props;

        console.log(data);
        return (
        <View style={{ width: '100%', height: "100%", flex: 1 }}>
            <View style={styles.container}>
                <View style={{ backgroundColor: "#0E0C20", height: getStatusBarHeight(true)}} />
                <View style={styles.between}>
                    <TouchableOpacity style={styles.icon} onPress={() => close()}>
                        <Ionicons name={'ios-arrow-back'} color={'white'} size={30}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icon} onPress={() => this.submit()}>
                        <Ionicons name={'ios-checkmark'} color={'white'} size={40}/>
                    </TouchableOpacity>
                </View>

                <Text style={styles.Header}>EDIT GUEST</Text>
                <View>
                    <Text style={styles.title}>Guest</Text>

                    <Text style={style.to}>{data.name}</Text>
                </View>



                <Text style={styles.title}>Details</Text>
                <Segment color={'#E4E4E4'} loading={loading}>
                    <View style={styles.details}>
                        <ScrollView>
                            {/* {Object.values(guid).map(key => (
                            <View key={key.name} style={style.todoDetailIndex}>
                                <Text style={style.todoDetailKey}>{key.name}</Text>

                                <TouchableOpacity onPress={() => this.selectedDetail(key, data[key.value])} style={style.action}>
                                    {(key.type === "Number") && (<Text style={style.todoDetailValue}>{!!data[key.value]? String(data[key.value]): 'none'}</Text>)}
                                    {(key.type === "DateTime") && (<Text style={style.todoDetailValue}>{!!data[key.value]?  moment.utc(data[key.value]).format("ddd Do MMM YYYY"): 'none'}</Text>)}
                                    {(key.type === "Organizer") && (<Text style={style.todoDetailValue}>{!!data[key.value]? String(data.assign.name): 'none'}</Text>)}
                                    <Ionicons name={'ios-arrow-forward'} color={'#707070'} size={30}/>
                                </TouchableOpacity>
                            </View>
                            ))} */}
                            <View style={style.todoDetailIndex}>
                                <Text style={style.todoDetailKey}>Name</Text>

                                <TouchableOpacity style={style.action} onPress={() => this.selectedDetail(schema.name, data.name)}>
                                    <Text style={style.todoDetailValue}>{data.name? data.name : "none"}</Text>
                                    <Ionicons name={'ios-arrow-forward'} color={'#707070'} size={30}/>
                                </TouchableOpacity>
                            </View>


                            <View style={style.todoDetailIndex}>
                                <Text style={style.todoDetailKey}>Email</Text>

                                <TouchableOpacity style={style.action} onPress={() => this.selectedDetail(schema.email, data.email)}>
                                    <Text style={style.todoDetailValue}>{data.email? data.email : "none"}</Text>
                                    <Ionicons name={'ios-arrow-forward'} color={'#707070'} size={30}/>
                                </TouchableOpacity>
                            </View>


                            <View style={style.todoDetailIndex}>
                                <Text style={style.todoDetailKey}>Phone Number</Text>

                                <TouchableOpacity style={style.action} onPress={() => this.selectedDetail(schema.phoneNumber, data.phoneNumber)}>
                                    <Text style={style.todoDetailValue}>{data.phoneNumber? data.phoneNumber : "none"}</Text>
                                    <Ionicons name={'ios-arrow-forward'} color={'#707070'} size={30}/>
                                </TouchableOpacity>
                            </View>
                            

                            {/* <View style={style.todoDetailIndex}>
                                <Text style={style.todoDetailKey}>Invited</Text>

                                <TouchableOpacity style={style.action} onPress={() => this.selectedDetail(schema.invited, data.invited)}>
                                    <Text style={style.todoDetailValue}>{data.invited? data.invited : "none"}</Text>
                                    <Ionicons name={'ios-arrow-forward'} color={'#707070'} size={30}/>
                                </TouchableOpacity>
                            </View> */}


                            {/* <View style={style.todoDetailIndex}>
                                <Text style={style.todoDetailKey}>Invited By</Text>

                                <TouchableOpacity style={style.action} onPress={() => this.selectedDetail(schema.invitedBy, data.invitedBy)}>
                                    <Text style={style.todoDetailValue}>{data.invitedBy? data.invitedBy.name : "none"}</Text>
                                    <Ionicons name={'ios-arrow-forward'} color={'#707070'} size={30}/>
                                </TouchableOpacity>
                            </View> */}


                            {/* <View style={style.todoDetailIndex}>
                                <Text style={style.todoDetailKey}>Accepted</Text>

                                <TouchableOpacity style={style.action} onPress={() => this.selectedDetail(schema.accepted, data.accepted)}>
                                    <Text style={style.todoDetailValue}>{data.accepted? data.accepted : "none"}</Text>
                                    <Ionicons name={'ios-arrow-forward'} color={'#707070'} size={30}/>
                                </TouchableOpacity>
                            </View> */}


                            {/* <View style={style.todoDetailIndex}>
                                <Text style={style.todoDetailKey}>Checked In</Text>

                                <TouchableOpacity style={style.action} onPress={() => this.selectedDetail(schema.checkedIn, data.checkedIn)}>
                                    <Text style={style.todoDetailValue}>{data.checkedIn? data.checkedIn : "none"}</Text>
                                    <Ionicons name={'ios-arrow-forward'} color={'#707070'} size={30}/>
                                </TouchableOpacity>
                            </View> */}


                            <View style={style.todoDetailIndex}>
                                <Text style={style.todoDetailKey}>VIP</Text>

                                <TouchableOpacity style={style.action} onPress={() => this.selectedDetail(schema.vip, data.vip)}>
                                    <Text style={style.todoDetailValue}>{data.vip.alert? 'true' : "false"}</Text>
                                    <Ionicons name={'ios-arrow-forward'} color={'#707070'} size={30}/>
                                </TouchableOpacity>
                            </View>


                            <View style={style.todoDetailIndex}>
                                <Text style={style.todoDetailKey}>Table</Text>

                                <TouchableOpacity style={style.action} onPress={() => this.selectedDetail(schema.table, data.table)}>
                                    <Text style={style.todoDetailValue}>{data.table? data.table.name : "none"}</Text>
                                    <Ionicons name={'ios-arrow-forward'} color={'#707070'} size={30}/>
                                </TouchableOpacity>
                            </View>

                            {polls.map(key => (
                                <View key={key.title} style={style.todoDetailIndex}>
                                    <Text style={style.todoDetailKey}>{key.title}</Text>

                                    <TouchableOpacity onPress={() => this.selectedPoll(key)} style={style.action}>
                                        <Text style={style.todoDetailValue}>{data[key.title]? data[key.title] : "none"}</Text>
                                        <Ionicons name={'ios-arrow-forward'} color={'#707070'} size={30}/>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </ScrollView>

                        <View>
                            {((selected.type === "String") || (selected.type === "Number")) && (
                            <View>
                                <Text style={styles.inputLabel}>{selected.name}</Text>
                                <View style={styles.detailsRow}>
                                <TextInput 
                                    ref={(x) => this.input = x}
                                    style={styles.detailsInput}
                                    placeholder={`Enter guest ${selected.name.toLowerCase()}`} 
                                    placeholderTextColor="#E4E4E4"
                                    value={String(data[selected.value])}
                                    autoFocus
                                    onBlur={() => this.setState({ selected: {} })}
                                    keyboardType={selected.type === "String"? "default" : "phone-pad"}
                                    onChange={(e) => this.setData(e.nativeEvent.text)}
                                    onSubmitEditing={(e) => this.setData(e.nativeEvent.text)}
                                />
                                </View>
                            </View>

                            )}
                        </View>
                    </View>
                </Segment>
                <Option title={selected.name} subtitle={selected.role || ''} openModal={optionOpen} closeModal={() => this.closeOption()}>
                    {(optionType === 'Poll') && Object.keys(selected.options).map((option) => ( 
                        <TouchableOpacity key={option} style={[styles.optionBody, { borderBottomColor: data[selected.value] === option? '#2DF19C': '#707070'} ]} onPress={() => this.setData(option)}>
                            <Text style={styles.optionText}>{option}</Text>
                        </TouchableOpacity>
                    ))}


                    {(optionType === 'Table') && tables.map((table) => ( 
                        <TouchableOpacity key={table.uid} style={[styles.optionBody, { borderBottomColor: data[selected.value] === table.name? '#2DF19C': '#707070'} ]} onPress={() => this.setData(table)}>
                            <Text style={styles.optionText}>{table.name}</Text>
                        </TouchableOpacity>
                    ))}

                    {(optionType === 'Alert') && (
                        <View>
                            <View style={styles.between}>
                                <Text style={style.title}>Alert</Text>
                                <Switch value={data.vip.alert}  onValueChange={() => this.setState({ data: { ...this.state.data, vip: { ...this.state.data.vip, alert: !this.state.data.vip.alert }}})} trackColor={{ true: '#2DF19C', false: '#EC3636'}} thumbColor={'#E4E4E4'} />
                            </View>

                            <Text style={style.title}>Note</Text>
                            <TextInput 
                                ref={(x) => this.input = x}
                                style={styles.detailsInput}
                                placeholder={`Enter note for checkin staffs`} 
                                placeholderTextColor="#E4E4E4"
                                value={data.vip.note}
                                onChange={(e) => this.setState({ data: { ...this.state.data, vip: { ...this.state.data.vip, note: e.nativeEvent.text }}})}
                                onSubmitEditing={(e) => this.setState({ data: { ...this.state.data, vip: { ...this.state.data.vip, note: e.nativeEvent.text }}})}
                            />

                            <TouchableOpacity style={style.button} onPress={() => this.closeOption()}>
                                <Text style={style.btnText}>SAVE</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Option>

            </View>
            <Message />
        </View>
        )
    }
}
