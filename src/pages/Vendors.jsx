import React from "react";

import { VendorCard } from "../components";

import "../styles/VendorCard.css";

const Vendors = () => {
  const vendors = [
    {
      title: "Venues",
      items: [
        {
          name: "Best WesternPlus",
          link: "https://www.bestwestern.com/en_US.html",
        },
        {
          name: "Millwork Ballroom and Event Center",
          link: "https://www.facebook.com/millworkeventcenter/",
        },
        {
          name: "Dyersville Commercial Club",
          link: "https://www.commercialclubpark.com/",
        },
        {
          name: "Grand River Center",
          link: "https://www.grandrivercenter.com/",
        },
        {
          name: "Meadows Golf Course",
          link: "https://meadowsgolf.com/weddings/",
        },
        {
          name: "Stone Cliff Winery",
          link: "http://www.stonecliffwinery.com/banquet-bridal/",
        },
        {
          name: "National Mississippi River Museum & Aquarium",
          link: "https://www.rivermuseum.com/",
        },
        {
          name: "Hotel Julien Dubuque",
          link: "https://hoteljuliendubuque.com/weddings/",
        },
        {
          name: "7 Hills Event Center",
          link: "https://www.7hillseventcenter.com/",
        },
      ],
    },
    {
      title: "Photography",
      items: [
        {
          name: "Light Burst Photography",
          link: "https://lightburstphotography.com/",
        },
        {
          name: "Captured by Corbin Photography",
          link: "https://www.capturedbycorbin.com/",
        },
        {
          name: "Vanessa Irene Photography",
          link: "https://www.vanessairenephotography.com/",
        },
        {
          name: "Adrianna Joy Photography",
          link: "https://adriannajoyphotography.com/",
        },
        {
          name: "Christina Ney Photography",
          link: "https://christinaney.com/",
        },
        {
          name: "The Joy of Photography",
          link: "https://www.thejoyofphotography.biz/",
        },
      ],
    },
    {
      title: "Cakes & Yummy Treats",
      items: [
        {
          name: "Candle Ready Cakes",
          link: "https://candlereadycakes.com/",
        },
        {
          name: "Retro Cakes & Cupcravery",
          link: "https://www.facebook.com/retrocakesandcupcravery/",
        },
        {
          name: "Koppes Kreations",
          link: "https://koppeskreations.com/",
        },
        {
          name: "Baked. Cupcake Bakery & Cafe",
          link: "https://m.facebook.com/BakedCupcakeBakeryCafe",
        },
      ],
    },
    {
      title: "Music & Photo Booth",
      items: [
        {
          name: "Absolute Music",
          link: "https://absolutemusicdjs.com/",
        },
        {
          name: "Alexxus Entertainment",
          link: "https://www.alexxus.com/",
        },
        {
          name: "T's & J's Sound Productions",
          link: "https://www.tandjsoundsproductions.com/",
        },
      ],
    },
    {
      title: "Hair Salons",
      items: [
        {
          name: "PROvisions Salon ",
          link: "/vendors",
        },
        {
          name: "Blue Elements Salon & Spa",
          link: "/vendors",
        },
      ],
    },
    {
      title: "Florist",
      items: [
        {
          name: "New White Florist ",
          link: "https://www.whitefloristinc.net/",
        },
        {
          name: "HandPickd [just for you]",
          link: "https://handpickd4u.com/",
        },
      ],
    },
    {
      title: "Stationary",
      items: [
        {
          name: "Ink & Paper ",
          link: "/vendors",
        },
        {
          name: "Dubuque Advertiser",
          link: "https://dubuquetoday.com/",
        },
      ],
    },
    {
      title: "Officiant",
      items: [
        {
          name: "Dawn Goerdt",
          link: "/vendors",
        },
        {
          name: "Jess Farlow",
          link: "/vendors",
        },
      ],
    },
    {
      title: "Catering",
      items: [
        {
          name: "Kalmes'",
          link: "https://kalmesrestaurant.com/",
        },
        {
          name: "J&D Catering",
          link: "https://www.jdcateringservice.com/",
        },
        {
          name: "Catfish Charlie's",
          link: "https://catfishcharliesdubuque.com/",
        },
      ],
    },
    {
      title: "Transportation",
      items: [
        {
          name: "American Lady",
          link: "https://americanladycruises.com/",
        },
        {
          name: "Hangover Express",
          link: "https://thehangoverexpress.com/",
        },
        {
          name: "Trolleys of Dubuque",
          link: "http://www.trolleysofdbq.com/",
        },
      ],
    },
    {
      title: "Jewlery",
      items: [
        {
          name: "Doland Jewelers",
          link: "https://www.dolandjewelers.com/",
        },
        {
          name: "McCoy Jeweler",
          link: "https://www.mccoyjeweler.com/",
        },
        {
          name: "Shamrock Jewelers",
          link: "https://www.facebook.com/pages/Shamrock-Jewelers/142604062452741",
        },
      ],
    },
    {
      title: "Alterations",
      items: [
        {
          name: "Fadwa Alterations",
          link: "/vendors",
        },
        {
          name: "Heather Schuster",
          link: "/vendors",
        },
      ],
    },
    {
      title: "Entertainment",
      items: [
        {
          name: "Dreaming Allegiance ",
          link: "https://www.facebook.com/DreamingAllegiance/",
        },
        {
          name: "Lights! Camera! Selfie!",
          link: "https://www.facebook.com/SelfieIsMyHappiness/",
        },
        {
          name: "Adam’s Dance Connection",
          link: "https://www.adamsdanceconnection.com/",
        },
      ],
    },
  ];

  return (
    <div className="container">
      <h2
        className="recomendation-title d-flex justify-content-center"
        style={{ fontStyle: "italic", "--i": 1 }}
      >
        Recommendations
      </h2>

      <hr style={{ color: "var(--primary-color)" }} />
      <p className="recomendation-text d-flex justify-content-center">
        Need help finding a vendor? Here's our recommendations!
      </p>
      <div className="row justify-content-center">
        {vendors.map((vendor, index) => (
          <VendorCard key={index} {...vendor} cardIndex={index} />
        ))}
      </div>
    </div>
  );
};

export default Vendors;
