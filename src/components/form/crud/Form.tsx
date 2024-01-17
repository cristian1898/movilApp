import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Button, TextInput, Title } from 'react-native-paper';
import { formInputs } from '../../../utils/const.form';
import { Picker } from '@react-native-picker/picker';
import { ValidFiles } from '../../../interfaces/globalInterface';

interface FormData {
  [key: string]: string | number;
}

const Formulario = ({
  formData,
  onChange,
  onSubmit,
}: {
  formData: FormData | any;
  onChange: (field: string, value: string | number) => void;
  onSubmit: () => void;
}) => {
 
  const renderFormFields = (data: FormData) => {
    return Object.keys(data).map((field, index) => {
        const opcionesAutor = ['Autor1', 'Autor2', 'Autor3']; // Puedes reemplazar con tus datos reales
        const opcionesSelect = opcionesAutor.map((autor, i) => (
          <Picker.Item key={i} label={autor} value={autor} />
        ));

      if (field !== ValidFiles.ID && field !== ValidFiles.CREATED) {
        return (
            field === ValidFiles.AUTHOR ? <View key={index} style={styles.inputContainer}>
            <Text style={styles.label}>{field}</Text>
            <Picker
              selectedValue={data[field]}
              style={styles.picker}
              onValueChange={(value) => onChange(field, value as string)}
            >
              {opcionesSelect}
            </Picker>
          </View>:
          <TextInput
            key={index}
            style={styles.input}
            mode='outlined' 
            label={ formInputs[field] }
            value={data[field] ? data[field].toString() : ''}
            onChangeText={(text) => onChange(field, text)}
          >
     
          </TextInput > 

             );
      }

      return null;     });
  };
   const areAllFieldsFilled = () => {
    
    const requiredFields = Object.keys(formData).filter(
      (field) => formData[field].toString().trim() === '' && field !== "id"
    );
    return requiredFields.length === 0;
  };
const handleSubmit = () => {

    if (areAllFieldsFilled()) {
 
      onSubmit();
    } else {
    
      console.log('Por favor, complete todos los campos obligatorios.');
    }
  };
  return (
      <ScrollView contentContainerStyle={styles.scrollContainer} nestedScrollEnabled={false}  >
      <View style={styles.formContainer}>
      <Title style={styles.titleText}>
      {
      formData.id ? 'Actualizar' : 'Crear'
      }

      </Title>
        {renderFormFields(formData)}
  
        <Button mode="contained" onPress={handleSubmit} style={styles.button} >
         {
      formData.id ? 'Enviar' : 'Guardar'
      }
        </Button>

   
      </View>
   </ScrollView>
  );
};

const styles = StyleSheet.create({
scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    elevation: 3,

 
  },
  input: {
     height: 40,
    
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,

  },
  button: {
    marginTop: 16,
    background:'#000',
  height: 50, 
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10
  },
    picker: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
   inputContainer: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,

  },
  label: {
    marginBottom: 8,
  },
});

export default Formulario;

