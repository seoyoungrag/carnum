/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, StatusBar } from "react-native";

import Camera from "react-native-openalpr";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textContainer: {
    position: "absolute",
    top: 100,
    right: 50,
    bottom: 0
  },
  text: {
    textAlign: "center",
    fontSize: 20
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  overlay: {
    position: "absolute",
    padding: 16,
    alignItems: "center"
  },
  topOverlay: {
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 255, 0, 0.4)",
    alignItems: "center"
  },
  bottomOverlay: {
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "rgba(255,0,0,0.4)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default class AwesomeProject extends React.Component {
  constructor(props) {
    super(props);

    this.camera = null;

    this.state = {
      camera: {
        aspect: Camera.constants.Aspect.fill
      },
      plate: "Scan a plate"
    };
  }

  onPlateRecognized = ({ plate, confidence }) => {
    if (confidence > 90) {
      this.setState({
        plate
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar animated hidden />
        <Camera
          ref={cam => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={this.state.camera.aspect}
          captureQuality={Camera.constants.CaptureQuality.medium}
          country="us"
          onPlateRecognized={this.onPlateRecognized}
          plateOutlineColor="#ff0000"
          showPlateOutline
          torchMode={Camera.constants.TorchMode.off}
          touchToFocus
        />
        <View style={[styles.overlay, styles.topOverlay]} />
        <View style={[styles.overlay, styles.bottomOverlay]} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{this.state.plate}</Text>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent("AwesomeProject", () => AwesomeProject);
