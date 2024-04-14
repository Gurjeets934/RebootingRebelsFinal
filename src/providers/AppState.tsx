import React, {ReactNode, useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import {AppData, User} from '../common/types';
import { fetchUser } from '../../api.service';

const activeUser: User = {
        id: "skdksjd",
        firstName: "Gurjeet",
        lastName: "Singh",
        gender: "Male",
        address: "Barrie , ON",
        avatarUrl: "https://gravatar.com/avatar/872bdd6da4f5ed4c6d74aa69a8c429de?s=400&d=robohash&r=x",
};


const initialAppData: AppData = {
    activeUser: activeUser, 
};

export const AppStateContext = React.createContext<AppData>(initialAppData);

const AppStateProvider: React.FC<{children: ReactNode}> = ({ children }) =>  {
    return (<AppStateContext.Provider value={initialAppData}>  {children}  </AppStateContext.Provider>);
   
};

export default AppStateProvider;


