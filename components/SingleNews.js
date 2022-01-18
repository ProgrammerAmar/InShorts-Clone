import React from 'react'
import { View, Text ,StyleSheet, Dimensions,Image,ImageBackground,TouchableOpacity} from 'react-native'


const SingleNews = ({item,index}) => {
    
    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;


    return (
        <View style={{
            height: windowHeight,
            width: windowWidth,
            backgroundColor: '282c35'
        }}>
            <Image 
                source={{uri: item.urlToImage}} 
                style={{height:'45%' ,resizeMode:"cover" ,width: windowWidth}}
            />
            <View style={{...styles.description , backgroundColor: '#282c35'}}> 
                <Text style={{...styles.title,color: '#fff'}}>{item.title}</Text>
                <Text style={{...styles.content , color: '#fff'}}>{item.description}</Text>
                <Text style={{color: '#fff'}}>
                    Short By
                    <Text>
                        { item.author ?? ' unknown'}
                    </Text>
                </Text>
                <ImageBackground 
                    blurRadius={30}
                    style={styles.footer}
                    source={{url: item?.urlToImage}}
                >
                    <TouchableOpacity>
                        <Text style={{fontSize: 15, color: "#fff"}}>
                            `{item ?.content?.slice(0,45)}...`
                        </Text>
                        <Text style={{fontSize: 17 , fontWeight: 'bold' ,color: 'white'}}>
                            Read More
                        </Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    title :{
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 10,
        color: '#fff',
    },
    content:{
        fontSize: 18,
        paddingBottom: 10
    }
})

export default SingleNews
