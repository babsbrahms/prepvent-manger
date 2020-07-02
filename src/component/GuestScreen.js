import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Communications from 'react-native-communications';
import Segment from '../component/Segment';
import Option from './Option';
import styles from '../styles';


const contactFilter = [
    { name: 'Any', options: true },
    { name: 'Invited', options: false },
    { name: 'Accepted', options: false },
    { name: 'Invited By', options: true },
    { name: 'Checked In', options: false },
    { name: 'Not Accepted', options: false },
    { name: 'VIP', options: false },
];

const contactSearch = [
    { name: 'Name', options: false },
    { name: 'Phone number', options: false },
    { name: 'Email', options: false },
];

const style = StyleSheet.create({
    todo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000'
    },
    todoDetail: {
        backgroundColor: '#707070',
        padding: 3,
    },
    todoDetailIndex: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: 5,
        padding: 3
    },
    todoDetailKey: {
        // alignSelf: "flex-start",
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    todoDetailValue: {
        // alignSelf: "flex-end",
        fontSize: 14,
        color: '#E4E4E4'
    }, 
    todoAction: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    params: {
        color: '#E4E4E4',
        fontSize: 20,
        textAlign: 'center'
    }

});


export default class Guest extends Component {
    state = { 
        refreshing: false,
        selectedIndex: -1,
        selected: {
          name: 'Olayinka',
          email: 'yeancahBrahms7@gmail.com',
          'VIP Alert': true,
          accpted: true,
          uid: '12weqw3431e3'
        },
        filterParams: 'invited',
        searchParams: 'name',
        optionOpen: false,
        option: '',
        search: "",
        data: [
            {
                name: 'biola',
                email: 'yeancahBrahms7@gmail.com',
                phoneNumber: "+3248142319913",
                VIP: true,
                accpted: true,
                uid: '12weq1e3'  
            },
            {
                name: 'Olayinka',
                email: 'yeancahBrahms7@gmail.com',
                phoneNumber: "+3248142319913",
                VIP: true,
                accpted: true,
                uid: '1weqw1e'  
            },
            {
                name: 'Zharadeen',
                email: 'yeancahBrahms7@gmail.com',
                phoneNumber: "+3248142319913",
                VIP: true,
                accpted: true,
                uid: '1weq431e3'  
            },
            {
                name: 'Najeeb',
                email: 'yeancahBrahms7@gmail.com',
                phoneNumber: "+3248142319913",
                VIP: true,
                accpted: true,
                uid: '12weqw3433'  
            },            
            {
                name: 'Teslim',
                email: 'tessy@gmail.com',
                phoneNumber: "+3248142319913",
                VIP: true,
                accpted: true,
                uid: '12eqw431e3'  
            },
            {
                name: 'Rukayat',
                email: 'ruka@gmail.com',
                VIP: true,
                accpted: true,
                uid: '12we3431e3'  
            }
        ]
    }

    openOption = (option) => this.setState({ optionOpen: true, option })

    closeOption = () => this.setState({ optionOpen: false, option: '' })

    selectFilter = contact => {
        this.closeOption()
        this.setState({ filterParams: contact.name, option: '' })
        // if (contact.options) {
        //     this.openSideBar()
        // } else {

        // }
    }

    selectSearch = contact => {
        this.closeOption()
        this.setState({ searchParams: contact.name, option: '' })
    }

    searchGuest = () => {

    }

    render() {
        const { refreshing, selectedIndex, searchParams, filterParams, optionOpen, option, selected, search, data } = this.state;
        
        const { close, editGuest } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.between}>
                    <Text style={styles.Header}>GUEST</Text>

