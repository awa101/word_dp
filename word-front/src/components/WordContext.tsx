import React from 'react';
import { WordData } from '../components/type'; 


const defaultContextValue: WordContextType = {
    selectedIcon: null,
    setSelectedIcon: () => {},
    searchResults: [],
    setSearchResults: () => {},
    wordRange: [0, 100], 
    setWordRange: () => {}  
};

const WordContext = React.createContext<WordContextType>(defaultContextValue);



export interface WordContextType {
    selectedIcon: string | null;
    setSelectedIcon: React.Dispatch<React.SetStateAction<string | null>>;
    searchResults: WordData[];  
    setSearchResults: React.Dispatch<React.SetStateAction<WordData[]>>;  
    wordRange: [number, number];
    setWordRange: React.Dispatch<React.SetStateAction<[number, number]>>;
}


export default WordContext;