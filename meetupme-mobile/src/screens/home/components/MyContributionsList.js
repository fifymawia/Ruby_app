import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles/MyContributionsList';

const MyContributionsList = ({ meetups }) => (
  <View style={styles.root}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}> Group Conrtibutions</Text>
    </View>
    <View style={styles.contentContainer}>
      <ScrollView horizontal>
        {meetups.map((meetup, i) => (

          // eslint-disable-next-line react/no-array-index-key
          <View key={i} style={styles.contributionCard}>

            <View style={styles.contributionCardTop}>

              <Text style={styles.contributionCardTitle}>
                {meetup.title}
              </Text>
            </View>
            <View style={styles.contributionCardBottom}>
              <Text style={styles.contributionCardMetaName}>
                {meetup.group.name}
              </Text>
              <Text style={styles.contributionCardDate}>
                  oct 31 2019
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

    </View>
  </View>
);
export default MyContributionsList;