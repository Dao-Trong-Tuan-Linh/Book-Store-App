import React from "react";
import { Alert } from "react-native";

interface ShowAlertProps {
    title:string,
    message:string
}
export default function ShowAlert({title,message}:ShowAlertProps) {
  return Alert.alert(`${title}`, `${message}`, [
    {
      text: "OK",
    },
  ]);
}
