import { useFonts } from "expo-font";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View, Alert, Modal } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

const Profile = () => {
    const [fontsLoaded] = useFonts({
        Inter: require("../../assets/font/Inter.ttf"),
        "Inter-Italic": require("../../assets/font/InterBoldItalic.ttf"),
    });

    const [modalVisible, setModalVisible] = useState(false);

    if (!fontsLoaded) {
        return null;
    }

    const handleBack = () => {
        router.push("/Home");
    };

    const confirmDeleteAccount = () => {
        setModalVisible(true);
    };

    const handleDeleteAccount = async () => {
        setModalVisible(false);

        try {
            const response = await fetch(`http://localhost:8000/users/delete/${username}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                Alert.alert('Account deleted successfully');
                router.push("/register");
            } else {
                const errorData = await response.json();
                Alert.alert('Error deleting account', errorData.message);
            }
        } catch (error) {
            Alert.alert('Error', 'An error occurred while trying to delete the account');
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
                <Pressable style={styles.uploadContainer}>
                    <Image source={require("../../assets/svg/upload.svg")} style={styles.uploadIcon} />
                </Pressable>

                <Text style={styles.username}>Username</Text>

                <Text style={styles.planTop}>Click on the plan of your choice</Text>

                <View style={styles.plansContainer}>
                    <Pressable style={styles.planBox}>
                        <Text style={styles.planTitle}>Basic+</Text>
                        <Text style={styles.planPromo}><Text style={styles.planText}>R$20,00</Text>  R$0,10</Text>
                    </Pressable>
                    <Pressable style={styles.planBox}>
                        <Text style={styles.planTitle}>Premium</Text>
                        <Text style={styles.planPromo}><Text style={styles.planText}>R$59,00</Text>  R$1,00</Text>
                    </Pressable>
                </View>

                <Pressable style={styles.deleteButton} onPress={confirmDeleteAccount}>
                    <Text style={styles.deleteButtonText}>Delete Account</Text>
                </Pressable>
            </View>

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
    closeIcon: {
        width: 34,
        height: 34,
        marginLeft: 250,
        marginBottom: 1,
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
        width: 82,
        height: 82,
    },
    username: {
        fontSize: 32,
        color: "#242B33",
        fontFamily: "Inter",
        fontWeight: "800",
        marginBottom: 10,
    },
    planTop: {
        fontSize: 16,
        color: "#242B33",
        marginBottom: 20,
    },
    planText: {
        textDecorationLine:"line-through",
        color:"#B4C6D7",
        fontSize:12
    },
    plansContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
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
        marginTop: 20,
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
        color: "#242B33",
        fontSize: 18,
        textAlign: "center",
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    modalButton: {
        flex: 1,
        marginHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "#242B33",
        borderRadius: 5,
        alignItems: "center",
    },
    modalButtonText: {
        color: "#B4C6D7",
        fontWeight: "bold",
    },
});

export default Profile;
