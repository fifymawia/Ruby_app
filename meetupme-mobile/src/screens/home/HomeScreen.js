import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MyContributionsList } from './components';
import { MeetupApi } from '../../../constants/api';
import styles from './styles/HomeScreen';
import { LoadingScreen } from '../../commons';

const meetupApi = new MeetupApi();

class HomeScreen extends Component {
  static defaultProps = {
    meetupApi,
  }
    state = {
      loading: false,
      meetupApi: [],
    }
    async componentDidMount() {
      this.setState({ loading: true });
      const meetups = await this.props.meetupApi.fetchGroupMeetups();
      // this.setState({ loading: false, meetups });
      setTimeout(() => this.setState({ loading: false, meetups }), 2000);
    }
    render() {
      if (this.state.loading) {
        return (
          <LoadingScreen />
        );
      }
      return (
        <View style={styles.root}>
          <View style={styles.topContainer}>
            <Text>HomeScreen</Text>
          </View>
          
          <View style={styles.bottomContainer}>
            <MyContributionsList meetups={this.state.meetups} />
          </View>
        </View>
      );
    }
}
export default HomeScreen;