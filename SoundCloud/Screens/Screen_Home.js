import { Linking, Pressable, StyleSheet, Text, View, ScrollView, FlatList, Image } from 'react-native';

import { TextInput } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { Ionicons, Foundation, MaterialCommunityIcons, Feather, AntDesign } from '@expo/vector-icons';


export default function Screen_Home({ navigation, route }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://6544afd55a0b4b04436cbf81.mockapi.io/soundcloud/music')
      .then(response => response.json())
      .then(data => {
        setData(data);
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
        style={{ width: '100%', height: '81%' }}
      >
        <ScrollView style={{}}>
          <View style={{ width: '100%' }}>
            <Text style={{ fontSize: 20, fontWeight: '600', paddingLeft: 20 }}>More of what you like</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={{ width: '100%' }}
              data={data}
              renderItem={({ item }) => (
                <View>
                  <Pressable onPress={() => navigation.navigate("Track", {item})}>
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

          </View>
          <View style={{ width: '100%', marginTop: 30 }}>
            <Text style={{ fontSize: 20, fontWeight: '600', paddingLeft: 20 }}>Recently Played</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={{ width: '100%' }}
              data={data}
              renderItem={({ item }) => (
                <View>
                  <Pressable onPress={() => navigation.navigate("PlayMusic", { item })}>
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
          </View>

          <View style={{ width: '100%', marginTop: 30 }}>
            <Text style={{ fontSize: 20, fontWeight: '600', paddingLeft: 20 }}>Mixed for Tuấn</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={{ width: '100%' }}
              data={data}
              renderItem={({ item }) => (
                <View>
                  <Pressable onPress={() => navigation.navigate("PlayMusic", { item })}>
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

          </View>

          <View style={{ width: '100%', marginTop: 30 }}>
            <Text style={{ fontSize: 20, fontWeight: '600', paddingLeft: 20 }}>Charts: Top 50 s</Text>
            <ScrollView horizontal={true} >
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                style={{ width: '100%' }}
                data={data}
                renderItem={({ item }) => (
                  <View>
                    <Pressable onPress={() => navigation.navigate("PlayMusic", { item })}>
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
      <View style={{ backgroundColor: 'black', height: '6%', width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }} >
        <Foundation name="play" size={26} color="white" style={{ paddingLeft: 20 }} />
        <View style={{ flexDirection: 'row' }}>
          <Feather name="user-plus" size={23} color="white" style={{ paddingRight: 20 }} />
          <AntDesign name="hearto" size={21} color="white" style={{ paddingRight: 20 }} />
        </View>
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
