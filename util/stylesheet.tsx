import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get('window');

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
        marginTop:20,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        backgroundColor:'#BEBEBE',
        borderRadius:10,
        alignSelf: 'center',
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
    },
    flatListContent: {
      padding: 16,
      paddingBottom: 24,
    },
    headerContainer: {
      marginBottom: 16,
    },

    dishItem: {
      backgroundColor: 'white',
      padding: 16,
      marginVertical: 8,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    dishText: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    dishDescription: {
      fontSize: 14,
      color: '#666',
      marginBottom: 4,
    },
    dishPrice: {
      fontSize: 16,
      color: '#2ecc71',
      fontWeight: 'bold',
    },
    footerContainer: {
      marginTop: 16,
      paddingTop: 16,
      borderTopWidth: 1,
      borderTopColor: '#e1e1e1',
    },
    totalText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'right',
      color: '#2ecc71',
    },
    emptyListContainer: {
      padding: 32,
      alignItems: 'center',
    },
    emptyListText: {
      fontSize: 16,
      color: '#666',
      textAlign: 'center',
    },
    safeArea: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    keyboardAvoidingView: {
      flex: 1,
    },
    deleteButton: {
      backgroundColor: '#ff4444',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      marginVertical: 10,
    },
    deleteButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
  
    editContainer: {
      padding: 15,
      backgroundColor: '#fff',
      borderRadius: 10,
      marginTop: 20,
      borderWidth: 1,
      borderColor: '#ddd',
    },  
    list: {
      flex: 1,
      width: '100%',
    },
    
  editScreenSafeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  editScreenKeyboardAvoid: {
    flex: 1,
  },
  menuItemListEntry: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#f8f8f8',
  },
  dishEditFormContainer: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 10,
    justifyContent:'center',
    alignContent: 'center'
  },
  editFormLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: '#333',
  },
  coursePickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  coursePickerStyle: {
    height: 50,
    width: '100%',
  },
  dishInputField: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  saveChangesButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  saveChangesButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  deleteDishButton: {
    backgroundColor: '#f44336',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  deleteDishButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  menuItemsList: {
    flex: 1,
  },
  menuItemsListContent: {
    paddingBottom: 20,
  },
  editScreenHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#2c3e50',
    paddingHorizontal: 10,
  },
  // Additional specific styles
  customerPickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  dishDescriptionInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  dishPriceInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
    width: '50%',
  },
  });

  export default styles;