import React from "react";

import { PageHeading, RaveReviewDisplay } from "../components";

import "../styles/RaveReviews.css";

const reviews = [
  {
    firstName: "Alana ",
    lastName: "Andrews ",
    role: "Bride",
    rating: 5,
    feedback:
      "I absolutely loved my trip here, and I wasn't expecting to find my dress the first time I went to try them on! We picked out a bunch that fit my style really well, but managed to overlook one until our consultant brought it over to see if I was even interested! It was even in the same collection/designer as I had previously expressed that I loved, so I really appreciated how much she listened and was able to gauge where I was at. I'm not super emotional, and didn't think I'd cry but none of us could help it and I just had a great experience there and felt awesome the whole time. I can't wait to come back when my dress gets in!",
    publish: true,
    datePublished: "July 2023",
  },
  {
    firstName: "Jack",
    lastName: "Mehoff",
    role: "Mother of Bride",
    rating: 5,
    feedback:
      "Maddie was a great help in finding my Mother of the bride dress. Very personable and attentive. Thank you!!",
    publish: false,
    datePublished: "July 2023",
  },
  {
    firstName: "Christina ",
    lastName: "Ney ",
    role: "Bride",
    rating: 5,
    feedback:
      "Stating the obvious, I know most of the girls down at Zazous' being in the wedding industry myself! I went in wanting an idea of type and style of dress I would like. Not engaged but starting to look at rings and want to plan ahead so I don't have a long engagement. Thank you girls for making em feel so welcome and excited about being a bride myself! I loved being able to try on so many different styles and really narrow down a look I liked! Can't wait to come back soon as I start actually looking for THE dress!",
    publish: true,
    datePublished: "May 2023",
  },
  {
    firstName: "Heather",
    lastName: "Banker",
    role: "Bride",
    rating: 5,
    feedback:
      "Thee absolute best experience. Better than I could have ever imagined. I had so much fun and haven’t stopped smiling since. You are what wedding dress shopping dreams are made of!!!",
    publish: true,
    datePublished: "July 2020",
  },
  {
    firstName: "Zarabeth ",
    lastName: "Montgomery",
    role: "Bride",
    rating: 5,
    feedback:
      "The ladies here were wonderful and kind! It was last minute thing for us and just did a walk-in. They were so caring and two dresses in I found my dress and they gave me so much advice and opinions. It was an amazing experience! 10/10 would recommend ????",
    publish: true,
    datePublished: "August 2021",
  },
  {
    firstName: "Bryce Madison",
    lastName: "Wirtz ",
    role: "Bride",
    rating: 5,
    feedback:
      "My wedding dress experience at Zazou’s was so great! Everything was absolutely perfect. I found my dream dress and cried like a baby! My consultant was Maddie and she was amazing!! She definitely made my experience one that I will never forget and the rest of the team was so warm, friendly and very professional. Thank you so much Zazou’s team!!",
    publish: true,
    datePublished: "March 2023",
  },
  {
    firstName: "Skyler",
    lastName: "Kennedy",
    role: "Bride",
    rating: 5,
    feedback:
      "I had such a great experience! It was my first time shopping for a wedding dress and I came in really nervous, not knowing what to expect, but my consultant was amazing! She made me very comfortable and was extremely encouraging and helped me find my perfect style!",
    publish: true,
    datePublished: "March 2023",
  },
  {
    firstName: "Michelle",
    lastName: "Schmidt",
    role: "Bride",
    rating: 5,
    feedback:
      "What an amazing experience we had at Zazou's. I would highly recommend soon to be brides to check them out. Fun, helpful and professional team! I'm so thankful I was able to find my dress locally. I was excited to day yes to my dress at Zazou's.",
    publish: true,
    datePublished: "March 2023",
  },
  {
    firstName: "Maggie",
    lastName: "Warner",
    role: "Bride",
    rating: 5,
    feedback:
      "I had a wonderful experience finding my wedding dress at Zazou’s. Our consultant was attentive to my vision for a dress, and used her expertise to guide me toward a dress that fit all of my criteria (and more). She also gave my party space for us to freely give opinions and I didn’t feel too crowded. A beautiful space and a great experience!",
    publish: true,
    datePublished: "March 2023",
  },
  {
    firstName: "Callie",
    lastName: "Brown",
    role: "Bride",
    rating: 5,
    feedback:
      "Great experience! Just started shopping and Maddie did a great job helping pick dresses for me and getting me in and out of them gracefully. :)",
    publish: true,
    datePublished: "March 2023",
  },
  {
    firstName: "Mollie ",
    lastName: "Hammer ",
    role: "Bride",
    rating: 5,
    feedback:
      "Maddie was amazing! She asked important questions regarding the vibe and feel of my wedding and gave sincere and kind advice. I felt so beautiful throughout the appointment. I would 100% recommend Zazou's for any brides looking for their perfect dress!",
    publish: true,
    datePublished: "March 2023",
  },
  {
    firstName: "Laura",
    lastName: "Behnke",
    role: "Bride",
    rating: 5,
    feedback:
      "Maddie was very helpful. Although I already have a dress that will work better than the discounted dresses tried on, Maddie also presented options of accessories that could make what I have be my special dress. She was friendly and made me feel welcome and that she valued my time. I’d recommend her.",
    publish: true,
    datePublished: "February 2023",
  },
  {
    firstName: "Sadie ",
    lastName: "Holmes ",
    role: "Bride",
    rating: 5,
    feedback:
      "Truly couldn’t have asked for a better experience! Maddy was amazing and made me feel so special and beautiful!! Highly recommend finding your dream dress at Zazou’s.",
    publish: true,
    datePublished: "February 2023",
  },
  {
    firstName: "Sadie ",
    lastName: "Holmes ",
    role: "Bride",
    rating: 5,
    feedback:
      "Super kind, and we’re really helpful. So many pretty dresses. 100% recommend.",
    publish: false,
    datePublished: "February 2023",
  },
  {
    firstName: "Dawn ",
    lastName: "Galle ",
    role: "Bride",
    rating: 5,
    feedback:
      "I had an amazing experience. Being a plus size bride to be I was worried that nothing would fit me. I was pleasantly surprised at the large selection of plus size wedding dresses. They have a stage with mirrors all around so I could see the dress from every angle. We loved Ali, she was so helpful and really listened to what I wanted in a dress. I walked out with my dream dress!! I would definitely recommend Zazous, especially if you are looking for larger sizes. You don't have to settle if you are plus sized. This is the place to find your dress!!",
    publish: true,
    datePublished: "February 2023",
  },
  {
    firstName: "Melissa ",
    lastName: "Gehl ",
    role: "Bride",
    rating: 5,
    feedback:
      "Great selection in prom dresses. So many colors to chose from. Awesome help from the workers and helped me chose the perfect dress.",
    publish: true,
    datePublished: "February 2023",
  },
  {
    firstName: "Clarissa ",
    lastName: "Smith ",
    role: "Bride",
    rating: 5,
    feedback:
      "I loved my experience at Zazous!! I didn't feel any pressure to pick a dress. My consultant was amazing and knew exactly what dress I would want. :)",
    publish: true,
    datePublished: "January 2023",
  },
  {
    firstName: "Danielle ",
    lastName: "Felderman ",
    role: "Bride",
    rating: 5,
    feedback:
      "I had a great experience, everyone was so great to work with. They gave honest feedback and really knew what they were talking about. They definitely made saying yes to the dress fun, easy and enjoyable!! Can’t say thank you enough!",
    publish: true,
    datePublished: "January 2023",
  },
];

const RaveReviews = () => {
  return (
    <div className="container">
      <PageHeading name={"Rave Reviews"} animationDirection={""} />
      <p className="rave-reviews-text rave-reviews-animation rave-reviews-animation-1">
        We love to get feedback from our clients so we can use that to improve
        our business going forward! Here are just some of a few rave reviews
        that we've gotten from clients about their experience with Zazou's.
      </p>
      <div className="rave-reviews-container">
        {reviews.map((review, index) => (
          <RaveReviewDisplay
            key={index}
            review={review}
            style={{ "--i": index }}
          />
        ))}
      </div>
    </div>
  );
};

export default RaveReviews;
