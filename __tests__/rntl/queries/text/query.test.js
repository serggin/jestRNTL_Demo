import React from 'react';
import {View, Text} from 'react-native';
import {render} from 'react-native-testing-library';

describe('error demo', () => {
  test('test3 Text content', () => {
    const mock = {
      content: 'Some test content',
      content2: 'Another test content',
      typo: 'testo',
    };
    const component = () => (
      <View>
        <Text>{mock.content2}</Text>
        <Text>{mock.content}</Text>
      </View>
    );
    const {queryAllByText, queryByText} = render(component());

    const q1 = queryByText('content');
    expect(q1).toBeNull();
    const q2 = queryByText(/content/);
    expect(q2).not.toBeNull();
    const q3 = queryAllByText(/content/);
    console.log(q3.length);
    expect(q3.length).toBe(2);
  });
});
