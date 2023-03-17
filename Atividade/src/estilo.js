import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#4169E1'
    },
    gradienteBackground:{
        position:'absolute',
        left:0,
        right:0,
        top:0,
        height:300,
        alignItems:'center',
        justifyContent:'center'


    },
    Image:{
        height:200,
        width:200
    },
    box:{
        marginTop:200,
        padding:100,
        alignItems:'center',
        borderRadius:'5',
        height:400,
        width:"85%",
        backgroundColor:'white'
    },

    input:{
        borderRadius:5,
        width:'85%',
        marginLeft:4,
        padding:25,
        borderWidth:2
    }

})

export default estilo;