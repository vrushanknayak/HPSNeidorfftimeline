  var config = {
    style: 'mapbox://styles/vnayakft/cl1y1oh5z000g16mktd5a1vcb',
    accessToken: 'pk.eyJ1Ijoidm5heWFrZnQiLCJhIjoiY2wwODljbXozMDE3NTNicGgxNzlsM2IyZyJ9.aRvE3XODJIuaezZHa8ApIA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    //title: 'Centene: The Fortune 50 Payer Michael Neidorff Built',
    //subtitle: 'Health Payer Specialist’s latest data visualization takes a deep look at what the company’s former chief executive, who recently passed away, built over a quarter century. Scroll down the page to start the journey.',
    //byline: 'By Vrushank Nayak',
    //footer: 'Source: Company filings',
    chapters: [
      {
          id: 'Main',
          alignment: 'center',
          hidden: false,
          title: 'Centene: The Fortune 50 Payer Michael Neidorff Built',
          //subtitle: 'Health Payer Specialist’s latest data visualization takes a deep look at what the company’s former chief executive, who recently passed away, built over a quarter century. Scroll down the page to start the journey.',
          //byline: 'By Vrushank Nayak',
          //image: './path/to/image/source.png',
          description: 'Health Payer Specialist’s latest data visualization takes a deep look at what the company’s former chief executive, who recently passed away, built over a quarter century. Scroll down the page to start the journey.',
          byline: 'By Vrushank Nayak',
          date: 'Published on April 18, 2022.',
          image: 'images/centene.jpg',
          //image: 'images/headquarter.jpeg',
          location: {
            center: [-89.91488, 39.23437],
            zoom: 7.54,
            pitch: 47.00,
            bearing: 30.40
          },
          mapAnimation: 'flyTo',
          rotateAnimation: true,
          callback: '',
          onChapterEnter: [],
          onChapterExit: []
      },
        {
            id: 'first-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Early Years',
            //image: 'images/neidorff.jpg',
            description: 'The company now known as Centene was founded in Wisconsin 1984 as Family Hospital Physician Associates. Michael Neidorff was appointed as CEO in 1995, when the company expanded to Indiana. In 1997, the company rebranded as Centene Corporation as moved its corporate headquarters to St. Louis, Mo.',
            location: {
              center: [-97.86655, 40.17863],
              zoom: 4.06,
              pitch: 45.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              //   {
              //       layer: 'state-label',
              //       opacity: 1,
              //       duration: 5000
              //   }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Second-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Going Public',
            //image: './path/to/image/source.png',
            description: 'In 2001, the company went public with $327 million in revenue and 235,000 members. At this point, the company was operating in Wisconsin, Indiana and Texas. Two years later, it acquired Cenpatico, a behavioral health services company.',
            location: {
              center: [-89.82560, 44.54786],
              zoom: 6.72,
              pitch: 63.50,
              bearing: 164.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'second-chapter',
            alignment: 'left',
            hidden: false,
            title: '$1 Billion Moves ',
            //image: './path/to/image/source.png',
            description: 'The company expanded into Ohio with its Buckeye Health Plan in the government-sponsored Medicaid program in 2004, when it posted $1 billion in revenue. In 2006, it acquired both Opticare, a vision management services company, and U.S. Script, a pharmacy benefit management firm.',
            location: {
              center: [-82.70521, 40.47419],
              zoom: 7.16,
              pitch: 0.50,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-chapter',
            alignment: 'left',
            hidden: false,
            title: 'The Journey South',
            //image: './path/to/image/source.png',
            description: 'Towards the end of the 2010s the company had expanded further to Missouri, Kansas, Arizona, Florida and Massachusetts. Revenue stood at $4.1 billion in 2009.',
            location: {
              center: [-92.71680, 38.14321],
              zoom: 6.96,
              pitch: 69.00,
              bearing: -115.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Early 2010s',
            //image: './path/to/image/source.png',
            description: 'By 2013, the company had moved into California, Illinois, Mississippi and New Hampshire with revenue bulging to $10 billion with 2.7 million members. Affordable Care Act exchanges opened in 2014 and the company began to build a major presence in the new program. By 2016, the company’s revenue had quadrupled again to $40.6 billion and by the end of the decade that figure shot to $74.6 billion.',
            location: {
              center: [-119.38310, 37.17088],
              zoom: 6.38,
              pitch: 69.00,
              bearing: 64.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Now',
            //image: './path/to/image/source.png',
            description: 'Before Neidorff’s passing earlier this month, the company had expanded its footprint to such states as New York, Pennsylvania, Michigan, Oregon, Nebraska, Nevada, and Maryland. That was driven, in part, by its $17 billion acquisition of WellCare, which closed in early 2020. Revenue stood at $126 billion last year and the company managed over 26 million enrollees.',
            location: {
              center: [-75.80716, 42.79227],
              zoom: 6.88,
              pitch: 70.35,
              bearing: -80.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Tough Final Year',
            //image: './path/to/image/source.png',
            description: 'The final year of Neidorff’s tenure proved a difficult one for the company as it attracted both an activist investor, pushing for better margins and a new board, as well as a series of fines from state regulators over its pharmacy benefits practices.',
            location: {
              center: [-90.19068, 38.64581],
              zoom: 10.30,
              pitch: 70.35,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

    ]

};
