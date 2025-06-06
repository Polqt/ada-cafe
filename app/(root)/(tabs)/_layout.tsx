import { Feather, MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const TabIcon = ({
  icon,
  title,
  focused,
}: {
  icon: any;
  title: any;
  focused: boolean;
}) => (
  <View className="flex-1 mt-3 flex flex-col items-center">
    {icon}
    <Text
      className={`text-xs mt-1 ${
        focused ? 'text-[#0061ff]' : 'text-[#666876]'
      }`}
    >
      {title}
    </Text>
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          borderTopColor: '#0061FF1A',
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="sales"
        options={{
          title: 'Sales',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={
                <MaterialIcons
                  name="analytics"
                  size={24}
                  color={focused ? '#0061ff' : '#666876'}
                />
              }
              title="Sales"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="inventory"
        options={{
          title: 'Inventory',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={
                <Feather
                  name="box"
                  size={24}
                  color={focused ? '#0061ff' : '#666876'}
                />
              }
              title="Inventory"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={
                <Feather
                  name="home"
                  size={24}
                  color={focused ? '#0061ff' : '#666876'}
                />
              }
              title="Home"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={
                <Feather
                  name="user"
                  size={24}
                  color={focused ? '#0061ff' : '#666876'}
                />
              }
              title="Profile"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
