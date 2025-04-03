import React from "react";
import "./AboutPage.css";
import image from "../../assets/images/cinema.avif";

const AboutPage = () => {
  return (
    <div className="image-containerr">
      <img src={image} alt="Movies" className="imagee" />
      <div className="overlayy"></div>
      <div className="textt">
        <h1 className="text-titlee">“Movies Master”</h1>
        <p className="text-descriptionn">
          The Movies Master network includes 9 cinemas, 50+ screens, and 5000+
          seats. It is equipped with a digital projection system capable of
          displaying high-definition 3D content and high-quality cinema screens.
          It also features enhanced brightness and precise “Enhanced 4K Barco”
          imaging. All of these and other factors allow for the best quality
          movie screenings. The "Platinum Movie Suites" concept applied by the
          Movies Master cinema network provides viewers with the opportunity to
          watch movies in luxurious, high-comfort Italian and Spanish leather
          chairs that fully recline, while also ordering food and drinks during
          the movie. Additionally, the cinema has 6 glass mini Skybox halls
          located on the upper floors of the halls, with seating for 6 to 12
          people. Viewers can enjoy watching films in comfortable seats equipped
          with individual lighting and gadget charging devices. Access to each
          Skybox hall is possible by lift. To enhance your movie experience,
          there are two VIP DIAMOND halls, equipped with large, comfortable,
          automatic reclining seats with footrests and specially installed
          tables for VIP guests. All seats are spaced apart, creating a
          comfortable environment. In the last rows, there are comfortable sofas
          resembling home settings. Additionally, Movies Master has introduced
          Dolby Atmos technology in Azerbaijan for the first time. Dolby Digital
          Atmos technology allows sound effects to be placed and moved anywhere
          in the cinema. This allows filmmakers to elevate the sound experience
          to a new level, placing viewers at the center of the action. Also, the
          4DX format is applied exclusively in Movies Master cinemas. This
          innovative 4DX cinema technology enhances the visual effects of
          fast-paced blockbusters and horror films with additional special
          effects such as movement, rotation, seat vibrations, water droplets,
          wind, lightning, snow, soap bubbles, and scents.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
