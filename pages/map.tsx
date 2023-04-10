// import React from "react";
// import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";

// export default function Map() {
//   interface Props {
//     latitude: number;
//     longitude: number;
//   }

//   interface State {
//     activeMarker: any;
//     selectedPlace: any;
//   }

//   class MapComponent extends React.Component<Props, State> {
//     state = {
//       activeMarker: null,
//       selectedPlace: null,
//     };

//     onMarkerClick = (props: any, marker: any, e: any) => {
//       this.setState({
//         activeMarker: marker,
//         selectedPlace: props,
//       });
//     };

//     render() {
//       return (
//         <GoogleMap
//           initialCenter={{
//             lat: this.props.latitude,
//             lng: this.props.longitude,
//           }}
//           zoom={14}
//         >
//           <Marker
//             onClick={this.onMarkerClick}
//             name={"Current location"}
//             position={{ lat: this.props.latitude, lng: this.props.longitude }}
//           />
//           <InfoWindow
//             marker={this.state.activeMarker}
//             visible={!!this.state.activeMarker}
//           >
//             <div>
//               <h3>
//                 {this.state.selectedPlace && this.state.selectedPlace.name}
//               </h3>
//             </div>
//           </InfoWindow>
//         </GoogleMap>
//       );
//     }
//   }

//   function MyPage() {
//     const latitude = 37.7749;
//     const longitude = -122.4194;

//     return (
//       <div>
//         <h1>My Page</h1>
//         <MapComponent latitude={latitude} longitude={longitude} />
//       </div>
//     );
//   }
//   return <MyPage />;
// }

export default function Map() {
  return <div>Hello</div>;
}
