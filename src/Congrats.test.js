import {shallow} from 'enzyme';
import Congrats from './Congrats';
import {findByTestAttr, checkProps} from '../test/testUtls';
const defaultProps={success:true} 


const setup = (props={})=>{
    const setupProps={...defaultProps, ...props}
    return shallow(<Congrats {...setupProps}/>)
}   


test('should render without error', () => {
    const wrapper = setup({success:true});
    const component = findByTestAttr(wrapper,'component-congrats')
    expect(component.length).toBe(1)
})

test('renders no text when `success` props is false ', () => {
    const wrapper = setup({success: false})
    const component=findByTestAttr(wrapper,"component-congrats")
    expect(component.text()).toBe('');
})


test('renders a non-empty congrats message when `success` props is true ', () => {
    const wrapper = setup({success:true})
    const message = findByTestAttr(wrapper,'congrats-message')
    expect(message.text().length).not.toBe(0);
})


test('should not throw a warning with expected props ', () => {
    const expectedProps = {success:false}
    checkProps(Congrats,expectedProps)
})
