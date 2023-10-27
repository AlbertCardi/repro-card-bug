import React from 'react';
import {
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';

interface Props<T1, T2> {
  categories: T1[];
  categoryIdSelected?: T2;
  onClickCategory: (categoryId: T2 | undefined) => void;
  checkIsItemSelected: (
    item: T1 | undefined,
    categoryIdSelected: T2 | undefined,
  ) => boolean;
  getItemData: (item: T1) => { id: T2; name: string | null };
  getTotalCategory?: (item: T1 | undefined) => number;
  showAll?: boolean;
  showAllIcon?: boolean;
  showTotal?: boolean;
  shortType: string;
}

/*
  checkIsItemSelected -> should return true if the item is currently active
  getItemData -> should return an object containing id and name
  getTotalCategory -> should return the total of items for the given category
*/

function CategoriesFilter<T1, T2>({
  categories,
  categoryIdSelected,
  onClickCategory,
  shortType,
  checkIsItemSelected,
  getItemData,
  getTotalCategory,
  showAll,
  showAllIcon,
  showTotal,
}: Props<T1, T2>) {
  const renderCategory = (index: number, item?: T1) => {
    const itemData = item ? getItemData(item) : undefined;
    const countItemCategory =
      showTotal && getTotalCategory ? getTotalCategory(item) : 0;
    const isSelected = checkIsItemSelected(item, categoryIdSelected);
    const isDefaultSelected = !item && !categoryIdSelected;
    const testID = item ? index : 'first';

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 16,
            backgroundColor: isSelected || isDefaultSelected ? 'black' : 'white',
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 8,
        }}
        onPress={() => onClickCategory(itemData ? itemData.id : undefined)}
        key={index}
        testID={`${shortType}.category_carousel.category_${testID}`}
      >
        <Text
        style={{
            color: isSelected || isDefaultSelected ? 'white' : 'black',
        }}
          testID={`${shortType}.category_carousel.${testID}.text`}
        >
          {itemData?.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
    style={{
        flexDirection: 'row',
    }}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollView}
      testID={`${shortType}.category_carousel`}
    >
      {showAll && renderCategory(0)}
      {categories.map((category, index) => renderCategory(index + 1, category))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingLeft: 16,
  },
});

export default CategoriesFilter;
