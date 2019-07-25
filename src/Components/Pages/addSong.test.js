import React from 'react';
import AddSong from './addSong';
import {shallow} from 'enzyme';
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('addSong', () => {
let wrapper;
beforeEach(()=> {
wrapper = shallow(
        <AddSong />
    )
})


it('render the add song component', () => {
    expect(wrapper).toMatchSnapshot();
});
it('Button exists',()=> {
    //wrapper.find('button').at(1).simulate('click');
    expect(wrapper.find('#addSong')).toBeDefined();
})



})