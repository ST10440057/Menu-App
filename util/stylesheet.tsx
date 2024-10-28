import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        marginTop: 50, 
        width:'100%',
        padding:50,
        marginLeft: 'auto', 
        marginRight: 'auto', 
        
      },
      image: {
        flex: 1,
        justifyContent: 'center',
      },
      welcomeText: {
        width:400,
        padding:50,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        backgroundColor:'#BEBEBE',
        borderRadius:10,
      },
      h2:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      button: {
        backgroundColor: '#d3d3d3',
        padding: 15,
        borderRadius: 5,
        marginVertical: 10,
        width: '80%',
        alignItems: 'center',
      },
      buttonText: {
        fontSize: 16,
      },

  
    loginContainer: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 8,
      width: '80%',
      maxWidth: 500,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    backButton: {
      alignSelf: 'flex-start',
      marginBottom: 10,
    },
    backButtonText: {
      fontSize: 24,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    inputGroup: {
      marginBottom: 15,
    },
    label: {
      marginBottom: 5,
      fontSize: 16,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      padding: 10,
      fontSize: 16,
    },
    continueButton: {
      backgroundColor: '#4a90e2',
      padding: 15,
      borderRadius: 4,
      alignItems: 'center',
    },
    continueButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    formContainer: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f0f0f0',
    },
    formTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
  
    confirmButton: {
      backgroundColor: '#e0e0e0',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 20,
      width:400,
    },
    confirmButtonText: {
      fontWeight: 'bold',
    },
    pickerContainer:{
      borderRadius:20,
      backgroundColor:'dodgerblue',
      margin:10,
      overflow:'hidden',
    },
    picker:{
      width:400,
      height: 70,
      backgroundColor: 'dodgerblue',
      borderRadius:10,
      color:'white',
      justifyContent:'center',
      textAlign:'center',
      
    },
    TextInput:{
      width:400,
      height: 70,
      backgroundColor: 'white',
      borderRadius:10,
      borderBlockColor:'dodgerblue',
      padding:10,
      margin:30,
    }
    
  });

  export default styles;