import React, {useState} from 'react';

import {View} from 'react-native';
import {AuthorInterface} from '../../../interfaces/author';
import {BookInterface} from '../../../interfaces/book';
import {authorModel} from '../../../models/autor';
import {bookModel} from '../../../models/book';
import Formulario from './Form';
import styles from './styles';

const CreateUpdateComponente = () => {
  const authorBase = new authorModel();
  const bookBase = new bookModel();
  const [author, setAuthor] = useState<AuthorInterface>(authorBase);

  const [book, setBook] = useState<BookInterface>(bookBase);

  const handleAuthorChange = (field: keyof AuthorInterface, value: string) => {
    setAuthor({...author, [field]: value});
  };

  const handleBookChange = (
    field: keyof BookInterface,
    value: string | number,
  ) => {
    setBook({...book, [field]: value});
  };

  const handleAuthorSubmit = () => {
    // Lógica para enviar datos de autor
    console.log('Enviando datos de autor:', author);
  };

  const handleBookSubmit = () => {
    // Lógica para enviar datos de libro
    console.log('Enviando datos de libro:', book);
  };
   // <Formulario
   //      formData={author}
   //      onChange={handleAuthorChange}
   //      onSubmit={handleAuthorSubmit}
   //    />
  return (
    <View style={styles.container}>
      <Formulario
         formData={book}
         onChange={handleBookChange}
         onSubmit={handleBookSubmit}
       />
     
    </View>
  );
};

export default CreateUpdateComponente;
