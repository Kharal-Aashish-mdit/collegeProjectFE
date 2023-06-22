import React from "react";
import MainWrapper from "../../wrapper/Main";
import { Text, Title } from "@mantine/core";

const AboutPage = () => {
  return (
    <MainWrapper>
      <div className="p-8 gap-4 grid justify-items-center">
        <Title color="cyan">Yatru: Room Recommendation System</Title>
        <Text className="px-48">
          In this project, we developed an online hotel room finder using a
          structured approach. The project aims to provide users with a
          convenient and efficient way to search for hotel rooms. This project
          adheres to the ideology and aims to provide accessibility and facility
          in the online hotel room finding. This system offers a recommendation
          system for hotel rooms to select the most appropriate hotel room in
          the area based on a user's preferences. This project attempts to
          utilize the software engineering principles in the essence. <br /> The
          platform is developed using cutting-edge technologies such as Node.js,
          Typescript, and React etc. Additionally, it offers recommendation
          tools that let users find hotels based on their preferences and book a
          room from the recommended list if it's a good fit. The platform uses
          advanced algorithms such as cosine similarity to provide accurate
          recommendations to its users.
        </Text>
        <Title color="cyan" order={2}>
          Project Created By:
        </Title>
        <ul className="flex gap-4 list-none font-semibold">
          <li>Aashish Kharal</li>
          <li>Nripesh Neupane</li>
          <li>Samrat Karki</li>
        </ul>
      </div>
    </MainWrapper>
  );
};

export default AboutPage;
