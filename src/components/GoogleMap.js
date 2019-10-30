import React, {Component, createRef} from 'react';


createGoogleMap = () => 
new window.google


class GoogleMap extends Componenent {

    get googleMapDiv(){
        return document.getElementById("google-map")

    }

    googleMapRef = createRef()

    render() {
        return (
            <div 
            id = "google-map"
            ref = {this.googleMapRef}
            style = {{width: '400px', height: '300px'}}
            />
        )
    }
}