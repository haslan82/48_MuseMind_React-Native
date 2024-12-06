import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ThemeColors } from '../../theme/colors'
import { Add } from 'iconsax-react-native'

const FloatActionButton = (props) => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
        <Add size={32} color={ThemeColors.black} />
    </TouchableOpacity>
  )
}

export default FloatActionButton

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 40,
      right: 20,
      backgroundColor: ThemeColors.green,
      borderRadius: 50,
      width: 80,
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      padding: 10,
      elevation: 5,
    },
  
})