import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    background: {
        backgroundColor: '#14110f',
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 35,
        color: 'white',
        fontWeight: 'bold',
      },
      text: {
        fontSize: 18,
        color: 'white',
      },
      text2: {
        fontSize: 13,
        color: 'white',
      },
      button:{
        backgroundColor: '#1c1c1b',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 120,
        paddingRight: 120,
        margin: 6,
      },
      button2:{
        backgroundColor: '#1c1c1b',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 26,
        paddingRight: 26,
        margin: 6,
      },
      btn:{
        alignItems: "center",
        flexDirection: 'row',
      },
      cenario:{
        backgroundColor: "#1c1c1b",
        width: 140,
        height: 150,
        marginBottom: 10,
        marginRight: 20,
        alignItems: 'center',
      },
      cenarios:{
        alignItems: "center",
        flexDirection: "row",
      },
      save:{
        backgroundColor: "#1c1c1b",
        width: 320,
        height: 60,
        marginBottom: 10,
      },
    
});

export default estilos