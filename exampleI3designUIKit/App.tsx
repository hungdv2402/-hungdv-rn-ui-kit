import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import I3BottomSheet from './src/components/bottomSheet';
import I3Button from './src/components/button';
import I3Card from './src/components/card';
import I3SquareInputRow from './src/components/inputs/squareInputRow';
import I3TextInput from './src/components/inputs/textInput';
import I3RadioButtonList from './src/components/radioButtonList';
import SizeBox from './src/components/sizeBox';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('2');
  const [textInput, setTextInput] = useState('');
  const [input, setInput] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const handleOnPress = () => {
    setVisible(true);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingHorizontal: 16, backgroundColor: '#e5e5e5' }}>
        <SizeBox height={24} />

        <I3Card color="lightpink">
          <I3TextInput label="Email" value={textInput} onChangeText={setTextInput} />
        </I3Card>

        <SizeBox height={24} />
        <I3Button
          label="Submit"
          onPress={handleOnPress}
          disabled={false}
          secondaryType
          textStyle={{ color: 'blue' }}
          buttonStyle={{ borderColor: 'blue', backgroundColor: 'orange' }}
        />
        <SizeBox height={40} />

        <I3RadioButtonList
          value={value}
          onSelect={setValue}
          data={[
            { label: 'Option 1', id: '1' },
            { label: 'Option 2', id: '2' },
            { label: 'Option 3', id: '3' },
          ]}
        />
        <SizeBox height={40} />

        <I3SquareInputRow
          value={input}
          setValue={setInput}
          isError={error}
          setError={setError}
          quantity={6}
        />

        <I3BottomSheet useSwipeDown title="title" visible={visible} closeModal={() => setVisible(false)}>
          <Text>Bottom Sheet</Text>
          <Text>Bottom Sheet</Text>
          <Text>Bottom Sheet</Text>
          <Text>Bottom Sheet</Text>
          <Text>Bottom Sheet</Text>
        </I3BottomSheet>

        {/* <I3AlertModal
          title='title'
          subTitle='subTitle'
          visible={visible}
          positiveText='positiveText'
          negativeText='negativeText'
          onCancel={() => setVisible(false)}
          onSubmit={() => setVisible(false)}
        /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
