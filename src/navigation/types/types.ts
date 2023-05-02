import { StackNavigationProp } from '@react-navigation/stack';
import { Screens } from "../consts/screens";

export type StackParamList = StackNavigationProp<{
    [Screens.FIRST]: undefined,
    [Screens.SECOND]: undefined,
}>