import React, { useEffect, useState } from 'react';

import { View } from 'react-native';
import { AuthorInterface } from '../../../interfaces/author';
import { BookInterface } from '../../../interfaces/book';
import { authorModel } from '../../../models/autor';
import { bookModel } from '../../../models/book';
import Formulario from './Form';
import styles from './styles';
import { ACTIONS, ValidPrintForm } from '../../../interfaces/globalInterface';
import { useAppContext } from '../../../context/AppContext';
import HttpService from '../../../services/http/service';

const CreateUpdateComponente = ({ type }: { type: string }) => {
  const authorBase = new authorModel();
  const bookBase = new bookModel();
  const { state, dispatch } = useAppContext();
  const [author, setAuthor] = useState<AuthorInterface>(authorBase);

  const [book, setBook] = useState<BookInterface>(bookBase);

  const handleAuthorChange = (field: keyof AuthorInterface, value: string) => {
    setAuthor({ ...author, [field]: value });
  };

  const handleBookChange = (
    field: keyof BookInterface,
    value: string | number,
  ) => {
    setBook({ ...book, [field]: value });
  };

  const handleSubmit = async () => {
    const isBook = type === ValidPrintForm.AUTHOR ? false : true;
    // Lógica para enviar datos de libro
    let dataSend = !isBook ? author : book;
    const idSend = !isBook ? author.id : book.id;
    const response = idSend
      ? await HttpService.updateData(`${type}/${idSend}`, dataSend, dispatch)
      : await HttpService.createData(`${type}`, dataSend, dispatch);

    if (response?.status && response?.status <= 400) {
      dispatch({
        type: 'SET_AUTHOR',
        payload: { author: null },
      });
      dispatch({
        type: 'SET_BOOK',
        payload: { book: null },
      });
      dispatch({
        type: 'SET_VIEW',
        payload: { type: ACTIONS.LIST },
      });
    }
  };

  useEffect(() => {
    if (state.author?.id) {
      setAuthor(state.author);
    }
    if (state.book?.id) {
      setBook(state.book);
    }
  }, [state.author?.id, state.book?.id]);
  return (
    <View style={styles.container}>
      {type === ValidPrintForm.AUTHOR ? (
        <Formulario
          formData={author}
          onChange={handleAuthorChange}
          onSubmit={handleSubmit}
          type={'autor'}
          id={author?.id}
        />
      ) : (
        <Formulario
          formData={book}
          onChange={handleBookChange}
          onSubmit={handleSubmit}
          type={'libro'}
          id={book?.id}
        />
      )}
    </View>
  );
};

export default CreateUpdateComponente;
