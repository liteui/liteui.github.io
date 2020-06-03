import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'

import List from '../screens/List'
import Details from '../screens/Details'
import Quiz from '../screens/Quiz'
import { colors, styles } from '../styles'

const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const stackScreenOptions = {
  headerStyle: {
    backgroundColor: colors.primary
  },
  headerTintColor: colors.tint
}

function MenuButton(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.headerButton} onPress={() => props.navigation.openDrawer()}>
      <Text style={{color: '#fff', fontSize: 38}}>≡</Text>
    </TouchableOpacity>
  )
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerTitle}>{props.username}</Text>
        <Text style={{color: 'gray', fontSize: 14, padding: 6, textDecorationLine: 'underline'}} onPress={props.onLogoutPress}>Выйти</Text>
      </View>
      <DrawerItemList {...props} activeBackgroundColor={colors.primaryLight} activeTintColor={colors.primary} />
    </DrawerContentScrollView>
  );
}

function ListTabs() {
  return(
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: colors.primary,
        activeTintColor: colors.tint,
        labelStyle: {
          fontSize: 16
        },
        showIcon: false,
        tabStyle: {
          justifyContent: 'center'
        }
      }}
    >
      <Tab.Screen
        name='Articles'
        component={List}
        options={{title: 'Статьи'}}
        initialParams={{ type: 'articles' }}
      />
      <Tab.Screen
        name='Reviews'
        component={List}
        options={{title: 'Обзоры'}}
        initialParams={{ type: 'reviews' }}
      />
    </Tab.Navigator>
  )
}

function ContentStack() {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen
        name='List'
        component={ListTabs}
        options={({ navigation }) => ({
          headerLeft: () => (
            <MenuButton navigation={navigation} />         
          ),
          title: 'Контент'
        })}
      />
      <Stack.Screen
        name='Details'
        component={Details}
        options={({ route }) => ({
          title: route.params.screenTitle
        })}
      />
    </Stack.Navigator>    
  )
}

function QuizStack() {
  return(
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen
        name='Quiz'
        component={Quiz}
        options={({ navigation }) => ({
          headerLeft: () => (
            <MenuButton navigation={navigation} />         
          ),
          title: 'Тест'
        })}
      />
    </Stack.Navigator>
  )
}

export default function AppContainer(props) {
  const username = props.username
  const onLogoutPress = props.onLogoutPress

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} username={username} onLogoutPress={onLogoutPress} />}>
        <Drawer.Screen name='Content' component={ContentStack} options={{title: 'Контент'}} />
        <Drawer.Screen name='Quiz' component={QuizStack} options={{title: 'Тест'}} />
      </Drawer.Navigator>      
    </NavigationContainer>
  )
}
