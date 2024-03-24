import type {NativeStackScreenProps} from "@react-navigation/native-stack"

export type RootStackParamList ={
    Account:undefined,
    Login:undefined,
    Register:undefined
}

export type AccountScreenProps = NativeStackScreenProps<RootStackParamList,"Account">
export type LoginScreenProps = NativeStackScreenProps<RootStackParamList,"Login">
export type RegisterScreenProps = NativeStackScreenProps<RootStackParamList,"Register">

