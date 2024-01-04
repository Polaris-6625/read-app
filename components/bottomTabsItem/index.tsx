import React from 'react';
import type { IndexMenuItemType } from '../../types/type';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    icon: {
        width:  Dimensions.get('window').width / 14,
        height: Dimensions.get('window').width / 14,
        textAlign: 'center',
        marginLeft: 4
    }
})
const BottomTabsItem: React.FC<{data: IndexMenuItemType}> = (props) => {
    return (
        <View>
            <Image source={props.data.icon} style={styles.icon}>

            </Image>
            <Text style={{fontSize: 20}}>
                {props.data.name}
            </Text>
        </View>
    )
}

export default BottomTabsItem;