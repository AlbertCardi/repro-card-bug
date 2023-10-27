import { useRouter } from 'expo-router';
import React, { useEffect, useMemo, useState } from 'react';
import { View, useWindowDimensions } from 'react-native';
import { Text } from 'react-native';
import { JoinStories, JoinStoriesCardView } from '@join-stories/react-native-widgets';
import CategoriesFilter from '../../components/CategoriesFilter';

const aliases = [
  'extramoments-foodies-fr-fr',
  'extramoments-kidsandfamily-fr-fr'
]

const Search = () => {
  const { width } = useWindowDimensions();
  const router = useRouter();
  const [selectedCommunity, setSelectedCommunity] = useState<any>(0);
  const communities = [
    {
      name: 'Foodies',
      id: 0,
    },
    {
      name: 'Family',
      id: 1,
    }
  ]

  useEffect(() => {
    JoinStories.init('TEAM_ID').then(() => {});
  }, []);

  return (
    <View>
      <View style={{ marginTop: 20}}>
        <CategoriesFilter
          categories={communities}
          categoryIdSelected={selectedCommunity}
          onClickCategory={setSelectedCommunity}
          checkIsItemSelected={(community: any, currentCommunitySelected: number) => {
            return community?.id === currentCommunitySelected;
          }}
          getItemData={(community: any) => {
            return {
              name: community.name,
              id: community.id,
            };
          }}
          shortType="articles"
        />
        <View style={{marginTop: 16}}>
          <JoinStoriesCardView
            requestTimeoutInterval={13}
            alias={aliases[selectedCommunity]}
            column={2}
            labelColor={"#FFFFFF"}
            labelSize={14}
            fontName="Barlow-Bold"
            withLabel
            playerVerticalAnchor="topWithSafeArea"
            playerShowShareButton={false}
            playerClosingButton
            playerProgressBarDefaultColor="#FFFFFF"
            playerProgressBarFillColor="#DE2426"
            playerProgressBarThickness={4}
            playerProgressBarRadius={8}
            hasPlayButton={false}
            cardElevation={0}
            cardSize={(width - 40) / (2 * 0.5625)} //TODO Remove when join has fixed their issue with first render
            horizontalPadding={16}
          />
        </View>
      </View>
    </View>
  );
};

export default Search;
