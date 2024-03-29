import React, {useEffect, useState} from 'react'
import {View, Text, ScrollView, Button} from 'react-native'
import firebase from '../database/firebase'
import { ListItem, Avatar } from 'react-native-elements'
const UsersList = (props) => {

    const [users, setUsers] = useState([])

    useEffect(()=>{
        firebase.db.collection('users').onSnapshot(querySnapshot=> {

            const users = [];

            querySnapshot.docs.forEach(doc => {
                const {name, email, phone} = doc.data()
                users.push({
                    id: doc.id,
                    name,
                    email,
                    phone
                })
            });
            setUsers(users)
        })
    }, [])

    return (
        <ScrollView>
            <Button title="Create User" onPress={ ()=> props.navigation.navigate('CreateUserScreen')}/>

            {
                users.map(users => {
                    return(
                        <ListItem key={users.id} bottomDivider onPress={()=> {
                            props.navigation.navigate('UserDetailScreen', {
                                userId: users.id
                            })
                        }}>
                            <ListItem.Chevron/>
                            <Avatar source={{uri:'https://reactnativeelements.com/img/avatar/avatar--photo.jpg'}} rounded/>
                            <ListItem.Content>
                                <ListItem.Title>{users.name}</ListItem.Title>
                                <ListItem.Subtitle>{users.email}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    )
                })
            }

        </ScrollView>
    )
}

export default UsersList


// import React, { useState, useEffect } from "react";
// import { Button, StyleSheet } from "react-native";
// import { ListItem, Avatar } from "react-native-elements";
// import { ScrollView } from "react-native-gesture-handler";

// import firebase from "../database/firebase";

// const UsersList = (props) => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     firebase.db.collection("users").onSnapshot((querySnapshot) => {
//       const users = [];
//       querySnapshot.docs.forEach((doc) => {
//         const { name, email, phone } = doc.data();
//         users.push({
//           id: doc.id,
//           name,
//           email,
//           phone,
//         });
//       });
//       setUsers(users);
//     });
//   }, []);

//   return (
//     <ScrollView>
//       <Button
//         onPress={() => props.navigation.navigate("CreateUserScreen")}
//         title="Create User"
//       />
//       {users.map((user) => {
//         return (
//           <ListItem
//             key={user.id}
//             bottomDivider
//             onPress={() => {
//               props.navigation.navigate("UserDetailScreen", {
//                 userId: user.id,
//               });
//             }}
//           >
//             <ListItem.Chevron />
//             <Avatar
//               source={{
//                 uri:
//                   "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
//               }}
//               rounded
//             />
//             <ListItem.Content>
//               <ListItem.Title>{user.name}</ListItem.Title>
//               <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
//             </ListItem.Content>
//           </ListItem>
//         );
//       })}
//     </ScrollView>
//   );
// };

// export default UsersList;
