import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  },

  form: {
    alignItems: "center",   
    padding: 20,
    backgroundColor: "#00008B",
    borderRadius: 10,
    margin: 10
  },

  formHeader: {
    textAlign: "center",
    fontSize: 45,
    color: "white",
    fontFamily: 'Calibri'
  },

  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 5,
    marginVertical:10,
    backgroundColor: "grey"
  },

  pickerInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 5,
    width: 100,
    marginVertical:10,
    backgroundColor: "purple"
  },


  menuDisplaybox: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    borderWidth: 1,
    marginTop: 10,
    marginHorizontal: 10        ,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3
  },
  
  textMainHeader: {
    fontFamily: 'Calibri',
    textAlign: "center",
    fontSize: 30
  },

  textHeader:{
    fontFamily: 'Arial',  
    color: 'white',
    textAlign: "center",
    fontSize: 18  
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    width: 90,
    height: 45,
    marginBottom: 10
  },

  menuImage: {
    width: 200,
    height: 200, 
    resizeMode:'cover',
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: '#000  ',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5    
  },

  textContent: {
    fontFamily: 'Times New Roman',
    color: 'white',   
  }
});

export default styles;  