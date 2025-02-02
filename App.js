import React from 'react';
import {Text, Image, ScrollView} from 'react-native';
import Boats from './components/Boats';

const AllBoats = () => {
  return (
      <ScrollView>
        <Text></Text>
        <Text></Text>
        <Boats
            header="GetABoat - For Sale"

            title="Sea Ray 500 Sundancer"
            description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
            icon_name="sailboat"
            poster={require('./img/sea_ray.jpg')}
        />
        <Text></Text>
        <Text></Text>
        <Boats
            title="Four Winns Horizon 180"
            description="A sporty look and refined details truly set the Horizon 180 above all others."
            icon_name="sailboat"
            poster={require('./img/four_winns.jpg')}
        />
        <Text></Text>
        <Text></Text>
        <Boats
            title="Fipper 640 ST"
            description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
            icon_name="sailboat"
            poster={require('./img/flipper.jpg')}
        />
          <Boats
              title="Bayliner 175 Bowrider"
              description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
              icon_name="sailboat"
              poster={require('./img/bayliner.jpg')}
          />
          <Text></Text>
          <Text></Text>
          <Boats
              title="Fairline Targa 47"
              description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
              icon_name="sailboat"
              poster={require('./img/fairline.jpg')}
          />
          <Text></Text>
          <Text></Text>
          <Boats
              title="Princess V48"
              description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
              icon_name="sailboat"
              poster={require('./img/princess.jpg')}
          />
      </ScrollView>
  );
};

export default AllBoats
