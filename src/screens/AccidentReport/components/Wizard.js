import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const WizardSection = ({ children }) => {
  return <View style={styles.sectionContainer}>{children}</View>;
};

const FormWizard = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
 

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    console.log("got to next")
    setCurrentPage(currentPage + 1);
  };
 



  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
      <Button title="Next" onPress={goToNextPage} disabled={currentPage > (children.length -1) && true} />
          <View style={{flexDirection:'row-reverse'}}> 
            {
                children.map((child, index) => {
                    return(
                        <View key ={parseInt(index)} style={{width:10,height:10, borderWidth:1, borderRadius:100,backgroundColor: index === currentPage ? 'blue' :'gray'}}></View>
                    )
            })
        }
          </View>
          
          <Button style={styles.button} title="Previous" onPress={goToPreviousPage} disabled={currentPage < 1 && true} />
      </View>
      <View style={styles.sectionContainer}>{children[currentPage]}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    marginBottom: 16,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
   
  },
  button:{
    borderWidth:1,
    backgroundColor:'black'
  }
});

export { FormWizard, WizardSection };
