import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#BF5700',
      }}
    >
      <Tabs.Screen
        name="find"
        options={{ title: 'Find' }}
      />
      <Tabs.Screen
        name="match"
        options={{ title: 'Match' }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: 'Profile' }}
      />
    </Tabs>
  );
}
