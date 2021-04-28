import React from 'react'
import { shallow } from 'enzyme'
import {findByTestAttr,checkProps} from '../test/testUtls'
import GuessedWords from './GuessedWord'

const defaultProps = {
    guessedWords: [{guessWord: 'train', letterMatchCount:3}],
}

const setup = (props={}) =>{
    const setupProps = {...defaultProps, ...props}
    return shallow(<GuessedWords {...setupProps}/>)
}

test('Does not throw warning with expected props ', () => {
checkProps(GuessedWords,defaultProps);    
})


describe('if there are no words guessed ',()=>{
let wrapper;
    beforeEach(()=>{
        wrapper = setup({guessedWords:[]})

    })

    test('should render with no error', () => {
        const component = findByTestAttr(wrapper,'component-guessed-words')
        expect(component.length).toBe(1)
    })
    
    test('should render instructions to guess a word', () => {
        const instructions=findByTestAttr(wrapper,'guess-instructions')
        expect(instructions.text().length).not.toBe(0);
    })
    
})


describe('if there are  words guessed ',()=>{
    
})