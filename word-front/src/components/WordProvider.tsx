
import React, { useState, ReactNode } from 'react';
import WordContext from './WordContext';
import { WordData } from './type'; 

interface WordProviderProps {
    children: ReactNode;
}

export default function WordProvider({ children }: WordProviderProps) {
    const [selectedIcon, setSelectedIcon] = useState<string | null>('K');
    const [searchResults, setSearchResults] = useState<WordData[]>([]);  // 이 줄 추가

    const [wordRange, setWordRange] = useState<[number, number]>([0, 100]);

    return (
        <WordContext.Provider value={{ selectedIcon, setSelectedIcon, searchResults, setSearchResults, wordRange, setWordRange }}>
            {children}
        </WordContext.Provider>
    );
}
    
