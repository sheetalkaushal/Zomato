import Login from '../Screens/Login/Login';
import OTPScreen from '../Screens/OTPScreen/OTPScreen';
import Signup from '../Screens/Signup/Signup';

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
      <Stack.Screen
        name={'Signup'}
        component={Signup}
        options={{headerShown: false}}
      />
    </>
  );
}
