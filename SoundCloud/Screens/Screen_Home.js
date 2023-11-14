import { Linking, Pressable, StyleSheet, Text, View, ScrollView, FlatList, Image } from 'react-native';

import { TextInput } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Screen_Home({ navigation, route }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://6544afd55a0b4b04436cbf81.mockapi.io/soundcloud/music')
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data);
      })
  }, []);
  return (
    <View style={styles.container}>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '13%',
        paddingHorizontal: 20,
        paddingTop: 35
      }}  >
        <Text style={{
          fontSize: 20,
          fontWeight: '700',
        }} >Home</Text>
        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons name="email-outline" size={24} color="black" />
          <Ionicons style={{ paddingLeft: 20 }} name="notifications-outline" size={24} color="black" />
        </View>
      </View>
      <View
        style={{ width: '100%', }}
      >
        <ScrollView style={{ height: 620 }}>
          <View style={{ width: '100%' }}>
            <Text style={{ fontSize: 20, fontWeight: '600', paddingLeft: 20 }}>More of what you like</Text>
            <ScrollView horizontal={true} >
              <FlatList
                horizontal={true}
                style={{ width: '100%' }}
                data={data}
                renderItem={({ item }) => (
                  <View>
                    <Pressable onPress={()=>navigation.navigate("PlayMusic",{item})}>
                      <View style={{
                        width: 100,
                        height: 100,
                        backgroundColor: '#3D4651',
                        position: 'absolute',
                        marginTop: 40,
                        marginLeft: 40,
                        borderRadius: 10,
                      }} ></View>
                      <View style={{
                        width: 100,
                        height: 100,
                        backgroundColor: 'black',
                        position: 'absolute',
                        marginTop: 30,
                        marginLeft: 30,
                        borderRadius: 10,
                      }} ></View>
                      <View style={{ margin: 20, boxShadow: '10px 10px ', borderRadius: 10, }}>
                        <Image style={{ width: 100, height: 100, resizeMode: 'contain', borderRadius: 10 }}
                          source={
                            // require('./assets/icon.png')
                            { uri: item.img }
                          } />
                      </View>
                      <View style={{ width: 140 }}>
                        <Text
                          numberOfLines={2}
                          style={{
                            fontSize: 15,
                            fontWeight: '600',
                            paddingLeft: 20,
                          }}>{item.musicname} - {item.singer}</Text>
                        <Text style={{
                          fontSize: 13,
                          fontWeight: '200',
                          paddingLeft: 20,
                        }}>Related tracks</Text>
                      </View>
                    </Pressable>
                  </View>

                )}
                keyExtractor={item => item.id}
              />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
