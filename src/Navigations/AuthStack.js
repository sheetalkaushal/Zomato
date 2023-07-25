import Login from '../Screens/Login/Login';
import OTPScreen from '../Screens/OTPScreen/OTPScreen';

export default function AuthStack(Stack) {
  return (
    <>
      <Stack.Screen
        name={'Login'}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'OTPScreen'}
        component={OTPScreen}
        options={{headerShown: false}}
      />
      
    </>
  );
}
