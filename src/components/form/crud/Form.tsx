import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Button, TextInput, Title } from 'react-native-paper';
import { formInputs } from '../../../utils/const.form';
import { Picker } from '@react-native-picker/picker';
import {
  StaticsResponses,
  ValidFiles,
} from '../../../interfaces/globalInterface';
import { useAppContext } from '../../../context/AppContext';
import { AuthorInterface } from '../../../interfaces/author';

interface FormData {
  [key: string]: string | number;
}

const Formulario = ({
  formData,
  onChange,
  onSubmit,
  type,
}: {
  formData: FormData | any;
  onChange: (field: string, value: string | number) => void;
  onSubmit: () => void;
  type: string;
}) => {
  const { state, dispatch } = useAppContext();
  const [listAuthors, setListAuthors] = React.useState<
    Partial<AuthorInterface>[]
  >([]);
  const renderFormFields = (data: FormData) => {
    return Object.keys(data).map((field, index) => {
      const opcionesSelect = listAuthors.map((autor, i) => (
        <Picker.Item key={i} label={autor.name} value={autor.id} />
      ));

      if (field !== ValidFiles.ID && field !== ValidFiles.CREATED) {
        return field === ValidFiles.AUTHOR ? (
          <View key={index} style={styles.inputContainer}>
            <Text style={styles.label}>{field}</Text>
            <Picker
              selectedValue={data[field]}
              style={styles.picker}
              onValueChange={value => onChange(field, value as string)}>
              {opcionesSelect}
            </Picker>
          </View>
        ) : (
          <TextInput
            key={index}
            style={styles.input}
            mode="flat"
            label={formInputs[field]}
            value={data[field] ? data[field].toString() : ''}
            onChangeText={text => onChange(field, text)}></TextInput>
        );
      }

      return null;
    });
  };
  const areAllFieldsFilled = () => {
    delete formData.createdAt;
    const requiredFields = Object.keys(formData).filter(
      field => formData[field].toString().trim() === '' && field !== 'id',
    );

    return requiredFields.length === 0;
  };
  const handleSubmit = () => {
    if (areAllFieldsFilled()) {
      onSubmit();
    } else {
      dispatch({
        type: 'SET_ALERT',
        payload: { action: 'error', message: StaticsResponses.ERROR_FORM },
      });
    }
  };

  useEffect(() => {
    state.listAuthors && setListAuthors(state.listAuthors);
  }, [state.listAuthors]);
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      nestedScrollEnabled={false}>
      <View style={styles.formContainer}>
        <Title style={styles.titleText}>
          {formData.id ? `Actualizar el ${type}` : `Crear un nuevo ${type}`}
        </Title>
        {renderFormFields(formData)}

        <Button mode="contained" onPress={handleSubmit} style={styles.button}>
          {formData.id ? 'Enviar' : 'Guardar'}
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
    padding: 8,
    elevation: 3,
  },
  input: {
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    paddingHorizontal: 0,
  },
  button: {
    marginTop: 16,
    background: '#000',
    height: 50,
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
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
