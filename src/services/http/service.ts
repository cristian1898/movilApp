import { API_URL } from '@env';
import { Method, ResponseMethod } from '../../interfaces/globalInterface';
import axios, { AxiosRequestConfig } from 'axios';
import { AppAction, useAppContext } from '../../context/AppContext';
import { Dispatch } from 'react';

const API_BASE_URL = API_URL;
const handleErrors = async (
  data: ResponseMethod,
  dispatch: Dispatch<AppAction>,
  status?: number,
  active?: boolean,
) => {
  if (!status || status >= 400) {
    dispatch({
      type: 'SET_ALERT',
      payload: { action: 'error', message: data.message },
    });
    return data;
  }
  if (!active) {
    dispatch({
      type: 'SET_ALERT',
      payload: { action: 'success', message: data.message },
    });
  }

  return data;
};

const performCrudOperation = async <T>(
  url: string,
  method: string,
  dispatch: Dispatch<AppAction>,
  info?: T,
) => {
  try {
    const headers: AxiosRequestConfig<any> = {
      headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      },
    };
    if (method === Method.GET) {
      const { data, status } = await axios.get(`${API_BASE_URL}/${url}`, headers);

      return await handleErrors(data, dispatch, status, true);
    }
    if (method === Method.POST) {
      const { data, status } = await axios.post(
        `${API_BASE_URL}/${url}`,
        info,
        headers,
      );

      return await handleErrors({ ...data, status }, dispatch, status);
    }
    if (method === Method.PUT) {
      const { data, status } = await axios.put(
        `${API_BASE_URL}/${url}`,
        info,
        headers,
      );

      return await handleErrors({ ...data, status }, dispatch, status);
    }

    if (method === Method.DELETE) {
      const { data, status } = await axios.delete(
        `${API_BASE_URL}${url}`,
        headers,
      );
      return await handleErrors({ ...data, status }, dispatch, status);
    }
  } catch (error) {
    return await handleErrors(
      {
        status: 500,
        message: 'Error email o name incorrectos / Internal Server Error',
      },
      dispatch,
      500,
    );
  }
};

const listOne = async (url: string, dispatch: Dispatch<AppAction>) => {
  return performCrudOperation(url, Method.GET, dispatch);
};
const listData = async (url: string, dispatch: Dispatch<AppAction>) => {
  return await performCrudOperation(url, Method.GET, dispatch);
};

const createData = async <T>(
  url: string,
  newData: T,
  dispatch: Dispatch<AppAction>,
) => {
  const createdData = await performCrudOperation(
    url,
    Method.POST,
    dispatch,
    newData,
  );
  return createdData;
};

const updateData = async <T>(
  url: string,
  updatedData: T,
  dispatch: Dispatch<AppAction>,
) => {
  const updatedDataResponse = await performCrudOperation(
    url,
    Method.PUT,
    dispatch,
    updatedData,
  );
  return updatedDataResponse;
};

const deleteData = async (url: string, dispatch: Dispatch<AppAction>) => {
  const deletedDataResponse = await performCrudOperation(
    url,
    Method.DELETE,
    dispatch,
  );
  return deletedDataResponse;
};
const HttpService = { deleteData, updateData, createData, listData, listOne };
export default HttpService;
