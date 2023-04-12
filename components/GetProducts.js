import React,{ useEffect, useState }  from 'react';
import { View, Text, StyleSheet,} from 'react-native';
import axios from "axios";
 
export default function GetProducts({setData, strFind}) {
 
    const headers = new Headers({
      "Content-Type": "application/json",
    });
    const config = {
      headers,
    };

    const apiUrl = "http://vitarttuva.temp.swtest.ru/Obmen/Mobile";
    const data = { mobile: strFind };

    axios
      .post(apiUrl, data, config)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        setData(error);
      });

    return (true);
};
 