                    <TouchableOpacity style={styles.icon} onPress={() => close()}>
                        <Ionicons name={'ios-close'} color={'white'} size={30}/>
                    </TouchableOpacity>
                </View>
                <View style={[styles.row, { alignItems: 'center'}]}>
                    <TextInput 
                        style={styles.search} 
                        placeholder={`Search for guest by ${searchParams}`} 
                        placeholderTextColor="#707070" 
                        value={search}
                        onChange={(e) => this.setState({ search: e.nativeEvent.text })}
                        onSubmitEditing={(e) => this.searchGuest()}
                    />
                    <TouchableOpacity style={styles.icon} onPress={() => this.searchGuest()}>
                        <Ionicons name={'ios-arrow-forward'} color={'white'} size={30}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.around}>
                    <TouchableOpacity onPress={() => this.openOption('filter')}>
                        <Text style={styles.title}>Filter By</Text>
                        <Text style={style.params}>{filterParams.toLowerCase()}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.openOption('search')}>
                        <Text style={styles.title}>Search By</Text>
                        <Text style={style.params}>{searchParams.toLowerCase()}</Text>
                    </TouchableOpacity>
                </View>

                <Segment color="#E4E4E4">
                    <FlatList 
                    onRefresh={() => {}}
                    refreshing={refreshing}
                    data={data}
                    renderItem={({ item, index }) => 
                        (<View> 
                            <Text style={style.todo}>{item.name}</Text>                       
                            <View style={styles.between}>
                                <TouchableOpacity style={styles.icon} onPress={() => this.setState({ selectedIndex: (selectedIndex === index)? -1 : index })}>
                                    <Ionicons name={selectedIndex === index? 'ios-arrow-dropup-circle' : 'ios-arrow-dropdown-circle'} color={'#707070'} size={30}/>
                                </TouchableOpacity>

                                <View style={styles.row}>
                                    {(!!item.email) && (<TouchableOpacity style={styles.icon} onPress={() => Communications.email([`${item.email}`],null,null,'','')}>
                                        <Ionicons name={'ios-mail'} color={'#707070'} size={30}/>
                                    </TouchableOpacity>)}

                                    {(!!item.phoneNumber) && (<TouchableOpacity style={styles.icon} onPress={() => Communications.phonecall(item.phoneNumber, false)}>
                                        <Ionicons name={'ios-call'} color={'#707070'} size={30}/>
                                    </TouchableOpacity>)}

                                </View>
                            </View>
                            {(selectedIndex === index) && (<View style={style.todoDetail}>
                                <View>
                                    {Object.keys(item).map(key =>(
                                    <View key={key} style={style.todoDetailIndex}>
                                        <Text style={style.todoDetailKey}>{key}</Text>

                                        <Text style={style.todoDetailValue}>{String(item[key])}</Text>
                                    </View>))}
                                </View>
                                <View style={styles.between}>
                                    <TouchableOpacity style={styles.icon} onPress={() =>  {}}>
                                        <Text style={[style.todoAction, { color: '#2DF19C' }]}>INVITE</Text>
                                    </TouchableOpacity>
                                    
                                    <TouchableOpacity style={styles.icon} onPress={() => editGuest(selected.uid)}>
                                        <Text style={[style.todoAction, { color: '#2DF19C' }]}>EDIT</Text>
                                    </TouchableOpacity>
                                    
                                    <TouchableOpacity style={styles.icon} onPress={() => {}}>
                                        <Text style={[style.todoAction, { color: '#EC3636' }]}>DELETE</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>)}

                            <View style={styles.hairLine} />
                        
                        </View>) 
                    }
                    keyExtractor={(item,index) => index.toString()}
                    />
                </Segment>

                <Option title={`${option} by`} openModal={optionOpen} closeModal={() => this.closeOption()}>
                    {(option === 'filter') && (
                    <View>
                        {contactFilter.map((contact) => (
                        <TouchableOpacity key={contact.name} style={styles.optionBody} onPress={() => this.selectFilter(contact)}>
                            <Text style={styles.optionText}>{contact.name}</Text>
                        </TouchableOpacity>
                        ))}
                    </View>)}


                    {(option === 'search') && (
                    <View>
                        {contactSearch.map((contact) => (
                        <TouchableOpacity key={contact.name} style={styles.optionBody} onPress={() => this.selectSearch(contact)}>
                            <Text style={styles.optionText}>{contact.name}</Text>
                        </TouchableOpacity>
                        ))}
                    </View>)}
                </Option>
            </View>
        )
    }
}
