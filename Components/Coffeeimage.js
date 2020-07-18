import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg'; 



export default class Coffee extends Component {
    render() {
        return (
            <View style={styles.coffeeStyle}>
                <Svg style={ { width: '100%', height: '100%' } } viewBox="0 0 470 470"> 
                    <Path fill="#ff5733" d="M464,432h-32V128h32c4.418,0,8-3.582,8-8C471.925,53.757,418.243,0.075,352,0H144C77.757,0.075,24.075,53.757,24,120
                    c0,4.418,3.582,8,8,8h32v32H16c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h48v224H32c-4.418,0-8,3.582-8,8
                    c0.026,22.08,17.92,39.974,40,40h368c22.08-0.026,39.974-17.92,40-40C472,435.582,468.418,432,464,432z M40.304,112
                    C44.547,57.855,89.689,16.063,144,16h208c54.311,0.063,99.453,41.855,103.696,96H40.304z M343.552,384H368
                    c22.091,0,40-17.909,40-40c0-22.091-17.909-40-40-40h-24v-8c0-4.418-3.582-8-8-8H160c-4.418,0-8,3.582-8,8v80
                    c0.005,21.77,9.879,42.363,26.848,56H80V208h48c4.418,0,8-3.582,8-8v-8h48.64c3.973,27.527,27.547,47.967,55.36,48h16
                    c30.913-0.035,55.965-25.087,56-56v-56h104v304h-98.848C331.936,420.106,341.424,402.855,343.552,384z M272,432h-48
                    c-30.913-0.035-55.965-25.087-56-56v-72h160v72C327.965,406.913,302.913,431.965,272,432z M344,368v-48h24
                    c13.255,0,24,10.745,24,24s-10.745,24-24,24H344z M128,160H80v-32h104v48h-48v-8C136,163.582,132.418,160,128,160z M200,184v-56
                    h96v56c-0.026,22.08-17.92,39.974-40,40h-16C217.92,223.974,200.026,206.08,200,184z M24,192v-16h96v16H24z M432,464H64
                    c-10.168-0.012-19.229-6.418-22.632-16h413.264C451.229,457.582,442.168,463.988,432,464z"></Path>
                <Path fill={this.props.shine || "#FFFFFF"} d="M200,376h-16c0.026,22.08,17.92,39.974,40,40v-16C210.745,400,200,389.255,200,376z"></Path>
                <Path fill={this.props.leftbutton || "#FFFFFF"} d="M264,40h-32c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8V48C272,43.582,268.418,40,264,40z
                    M256,72h-16V56h16V72z"></Path>
                <Path fill={this.props.middlebutton || "#FFFFFF"} d="M168,40h-32c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8V48C176,43.582,172.418,40,168,40z
                    M160,72h-16V56h16V72z"></Path>
                <Path fill={this.props.rightbutton || "#FFFFFF"} d="M360,40h-32c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8V48C368,43.582,364.418,40,360,40z
                    M352,72h-16V56h16V72z"></Path>
                </Svg>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    coffeeStyle: {
      padding: 20,
      width: 100,
      height: 100,
    }
});