import React, { useState } from "react";
import { Alert, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TodoApp() {
    const [tasks, setTasks] = useState([]); // Danh sách các task
    const [newTask, setNewTask] = useState(""); // Task mới
    const [editingTaskIndex, setEditingTaskIndex] = useState(null); // Index của task đang được chỉnh sửa
    const [editingTaskContent, setEditingTaskContent] = useState(""); // Nội dung của task đang được chỉnh sửa

    // Hàm xử lý khi nhấn nút "Add Task"
    const handleAddTask = () => {
        if (newTask.trim() !== "") { // Kiểm tra xem có dữ liệu trong TextInput không
            setTasks([...tasks, newTask]); // Thêm task mới vào danh sách
            setNewTask(""); // Đặt lại giá trị của TextInput thành rỗng
        }
    };

    // Hàm xử lý khi nhấn nút "Xóa Task"
    const handleDeleteTask = (index) => {
        Alert.alert(
            "Confirm",
            "Are you sure you want to delete this task?",
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Delete",
                    onPress: () => {
                        const updatedTasks = [...tasks];
                        updatedTasks.splice(index, 1); // Xóa task khỏi mảng
                        setTasks(updatedTasks); // Cập nhật danh sách task
                    },
                    style: "destructive",
                },
            ],
            { cancelable: false }
        );
    };

    // Hàm xử lý khi nhấn nút "Sửa Task"
    const handleEditTask = (index) => {
        // Set index của task đang được chỉnh sửa
        setEditingTaskIndex(index);
        // Set nội dung của task đang được chỉnh sửa
        setEditingTaskContent(tasks[index]);
    };

    // Hàm xử lý khi nhấn nút "Lưu Task"
    const handleSaveTask = () => {
        const updatedTasks = [...tasks];
        updatedTasks[editingTaskIndex] = editingTaskContent; // Cập nhật nội dung của task
        setTasks(updatedTasks); // Cập nhật danh sách task
        setEditingTaskIndex(null); // Đặt lại index của task đang được chỉnh sửa
        setEditingTaskContent(""); // Đặt lại nội dung của task đang được chỉnh sửa
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#9370db" }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View
                    style={{
                        alignItems: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        paddingBottom: 30,
                        paddingHorizontal: 20,
                        borderRadius: 10,
                        width: "80%",
                        height: "50%",
                    }}
                >
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 18, marginVertical: 15 }}>Get Things Done!</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 10, marginTop: 14 }}>
                        <TextInput
                            style={{
                                flex: 1,
                                backgroundColor: "rgba(0, 0, 0, 0.8)",
                                borderWidth: 1,
                                borderColor: "#9370db",
                                borderRadius: 10,
                                paddingHorizontal: 15,
                                paddingVertical: 12,
                                fontSize: 14,
                                paddingLeft: 10,
                                color: "white",
                            }}
                            placeholder="What is the task today?"
                            value={newTask}
                            onChangeText={(text) => setNewTask(text)}
                        />
                        <TouchableOpacity
                            onPress={handleAddTask}
                            style={{
                                backgroundColor: "#9370db",
                                borderRadius: 1,
                                width: 100,
                                height: 38,
                                justifyContent: "center",
                                alignItems: "center",
                                marginLeft: 10,
                            }}
                        >
                            <Text style={{ color: "white", fontSize: 17 }}>Add Task</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{ marginTop: 20, width: "100%" }}>
                        {tasks.map((task, index) => (
                            <View key={index} style={{
                                flexDirection: "row", alignItems:
                                    "center", backgroundColor: "#9370db", padding: 10, borderRadius: 8, marginBottom: 10
                            }}>
                                {index === editingTaskIndex ? (
                                    <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
                                        <TextInput
                                            style={{
                                                flex: 1,
                                                backgroundColor: "rgba(0, 0, 0, 0.8)",
                                                borderWidth: 1,
                                                borderColor: "#9370db",
                                                borderRadius: 10,
                                                paddingHorizontal: 15,
                                                paddingVertical: 12,
                                                fontSize: 14,
                                                paddingLeft: 10,
                                                color: "white",
                                            }}
                                            placeholder="Edit task"
                                            value={editingTaskContent}
                                            onChangeText={(text) => setEditingTaskContent(text)} // Cập nhật nội dung của task đang chỉnh sửa
                                        />
                                        <TouchableOpacity
                                            onPress={handleSaveTask} // Gọi hàm handleSaveTask khi nhấn nút "Save"
                                            style={{
                                                backgroundColor: "#9370db",
                                                borderRadius: 1,
                                                width: 70,
                                                height: 38,
                                                justifyContent: "center",
                                                alignItems: "center",
                                                marginLeft: 10,
                                            }}
                                        >
                                            <Text style={{ color: "white", fontSize: 16 }}>Save</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => {
                                                setEditingTaskIndex(null); // Hủy chỉnh sửa task
                                                setEditingTaskContent(""); // Đặt lại nội dung chỉnh sửa
                                            }}
                                            style={{
                                                backgroundColor: "#9370db",
                                                borderRadius: 1,
                                                width: 70,
                                                height: 38,
                                                justifyContent: "center",
                                                alignItems: "center",
                                                marginLeft: 10,
                                            }}
                                        >
                                            <Text style={{ color: "white", fontSize: 16 }}>Cancel</Text>
                                        </TouchableOpacity>
                                    </View>
                                ) : (
                                    <>
                                        <Text style={{ color: "white", fontSize: 17, flex: 1 }}>{task}</Text>
                                        <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => handleEditTask(index)}>
                                            <Ionicons name="create" size={24} color="white" />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => handleDeleteTask(index)}>
                                            <Ionicons name="trash" size={24} color="white" />
                                        </TouchableOpacity>
                                    </>
                                )}
                            </View>
                        ))}
                    </ScrollView>

                </View>
            </View>
        </SafeAreaView>
    );
}
