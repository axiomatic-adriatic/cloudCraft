import React from 'react';
import CompleteTask from './completeTask.js';
import {shallow} from 'enzyme';

describe('Testing Complete Task Component', () => {
  test('Form should be available to allow users to sort', () => {
    const task = {
      completed: 0,
      datetime: "2021-12-24T23:06:17.000Z",
      message_id: 7,
      sender: {sender_id: 4, sender_name: "Frankie"},
      task_id: 4,
      task_text: "Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi",
      user_id: 2,
    };
    const wrapper = shallow(<CompleteTask task={task} />);
    expect(wrapper).toContainExactlyOneMatchingElement('form')
  });
});
