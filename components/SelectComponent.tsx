import React from 'react'
import RNPickerSelect from "react-native-picker-select";

interface SelectComponentProps {
    selectedValue:string | null,
    setSelectedValue:(value: string | null) => void,
    items:{label:string,value:string}[],
    label:string
}
export default function SelectComponent({selectedValue,setSelectedValue,items,label}:SelectComponentProps) {
  return (
    <RNPickerSelect
              value={selectedValue}
                style={{
                  inputIOS: {
                    fontSize: 16,
                    paddingVertical: 12,
                    paddingHorizontal: 10,
                    borderWidth: 1,
                    borderColor: "gray",
                    borderRadius: 4,
                    color: "black",
                    paddingRight: 30, 
                  },
                  inputAndroid: {
                    fontSize: 16,
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                    borderWidth: 0.5,
                    borderColor: "purple",
                    borderRadius: 8,
                    color: "black",
                    paddingRight: 30, 
                  },
                }}
                onValueChange={(value) => setSelectedValue(value)}
                items={items}
                placeholder={{ label: label, value: null }}

              />
  )
}
