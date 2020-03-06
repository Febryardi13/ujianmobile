import React from 'react';
import HomeIcon from './homeIcon';
import CardResto from './cardresto';
import { View, Text, StyleSheet, Platform, FlatList, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { getIsiListPost, getRestaurantDetails } from '../redux/actions';

class Home extends React.Component {
    componentDidMount() {
        this.props.getIsiListPost()
    }

    restaurantItemPress = (resto) => {
        this.props.getRestaurantDetails(resto)
        this.props.navigation.navigate('RestaurantDetails')
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Header
                    rightComponent={{ 
                        text: `Haaiiii,${this.props.user.username}`, 
                        style: { color: 'white', fontSize: 18, fontWeight: '700' } 
                    }}
                    leftComponent={{ 
                        icon: 'ticket-account', 
                        color: 'white',
                        type: 'material-community'
                    }}
                    containerStyle={{
                        backgroundColor: 'tomato',
                        justifyContent: 'space-around',
                        elevation: 2,
                        marginTop: Platform.OS === 'ios' ? 0 : - 25
                    }}
                    rightContainerStyle={{
                        flex: 3
                    }}
                />
                <View style={{
                    flexDirection:'row',
                    flexWrap:'wrap',
                    paddingTop:10 
                }}>
                    <HomeIcon icons={'credit-card'} types={'entypo'} name={'Credit'}/>
                    <HomeIcon icons={'food-variant'} types={'material-community'} name={'Variant'} />
                    <HomeIcon icons={'food-fork-drink'} types={'material-community'} name={'Recipe'}/>
                    <HomeIcon icons={'location-pin'} types={'entypo'} name={'Location'}/>
                    <HomeIcon icons={'shopping-cart'} types={'font-awesome'} name={'Cart'}/>
                    <HomeIcon icons={'local-pizza'} types={'material'} name={'Pizza'}/>
                    <HomeIcon icons={'hamburger'} types={'material-community'} name={'Burger'}/>
                    <HomeIcon icons={'more-horizontal'} types={'feather'} name={'More'}/> 
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center'
    }
})

const mapStateToProps = ({ homelist, user }) => {
    return {
        homelist,
        user
    }
}

export default connect(mapStateToProps, { getIsiListPost, getRestaurantDetails })(Home);