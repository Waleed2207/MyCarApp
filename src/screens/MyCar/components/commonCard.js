import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const CommonCard = ({
  isNew,
  count,
  newColor,
  title,
  icon,
  bgColor,
  onClick,
}) => {
  return (
    <View style={{ width: '100%', height: 50, justifyContent: 'center' }}>
      <TouchableOpacity
        style={{
          width: '90%',
          shadowRadius: 10,
          borderRadius: 8,
          height: 50,
          flexDirection: 'row',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
        //  backgroundColor: bgColor ? bgColor : 'rgba(246, 232, 232, 0.3)',
        }}
        onPress={() => {
          onClick();
        }}>
          {count !== undefined && (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {count !== 0 ? (
                  <View
                    style={{
                      backgroundColor: 'blue',
                      width: 25,
                      height: 25,
                      textAlign: 'center',
                      alignItems: 'center',
                      margin: 4,
                      borderRadius: 25 / 2,
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: '600',
                        fontSize: 16,
                      }}>
                      {count}
                    </Text>
                  </View>
                ) : (
                  <View/>
                )}
              </View>
            )}

        <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent: 'space-between' }}>
          {title && (
            <Text
              style={{
                marginRight: 10,
                fontWeight: '300',
                color: 'white',
                fontSize: 16,
              }}>
              {title}
            </Text>
          )}
          {icon && (
            <Image
              source={icon}
              style={{
                width: 24,
                height: 24,
                marginRight: 10,
                tintColor: 'white',
              }}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CommonCard;
