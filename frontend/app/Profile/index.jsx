import { useFonts } from "expo-font";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View, Alert, Modal, TextInput,TouchableOpacity } from "react-native";
import { useContext, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { AppContext } from '../../scripts/appContext'
import * as ImagePicker from 'expo-image-picker';


const Profile = () => {
    const { userInfo, setUserInfo } = useContext(AppContext)
    const [modalVisible, setModalVisible] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [changePasswordModalVisible, setChangePasswordModalVisible] = useState(false);
    const [image, setImage] = useState(null);
    const [showConfirmButton, setShowConfirmButton] = useState(false);

    const [fontsLoaded] = useFonts({
        Inter: require("../../assets/font/Inter.ttf"),
        "Inter-Italic": require("../../assets/font/InterBoldItalic.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    const handleBack = () => {
        router.push("/Home");
    };

    const confirmDeleteAccount = () => {
        setModalVisible(true);
    };

    const handleChangePassword = async () => {
        setChangePasswordModalVisible(false);

        try {
            const response = await fetch(`http://localhost:8000/users/changepassword`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: userInfo.username, newPassword }),
            });

            if (response.ok) {
                Alert.alert('Password changed successfully');
            } else {
                const errorData = await response.json();
                Alert.alert('Error changing password', errorData.message);
            }
        } catch (error) {
            Alert.alert('Error', 'An error occurred while trying to change the password');
        }
    };

    const handleDeleteAccount = async () => {
        setModalVisible(false);

        try {
            const response = await fetch(`http://localhost:8000/users/delete/${userInfo.username}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                Alert.alert('Account deleted successfully');
                router.push("/Register");
            } else {
                const errorData = await response.json();
                Alert.alert('Error deleting account', errorData.message);
            }
        } catch (error) {
            Alert.alert('Error', 'An error occurred while trying to delete the account');
        }
    };

    

    const handleSendImage = async() =>{
        try{
            const data={
                "file":image,
                "upload_preset":'ml_default',
                "name":'teste',
            }
            const res = await fetch('https://api.cloudinary.com/v1_1/djmxdrcmy/upload',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(data)
            })
            const result = await res.json();
            console.log(result)
            setShowConfirmButton(false)
        }
        catch(e){
            console.log(e)
        }
    }

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[4,3],
            quality:1,
        });
        if (!result.canceled) {
            console.log(result.assets[0]);
            setImage(result.assets[0].uri);
            setShowConfirmButton(true);
        }
    };


    return (
        <LinearGradient colors={["#6D8299", "#242B33"]} style={styles.background}>
            <View style={styles.navbar}>
                <Image source={require("../../assets/svg/textIcon.svg")} style={styles.logo} />
            </View>

            <View style={styles.container}>
                <Pressable onPress={handleBack}>
                    <Image source={require("../../assets/svg/close.svg")} style={styles.closeIcon} />
                </Pressable>
                <View style={styles.imageButtonWrapper}>
                    <TouchableOpacity onPress={pickImage} style={styles.imageButton}>
                        <Image source={require("../../assets/svg/upload.svg")} style={styles.uploadIcon} />
                    </TouchableOpacity>

                    {image && (
                        <>
                            <Image
                                source={{ uri: image }}
                                style={styles.selectedImage}
                            />
                            {showConfirmButton && (
                                <TouchableOpacity style={styles.confirmButton} onPress={handleSendImage}>
                                    <Text style={styles.confirmButtonText}>Confirmar</Text>
                                </TouchableOpacity>
                            )}
                        </>
                    )}
                </View>
                <View style={styles.usernameContainer}>
                    <Text style={styles.username}>{userInfo.username || "Loading..."}</Text>
                </View>
                <Text style={styles.planTop}>Click on the plan of your choice</Text>
                <View style={styles.plansContainer}>
                    <Pressable style={styles.planBox}>
                        <Text style={styles.planTitle}>Basic+</Text>
                        <Text style={styles.planPromo}><Text style={styles.planText}>R$20,00</Text> R$0,10</Text>
                    </Pressable>
                    <Pressable style={styles.planBox}>
                        <Text style={styles.planTitle}>Premium</Text>
                        <Text style={styles.planPromo}><Text style={styles.planText}>R$59,00</Text> R$1,00</Text>
                    </Pressable>
                </View>
                <Pressable style={styles.editButton} onPress={() => setChangePasswordModalVisible(true)}>
                    <Text style={styles.edit}>Change your password here.</Text>
                </Pressable>
                <Pressable style={styles.deleteButton} onPress={confirmDeleteAccount}>
                    <Text style={styles.deleteButtonText}>Delete Account</Text>
                </Pressable>
            </View>
            <Modal
                transparent={true}
                visible={changePasswordModalVisible}
                animationType="fade"
                onRequestClose={() => setChangePasswordModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Enter new password:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="New Password"
                            value={newPassword}
                            onChangeText={setNewPassword}
                            secureTextEntry
                        />
                        <View style={styles.buttonContainer}>
                            <Pressable style={styles.modalButtonCancel} onPress={() => setChangePasswordModalVisible(false)}>
                                <Text style={styles.modalButtonText}>Cancel</Text>
                            </Pressable>
                            <Pressable style={styles.modalButton} onPress={handleChangePassword}>
                                <Text style={styles.modalButtonText}>New Password</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                transparent={true}
                visible={modalVisible}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Do you want to delete your account?</Text>

                        <View style={styles.buttonContainer}>
                            <Pressable style={styles.modalButton} onPress={handleDeleteAccount}>
                                <Text style={styles.modalButtonText}>Yes</Text>
                            </Pressable>
                            <Pressable style={styles.modalButton} onPress={() => setModalVisible(false)}>
                                <Text style={styles.modalButtonText}>No</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: '100%',
        height: 40,
        borderColor: "#6D8299",
        borderWidth: 2,
        borderRadius: 4,
        color: "#6D8299",
        fontWeight: "bold",
        paddingHorizontal: 10,
        textAlign: "left",
        borderRadius: 10,
    },
    navbar: {
        position: "absolute",
        top: 15,
        left: 20,
        right: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logo: {
        width: 140,
        height: 40,
        resizeMode: "contain",
    },
    selectedImage: {
        position: 'absolute', 
        width: 92,
        height: 92, 
        borderRadius: 100,
        resizeMode: 'cover', 
    },
    imageButtonWrapper: {
        position: 'relative',  
        width: 92,  
        height: 92, 
    },
    closeIcon: {
        width: 34,
        height: 34,
        marginLeft: 250,
    },
    container: {
        backgroundColor: "#B4C6D7",
        borderRadius: 36,
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
        alignSelf: "center",
        height: 511,
        width: 328,
    },
    uploadContainer: {
        marginBottom: 10,
    },
    uploadIcon: {
        width: 92,
        height: 92,
    },
    confirmButton: {
        backgroundColor: "#242B33",
        borderRadius: 5,
        alignItems: "center",
        height:20,
        width:90,
        marginTop:75,
        position:'absolute'
    },
    confirmButtonText: {
        color: "#B4C6D7",
        fontWeight: "bold",
    },
    usernameContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    username: {
        fontSize: 32,
        color: "#242B33",
        fontFamily: "Inter",
        fontWeight: "800",
    },
    edit: {
        color: "#242B33",
        fontWeight: "bold",
        padding: 5,
        textDecorationLine: "underline"
    },
    planTop: {
        fontSize: 16,
        color: "#242B33",
        marginBottom: 20,
    },
    planText: {
        textDecorationLine: "line-through",
        color: "#B4C6D7",
        fontSize: 12,
    },
    plansContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 10,
    },
    planBox: {
        backgroundColor: "#6D8299",
        padding: 15,
        borderRadius: 23,
        width: 123,
        height: 150,
        alignItems: "center",
    },
    planTitle: {
        color: "#FFFFFF",
        fontWeight: "bold",
        marginBottom: 5,
    },
    planPromo: {
        color: "#FFFFFF",
        fontSize: 20,
    },
    deleteButton: {
        marginTop: 10,
        marginBottom: 10,
        width: 200,
        height: 50,
        backgroundColor: "#4B3232",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
    },
    deleteButtonText: {
        color: "#B4C6D7",
        fontWeight: "bold",
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        width: 300,
        padding: 20,
        backgroundColor: "#B4C6D7",
        borderRadius: 10,
        alignItems: "center",
    },
    modalTitle: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 20,
        color: "#242B33",
        fontWeight: "bold",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: '100%'
    },
    modalButton: {
        flex: 1,
        margin: 3,
        paddingVertical: 10,
        backgroundColor: "#242B33",
        borderRadius: 5,
        alignItems: "center",
    },
    modalButtonCancel: {
        flex: 1,
        margin: 3,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: "center",
        backgroundColor: "#4B3232",
    },
    modalButtonText: {
        color: "#B4C6D7",
        fontWeight: "bold",
    },
});

export default Profile;
