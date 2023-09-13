import React, { useContext, useState }  from "react";
import { Box, Menu, MenuButton, Text, Link, MenuItem, MenuList, Heading, Flex, InputGroup, Input, InputRightElement, IconButton, Button, useColorModeValue } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { TbLetterK, TbLetterJ, TbLetterC } from "react-icons/tb";
import { AiOutlineDown } from "react-icons/ai";
import axios from 'axios';
import WordContext from "./WordContext";




export default function WordHeader() {
    const [query, setQuery] = useState('');

    const context = useContext(WordContext);

    if (!context) {
        throw new Error("WordHeader must be used within a WordProvider");
    }

    const { selectedIcon, setSelectedIcon, setSearchResults, wordRange, setWordRange } = context;


    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://www.themadmik.com/api/v1/search?query=${query}`);
            setSearchResults(response.data);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    const handleWordRangeChange = (start: number, end: number) => {
        setWordRange([start, end]);
        // 다른 로직 (예: 단어 목록을 다시 가져옴)이 필요하면 여기에 추가
    };

    const [selectedRange, setSelectedRange] = useState("1-100");
    const borderColorOne = useColorModeValue("gray.200", "gray.800");
    const bgColor = useColorModeValue("white", "gray.700");
    const borderBottomColor = useColorModeValue("gray.300", "gray.600");

    const MenuItemWrapper = ({ range, start, end }: { range: string, start: number, end: number }) => {
        const isSelected = selectedRange === range;
        const bgColor = isSelected ? "gray.200" : undefined;
    
        return (
            <MenuItem 
                bg={bgColor}
                _focus={{ bg: bgColor }}
                _active={{ bg: bgColor }}
                onClick={() => { handleWordRangeChange(start, end); setSelectedRange(range); }}
            >
                {range}
            </MenuItem>
        );
    }


    const iconColor = useColorModeValue("white", "gray.700");
    const lanColor = useColorModeValue("teal.100", "blue.700");
    const letteColor = useColorModeValue("black", "white");
    const searchIconColor = useColorModeValue("gray.200", "gray.600");

    return (
      <>
        <Box 
            overflow="hidden" 
            m="0 auto"  // 가운데 정렬
            w="90%"  // 너비를 90%로 설정
            mt={10}
            mb={5}
        >
            <Box w="100%" display="flex" justifyContent="center" p={4} pt={8}>
                <InputGroup w="100%" bg={iconColor}>
                <Input 
                    placeholder="Search..." 
                    value={query}
                    onChange={e => {
                        setQuery(e.target.value);
                        if (e.target.value === '') {
                            setSearchResults([]); // 검색어가 비어 있을 때 검색 결과를 초기화
                        }
                    }}
                    onKeyPress={e => e.key === 'Enter' && handleSearch()}
                />
                    <InputRightElement>
                        <IconButton 
                            aria-label="Search" 
                            icon={<FaSearch />} 
                            bg= {searchIconColor}
                            onClick={handleSearch}
                        />
                    </InputRightElement>
                </InputGroup>
              </Box>
          </Box>
          <Box 
              overflow="hidden" 
              m="0 auto"  
              w="90%"  
              mt={5}
              mb={1}
              textAlign="center"
          >
              <Box textAlign="center" mb={14}>
                <Heading fontSize="2xl">
                    {selectedIcon === 'K' ? '한국어' :
                    selectedIcon === 'J' ? '日本語' : 
                    selectedIcon === 'C' ? '汉语' : '한국어'}
                </Heading>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Flex ml={2}>
                    <IconButton
                        size="sm"
                        aria-label="Icon K"
                        icon={<TbLetterK />}
                        variant={"outline"}
                        m={1}
                        bg={selectedIcon === 'K' ? lanColor : iconColor}
                        color={selectedIcon === 'K' ? letteColor : undefined}
                        onClick={() => setSelectedIcon('K')}

                        _hover={{ bg: lanColor }}
                    />
                    <IconButton
                        size="sm"
                        aria-label="Icon J"
                        icon={<TbLetterJ />}
                        variant={"outline"}
                        m={1}
                        bg={selectedIcon === 'J' ? lanColor : iconColor}
                        color={selectedIcon === 'J' ? letteColor : undefined}
                        onClick={() => setSelectedIcon('J')}

                        _hover={{ bg: lanColor }}
                    />
                    <IconButton
                        size="sm"
                        aria-label="Icon C"
                        icon={<TbLetterC />}
                        variant={"outline"}
                        m={1}
                        bg={selectedIcon === 'C' ? lanColor : iconColor}
                        color={selectedIcon === 'C' ? letteColor : undefined}
                        onClick={() => setSelectedIcon('C')}

                        _hover={{ bg: lanColor }}
                    />
                </Flex>
                <Box mr={2}>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<AiOutlineDown />} >
                            {selectedRange}
                        </MenuButton>
                        <MenuList textAlign={"center"} >
                            <MenuItemWrapper range="1-100" start={0} end={100} />
                            <MenuItemWrapper range="101-200" start={100} end={200} />
                            <MenuItemWrapper range="201-300" start={200} end={300} />
                            <MenuItemWrapper range="301-400" start={300} end={400} />
                            <MenuItemWrapper range="401-500" start={400} end={500} />
                            <MenuItemWrapper range="501-600" start={500} end={600} />
                        </MenuList>
                    </Menu>
                </Box>
            </Box>
          </Box>
      </>
    );
  }

  