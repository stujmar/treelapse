import { 
    altarWhiteSVG,
    altarColorSVG,
    barnWhiteSVG,
    barnColorSVG,
    mineWhiteSVG,
    mineColorSVG,
    wellWhiteSVG,
    wellColorSVG,
    siloWhiteSVG,
    siloColorSVG,
    starsWhiteSVG,
    starsColorSVG,
    scareCrowWhiteSVG,
    scareCrowColorSVG,
  } from "./storeSvgs";


export const inventory = [
    {
      name: "speed",
      alias: "Scarecrow",
      cost: [
        {
          amount: 1,
          resource: "acorns"
        }
      ],
      whiteSVG: scareCrowWhiteSVG(50),
      colorSVG: scareCrowColorSVG(50),
      description: "Scarecrow has watched the forest for eons, you now control the flow of time",
    },
    {
      name: "water",
      alias: "Well",
      cost: [
        {
          amount: 5,
          resource: "acorns"
        }
      ],
      whiteSVG: wellWhiteSVG(125),
      colorSVG: wellColorSVG(125),
      description: "Click trees in watering mode to help them grow. More water can be found in the well.",
    },
    {
      name: "wood",
      alias: "Barn",
      cost: [
        {
          amount: 10,
          resource: "acorns"
        }
      ],
      whiteSVG: barnWhiteSVG(70),
      colorSVG: barnColorSVG(70),
      description: "A barn is needed to store wood. Only older trees can be harvested for wood.",
    },
    {
      name: "seasons",
      alias: "Silo",
      cost: [
        {
          amount: 15,
          resource: "acorns"
        },
        {
          amount: 5,
          resource: "water"
        }
      ],
      whiteSVG: siloWhiteSVG(70),
      colorSVG: siloColorSVG(70),
      description: "A silo is needed to store crops through the winter. You now control the seasons",
    },
    {
      name: "stars",
      alias: "Observatory",
      cost: [
        {
          amount: 5,
          resource: "acorns"
        },
        {
          amount: 5,
          resource: "wood"
        }
      ],
      whiteSVG: starsWhiteSVG(70),
      colorSVG: starsColorSVG(70),
      description: "Plant stars in the sky at night to attract more critters.",
    },
    {
      name: "stone",
      alias: "Mine",
      cost: [
        {
          amount: 15,
          resource: "stars"
        },
        {
          amount: 15,
          resource: "wood"
        }
      ],
      whiteSVG: mineWhiteSVG(50),
      colorSVG: mineColorSVG(50),
      description: "Don't go down that mine, gnomes live there.",
    },
    {
      name: "altar",
      alias: "Sacrificial Altar",
      cost: [
        {
          amount: 10,
          resource: "stone"
        }
      ],
      whiteSVG: altarWhiteSVG(60),
      colorSVG: altarColorSVG(60),
      description: "The ground runs red with the blood of sacrificed gnomes. Great job.",
    },
  ];