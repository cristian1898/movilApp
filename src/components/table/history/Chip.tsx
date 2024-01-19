import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Chip } from 'react-native-paper';

const ChipHistory: React.FC<{
  listHistory: string[];
}> = ({ listHistory }) => {
  const [newList, setNewList] = useState<string[]>(
    listHistory ? Array.from(new Set(listHistory)) : [],
  );
  useEffect(() => {
    setNewList(Array.from(new Set(listHistory)));
  }, [listHistory]);
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {newList.length
            ? newList.map((item: string, index: number) => (
              <Chip
                key={index}
                icon="information"
                style={{
                  marginHorizontal: 0,
                  marginRight: 5,
                }}
                mode="outlined">
                {item}
              </Chip>
            ))
            : null}
        </View>
      </ScrollView>
    </View>
  );
};

export default ChipHistory;
